import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form-field-container',
  templateUrl: './search-form-field-container.component.html',
  styleUrls: ['./search-form-field-container.component.scss'],
})
export class SearchFormFieldContainerComponent {
  formControl = new FormControl({ value: { scope: '', query: '' }, disabled: true});
}
