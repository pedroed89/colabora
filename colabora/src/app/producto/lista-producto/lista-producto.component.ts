import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  ngOnInit(): void {
   
  }


  ListaItemProductoComponent = [
    {
      id: 1,
      imagen: "https://media.minutouno.com/p/fe6c89ef68c4b7144a12eb9f2a5fa97a/adjuntos/150/imagenes/039/231/0039231749/camiseta-messijpg.jpg",
      nombre: "Card nombre",
      descripcion: "",
      precio: "100",
      categoria: "mi categoria",
      cantidad: 0,
  },
  {
    id: 1,
    imagen: "https://media.minutouno.com/p/fe6c89ef68c4b7144a12eb9f2a5fa97a/adjuntos/150/imagenes/039/231/0039231749/camiseta-messijpg.jpg",
  nombre: "Card nombre",
    descripcion: "",
    precio: "100",
    categoria: "mi categoria",
    cantidad: 0,
},
{
  id: 1,
  imagen: "https://media.minutouno.com/p/fe6c89ef68c4b7144a12eb9f2a5fa97a/adjuntos/150/imagenes/039/231/0039231749/camiseta-messijpg.jpg",
  nombre: "Card nombre",
  descripcion: "",
  precio: "100",
  categoria: "mi categoria",
  cantidad: 0,
},
{
  id: 1,
  imagen: "https://media.minutouno.com/p/fe6c89ef68c4b7144a12eb9f2a5fa97a/adjuntos/150/imagenes/039/231/0039231749/camiseta-messijpg.jpg",
  nombre: "Remera Messi PSG",
  descripcion: "",
  precio: "10000",
  categoria: "remeras",
  cantidad: 0,
}
]; 

  constructor () { }

  
}
