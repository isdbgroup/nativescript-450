import {Component, OnDestroy} from "@angular/core";
import {PageRoute} from "nativescript-angular/router";
import {MapView, Marker, MarkerEventData, Position} from "nativescript-google-maps-sdk";
import {isNullOrUndefined} from "utils/types";
import "rxjs/add/operator/switchMap";
import {Page} from "ui/page";
import {BaseComponent} from "../base.component";
import {Router} from "@angular/router";
import {TNSPlayer} from 'nativescript-audio';
import * as permissions from "nativescript-permissions";
import {LocationService} from "../../services/location.service";
import {Location, LocationManager} from "location";

declare let android: any;

@Component({
    selector: "ns-map",
    moduleId: module.id,
    templateUrl: "map.component.html",
})
export class MapComponent extends BaseComponent implements OnDestroy {
    /** All known locations */
    private locations = [
        new NamedLocation(0, "/pukete", "Pukete Pa", -37.73705, 175.237474),
        new NamedLocation(1, "/kirikiriroa", "Kirikiriroa Pa", -37.782704, 175.28051),
        new NamedLocation(2, "/papakainga", "Papakainga", -37.73339, 175.241246)];

    /** Center of the map */
    private cameraLat = -37.782704;
    private cameraLng = 175.28051;
    private zoom = 17;

    /** Map instance */
    private map: MapView;

    /** Player for the chirp sound indicating a nearby location */
    private nearbySound: TNSPlayer;

    /** ID of the location to be shown */
    private id: number;

    locationService: LocationService;

    constructor(private pageRoute: PageRoute, private router: Router, protected page: Page) {
        super(page);

        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => this.id = +params['id']);

        this.setupNearbySound();
    }

    ngOnDestroy(): void {
        if (this.locationService) {
            this.locationService.disableLocationUpdates();
        }
    }

    /** Listener method when the map has been fully instantiated */
    onMapReady = (event) => {
        this.map = event.object;

        console.log("Requesting permission to access location");
        permissions.requestPermissions(
            [android.Manifest.permission.ACCESS_FINE_LOCATION, android.Manifest.permission.ACCESS_COARSE_LOCATION],
            "App would like to show your location on the map")
            .then(() => {
                console.log("** access granted");

                this.setupMap();

                this.locationService = new LocationService();
                this.locationService.on(LocationService.CONNECTED_EVENT, (eventData) => {
                    console.log("Location service connected");
                    this.locationService.enableLocationUpdates(1000);
                    this.processLocationUpdate((<LocationService>eventData.object).getLastLocation());
                });
                this.locationService.on(LocationService.LOCATION_UPDATE_EVENT,
                    (eventData) => this.processLocationUpdate((<LocationService>eventData.object).getLastLocation())
                );
            })
            .catch(() => {
                console.log("** access denied");
            });
        this.addMapMarker();
    };

    /** Set up the map and enable some features such as showing the own location */
    setupMap() {
        if (isNullOrUndefined(this.map)) {
            return;
        }

        let gMap = this.map.gMap;
        if (this.map.android) {
            gMap.setMyLocationEnabled(true);
        }

        if (this.map.ios) {
            gMap.myLocationEnabled = true;
        }
    }

    /** Add map marker depending on the location ID passed to this component. */
    addMapMarker() {
        if (isNullOrUndefined(this.map)) {
            return;
        }

        let location = this.getCurrentLocation();
        if (location == null) {
            this.locations.forEach(location => this.addMarker(location));
            this.cameraLng = this.locations[0].longitude;
            this.cameraLat = this.locations[0].latitude;
            this.zoom = 14;
        } else {
            this.cameraLat = location.latitude;
            this.cameraLng = location.longitude;
            this.addMarker(location);
        }
    }

    /** Action if a map marker is tapped. */
    onMarkerSelect = (event: MarkerEventData) => {
        let marker: Marker = event.marker;
        if (isNullOrUndefined(marker.userData) || isNullOrUndefined(marker.userData.id)) {
            return;
        }

        let location = this.getLocation(marker.userData.id);
        this.router.navigate([location.path]);
    };

    /** Set up the player for playing the sound that indicates a nearby location. */
    setupNearbySound() {
        this.nearbySound = new TNSPlayer();
        this.nearbySound.initFromFile({
            audioFile: '~/audio/chirp.wav',
            loop: false
        }).then(() => {
            console.log("Media player initialised");
        });
    }

    /**
     * Process a location update. If a known location is within reach then play a sound.
     *
     * @param location
     *      received location
     */
    processLocationUpdate(location: Location) {
        console.log("Received location update");
        if (isNullOrUndefined(location)) {
            return;
        }

        // If location is used directly then the distance function seems to return wrong results
        // e.g., the values don't change
        let userLocation = new Location();
        userLocation.longitude = location.longitude;
        userLocation.latitude = location.latitude;

        for (let i = 0; i < this.locations.length; i++) {
            let markerLocation = new Location();
            markerLocation.longitude = this.locations[i].longitude;
            markerLocation.latitude = this.locations[i].latitude;
            let distance = LocationManager.distance(userLocation, markerLocation);
            console.log("### Distance to " + i + ": " + distance);
            if (distance < 200) {
                this.nearbySound.play();
            }
        }
    }

    /** Play the sound indicating a nearby location */
    playNearbySound() {
        console.log("Play chirp sound");
        //noinspection JSIgnoredPromiseFromCall
        this.nearbySound.play();
    }

    /**
     * Add a marker for {@code location} to the map.
     *
     * @param location
     *      a location
     */
    addMarker(location: NamedLocation) {
        if (isNullOrUndefined(this.map)) {
            return;
        }
        let marker = new Marker();
        marker.title = location.name;
        marker.userData = {id: location.id};
        marker.position = Position.positionFromLatLng(location.latitude, location.longitude);
        this.map.addMarker(marker);
    }

    /**
     * Get the location passed as an ID to this component.
     *
     * @returns {NamedLocation} current location
     */
    getCurrentLocation(): NamedLocation {
        return this.getLocation(this.id);
    }

    /**
     * Get the location at the specified position in the array.
     *
     * @param id
     *      position of the location
     * @returns {NamedLocation} current location
     */
    getLocation(id: number): NamedLocation {
        return isNullOrUndefined(id) || id < 0 || id >= this.locations.length ? null : this.locations[id];
    }
}

class NamedLocation {

    constructor(private _id: number, private _path: string, private _name: string, private _latitude: number, private _longitude: number) {
    }

    get id(): number {
        return this._id;
    }

    get path(): string {
        return this._path;
    }

    get name(): string {
        return this._name;
    }

    get latitude(): number {
        return this._latitude;
    }

    get longitude(): number {
        return this._longitude;
    }
}
