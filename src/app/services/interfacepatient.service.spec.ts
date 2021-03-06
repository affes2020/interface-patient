import { TestBed } from '@angular/core/testing';

import { InterfacepatientService } from './interfacepatient.service';

describe('InterfacepatientService', () => {
  let service: InterfacepatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfacepatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
