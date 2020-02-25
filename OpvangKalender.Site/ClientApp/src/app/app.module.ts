import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KindComponent } from './kind/kind.component';
import { KindAddComponent } from './kind-add/kind-add.component';
import { KindUpdateComponent } from './kind-update/kind-update.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KindDataService } from '../app/DataService/KindDataService';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OudersComponent } from './ouders/ouders.component';
import { OudersAddComponent } from './ouders-add/ouders-add.component';
import { OudersUpdateComponent } from './ouders-update/ouders-update.component';
@NgModule({
  declarations: [
    AppComponent,
    KindComponent,
    KindAddComponent,
    KindUpdateComponent,
    DashboardComponent,
    OudersComponent,
    OudersAddComponent,
    OudersUpdateComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [KindDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
