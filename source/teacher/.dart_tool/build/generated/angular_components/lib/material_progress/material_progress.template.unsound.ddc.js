define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_progress/material_progress', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/material_progress/material_progress.scss.css.shim'], (function load__packages__angular_components__material_progress__material_progress_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate, packages__angular_components__material_progress__material_progress, packages__angular__angular$46template, packages__angular_components__utils__browser__feature_detector__feature_detector$46template, packages__angular_components__material_progress__material_progress$46scss$46css$46shim) {
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
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_progress = packages__angular_components__material_progress__material_progress.material_progress__material_progress;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const feature_detector$46template = packages__angular_components__utils__browser__feature_detector__feature_detector$46template.utils__browser__feature_detector__feature_detector$46template;
  const material_progress$46scss$46css$46shim = packages__angular_components__material_progress__material_progress$46scss$46css$46shim.material_progress__material_progress$46scss$46css$46shim;
  var material_progress$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $setProperty = dartx.setProperty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialProgressComponentL = () => (MaterialProgressComponentL = dart.constFn(dart.legacy(material_progress.MaterialProgressComponent)))();
  var ComponentFactoryOfMaterialProgressComponentL = () => (ComponentFactoryOfMaterialProgressComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialProgressComponentL())))();
  var HostViewOfMaterialProgressComponentL = () => (HostViewOfMaterialProgressComponentL = dart.constFn(host_view.HostView$(MaterialProgressComponentL())))();
  var HostViewLOfMaterialProgressComponentL = () => (HostViewLOfMaterialProgressComponentL = dart.constFn(dart.legacy(HostViewOfMaterialProgressComponentL())))();
  var VoidToHostViewLOfMaterialProgressComponentL = () => (VoidToHostViewLOfMaterialProgressComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialProgressComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_progress/material_progress.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_progress$46template.ViewMaterialProgressComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(material_progress$46template.viewFactory_MaterialProgressComponentHost0, VoidToHostViewLOfMaterialProgressComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialProgressComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-progress"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(material_progress$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_progress$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_progress$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_progress$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_progress$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_progress$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_progress$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_progress$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_progress$46template, "_expr_8");
  var _el_0 = dart.privateName(material_progress$46template, "_el_0");
  var _el_1 = dart.privateName(material_progress$46template, "_el_1");
  var _el_2 = dart.privateName(material_progress$46template, "_el_2");
  var C0;
  material_progress$46template.ViewMaterialProgressComponent0 = class ViewMaterialProgressComponent0 extends component_view.ComponentView$(dart.legacy(material_progress.MaterialProgressComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_progress/material_progress.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "progress-container");
      dom_helpers.setAttribute(this[_el_0], "role", "progressbar");
      this.addShimC(this[_el_0]);
      this[_el_1] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "secondary-progress");
      this.addShimC(this[_el_1]);
      this[_el_2] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_2], "active-progress");
      this.addShimC(this[_el_2]);
      _ctx.primary = this[_el_2];
      _ctx.secondary = this[_el_1];
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.ariaValue;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "ariaValue", "package:angular_components/material_progress/material_progress.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaValueNow;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "ariaValueNow", "package:angular_components/material_progress/material_progress.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-valuenow", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.indeterminate;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "indeterminate", "package:angular_components/material_progress/material_progress.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "indeterminate", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.useFallbackAnimation;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "useFallbackAnimation", "package:angular_components/material_progress/material_progress.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "fallback", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.min;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "{{min}}", "package:angular_components/material_progress/material_progress.html"))) {
        dom_helpers.setAttribute(this[_el_0], "aria-valuemin", StringL().as(interpolate.interpolate0(currVal_4)));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.max;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "{{max}}", "package:angular_components/material_progress/material_progress.html"))) {
        dom_helpers.setAttribute(this[_el_0], "aria-valuemax", StringL().as(interpolate.interpolate0(currVal_5)));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.activeAndSecondaryProgressValue;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "activeAndSecondaryProgressValue", "package:angular_components/material_progress/material_progress.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.secondaryTransform;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "secondaryTransform", "package:angular_components/material_progress/material_progress.html"))) {
        this[_el_1].style[$setProperty]("transform", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.primaryTransform;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "primaryTransform", "package:angular_components/material_progress/material_progress.html"))) {
        this[_el_2].style[$setProperty]("transform", currVal_8);
        this[_expr_8] = currVal_8;
      }
    }
    static _debugClearComponentStyles() {
      material_progress$46template.ViewMaterialProgressComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_progress$46template.ViewMaterialProgressComponent0._componentStyles;
      if (styles == null) {
        material_progress$46template.ViewMaterialProgressComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_progress$46template.styles$MaterialProgressComponent, material_progress$46template.ViewMaterialProgressComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_progress$46template.ViewMaterialProgressComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    material_progress$46template.ViewMaterialProgressComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-progress"));
  }).prototype = material_progress$46template.ViewMaterialProgressComponent0.prototype;
  dart.addTypeTests(material_progress$46template.ViewMaterialProgressComponent0);
  dart.addTypeCaches(material_progress$46template.ViewMaterialProgressComponent0);
  dart.setMethodSignature(material_progress$46template.ViewMaterialProgressComponent0, () => ({
    __proto__: dart.getMethods(material_progress$46template.ViewMaterialProgressComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_progress$46template.ViewMaterialProgressComponent0, L0);
  dart.setFieldSignature(material_progress$46template.ViewMaterialProgressComponent0, () => ({
    __proto__: dart.getFields(material_progress$46template.ViewMaterialProgressComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_2]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_progress$46template.ViewMaterialProgressComponent0, {
    /*material_progress$46template.ViewMaterialProgressComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_progress$46template._ViewMaterialProgressComponentHost0 = class _ViewMaterialProgressComponentHost0 extends host_view.HostView$(dart.legacy(material_progress.MaterialProgressComponent)) {
    build() {
      this.componentView = new material_progress$46template.ViewMaterialProgressComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_progress.MaterialProgressComponent.new(null, this.componentView, _el_0);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this.component.ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (material_progress$46template._ViewMaterialProgressComponentHost0.new = function() {
    material_progress$46template._ViewMaterialProgressComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_progress$46template._ViewMaterialProgressComponentHost0.prototype;
  dart.addTypeTests(material_progress$46template._ViewMaterialProgressComponentHost0);
  dart.addTypeCaches(material_progress$46template._ViewMaterialProgressComponentHost0);
  dart.setMethodSignature(material_progress$46template._ViewMaterialProgressComponentHost0, () => ({
    __proto__: dart.getMethods(material_progress$46template._ViewMaterialProgressComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_progress$46template._ViewMaterialProgressComponentHost0, L0);
  var C1;
  material_progress$46template.createMaterialProgressComponentFactory = function createMaterialProgressComponentFactory() {
    return new (ComponentFactoryOfMaterialProgressComponentL()).new("material-progress", C1 || CT.C1);
  };
  material_progress$46template.viewFactory_MaterialProgressComponentHost0 = function viewFactory_MaterialProgressComponentHost0() {
    return new material_progress$46template._ViewMaterialProgressComponentHost0.new();
  };
  material_progress$46template.initReflector = function initReflector() {
    if (dart.test(material_progress$46template._visited)) {
      return;
    }
    material_progress$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialProgressComponentL()), material_progress$46template.createMaterialProgressComponentFactory());
    angular$46template.initReflector();
    feature_detector$46template.initReflector();
  };
  dart.copyProperties(material_progress$46template, {
    get MaterialProgressComponentNgFactory() {
      return material_progress$46template._MaterialProgressComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(material_progress$46template, {
    /*material_progress$46template.styles$MaterialProgressComponent*/get styles$MaterialProgressComponent() {
      return [material_progress$46scss$46css$46shim.styles];
    },
    /*material_progress$46template._MaterialProgressComponentNgFactory*/get _MaterialProgressComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_progress$46template.styles$MaterialProgressComponentHost*/get styles$MaterialProgressComponentHost() {
      return C3 || CT.C3;
    },
    /*material_progress$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_progress/material_progress.template", {
    "package:angular_components/material_progress/material_progress.template.dart": material_progress$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_progress.template.dart"],"names":[],"mappings":"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","file":"material_progress.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_progress__material_progress$46template: material_progress$46template
  };
}));

//# sourceMappingURL=material_progress.template.unsound.ddc.js.map
