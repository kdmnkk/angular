
import { Component } from '@angular/core';
import { WidgetInterface } from 'src/app/patterns-example/widgets/widget.interface';
import { WIDGET } from 'src/app/patterns-example/widgets/widget.token';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: WeatherWidgetComponent,
  }]
})
export class WeatherWidgetComponent implements WidgetInterface{
  isLoading = false;

  load(): void {
    console.log('Load data from WEATHER API... ');
  }

  refresh(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
