import * as i7 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { AfterViewInit, OnDestroy, Type } from '@angular/core';
import * as i5 from '@ngx-formly/material/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import * as i4 from '@angular/material/radio';
import { MatRadioGroup } from '@angular/material/radio';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i6 from '@ngx-formly/core/select';

declare function withFormlyFieldRadio(): ConfigOption;

interface RadioProps extends FormlyFieldProps {
    labelPosition?: 'before' | 'after';
}
interface FormlyRadioFieldConfig extends FormlyFieldConfig<RadioProps> {
    type: 'radio' | Type<FormlyFieldRadio>;
}
declare class FormlyFieldRadio extends FieldType<FieldTypeConfig<RadioProps>> implements AfterViewInit, OnDestroy {
    radioGroup: MatRadioGroup;
    defaultOptions: {
        props: {
            hideFieldUnderline: boolean;
            floatLabel: "always";
            tabindex: number;
        };
    };
    private focusObserver;
    ngAfterViewInit(): void;
    onContainerClick(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldRadio, "formly-field-mat-radio", never, {}, {}, never, never, false, never>;
}

declare class FormlyMatRadioModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyMatRadioModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyMatRadioModule, [typeof FormlyFieldRadio], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.MatRadioModule, typeof i5.FormlyMatFormFieldModule, typeof i6.FormlySelectModule, typeof i7.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyMatRadioModule>;
}

export { FormlyFieldRadio, FormlyMatRadioModule, withFormlyFieldRadio };
export type { FormlyRadioFieldConfig };
