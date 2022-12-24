import { Component } from '@angular/core';
import { WidgetInterface } from 'src/app/patterns-example/widgets/widget.interface';
import { WIDGET } from 'src/app/patterns-example/widgets/widget.token';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: VelocityWidgetComponent,
  }]
})
export class VelocityWidgetComponent implements WidgetInterface {
  isRefreshing = false;

  load(): void {
    console.log('Load data from JIRA API... ');
  }

  refresh(): void {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }
}
