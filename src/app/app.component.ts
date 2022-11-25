import { Component, NgModule, ElementRef, ViewChild, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { IonModal, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
   




  constructor(private alertController: AlertController){}
  

  ngOnInit() {}






}
