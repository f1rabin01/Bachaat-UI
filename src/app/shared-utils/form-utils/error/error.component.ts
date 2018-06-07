import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../../services/message/message.service';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() fieldName;
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
