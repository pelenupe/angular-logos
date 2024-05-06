import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogoViewComponent } from './logo-view/logo-view.component';
import { LogoCreateComponent } from './logo-create/logo-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: 'view', component: LogoViewComponent },
  { path: 'create', component: LogoCreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LogoViewComponent,
    LogoCreateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
