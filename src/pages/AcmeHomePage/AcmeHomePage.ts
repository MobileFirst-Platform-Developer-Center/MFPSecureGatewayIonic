import { Component,Renderer,NgZone } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import { AcmeAuthersPagePage } from "../AcmeAuthersPage/AcmeAuthersPage";
import { HomePage } from "../home/home";
import ChallengeHandler from "../../componentScripts/challengeHandler";

@Component({
  selector: 'page-AcmeHomePage',
  templateUrl: 'AcmeHomePage.html'
})
export class AcmeHomePagePage {

  constructor(public navCtrl: NavController, public dataStore:DataStore) {
    
  }
    
 
  AcmeHomePage_Button_779_clickHandler() {
        this.navCtrl.push( AcmeAuthersPagePage, {
                data: {"a":"a"}
              });
    }

    AcmeHomePage_Button_2643_clickHandler() {
      WLAuthorizationManager.logout(this.securityCheckName).then(
        function () {
            WL.Logger.debug("logout onSuccess");
            location.reload();
        },
        function (response) {
            WL.Logger.debug("logout onFailure: " + JSON.stringify(response));
        });
    
 
        this.navCtrl.push( HomePage, {
                data: {"a":"a"}
              });
           
    }
    securityCheckName = "UserLogin";
    
}