import { TestBed } from '@angular/core/testing';

import { jobservice } from './task.service';

describe('jobservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: jobservice = TestBed.get(jobservice);
    expect(service).toBeTruthy();
  });
});
