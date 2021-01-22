define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/focus/focus_list.template', 'packages/angular_components/focus/focus_list', 'packages/angular_components/material_list/material_list', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_item', 'packages/angular_components/material_select/material_select', 'packages/angular_components/model/selection/selection_options', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/focus/focus_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/material_select/material_select.scss.css.shim'], (function load__packages__angular_components__material_select__material_select_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_list__material_list$46template, packages__angular_components__focus__focus_list$46template, packages__angular_components__focus__focus_list, packages__angular_components__material_list__material_list, packages__angular_components__focus__focus, packages__angular_components__focus__focus_item, packages__angular_components__material_select__material_select, packages__angular_components__model__selection__selection_options, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__focus__focus_item$46template, packages__angular_components__material_select__material_select_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__activation_handler, packages__angular_components__model__selection__selection_container, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__ui__has_renderer, packages__angular_components__material_select__material_select_base$46template, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__selection_options$46template, packages__angular_components__model__ui__has_factory$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__model__ui__template_support$46template, packages__angular_components__material_select__material_select$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const material_list$46template = packages__angular_components__material_list__material_list$46template.material_list__material_list$46template;
  const focus_list$46template = packages__angular_components__focus__focus_list$46template.focus__focus_list$46template;
  const focus_list = packages__angular_components__focus__focus_list.focus__focus_list;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const focus_item = packages__angular_components__focus__focus_item.focus__focus_item;
  const material_select = packages__angular_components__material_select__material_select.material_select__material_select;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const focus_item$46template = packages__angular_components__focus__focus_item$46template.focus__focus_item$46template;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const material_select_base$46template = packages__angular_components__material_select__material_select_base$46template.material_select__material_select_base$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  const has_factory$46template = packages__angular_components__model__ui__has_factory$46template.model__ui__has_factory$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const template_support$46template = packages__angular_components__model__ui__template_support$46template.model__ui__template_support$46template;
  const material_select$46scss$46css$46shim = packages__angular_components__material_select__material_select$46scss$46css$46shim.material_select__material_select$46scss$46css$46shim;
  var material_select$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $toString = dartx.toString;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var FocusListDirectiveL = () => (FocusListDirectiveL = dart.constFn(dart.legacy(focus_list.FocusListDirective)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToFocusListDirectiveL = () => (VoidToFocusListDirectiveL = dart.constFn(dart.fnType(FocusListDirectiveL(), [])))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var FocusableItemL = () => (FocusableItemL = dart.constFn(dart.legacy(focus.FocusableItem)))();
  var _ViewMaterialSelectComponent1L = () => (_ViewMaterialSelectComponent1L = dart.constFn(dart.legacy(material_select$46template._ViewMaterialSelectComponent1)))();
  var _ViewMaterialSelectComponent2L = () => (_ViewMaterialSelectComponent2L = dart.constFn(dart.legacy(material_select$46template._ViewMaterialSelectComponent2)))();
  var _ViewMaterialSelectComponent3L = () => (_ViewMaterialSelectComponent3L = dart.constFn(dart.legacy(material_select$46template._ViewMaterialSelectComponent3)))();
  var _ViewMaterialSelectComponent5L = () => (_ViewMaterialSelectComponent5L = dart.constFn(dart.legacy(material_select$46template._ViewMaterialSelectComponent5)))();
  var FocusItemDirectiveL = () => (FocusItemDirectiveL = dart.constFn(dart.legacy(focus_item.FocusItemDirective)))();
  var _ViewMaterialSelectComponent5LToFocusItemDirectiveL = () => (_ViewMaterialSelectComponent5LToFocusItemDirectiveL = dart.constFn(dart.fnType(FocusItemDirectiveL(), [_ViewMaterialSelectComponent5L()])))();
  var ListOfFocusableItemL = () => (ListOfFocusableItemL = dart.constFn(core.List$(FocusableItemL())))();
  var ListLOfFocusableItemL = () => (ListLOfFocusableItemL = dart.constFn(dart.legacy(ListOfFocusableItemL())))();
  var _ViewMaterialSelectComponent3LToListLOfFocusableItemL = () => (_ViewMaterialSelectComponent3LToListLOfFocusableItemL = dart.constFn(dart.fnType(ListLOfFocusableItemL(), [_ViewMaterialSelectComponent3L()])))();
  var _ViewMaterialSelectComponent2LToListLOfFocusableItemL = () => (_ViewMaterialSelectComponent2LToListLOfFocusableItemL = dart.constFn(dart.fnType(ListLOfFocusableItemL(), [_ViewMaterialSelectComponent2L()])))();
  var _ViewMaterialSelectComponent1LToListLOfFocusableItemL = () => (_ViewMaterialSelectComponent1LToListLOfFocusableItemL = dart.constFn(dart.fnType(ListLOfFocusableItemL(), [_ViewMaterialSelectComponent1L()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var intLAnddynamicToObjectL = () => (intLAnddynamicToObjectL = dart.constFn(dart.fnType(ObjectL(), [intL(), dart.dynamic])))();
  var intLAnddynamicToLObjectL = () => (intLAnddynamicToLObjectL = dart.constFn(dart.legacy(intLAnddynamicToObjectL())))();
  var MaterialSelectItemComponentL = () => (MaterialSelectItemComponentL = dart.constFn(dart.legacy(material_select_item.MaterialSelectItemComponent)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ComponentFactoryL = () => (ComponentFactoryL = dart.constFn(dart.legacy(component_factory.ComponentFactory)))();
  var ViewMaterialSelectComponent0L = () => (ViewMaterialSelectComponent0L = dart.constFn(dart.legacy(material_select$46template.ViewMaterialSelectComponent0)))();
  var SelectionContainerL = () => (SelectionContainerL = dart.constFn(dart.legacy(selection_container.SelectionContainer)))();
  var VoidToHostViewLOfMaterialSelectComponentLOfTL = () => (VoidToHostViewLOfMaterialSelectComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialSelectComponentOfTL = () => (MaterialSelectComponentOfTL = dart.constFn(material_select.MaterialSelectComponent$(TL())))();
    var MaterialSelectComponentLOfTL = () => (MaterialSelectComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectComponentOfTL())))();
    var HostViewOfMaterialSelectComponentLOfTL = () => (HostViewOfMaterialSelectComponentLOfTL = dart.constFn(host_view.HostView$(MaterialSelectComponentLOfTL())))();
    var HostViewLOfMaterialSelectComponentLOfTL = () => (HostViewLOfMaterialSelectComponentLOfTL = dart.constFn(dart.legacy(HostViewOfMaterialSelectComponentLOfTL())))();
    return [HostViewLOfMaterialSelectComponentLOfTL(), []];
  })))();
  var MaterialSelectComponentL = () => (MaterialSelectComponentL = dart.constFn(dart.legacy(material_select.MaterialSelectComponent)))();
  var ComponentFactoryOfMaterialSelectComponentL = () => (ComponentFactoryOfMaterialSelectComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialSelectComponentL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_select.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_select$46template.ViewMaterialSelectComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.fn(material_select$46template.viewFactory_MaterialSelectComponentHost0, VoidToHostViewLOfMaterialSelectComponentLOfTL());
    },
    get C4() {
      return C4 = dart.const(dart.gbind(C2 || CT.C2, dart.dynamic));
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfMaterialSelectComponentL().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "material-select"
      });
    }
  }, false);
  var _query_FocusableItem_0_0_isDirty = dart.privateName(material_select$46template, "_query_FocusableItem_0_0_isDirty");
  var _compView_0 = dart.privateName(material_select$46template, "_compView_0");
  var _FocusListDirective_0_5 = dart.privateName(material_select$46template, "_FocusListDirective_0_5");
  var _MaterialListComponent_0_6 = dart.privateName(material_select$46template, "_MaterialListComponent_0_6");
  var _appEl_1 = dart.privateName(material_select$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_select$46template, "_NgIf_1_9");
  var _expr_0 = dart.privateName(material_select$46template, "_expr_0");
  var _expr_2 = dart.privateName(material_select$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_select$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_select$46template, "_expr_4");
  var _el_0 = dart.privateName(material_select$46template, "_el_0");
  var _FocusItemDirective_0_5 = dart.privateName(material_select$46template, "_FocusItemDirective_0_5");
  var C0;
  const _is_ViewMaterialSelectComponent0_default = Symbol('_is_ViewMaterialSelectComponent0_default');
  material_select$46template.ViewMaterialSelectComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialSelectComponent0 extends component_view.ComponentView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select.dart" : null;
      }
      build() {
        let t0;
        let parentRenderNode = this.initViewRoot();
        this[_compView_0] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootElement;
        parentRenderNode[$append](this[_el_0]);
        dom_helpers.setAttribute(this[_el_0], "focusList", "");
        dom_helpers.setAttribute(this[_el_0], "role", "none");
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_FocusListDirective_0_5] = new focus_list$46template.FocusListDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(FocusListDirectiveL(), dart.wrapType(FocusListDirectiveL()), dart.fn(() => new focus_list.FocusListDirective.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), "none", null), VoidToFocusListDirectiveL())) : new focus_list.FocusListDirective.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), "none", null));
        this[_MaterialListComponent_0_6] = new material_list.MaterialListComponent.new();
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent1(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this[_compView_0].createAndProject(this[_MaterialListComponent_0_6], JSArrayOfObjectL().of([(t0 = [this.projectedNodes[$_get](0)], (() => {
            t0[$addAll]([this[_appEl_1]]);
            return t0;
          })())]));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        let currVal_0 = _ctx.autoFocusIndex;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "autoFocusIndex", "package:angular_components/material_select/material_select.html"))) {
          this[_FocusListDirective_0_5].instance.autoFocusIndex = currVal_0;
          this[_expr_0] = currVal_0;
        }
        changed = false;
        if (dart.test(firstCheck)) {
          this[_MaterialListComponent_0_6].role = "none";
          changed = true;
        }
        let currVal_2 = _ctx.width;
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "width", "package:angular_components/material_select/material_select.html"))) {
          this[_MaterialListComponent_0_6].width = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_NgIf_1_9].ngIf = _ctx.options != null;
        this[_appEl_1].detectChangesInNestedViews();
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          if (dart.test(this[_query_FocusableItem_0_0_isDirty])) {
            this[_FocusListDirective_0_5].instance.listItems = this[_appEl_1].mapNestedViews(FocusableItemL(), _ViewMaterialSelectComponent1L(), dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(FocusableItemL(), _ViewMaterialSelectComponent2L(), dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(FocusableItemL(), _ViewMaterialSelectComponent3L(), dart.fn(nestedView => nestedView[_appEl_1].mapNestedViewsWithSingleResult(FocusableItemL(), _ViewMaterialSelectComponent5L(), dart.fn(nestedView => nestedView[_FocusItemDirective_0_5].instance, _ViewMaterialSelectComponent5LToFocusItemDirectiveL())), _ViewMaterialSelectComponent3LToListLOfFocusableItemL())), _ViewMaterialSelectComponent2LToListLOfFocusableItemL())), _ViewMaterialSelectComponent1LToListLOfFocusableItemL()));
            this[_query_FocusableItem_0_0_isDirty] = false;
          }
        }
        this[_FocusListDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_FocusListDirective_0_5].instance.ngOnDestroy();
      }
      detectHostChanges(firstCheck) {
        let t0;
        let _ctx = this.ctx;
        let currVal_3 = _ctx.isMultiSelect;
        if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "aria-multiselectable", (t0 = currVal_3, t0 == null ? null : dart.toString(t0)));
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.disabledStr;
        if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "aria-disabled", currVal_4);
          this[_expr_4] = currVal_4;
        }
      }
      static _debugClearComponentStyles() {
        material_select$46template.ViewMaterialSelectComponent0._componentStyles = null;
      }
      initComponentStyles() {
        let styles = material_select$46template.ViewMaterialSelectComponent0._componentStyles;
        if (styles == null) {
          material_select$46template.ViewMaterialSelectComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_select$46template.styles$MaterialSelectComponent, material_select$46template.ViewMaterialSelectComponent0._debugComponentUrl);
          if (dart.test(optimizations.isDevMode)) {
            style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
          }
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialSelectComponent0.new = function(parentView, parentIndex) {
      this[_query_FocusableItem_0_0_isDirty] = true;
      this[_compView_0] = null;
      this[_FocusListDirective_0_5] = null;
      this[_MaterialListComponent_0_6] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_el_0] = null;
      ViewMaterialSelectComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootElement = HtmlElementL().as(html.document[$createElement]("material-select"));
      dom_helpers.updateAttribute(this.rootElement, "role", "listbox");
    }).prototype = ViewMaterialSelectComponent0.prototype;
    dart.addTypeTests(ViewMaterialSelectComponent0);
    ViewMaterialSelectComponent0.prototype[_is_ViewMaterialSelectComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialSelectComponent0);
    dart.setMethodSignature(ViewMaterialSelectComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialSelectComponent0.__proto__),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ViewMaterialSelectComponent0, L0);
    dart.setFieldSignature(ViewMaterialSelectComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialSelectComponent0.__proto__),
      [_query_FocusableItem_0_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
      [_compView_0]: dart.fieldType(dart.legacy(material_list$46template.ViewMaterialListComponent0)),
      [_FocusListDirective_0_5]: dart.fieldType(dart.legacy(focus_list$46template.FocusListDirectiveNgCd)),
      [_MaterialListComponent_0_6]: dart.fieldType(dart.legacy(material_list.MaterialListComponent)),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return ViewMaterialSelectComponent0;
  });
  material_select$46template.ViewMaterialSelectComponent0 = material_select$46template.ViewMaterialSelectComponent0$();
  dart.defineLazy(material_select$46template.ViewMaterialSelectComponent0, {
    /*material_select$46template.ViewMaterialSelectComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_select$46template.ViewMaterialSelectComponent0, _is_ViewMaterialSelectComponent0_default);
  var _NgFor_1_9 = dart.privateName(material_select$46template, "_NgFor_1_9");
  var _expr_1 = dart.privateName(material_select$46template, "_expr_1");
  const _is__ViewMaterialSelectComponent1_default = Symbol('_is__ViewMaterialSelectComponent1_default');
  material_select$46template._ViewMaterialSelectComponent1$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialSelectComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        this[_el_0] = DivElementL().as(doc[$createElement]("div"));
        this.updateChildClass(this[_el_0], "options-wrapper");
        dom_helpers.setAttribute(this[_el_0], "role", "group");
        this.addShimC(this[_el_0]);
        let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent2(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        this.initRootNode(this[_el_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.firstCheck;
        if (dart.test(firstCheck)) {
          if (_ctx.trackByIndexFn != null) {
            this[_NgFor_1_9].ngForTrackBy = intLAnddynamicToLObjectL().as(_ctx.trackByIndexFn);
          }
        }
        let currVal_2 = _ctx.options.optionGroups;
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "options.optionGroups", "package:angular_components/material_select/material_select.html"))) {
          this[_NgFor_1_9].ngForOf = currVal_2;
          this[_expr_2] = currVal_2;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = _ctx.ariaLabelledBy;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "ariaLabelledBy", "package:angular_components/material_select/material_select.html"))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-labelledby", currVal_0);
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.ariaDescribedBy;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "ariaDescribedBy", "package:angular_components/material_select/material_select.html"))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-describedby", currVal_1);
          this[_expr_1] = currVal_1;
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent1.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectComponent1.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent1);
    _ViewMaterialSelectComponent1.prototype[_is__ViewMaterialSelectComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponent1);
    dart.setMethodSignature(_ViewMaterialSelectComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent1.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponent1, L0);
    dart.setFieldSignature(_ViewMaterialSelectComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent1.__proto__),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
    }));
    return _ViewMaterialSelectComponent1;
  });
  material_select$46template._ViewMaterialSelectComponent1 = material_select$46template._ViewMaterialSelectComponent1$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent1, _is__ViewMaterialSelectComponent1_default);
  const _is__ViewMaterialSelectComponent2_default = Symbol('_is__ViewMaterialSelectComponent2_default');
  material_select$46template._ViewMaterialSelectComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialSelectComponent2 extends embedded_view.EmbeddedView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        this[_el_0] = DivElementL().as(doc[$createElement]("div"));
        dom_helpers.setAttribute(this[_el_0], "group", "");
        this.addShimC(this[_el_0]);
        let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent3(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.initRootNode(this[_el_0]);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.locals[$_get]("$implicit"));
        this[_NgIf_1_9].ngIf = local_group.isNotEmpty;
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = local_group.isEmpty;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "group.isEmpty", "package:angular_components/material_select/material_select.html"))) {
          dom_helpers.updateClassBinding(this[_el_0], "empty", currVal_0);
          this[_expr_0] = currVal_0;
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent2.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent2.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectComponent2.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent2);
    _ViewMaterialSelectComponent2.prototype[_is__ViewMaterialSelectComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponent2);
    dart.setMethodSignature(_ViewMaterialSelectComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent2.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponent2, L0);
    dart.setFieldSignature(_ViewMaterialSelectComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent2.__proto__),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
    }));
    return _ViewMaterialSelectComponent2;
  });
  material_select$46template._ViewMaterialSelectComponent2 = material_select$46template._ViewMaterialSelectComponent2$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent2, _is__ViewMaterialSelectComponent2_default);
  var _appEl_0 = dart.privateName(material_select$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_select$46template, "_NgIf_0_9");
  const _is__ViewMaterialSelectComponent3_default = Symbol('_is__ViewMaterialSelectComponent3_default');
  material_select$46template._ViewMaterialSelectComponent3$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialSelectComponent3 extends embedded_view.EmbeddedView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent4(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent5(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0], this[_appEl_1]]), null);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), optimizations.unsafeCast(_ViewMaterialSelectComponent2L(), this.parentView).locals[$_get]("$implicit"));
        this[_NgIf_0_9].ngIf = local_group.hasLabel;
        let currVal_0 = local_group;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "group", "package:angular_components/material_select/material_select.html"))) {
          this[_NgFor_1_9].ngForOf = currVal_0;
          this[_expr_0] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent3.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_expr_0] = null;
      _ViewMaterialSelectComponent3.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectComponent3.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent3);
    _ViewMaterialSelectComponent3.prototype[_is__ViewMaterialSelectComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponent3);
    dart.setMethodSignature(_ViewMaterialSelectComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent3.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponent3, L0);
    dart.setFieldSignature(_ViewMaterialSelectComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent3.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectComponent3;
  });
  material_select$46template._ViewMaterialSelectComponent3 = material_select$46template._ViewMaterialSelectComponent3$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent3, _is__ViewMaterialSelectComponent3_default);
  var _textBinding_1 = dart.privateName(material_select$46template, "_textBinding_1");
  const _is__ViewMaterialSelectComponent4_default = Symbol('_is__ViewMaterialSelectComponent4_default');
  material_select$46template._ViewMaterialSelectComponent4$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialSelectComponent4 extends embedded_view.EmbeddedView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        dom_helpers.setAttribute(_el_0, "label", "");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), optimizations.unsafeCast(_ViewMaterialSelectComponent2L(), this.parentView.parentView).locals[$_get]("$implicit"));
        this[_textBinding_1].updateText(interpolate.interpolateString0(local_group.uiDisplayName));
      }
    }
    (_ViewMaterialSelectComponent4.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new text_binding.TextBinding.new();
      _ViewMaterialSelectComponent4.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectComponent4.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent4);
    _ViewMaterialSelectComponent4.prototype[_is__ViewMaterialSelectComponent4_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponent4);
    dart.setMethodSignature(_ViewMaterialSelectComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent4.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponent4, L0);
    dart.setFieldSignature(_ViewMaterialSelectComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent4.__proto__),
      [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialSelectComponent4;
  });
  material_select$46template._ViewMaterialSelectComponent4 = material_select$46template._ViewMaterialSelectComponent4$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent4, _is__ViewMaterialSelectComponent4_default);
  var _MaterialSelectItemComponent_0_6 = dart.privateName(material_select$46template, "_MaterialSelectItemComponent_0_6");
  var _expr_5 = dart.privateName(material_select$46template, "_expr_5");
  var C1;
  const _is__ViewMaterialSelectComponent5_default = Symbol('_is__ViewMaterialSelectComponent5_default');
  material_select$46template._ViewMaterialSelectComponent5$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialSelectItemComponent0OfTL = () => (ViewMaterialSelectItemComponent0OfTL = dart.constFn(material_select_item$46template.ViewMaterialSelectItemComponent0$(TL())))();
    var MaterialSelectItemComponentOfTL = () => (MaterialSelectItemComponentOfTL = dart.constFn(material_select_item.MaterialSelectItemComponent$(TL())))();
    var MaterialSelectItemComponentLOfTL = () => (MaterialSelectItemComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectItemComponentOfTL())))();
    var VoidToMaterialSelectItemComponentLOfTL = () => (VoidToMaterialSelectItemComponentLOfTL = dart.constFn(dart.fnType(MaterialSelectItemComponentLOfTL(), [])))();
    var TLToStringL = () => (TLToStringL = dart.constFn(dart.fnType(StringL(), [TL()])))();
    var TLToLStringL = () => (TLToLStringL = dart.constFn(dart.legacy(TLToStringL())))();
    var TLToComponentFactoryL = () => (TLToComponentFactoryL = dart.constFn(dart.fnType(ComponentFactoryL(), [TL()])))();
    var TLToLComponentFactoryL = () => (TLToLComponentFactoryL = dart.constFn(dart.legacy(TLToComponentFactoryL())))();
    class _ViewMaterialSelectComponent5 extends embedded_view.EmbeddedView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectItemComponent0OfTL()).new(this, 0);
        this[_el_0] = this[_compView_0].rootElement;
        dom_helpers.setAttribute(this[_el_0], "focusItem", "");
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_FocusItemDirective_0_5] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(HtmlElementL().as(this[_el_0]), this[_compView_0], null));
        this[_MaterialSelectItemComponent_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentLOfTL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new (MaterialSelectItemComponentOfTL()).new(HtmlElementL().as(this[_el_0]), DropdownHandleL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.parentView.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponentLOfTL())) : new (MaterialSelectItemComponentOfTL()).new(HtmlElementL().as(this[_el_0]), DropdownHandleL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.parentView.parentView.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentIndex)), this[_compView_0], null);
        this[_compView_0].createAndProject(this[_MaterialSelectItemComponent_0_6], JSArrayOfObjectL().of([C1 || CT.C1]));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_FocusItemDirective_0_5].instance, 'keydown')));
        this.initRootNode(this[_el_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (0 === nodeIndex) {
          if (token === dart.wrapType(FocusableItemL())) {
            return this[_FocusItemDirective_0_5].instance;
          }
          if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
            return this[_MaterialSelectItemComponent_0_6];
          }
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        let local_item = optimizations.unsafeCast(TL(), this.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = dart.test(_ctx.disabled) || dart.test(_ctx.isOptionDisabled(local_item));
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "disabled || isOptionDisabled(item)", "package:angular_components/material_select/material_select.html"))) {
          this[_MaterialSelectItemComponent_0_6].disabled = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = local_item;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "item", "package:angular_components/material_select/material_select.html"))) {
          this[_MaterialSelectItemComponent_0_6].value = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = TLToLStringL().as(_ctx.itemRenderer);
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "itemRenderer", "package:angular_components/material_select/material_select.html"))) {
          this[_MaterialSelectItemComponent_0_6].itemRenderer = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = _ctx.componentRenderer;
        if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "componentRenderer", "package:angular_components/material_select/material_select.html"))) {
          this[_MaterialSelectItemComponent_0_6].componentRenderer = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = TLToLComponentFactoryL().as(_ctx.factoryRenderer);
        if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "factoryRenderer", "package:angular_components/material_select/material_select.html"))) {
          this[_MaterialSelectItemComponent_0_6].factoryRenderer = currVal_4;
          changed = true;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.selection;
        if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "selection", "package:angular_components/material_select/material_select.html"))) {
          this[_MaterialSelectItemComponent_0_6].selection = currVal_5;
          changed = true;
          this[_expr_5] = currVal_5;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_FocusItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      dirtyParentQueriesInternal() {
        optimizations.unsafeCast(ViewMaterialSelectComponent0L(), this.parentView.parentView.parentView.parentView)[_query_FocusableItem_0_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialSelectItemComponent_0_6].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectComponent5.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_FocusItemDirective_0_5] = null;
      this[_MaterialSelectItemComponent_0_6] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent5.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectComponent5.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent5);
    _ViewMaterialSelectComponent5.prototype[_is__ViewMaterialSelectComponent5_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponent5);
    dart.setMethodSignature(_ViewMaterialSelectComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent5.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponent5, L0);
    dart.setFieldSignature(_ViewMaterialSelectComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent5.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0$(dart.legacy(T)))),
      [_FocusItemDirective_0_5]: dart.fieldType(dart.legacy(focus_item$46template.FocusItemDirectiveNgCd)),
      [_MaterialSelectItemComponent_0_6]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent$(dart.legacy(T)))),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialSelectComponent5;
  });
  material_select$46template._ViewMaterialSelectComponent5 = material_select$46template._ViewMaterialSelectComponent5$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent5, _is__ViewMaterialSelectComponent5_default);
  const _is__ViewMaterialSelectComponentHost0_default = Symbol('_is__ViewMaterialSelectComponentHost0_default');
  material_select$46template._ViewMaterialSelectComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialSelectComponent0OfTL = () => (ViewMaterialSelectComponent0OfTL = dart.constFn(material_select$46template.ViewMaterialSelectComponent0$(TL())))();
    var MaterialSelectComponentOfTL = () => (MaterialSelectComponentOfTL = dart.constFn(material_select.MaterialSelectComponent$(TL())))();
    var SelectionItemOfTL = () => (SelectionItemOfTL = dart.constFn(selection_container.SelectionItem$(TL())))();
    var SelectionItemLOfTL = () => (SelectionItemLOfTL = dart.constFn(dart.legacy(SelectionItemOfTL())))();
    var JSArrayOfSelectionItemLOfTL = () => (JSArrayOfSelectionItemLOfTL = dart.constFn(_interceptors.JSArray$(SelectionItemLOfTL())))();
    class _ViewMaterialSelectComponentHost0 extends host_view.HostView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        this.componentView = new (ViewMaterialSelectComponent0OfTL()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = new (MaterialSelectComponentOfTL()).new();
        this.component.selectItems = JSArrayOfSelectionItemLOfTL().of([]);
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL()) || token === dart.wrapType(SelectionContainerL())) && 0 === nodeIndex) {
          return this.component;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.firstCheck;
        if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
          this.component.ngOnInit();
        }
        this.componentView.detectHostChanges(firstCheck);
        this.componentView.detectChanges();
      }
    }
    (_ViewMaterialSelectComponentHost0.new = function() {
      _ViewMaterialSelectComponentHost0.__proto__.new.call(this);
      ;
    }).prototype = _ViewMaterialSelectComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponentHost0);
    _ViewMaterialSelectComponentHost0.prototype[_is__ViewMaterialSelectComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponentHost0);
    dart.setMethodSignature(_ViewMaterialSelectComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponentHost0.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponentHost0, L0);
    return _ViewMaterialSelectComponentHost0;
  });
  material_select$46template._ViewMaterialSelectComponentHost0 = material_select$46template._ViewMaterialSelectComponentHost0$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponentHost0, _is__ViewMaterialSelectComponentHost0_default);
  var C2;
  material_select$46template.createMaterialSelectComponentFactory = function createMaterialSelectComponentFactory(T) {
    return new (component_factory.ComponentFactory$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T))))).new("material-select", dart.gbind(C2 || CT.C2, dart.legacy(T)));
  };
  material_select$46template.viewFactory_MaterialSelectComponent1 = function viewFactory_MaterialSelectComponent1(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent2 = function viewFactory_MaterialSelectComponent2(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent3 = function viewFactory_MaterialSelectComponent3(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent4 = function viewFactory_MaterialSelectComponent4(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent4$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent5 = function viewFactory_MaterialSelectComponent5(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent5$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponentHost0 = function viewFactory_MaterialSelectComponentHost0(T) {
    return new (material_select$46template._ViewMaterialSelectComponentHost0$(dart.legacy(T))).new();
  };
  material_select$46template.initReflector = function initReflector() {
    if (dart.test(material_select$46template._visited)) {
      return;
    }
    material_select$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialSelectComponentL()), material_select$46template.createMaterialSelectComponentFactory(dart.dynamic));
    material_select_base$46template.initReflector();
    material_select_item$46template.initReflector();
    angular$46template.initReflector();
    focus_item$46template.initReflector();
    focus_list$46template.initReflector();
    has_disabled$46template.initReflector();
    material_list$46template.initReflector();
    select$46template.initReflector();
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
    has_renderer$46template.initReflector();
    template_support$46template.initReflector();
  };
  dart.copyProperties(material_select$46template, {
    get MaterialSelectComponentNgFactory() {
      return material_select$46template._MaterialSelectComponentNgFactory;
    }
  });
  var C4;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  dart.defineLazy(material_select$46template, {
    /*material_select$46template.styles$MaterialSelectComponent*/get styles$MaterialSelectComponent() {
      return [material_select$46scss$46css$46shim.styles];
    },
    /*material_select$46template._MaterialSelectComponentNgFactory*/get _MaterialSelectComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*material_select$46template.styles$MaterialSelectComponentHost*/get styles$MaterialSelectComponentHost() {
      return C1 || CT.C1;
    },
    /*material_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/material_select.template", {
    "package:angular_components/material_select/material_select.template.dart": material_select$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select.template.dart"],"names":[],"mappings":"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","file":"material_select.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_select$46template: material_select$46template
  };
}));

//# sourceMappingURL=material_select.template.unsound.ddc.js.map
