import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsadminComponent } from './productsadmin.component';

describe('ProductsadminComponent', () => {
  let component: ProductsadminComponent;
  let fixture: ComponentFixture<ProductsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
