"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var types_1 = require("utils/types");
require("rxjs/add/operator/switchMap");
var page_1 = require("ui/page");
var base_component_1 = require("../base.component");
var router_2 = require("@angular/router");
var nativescript_audio_1 = require("nativescript-audio");
var permissions = require("nativescript-permissions");
var MapComponent = (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(pageRoute, router, page) {
        var _this = _super.call(this, page) || this;
        _this.pageRoute = pageRoute;
        _this.router = router;
        _this.page = page;
        /** All known locations */
        _this.locations = [
            new NamedLocation(0, "/pukete", "Pukete Pa", -37.73705, 175.237474),
            new NamedLocation(1, "/kirikiriroa", "Kirikiriroa Pa", -37.782704, 175.28051),
            new NamedLocation(2, "/papakainga", "Papakainga", -37.73339, 175.241246)
        ];
        /** Center of the map */
        _this.cameraLat = -37.782704;
        _this.cameraLng = 175.28051;
        _this.zoom = 17;
        /** Listener method when the map has been fully instantiated */
        _this.onMapReady = function (event) {
            _this.map = event.object;
            console.log("Requesting permission to access location");
            permissions.requestPermissions([android.Manifest.permission.ACCESS_FINE_LOCATION, android.Manifest.permission.ACCESS_COARSE_LOCATION], "App would like to show your location on the map")
                .then(function () {
                console.log("** access granted");
                _this.setupMap();
            })
                .catch(function () {
                console.log("** access denied");
            });
            _this.addMapMarker();
        };
        /** Action if a map marker is tapped. */
        _this.onMarkerSelect = function (event) {
            var marker = event.marker;
            if (types_1.isNullOrUndefined(marker.userData) || types_1.isNullOrUndefined(marker.userData.id)) {
                return;
            }
            var location = _this.getLocation(marker.userData.id);
            _this.router.navigate([location.path]);
        };
        _this.setupNearbySound();
        _this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { return _this.id = +params['id']; });
        return _this;
    }
    /** Set up the map and enable some features such as showing the own location */
    MapComponent.prototype.setupMap = function () {
        if (types_1.isNullOrUndefined(this.map)) {
            return;
        }
        var gMap = this.map.gMap;
        if (this.map.android) {
            // let uiSettings = gMap.getUiSettings();
            // uiSettings.setMyLocationButtonEnabled(true);
            gMap.setMyLocationEnabled(true);
        }
        if (this.map.ios) {
        }
    };
    /** Add map marker depending on the location ID passed to this component. */
    MapComponent.prototype.addMapMarker = function () {
        var _this = this;
        if (types_1.isNullOrUndefined(this.map)) {
            return;
        }
        var location = this.getCurrentLocation();
        if (location == null) {
            this.locations.forEach(function (location) { return _this.addMarker(location); });
            this.cameraLng = this.locations[0].longitude;
            this.cameraLat = this.locations[0].latitude;
            this.zoom = 14;
        }
        else {
            this.cameraLat = location.latitude;
            this.cameraLng = location.longitude;
            this.addMarker(location);
        }
    };
    /** Set up the player for playing the sound that indicates a nearby location. */
    MapComponent.prototype.setupNearbySound = function () {
        this.nearbySound = new nativescript_audio_1.TNSPlayer();
        this.nearbySound.initFromFile({
            audioFile: '~/audio/chirp.wav',
            loop: false
        }).then(function () {
            console.log("Media player initialised");
        });
    };
    /** Play the sound indicating a nearby location */
    MapComponent.prototype.playNearbySound = function () {
        console.log("Play chirp sound");
        //noinspection JSIgnoredPromiseFromCall
        this.nearbySound.play();
    };
    /**
     * Add a marker for {@code location} to the map.
     *
     * @param location
     *      a location
     */
    MapComponent.prototype.addMarker = function (location) {
        if (types_1.isNullOrUndefined(this.map)) {
            return;
        }
        var marker = new nativescript_google_maps_sdk_1.Marker();
        marker.title = location.name;
        marker.userData = { id: location.id };
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(location.latitude, location.longitude);
        this.map.addMarker(marker);
    };
    /**
     * Get the location passed as an ID to this component.
     *
     * @returns {NamedLocation} current location
     */
    MapComponent.prototype.getCurrentLocation = function () {
        return this.getLocation(this.id);
    };
    /**
     * Get the location at the specified position in the array.
     *
     * @param id
     *      position of the location
     * @returns {NamedLocation} current location
     */
    MapComponent.prototype.getLocation = function (id) {
        return types_1.isNullOrUndefined(id) || id < 0 || id >= this.locations.length ? null : this.locations[id];
    };
    return MapComponent;
}(base_component_1.BaseComponent));
MapComponent = __decorate([
    core_1.Component({
        selector: "ns-map",
        moduleId: module.id,
        templateUrl: "map.component.html",
    }),
    __metadata("design:paramtypes", [router_1.PageRoute, router_2.Router, page_1.Page])
], MapComponent);
exports.MapComponent = MapComponent;
var NamedLocation = (function () {
    function NamedLocation(_id, _path, _name, _latitude, _longitude) {
        this._id = _id;
        this._path = _path;
        this._name = _name;
        this._latitude = _latitude;
        this._longitude = _longitude;
    }
    Object.defineProperty(NamedLocation.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NamedLocation.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NamedLocation.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NamedLocation.prototype, "latitude", {
        get: function () {
            return this._latitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NamedLocation.prototype, "longitude", {
        get: function () {
            return this._longitude;
        },
        enumerable: true,
        configurable: true
    });
    return NamedLocation;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QyxzREFBc0Q7QUFDdEQsNkVBQXdGO0FBQ3hGLHFDQUE4QztBQUM5Qyx1Q0FBcUM7QUFDckMsZ0NBQTZCO0FBQzdCLG9EQUFnRDtBQUNoRCwwQ0FBdUM7QUFDdkMseURBQTZDO0FBQzdDLHNEQUF3RDtBQVF4RCxJQUFhLFlBQVk7SUFBUyxnQ0FBYTtJQXFCM0Msc0JBQW9CLFNBQW9CLEVBQVUsTUFBYyxFQUFZLElBQVU7UUFBdEYsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FPZDtRQVJtQixlQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFZLFVBQUksR0FBSixJQUFJLENBQU07UUFwQnRGLDBCQUEwQjtRQUNsQixlQUFTLEdBQUc7WUFDaEIsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBQ25FLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO1lBQzdFLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztTQUFDLENBQUM7UUFFOUUsd0JBQXdCO1FBQ2hCLGVBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN2QixlQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLFVBQUksR0FBRyxFQUFFLENBQUM7UUFxQmxCLCtEQUErRDtRQUMvRCxnQkFBVSxHQUFHLFVBQUMsS0FBSztZQUNmLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxD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QUFMLEtBQUssQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQ3BJLENBQUM7SUFFRCxzQkFBSSw2QkFBRTthQUFOO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFDTCxvQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZVJvdXRlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01hcFZpZXcsIE1hcmtlciwgTWFya2VyRXZlbnREYXRhLCBQb3NpdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIjtcbmltcG9ydCB7aXNOdWxsT3JVbmRlZmluZWR9IGZyb20gXCJ1dGlscy90eXBlc1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gXCIuLi9iYXNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VE5TUGxheWVyfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8nO1xuaW1wb3J0ICogYXMgcGVybWlzc2lvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiO1xuZGVjbGFyZSB2YXIgYW5kcm9pZDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtbWFwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCJtYXAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgLyoqIEFsbCBrbm93biBsb2NhdGlvbnMgKi9cbiAgICBwcml2YXRlIGxvY2F0aW9ucyA9IFtcbiAgICAgICAgbmV3IE5hbWVkTG9jYXRpb24oMCwgXCIvcHVrZXRlXCIsIFwiUHVrZXRlIFBhXCIsIC0zNy43MzcwNSwgMTc1LjIzNzQ3NCksXG4gICAgICAgIG5ldyBOYW1lZExvY2F0aW9uKDEsIFwiL2tpcmlraXJpcm9hXCIsIFwiS2lyaWtpcmlyb2EgUGFcIiwgLTM3Ljc4MjcwNCwgMTc1LjI4MDUxKSxcbiAgICAgICAgbmV3IE5hbWVkTG9jYXRpb24oMiwgXCIvcGFwYWthaW5nYVwiLCBcIlBhcGFrYWluZ2FcIiwgLTM3LjczMzM5LCAxNzUuMjQxMjQ2KV07XG5cbiAgICAvKiogQ2VudGVyIG9mIHRoZSBtYXAgKi9cbiAgICBwcml2YXRlIGNhbWVyYUxhdCA9IC0zNy43ODI3MDQ7XG4gICAgcHJpdmF0ZSBjYW1lcmFMbmcgPSAxNzUuMjgwNTE7XG4gICAgcHJpdmF0ZSB6b29tID0gMTc7XG5cbiAgICAvKiogTWFwIGluc3RhbmNlICovXG4gICAgcHJpdmF0ZSBtYXA6IE1hcFZpZXc7XG5cbiAgICAvKiogUGxheWVyIGZvciB0aGUgY2hpcnAgc291bmQgaW5kaWNhdGluZyBhIG5lYXJieSBsb2NhdGlvbiAqL1xuICAgIHByaXZhdGUgbmVhcmJ5U291bmQ6IFROU1BsYXllcjtcblxuICAgIC8qKiBJRCBvZiB0aGUgbG9jYXRpb24gdG8gYmUgc2hvd24gKi9cbiAgICBwcml2YXRlIGlkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcm90ZWN0ZWQgcGFnZTogUGFnZSkge1xuICAgICAgICBzdXBlcihwYWdlKTtcblxuICAgICAgICB0aGlzLnNldHVwTmVhcmJ5U291bmQoKTtcblxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB0aGlzLmlkID0gK3BhcmFtc1snaWQnXSk7XG4gICAgfVxuXG4gICAgLyoqIExpc3RlbmVyIG1ldGhvZCB3aGVuIHRoZSBtYXAgaGFzIGJlZW4gZnVsbHkgaW5zdGFudGlhdGVkICovXG4gICAgb25NYXBSZWFkeSA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLm1hcCA9IGV2ZW50Lm9iamVjdDtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3RpbmcgcGVybWlzc2lvbiB0byBhY2Nlc3MgbG9jYXRpb25cIik7XG4gICAgICAgIHBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9ucyhcbiAgICAgICAgICAgIFthbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uQUNDRVNTX0ZJTkVfTE9DQVRJT04sIGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OXSxcbiAgICAgICAgICAgIFwiQXBwIHdvdWxkIGxpa2UgdG8gc2hvdyB5b3VyIGxvY2F0aW9uIG9uIHRoZSBtYXBcIilcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqIGFjY2VzcyBncmFudGVkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBNYXAoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKiogYWNjZXNzIGRlbmllZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZE1hcE1hcmtlcigpO1xuICAgIH07XG5cbiAgICAvKiogU2V0IHVwIHRoZSBtYXAgYW5kIGVuYWJsZSBzb21lIGZlYXR1cmVzIHN1Y2ggYXMgc2hvd2luZyB0aGUgb3duIGxvY2F0aW9uICovXG4gICAgc2V0dXBNYXAoKSB7XG4gICAgICAgIGlmIChpc051bGxPclVuZGVmaW5lZCh0aGlzLm1hcCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBnTWFwID0gdGhpcy5tYXAuZ01hcDtcbiAgICAgICAgaWYgKHRoaXMubWFwLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIC8vIGxldCB1aVNldHRpbmdzID0gZ01hcC5nZXRVaVNldHRpbmdzKCk7XG4gICAgICAgICAgICAvLyB1aVNldHRpbmdzLnNldE15TG9jYXRpb25CdXR0b25FbmFibGVkKHRydWUpO1xuICAgICAgICAgICAgZ01hcC5zZXRNeUxvY2F0aW9uRW5hYmxlZCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hcC5pb3MpIHtcbiAgICAgICAgICAgIC8vIGdNYXAubXlMb2NhdGlvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gZ01hcC5zZXR0aW5ncy5teUxvY2F0aW9uQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBBZGQgbWFwIG1hcmtlciBkZXBlbmRpbmcgb24gdGhlIGxvY2F0aW9uIElEIHBhc3NlZCB0byB0aGlzIGNvbXBvbmVudC4gKi9cbiAgICBhZGRNYXBNYXJrZXIoKSB7XG4gICAgICAgIGlmIChpc051bGxPclVuZGVmaW5lZCh0aGlzLm1hcCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsb2NhdGlvbiA9IHRoaXMuZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gICAgICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9ucy5mb3JFYWNoKGxvY2F0aW9uID0+IHRoaXMuYWRkTWFya2VyKGxvY2F0aW9uKSk7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYUxuZyA9IHRoaXMubG9jYXRpb25zWzBdLmxvbmdpdHVkZTtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhTGF0ID0gdGhpcy5sb2NhdGlvbnNbMF0ubGF0aXR1ZGU7XG4gICAgICAgICAgICB0aGlzLnpvb20gPSAxNDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhTGF0ID0gbG9jYXRpb24ubGF0aXR1ZGU7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYUxuZyA9IGxvY2F0aW9uLmxvbmdpdHVkZTtcbiAgICAgICAgICAgIHRoaXMuYWRkTWFya2VyKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBBY3Rpb24gaWYgYSBtYXAgbWFya2VyIGlzIHRhcHBlZC4gKi9cbiAgICBvbk1hcmtlclNlbGVjdCA9IChldmVudDogTWFya2VyRXZlbnREYXRhKSA9PiB7XG4gICAgICAgIGxldCBtYXJrZXI6IE1hcmtlciA9IGV2ZW50Lm1hcmtlcjtcbiAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKG1hcmtlci51c2VyRGF0YSkgfHwgaXNOdWxsT3JVbmRlZmluZWQobWFya2VyLnVzZXJEYXRhLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvY2F0aW9uID0gdGhpcy5nZXRMb2NhdGlvbihtYXJrZXIudXNlckRhdGEuaWQpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbbG9jYXRpb24ucGF0aF0pO1xuICAgIH07XG5cbiAgICAvKiogU2V0IHVwIHRoZSBwbGF5ZXIgZm9yIHBsYXlpbmcgdGhlIHNvdW5kIHRoYXQgaW5kaWNhdGVzIGEgbmVhcmJ5IGxvY2F0aW9uLiAqL1xuICAgIHNldHVwTmVhcmJ5U291bmQoKSB7XG4gICAgICAgIHRoaXMubmVhcmJ5U291bmQgPSBuZXcgVE5TUGxheWVyKCk7XG4gICAgICAgIHRoaXMubmVhcmJ5U291bmQuaW5pdEZyb21GaWxlKHtcbiAgICAgICAgICAgIGF1ZGlvRmlsZTogJ34vYXVkaW8vY2hpcnAud2F2JyxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNZWRpYSBwbGF5ZXIgaW5pdGlhbGlzZWRcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBQbGF5IHRoZSBzb3VuZCBpbmRpY2F0aW5nIGEgbmVhcmJ5IGxvY2F0aW9uICovXG4gICAgcGxheU5lYXJieVNvdW5kKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXkgY2hpcnAgc291bmRcIik7XG4gICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTSWdub3JlZFByb21pc2VGcm9tQ2FsbFxuICAgICAgICB0aGlzLm5lYXJieVNvdW5kLnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBtYXJrZXIgZm9yIHtAY29kZSBsb2NhdGlvbn0gdG8gdGhlIG1hcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsb2NhdGlvblxuICAgICAqICAgICAgYSBsb2NhdGlvblxuICAgICAqL1xuICAgIGFkZE1hcmtlcihsb2NhdGlvbjogTmFtZWRMb2NhdGlvbikge1xuICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQodGhpcy5tYXApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBNYXJrZXIoKTtcbiAgICAgICAgbWFya2VyLnRpdGxlID0gbG9jYXRpb24ubmFtZTtcbiAgICAgICAgbWFya2VyLnVzZXJEYXRhID0ge2lkOiBsb2NhdGlvbi5pZH07XG4gICAgICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyhsb2NhdGlvbi5sYXRpdHVkZSwgbG9jYXRpb24ubG9uZ2l0dWRlKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2NhdGlvbiBwYXNzZWQgYXMgYW4gSUQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmFtZWRMb2NhdGlvbn0gY3VycmVudCBsb2NhdGlvblxuICAgICAqL1xuICAgIGdldEN1cnJlbnRMb2NhdGlvbigpOiBOYW1lZExvY2F0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9jYXRpb24odGhpcy5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2NhdGlvbiBhdCB0aGUgc3BlY2lmaWVkIHBvc2l0aW9uIGluIHRoZSBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqICAgICAgcG9zaXRpb24gb2YgdGhlIGxvY2F0aW9uXG4gICAgICogQHJldHVybnMge05hbWVkTG9jYXRpb259IGN1cnJlbnQgbG9jYXRpb25cbiAgICAgKi9cbiAgICBnZXRMb2NhdGlvbihpZDogbnVtYmVyKTogTmFtZWRMb2NhdGlvbiB7XG4gICAgICAgIHJldHVybiBpc051bGxPclVuZGVmaW5lZChpZCkgfHwgaWQgPCAwIHx8IGlkID49IHRoaXMubG9jYXRpb25zLmxlbmd0aCA/IG51bGwgOiB0aGlzLmxvY2F0aW9uc1tpZF07XG4gICAgfVxufVxuXG5jbGFzcyBOYW1lZExvY2F0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2lkOiBudW1iZXIsIHByaXZhdGUgX3BhdGg6IHN0cmluZywgcHJpdmF0ZSBfbmFtZTogc3RyaW5nLCBwcml2YXRlIF9sYXRpdHVkZTogbnVtYmVyLCBwcml2YXRlIF9sb25naXR1ZGU6IG51bWJlcikge1xuICAgIH1cblxuICAgIGdldCBpZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgZ2V0IGxhdGl0dWRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXRpdHVkZTtcbiAgICB9XG5cbiAgICBnZXQgbG9uZ2l0dWRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb25naXR1ZGU7XG4gICAgfVxufVxuIl19