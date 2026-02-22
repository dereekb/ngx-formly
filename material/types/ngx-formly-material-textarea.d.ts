import * as i6 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i5 from '@ngx-formly/material/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i4 from '@angular/material/input';

declare function withFormlyFieldTextArea(): ConfigOption;

interface TextAreaProps extends FormlyFieldProps {
    autosize?: boolean;
    autosizeMinRows?: number;
    autosizeMaxRows?: number;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldTextArea, "formly-field-mat-textarea", never, {}, {}, never, never, false, never>;
}

declare class FormlyMatTextAreaModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyMatTextAreaModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyMatTextAreaModule, [typeof FormlyFieldTextArea], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.MatInputModule, typeof i5.FormlyMatFormFieldModule, typeof i6.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyMatTextAreaModule>;
}

export { FormlyFieldTextArea, FormlyMatTextAreaModule, withFormlyFieldTextArea };
export type { FormlyTextAreaFieldConfig };
