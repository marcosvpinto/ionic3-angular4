import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }

  ionViewDidLoad(){
    this.getCountries();
  }

  getCountries(){
    this.rest.getCountries()
      .subscribe(
        countries=>this.countries = countries,
        error=>this.errorMessage = <any>Error
      );
  }

}
