import { TestBed } from '@angular/core/testing';

import { UISidemodalDataService } from './ui-sidemodal-data.service';

describe('UiSidemodalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UISidemodalDataService = TestBed.get(UISidemodalDataService);
    expect(service).toBeTruthy();
  });
});
