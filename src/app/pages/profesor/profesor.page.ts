import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  constructor(private menuController:MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
    //método que muestra un mensaje y un botón Ok
    async Generate() {
      const alert = await this.alertController.create({
        header: 'Código generado!',
        message: ' DUOC UC ',
        buttons: ['OK'],
      });
      await alert.present();
    }
}