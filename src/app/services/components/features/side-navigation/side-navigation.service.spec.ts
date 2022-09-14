import { TestBed } from '@angular/core/testing';

import { SideNavigationService } from './side-navigation.service';

describe('SideNavigationService', () => {
  let service: SideNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an isOpen property', () => {
    expect(service.isOpen).toBeTruthy();
  });

  it('should have a toggle method', () => {
    expect(service.toggle).toBeTruthy();
  });

  it('should have a toggle method that toggles the isOpen property', () => {
    service.toggle();
    expect(service.isOpen.value).toBe(true);
  });
});
