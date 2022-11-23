import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogProfesorPage } from './log-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: LogProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogProfesorPageRoutingModule {}
