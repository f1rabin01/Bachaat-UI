import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { UserService} from '../../../services/user/user.service';
import { MessageService } from '../../../services/message/message.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, AfterViewInit {
  // @ViewChild('first_name') first_name;
  firstNameStatusValue: any;
  lastNameStatusValue: boolean;
  addressStatusValue: boolean;
  mobileStatusValue: boolean;
  emailStatusValue: boolean;
  passwordStatusValue: boolean;
  constructor(
    private userService: UserService,
    public messageService: MessageService,
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  firstNameStatusHandler(status: any) {
    this.firstNameStatusValue = status;
  }
  lastNameStatusHandler(status: any) {
    this.lastNameStatusValue = status;
  }
  addressStatusHandler(status: boolean){
    this.addressStatusValue = status;
  }
  mobileStatusHandler(status: boolean){
    this.mobileStatusValue = status;
  }
  emailStatusHandler(status: any) {
    this.emailStatusValue = status;
  }
  passwordStatusHandler(status: boolean) {
    this.passwordStatusValue = status;
  }
  onSubmit(value): void {
    const header = {'Content-Type': 'application/json'} ;
    this.userService.addUser(value, header).subscribe(
      res => {
        const successMsg = res.message;
        this.messageService.setMessage(null, successMsg, 'success');
      },
      err => {
        const errorMsgArray = err.error.errors;
        const errorMsg = err.error.errorMessage ? err.error.errorMessage : err.error.message;
        this.messageService.setMessage(errorMsgArray, errorMsg, 'error');
      }
    );
  }
}
