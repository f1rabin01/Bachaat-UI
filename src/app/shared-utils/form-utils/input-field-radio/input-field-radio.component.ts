import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input-field-radio',
  templateUrl: './input-field-radio.component.html',
  styleUrls: ['./input-field-radio.component.css']
})
export class InputFieldRadioComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: Array<any>;
  @Input() viewType: string;
  @Input() radioGroupName: string;
  @Input() isRequired: boolean;
  @Input() class: string;
  @ViewChild('inputForm') input: ElementRef;
  ngRadioValue: string;

  constructor() { }
  ngAfterViewInit() {
    // console.log(this.input.invalid);
    console.log(this.input);
  }
  ngOnInit() {
    if (!this.radioGroupName)
      this.radioGroupName = 'default';
  }
  ngOnChanges() {
    console.log('on changes');
  }


}

