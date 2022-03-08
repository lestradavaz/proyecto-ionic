import { Component, OnInit } from '@angular/core';

interface Componente {
  name: string;
  redirectTo: string;
  color: string;
}
@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})

export class DatosPage  {

  componentes: Componente[] = [
    {
      name: 'Editar Usuario',
      redirectTo: '/editar-usuario',
      color: 'success'
    },
  ];
}
