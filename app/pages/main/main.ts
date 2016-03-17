import {Page, NavController} from 'ionic-angular';

import {ContactPage} from './../contact/contact';
import {DashPage} from './../dash/dash';
//import {MainPage} from './../main/main';

@Page({
  templateUrl: 'build/pages/main/main.html'
})
export class MainPage {

    nav : NavController;
    
    //Pages
    contactPage = ContactPage;
    dashPage = DashPage;
    //mainPage = MainPage;

    constructor(nav: NavController){
        this.nav = nav;
    }
    
    goToPage(page){
        this.nav.setRoot(page, null, { animate: false });
    }
       
}
