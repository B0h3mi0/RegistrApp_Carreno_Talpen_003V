import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { UserI } from '../models/models.module';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authfirebase: AngularFireAuth,
              private alertController: AlertController) {}


  login(correo: string, password: string) {
    return this.authfirebase.signInWithEmailAndPassword(correo, password)
  }

  registrarUser(datos: UserI) {
   return this.authfirebase.createUserWithEmailAndPassword(datos.correo, datos.password);

  }

  stateUser() {
    return this.authfirebase.authState
  }
  logout() {
    this.authfirebase.signOut();
  }



}
