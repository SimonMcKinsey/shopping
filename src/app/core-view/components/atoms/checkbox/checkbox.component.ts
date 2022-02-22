import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CheckboxComponent,
    multi: true
  }]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() isDisabled = false;
  @Input() isChecked = false;
  @Output() changed = new EventEmitter();

  constructor() { }

  onChange = (value: any) => { };
  onTouched = () => { };

  ngOnInit(): void { }

  writeValue(obj: any): void {
    this.isChecked = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setValue(event: any) {
    const value = event.checked;
    this.isChecked = value;
    this.changed.emit(value);
    this.onChange(value);
    this.onTouched();
  }
}
