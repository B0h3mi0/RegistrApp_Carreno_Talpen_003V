import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogProfesorPageRoutingModule } from './log-profesor-routing.module';

import { LogProfesorPage } from './log-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LogProfesorPageRoutingModule
  ],
  declarations: [LogProfesorPage]
})
export class LogProfesorPageModule {}
