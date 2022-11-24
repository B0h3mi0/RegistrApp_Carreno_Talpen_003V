import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearalumPage } from './crearalum.page';

const routes: Routes = [
  {
    path: '',
    component: CrearalumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearalumPageRoutingModule {}
