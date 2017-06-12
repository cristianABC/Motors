import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat: number ;
  lng: number ;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

  ngOnInit(){
   this.geolocation.getCurrentPosition().then((resp) => {
     console.log(resp.coords.latitude);
     console.log(resp.coords.longitude);
     this.lat= resp.coords.latitude;
     this.lng= resp.coords.longitude;
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

  }

  llamarGrua(){
    console.log("Grua Solicitada");
  }

}
