import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
   
  }
  goToMyPagina(){
    //go to Pagina
    this.navCtrl.push('paginay');
  }

}
