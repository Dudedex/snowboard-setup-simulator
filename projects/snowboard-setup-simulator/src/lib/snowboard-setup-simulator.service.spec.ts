import { TestBed } from '@angular/core/testing';

import { SnowboardSetupSimulatorService } from './snowboard-setup-simulator.service';

describe('SnowboardSetupSimulatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnowboardSetupSimulatorService = TestBed.get(SnowboardSetupSimulatorService);
    expect(service).toBeTruthy();
  });
});
