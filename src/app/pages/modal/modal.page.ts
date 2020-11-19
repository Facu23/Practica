import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

@Input() public lista2: Array<string>
  
  constructor( private modalCtrl: ModalController, 
               public alertController: AlertController,
               public toastController: ToastController) {
                 
              
                }
              
  ngOnInit() {
    console.log('desdemodal', this.lista2)
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'custom-settings-alert',
      header: 'Alerta',
      subHeader: 'Cambios',
      message: '¿Usted desea guardar los cambios?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Cancelar');
        }
      },
        {
          text: 'ok',
          handler: (blah) => {
            this.salir();
            this.Toast();
          }
        }
      ]
    });

    await alert.present();
  }

  async Toast() {
    const toast = await this.toastController.create({
      message: 'Guardado exitoso',
      duration: 2000
    });
    toast.present();
  }

  salir(){
    this.modalCtrl.dismiss();
  }


  //Actualizar = ()  =>  {console.log(this.lista2)}
  
 actualizarValor(){
  console.log(this.lista2)
  };



}
