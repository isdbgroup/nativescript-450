import * as application from "application";
import {Observable, EventData} from "data/observable";
import {Location} from "location";

declare let com: any;
declare let android: any;
declare let java: any;

let location = android.location.Location;
let connectionResult = com.google.android.gms.common.ConnectionResult;
let googleApiClient = com.google.android.gms.common.api.GoogleApiClient;
let locationListener = com.google.android.gms.location.LocationListener;
let locationRequest = com.google.android.gms.location.LocationRequest;
let locationServices = com.google.android.gms.location.LocationServices;

const UPDATE_INTERVAL_IN_MILLISECONDS = 2000;
const FASTEST_UPDATE_INTERVAL_IN_MILLISECONDS = UPDATE_INTERVAL_IN_MILLISECONDS / 2;

export class LocationService extends Observable {
    public static LOCATION_UPDATE_EVENT = "location_update_event";
    public static CONNECTED_EVENT = "connected_event";

    public _lastLocationData: Location;
    public gApiClient: any;

    private locationListener;

    constructor() {
        super();
        this._lastLocationData = new Location();
        let isAvailable = com.google.android.gms.common.GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(application.android.context);
        let conRes = com.google.android.gms.common.ConnectionResult.SUCCESS;
        if (isAvailable === conRes) {
            this.locationLocator();
        }
    }

    public locationLocator() {
        console.log("calling locator");
        let currentLocation: any;
        let callbackConnection = new googleApiClient.ConnectionCallbacks({
            onConnected: function () {
                console.log("Connected called");
                let isLocationAvailable = locationServices.FusedLocationApi.getLocationAvailability(this.gApiClient);
                // get the last location if available
                if (isLocationAvailable != null && isLocationAvailable.isLocationAvailable()) {
                    currentLocation = locationServices.FusedLocationApi.getLastLocation(this.gApiClient);
                    this.setLastLocation(currentLocation);
                }
                let eventData: EventData = {eventName: LocationService.CONNECTED_EVENT, object: this};
                this.notify(eventData)
            }.bind(this),
            onConnectionSuspended: function () {
                console.log("Connection suspended");
            }.bind(this)
        });

        let callbackFailed = new googleApiClient.OnConnectionFailedListener({
            onConnectionFailed: function () {
                console.log("Connection failed");
                // TODO trigger event
            }.bind(this)
        });

        this.gApiClient = new googleApiClient.Builder(application.android.context)
            .addConnectionCallbacks(callbackConnection)
            .addOnConnectionFailedListener(callbackFailed)
            .addApi(locationServices.API)
            .build();
        this.gApiClient.connect();
    }

    /**
     * Save the current location in the service instance.
     *
     * @param location
     *      a location
     */
    public setLastLocation(location) {
        this._lastLocationData.latitude = location.getLatitude();
        this._lastLocationData.longitude = location.getLongitude();
    }

    /**
     * @returns {LocationData} last location provided by the device.
     */
    public getLastLocation() {
        return this._lastLocationData;
    }

    /**
     * Start location updates.
     *
     * @param numUpdates
     *      number of updates performed
     */
    public enableLocationUpdates(numUpdates: number = 100) {
        console.log("Location updates enabled");
        let createRequest = new locationRequest();
        // TODO make this configurable
        createRequest.setInterval(UPDATE_INTERVAL_IN_MILLISECONDS);
        createRequest.setFastestInterval(FASTEST_UPDATE_INTERVAL_IN_MILLISECONDS);
        createRequest.setPriority(locationRequest.PRIORITY_HIGH_ACCURACY);
        createRequest.setNumUpdates(numUpdates);

        this.locationListener = new locationListener({
            onLocationChanged: function (location) {
                this.setLastLocation(location);
                let eventData: EventData = {eventName: LocationService.LOCATION_UPDATE_EVENT, object: this};
                this.notify(eventData)
            }.bind(this)
        });
        locationServices.FusedLocationApi.requestLocationUpdates(this.gApiClient, createRequest, this.locationListener);
    }

    /**
     * Stop the updates.
     */
    public disableLocationUpdates() {
        if (this.gApiClient && this.gApiClient.isConnected()) {
            locationServices.FusedLocationApi.removeLocationUpdates(this.gApiClient, this.locationListener);
        }
    }
}
