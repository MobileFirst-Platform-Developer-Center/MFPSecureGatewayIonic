import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DataStore } from './dataStore';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AcmeHomePagePage } from "../pages/AcmeHomePage/AcmeHomePage";
import { AcmeAuthersPagePage } from "../pages/AcmeAuthersPage/AcmeAuthersPage";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ,AcmeHomePagePage,AcmeAuthersPagePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ,AcmeHomePagePage,AcmeAuthersPagePage],
  providers: [
    StatusBar,
    SplashScreen,
    DataStore,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
