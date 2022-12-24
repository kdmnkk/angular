import { Component, OnInit, ContentChild } from '@angular/core';
import { WidgetInterface } from 'src/app/patterns-example/widgets/widget.interface';
import { WIDGET } from 'src/app/patterns-example/widgets/widget.token';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET, { static: true })
  widget?: WidgetInterface;

  ngOnInit(): void {
    this.widget?.load();
  }

  onRefresh(): void {
    this.widget?.refresh();
  }
}
