import * as i6 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i5 from '@ngx-formly/material/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import * as i4 from '@angular/material/slide-toggle';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';

declare function withFormlyFieldToggle(): ConfigOption;

interface ToggleProps extends FormlyFieldProps {
    labelPosition?: 'before' | 'after';
}
interface FormlyToggleFieldConfig extends FormlyFieldConfig<ToggleProps> {
    type: 'toggle' | Type<FormlyFieldToggle>;
}
declare class FormlyFieldToggle extends FieldType<FieldTypeConfig<ToggleProps>> {
    slideToggle: MatSlideToggle;
    defaultOptions: {
        props: {
            hideFieldUnderline: boolean;
            floatLabel: "always";
            hideLabel: boolean;
        };
    };
    onContainerClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldToggle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldToggle, "formly-field-mat-toggle", never, {}, {}, never, never, false, never>;
}

declare class FormlyMatToggleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyMatToggleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyMatToggleModule, [typeof FormlyFieldToggle], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.MatSlideToggleModule, typeof i5.FormlyMatFormFieldModule, typeof i6.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyMatToggleModule>;
}

export { FormlyFieldToggle, FormlyMatToggleModule, withFormlyFieldToggle };
export type { FormlyToggleFieldConfig };
