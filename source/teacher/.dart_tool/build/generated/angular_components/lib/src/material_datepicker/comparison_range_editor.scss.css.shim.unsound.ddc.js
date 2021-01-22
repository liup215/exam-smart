define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_toggle/material_toggle.template', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_datepicker/comparison_option', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/comparison_option.template', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/utils/angular/scroll_host/angular_2.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/src/material_datepicker/sequential.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__src__material_datepicker__comparison_range_editor_scss_css_shim(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_toggle__material_toggle$46template, packages__angular__src__runtime__interpolate, packages__angular_components__material_toggle__material_toggle, packages__angular_components__interfaces__has_disabled, packages__angular_components__src__material_datepicker__comparison_range_editor, packages__angular__src__runtime__text_binding, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__material_select__material_select_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__activation_handler, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__has_renderer, packages__angular_components__material_datepicker__comparison_option, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface, packages__angular__angular$46template, packages__angular_components__material_datepicker__comparison_option$46template, packages__angular_components__material_datepicker__date_range_input$46template, packages__angular_components__material_datepicker__range$46template, packages__angular_components__material_list__material_list$46template, packages__angular_components__material_list__material_list_item$46template, packages__angular_components__material_select__material_dropdown_select$46template, packages__angular_components__model__date__date$46template, packages__angular_components__utils__angular__scroll_host__angular_2$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__comparison$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__src__material_datepicker__sequential$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_toggle$46template = packages__angular_components__material_toggle__material_toggle$46template.material_toggle__material_toggle$46template;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_toggle = packages__angular_components__material_toggle__material_toggle.material_toggle__material_toggle;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const comparison_range_editor = packages__angular_components__src__material_datepicker__comparison_range_editor.src__material_datepicker__comparison_range_editor;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const comparison_option = packages__angular_components__material_datepicker__comparison_option.material_datepicker__comparison_option;
  const scroll_host_interface = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const comparison_option$46template = packages__angular_components__material_datepicker__comparison_option$46template.material_datepicker__comparison_option$46template;
  const date_range_input$46template = packages__angular_components__material_datepicker__date_range_input$46template.material_datepicker__date_range_input$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  const material_list$46template = packages__angular_components__material_list__material_list$46template.material_list__material_list$46template;
  const material_list_item$46template = packages__angular_components__material_list__material_list_item$46template.material_list__material_list_item$46template;
  const material_dropdown_select$46template = packages__angular_components__material_select__material_dropdown_select$46template.material_select__material_dropdown_select$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const angular_2$46template = packages__angular_components__utils__angular__scroll_host__angular_2$46template.utils__angular__scroll_host__angular_2$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const comparison$46template = packages__angular_components__material_datepicker__comparison$46template.material_datepicker__comparison$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const sequential$46template = packages__angular_components__src__material_datepicker__sequential$46template.src__material_datepicker__sequential$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var comparison_range_editor$46template = Object.create(dart.library);
  var comparison_range_editor$46scss$46css$46shim = Object.create(dart.library);
  var date_range_editor_model$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialSelectItemComponentL = () => (MaterialSelectItemComponentL = dart.constFn(dart.legacy(material_select_item.MaterialSelectItemComponent)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var VoidToMaterialSelectItemComponentL = () => (VoidToMaterialSelectItemComponentL = dart.constFn(dart.fnType(MaterialSelectItemComponentL(), [])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var ComparisonOptionL = () => (ComparisonOptionL = dart.constFn(dart.legacy(comparison_option.ComparisonOption)))();
  var ComparisonRangeEditorComponentL = () => (ComparisonRangeEditorComponentL = dart.constFn(dart.legacy(comparison_range_editor.ComparisonRangeEditorComponent)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var ScrollHostL = () => (ScrollHostL = dart.constFn(dart.legacy(scroll_host_interface.ScrollHost)))();
  var VoidToComparisonRangeEditorComponentL = () => (VoidToComparisonRangeEditorComponentL = dart.constFn(dart.fnType(ComparisonRangeEditorComponentL(), [])))();
  var ComponentFactoryOfComparisonRangeEditorComponentL = () => (ComponentFactoryOfComparisonRangeEditorComponentL = dart.constFn(component_factory.ComponentFactory$(ComparisonRangeEditorComponentL())))();
  var HostViewOfComparisonRangeEditorComponentL = () => (HostViewOfComparisonRangeEditorComponentL = dart.constFn(host_view.HostView$(ComparisonRangeEditorComponentL())))();
  var HostViewLOfComparisonRangeEditorComponentL = () => (HostViewLOfComparisonRangeEditorComponentL = dart.constFn(dart.legacy(HostViewOfComparisonRangeEditorComponentL())))();
  var VoidToHostViewLOfComparisonRangeEditorComponentL = () => (VoidToHostViewLOfComparisonRangeEditorComponentL = dart.constFn(dart.fnType(HostViewLOfComparisonRangeEditorComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C1() {
      return C1 = dart.fn(comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C3() {
      return C3 = dart.fn(comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C4() {
      return C4 = dart.fn(comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0, VoidToHostViewLOfComparisonRangeEditorComponentL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfComparisonRangeEditorComponentL().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "comparison-range-editor"
      });
    }
  }, false);
  var _compView_1 = dart.privateName(comparison_range_editor$46template, "_compView_1");
  var _MaterialToggleComponent_1_5 = dart.privateName(comparison_range_editor$46template, "_MaterialToggleComponent_1_5");
  var _appEl_2 = dart.privateName(comparison_range_editor$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(comparison_range_editor$46template, "_NgIf_2_9");
  var _expr_0 = dart.privateName(comparison_range_editor$46template, "_expr_0");
  var _expr_2 = dart.privateName(comparison_range_editor$46template, "_expr_2");
  var C0;
  var C1;
  var _handleEvent_0 = dart.privateName(comparison_range_editor$46template, "_handleEvent_0");
  var C2;
  comparison_range_editor$46template.ViewComparisonRangeEditorComponent0 = class ViewComparisonRangeEditorComponent0 extends component_view.ComponentView$(dart.legacy(comparison_range_editor.ComparisonRangeEditorComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_datepicker/comparison_range_editor.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "comparison-toggle-section");
      this.addShimC(_el_0);
      this[_compView_1] = new material_toggle$46template.ViewMaterialToggleComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, interpolate.interpolateString2("", "comparison-toggle", " ", "themeable", ""));
      this.addShimC(_el_1);
      this[_MaterialToggleComponent_1_5] = new material_toggle.MaterialToggleComponent.new(this[_compView_1], null);
      this[_compView_1].createAndProject(this[_MaterialToggleComponent_1_5], JSArrayOfObjectL().of([C0 || CT.C0]));
      let _anchor_2 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C1 || CT.C1);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let subscription_0 = this[_MaterialToggleComponent_1_5].onChecked.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_0)));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 1 === nodeIndex) {
        return this[_MaterialToggleComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        if (comparison_range_editor.ComparisonRangeEditorComponent.comparisonHeaderMsg != null) {
          this[_MaterialToggleComponent_1_5].label = comparison_range_editor.ComparisonRangeEditorComponent.comparisonHeaderMsg;
          changed = true;
        }
      }
      let currVal_0 = !dart.test(_ctx.model.comparisonSupported);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!model.comparisonSupported", "package:angular_components/src/material_datepicker/comparison_range_editor.html"))) {
        this[_MaterialToggleComponent_1_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_2 = _ctx.comparisonEnabled;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "comparisonEnabled", "package:angular_components/src/material_datepicker/comparison_range_editor.html"))) {
        this[_MaterialToggleComponent_1_5].checked = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = _ctx.model.comparisonEnabled;
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_1].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_MaterialToggleComponent_1_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_compView_1].destroyInternalState();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.comparisonEnabled = boolL().as($36event);
    }
    static _debugClearComponentStyles() {
      comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles;
      if (styles == null) {
        comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(comparison_range_editor$46template.styles$ComparisonRangeEditorComponent, comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C2 || CT.C2);
        }
      }
      this.componentStyles = styles;
    }
  };
  (comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialToggleComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("comparison-range-editor"));
  }).prototype = comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.prototype;
  dart.addTypeTests(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0);
  dart.addTypeCaches(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0);
  dart.setMethodSignature(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getMethods(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, L0);
  dart.setFieldSignature(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getFields(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_toggle$46template.ViewMaterialToggleComponent0)),
    [_MaterialToggleComponent_1_5]: dart.fieldType(dart.legacy(material_toggle.MaterialToggleComponent)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, {
    /*comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _appEl_1 = dart.privateName(comparison_range_editor$46template, "_appEl_1");
  var _NgFor_1_9 = dart.privateName(comparison_range_editor$46template, "_NgFor_1_9");
  var C3;
  comparison_range_editor$46template._ViewComparisonRangeEditorComponent1 = class _ViewComparisonRangeEditorComponent1 extends embedded_view.EmbeddedView$(dart.legacy(comparison_range_editor.ComparisonRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(HtmlElementL().as(_el_0));
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C3 || CT.C3);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model.validComparisonOptions;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "model.validComparisonOptions", "package:angular_components/src/material_datepicker/comparison_range_editor.html"))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.prototype;
  dart.addTypeTests(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1);
  dart.addTypeCaches(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1);
  dart.setMethodSignature(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, L0);
  dart.setFieldSignature(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getFields(comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_1 = dart.privateName(comparison_range_editor$46template, "_textBinding_1");
  var _compView_0 = dart.privateName(comparison_range_editor$46template, "_compView_0");
  var _MaterialSelectItemComponent_0_5 = dart.privateName(comparison_range_editor$46template, "_MaterialSelectItemComponent_0_5");
  comparison_range_editor$46template._ViewComparisonRangeEditorComponent2 = class _ViewComparisonRangeEditorComponent2 extends embedded_view.EmbeddedView$(dart.legacy(comparison_range_editor.ComparisonRangeEditorComponent)) {
    build() {
      this[_compView_0] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.addShimC(_el_0);
      this[_MaterialSelectItemComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_0, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(_el_0, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentIndex)), this[_compView_0], null);
      this[_compView_0].createAndProject(this[_MaterialSelectItemComponent_0_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialSelectItemComponent_0_5].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialSelectItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_option = optimizations.unsafeCast(ComparisonOptionL(), this.locals[$_get]("$implicit"));
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialSelectItemComponent_0_5].closeOnActivate = false;
        changed = true;
      }
      let currVal_0 = dart.equals(_ctx.model.comparisonOption, local_option);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "model.comparisonOption == option", "package:angular_components/src/material_datepicker/comparison_range_editor.html"))) {
        this[_MaterialSelectItemComponent_0_5].selected = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.comparisonOptionMsg(local_option)));
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let local_option = optimizations.unsafeCast(ComparisonOptionL(), this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.model.comparisonOption = local_option;
    }
  };
  (comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_expr_0] = null;
    comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.prototype;
  dart.addTypeTests(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2);
  dart.addTypeCaches(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2);
  dart.setMethodSignature(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, L0);
  dart.setFieldSignature(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getFields(comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0 = class _ViewComparisonRangeEditorComponentHost0 extends host_view.HostView$(dart.legacy(comparison_range_editor.ComparisonRangeEditorComponent)) {
    build() {
      this.componentView = new comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ComparisonRangeEditorComponentL(), dart.wrapType(ComparisonRangeEditorComponentL()), dart.fn(() => new comparison_range_editor.ComparisonRangeEditorComponent.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), ScrollHostL().as(this.injectorGetOptional(dart.wrapType(ScrollHostL()), this.parentIndex))), VoidToComparisonRangeEditorComponentL())) : new comparison_range_editor.ComparisonRangeEditorComponent.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), ScrollHostL().as(this.injectorGetOptional(dart.wrapType(ScrollHostL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
  };
  (comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new = function() {
    comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.prototype;
  dart.addTypeTests(comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0);
  dart.addTypeCaches(comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0);
  dart.setMethodSignature(comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, () => ({
    __proto__: dart.getMethods(comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, L0);
  var C4;
  comparison_range_editor$46template.createComparisonRangeEditorComponentFactory = function createComparisonRangeEditorComponentFactory() {
    return new (ComponentFactoryOfComparisonRangeEditorComponentL()).new("comparison-range-editor", C4 || CT.C4);
  };
  comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1 = function viewFactory_ComparisonRangeEditorComponent1(parentView, parentIndex) {
    return new comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new(parentView, parentIndex);
  };
  comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2 = function viewFactory_ComparisonRangeEditorComponent2(parentView, parentIndex) {
    return new comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new(parentView, parentIndex);
  };
  comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0 = function viewFactory_ComparisonRangeEditorComponentHost0() {
    return new comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new();
  };
  comparison_range_editor$46template.initReflector = function initReflector() {
    if (dart.test(comparison_range_editor$46template._visited)) {
      return;
    }
    comparison_range_editor$46template._visited = true;
    reflector.registerComponent(dart.wrapType(ComparisonRangeEditorComponentL()), comparison_range_editor$46template.createComparisonRangeEditorComponentFactory());
    angular$46template.initReflector();
    comparison_option$46template.initReflector();
    date_range_input$46template.initReflector();
    range$46template.initReflector();
    material_list$46template.initReflector();
    material_list_item$46template.initReflector();
    material_dropdown_select$46template.initReflector();
    material_select_item$46template.initReflector();
    material_toggle$46template.initReflector();
    date$46template.initReflector();
    date_range_editor_model$46template.initReflector();
    angular_2$46template.initReflector();
  };
  dart.copyProperties(comparison_range_editor$46template, {
    get ComparisonRangeEditorComponentNgFactory() {
      return comparison_range_editor$46template._ComparisonRangeEditorComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C5;
  dart.defineLazy(comparison_range_editor$46template, {
    /*comparison_range_editor$46template.styles$ComparisonRangeEditorComponent*/get styles$ComparisonRangeEditorComponent() {
      return [comparison_range_editor$46scss$46css$46shim.styles];
    },
    /*comparison_range_editor$46template._ComparisonRangeEditorComponentNgFactory*/get _ComparisonRangeEditorComponentNgFactory() {
      return C5 || CT.C5;
    },
    /*comparison_range_editor$46template.styles$ComparisonRangeEditorComponentHost*/get styles$ComparisonRangeEditorComponentHost() {
      return C0 || CT.C0;
    },
    /*comparison_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(comparison_range_editor$46scss$46css$46shim, {
    /*comparison_range_editor$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:flex;flex-direction:column}.comparison-toggle-section._ngcontent-%ID%{display:flex;justify-content:space-between;align-items:center;flex-grow:1;height:32px;padding:0 16px}.comparison-toggle._ngcontent-%ID%{display:inline-flex;width:100%}.comparison-option-dropdown._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:0 8px;position:relative}material-select-item._ngcontent-%ID%{font-size:inherit}.fake-popup._ngcontent-%ID%{background-color:#fff;left:0;position:absolute;top:0;z-index:1}"];
    }
  }, true);
  date_range_editor_model$46template.initReflector = function initReflector$() {
    if (dart.test(date_range_editor_model$46template._visited)) {
      return;
    }
    date_range_editor_model$46template._visited = true;
    calendar$46template.initReflector();
    comparison$46template.initReflector();
    comparison_option$46template.initReflector();
    range$46template.initReflector();
    date$46template.initReflector();
    observable$46template.initReflector();
    sequential$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(date_range_editor_model$46template, {
    /*date_range_editor_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim", {
    "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart": comparison_range_editor$46template,
    "package:angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.dart": comparison_range_editor$46scss$46css$46shim,
    "package:angular_components/src/material_datepicker/date_range_editor_model.template.dart": date_range_editor_model$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["comparison_range_editor.template.dart","comparison_range_editor.scss.css.shim.dart","date_range_editor_model.template.dart"],"names":[],"mappings":"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","file":"comparison_range_editor.scss.css.shim.unsound.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__comparison_range_editor$46template: comparison_range_editor$46template,
    src__material_datepicker__comparison_range_editor$46scss$46css$46shim: comparison_range_editor$46scss$46css$46shim,
    src__material_datepicker__date_range_editor_model$46template: date_range_editor_model$46template
  };
}));

//# sourceMappingURL=comparison_range_editor.scss.css.shim.unsound.ddc.js.map
