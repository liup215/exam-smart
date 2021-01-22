define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_chips/material_chip', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_chips/material_chip.scss.css.shim'], (function load__packages__angular_components__material_chips__material_chip_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate, packages__angular_components__material_chips__material_chip, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__model__ui__has_renderer, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_chips__material_chip$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
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
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_chip = packages__angular_components__material_chips__material_chip.material_chips__material_chip;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_chip$46scss$46css$46shim = packages__angular_components__material_chips__material_chip$46scss$46css$46shim.material_chips__material_chip$46scss$46css$46shim;
  var material_chip$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $createElementNS = dartx.createElementNS;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var VoidToHostViewLOfMaterialChipComponentLOfTL = () => (VoidToHostViewLOfMaterialChipComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialChipComponentOfTL = () => (MaterialChipComponentOfTL = dart.constFn(material_chip.MaterialChipComponent$(TL())))();
    var MaterialChipComponentLOfTL = () => (MaterialChipComponentLOfTL = dart.constFn(dart.legacy(MaterialChipComponentOfTL())))();
    var HostViewOfMaterialChipComponentLOfTL = () => (HostViewOfMaterialChipComponentLOfTL = dart.constFn(host_view.HostView$(MaterialChipComponentLOfTL())))();
    var HostViewLOfMaterialChipComponentLOfTL = () => (HostViewLOfMaterialChipComponentLOfTL = dart.constFn(dart.legacy(HostViewOfMaterialChipComponentLOfTL())))();
    return [HostViewLOfMaterialChipComponentLOfTL(), []];
  })))();
  var MaterialChipComponentL = () => (MaterialChipComponentL = dart.constFn(dart.legacy(material_chip.MaterialChipComponent)))();
  var ComponentFactoryOfMaterialChipComponentL = () => (ComponentFactoryOfMaterialChipComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialChipComponentL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_chips/material_chip.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_chip$46template.ViewMaterialChipComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(material_chip$46template.viewFactory_MaterialChipComponentHost0, VoidToHostViewLOfMaterialChipComponentLOfTL());
    },
    get C3() {
      return C3 = dart.const(dart.gbind(C1 || CT.C1, dart.dynamic));
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialChipComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "material-chip"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_2 = dart.privateName(material_chip$46template, "_textBinding_2");
  var _appEl_0 = dart.privateName(material_chip$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_chip$46template, "_NgIf_0_9");
  var _appEl_4 = dart.privateName(material_chip$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(material_chip$46template, "_NgIf_4_9");
  var _expr_0 = dart.privateName(material_chip$46template, "_expr_0");
  var _el_1 = dart.privateName(material_chip$46template, "_el_1");
  var C0;
  const _is_ViewMaterialChipComponent0_default = Symbol('_is_ViewMaterialChipComponent0_default');
  material_chip$46template.ViewMaterialChipComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialChipComponent0 extends component_view.ComponentView$(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_chips/material_chip.dart" : null;
      }
      build() {
        let parentRenderNode = this.initViewRoot();
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_chip$46template.viewFactory_MaterialChipComponent1(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let doc = html.document;
        this[_el_1] = dom_helpers.appendDiv(doc, parentRenderNode);
        this.updateChildClass(this[_el_1], "content");
        this.addShimC(this[_el_1]);
        this[_el_1][$append](this[_textBinding_2].element);
        let _text_3 = dom_helpers.appendText(this[_el_1], " ");
        this.project(this[_el_1], 1);
        let _anchor_4 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_4] = new view_container.ViewContainer.new(4, null, this, _anchor_4);
        let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], dart.fn((parentView, parentIndex) => material_chip$46template.viewFactory_MaterialChipComponent2(TL(), parentView, parentIndex), RenderViewLAndintLToEmbeddedViewLOfvoid()));
        this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = _ctx.hasLeftIcon;
        this[_NgIf_4_9].ngIf = _ctx.removable;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        let currVal_0 = _ctx.uuid;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "uuid", "package:angular_components/material_chips/material_chip.html"))) {
          dom_helpers.setProperty(this[_el_1], "id", currVal_0);
          this[_expr_0] = currVal_0;
        }
        this[_textBinding_2].updateText(interpolate.interpolateString0(_ctx.label));
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_4].destroyNestedViews();
      }
      static _debugClearComponentStyles() {
        material_chip$46template.ViewMaterialChipComponent0._componentStyles = null;
      }
      initComponentStyles() {
        let styles = material_chip$46template.ViewMaterialChipComponent0._componentStyles;
        if (styles == null) {
          material_chip$46template.ViewMaterialChipComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_chip$46template.styles$MaterialChipComponent, material_chip$46template.ViewMaterialChipComponent0._debugComponentUrl);
          if (dart.test(optimizations.isDevMode)) {
            style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
          }
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialChipComponent0.new = function(parentView, parentIndex) {
      this[_textBinding_2] = new text_binding.TextBinding.new();
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_4] = null;
      this[_NgIf_4_9] = null;
      this[_expr_0] = null;
      this[_el_1] = null;
      ViewMaterialChipComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
      this.initComponentStyles();
      this.rootElement = HtmlElementL().as(html.document[$createElement]("material-chip"));
      this.updateChildClassNonHtml(this.rootElement, "themeable");
    }).prototype = ViewMaterialChipComponent0.prototype;
    dart.addTypeTests(ViewMaterialChipComponent0);
    ViewMaterialChipComponent0.prototype[_is_ViewMaterialChipComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialChipComponent0);
    dart.setMethodSignature(ViewMaterialChipComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialChipComponent0.__proto__),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ViewMaterialChipComponent0, L0);
    dart.setFieldSignature(ViewMaterialChipComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialChipComponent0.__proto__),
      [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_el_1]: dart.fieldType(dart.legacy(html.DivElement))
    }));
    return ViewMaterialChipComponent0;
  });
  material_chip$46template.ViewMaterialChipComponent0 = material_chip$46template.ViewMaterialChipComponent0$();
  dart.defineLazy(material_chip$46template.ViewMaterialChipComponent0, {
    /*material_chip$46template.ViewMaterialChipComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_chip$46template.ViewMaterialChipComponent0, _is_ViewMaterialChipComponent0_default);
  const _is__ViewMaterialChipComponent1_default = Symbol('_is__ViewMaterialChipComponent1_default');
  material_chip$46template._ViewMaterialChipComponent1$ = dart.generic(T => {
    class _ViewMaterialChipComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(HtmlElementL().as(_el_0), "left-icon");
        this.addShimC(HtmlElementL().as(_el_0));
        this.project(_el_0, 0);
        this.initRootNode(_el_0);
      }
    }
    (_ViewMaterialChipComponent1.new = function(parentView, parentIndex) {
      _ViewMaterialChipComponent1.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialChipComponent1.prototype;
    dart.addTypeTests(_ViewMaterialChipComponent1);
    _ViewMaterialChipComponent1.prototype[_is__ViewMaterialChipComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialChipComponent1);
    dart.setMethodSignature(_ViewMaterialChipComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipComponent1.__proto__),
      build: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialChipComponent1, L0);
    return _ViewMaterialChipComponent1;
  });
  material_chip$46template._ViewMaterialChipComponent1 = material_chip$46template._ViewMaterialChipComponent1$();
  dart.addTypeTests(material_chip$46template._ViewMaterialChipComponent1, _is__ViewMaterialChipComponent1_default);
  var _ButtonDirective_0_5 = dart.privateName(material_chip$46template, "_ButtonDirective_0_5");
  var _expr_1 = dart.privateName(material_chip$46template, "_expr_1");
  var _el_0 = dart.privateName(material_chip$46template, "_el_0");
  const _is__ViewMaterialChipComponent2_default = Symbol('_is__ViewMaterialChipComponent2_default');
  material_chip$46template._ViewMaterialChipComponent2$ = dart.generic(T => {
    class _ViewMaterialChipComponent2 extends embedded_view.EmbeddedView$(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T)))) {
      build() {
        let _ctx = this.ctx;
        let doc = html.document;
        this[_el_0] = DivElementL().as(doc[$createElement]("div"));
        dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
        this.updateChildClass(this[_el_0], "delete-button");
        this.addShimC(this[_el_0]);
        this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
        let _el_1 = doc[$createElementNS]("http://www.w3.org/2000/svg", "svg");
        this[_el_0][$append](_el_1);
        this.updateChildClassNonHtml(_el_1, "delete-icon");
        dom_helpers.setAttribute(_el_1, "height", "24");
        dom_helpers.setAttribute(_el_1, "viewBox", "0 0 24 24");
        dom_helpers.setAttribute(_el_1, "width", "24");
        dom_helpers.setAttribute(_el_1, "xmlns", "http://www.w3.org/2000/svg");
        this.addShimE(_el_1);
        let _el_2 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
        _el_1[$append](_el_2);
        dom_helpers.setAttribute(_el_2, "d", "M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5\n                 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59\n                 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z");
        this.addShimE(_el_2);
        this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
        this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
        let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'removeChip')));
        this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(ButtonDirectiveL()) && dart.notNull(nodeIndex) <= 2) {
          return this[_ButtonDirective_0_5].instance;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.deleteButtonAriaMessage;
        if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "deleteButtonAriaMessage", "package:angular_components/material_chips/material_chip.html"))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_0);
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.uuid;
        if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "uuid", "package:angular_components/material_chips/material_chip.html"))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-describedby", currVal_1);
          this[_expr_1] = currVal_1;
        }
        this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      }
    }
    (_ViewMaterialChipComponent2.new = function(parentView, parentIndex) {
      this[_ButtonDirective_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_el_0] = null;
      _ViewMaterialChipComponent2.__proto__.new.call(this, parentView, parentIndex);
      ;
    }).prototype = _ViewMaterialChipComponent2.prototype;
    dart.addTypeTests(_ViewMaterialChipComponent2);
    _ViewMaterialChipComponent2.prototype[_is__ViewMaterialChipComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialChipComponent2);
    dart.setMethodSignature(_ViewMaterialChipComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipComponent2.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialChipComponent2, L0);
    dart.setFieldSignature(_ViewMaterialChipComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialChipComponent2.__proto__),
      [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
    }));
    return _ViewMaterialChipComponent2;
  });
  material_chip$46template._ViewMaterialChipComponent2 = material_chip$46template._ViewMaterialChipComponent2$();
  dart.addTypeTests(material_chip$46template._ViewMaterialChipComponent2, _is__ViewMaterialChipComponent2_default);
  const _is__ViewMaterialChipComponentHost0_default = Symbol('_is__ViewMaterialChipComponentHost0_default');
  material_chip$46template._ViewMaterialChipComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialChipComponent0OfTL = () => (ViewMaterialChipComponent0OfTL = dart.constFn(material_chip$46template.ViewMaterialChipComponent0$(TL())))();
    var MaterialChipComponentOfTL = () => (MaterialChipComponentOfTL = dart.constFn(material_chip.MaterialChipComponent$(TL())))();
    class _ViewMaterialChipComponentHost0 extends host_view.HostView$(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T)))) {
      build() {
        this.componentView = new (ViewMaterialChipComponent0OfTL()).new(this, 0);
        let _el_0 = this.componentView.rootElement;
        this.component = new (MaterialChipComponentOfTL()).new(_el_0);
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
    }
    (_ViewMaterialChipComponentHost0.new = function() {
      _ViewMaterialChipComponentHost0.__proto__.new.call(this);
      ;
    }).prototype = _ViewMaterialChipComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialChipComponentHost0);
    _ViewMaterialChipComponentHost0.prototype[_is__ViewMaterialChipComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialChipComponentHost0);
    dart.setMethodSignature(_ViewMaterialChipComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipComponentHost0.__proto__),
      build: dart.fnType(dart.void, []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialChipComponentHost0, L0);
    return _ViewMaterialChipComponentHost0;
  });
  material_chip$46template._ViewMaterialChipComponentHost0 = material_chip$46template._ViewMaterialChipComponentHost0$();
  dart.addTypeTests(material_chip$46template._ViewMaterialChipComponentHost0, _is__ViewMaterialChipComponentHost0_default);
  var C1;
  material_chip$46template.createMaterialChipComponentFactory = function createMaterialChipComponentFactory(T) {
    return new (component_factory.ComponentFactory$(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T))))).new("material-chip", dart.gbind(C1 || CT.C1, dart.legacy(T)));
  };
  material_chip$46template.viewFactory_MaterialChipComponent1 = function viewFactory_MaterialChipComponent1(T, parentView, parentIndex) {
    return new (material_chip$46template._ViewMaterialChipComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_chip$46template.viewFactory_MaterialChipComponent2 = function viewFactory_MaterialChipComponent2(T, parentView, parentIndex) {
    return new (material_chip$46template._ViewMaterialChipComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_chip$46template.viewFactory_MaterialChipComponentHost0 = function viewFactory_MaterialChipComponentHost0(T) {
    return new (material_chip$46template._ViewMaterialChipComponentHost0$(dart.legacy(T))).new();
  };
  material_chip$46template.initReflector = function initReflector() {
    if (dart.test(material_chip$46template._visited)) {
      return;
    }
    material_chip$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialChipComponentL()), material_chip$46template.createMaterialChipComponentFactory(dart.dynamic));
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    focus$46template.initReflector();
    selection_model$46template.initReflector();
    has_renderer$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_chip$46template, {
    get MaterialChipComponentNgFactory() {
      return material_chip$46template._MaterialChipComponentNgFactory;
    }
  });
  var C3;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C4;
  dart.defineLazy(material_chip$46template, {
    /*material_chip$46template.styles$MaterialChipComponent*/get styles$MaterialChipComponent() {
      return [material_chip$46scss$46css$46shim.styles];
    },
    /*material_chip$46template._MaterialChipComponentNgFactory*/get _MaterialChipComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_chip$46template.styles$MaterialChipComponentHost*/get styles$MaterialChipComponentHost() {
      return C4 || CT.C4;
    },
    /*material_chip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_chips/material_chip.template", {
    "package:angular_components/material_chips/material_chip.template.dart": material_chip$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_chip.template.dart"],"names":[],"mappings":"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","file":"material_chip.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chip$46template: material_chip$46template
  };
}));

//# sourceMappingURL=material_chip.template.unsound.ddc.js.map
