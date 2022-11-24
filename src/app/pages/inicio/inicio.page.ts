import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { IonModal } from '@ionic/angular';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { UserI } from 'src/app/models/models.module';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(
    private menuController: MenuController,
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private popoverController: PopoverController
  ) {



  }

  ngOnInit() {}

  async openMenu(ev: any) {
    console.log('abrir menu lateral');
    const menu = await this.popoverController.create({
      component: MenuComponent,
      cssClass: 'my-custom-class',
      translucent: true,
      event: ev,
    });
    await menu.present();
  }

}


