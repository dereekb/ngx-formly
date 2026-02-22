import * as i6 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i5 from '@ngx-formly/material/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i4 from '@angular/material/input';

declare function withFormlyFieldInput(): ConfigOption;

interface InputProps extends FormlyFieldProps {
}
interface FormlyInputFieldConfig extends FormlyFieldConfig<InputProps> {
    type: 'input' | Type<FormlyFieldInput>;
}
declare class FormlyFieldInput extends FieldType<FieldTypeConfig<InputProps>> {
    get type(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldInput, "formly-field-mat-input", never, {}, {}, never, never, false, never>;
}

declare class FormlyMatInputModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyMatInputModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyMatInputModule, [typeof FormlyFieldInput], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.MatInputModule, typeof i5.FormlyMatFormFieldModule, typeof i6.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyMatInputModule>;
}

export { FormlyFieldInput, FormlyMatInputModule, withFormlyFieldInput };
export type { FormlyInputFieldConfig };
