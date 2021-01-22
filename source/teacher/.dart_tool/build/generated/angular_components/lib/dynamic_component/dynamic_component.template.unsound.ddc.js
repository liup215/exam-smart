define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular/angular.template', 'packages/angular/experimental.template', 'packages/angular_components/model/ui/has_renderer.template'], (function load__packages__angular_components__dynamic_component__dynamic_component_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__dynamic_component__dynamic_component, packages__angular__angular$46template, packages__angular__experimental$46template, packages__angular_components__model__ui__has_renderer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const dynamic_component = packages__angular_components__dynamic_component__dynamic_component.dynamic_component__dynamic_component;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const experimental$46template = packages__angular__experimental$46template.experimental$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  var dynamic_component$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var DynamicComponentL = () => (DynamicComponentL = dart.constFn(dart.legacy(dynamic_component.DynamicComponent)))();
  var SlowComponentLoaderL = () => (SlowComponentLoaderL = dart.constFn(dart.legacy(dynamic_component_loader.SlowComponentLoader)))();
  var VoidToDynamicComponentL = () => (VoidToDynamicComponentL = dart.constFn(dart.fnType(DynamicComponentL(), [])))();
  var ComponentFactoryOfDynamicComponentL = () => (ComponentFactoryOfDynamicComponentL = dart.constFn(component_factory.ComponentFactory$(DynamicComponentL())))();
  var HostViewOfDynamicComponentL = () => (HostViewOfDynamicComponentL = dart.constFn(host_view.HostView$(DynamicComponentL())))();
  var HostViewLOfDynamicComponentL = () => (HostViewLOfDynamicComponentL = dart.constFn(dart.legacy(HostViewOfDynamicComponentL())))();
  var VoidToHostViewLOfDynamicComponentL = () => (VoidToHostViewLOfDynamicComponentL = dart.constFn(dart.fnType(HostViewLOfDynamicComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/dynamic_component/dynamic_component.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(dynamic_component$46template.viewFactory_DynamicComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(dynamic_component$46template.ViewDynamicComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.constList([], ObjectL());
    },
    get C3() {
      return C3 = dart.fn(dynamic_component$46template.viewFactory_DynamicComponentHost0, VoidToHostViewLOfDynamicComponentL());
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfDynamicComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "dynamic-component"
      });
    }
  }, false);
  var _appEl_0 = dart.privateName(dynamic_component$46template, "_appEl_0");
  var _TemplateRef_0_8 = dart.privateName(dynamic_component$46template, "_TemplateRef_0_8");
  var C0;
  var C1;
  dynamic_component$46template.ViewDynamicComponent0 = class ViewDynamicComponent0 extends component_view.ComponentView$(dart.legacy(dynamic_component.DynamicComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/dynamic_component/dynamic_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      this[_TemplateRef_0_8] = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      _ctx.viewContainerRef = this[_appEl_0];
    }
    detectChangesInCheckAlwaysViews() {
      this[_appEl_0].detectChangesInCheckAlwaysViews();
    }
    detectChangesInternal() {
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      dynamic_component$46template.ViewDynamicComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = dynamic_component$46template.ViewDynamicComponent0._componentStyles;
      if (styles == null) {
        dynamic_component$46template.ViewDynamicComponent0._componentStyles = styles = new style_encapsulation._UnscopedComponentStyles.new(dynamic_component$46template.styles$DynamicComponent, dynamic_component$46template.ViewDynamicComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (dynamic_component$46template.ViewDynamicComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_TemplateRef_0_8] = null;
    dynamic_component$46template.ViewDynamicComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("dynamic-component"));
  }).prototype = dynamic_component$46template.ViewDynamicComponent0.prototype;
  dart.addTypeTests(dynamic_component$46template.ViewDynamicComponent0);
  dart.addTypeCaches(dynamic_component$46template.ViewDynamicComponent0);
  dart.setMethodSignature(dynamic_component$46template.ViewDynamicComponent0, () => ({
    __proto__: dart.getMethods(dynamic_component$46template.ViewDynamicComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dynamic_component$46template.ViewDynamicComponent0, L0);
  dart.setFieldSignature(dynamic_component$46template.ViewDynamicComponent0, () => ({
    __proto__: dart.getFields(dynamic_component$46template.ViewDynamicComponent0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_TemplateRef_0_8]: dart.fieldType(dart.legacy(template_ref.TemplateRef))
  }));
  dart.defineLazy(dynamic_component$46template.ViewDynamicComponent0, {
    /*dynamic_component$46template.ViewDynamicComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var C2;
  dynamic_component$46template._ViewDynamicComponent1 = class _ViewDynamicComponent1 extends embedded_view.EmbeddedView$(dart.legacy(dynamic_component.DynamicComponent)) {
    build() {
      this.initRootNodesAndSubscriptions(C2 || CT.C2, null);
    }
  };
  (dynamic_component$46template._ViewDynamicComponent1.new = function(parentView, parentIndex) {
    dynamic_component$46template._ViewDynamicComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = dynamic_component$46template._ViewDynamicComponent1.prototype;
  dart.addTypeTests(dynamic_component$46template._ViewDynamicComponent1);
  dart.addTypeCaches(dynamic_component$46template._ViewDynamicComponent1);
  dart.setMethodSignature(dynamic_component$46template._ViewDynamicComponent1, () => ({
    __proto__: dart.getMethods(dynamic_component$46template._ViewDynamicComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dynamic_component$46template._ViewDynamicComponent1, L0);
  dynamic_component$46template._ViewDynamicComponentHost0 = class _ViewDynamicComponentHost0 extends host_view.HostView$(dart.legacy(dynamic_component.DynamicComponent)) {
    build() {
      this.componentView = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DynamicComponentL(), dart.wrapType(DynamicComponentL()), dart.fn(() => new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentIndex)), this[_appEl_0]), VoidToDynamicComponentL())) : new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentIndex)), this[_appEl_0]);
      this.initRootNode(this[_appEl_0]);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this.component.ngOnDestroy();
    }
  };
  (dynamic_component$46template._ViewDynamicComponentHost0.new = function() {
    this[_appEl_0] = null;
    dynamic_component$46template._ViewDynamicComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = dynamic_component$46template._ViewDynamicComponentHost0.prototype;
  dart.addTypeTests(dynamic_component$46template._ViewDynamicComponentHost0);
  dart.addTypeCaches(dynamic_component$46template._ViewDynamicComponentHost0);
  dart.setMethodSignature(dynamic_component$46template._ViewDynamicComponentHost0, () => ({
    __proto__: dart.getMethods(dynamic_component$46template._ViewDynamicComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dynamic_component$46template._ViewDynamicComponentHost0, L0);
  dart.setFieldSignature(dynamic_component$46template._ViewDynamicComponentHost0, () => ({
    __proto__: dart.getFields(dynamic_component$46template._ViewDynamicComponentHost0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer))
  }));
  var C3;
  dynamic_component$46template.createDynamicComponentFactory = function createDynamicComponentFactory() {
    return new (ComponentFactoryOfDynamicComponentL()).new("dynamic-component", C3 || CT.C3);
  };
  dynamic_component$46template.viewFactory_DynamicComponent1 = function viewFactory_DynamicComponent1(parentView, parentIndex) {
    return new dynamic_component$46template._ViewDynamicComponent1.new(parentView, parentIndex);
  };
  dynamic_component$46template.viewFactory_DynamicComponentHost0 = function viewFactory_DynamicComponentHost0() {
    return new dynamic_component$46template._ViewDynamicComponentHost0.new();
  };
  dynamic_component$46template.initReflector = function initReflector() {
    if (dart.test(dynamic_component$46template._visited)) {
      return;
    }
    dynamic_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(DynamicComponentL()), dynamic_component$46template.createDynamicComponentFactory());
    angular$46template.initReflector();
    experimental$46template.initReflector();
    has_renderer$46template.initReflector();
  };
  dart.copyProperties(dynamic_component$46template, {
    get DynamicComponentNgFactory() {
      return dynamic_component$46template._DynamicComponentNgFactory;
    }
  });
  var C4;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C5;
  dart.defineLazy(dynamic_component$46template, {
    /*dynamic_component$46template.styles$DynamicComponent*/get styles$DynamicComponent() {
      return C4 || CT.C4;
    },
    /*dynamic_component$46template._DynamicComponentNgFactory*/get _DynamicComponentNgFactory() {
      return C5 || CT.C5;
    },
    /*dynamic_component$46template.styles$DynamicComponentHost*/get styles$DynamicComponentHost() {
      return C4 || CT.C4;
    },
    /*dynamic_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/dynamic_component/dynamic_component.template", {
    "package:angular_components/dynamic_component/dynamic_component.template.dart": dynamic_component$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dynamic_component.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsCI,uBAAgB,2BAAY,0EAA0E;IACxG;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,sBAAY,yBAAqB,gBAAgB;AACA,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AAC2B,MAA5E,yBAAmB,iCAAiB;AACJ,MAArC,AAAK,IAAD,oBAAyB;IAC/B;;AAIiD,MAA1C,AAAS;IAChB;;AAI4C,MAArC,AAAS;IAChB;;AAIoC,MAA7B,AAAS;IAChB;;AAGyB,MAAvB,sEAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACuF,QAA3G,sEAAoB,SAAiC,qDAAS,sDAAyB;AACvF,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;qEA9CmC,YAAgB;IAHrC;IACF;AAEsD,gFAAM,UAAU,EAAE,WAAW;AACnE,IAA1B,AAAK;AACiE,uBAAjE,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;MAJ+B,mEAAgB;;;;;;;;AA+DK,MAAlD,AAAK,gDAAwC;IAC/C;;sEAJ2C,YAAgB;AAAe,iFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;AAiBnD,MAA9C,qBAAgB,2DAAsB,MAAM;AAC3C,kBAAa,AAAc;AACkB,MAA9C,iBAAW,qCAAc,GAAG,MAAM,MAAM,KAAK;AAK8D,MAJ3G,2BAAqB,2BACpB,8CAAmC,oCAAkB,cACpC,qEAAiB,AAAK,iBAAqB,uCAA0B,oBAAmB,+CAEjG,qEAAiB,AAAK,iBAAqB,uCAA0B,oBAAmB;AACtE,MAAhC,AAAK,kBAAkB;IACzB;;AAIO,oBAAU;AACf,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAEqB,MAArC,AAAS;AACoB,MAA7B,AAAc;IACrB;;AAIoC,MAA7B,AAAS;AACc,MAAvB,AAAU;IACjB;;;IA5Bc;;;EA6BhB;;;;;;;;;;;;;;AA/CE,UAAO,iDAAiB;EAC1B;sGAU8E,YAAgB;AAC5F,UAAO,6DAAuB,UAAU,EAAE,WAAW;EACvD;;AAqCE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAEgE,IAA3E,4BAAyB,oCAAkB;AACtB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AApEE,YAAO;IACT;;;;;;;MA1DoB,oDAAuB;;;MAuDrC,uDAA0B;;;MAqBZ,wDAA2B;;;MAsC3C,qCAAQ;YAAG","file":"dynamic_component.template.unsound.ddc.js"}');
  // Exports:
  return {
    dynamic_component__dynamic_component$46template: dynamic_component$46template
  };
}));

//# sourceMappingURL=dynamic_component.template.unsound.ddc.js.map
