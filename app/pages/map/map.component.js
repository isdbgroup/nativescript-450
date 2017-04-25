"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var types_1 = require("utils/types");
require("rxjs/add/operator/switchMap");
var page_1 = require("ui/page");
var base_component_1 = require("../base.component");
var router_2 = require("@angular/router");
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
            var location = _this.getCurrentLocation();
            if (location != null) {
                _this.cameraLat = location.latitude;
                _this.cameraLng = location.longitude;
                _this.addMarker(location);
            }
        };
        _this.onMarkerSelect = function (event) {
            var marker = event.marker;
            if (types_1.isNullOrUndefined(marker.userData) || types_1.isNullOrUndefined(marker.userData.id)) {
                return;
            }
            var location = _this.getLocation(marker.userData.id);
            _this.router.navigate([location.path]);
        };
        _this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { return _this.id = +params['id']; });
        return _this;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QyxzREFBc0Q7QUFDdEQsNkVBQXdGO0FBQ3hGLHFDQUE4QztBQUM5Qyx1Q0FBcUM7QUFDckMsZ0NBQTZCO0FBQzdCLG9EQUFnRDtBQUNoRCwwQ0FBdUM7QUFPdkMsSUFBYSxZQUFZO0lBQVMsZ0NBQWE7SUFpQjNDLHNCQUFvQixTQUFvQixFQUFVLE1BQWMsRUFBWSxJQUFVO1FBQXRGLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBS2Q7UUFObUIsZUFBUyxHQUFULFNBQVMsQ0FBVztRQUFVLFlBQU0sR0FBTixNQUFNLENBQVE7UUFBWSxVQUFJLEdBQUosSUFBSSxDQUFNO1FBaEJ0RiwwQkFBMEI7UUFDMUIsZUFBUyxHQUFHO1lBQ1IsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBQ25FLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO1lBQzdFLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztTQUFDLENBQUM7UUFFOUUsd0JBQXdCO1FBQ3hCLGVBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN2QixlQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLFVBQUksR0FBRyxFQUFFLENBQUM7UUFlViwrREFBK0Q7UUFDL0QsZ0JBQVUsR0FBRyxVQUFDLEtBQUs7WUFDZixLQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFeEIsSUFBSSxRQUFRLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDekMsRUFBRSxDQUFD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LEVBQVUsU0FBaUIsRUFBVSxVQUFrQjtRQUFoSCxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUNwSSxDQUFDO0lBRUQsc0JBQUksNkJBQUU7YUFBTjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0NBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2VSb3V0ZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNYXBWaWV3LCBNYXJrZXIsIE1hcmtlckV2ZW50RGF0YSwgUG9zaXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCI7XG5pbXBvcnQge2lzTnVsbE9yVW5kZWZpbmVkfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vYmFzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLW1hcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwibWFwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIC8qKiBBbGwga25vd24gbG9jYXRpb25zICovXG4gICAgbG9jYXRpb25zID0gW1xuICAgICAgICBuZXcgTmFtZWRMb2NhdGlvbigwLCBcIi9wdWtldGVcIiwgXCJQdWtldGUgUGFcIiwgLTM3LjczNzA1LCAxNzUuMjM3NDc0KSxcbiAgICAgICAgbmV3IE5hbWVkTG9jYXRpb24oMSwgXCIva2lyaWtpcmlyb2FcIiwgXCJLaXJpa2lyaXJvYSBQYVwiLCAtMzcuNzgyNzA0LCAxNzUuMjgwNTEpLFxuICAgICAgICBuZXcgTmFtZWRMb2NhdGlvbigyLCBcIi9wYXBha2FpbmdhXCIsIFwiUGFwYWthaW5nYVwiLCAtMzcuNzMzMzksIDE3NS4yNDEyNDYpXTtcblxuICAgIC8qKiBDZW50ZXIgb2YgdGhlIG1hcCAqL1xuICAgIGNhbWVyYUxhdCA9IC0zNy43ODI3MDQ7XG4gICAgY2FtZXJhTG5nID0gMTc1LjI4MDUxO1xuICAgIHpvb20gPSAxNztcblxuICAgIG1hcDogTWFwVmlldztcblxuICAgIC8qKiBJRCBvZiB0aGUgbG9jYXRpb24gdG8gYmUgc2hvd24gKi9cbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJvdGVjdGVkIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgc3VwZXIocGFnZSk7XG5cbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4gdGhpcy5pZCA9ICtwYXJhbXNbJ2lkJ10pO1xuICAgIH1cblxuICAgIC8qKiBMaXN0ZW5lciBtZXRob2Qgd2hlbiB0aGUgbWFwIGhhcyBiZWVuIGZ1bGx5IGluc3RhbnRpYXRlZCAqL1xuICAgIG9uTWFwUmVhZHkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5tYXAgPSBldmVudC5vYmplY3Q7XG5cbiAgICAgICAgbGV0IGxvY2F0aW9uID0gdGhpcy5nZXRDdXJyZW50TG9jYXRpb24oKTtcbiAgICAgICAgaWYgKGxvY2F0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhTGF0ID0gbG9jYXRpb24ubGF0aXR1ZGU7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYUxuZyA9IGxvY2F0aW9uLmxvbmdpdHVkZTtcbiAgICAgICAgICAgIHRoaXMuYWRkTWFya2VyKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvbk1hcmtlclNlbGVjdCA9IChldmVudDogTWFya2VyRXZlbnREYXRhKSA9PiB7XG4gICAgICAgIGxldCBtYXJrZXI6IE1hcmtlciA9IGV2ZW50Lm1hcmtlcjtcbiAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKG1hcmtlci51c2VyRGF0YSkgfHwgaXNOdWxsT3JVbmRlZmluZWQobWFya2VyLnVzZXJEYXRhLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvY2F0aW9uID0gdGhpcy5nZXRMb2NhdGlvbihtYXJrZXIudXNlckRhdGEuaWQpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbbG9jYXRpb24ucGF0aF0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBtYXJrZXIgZm9yIHtAY29kZSBsb2NhdGlvbn0gdG8gdGhlIG1hcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsb2NhdGlvblxuICAgICAqICAgICAgYSBsb2NhdGlvblxuICAgICAqL1xuICAgIGFkZE1hcmtlcihsb2NhdGlvbjogTmFtZWRMb2NhdGlvbikge1xuICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQodGhpcy5tYXApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBNYXJrZXIoKTtcbiAgICAgICAgbWFya2VyLnRpdGxlID0gbG9jYXRpb24ubmFtZTtcbiAgICAgICAgbWFya2VyLnVzZXJEYXRhID0ge2lkOiBsb2NhdGlvbi5pZH07XG4gICAgICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyhsb2NhdGlvbi5sYXRpdHVkZSwgbG9jYXRpb24ubG9uZ2l0dWRlKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2NhdGlvbiBwYXNzZWQgYXMgYW4gSUQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmFtZWRMb2NhdGlvbn0gY3VycmVudCBsb2NhdGlvblxuICAgICAqL1xuICAgIGdldEN1cnJlbnRMb2NhdGlvbigpOiBOYW1lZExvY2F0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9jYXRpb24odGhpcy5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2NhdGlvbiBhdCB0aGUgc3BlY2lmaWVkIHBvc2l0aW9uIGluIHRoZSBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqICAgICAgcG9zaXRpb24gb2YgdGhlIGxvY2F0aW9uXG4gICAgICogQHJldHVybnMge05hbWVkTG9jYXRpb259IGN1cnJlbnQgbG9jYXRpb25cbiAgICAgKi9cbiAgICBnZXRMb2NhdGlvbihpZDogbnVtYmVyKTogTmFtZWRMb2NhdGlvbiB7XG4gICAgICAgIHJldHVybiBpc051bGxPclVuZGVmaW5lZChpZCkgfHwgaWQgPCAwIHx8IGlkID49IHRoaXMubG9jYXRpb25zLmxlbmd0aCA/IG51bGwgOiB0aGlzLmxvY2F0aW9uc1tpZF07XG4gICAgfVxufVxuXG5jbGFzcyBOYW1lZExvY2F0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2lkOiBudW1iZXIsIHByaXZhdGUgX3BhdGg6IHN0cmluZywgcHJpdmF0ZSBfbmFtZTogc3RyaW5nLCBwcml2YXRlIF9sYXRpdHVkZTogbnVtYmVyLCBwcml2YXRlIF9sb25naXR1ZGU6IG51bWJlcikge1xuICAgIH1cblxuICAgIGdldCBpZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgZ2V0IGxhdGl0dWRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXRpdHVkZTtcbiAgICB9XG5cbiAgICBnZXQgbG9uZ2l0dWRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb25naXR1ZGU7XG4gICAgfVxufVxuIl19