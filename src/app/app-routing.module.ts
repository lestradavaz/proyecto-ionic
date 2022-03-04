import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'activos',
    loadChildren: () => import('./paginas/activos/activos.module').then( m => m.ActivosPageModule)
  },
  {
    path: 'inactivos',
    loadChildren: () => import('./paginas/inactivos/inactivos.module').then( m => m.InactivosPageModule)
  },
  {
    path: 'docentes',
    loadChildren: () => import('./paginas/docentes/docentes.module').then( m => m.DocentesPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./paginas/datos/datos.module').then( m => m.DatosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
