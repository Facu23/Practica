import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(private modalCtrl : ModalController,
            private storage: Storage,
            ) {}
  
public elemLista :Array<any> = [
    { name:"Notificaciones", value: false  },
    { name:"Notificaciones2", value:true },
    { name:"Notificaciones3", value:false },
  ];

public arrLeido = [];

public guardarDatos(){
  this.storage.set('MiArreglo',this.elemLista);
  console.log('Arreglo guardado', this.elemLista);
}

async leerDatos(){
  this.arrLeido = await this.storage.get('miArreglo');
}

ngOnInit(){
  this.guardarDatos();
  this.leerDatos();
  console.log('asignado2: ', this.arrLeido);
}

async abrirModal(){
  const modal = await this.modalCtrl.create({
    component: ModalPage,
    componentProps: {
     lista2: this.elemLista,
     //lista2: this.arrLeido,
  }
});

await modal.present();

  }
}


