/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);  // 'deviceready' is an id tag in index.html
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        var contact = navigator.contacts.pickContact(function(contact){
                console.log('The following contact has been selected:' + JSON.stringify(contact));
            },function(err){
                console.log('Error: ' + err);
            });

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

// var onSuccess = function(position) {
//     alert('Latitude: '          + position.coords.latitude          + '\n' +
//           'Longitude: '         + position.coords.longitude         + '\n');
//         };
// var myLocation = navigator.geolocation.getCurrentPosition(onSuccess);

// var contact = navigator.contacts.pickContact(function(contact){
//         console.log('The following contact has been selected:' + JSON.stringify(contact));
//     },function(err){
//         console.log('Error: ' + err);
//     });

// function onResume(resumeEvent) {
//     if(resumeEvent.pendingResult) {
//         if(resumeEvent.pendingResult.pluginStatus === "OK") {
//             var contact = navigator.contacts.create(resumeEvent.pendingResult.result);
//             successCallback(contact);
//         } else {
//             failCallback(resumeEvent.pendingResult.result);
//         }
//     }
// }

// function onResume(resumeEvent) {
//     if(resumeEvent.pendingResult) {
//         if(resumeEvent.pendingResult.pluginStatus === "OK") {
//             var navigator.contacts.pickContact(function(contact){
//                     console.log('The following contact has been selected:' + JSON.stringify(contact));
//                 },function(err){
//                     console.log('Error: ' + err);
//                 });
//         } else {
//             failCallback(resumeEvent.pendingResult.result);
//         }
//     }
// }
