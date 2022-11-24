import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamQrPage } from './cam-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CamQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamQrPageRoutingModule {}
