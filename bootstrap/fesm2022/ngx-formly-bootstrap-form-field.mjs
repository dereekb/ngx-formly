import * as i0 from '@angular/core';
import { Component, NgModule, ViewChild, Optional, Directive } from '@angular/core';
import * as i2 from '@ngx-formly/core';
import { FieldWrapper, FormlyModule, FieldType as FieldType$1 } from '@ngx-formly/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

class FormlyWrapperFormField extends FieldWrapper {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyWrapperFormField, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.5", type: FormlyWrapperFormField, isStandalone: false, selector: "formly-wrapper-form-field", usesInheritance: true, ngImport: i0, template: `
    <ng-template #labelTemplate>
      @if (props.label && props.hideLabel !== true) {
        <label [attr.for]="id" class="form-label">
          {{ props.label }}
          @if (props.required && props.hideRequiredMarker !== true) {
            <span aria-hidden="true">*</span>
          }
        </label>
      }
    </ng-template>
    
    <div [class.form-floating]="props.labelPosition === 'floating'" [class.has-error]="showError">
      @if (props.labelPosition !== 'floating') {
        <ng-container [ngTemplateOutlet]="labelTemplate"></ng-container>
      }
    
      <ng-template #fieldComponent></ng-template>
    
      @if (props.labelPosition === 'floating') {
        <ng-container [ngTemplateOutlet]="labelTemplate"></ng-container>
      }
    
      @if (showError) {
        <div class="invalid-feedback" [style.display]="'block'">
          <formly-validation-message
            id="{{ id }}-formly-validation-error"
            [field]="field"
            role="alert"
          ></formly-validation-message>
        </div>
      }
    
      @if (props.description) {
        <small class="form-text text-muted">{{ props.description }}</small>
      }
    </div>
    `, isInline: true, styles: [":host{display:block;margin-bottom:1rem}\n"], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.LegacyFormlyValidationMessage, selector: "formly-validation-message" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyWrapperFormField, decorators: [{
            type: Component,
            args: [{ standalone: false, selector: 'formly-wrapper-form-field', template: `
    <ng-template #labelTemplate>
      @if (props.label && props.hideLabel !== true) {
        <label [attr.for]="id" class="form-label">
          {{ props.label }}
          @if (props.required && props.hideRequiredMarker !== true) {
            <span aria-hidden="true">*</span>
          }
        </label>
      }
    </ng-template>
    
    <div [class.form-floating]="props.labelPosition === 'floating'" [class.has-error]="showError">
      @if (props.labelPosition !== 'floating') {
        <ng-container [ngTemplateOutlet]="labelTemplate"></ng-container>
      }
    
      <ng-template #fieldComponent></ng-template>
    
      @if (props.labelPosition === 'floating') {
        <ng-container [ngTemplateOutlet]="labelTemplate"></ng-container>
      }
    
      @if (showError) {
        <div class="invalid-feedback" [style.display]="'block'">
          <formly-validation-message
            id="{{ id }}-formly-validation-error"
            [field]="field"
            role="alert"
          ></formly-validation-message>
        </div>
      }
    
      @if (props.description) {
        <small class="form-text text-muted">{{ props.description }}</small>
      }
    </div>
    `, styles: [":host{display:block;margin-bottom:1rem}\n"] }]
        }] });

function withFormlyFormField() {
    return {
        wrappers: [
            {
                name: 'form-field',
                component: FormlyWrapperFormField,
            },
        ],
    };
}

class FormlyBootstrapFormFieldModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapFormFieldModule, declarations: [FormlyWrapperFormField], imports: [CommonModule, ReactiveFormsModule, i2.FormlyModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapFormFieldModule, imports: [CommonModule, ReactiveFormsModule, FormlyModule.forChild(withFormlyFormField())] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyWrapperFormField],
                    imports: [CommonModule, ReactiveFormsModule, FormlyModule.forChild(withFormlyFormField())],
                }]
        }] });

class FieldType extends FieldType$1 {
    set content(templateRef) {
        if (templateRef && this.hostContainerRef) {
            this.hostContainerRef.createEmbeddedView(templateRef);
        }
    }
    constructor(hostContainerRef) {
        super();
        this.hostContainerRef = hostContainerRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FieldType, deps: [{ token: i0.ViewContainerRef, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.1.5", type: FieldType, isStandalone: true, viewQueries: [{ propertyName: "content", first: true, predicate: ["fieldTypeTemplate"], descendants: true, static: true }], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FieldType, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: i0.ViewContainerRef, decorators: [{
                    type: Optional
                }] }], propDecorators: { content: [{
                type: ViewChild,
                args: ['fieldTypeTemplate', { static: true }]
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { FieldType, FormlyBootstrapFormFieldModule, withFormlyFormField };
//# sourceMappingURL=ngx-formly-bootstrap-form-field.mjs.map
