import * as i6 from '@ngx-formly/core';
import { ConfigOption, FormlyFieldConfig, FieldTypeConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type, AfterViewInit, AfterViewChecked, OnDestroy, Renderer2 } from '@angular/core';
import * as i5 from '@ngx-formly/material/form-field';
import { FormlyFieldProps, FieldType } from '@ngx-formly/material/form-field';
import * as i4 from '@angular/material/checkbox';
import { MatCheckbox } from '@angular/material/checkbox';
import { FocusMonitor } from '@angular/cdk/a11y';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';

declare function withFormlyFieldCheckbox(): ConfigOption;

interface CheckboxProps extends FormlyFieldProps {
    indeterminate?: boolean;
    labelPosition?: 'before' | 'after';
}
interface FormlyCheckboxFieldConfig extends FormlyFieldConfig<CheckboxProps> {
    type: 'checkbox' | Type<FormlyFieldCheckbox>;
}
declare class FormlyFieldCheckbox extends FieldType<FieldTypeConfig<CheckboxProps>> implements AfterViewInit, AfterViewChecked, OnDestroy {
    private renderer;
    private focusMonitor;
    checkbox: MatCheckbox;
    defaultOptions: {
        props: {
            hideFieldUnderline: boolean;
            indeterminate: boolean;
            floatLabel: "always";
            hideLabel: boolean;
            color: "accent";
        };
    };
    private _required;
    constructor(renderer: Renderer2, focusMonitor: FocusMonitor);
    onContainerClick(event: MouseEvent): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldCheckbox, "formly-field-mat-checkbox", never, {}, {}, never, never, false, never>;
}

declare class FormlyMatCheckboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyMatCheckboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyMatCheckboxModule, [typeof FormlyFieldCheckbox], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.MatCheckboxModule, typeof i5.FormlyMatFormFieldModule, typeof i6.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyMatCheckboxModule>;
}

export { FormlyFieldCheckbox, FormlyMatCheckboxModule, withFormlyFieldCheckbox };
export type { FormlyCheckboxFieldConfig };
