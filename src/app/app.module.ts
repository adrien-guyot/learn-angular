import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PresentationAngComponent } from './presentation-ang/presentation-ang.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationAngComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
