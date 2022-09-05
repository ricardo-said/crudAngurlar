import { TestBed } from '@angular/core/testing';

import { ActividadComponenteService } from './actividad-componente.service';

describe('ActividadComponenteService', () => {
  let service: ActividadComponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadComponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
