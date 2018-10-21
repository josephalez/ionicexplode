import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PlacesService } from "../../services/places.service";
import { NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  location: {lat: number, lng: number} = {lat:0, lng:0};

  constructor(private PlacesService: PlacesService, private navCtrl: NavController, private geolocation: Geolocation) {}

  onAddPlace(value: {title: string}){
    this.PlacesService.addPlace({title: value.title, location: this.location});
    this.navCtrl.pop();
  }
  
  onLocateUser(){
    this.geolocation.getCurrentPosition()
    .then(
      (location) => {
        console.log('location fetched successfully');
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
        console.log(location);
      }
    )
    .catch(
      (error) => console.log({
        status: 'an error occurred',
        error: error
      })
    );
  }

}
