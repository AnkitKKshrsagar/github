import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

const routes: Routes = [
  {
    path: 'login', component:LoginComponent,
  },

  {
    path: 'p1', component:P1Component
  },

  {
    path: 'p2', component:P2Component
  },

  {
    path: 'c1', component:C1Component
  },

  {
    path: 'c2', component:C2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
