import {Page, MenuController, IonicApp, NavController} from 'ionic-angular';
//import {ngOnInit} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/dash/dash.html'
})
export class DashPage {

loginPage = LoginPage;
nav : NavController

  constructor(public app: IonicApp, public menu: MenuController, nav: NavController){
        this.nav = nav;
    this.app = app;
    this.menu = menu;
    
    
  }
  
  ngOnInit(){
    //alert("Test")
    //this.menu.close();
    //this.openPage(this.loginPage)
}

  openPage() {
    // close the menu when clicking a link from the menu
    //this.menu.close();

    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(LoginPage);
    //this.nav.push(LoginPage);
    //this.nav.setRoot(this.loginPage)
  }
    
}


@Page({
  template: '<h1>REHAN</h1>'
})
export class LoginPage {

  
    
}
