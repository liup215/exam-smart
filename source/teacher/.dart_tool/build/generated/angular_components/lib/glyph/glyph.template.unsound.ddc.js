define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/glyph/glyph', 'packages/angular/angular.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/glyph/glyph.scss.css.shim'], (function load__packages__angular_components__glyph__glyph_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate, packages__angular_components__glyph__glyph, packages__angular__angular$46template, packages__angular_components__model__ui__icon$46template, packages__angular_components__glyph__glyph$46scss$46css$46shim) {
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
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const glyph = packages__angular_components__glyph__glyph.glyph__glyph;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const icon$46template = packages__angular_components__model__ui__icon$46template.model__ui__icon$46template;
  const glyph$46scss$46css$46shim = packages__angular_components__glyph__glyph$46scss$46css$46shim.glyph__glyph$46scss$46css$46shim;
  var glyph$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var GlyphComponentL = () => (GlyphComponentL = dart.constFn(dart.legacy(glyph.GlyphComponent)))();
  var ComponentFactoryOfGlyphComponentL = () => (ComponentFactoryOfGlyphComponentL = dart.constFn(component_factory.ComponentFactory$(GlyphComponentL())))();
  var HostViewOfGlyphComponentL = () => (HostViewOfGlyphComponentL = dart.constFn(host_view.HostView$(GlyphComponentL())))();
  var HostViewLOfGlyphComponentL = () => (HostViewLOfGlyphComponentL = dart.constFn(dart.legacy(HostViewOfGlyphComponentL())))();
  var VoidToHostViewLOfGlyphComponentL = () => (VoidToHostViewLOfGlyphComponentL = dart.constFn(dart.fnType(HostViewLOfGlyphComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/glyph/glyph.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(glyph$46template.ViewGlyphComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(glyph$46template.viewFactory_GlyphComponentHost0, VoidToHostViewLOfGlyphComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfGlyphComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "glyph"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_2 = dart.privateName(glyph$46template, "_textBinding_2");
  var _expr_0 = dart.privateName(glyph$46template, "_expr_0");
  var _el_1 = dart.privateName(glyph$46template, "_el_1");
  var C0;
  glyph$46template.ViewGlyphComponent0 = class ViewGlyphComponent0 extends component_view.ComponentView$(dart.legacy(glyph.GlyphComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/glyph/glyph.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      this[_el_1] = dom_helpers.appendElement(doc, parentRenderNode, "i");
      dom_helpers.setAttribute(this[_el_1], "aria-hidden", "true");
      this.updateChildClass(HtmlElementL().as(this[_el_1]), "glyph-i");
      this.addShimE(this[_el_1]);
      this[_el_1][$append](this[_textBinding_2].element);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.useMaterialIconsExtended;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "useMaterialIconsExtended", "package:angular_components/glyph/glyph.html"))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_1]), "material-icons", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_textBinding_2].updateText(interpolate.interpolateString0(_ctx.iconName));
    }
    static _debugClearComponentStyles() {
      glyph$46template.ViewGlyphComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = glyph$46template.ViewGlyphComponent0._componentStyles;
      if (styles == null) {
        glyph$46template.ViewGlyphComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(glyph$46template.styles$GlyphComponent, glyph$46template.ViewGlyphComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (glyph$46template.ViewGlyphComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_1] = null;
    glyph$46template.ViewGlyphComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("glyph"));
  }).prototype = glyph$46template.ViewGlyphComponent0.prototype;
  dart.addTypeTests(glyph$46template.ViewGlyphComponent0);
  dart.addTypeCaches(glyph$46template.ViewGlyphComponent0);
  dart.setMethodSignature(glyph$46template.ViewGlyphComponent0, () => ({
    __proto__: dart.getMethods(glyph$46template.ViewGlyphComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(glyph$46template.ViewGlyphComponent0, L0);
  dart.setFieldSignature(glyph$46template.ViewGlyphComponent0, () => ({
    __proto__: dart.getFields(glyph$46template.ViewGlyphComponent0.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(glyph$46template.ViewGlyphComponent0, {
    /*glyph$46template.ViewGlyphComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  glyph$46template._ViewGlyphComponentHost0 = class _ViewGlyphComponentHost0 extends host_view.HostView$(dart.legacy(glyph.GlyphComponent)) {
    build() {
      this.componentView = new glyph$46template.ViewGlyphComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new glyph.GlyphComponent.new(_el_0);
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
  (glyph$46template._ViewGlyphComponentHost0.new = function() {
    glyph$46template._ViewGlyphComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = glyph$46template._ViewGlyphComponentHost0.prototype;
  dart.addTypeTests(glyph$46template._ViewGlyphComponentHost0);
  dart.addTypeCaches(glyph$46template._ViewGlyphComponentHost0);
  dart.setMethodSignature(glyph$46template._ViewGlyphComponentHost0, () => ({
    __proto__: dart.getMethods(glyph$46template._ViewGlyphComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(glyph$46template._ViewGlyphComponentHost0, L0);
  var C1;
  glyph$46template.createGlyphComponentFactory = function createGlyphComponentFactory() {
    return new (ComponentFactoryOfGlyphComponentL()).new("glyph", C1 || CT.C1);
  };
  glyph$46template.viewFactory_GlyphComponentHost0 = function viewFactory_GlyphComponentHost0() {
    return new glyph$46template._ViewGlyphComponentHost0.new();
  };
  glyph$46template.initReflector = function initReflector() {
    if (dart.test(glyph$46template._visited)) {
      return;
    }
    glyph$46template._visited = true;
    reflector.registerComponent(dart.wrapType(GlyphComponentL()), glyph$46template.createGlyphComponentFactory());
    angular$46template.initReflector();
    icon$46template.initReflector();
  };
  dart.copyProperties(glyph$46template, {
    get GlyphComponentNgFactory() {
      return glyph$46template._GlyphComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(glyph$46template, {
    /*glyph$46template.styles$GlyphComponent*/get styles$GlyphComponent() {
      return [glyph$46scss$46css$46shim.styles];
    },
    /*glyph$46template._GlyphComponentNgFactory*/get _GlyphComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*glyph$46template.styles$GlyphComponentHost*/get styles$GlyphComponentHost() {
      return C3 || CT.C3;
    },
    /*glyph$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/glyph/glyph.template", {
    "package:angular_components/glyph/glyph.template.dart": glyph$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["glyph.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmCI,uBAAgB,2BAAY,kDAAkD;IAChF;;AAI4B,6BAAmB,AAAK;AAC5C,oBAAU,uBAAmB,gBAAgB,EAAE;AAC/C,gBAAc;AAC0C,MAAzD,cAAQ,0BAAsB,GAAG,EAAE,gBAAgB,EAAE;AACH,MAAvD,yBAA0B,aAAO,eAAe;AACJ,MAA5C,AAAK,wCAAsB,cAAO;AACT,MAAzB,AAAK,cAAc;AAC2B,MAAzC,AAAM,qBAAY,AAAe;IACxC;;AAIQ,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,4BAA4B;AACT,QAAnE,iDAAgC,cAAO,kBAAkB,SAAS;AAC1C,QAAnB,gBAAU,SAAS;;AAEgD,MAArE,AAAe,gCAAW,+BAA4B,AAAK,IAAD;IACjE;;AAGyB,MAAvB,wDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACmF,QAAvG,wDAAoB,SAAiC,2CAAO,wCAAuB;AACnF,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;uDA5CiC,YAAgB;IAJvB,uBAAyB;IAC/C;IACY;AAEgD,kEAAM,UAAU,EAAE,WAAW;AACjE,IAA1B,AAAK;AACqD,uBAArD,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;MAJ+B,qDAAgB;;;;;;;AA8DI,MAA5C,qBAAgB,6CAAoB,MAAM;AACzC,kBAAa,AAAc;AACa,MAAzC,iBAAoB,6BAAe,KAAK;AACrB,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,oBAAU;AACf,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAEa,MAA7B,AAAc;IACrB;;;;;EACF;;;;;;;;;;AAtBE,UAAO,+CAAiB;EAC1B;;AAwBE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,4BAAW;AAE4D,IAAvE,4BAAyB,kCAAgB;AACpB,IAArB;AACqB,IAArB;EACF;;;AA1CE,YAAO;IACT;;;;;;;MAzDoB,sCAAqB;YAAG,EAAS;;MAsD/C,yCAAwB;;;MASV,0CAAyB;;;MAyBzC,yBAAQ;YAAG","file":"glyph.template.unsound.ddc.js"}');
  // Exports:
  return {
    glyph__glyph$46template: glyph$46template
  };
}));

//# sourceMappingURL=glyph.template.unsound.ddc.js.map
