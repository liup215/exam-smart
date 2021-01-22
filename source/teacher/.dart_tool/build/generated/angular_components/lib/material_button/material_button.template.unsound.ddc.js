define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_button/material_button', 'packages/angular_components/theme/dark_theme', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/theme/dark_theme.template', 'packages/angular_components/material_button/material_button.scss.css.shim'], (function load__packages__angular_components__material_button__material_button_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_ripple__material_ripple, packages__angular_components__material_button__material_button, packages__angular_components__theme__dark_theme, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__button_decorator__button_decorator, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_button__material_button_base$46template, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__theme__dark_theme$46template, packages__angular_components__material_button__material_button$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const material_button_base$46template = packages__angular_components__material_button__material_button_base$46template.material_button__material_button_base$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const dark_theme$46template = packages__angular_components__theme__dark_theme$46template.theme__dark_theme$46template;
  const material_button$46scss$46css$46shim = packages__angular_components__material_button__material_button$46scss$46css$46shim.material_button__material_button$46scss$46css$46shim;
  var material_button$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ComponentFactoryOfMaterialButtonComponentL = () => (ComponentFactoryOfMaterialButtonComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialButtonComponentL())))();
  var HostViewOfMaterialButtonComponentL = () => (HostViewOfMaterialButtonComponentL = dart.constFn(host_view.HostView$(MaterialButtonComponentL())))();
  var HostViewLOfMaterialButtonComponentL = () => (HostViewLOfMaterialButtonComponentL = dart.constFn(dart.legacy(HostViewOfMaterialButtonComponentL())))();
  var VoidToHostViewLOfMaterialButtonComponentL = () => (VoidToHostViewLOfMaterialButtonComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialButtonComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_button/material_button.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_button$46template.ViewMaterialButtonComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C2() {
      return C2 = dart.fn(material_button$46template.viewFactory_MaterialButtonComponentHost0, VoidToHostViewLOfMaterialButtonComponentL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfMaterialButtonComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-button"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _compView_2 = dart.privateName(material_button$46template, "_compView_2");
  var _MaterialRippleComponent_2_5 = dart.privateName(material_button$46template, "_MaterialRippleComponent_2_5");
  var _expr_0 = dart.privateName(material_button$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_button$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_button$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_button$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_button$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_button$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_button$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_button$46template, "_expr_7");
  var C0;
  material_button$46template.ViewMaterialButtonComponent0 = class ViewMaterialButtonComponent0 extends component_view.ComponentView$(dart.legacy(material_button.MaterialButtonComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_button/material_button.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      let _el_1 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_1, "content");
      this.addShimC(_el_1);
      this.project(_el_1, 0);
      this[_compView_2] = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      parentRenderNode[$append](_el_2);
      this.addShimC(_el_2);
      this[_MaterialRippleComponent_2_5] = new material_ripple.MaterialRippleComponent.new(_el_2);
      this[_compView_2].create(this[_MaterialRippleComponent_2_5]);
      _el_2[$addEventListener]("mousedown", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onMouseDown')));
      _el_2[$addEventListener]("mouseup", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onMouseUp')));
      parentRenderNode[$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleClick')));
      parentRenderNode[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyPress')));
      parentRenderNode[$addEventListener]("mousedown", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onMouseDown')));
      parentRenderNode[$addEventListener]("mouseup", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onMouseUp')));
      parentRenderNode[$addEventListener]("focus", this.eventHandler1(EventL(), UIEventL(), dart.bind(_ctx, 'onFocus')));
      parentRenderNode[$addEventListener]("blur", this.eventHandler1(EventL(), UIEventL(), dart.bind(_ctx, 'onBlur')));
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
      this[_MaterialRippleComponent_2_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
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
      let currVal_4 = _ctx.hostDisabled;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "disabled", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.hostRaised;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "raised", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.hostClassIsFocused;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "is-focused", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.hostElevation;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "elevation", currVal_7);
        this[_expr_7] = currVal_7;
      }
    }
    static _debugClearComponentStyles() {
      material_button$46template.ViewMaterialButtonComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_button$46template.ViewMaterialButtonComponent0._componentStyles;
      if (styles == null) {
        material_button$46template.ViewMaterialButtonComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_button$46template.styles$MaterialButtonComponent, material_button$46template.ViewMaterialButtonComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_button$46template.ViewMaterialButtonComponent0.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialRippleComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    material_button$46template.ViewMaterialButtonComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-button"));
    dom_helpers.updateAttribute(this.rootElement, "animated", "true");
  }).prototype = material_button$46template.ViewMaterialButtonComponent0.prototype;
  dart.addTypeTests(material_button$46template.ViewMaterialButtonComponent0);
  dart.addTypeCaches(material_button$46template.ViewMaterialButtonComponent0);
  dart.setMethodSignature(material_button$46template.ViewMaterialButtonComponent0, () => ({
    __proto__: dart.getMethods(material_button$46template.ViewMaterialButtonComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_button$46template.ViewMaterialButtonComponent0, L0);
  dart.setFieldSignature(material_button$46template.ViewMaterialButtonComponent0, () => ({
    __proto__: dart.getFields(material_button$46template.ViewMaterialButtonComponent0.__proto__),
    [_compView_2]: dart.fieldType(dart.legacy(material_ripple$46template.ViewMaterialRippleComponent0)),
    [_MaterialRippleComponent_2_5]: dart.fieldType(dart.legacy(material_ripple.MaterialRippleComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_button$46template.ViewMaterialButtonComponent0, {
    /*material_button$46template.ViewMaterialButtonComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _AcxDarkTheme_0_5 = dart.privateName(material_button$46template, "_AcxDarkTheme_0_5");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C1;
  material_button$46template._ViewMaterialButtonComponentHost0 = class _ViewMaterialButtonComponentHost0 extends host_view.HostView$(dart.legacy(material_button.MaterialButtonComponent)) {
    build() {
      this.componentView = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.injectorGetOptional(C1 || CT.C1, this.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.injectorGetOptional(C1 || CT.C1, this.parentIndex)));
      this.component = new material_button.MaterialButtonComponent.new(_el_0, AcxDarkThemeL().as(this[_AcxDarkTheme_0_5]), this.componentView, null);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this.component;
        }
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
  };
  (material_button$46template._ViewMaterialButtonComponentHost0.new = function() {
    this[_AcxDarkTheme_0_5] = null;
    material_button$46template._ViewMaterialButtonComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_button$46template._ViewMaterialButtonComponentHost0.prototype;
  dart.addTypeTests(material_button$46template._ViewMaterialButtonComponentHost0);
  dart.addTypeCaches(material_button$46template._ViewMaterialButtonComponentHost0);
  dart.setMethodSignature(material_button$46template._ViewMaterialButtonComponentHost0, () => ({
    __proto__: dart.getMethods(material_button$46template._ViewMaterialButtonComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_button$46template._ViewMaterialButtonComponentHost0, L0);
  dart.setFieldSignature(material_button$46template._ViewMaterialButtonComponentHost0, () => ({
    __proto__: dart.getFields(material_button$46template._ViewMaterialButtonComponentHost0.__proto__),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic)
  }));
  var C2;
  material_button$46template.createMaterialButtonComponentFactory = function createMaterialButtonComponentFactory() {
    return new (ComponentFactoryOfMaterialButtonComponentL()).new("material-button", C2 || CT.C2);
  };
  material_button$46template.viewFactory_MaterialButtonComponentHost0 = function viewFactory_MaterialButtonComponentHost0() {
    return new material_button$46template._ViewMaterialButtonComponentHost0.new();
  };
  material_button$46template.initReflector = function initReflector() {
    if (dart.test(material_button$46template._visited)) {
      return;
    }
    material_button$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialButtonComponentL()), material_button$46template.createMaterialButtonComponentFactory());
    material_button_base$46template.initReflector();
    angular$46template.initReflector();
    meta$46template.initReflector();
    button_decorator$46template.initReflector();
    has_disabled$46template.initReflector();
    material_ripple$46template.initReflector();
    dark_theme$46template.initReflector();
  };
  dart.copyProperties(material_button$46template, {
    get MaterialButtonComponentNgFactory() {
      return material_button$46template._MaterialButtonComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  var C4;
  dart.defineLazy(material_button$46template, {
    /*material_button$46template.styles$MaterialButtonComponent*/get styles$MaterialButtonComponent() {
      return [material_button$46scss$46css$46shim.styles];
    },
    /*material_button$46template._MaterialButtonComponentNgFactory*/get _MaterialButtonComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*material_button$46template.styles$MaterialButtonComponentHost*/get styles$MaterialButtonComponentHost() {
      return C4 || CT.C4;
    },
    /*material_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_button/material_button.template", {
    "package:angular_components/material_button/material_button.template.dart": material_button$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_button.template.dart"],"names":[],"mappings":"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","file":"material_button.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_button__material_button$46template: material_button$46template
  };
}));

//# sourceMappingURL=material_button.template.unsound.ddc.js.map
