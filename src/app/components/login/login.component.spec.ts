import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';
import {LabelComponent} from '../../shared-utils/form-utils/label/label.component';
import {InputFieldTextComponent} from '../../shared-utils/form-utils/input-field-text/input-field-text.component';
import {InputFieldPasswordComponent} from '../../shared-utils/form-utils/input-field-password/input-field-password.component';
import {ButtonComponent} from '../../shared-utils/form-utils/button/button.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        LoginComponent,
        LabelComponent,
        InputFieldTextComponent,
        InputFieldPasswordComponent,
        ButtonComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
