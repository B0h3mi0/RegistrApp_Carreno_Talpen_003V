import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearalumPageRoutingModule } from './crearalum-routing.module';

import { CrearalumPage } from './crearalum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearalumPageRoutingModule
  ],
  declarations: [CrearalumPage]
})
export class CrearalumPageModule {}
