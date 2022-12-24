import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable } from 'rxjs';

export interface FormFieldValueInterface {
  query: string;
  scope: string;
}

@Component({
  selector: 'app-custom-form-field-control',
  templateUrl: './custom-form-field-control.component.html',
  styleUrls: ['./custom-form-field-control.component.scss'],
  providers: [{
    provide: MatFormFieldControl,
    useExisting: CustomFormFieldControlComponent,
  }],
})
export class CustomFormFieldControlComponent implements MatFormFieldControl<FormFieldValueInterface> {
  constructor() {}

  autofilled!: boolean;
  controlType!: string;
  userAriaDescribedBy!: string;
  disabled!: boolean;
  empty!: boolean;
  errorState!: boolean;
  focused!: boolean;
  id!: string;
  ngControl!: NgControl | null;
  placeholder!: string;
  required!: boolean;
  shouldLabelFloat!: boolean;
  stateChanges!: Observable<void>;
  value!: FormFieldValueInterface | null;


  onContainerClick(event: MouseEvent): void {
  }

  setDescribedByIds(ids: string[]): void {
  }

}
