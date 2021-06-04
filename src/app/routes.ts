import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { NoticiasComponent } from './components/noticias/noticias.component';
import { SeguridadComponent } from './components/solutions/seguridad/seguridad.component';
import { CadenafrioComponent } from './components/solutions/cadenafrio/cadenafrio.component';
import { MantopredictivoComponent } from './components/solutions/mantopredictivo/mantopredictivo.component';
import { InfraestructurasComponent } from './components/solutions/infraestructuras/infraestructuras.component';
import { AtmSenseSigfoxComponent } from './components/solutions/seguridad/atm-sense-sigfox/atm-sense-sigfox.component';
import { AtmSenseSlaveComponent } from './components/solutions/seguridad/atm-sense-slave/atm-sense-slave.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { VideosComponent } from './components/videos/videos.component';
import { DropsafeSigfoxComponent } from './components/solutions/seguridad/dropsafe-sigfox/dropsafe-sigfox.component';
import { VaultsenseSigfoxComponent } from './components/solutions/seguridad/vaultsense-sigfox/vaultsense-sigfox.component';
import { TempsenseSigbfoxComponent } from './components/solutions/cadenafrio/tempsense-sigbfox/tempsense-sigbfox.component';
import { CorrienteAlternaComponent } from './components/solutions/mantopredictivo/corriente-alterna/corriente-alterna.component';
import { AguasResidualesComponent } from './components/solutions/mantopredictivo/aguas-residuales/aguas-residuales.component';
import { RondamientosComponent } from './components/solutions/mantopredictivo/rondamientos/rondamientos.component';
import { ConcretoComponent } from './components/solutions/infraestructuras/concreto/concreto.component';
import { MetalicasComponent } from './components/solutions/infraestructuras/metalicas/metalicas.component';
import { PuentesVialesComponent } from './components/solutions/infraestructuras/puentes-viales/puentes-viales.component';

const APP_ROUTES: Routes = [
    { path: 'Inicio', component: HomeComponent },
    { path: 'Noticias', component: NoticiasComponent },
    { path: 'Eventos', component: EventosComponent },
    { path: 'Videos', component: VideosComponent },



    // ?RUTAS DEL DROPDOWN DEL NAVBAR
    { path: 'LPWAN Seguridad', component: SeguridadComponent },
    { path: 'ATMSENSE-SIGFOX', component: AtmSenseSigfoxComponent },
    { path: 'ATMSENSE-SLAVE', component: AtmSenseSlaveComponent },
    { path: 'VAULTSENSE-SIGFOX', component: VaultsenseSigfoxComponent },
    { path: 'DROPSAFE-SIGFOX', component: DropsafeSigfoxComponent },
    // **********
    { path: 'LPWAN Cadena Frio', component: CadenafrioComponent },
    { path: 'TEMPSENSE I SIGBFOX', component: TempsenseSigbfoxComponent },
    // **********
    { path: 'Mantenimiento Predictivo', component: MantopredictivoComponent },
    { path: 'CORRIENTE ALTERNA', component: CorrienteAlternaComponent },
    { path: 'AGUAS RESIDUALES', component: AguasResidualesComponent },
    { path: 'BANDAS DE RONDAMIENTOS', component: RondamientosComponent },
      // **********
    { path: 'Monitoreo de Infraestructuras', component: InfraestructurasComponent },
    { path: 'MONITORES DE ESTRUCTURAS DE CONCRETO', component: ConcretoComponent },
    { path: 'MONITORES DE ESTRUCTURAS METALICAS', component: MetalicasComponent },
    { path: 'MONITORES DE PUENTES VIALES', component: PuentesVialesComponent },
      // **********
    { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});