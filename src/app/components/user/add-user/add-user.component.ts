import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../services/user/user.service';
import { FlashMessage } from 'angular-flash-message/dist';
import { MessageService } from '../../../services/message/message.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private flashMessage: FlashMessage,
    public messageService: MessageService,
  ) { }

  ngOnInit() {

  }
  onSubmit(value): void {
    const header = {'Content-Type': 'application/json'} ;
    this.userService.addUser(value, header).subscribe(
      res => {
        console.log('SUCESSSSSS' + res);
        // this.messageService.add('User Added');
      },
      err => {
        console.log('ERRORRRRRRRR' + err);
      }
    );
    // this.flashMessage.success('User Added', {
    //   delay: 4000,
    //   close: true,
    //   closeBtnClass: ''
    // });
  }
}
