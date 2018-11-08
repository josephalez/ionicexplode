import { Component } from '@angular/core';
import {ViewController, NavParams } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  location: {lat: number,lng: number}
  map: any;

  constructor(private viewCtrl: ViewController, private NavParams: NavParams) {
    this.location = this.NavParams.get('location');
    //this.location = this.NavParams.data.location;     esta forma deberia servir tambien
  }

  ionViewDidEnter(){
    //Set latitude and longitude of some place
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { 
        lat: this.location.lat,//    cambia los valores de la latitud y la
        lng: this.location.lng },//  longitud si no quieres que se vea tu ubicación
      zoom: 15
    });
  }
  

  onDismiss(){
    this.viewCtrl.dismiss();
  }

}
