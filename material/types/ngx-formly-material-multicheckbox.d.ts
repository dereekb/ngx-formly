import * as i7 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { QueryList, Type } from '@angular/core';
import * as i4 from '@angular/material/checkbox';
import { MatCheckbox } from '@angular/material/checkbox';
import * as i5 from '@ngx-formly/material/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i6 from '@ngx-formly/core/select';

declare function withFormlyFieldMultiCheckbox(): ConfigOption;

interface MultiCheckboxProps extends FormlyFieldProps {
    labelPosition?: 'before' | 'after';
}
interface FormlyMultiCheckboxFieldConfig extends FormlyFieldConfig<MultiCheckboxProps> {
    type: 'multicheckbox' | Type<FormlyFieldMultiCheckbox>;
}
declare class FormlyFieldMultiCheckbox extends FieldType<FieldTypeConfig<MultiCheckboxProps>> {
    checkboxes: QueryList<MatCheckbox>;
    defaultOptions: {
        props: {
            hideFieldUnderline: boolean;
            floatLabel: "always";
            color: "accent";
        };
    };
    onChange(value: any, checked: boolean): void;
    onContainerClick(): void;
    isChecked(option: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldMultiCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldMultiCheckbox, "formly-field-mat-multicheckbox", never, {}, {}, never, never, false, never>;
}

declare class FormlyMatMultiCheckboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyMatMultiCheckboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyMatMultiCheckboxModule, [typeof FormlyFieldMultiCheckbox], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.MatCheckboxModule, typeof i5.FormlyMatFormFieldModule, typeof i6.FormlySelectModule, typeof i7.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyMatMultiCheckboxModule>;
}

export { FormlyFieldMultiCheckbox, FormlyMatMultiCheckboxModule, withFormlyFieldMultiCheckbox };
export type { FormlyMultiCheckboxFieldConfig };
