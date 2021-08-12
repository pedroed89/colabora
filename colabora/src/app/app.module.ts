import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCategoriaComponent } from './categoria/lista-categoria/lista-categoria.component';
import { ListaItemCategoriaComponent } from './categoria/lista-item-categoria/lista-item-categoria.component';
import { ListaProductoComponent } from './producto/lista-producto/lista-producto.component';
import { ListaItemProductoComponent } from './producto/lista-item-producto/lista-item-producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCategoriaComponent,
    ListaItemCategoriaComponent,
    ListaProductoComponent,
    ListaItemProductoComponent,
    InicioComponent,
    ContactoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
