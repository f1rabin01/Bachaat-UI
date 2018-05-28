import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InputFieldPasswordComponent } from './input-field-password.component';

describe('InputFieldPasswordComponent', () => {
  let component: InputFieldPasswordComponent;
  let fixture: ComponentFixture<InputFieldPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldPasswordComponent ],
      imports: [ FormsModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create InputFieldPasswordComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should alert required message when the input field is empty', () => {
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input');
    input.value = '';
    fixture.detectChanges();
    const error = compiled.querySelector('.form-group .alert').children[0];
    expect(error.innerHTML.includes('This field is required')).toBeTruthy();
  });
  it('should alert minimum length message when the input value length is below min-length', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.minLength = 8;
    const input = compiled.querySelector('input');
    input.value = 'passW2@';
    fixture.detectChanges();
    const error = compiled.querySelector('.form-group .alert').children[1];
    expect(error.innerHTML.includes('Minimum length is')).toBeTruthy();
  });
  it('should alert maximum length message when the input value length is above max-length', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.maxLength = 12;
    const input = compiled.querySelector('input');
    input.value = 'thisisaLongpasswordW2@';
    fixture.detectChanges();
    const error = compiled.querySelector('.form-group .alert').children[2];
    expect(error.innerHTML.includes('Maximum length is')).toBeTruthy();
  });
  it('should alert pattern error message when the input value does not match the required pattern', () => {
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input');
    input.value = 'password';
    fixture.detectChanges();
    const error = compiled.querySelector('.form-group .alert').children[3];
    expect(error.innerHTML.includes('Should have at least one uppercase letter,')).toBeTruthy();
  });
});
