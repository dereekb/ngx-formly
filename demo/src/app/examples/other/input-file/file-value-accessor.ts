import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  // eslint-disable-next-line
  selector: 'input[type=file]',
  host: {
    '(change)': 'onChange($event)',
    '(blur)': 'onTouched()',
  },
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: true }],
  standalone: true,
})
// https://github.com/angular/angular/issues/7341
export class FileValueAccessor implements ControlValueAccessor {
  value: any;
  onChange = (event: Event) => {
    const type = (event.target as HTMLInputElement).files;
  };
  onTouched = () => {};

  writeValue(_value: any) {}
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
