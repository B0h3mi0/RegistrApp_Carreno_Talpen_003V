import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { UserI } from 'src/app/models/models.module';



@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  login = false;
  rol: 'alumno' | 'profesor' = null;

  constructor(private menuController:MenuController,
              private alertController: AlertController,
              private auth: AuthService,
              private interaction: InteractionService,
              private firestore: FirestoreService,
              private router: Router ) { 
                this.auth.stateUser().subscribe( res => {
                  if (res) {
                        console.log('Está logeado :D');
                        this.login = true;
                        this.getDatosUser(res.uid);
                  } else {
                    console.log('no está logeado :c');
                    this.login = false;
                   //  this.router.navigate(['/home'])
                  }
              });
              }

  ngOnInit() {
  }

  getDatosUser(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<UserI>(path, id).subscribe( res => {
        console.log('datos -> ', res);
        if (res) {
          this.rol = res.perfil;
        }
    });
  }



  loginApp() {
    this.login = true;
}

logout() {
  this.auth.logout();
  this.interaction.presentToast('Sesion finalizada. . .');
  this.router.navigate(['']);
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