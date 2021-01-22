define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/material_tab/material_tab', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_tab/material_tab.scss.css.shim'], (function load__packages__angular_components__material_tab__material_tab_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__material_tab__material_tab, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__content__deferred_content_aware, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__focus__focus$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_tab__material_tab$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const material_tab = packages__angular_components__material_tab__material_tab.material_tab__material_tab;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_tab$46scss$46css$46shim = packages__angular_components__material_tab__material_tab$46scss$46css$46shim.material_tab__material_tab$46scss$46css$46shim;
  var material_tab$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialTabComponentL = () => (MaterialTabComponentL = dart.constFn(dart.legacy(material_tab.MaterialTabComponent)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToMaterialTabComponentL = () => (VoidToMaterialTabComponentL = dart.constFn(dart.fnType(MaterialTabComponentL(), [])))();
  var TabL = () => (TabL = dart.constFn(dart.legacy(material_tab.Tab)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var ComponentFactoryOfMaterialTabComponentL = () => (ComponentFactoryOfMaterialTabComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTabComponentL())))();
  var HostViewOfMaterialTabComponentL = () => (HostViewOfMaterialTabComponentL = dart.constFn(host_view.HostView$(MaterialTabComponentL())))();
  var HostViewLOfMaterialTabComponentL = () => (HostViewLOfMaterialTabComponentL = dart.constFn(dart.legacy(HostViewOfMaterialTabComponentL())))();
  var VoidToHostViewLOfMaterialTabComponentL = () => (VoidToHostViewLOfMaterialTabComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialTabComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/material_tab.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_tab$46template.viewFactory_MaterialTabComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_tab$46template.ViewMaterialTabComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.fn(material_tab$46template.viewFactory_MaterialTabComponentHost0, VoidToHostViewLOfMaterialTabComponentL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfMaterialTabComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-tab"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_0 = dart.privateName(material_tab$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_tab$46template, "_NgIf_0_9");
  var _expr_0 = dart.privateName(material_tab$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_tab$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_tab$46template, "_expr_2");
  var C0;
  var C1;
  material_tab$46template.ViewMaterialTabComponent0 = class ViewMaterialTabComponent0 extends component_view.ComponentView$(dart.legacy(material_tab.MaterialTabComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/material_tab.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.active;
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.active;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "material-tab", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.panelId;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "id", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.tabId;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "aria-labelledby", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    static _debugClearComponentStyles() {
      material_tab$46template.ViewMaterialTabComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_tab$46template.ViewMaterialTabComponent0._componentStyles;
      if (styles == null) {
        material_tab$46template.ViewMaterialTabComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_tab$46template.styles$MaterialTabComponent, material_tab$46template.ViewMaterialTabComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_tab$46template.ViewMaterialTabComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_tab$46template.ViewMaterialTabComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-tab"));
    dom_helpers.updateAttribute(this.rootElement, "role", "tabpanel");
  }).prototype = material_tab$46template.ViewMaterialTabComponent0.prototype;
  dart.addTypeTests(material_tab$46template.ViewMaterialTabComponent0);
  dart.addTypeCaches(material_tab$46template.ViewMaterialTabComponent0);
  dart.setMethodSignature(material_tab$46template.ViewMaterialTabComponent0, () => ({
    __proto__: dart.getMethods(material_tab$46template.ViewMaterialTabComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_tab$46template.ViewMaterialTabComponent0, L0);
  dart.setFieldSignature(material_tab$46template.ViewMaterialTabComponent0, () => ({
    __proto__: dart.getFields(material_tab$46template.ViewMaterialTabComponent0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab$46template.ViewMaterialTabComponent0, {
    /*material_tab$46template.ViewMaterialTabComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_tab$46template._ViewMaterialTabComponent1 = class _ViewMaterialTabComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_tab.MaterialTabComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "tab-content");
      this.addShimC(HtmlElementL().as(_el_0));
      this.project(_el_0, 0);
      this.initRootNode(_el_0);
    }
  };
  (material_tab$46template._ViewMaterialTabComponent1.new = function(parentView, parentIndex) {
    material_tab$46template._ViewMaterialTabComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_tab$46template._ViewMaterialTabComponent1.prototype;
  dart.addTypeTests(material_tab$46template._ViewMaterialTabComponent1);
  dart.addTypeCaches(material_tab$46template._ViewMaterialTabComponent1);
  dart.setMethodSignature(material_tab$46template._ViewMaterialTabComponent1, () => ({
    __proto__: dart.getMethods(material_tab$46template._ViewMaterialTabComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_tab$46template._ViewMaterialTabComponent1, L0);
  material_tab$46template._ViewMaterialTabComponentHost0 = class _ViewMaterialTabComponentHost0 extends host_view.HostView$(dart.legacy(material_tab.MaterialTabComponent)) {
    build() {
      this.componentView = new material_tab$46template.ViewMaterialTabComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTabComponentL(), dart.wrapType(MaterialTabComponentL()), dart.fn(() => new material_tab.MaterialTabComponent.new(_el_0, IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex))), VoidToMaterialTabComponentL())) : new material_tab.MaterialTabComponent.new(_el_0, IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(TabL()) || token === dart.wrapType(DeferredContentAwareL())) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
    }
  };
  (material_tab$46template._ViewMaterialTabComponentHost0.new = function() {
    material_tab$46template._ViewMaterialTabComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_tab$46template._ViewMaterialTabComponentHost0.prototype;
  dart.addTypeTests(material_tab$46template._ViewMaterialTabComponentHost0);
  dart.addTypeCaches(material_tab$46template._ViewMaterialTabComponentHost0);
  dart.setMethodSignature(material_tab$46template._ViewMaterialTabComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab$46template._ViewMaterialTabComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_tab$46template._ViewMaterialTabComponentHost0, L0);
  var C2;
  material_tab$46template.createMaterialTabComponentFactory = function createMaterialTabComponentFactory() {
    return new (ComponentFactoryOfMaterialTabComponentL()).new("material-tab", C2 || CT.C2);
  };
  material_tab$46template.viewFactory_MaterialTabComponent1 = function viewFactory_MaterialTabComponent1(parentView, parentIndex) {
    return new material_tab$46template._ViewMaterialTabComponent1.new(parentView, parentIndex);
  };
  material_tab$46template.viewFactory_MaterialTabComponentHost0 = function viewFactory_MaterialTabComponentHost0() {
    return new material_tab$46template._ViewMaterialTabComponentHost0.new();
  };
  material_tab$46template.initReflector = function initReflector() {
    if (dart.test(material_tab$46template._visited)) {
      return;
    }
    material_tab$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTabComponentL()), material_tab$46template.createMaterialTabComponentFactory());
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    focus$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_tab$46template, {
    get MaterialTabComponentNgFactory() {
      return material_tab$46template._MaterialTabComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  var C4;
  dart.defineLazy(material_tab$46template, {
    /*material_tab$46template.styles$MaterialTabComponent*/get styles$MaterialTabComponent() {
      return [material_tab$46scss$46css$46shim.styles];
    },
    /*material_tab$46template._MaterialTabComponentNgFactory*/get _MaterialTabComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*material_tab$46template.styles$MaterialTabComponentHost*/get styles$MaterialTabComponentHost() {
      return C4 || CT.C4;
    },
    /*material_tab$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_tab/material_tab.template", {
    "package:angular_components/material_tab/material_tab.template.dart": material_tab$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_tab.template.dart"],"names":[],"mappings":"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","file":"material_tab.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab$46template: material_tab$46template
  };
}));

//# sourceMappingURL=material_tab.template.unsound.ddc.js.map
