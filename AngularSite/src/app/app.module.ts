import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KindComponent } from './kind/kind.component';
import { KindAddComponent } from './kind-add/kind-add.component';

@NgModule({
  declarations: [
    AppComponent,
    KindComponent,
    KindAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
