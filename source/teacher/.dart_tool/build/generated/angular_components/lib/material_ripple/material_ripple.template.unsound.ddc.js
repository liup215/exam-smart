define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/utils/color/material.template', 'packages/angular_components/material_ripple/material_ripple.scss.css'], (function load__packages__angular_components__material_ripple__material_ripple_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_ripple__material_ripple, packages__angular__angular$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__utils__browser__feature_detector__feature_detector$46template, packages__angular_components__utils__color__material$46template, packages__angular_components__material_ripple__material_ripple$46scss$46css) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const feature_detector$46template = packages__angular_components__utils__browser__feature_detector__feature_detector$46template.utils__browser__feature_detector__feature_detector$46template;
  const material$46template = packages__angular_components__utils__color__material$46template.utils__color__material$46template;
  const material_ripple$46scss$46css = packages__angular_components__material_ripple__material_ripple$46scss$46css.material_ripple__material_ripple$46scss$46css;
  var material_ripple$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialRippleComponentL = () => (MaterialRippleComponentL = dart.constFn(dart.legacy(material_ripple.MaterialRippleComponent)))();
  var ComponentFactoryOfMaterialRippleComponentL = () => (ComponentFactoryOfMaterialRippleComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialRippleComponentL())))();
  var HostViewOfMaterialRippleComponentL = () => (HostViewOfMaterialRippleComponentL = dart.constFn(host_view.HostView$(MaterialRippleComponentL())))();
  var HostViewLOfMaterialRippleComponentL = () => (HostViewLOfMaterialRippleComponentL = dart.constFn(dart.legacy(HostViewOfMaterialRippleComponentL())))();
  var VoidToHostViewLOfMaterialRippleComponentL = () => (VoidToHostViewLOfMaterialRippleComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialRippleComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_ripple/material_ripple.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_ripple$46template.ViewMaterialRippleComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(material_ripple$46template.viewFactory_MaterialRippleComponentHost0, VoidToHostViewLOfMaterialRippleComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialRippleComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-ripple"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var C0;
  material_ripple$46template.ViewMaterialRippleComponent0 = class ViewMaterialRippleComponent0 extends component_view.ComponentView$(dart.legacy(material_ripple.MaterialRippleComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_ripple/material_ripple.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
    }
    static _debugClearComponentStyles() {
      material_ripple$46template.ViewMaterialRippleComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_ripple$46template.ViewMaterialRippleComponent0._componentStyles;
      if (styles == null) {
        material_ripple$46template.ViewMaterialRippleComponent0._componentStyles = styles = new style_encapsulation._UnscopedComponentStyles.new(material_ripple$46template.styles$MaterialRippleComponent, material_ripple$46template.ViewMaterialRippleComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_ripple$46template.ViewMaterialRippleComponent0.new = function(parentView, parentIndex) {
    material_ripple$46template.ViewMaterialRippleComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-ripple"));
  }).prototype = material_ripple$46template.ViewMaterialRippleComponent0.prototype;
  dart.addTypeTests(material_ripple$46template.ViewMaterialRippleComponent0);
  dart.addTypeCaches(material_ripple$46template.ViewMaterialRippleComponent0);
  dart.setMethodSignature(material_ripple$46template.ViewMaterialRippleComponent0, () => ({
    __proto__: dart.getMethods(material_ripple$46template.ViewMaterialRippleComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_ripple$46template.ViewMaterialRippleComponent0, L0);
  dart.defineLazy(material_ripple$46template.ViewMaterialRippleComponent0, {
    /*material_ripple$46template.ViewMaterialRippleComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_ripple$46template._ViewMaterialRippleComponentHost0 = class _ViewMaterialRippleComponentHost0 extends host_view.HostView$(dart.legacy(material_ripple.MaterialRippleComponent)) {
    build() {
      this.componentView = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_ripple.MaterialRippleComponent.new(_el_0);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (material_ripple$46template._ViewMaterialRippleComponentHost0.new = function() {
    material_ripple$46template._ViewMaterialRippleComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_ripple$46template._ViewMaterialRippleComponentHost0.prototype;
  dart.addTypeTests(material_ripple$46template._ViewMaterialRippleComponentHost0);
  dart.addTypeCaches(material_ripple$46template._ViewMaterialRippleComponentHost0);
  dart.setMethodSignature(material_ripple$46template._ViewMaterialRippleComponentHost0, () => ({
    __proto__: dart.getMethods(material_ripple$46template._ViewMaterialRippleComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_ripple$46template._ViewMaterialRippleComponentHost0, L0);
  var C1;
  material_ripple$46template.createMaterialRippleComponentFactory = function createMaterialRippleComponentFactory() {
    return new (ComponentFactoryOfMaterialRippleComponentL()).new("material-ripple", C1 || CT.C1);
  };
  material_ripple$46template.viewFactory_MaterialRippleComponentHost0 = function viewFactory_MaterialRippleComponentHost0() {
    return new material_ripple$46template._ViewMaterialRippleComponentHost0.new();
  };
  material_ripple$46template.initReflector = function initReflector() {
    if (dart.test(material_ripple$46template._visited)) {
      return;
    }
    material_ripple$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialRippleComponentL()), material_ripple$46template.createMaterialRippleComponentFactory());
    angular$46template.initReflector();
    events$46template.initReflector();
    feature_detector$46template.initReflector();
    material$46template.initReflector();
  };
  dart.copyProperties(material_ripple$46template, {
    get MaterialRippleComponentNgFactory() {
      return material_ripple$46template._MaterialRippleComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(material_ripple$46template, {
    /*material_ripple$46template.styles$MaterialRippleComponent*/get styles$MaterialRippleComponent() {
      return [material_ripple$46scss$46css.styles];
    },
    /*material_ripple$46template._MaterialRippleComponentNgFactory*/get _MaterialRippleComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_ripple$46template.styles$MaterialRippleComponentHost*/get styles$MaterialRippleComponentHost() {
      return C3 || CT.C3;
    },
    /*material_ripple$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_ripple/material_ripple.template", {
    "package:angular_components/material_ripple/material_ripple.template.dart": material_ripple$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_ripple.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+BI,uBAAgB,2BAAY,sEAAsE;IACpG;;AAI4B,6BAAmB,AAAK;IACpD;;AAGyB,MAAvB,2EAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC8F,QAAlH,2EAAoB,SAAiC,qDAAS,2DAAgC;AAC9F,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;0EA1B0C,YAAgB;AAAe,qFAAM,UAAU,EAAE,WAAW;AAC1E,IAA1B,AAAK;AAC+D,uBAA/D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;MAJ+B,wEAAgB;;;;;;;AA4Ca,MAArD,qBAAgB,gEAA6B,MAAM;AAClD,kBAAa,AAAc;AACsB,MAAlD,iBAAoB,gDAAwB,KAAK;AAC9B,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,oBAAU;AACf,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAEa,MAA7B,AAAc;IACrB;;AAI8B,MAAvB,AAAU;IACjB;;;;;EACF;;;;;;;;;;AA3BE,UAAO,wDAAiB;EAC1B;;AA6BE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAE8E,IAAzF,4BAAyB,2CAAyB;AAC7B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAjDE,YAAO;IACT;;;;;;;MApCoB,yDAA8B;YAAG,EAAS;;MAiCxD,4DAAiC;;;MASnB,6DAAkC;;;MA8BlD,mCAAQ;YAAG","file":"material_ripple.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_ripple__material_ripple$46template: material_ripple$46template
  };
}));

//# sourceMappingURL=material_ripple.template.unsound.ddc.js.map
