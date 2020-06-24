import { TestBed } from '@angular/core/testing';

import { UiSidemodalService } from './u-i-sidemodal.service';

describe('UiModalSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiSidemodalService = TestBed.get(UiSidemodalService);
    expect(service).toBeTruthy();
  });
});
