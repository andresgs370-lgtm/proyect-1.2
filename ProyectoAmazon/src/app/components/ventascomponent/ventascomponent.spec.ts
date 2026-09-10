import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ventascomponent } from './ventascomponent';

describe('Ventascomponent', () => {
  let component: Ventascomponent;
  let fixture: ComponentFixture<Ventascomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ventascomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Ventascomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
