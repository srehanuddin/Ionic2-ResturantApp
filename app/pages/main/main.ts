import {Page, NavController} from 'ionic-angular';

import {ContactPage} from './../contact/contact';

@Page({
  templateUrl: 'build/pages/main/main.html'
})
export class MainPage {

    nav : NavController;
    
    //Pages
    contactPage = ContactPage;

    constructor(nav: NavController){
        this.nav = nav;
    }
    
    goToPage(page){
        this.nav.push(page, null, { animate: false });
    }
       
}
