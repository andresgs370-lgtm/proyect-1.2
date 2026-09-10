import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carritoflotantecomponent } from './carritoflotantecomponent';

describe('Carritoflotantecomponent', () => {
  let component: Carritoflotantecomponent;
  let fixture: ComponentFixture<Carritoflotantecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Carritoflotantecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Carritoflotantecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
