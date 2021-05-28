import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SecuriityComponent } from './components/securiity/securiity.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { ContactComponent } from './components/contact/contact.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { SeguridadComponent } from './components/solutions/seguridad/seguridad.component';
import { CadenafrioComponent } from './components/solutions/cadenafrio/cadenafrio.component';
import { MantopredictivoComponent } from './components/solutions/mantopredictivo/mantopredictivo.component';
import { InfraestructurasComponent } from './components/solutions/infraestructuras/infraestructuras.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'security', component: SecuriityComponent },
    { path: 'solutions', component: SolutionsComponent },
    { path: 'sectors', component: SectorsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'LPWAN Seguridad', component: SeguridadComponent },
    { path: 'LPWAN Cadena Frio', component: CadenafrioComponent },
    { path: 'Mantenimiento Predictivo', component: MantopredictivoComponent },
    { path: 'Monitoreo de Infraestructuras', component: InfraestructurasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});