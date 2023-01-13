import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { RectanglesComponent } from './rectangles/rectangles.component';



@NgModule({
  declarations: [
    DragAndDropComponent,
    RectanglesComponent,
  ],
  exports: [
    DragAndDropComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
  ],
})
export class DragAndDropModule { }
