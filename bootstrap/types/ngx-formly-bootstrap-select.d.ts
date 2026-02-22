import * as i6 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i4 from '@ngx-formly/bootstrap/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/bootstrap/form-field';
import * as i5 from '@ngx-formly/core/select';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';

declare function withFormlyFieldSelect(): ConfigOption;

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
    multiple?: boolean;
    compareWith?: (o1: any, o2: any) => boolean;
}
interface FormlySelectFieldConfig extends FormlyFieldConfig<SelectProps> {
    type: 'select' | Type<FormlyFieldSelect>;
}
declare class FormlyFieldSelect extends FieldType<FieldTypeConfig<SelectProps>> {
    defaultOptions: {
        props: {
            compareWith(o1: any, o2: any): boolean;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldSelect, "formly-field-select", never, {}, {}, never, never, false, never>;
}

declare class FormlyBootstrapSelectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyBootstrapSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyBootstrapSelectModule, [typeof FormlyFieldSelect], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.FormlyBootstrapFormFieldModule, typeof i5.FormlySelectModule, typeof i6.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyBootstrapSelectModule>;
}

export { FormlyBootstrapSelectModule, FormlyFieldSelect, withFormlyFieldSelect };
export type { FormlySelectFieldConfig };
