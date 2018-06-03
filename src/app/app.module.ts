import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LabelComponent} from './shared-utils/form-utils/label/label.component';
import {InputFieldEmailComponent} from './shared-utils/form-utils/input-field-email/input-field-email.component';
import {InputFieldTextComponent} from './shared-utils/form-utils/input-field-text/input-field-text.component';
import {InputFieldPasswordComponent} from './shared-utils/form-utils/input-field-password/input-field-password.component';
import {InputFieldDateComponent} from './shared-utils/form-utils/input-field-date/input-field-date.component';
import {ButtonComponent} from './shared-utils/form-utils/button/button.component';
import {InputFieldRadioComponent} from './shared-utils/form-utils/input-field-radio/input-field-radio.component';
import {InputFieldCheckboxComponent} from './shared-utils/form-utils/input-field-checkbox/input-field-checkbox.component';
import {UsersComponent} from './components/users/users.component';
import {UserService} from './services/user/user.service';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldDateComponent,
    LabelComponent,
    InputFieldPasswordComponent,
    InputFieldEmailComponent,
    InputFieldTextComponent,
    ButtonComponent,
    InputFieldRadioComponent,
    InputFieldCheckboxComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
