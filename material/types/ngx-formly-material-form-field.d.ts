import * as i5 from '@ngx-formly/core';
import { ConfigOption, FormlyFieldProps as FormlyFieldProps$1, FieldWrapper, FormlyFieldConfig, FieldType as FieldType$1 } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { TemplateRef, OnInit, OnDestroy, AfterViewInit, Renderer2, ElementRef, QueryList } from '@angular/core';
import * as i4 from '@angular/material/form-field';
import { FloatLabelType, MatFormFieldAppearance, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ThemePalette, ErrorStateMatcher } from '@angular/material/core';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import { Subject } from 'rxjs';

declare function withFormlyFormField(): ConfigOption;

interface MatFormlyFieldConfig extends FormlyFieldConfig<FormlyFieldProps> {
    _formField?: FormlyWrapperFormField;
}
interface FormlyFieldProps extends FormlyFieldProps$1 {
    prefix?: TemplateRef<any>;
    suffix?: TemplateRef<any>;
    textPrefix?: TemplateRef<any>;
    textSuffix?: TemplateRef<any>;
    hideLabel?: boolean;
    hideRequiredMarker?: boolean;
    hideFieldUnderline?: boolean;
    floatLabel?: FloatLabelType;
    appearance?: MatFormFieldAppearance;
    subscriptSizing?: 'fixed' | 'dynamic';
    color?: ThemePalette;
    hintStart?: TemplateRef<any> | string;
    hintEnd?: TemplateRef<any> | string;
}
declare class FormlyWrapperFormField extends FieldWrapper<MatFormlyFieldConfig> implements OnInit, OnDestroy, AfterViewInit {
    private renderer;
    private elementRef;
    private focusMonitor;
    formField: MatFormField;
    constructor(renderer: Renderer2, elementRef: ElementRef, focusMonitor: FocusMonitor);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyWrapperFormField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyWrapperFormField, "formly-wrapper-mat-form-field", never, {}, {}, never, never, false, never>;
}

declare class FormlyMatFormFieldModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyMatFormFieldModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyMatFormFieldModule, [typeof FormlyWrapperFormField], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.MatFormFieldModule, typeof i5.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyMatFormFieldModule>;
}

declare abstract class FieldType<F extends FormlyFieldConfig<FormlyFieldProps>> extends FieldType$1<F> implements OnDestroy, MatFormFieldControl<any> {
    set matPrefix(prefix: TemplateRef<any>);
    set matTextPrefix(textPrefix: TemplateRef<any>);
    set matSuffix(suffix: TemplateRef<any>);
    set matTextSuffix(textSuffix: TemplateRef<any>);
    set _controls(controls: QueryList<MatFormFieldControl<any>>);
    errorStateMatcher: ErrorStateMatcher;
    stateChanges: Subject<void>;
    _errorState: boolean;
    _focused: boolean;
    ngOnDestroy(): void;
    setDescribedByIds(_ids: string[]): void;
    onContainerClick(_event: MouseEvent): void;
    get errorState(): boolean;
    get controlType(): any;
    get focused(): boolean;
    get disabled(): boolean;
    get required(): boolean;
    get placeholder(): string;
    get shouldPlaceholderFloat(): boolean;
    get value(): any;
    set value(value: any);
    get ngControl(): any;
    get empty(): boolean;
    get shouldLabelFloat(): boolean;
    get formField(): MatFormField;
    private attachControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldType<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FieldType<any>, never, never, {}, {}, never, never, true, never>;
}

export { FieldType, FormlyMatFormFieldModule, withFormlyFormField };
export type { FormlyFieldProps };
