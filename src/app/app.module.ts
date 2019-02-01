import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';
import { CodeComponent } from './code/code.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    CodeComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'portfolio'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
