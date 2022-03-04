import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EncabezadoComponent,
    ResultadosComponent
  ],
  exports: [
    EncabezadoComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponenteModule { }
