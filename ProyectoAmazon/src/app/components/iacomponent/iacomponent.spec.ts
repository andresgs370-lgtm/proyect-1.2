import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Iacomponent} from './iacomponent';

class iacomponent {
}

describe('iacomponent', () => {
  let component: iacomponent;
  let fixture: ComponentFixture<iacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [iacomponent]
    }).compileComponents();

    fixture = TestBed.createComponent(iacomponent);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
