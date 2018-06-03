import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {RegisterComponent} from './register.component';
import {LabelComponent} from '../../shared-utils/form-utils/label/label.component';
import {InputFieldTextComponent} from '../../shared-utils/form-utils/input-field-text/input-field-text.component';
import {InputFieldPasswordComponent} from '../../shared-utils/form-utils/input-field-password/input-field-password.component';
import {InputFieldEmailComponent} from '../../shared-utils/form-utils/input-field-email/input-field-email.component';
import {ButtonComponent} from '../../shared-utils/form-utils/button/button.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        RegisterComponent,
        LabelComponent,
        InputFieldTextComponent,
        InputFieldPasswordComponent,
        InputFieldEmailComponent,
        ButtonComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
