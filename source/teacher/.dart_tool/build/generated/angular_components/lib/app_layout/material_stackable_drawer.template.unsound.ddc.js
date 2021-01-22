define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/app_layout/material_stackable_drawer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/app_layout/material_temporary_drawer.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/app_layout/material_stackable_drawer.scss.css.shim'], (function load__packages__angular_components__app_layout__material_stackable_drawer_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__app_layout__material_stackable_drawer, packages__angular_components__content__deferred_content_aware, packages__angular__angular$46template, packages__angular_components__app_layout__material_temporary_drawer$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__app_layout__material_stackable_drawer$46scss$46css$46shim) {
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
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_stackable_drawer = packages__angular_components__app_layout__material_stackable_drawer.app_layout__material_stackable_drawer;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_temporary_drawer$46template = packages__angular_components__app_layout__material_temporary_drawer$46template.app_layout__material_temporary_drawer$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const material_stackable_drawer$46scss$46css$46shim = packages__angular_components__app_layout__material_stackable_drawer$46scss$46css$46shim.app_layout__material_stackable_drawer$46scss$46css$46shim;
  var material_stackable_drawer$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialStackableDrawerComponentL = () => (MaterialStackableDrawerComponentL = dart.constFn(dart.legacy(material_stackable_drawer.MaterialStackableDrawerComponent)))();
  var VoidToMaterialStackableDrawerComponentL = () => (VoidToMaterialStackableDrawerComponentL = dart.constFn(dart.fnType(MaterialStackableDrawerComponentL(), [])))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var ComponentFactoryOfMaterialStackableDrawerComponentL = () => (ComponentFactoryOfMaterialStackableDrawerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialStackableDrawerComponentL())))();
  var HostViewOfMaterialStackableDrawerComponentL = () => (HostViewOfMaterialStackableDrawerComponentL = dart.constFn(host_view.HostView$(MaterialStackableDrawerComponentL())))();
  var HostViewLOfMaterialStackableDrawerComponentL = () => (HostViewLOfMaterialStackableDrawerComponentL = dart.constFn(dart.legacy(HostViewOfMaterialStackableDrawerComponentL())))();
  var VoidToHostViewLOfMaterialStackableDrawerComponentL = () => (VoidToHostViewLOfMaterialStackableDrawerComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialStackableDrawerComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/app_layout/material_stackable_drawer.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(material_stackable_drawer$46template.viewFactory_MaterialStackableDrawerComponentHost0, VoidToHostViewLOfMaterialStackableDrawerComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialStackableDrawerComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-drawer[stackable]"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(material_stackable_drawer$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_stackable_drawer$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_stackable_drawer$46template, "_expr_2");
  var _el_0 = dart.privateName(material_stackable_drawer$46template, "_el_0");
  var _handleEvent_0 = dart.privateName(material_stackable_drawer$46template, "_handleEvent_0");
  var C0;
  material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0 = class ViewMaterialStackableDrawerComponent0 extends component_view.ComponentView$(dart.legacy(material_stackable_drawer.MaterialStackableDrawerComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/app_layout/material_stackable_drawer.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "drawer-content");
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      parentRenderNode[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'toggle')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isExpanded", "package:angular_components/app_layout/material_stackable_drawer.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "drawer-content-expanded", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    [_handleEvent_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.hostMatDrawerCollapsed;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "mat-drawer-collapsed", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.hostMatDrawerExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "mat-drawer-expanded", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    static _debugClearComponentStyles() {
      material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles;
      if (styles == null) {
        material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_stackable_drawer$46template.styles$MaterialStackableDrawerComponent, material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-drawer"));
  }).prototype = material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.prototype;
  dart.addTypeTests(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0);
  dart.addTypeCaches(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0);
  dart.setMethodSignature(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, () => ({
    __proto__: dart.getMethods(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, L0);
  dart.setFieldSignature(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, () => ({
    __proto__: dart.getFields(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, {
    /*material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0 = class _ViewMaterialStackableDrawerComponentHost0 extends host_view.HostView$(dart.legacy(material_stackable_drawer.MaterialStackableDrawerComponent)) {
    build() {
      this.componentView = new material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialStackableDrawerComponentL(), dart.wrapType(MaterialStackableDrawerComponentL()), dart.fn(() => new material_stackable_drawer.MaterialStackableDrawerComponent.new(MaterialStackableDrawerComponentL().as(this.injectorGetOptional(dart.wrapType(MaterialStackableDrawerComponentL()), this.parentIndex))), VoidToMaterialStackableDrawerComponentL())) : new material_stackable_drawer.MaterialStackableDrawerComponent.new(MaterialStackableDrawerComponentL().as(this.injectorGetOptional(dart.wrapType(MaterialStackableDrawerComponentL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(MaterialStackableDrawerComponentL()) || token === dart.wrapType(DeferredContentAwareL())) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
    }
  };
  (material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.new = function() {
    material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.prototype;
  dart.addTypeTests(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0);
  dart.addTypeCaches(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0);
  dart.setMethodSignature(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0, () => ({
    __proto__: dart.getMethods(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0, L0);
  var C1;
  material_stackable_drawer$46template.createMaterialStackableDrawerComponentFactory = function createMaterialStackableDrawerComponentFactory() {
    return new (ComponentFactoryOfMaterialStackableDrawerComponentL()).new("material-drawer[stackable]", C1 || CT.C1);
  };
  material_stackable_drawer$46template.viewFactory_MaterialStackableDrawerComponentHost0 = function viewFactory_MaterialStackableDrawerComponentHost0() {
    return new material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.new();
  };
  material_stackable_drawer$46template.initReflector = function initReflector() {
    if (dart.test(material_stackable_drawer$46template._visited)) {
      return;
    }
    material_stackable_drawer$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialStackableDrawerComponentL()), material_stackable_drawer$46template.createMaterialStackableDrawerComponentFactory());
    angular$46template.initReflector();
    material_temporary_drawer$46template.initReflector();
    deferred_content_aware$46template.initReflector();
  };
  dart.copyProperties(material_stackable_drawer$46template, {
    get MaterialStackableDrawerComponentNgFactory() {
      return material_stackable_drawer$46template._MaterialStackableDrawerComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(material_stackable_drawer$46template, {
    /*material_stackable_drawer$46template.styles$MaterialStackableDrawerComponent*/get styles$MaterialStackableDrawerComponent() {
      return [material_stackable_drawer$46scss$46css$46shim.styles];
    },
    /*material_stackable_drawer$46template._MaterialStackableDrawerComponentNgFactory*/get _MaterialStackableDrawerComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_stackable_drawer$46template.styles$MaterialStackableDrawerComponentHost*/get styles$MaterialStackableDrawerComponentHost() {
      return C3 || CT.C3;
    },
    /*material_stackable_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/app_layout/material_stackable_drawer.template", {
    "package:angular_components/app_layout/material_stackable_drawer.template.dart": material_stackable_drawer$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_stackable_drawer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqCI,uBAAgB,2BAAY,2EAA2E;IACzG;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AACiC,MAAhD,cAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACD,MAAnD,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACQ,MAA3B,AAAK,aAAa,aAAO;AACoD,MAAxE,AAAM,+BAAiB,SAAS,AAAK,iDAAmB;AACc,MAA3E,AAAiB,gBAAD,oBAAkB,SAAS,AAAK,6BAAmB,UAAL,IAAI;IACpE;;AAIQ,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,cAAc;AACc,QAA5E,+BAAgC,aAAO,2BAA2B,SAAS;AACnD,QAAnB,gBAAU,SAAS;;IAE5B;qBAEoB;AACM,MAAjB,WAAP;IACF;sBAE4B;AACpB,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACgC,QAAtF,sCAAuC,kBAAa,wBAAwB,SAAS;AAC7D,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AAC+B,QAArF,sCAAuC,kBAAa,uBAAuB,SAAS;AAC5D,QAAnB,gBAAU,SAAS;;IAE5B;;AAGyB,MAAvB,8FAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACqG,QAAzH,8FAAoB,SAAiC,2CAAO,8EAAyC;AACrG,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;6FA9DmD,YAAgB;IAL/D;IACA;IACA;IACe;AAE+D,wGAAM,UAAU,EAAE,WAAW;AACnF,IAA1B,AAAK;AAC+D,uBAA/D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;;;MAJ+B,2FAAgB;;;;;;;AAgFsB,MAA9D,qBAAgB,mFAAsC,MAAM;AAC3D,kBAAa,AAAc;AAKoG,MAJhI,2BAAqB,2BACpB,8DAAmC,oDAAkC,cACpD,0GAAiC,AAAK,yBAA4B,oDAAuC,mEAElH,0GAAiC,AAAK,yBAA4B,oDAAuC;AAC/F,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,WAAM,AAAU,KAAK,KAAU,sDAAqC,AAAU,KAAK,KAAW,2CAA2B,AAAE,MAAG,SAAS;AACrI,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIO,uBAAkB;AACvB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAE+B,MAA3C,AAAc,qCAAkB,UAAU;AACb,MAA7B,AAAc;IACrB;;;;;EACF;;;;;;;;;;;AAnCE,UAAO,iEAAiB;EAC1B;;AAqCE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,gDAAW;AAEgG,IAA3G,4BAAyB,oDAAkC;AACtC,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAxDE,YAAO;IACT;;;;;;;MA5EoB,4EAAuC;YAAG,EAAS;;MAyEjE,+EAA0C;;;MAS5B,gFAA2C;;;MAsC3D,6CAAQ;YAAG","file":"material_stackable_drawer.template.unsound.ddc.js"}');
  // Exports:
  return {
    app_layout__material_stackable_drawer$46template: material_stackable_drawer$46template
  };
}));

//# sourceMappingURL=material_stackable_drawer.template.unsound.ddc.js.map
