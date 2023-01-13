import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LockInputComponent } from './lock-input/lock-input.component';
import { ValueAccessorExampleComponent } from './value-accessor-example/value-accessor-example.component';

@NgModule({
  declarations: [
    LockInputComponent,
    ValueAccessorExampleComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class ComplexFormControlModule { }
