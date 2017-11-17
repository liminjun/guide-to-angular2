import { Directive, Input } from "@angular/core";
import { HostListener, HostBinding } from "@angular/core/src/metadata/directives";
import { ShowOneContainer } from "./show-one-container.directive";

@Directive({
    selector:"[showOneTrigger]"
})

export class ShowOneTrigger{
    @Input('showOneTrigger')
    id:string;

    @Input()
    active=false;

    constructor(private showOneContainer:ShowOneContainer){
        showOneContainer.add(this);
    }

    @HostListener('click')
    click(){
        console.log("Hello World.");
        this.showOneContainer.show(this.id);
    }

    @HostBinding('class.selected')
    get selected(){
        return this.active;
    }
}