import * as i6 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i4 from '@ngx-formly/bootstrap/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/bootstrap/form-field';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i5 from '@ngx-formly/core/select';

declare function withFormlyFieldMultiCheckbox(): ConfigOption;

interface MultiCheckboxProps extends FormlyFieldProps {
    formCheck?: 'default' | 'inline' | 'switch' | 'inline-switch';
}
interface FormlyMultiCheckboxFieldConfig extends FormlyFieldConfig<MultiCheckboxProps> {
    type: 'multicheckbox' | Type<FormlyFieldMultiCheckbox>;
}
declare class FormlyFieldMultiCheckbox extends FieldType<FieldTypeConfig<MultiCheckboxProps>> {
    defaultOptions: {
        props: {
            formCheck: "default";
        };
    };
    onChange(value: any, checked: boolean): void;
    isChecked(option: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldMultiCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldMultiCheckbox, "formly-field-multicheckbox", never, {}, {}, never, never, false, never>;
}

declare class FormlyBootstrapMultiCheckboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyBootstrapMultiCheckboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyBootstrapMultiCheckboxModule, [typeof FormlyFieldMultiCheckbox], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.FormlyBootstrapFormFieldModule, typeof i5.FormlySelectModule, typeof i6.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyBootstrapMultiCheckboxModule>;
}

export { FormlyBootstrapMultiCheckboxModule, FormlyFieldMultiCheckbox, withFormlyFieldMultiCheckbox };
export type { FormlyMultiCheckboxFieldConfig };
