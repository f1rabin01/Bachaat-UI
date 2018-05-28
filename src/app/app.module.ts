import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFieldEmailComponent } from './shared-utils/form-utils/input-field-email/input-field-email.component';
import { InputFieldTextComponent} from './shared-utils/form-utils/input-field-text/input-field-text.component';
import { InputFieldRadioComponent } from './shared-utils/form-utils/input-field-radio/input-field-radio.component';


@NgModule({
  declarations: [
    AppComponent,
    InputFieldEmailComponent,
    InputFieldTextComponent,
    InputFieldRadioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
