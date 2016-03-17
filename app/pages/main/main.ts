import {Page, NavController} from 'ionic-angular';

import {ContactPage} from './../contact/contact';
import {DashPage} from './../dash/dash';
import {AboutPage} from './../about/about';
import {MenuPage} from './../menu/menu';
//import {MainPage} from './../main/main';

@Page({
  templateUrl: 'build/pages/main/main.html'
})
export class MainPage {

    nav : NavController;
    
    //Pages
    contactPage = ContactPage;
    dashPage = DashPage;
    aboutPage = AboutPage;
    menuPage = MenuPage;
    //mainPage = MainPage;

    constructor(nav: NavController){
        this.nav = nav;
    }
    
    goToPage(page){
        this.nav.setRoot(page, null, { animate: false });
    }
       
}
