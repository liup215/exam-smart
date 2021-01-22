define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/highlighted_text/highlighted_value', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/model/ui/highlight_provider', 'packages/angular/angular.template', 'packages/angular_components/highlighted_text/highlighted_text.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/highlight_provider.template', 'packages/angular_components/model/ui/highlighted_text_model.template', 'packages/angular_components/highlighted_text/highlighted_text.scss.css.shim'], (function load__packages__angular_components__highlighted_text__highlighted_value_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__highlighted_text__highlighted_value, packages__angular__src__runtime__text_binding, packages__angular_components__model__ui__highlighted_text_model, packages__angular__src__runtime__interpolate, packages__angular_components__model__ui__highlight_provider, packages__angular__angular$46template, packages__angular_components__highlighted_text__highlighted_text$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__model__ui__highlight_provider$46template, packages__angular_components__model__ui__highlighted_text_model$46template, packages__angular_components__highlighted_text__highlighted_text$46scss$46css$46shim) {
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
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const highlighted_value = packages__angular_components__highlighted_text__highlighted_value.highlighted_text__highlighted_value;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const highlighted_text_model = packages__angular_components__model__ui__highlighted_text_model.model__ui__highlighted_text_model;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const highlight_provider = packages__angular_components__model__ui__highlight_provider.model__ui__highlight_provider;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const highlighted_text$46template = packages__angular_components__highlighted_text__highlighted_text$46template.highlighted_text__highlighted_text$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const highlight_provider$46template = packages__angular_components__model__ui__highlight_provider$46template.model__ui__highlight_provider$46template;
  const highlighted_text_model$46template = packages__angular_components__model__ui__highlighted_text_model$46template.model__ui__highlighted_text_model$46template;
  const highlighted_text$46scss$46css$46shim = packages__angular_components__highlighted_text__highlighted_text$46scss$46css$46shim.highlighted_text__highlighted_text$46scss$46css$46shim;
  var highlighted_value$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var HighlightedTextSegmentL = () => (HighlightedTextSegmentL = dart.constFn(dart.legacy(highlighted_text_model.HighlightedTextSegment)))();
  var HighlightedValueComponentL = () => (HighlightedValueComponentL = dart.constFn(dart.legacy(highlighted_value.HighlightedValueComponent)))();
  var HighlightProviderL = () => (HighlightProviderL = dart.constFn(dart.legacy(highlight_provider.HighlightProvider)))();
  var VoidToHighlightedValueComponentL = () => (VoidToHighlightedValueComponentL = dart.constFn(dart.fnType(HighlightedValueComponentL(), [])))();
  var ComponentFactoryOfHighlightedValueComponentL = () => (ComponentFactoryOfHighlightedValueComponentL = dart.constFn(component_factory.ComponentFactory$(HighlightedValueComponentL())))();
  var HostViewOfHighlightedValueComponentL = () => (HostViewOfHighlightedValueComponentL = dart.constFn(host_view.HostView$(HighlightedValueComponentL())))();
  var HostViewLOfHighlightedValueComponentL = () => (HostViewLOfHighlightedValueComponentL = dart.constFn(dart.legacy(HostViewOfHighlightedValueComponentL())))();
  var VoidToHostViewLOfHighlightedValueComponentL = () => (VoidToHostViewLOfHighlightedValueComponentL = dart.constFn(dart.fnType(HostViewLOfHighlightedValueComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/highlighted_text/highlighted_value.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(highlighted_value$46template.viewFactory_HighlightedValueComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(highlighted_value$46template.ViewHighlightedValueComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.fn(highlighted_value$46template.viewFactory_HighlightedValueComponentHost0, VoidToHostViewLOfHighlightedValueComponentL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfHighlightedValueComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "highlight-value"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_1 = dart.privateName(highlighted_value$46template, "_appEl_1");
  var _NgFor_1_9 = dart.privateName(highlighted_value$46template, "_NgFor_1_9");
  var _expr_0 = dart.privateName(highlighted_value$46template, "_expr_0");
  var C0;
  var C1;
  highlighted_value$46template.ViewHighlightedValueComponent0 = class ViewHighlightedValueComponent0 extends component_view.ComponentView$(dart.legacy(highlighted_value.HighlightedValueComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/highlighted_text/highlighted_value.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.segments;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "segments", "package:angular_components/highlighted_text/highlighted_text.html"))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      highlighted_value$46template.ViewHighlightedValueComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = highlighted_value$46template.ViewHighlightedValueComponent0._componentStyles;
      if (styles == null) {
        highlighted_value$46template.ViewHighlightedValueComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(highlighted_value$46template.styles$HighlightedValueComponent, highlighted_value$46template.ViewHighlightedValueComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (highlighted_value$46template.ViewHighlightedValueComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    highlighted_value$46template.ViewHighlightedValueComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("highlight-value"));
  }).prototype = highlighted_value$46template.ViewHighlightedValueComponent0.prototype;
  dart.addTypeTests(highlighted_value$46template.ViewHighlightedValueComponent0);
  dart.addTypeCaches(highlighted_value$46template.ViewHighlightedValueComponent0);
  dart.setMethodSignature(highlighted_value$46template.ViewHighlightedValueComponent0, () => ({
    __proto__: dart.getMethods(highlighted_value$46template.ViewHighlightedValueComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(highlighted_value$46template.ViewHighlightedValueComponent0, L0);
  dart.setFieldSignature(highlighted_value$46template.ViewHighlightedValueComponent0, () => ({
    __proto__: dart.getFields(highlighted_value$46template.ViewHighlightedValueComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(highlighted_value$46template.ViewHighlightedValueComponent0, {
    /*highlighted_value$46template.ViewHighlightedValueComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(highlighted_value$46template, "_textBinding_1");
  var _el_0 = dart.privateName(highlighted_value$46template, "_el_0");
  highlighted_value$46template._ViewHighlightedValueComponent1 = class _ViewHighlightedValueComponent1 extends embedded_view.EmbeddedView$(dart.legacy(highlighted_value.HighlightedValueComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(this[_el_0]), "text-segment");
      this.addShimE(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      this.initRootNode(this[_el_0]);
    }
    detectChangesInternal() {
      let local_segment = optimizations.unsafeCast(HighlightedTextSegmentL(), this.locals[$_get]("$implicit"));
      let currVal_0 = local_segment.isHighlighted;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "segment.isHighlighted", "package:angular_components/highlighted_text/highlighted_text.html"))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_0]), "segment-highlight", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_segment.text));
    }
  };
  (highlighted_value$46template._ViewHighlightedValueComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_0] = null;
    highlighted_value$46template._ViewHighlightedValueComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = highlighted_value$46template._ViewHighlightedValueComponent1.prototype;
  dart.addTypeTests(highlighted_value$46template._ViewHighlightedValueComponent1);
  dart.addTypeCaches(highlighted_value$46template._ViewHighlightedValueComponent1);
  dart.setMethodSignature(highlighted_value$46template._ViewHighlightedValueComponent1, () => ({
    __proto__: dart.getMethods(highlighted_value$46template._ViewHighlightedValueComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(highlighted_value$46template._ViewHighlightedValueComponent1, L0);
  dart.setFieldSignature(highlighted_value$46template._ViewHighlightedValueComponent1, () => ({
    __proto__: dart.getFields(highlighted_value$46template._ViewHighlightedValueComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  highlighted_value$46template._ViewHighlightedValueComponentHost0 = class _ViewHighlightedValueComponentHost0 extends host_view.HostView$(dart.legacy(highlighted_value.HighlightedValueComponent)) {
    build() {
      this.componentView = new highlighted_value$46template.ViewHighlightedValueComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(HighlightedValueComponentL(), dart.wrapType(HighlightedValueComponentL()), dart.fn(() => new highlighted_value.HighlightedValueComponent.new(HighlightProviderL().as(this.injectorGet(dart.wrapType(HighlightProviderL()), this.parentIndex))), VoidToHighlightedValueComponentL())) : new highlighted_value.HighlightedValueComponent.new(HighlightProviderL().as(this.injectorGet(dart.wrapType(HighlightProviderL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
  };
  (highlighted_value$46template._ViewHighlightedValueComponentHost0.new = function() {
    highlighted_value$46template._ViewHighlightedValueComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = highlighted_value$46template._ViewHighlightedValueComponentHost0.prototype;
  dart.addTypeTests(highlighted_value$46template._ViewHighlightedValueComponentHost0);
  dart.addTypeCaches(highlighted_value$46template._ViewHighlightedValueComponentHost0);
  dart.setMethodSignature(highlighted_value$46template._ViewHighlightedValueComponentHost0, () => ({
    __proto__: dart.getMethods(highlighted_value$46template._ViewHighlightedValueComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(highlighted_value$46template._ViewHighlightedValueComponentHost0, L0);
  var C2;
  highlighted_value$46template.createHighlightedValueComponentFactory = function createHighlightedValueComponentFactory() {
    return new (ComponentFactoryOfHighlightedValueComponentL()).new("highlight-value", C2 || CT.C2);
  };
  highlighted_value$46template.viewFactory_HighlightedValueComponent1 = function viewFactory_HighlightedValueComponent1(parentView, parentIndex) {
    return new highlighted_value$46template._ViewHighlightedValueComponent1.new(parentView, parentIndex);
  };
  highlighted_value$46template.viewFactory_HighlightedValueComponentHost0 = function viewFactory_HighlightedValueComponentHost0() {
    return new highlighted_value$46template._ViewHighlightedValueComponentHost0.new();
  };
  highlighted_value$46template.initReflector = function initReflector() {
    if (dart.test(highlighted_value$46template._visited)) {
      return;
    }
    highlighted_value$46template._visited = true;
    reflector.registerComponent(dart.wrapType(HighlightedValueComponentL()), highlighted_value$46template.createHighlightedValueComponentFactory());
    angular$46template.initReflector();
    highlighted_text$46template.initReflector();
    has_renderer$46template.initReflector();
    highlight_provider$46template.initReflector();
    highlighted_text_model$46template.initReflector();
  };
  dart.copyProperties(highlighted_value$46template, {
    get HighlightedValueComponentNgFactory() {
      return highlighted_value$46template._HighlightedValueComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  var C4;
  dart.defineLazy(highlighted_value$46template, {
    /*highlighted_value$46template.styles$HighlightedValueComponent*/get styles$HighlightedValueComponent() {
      return [highlighted_text$46scss$46css$46shim.styles];
    },
    /*highlighted_value$46template._HighlightedValueComponentNgFactory*/get _HighlightedValueComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*highlighted_value$46template.styles$HighlightedValueComponentHost*/get styles$HighlightedValueComponentHost() {
      return C4 || CT.C4;
    },
    /*highlighted_value$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_value.template", {
    "package:angular_components/highlighted_text/highlighted_value.template.dart": highlighted_value$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_value.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8CI,uBAAgB,2BAAY,yEAAyE;IACvG;;AAI4B,6BAAmB,AAAK;AAC5C,oBAAU,uBAAoB,gBAAgB,EAAE;AAChD,sBAAY,yBAAsB,gBAAgB;AACD,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AAC1C,6BAAmB,iCAAiB;AACgB,MAA3D,mBAAqB,qBAAW,gBAAU,gBAAgB;IACjE;;AAIQ,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,YAAY;AACzB,QAA9B,AAAW,2BAAU,SAAS;AACX,QAAnB,gBAAU,SAAS;;AAE1B,qBAAc;AACe,QAAtB,AAAW;;AAEwB,MAArC,AAAS;IAChB;;AAIoC,MAA7B,AAAS;IAChB;;AAGyB,MAAvB,+EAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC8F,QAAlH,+EAAoB,SAAiC,2CAAO,+DAAkC;AAC9F,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;8EAlD4C,YAAgB;IAJ9C;IACA;IACV;AAEuE,yFAAM,UAAU,EAAE,WAAW;AAC5E,IAA1B,AAAK;AAC+D,uBAA/D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;MAJ+B,4EAAgB;;;;;;;;;AAsEvC,gBAAc;AACkB,MAAjC,cAAQ,AAAI,GAAD,iBAAe;AACkB,MAAjD,AAAK,wCAAsB,cAAO;AACT,MAAzB,AAAK,cAAc;AAC2B,MAAzC,AAAM,qBAAY,AAAe;AACT,MAA7B,AAAK,kBAAkB;IACzB;;AAIQ,0BAAgB,oDAAyD,AAAM,mBAAC;AAChF,sBAAY,AAAc,aAAD;AAC/B,oBAAI,2BAA0B,eAAS,SAAS,EAAE,yBAAyB;AACF,QAAvE,iDAAiC,cAAO,qBAAqB,SAAS;AAC9C,QAAnB,gBAAU,SAAS;;AAEqD,MAA1E,AAAe,gCAAW,+BAA4B,AAAc,aAAD;IAC1E;;+EApBoD,YAAgB;IAHzC,uBAA0B;IACjD;IACY;AACmE,0FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;AAgCnD,MAAvD,qBAAgB,oEAA+B,MAAM;AACpD,kBAAa,AAAc;AAKuE,MAJnG,2BAAqB,2BACpB,uDAAmC,6CAA2B,cAC7C,4EAA0B,AAAK,iBAAqB,qCAAwB,4DAErF,4EAA0B,AAAK,iBAAqB,qCAAwB;AAClE,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;;AAhDE,UAAO,0DAAiB;EAC1B;wHA6BuF,YAAgB;AACrG,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;;AAmBE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAEkF,IAA7F,4BAAyB,6CAA2B;AAC/B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAvEE,YAAO;IACT;;;;;;;MA/DoB,6DAAgC;YAAG,EAAS;;MA4D1D,gEAAmC;;;MAwCrB,iEAAoC;;;MAoBpD,qCAAQ;YAAG","file":"highlighted_value.template.unsound.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_value$46template: highlighted_value$46template
  };
}));

//# sourceMappingURL=highlighted_value.template.unsound.ddc.js.map
