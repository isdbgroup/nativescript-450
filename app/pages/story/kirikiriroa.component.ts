import {Component} from "@angular/core";
import {Page} from "ui/page";
import {BaseComponent} from "../base.component";


@Component({
    selector: "ns-kirikiriroa",
    moduleId: module.id,
    templateUrl: "kirikiriroa.component.html",
})
export class KirikiriroaComponent extends BaseComponent {
    constructor(protected page: Page) {
        super(page);
    }
}
