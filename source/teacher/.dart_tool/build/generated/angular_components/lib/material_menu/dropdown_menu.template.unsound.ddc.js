define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_menu/dropdown_menu', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_menu/menu_popup_wrapper.template', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__material_menu__dropdown_menu_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_select__dropdown_button$46template, packages__angular_components__material_select__dropdown_button, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__material_menu__material_menu$46template, packages__angular_components__material_menu__material_menu, packages__angular_components__focus__focus_interface, packages__angular_components__material_menu__menu_popup_wrapper, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_menu__dropdown_menu, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_menu__menu_popup_wrapper$46template, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__utils__disposer__disposer$46template) {
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
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view = packages__angular__src__bootstrap__modules.src__core__linker__views__view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const dropdown_button$46template = packages__angular_components__material_select__dropdown_button$46template.material_select__dropdown_button$46template;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const menu_popup$46template = packages__angular_components__material_menu__material_menu$46template.material_menu__menu_popup$46template;
  const menu_popup = packages__angular_components__material_menu__material_menu.material_menu__menu_popup;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const menu_popup_wrapper = packages__angular_components__material_menu__menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const dropdown_menu = packages__angular_components__material_menu__dropdown_menu.material_menu__dropdown_menu;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const menu_popup_wrapper$46template = packages__angular_components__material_menu__menu_popup_wrapper$46template.material_menu__menu_popup_wrapper$46template;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var dropdown_menu$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var ExpandActionL = () => (ExpandActionL = dart.constFn(dart.legacy(menu_popup_wrapper.ExpandAction)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var DropdownMenuComponentL = () => (DropdownMenuComponentL = dart.constFn(dart.legacy(dropdown_menu.DropdownMenuComponent)))();
  var ComponentFactoryOfDropdownMenuComponentL = () => (ComponentFactoryOfDropdownMenuComponentL = dart.constFn(component_factory.ComponentFactory$(DropdownMenuComponentL())))();
  var HostViewOfDropdownMenuComponentL = () => (HostViewOfDropdownMenuComponentL = dart.constFn(host_view.HostView$(DropdownMenuComponentL())))();
  var HostViewLOfDropdownMenuComponentL = () => (HostViewLOfDropdownMenuComponentL = dart.constFn(dart.legacy(HostViewOfDropdownMenuComponentL())))();
  var VoidToHostViewLOfDropdownMenuComponentL = () => (VoidToHostViewLOfDropdownMenuComponentL = dart.constFn(dart.fnType(HostViewLOfDropdownMenuComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_menu/dropdown_menu.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(dropdown_menu$46template.ViewDropdownMenuComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(dropdown_menu$46template.viewFactory_DropdownMenuComponentHost0, VoidToHostViewLOfDropdownMenuComponentL());
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfDropdownMenuComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "dropdown-menu"
      });
    }
  }, false);
  var _compView_1 = dart.privateName(dropdown_menu$46template, "_compView_1");
  var _DropdownButtonComponent_1_5 = dart.privateName(dropdown_menu$46template, "_DropdownButtonComponent_1_5");
  var _PopupSourceDirective_1_7 = dart.privateName(dropdown_menu$46template, "_PopupSourceDirective_1_7");
  var _compView_5 = dart.privateName(dropdown_menu$46template, "_compView_5");
  var _MenuPopupComponent_5_5 = dart.privateName(dropdown_menu$46template, "_MenuPopupComponent_5_5");
  var _PopupSourceDirective_5_6 = dart.privateName(dropdown_menu$46template, "_PopupSourceDirective_5_6");
  var _expr_0 = dart.privateName(dropdown_menu$46template, "_expr_0");
  var _expr_1 = dart.privateName(dropdown_menu$46template, "_expr_1");
  var _expr_2 = dart.privateName(dropdown_menu$46template, "_expr_2");
  var _expr_3 = dart.privateName(dropdown_menu$46template, "_expr_3");
  var _expr_4 = dart.privateName(dropdown_menu$46template, "_expr_4");
  var _expr_5 = dart.privateName(dropdown_menu$46template, "_expr_5");
  var _expr_6 = dart.privateName(dropdown_menu$46template, "_expr_6");
  var _expr_7 = dart.privateName(dropdown_menu$46template, "_expr_7");
  var _expr_8 = dart.privateName(dropdown_menu$46template, "_expr_8");
  var _expr_9 = dart.privateName(dropdown_menu$46template, "_expr_9");
  var _expr_10 = dart.privateName(dropdown_menu$46template, "_expr_10");
  var _handleEvent_0 = dart.privateName(dropdown_menu$46template, "_handleEvent_0");
  var C0;
  dropdown_menu$46template.ViewDropdownMenuComponent0 = class ViewDropdownMenuComponent0 extends component_view.ComponentView$(dart.legacy(dropdown_menu.DropdownMenuComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/dropdown_menu.dart" : null;
    }
    build() {
      let t0, t0$;
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_1] = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      parentRenderNode[$append](_el_1);
      dom_helpers.setAttribute(_el_1, "popupSource", "");
      this[_DropdownButtonComponent_1_5] = new dropdown_button.DropdownButtonComponent.new();
      this[_PopupSourceDirective_1_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), _el_1, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), this[_DropdownButtonComponent_1_5], null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), _el_1, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), this[_DropdownButtonComponent_1_5], null);
      let _text_2 = dom_helpers.createText("\n  ");
      let _text_3 = dom_helpers.createText("\n");
      this[_compView_1].createAndProject(this[_DropdownButtonComponent_1_5], JSArrayOfObjectL().of([(t0 = [_text_2], (() => {
          t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](0)));
          t0[$addAll]([_text_3]);
          return t0;
        })())]));
      let _text_4 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_5] = new menu_popup$46template.ViewMenuPopupComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootElement;
      parentRenderNode[$append](_el_5);
      this[_MenuPopupComponent_5_5] = new menu_popup.MenuPopupComponent.new(_el_5);
      this[_PopupSourceDirective_5_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), _el_5, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentIndex)), _el_5, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentIndex)), null);
      let _text_6 = dom_helpers.createText("\n  ");
      let _text_7 = dom_helpers.createText("\n");
      this[_compView_5].createAndProject(this[_MenuPopupComponent_5_5], JSArrayOfObjectL().of([(t0$ = [_text_6], (() => {
          t0$[$addAll](core.Iterable.as(this.projectedNodes[$_get](1)));
          t0$[$addAll]([_text_7]);
          return t0$;
        })())]));
      let _text_8 = dom_helpers.appendText(parentRenderNode, "\n");
      _el_1[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
      let subscription_0 = this[_DropdownButtonComponent_1_5].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'handlePopupTriggerAction')));
      let subscription_1 = this[_MenuPopupComponent_5_5].expandActionChange.listen(this.eventHandler1(ExpandActionL(), ExpandActionL(), dart.bind(this, _handleEvent_0)));
      view.View.queryChangeDetectorRefs._set(this[_DropdownButtonComponent_1_5], this[_compView_1]);
      _ctx.dropdownButton = this[_DropdownButtonComponent_1_5];
      view.View.queryChangeDetectorRefs._set(this[_MenuPopupComponent_5_5], this[_compView_5]);
      _ctx.menuPopup = this[_MenuPopupComponent_5_5];
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_DropdownButtonComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_toggle = this[_PopupSourceDirective_1_7];
      changed = false;
      let currVal_0 = _ctx.buttonText;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "buttonText", "package:angular_components/material_menu/dropdown_menu.html"))) {
        this[_DropdownButtonComponent_1_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "disabled", "package:angular_components/material_menu/dropdown_menu.html"))) {
        this[_DropdownButtonComponent_1_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.buttonAriaDescribedBy;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "buttonAriaDescribedBy", "package:angular_components/material_menu/dropdown_menu.html"))) {
        this[_DropdownButtonComponent_1_5].ariaDescribedBy = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.tabbable;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "tabbable", "package:angular_components/material_menu/dropdown_menu.html"))) {
        this[_DropdownButtonComponent_1_5].tabbable = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.buttonAriaLabelledBy;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "buttonAriaLabelledBy", "package:angular_components/material_menu/dropdown_menu.html"))) {
        this[_DropdownButtonComponent_1_5].ariaLabelledBy = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_DropdownButtonComponent_1_5].ngOnInit();
      }
      changed = false;
      let currVal_5 = _ctx.menu;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "menu", "package:angular_components/material_menu/dropdown_menu.html"))) {
        this[_MenuPopupComponent_5_5].menu = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.preferredPositions;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "preferredPositions", "package:angular_components/material_menu/dropdown_menu.html"))) {
        this[_MenuPopupComponent_5_5].preferredPositions = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.expandAction;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "expandAction", "package:angular_components/material_menu/dropdown_menu.html"))) {
        this[_MenuPopupComponent_5_5].expandAction = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.width;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "width", "package:angular_components/material_menu/dropdown_menu.html"))) {
        this[_MenuPopupComponent_5_5].width = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = local_toggle;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "toggle", "package:angular_components/material_menu/dropdown_menu.html"))) {
        this[_MenuPopupComponent_5_5].popupSource = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.popupClass;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "popupClass", "package:angular_components/material_menu/dropdown_menu.html"))) {
        this[_MenuPopupComponent_5_5].popupClass = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_compView_1].detectChanges();
      this[_compView_5].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_PopupSourceDirective_1_7].ngAfterViewInit();
          this[_PopupSourceDirective_5_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_PopupSourceDirective_1_7].ngOnDestroy();
      this[_PopupSourceDirective_5_6].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.expandAction = ExpandActionL().as($36event);
    }
    static _debugClearComponentStyles() {
      dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles;
      if (styles == null) {
        dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles = styles = new style_encapsulation._UnscopedComponentStyles.new(dropdown_menu$46template.styles$DropdownMenuComponent, dropdown_menu$46template.ViewDropdownMenuComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (dropdown_menu$46template.ViewDropdownMenuComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_DropdownButtonComponent_1_5] = null;
    this[_PopupSourceDirective_1_7] = null;
    this[_compView_5] = null;
    this[_MenuPopupComponent_5_5] = null;
    this[_PopupSourceDirective_5_6] = null;
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
    dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("dropdown-menu"));
  }).prototype = dropdown_menu$46template.ViewDropdownMenuComponent0.prototype;
  dart.addTypeTests(dropdown_menu$46template.ViewDropdownMenuComponent0);
  dart.addTypeCaches(dropdown_menu$46template.ViewDropdownMenuComponent0);
  dart.setMethodSignature(dropdown_menu$46template.ViewDropdownMenuComponent0, () => ({
    __proto__: dart.getMethods(dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dropdown_menu$46template.ViewDropdownMenuComponent0, L0);
  dart.setFieldSignature(dropdown_menu$46template.ViewDropdownMenuComponent0, () => ({
    __proto__: dart.getFields(dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(dropdown_button$46template.ViewDropdownButtonComponent0)),
    [_DropdownButtonComponent_1_5]: dart.fieldType(dart.legacy(dropdown_button.DropdownButtonComponent)),
    [_PopupSourceDirective_1_7]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [_compView_5]: dart.fieldType(dart.legacy(menu_popup$46template.ViewMenuPopupComponent0)),
    [_MenuPopupComponent_5_5]: dart.fieldType(dart.legacy(menu_popup.MenuPopupComponent)),
    [_PopupSourceDirective_5_6]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
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
  dart.defineLazy(dropdown_menu$46template.ViewDropdownMenuComponent0, {
    /*dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dropdown_menu$46template._ViewDropdownMenuComponentHost0 = class _ViewDropdownMenuComponentHost0 extends host_view.HostView$(dart.legacy(dropdown_menu.DropdownMenuComponent)) {
    build() {
      this.componentView = new dropdown_menu$46template.ViewDropdownMenuComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new dropdown_menu.DropdownMenuComponent.new(this.componentView, _el_0);
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
      this.componentView.detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this.component.ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (dropdown_menu$46template._ViewDropdownMenuComponentHost0.new = function() {
    dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = dropdown_menu$46template._ViewDropdownMenuComponentHost0.prototype;
  dart.addTypeTests(dropdown_menu$46template._ViewDropdownMenuComponentHost0);
  dart.addTypeCaches(dropdown_menu$46template._ViewDropdownMenuComponentHost0);
  dart.setMethodSignature(dropdown_menu$46template._ViewDropdownMenuComponentHost0, () => ({
    __proto__: dart.getMethods(dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(dropdown_menu$46template._ViewDropdownMenuComponentHost0, L0);
  var C1;
  dropdown_menu$46template.createDropdownMenuComponentFactory = function createDropdownMenuComponentFactory() {
    return new (ComponentFactoryOfDropdownMenuComponentL()).new("dropdown-menu", C1 || CT.C1);
  };
  dropdown_menu$46template.viewFactory_DropdownMenuComponentHost0 = function viewFactory_DropdownMenuComponentHost0() {
    return new dropdown_menu$46template._ViewDropdownMenuComponentHost0.new();
  };
  dropdown_menu$46template.initReflector = function initReflector() {
    if (dart.test(dropdown_menu$46template._visited)) {
      return;
    }
    dropdown_menu$46template._visited = true;
    reflector.registerComponent(dart.wrapType(DropdownMenuComponentL()), dropdown_menu$46template.createDropdownMenuComponentFactory());
    angular$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    menu_popup$46template.initReflector();
    menu_popup_wrapper$46template.initReflector();
    material_popup$46template.initReflector();
    dropdown_button$46template.initReflector();
    focusable_mixin$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    css$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(dropdown_menu$46template, {
    get DropdownMenuComponentNgFactory() {
      return dropdown_menu$46template._DropdownMenuComponentNgFactory;
    }
  });
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  dart.defineLazy(dropdown_menu$46template, {
    /*dropdown_menu$46template.styles$DropdownMenuComponent*/get styles$DropdownMenuComponent() {
      return C2 || CT.C2;
    },
    /*dropdown_menu$46template._DropdownMenuComponentNgFactory*/get _DropdownMenuComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*dropdown_menu$46template.styles$DropdownMenuComponentHost*/get styles$DropdownMenuComponentHost() {
      return C2 || CT.C2;
    },
    /*dropdown_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/dropdown_menu.template", {
    "package:angular_components/material_menu/dropdown_menu.template.dart": dropdown_menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_menu.template.dart"],"names":[],"mappings":"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","file":"dropdown_menu.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__dropdown_menu$46template: dropdown_menu$46template
  };
}));

//# sourceMappingURL=dropdown_menu.template.unsound.ddc.js.map
