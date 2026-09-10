import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fastvideocomponent } from './fastvideocomponent';

describe('Fastvideocomponent', () => {
  let component: Fastvideocomponent;
  let fixture: ComponentFixture<Fastvideocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fastvideocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Fastvideocomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
