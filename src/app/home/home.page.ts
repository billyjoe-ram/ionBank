import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public options: any[] = [
    { icon: "person-add-outline", text: "Indicar amigos"},
    { icon: "phone-portrait-outline", text: "Recarga de celular"},
    { icon: "wallet-outline", text: "Depositar"},
    { icon: "options-outline", text: "Ajustar limite"},    
    { icon: "card-outline", text: "Cartão virtual"},
    { icon: "help-circle-outline", text: "Ajuda"}
  ];

  public slidesOptions: any = { slidesPerView: 3, freeMode: true };

  public items: any[] = [    
    { icon: "person-outline", text: "Perfil"},
    { icon: "cash-outline", text: "Configurar conta"},
    { icon: "card-outline", text: "Configurar cartão"},
    { icon: "phone-portrait-outline", text: "Configurações do app"},
    { icon: "help-circle-outline", text: "Ajuda"}
  ];

  constructor() {}

}
