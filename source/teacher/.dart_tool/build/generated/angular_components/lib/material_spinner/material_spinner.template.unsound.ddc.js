define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_spinner/material_spinner', 'packages/angular/angular.template', 'packages/angular_components/material_spinner/material_spinner.scss.css.shim'], (function load__packages__angular_components__material_spinner__material_spinner_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_spinner__material_spinner, packages__angular__angular$46template, packages__angular_components__material_spinner__material_spinner$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_spinner = packages__angular_components__material_spinner__material_spinner.material_spinner__material_spinner;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_spinner$46scss$46css$46shim = packages__angular_components__material_spinner__material_spinner$46scss$46css$46shim.material_spinner__material_spinner$46scss$46css$46shim;
  var material_spinner$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialSpinnerComponentL = () => (MaterialSpinnerComponentL = dart.constFn(dart.legacy(material_spinner.MaterialSpinnerComponent)))();
  var ComponentFactoryOfMaterialSpinnerComponentL = () => (ComponentFactoryOfMaterialSpinnerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialSpinnerComponentL())))();
  var HostViewOfMaterialSpinnerComponentL = () => (HostViewOfMaterialSpinnerComponentL = dart.constFn(host_view.HostView$(MaterialSpinnerComponentL())))();
  var HostViewLOfMaterialSpinnerComponentL = () => (HostViewLOfMaterialSpinnerComponentL = dart.constFn(dart.legacy(HostViewOfMaterialSpinnerComponentL())))();
  var VoidToHostViewLOfMaterialSpinnerComponentL = () => (VoidToHostViewLOfMaterialSpinnerComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialSpinnerComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_spinner/material_spinner.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_spinner$46template.ViewMaterialSpinnerComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(material_spinner$46template.viewFactory_MaterialSpinnerComponentHost0, VoidToHostViewLOfMaterialSpinnerComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialSpinnerComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-spinner"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var C0;
  material_spinner$46template.ViewMaterialSpinnerComponent0 = class ViewMaterialSpinnerComponent0 extends component_view.ComponentView$(dart.legacy(material_spinner.MaterialSpinnerComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_spinner/material_spinner.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "spinner");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "circle left");
      this.addShimC(_el_1);
      let _el_2 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_2, "circle right");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_3, "circle gap");
      this.addShimC(_el_3);
    }
    static _debugClearComponentStyles() {
      material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles;
      if (styles == null) {
        material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_spinner$46template.styles$MaterialSpinnerComponent, material_spinner$46template.ViewMaterialSpinnerComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_spinner$46template.ViewMaterialSpinnerComponent0.new = function(parentView, parentIndex) {
    material_spinner$46template.ViewMaterialSpinnerComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-spinner"));
  }).prototype = material_spinner$46template.ViewMaterialSpinnerComponent0.prototype;
  dart.addTypeTests(material_spinner$46template.ViewMaterialSpinnerComponent0);
  dart.addTypeCaches(material_spinner$46template.ViewMaterialSpinnerComponent0);
  dart.setMethodSignature(material_spinner$46template.ViewMaterialSpinnerComponent0, () => ({
    __proto__: dart.getMethods(material_spinner$46template.ViewMaterialSpinnerComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_spinner$46template.ViewMaterialSpinnerComponent0, L0);
  dart.defineLazy(material_spinner$46template.ViewMaterialSpinnerComponent0, {
    /*material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_spinner$46template._ViewMaterialSpinnerComponentHost0 = class _ViewMaterialSpinnerComponentHost0 extends host_view.HostView$(dart.legacy(material_spinner.MaterialSpinnerComponent)) {
    build() {
      this.componentView = new material_spinner$46template.ViewMaterialSpinnerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_spinner.MaterialSpinnerComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (material_spinner$46template._ViewMaterialSpinnerComponentHost0.new = function() {
    material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_spinner$46template._ViewMaterialSpinnerComponentHost0.prototype;
  dart.addTypeTests(material_spinner$46template._ViewMaterialSpinnerComponentHost0);
  dart.addTypeCaches(material_spinner$46template._ViewMaterialSpinnerComponentHost0);
  dart.setMethodSignature(material_spinner$46template._ViewMaterialSpinnerComponentHost0, () => ({
    __proto__: dart.getMethods(material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_spinner$46template._ViewMaterialSpinnerComponentHost0, L0);
  var C1;
  material_spinner$46template.createMaterialSpinnerComponentFactory = function createMaterialSpinnerComponentFactory() {
    return new (ComponentFactoryOfMaterialSpinnerComponentL()).new("material-spinner", C1 || CT.C1);
  };
  material_spinner$46template.viewFactory_MaterialSpinnerComponentHost0 = function viewFactory_MaterialSpinnerComponentHost0() {
    return new material_spinner$46template._ViewMaterialSpinnerComponentHost0.new();
  };
  material_spinner$46template.initReflector = function initReflector() {
    if (dart.test(material_spinner$46template._visited)) {
      return;
    }
    material_spinner$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialSpinnerComponentL()), material_spinner$46template.createMaterialSpinnerComponentFactory());
    angular$46template.initReflector();
  };
  dart.copyProperties(material_spinner$46template, {
    get MaterialSpinnerComponentNgFactory() {
      return material_spinner$46template._MaterialSpinnerComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(material_spinner$46template, {
    /*material_spinner$46template.styles$MaterialSpinnerComponent*/get styles$MaterialSpinnerComponent() {
      return [material_spinner$46scss$46css$46shim.styles];
    },
    /*material_spinner$46template._MaterialSpinnerComponentNgFactory*/get _MaterialSpinnerComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_spinner$46template.styles$MaterialSpinnerComponentHost*/get styles$MaterialSpinnerComponentHost() {
      return C3 || CT.C3;
    },
    /*material_spinner$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_spinner/material_spinner.template", {
    "package:angular_components/material_spinner/material_spinner.template.dart": material_spinner$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_spinner.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6BI,uBAAgB,2BAAY,wEAAwE;IACtG;;AAI4B,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACd,MAAvC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACC,MAA3C,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACE,MAA5C,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACA,MAA1C,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;IACrB;;AAGyB,MAAvB,6EAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC6F,QAAjH,6EAAoB,SAAiC,2CAAO,6DAAiC;AAC7F,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;4EAvC2C,YAAgB;AAAe,uFAAM,UAAU,EAAE,WAAW;AAC3E,IAA1B,AAAK;AACgE,uBAAhE,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;MAJ+B,0EAAgB;;;;;;;AAyDc,MAAtD,qBAAgB,kEAA8B,MAAM;AACnD,kBAAa,AAAc;AACkB,MAA9C,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;;AAbE,UAAO,yDAAiB;EAC1B;;AAeE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEgF,IAA3F,4BAAyB,4CAA0B;AAC9B,IAArB;EACF;;;AAhCE,YAAO;IACT;;;;;;;MAjDoB,2DAA+B;YAAG,EAAS;;MA8CzD,8DAAkC;;;MASpB,+DAAmC;;;MAgBnD,oCAAQ;YAAG","file":"material_spinner.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_spinner__material_spinner$46template: material_spinner$46template
  };
}));

//# sourceMappingURL=material_spinner.template.unsound.ddc.js.map
