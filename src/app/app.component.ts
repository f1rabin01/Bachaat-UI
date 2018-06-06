import {Component, OnInit} from '@angular/core';
import { FlashMessage } from 'angular-flash-message/dist';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private flashMessage: FlashMessage) {}
  ngOnInit() {
    // this.showMessage();
  }
  // showMessage() {
  //   this.flashMessage.success('Message', {
  //     delay: 4000,
  //     close: true,
  //     closeBtnClass: ''
  // });
  // }
}
