import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KindComponent } from './kind/kind.component';
import { KindUpdateComponent } from './kind-update/kind-update.component';

import { KindAddComponent } from './kind-add/kind-add.component';
import { AppComponent } from './app.component';

const routes: Routes = [{ path: 'Kind', component: KindComponent },
  { path: 'kind', component: KindComponent },
{ path: 'Kind/Edit', component: KindUpdateComponent },
{ path: 'Kind/Add', component: KindAddComponent },
{ path: 'Home', component: AppComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
