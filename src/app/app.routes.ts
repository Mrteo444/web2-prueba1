import { Routes } from '@angular/router';
import { AutosComponent } from './page/autos/autos.component';
import { EmpleadosComponent } from './page/empleados/empleados.component';
import { Error404Component } from './components/error404/error404.component';
import { EditarAutosComponent } from './components/editar-autos/editar-autos.component';
import { InfoAutosComponent } from './components/info-autos/info-autos.component';

export const routes: Routes = [
    {path : "autos", component:AutosComponent},

    {path : 'empleados',component:EmpleadosComponent},
    {path : "editar/:idAutos",component:EditarAutosComponent},

    {path : "info/:idInfo",component:InfoAutosComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: Error404Component}
];
