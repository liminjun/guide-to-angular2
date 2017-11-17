


import { Component, NgModule } from "@angular/core";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";

import { Hero } from './hero/hero.directive';
import { Heroes } from './heroes/heroes.component';

import { ShowOneContainer } from './show-one-container.directive';
import { ShowOne } from './show-one.directive';
import {ShowOneTrigger} from './show-one.trigger.directive';



@Component({
    selector: 'app',
    template: `
    <p>Hero List.</p>
    <heroes>
    <hero id="1" name="Superman"></hero>
    <hero id="2" name="Batman"></hero>
    <hero id="3" name="Batgirl"></hero>
    <hero id="3" name="Robin"></hero>
    <hero id="4" name="Flash"></hero>
    <hero id="5" name="Green Lantern"></hero>
</heroes>

<div class="toggle-panel" *ngIf="show" [hidden]="hidden" [style.visibility]='visibility'>
Toggle Me
</div>
<button (click)="toggleShow()">Show</button>
<button (click)="toggleHidden()">Hidden</button>
<button (click)="toggleVisible()">Visible</button>

<div class="tab-container" showOneContainer>
<ul class="tab-buttons">
    <li showOneTrigger="superman" [active]="true">Superman</li>
    <li showOneTrigger="batman">Batman</li>
    <li showOneTrigger="flash">Flash</li>
</ul>

<div class="tab-panel" showOne="superman" [active]="true">
    <div class="logo superman"></div>
</div>
<div class="tab-panel" showOne="batman">
    <div class="logo batman"></div>
</div>
<div class="tab-panel" showOne="flash">
    <div class="logo flash"></div>
</div>
</div>
    `
})
export class App {
    show = true;
    hidden = false;
    visibility = 'visible';

    toggleShow() {
        this.show = !this.show;
    }
    toggleHidden() {
        this.hidden = !this.hidden;
    }
    toggleVisible() {
        this.visibility = this.visibility == 'visible' ? 'hidden' : 'visible';
    }
}


@NgModule({
    declarations: [App, Hero, Heroes],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);


