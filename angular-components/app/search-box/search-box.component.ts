import {Component,Input} from "@angular/core";

declare const module;

@Component({
    selector:'search-box',
    moduleId:module.id,
    // template:`<input placeholder="{{text}}" #input>
    // <button class="btn-clear" (click)="clear(input)">Clear</button>`
    templateUrl:'search-box.component.html'
})


export class SearchBox{
    @Input('placeholder')
    text="Type your search";

    
    clear(input){
        console.log("Clear clicked.");
        input.value='';
    }

}