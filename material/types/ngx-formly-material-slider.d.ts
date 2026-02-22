import * as i7 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i6 from '@ngx-formly/material/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import * as i2 from '@angular/common';
import * as i3 from '@angular/material/core';
import * as i4 from '@angular/forms';
import * as i5 from '@angular/material/slider';

declare function withFormlyFieldSlider(): ConfigOption;

interface SliderProps extends FormlyFieldProps {
    displayWith?: (value: number) => string;
    discrete?: boolean;
    showTickMarks?: boolean;
    input?: (field: FormlyFieldConfig<SliderProps>, $event: Event) => void;
    change?: (field: FormlyFieldConfig<SliderProps>, $event: Event) => void;
}
interface FormlySliderFieldConfig extends FormlyFieldConfig<SliderProps> {
    type: 'slider' | Type<FormlyFieldSlider>;
}
declare class FormlyFieldSlider extends FieldType<FieldTypeConfig<SliderProps>> {
    defaultOptions: {
        props: {
            hideFieldUnderline: boolean;
            floatLabel: "always";
            displayWith: (value: number) => string;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldSlider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldSlider, "formly-field-mat-slider", never, {}, {}, never, never, false, never>;
}

declare class FormlyMatSliderModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyMatSliderModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyMatSliderModule, [typeof FormlyFieldSlider], [typeof i2.CommonModule, typeof i3.MatRippleModule, typeof i4.ReactiveFormsModule, typeof i5.MatSliderModule, typeof i6.FormlyMatFormFieldModule, typeof i7.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyMatSliderModule>;
}

export { FormlyFieldSlider, FormlyMatSliderModule, withFormlyFieldSlider };
export type { FormlySliderFieldConfig };
