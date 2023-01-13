import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RectangleInterface } from 'src/app/drag-and-drop/rectangle.interface';

@Component({
  selector: 'app-rectangles',
  template: `
  <ul
  cdkDropList
  [cdkDropListData]="rectangles"
  *ngIf="rectangles$ | async as rectangles"
  (cdkDropListDropped)="drop($event)"
>
  <li *ngFor="let rectangle of rectangles" class="rectangle" cdkDrag>
    <a
      class="link"
    >
      <img [src]="rectangle.thumbnailUrl" alt="" width="60" />
    </a>
  </li>
</ul>
  `,
  styles: [`
    ul {
      border: #ccc solid 2px;
      padding: 0;
    }

    .link {
      display: inline-flex;
    }
  `]
})
export class RectanglesComponent implements OnInit {
  rectangles$!: Observable<RectangleInterface[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.rectangles$ = this.http.get<RectangleInterface[]>(
      `https://jsonplaceholder.typicode.com/photos?_limit=5`
    );
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
