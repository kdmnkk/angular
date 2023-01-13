import { Component } from '@angular/core';

@Component({
  selector: 'app-bridge-pattern',
  template: `
    <app-widget-wrapper>
      <app-weather-widget></app-weather-widget>
    </app-widget-wrapper>
    <app-widget-wrapper>
      <app-velocity-widget></app-velocity-widget>
    </app-widget-wrapper>
  `
})
export class BridgePatternComponent {}
