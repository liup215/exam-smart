define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/highlighted_text/highlighted_text', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular/src/runtime/interpolate', 'packages/angular/angular.template', 'packages/angular_components/model/ui/highlighted_text_model.template', 'packages/angular_components/highlighted_text/highlighted_text.scss.css.shim'], (function load__packages__angular_components__highlighted_text__highlighted_text_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__highlighted_text__highlighted_text, packages__angular__src__runtime__text_binding, packages__angular_components__model__ui__highlighted_text_model, packages__angular__src__runtime__interpolate, packages__angular__angular$46template, packages__angular_components__model__ui__highlighted_text_model$46template, packages__angular_components__highlighted_text__highlighted_text$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
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
  const highlighted_text = packages__angular_components__highlighted_text__highlighted_text.highlighted_text__highlighted_text;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const highlighted_text_model = packages__angular_components__model__ui__highlighted_text_model.model__ui__highlighted_text_model;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const highlighted_text_model$46template = packages__angular_components__model__ui__highlighted_text_model$46template.model__ui__highlighted_text_model$46template;
  const highlighted_text$46scss$46css$46shim = packages__angular_components__highlighted_text__highlighted_text$46scss$46css$46shim.highlighted_text__highlighted_text$46scss$46css$46shim;
  var highlighted_text$46template = Object.create(dart.library);
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
  var HighlightedTextComponentL = () => (HighlightedTextComponentL = dart.constFn(dart.legacy(highlighted_text.HighlightedTextComponent)))();
  var ComponentFactoryOfHighlightedTextComponentL = () => (ComponentFactoryOfHighlightedTextComponentL = dart.constFn(component_factory.ComponentFactory$(HighlightedTextComponentL())))();
  var HostViewOfHighlightedTextComponentL = () => (HostViewOfHighlightedTextComponentL = dart.constFn(host_view.HostView$(HighlightedTextComponentL())))();
  var HostViewLOfHighlightedTextComponentL = () => (HostViewLOfHighlightedTextComponentL = dart.constFn(dart.legacy(HostViewOfHighlightedTextComponentL())))();
  var VoidToHostViewLOfHighlightedTextComponentL = () => (VoidToHostViewLOfHighlightedTextComponentL = dart.constFn(dart.fnType(HostViewLOfHighlightedTextComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/highlighted_text/highlighted_text.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(highlighted_text$46template.viewFactory_HighlightedTextComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(highlighted_text$46template.ViewHighlightedTextComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.fn(highlighted_text$46template.viewFactory_HighlightedTextComponentHost0, VoidToHostViewLOfHighlightedTextComponentL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfHighlightedTextComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "highlighted-text"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_1 = dart.privateName(highlighted_text$46template, "_appEl_1");
  var _NgFor_1_9 = dart.privateName(highlighted_text$46template, "_NgFor_1_9");
  var _expr_0 = dart.privateName(highlighted_text$46template, "_expr_0");
  var C0;
  var C1;
  highlighted_text$46template.ViewHighlightedTextComponent0 = class ViewHighlightedTextComponent0 extends component_view.ComponentView$(dart.legacy(highlighted_text.HighlightedTextComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/highlighted_text/highlighted_text.dart" : null;
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
      highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles;
      if (styles == null) {
        highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(highlighted_text$46template.styles$HighlightedTextComponent, highlighted_text$46template.ViewHighlightedTextComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (highlighted_text$46template.ViewHighlightedTextComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    highlighted_text$46template.ViewHighlightedTextComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("highlighted-text"));
  }).prototype = highlighted_text$46template.ViewHighlightedTextComponent0.prototype;
  dart.addTypeTests(highlighted_text$46template.ViewHighlightedTextComponent0);
  dart.addTypeCaches(highlighted_text$46template.ViewHighlightedTextComponent0);
  dart.setMethodSignature(highlighted_text$46template.ViewHighlightedTextComponent0, () => ({
    __proto__: dart.getMethods(highlighted_text$46template.ViewHighlightedTextComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(highlighted_text$46template.ViewHighlightedTextComponent0, L0);
  dart.setFieldSignature(highlighted_text$46template.ViewHighlightedTextComponent0, () => ({
    __proto__: dart.getFields(highlighted_text$46template.ViewHighlightedTextComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(highlighted_text$46template.ViewHighlightedTextComponent0, {
    /*highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(highlighted_text$46template, "_textBinding_1");
  var _el_0 = dart.privateName(highlighted_text$46template, "_el_0");
  highlighted_text$46template._ViewHighlightedTextComponent1 = class _ViewHighlightedTextComponent1 extends embedded_view.EmbeddedView$(dart.legacy(highlighted_text.HighlightedTextComponent)) {
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
  (highlighted_text$46template._ViewHighlightedTextComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_0] = null;
    highlighted_text$46template._ViewHighlightedTextComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = highlighted_text$46template._ViewHighlightedTextComponent1.prototype;
  dart.addTypeTests(highlighted_text$46template._ViewHighlightedTextComponent1);
  dart.addTypeCaches(highlighted_text$46template._ViewHighlightedTextComponent1);
  dart.setMethodSignature(highlighted_text$46template._ViewHighlightedTextComponent1, () => ({
    __proto__: dart.getMethods(highlighted_text$46template._ViewHighlightedTextComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(highlighted_text$46template._ViewHighlightedTextComponent1, L0);
  dart.setFieldSignature(highlighted_text$46template._ViewHighlightedTextComponent1, () => ({
    __proto__: dart.getFields(highlighted_text$46template._ViewHighlightedTextComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  highlighted_text$46template._ViewHighlightedTextComponentHost0 = class _ViewHighlightedTextComponentHost0 extends host_view.HostView$(dart.legacy(highlighted_text.HighlightedTextComponent)) {
    build() {
      this.componentView = new highlighted_text$46template.ViewHighlightedTextComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new highlighted_text.HighlightedTextComponent.new();
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
  (highlighted_text$46template._ViewHighlightedTextComponentHost0.new = function() {
    highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = highlighted_text$46template._ViewHighlightedTextComponentHost0.prototype;
  dart.addTypeTests(highlighted_text$46template._ViewHighlightedTextComponentHost0);
  dart.addTypeCaches(highlighted_text$46template._ViewHighlightedTextComponentHost0);
  dart.setMethodSignature(highlighted_text$46template._ViewHighlightedTextComponentHost0, () => ({
    __proto__: dart.getMethods(highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(highlighted_text$46template._ViewHighlightedTextComponentHost0, L0);
  var C2;
  highlighted_text$46template.createHighlightedTextComponentFactory = function createHighlightedTextComponentFactory() {
    return new (ComponentFactoryOfHighlightedTextComponentL()).new("highlighted-text", C2 || CT.C2);
  };
  highlighted_text$46template.viewFactory_HighlightedTextComponent1 = function viewFactory_HighlightedTextComponent1(parentView, parentIndex) {
    return new highlighted_text$46template._ViewHighlightedTextComponent1.new(parentView, parentIndex);
  };
  highlighted_text$46template.viewFactory_HighlightedTextComponentHost0 = function viewFactory_HighlightedTextComponentHost0() {
    return new highlighted_text$46template._ViewHighlightedTextComponentHost0.new();
  };
  highlighted_text$46template.initReflector = function initReflector() {
    if (dart.test(highlighted_text$46template._visited)) {
      return;
    }
    highlighted_text$46template._visited = true;
    reflector.registerComponent(dart.wrapType(HighlightedTextComponentL()), highlighted_text$46template.createHighlightedTextComponentFactory());
    angular$46template.initReflector();
    highlighted_text_model$46template.initReflector();
  };
  dart.copyProperties(highlighted_text$46template, {
    get HighlightedTextComponentNgFactory() {
      return highlighted_text$46template._HighlightedTextComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  var C4;
  dart.defineLazy(highlighted_text$46template, {
    /*highlighted_text$46template.styles$HighlightedTextComponent*/get styles$HighlightedTextComponent() {
      return [highlighted_text$46scss$46css$46shim.styles];
    },
    /*highlighted_text$46template._HighlightedTextComponentNgFactory*/get _HighlightedTextComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*highlighted_text$46template.styles$HighlightedTextComponentHost*/get styles$HighlightedTextComponentHost() {
      return C4 || CT.C4;
    },
    /*highlighted_text$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_text.template", {
    "package:angular_components/highlighted_text/highlighted_text.template.dart": highlighted_text$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_text.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyCI,uBAAgB,2BAAY,wEAAwE;IACtG;;AAI4B,6BAAmB,AAAK;AAC5C,oBAAU,uBAAoB,gBAAgB,EAAE;AAChD,sBAAY,yBAAsB,gBAAgB;AACD,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AAC1C,6BAAmB,iCAAiB;AACgB,MAA3D,mBAAqB,qBAAW,gBAAU,gBAAgB;IACjE;;AAIQ,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,YAAY;AACzB,QAA9B,AAAW,2BAAU,SAAS;AACX,QAAnB,gBAAU,SAAS;;AAE1B,qBAAc;AACe,QAAtB,AAAW;;AAEwB,MAArC,AAAS;IAChB;;AAIoC,MAA7B,AAAS;IAChB;;AAGyB,MAAvB,6EAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC6F,QAAjH,6EAAoB,SAAiC,2CAAO,6DAAiC;AAC7F,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;4EAlD2C,YAAgB;IAJ7C;IACA;IACV;AAEsE,uFAAM,UAAU,EAAE,WAAW;AAC3E,IAA1B,AAAK;AACgE,uBAAhE,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;MAJ+B,0EAAgB;;;;;;;;;AAsEvC,gBAAc;AACkB,MAAjC,cAAQ,AAAI,GAAD,iBAAe;AACkB,MAAjD,AAAK,wCAAsB,cAAO;AACT,MAAzB,AAAK,cAAc;AAC2B,MAAzC,AAAM,qBAAY,AAAe;AACT,MAA7B,AAAK,kBAAkB;IACzB;;AAIQ,0BAAgB,oDAAyD,AAAM,mBAAC;AAChF,sBAAY,AAAc,aAAD;AAC/B,oBAAI,2BAA0B,eAAS,SAAS,EAAE,yBAAyB;AACF,QAAvE,iDAAiC,cAAO,qBAAqB,SAAS;AAC9C,QAAnB,gBAAU,SAAS;;AAEqD,MAA1E,AAAe,gCAAW,+BAA4B,AAAc,aAAD;IAC1E;;6EApBmD,YAAgB;IAHxC,uBAA0B;IACjD;IACY;AACkE,wFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;AAgCnD,MAAtD,qBAAgB,kEAA8B,MAAM;AACnD,kBAAa,AAAc;AACkB,MAA9C,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,oBAAU;AACf,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAEa,MAA7B,AAAc;IACrB;;;;;EACF;;;;;;;;;;AArDE,UAAO,yDAAiB;EAC1B;qHA6BsF,YAAgB;AACpG,UAAO,oEAA+B,UAAU,EAAE,WAAW;EAC/D;;AAwBE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEgF,IAA3F,4BAAyB,4CAA0B;AAC9B,IAArB;AACqB,IAArB;EACF;;;AAzEE,YAAO;IACT;;;;;;;MA/DoB,2DAA+B;YAAG,EAAS;;MA4DzD,8DAAkC;;;MAwCpB,+DAAmC;;;MAyBnD,oCAAQ;YAAG","file":"highlighted_text.template.unsound.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_text$46template: highlighted_text$46template
  };
}));

//# sourceMappingURL=highlighted_text.template.unsound.ddc.js.map
