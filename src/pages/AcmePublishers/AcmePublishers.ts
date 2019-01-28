import { Component,Renderer,NgZone } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import { AcmeWritersPage } from "../AcmeWriters/AcmeWriters";
import { HomePage } from "../home/home";

@Component({
  selector: 'page-AcmePublishers',
  templateUrl: 'AcmePublishers.html'
})
export class AcmePublishersPage {

  constructor(public navCtrl: NavController, public dataStore:DataStore) {

  }

    AcmePublishers_Button_4745_clickHandler() {
        this.navCtrl.push( AcmeWritersPage, {
                data: {"a":"a"}
              });
    }

    AcmePublishers_Button_6135_clickHandler() {
    WLAuthorizationManager.logout(this.securityCheckName).then(
        function () {
            WL.Logger.debug("logout onSuccess");
            location.reload();
        },
        function (response) {
            WL.Logger.debug("logout onFailure: " + JSON.stringify(response));
        });
       
    }
    securityCheckName = "UserLogin";
}