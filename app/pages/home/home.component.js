"use strict";
var core_1 = require("@angular/core");
var base_component_1 = require("../base.component");
var page_1 = require("ui/page");
var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(page) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        return _this;
    }
    return HomeComponent;
}(base_component_1.BaseComponent));
HomeComponent = __decorate([
    core_1.Component({
        selector: "ns-home",
        moduleId: module.id,
        templateUrl: "home.component.html",
    }),
    __metadata("design:paramtypes", [page_1.Page])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLG9EQUFnRDtBQUNoRCxnQ0FBNkI7QUFPN0IsSUFBYSxhQUFhO0lBQVMsaUNBQWE7SUFDNUMsdUJBQXNCLElBQVU7UUFBaEMsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FDZDtRQUZxQixVQUFJLEdBQUosSUFBSSxDQUFNOztJQUVoQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBbUMsOEJBQWEsR0FJL0M7QUFKWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtLQUNyQyxDQUFDO3FDQUU4QixXQUFJO0dBRHZCLGFBQWEsQ0FJekI7QUFKWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vYmFzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgc3VwZXIocGFnZSk7XG4gICAgfVxufVxuIl19