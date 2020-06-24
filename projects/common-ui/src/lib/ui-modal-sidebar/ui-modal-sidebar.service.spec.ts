import { TestBed } from '@angular/core/testing';

import { UIModalSidebarService } from './ui-modal-sidebar.service';

describe('UiModalSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UIModalSidebarService = TestBed.get(UIModalSidebarService);
    expect(service).toBeTruthy();
  });
});
