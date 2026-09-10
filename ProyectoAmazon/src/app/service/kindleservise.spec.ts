import { TestBed } from '@angular/core/testing';
import { Kindleservise } from './kindleservise';

describe('Kindleservise', () => {
  let service: Kindleservise;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kindleservise);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
