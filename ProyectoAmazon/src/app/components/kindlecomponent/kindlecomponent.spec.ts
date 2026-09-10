import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Kindlecomponent } from './kindlecomponent';

describe('Kindlecomponent', () => {
  let component: Kindlecomponent;
  let fixture: ComponentFixture<Kindlecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Kindlecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Kindlecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
