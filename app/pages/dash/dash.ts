import {Page, NavController} from 'ionic-angular';

import {ContactPage} from './../contact/contact';

@Page({
  templateUrl: 'build/pages/dash/dash.html'
})
export class DashPage {

    nav : NavController;

    constructor(nav: NavController){
        this.nav = nav;
    }    
}
