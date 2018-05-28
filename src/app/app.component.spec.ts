import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFieldEmailComponent } from './shared-utils/form-utils/input-field-email/input-field-email.component';
import { InputFieldTextComponent} from './shared-utils/form-utils/input-field-text/input-field-text.component';
import { InputFieldRadioComponent } from './shared-utils/form-utils/input-field-radio/input-field-radio.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
