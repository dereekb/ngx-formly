import * as i0 from '@angular/core';
import { ViewChild, ViewEncapsulation, Component, NgModule } from '@angular/core';
import * as i1$1 from '@ngx-formly/core';
import { FieldWrapper, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

class FormlyWrapperAddons extends FieldWrapper {
    set content(templateRef) {
        if (templateRef && this.hostContainerRef) {
            this.hostContainerRef.createEmbeddedView(templateRef);
        }
    }
    constructor(hostContainerRef) {
        super();
        this.hostContainerRef = hostContainerRef;
    }
    addonRightClick($event) {
        this.props.addonRight.onClick?.(this.field, $event);
    }
    addonLeftClick($event) {
        this.props.addonLeft.onClick?.(this.field, $event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyWrapperAddons, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.5", type: FormlyWrapperAddons, isStandalone: false, selector: "formly-wrapper-addons", viewQueries: [{ propertyName: "content", first: true, predicate: ["fieldTypeTemplate"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<ng-template #fieldTypeTemplate>\n  <div class=\"input-group\" [class.has-validation]=\"showError\">\n    @if (props.addonLeft) {\n      <div\n        class=\"input-group-text\"\n        [class.input-group-btn]=\"props.addonLeft.onClick\"\n        (click)=\"addonLeftClick($event)\"\n        >\n        @if (props.addonLeft.class) {\n          <i [ngClass]=\"props.addonLeft.class\"></i>\n        }\n        @if (props.addonLeft.text) {\n          <span>{{ props.addonLeft.text }}</span>\n        }\n      </div>\n    }\n    <ng-container #fieldComponent></ng-container>\n    @if (props.addonRight) {\n      <div\n        class=\"input-group-text\"\n        [class.input-group-btn]=\"props.addonRight.onClick\"\n        (click)=\"addonRightClick($event)\"\n        >\n        @if (props.addonRight.class) {\n          <i [ngClass]=\"props.addonRight.class\"></i>\n        }\n        @if (props.addonRight.text) {\n          <span>{{ props.addonRight.text }}</span>\n        }\n      </div>\n    }\n  </div>\n</ng-template>\n", styles: ["formly-wrapper-form-field .input-group-btn{cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyWrapperAddons, decorators: [{
            type: Component,
            args: [{ standalone: false, selector: 'formly-wrapper-addons', encapsulation: ViewEncapsulation.None, template: "<ng-template #fieldTypeTemplate>\n  <div class=\"input-group\" [class.has-validation]=\"showError\">\n    @if (props.addonLeft) {\n      <div\n        class=\"input-group-text\"\n        [class.input-group-btn]=\"props.addonLeft.onClick\"\n        (click)=\"addonLeftClick($event)\"\n        >\n        @if (props.addonLeft.class) {\n          <i [ngClass]=\"props.addonLeft.class\"></i>\n        }\n        @if (props.addonLeft.text) {\n          <span>{{ props.addonLeft.text }}</span>\n        }\n      </div>\n    }\n    <ng-container #fieldComponent></ng-container>\n    @if (props.addonRight) {\n      <div\n        class=\"input-group-text\"\n        [class.input-group-btn]=\"props.addonRight.onClick\"\n        (click)=\"addonRightClick($event)\"\n        >\n        @if (props.addonRight.class) {\n          <i [ngClass]=\"props.addonRight.class\"></i>\n        }\n        @if (props.addonRight.text) {\n          <span>{{ props.addonRight.text }}</span>\n        }\n      </div>\n    }\n  </div>\n</ng-template>\n", styles: ["formly-wrapper-form-field .input-group-btn{cursor:pointer}\n"] }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }], propDecorators: { content: [{
                type: ViewChild,
                args: ['fieldTypeTemplate', { static: true }]
            }] } });

function addonsExtension(field) {
    if (!field.props || (field.wrappers && field.wrappers.indexOf('addons') !== -1)) {
        return;
    }
    if (field.props.addonLeft || field.props.addonRight) {
        field.wrappers = [...(field.wrappers || []), 'addons'];
    }
}

function withFormlyWrapperAddons() {
    return {
        wrappers: [{ name: 'addons', component: FormlyWrapperAddons }],
        extensions: [{ name: 'addons', extension: { postPopulate: addonsExtension } }],
    };
}

class FormlyBootstrapAddonsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapAddonsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapAddonsModule, declarations: [FormlyWrapperAddons], imports: [CommonModule, ReactiveFormsModule, i1$1.FormlyModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapAddonsModule, imports: [CommonModule, ReactiveFormsModule, FormlyModule.forChild(withFormlyWrapperAddons())] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapAddonsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyWrapperAddons],
                    imports: [CommonModule, ReactiveFormsModule, FormlyModule.forChild(withFormlyWrapperAddons())],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyBootstrapAddonsModule, withFormlyWrapperAddons };
//# sourceMappingURL=ngx-formly-bootstrap-addons.mjs.map
