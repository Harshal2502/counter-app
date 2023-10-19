import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AndrewComponent } from './andrew/andrew.component';
import { BarbaraComponent } from './barbara/barbara.component';
import { CarlosComponent } from './carlos/carlos.component';
import { DawnComponent } from './dawn/dawn.component';
import { EmreComponent } from './emre/emre.component';

@NgModule({
  declarations: [
    AppComponent,
    AndrewComponent,
    BarbaraComponent,
    CarlosComponent,
    DawnComponent,
    EmreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
