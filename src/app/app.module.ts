import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header-bg/header.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { HeaderBtnComponent } from './Components/header-btn/header-btn.component';
import { HeaderCardComponent } from './Components/header-card/header-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    HeaderBtnComponent,
    HeaderCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
