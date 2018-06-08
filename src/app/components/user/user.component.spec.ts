import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from '../../services/user/user.service';

import { UserComponent } from './user.component';
import { LabelComponent } from '../../shared-utils/form-utils/label/label.component';
import { InputFieldPasswordComponent } from '../../shared-utils/form-utils/input-field-password/input-field-password.component';
import { InputFieldTextComponent } from '../../shared-utils/form-utils/input-field-text/input-field-text.component';
import { InputFieldEmailComponent } from '../../shared-utils/form-utils/input-field-email/input-field-email.component';
import { ButtonComponent } from '../../shared-utils/form-utils/button/button.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ErrorComponent} from '../../shared-utils/form-utils/error/error.component';

describe('UserComponent', () => {
  let fixture: ComponentFixture<UserComponent>;
  let component: UserComponent;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent, LabelComponent, InputFieldPasswordComponent,
        InputFieldTextComponent, InputFieldEmailComponent,
        ButtonComponent, AddUserComponent, ErrorComponent
      ],
      imports: [ FormsModule, HttpClientModule ],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
