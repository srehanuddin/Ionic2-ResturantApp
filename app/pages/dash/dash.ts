import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/dash/dash.html'
})
export class DashPage {

    nav : NavController

    constructor(nav: NavController){
        this.nav = nav;
    }
    
    /*goToPage(page){
        this.nav.push(page, null, { animate: false });
    }*/
       
}
