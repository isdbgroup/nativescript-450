import {Component} from "@angular/core";
import {Page} from "ui/page";


@Component({
    selector: "ns-base",
    moduleId: module.id,
    templateUrl: "home/home.component.html",
})
export class BaseComponent {
    constructor(protected page: Page) {
        page.actionBarHidden = true;
    }
}
