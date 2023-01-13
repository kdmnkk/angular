import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { RectangleInterface } from 'src/app/drag-and-drop/rectangle.interface';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {
  rectangles: RectangleInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<RectangleInterface[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  }
}
