import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserI } from 'src/app/models/models.module';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  login = false;
  rol: 'alumno' | 'profesor' = null;


  constructor(public popoverController: PopoverController,
              private auth: AuthService,
              private interaction: InteractionService,
              private firestore: FirestoreService,
              private router: Router) {

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

  ngOnInit() {}



  loginApp() {
      this.login = true;
  }

  logout() {
    this.auth.logout();
    this.interaction.presentToast('Sesion finalizada. . .');
    this.router.navigate(['/home']);
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

}
