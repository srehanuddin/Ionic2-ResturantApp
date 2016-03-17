import {Page, MenuController, IonicApp, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/dash/dash.html'
})
export class DashPage {

    nav : NavController;

    constructor(nav: NavController){
        this.nav = nav;
    }    
}
