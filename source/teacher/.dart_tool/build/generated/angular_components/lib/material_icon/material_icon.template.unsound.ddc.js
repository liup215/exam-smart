define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_icon/material_icon', 'packages/angular/angular.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/material_icon/material_icon.scss.css.shim'], (function load__packages__angular_components__material_icon__material_icon_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate, packages__angular_components__material_icon__material_icon, packages__angular__angular$46template, packages__angular_components__model__ui__icon$46template, packages__angular_components__material_icon__material_icon$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const icon$46template = packages__angular_components__model__ui__icon$46template.model__ui__icon$46template;
  const material_icon$46scss$46css$46shim = packages__angular_components__material_icon__material_icon$46scss$46css$46shim.material_icon__material_icon$46scss$46css$46shim;
  var material_icon$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialIconComponentL = () => (MaterialIconComponentL = dart.constFn(dart.legacy(material_icon.MaterialIconComponent)))();
  var ComponentFactoryOfMaterialIconComponentL = () => (ComponentFactoryOfMaterialIconComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialIconComponentL())))();
  var HostViewOfMaterialIconComponentL = () => (HostViewOfMaterialIconComponentL = dart.constFn(host_view.HostView$(MaterialIconComponentL())))();
  var HostViewLOfMaterialIconComponentL = () => (HostViewLOfMaterialIconComponentL = dart.constFn(dart.legacy(HostViewOfMaterialIconComponentL())))();
  var VoidToHostViewLOfMaterialIconComponentL = () => (VoidToHostViewLOfMaterialIconComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialIconComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_icon/material_icon.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_icon$46template.ViewMaterialIconComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(material_icon$46template.viewFactory_MaterialIconComponentHost0, VoidToHostViewLOfMaterialIconComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialIconComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-icon"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_2 = dart.privateName(material_icon$46template, "_textBinding_2");
  var C0;
  material_icon$46template.ViewMaterialIconComponent0 = class ViewMaterialIconComponent0 extends component_view.ComponentView$(dart.legacy(material_icon.MaterialIconComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_icon/material_icon.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      let _el_1 = dom_helpers.appendElement(doc, parentRenderNode, "i");
      dom_helpers.setAttribute(_el_1, "aria-hidden", "true");
      this.updateChildClass(HtmlElementL().as(_el_1), "material-icon-i material-icons");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2].element);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2].updateText(interpolate.interpolateString0(_ctx.iconName));
    }
    static _debugClearComponentStyles() {
      material_icon$46template.ViewMaterialIconComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_icon$46template.ViewMaterialIconComponent0._componentStyles;
      if (styles == null) {
        material_icon$46template.ViewMaterialIconComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_icon$46template.styles$MaterialIconComponent, material_icon$46template.ViewMaterialIconComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_icon$46template.ViewMaterialIconComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    material_icon$46template.ViewMaterialIconComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-icon"));
  }).prototype = material_icon$46template.ViewMaterialIconComponent0.prototype;
  dart.addTypeTests(material_icon$46template.ViewMaterialIconComponent0);
  dart.addTypeCaches(material_icon$46template.ViewMaterialIconComponent0);
  dart.setMethodSignature(material_icon$46template.ViewMaterialIconComponent0, () => ({
    __proto__: dart.getMethods(material_icon$46template.ViewMaterialIconComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_icon$46template.ViewMaterialIconComponent0, L0);
  dart.setFieldSignature(material_icon$46template.ViewMaterialIconComponent0, () => ({
    __proto__: dart.getFields(material_icon$46template.ViewMaterialIconComponent0.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  dart.defineLazy(material_icon$46template.ViewMaterialIconComponent0, {
    /*material_icon$46template.ViewMaterialIconComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_icon$46template._ViewMaterialIconComponentHost0 = class _ViewMaterialIconComponentHost0 extends host_view.HostView$(dart.legacy(material_icon.MaterialIconComponent)) {
    build() {
      this.componentView = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_icon.MaterialIconComponent.new(_el_0);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
    }
  };
  (material_icon$46template._ViewMaterialIconComponentHost0.new = function() {
    material_icon$46template._ViewMaterialIconComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_icon$46template._ViewMaterialIconComponentHost0.prototype;
  dart.addTypeTests(material_icon$46template._ViewMaterialIconComponentHost0);
  dart.addTypeCaches(material_icon$46template._ViewMaterialIconComponentHost0);
  dart.setMethodSignature(material_icon$46template._ViewMaterialIconComponentHost0, () => ({
    __proto__: dart.getMethods(material_icon$46template._ViewMaterialIconComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_icon$46template._ViewMaterialIconComponentHost0, L0);
  var C1;
  material_icon$46template.createMaterialIconComponentFactory = function createMaterialIconComponentFactory() {
    return new (ComponentFactoryOfMaterialIconComponentL()).new("material-icon", C1 || CT.C1);
  };
  material_icon$46template.viewFactory_MaterialIconComponentHost0 = function viewFactory_MaterialIconComponentHost0() {
    return new material_icon$46template._ViewMaterialIconComponentHost0.new();
  };
  material_icon$46template.initReflector = function initReflector() {
    if (dart.test(material_icon$46template._visited)) {
      return;
    }
    material_icon$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialIconComponentL()), material_icon$46template.createMaterialIconComponentFactory());
    angular$46template.initReflector();
    icon$46template.initReflector();
  };
  dart.copyProperties(material_icon$46template, {
    get MaterialIconComponentNgFactory() {
      return material_icon$46template._MaterialIconComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(material_icon$46template, {
    /*material_icon$46template.styles$MaterialIconComponent*/get styles$MaterialIconComponent() {
      return [material_icon$46scss$46css$46shim.styles];
    },
    /*material_icon$46template._MaterialIconComponentNgFactory*/get _MaterialIconComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_icon$46template.styles$MaterialIconComponentHost*/get styles$MaterialIconComponentHost() {
      return C3 || CT.C3;
    },
    /*material_icon$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_icon/material_icon.template", {
    "package:angular_components/material_icon/material_icon.template.dart": material_icon$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_icon.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiCI,uBAAgB,2BAAY,kEAAkE;IAChG;;AAI4B,6BAAmB,AAAK;AAC5C,oBAAU,uBAAmB,gBAAgB,EAAE;AAC/C,gBAAc;AACd,kBAAQ,0BAAsB,GAAG,EAAE,gBAAgB,EAAE;AACT,MAAlD,yBAAqB,KAAK,EAAE,eAAe;AACmB,MAA9D,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACsB,MAAzC,AAAM,KAAD,UAAa,AAAe;IACnC;;AAIQ,iBAAY;AACwD,MAArE,AAAe,gCAAW,+BAA4B,AAAK,IAAD;IACjE;;AAGyB,MAAvB,uEAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC0F,QAA9G,uEAAoB,SAAiC,2CAAO,uDAA8B;AAC1F,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;sEAvCwC,YAAgB;IAF9B,uBAAyB;AAEoB,iFAAM,UAAU,EAAE,WAAW;AACxE,IAA1B,AAAK;AAC6D,uBAA7D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;MAJ+B,oEAAgB;;;;;;;AAyDW,MAAnD,qBAAgB,4DAA2B,MAAM;AAChD,kBAAa,AAAc;AACoB,MAAhD,iBAAoB,4CAAsB,KAAK;AAC5B,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,oBAAU;AACf,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAEa,MAA7B,AAAc;IACrB;;;;;EACF;;;;;;;;;;AAtBE,UAAO,sDAAiB;EAC1B;;AAwBE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAE0E,IAArF,4BAAyB,yCAAuB;AAC3B,IAArB;AACqB,IAArB;EACF;;;AA1CE,YAAO;IACT;;;;;;;MAlDoB,qDAA4B;YAAG,EAAS;;MA+CtD,wDAA+B;;;MASjB,yDAAgC;;;MAyBhD,iCAAQ;YAAG","file":"material_icon.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_icon__material_icon$46template: material_icon$46template
  };
}));

//# sourceMappingURL=material_icon.template.unsound.ddc.js.map
