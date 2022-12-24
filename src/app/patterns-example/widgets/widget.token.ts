import { WidgetInterface } from './widget.interface';
import { InjectionToken } from '@angular/core';

export const WIDGET = new InjectionToken<WidgetInterface>('Widget');
