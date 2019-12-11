//Importamos llas librerias para la conexion
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


//Exportamos la interfaz con los campos de la base de datos y su tipo
export interface Item { name: string; }

@Injectable()
export class ConexionService {

  /*
    Usamos una variable de tipo para poder realizar operaciones
  */
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  /*
    Usamos una variable de tipo para poder manipular documentos en angular y eliminar elementos de firebase
  */
  private itemDoc: AngularFirestoreDocument<Item>;
  

  /*
    En aca se van a realizar las conexiones y las funciones para el CRUD
  */
 
  constructor(private afs: AngularFirestore) { 
    //La variable itemsColletcion va traer una coleccion llamada items
    this.itemsCollection = afs.collection<Item>('items');
    //La variable items de tipoo observable arrays sera igual a los itemsCollection y que los va a evaluar
    //this.items = this.itemsCollection.valueChanges();
    //Usamos los snapshots para poder traer los datos completos como el id del elemento
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }


  //Funcion que devuelve todos los items
  listaItem(){
    //Devolvemos todos los items que obtuvimos
    return this.items;
  }
  //Funcion para agregar un nuevo elemento a la base de datos
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

//Funcionque elimina el item de firebase atraves de documentos
  eliminarItem(item){
    //le pasamos al documento el item y eliminamos (nombre de la coleccion/${nombre de la variable})
    console.log(item + "si reconocio");
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }

//Funcionque edita el nombre de un campo de firebase atraves de documentos
  editarItem(item){
    //le pasamos al documento el item y eliminamos (nombre de la coleccion/${nombre de la variable})
    console.log(item + "si reconocio");
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}
