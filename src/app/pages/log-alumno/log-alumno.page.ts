import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-log-alumno',
  templateUrl: './log-alumno.page.html',
  styleUrls: ['./log-alumno.page.scss'],
})
export class LogAlumnoPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  usuario={
    email:'',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
