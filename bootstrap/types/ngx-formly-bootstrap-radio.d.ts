import * as i6 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i4 from '@ngx-formly/bootstrap/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/bootstrap/form-field';
import * as i3 from '@angular/forms';
import { UntypedFormControl } from '@angular/forms';
import * as i2 from '@angular/common';
import * as i5 from '@ngx-formly/core/select';

declare function withFormlyFieldRadio(): ConfigOption;

interface RadioProps extends FormlyFieldProps {
    formCheck?: 'default' | 'inline';
}
interface FormlyRadioFieldConfig extends FormlyFieldConfig<RadioProps> {
    type: 'radio' | Type<FormlyFieldRadio>;
}
declare class FormlyFieldRadio extends FieldType<FieldTypeConfig<RadioProps>> {
    defaultOptions: {
        props: {
            formCheck: "default";
        };
    };
    get disabledControl(): UntypedFormControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldRadio, "formly-field-radio", never, {}, {}, never, never, false, never>;
}

declare class FormlyBootstrapRadioModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyBootstrapRadioModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyBootstrapRadioModule, [typeof FormlyFieldRadio], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.FormlyBootstrapFormFieldModule, typeof i5.FormlySelectModule, typeof i6.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyBootstrapRadioModule>;
}

export { FormlyBootstrapRadioModule, FormlyFieldRadio, withFormlyFieldRadio };
export type { FormlyRadioFieldConfig };
