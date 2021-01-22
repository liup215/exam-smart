define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_tab/fixed_material_tab_strip.template', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/material_tab/tab_change_event', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_tab/material_tab_panel', 'packages/angular_components/material_tab/material_tab', 'packages/angular/angular.template', 'packages/angular_components/material_tab/material_tab.template', 'packages/angular_components/material_tab/tab_change_event.template', 'packages/angular_components/material_tab/material_tab_panel.scss.css.shim'], (function load__packages__angular_components__material_tab__material_tab_panel_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_tab__fixed_material_tab_strip$46template, packages__angular_components__material_tab__fixed_material_tab_strip, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__material_tab__tab_change_event, packages__angular__src__bootstrap__modules, packages__angular_components__material_tab__material_tab_panel, packages__angular_components__material_tab__material_tab, packages__angular__angular$46template, packages__angular_components__material_tab__material_tab$46template, packages__angular_components__material_tab__tab_change_event$46template, packages__angular_components__material_tab__material_tab_panel$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const fixed_material_tab_strip$46template = packages__angular_components__material_tab__fixed_material_tab_strip$46template.material_tab__fixed_material_tab_strip$46template;
  const fixed_material_tab_strip = packages__angular_components__material_tab__fixed_material_tab_strip.material_tab__fixed_material_tab_strip;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const tab_change_event = packages__angular_components__material_tab__tab_change_event.material_tab__tab_change_event;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_tab_panel = packages__angular_components__material_tab__material_tab_panel.material_tab__material_tab_panel;
  const material_tab = packages__angular_components__material_tab__material_tab.material_tab__material_tab;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_tab$46template = packages__angular_components__material_tab__material_tab$46template.material_tab__material_tab$46template;
  const tab_change_event$46template = packages__angular_components__material_tab__tab_change_event$46template.material_tab__tab_change_event$46template;
  const material_tab_panel$46scss$46css$46shim = packages__angular_components__material_tab__material_tab_panel$46scss$46css$46shim.material_tab__material_tab_panel$46scss$46css$46shim;
  var material_tab_panel$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var FixedMaterialTabStripComponentL = () => (FixedMaterialTabStripComponentL = dart.constFn(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToFixedMaterialTabStripComponentL = () => (VoidToFixedMaterialTabStripComponentL = dart.constFn(dart.fnType(FixedMaterialTabStripComponentL(), [])))();
  var TabChangeEventL = () => (TabChangeEventL = dart.constFn(dart.legacy(tab_change_event.TabChangeEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var TabL = () => (TabL = dart.constFn(dart.legacy(material_tab.Tab)))();
  var JSArrayOfTabL = () => (JSArrayOfTabL = dart.constFn(_interceptors.JSArray$(TabL())))();
  var MaterialTabPanelComponentL = () => (MaterialTabPanelComponentL = dart.constFn(dart.legacy(material_tab_panel.MaterialTabPanelComponent)))();
  var ComponentFactoryOfMaterialTabPanelComponentL = () => (ComponentFactoryOfMaterialTabPanelComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTabPanelComponentL())))();
  var HostViewOfMaterialTabPanelComponentL = () => (HostViewOfMaterialTabPanelComponentL = dart.constFn(host_view.HostView$(MaterialTabPanelComponentL())))();
  var HostViewLOfMaterialTabPanelComponentL = () => (HostViewLOfMaterialTabPanelComponentL = dart.constFn(dart.legacy(HostViewOfMaterialTabPanelComponentL())))();
  var VoidToHostViewLOfMaterialTabPanelComponentL = () => (VoidToHostViewLOfMaterialTabPanelComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialTabPanelComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/material_tab_panel.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C1() {
      return C1 = dart.fn(material_tab_panel$46template.ViewMaterialTabPanelComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.fn(material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0, VoidToHostViewLOfMaterialTabPanelComponentL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfMaterialTabPanelComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-tab-panel"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _compView_0 = dart.privateName(material_tab_panel$46template, "_compView_0");
  var _FixedMaterialTabStripComponent_0_5 = dart.privateName(material_tab_panel$46template, "_FixedMaterialTabStripComponent_0_5");
  var _expr_0 = dart.privateName(material_tab_panel$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_tab_panel$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_tab_panel$46template, "_expr_2");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C0;
  var C1;
  material_tab_panel$46template.ViewMaterialTabPanelComponent0 = class ViewMaterialTabPanelComponent0 extends component_view.ComponentView$(dart.legacy(material_tab_panel.MaterialTabPanelComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/material_tab_panel.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FixedMaterialTabStripComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(FixedMaterialTabStripComponentL(), dart.wrapType(FixedMaterialTabStripComponentL()), dart.fn(() => new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], boolL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex))), VoidToFixedMaterialTabStripComponentL())) : new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], boolL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.parentIndex)), NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)));
      this[_compView_0].create(this[_FixedMaterialTabStripComponent_0_5]);
      this.project(parentRenderNode, 0);
      let subscription_0 = this[_FixedMaterialTabStripComponent_0_5].beforeTabChange.listen(this.eventHandler1(TabChangeEventL(), TabChangeEventL(), dart.bind(_ctx, 'onBeforeTabChange')));
      let subscription_1 = this[_FixedMaterialTabStripComponent_0_5].tabChange.listen(this.eventHandler1(TabChangeEventL(), TabChangeEventL(), dart.bind(_ctx, 'onTabChange')));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      let currVal_0 = _ctx.tabIds;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "tabIds", "package:angular_components/material_tab/material_tab_panel.html"))) {
        this[_FixedMaterialTabStripComponent_0_5].tabIds = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeTabIndex;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "activeTabIndex", "package:angular_components/material_tab/material_tab_panel.html"))) {
        this[_FixedMaterialTabStripComponent_0_5].activeTabIndex = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.tabLabels;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "tabLabels", "package:angular_components/material_tab/material_tab_panel.html"))) {
        this[_FixedMaterialTabStripComponent_0_5].tabLabels = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this[_FixedMaterialTabStripComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    static _debugClearComponentStyles() {
      material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles;
      if (styles == null) {
        material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_tab_panel$46template.styles$MaterialTabPanelComponent, material_tab_panel$46template.ViewMaterialTabPanelComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_tab_panel$46template.ViewMaterialTabPanelComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FixedMaterialTabStripComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-tab-panel"));
    this.updateChildClassNonHtml(this.rootElement, "themeable");
  }).prototype = material_tab_panel$46template.ViewMaterialTabPanelComponent0.prototype;
  dart.addTypeTests(material_tab_panel$46template.ViewMaterialTabPanelComponent0);
  dart.addTypeCaches(material_tab_panel$46template.ViewMaterialTabPanelComponent0);
  dart.setMethodSignature(material_tab_panel$46template.ViewMaterialTabPanelComponent0, () => ({
    __proto__: dart.getMethods(material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_tab_panel$46template.ViewMaterialTabPanelComponent0, L0);
  dart.setFieldSignature(material_tab_panel$46template.ViewMaterialTabPanelComponent0, () => ({
    __proto__: dart.getFields(material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0)),
    [_FixedMaterialTabStripComponent_0_5]: dart.fieldType(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab_panel$46template.ViewMaterialTabPanelComponent0, {
    /*material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_tab_panel$46template._ViewMaterialTabPanelComponentHost0 = class _ViewMaterialTabPanelComponentHost0 extends host_view.HostView$(dart.legacy(material_tab_panel.MaterialTabPanelComponent)) {
    build() {
      this.componentView = new material_tab_panel$46template.ViewMaterialTabPanelComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_tab_panel.MaterialTabPanelComponent.new(this.componentView);
      this.component.tabs = JSArrayOfTabL().of([]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this.component.ngAfterContentInit();
        }
      }
      this.componentView.detectChanges();
    }
  };
  (material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new = function() {
    material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.prototype;
  dart.addTypeTests(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0);
  dart.addTypeCaches(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0);
  dart.setMethodSignature(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, L0);
  var C2;
  material_tab_panel$46template.createMaterialTabPanelComponentFactory = function createMaterialTabPanelComponentFactory() {
    return new (ComponentFactoryOfMaterialTabPanelComponentL()).new("material-tab-panel", C2 || CT.C2);
  };
  material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0 = function viewFactory_MaterialTabPanelComponentHost0() {
    return new material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new();
  };
  material_tab_panel$46template.initReflector = function initReflector() {
    if (dart.test(material_tab_panel$46template._visited)) {
      return;
    }
    material_tab_panel$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTabPanelComponentL()), material_tab_panel$46template.createMaterialTabPanelComponentFactory());
    angular$46template.initReflector();
    fixed_material_tab_strip$46template.initReflector();
    material_tab$46template.initReflector();
    tab_change_event$46template.initReflector();
  };
  dart.copyProperties(material_tab_panel$46template, {
    get MaterialTabPanelComponentNgFactory() {
      return material_tab_panel$46template._MaterialTabPanelComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  var C4;
  dart.defineLazy(material_tab_panel$46template, {
    /*material_tab_panel$46template.styles$MaterialTabPanelComponent*/get styles$MaterialTabPanelComponent() {
      return [material_tab_panel$46scss$46css$46shim.styles];
    },
    /*material_tab_panel$46template._MaterialTabPanelComponentNgFactory*/get _MaterialTabPanelComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*material_tab_panel$46template.styles$MaterialTabPanelComponentHost*/get styles$MaterialTabPanelComponentHost() {
      return C4 || CT.C4;
    },
    /*material_tab_panel$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_tab/material_tab_panel.template", {
    "package:angular_components/material_tab/material_tab_panel.template.dart": material_tab_panel$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_tab_panel.template.dart"],"names":[],"mappings":"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","file":"material_tab_panel.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab_panel$46template: material_tab_panel$46template
  };
}));

//# sourceMappingURL=material_tab_panel.template.unsound.ddc.js.map
