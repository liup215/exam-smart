define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/focus/focus_trap', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/browser/dom_iterator/dom_iterator.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/focus/focus_trap.scss.css.shim'], (function load__packages__angular_components__focus__focus_trap_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__focus__focus_trap, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__utils__browser__dom_iterator__dom_iterator$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__focus__focus_trap$46scss$46css$46shim) {
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
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const dom_iterator$46template = packages__angular_components__utils__browser__dom_iterator__dom_iterator$46template.utils__browser__dom_iterator__dom_iterator$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const focus_trap$46scss$46css$46shim = packages__angular_components__focus__focus_trap$46scss$46css$46shim.focus__focus_trap$46scss$46css$46shim;
  var focus_trap$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FocusTrapComponentL = () => (FocusTrapComponentL = dart.constFn(dart.legacy(focus_trap.FocusTrapComponent)))();
  var ComponentFactoryOfFocusTrapComponentL = () => (ComponentFactoryOfFocusTrapComponentL = dart.constFn(component_factory.ComponentFactory$(FocusTrapComponentL())))();
  var HostViewOfFocusTrapComponentL = () => (HostViewOfFocusTrapComponentL = dart.constFn(host_view.HostView$(FocusTrapComponentL())))();
  var HostViewLOfFocusTrapComponentL = () => (HostViewLOfFocusTrapComponentL = dart.constFn(dart.legacy(HostViewOfFocusTrapComponentL())))();
  var VoidToHostViewLOfFocusTrapComponentL = () => (VoidToHostViewLOfFocusTrapComponentL = dart.constFn(dart.fnType(HostViewLOfFocusTrapComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/focus/focus_trap.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(focus_trap$46template.ViewFocusTrapComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(focus_trap$46template.viewFactory_FocusTrapComponentHost0, VoidToHostViewLOfFocusTrapComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFocusTrapComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "focus-trap"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _FocusContentWrapper_1_5 = dart.privateName(focus_trap$46template, "_FocusContentWrapper_1_5");
  var C0;
  focus_trap$46template.ViewFocusTrapComponent0 = class ViewFocusTrapComponent0 extends component_view.ComponentView$(dart.legacy(focus_trap.FocusTrapComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/focus/focus_trap.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      _el_0.tabIndex = 0;
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(_el_1, "focusContentWrapper", "");
      dom_helpers.setAttribute(_el_1, "style", "outline: none");
      _el_1.tabIndex = -1;
      this.addShimC(_el_1);
      this[_FocusContentWrapper_1_5] = new focus_trap.FocusContentWrapper.new(_el_1);
      this.project(_el_1, 0);
      let _el_2 = dom_helpers.appendDiv(doc, parentRenderNode);
      _el_2.tabIndex = 0;
      this.addShimC(_el_2);
      _el_0[$addEventListener]("focus", this.eventHandler0(EventL(), dart.bind(_ctx, 'focusLast')));
      _el_2[$addEventListener]("focus", this.eventHandler0(EventL(), dart.bind(_ctx, 'focusFirst')));
      _ctx.content = this[_FocusContentWrapper_1_5];
    }
    static _debugClearComponentStyles() {
      focus_trap$46template.ViewFocusTrapComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = focus_trap$46template.ViewFocusTrapComponent0._componentStyles;
      if (styles == null) {
        focus_trap$46template.ViewFocusTrapComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(focus_trap$46template.styles$FocusTrapComponent, focus_trap$46template.ViewFocusTrapComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (focus_trap$46template.ViewFocusTrapComponent0.new = function(parentView, parentIndex) {
    this[_FocusContentWrapper_1_5] = null;
    focus_trap$46template.ViewFocusTrapComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("focus-trap"));
  }).prototype = focus_trap$46template.ViewFocusTrapComponent0.prototype;
  dart.addTypeTests(focus_trap$46template.ViewFocusTrapComponent0);
  dart.addTypeCaches(focus_trap$46template.ViewFocusTrapComponent0);
  dart.setMethodSignature(focus_trap$46template.ViewFocusTrapComponent0, () => ({
    __proto__: dart.getMethods(focus_trap$46template.ViewFocusTrapComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(focus_trap$46template.ViewFocusTrapComponent0, L0);
  dart.setFieldSignature(focus_trap$46template.ViewFocusTrapComponent0, () => ({
    __proto__: dart.getFields(focus_trap$46template.ViewFocusTrapComponent0.__proto__),
    [_FocusContentWrapper_1_5]: dart.fieldType(dart.legacy(focus_trap.FocusContentWrapper))
  }));
  dart.defineLazy(focus_trap$46template.ViewFocusTrapComponent0, {
    /*focus_trap$46template.ViewFocusTrapComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  focus_trap$46template._ViewFocusTrapComponentHost0 = class _ViewFocusTrapComponentHost0 extends host_view.HostView$(dart.legacy(focus_trap.FocusTrapComponent)) {
    build() {
      this.componentView = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new focus_trap.FocusTrapComponent.new();
      this.initRootNode(_el_0);
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (focus_trap$46template._ViewFocusTrapComponentHost0.new = function() {
    focus_trap$46template._ViewFocusTrapComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = focus_trap$46template._ViewFocusTrapComponentHost0.prototype;
  dart.addTypeTests(focus_trap$46template._ViewFocusTrapComponentHost0);
  dart.addTypeCaches(focus_trap$46template._ViewFocusTrapComponentHost0);
  dart.setMethodSignature(focus_trap$46template._ViewFocusTrapComponentHost0, () => ({
    __proto__: dart.getMethods(focus_trap$46template._ViewFocusTrapComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(focus_trap$46template._ViewFocusTrapComponentHost0, L0);
  var C1;
  focus_trap$46template.createFocusTrapComponentFactory = function createFocusTrapComponentFactory() {
    return new (ComponentFactoryOfFocusTrapComponentL()).new("focus-trap", C1 || CT.C1);
  };
  focus_trap$46template.viewFactory_FocusTrapComponentHost0 = function viewFactory_FocusTrapComponentHost0() {
    return new focus_trap$46template._ViewFocusTrapComponentHost0.new();
  };
  focus_trap$46template.initReflector = function initReflector() {
    if (dart.test(focus_trap$46template._visited)) {
      return;
    }
    focus_trap$46template._visited = true;
    reflector.registerComponent(dart.wrapType(FocusTrapComponentL()), focus_trap$46template.createFocusTrapComponentFactory());
    angular$46template.initReflector();
    focus$46template.initReflector();
    dom_iterator$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(focus_trap$46template, {
    get FocusTrapComponentNgFactory() {
      return focus_trap$46template._FocusTrapComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(focus_trap$46template, {
    /*focus_trap$46template.styles$FocusTrapComponent*/get styles$FocusTrapComponent() {
      return [focus_trap$46scss$46css$46shim.styles];
    },
    /*focus_trap$46template._FocusTrapComponentNgFactory*/get _FocusTrapComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*focus_trap$46template.styles$FocusTrapComponentHost*/get styles$FocusTrapComponentHost() {
      return C3 || CT.C3;
    },
    /*focus_trap$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/focus/focus_trap.template", {
    "package:angular_components/focus/focus_trap.template.dart": focus_trap$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_trap.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiCI,uBAAgB,2BAAY,uDAAuD;IACrF;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACnC,MAAlB,AAAM,KAAD,YAAY;AACG,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACC,MAAtD,yBAAqB,KAAK,EAAE,uBAAuB;AACE,MAArD,yBAAqB,KAAK,EAAE,SAAS;AAClB,MAAnB,AAAM,KAAD,YAAY,CAAC;AACE,MAApB,AAAK,cAAS,KAAK;AAC+C,MAA7D,iCAAmC,uCAAoB,KAAK;AAC3C,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACnC,MAAlB,AAAM,KAAD,YAAY;AACG,MAApB,AAAK,cAAS,KAAK;AACgD,MAAnE,AAAM,KAAD,oBAAkB,SAAS,AAAK,6BAAmB,UAAL,IAAI;AACa,MAApE,AAAM,KAAD,oBAAkB,SAAS,AAAK,6BAAmB,UAAL,IAAI;AACX,MAA5C,AAAK,IAAD,WAAgB;IACtB;;AAGyB,MAAvB,iEAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACuF,QAA3G,iEAAoB,SAAiC,2CAAO,iDAA2B;AACvF,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;gEA5CqC,YAAgB;IAFzB;AAEwC,2EAAM,UAAU,EAAE,WAAW;AACrE,IAA1B,AAAK;AAC0D,uBAA1D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;MAJ+B,8DAAgB;;;;;;;AA8DQ,MAAhD,qBAAgB,sDAAwB,MAAM;AAC7C,kBAAa,AAAc;AACY,MAAxC,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAI8B,MAAvB,AAAU;IACjB;;;;;EACF;;;;;;;;;;AAlBE,UAAO,mDAAiB;EAC1B;;AAoBE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEoE,IAA/E,4BAAyB,sCAAoB;AACxB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAxCE,YAAO;IACT;;;;;;;MAvDoB,+CAAyB;YAAG,EAAS;;MAoDnD,kDAA4B;;;MASd,mDAA6B;;;MAqB7C,8BAAQ;YAAG","file":"focus_trap.template.unsound.ddc.js"}');
  // Exports:
  return {
    focus__focus_trap$46template: focus_trap$46template
  };
}));

//# sourceMappingURL=focus_trap.template.unsound.ddc.js.map
