import {Page, NavController} from 'ionic-angular';

import {MainPage} from './../main/main';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    nav : NavController
    
    constructor(nav: NavController){
        this.nav = nav;
    }
    
    goToMainPage(){
        this.nav.push(MainPage);
    }
    
}
