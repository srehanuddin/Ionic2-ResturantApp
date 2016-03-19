import {Page, NavController, Alert, ViewController, Modal} from 'ionic-angular';

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
        
        //console.log(this.cartList);
    }
    
    checkout(){
        let modal = Modal.create(MyModal);
        this.nav.present(modal);
    }
    
    getTotal(): number{
        return this.cartService.getGrandTotal();
    }
    
    removeItemFromCart(item){
        //this.cartService.removeItemById(item.id);
        
        let self = this;
        
        let alert = Alert.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to remove food item from cart?',
            buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            },
            {
                text: 'Remove',
                handler: () => {
                    console.log('Buy clicked');                    
                    self.cartService.removeItemById(item.id);
                }
            }
            ]
        });
        this.nav.present(alert);
        
    }
    
    quantityPlus(item){
        this.cartService.quantityPlus(item);
    }
    
    quantityMinus(item){
        if(item.quantity > 1){
            this.cartService.quantityMinus(item);
        } else {
            let alert = Alert.create({
                title: 'Error',
                subTitle: 'Quantity is 1, you cant reduce it, if you want to remove, please press remove button.',
                buttons: ['Ok']
            });
            this.nav.present(alert);
        }
    }
    
    
    /*goToPage(page){
        this.nav.push(page, null, { animate: false });
    }*/
       
}


@Page({
  templateUrl: 'build/pages/cart/checkout.html'
})
class MyModal {
  constructor(private viewCtrl: ViewController, private cartService : CartService) {
    //this.viewCtrl = viewCtrl;
  }
  
  close() {
    this.viewCtrl.dismiss();
  }
  
  Checkout(){
      this.cartService.emptyCart();
      this.viewCtrl.dismiss();
  }
}