import * as i8 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i4 from '@angular/material/select';
import { MatSelectChange } from '@angular/material/select';
import * as i6 from '@ngx-formly/material/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import * as i7 from '@ngx-formly/core/select';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i5 from '@angular/material/core';

declare function withFormlyFieldSelect(): ConfigOption;

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
    multiple?: boolean;
    selectAllOption?: string;
    disableOptionCentering?: boolean;
    typeaheadDebounceInterval?: number;
    compareWith?: (o1: any, o2: any) => boolean;
    panelClass?: string;
}
interface FormlySelectFieldConfig extends FormlyFieldConfig<SelectProps> {
    type: 'select' | Type<FormlyFieldSelect>;
}
declare class FormlyFieldSelect extends FieldType<FieldTypeConfig<SelectProps>> {
    set select(select: any);
    defaultOptions: {
        props: {
            compareWith(o1: any, o2: any): boolean;
        };
    };
    private selectAllValue;
    getSelectAllState(options: any[]): "indeterminate" | "checked";
    toggleSelectAll(options: any[]): void;
    change($event: MatSelectChange): void;
    _getAriaLabelledby(): string;
    _getAriaLabel(): string;
    private getSelectAllValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldSelect, "formly-field-mat-select", never, {}, {}, never, never, false, never>;
}

declare class FormlyMatSelectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyMatSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyMatSelectModule, [typeof FormlyFieldSelect], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.MatSelectModule, typeof i5.MatPseudoCheckboxModule, typeof i6.FormlyMatFormFieldModule, typeof i7.FormlySelectModule, typeof i8.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyMatSelectModule>;
}

export { FormlyFieldSelect, FormlyMatSelectModule, withFormlyFieldSelect };
export type { FormlySelectFieldConfig };
