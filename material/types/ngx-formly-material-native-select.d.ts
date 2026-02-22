import * as i7 from '@ngx-formly/core';
import { ConfigOption, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { Type } from '@angular/core';
import * as i6 from '@ngx-formly/core/select';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';
import * as i5 from '@ngx-formly/material/form-field';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i4 from '@angular/material/input';

declare function withFormlyFieldNativeSelect(): ConfigOption;

interface NativeSelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
}
interface FormlyNativeSelectFieldConfig extends FormlyFieldConfig<NativeSelectProps> {
    type: 'native-select' | Type<FormlyFieldNativeSelect>;
}
declare class FormlyFieldNativeSelect extends FieldType<FieldTypeConfig<NativeSelectProps>> {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldNativeSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldNativeSelect, "formly-field-mat-native-select", never, {}, {}, never, never, false, never>;
}

declare class FormlyMatNativeSelectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyMatNativeSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyMatNativeSelectModule, [typeof FormlyFieldNativeSelect], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.MatInputModule, typeof i5.FormlyMatFormFieldModule, typeof i6.FormlySelectModule, typeof i7.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyMatNativeSelectModule>;
}

export { FormlyFieldNativeSelect, FormlyMatNativeSelectModule, withFormlyFieldNativeSelect };
export type { FormlyNativeSelectFieldConfig };
