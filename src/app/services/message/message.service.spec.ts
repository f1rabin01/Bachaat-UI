import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';
import { FlashMessage} from 'angular-flash-message/dist';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService, FlashMessage]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
