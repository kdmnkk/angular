import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomFormFieldControlComponent } from './custom-form-field-control/custom-form-field-control.component';
import { SearchFormFieldContainerComponent } from './search-form-field-container/search-form-field-container.component';



@NgModule({
  declarations: [
    CustomFormFieldControlComponent,
    SearchFormFieldContainerComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SearchControlModule { }
