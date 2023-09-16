import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dz_2';
  infoCar = true;
  infoPlane = false;
  infoShip = false;

  showCar (){
    this.infoCar = true;
    this.infoPlane = false;
    this.infoShip = false;
  }
  showPlane(){
    this.infoCar = false;
    this.infoPlane = true;
    this.infoShip = false;
  }
  showShip(){
    this.infoCar = false;
    this.infoPlane = false;
    this.infoShip = true;
  }
}
