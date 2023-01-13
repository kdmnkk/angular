import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    WidgetWrapperComponent,
    WeatherWidgetComponent,
    VelocityWidgetComponent,
  ],
})
export class PatternsExampleModule { }
