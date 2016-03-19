import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/cart/cart.html'
})
export class CartPage {

    nav : NavController

    constructor(nav: NavController){
        this.nav = nav;
    }
    
    /*goToPage(page){
        this.nav.push(page, null, { animate: false });
    }*/
       
}
