import { Injectable } from '@angular/core';
import { FlashMessage } from 'angular-flash-message/dist';

@Injectable()
export class MessageService {
  messages: Array<string> | object ;
  errorMsg: string;
  constructor(
    private flashMessage: FlashMessage,
  ) { }
  add(errorMsgArray, errorMsg) {
    this.messages = errorMsgArray;
    this.errorMsg = errorMsg;
    console.log(this.messages);
    console.log(this.errorMsg);
    this.flashMessage.success(this.errorMsg, {
      delay: 4000,
      close: true,
      closeBtnClass: 'btn btn-sm'
    });
  }
  get() {
    return this.messages;
  }
}
