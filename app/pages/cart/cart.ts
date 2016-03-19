import {Page, NavController} from 'ionic-angular';

import {CartItem, CartService} from '../../services/menu-service';

@Page({
  templateUrl: 'build/pages/cart/cart.html'
})
export class CartPage {

    nav : NavController;
    cartList : Array<CartItem>;
    //cartService : CartService;

    constructor(nav: NavController, private cartService : CartService ){
        this.nav = nav;
        
        //this.cartService = cartService;
        
        this.cartList = cartService.getAllCartItems();
        
        console.log(this.cartList);
    }
    
    getTotal(): number{
        return this.cartService.getGrandTotal();
    }
    
    
    /*goToPage(page){
        this.nav.push(page, null, { animate: false });
    }*/
       
}
