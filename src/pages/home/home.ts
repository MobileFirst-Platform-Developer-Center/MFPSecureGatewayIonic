/**
 * Copyright 2018 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;
  status: string;

  constructor(public navCtrl: NavController,  private zone: NgZone) {
    this.title = "Hello MobileFirst";
  }

  getRemoteData() {
    this.zone.run(() => {
      this.title = "Hello Getting Your On-premises Data";
      this.status = "Connecting to On-premises Server...";
      
    });
    var resourceRequest = new WLResourceRequest("/adapters/JavaHTTP/",WLResourceRequest.GET);
    resourceRequest.send().then((response) => {
      console.log('-->  getRemoteData(): Success ', response);
      this.zone.run(() => {
        this.title = "Your on-premises Data Is : ";
        this.status = response.responseText;
      });
       
    },
    function(error){
        console.log('-->  getRemoteData():  ERROR ', error.responseText);
        this.zone.run(() => {
          this.title = "Bummer...";
          this.status = "Failed to Get Data From On-premises ";
        });
    });
  }

}
