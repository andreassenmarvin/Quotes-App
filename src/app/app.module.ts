import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header-bg/header.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { HeaderBtnComponent } from './Components/header-btn/header-btn.component';
import { HeaderCardComponent } from './Components/header-card/header-card.component';
import { AboutBodyComponent } from './Components/about-body/about-body.component';
import { QuotesComponent } from './Components/quotes/quotes.component';
import { FooterComponent } from './Components/footer/footer.component';
import { QuoteFormComponent } from './Components/quote-form/quote-form.component';
import { DateCountPipe } from './Pipes/date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    HeaderBtnComponent,
    HeaderCardComponent,
    AboutBodyComponent,
    QuotesComponent,
    FooterComponent,
    QuoteFormComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
