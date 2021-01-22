define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_list/material_list_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_list/material_list_item.scss.css.shim'], (function load__packages__angular_components__material_list__material_list_item_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_list__material_list_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_list__material_list_item$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_list_item = packages__angular_components__material_list__material_list_item.material_list__material_list_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_list_item$46scss$46css$46shim = packages__angular_components__material_list__material_list_item$46scss$46css$46shim.material_list__material_list_item$46scss$46css$46shim;
  var material_list_item$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialListItemComponentL = () => (MaterialListItemComponentL = dart.constFn(dart.legacy(material_list_item.MaterialListItemComponent)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var VoidToMaterialListItemComponentL = () => (VoidToMaterialListItemComponentL = dart.constFn(dart.fnType(MaterialListItemComponentL(), [])))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ComponentFactoryOfMaterialListItemComponentL = () => (ComponentFactoryOfMaterialListItemComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialListItemComponentL())))();
  var HostViewOfMaterialListItemComponentL = () => (HostViewOfMaterialListItemComponentL = dart.constFn(host_view.HostView$(MaterialListItemComponentL())))();
  var HostViewLOfMaterialListItemComponentL = () => (HostViewLOfMaterialListItemComponentL = dart.constFn(dart.legacy(HostViewOfMaterialListItemComponentL())))();
  var VoidToHostViewLOfMaterialListItemComponentL = () => (VoidToHostViewLOfMaterialListItemComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialListItemComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_list/material_list_item.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_list_item$46template.ViewMaterialListItemComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(material_list_item$46template.viewFactory_MaterialListItemComponentHost0, VoidToHostViewLOfMaterialListItemComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialListItemComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-list-item"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(material_list_item$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_list_item$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_list_item$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_list_item$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_list_item$46template, "_expr_4");
  var C0;
  material_list_item$46template.ViewMaterialListItemComponent0 = class ViewMaterialListItemComponent0 extends component_view.ComponentView$(dart.legacy(material_list_item.MaterialListItemComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_list/material_list_item.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      this.project(parentRenderNode, 0);
      parentRenderNode[$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleClick')));
      parentRenderNode[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyPress')));
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
      let currVal_4 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "disabled", currVal_4);
        this[_expr_4] = currVal_4;
      }
    }
    static _debugClearComponentStyles() {
      material_list_item$46template.ViewMaterialListItemComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_list_item$46template.ViewMaterialListItemComponent0._componentStyles;
      if (styles == null) {
        material_list_item$46template.ViewMaterialListItemComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_list_item$46template.styles$MaterialListItemComponent, material_list_item$46template.ViewMaterialListItemComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_list_item$46template.ViewMaterialListItemComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    material_list_item$46template.ViewMaterialListItemComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-list-item"));
    this.updateChildClassNonHtml(this.rootElement, "item");
  }).prototype = material_list_item$46template.ViewMaterialListItemComponent0.prototype;
  dart.addTypeTests(material_list_item$46template.ViewMaterialListItemComponent0);
  dart.addTypeCaches(material_list_item$46template.ViewMaterialListItemComponent0);
  dart.setMethodSignature(material_list_item$46template.ViewMaterialListItemComponent0, () => ({
    __proto__: dart.getMethods(material_list_item$46template.ViewMaterialListItemComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_list_item$46template.ViewMaterialListItemComponent0, L0);
  dart.setFieldSignature(material_list_item$46template.ViewMaterialListItemComponent0, () => ({
    __proto__: dart.getFields(material_list_item$46template.ViewMaterialListItemComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_list_item$46template.ViewMaterialListItemComponent0, {
    /*material_list_item$46template.ViewMaterialListItemComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_list_item$46template._ViewMaterialListItemComponentHost0 = class _ViewMaterialListItemComponentHost0 extends host_view.HostView$(dart.legacy(material_list_item.MaterialListItemComponent)) {
    build() {
      this.componentView = new material_list_item$46template.ViewMaterialListItemComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialListItemComponentL(), dart.wrapType(MaterialListItemComponentL()), dart.fn(() => new material_list_item.MaterialListItemComponent.new(_el_0, DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentIndex)), null, null), VoidToMaterialListItemComponentL())) : new material_list_item.MaterialListItemComponent.new(_el_0, DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentIndex)), null, null);
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
  (material_list_item$46template._ViewMaterialListItemComponentHost0.new = function() {
    material_list_item$46template._ViewMaterialListItemComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_list_item$46template._ViewMaterialListItemComponentHost0.prototype;
  dart.addTypeTests(material_list_item$46template._ViewMaterialListItemComponentHost0);
  dart.addTypeCaches(material_list_item$46template._ViewMaterialListItemComponentHost0);
  dart.setMethodSignature(material_list_item$46template._ViewMaterialListItemComponentHost0, () => ({
    __proto__: dart.getMethods(material_list_item$46template._ViewMaterialListItemComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_list_item$46template._ViewMaterialListItemComponentHost0, L0);
  var C1;
  material_list_item$46template.createMaterialListItemComponentFactory = function createMaterialListItemComponentFactory() {
    return new (ComponentFactoryOfMaterialListItemComponentL()).new("material-list-item", C1 || CT.C1);
  };
  material_list_item$46template.viewFactory_MaterialListItemComponentHost0 = function viewFactory_MaterialListItemComponentHost0() {
    return new material_list_item$46template._ViewMaterialListItemComponentHost0.new();
  };
  material_list_item$46template.initReflector = function initReflector() {
    if (dart.test(material_list_item$46template._visited)) {
      return;
    }
    material_list_item$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialListItemComponentL()), material_list_item$46template.createMaterialListItemComponentFactory());
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    has_disabled$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_list_item$46template, {
    get MaterialListItemComponentNgFactory() {
      return material_list_item$46template._MaterialListItemComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(material_list_item$46template, {
    /*material_list_item$46template.styles$MaterialListItemComponent*/get styles$MaterialListItemComponent() {
      return [material_list_item$46scss$46css$46shim.styles];
    },
    /*material_list_item$46template._MaterialListItemComponentNgFactory*/get _MaterialListItemComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_list_item$46template.styles$MaterialListItemComponentHost*/get styles$MaterialListItemComponentHost() {
      return C3 || CT.C3;
    },
    /*material_list_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_list/material_list_item.template", {
    "package:angular_components/material_list/material_list_item.template.dart": material_list_item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_list_item.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0CI,uBAAgB,2BAAY,uEAAuE;IACrG;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AACjB,MAAjC,AAAK,aAAQ,gBAAgB,EAAE;AACiD,MAAhF,AAAiB,gBAAD,oBAAkB,SAAS,AAAK,4CAAmB,UAAL,IAAI;AACoB,MAAtF,AAAiB,gBAAD,oBAAkB,YAAY,AAAK,+CAAmB,UAAL,IAAI;IACvE;sBAE4B;AACpB,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACU,QAAhE,4BAA6B,kBAAa,YAAY,SAAS;AACvC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACM,QAA5D,4BAA6B,kBAAa,QAAQ,SAAS;AACnC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACe,QAArE,4BAA6B,kBAAa,iBAAiB,SAAS;AAC5C,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACuB,QAA7E,sCAAuC,kBAAa,eAAe,SAAS;AACpD,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACoB,QAA1E,sCAAuC,kBAAa,YAAY,SAAS;AACjD,QAAnB,gBAAU,SAAS;;IAE5B;;AAGyB,MAAvB,gFAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC8F,QAAlH,gFAAoB,SAAiC,2CAAO,gEAAkC;AAC9F,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;+EA5D4C,YAAgB;IANxD;IACA;IACA;IACA;IACA;AAEuE,0FAAM,UAAU,EAAE,WAAW;AAC5E,IAA1B,AAAK;AACkE,uBAAlE,kBAAsB,AAAS,8BAAc;AACyC,IAA3F,AAAK,6BAA6B;EACpC;;;;;;;;;;;;;;;;;MAL+B,6EAAgB;;;;;;;AA8Ee,MAAvD,qBAAgB,qEAA+B,MAAM;AACpD,kBAAa,AAAc;AAK+F,MAJ3H,2BAAqB,2BACpB,uDAAmC,6CAA2B,cAC7C,qDAA0B,KAAK,uBAAE,AAAK,yBAA6B,kCAAqB,oBAAc,MAAM,8CAErH,qDAA0B,KAAK,uBAAE,AAAK,yBAA6B,kCAAqB,oBAAc,MAAM;AAClG,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,iCAAiB,AAAE,MAAG,SAAS;AAC5D,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACV,uBAAkB;AACvB,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAE2B,MAA3C,AAAc,qCAAkB,UAAU;AACb,MAA7B,AAAc;IACrB;;AAI8B,MAAvB,AAAU;IACjB;;;;;EACF;;;;;;;;;;;AAzCE,UAAO,0DAAiB;EAC1B;;AA2CE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,yCAAW;AAEkF,IAA7F,4BAAyB,6CAA2B;AAC/B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAhEE,YAAO;IACT;;;;;;;MA3EoB,8DAAgC;YAAG,EAAS;;MAwE1D,iEAAmC;;;MASrB,kEAAoC;;;MA4CpD,sCAAQ;YAAG","file":"material_list_item.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_list__material_list_item$46template: material_list_item$46template
  };
}));

//# sourceMappingURL=material_list_item.template.unsound.ddc.js.map
