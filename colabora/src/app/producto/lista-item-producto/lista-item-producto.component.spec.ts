import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemProductoComponent } from './lista-item-producto.component';

describe('ListaItemProductoComponent', () => {
  let component: ListaItemProductoComponent;
  let fixture: ComponentFixture<ListaItemProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaItemProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
