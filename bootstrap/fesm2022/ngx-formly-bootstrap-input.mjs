import * as i0 from '@angular/core';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FieldType, FormlyBootstrapFormFieldModule } from '@ngx-formly/bootstrap/form-field';
import * as i1 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';

class FormlyFieldInput extends FieldType {
    get type() {
        return this.props.type || 'text';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyFieldInput, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.5", type: FormlyFieldInput, isStandalone: false, selector: "formly-field-input", usesInheritance: true, ngImport: i0, template: `
    <ng-template #fieldTypeTemplate>
      @if (type !== 'number') {
        <input
          [type]="type"
          [formControl]="formControl"
          class="form-control"
          [formlyAttributes]="field"
          [class.is-invalid]="showError"
          [attr.aria-describedby]="id + '-formly-validation-error'"
          [attr.aria-invalid]="showError"
          />
      } @else {
        <input
          type="number"
          [formControl]="formControl"
          class="form-control"
          [formlyAttributes]="field"
          [class.is-invalid]="showError"
          [attr.aria-describedby]="id + '-formly-validation-error'"
          [attr.aria-invalid]="showError"
          />
      }
    </ng-template>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.LegacyFormlyAttributes, selector: "[formlyAttributes]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyFieldInput, decorators: [{
            type: Component,
            args: [{
                    standalone: false,
                    selector: 'formly-field-input',
                    template: `
    <ng-template #fieldTypeTemplate>
      @if (type !== 'number') {
        <input
          [type]="type"
          [formControl]="formControl"
          class="form-control"
          [formlyAttributes]="field"
          [class.is-invalid]="showError"
          [attr.aria-describedby]="id + '-formly-validation-error'"
          [attr.aria-invalid]="showError"
          />
      } @else {
        <input
          type="number"
          [formControl]="formControl"
          class="form-control"
          [formlyAttributes]="field"
          [class.is-invalid]="showError"
          [attr.aria-describedby]="id + '-formly-validation-error'"
          [attr.aria-invalid]="showError"
          />
      }
    </ng-template>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

function withFormlyFieldInput() {
    return {
        types: [
            {
                name: 'input',
                component: FormlyFieldInput,
                wrappers: ['form-field'],
            },
            { name: 'string', extends: 'input' },
            {
                name: 'number',
                extends: 'input',
                defaultOptions: {
                    props: {
                        type: 'number',
                    },
                },
            },
            {
                name: 'integer',
                extends: 'input',
                defaultOptions: {
                    props: {
                        type: 'number',
                    },
                },
            },
        ],
    };
}

class FormlyBootstrapInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapInputModule, declarations: [FormlyFieldInput], imports: [CommonModule,
            ReactiveFormsModule,
            FormlyBootstrapFormFieldModule, i2.FormlyModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapInputModule, imports: [CommonModule,
            ReactiveFormsModule,
            FormlyBootstrapFormFieldModule,
            FormlyModule.forChild(withFormlyFieldInput())] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.5", ngImport: i0, type: FormlyBootstrapInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldInput],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormlyBootstrapFormFieldModule,
                        FormlyModule.forChild(withFormlyFieldInput()),
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyBootstrapInputModule, FormlyFieldInput, withFormlyFieldInput };
//# sourceMappingURL=ngx-formly-bootstrap-input.mjs.map
