import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosPage } from './datos.page';
import { VerUsuarioComponent } from '../../componentes/ver-usuario/ver-usuario.component';
import { EditarUsuarioComponent } from '../../componentes/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: DatosPage,
    children: [
      {
        path: '',
        component: VerUsuarioComponent
      },
      {
        path: 'editar',
        component: EditarUsuarioComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosPageRoutingModule {}
