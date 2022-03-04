/* eslint-disable no-trailing-spaces */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Componente {
  name: string;
  redirectTo: string;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  componentes: Componente[] = [
    {
      name: 'Docentes activos',
      redirectTo: '/activos',
      color: 'success'
    },
    {
      name: 'Docentes inactivos',
      redirectTo: '/inactivos',
      color: 'danger'
    },
    {
      name: 'Docentes totales',
      redirectTo: '/docentes',
      color: 'primary'
    }
  ];

  constructor(public alertController: AlertController) {}

  //formulario de registro 
  async registro() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro de docente',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Ingrese nombre'
        },
        {
          name: 'correo',
          type: 'email',
          placeholder: 'Ingrese correo electronico'
        },
        {
          name: 'telefono',
          type: 'tel',
          placeholder: 'Ingrese número de telefono'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Siguiente',
          handler: () => {
            console.log('Confirm siguiente');
            this.categoria();
          }
        }
      ]
    });

    await alert.present();
  }

  async categoria() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Materia',
      inputs: [
        {
          name: 'español',
          type: 'radio',
          label: 'Español',
          value: 'español',
        },
        {
          name: 'matematicas',
          type: 'radio',
          label: 'Matematicas',
          value: 'value2',
        },
        {
          name: 'geografia',
          type: 'radio',
          label: 'Geografia',
          value: 'geografia',
        },
        {
          name: 'historia',
          type: 'radio',
          label: 'Historia',
          value: 'historia',
        },
        {
          name: 'ingles',
          type: 'radio',
          label: 'Ingles',
          value: 'ingles',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Siguiente',
          handler: () => {
            console.log('Confirm siguiente');
            this.estado();
          }
        }
      ]
    });

    await alert.present();

  }

  async estado() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'inactivo',
          type: 'radio',
          label: 'Inactivo',
          value: 'inactivo',
          checked: true
        },
        {
          name: 'activo',
          type: 'radio',
          label: 'Activo',
          value: 'activo',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Añadir',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();

  }

}
