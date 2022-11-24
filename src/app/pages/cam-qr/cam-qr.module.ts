import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CamQrPageRoutingModule } from './cam-qr-routing.module';

import {QRCodeModule} from 'angularx-qrcode';
import { CamQrPage } from './cam-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamQrPageRoutingModule,
    QRCodeModule, ],
  declarations: [CamQrPage]
})
export class CamQrPageModule {}
