import {Page, NavController} from 'ionic-angular';

import {MenuService, MenuItem, CartService} from '../../services/menu-service';

@Page({
  templateUrl: 'build/pages/menu/menu.html'
})
export class MenuPage {

    nav : NavController;
    menu : Array<MenuItem>;
    //menuService : MenuService;
    //cartService : CartService;
    
    constructor(nav: NavController, private menuService:MenuService, private cartService : CartService ){
        
        this.nav = nav;
        //this.menuService = menuService;
        //this.cartService = cartService;
             
        this.menu = menuService.getAllMenuItems();
    }
    
    addToCart(item){
        console.log(item);        
        this.cartService.addItem(item, 1);
        
        console.log(this.cartService.getAllCartItems());
    }
    
    
    
    /*goToPage(page){
        this.nav.setRoot(page, null, { animate: false });
    }*/
  
}
