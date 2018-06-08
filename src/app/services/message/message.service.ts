import { Injectable } from '@angular/core';
import { FlashMessage } from 'angular-flash-message/dist';

@Injectable()
export class MessageService {
  messages: Array<string> | object ;
  errorFlashMsg: string;
  constructor(
    private flashMessage: FlashMessage,
  ) { }
  setMessage(errorMsgArray, errorMsg, messageType) {
    this.messages = errorMsgArray;
    this.errorFlashMsg = errorMsg;
    if (messageType === 'success') {
      this.flashMessage.success(this.errorFlashMsg, {
        delay: 4000,
        close: true,
        closeBtnClass: 'btn btn-sm'
      });
    } else if (messageType === 'error') {
      this.flashMessage.danger(this.errorFlashMsg, {
      delay: 4000,
      close: true,
      closeBtnClass: 'btn btn-sm'
    });
    }
  }
  getMessage() {
    return this.messages;
  }
}
