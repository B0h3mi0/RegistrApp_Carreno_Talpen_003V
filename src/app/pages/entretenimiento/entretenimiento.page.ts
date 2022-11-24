import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-entretenimiento',
  templateUrl: './entretenimiento.page.html',
  styleUrls: ['./entretenimiento.page.scss'],
})
export class EntretenimientoPage implements OnInit {

  noticias: Article[] = [];

  constructor(private menuController: MenuController, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTopHeadLines().subscribe(resp => {
      console.log('noticias', resp);
      this.noticias.push(...resp.articles);
    })

  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}

