define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_list/material_list', 'packages/angular_components/material_list/material_list_size.template', 'packages/angular/angular.template', 'packages/angular_components/model/ui/accepts_width.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/material_list/material_list.scss.css.shim'], (function load__packages__angular_components__material_list__material_list_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_list__material_list, packages__angular_components__material_list__material_list_size$46template, packages__angular__angular$46template, packages__angular_components__model__ui__accepts_width$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__material_list__material_list$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const material_list_size$46template = packages__angular_components__material_list__material_list_size$46template.material_list__material_list_size$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const accepts_width$46template = packages__angular_components__model__ui__accepts_width$46template.model__ui__accepts_width$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const material_list$46scss$46css$46shim = packages__angular_components__material_list__material_list$46scss$46css$46shim.material_list__material_list$46scss$46css$46shim;
  var material_list$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialListComponentL = () => (MaterialListComponentL = dart.constFn(dart.legacy(material_list.MaterialListComponent)))();
  var ComponentFactoryOfMaterialListComponentL = () => (ComponentFactoryOfMaterialListComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialListComponentL())))();
  var HostViewOfMaterialListComponentL = () => (HostViewOfMaterialListComponentL = dart.constFn(host_view.HostView$(MaterialListComponentL())))();
  var HostViewLOfMaterialListComponentL = () => (HostViewLOfMaterialListComponentL = dart.constFn(dart.legacy(HostViewOfMaterialListComponentL())))();
  var VoidToHostViewLOfMaterialListComponentL = () => (VoidToHostViewLOfMaterialListComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialListComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_list/material_list.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_list$46template.ViewMaterialListComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(material_list$46template.viewFactory_MaterialListComponentHost0, VoidToHostViewLOfMaterialListComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialListComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-list"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(material_list$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_list$46template, "_expr_1");
  var C0;
  material_list$46template.ViewMaterialListComponent0 = class ViewMaterialListComponent0 extends component_view.ComponentView$(dart.legacy(material_list.MaterialListComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_list/material_list.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      this.project(parentRenderNode, 0);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.size;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "size", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.role;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "role", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    static _debugClearComponentStyles() {
      material_list$46template.ViewMaterialListComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_list$46template.ViewMaterialListComponent0._componentStyles;
      if (styles == null) {
        material_list$46template.ViewMaterialListComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_list$46template.styles$MaterialListComponent, material_list$46template.ViewMaterialListComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_list$46template.ViewMaterialListComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_list$46template.ViewMaterialListComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-list"));
  }).prototype = material_list$46template.ViewMaterialListComponent0.prototype;
  dart.addTypeTests(material_list$46template.ViewMaterialListComponent0);
  dart.addTypeCaches(material_list$46template.ViewMaterialListComponent0);
  dart.setMethodSignature(material_list$46template.ViewMaterialListComponent0, () => ({
    __proto__: dart.getMethods(material_list$46template.ViewMaterialListComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_list$46template.ViewMaterialListComponent0, L0);
  dart.setFieldSignature(material_list$46template.ViewMaterialListComponent0, () => ({
    __proto__: dart.getFields(material_list$46template.ViewMaterialListComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_list$46template.ViewMaterialListComponent0, {
    /*material_list$46template.ViewMaterialListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_list$46template._ViewMaterialListComponentHost0 = class _ViewMaterialListComponentHost0 extends host_view.HostView$(dart.legacy(material_list.MaterialListComponent)) {
    build() {
      this.componentView = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_list.MaterialListComponent.new();
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
  (material_list$46template._ViewMaterialListComponentHost0.new = function() {
    material_list$46template._ViewMaterialListComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_list$46template._ViewMaterialListComponentHost0.prototype;
  dart.addTypeTests(material_list$46template._ViewMaterialListComponentHost0);
  dart.addTypeCaches(material_list$46template._ViewMaterialListComponentHost0);
  dart.setMethodSignature(material_list$46template._ViewMaterialListComponentHost0, () => ({
    __proto__: dart.getMethods(material_list$46template._ViewMaterialListComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_list$46template._ViewMaterialListComponentHost0, L0);
  var C1;
  material_list$46template.createMaterialListComponentFactory = function createMaterialListComponentFactory() {
    return new (ComponentFactoryOfMaterialListComponentL()).new("material-list", C1 || CT.C1);
  };
  material_list$46template.viewFactory_MaterialListComponentHost0 = function viewFactory_MaterialListComponentHost0() {
    return new material_list$46template._ViewMaterialListComponentHost0.new();
  };
  material_list$46template.initReflector = function initReflector() {
    if (dart.test(material_list$46template._visited)) {
      return;
    }
    material_list$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialListComponentL()), material_list$46template.createMaterialListComponentFactory());
    material_list_size$46template.initReflector();
    material_list_size$46template.initReflector();
    angular$46template.initReflector();
    accepts_width$46template.initReflector();
    properties$46template.initReflector();
  };
  dart.copyProperties(material_list$46template, {
    get MaterialListComponentNgFactory() {
      return material_list$46template._MaterialListComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(material_list$46template, {
    /*material_list$46template.styles$MaterialListComponent*/get styles$MaterialListComponent() {
      return [material_list$46scss$46css$46shim.styles];
    },
    /*material_list$46template._MaterialListComponentNgFactory*/get _MaterialListComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_list$46template.styles$MaterialListComponentHost*/get styles$MaterialListComponentHost() {
      return C3 || CT.C3;
    },
    /*material_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_list/material_list.template", {
    "package:angular_components/material_list/material_list.template.dart": material_list$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmCI,uBAAgB,2BAAY,kEAAkE;IAChG;;AAI4B,6BAAmB,AAAK;AACjB,MAAjC,AAAK,aAAQ,gBAAgB,EAAE;IACjC;sBAE4B;AACpB,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACM,QAA5D,4BAA6B,kBAAa,QAAQ,SAAS;AACnC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACM,QAA5D,4BAA6B,kBAAa,QAAQ,SAAS;AACnC,QAAnB,gBAAU,SAAS;;IAE5B;;AAGyB,MAAvB,uEAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC0F,QAA9G,uEAAoB,SAAiC,2CAAO,uDAA8B;AAC1F,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;sEAzCwC,YAAgB;IAHpD;IACA;AAEmE,iFAAM,UAAU,EAAE,WAAW;AACxE,IAA1B,AAAK;AAC6D,uBAA7D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;MAJ+B,oEAAgB;;;;;;;AA2DW,MAAnD,qBAAgB,4DAA2B,MAAM;AAChD,kBAAa,AAAc;AACe,MAA3C,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,oBAAU;AACV,uBAAkB;AACvB,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAE2B,MAA3C,AAAc,qCAAkB,UAAU;AACb,MAA7B,AAAc;IACrB;;;;;EACF;;;;;;;;;;AAxBE,UAAO,sDAAiB;EAC1B;;AA0BE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAE0E,IAArF,4BAAyB,yCAAuB;AAC3B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AA/CE,YAAO;IACT;;;;;;;MArDoB,qDAA4B;YAAG,EAAS;;MAkDtD,wDAA+B;;;MASjB,yDAAgC;;;MA2BhD,iCAAQ;YAAG","file":"material_list.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_list__material_list$46template: material_list$46template
  };
}));

//# sourceMappingURL=material_list.template.unsound.ddc.js.map
