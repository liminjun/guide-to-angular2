import { Component, Input } from "@angular/core";
import { EventEmitter } from "@angular/core/src/event_emitter";



@Component({
    selector: 'color-picker',
    template:`
    <div class="color-title" [ngStyle]="{'color':color}">Pick a Color:</div>
    <div class="color-picker">
    <div class="color-sample color-sample-blue" (click)="choose('${BLUE}')"></div>
    <div class="color-sample color-sample-red" (click)="choose('${RED}'></div>
    </div>
    `
})


export class ColorPicker  {
    @Input()
    color:string;

    @Output("color")
    colorOutput=new EventEmitter();

    choose(color:string){
        this.color=color;
        this.colorOutput.emit(color);
    }

    reset(){
        this.choose("black");
    }

}