import {Component} from "@angular/core";
import {Page} from "ui/page";
import {BaseComponent} from "../base.component";


@Component({
    selector: "ns-papakainga",
    moduleId: module.id,
    templateUrl: "papakainga.component.html",
})
export class PapakaingaComponent extends BaseComponent {
    constructor(protected page: Page) {
        super(page);
    }
}
