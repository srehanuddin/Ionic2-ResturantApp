import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/menu/menu.html'
})
export class MenuPage {

    nav : NavController;

    constructor(nav: NavController){
        this.nav = nav;
    }
    
    /*goToPage(page){
        this.nav.setRoot(page, null, { animate: false });
    }*/
  
}
