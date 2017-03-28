"use strict";
var core_1 = require("@angular/core");
var base_component_1 = require("../base.component");
var page_1 = require("ui/page");
var PuketeComponent = (function (_super) {
    __extends(PuketeComponent, _super);
    function PuketeComponent(page) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        return _this;
    }
    return PuketeComponent;
}(base_component_1.BaseComponent));
PuketeComponent = __decorate([
    core_1.Component({
        selector: "ns-pukete",
        moduleId: module.id,
        templateUrl: "pukete.component.html",
    }),
    __metadata("design:paramtypes", [page_1.Page])
], PuketeComponent);
exports.PuketeComponent = PuketeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVrZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB1a2V0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QyxvREFBZ0Q7QUFDaEQsZ0NBQTZCO0FBUTdCLElBQWEsZUFBZTtJQUFTLG1DQUFhO0lBQzlDLHlCQUFzQixJQUFVO1FBQWhDLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBQ2Q7UUFGcUIsVUFBSSxHQUFKLElBQUksQ0FBTTs7SUFFaEMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQUpELENBQXFDLDhCQUFhLEdBSWpEO0FBSlksZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7S0FDdkMsQ0FBQztxQ0FFOEIsV0FBSTtHQUR2QixlQUFlLENBSTNCO0FBSlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSBcIi4uL2Jhc2UuY29tcG9uZW50XCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcHVrZXRlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCJwdWtldGUuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgUHVrZXRlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgc3VwZXIocGFnZSk7XG4gICAgfVxufVxuIl19