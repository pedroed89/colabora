import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemCategoriaComponent } from './lista-item-categoria.component';

describe('ListaItemCategoriaComponent', () => {
  let component: ListaItemCategoriaComponent;
  let fixture: ComponentFixture<ListaItemCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaItemCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
