import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { InteractionService } from '../../services/interaction.service';
import { UserI } from 'src/app/models/models.module';

@Component({
  selector: 'app-login',
  templateUrl: './logprofesor.page.html',
  styleUrls: ['./logprofesor.page.scss'],
})
export class LogprofesorPage implements OnInit {

  datos: UserI = {
    rut: null,
    nombre: null,
    correo: null,
    password: null,
    uid: null,
    perfil: 'alumno'
  };
  credenciales = {
    correo: null,
    password: null
  }

  constructor(private auth: AuthService,
                private interaction: InteractionService,
                private router: Router,
                private alertController: AlertController) {}


  ngOnInit() {}

  async login() {
    await this.interaction.presentLoading('Ingresando....');
    console.log('credenciales -> ', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(error => {
      console.log('error');
      this.interaction.closeLoading();
      this.interaction.presentToast('Usuario o contraseña invalido');
    });
    if (res) {
      console.log('res -> ', res);
      this.interaction.closeLoading();
      this.interaction.presentToast('Ingresado con exito'+ this.datos.nombre);
      this.router.navigate(['/inicio']);
    }
  }
}