import { Component } from '@angular/core';
import {ViewController } from 'ionic-angular';


@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  lat: number;
  lng: number;

  constructor(private viewCtrl: ViewController) {
    this.lat = 65;
    this.lng = 65;
  }

  onDismiss(){
    this.viewCtrl.dismiss();
  }

}
