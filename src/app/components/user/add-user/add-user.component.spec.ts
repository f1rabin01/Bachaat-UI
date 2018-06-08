import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ButtonComponent} from '../../../shared-utils/form-utils/button/button.component';
import {InputFieldTextComponent} from '../../../shared-utils/form-utils/input-field-text/input-field-text.component';
import {InputFieldEmailComponent} from '../../../shared-utils/form-utils/input-field-email/input-field-email.component';
import {LabelComponent} from '../../../shared-utils/form-utils/label/label.component';
import {InputFieldPasswordComponent} from '../../../shared-utils/form-utils/input-field-password/input-field-password.component';
import {ErrorComponent} from '../../../shared-utils/form-utils/error/error.component';

import {UserService} from '../../../services/user/user.service';
import {MessageService} from '../../../services/message/message.service';
import {FlashMessage} from 'angular-flash-message/dist';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserComponent, LabelComponent, InputFieldPasswordComponent,
        InputFieldTextComponent, InputFieldEmailComponent,
        ButtonComponent, ErrorComponent
      ],
      imports: [ FormsModule, HttpClientModule ],
      providers: [UserService, MessageService, FlashMessage]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AddUserComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should execute onSubmit method', () => {
    const newUser = {
      firstName: 'logica',
      middleName: '',
      lastName: 'beans',
      emailAddress: 'user@user.com',
      address: 'user',
      password: 'user',
      mobileNumber: '9870077757'
    };
    component.onSubmit(newUser);
  });
});
