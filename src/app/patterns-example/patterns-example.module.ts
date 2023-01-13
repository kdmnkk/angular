import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { VelocityWidgetComponent } from './widgets/velocity-widget/velocity-widget.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { BridgePatternComponent } from './bridge-pattern/bridge-pattern.component';

@NgModule({
  declarations: [
    WidgetWrapperComponent,
    VelocityWidgetComponent,
    WeatherWidgetComponent,
    BridgePatternComponent,
  ],
  imports: [
    SharedModule,
  ],
})
export class PatternsExampleModule { }
