import {AfterViewInit, Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { UserService} from '../../../services/user/user.service';
import { MessageService } from '../../../services/message/message.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, AfterViewInit {
  @ViewChild('first_name') first_name;
  hideError: boolean;
  constructor(
    private userService: UserService,
    public messageService: MessageService,
  ) { }

  ngOnInit() {
    this.hideError = false;
    console.log();
  }
  ngAfterViewInit() {
    console.log(this.first_name.formInput.status);
    if (this.first_name.formInput.status === 'VALID') {
      this.hideError = true;
    }
  }
  onSubmit(value): void {
    const header = {'Content-Type': 'application/json'} ;
    this.userService.addUser(value, header).subscribe(
      res => {
        console.log(res.errorMessage);
        const successMsg = 'User Added Successfully';
        this.messageService.add(null, successMsg);
      },
      err => {
        console.log(err.error.errorMessage);
        const errorMsgArray = err.error.errors;
        const errorMsg = err.error.errorMessage ? err.error.errorMessage : err.error.message;
        this.messageService.add(errorMsgArray, errorMsg);
      }
    );
  }
}
