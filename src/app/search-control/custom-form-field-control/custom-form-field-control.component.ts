import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Subject } from 'rxjs';

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
export class CustomFormFieldControlComponent implements OnInit, OnDestroy, MatFormFieldControl<FormFieldValueInterface> {
  @ViewChild(MatInput, { read: ElementRef, static: true })
  input!: ElementRef;

  @Input()
  set value(value: FormFieldValueInterface) {
    this._value = value;
    this.stateChanges.next();
  }
  get value(): FormFieldValueInterface {
    return this._value;
  }
  stateChanges = new Subject<void>();
  private _value!: FormFieldValueInterface;

  static nextId = 0;
  @HostBinding() id = `custom-form-field-id-${CustomFormFieldControlComponent.nextId++}`;

  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  get placeholder() {
    return this._placeholder;
  }
  private _placeholder!: string;

  focused = true;
  ngControl: NgControl | null = null;

  get empty(): boolean {
    return !this.value.query && !this.value.scope;
  }

  @HostBinding('class.floated')
  get shouldLabelFloat(): boolean {
    return true;
  }

  @Input()
  required!: boolean;

  @Input()
  disabled!: boolean;

  controlType = 'custom-form-field';

  userAriaDescribedBy!: string;

  errorState: boolean = false;

  @HostBinding('attr.aria-describedby') describedBy = '';

  constructor(private focusMonitor: FocusMonitor) {
  }

  onContainerClick(): void {
    this.focusMonitor.focusVia(this.input, 'program');
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  ngOnInit() {
    this.focusMonitor.monitor(this.input).subscribe((focused) => {
      this.focused = !!focused;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.input);
    this.stateChanges.complete();
  }

}
