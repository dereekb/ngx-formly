import * as i5 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i4 from '@ngx-formly/bootstrap/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/bootstrap/form-field';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';

declare function withFormlyFieldTextArea(): ConfigOption;

interface TextAreaProps extends FormlyFieldProps {
    cols?: number;
    rows?: number;
}
interface FormlyTextAreaFieldConfig extends FormlyFieldConfig<TextAreaProps> {
    type: 'textarea' | Type<FormlyFieldTextArea>;
}
declare class FormlyFieldTextArea extends FieldType<FieldTypeConfig<TextAreaProps>> {
    defaultOptions: {
        props: {
            cols: number;
            rows: number;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldTextArea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldTextArea, "formly-field-textarea", never, {}, {}, never, never, false, never>;
}

declare class FormlyBootstrapTextAreaModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyBootstrapTextAreaModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyBootstrapTextAreaModule, [typeof FormlyFieldTextArea], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.FormlyBootstrapFormFieldModule, typeof i5.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyBootstrapTextAreaModule>;
}

export { FormlyBootstrapTextAreaModule, FormlyFieldTextArea, withFormlyFieldTextArea };
export type { FormlyTextAreaFieldConfig };
