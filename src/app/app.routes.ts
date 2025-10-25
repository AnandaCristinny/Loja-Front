import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Buscar } from './buscar/buscar';


export const routes: Routes = [
    {path: 'inicio', component: Inicio},
    {path: 'buscar', component: Buscar},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
];