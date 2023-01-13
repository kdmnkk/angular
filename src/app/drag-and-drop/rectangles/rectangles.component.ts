import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Rectangle {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-rectangles',
  templateUrl: './rectangles.component.html',
  styleUrls: ['./rectangles.component.scss']
})
export class RectanglesComponent implements OnInit {
  rectangles$!: Observable<Rectangle[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.rectangles$ = this.http.get<Rectangle[]>(
      `https://jsonplaceholder.typicode.com/photos?_limit=5`
    );
  }

  drop(event: CdkDragDrop<Rectangle[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  }
}
