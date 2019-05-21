import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-input-percentage',
  templateUrl: './input-percentage.component.html'
})
export class InputPercentageComponent extends FieldType {
  public limitToHundred(rawValue) {
    const value = parseInt(rawValue, 10);

    if (value < 100) {
      if (value < 10) {
        return [/\d/, ' %'];
      } else {
      return [/\d/, /\d/, ' %'];
      }
    } else {
      return ['100 %'];
    }
  }
}
