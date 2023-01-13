import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ValueAccessorExampleComponent
} from 'src/app/complex-form-control/value-accessor-example/value-accessor-example.component';
import { DragAndDropComponent } from 'src/app/drag-and-drop/drag-and-drop/drag-and-drop.component';
import { BridgePatternComponent } from 'src/app/patterns-example/bridge-pattern/bridge-pattern.component';
import {
  SearchFormFieldContainerComponent
} from 'src/app/search-control/search-form-field-container/search-form-field-container.component';

const routes: Routes = [
  {
    path: 'drag-and-drop',
    component: DragAndDropComponent
  },
  {
    path: 'bridge-pattern',
    component: BridgePatternComponent
  },
  {
    path: 'value-accessor',
    component: ValueAccessorExampleComponent
  },
  {
    path: 'custom-form-field',
    component: SearchFormFieldContainerComponent
  },
  {
    path: '**',
    redirectTo: 'drag-and-drop'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
