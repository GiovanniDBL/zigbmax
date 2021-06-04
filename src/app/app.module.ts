import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// LocalData Language***
// import { registerLocaleData } from '@angular/common';
// import localEs from '@angular/common/locales/es';
// import localEn from '@angular/common/locales/en';
// registerLocaleData(localEs);
// registerLocaleData(localEn);
// LocalData Language ****

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { APP_ROUTING } from './routes';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { SeguridadComponent } from './components/solutions/seguridad/seguridad.component';
import { CadenafrioComponent } from './components/solutions/cadenafrio/cadenafrio.component';
import { MantopredictivoComponent } from './components/solutions/mantopredictivo/mantopredictivo.component';
import { InfraestructurasComponent } from './components/solutions/infraestructuras/infraestructuras.component';
import { MessageService } from './services/message.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { AtmSenseSigfoxComponent } from './components/solutions/seguridad/atm-sense-sigfox/atm-sense-sigfox.component';
import { AtmSenseSlaveComponent } from './components/solutions/seguridad/atm-sense-slave/atm-sense-slave.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { VideosComponent } from './components/videos/videos.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { VaultsenseSigfoxComponent } from './components/solutions/seguridad/vaultsense-sigfox/vaultsense-sigfox.component';
import { DropsafeSigfoxComponent } from './components/solutions/seguridad/dropsafe-sigfox/dropsafe-sigfox.component';
import { TempsenseSigbfoxComponent } from './components/solutions/cadenafrio/tempsense-sigbfox/tempsense-sigbfox.component';
import { CorrienteAlternaComponent } from './components/solutions/mantopredictivo/corriente-alterna/corriente-alterna.component';
import { AguasResidualesComponent } from './components/solutions/mantopredictivo/aguas-residuales/aguas-residuales.component';
import { RondamientosComponent } from './components/solutions/mantopredictivo/rondamientos/rondamientos.component';
import { ConcretoComponent } from './components/solutions/infraestructuras/concreto/concreto.component';
import { MetalicasComponent } from './components/solutions/infraestructuras/metalicas/metalicas.component';
import { PuentesVialesComponent } from './components/solutions/infraestructuras/puentes-viales/puentes-viales.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
 
    SolutionsComponent,
  
    NoticiasComponent,
    SeguridadComponent,
    CadenafrioComponent,
    MantopredictivoComponent,
    InfraestructurasComponent,
    AtmSenseSigfoxComponent,
    AtmSenseSlaveComponent,
    EventosComponent,
    VideosComponent,
    VaultsenseSigfoxComponent,
    DropsafeSigfoxComponent,
    TempsenseSigbfoxComponent,
    CorrienteAlternaComponent,
    AguasResidualesComponent,
    RondamientosComponent,
    ConcretoComponent,
    MetalicasComponent,
    PuentesVialesComponent,


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
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })

  ],
  providers: [MessageService,
    // {provide: LOCALE_ID,
    //   useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


