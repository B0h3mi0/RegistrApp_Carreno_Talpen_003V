import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cam-qr',
  templateUrl: './cam-qr.page.html',
  styleUrls: ['./cam-qr.page.scss'],
})
export class CamQrPage {

  qrCodeString= 'Hola Mundo';
  scannedResult: any;
  dateExample = new Date().toISOString();
  constructor() { }

  usuario = {
  nom: null,
  myDate: null

  }

  

  generaScan(){
    this.qrCodeString= (this.usuario.nom, this.dateExample);
    console.log(this.usuario.nom, this.dateExample);
  }


  verScan(){
    this.scannedResult=this.qrCodeString;
  }
}



