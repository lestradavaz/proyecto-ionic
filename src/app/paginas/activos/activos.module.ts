import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivosPageRoutingModule } from './activos-routing.module';

import { ActivosPage } from './activos.page';
import { ComponenteModule } from '../../componentes/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivosPageRoutingModule,
    ComponenteModule
  ],
  declarations: [ActivosPage]
})
export class ActivosPageModule {}
