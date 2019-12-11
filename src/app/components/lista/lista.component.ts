import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //Creamos una variable de tipo any 
  items:any;
  //Creamos un objeto que obtendra el nombre
  editarItem:any={
    name:''
  };

  //Creamos la variable conexion de tipo Conexionservice
  constructor(private conexion:ConexionService) {
      //Obtenemos los items y los subscribimos creano una variable item
      this.conexion.listaItem().subscribe(item=>{
      this.items = item;
    })


   }
    
  ngOnInit() {
  }

  //Funcion que llama al servicio para eliminar
  eliminar(item){
    this.conexion.eliminarItem(item);
  }

  //Funcion que agrega el valor a l a variable editarItem
  editar(item){
    this.editarItem = item;
  }

  //Funcion que llama al servicio para editar
  agregarItemEditado(){
    this.conexion.editarItem(this.editarItem);
  }

}
