import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-field-password',
  templateUrl: './input-field-password.component.html',
  styleUrls: ['./input-field-password.component.css']
})
export class InputFieldPasswordComponent implements OnInit {
  @Input() isRequired: boolean;
  @Input() minLength: number;
  @Input() maxLength: number;
  value: string;
  constructor() {
    this.isRequired = true;
  }

  ngOnInit() {
  }

}
