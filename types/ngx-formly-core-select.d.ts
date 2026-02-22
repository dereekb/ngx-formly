import * as i0 from '@angular/core';
import { PipeTransform, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { FormlyFieldProps, FormlyFieldConfig } from '@ngx-formly/core';

interface FormlySelectOption {
    label: string;
    disabled?: boolean;
    value?: any;
    group?: FormlySelectOption[];
}
interface FormlyFieldSelectProps extends FormlyFieldProps {
    groupProp?: string | ((option: any) => string);
    labelProp?: string | ((option: any) => string);
    valueProp?: string | ((option: any) => any);
    disabledProp?: string | ((option: any) => boolean);
}
declare class FormlySelectOptionsPipe implements PipeTransform, OnDestroy {
    private _subscription;
    private _options;
    transform(options: any, field?: FormlyFieldConfig): Observable<FormlySelectOption[]>;
    ngOnDestroy(): void;
    private transformOptions;
    private transformOption;
    private transformSelectProps;
    private dispose;
    private observableOf;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlySelectOptionsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FormlySelectOptionsPipe, "formlySelectOptions", true>;
}
declare class LegacyFormlySelectOptionsPipe extends FormlySelectOptionsPipe implements PipeTransform, OnDestroy {
    static ɵfac: i0.ɵɵFactoryDeclaration<LegacyFormlySelectOptionsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<LegacyFormlySelectOptionsPipe, "formlySelectOptions", false>;
}

declare class FormlySelectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlySelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlySelectModule, [typeof LegacyFormlySelectOptionsPipe], never, [typeof LegacyFormlySelectOptionsPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlySelectModule>;
}

export { FormlySelectModule, FormlySelectOptionsPipe, LegacyFormlySelectOptionsPipe };
export type { FormlyFieldSelectProps, FormlySelectOption };
