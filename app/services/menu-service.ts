import {Injectable} from 'angular2/core';

/**
 * Menu Item
 */
export class MenuItem {
    id:number;
    title:string;
    price:number;
    image:string;
    
    constructor(id:number, title : string, price:number, image: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
    }
}


@Injectable()
export class MenuService {
    menu : Array<MenuItem>; 
    
    constructor(){
        this.menu = [
            new MenuItem(1, "Egg & Fries", 120, "1.png"),
            new MenuItem(2, "Hot Dog", 300, "2.png"),
            new MenuItem(3, "Sandwich", 220, "3.png"),
            new MenuItem(4, "Soup", 80, "4.png"),
            new MenuItem(5, "Steak", 600, "5.png"),
            new MenuItem(6, "Burger", 350, "6.png"),
            new MenuItem(7, "Pizza", 900, "7.png"),
            new MenuItem(8, "Cake", 550, "8.png"),
        ]
    }
    
    getAllMenuItems(){
        return this.menu;
    }
}


/**
 * Cart Item
 */
export class CartItem {
    id:number;
    title:string;
    price:number;
    image:string;
    quantity:number;
    
    constructor(item : MenuItem, quantity:number) {
        this.id = item.id;
        this.title = item.title;
        this.price = item.price;
        this.image = item.image;
        this.quantity = quantity;
    }
}


@Injectable()
export class CartService {
    list : Array<CartItem>; 
    
    constructor(){
        this.list = []
    }
    
    getAllCartItems(){
        return this.list;
    }
    
    getItemById(id: Number){
        for(var i = 0; i < this.list.length; i++){
            if(this.list[i].id == id){
                return this.list[i];
            }
        }
    }
    
    addItem(item : MenuItem, quantity:number){
        
        var isExists : boolean = false;
        var id = item.id;
        
        for(var i = 0; i < this.list.length; i++){
            if(this.list[i].id == id){
                this.list[i].quantity += quantity;
                isExists = true;
                break;
            }
        }
        if(!isExists){
            this.list.push(new CartItem(item, quantity));
        }
    }
    
    removeItemById(id){        
        for(var i = 0; i < this.list.length; i++){
            if(this.list[i].id == id){
                this.list.splice(i, 1);
                break;
            }
        }        
    }
    
    emptyCart(){        
        for(var i = 0; i < this.list.length; i++){
            this.list.splice(i, 1);
            i--;
        }    
    }
    
    quantityPlus(item){
        item.quantity += 1;
    }
    
    quantityMinus(item){
        item.quantity -= 1;
    }
    
    getGrandTotal(): number{
        var amount = 0;
        for(var i = 0; i < this.list.length; i++){
            amount += (this.list[i].price * this.list[i].quantity);
        }
        return amount;
    }
}
