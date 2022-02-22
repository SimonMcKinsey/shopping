import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  AfterViewInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputSelectComponent,
      multi: true,
    },
  ],
})
//https://stackoverflow.com/questions/59086347/controlvalueaccessor-with-error-validation-in-angular-material
export class InputSelectComponent implements OnInit, ControlValueAccessor {
  @Input() dataSource!: any;
  @Input() value: any;
  @Input() showProp = '';
  @Input() selectProp = 'id';

  disabled = false;

  constructor() {}

  onTouched = () => {};
  onChange = (value: any) => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {}

  onSelect(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
