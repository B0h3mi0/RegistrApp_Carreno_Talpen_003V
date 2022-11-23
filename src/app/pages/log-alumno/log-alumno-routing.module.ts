import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogAlumnoPage } from './log-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: LogAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogAlumnoPageRoutingModule {}
