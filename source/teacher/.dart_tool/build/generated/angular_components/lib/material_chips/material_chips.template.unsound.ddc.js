define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_chips/material_chips', 'packages/angular_components/material_chips/material_chip.template', 'packages/angular_components/material_chips/material_chip', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_chips/material_chips.scss.css.shim'], (function load__packages__angular_components__material_chips__material_chips_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_chips__material_chips, packages__angular_components__material_chips__material_chip$46template, packages__angular_components__material_chips__material_chip, packages__angular_components__model__ui__has_renderer, packages__angular__angular$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_chips__material_chips$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
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
  const material_chips = packages__angular_components__material_chips__material_chips.material_chips__material_chips;
  const material_chip$46template = packages__angular_components__material_chips__material_chip$46template.material_chips__material_chip$46template;
  const material_chip = packages__angular_components__material_chips__material_chip.material_chips__material_chip;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_chips$46scss$46css$46shim = packages__angular_components__material_chips__material_chips$46scss$46css$46shim.material_chips__material_chips$46scss$46css$46shim;
  var material_chips$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var VoidToHostViewLOfMaterialChipsComponentLOfTL = () => (VoidToHostViewLOfMaterialChipsComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialChipsComponentOfTL = () => (MaterialChipsComponentOfTL = dart.constFn(material_chips.MaterialChipsComponent$(TL())))();
    var MaterialChipsComponentLOfTL = () => (MaterialChipsComponentLOfTL = dart.constFn(dart.legacy(MaterialChipsComponentOfTL())))();
    var HostViewOfMaterialChipsComponentLOfTL = () => (HostViewOfMaterialChipsComponentLOfTL = dart.constFn(host_view.HostView$(MaterialChipsComponentLOfTL())))();
    var HostViewLOfMaterialChipsComponentLOfTL = () => (HostViewLOfMaterialChipsComponentLOfTL = dart.constFn(dart.legacy(HostViewOfMaterialChipsComponentLOfTL())))();
    return [HostViewLOfMaterialChipsComponentLOfTL(), []];
  })))();
  var MaterialChipsComponentL = () => (MaterialChipsComponentL = dart.constFn(dart.legacy(material_chips.MaterialChipsComponent)))();
  var ComponentFactoryOfMaterialChipsComponentL = () => (ComponentFactoryOfMaterialChipsComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialChipsComponentL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_chips/material_chips.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_chips$46template.ViewMaterialChipsComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.fn(material_chips$46template.viewFactory_MaterialChipsComponentHost0, VoidToHostViewLOfMaterialChipsComponentLOfTL());
    },
    get C4() {
      return C4 = dart.const(dart.gbind(C2 || CT.C2, dart.dynamic));
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfMaterialChipsComponentL().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "material-chips"
      });
    }
  }, false);
  var _appEl_0 = dart.privateName(material_chips$46template, "_appEl_0");
  var _NgFor_0_9 = dart.privateName(material_chips$46template, "_NgFor_0_9");
  var _expr_0 = dart.privateName(material_chips$46template, "_expr_0");
  var C0;
  const _is_ViewMaterialChipsComponent0_default = Symbol('_is_ViewMaterialChipsComponent0_default');
  material_chips$46template.ViewMaterialChipsComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialChipsComponent0 extends component_view.ComponentView$(dart.legacy(material_chips.MaterialChipsComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_chips/material_chips.dart" : null;
      }
      build() {
        let parentRenderNode = this.initViewRoot();
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_chips$46template.viewFactory_MaterialChipsComponent1(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.project(parentRenderNode, 0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.selectedItems;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "selectedItems", "package:angular_components/material_chips/material_chips.html"))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0] = currVal_0;
        }
        if (!dart.test(check_binding.debugThrowIfChanged)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
      static _debugClearComponentStyles() {
        material_chips$46template.ViewMaterialChipsComponent0._componentStyles = null;
      }
      initComponentStyles() {
        let styles = material_chips$46template.ViewMaterialChipsComponent0._componentStyles;
        if (styles == null) {
          material_chips$46template.ViewMaterialChipsComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_chips$46template.styles$MaterialChipsComponent, material_chips$46template.ViewMaterialChipsComponent0._debugComponentUrl);
          if (dart.test(optimizations.isDevMode)) {
            style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
          }
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialChipsComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0] = null;
      ViewMaterialChipsComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
      this.initComponentStyles();
      this.rootElement = HtmlElementL().as(html.document[$createElement]("material-chips"));
    }).prototype = ViewMaterialChipsComponent0.prototype;
    dart.addTypeTests(ViewMaterialChipsComponent0);
    ViewMaterialChipsComponent0.prototype[_is_ViewMaterialChipsComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialChipsComponent0);
    dart.setMethodSignature(ViewMaterialChipsComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialChipsComponent0.__proto__),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ViewMaterialChipsComponent0, L0);
    dart.setFieldSignature(ViewMaterialChipsComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialChipsComponent0.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_0_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialChipsComponent0;
  });
  material_chips$46template.ViewMaterialChipsComponent0 = material_chips$46template.ViewMaterialChipsComponent0$();
  dart.defineLazy(material_chips$46template.ViewMaterialChipsComponent0, {
    /*material_chips$46template.ViewMaterialChipsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_chips$46template.ViewMaterialChipsComponent0, _is_ViewMaterialChipsComponent0_default);
  var _compView_0 = dart.privateName(material_chips$46template, "_compView_0");
  var _MaterialChipComponent_0_5 = dart.privateName(material_chips$46template, "_MaterialChipComponent_0_5");
  var _expr_1 = dart.privateName(material_chips$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_chips$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_chips$46template, "_expr_3");
  var C1;
  const _is__ViewMaterialChipsComponent1_default = Symbol('_is__ViewMaterialChipsComponent1_default');
  material_chips$46template._ViewMaterialChipsComponent1$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialChipComponent0OfTL = () => (ViewMaterialChipComponent0OfTL = dart.constFn(material_chip$46template.ViewMaterialChipComponent0$(TL())))();
    var MaterialChipComponentOfTL = () => (MaterialChipComponentOfTL = dart.constFn(material_chip.MaterialChipComponent$(TL())))();
    var TLToStringL = () => (TLToStringL = dart.constFn(dart.fnType(StringL(), [TL()])))();
    var TLToLStringL = () => (TLToLStringL = dart.constFn(dart.legacy(TLToStringL())))();
    class _ViewMaterialChipsComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_chips.MaterialChipsComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialChipComponent0OfTL()).new(this, 0);
        let _el_0 = this[_compView_0].rootElement;
        this.addShimC(_el_0);
        this[_MaterialChipComponent_0_5] = new (MaterialChipComponentOfTL()).new(_el_0);
        this[_compView_0].createAndProject(this[_MaterialChipComponent_0_5], JSArrayOfObjectL().of([C1 || CT.C1, C1 || CT.C1]));
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(HasRendererL()) && 0 === nodeIndex) {
          return this[_MaterialChipComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_chip = optimizations.unsafeCast(TL(), this.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.selectionModel;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "selectionModel", "package:angular_components/material_chips/material_chips.html"))) {
          this[_MaterialChipComponent_0_5].selectionModel = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.removable;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "removable", "package:angular_components/material_chips/material_chips.html"))) {
          this[_MaterialChipComponent_0_5].removable = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = TLToLStringL().as(_ctx.itemRenderer);
        if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "itemRenderer", "package:angular_components/material_chips/material_chips.html"))) {
          this[_MaterialChipComponent_0_5].itemRenderer = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = local_chip;
        if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "chip", "package:angular_components/material_chips/material_chips.html"))) {
          this[_MaterialChipComponent_0_5].value = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialChipsComponent1.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialChipComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      _ViewMaterialChipsComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialChipsComponent1.prototype;
    dart.addTypeTests(_ViewMaterialChipsComponent1);
    _ViewMaterialChipsComponent1.prototype[_is__ViewMaterialChipsComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialChipsComponent1);
    dart.setMethodSignature(_ViewMaterialChipsComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipsComponent1.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialChipsComponent1, L0);
    dart.setFieldSignature(_ViewMaterialChipsComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialChipsComponent1.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_chip$46template.ViewMaterialChipComponent0$(dart.legacy(T)))),
      [_MaterialChipComponent_0_5]: dart.fieldType(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T)))),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialChipsComponent1;
  });
  material_chips$46template._ViewMaterialChipsComponent1 = material_chips$46template._ViewMaterialChipsComponent1$();
  dart.addTypeTests(material_chips$46template._ViewMaterialChipsComponent1, _is__ViewMaterialChipsComponent1_default);
  const _is__ViewMaterialChipsComponentHost0_default = Symbol('_is__ViewMaterialChipsComponentHost0_default');
  material_chips$46template._ViewMaterialChipsComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialChipsComponent0OfTL = () => (ViewMaterialChipsComponent0OfTL = dart.constFn(material_chips$46template.ViewMaterialChipsComponent0$(TL())))();
    var MaterialChipsComponentOfTL = () => (MaterialChipsComponentOfTL = dart.constFn(material_chips.MaterialChipsComponent$(TL())))();
    class _ViewMaterialChipsComponentHost0 extends host_view.HostView$(dart.legacy(material_chips.MaterialChipsComponent$(dart.legacy(T)))) {
      build() {
        this.componentView = new (ViewMaterialChipsComponent0OfTL()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = new (MaterialChipsComponentOfTL()).new(this.componentView);
        this.initRootNode(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(HasRendererL()) && 0 === nodeIndex) {
          return this.component;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let changed = false;
        if (changed) {
          this.componentView.markAsCheckOnce();
        }
        this.componentView.detectChanges();
      }
      destroyInternal() {
        this.component.ngOnDestroy();
      }
    }
    (_ViewMaterialChipsComponentHost0.new = function() {
      _ViewMaterialChipsComponentHost0.__proto__.new.call(this);
      ;
    }).prototype = _ViewMaterialChipsComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialChipsComponentHost0);
    _ViewMaterialChipsComponentHost0.prototype[_is__ViewMaterialChipsComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialChipsComponentHost0);
    dart.setMethodSignature(_ViewMaterialChipsComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipsComponentHost0.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialChipsComponentHost0, L0);
    return _ViewMaterialChipsComponentHost0;
  });
  material_chips$46template._ViewMaterialChipsComponentHost0 = material_chips$46template._ViewMaterialChipsComponentHost0$();
  dart.addTypeTests(material_chips$46template._ViewMaterialChipsComponentHost0, _is__ViewMaterialChipsComponentHost0_default);
  var C2;
  material_chips$46template.createMaterialChipsComponentFactory = function createMaterialChipsComponentFactory(T) {
    return new (component_factory.ComponentFactory$(dart.legacy(material_chips.MaterialChipsComponent$(dart.legacy(T))))).new("material-chips", dart.gbind(C2 || CT.C2, dart.legacy(T)));
  };
  material_chips$46template.viewFactory_MaterialChipsComponent1 = function viewFactory_MaterialChipsComponent1(T, parentView, parentIndex) {
    return new (material_chips$46template._ViewMaterialChipsComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_chips$46template.viewFactory_MaterialChipsComponentHost0 = function viewFactory_MaterialChipsComponentHost0(T) {
    return new (material_chips$46template._ViewMaterialChipsComponentHost0$(dart.legacy(T))).new();
  };
  material_chips$46template.initReflector = function initReflector() {
    if (dart.test(material_chips$46template._visited)) {
      return;
    }
    material_chips$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialChipsComponentL()), material_chips$46template.createMaterialChipsComponentFactory(dart.dynamic));
    angular$46template.initReflector();
    material_chip$46template.initReflector();
    selection_model$46template.initReflector();
    has_renderer$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_chips$46template, {
    get MaterialChipsComponentNgFactory() {
      return material_chips$46template._MaterialChipsComponentNgFactory;
    }
  });
  var C4;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  dart.defineLazy(material_chips$46template, {
    /*material_chips$46template.styles$MaterialChipsComponent*/get styles$MaterialChipsComponent() {
      return [material_chips$46scss$46css$46shim.styles];
    },
    /*material_chips$46template._MaterialChipsComponentNgFactory*/get _MaterialChipsComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*material_chips$46template.styles$MaterialChipsComponentHost*/get styles$MaterialChipsComponentHost() {
      return C1 || CT.C1;
    },
    /*material_chips$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_chips/material_chips.template", {
    "package:angular_components/material_chips/material_chips.template.dart": material_chips$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_chips.template.dart"],"names":[],"mappings":"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","file":"material_chips.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chips$46template: material_chips$46template
  };
}));

//# sourceMappingURL=material_chips.template.unsound.ddc.js.map
