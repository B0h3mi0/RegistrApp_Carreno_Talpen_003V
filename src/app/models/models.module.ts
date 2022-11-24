import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelsModule { }

export interface UserI {
  rut: string;
  nombre: string;
  correo: string;
  password: string;
  uid: string;
  perfil: 'alumno' | 'profesor';

}
