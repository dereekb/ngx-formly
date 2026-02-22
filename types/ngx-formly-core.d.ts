import * as i0 from '@angular/core';
import { QueryList, ViewContainerRef, Type, Injector, ElementRef, ComponentRef, EmbeddedViewRef, InjectionToken, Provider, OnChanges, TemplateRef, DoCheck, OnDestroy, EventEmitter, NgZone, SimpleChanges, OnInit, AfterContentInit, AfterViewInit, Renderer2, ModuleWithProviders } from '@angular/core';
import * as _angular_forms from '@angular/forms';
import { NgControl, UntypedFormGroup, UntypedFormControl, AbstractControl, ValidatorFn, AsyncValidatorFn, FormGroupDirective, UntypedFormArray, ValidationErrors } from '@angular/forms';
import * as rxjs from 'rxjs';
import { Observable, Subject, Subscription } from 'rxjs';
import * as _ngx_formly_core from '@ngx-formly/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import * as i8 from '@angular/common';

interface FieldTypeConfig<T = FormlyFieldConfig['props']> extends FormlyFieldConfig<T> {
    formControl: UntypedFormControl;
    props: NonNullable<T>;
}
interface FieldGroupTypeConfig<T = FormlyFieldConfig['props']> extends FormlyFieldConfig<T> {
    formControl: UntypedFormGroup;
    props: NonNullable<T>;
}
declare abstract class FieldType<F extends FormlyFieldConfig = FormlyFieldConfig> {
    set _formlyControls(controls: QueryList<NgControl>);
    field: F;
    defaultOptions?: Partial<F>;
    get model(): any;
    get form(): UntypedFormGroup | _angular_forms.UntypedFormArray;
    get options(): _ngx_formly_core.FormlyFormOptions;
    get key(): string | number | (string | number)[];
    get formControl(): NonNullable<F["formControl"]>;
    get props(): NonNullable<F["props"]>;
    /** @deprecated Use `props` instead. */
    get to(): NonNullable<F["props"]>;
    get showError(): boolean;
    get id(): string;
    get formState(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldType<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FieldType<any>, never, never, { "field": { "alias": "field"; "required": false; }; }, {}, never, never, true, never>;
}

declare abstract class FieldWrapper<F extends FormlyFieldConfig = FormlyFieldConfig> extends FieldType<F> {
    set _formlyControls(_: QueryList<NgControl>);
    fieldComponent: ViewContainerRef;
    set _staticContent(content: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldWrapper<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FieldWrapper<any>, never, never, {}, {}, never, never, true, never>;
}

type FieldExpression<T = any> = string | ((field: FormlyFieldConfig) => T) | Observable<T>;
type FieldExpressions = {
    [property: string]: FieldExpression;
} & {
    className?: FieldExpression<string>;
    hide?: FieldExpression<boolean>;
    'props.disabled'?: FieldExpression<boolean>;
    'props.required'?: FieldExpression<boolean>;
};
interface FormlyFieldConfig<Props = FormlyFieldProps & {
    [additionalProperties: string]: any;
}> {
    /**
     * The key that relates to the model. This will link the field value to the model
     */
    key?: string | number | (string | number)[];
    /**
     * This should be a formly-field type added either by you or a plugin. More information over at Creating Formly Fields.
     */
    type?: string | Type<FieldType>;
    /**
     * Use `defaultValue` to initialize it the model. If this is provided and the value of the model at compile-time is undefined, then the value of the model will be assigned to `defaultValue`.
     */
    defaultValue?: any;
    /**
     * This allows you to specify the `id` of your field. Note, the `id` is generated if not set.
     */
    id?: string;
    /**
     * If you wish, you can specify a specific `name` for your field. This is useful if you're posting the form to a server using techniques of yester-year.
     */
    name?: string;
    /**
     * This is reserved for the templates. Any template-specific options go in here. Look at your specific template implementation to know the options required for this.
     */
    props?: Props;
    /** @deprecated Use `props` instead. */
    templateOptions?: FormlyTemplateOptions;
    /**
     * An object with a few useful properties
     * - `validation.messages`: A map of message names that will be displayed when the field has errors.
     * - `validation.show`: A boolean you as the developer can set to force displaying errors whatever the state of field. This is useful when you're trying to call the user's attention to some fields for some reason.
     */
    validation?: {
        messages?: {
            [messageProperties: string]: ValidationMessageOption['message'];
        } & {
            /** @deprecated use `minLength` */
            minlength?: ValidationMessageOption['message'];
            /** @deprecated use `maxLength` */
            maxlength?: ValidationMessageOption['message'];
        };
        show?: boolean;
        [additionalProperties: string]: any;
    };
    /**
     * Used to set validation rules for a particular field.
     * Should be an object of key - value pairs. The value can either be an expression to evaluate or a function to run.
     * Each should return a boolean value, returning true when the field is valid. See Validation for more information.
     */
    validators?: FormlyValidation<ValidatorFn, boolean>;
    /**
     * Use this one for anything that needs to validate asynchronously.
     * Pretty much exactly the same as the validators api, except it must be a function that returns a promise.
     */
    asyncValidators?: FormlyValidation<AsyncValidatorFn, Promise<boolean> | Observable<boolean>>;
    /**
     * Can be set instead of `type` to render custom html content.
     */
    template?: string;
    /**
     *  It is expected to be the name of the wrappers.
     *  The formly field template will be wrapped by the first wrapper, then the second, then the third, etc.
     *  You can also specify these as part of a type (which is the recommended approach).
     */
    wrappers?: (string | Type<FieldWrapper>)[];
    /**
     * Whether to hide the field. Defaults to false. If you wish this to be conditional use `expressions: { hide: ... }`
     */
    hide?: boolean;
    /**
     * Whether to reset the value on hide or not. Defaults to `true`.
     */
    resetOnHide?: boolean;
    /**
     * Conditionally hiding Field based on values from other Fields
     * @deprecated use `expressions: { hide: ... }`
     */
    hideExpression?: boolean | string | ((model: any, formState: any, field?: FormlyFieldConfig) => boolean);
    /**
     * An object where the key is a property to be set on the main field config and the value is an expression used to assign that property.
     * @deprecated use `expressions`
     */
    expressionProperties?: {
        [property: string]: string | ((model: any, formState: any, field?: FormlyFieldConfig) => any) | Observable<any>;
    };
    /**
     * An object where the key is a property to be set on the main field config and the value is an expression used to assign that property.
     */
    expressions?: FieldExpressions;
    /**
     * You can specify your own class that will be applied to the `formly-field` component.
     */
    className?: string;
    /**
     * Specify your own class that will be applied to the `formly-group` component.
     */
    fieldGroupClassName?: string;
    /**
     * A field group is a way to group fields together, making advanced layout very simple.
     * It can also be used to group fields that are associated with the same model (useful if it's different than the model for the rest of the fields).
     */
    fieldGroup?: FormlyFieldConfig[];
    fieldArray?: FormlyFieldConfig | ((field: FormlyFieldConfig) => FormlyFieldConfig);
    /**
     * Whether to focus or blur the element field. Defaults to false. If you wish this to be conditional use `expressions`
     */
    focus?: boolean;
    /**
     * An object with a few useful properties to control the model changes
     * - `debounce`: integer value which contains the debounce model update value in milliseconds. A value of 0 triggers an immediate update.
     * - `updateOn`: string event value that instructs when the control should be updated
     */
    modelOptions?: {
        debounce?: {
            default: number;
        };
        updateOn?: 'change' | 'blur' | 'submit';
    };
    hooks?: FormlyHookConfig;
    /**
     * Array of functions to execute, as a pipeline, whenever the model updates, usually via user input.
     */
    parsers?: ((value: any) => any)[];
    /**
     * Returns child field by key name
     */
    get?: (key: FormlyFieldConfig['key']) => FormlyFieldConfig;
    /**
     * The model that stores all the data, where the model[key] is the value of the field
     */
    readonly model?: any;
    /**
     * The parent field.
     */
    readonly parent?: FormlyFieldConfig;
    /**
     * The form options.
     */
    readonly options?: FormlyFormOptions;
    /**
     * The parent form.
     */
    readonly form?: UntypedFormGroup | UntypedFormArray;
    /**
     * This is the [FormControl](https://angular.io/api/forms/FormControl) for the field.
     * It provides you more control like running validators, calculating status, and resetting state.
     */
    readonly formControl?: AbstractControl;
    /** @deprecated */
    optionsTypes?: string[];
}
type FormlyAttributeEvent = (field: FormlyFieldConfig, event?: any) => void;
/**  @deprecated */
interface FormlyTemplateOptions extends FormlyFieldProps {
    [additionalProperties: string]: any;
}
interface FormlyFieldProps {
    type?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    options?: any[] | Observable<any[]>;
    rows?: number;
    cols?: number;
    description?: string;
    hidden?: boolean;
    max?: number;
    min?: number;
    minLength?: number;
    /** @deprecated use `minLength` */
    minlength?: number;
    maxLength?: number;
    /** @deprecated use `maxLength` */
    maxlength?: number;
    pattern?: string | RegExp;
    required?: boolean;
    tabindex?: number;
    readonly?: boolean;
    attributes?: {
        [key: string]: string | number;
    };
    step?: number;
    focus?: FormlyAttributeEvent;
    blur?: FormlyAttributeEvent;
    keyup?: FormlyAttributeEvent;
    keydown?: FormlyAttributeEvent;
    click?: FormlyAttributeEvent;
    change?: FormlyAttributeEvent;
    keypress?: FormlyAttributeEvent;
    wheel?: FormlyAttributeEvent;
}
type FormlyHookFn = (field: FormlyFieldConfig) => void;
interface FormlyHookConfig {
    onInit?: FormlyHookFn | ((field: FormlyFieldConfig) => Observable<any>);
    onChanges?: FormlyHookFn;
    afterContentInit?: FormlyHookFn;
    afterViewInit?: FormlyHookFn;
    onDestroy?: FormlyHookFn;
}
interface FormlyFormOptions {
    updateInitialValue?: (model?: any) => void;
    resetModel?: (model?: any) => void;
    formState?: any;
    fieldChanges?: Subject<FormlyValueChangeEvent>;
    showError?: (field: FieldType) => boolean;
    build?: (field?: FormlyFieldConfig) => FormlyFieldConfig;
    checkExpressions?: (field: FormlyFieldConfig) => void;
    detectChanges?: (field: FormlyFieldConfig) => void;
    parentForm?: FormGroupDirective | null;
}
interface FormlyValueChangeEvent {
    field: FormlyFieldConfig;
    type: string;
    value: any;
    [meta: string]: any;
}
interface FormlyValidation<T, R> {
    validation?: (string | T)[] | any;
    [key: string]: FormlyValidatorFn<R> | FormlyValidatorExpressionFn<R> | any;
}
type FormlyValidatorFn<T> = (control: AbstractControl, field: FormlyFieldConfig) => T;
interface FormlyValidatorExpressionFn<T> {
    expression: FormlyValidatorFn<T>;
    message: string | ((error: any, field: FormlyFieldConfig) => string | Observable<string>);
}

interface FormlyExtension<F extends FormlyFieldConfig = FormlyFieldConfig> {
    priority?: number;
    prePopulate?(field: F): void;
    onPopulate?(field: F): void;
    postPopulate?(field: F): void;
}
interface TypeOption {
    name: string;
    component?: Type<FieldType>;
    wrappers?: string[];
    extends?: string;
    defaultOptions?: FormlyFieldConfig;
}
interface WrapperOption {
    name: string;
    component: Type<FieldWrapper>;
    types?: string[];
}
type FieldValidatorFn = (c: AbstractControl, field: FormlyFieldConfig, options?: {
    [id: string]: any;
}) => ValidationErrors | null;
interface ValidatorOption {
    name: string;
    validation: FieldValidatorFn;
    options?: {
        [id: string]: any;
    };
}
interface ExtensionOption {
    name: string;
    extension: FormlyExtension;
    priority?: number;
}
interface ValidationMessageOption {
    name: string;
    message: string | ((error: any, field: FormlyFieldConfig) => string | Observable<string>);
}
interface PresetOption {
    name: string;
    config: FormlyFieldConfig | FormlyFieldConfigPresetProvider;
}
interface FormlyFieldConfigPresetProvider {
    getConfiguration: () => FormlyFieldConfig;
}
interface ConfigOption {
    types?: TypeOption[];
    wrappers?: WrapperOption[];
    validators?: ValidatorOption[];
    extensions?: ExtensionOption[];
    validationMessages?: ValidationMessageOption[];
    extras?: {
        immutable?: boolean;
        showError?: (field: FieldType) => boolean;
        /**
         * Defines the option which formly rely on to check field expression properties.
         * - `modelChange`: perform a check when the value of the form control changes.
         * - `changeDetectionCheck`: triggers an immediate check when `ngDoCheck` is called.
         *
         * Defaults to `modelChange`.
         */
        checkExpressionOn?: 'modelChange' | 'changeDetectionCheck';
        /**
         * Whether to lazily render field components or not when marked as hidden.
         * - `true`: lazily render field components.
         * - `false`: render field components and use CSS to control their visibility.
         *
         * Defaults to `true`.
         */
        lazyRender?: boolean;
        /**
         * When `true`, reset the value of a hidden field.
         *
         * Defaults to `true`.
         */
        resetFieldOnHide?: boolean;
        /**
         * Whether to render fields inside <formly-field> component or not.
         *
         * Defaults to `true`.
         */
        renderFormlyFieldElement?: boolean;
    };
    presets?: PresetOption[];
}

interface FormlyFieldConfigCache extends FormlyFieldConfig {
    form?: UntypedFormGroup | UntypedFormArray;
    model?: any;
    formControl?: AbstractControl & {
        _fields?: FormlyFieldConfigCache[];
        _childrenErrors?: {
            [id: string]: () => void;
        };
    };
    parent?: FormlyFieldConfigCache;
    options?: FormlyFormOptionsCache;
    shareFormControl?: boolean;
    index?: number;
    _localFields?: FormlyFieldConfigCache[];
    _elementRefs?: ElementRef[];
    _expressions?: {
        [property: string]: {
            callback?: (ingoreCache: boolean) => boolean;
            paths?: string[];
            subscription?: Subscription | null;
            value$?: Observable<any>;
        };
    };
    _hide?: boolean;
    _validators?: ValidatorFn[];
    _asyncValidators?: AsyncValidatorFn[];
    _componentRefs?: (ComponentRef<FieldType> | EmbeddedViewRef<FieldType>)[];
    _proxyInstance?: FormlyExtension;
    _keyPath?: {
        key: FormlyFieldConfig['key'];
        path: string[];
    };
}
interface FormlyFormOptionsCache extends FormlyFormOptions {
    checkExpressions?: (field: FormlyFieldConfig, ingoreCache?: boolean) => void;
    _viewContainerRef?: ViewContainerRef;
    _injector?: Injector;
    _hiddenFieldsForCheck?: {
        field: FormlyFieldConfigCache;
        default?: boolean;
    }[];
    _initialModel?: any;
    _detectChanges?: (field: FormlyFieldConfig) => void;
}

/**
 * Maintains list of formly config options. This can be used to register new field type.
 */
declare class FormlyConfig {
    types: {
        [name: string]: TypeOption;
    };
    validators: {
        [name: string]: ValidatorOption;
    };
    wrappers: {
        [name: string]: WrapperOption;
    };
    messages: {
        [name: string]: ValidationMessageOption['message'];
    };
    extras: NonNullable<ConfigOption['extras']>;
    extensions: {
        [name: string]: FormlyExtension;
    };
    presets: {
        [name: string]: FormlyFieldConfig | FormlyFieldConfigPresetProvider;
    };
    private extensionsByPriority;
    private componentRefs;
    addConfig(config: ConfigOption | ConfigOption[]): void;
    /**
     * Allows you to specify a custom type which you can use in your field configuration.
     * You can pass an object of options, or an array of objects of options.
     */
    setType(options: TypeOption | TypeOption[]): void;
    getType(name: FormlyFieldConfig['type'], throwIfNotFound?: boolean): TypeOption;
    /** @ignore */
    getMergedField(field?: FormlyFieldConfig): any;
    /** @ignore @internal */
    resolveFieldTypeRef(field?: FormlyFieldConfigCache): ComponentRef<FieldType>;
    /** @ignore @internal */
    clearRefs(): void;
    setWrapper(options: WrapperOption): void;
    getWrapper(name: string | Type<FieldWrapper>): WrapperOption;
    /** @ignore */
    setTypeWrapper(type: string, name: string): void;
    setValidator(options: ValidatorOption): void;
    getValidator(name: string): ValidatorOption;
    addValidatorMessage(name: string, message: ValidationMessageOption['message']): void;
    getValidatorMessage(name: string): string | ((error: any, field: FormlyFieldConfig) => string | rxjs.Observable<string>);
    private setSortedExtensions;
    private mergeExtendedType;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FormlyConfig>;
}

/**
 * An InjectionToken for registering additional formly config options (types, wrappers ...).
 */
declare const FORMLY_CONFIG: InjectionToken<ConfigOption[]>;
declare function withFormlyFieldExpression(): ConfigOption;
declare const provideFormlyCore: (configs?: ConfigOption | ConfigOption[]) => Provider;
declare const provideFormlyConfig: (configs?: ConfigOption | ConfigOption[]) => Provider;

declare class FormlyFormBuilder {
    private config;
    private injector;
    private viewContainerRef;
    private parentForm;
    constructor(config: FormlyConfig, injector: Injector, viewContainerRef: ViewContainerRef, parentForm: FormGroupDirective, configs?: ConfigOption[]);
    buildForm(form: UntypedFormGroup | UntypedFormArray, fieldGroup: FormlyFieldConfig[], model: any, options: FormlyFormOptions): void;
    build(field: FormlyFieldConfig): void;
    private _build;
    private _setOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFormBuilder, [null, null, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FormlyFormBuilder>;
}

declare class FormlyTemplate implements OnChanges {
    ref: TemplateRef<any>;
    name: string;
    constructor(ref: TemplateRef<any>);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyTemplate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormlyTemplate, "[formlyTemplate]", never, { "name": { "alias": "formlyTemplate"; "required": false; }; }, {}, never, never, true, never>;
}
declare class LegacyFormlyTemplate extends FormlyTemplate {
    static ɵfac: i0.ɵɵFactoryDeclaration<LegacyFormlyTemplate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LegacyFormlyTemplate, "[formlyTemplate]", never, {}, {}, never, never, false, never>;
}
declare class FormlyFieldTemplates {
    templates: QueryList<FormlyTemplate>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldTemplates, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FormlyFieldTemplates>;
}

/**
 * The `<form-form>` component is the main container of the form,
 * which takes care of managing the form state
 * and delegates the rendering of each field to `<formly-field>` component.
 */
declare class FormlyForm implements DoCheck, OnChanges, OnDestroy {
    private builder;
    private config;
    private ngZone;
    protected fieldTemplates: FormlyFieldTemplates;
    /** The form instance which allow to track model value and validation status. */
    set form(form: UntypedFormGroup | UntypedFormArray);
    get form(): UntypedFormGroup | UntypedFormArray;
    /** The model to be represented by the form. */
    set model(model: any);
    get model(): any;
    /** The field configurations for building the form. */
    set fields(fieldGroup: FormlyFieldConfig[]);
    get fields(): FormlyFieldConfig[];
    /** Options for the form. */
    set options(options: FormlyFormOptions);
    get options(): FormlyFormOptions;
    /** Event that is emitted when the model value is changed */
    modelChange: EventEmitter<any>;
    set templates(templates: QueryList<FormlyTemplate>);
    field: FormlyFieldConfigCache;
    private _modelChangeValue;
    private valueChangesUnsubscribe;
    constructor(builder: FormlyFormBuilder, config: FormlyConfig, ngZone: NgZone, fieldTemplates: FormlyFieldTemplates);
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private checkExpressionChange;
    private valueChanges;
    private setField;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyForm, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyForm, "formly-form", never, { "form": { "alias": "form"; "required": false; }; "model": { "alias": "model"; "required": false; }; "fields": { "alias": "fields"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "modelChange": "modelChange"; }, ["templates"], never, true, never>;
}
declare class LegacyFormlyForm extends FormlyForm {
    set templates(templates: QueryList<FormlyTemplate>);
    static ɵfac: i0.ɵɵFactoryDeclaration<LegacyFormlyForm, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LegacyFormlyForm, "formly-form", never, {}, {}, ["templates"], never, false, never>;
}

/**
 * The `<formly-field>` component is used to render the UI widget (layout + type) of a given `field`.
 */
declare class FormlyField implements DoCheck, OnInit, OnChanges, AfterContentInit, AfterViewInit, OnDestroy {
    private config;
    private renderer;
    private _elementRef;
    private hostContainerRef;
    private form;
    /** The field config. */
    field: FormlyFieldConfig;
    viewContainerRef: ViewContainerRef;
    private hostObservers;
    private componentRefs;
    private hooksObservers;
    private detectFieldBuild;
    private get containerRef();
    private get elementRef();
    valueChangesUnsubscribe: () => void;
    constructor(config: FormlyConfig, renderer: Renderer2, _elementRef: ElementRef, hostContainerRef: ViewContainerRef, form: FormlyFieldTemplates);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private renderField;
    private triggerHook;
    private attachComponentRef;
    private render;
    private resetRefs;
    private fieldChanges;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyField, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyField, "formly-field", never, { "field": { "alias": "field"; "required": false; }; }, {}, never, never, true, never>;
}
declare class LegacyFormlyField extends FormlyField {
    static ɵfac: i0.ɵɵFactoryDeclaration<LegacyFormlyField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LegacyFormlyField, "formly-field", never, {}, {}, never, never, false, never>;
}

/**
 * Allow to link the `field` HTML attributes (`id`, `name` ...) and Event attributes (`focus`, `blur` ...) to an element in the DOM.
 */
declare class FormlyAttributes implements OnChanges, DoCheck, OnDestroy {
    private renderer;
    private elementRef;
    /** The field config. */
    field: FormlyFieldConfig;
    id: string;
    private document;
    private uiAttributesCache;
    private uiAttributes;
    private focusObserver;
    /**
     * HostBinding doesn't register listeners conditionally which may produce some perf issues.
     *
     * Formly issue: https://github.com/ngx-formly/ngx-formly/issues/1991
     */
    private uiEvents;
    private get props();
    private get fieldAttrElements();
    constructor(renderer: Renderer2, elementRef: ElementRef, _document: any);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * We need to re-evaluate all the attributes on every change detection cycle, because
     * by using a HostBinding we run into certain edge cases. This means that whatever logic
     * is in here has to be super lean or we risk seriously damaging or destroying the performance.
     *
     * Formly issue: https://github.com/ngx-formly/ngx-formly/issues/1317
     * Material issue: https://github.com/angular/components/issues/14024
     */
    ngDoCheck(): void;
    ngOnDestroy(): void;
    toggleFocus(value: boolean): void;
    onFocus($event: any): void;
    onBlur($event: any): void;
    onHostChange($event: any): void;
    onChange($event: any): void;
    private attachElementRef;
    private detachElementRef;
    private setAttribute;
    private removeAttribute;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyAttributes, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormlyAttributes, "[formlyAttributes]", never, { "field": { "alias": "formlyAttributes"; "required": false; }; "id": { "alias": "id"; "required": false; }; }, {}, never, never, true, never>;
}
declare class LegacyFormlyAttributes extends FormlyAttributes {
    static ɵfac: i0.ɵɵFactoryDeclaration<LegacyFormlyAttributes, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LegacyFormlyAttributes, "[formlyAttributes]", never, {}, {}, never, never, false, never>;
}

/** @ignore */
declare class FormlyGroup extends FieldType<FieldGroupTypeConfig> {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyGroup, "formly-group", never, {}, {}, never, ["*"], false, never>;
}

/**
 * The `<formly-validation-message>` component renders the error message of a given `field`.
 */
declare class FormlyValidationMessage implements OnChanges {
    private config;
    /** The field config. */
    field: FormlyFieldConfig;
    errorMessage$: Observable<string>;
    constructor(config: FormlyConfig);
    ngOnChanges(): void;
    get errorMessage(): string | Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyValidationMessage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyValidationMessage, "formly-validation-message", never, { "field": { "alias": "field"; "required": false; }; }, {}, never, never, true, never>;
}
declare class LegacyFormlyValidationMessage extends FormlyValidationMessage {
    static ɵfac: i0.ɵɵFactoryDeclaration<LegacyFormlyValidationMessage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LegacyFormlyValidationMessage, "formly-validation-message", never, {}, {}, never, never, false, never>;
}

interface FieldArrayTypeConfig<T = FormlyFieldConfig['props']> extends FormlyFieldConfig<T> {
    formControl: UntypedFormArray;
    props: NonNullable<T>;
}
declare abstract class FieldArrayType<F extends FormlyFieldConfig = FieldArrayTypeConfig> extends FieldType<F> implements FormlyExtension<F> {
    onPopulate(field: F): void;
    add(i?: number, initialModel?: any, { markAsDirty }?: {
        markAsDirty: boolean;
    }): void;
    remove(i: number, { markAsDirty }?: {
        markAsDirty: boolean;
    }): void;
    private _build;
    private updateArrayElementKey;
    private markFieldForCheck;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldArrayType<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FieldArrayType<any>, never, never, {}, {}, never, never, true, never>;
}

/** @ignore */
declare class FormlyTemplateType extends FieldType {
    private sanitizer;
    get template(): SafeHtml;
    private innerHtml;
    constructor(sanitizer: DomSanitizer);
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyTemplateType, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyTemplateType, "formly-template", never, {}, {}, never, never, false, never>;
}

declare class FormlyModule {
    static forRoot(config?: ConfigOption): ModuleWithProviders<FormlyModule>;
    static forChild(config?: ConfigOption): ModuleWithProviders<FormlyModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormlyModule, [typeof LegacyFormlyTemplate, typeof LegacyFormlyForm, typeof LegacyFormlyField, typeof LegacyFormlyAttributes, typeof LegacyFormlyValidationMessage, typeof FormlyGroup, typeof FormlyTemplateType], [typeof i8.CommonModule], [typeof LegacyFormlyTemplate, typeof LegacyFormlyForm, typeof LegacyFormlyField, typeof LegacyFormlyAttributes, typeof LegacyFormlyValidationMessage, typeof FormlyGroup]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormlyModule>;
}

declare function hasKey(field: FormlyFieldConfig): boolean;
declare function getFieldValue(field: FormlyFieldConfig): any;
declare function reverseDeepMerge(dest: any, ...args: any[]): any;
declare function clone(value: any): any;
declare function defineHiddenProp(field: any, prop: string, defaultValue: any): void;
type IObserveFn<T> = (change: {
    currentValue: T;
    previousValue?: T;
    firstChange: boolean;
}) => void;
interface IObserver<T> {
    setValue: (value: T, emitEvent?: boolean) => void;
    unsubscribe: () => void;
}
interface IObserveTarget<T> {
    [prop: string]: any;
    _observers?: {
        [prop: string]: {
            value: T;
            onChange: IObserveFn<T>[];
        };
    };
}
declare function observe<T = any>(o: IObserveTarget<T>, paths: string[], setFn?: IObserveFn<T>): IObserver<T>;

export { FORMLY_CONFIG, FieldArrayType, FieldType, FieldWrapper, FormlyAttributes, FormlyConfig, FormlyField, FormlyForm, FormlyFormBuilder, FormlyModule, FormlyTemplate, FormlyValidationMessage, LegacyFormlyAttributes, LegacyFormlyField, LegacyFormlyForm, LegacyFormlyValidationMessage, provideFormlyConfig, provideFormlyCore, withFormlyFieldExpression, FormlyGroup as ɵFormlyGroup, LegacyFormlyTemplate as ɵFormlyTemplate, clone as ɵclone, defineHiddenProp as ɵdefineHiddenProp, getFieldValue as ɵgetFieldValue, hasKey as ɵhasKey, observe as ɵobserve, reverseDeepMerge as ɵreverseDeepMerge };
export type { ConfigOption, FieldArrayTypeConfig, FieldGroupTypeConfig, FieldTypeConfig, FormlyExtension, FormlyFieldConfig, FormlyFieldConfigPresetProvider, FormlyFieldProps, FormlyFormOptions, FormlyTemplateOptions };
