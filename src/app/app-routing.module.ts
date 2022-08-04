import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  { path: '', component: CustomerFormComponent },
  {
    path: 'info',
    loadComponent: () =>
      import('./info-app/info-app.component').then((c) => c.InfoAppComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
