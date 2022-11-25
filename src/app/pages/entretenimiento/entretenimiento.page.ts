import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Article } from '../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { UserI } from 'src/app/models/models.module';

@Component({
  selector: 'app-entretenimiento',
  templateUrl: './entretenimiento.page.html',
  styleUrls: ['./entretenimiento.page.scss'],
})
export class EntretenimientoPage implements OnInit {

  noticias: Article[] = [];
  login = false;
  rol: 'alumno' | 'profesor' = null;

  constructor(private menuController:MenuController,
    private alertController: AlertController,
    private auth: AuthService,
    private interaction: InteractionService,
    private apiService: ApiService,
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
    this.apiService.getTopHeadLines().subscribe(resp => {
      console.log('noticias', resp);
      this.noticias.push(...resp.articles);
    })
    
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

}

