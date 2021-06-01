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

const APP_ROUTES: Routes = [
    { path: 'Inicio', component: HomeComponent },
    { path: 'Noticias', component: NoticiasComponent },
    { path: 'Eventos', component: EventosComponent },
    { path: 'Videos', component: VideosComponent },
    { path: 'LPWAN Seguridad', component: SeguridadComponent },
    { path: 'ATMSENSE-SIGFOX', component: AtmSenseSigfoxComponent },
    { path: 'ATMSENSE-SLAVE', component: AtmSenseSlaveComponent },
    { path: 'LPWAN Cadena Frio', component: CadenafrioComponent },
    { path: 'Mantenimiento Predictivo', component: MantopredictivoComponent },
    { path: 'Monitoreo de Infraestructuras', component: InfraestructurasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});