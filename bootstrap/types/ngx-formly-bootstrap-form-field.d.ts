import * as i4 from '@ngx-formly/core';
import { ConfigOption, FieldWrapper, FormlyFieldConfig, FormlyFieldProps as FormlyFieldProps$1, FieldType as FieldType$1 } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';

declare function withFormlyFormField(): ConfigOption;

interface FormlyFieldProps extends FormlyFieldProps$1 {
    hideLabel?: boolean;
    hideRequiredMarker?: boolean;
    labelPosition?: 'floating';
}
declare class FormlyWrapperFormField extends FieldWrapper<FormlyFieldConfig<FormlyFieldProps>> {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyWrapperFormField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyWrapperFormField, "formly-wrapper-form-field", never, {}, {}, never, never, false, never>;
}

declare class FormlyBootstrapFormFieldModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyBootstrapFormFieldModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyBootstrapFormFieldModule, [typeof FormlyWrapperFormField], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyBootstrapFormFieldModule>;
}

declare abstract class FieldType<F extends FormlyFieldConfig = FormlyFieldConfig> extends FieldType$1<F> {
    private hostContainerRef?;
    set content(templateRef: TemplateRef<any>);
    constructor(hostContainerRef?: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldType<any>, [{ optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FieldType<any>, never, never, {}, {}, never, never, true, never>;
}

export { FieldType, FormlyBootstrapFormFieldModule, withFormlyFormField };
export type { FormlyFieldProps };
