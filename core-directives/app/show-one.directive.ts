import { Directive, Input } from "@angular/core";
import { HostBinding } from "@angular/core/src/metadata/directives";

@Directive({
    selector:'[showOne]'
})


export class ShowOne{
    @Input('showOne')
    id:string;

    @Input()
    active=false;

    @HostBinding()
    get hidden(){
        return !this.active;
    }
}