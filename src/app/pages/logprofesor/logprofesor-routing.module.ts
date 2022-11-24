import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogprofesorPage } from './logprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: LogprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogprofesorPageRoutingModule {}
