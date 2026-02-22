import * as i7 from '@ngx-formly/core';
import { ConfigOption, FormlyFieldConfig, FieldTypeConfig, FormlyConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type, AfterViewInit, OnDestroy, TemplateRef, ChangeDetectorRef } from '@angular/core';
import * as i6 from '@ngx-formly/material/form-field';
import { FormlyFieldProps, FieldType } from '@ngx-formly/material/form-field';
import { ComponentType } from '@angular/cdk/portal';
import * as i5 from '@angular/material/datepicker';
import { MatDatepicker, MatCalendarCellClassFunction } from '@angular/material/datepicker';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i4 from '@angular/material/input';

declare function withFormlyFieldDatepicker(): ConfigOption;

interface DatepickerProps extends FormlyFieldProps {
    datepickerOptions?: Partial<{
        touchUi: boolean;
        opened: boolean;
        disabled: boolean;
        startView: 'month' | 'year' | 'multi-year';
        datepickerTogglePosition: 'suffix' | 'prefix';
        calendarHeaderComponent: ComponentType<any>;
        filter: (date: any | null) => boolean;
        min: any;
        max: any;
        dateInput: (field: FieldTypeConfig<DatepickerProps>, event: any) => void;
        dateChange: (field: FieldTypeConfig<DatepickerProps>, event: any) => void;
        monthSelected: (field: FieldTypeConfig<DatepickerProps>, event: any, picker: MatDatepicker<any>) => void;
        yearSelected: (field: FieldTypeConfig<DatepickerProps>, event: any, picker: MatDatepicker<any>) => void;
        dateClass: MatCalendarCellClassFunction<any>;
        panelClass: string | string[];
        startAt: any | null;
    }>;
}
interface FormlyDatepickerFieldConfig extends FormlyFieldConfig<DatepickerProps> {
    type: 'datepicker' | Type<FormlyFieldDatepicker>;
}
declare class FormlyFieldDatepicker extends FieldType<FieldTypeConfig<DatepickerProps>> implements AfterViewInit, OnDestroy {
    private config;
    private cdRef;
    datepickerToggle: TemplateRef<any>;
    defaultOptions: {
        props: {
            datepickerOptions: {
                startView: "month";
                datepickerTogglePosition: "suffix";
                disabled: boolean;
                opened: boolean;
                dateInput: () => void;
                dateChange: () => void;
                monthSelected: () => void;
                yearSelected: () => void;
            };
        };
    };
    private fieldErrorsObserver;
    constructor(config: FormlyConfig, cdRef: ChangeDetectorRef);
    detectChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldDatepicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldDatepicker, "formly-field-mat-datepicker", never, {}, {}, never, never, false, never>;
}

declare class FormlyMatDatepickerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyMatDatepickerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyMatDatepickerModule, [typeof FormlyFieldDatepicker], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.MatInputModule, typeof i5.MatDatepickerModule, typeof i6.FormlyMatFormFieldModule, typeof i7.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyMatDatepickerModule>;
}

export { FormlyFieldDatepicker, FormlyMatDatepickerModule, withFormlyFieldDatepicker };
export type { FormlyDatepickerFieldConfig };
