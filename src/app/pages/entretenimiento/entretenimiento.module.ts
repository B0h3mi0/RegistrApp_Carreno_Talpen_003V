import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntretenimientoPageRoutingModule } from './entretenimiento-routing.module';

import { EntretenimientoPage } from './entretenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntretenimientoPageRoutingModule
  ],
  declarations: [EntretenimientoPage]
})
export class EntretenimientoPageModule {}
