define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/reorder_list/reorder_list', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular/angular.template', 'packages/angular_components/reorder_list/reorder_events.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/keyboard/keyboard.template', 'packages/angular_components/reorder_list/reorder_list.scss.css.shim'], (function load__packages__angular_components__reorder_list__reorder_list_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__reorder_list__reorder_list, packages__angular__src__core__change_detection__directive_change_detector, packages__angular__angular$46template, packages__angular_components__reorder_list__reorder_events$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__keyboard__keyboard$46template, packages__angular_components__reorder_list__reorder_list$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const reorder_list = packages__angular_components__reorder_list__reorder_list.reorder_list__reorder_list;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const reorder_events$46template = packages__angular_components__reorder_list__reorder_events$46template.reorder_list__reorder_events$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const keyboard$46template = packages__angular_components__utils__keyboard__keyboard$46template.utils__keyboard__keyboard$46template;
  const reorder_list$46scss$46css$46shim = packages__angular_components__reorder_list__reorder_list$46scss$46css$46shim.reorder_list__reorder_list$46scss$46css$46shim;
  var reorder_list$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ReorderListComponentL = () => (ReorderListComponentL = dart.constFn(dart.legacy(reorder_list.ReorderListComponent)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToReorderListComponentL = () => (VoidToReorderListComponentL = dart.constFn(dart.fnType(ReorderListComponentL(), [])))();
  var ReorderItemDirectiveL = () => (ReorderItemDirectiveL = dart.constFn(dart.legacy(reorder_list.ReorderItemDirective)))();
  var JSArrayOfReorderItemDirectiveL = () => (JSArrayOfReorderItemDirectiveL = dart.constFn(_interceptors.JSArray$(ReorderItemDirectiveL())))();
  var ComponentFactoryOfReorderListComponentL = () => (ComponentFactoryOfReorderListComponentL = dart.constFn(component_factory.ComponentFactory$(ReorderListComponentL())))();
  var HostViewOfReorderListComponentL = () => (HostViewOfReorderListComponentL = dart.constFn(host_view.HostView$(ReorderListComponentL())))();
  var HostViewLOfReorderListComponentL = () => (HostViewLOfReorderListComponentL = dart.constFn(dart.legacy(HostViewOfReorderListComponentL())))();
  var VoidToHostViewLOfReorderListComponentL = () => (VoidToHostViewLOfReorderListComponentL = dart.constFn(dart.fnType(HostViewLOfReorderListComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/reorder_list/reorder_list.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(reorder_list$46template.ViewReorderListComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(reorder_list$46template.viewFactory_ReorderListComponentHost0, VoidToHostViewLOfReorderListComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfReorderListComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "reorder-list"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(reorder_list$46template, "_expr_0");
  var _expr_1 = dart.privateName(reorder_list$46template, "_expr_1");
  var _expr_2 = dart.privateName(reorder_list$46template, "_expr_2");
  var _el_1 = dart.privateName(reorder_list$46template, "_el_1");
  var C0;
  reorder_list$46template.ViewReorderListComponent0 = class ViewReorderListComponent0 extends component_view.ComponentView$(dart.legacy(reorder_list.ReorderListComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/reorder_list/reorder_list.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      this.project(parentRenderNode, 0);
      let doc = html.document;
      this[_el_1] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_1], "placeholder");
      this.addShimC(this[_el_1]);
      this.project(this[_el_1], 1);
      _ctx.placeholder = this[_el_1];
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = !dart.test(_ctx.showPlaceholder);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!showPlaceholder", "package:angular_components/reorder_list/reorder_list.html"))) {
        dom_helpers.updateClassBinding(this[_el_1], "hidden", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.verticalItems;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "vertical", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.multiSelect;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "multiselect", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    static _debugClearComponentStyles() {
      reorder_list$46template.ViewReorderListComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = reorder_list$46template.ViewReorderListComponent0._componentStyles;
      if (styles == null) {
        reorder_list$46template.ViewReorderListComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(reorder_list$46template.styles$ReorderListComponent, reorder_list$46template.ViewReorderListComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (reorder_list$46template.ViewReorderListComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_1] = null;
    reorder_list$46template.ViewReorderListComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("reorder-list"));
    this.updateChildClassNonHtml(this.rootElement, "themeable");
    dom_helpers.updateAttribute(this.rootElement, "role", "list");
  }).prototype = reorder_list$46template.ViewReorderListComponent0.prototype;
  dart.addTypeTests(reorder_list$46template.ViewReorderListComponent0);
  dart.addTypeCaches(reorder_list$46template.ViewReorderListComponent0);
  dart.setMethodSignature(reorder_list$46template.ViewReorderListComponent0, () => ({
    __proto__: dart.getMethods(reorder_list$46template.ViewReorderListComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(reorder_list$46template.ViewReorderListComponent0, L0);
  dart.setFieldSignature(reorder_list$46template.ViewReorderListComponent0, () => ({
    __proto__: dart.getFields(reorder_list$46template.ViewReorderListComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(reorder_list$46template.ViewReorderListComponent0, {
    /*reorder_list$46template.ViewReorderListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  reorder_list$46template._ViewReorderListComponentHost0 = class _ViewReorderListComponentHost0 extends host_view.HostView$(dart.legacy(reorder_list.ReorderListComponent)) {
    build() {
      this.componentView = new reorder_list$46template.ViewReorderListComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ReorderListComponentL(), dart.wrapType(ReorderListComponentL()), dart.fn(() => new reorder_list.ReorderListComponent.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex))), VoidToReorderListComponentL())) : new reorder_list.ReorderListComponent.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)));
      this.component.items = JSArrayOfReorderItemDirectiveL().of([]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ReorderListComponentL()) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (reorder_list$46template._ViewReorderListComponentHost0.new = function() {
    reorder_list$46template._ViewReorderListComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = reorder_list$46template._ViewReorderListComponentHost0.prototype;
  dart.addTypeTests(reorder_list$46template._ViewReorderListComponentHost0);
  dart.addTypeCaches(reorder_list$46template._ViewReorderListComponentHost0);
  dart.setMethodSignature(reorder_list$46template._ViewReorderListComponentHost0, () => ({
    __proto__: dart.getMethods(reorder_list$46template._ViewReorderListComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(reorder_list$46template._ViewReorderListComponentHost0, L0);
  var instance$ = dart.privateName(reorder_list$46template, "ReorderItemDirectiveNgCd.instance");
  reorder_list$46template.ReorderItemDirectiveNgCd = class ReorderItemDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.hostDraggable;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateAttribute(el, "draggable", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (reorder_list$46template.ReorderItemDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    ;
  }).prototype = reorder_list$46template.ReorderItemDirectiveNgCd.prototype;
  dart.addTypeTests(reorder_list$46template.ReorderItemDirectiveNgCd);
  dart.addTypeCaches(reorder_list$46template.ReorderItemDirectiveNgCd);
  dart.setMethodSignature(reorder_list$46template.ReorderItemDirectiveNgCd, () => ({
    __proto__: dart.getMethods(reorder_list$46template.ReorderItemDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(render_view.RenderView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(reorder_list$46template.ReorderItemDirectiveNgCd, L0);
  dart.setFieldSignature(reorder_list$46template.ReorderItemDirectiveNgCd, () => ({
    __proto__: dart.getFields(reorder_list$46template.ReorderItemDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(reorder_list.ReorderItemDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var C1;
  reorder_list$46template.createReorderListComponentFactory = function createReorderListComponentFactory() {
    return new (ComponentFactoryOfReorderListComponentL()).new("reorder-list", C1 || CT.C1);
  };
  reorder_list$46template.viewFactory_ReorderListComponentHost0 = function viewFactory_ReorderListComponentHost0() {
    return new reorder_list$46template._ViewReorderListComponentHost0.new();
  };
  reorder_list$46template.initReflector = function initReflector() {
    if (dart.test(reorder_list$46template._visited)) {
      return;
    }
    reorder_list$46template._visited = true;
    reflector.registerComponent(dart.wrapType(ReorderListComponentL()), reorder_list$46template.createReorderListComponentFactory());
    angular$46template.initReflector();
    reorder_events$46template.initReflector();
    disposer$46template.initReflector();
    keyboard$46template.initReflector();
    reorder_events$46template.initReflector();
  };
  dart.copyProperties(reorder_list$46template, {
    get ReorderListComponentNgFactory() {
      return reorder_list$46template._ReorderListComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(reorder_list$46template, {
    /*reorder_list$46template.styles$ReorderListComponent*/get styles$ReorderListComponent() {
      return [reorder_list$46scss$46css$46shim.styles];
    },
    /*reorder_list$46template._ReorderListComponentNgFactory*/get _ReorderListComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*reorder_list$46template.styles$ReorderListComponentHost*/get styles$ReorderListComponentHost() {
      return C3 || CT.C3;
    },
    /*reorder_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/reorder_list/reorder_list.template", {
    "package:angular_components/reorder_list/reorder_list.template.dart": reorder_list$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reorder_list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,uBAAgB,2BAAY,gEAAgE;IAC9F;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,oBAAU,uBAAmB,gBAAgB,EAAE;AACpB,MAAjC,AAAK,aAAQ,gBAAgB,EAAE;AACzB,gBAAc;AACiC,MAAhD,cAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACJ,MAAhD,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACQ,MAA3B,AAAK,aAAa,aAAO;AACI,MAA7B,AAAK,IAAD,eAAoB;IAC1B;;AAIQ,iBAAY;AACP,sBAAa,WAAC,AAAK,IAAD;AAC7B,oBAAI,2BAA0B,eAAS,SAAS,EAAE,oBAAoB;AACT,QAA3D,+BAAgC,aAAO,UAAU,SAAS;AAClC,QAAnB,gBAAU,SAAS;;IAE5B;sBAE4B;AACpB,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACoB,QAA1E,sCAAuC,kBAAa,YAAY,SAAS;AACjD,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACuB,QAA7E,sCAAuC,kBAAa,eAAe,SAAS;AACpD,QAAnB,gBAAU,SAAS;;IAE5B;;AAGyB,MAAvB,qEAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACyF,QAA7G,qEAAoB,SAAiC,2CAAO,qDAA6B;AACzF,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;oEA7DuC,YAAgB;IALnD;IACA;IACA;IACe;AAEmD,+EAAM,UAAU,EAAE,WAAW;AACvE,IAA1B,AAAK;AAC4D,uBAA5D,kBAAsB,AAAS,8BAAc;AACoC,IAAtF,AAAK,6BAA6B;AACsD,IAAxF,4BAA6B,kBAAa;EAC5C;;;;;;;;;;;;;;;;MAN+B,kEAAgB;;;;;;;AA+EU,MAAlD,qBAAgB,0DAA0B,MAAM;AAC/C,kBAAa,AAAc;AAKuD,MAJnF,2BAAqB,2BACpB,kDAAmC,wCAAsB,cACxC,uDAAqB,AAAK,iBAAqB,0BAAa,uDAErE,uDAAqB,AAAK,iBAAqB,0BAAa;AACjD,MAApB,AAAU,uBAAQ;AACC,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAU,0CAA0B,AAAE,MAAG,SAAS;AACpE,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIO,uBAAkB;AACyB,MAA3C,AAAc,qCAAkB,UAAU;AACb,MAA7B,AAAc;IACrB;;AAI8B,MAAvB,AAAU;IACjB;;;;;EACF;;;;;;;;;;;IAOqC;;;;;;sBAGQ,MAAsB;AACzD,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACH,QAAnD,4BAAwB,EAAE,EAAE,aAAa,SAAS;AAC1B,QAAnB,gBAAU,SAAS;;IAE5B;;mEAP8B;IAD1B;IAC0B;;EAAS;;;;;;;;;;;;;;;AA/CvC,UAAO,qDAAiB;EAC1B;;AAwCE,UAAO;EACT;;AAiBE,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEwE,IAAnF,4BAAyB,wCAAsB;AAC1B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AA1EE,YAAO;IACT;;;;;;;MA3EoB,mDAA2B;YAAG,EAAS;;MAwErD,sDAA8B;;;MAShB,uDAA+B;;;MAsD/C,gCAAQ;YAAG","file":"reorder_list.template.unsound.ddc.js"}');
  // Exports:
  return {
    reorder_list__reorder_list$46template: reorder_list$46template
  };
}));

//# sourceMappingURL=reorder_list.template.unsound.ddc.js.map
