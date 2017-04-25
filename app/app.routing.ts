import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {KirikiriroaComponent} from "./pages/story/kirikiriroa.component";
import {PapakaingaComponent} from "./pages/story/papakainga.component";
import {PuketeComponent} from "./pages/story/pukete.component";
import {MapComponent} from "./pages/map/map.component";

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "kirikiriroa", component: KirikiriroaComponent},
    {path: "papakainga", component: PapakaingaComponent},
    {path: "pukete", component: PuketeComponent},
    {path: "map/:id", component: MapComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}