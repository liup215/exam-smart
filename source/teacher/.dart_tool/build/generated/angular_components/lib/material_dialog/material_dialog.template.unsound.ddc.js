define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_dialog/material_dialog', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular/angular.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_dialog/material_dialog.scss.css.shim'], (function load__packages__angular_components__material_dialog__material_dialog_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular__src__runtime__interpolate, packages__angular_components__material_dialog__material_dialog, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__components__modal__modal, packages__angular__angular$46template, packages__angular_components__laminate__components__modal__modal$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_dialog__material_dialog$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
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
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_dialog = packages__angular_components__material_dialog__material_dialog.material_dialog__material_dialog;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const modal$46template = packages__angular_components__laminate__components__modal__modal$46template.laminate__components__modal__modal$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_dialog$46scss$46css$46shim = packages__angular_components__material_dialog__material_dialog$46scss$46css$46shim.material_dialog__material_dialog$46scss$46css$46shim;
  var material_dialog$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialDialogComponentL = () => (MaterialDialogComponentL = dart.constFn(dart.legacy(material_dialog.MaterialDialogComponent)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var VoidToMaterialDialogComponentL = () => (VoidToMaterialDialogComponentL = dart.constFn(dart.fnType(MaterialDialogComponentL(), [])))();
  var ComponentFactoryOfMaterialDialogComponentL = () => (ComponentFactoryOfMaterialDialogComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialDialogComponentL())))();
  var HostViewOfMaterialDialogComponentL = () => (HostViewOfMaterialDialogComponentL = dart.constFn(host_view.HostView$(MaterialDialogComponentL())))();
  var HostViewLOfMaterialDialogComponentL = () => (HostViewLOfMaterialDialogComponentL = dart.constFn(dart.legacy(HostViewOfMaterialDialogComponentL())))();
  var VoidToHostViewLOfMaterialDialogComponentL = () => (VoidToHostViewLOfMaterialDialogComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialDialogComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_dialog/material_dialog.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_dialog$46template.viewFactory_MaterialDialogComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_dialog$46template.viewFactory_MaterialDialogComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_dialog$46template.ViewMaterialDialogComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C3() {
      return C3 = dart.fn(material_dialog$46template.viewFactory_MaterialDialogComponentHost0, VoidToHostViewLOfMaterialDialogComponentL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfMaterialDialogComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "material-dialog"
      });
    },
    get C5() {
      return C5 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_4 = dart.privateName(material_dialog$46template, "_textBinding_4");
  var _compView_0 = dart.privateName(material_dialog$46template, "_compView_0");
  var _FocusTrapComponent_0_5 = dart.privateName(material_dialog$46template, "_FocusTrapComponent_0_5");
  var _appEl_2 = dart.privateName(material_dialog$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_dialog$46template, "_NgIf_2_9");
  var _appEl_6 = dart.privateName(material_dialog$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_dialog$46template, "_NgIf_6_9");
  var _expr_0 = dart.privateName(material_dialog$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_dialog$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_dialog$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_dialog$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_dialog$46template, "_expr_4");
  var _el_3 = dart.privateName(material_dialog$46template, "_el_3");
  var _el_5 = dart.privateName(material_dialog$46template, "_el_5");
  var C0;
  var C1;
  var C2;
  material_dialog$46template.ViewMaterialDialogComponent0 = class ViewMaterialDialogComponent0 extends component_view.ComponentView$(dart.legacy(material_dialog.MaterialDialogComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_dialog/material_dialog.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FocusTrapComponent_0_5] = new focus_trap.FocusTrapComponent.new();
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_1), "wrapper");
      this.addShimC(HtmlElementL().as(_el_1));
      let _anchor_2 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C0 || CT.C0);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(this[_el_3], "error");
      this.addShimC(this[_el_3]);
      this[_el_3][$append](this[_textBinding_4].element);
      this[_el_5] = dom_helpers.appendElement(doc, _el_1, "main");
      dom_helpers.setAttribute(this[_el_5], "role", "presentation");
      this.addShimE(this[_el_5]);
      this.project(this[_el_5], 1);
      let _anchor_6 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 1, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C1 || CT.C1);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_0].createAndProject(this[_FocusTrapComponent_0_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_1])]));
      _el_0[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyUp')));
      _ctx.main = HtmlElementL().as(this[_el_5]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9].ngIf = _ctx.shouldShowHeader;
      this[_NgIf_6_9].ngIf = _ctx.shouldShowFooter;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.error != null;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "error != null", "package:angular_components/material_dialog/material_dialog.html"))) {
        dom_helpers.updateClassBinding(this[_el_3], "expanded", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_textBinding_4].updateText(interpolate.interpolateString0(_ctx.error));
      let currVal_1 = _ctx.shouldShowScrollStrokes;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "shouldShowScrollStrokes", "package:angular_components/material_dialog/material_dialog.html"))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_5]), "with-scroll-strokes", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.shouldShowTopScrollStroke;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "shouldShowTopScrollStroke", "package:angular_components/material_dialog/material_dialog.html"))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_5]), "top-scroll-stroke", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.shouldShowBottomScrollStroke;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "shouldShowBottomScrollStroke", "package:angular_components/material_dialog/material_dialog.html"))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_5]), "bottom-scroll-stroke", currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_4 = _ctx.headerId;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "aria-labelledby", currVal_4);
        this[_expr_4] = currVal_4;
      }
    }
    static _debugClearComponentStyles() {
      material_dialog$46template.ViewMaterialDialogComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_dialog$46template.ViewMaterialDialogComponent0._componentStyles;
      if (styles == null) {
        material_dialog$46template.ViewMaterialDialogComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_dialog$46template.styles$MaterialDialogComponent, material_dialog$46template.ViewMaterialDialogComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C2 || CT.C2);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_dialog$46template.ViewMaterialDialogComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    material_dialog$46template.ViewMaterialDialogComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-dialog"));
    dom_helpers.updateAttribute(this.rootElement, "role", "dialog");
    dom_helpers.updateAttribute(this.rootElement, "aria-modal", "true");
  }).prototype = material_dialog$46template.ViewMaterialDialogComponent0.prototype;
  dart.addTypeTests(material_dialog$46template.ViewMaterialDialogComponent0);
  dart.addTypeCaches(material_dialog$46template.ViewMaterialDialogComponent0);
  dart.setMethodSignature(material_dialog$46template.ViewMaterialDialogComponent0, () => ({
    __proto__: dart.getMethods(material_dialog$46template.ViewMaterialDialogComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_dialog$46template.ViewMaterialDialogComponent0, L0);
  dart.setFieldSignature(material_dialog$46template.ViewMaterialDialogComponent0, () => ({
    __proto__: dart.getFields(material_dialog$46template.ViewMaterialDialogComponent0.__proto__),
    [_textBinding_4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(focus_trap$46template.ViewFocusTrapComponent0)),
    [_FocusTrapComponent_0_5]: dart.fieldType(dart.legacy(focus_trap.FocusTrapComponent)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_5]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(material_dialog$46template.ViewMaterialDialogComponent0, {
    /*material_dialog$46template.ViewMaterialDialogComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _el_0 = dart.privateName(material_dialog$46template, "_el_0");
  material_dialog$46template._ViewMaterialDialogComponent1 = class _ViewMaterialDialogComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_dialog.MaterialDialogComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("header");
      dom_helpers.setAttribute(this[_el_0], "role", "presentation");
      this.addShimE(this[_el_0]);
      this.project(this[_el_0], 0);
      this.initRootNode(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.headerId;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "headerId", "package:angular_components/material_dialog/material_dialog.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "id", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_dialog$46template._ViewMaterialDialogComponent1.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_el_0] = null;
    material_dialog$46template._ViewMaterialDialogComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_dialog$46template._ViewMaterialDialogComponent1.prototype;
  dart.addTypeTests(material_dialog$46template._ViewMaterialDialogComponent1);
  dart.addTypeCaches(material_dialog$46template._ViewMaterialDialogComponent1);
  dart.setMethodSignature(material_dialog$46template._ViewMaterialDialogComponent1, () => ({
    __proto__: dart.getMethods(material_dialog$46template._ViewMaterialDialogComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_dialog$46template._ViewMaterialDialogComponent1, L0);
  dart.setFieldSignature(material_dialog$46template._ViewMaterialDialogComponent1, () => ({
    __proto__: dart.getFields(material_dialog$46template._ViewMaterialDialogComponent1.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_dialog$46template._ViewMaterialDialogComponent2 = class _ViewMaterialDialogComponent2 extends embedded_view.EmbeddedView$(dart.legacy(material_dialog.MaterialDialogComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("footer");
      dom_helpers.setAttribute(_el_0, "role", "presentation");
      this.addShimE(_el_0);
      this.project(_el_0, 2);
      this.initRootNode(_el_0);
    }
  };
  (material_dialog$46template._ViewMaterialDialogComponent2.new = function(parentView, parentIndex) {
    material_dialog$46template._ViewMaterialDialogComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_dialog$46template._ViewMaterialDialogComponent2.prototype;
  dart.addTypeTests(material_dialog$46template._ViewMaterialDialogComponent2);
  dart.addTypeCaches(material_dialog$46template._ViewMaterialDialogComponent2);
  dart.setMethodSignature(material_dialog$46template._ViewMaterialDialogComponent2, () => ({
    __proto__: dart.getMethods(material_dialog$46template._ViewMaterialDialogComponent2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_dialog$46template._ViewMaterialDialogComponent2, L0);
  material_dialog$46template._ViewMaterialDialogComponentHost0 = class _ViewMaterialDialogComponentHost0 extends host_view.HostView$(dart.legacy(material_dialog.MaterialDialogComponent)) {
    build() {
      this.componentView = new material_dialog$46template.ViewMaterialDialogComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDialogComponentL(), dart.wrapType(MaterialDialogComponentL()), dart.fn(() => new material_dialog.MaterialDialogComponent.new(_el_0, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), this.componentView, NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), ModalComponentL().as(this.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentIndex))), VoidToMaterialDialogComponentL())) : new material_dialog.MaterialDialogComponent.new(_el_0, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), this.componentView, NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), ModalComponentL().as(this.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this.component.ngAfterContentChecked();
      }
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (material_dialog$46template._ViewMaterialDialogComponentHost0.new = function() {
    material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_dialog$46template._ViewMaterialDialogComponentHost0.prototype;
  dart.addTypeTests(material_dialog$46template._ViewMaterialDialogComponentHost0);
  dart.addTypeCaches(material_dialog$46template._ViewMaterialDialogComponentHost0);
  dart.setMethodSignature(material_dialog$46template._ViewMaterialDialogComponentHost0, () => ({
    __proto__: dart.getMethods(material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_dialog$46template._ViewMaterialDialogComponentHost0, L0);
  var C3;
  material_dialog$46template.createMaterialDialogComponentFactory = function createMaterialDialogComponentFactory() {
    return new (ComponentFactoryOfMaterialDialogComponentL()).new("material-dialog", C3 || CT.C3);
  };
  material_dialog$46template.viewFactory_MaterialDialogComponent1 = function viewFactory_MaterialDialogComponent1(parentView, parentIndex) {
    return new material_dialog$46template._ViewMaterialDialogComponent1.new(parentView, parentIndex);
  };
  material_dialog$46template.viewFactory_MaterialDialogComponent2 = function viewFactory_MaterialDialogComponent2(parentView, parentIndex) {
    return new material_dialog$46template._ViewMaterialDialogComponent2.new(parentView, parentIndex);
  };
  material_dialog$46template.viewFactory_MaterialDialogComponentHost0 = function viewFactory_MaterialDialogComponentHost0() {
    return new material_dialog$46template._ViewMaterialDialogComponentHost0.new();
  };
  material_dialog$46template.initReflector = function initReflector() {
    if (dart.test(material_dialog$46template._visited)) {
      return;
    }
    material_dialog$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialDialogComponentL()), material_dialog$46template.createMaterialDialogComponentFactory());
    angular$46template.initReflector();
    focus_trap$46template.initReflector();
    modal$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    dom_service$46template.initReflector();
    disposer$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_dialog$46template, {
    get MaterialDialogComponentNgFactory() {
      return material_dialog$46template._MaterialDialogComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C4;
  var C5;
  dart.defineLazy(material_dialog$46template, {
    /*material_dialog$46template.styles$MaterialDialogComponent*/get styles$MaterialDialogComponent() {
      return [material_dialog$46scss$46css$46shim.styles];
    },
    /*material_dialog$46template._MaterialDialogComponentNgFactory*/get _MaterialDialogComponentNgFactory() {
      return C4 || CT.C4;
    },
    /*material_dialog$46template.styles$MaterialDialogComponentHost*/get styles$MaterialDialogComponentHost() {
      return C5 || CT.C5;
    },
    /*material_dialog$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_dialog/material_dialog.template", {
    "package:angular_components/material_dialog/material_dialog.template.dart": material_dialog$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_dialog.template.dart"],"names":[],"mappings":"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","file":"material_dialog.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_dialog__material_dialog$46template: material_dialog$46template
  };
}));

//# sourceMappingURL=material_dialog.template.unsound.ddc.js.map
