import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearQrPageRoutingModule } from './crear-qr-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { CrearQrPage } from './crear-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearQrPageRoutingModule,
    CrearQrPage
  ],
  declarations: [CrearQrPage]
})
export class CrearQrPageModule {}
