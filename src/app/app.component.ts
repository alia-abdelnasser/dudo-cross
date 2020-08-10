import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { StarterPage } from '../pages/starter/starter';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  rootPage: any = StarterPage;
  pages: Array<{ title: string, component: any, icon: any }>;
  isLoading: boolean = false;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    events: Events) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    events.subscribe("showLoader", () => { this.isLoading = true; });

    events.subscribe("hideLoader", () => { this.isLoading = false; });

    this.pages = [];
    this.pages.push({ title: 'home', component: TabsPage, icon: 'ios-home-outline' });
    // this.pages.push({ title: 'Chats', component: ConstructionPage, icon: 'ios-chatbubbles-outline' });
    // this.pages.push({ title: 'Help', component: ConstructionPage, icon: 'ios-help-circle-outline' });
    // this.pages.push({ title: 'About', component: ConstructionPage, icon: 'ios-information-circle-outline' });
    // this.pages.push({ title: 'Logout', component: Login, icon: 'ios-exit-outline' });
  }
}
