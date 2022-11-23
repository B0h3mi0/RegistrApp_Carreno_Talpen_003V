import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogAlumnoPageRoutingModule } from './log-alumno-routing.module';

import { LogAlumnoPage } from './log-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogAlumnoPageRoutingModule
  ],
  declarations: [LogAlumnoPage]
})
export class LogAlumnoPageModule {}
