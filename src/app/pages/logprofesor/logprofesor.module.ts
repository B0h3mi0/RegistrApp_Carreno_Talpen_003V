import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogprofesorPageRoutingModule } from './logprofesor-routing.module';

import { LogprofesorPage } from './logprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogprofesorPageRoutingModule
  ],
  declarations: [LogprofesorPage]
})
export class LogprofesorPageModule {}
