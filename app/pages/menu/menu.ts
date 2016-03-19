import {Page, NavController} from 'ionic-angular';

import {MenuService, MenuItem} from '../../services/menu-service';

@Page({
  templateUrl: 'build/pages/menu/menu.html',
  providers : [MenuService]
})
export class MenuPage {

    nav : NavController;
    menu : Array<MenuItem>;

    constructor(nav: NavController, menuService:MenuService){
        this.nav = nav;
        
        console.log(menuService.getAllMenuItems());
        
        this.menu = menuService.getAllMenuItems();
    }
    
    /*goToPage(page){
        this.nav.setRoot(page, null, { animate: false });
    }*/
  
}
