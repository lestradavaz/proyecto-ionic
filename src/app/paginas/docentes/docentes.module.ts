import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocentesPageRoutingModule } from './docentes-routing.module';

import { DocentesPage } from './docentes.page';

import { ComponenteModule } from 'src/app/componentes/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentesPageRoutingModule,
    ComponenteModule
  ],
  declarations: [DocentesPage]
})
export class DocentesPageModule {}
