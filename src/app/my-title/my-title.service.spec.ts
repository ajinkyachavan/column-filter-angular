/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyTitleService } from './my-title.service';

describe('Service: MyTitle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTitleService]
    });
  });

  it('should ...', inject([MyTitleService], (service: MyTitleService) => {
    expect(service).toBeTruthy();
  }));
});
