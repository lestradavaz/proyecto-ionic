import { Component, OnInit } from '@angular/core';

interface Docente {
  nombre: string;
  redirectTo: string;
}

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {

  docentes: Docente[] = [
    {
      nombre: 'Emmanuel',
      redirectTo: '/datos',
    },
    {
      nombre: 'Jhoan',
      redirectTo: '/home',
    },
    {
      nombre: 'Luis',
      redirectTo: '/home',
    },
    {
      nombre: 'Pavel',
      redirectTo: '/home',
    },
  ];

  constructor() { }

  ngOnInit() {}

}
