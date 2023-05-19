import { Component, Provider, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(
    () => SwitchNestedComponent
  ),
  multi: true
}

@Component({
  selector: 'switch-nested',
  templateUrl: './switch-nested.component.html',
  styleUrls: ['./switch-nested.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class SwitchNestedComponent implements ControlValueAccessor {
  
  state = 'off';

  private onChange = (value: any) => {} //can be any or some custom interface
  
  setState(state: string): void {
    this.state = state;
    this.onChange(this.state);
  }
  
  writeValue(state: string): void {
    //transform arguments of function
    this.state = this.state;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }
}
