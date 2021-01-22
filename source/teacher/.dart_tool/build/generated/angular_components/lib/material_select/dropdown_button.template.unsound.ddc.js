define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/material_select/dropdown_button', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus_interface', 'packages/angular/angular.template', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/mixins/button_wrapper.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/button_decorator/button_decorator.scss.css.shim', 'packages/angular_components/material_select/dropdown_button.scss.css.shim'], (function load__packages__angular_components__material_select__dropdown_button_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__material_select__dropdown_button, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__glyph__glyph$46template, packages__angular_components__glyph__glyph, packages__angular_components__interfaces__has_disabled, packages__angular_components__focus__focus_interface, packages__angular__angular$46template, packages__angular_components__focus__focus_interface$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__mixins__button_wrapper$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__button_decorator__button_decorator$46scss$46css$46shim, packages__angular_components__material_select__dropdown_button$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
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
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const glyph$46template = packages__angular_components__glyph__glyph$46template.glyph__glyph$46template;
  const glyph = packages__angular_components__glyph__glyph.glyph__glyph;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus_interface$46template = packages__angular_components__focus__focus_interface$46template.focus__focus_interface$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const button_wrapper$46template = packages__angular_components__mixins__button_wrapper$46template.mixins__button_wrapper$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const button_decorator$46scss$46css$46shim = packages__angular_components__button_decorator__button_decorator$46scss$46css$46shim.button_decorator__button_decorator$46scss$46css$46shim;
  const dropdown_button$46scss$46css$46shim = packages__angular_components__material_select__dropdown_button$46scss$46css$46shim.material_select__dropdown_button$46scss$46css$46shim;
  var dropdown_button$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var VoidToKeyboardOnlyFocusIndicatorDirectiveL = () => (VoidToKeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.fnType(KeyboardOnlyFocusIndicatorDirectiveL(), [])))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var DropdownButtonComponentL = () => (DropdownButtonComponentL = dart.constFn(dart.legacy(dropdown_button.DropdownButtonComponent)))();
  var ComponentFactoryOfDropdownButtonComponentL = () => (ComponentFactoryOfDropdownButtonComponentL = dart.constFn(component_factory.ComponentFactory$(DropdownButtonComponentL())))();
  var HostViewOfDropdownButtonComponentL = () => (HostViewOfDropdownButtonComponentL = dart.constFn(host_view.HostView$(DropdownButtonComponentL())))();
  var HostViewLOfDropdownButtonComponentL = () => (HostViewLOfDropdownButtonComponentL = dart.constFn(dart.legacy(HostViewOfDropdownButtonComponentL())))();
  var VoidToHostViewLOfDropdownButtonComponentL = () => (VoidToHostViewLOfDropdownButtonComponentL = dart.constFn(dart.fnType(HostViewLOfDropdownButtonComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/dropdown_button.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(dropdown_button$46template.viewFactory_DropdownButtonComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(dropdown_button$46template.viewFactory_DropdownButtonComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(dropdown_button$46template.viewFactory_DropdownButtonComponent3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(dropdown_button$46template.ViewDropdownButtonComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C4() {
      return C4 = dart.fn(dropdown_button$46template.viewFactory_DropdownButtonComponentHost0, VoidToHostViewLOfDropdownButtonComponentL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfDropdownButtonComponentL().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "dropdown-button"
      });
    },
    get C6() {
      return C6 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _ButtonDirective_0_5 = dart.privateName(dropdown_button$46template, "_ButtonDirective_0_5");
  var _KeyboardOnlyFocusIndicatorDirective_0_6 = dart.privateName(dropdown_button$46template, "_KeyboardOnlyFocusIndicatorDirective_0_6");
  var _appEl_1 = dart.privateName(dropdown_button$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(dropdown_button$46template, "_NgIf_1_9");
  var _appEl_3 = dart.privateName(dropdown_button$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(dropdown_button$46template, "_NgIf_3_9");
  var _appEl_4 = dart.privateName(dropdown_button$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(dropdown_button$46template, "_NgIf_4_9");
  var _expr_1 = dart.privateName(dropdown_button$46template, "_expr_1");
  var _expr_2 = dart.privateName(dropdown_button$46template, "_expr_2");
  var _expr_3 = dart.privateName(dropdown_button$46template, "_expr_3");
  var _expr_4 = dart.privateName(dropdown_button$46template, "_expr_4");
  var _expr_5 = dart.privateName(dropdown_button$46template, "_expr_5");
  var _expr_6 = dart.privateName(dropdown_button$46template, "_expr_6");
  var _expr_7 = dart.privateName(dropdown_button$46template, "_expr_7");
  var _expr_8 = dart.privateName(dropdown_button$46template, "_expr_8");
  var _expr_9 = dart.privateName(dropdown_button$46template, "_expr_9");
  var _expr_10 = dart.privateName(dropdown_button$46template, "_expr_10");
  var _expr_11 = dart.privateName(dropdown_button$46template, "_expr_11");
  var _expr_12 = dart.privateName(dropdown_button$46template, "_expr_12");
  var _el_0 = dart.privateName(dropdown_button$46template, "_el_0");
  var C0;
  var C1;
  var C2;
  var _handleEvent_0 = dart.privateName(dropdown_button$46template, "_handleEvent_0");
  var _handleEvent_1 = dart.privateName(dropdown_button$46template, "_handleEvent_1");
  var _handleEvent_2 = dart.privateName(dropdown_button$46template, "_handleEvent_2");
  var C3;
  dropdown_button$46template.ViewDropdownButtonComponent0 = class ViewDropdownButtonComponent0 extends component_view.ComponentView$(dart.legacy(dropdown_button.DropdownButtonComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_select/dropdown_button.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "button");
      dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)));
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = dom_helpers.appendText(this[_el_0], " ");
      this.project(this[_el_0], 0);
      let _anchor_3 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C1 || CT.C1);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _anchor_4 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_4] = new view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C2 || CT.C2);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      this[_el_0][$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1)));
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_2)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'keydown')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
      _ctx.button = this[_ButtonDirective_0_5].instance;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && dart.notNull(nodeIndex) <= 3) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0;
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let currVal_10 = _ctx.ariaRole;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "ariaRole", "package:angular_components/material_select/dropdown_button.html"))) {
        this[_ButtonDirective_0_5].instance.role = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "disabled", "package:angular_components/material_select/dropdown_button.html"))) {
        this[_ButtonDirective_0_5].instance.disabled = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.tabbable;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "tabbable", "package:angular_components/material_select/dropdown_button.html"))) {
        this[_ButtonDirective_0_5].instance.tabbable = currVal_12;
        this[_expr_12] = currVal_12;
      }
      this[_NgIf_1_9].ngIf = _ctx.buttonText != null;
      this[_NgIf_3_9].ngIf = _ctx.buttonIcon != null;
      this[_NgIf_4_9].ngIf = _ctx.invalid;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      if (dart.test(firstCheck)) {
        if (_ctx.uuid != null) {
          dom_helpers.updateAttribute(this[_el_0], "id", _ctx.uuid);
        }
      }
      let currVal_1 = _ctx.buttonAriaLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "buttonAriaLabel", "package:angular_components/material_select/dropdown_button.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.ariaLabelledBy;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "ariaLabelledBy", "package:angular_components/material_select/dropdown_button.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-labelledby", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.ariaDescribedBy;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "ariaDescribedBy", "package:angular_components/material_select/dropdown_button.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-describedby", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.showButtonBorder;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "showButtonBorder", "package:angular_components/material_select/dropdown_button.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "border", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.invalid;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "invalid", "package:angular_components/material_select/dropdown_button.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "invalid", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.popupType;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "popupType", "package:angular_components/material_select/dropdown_button.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-haspopup", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.ariaOwns;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "ariaOwns", "package:angular_components/material_select/dropdown_button.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-owns", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.ariaExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "ariaExpanded", "package:angular_components/material_select/dropdown_button.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-expanded", (t0 = currVal_8, t0 == null ? null : dart.toString(t0)));
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.ariaActiveDescendant;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "ariaActiveDescendant", "package:angular_components/material_select/dropdown_button.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-activedescendant", currVal_9);
        this[_expr_9] = currVal_9;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.handleFocus(FocusEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onFocus(EventL().as($36event));
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.handleBlur(FocusEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].resetOutline();
    }
    [_handleEvent_2]($36event) {
      this[_ButtonDirective_0_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onMouseInteraction();
    }
    static _debugClearComponentStyles() {
      dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles;
      if (styles == null) {
        dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(dropdown_button$46template.styles$DropdownButtonComponent, dropdown_button$46template.ViewDropdownButtonComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C3 || CT.C3);
        }
      }
      this.componentStyles = styles;
    }
  };
  (dropdown_button$46template.ViewDropdownButtonComponent0.new = function(parentView, parentIndex) {
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
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
    this[_el_0] = null;
    dropdown_button$46template.ViewDropdownButtonComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("dropdown-button"));
  }).prototype = dropdown_button$46template.ViewDropdownButtonComponent0.prototype;
  dart.addTypeTests(dropdown_button$46template.ViewDropdownButtonComponent0);
  dart.addTypeCaches(dropdown_button$46template.ViewDropdownButtonComponent0);
  dart.setMethodSignature(dropdown_button$46template.ViewDropdownButtonComponent0, () => ({
    __proto__: dart.getMethods(dropdown_button$46template.ViewDropdownButtonComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dropdown_button$46template.ViewDropdownButtonComponent0, L0);
  dart.setFieldSignature(dropdown_button$46template.ViewDropdownButtonComponent0, () => ({
    __proto__: dart.getFields(dropdown_button$46template.ViewDropdownButtonComponent0.__proto__),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
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
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(dropdown_button$46template.ViewDropdownButtonComponent0, {
    /*dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(dropdown_button$46template, "_textBinding_1");
  dropdown_button$46template._ViewDropdownButtonComponent1 = class _ViewDropdownButtonComponent1 extends embedded_view.EmbeddedView$(dart.legacy(dropdown_button.DropdownButtonComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "button-text");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.buttonText));
    }
  };
  (dropdown_button$46template._ViewDropdownButtonComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    dropdown_button$46template._ViewDropdownButtonComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = dropdown_button$46template._ViewDropdownButtonComponent1.prototype;
  dart.addTypeTests(dropdown_button$46template._ViewDropdownButtonComponent1);
  dart.addTypeCaches(dropdown_button$46template._ViewDropdownButtonComponent1);
  dart.setMethodSignature(dropdown_button$46template._ViewDropdownButtonComponent1, () => ({
    __proto__: dart.getMethods(dropdown_button$46template._ViewDropdownButtonComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dropdown_button$46template._ViewDropdownButtonComponent1, L0);
  dart.setFieldSignature(dropdown_button$46template._ViewDropdownButtonComponent1, () => ({
    __proto__: dart.getFields(dropdown_button$46template._ViewDropdownButtonComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _compView_0 = dart.privateName(dropdown_button$46template, "_compView_0");
  var _GlyphComponent_0_5 = dart.privateName(dropdown_button$46template, "_GlyphComponent_0_5");
  var _expr_0 = dart.privateName(dropdown_button$46template, "_expr_0");
  dropdown_button$46template._ViewDropdownButtonComponent2 = class _ViewDropdownButtonComponent2 extends embedded_view.EmbeddedView$(dart.legacy(dropdown_button.DropdownButtonComponent)) {
    build() {
      this[_compView_0] = new glyph$46template.ViewGlyphComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "icon");
      this.addShimC(_el_0);
      this[_GlyphComponent_0_5] = new glyph.GlyphComponent.new(_el_0);
      this[_compView_0].create(this[_GlyphComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.buttonIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "buttonIcon", "package:angular_components/material_select/dropdown_button.html"))) {
        this[_GlyphComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (dropdown_button$46template._ViewDropdownButtonComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_GlyphComponent_0_5] = null;
    this[_expr_0] = null;
    dropdown_button$46template._ViewDropdownButtonComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = dropdown_button$46template._ViewDropdownButtonComponent2.prototype;
  dart.addTypeTests(dropdown_button$46template._ViewDropdownButtonComponent2);
  dart.addTypeCaches(dropdown_button$46template._ViewDropdownButtonComponent2);
  dart.setMethodSignature(dropdown_button$46template._ViewDropdownButtonComponent2, () => ({
    __proto__: dart.getMethods(dropdown_button$46template._ViewDropdownButtonComponent2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dropdown_button$46template._ViewDropdownButtonComponent2, L0);
  dart.setFieldSignature(dropdown_button$46template._ViewDropdownButtonComponent2, () => ({
    __proto__: dart.getFields(dropdown_button$46template._ViewDropdownButtonComponent2.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(glyph$46template.ViewGlyphComponent0)),
    [_GlyphComponent_0_5]: dart.fieldType(dart.legacy(glyph.GlyphComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dropdown_button$46template._ViewDropdownButtonComponent3 = class _ViewDropdownButtonComponent3 extends embedded_view.EmbeddedView$(dart.legacy(dropdown_button.DropdownButtonComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "error-text");
      dom_helpers.setAttribute(this[_el_0], "role", "alert");
      this.addShimC(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      this.initRootNode(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.invalid;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "invalid", "package:angular_components/material_select/dropdown_button.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "invalid", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = interpolate.interpolate0(!dart.test(_ctx.invalid));
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "{{!invalid}}", "package:angular_components/material_select/dropdown_button.html"))) {
        dom_helpers.setAttribute(this[_el_0], "aria-hidden", StringL().as(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.error));
    }
  };
  (dropdown_button$46template._ViewDropdownButtonComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    dropdown_button$46template._ViewDropdownButtonComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = dropdown_button$46template._ViewDropdownButtonComponent3.prototype;
  dart.addTypeTests(dropdown_button$46template._ViewDropdownButtonComponent3);
  dart.addTypeCaches(dropdown_button$46template._ViewDropdownButtonComponent3);
  dart.setMethodSignature(dropdown_button$46template._ViewDropdownButtonComponent3, () => ({
    __proto__: dart.getMethods(dropdown_button$46template._ViewDropdownButtonComponent3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dropdown_button$46template._ViewDropdownButtonComponent3, L0);
  dart.setFieldSignature(dropdown_button$46template._ViewDropdownButtonComponent3, () => ({
    __proto__: dart.getFields(dropdown_button$46template._ViewDropdownButtonComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dropdown_button$46template._ViewDropdownButtonComponentHost0 = class _ViewDropdownButtonComponentHost0 extends host_view.HostView$(dart.legacy(dropdown_button.DropdownButtonComponent)) {
    build() {
      this.componentView = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new dropdown_button.DropdownButtonComponent.new();
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(FocusableL())) && 0 === nodeIndex) {
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
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
  };
  (dropdown_button$46template._ViewDropdownButtonComponentHost0.new = function() {
    dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = dropdown_button$46template._ViewDropdownButtonComponentHost0.prototype;
  dart.addTypeTests(dropdown_button$46template._ViewDropdownButtonComponentHost0);
  dart.addTypeCaches(dropdown_button$46template._ViewDropdownButtonComponentHost0);
  dart.setMethodSignature(dropdown_button$46template._ViewDropdownButtonComponentHost0, () => ({
    __proto__: dart.getMethods(dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(dropdown_button$46template._ViewDropdownButtonComponentHost0, L0);
  var C4;
  dropdown_button$46template.createDropdownButtonComponentFactory = function createDropdownButtonComponentFactory() {
    return new (ComponentFactoryOfDropdownButtonComponentL()).new("dropdown-button", C4 || CT.C4);
  };
  dropdown_button$46template.viewFactory_DropdownButtonComponent1 = function viewFactory_DropdownButtonComponent1(parentView, parentIndex) {
    return new dropdown_button$46template._ViewDropdownButtonComponent1.new(parentView, parentIndex);
  };
  dropdown_button$46template.viewFactory_DropdownButtonComponent2 = function viewFactory_DropdownButtonComponent2(parentView, parentIndex) {
    return new dropdown_button$46template._ViewDropdownButtonComponent2.new(parentView, parentIndex);
  };
  dropdown_button$46template.viewFactory_DropdownButtonComponent3 = function viewFactory_DropdownButtonComponent3(parentView, parentIndex) {
    return new dropdown_button$46template._ViewDropdownButtonComponent3.new(parentView, parentIndex);
  };
  dropdown_button$46template.viewFactory_DropdownButtonComponentHost0 = function viewFactory_DropdownButtonComponentHost0() {
    return new dropdown_button$46template._ViewDropdownButtonComponentHost0.new();
  };
  dropdown_button$46template.initReflector = function initReflector() {
    if (dart.test(dropdown_button$46template._visited)) {
      return;
    }
    dropdown_button$46template._visited = true;
    reflector.registerComponent(dart.wrapType(DropdownButtonComponentL()), dropdown_button$46template.createDropdownButtonComponentFactory());
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    focus_interface$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    glyph$46template.initReflector();
    has_disabled$46template.initReflector();
    button_wrapper$46template.initReflector();
    focusable_mixin$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(dropdown_button$46template, {
    get DropdownButtonComponentNgFactory() {
      return dropdown_button$46template._DropdownButtonComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C5;
  var C6;
  dart.defineLazy(dropdown_button$46template, {
    /*dropdown_button$46template.styles$DropdownButtonComponent*/get styles$DropdownButtonComponent() {
      return [button_decorator$46scss$46css$46shim.styles, dropdown_button$46scss$46css$46shim.styles];
    },
    /*dropdown_button$46template._DropdownButtonComponentNgFactory*/get _DropdownButtonComponentNgFactory() {
      return C5 || CT.C5;
    },
    /*dropdown_button$46template.styles$DropdownButtonComponentHost*/get styles$DropdownButtonComponentHost() {
      return C6 || CT.C6;
    },
    /*dropdown_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/dropdown_button.template", {
    "package:angular_components/material_select/dropdown_button.template.dart": dropdown_button$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_button.template.dart"],"names":[],"mappings":"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","file":"dropdown_button.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__dropdown_button$46template: dropdown_button$46template
  };
}));

//# sourceMappingURL=dropdown_button.template.unsound.ddc.js.map
