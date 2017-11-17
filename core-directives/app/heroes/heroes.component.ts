import { Component,ContentChildren,QueryList } from "@angular/core";

import {Hero} from '../hero/hero.directive';
const HEROES= [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];

@Component({
    selector: 'heroes',
    templateUrl:'app/heroes/heroes.component.html'
})


export class Heroes {
    @ContentChildren(Hero)
    heroes:QueryList<Hero>;
}