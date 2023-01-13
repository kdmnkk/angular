import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComplexFormControlModule } from 'src/app/complex-form-control/complex-form-control.module';
import { DragAndDropModule } from 'src/app/drag-and-drop/drag-and-drop.module';
import { PatternsExampleModule } from 'src/app/patterns-example/patterns-example.module';
import { SearchControlModule } from 'src/app/search-control/search-control.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComplexFormControlModule,
    SearchControlModule,
    PatternsExampleModule,
    DragAndDropModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
