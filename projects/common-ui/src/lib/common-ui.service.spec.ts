import { TestBed } from '@angular/core/testing';

import { CommonUiService } from './common-ui.service';

describe('CommonUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonUiService = TestBed.get(CommonUiService);
    expect(service).toBeTruthy();
  });
});
