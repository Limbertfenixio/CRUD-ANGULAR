import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-listadd',
  templateUrl: './listadd.component.html',
  styleUrls: ['./listadd.component.css']
})
export class ListaddComponent implements OnInit {

  item:any = {
    //Este nombre pertenece al nombre dl campo de texto de listadd.html
    name : ""
  }

  constructor(private _servicio:ConexionService) { }

  ngOnInit() {
  }

  agregar(){
    this._servicio.addItem(this.item);
    this.item.name = '';
  }

}
