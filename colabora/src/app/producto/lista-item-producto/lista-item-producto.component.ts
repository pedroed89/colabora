import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-item-producto',
  templateUrl: './lista-item-producto.component.html',
  styleUrls: ['./lista-item-producto.component.css']
})
export class ListaItemProductoComponent implements OnInit {

  @Input() nombre:string;
  @Input() imagen:string;
  @Input() precio:string;
  @Input() categoria:string;

  constructor() { }

  ngOnInit(): void {
  }

}
