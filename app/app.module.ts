import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";
import {KirikiriroaComponent} from "./pages/story/kirikiriroa.component";
import {PapakaingaComponent} from "./pages/story/papakainga.component";
import {PuketeComponent} from "./pages/story/pukete.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        KirikiriroaComponent,
        PapakaingaComponent,
        PuketeComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
