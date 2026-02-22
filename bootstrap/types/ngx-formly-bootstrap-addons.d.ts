import * as i4 from '@ngx-formly/core';
import { ConfigOption, FieldWrapper, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { FormlyFieldProps } from '@ngx-formly/bootstrap/form-field';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';

declare function withFormlyWrapperAddons(): ConfigOption;

interface AddonsProps extends FormlyFieldProps {
    addonRight?: {
        onClick?: (field: FormlyFieldConfig, event?: any) => void;
        class?: string;
        text?: string;
    };
    addonLeft?: {
        onClick?: (field: FormlyFieldConfig, event?: any) => void;
        class?: string;
        text?: string;
    };
}
declare class FormlyWrapperAddons extends FieldWrapper<FieldTypeConfig<AddonsProps>> {
    private hostContainerRef?;
    set content(templateRef: TemplateRef<any>);
    constructor(hostContainerRef?: ViewContainerRef);
    addonRightClick($event: any): void;
    addonLeftClick($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyWrapperAddons, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyWrapperAddons, "formly-wrapper-addons", never, {}, {}, never, never, false, never>;
}

declare class FormlyBootstrapAddonsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyBootstrapAddonsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyBootstrapAddonsModule, [typeof FormlyWrapperAddons], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.FormlyModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyBootstrapAddonsModule>;
}

export { FormlyBootstrapAddonsModule, withFormlyWrapperAddons };
