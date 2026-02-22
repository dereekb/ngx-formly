import * as i5 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i4 from '@ngx-formly/bootstrap/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/bootstrap/form-field';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';

declare function withFormlyFieldInput(): ConfigOption;

interface InputProps extends FormlyFieldProps {
}
interface FormlyInputFieldConfig extends FormlyFieldConfig<InputProps> {
    type: 'input' | Type<FormlyFieldInput>;
}
declare class FormlyFieldInput extends FieldType<FieldTypeConfig<InputProps>> {
    get type(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldInput, "formly-field-input", never, {}, {}, never, never, false, never>;
}

declare class FormlyBootstrapInputModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyBootstrapInputModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyBootstrapInputModule, [typeof FormlyFieldInput], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.FormlyBootstrapFormFieldModule, typeof i5.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyBootstrapInputModule>;
}

export { FormlyBootstrapInputModule, FormlyFieldInput, withFormlyFieldInput };
export type { FormlyInputFieldConfig };
