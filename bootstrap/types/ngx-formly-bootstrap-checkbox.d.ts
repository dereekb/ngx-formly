import * as i5 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i4 from '@ngx-formly/bootstrap/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/bootstrap/form-field';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';

declare function withFormlyFieldCheckbox(): ConfigOption;

interface CheckboxProps extends FormlyFieldProps {
    formCheck?: 'default' | 'inline' | 'switch' | 'inline-switch' | 'nolabel';
    indeterminate?: boolean;
}
interface FormlyCheckboxFieldConfig extends FormlyFieldConfig<CheckboxProps> {
    type: 'checkbox' | Type<FormlyFieldCheckbox>;
}
declare class FormlyFieldCheckbox extends FieldType<FieldTypeConfig<CheckboxProps>> {
    defaultOptions: {
        props: {
            indeterminate: boolean;
            hideLabel: boolean;
            formCheck: "default";
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldCheckbox, "formly-field-checkbox", never, {}, {}, never, never, false, never>;
}

declare class FormlyBootstrapCheckboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyBootstrapCheckboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyBootstrapCheckboxModule, [typeof FormlyFieldCheckbox], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.FormlyBootstrapFormFieldModule, typeof i5.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyBootstrapCheckboxModule>;
}

export { FormlyBootstrapCheckboxModule, FormlyFieldCheckbox, withFormlyFieldCheckbox };
export type { FormlyCheckboxFieldConfig };
