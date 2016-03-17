import {Page, NavController} from 'ionic-angular';

import {DashPage} from './../dash/dash';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    nav : NavController
    
    constructor(nav: NavController){
        this.nav = nav;
    }
    
    goToDashboard(){
        this.nav.push(DashPage);
    }
    
}
