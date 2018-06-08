import {Component, forwardRef, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldEmailComponent),
  multi: true
};

@Component({
  selector: 'app-input-field-email',
  templateUrl: './input-field-email.component.html',
  styleUrls: ['./input-field-email.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputFieldEmailComponent implements OnInit, ControlValueAccessor {
  @Input() isRequired?: boolean;
  @Input() formStatus: boolean;
  @Output() formStatusChanged: EventEmitter<any> = new EventEmitter();
  @ViewChild('email') email;

  // The internal data model
  private innerValue: any = '';

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() {
    this.isRequired = true;
  }

  ngOnInit() {
  }
  formInputChange(event) {
    this.formStatus = this.email.dirty;
    this.formStatusChanged.emit(this.formStatus);
  }
  // get accessor
  get value(): any {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
