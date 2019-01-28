IBM MobileFirst Platform Foundation
===
## MFP SecureGateway Ionic
A sample Ionic application with MobileFirst Capabilities which demonstrate getting the data hosted in on-premses environment via HTTP adapter through [Secure Gateway service](https://console.bluemix.net/docs/services/SecureGateway/secure_gateway.html)

### Usage
2.Use either Maven, MobileFirst CLI or your IDE of choice to build and deploy the available ResourceAdapter and UserLogin adapters.
The UserAuthentication Security Check adapter can be found in https://github.com/MobileFirst-Platform-Developer-Center/SecurityCheckAdapters/tree/release80.

1. From a command-line window, navigate to the project's root folder and run the commands:
 - `ionic cordova plugin add cordova-plugin-mfp` - to add MFP plugin
 - `ionic cordova platform add` - to add a platform.
 - `mfpdev app register` - to register the application.
 - `ionic cordova run ios|androoid -- --buildFlag="-UseModernBuildSystem=0"` - to run the application.

3. Run the application in an Android Emulator, iOS Simulator, Browser or physical device. Press the **Get on-premise Data** button to recieve the data from on-premises environment.

## Node JS HTTP Project
 A sample node js project which creates a HTTP endpoint in on-premises/local environment whith sample data hosted on it.
 
### Usage
1. From a command-line window, navigate to the project's root folder and run the commands:
 
 - `npm install` - to install package depenedencies 
 -  `node app.js` -to start a server 

 
 
### Supported Levels
IBM MobileFirst Platform Foundation 8.0

### License
Copyright 2018 IBM Corp.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
att
http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
