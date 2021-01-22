define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/src/laminate/components/modal/modal_controller_directive', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/laminate/overlay/overlay.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/src/laminate/components/modal/modal_controller_directive.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__laminate__components__modal__modal_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__src__laminate__components__modal__modal_controller_directive, packages__angular_components__laminate__components__modal__modal, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__content__deferred_content_aware, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__laminate__overlay__overlay$46template, packages__angular_components__model__action__async_action$46template, packages__angular_components__src__laminate__components__modal__modal_controller_directive$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposer$46template) {
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
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const modal_controller_directive = packages__angular_components__src__laminate__components__modal__modal_controller_directive.src__laminate__components__modal__modal_controller_directive;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const overlay$46template = packages__angular_components__laminate__overlay__overlay$46template.laminate__overlay__overlay$46template;
  const async_action$46template = packages__angular_components__model__action__async_action$46template.model__action__async_action$46template;
  const modal_controller_directive$46template = packages__angular_components__src__laminate__components__modal__modal_controller_directive$46template.src__laminate__components__modal__modal_controller_directive$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var modal$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ModalL = () => (ModalL = dart.constFn(dart.legacy(modal.Modal)))();
  var GlobalModalStackL = () => (GlobalModalStackL = dart.constFn(dart.legacy(modal.GlobalModalStack)))();
  var VoidToModalComponentL = () => (VoidToModalComponentL = dart.constFn(dart.fnType(ModalComponentL(), [])))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var ComponentFactoryOfModalComponentL = () => (ComponentFactoryOfModalComponentL = dart.constFn(component_factory.ComponentFactory$(ModalComponentL())))();
  var HostViewOfModalComponentL = () => (HostViewOfModalComponentL = dart.constFn(host_view.HostView$(ModalComponentL())))();
  var HostViewLOfModalComponentL = () => (HostViewLOfModalComponentL = dart.constFn(dart.legacy(HostViewOfModalComponentL())))();
  var VoidToHostViewLOfModalComponentL = () => (VoidToHostViewLOfModalComponentL = dart.constFn(dart.fnType(HostViewLOfModalComponentL(), [])))();
  var VoidToGlobalModalStackL = () => (VoidToGlobalModalStackL = dart.constFn(dart.fnType(GlobalModalStackL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/laminate/components/modal/modal.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(modal$46template.viewFactory_ModalComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(modal$46template.ViewModalComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.fn(modal$46template.viewFactory_ModalComponentHost0, VoidToHostViewLOfModalComponentL());
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfModalComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "modal"
      });
    }
  }, false);
  var _appEl_1 = dart.privateName(modal$46template, "_appEl_1");
  var _ModalControllerDirective_1_9 = dart.privateName(modal$46template, "_ModalControllerDirective_1_9");
  var _expr_0 = dart.privateName(modal$46template, "_expr_0");
  var _expr_1 = dart.privateName(modal$46template, "_expr_1");
  var C0;
  var C1;
  modal$46template.ViewModalComponent0 = class ViewModalComponent0 extends component_view.ComponentView$(dart.legacy(modal.ModalComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/laminate/components/modal/modal.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "    ");
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_ModalControllerDirective_1_9] = new modal_controller_directive.ModalControllerDirective.new(_TemplateRef_1_8, this[_appEl_1]);
      let _text_2 = dom_helpers.appendText(parentRenderNode, "\n  ");
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.resolvedOverlayRef;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "resolvedOverlayRef", "asset:angular_components/lib/laminate/components/modal/modal.dart"))) {
        this[_ModalControllerDirective_1_9].overlay = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_ModalControllerDirective_1_9].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.uniquePaneId;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "pane-id", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    static _debugClearComponentStyles() {
      modal$46template.ViewModalComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = modal$46template.ViewModalComponent0._componentStyles;
      if (styles == null) {
        modal$46template.ViewModalComponent0._componentStyles = styles = new style_encapsulation._UnscopedComponentStyles.new(modal$46template.styles$ModalComponent, modal$46template.ViewModalComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (modal$46template.ViewModalComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_ModalControllerDirective_1_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    modal$46template.ViewModalComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("modal"));
  }).prototype = modal$46template.ViewModalComponent0.prototype;
  dart.addTypeTests(modal$46template.ViewModalComponent0);
  dart.addTypeCaches(modal$46template.ViewModalComponent0);
  dart.setMethodSignature(modal$46template.ViewModalComponent0, () => ({
    __proto__: dart.getMethods(modal$46template.ViewModalComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(modal$46template.ViewModalComponent0, L0);
  dart.setFieldSignature(modal$46template.ViewModalComponent0, () => ({
    __proto__: dart.getFields(modal$46template.ViewModalComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_ModalControllerDirective_1_9]: dart.fieldType(dart.legacy(modal_controller_directive.ModalControllerDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(modal$46template.ViewModalComponent0, {
    /*modal$46template.ViewModalComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  modal$46template._ViewModalComponent1 = class _ViewModalComponent1 extends embedded_view.EmbeddedView$(dart.legacy(modal.ModalComponent)) {
    build() {
      let t0;
      let _text_0 = dom_helpers.createText("\n      ");
      let _text_1 = dom_helpers.createText("\n    ");
      this.initRootNodesAndSubscriptions((t0 = [_text_0], (() => {
        t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](0)));
        t0[$addAll]([_text_1]);
        return t0;
      })()), null);
    }
  };
  (modal$46template._ViewModalComponent1.new = function(parentView, parentIndex) {
    modal$46template._ViewModalComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = modal$46template._ViewModalComponent1.prototype;
  dart.addTypeTests(modal$46template._ViewModalComponent1);
  dart.addTypeCaches(modal$46template._ViewModalComponent1);
  dart.setMethodSignature(modal$46template._ViewModalComponent1, () => ({
    __proto__: dart.getMethods(modal$46template._ViewModalComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(modal$46template._ViewModalComponent1, L0);
  modal$46template._ViewModalComponentHost0 = class _ViewModalComponentHost0 extends host_view.HostView$(dart.legacy(modal.ModalComponent)) {
    build() {
      this.componentView = new modal$46template.ViewModalComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ModalComponentL(), dart.wrapType(ModalComponentL()), dart.fn(() => new modal.ModalComponent.new(OverlayServiceL().as(this.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), _el_0, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ModalL().as(this.injectorGetOptional(dart.wrapType(ModalL()), this.parentIndex)), GlobalModalStackL().as(this.injectorGetOptional(dart.wrapType(GlobalModalStackL()), this.parentIndex))), VoidToModalComponentL())) : new modal.ModalComponent.new(OverlayServiceL().as(this.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), _el_0, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ModalL().as(this.injectorGetOptional(dart.wrapType(ModalL()), this.parentIndex)), GlobalModalStackL().as(this.injectorGetOptional(dart.wrapType(GlobalModalStackL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(ModalComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(ModalL())) && 0 === nodeIndex) {
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
      this.componentView.detectHostChanges(firstCheck);
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
  (modal$46template._ViewModalComponentHost0.new = function() {
    modal$46template._ViewModalComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = modal$46template._ViewModalComponentHost0.prototype;
  dart.addTypeTests(modal$46template._ViewModalComponentHost0);
  dart.addTypeCaches(modal$46template._ViewModalComponentHost0);
  dart.setMethodSignature(modal$46template._ViewModalComponentHost0, () => ({
    __proto__: dart.getMethods(modal$46template._ViewModalComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(modal$46template._ViewModalComponentHost0, L0);
  var C2;
  modal$46template.createModalComponentFactory = function createModalComponentFactory() {
    return new (ComponentFactoryOfModalComponentL()).new("modal", C2 || CT.C2);
  };
  modal$46template.viewFactory_ModalComponent1 = function viewFactory_ModalComponent1(parentView, parentIndex) {
    return new modal$46template._ViewModalComponent1.new(parentView, parentIndex);
  };
  modal$46template.viewFactory_ModalComponentHost0 = function viewFactory_ModalComponentHost0() {
    return new modal$46template._ViewModalComponentHost0.new();
  };
  modal$46template.initReflector = function initReflector() {
    if (dart.test(modal$46template._visited)) {
      return;
    }
    modal$46template._visited = true;
    reflector.registerFactory(dart.wrapType(GlobalModalStackL()), dart.fn(() => new modal.GlobalModalStack.new(), VoidToGlobalModalStackL()));
    reflector.registerComponent(dart.wrapType(ModalComponentL()), modal$46template.createModalComponentFactory());
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    overlay$46template.initReflector();
    async_action$46template.initReflector();
    modal_controller_directive$46template.initReflector();
    dom_service$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(modal$46template, {
    get ModalComponentNgFactory() {
      return modal$46template._ModalComponentNgFactory;
    }
  });
  var C3;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C4;
  dart.defineLazy(modal$46template, {
    /*modal$46template.styles$ModalComponent*/get styles$ModalComponent() {
      return C3 || CT.C3;
    },
    /*modal$46template._ModalComponentNgFactory*/get _ModalComponentNgFactory() {
      return C4 || CT.C4;
    },
    /*modal$46template.styles$ModalComponentHost*/get styles$ModalComponentHost() {
      return C3 || CT.C3;
    },
    /*modal$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/components/modal/modal.template", {
    "package:angular_components/laminate/components/modal/modal.template.dart": modal$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["modal.template.dart"],"names":[],"mappings":"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","file":"modal.template.unsound.ddc.js"}');
  // Exports:
  return {
    laminate__components__modal__modal$46template: modal$46template
  };
}));

//# sourceMappingURL=modal.template.unsound.ddc.js.map
