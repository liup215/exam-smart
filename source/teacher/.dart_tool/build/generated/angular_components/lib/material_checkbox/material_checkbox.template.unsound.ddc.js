define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_checkbox/material_checkbox.scss.css.shim'], (function load__packages__angular_components__material_checkbox__material_checkbox_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular__src__runtime__interpolate, packages__angular_components__material_checkbox__material_checkbox, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_ripple__material_ripple, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__ui__icon$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_forms__angular_forms$46template, packages__angular_components__material_checkbox__material_checkbox$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_checkbox = packages__angular_components__material_checkbox__material_checkbox.material_checkbox__material_checkbox;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const icon$46template = packages__angular_components__model__ui__icon$46template.model__ui__icon$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  const material_checkbox$46scss$46css$46shim = packages__angular_components__material_checkbox__material_checkbox$46scss$46css$46shim.material_checkbox__material_checkbox$46scss$46css$46shim;
  var material_checkbox$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $setProperty = dartx.setProperty;
  var $toString = dartx.toString;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var MaterialCheckboxComponentL = () => (MaterialCheckboxComponentL = dart.constFn(dart.legacy(material_checkbox.MaterialCheckboxComponent)))();
  var ComponentFactoryOfMaterialCheckboxComponentL = () => (ComponentFactoryOfMaterialCheckboxComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialCheckboxComponentL())))();
  var HostViewOfMaterialCheckboxComponentL = () => (HostViewOfMaterialCheckboxComponentL = dart.constFn(host_view.HostView$(MaterialCheckboxComponentL())))();
  var HostViewLOfMaterialCheckboxComponentL = () => (HostViewLOfMaterialCheckboxComponentL = dart.constFn(dart.legacy(HostViewOfMaterialCheckboxComponentL())))();
  var VoidToHostViewLOfMaterialCheckboxComponentL = () => (VoidToHostViewLOfMaterialCheckboxComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialCheckboxComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_checkbox/material_checkbox.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_checkbox$46template.viewFactory_MaterialCheckboxComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_checkbox$46template.ViewMaterialCheckboxComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.fn(material_checkbox$46template.viewFactory_MaterialCheckboxComponentHost0, VoidToHostViewLOfMaterialCheckboxComponentL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfMaterialCheckboxComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-checkbox"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_4 = dart.privateName(material_checkbox$46template, "_textBinding_4");
  var _compView_1 = dart.privateName(material_checkbox$46template, "_compView_1");
  var _MaterialIconComponent_1_5 = dart.privateName(material_checkbox$46template, "_MaterialIconComponent_1_5");
  var _appEl_2 = dart.privateName(material_checkbox$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_checkbox$46template, "_NgIf_2_9");
  var _expr_0 = dart.privateName(material_checkbox$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_checkbox$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_checkbox$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_checkbox$46template, "_expr_3");
  var _expr_5 = dart.privateName(material_checkbox$46template, "_expr_5");
  var _expr_7 = dart.privateName(material_checkbox$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_checkbox$46template, "_expr_8");
  var _el_0 = dart.privateName(material_checkbox$46template, "_el_0");
  var _el_1 = dart.privateName(material_checkbox$46template, "_el_1");
  var _el_3 = dart.privateName(material_checkbox$46template, "_el_3");
  var C0;
  var C1;
  material_checkbox$46template.ViewMaterialCheckboxComponent0 = class ViewMaterialCheckboxComponent0 extends component_view.ComponentView$(dart.legacy(material_checkbox.MaterialCheckboxComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_checkbox/material_checkbox.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "icon-container");
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      this[_el_0][$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "aria-hidden", "true");
      this.updateChildClassNonHtml(this[_el_1], "icon");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5]);
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C0 || CT.C0);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_3], "content");
      this.addShimC(this[_el_3]);
      this[_el_3][$append](this[_textBinding_4].element);
      let _text_5 = dom_helpers.appendText(this[_el_3], " ");
      this.project(this[_el_3], 0);
      parentRenderNode[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyUp')));
      parentRenderNode[$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleClick')));
      parentRenderNode[$addEventListener]("mousedown", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleMouseDown')));
      parentRenderNode[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyPress')));
      parentRenderNode[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'handleFocus')));
      parentRenderNode[$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'handleBlur')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_3 = _ctx.icon;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "icon", "package:angular_components/material_checkbox/material_checkbox.html"))) {
        this[_MaterialIconComponent_1_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.disabled);
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.showFocus;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "showFocus", "package:angular_components/material_checkbox/material_checkbox.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "focus", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.themeColor;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "themeColor", "package:angular_components/material_checkbox/material_checkbox.html"))) {
        this[_el_1].style[$setProperty]("color", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.checked) || dart.test(_ctx.indeterminate);
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "checked || indeterminate", "package:angular_components/material_checkbox/material_checkbox.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_1], "filled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      if (dart.test(firstCheck)) {
        if (_ctx.contentId != null) {
          dom_helpers.setProperty(this[_el_3], "id", _ctx.contentId);
        }
      }
      this[_textBinding_4].updateText(interpolate.interpolateString0(_ctx.label));
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_compView_1].destroyInternalState();
    }
    detectHostChanges(firstCheck) {
      let t0;
      let _ctx = this.ctx;
      if (dart.test(firstCheck)) {
        if (_ctx.role != null) {
          dom_helpers.updateAttribute(this.rootElement, "role", _ctx.role);
        }
        if (_ctx.contentId != null) {
          dom_helpers.updateAttribute(this.rootElement, "aria-labelledby", _ctx.contentId);
        }
      }
      let currVal_5 = _ctx.tabIndex;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "tabindex", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_7 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "disabled", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "aria-disabled", (t0 = currVal_8, t0 == null ? null : dart.toString(t0)));
        this[_expr_8] = currVal_8;
      }
    }
    static _debugClearComponentStyles() {
      material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles;
      if (styles == null) {
        material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_checkbox$46template.styles$MaterialCheckboxComponent, material_checkbox$46template.ViewMaterialCheckboxComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_checkbox$46template.ViewMaterialCheckboxComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new text_binding.TextBinding.new();
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    material_checkbox$46template.ViewMaterialCheckboxComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-checkbox"));
    this.updateChildClassNonHtml(this.rootElement, "themeable");
  }).prototype = material_checkbox$46template.ViewMaterialCheckboxComponent0.prototype;
  dart.addTypeTests(material_checkbox$46template.ViewMaterialCheckboxComponent0);
  dart.addTypeCaches(material_checkbox$46template.ViewMaterialCheckboxComponent0);
  dart.setMethodSignature(material_checkbox$46template.ViewMaterialCheckboxComponent0, () => ({
    __proto__: dart.getMethods(material_checkbox$46template.ViewMaterialCheckboxComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_checkbox$46template.ViewMaterialCheckboxComponent0, L0);
  dart.setFieldSignature(material_checkbox$46template.ViewMaterialCheckboxComponent0, () => ({
    __proto__: dart.getFields(material_checkbox$46template.ViewMaterialCheckboxComponent0.__proto__),
    [_textBinding_4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element)),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_checkbox$46template.ViewMaterialCheckboxComponent0, {
    /*material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_checkbox$46template, "_compView_0");
  var _MaterialRippleComponent_0_5 = dart.privateName(material_checkbox$46template, "_MaterialRippleComponent_0_5");
  material_checkbox$46template._ViewMaterialCheckboxComponent1 = class _ViewMaterialCheckboxComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_checkbox.MaterialCheckboxComponent)) {
    build() {
      this[_compView_0] = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "ripple");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_MaterialRippleComponent_0_5] = new material_ripple.MaterialRippleComponent.new(HtmlElementL().as(this[_el_0]));
      this[_compView_0].create(this[_MaterialRippleComponent_0_5]);
      this.initRootNode(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.rippleColor;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "rippleColor", "package:angular_components/material_checkbox/material_checkbox.html"))) {
        this[_el_0].style[$setProperty]("color", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (material_checkbox$46template._ViewMaterialCheckboxComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    this[_expr_0] = null;
    this[_el_0] = null;
    material_checkbox$46template._ViewMaterialCheckboxComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_checkbox$46template._ViewMaterialCheckboxComponent1.prototype;
  dart.addTypeTests(material_checkbox$46template._ViewMaterialCheckboxComponent1);
  dart.addTypeCaches(material_checkbox$46template._ViewMaterialCheckboxComponent1);
  dart.setMethodSignature(material_checkbox$46template._ViewMaterialCheckboxComponent1, () => ({
    __proto__: dart.getMethods(material_checkbox$46template._ViewMaterialCheckboxComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_checkbox$46template._ViewMaterialCheckboxComponent1, L0);
  dart.setFieldSignature(material_checkbox$46template._ViewMaterialCheckboxComponent1, () => ({
    __proto__: dart.getFields(material_checkbox$46template._ViewMaterialCheckboxComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_ripple$46template.ViewMaterialRippleComponent0)),
    [_MaterialRippleComponent_0_5]: dart.fieldType(dart.legacy(material_ripple.MaterialRippleComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_checkbox$46template._ViewMaterialCheckboxComponentHost0 = class _ViewMaterialCheckboxComponentHost0 extends host_view.HostView$(dart.legacy(material_checkbox.MaterialCheckboxComponent)) {
    build() {
      this.componentView = new material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_checkbox.MaterialCheckboxComponent.new(_el_0, this.componentView, null, null, null);
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
  };
  (material_checkbox$46template._ViewMaterialCheckboxComponentHost0.new = function() {
    material_checkbox$46template._ViewMaterialCheckboxComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_checkbox$46template._ViewMaterialCheckboxComponentHost0.prototype;
  dart.addTypeTests(material_checkbox$46template._ViewMaterialCheckboxComponentHost0);
  dart.addTypeCaches(material_checkbox$46template._ViewMaterialCheckboxComponentHost0);
  dart.setMethodSignature(material_checkbox$46template._ViewMaterialCheckboxComponentHost0, () => ({
    __proto__: dart.getMethods(material_checkbox$46template._ViewMaterialCheckboxComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_checkbox$46template._ViewMaterialCheckboxComponentHost0, L0);
  var C2;
  material_checkbox$46template.createMaterialCheckboxComponentFactory = function createMaterialCheckboxComponentFactory() {
    return new (ComponentFactoryOfMaterialCheckboxComponentL()).new("material-checkbox", C2 || CT.C2);
  };
  material_checkbox$46template.viewFactory_MaterialCheckboxComponent1 = function viewFactory_MaterialCheckboxComponent1(parentView, parentIndex) {
    return new material_checkbox$46template._ViewMaterialCheckboxComponent1.new(parentView, parentIndex);
  };
  material_checkbox$46template.viewFactory_MaterialCheckboxComponentHost0 = function viewFactory_MaterialCheckboxComponentHost0() {
    return new material_checkbox$46template._ViewMaterialCheckboxComponentHost0.new();
  };
  material_checkbox$46template.initReflector = function initReflector() {
    if (dart.test(material_checkbox$46template._visited)) {
      return;
    }
    material_checkbox$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialCheckboxComponentL()), material_checkbox$46template.createMaterialCheckboxComponentFactory());
    angular$46template.initReflector();
    meta$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    material_icon$46template.initReflector();
    material_ripple$46template.initReflector();
    icon$46template.initReflector();
    events$46template.initReflector();
    id_generator$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_checkbox$46template, {
    get MaterialCheckboxComponentNgFactory() {
      return material_checkbox$46template._MaterialCheckboxComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  var C4;
  dart.defineLazy(material_checkbox$46template, {
    /*material_checkbox$46template.styles$MaterialCheckboxComponent*/get styles$MaterialCheckboxComponent() {
      return [material_checkbox$46scss$46css$46shim.styles];
    },
    /*material_checkbox$46template._MaterialCheckboxComponentNgFactory*/get _MaterialCheckboxComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*material_checkbox$46template.styles$MaterialCheckboxComponentHost*/get styles$MaterialCheckboxComponentHost() {
      return C4 || CT.C4;
    },
    /*material_checkbox$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_checkbox/material_checkbox.template", {
    "package:angular_components/material_checkbox/material_checkbox.template.dart": material_checkbox$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_checkbox.template.dart"],"names":[],"mappings":"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","file":"material_checkbox.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_checkbox__material_checkbox$46template: material_checkbox$46template
  };
}));

//# sourceMappingURL=material_checkbox.template.unsound.ddc.js.map
