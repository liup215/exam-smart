define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_datepicker/material_datepicker.template', 'packages/angular_components/material_datepicker/material_datepicker', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/quiver/src/time/clock', 'packages/angular_components/material_datepicker/material_time_picker.template', 'packages/angular_components/material_datepicker/material_time_picker', 'packages/angular_components/model/date/date', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_datepicker/material_date_time_picker', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/material_datepicker/material_date_time_picker.scss.css.shim'], (function load__packages__angular_components__material_datepicker__material_date_time_picker_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_datepicker__material_datepicker$46template, packages__angular_components__material_datepicker__material_datepicker, packages__angular_compiler__v1__src__metadata__di_tokens, packages__quiver__src__time__clock, packages__angular_components__material_datepicker__material_time_picker$46template, packages__angular_components__material_datepicker__material_time_picker, packages__angular_components__model__date__date, packages__angular_components__interfaces__has_disabled, packages__angular__src__bootstrap__modules, packages__angular_components__material_datepicker__material_date_time_picker, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__material_input__material_input$46template, packages__angular_components__model__date__date$46template, packages__angular_components__material_datepicker__material_date_time_picker$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const material_datepicker$46template = packages__angular_components__material_datepicker__material_datepicker$46template.material_datepicker__material_datepicker$46template;
  const material_datepicker = packages__angular_components__material_datepicker__material_datepicker.material_datepicker__material_datepicker;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const material_time_picker$46template = packages__angular_components__material_datepicker__material_time_picker$46template.material_datepicker__material_time_picker$46template;
  const material_time_picker = packages__angular_components__material_datepicker__material_time_picker.material_datepicker__material_time_picker;
  const date = packages__angular_components__model__date__date.model__date__date;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_date_time_picker = packages__angular_components__material_datepicker__material_date_time_picker.material_datepicker__material_date_time_picker;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const material_date_time_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_date_time_picker$46scss$46css$46shim.material_datepicker__material_date_time_picker$46scss$46css$46shim;
  var material_date_time_picker$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var MaterialDatepickerComponentL = () => (MaterialDatepickerComponentL = dart.constFn(dart.legacy(material_datepicker.MaterialDatepickerComponent)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var VoidToMaterialDatepickerComponentL = () => (VoidToMaterialDatepickerComponentL = dart.constFn(dart.fnType(MaterialDatepickerComponentL(), [])))();
  var MaterialTimePickerComponentL = () => (MaterialTimePickerComponentL = dart.constFn(dart.legacy(material_time_picker.MaterialTimePickerComponent)))();
  var VoidToMaterialTimePickerComponentL = () => (VoidToMaterialTimePickerComponentL = dart.constFn(dart.fnType(MaterialTimePickerComponentL(), [])))();
  var DateL = () => (DateL = dart.constFn(dart.legacy(date.Date)))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialDateTimePickerComponentL = () => (MaterialDateTimePickerComponentL = dart.constFn(dart.legacy(material_date_time_picker.MaterialDateTimePickerComponent)))();
  var VoidToMaterialDateTimePickerComponentL = () => (VoidToMaterialDateTimePickerComponentL = dart.constFn(dart.fnType(MaterialDateTimePickerComponentL(), [])))();
  var ComponentFactoryOfMaterialDateTimePickerComponentL = () => (ComponentFactoryOfMaterialDateTimePickerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialDateTimePickerComponentL())))();
  var HostViewOfMaterialDateTimePickerComponentL = () => (HostViewOfMaterialDateTimePickerComponentL = dart.constFn(host_view.HostView$(MaterialDateTimePickerComponentL())))();
  var HostViewLOfMaterialDateTimePickerComponentL = () => (HostViewLOfMaterialDateTimePickerComponentL = dart.constFn(dart.legacy(HostViewOfMaterialDateTimePickerComponentL())))();
  var VoidToHostViewLOfMaterialDateTimePickerComponentL = () => (VoidToHostViewLOfMaterialDateTimePickerComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialDateTimePickerComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_date_time_picker.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C1() {
      return C1 = dart.fn(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.fn(material_date_time_picker$46template.viewFactory_MaterialDateTimePickerComponentHost0, VoidToHostViewLOfMaterialDateTimePickerComponentL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfMaterialDateTimePickerComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-date-time-picker"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _compView_0 = dart.privateName(material_date_time_picker$46template, "_compView_0");
  var _MaterialDatepickerComponent_0_5 = dart.privateName(material_date_time_picker$46template, "_MaterialDatepickerComponent_0_5");
  var _compView_1 = dart.privateName(material_date_time_picker$46template, "_compView_1");
  var _MaterialTimePickerComponent_1_5 = dart.privateName(material_date_time_picker$46template, "_MaterialTimePickerComponent_1_5");
  var _expr_0 = dart.privateName(material_date_time_picker$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_date_time_picker$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_date_time_picker$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_date_time_picker$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_date_time_picker$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_date_time_picker$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_date_time_picker$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_date_time_picker$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_date_time_picker$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_date_time_picker$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_date_time_picker$46template, "_expr_10");
  var _expr_11 = dart.privateName(material_date_time_picker$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_date_time_picker$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_date_time_picker$46template, "_expr_13");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C0;
  var _handleEvent_0 = dart.privateName(material_date_time_picker$46template, "_handleEvent_0");
  var _handleEvent_1 = dart.privateName(material_date_time_picker$46template, "_handleEvent_1");
  var C1;
  material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0 = class ViewMaterialDateTimePickerComponent0 extends component_view.ComponentView$(dart.legacy(material_date_time_picker.MaterialDateTimePickerComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_date_time_picker.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new material_datepicker$46template.ViewMaterialDatepickerComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_MaterialDatepickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDatepickerComponentL(), dart.wrapType(MaterialDatepickerComponentL()), dart.fn(() => new material_datepicker.MaterialDatepickerComponent.new(_el_0, null, ClockL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex))), VoidToMaterialDatepickerComponentL())) : new material_datepicker.MaterialDatepickerComponent.new(_el_0, null, ClockL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)));
      this[_compView_0].create(this[_MaterialDatepickerComponent_0_5]);
      this[_compView_1] = new material_time_picker$46template.ViewMaterialTimePickerComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      parentRenderNode[$append](_el_1);
      this.addShimC(_el_1);
      this[_MaterialTimePickerComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTimePickerComponentL(), dart.wrapType(MaterialTimePickerComponentL()), dart.fn(() => new material_time_picker.MaterialTimePickerComponent.new(ClockL().as(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex))), VoidToMaterialTimePickerComponentL())) : new material_time_picker.MaterialTimePickerComponent.new(ClockL().as(this.parentView.injectorGet(C0 || CT.C0, this.parentIndex)));
      this[_compView_1].create(this[_MaterialTimePickerComponent_1_5]);
      let subscription_0 = this[_MaterialDatepickerComponent_0_5].dateChange.listen(this.eventHandler1(DateL(), DateL(), dart.bind(this, _handleEvent_0)));
      let subscription_1 = this[_MaterialTimePickerComponent_1_5].timeChange.listen(this.eventHandler1(DateTimeL(), DateTimeL(), dart.bind(this, _handleEvent_1)));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MaterialDatepickerComponent_0_5];
      }
      if (token === dart.wrapType(HasDisabledL()) && 1 === nodeIndex) {
        return this[_MaterialTimePickerComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_0 = _ctx.outputDateFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "outputDateFormat", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialDatepickerComponent_0_5].outputFormat = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.maxDate;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "maxDate", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialDatepickerComponent_0_5].maxDate = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.minDate;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "minDate", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialDatepickerComponent_0_5].minDate = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.required;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "required", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialDatepickerComponent_0_5].required = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.date;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "date", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialDatepickerComponent_0_5].date = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "disabled", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialDatepickerComponent_0_5].disabled = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      let currVal_6 = _ctx.outputTimeFormat;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "outputTimeFormat", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialTimePickerComponent_1_5].outputFormat = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "disabled", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialTimePickerComponent_1_5].disabled = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.required;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "required", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialTimePickerComponent_1_5].required = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.time;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "time", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialTimePickerComponent_1_5].time = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.utc;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "utc", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialTimePickerComponent_1_5].utc = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.maxTime;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "maxTime", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialTimePickerComponent_1_5].maxTime = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.minTime;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "minTime", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialTimePickerComponent_1_5].minTime = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.increment;
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "increment", "package:angular_components/material_datepicker/material_date_time_picker.html"))) {
        this[_MaterialTimePickerComponent_1_5].increment = currVal_13;
        changed = true;
        this[_expr_13] = currVal_13;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_MaterialTimePickerComponent_1_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialDatepickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_MaterialTimePickerComponent_1_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.date = DateL().as($36event);
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.time = DateTimeL().as($36event);
    }
    static _debugClearComponentStyles() {
      material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles;
      if (styles == null) {
        material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_date_time_picker$46template.styles$MaterialDateTimePickerComponent, material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDatepickerComponent_0_5] = null;
    this[_compView_1] = null;
    this[_MaterialTimePickerComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-date-time-picker"));
    this.rootElement.tabIndex = -1;
  }).prototype = material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.prototype;
  dart.addTypeTests(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0);
  dart.addTypeCaches(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0);
  dart.setMethodSignature(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, () => ({
    __proto__: dart.getMethods(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, L0);
  dart.setFieldSignature(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, () => ({
    __proto__: dart.getFields(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_datepicker$46template.ViewMaterialDatepickerComponent0)),
    [_MaterialDatepickerComponent_0_5]: dart.fieldType(dart.legacy(material_datepicker.MaterialDatepickerComponent)),
    [_compView_1]: dart.fieldType(dart.legacy(material_time_picker$46template.ViewMaterialTimePickerComponent0)),
    [_MaterialTimePickerComponent_1_5]: dart.fieldType(dart.legacy(material_time_picker.MaterialTimePickerComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, {
    /*material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0 = class _ViewMaterialDateTimePickerComponentHost0 extends host_view.HostView$(dart.legacy(material_date_time_picker.MaterialDateTimePickerComponent)) {
    build() {
      this.componentView = new material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDateTimePickerComponentL(), dart.wrapType(MaterialDateTimePickerComponentL()), dart.fn(() => new material_date_time_picker.MaterialDateTimePickerComponent.new(ClockL().as(this.injectorGet(C0 || CT.C0, this.parentIndex))), VoidToMaterialDateTimePickerComponentL())) : new material_date_time_picker.MaterialDateTimePickerComponent.new(ClockL().as(this.injectorGet(C0 || CT.C0, this.parentIndex)));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
    }
  };
  (material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.new = function() {
    material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.prototype;
  dart.addTypeTests(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0);
  dart.addTypeCaches(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0);
  dart.setMethodSignature(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0, L0);
  var C2;
  material_date_time_picker$46template.createMaterialDateTimePickerComponentFactory = function createMaterialDateTimePickerComponentFactory() {
    return new (ComponentFactoryOfMaterialDateTimePickerComponentL()).new("material-date-time-picker", C2 || CT.C2);
  };
  material_date_time_picker$46template.viewFactory_MaterialDateTimePickerComponentHost0 = function viewFactory_MaterialDateTimePickerComponentHost0() {
    return new material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.new();
  };
  material_date_time_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_date_time_picker$46template._visited)) {
      return;
    }
    material_date_time_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialDateTimePickerComponentL()), material_date_time_picker$46template.createMaterialDateTimePickerComponentFactory());
    angular$46template.initReflector();
    meta$46template.initReflector();
    has_disabled$46template.initReflector();
    material_datepicker$46template.initReflector();
    material_time_picker$46template.initReflector();
    module$46template.initReflector();
    material_input$46template.initReflector();
    date$46template.initReflector();
  };
  dart.copyProperties(material_date_time_picker$46template, {
    get MaterialDateTimePickerComponentNgFactory() {
      return material_date_time_picker$46template._MaterialDateTimePickerComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  var C4;
  dart.defineLazy(material_date_time_picker$46template, {
    /*material_date_time_picker$46template.styles$MaterialDateTimePickerComponent*/get styles$MaterialDateTimePickerComponent() {
      return [material_date_time_picker$46scss$46css$46shim.styles];
    },
    /*material_date_time_picker$46template._MaterialDateTimePickerComponentNgFactory*/get _MaterialDateTimePickerComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*material_date_time_picker$46template.styles$MaterialDateTimePickerComponentHost*/get styles$MaterialDateTimePickerComponentHost() {
      return C4 || CT.C4;
    },
    /*material_date_time_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_time_picker.template", {
    "package:angular_components/material_datepicker/material_date_time_picker.template.dart": material_date_time_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_date_time_picker.template.dart"],"names":[],"mappings":"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","file":"material_date_time_picker.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_time_picker$46template: material_date_time_picker$46template
  };
}));

//# sourceMappingURL=material_date_time_picker.template.unsound.ddc.js.map
