import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InactivosPageRoutingModule } from './inactivos-routing.module';

import { InactivosPage } from './inactivos.page';
import { ComponenteModule } from '../../componentes/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InactivosPageRoutingModule,
    ComponenteModule
  ],
  declarations: [InactivosPage]
})
export class InactivosPageModule {}
