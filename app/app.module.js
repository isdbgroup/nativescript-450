"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var home_component_1 = require("./pages/home/home.component");
var kirikiriroa_component_1 = require("./pages/story/kirikiriroa.component");
var papakainga_component_1 = require("./pages/story/papakainga.component");
var pukete_component_1 = require("./pages/story/pukete.component");
var map_component_1 = require("./pages/map/map.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            kirikiriroa_component_1.KirikiriroaComponent,
            papakainga_component_1.PapakaingaComponent,
            pukete_component_1.PuketeComponent,
            map_component_1.MapComponent
        ],
        providers: [],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RDtBQUN6RCxnRkFBNEU7QUFDNUUsNkNBQStDO0FBQy9DLGlEQUE2QztBQUM3Qyw4REFBMEQ7QUFDMUQsNkVBQXlFO0FBQ3pFLDJFQUF1RTtBQUN2RSxtRUFBK0Q7QUFDL0QsMkRBQXVEO0FBd0J2RCxJQUFhLFNBQVM7SUFBdEI7SUFDQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLFNBQVM7SUFyQnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWiw4QkFBYTtZQUNiLDRDQUFvQjtZQUNwQiwwQ0FBbUI7WUFDbkIsa0NBQWU7WUFDZiw0QkFBWTtTQUNmO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUNyQjtBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtLaXJpa2lyaXJvYUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvc3Rvcnkva2lyaWtpcmlyb2EuY29tcG9uZW50XCI7XG5pbXBvcnQge1BhcGFrYWluZ2FDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3N0b3J5L3BhcGFrYWluZ2EuY29tcG9uZW50XCI7XG5pbXBvcnQge1B1a2V0ZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvc3RvcnkvcHVrZXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNYXBDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL21hcC9tYXAuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgS2lyaWtpcmlyb2FDb21wb25lbnQsXG4gICAgICAgIFBhcGFrYWluZ2FDb21wb25lbnQsXG4gICAgICAgIFB1a2V0ZUNvbXBvbmVudCxcbiAgICAgICAgTWFwQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cbiJdfQ==