define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/material_button/material_fab.scss.css.shim'], (function load__packages__angular_components__material_button__material_fab_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_ripple__material_ripple, packages__angular_components__material_button__material_fab, packages__angular_components__material_button__material_button_base$46template, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__material_button__material_fab$46scss$46css$46shim) {
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
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const material_fab = packages__angular_components__material_button__material_fab.material_button__material_fab;
  const material_button_base$46template = packages__angular_components__material_button__material_button_base$46template.material_button__material_button_base$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const material_fab$46scss$46css$46shim = packages__angular_components__material_button__material_fab$46scss$46css$46shim.material_button__material_fab$46scss$46css$46shim;
  var material_fab$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialFabComponentL = () => (MaterialFabComponentL = dart.constFn(dart.legacy(material_fab.MaterialFabComponent)))();
  var ComponentFactoryOfMaterialFabComponentL = () => (ComponentFactoryOfMaterialFabComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialFabComponentL())))();
  var HostViewOfMaterialFabComponentL = () => (HostViewOfMaterialFabComponentL = dart.constFn(host_view.HostView$(MaterialFabComponentL())))();
  var HostViewLOfMaterialFabComponentL = () => (HostViewLOfMaterialFabComponentL = dart.constFn(dart.legacy(HostViewOfMaterialFabComponentL())))();
  var VoidToHostViewLOfMaterialFabComponentL = () => (VoidToHostViewLOfMaterialFabComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialFabComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_button/material_fab.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_fab$46template.ViewMaterialFabComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(material_fab$46template.viewFactory_MaterialFabComponentHost0, VoidToHostViewLOfMaterialFabComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialFabComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-fab"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _compView_2 = dart.privateName(material_fab$46template, "_compView_2");
  var _MaterialRippleComponent_2_5 = dart.privateName(material_fab$46template, "_MaterialRippleComponent_2_5");
  var _expr_0 = dart.privateName(material_fab$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_fab$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_fab$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_fab$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_fab$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_fab$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_fab$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_fab$46template, "_expr_7");
  var C0;
  material_fab$46template.ViewMaterialFabComponent0 = class ViewMaterialFabComponent0 extends component_view.ComponentView$(dart.legacy(material_fab.MaterialFabComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_button/material_fab.dart" : null;
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
      let currVal_7 = _ctx.hostClassIsPressed;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "is-pressed", currVal_7);
        this[_expr_7] = currVal_7;
      }
    }
    static _debugClearComponentStyles() {
      material_fab$46template.ViewMaterialFabComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_fab$46template.ViewMaterialFabComponent0._componentStyles;
      if (styles == null) {
        material_fab$46template.ViewMaterialFabComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_fab$46template.styles$MaterialFabComponent, material_fab$46template.ViewMaterialFabComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_fab$46template.ViewMaterialFabComponent0.new = function(parentView, parentIndex) {
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
    material_fab$46template.ViewMaterialFabComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-fab"));
    dom_helpers.updateAttribute(this.rootElement, "animated", "true");
  }).prototype = material_fab$46template.ViewMaterialFabComponent0.prototype;
  dart.addTypeTests(material_fab$46template.ViewMaterialFabComponent0);
  dart.addTypeCaches(material_fab$46template.ViewMaterialFabComponent0);
  dart.setMethodSignature(material_fab$46template.ViewMaterialFabComponent0, () => ({
    __proto__: dart.getMethods(material_fab$46template.ViewMaterialFabComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_fab$46template.ViewMaterialFabComponent0, L0);
  dart.setFieldSignature(material_fab$46template.ViewMaterialFabComponent0, () => ({
    __proto__: dart.getFields(material_fab$46template.ViewMaterialFabComponent0.__proto__),
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
  dart.defineLazy(material_fab$46template.ViewMaterialFabComponent0, {
    /*material_fab$46template.ViewMaterialFabComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_fab$46template._ViewMaterialFabComponentHost0 = class _ViewMaterialFabComponentHost0 extends host_view.HostView$(dart.legacy(material_fab.MaterialFabComponent)) {
    build() {
      this.componentView = new material_fab$46template.ViewMaterialFabComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_fab.MaterialFabComponent.new(_el_0, this.componentView);
      this.initRootNode(_el_0);
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
  (material_fab$46template._ViewMaterialFabComponentHost0.new = function() {
    material_fab$46template._ViewMaterialFabComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_fab$46template._ViewMaterialFabComponentHost0.prototype;
  dart.addTypeTests(material_fab$46template._ViewMaterialFabComponentHost0);
  dart.addTypeCaches(material_fab$46template._ViewMaterialFabComponentHost0);
  dart.setMethodSignature(material_fab$46template._ViewMaterialFabComponentHost0, () => ({
    __proto__: dart.getMethods(material_fab$46template._ViewMaterialFabComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_fab$46template._ViewMaterialFabComponentHost0, L0);
  var C1;
  material_fab$46template.createMaterialFabComponentFactory = function createMaterialFabComponentFactory() {
    return new (ComponentFactoryOfMaterialFabComponentL()).new("material-fab", C1 || CT.C1);
  };
  material_fab$46template.viewFactory_MaterialFabComponentHost0 = function viewFactory_MaterialFabComponentHost0() {
    return new material_fab$46template._ViewMaterialFabComponentHost0.new();
  };
  material_fab$46template.initReflector = function initReflector() {
    if (dart.test(material_fab$46template._visited)) {
      return;
    }
    material_fab$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialFabComponentL()), material_fab$46template.createMaterialFabComponentFactory());
    material_button_base$46template.initReflector();
    angular$46template.initReflector();
    meta$46template.initReflector();
    material_ripple$46template.initReflector();
  };
  dart.copyProperties(material_fab$46template, {
    get MaterialFabComponentNgFactory() {
      return material_fab$46template._MaterialFabComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(material_fab$46template, {
    /*material_fab$46template.styles$MaterialFabComponent*/get styles$MaterialFabComponent() {
      return [material_fab$46scss$46css$46shim.styles];
    },
    /*material_fab$46template._MaterialFabComponentNgFactory*/get _MaterialFabComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_fab$46template.styles$MaterialFabComponentHost*/get styles$MaterialFabComponentHost() {
      return C3 || CT.C3;
    },
    /*material_fab$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_button/material_fab.template", {
    "package:angular_components/material_button/material_fab.template.dart": material_fab$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_fab.template.dart"],"names":[],"mappings":"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","file":"material_fab.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_button__material_fab$46template: material_fab$46template
  };
}));

//# sourceMappingURL=material_fab.template.unsound.ddc.js.map
