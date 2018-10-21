import { Component } from '@angular/core';
import {ViewController, navParams } from 'ionic-angular';


@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  lat: number;
  lng: number;

  constructor(private viewCtrl: ViewController, private navParams: navParams) {
    this.lat = this.navParams.data.location.lat;
    this.lng = this.navParams.data.location.lng;
  }

  onDismiss(){
    this.viewCtrl.dismiss();
  }

}
