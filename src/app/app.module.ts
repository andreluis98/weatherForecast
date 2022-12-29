import { NgModule } from '@angular/core';

import{ HttpClientModule } from '@angular/common/http'

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { FutureComponent } from './future/future.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    FutureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
