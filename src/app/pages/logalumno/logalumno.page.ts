import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './logalumno.page.html',
  styleUrls: ['./logalumno.page.scss'],
})
export class LogalumnoPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(private alertController: AlertController, 
              private navController: NavController, 
              private fb: FormBuilder) {
                this.formularioLogin = fb.group({ 
                  'correo': new FormControl("", Validators.required), 
                  'password': new FormControl("", Validators.required)
                })
    }

  ngOnInit() {
  }

  


  async alertMsg(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }

}
