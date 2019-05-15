/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyTableService } from './my-table.service';

describe('Service: MyTitle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTableService]
    });
  });

  it('should ...', inject([MyTableService], (service: MyTableService) => {
    expect(service).toBeTruthy();
  }));
});
