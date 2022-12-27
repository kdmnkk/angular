import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NgControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Subject, take } from 'rxjs';

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
export class CustomFormFieldControlComponent
  implements OnInit, OnDestroy, MatFormFieldControl<FormFieldValueInterface>, ControlValueAccessor {
  @ViewChild(MatInput, { read: ElementRef, static: true })
  input!: ElementRef;

  @Input()
  set value(value: FormFieldValueInterface) {
    this.form.patchValue(value);
    this.stateChanges.next();
  }

  get value(): FormFieldValueInterface {
    return this.form.value;
  }

  stateChanges = new Subject<void>();

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

  get errorState() {
    return this._defaultErrorStateMatcher.isErrorState(this.ngControl.control as FormControl, null);
  }

  @HostBinding('attr.aria-describedby') describedBy = '';

  onChange!: (value: FormFieldValueInterface) => void;

  onTouch!: () => void;

  form!: FormGroup;

  constructor(
    private focusMonitor: FocusMonitor,
    @Optional() @Self() public ngControl: NgControl,
    private fb: FormBuilder,
    public _defaultErrorStateMatcher: ErrorStateMatcher
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    this.form = this.fb.group({
      scope: new FormControl<string>(''),
      query: new FormControl<string>(''),
    });
  }

  writeValue(obj: FormFieldValueInterface): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
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
    this.focusMonitor
      .monitor(this.input)
      .pipe(take(1))
      .subscribe(() => {
        this.onTouch();
      });
    this.form.valueChanges.subscribe((value) => this.onChange(value));
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.input);
    this.stateChanges.complete();
  }

}
