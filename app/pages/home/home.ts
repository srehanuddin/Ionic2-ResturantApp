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
    
    goToHome(){
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.nav.push(DashPage);
    }
    
}
