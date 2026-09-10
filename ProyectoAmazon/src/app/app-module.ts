import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Footercomponent } from './components/footercomponent/footercomponent';
import { Navbarcomponent } from './components/navbarcomponent/navbarcomponent';
import { Paginaprincipalcomponent } from './components/paginaprincipalcomponent/paginaprincipalcomponent';
import { Ventascomponent } from './components/ventascomponent/ventascomponent';
import { Musicacomponent } from './components/musicacomponent/musicacomponent';
import { Logincomponent } from './components/logincomponent/logincomponent';
import { FormsModule } from '@angular/forms';
import { Fastvideocomponent } from './components/fastvideocomponent/fastvideocomponent';
import { Carritoflotantecomponent } from './components/carritoflotantecomponent/carritoflotantecomponent';
import { Iacomponent } from './components/iacomponent/iacomponent';
import { Kindlecomponent } from './components/kindlecomponent/kindlecomponent';

@NgModule({
  declarations: [
    App,
    Footercomponent,
    Navbarcomponent,
    Paginaprincipalcomponent,
    Ventascomponent,
    Musicacomponent,
    Logincomponent,
    Fastvideocomponent,
    Carritoflotantecomponent,
    Iacomponent,
    Kindlecomponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
