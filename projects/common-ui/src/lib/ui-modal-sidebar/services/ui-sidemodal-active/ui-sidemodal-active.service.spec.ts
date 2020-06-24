import { TestBed } from '@angular/core/testing';

import { UISidemodalActiveService } from './ui-sidemodal-active.service';

describe('UiSidemodalActiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UISidemodalActiveService = TestBed.get(UISidemodalActiveService);
    expect(service).toBeTruthy();
  });
});
