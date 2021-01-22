define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/app_layout/material_temporary_drawer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/app_layout/material_drawer_base.template', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/app_layout/material_temporary_drawer.scss.css.shim'], (function load__packages__angular_components__app_layout__material_temporary_drawer_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__app_layout__material_temporary_drawer, packages__angular_components__content__deferred_content_aware, packages__angular_components__app_layout__material_drawer_base$46template, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__app_layout__material_temporary_drawer$46scss$46css$46shim) {
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
  const material_temporary_drawer = packages__angular_components__app_layout__material_temporary_drawer.app_layout__material_temporary_drawer;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_drawer_base$46template = packages__angular_components__app_layout__material_drawer_base$46template.app_layout__material_drawer_base$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const material_temporary_drawer$46scss$46css$46shim = packages__angular_components__app_layout__material_temporary_drawer$46scss$46css$46shim.app_layout__material_temporary_drawer$46scss$46css$46shim;
  var material_temporary_drawer$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialTemporaryDrawerComponentL = () => (MaterialTemporaryDrawerComponentL = dart.constFn(dart.legacy(material_temporary_drawer.MaterialTemporaryDrawerComponent)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var ComponentFactoryOfMaterialTemporaryDrawerComponentL = () => (ComponentFactoryOfMaterialTemporaryDrawerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTemporaryDrawerComponentL())))();
  var HostViewOfMaterialTemporaryDrawerComponentL = () => (HostViewOfMaterialTemporaryDrawerComponentL = dart.constFn(host_view.HostView$(MaterialTemporaryDrawerComponentL())))();
  var HostViewLOfMaterialTemporaryDrawerComponentL = () => (HostViewLOfMaterialTemporaryDrawerComponentL = dart.constFn(dart.legacy(HostViewOfMaterialTemporaryDrawerComponentL())))();
  var VoidToHostViewLOfMaterialTemporaryDrawerComponentL = () => (VoidToHostViewLOfMaterialTemporaryDrawerComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialTemporaryDrawerComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/app_layout/material_temporary_drawer.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponentHost0, VoidToHostViewLOfMaterialTemporaryDrawerComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialTemporaryDrawerComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-drawer[temporary]"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(material_temporary_drawer$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_temporary_drawer$46template, "_expr_1");
  var _handleEvent_0 = dart.privateName(material_temporary_drawer$46template, "_handleEvent_0");
  var C0;
  material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0 = class ViewMaterialTemporaryDrawerComponent0 extends component_view.ComponentView$(dart.legacy(material_temporary_drawer.MaterialTemporaryDrawerComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/app_layout/material_temporary_drawer.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "drawer-content");
      this.addShimC(_el_0);
      this.project(_el_0, 0);
      _el_0[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      parentRenderNode[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'toggle')));
    }
    [_handleEvent_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.hostMatDrawerCollapsed;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "mat-drawer-collapsed", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.hostMatDrawerExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "mat-drawer-expanded", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    static _debugClearComponentStyles() {
      material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles;
      if (styles == null) {
        material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponent, material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-drawer"));
  }).prototype = material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.prototype;
  dart.addTypeTests(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0);
  dart.addTypeCaches(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0);
  dart.setMethodSignature(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, () => ({
    __proto__: dart.getMethods(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, L0);
  dart.setFieldSignature(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, () => ({
    __proto__: dart.getFields(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, {
    /*material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0 = class _ViewMaterialTemporaryDrawerComponentHost0 extends host_view.HostView$(dart.legacy(material_temporary_drawer.MaterialTemporaryDrawerComponent)) {
    build() {
      this.componentView = new material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_temporary_drawer.MaterialTemporaryDrawerComponent.new();
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(MaterialTemporaryDrawerComponentL()) || token === dart.wrapType(DeferredContentAwareL())) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
    }
  };
  (material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.new = function() {
    material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.prototype;
  dart.addTypeTests(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0);
  dart.addTypeCaches(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0);
  dart.setMethodSignature(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0, () => ({
    __proto__: dart.getMethods(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0, L0);
  var C1;
  material_temporary_drawer$46template.createMaterialTemporaryDrawerComponentFactory = function createMaterialTemporaryDrawerComponentFactory() {
    return new (ComponentFactoryOfMaterialTemporaryDrawerComponentL()).new("material-drawer[temporary]", C1 || CT.C1);
  };
  material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponentHost0 = function viewFactory_MaterialTemporaryDrawerComponentHost0() {
    return new material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.new();
  };
  material_temporary_drawer$46template.initReflector = function initReflector() {
    if (dart.test(material_temporary_drawer$46template._visited)) {
      return;
    }
    material_temporary_drawer$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTemporaryDrawerComponentL()), material_temporary_drawer$46template.createMaterialTemporaryDrawerComponentFactory());
    material_drawer_base$46template.initReflector();
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
  };
  dart.copyProperties(material_temporary_drawer$46template, {
    get MaterialTemporaryDrawerComponentNgFactory() {
      return material_temporary_drawer$46template._MaterialTemporaryDrawerComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(material_temporary_drawer$46template, {
    /*material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponent*/get styles$MaterialTemporaryDrawerComponent() {
      return [material_temporary_drawer$46scss$46css$46shim.styles];
    },
    /*material_temporary_drawer$46template._MaterialTemporaryDrawerComponentNgFactory*/get _MaterialTemporaryDrawerComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponentHost*/get styles$MaterialTemporaryDrawerComponentHost() {
      return C3 || CT.C3;
    },
    /*material_temporary_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/app_layout/material_temporary_drawer.template", {
    "package:angular_components/app_layout/material_temporary_drawer.template.dart": material_temporary_drawer$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_temporary_drawer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkCI,uBAAgB,2BAAY,2EAA2E;IACzG;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACP,MAA9C,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACoD,MAAxE,AAAM,KAAD,oBAAkB,SAAS,AAAK,iDAAmB;AACmB,MAA3E,AAAiB,gBAAD,oBAAkB,SAAS,AAAK,6BAAmB,UAAL,IAAI;IACpE;qBAEoB;AACM,MAAjB,WAAP;IACF;sBAE4B;AACpB,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACgC,QAAtF,sCAAuC,kBAAa,wBAAwB,SAAS;AAC7D,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AAC+B,QAArF,sCAAuC,kBAAa,uBAAuB,SAAS;AAC5D,QAAnB,gBAAU,SAAS;;IAE5B;;AAGyB,MAAvB,8FAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACqG,QAAzH,8FAAoB,SAAiC,2CAAO,8EAAyC;AACrG,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;6FApDmD,YAAgB;IAH/D;IACA;AAE8E,wGAAM,UAAU,EAAE,WAAW;AACnF,IAA1B,AAAK;AAC+D,uBAA/D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;MAJ+B,2FAAgB;;;;;;;AAsEsB,MAA9D,qBAAgB,mFAAsC,MAAM;AAC3D,kBAAa,AAAc;AAC0B,MAAtD,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,WAAM,AAAU,KAAK,KAAU,sDAAqC,AAAU,KAAK,KAAW,2CAA2B,AAAE,MAAG,SAAS;AACrI,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACV,uBAAkB;AACvB,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAErB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAE+B,MAA3C,AAAc,qCAAkB,UAAU;AACb,MAA7B,AAAc;IACrB;;;;;EACF;;;;;;;;;;;AAnCE,UAAO,iEAAiB;EAC1B;;AAqCE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,gDAAW;AAEgG,IAA3G,4BAAyB,oDAAkC;AACtC,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAxDE,YAAO;IACT;;;;;;;MAhEoB,4EAAuC;YAAG,EAAS;;MA6DjE,+EAA0C;;;MAS5B,gFAA2C;;;MAsC3D,6CAAQ;YAAG","file":"material_temporary_drawer.template.unsound.ddc.js"}');
  // Exports:
  return {
    app_layout__material_temporary_drawer$46template: material_temporary_drawer$46template
  };
}));

//# sourceMappingURL=material_temporary_drawer.template.unsound.ddc.js.map
