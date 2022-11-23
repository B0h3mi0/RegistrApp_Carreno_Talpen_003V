import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private menuController:MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  
  //método que muestra un mensaje y un botón Ok
  async Ok() {
    const alert = await this.alertController.create({
      header: 'Asistencia Registrada exitosamente!',
      message: ' DUOC UC ',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
