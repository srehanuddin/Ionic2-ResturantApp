import {Page, NavController, App, IonicApp} from 'ionic-angular';

import {ContactPage} from './../contact/contact';

@Page({
  templateUrl: 'build/pages/dash/dash.html'
})
export class DashPage {

    nav : NavController;
    
    contactPage;
    tab1;

    constructor(nav: NavController, private app: IonicApp){
        this.nav = nav;
        this.contactPage = ContactPage;
        
        this.tab1 = ContactPage;
    }
    
    goToPage(page){
        
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
        
        //this.nav.setRoot(ContactPage);
        
        //console.log("TEST")
        //let goto = this.nav.setRoot;
        //goto(page)
        //return;
        /*switch (page){
            case 'ContactPage':
                //goto(ContactPage);
                break;
        }*/
        
    }
       
}
