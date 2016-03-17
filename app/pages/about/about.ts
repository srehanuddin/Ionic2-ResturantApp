import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {

    nav : NavController;

    constructor(nav: NavController){
        this.nav = nav;
    }
    
    /*goToPage(page){
        this.nav.setRoot(page, null, { animate: false });
    }*/
  
}
