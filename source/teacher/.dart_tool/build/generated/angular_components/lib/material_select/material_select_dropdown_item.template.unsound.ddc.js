define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_select/material_select_dropdown_item', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/material_select/handles_aria.template', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_select/material_select_dropdown_item.scss.css.shim'], (function load__packages__angular_components__material_select__material_select_dropdown_item_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_select__material_select_dropdown_item, packages__angular_components__material_checkbox__material_checkbox$46template, packages__angular_components__material_checkbox__material_checkbox, packages__angular_components__interfaces__has_disabled, packages__angular_components__glyph__glyph$46template, packages__angular_components__glyph__glyph, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__dynamic_component__dynamic_component$46template, packages__angular_components__dynamic_component__dynamic_component, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__activation_handler, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__has_renderer, packages__angular__angular$46template, packages__angular_components__material_select__activation_handler$46template, packages__angular_components__material_select__handles_aria$46template, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_select__material_select_dropdown_item$46scss$46css$46shim) {
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
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const material_select_dropdown_item = packages__angular_components__material_select__material_select_dropdown_item.material_select__material_select_dropdown_item;
  const material_checkbox$46template = packages__angular_components__material_checkbox__material_checkbox$46template.material_checkbox__material_checkbox$46template;
  const material_checkbox = packages__angular_components__material_checkbox__material_checkbox.material_checkbox__material_checkbox;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const glyph$46template = packages__angular_components__glyph__glyph$46template.glyph__glyph$46template;
  const glyph = packages__angular_components__glyph__glyph.glyph__glyph;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const dynamic_component$46template = packages__angular_components__dynamic_component__dynamic_component$46template.dynamic_component__dynamic_component$46template;
  const dynamic_component = packages__angular_components__dynamic_component__dynamic_component.dynamic_component__dynamic_component;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const activation_handler$46template = packages__angular_components__material_select__activation_handler$46template.material_select__activation_handler$46template;
  const handles_aria$46template = packages__angular_components__material_select__handles_aria$46template.material_select__handles_aria$46template;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_select_dropdown_item$46scss$46css$46shim = packages__angular_components__material_select__material_select_dropdown_item$46scss$46css$46shim.material_select__material_select_dropdown_item$46scss$46css$46shim;
  var material_select_dropdown_item$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var DynamicComponentL = () => (DynamicComponentL = dart.constFn(dart.legacy(dynamic_component.DynamicComponent)))();
  var SlowComponentLoaderL = () => (SlowComponentLoaderL = dart.constFn(dart.legacy(dynamic_component_loader.SlowComponentLoader)))();
  var VoidToDynamicComponentL = () => (VoidToDynamicComponentL = dart.constFn(dart.fnType(DynamicComponentL(), [])))();
  var ComponentRefL = () => (ComponentRefL = dart.constFn(dart.legacy(component_factory.ComponentRef)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var MaterialSelectDropdownItemComponentL = () => (MaterialSelectDropdownItemComponentL = dart.constFn(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var VoidToHostViewLOfMaterialSelectDropdownItemComponentLOfTL = () => (VoidToHostViewLOfMaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialSelectDropdownItemComponentOfTL = () => (MaterialSelectDropdownItemComponentOfTL = dart.constFn(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(TL())))();
    var MaterialSelectDropdownItemComponentLOfTL = () => (MaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectDropdownItemComponentOfTL())))();
    var HostViewOfMaterialSelectDropdownItemComponentLOfTL = () => (HostViewOfMaterialSelectDropdownItemComponentLOfTL = dart.constFn(host_view.HostView$(MaterialSelectDropdownItemComponentLOfTL())))();
    var HostViewLOfMaterialSelectDropdownItemComponentLOfTL = () => (HostViewLOfMaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.legacy(HostViewOfMaterialSelectDropdownItemComponentLOfTL())))();
    return [HostViewLOfMaterialSelectDropdownItemComponentLOfTL(), []];
  })))();
  var ComponentFactoryOfMaterialSelectDropdownItemComponentL = () => (ComponentFactoryOfMaterialSelectDropdownItemComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialSelectDropdownItemComponentL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_select_dropdown_item.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.fn(material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponentHost0, VoidToHostViewLOfMaterialSelectDropdownItemComponentLOfTL());
    },
    get C4() {
      return C4 = dart.const(dart.gbind(C2 || CT.C2, dart.dynamic));
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfMaterialSelectDropdownItemComponentL().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "material-select-dropdown-item"
      });
    }
  }, false);
  var _appEl_0 = dart.privateName(material_select_dropdown_item$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_select_dropdown_item$46template, "_NgIf_0_9");
  var _appEl_2 = dart.privateName(material_select_dropdown_item$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_select_dropdown_item$46template, "_NgIf_2_9");
  var _appEl_4 = dart.privateName(material_select_dropdown_item$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(material_select_dropdown_item$46template, "_NgIf_4_9");
  var _appEl_6 = dart.privateName(material_select_dropdown_item$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_select_dropdown_item$46template, "_NgIf_6_9");
  var _expr_0 = dart.privateName(material_select_dropdown_item$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_select_dropdown_item$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_select_dropdown_item$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_select_dropdown_item$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_select_dropdown_item$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_select_dropdown_item$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_select_dropdown_item$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_select_dropdown_item$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_select_dropdown_item$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_select_dropdown_item$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_select_dropdown_item$46template, "_expr_10");
  var C0;
  const _is_ViewMaterialSelectDropdownItemComponent0_default = Symbol('_is_ViewMaterialSelectDropdownItemComponent0_default');
  material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialSelectDropdownItemComponent0 extends component_view.ComponentView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select_dropdown_item.dart" : null;
      }
      build() {
        let _ctx = this.ctx;
        let parentRenderNode = this.initViewRoot();
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent1(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _text_1 = dom_helpers.appendText(parentRenderNode, " ");
        let _anchor_2 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent2(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        let _text_3 = dom_helpers.appendText(parentRenderNode, "\n \n");
        let _anchor_4 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_4] = new view_container.ViewContainer.new(4, null, this, _anchor_4);
        let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent6(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
        let _text_5 = dom_helpers.appendText(parentRenderNode, "\n ");
        let _anchor_6 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_6] = new view_container.ViewContainer.new(6, null, this, _anchor_6);
        let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent7(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
        this.project(parentRenderNode, 0);
        parentRenderNode[$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleClick')));
        parentRenderNode[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyPress')));
        parentRenderNode[$addEventListener]("mousedown", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'preventTextSelectionIfShiftKey')));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = !dart.test(_ctx.supportsMultiSelect) && dart.test(_ctx.isSelected);
        this[_NgIf_2_9].ngIf = dart.test(_ctx.supportsMultiSelect) && !dart.test(_ctx.hideCheckbox);
        this[_NgIf_4_9].ngIf = _ctx.valueHasLabel;
        this[_NgIf_6_9].ngIf = _ctx.componentType != null || _ctx.componentFactory != null;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        this[_appEl_6].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
        this[_appEl_4].destroyNestedViews();
        this[_appEl_6].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let t0, t0$;
        let _ctx = this.ctx;
        let currVal_0 = _ctx.tabIndex;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "tabindex", currVal_0);
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.ariaRole;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "role", currVal_1);
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.disabledStr;
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "aria-disabled", currVal_2);
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = _ctx.disabled;
        if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, null, null))) {
          dom_helpers.updateClassBindingNonHtml(this.rootElement, "is-disabled", currVal_3);
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.disabled;
        if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, null, null))) {
          dom_helpers.updateClassBindingNonHtml(this.rootElement, "disabled", currVal_4);
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.supportsMultiSelect;
        if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, null, null))) {
          dom_helpers.updateClassBindingNonHtml(this.rootElement, "multiselect", currVal_5);
          this[_expr_5] = currVal_5;
        }
        let currVal_6 = _ctx.isAriaChecked;
        if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "aria-checked", (t0 = currVal_6, t0 == null ? null : dart.toString(t0)));
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = _ctx.isSelected;
        if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, null, null))) {
          dom_helpers.updateClassBindingNonHtml(this.rootElement, "selected", currVal_7);
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = _ctx.isHidden;
        if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, null, null))) {
          dom_helpers.updateClassBindingNonHtml(this.rootElement, "hidden", currVal_8);
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = _ctx.id;
        if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "id", currVal_9);
          this[_expr_9] = currVal_9;
        }
        let currVal_10 = _ctx.isSelected;
        if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, null, null))) {
          dom_helpers.updateAttribute(this.rootElement, "aria-selected", (t0$ = currVal_10, t0$ == null ? null : dart.toString(t0$)));
          this[_expr_10] = currVal_10;
        }
      }
      static _debugClearComponentStyles() {
        material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._componentStyles = null;
      }
      initComponentStyles() {
        let styles = material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._componentStyles;
        if (styles == null) {
          material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponent, material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._debugComponentUrl);
          if (dart.test(optimizations.isDevMode)) {
            style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
          }
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialSelectDropdownItemComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_appEl_4] = null;
      this[_NgIf_4_9] = null;
      this[_appEl_6] = null;
      this[_NgIf_6_9] = null;
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
      ViewMaterialSelectDropdownItemComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
      this.initComponentStyles();
      this.rootElement = HtmlElementL().as(html.document[$createElement]("material-select-dropdown-item"));
      this.updateChildClassNonHtml(this.rootElement, "item");
    }).prototype = ViewMaterialSelectDropdownItemComponent0.prototype;
    dart.addTypeTests(ViewMaterialSelectDropdownItemComponent0);
    ViewMaterialSelectDropdownItemComponent0.prototype[_is_ViewMaterialSelectDropdownItemComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialSelectDropdownItemComponent0);
    dart.setMethodSignature(ViewMaterialSelectDropdownItemComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialSelectDropdownItemComponent0.__proto__),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ViewMaterialSelectDropdownItemComponent0, L0);
    dart.setFieldSignature(ViewMaterialSelectDropdownItemComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialSelectDropdownItemComponent0.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
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
      [_expr_10]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialSelectDropdownItemComponent0;
  });
  material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0 = material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$();
  dart.defineLazy(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0, {
    /*material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0, _is_ViewMaterialSelectDropdownItemComponent0_default);
  const _is__ViewMaterialSelectDropdownItemComponent1_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent1_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(HtmlElementL().as(_el_0), "selected-accent mixin");
        this.addShimC(HtmlElementL().as(_el_0));
        this.initRootNode(_el_0);
      }
    }
    (_ViewMaterialSelectDropdownItemComponent1.new = function(parentView, parentIndex) {
      _ViewMaterialSelectDropdownItemComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectDropdownItemComponent1.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent1);
    _ViewMaterialSelectDropdownItemComponent1.prototype[_is__ViewMaterialSelectDropdownItemComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent1);
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent1.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent1, L0);
    return _ViewMaterialSelectDropdownItemComponent1;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1, _is__ViewMaterialSelectDropdownItemComponent1_default);
  const _is__ViewMaterialSelectDropdownItemComponent2_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent2_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialSelectDropdownItemComponent2 extends embedded_view.EmbeddedView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent3(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _text_1 = dom_helpers.createText("  ");
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent4(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0], _text_1, this[_appEl_2]]), null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = !dart.test(_ctx.useCheckMarks);
        this[_NgIf_2_9].ngIf = _ctx.useCheckMarks;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent2.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      _ViewMaterialSelectDropdownItemComponent2.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectDropdownItemComponent2.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent2);
    _ViewMaterialSelectDropdownItemComponent2.prototype[_is__ViewMaterialSelectDropdownItemComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent2);
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent2.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent2, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent2.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
    }));
    return _ViewMaterialSelectDropdownItemComponent2;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2, _is__ViewMaterialSelectDropdownItemComponent2_default);
  var _compView_0 = dart.privateName(material_select_dropdown_item$46template, "_compView_0");
  var _MaterialCheckboxComponent_0_5 = dart.privateName(material_select_dropdown_item$46template, "_MaterialCheckboxComponent_0_5");
  var C1;
  const _is__ViewMaterialSelectDropdownItemComponent3_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent3_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent3 extends embedded_view.EmbeddedView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootElement;
        _el_0.tabIndex = -1;
        this.addShimC(_el_0);
        this[_MaterialCheckboxComponent_0_5] = new material_checkbox.MaterialCheckboxComponent.new(_el_0, this[_compView_0], null, "-1", null);
        this[_compView_0].createAndProject(this[_MaterialCheckboxComponent_0_5], JSArrayOfObjectL().of([C1 || CT.C1]));
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
          return this[_MaterialCheckboxComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.firstCheck;
        changed = false;
        let currVal_0 = _ctx.disabled;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "disabled", "package:angular_components/material_select/material_select_item.html"))) {
          this[_MaterialCheckboxComponent_0_5].disabled = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.isSelected;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "isSelected", "package:angular_components/material_select/material_select_item.html"))) {
          this[_MaterialCheckboxComponent_0_5].checked = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialCheckboxComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent3.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialCheckboxComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      _ViewMaterialSelectDropdownItemComponent3.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectDropdownItemComponent3.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent3);
    _ViewMaterialSelectDropdownItemComponent3.prototype[_is__ViewMaterialSelectDropdownItemComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent3);
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent3.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent3, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent3.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_checkbox$46template.ViewMaterialCheckboxComponent0)),
      [_MaterialCheckboxComponent_0_5]: dart.fieldType(dart.legacy(material_checkbox.MaterialCheckboxComponent)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectDropdownItemComponent3;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3, _is__ViewMaterialSelectDropdownItemComponent3_default);
  var _appEl_1 = dart.privateName(material_select_dropdown_item$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_select_dropdown_item$46template, "_NgIf_1_9");
  const _is__ViewMaterialSelectDropdownItemComponent4_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent4_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialSelectDropdownItemComponent4 extends embedded_view.EmbeddedView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(HtmlElementL().as(_el_0), "check-container");
        this.addShimE(_el_0);
        let _anchor_1 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent5(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_1_9].ngIf = _ctx.isSelected;
        this[_appEl_1].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent4.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      _ViewMaterialSelectDropdownItemComponent4.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectDropdownItemComponent4.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent4);
    _ViewMaterialSelectDropdownItemComponent4.prototype[_is__ViewMaterialSelectDropdownItemComponent4_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent4);
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent4.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent4, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent4.__proto__),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
    }));
    return _ViewMaterialSelectDropdownItemComponent4;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4, _is__ViewMaterialSelectDropdownItemComponent4_default);
  var _GlyphComponent_0_5 = dart.privateName(material_select_dropdown_item$46template, "_GlyphComponent_0_5");
  const _is__ViewMaterialSelectDropdownItemComponent5_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent5_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent5 extends embedded_view.EmbeddedView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new glyph$46template.ViewGlyphComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootElement;
        dom_helpers.setAttribute(_el_0, "baseline", "");
        this.updateChildClassNonHtml(_el_0, "check");
        dom_helpers.setAttribute(_el_0, "icon", "check");
        this.addShimC(_el_0);
        this[_GlyphComponent_0_5] = new glyph.GlyphComponent.new(_el_0);
        this[_compView_0].create(this[_GlyphComponent_0_5]);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let changed = false;
        let firstCheck = this.firstCheck;
        changed = false;
        if (dart.test(firstCheck)) {
          this[_GlyphComponent_0_5].icon = "check";
          changed = true;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent5.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_GlyphComponent_0_5] = null;
      _ViewMaterialSelectDropdownItemComponent5.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectDropdownItemComponent5.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent5);
    _ViewMaterialSelectDropdownItemComponent5.prototype[_is__ViewMaterialSelectDropdownItemComponent5_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent5);
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent5.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent5, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent5.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(glyph$46template.ViewGlyphComponent0)),
      [_GlyphComponent_0_5]: dart.fieldType(dart.legacy(glyph.GlyphComponent))
    }));
    return _ViewMaterialSelectDropdownItemComponent5;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5, _is__ViewMaterialSelectDropdownItemComponent5_default);
  var _textBinding_1 = dart.privateName(material_select_dropdown_item$46template, "_textBinding_1");
  const _is__ViewMaterialSelectDropdownItemComponent6_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent6_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent6 extends embedded_view.EmbeddedView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(HtmlElementL().as(_el_0), "label");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        this.initRootNode(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.valueLabel));
      }
    }
    (_ViewMaterialSelectDropdownItemComponent6.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new text_binding.TextBinding.new();
      _ViewMaterialSelectDropdownItemComponent6.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectDropdownItemComponent6.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent6);
    _ViewMaterialSelectDropdownItemComponent6.prototype[_is__ViewMaterialSelectDropdownItemComponent6_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent6);
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent6, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent6.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent6, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent6.__proto__),
      [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialSelectDropdownItemComponent6;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6, _is__ViewMaterialSelectDropdownItemComponent6_default);
  var _DynamicComponent_0_8 = dart.privateName(material_select_dropdown_item$46template, "_DynamicComponent_0_8");
  const _is__ViewMaterialSelectDropdownItemComponent7_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent7_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent7 extends embedded_view.EmbeddedView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        let _ctx = this.ctx;
        this[_compView_0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootElement;
        this.updateChildClassNonHtml(_el_0, "dynamic-item");
        this.addShimC(_el_0);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DynamicComponentL(), dart.wrapType(DynamicComponentL()), dart.fn(() => new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentIndex)), this[_appEl_0]), VoidToDynamicComponentL())) : new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentIndex)), this[_appEl_0]);
        this[_compView_0].create(this[_DynamicComponent_0_8]);
        let subscription_0 = this[_DynamicComponent_0_8].onLoad.listen(this.eventHandler1(ComponentRefL(), ComponentRefL(), dart.bind(_ctx, 'onLoadCustomComponent')));
        this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        changed = false;
        let currVal_0 = _ctx.componentType;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "componentType", "package:angular_components/material_select/material_select_item.html"))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.componentFactory;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "componentFactory", "package:angular_components/material_select/material_select_item.html"))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.value;
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "value", "package:angular_components/material_select/material_select_item.html"))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent7.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_appEl_0] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      _ViewMaterialSelectDropdownItemComponent7.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialSelectDropdownItemComponent7.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent7);
    _ViewMaterialSelectDropdownItemComponent7.prototype[_is__ViewMaterialSelectDropdownItemComponent7_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent7);
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent7, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent7.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent7, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent7.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(dynamic_component$46template.ViewDynamicComponent0)),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DynamicComponent_0_8]: dart.fieldType(dart.legacy(dynamic_component.DynamicComponent)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectDropdownItemComponent7;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7, _is__ViewMaterialSelectDropdownItemComponent7_default);
  const _is__ViewMaterialSelectDropdownItemComponentHost0_default = Symbol('_is__ViewMaterialSelectDropdownItemComponentHost0_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialSelectDropdownItemComponent0OfTL = () => (ViewMaterialSelectDropdownItemComponent0OfTL = dart.constFn(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(TL())))();
    var MaterialSelectDropdownItemComponentOfTL = () => (MaterialSelectDropdownItemComponentOfTL = dart.constFn(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(TL())))();
    var MaterialSelectDropdownItemComponentLOfTL = () => (MaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectDropdownItemComponentOfTL())))();
    var VoidToMaterialSelectDropdownItemComponentLOfTL = () => (VoidToMaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.fnType(MaterialSelectDropdownItemComponentLOfTL(), [])))();
    class _ViewMaterialSelectDropdownItemComponentHost0 extends host_view.HostView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        this.componentView = new (ViewMaterialSelectDropdownItemComponent0OfTL()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectDropdownItemComponentLOfTL(), dart.wrapType(MaterialSelectDropdownItemComponentL()), dart.fn(() => new (MaterialSelectDropdownItemComponentOfTL()).new(_el_0, null, DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentIndex)), ActivationHandlerL().as(this.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentIndex)), IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)), this.componentView), VoidToMaterialSelectDropdownItemComponentLOfTL())) : new (MaterialSelectDropdownItemComponentOfTL()).new(_el_0, null, DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentIndex)), ActivationHandlerL().as(this.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentIndex)), IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)), this.componentView);
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasRendererL())) && 0 === nodeIndex) {
          return this.component;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let changed = false;
        let firstCheck = this.firstCheck;
        if (changed) {
          this.componentView.markAsCheckOnce();
        }
        this.componentView.detectHostChanges(firstCheck);
        this.componentView.detectChanges();
      }
      destroyInternal() {
        this.component.ngOnDestroy();
      }
    }
    (_ViewMaterialSelectDropdownItemComponentHost0.new = function() {
      _ViewMaterialSelectDropdownItemComponentHost0.__proto__.new.call(this);
      ;
    }).prototype = _ViewMaterialSelectDropdownItemComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponentHost0);
    _ViewMaterialSelectDropdownItemComponentHost0.prototype[_is__ViewMaterialSelectDropdownItemComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponentHost0);
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponentHost0.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponentHost0, L0);
    return _ViewMaterialSelectDropdownItemComponentHost0;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0, _is__ViewMaterialSelectDropdownItemComponentHost0_default);
  var C2;
  material_select_dropdown_item$46template.createMaterialSelectDropdownItemComponentFactory = function createMaterialSelectDropdownItemComponentFactory(T) {
    return new (component_factory.ComponentFactory$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T))))).new("material-select-dropdown-item", dart.gbind(C2 || CT.C2, dart.legacy(T)));
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent1 = function viewFactory_MaterialSelectDropdownItemComponent1(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent2 = function viewFactory_MaterialSelectDropdownItemComponent2(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent3 = function viewFactory_MaterialSelectDropdownItemComponent3(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent4 = function viewFactory_MaterialSelectDropdownItemComponent4(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent5 = function viewFactory_MaterialSelectDropdownItemComponent5(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent6 = function viewFactory_MaterialSelectDropdownItemComponent6(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent7 = function viewFactory_MaterialSelectDropdownItemComponent7(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponentHost0 = function viewFactory_MaterialSelectDropdownItemComponentHost0(T) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0$(dart.legacy(T))).new();
  };
  material_select_dropdown_item$46template.initReflector = function initReflector() {
    if (dart.test(material_select_dropdown_item$46template._visited)) {
      return;
    }
    material_select_dropdown_item$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialSelectDropdownItemComponentL()), material_select_dropdown_item$46template.createMaterialSelectDropdownItemComponentFactory(dart.dynamic));
    angular$46template.initReflector();
    dynamic_component$46template.initReflector();
    glyph$46template.initReflector();
    material_checkbox$46template.initReflector();
    activation_handler$46template.initReflector();
    handles_aria$46template.initReflector();
    material_select_item$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    selection_container$46template.initReflector();
    has_renderer$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_select_dropdown_item$46template, {
    get MaterialSelectDropdownItemComponentNgFactory() {
      return material_select_dropdown_item$46template._MaterialSelectDropdownItemComponentNgFactory;
    }
  });
  var C4;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  dart.defineLazy(material_select_dropdown_item$46template, {
    /*material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponent*/get styles$MaterialSelectDropdownItemComponent() {
      return [material_select_dropdown_item$46scss$46css$46shim.styles];
    },
    /*material_select_dropdown_item$46template._MaterialSelectDropdownItemComponentNgFactory*/get _MaterialSelectDropdownItemComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponentHost*/get styles$MaterialSelectDropdownItemComponentHost() {
      return C1 || CT.C1;
    },
    /*material_select_dropdown_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/material_select_dropdown_item.template", {
    "package:angular_components/material_select/material_select_dropdown_item.template.dart": material_select_dropdown_item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_dropdown_item.template.dart"],"names":[],"mappings":"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","file":"material_select_dropdown_item.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_dropdown_item$46template: material_select_dropdown_item$46template
  };
}));

//# sourceMappingURL=material_select_dropdown_item.template.unsound.ddc.js.map
