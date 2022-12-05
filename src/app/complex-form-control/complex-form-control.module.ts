import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LockInputComponent } from './lock-input/lock-input.component';
import { ValueAccessorExampleComponent } from './value-accessor-example/value-accessor-example.component';



@NgModule({
  declarations: [
    LockInputComponent,
    ValueAccessorExampleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    ValueAccessorExampleComponent
  ]
})
export class ComplexFormControlModule { }
