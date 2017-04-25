import {Component} from "@angular/core";
import {PageRoute} from "nativescript-angular/router";
import {MapView, Marker, MarkerEventData, Position} from "nativescript-google-maps-sdk";
import {isNullOrUndefined} from "utils/types";
import "rxjs/add/operator/switchMap";
import {Page} from "ui/page";
import {BaseComponent} from "../base.component";
import {Router} from "@angular/router";

@Component({
    selector: "ns-map",
    moduleId: module.id,
    templateUrl: "map.component.html",
})
export class MapComponent extends BaseComponent {
    /** All known locations */
    locations = [
        new NamedLocation(0, "/pukete", "Pukete Pa", -37.73705, 175.237474),
        new NamedLocation(1, "/kirikiriroa", "Kirikiriroa Pa", -37.782704, 175.28051),
        new NamedLocation(2, "/papakainga", "Papakainga", -37.73339, 175.241246)];

    /** Center of the map */
    cameraLat = -37.782704;
    cameraLng = 175.28051;
    zoom = 17;

    map: MapView;

    /** ID of the location to be shown */
    id: number;

    constructor(private pageRoute: PageRoute, private router: Router, protected page: Page) {
        super(page);

        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => this.id = +params['id']);
    }

    /** Listener method when the map has been fully instantiated */
    onMapReady = (event) => {
        this.map = event.object;

        let location = this.getCurrentLocation();
        if (location != null) {
            this.cameraLat = location.latitude;
            this.cameraLng = location.longitude;
            this.addMarker(location);
        }
    };

    onMarkerSelect = (event: MarkerEventData) => {
        let marker: Marker = event.marker;
        if (isNullOrUndefined(marker.userData) || isNullOrUndefined(marker.userData.id)) {
            return;
        }

        let location = this.getLocation(marker.userData.id);
        this.router.navigate([location.path]);
    };

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
