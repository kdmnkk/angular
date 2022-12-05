import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-lock-input',
  templateUrl: './lock-input.component.html',
  styleUrls: ['./lock-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: LockInputComponent,
    multi: true,
  }],
})
export class LockInputComponent implements ControlValueAccessor {
  value = false;
  disabled = false;
  onChange?: (value: boolean) => void
  onTouched?: () => void

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: boolean): void {
    this.value = obj;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  setValue() {
    if (this.disabled) return;

    this.value = !this.value;
    this.onChange!(this.value);
    this.onTouched!();
  }
}
