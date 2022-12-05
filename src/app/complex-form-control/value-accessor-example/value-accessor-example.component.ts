import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface formInterface {
  itemName: FormControl<string>,
  isLocked: FormControl<boolean>,
}

@Component({
  selector: 'app-value-accessor-example',
  templateUrl: './value-accessor-example.component.html',
  styleUrls: ['./value-accessor-example.component.scss'],
})
export class ValueAccessorExampleComponent implements OnInit {
  form = new FormGroup<formInterface>({
    itemName: new FormControl('', { nonNullable: true }),
    isLocked: new FormControl(false, { nonNullable: true }),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
  }
}
