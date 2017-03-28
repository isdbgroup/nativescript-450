"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var base_component_1 = require("../base.component");
var PapakaingaComponent = (function (_super) {
    __extends(PapakaingaComponent, _super);
    function PapakaingaComponent(page) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        return _this;
    }
    return PapakaingaComponent;
}(base_component_1.BaseComponent));
PapakaingaComponent = __decorate([
    core_1.Component({
        selector: "ns-papakainga",
        moduleId: module.id,
        templateUrl: "papakainga.component.html",
    }),
    __metadata("design:paramtypes", [page_1.Page])
], PapakaingaComponent);
exports.PapakaingaComponent = PapakaingaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFwYWthaW5nYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXBha2FpbmdhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLGdDQUE2QjtBQUM3QixvREFBZ0Q7QUFRaEQsSUFBYSxtQkFBbUI7SUFBUyx1Q0FBYTtJQUNsRCw2QkFBc0IsSUFBVTtRQUFoQyxZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUNkO1FBRnFCLFVBQUksR0FBSixJQUFJLENBQU07O0lBRWhDLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFKRCxDQUF5Qyw4QkFBYSxHQUlyRDtBQUpZLG1CQUFtQjtJQUwvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwyQkFBMkI7S0FDM0MsQ0FBQztxQ0FFOEIsV0FBSTtHQUR2QixtQkFBbUIsQ0FJL0I7QUFKWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSBcIi4uL2Jhc2UuY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcGFwYWthaW5nYVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFwYWthaW5nYS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQYXBha2FpbmdhQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgc3VwZXIocGFnZSk7XG4gICAgfVxufVxuIl19