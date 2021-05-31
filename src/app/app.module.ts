import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { ContactComponent } from './components/contact/contact.component';
import { SecuriityComponent } from './components/securiity/securiity.component';
import { APP_ROUTING } from './routes';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { SeguridadComponent } from './components/solutions/seguridad/seguridad.component';
import { CadenafrioComponent } from './components/solutions/cadenafrio/cadenafrio.component';
import { MantopredictivoComponent } from './components/solutions/mantopredictivo/mantopredictivo.component';
import { InfraestructurasComponent } from './components/solutions/infraestructuras/infraestructuras.component';
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    SolutionsComponent,
    SectorsComponent,
    ContactComponent,
    SecuriityComponent,
    NoticiasComponent,
    SeguridadComponent,
    CadenafrioComponent,
    MantopredictivoComponent,
    InfraestructurasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    NgsRevealModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
