import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { RectanglesComponent } from './rectangles/rectangles.component';

@NgModule({
  declarations: [
    DragAndDropComponent,
    RectanglesComponent,
  ],
  imports: [
    SharedModule
  ],
})
export class DragAndDropModule { }
