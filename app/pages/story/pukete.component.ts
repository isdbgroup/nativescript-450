import {Component} from "@angular/core";
import {BaseComponent} from "../base.component";
import {Page} from "ui/page";


@Component({
    selector: "ns-pukete",
    moduleId: module.id,
    templateUrl: "pukete.component.html",
})
export class PuketeComponent extends BaseComponent {
    constructor(protected page: Page) {
        super(page);
    }
}
