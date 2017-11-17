import { Component, Input } from "@angular/core";



@Component({
    selector: 'search-box',
    // template:`<input placeholder="{{text}}" #input>
    // <button class="btn-clear" (click)="clear(input)">Clear</button>`
    templateUrl: 'search-box.component.html',
    styleUrls:['search-box.component.css']
})


export class ColorPreviewer {
    @Input('placeholder')
    text = "Type your search";


    clear(input) {
        console.log("Clear clicked.");
        input.value = '';
    }

}