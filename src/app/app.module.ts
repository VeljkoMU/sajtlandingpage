import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './components/bar/bar.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { JoinComponent } from './components/join/join.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceComponent } from './components/service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Pseudo3dcarouselComponent } from './components/pseudo3dcarousel/pseudo3dcarousel.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    AboutComponent,
    ServicesComponent,
    JoinComponent,
    ContactComponent,
    FooterComponent,
    ServiceComponent,
    Pseudo3dcarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
