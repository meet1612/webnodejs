import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductappComponent } from './productapp.component';

describe('ProductappComponent', () => {
  let component: ProductappComponent;
  let fixture: ComponentFixture<ProductappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
