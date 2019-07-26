import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KindComponent } from './kind/kind.component';
import { KindUpdateComponent } from './kind-update/kind-update.component';

import { KindAddComponent } from './kind-add/kind-add.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OudersComponent } from './ouders/ouders.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'kind', component: KindComponent },
  { path: 'kind/edit', component: KindUpdateComponent },
  { path: 'kind/add', component: KindAddComponent },
  { path: 'ouders', component: OudersComponent },
  { path: 'home', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
