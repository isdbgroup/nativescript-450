"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var BaseComponent = (function () {
    function BaseComponent(page) {
        this.page = page;
        page.actionBarHidden = true;
    }
    return BaseComponent;
}());
BaseComponent = __decorate([
    core_1.Component({
        selector: "ns-base",
        moduleId: module.id,
        templateUrl: "home/home.component.html",
    }),
    __metadata("design:paramtypes", [page_1.Page])
], BaseComponent);
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLGdDQUE2QjtBQVE3QixJQUFhLGFBQWE7SUFDdEIsdUJBQXNCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwwQkFBMEI7S0FDMUMsQ0FBQztxQ0FFOEIsV0FBSTtHQUR2QixhQUFhLENBSXpCO0FBSlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1iYXNlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCJob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==