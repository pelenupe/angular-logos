import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoCreateComponent } from './logo-create/logo-create.component';
import { LogoViewComponent } from './logo-view/logo-view.component';
import { LogoUpdateComponent } from './logo-update/logo-update.component';
import { LogoDeleteComponent } from './logo-delete/logo-delete.component';

const routes: Routes = [
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: 'view', component: LogoViewComponent },
  { path: 'create', component: LogoCreateComponent },
  { path: 'update/:id', component: LogoUpdateComponent },
  { path: 'delete/:id', component: LogoDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }