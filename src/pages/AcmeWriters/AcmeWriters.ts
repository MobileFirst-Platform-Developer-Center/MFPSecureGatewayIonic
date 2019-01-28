import { Component,Renderer,NgZone } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';

@Component({
  selector: 'page-AcmeWriters',
  templateUrl: 'AcmeWriters.html'
})
export class AcmeWritersPage {
title: string;
 writersList: string[];
  constructor(public navCtrl: NavController, public dataStore:DataStore,private zone: NgZone) {
  this.writersList = [];
   this.zone.run(() => {
     this.title = "Fetching Acme Writers Names....";
     });
      
    var resourceRequest = new WLResourceRequest("/adapters/JavaHTTP/",WLResourceRequest.GET);
    resourceRequest.send().then((response) => {
      console.log('-->  Fetching Acme Writers : Success ', JSON.stringify(response));
      this.zone.run(() => {
      this.title = "List of Acme Writers Names";
        this.writersList=response.responseJSON.writers.EnglishLanguage.fiction.pen.name;
    
      });
       
    },
    function(error){
        console.log('-->  Fetching Acme Writers:  ERROR ', JSON.stringify(error.responseText));
        this.title = "Failed to Fectch Acme Writers";
      });
  }

}