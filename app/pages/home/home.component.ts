import {Component} from "@angular/core";
import {BaseComponent} from "../base.component";
import {Page} from "ui/page";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "home.component.html",
})
export class HomeComponent extends BaseComponent {
    constructor(protected page: Page) {
        super(page);
    }
}
