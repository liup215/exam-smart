define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/enums/visibility.template', 'packages/angular_components/laminate/overlay/module.template', 'packages/angular_components/laminate/overlay/overlay.template', 'packages/angular_components/laminate/overlay/zindexer.template', 'packages/angular_components/laminate/popup/module.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/math/box.template', 'packages/angular_components/model/ui/toggle.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_popup/material_popup.scss.css.shim'], (function load__packages__angular_components__material_popup__material_popup_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_popup__material_popup, packages__angular__src__runtime__interpolate, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__focus__focus_interface$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__enums__visibility$46template, packages__angular_components__laminate__overlay__module$46template, packages__angular_components__laminate__overlay__overlay$46template, packages__angular_components__laminate__overlay__zindexer$46template, packages__angular_components__laminate__popup__module$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__model__math__box$46template, packages__angular_components__model__ui__toggle$46template, packages__angular_components__utils__async__async$46template, packages__angular_components__utils__browser__dom_service__angular_2$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_popup__material_popup$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const focus_interface$46template = packages__angular_components__focus__focus_interface$46template.focus__focus_interface$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const visibility$46template = packages__angular_components__laminate__enums__visibility$46template.laminate__enums__visibility$46template;
  const module$46template = packages__angular_components__laminate__overlay__module$46template.laminate__overlay__module$46template;
  const overlay$46template = packages__angular_components__laminate__overlay__overlay$46template.laminate__overlay__overlay$46template;
  const zindexer$46template = packages__angular_components__laminate__overlay__zindexer$46template.laminate__overlay__zindexer$46template;
  const module$46template$ = packages__angular_components__laminate__popup__module$46template.laminate__popup__module$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const box$46template = packages__angular_components__model__math__box$46template.model__math__box$46template;
  const toggle$46template = packages__angular_components__model__ui__toggle$46template.model__ui__toggle$46template;
  const async$46template = packages__angular_components__utils__async__async$46template.utils__async__async$46template;
  const angular_2$46template = packages__angular_components__utils__browser__dom_service__angular_2$46template.utils__browser__dom_service__angular_2$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_popup$46scss$46css$46shim = packages__angular_components__material_popup__material_popup$46scss$46css$46shim.material_popup__material_popup$46scss$46css$46shim;
  var material_popup$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $setProperty = dartx.setProperty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var MaterialPopupComponentL = () => (MaterialPopupComponentL = dart.constFn(dart.legacy(material_popup.MaterialPopupComponent)))();
  var PopupHierarchyL = () => (PopupHierarchyL = dart.constFn(dart.legacy(popup_hierarchy.PopupHierarchy)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var ListOfRelativePositionL = () => (ListOfRelativePositionL = dart.constFn(core.List$(RelativePositionL())))();
  var ListLOfRelativePositionL = () => (ListLOfRelativePositionL = dart.constFn(dart.legacy(ListOfRelativePositionL())))();
  var OpaqueTokenOfListLOfRelativePositionL = () => (OpaqueTokenOfListLOfRelativePositionL = dart.constFn(di_tokens.OpaqueToken$(ListLOfRelativePositionL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var BoxL = () => (BoxL = dart.constFn(dart.legacy(box.Box)))();
  var PopupSizeProviderL = () => (PopupSizeProviderL = dart.constFn(dart.legacy(popup_size_provider.PopupSizeProvider)))();
  var VoidToMaterialPopupComponentL = () => (VoidToMaterialPopupComponentL = dart.constFn(dart.fnType(MaterialPopupComponentL(), [])))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var ComponentFactoryOfMaterialPopupComponentL = () => (ComponentFactoryOfMaterialPopupComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialPopupComponentL())))();
  var HostViewOfMaterialPopupComponentL = () => (HostViewOfMaterialPopupComponentL = dart.constFn(host_view.HostView$(MaterialPopupComponentL())))();
  var HostViewLOfMaterialPopupComponentL = () => (HostViewLOfMaterialPopupComponentL = dart.constFn(dart.legacy(HostViewOfMaterialPopupComponentL())))();
  var VoidToHostViewLOfMaterialPopupComponentL = () => (VoidToHostViewLOfMaterialPopupComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialPopupComponentL(), [])))();
  var MaterialPopupComponentLToPopupHierarchyL = () => (MaterialPopupComponentLToPopupHierarchyL = dart.constFn(dart.fnType(PopupHierarchyL(), [MaterialPopupComponentL()])))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var MaterialPopupComponentLToPopupRefL = () => (MaterialPopupComponentLToPopupRefL = dart.constFn(dart.fnType(PopupRefL(), [MaterialPopupComponentL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_popup/material_popup.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_popup$46template.viewFactory_MaterialPopupComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_popup$46template.ViewMaterialPopupComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C5() {
      return C5 = dart.fn(material_popup$46template.viewFactory_MaterialPopupComponentHost0, VoidToHostViewLOfMaterialPopupComponentL());
    },
    get C6() {
      return C6 = dart.fn(material_popup.getHierarchy, MaterialPopupComponentLToPopupHierarchyL());
    },
    get C9() {
      return C9 = dart.wrapType(MaterialPopupComponentL());
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], ObjectL());
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], ListLOfObjectL());
    },
    get C10() {
      return C10 = dart.fn(material_popup.getResolvedPopupRef, MaterialPopupComponentLToPopupRefL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ComponentFactoryOfMaterialPopupComponentL().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "material-popup"
      });
    },
    get C12() {
      return C12 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_1 = dart.privateName(material_popup$46template, "_appEl_1");
  var _TemplateRef_1_7 = dart.privateName(material_popup$46template, "_TemplateRef_1_7");
  var _expr_0 = dart.privateName(material_popup$46template, "_expr_0");
  var C0;
  var C1;
  material_popup$46template.ViewMaterialPopupComponent0 = class ViewMaterialPopupComponent0 extends component_view.ComponentView$(dart.legacy(material_popup.MaterialPopupComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_popup/material_popup.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      this[_TemplateRef_1_7] = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      let _text_2 = dom_helpers.appendText(parentRenderNode, "\n");
      _ctx.templateRef = this[_TemplateRef_1_7];
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.paneId;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "pane-id", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    static _debugClearComponentStyles() {
      material_popup$46template.ViewMaterialPopupComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_popup$46template.ViewMaterialPopupComponent0._componentStyles;
      if (styles == null) {
        material_popup$46template.ViewMaterialPopupComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_popup$46template.styles$MaterialPopupComponent, material_popup$46template.ViewMaterialPopupComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_popup$46template.ViewMaterialPopupComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_TemplateRef_1_7] = null;
    this[_expr_0] = null;
    material_popup$46template.ViewMaterialPopupComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-popup"));
  }).prototype = material_popup$46template.ViewMaterialPopupComponent0.prototype;
  dart.addTypeTests(material_popup$46template.ViewMaterialPopupComponent0);
  dart.addTypeCaches(material_popup$46template.ViewMaterialPopupComponent0);
  dart.setMethodSignature(material_popup$46template.ViewMaterialPopupComponent0, () => ({
    __proto__: dart.getMethods(material_popup$46template.ViewMaterialPopupComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_popup$46template.ViewMaterialPopupComponent0, L0);
  dart.setFieldSignature(material_popup$46template.ViewMaterialPopupComponent0, () => ({
    __proto__: dart.getFields(material_popup$46template.ViewMaterialPopupComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_TemplateRef_1_7]: dart.fieldType(dart.legacy(template_ref.TemplateRef)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_popup$46template.ViewMaterialPopupComponent0, {
    /*material_popup$46template.ViewMaterialPopupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _expr_1 = dart.privateName(material_popup$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_popup$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_popup$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_popup$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_popup$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_popup$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_popup$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_popup$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_popup$46template, "_expr_9");
  var _expr_11 = dart.privateName(material_popup$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_popup$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_popup$46template, "_expr_13");
  var _expr_14 = dart.privateName(material_popup$46template, "_expr_14");
  var _el_1 = dart.privateName(material_popup$46template, "_el_1");
  var _el_3 = dart.privateName(material_popup$46template, "_el_3");
  var _handleEvent_0 = dart.privateName(material_popup$46template, "_handleEvent_0");
  var _handleEvent_1 = dart.privateName(material_popup$46template, "_handleEvent_1");
  material_popup$46template._ViewMaterialPopupComponent1 = class _ViewMaterialPopupComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_popup.MaterialPopupComponent)) {
    build() {
      let _text_0 = dom_helpers.createText("\n  ");
      let doc = html.document;
      this[_el_1] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_1], "popup-wrapper mixin");
      this.addShimC(this[_el_1]);
      let _text_2 = dom_helpers.appendText(this[_el_1], "\n      ");
      this[_el_3] = dom_helpers.appendDiv(doc, this[_el_1]);
      this.updateChildClass(this[_el_3], "popup");
      this.addShimC(this[_el_3]);
      let _text_4 = dom_helpers.appendText(this[_el_3], "\n          ");
      let _text_5 = dom_helpers.appendText(this[_el_3], "\n          ");
      let _el_6 = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_6, "focusable-placeholder");
      _el_6.tabIndex = 0;
      this.addShimC(_el_6);
      let _text_7 = dom_helpers.appendText(this[_el_3], "\n          ");
      let _el_8 = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_8, "material-popup-content content");
      this.addShimC(_el_8);
      let _text_9 = dom_helpers.appendText(_el_8, "\n              ");
      let _el_10 = dom_helpers.appendElement(doc, _el_8, "header");
      this.addShimE(_el_10);
      let _text_11 = dom_helpers.appendText(_el_10, "\n                  ");
      this.project(_el_10, 0);
      let _text_12 = dom_helpers.appendText(_el_10, "\n              ");
      let _text_13 = dom_helpers.appendText(_el_8, "\n              ");
      let _el_14 = dom_helpers.appendDiv(doc, _el_8);
      this.updateChildClass(_el_14, "main");
      this.addShimC(_el_14);
      let _text_15 = dom_helpers.appendText(_el_14, "\n                  ");
      this.project(_el_14, 1);
      let _text_16 = dom_helpers.appendText(_el_14, "\n              ");
      let _text_17 = dom_helpers.appendText(_el_8, "\n              ");
      let _el_18 = dom_helpers.appendElement(doc, _el_8, "footer");
      this.addShimE(_el_18);
      let _text_19 = dom_helpers.appendText(_el_18, "\n                  ");
      this.project(_el_18, 2);
      let _text_20 = dom_helpers.appendText(_el_18, "\n              ");
      let _text_21 = dom_helpers.appendText(_el_8, "\n          ");
      let _text_22 = dom_helpers.appendText(this[_el_3], "\n          ");
      let _text_23 = dom_helpers.appendText(this[_el_3], "\n          ");
      let _el_24 = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_24, "focusable-placeholder");
      _el_24.tabIndex = 0;
      this.addShimC(_el_24);
      let _text_25 = dom_helpers.appendText(this[_el_3], "\n      ");
      let _text_26 = dom_helpers.appendText(this[_el_1], "\n  ");
      let _text_27 = dom_helpers.createText("\n");
      _el_6[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      _el_24[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_text_0, this[_el_1], _text_27]), null);
    }
    detectChangesInternal() {
      let t0, t0$;
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        dom_helpers.setAttribute(this[_el_1], "role", interpolate.interpolateString0(_ctx.role));
      }
      let currVal_0 = _ctx.ariaLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "ariaLabel", "package:angular_components/material_popup/material_popup.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.z;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "z", "package:angular_components/material_popup/material_popup.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "elevation", (t0 = currVal_1, t0 == null ? null : dart.toString(t0)));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.hasBox;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "hasBox", "package:angular_components/material_popup/material_popup.html"))) {
        dom_helpers.updateClassBinding(this[_el_1], "shadow", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.matchMinSourceWidth;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "matchMinSourceWidth", "package:angular_components/material_popup/material_popup.html"))) {
        dom_helpers.updateClassBinding(this[_el_1], "full-width", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.inkBackground;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "inkBackground", "package:angular_components/material_popup/material_popup.html"))) {
        dom_helpers.updateClassBinding(this[_el_1], "ink", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.slide;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "slide", "package:angular_components/material_popup/material_popup.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "slide", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.zIndex;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "zIndex", "package:angular_components/material_popup/material_popup.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "z-index", (t0$ = currVal_6, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.transformOrigin;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "transformOrigin", "package:angular_components/material_popup/material_popup.html"))) {
        this[_el_1].style[$setProperty]("transform-origin", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.showPopup;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "showPopup", "package:angular_components/material_popup/material_popup.html"))) {
        dom_helpers.updateClassBinding(this[_el_1], "visible", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = interpolate.interpolateString0(_ctx.uniqueId);
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "{{uniqueId}}", "package:angular_components/material_popup/material_popup.html"))) {
        dom_helpers.setProperty(this[_el_1], "id", currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_11 = _ctx.minHeight;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "minHeight", "package:angular_components/material_popup/material_popup.html"))) {
        this[_el_3].style[$setProperty]("min-height", currVal_11 == null ? null : dart.toString(currVal_11) + "px");
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.minWidth;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "minWidth", "package:angular_components/material_popup/material_popup.html"))) {
        this[_el_3].style[$setProperty]("min-width", currVal_12 == null ? null : dart.toString(currVal_12) + "px");
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.maxHeight;
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "maxHeight", "package:angular_components/material_popup/material_popup.html"))) {
        this[_el_3].style[$setProperty]("max-height", currVal_13 == null ? null : dart.toString(currVal_13) + "px");
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.maxWidth;
      if (dart.test(check_binding.checkBinding(this[_expr_14], currVal_14, "maxWidth", "package:angular_components/material_popup/material_popup.html"))) {
        this[_el_3].style[$setProperty]("max-width", currVal_14 == null ? null : dart.toString(currVal_14) + "px");
        this[_expr_14] = currVal_14;
      }
    }
    [_handleEvent_0]($36event) {
      let _ctx = this.ctx;
      _ctx.visible = false;
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.visible = false;
    }
  };
  (material_popup$46template._ViewMaterialPopupComponent1.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    material_popup$46template._ViewMaterialPopupComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_popup$46template._ViewMaterialPopupComponent1.prototype;
  dart.addTypeTests(material_popup$46template._ViewMaterialPopupComponent1);
  dart.addTypeCaches(material_popup$46template._ViewMaterialPopupComponent1);
  dart.setMethodSignature(material_popup$46template._ViewMaterialPopupComponent1, () => ({
    __proto__: dart.getMethods(material_popup$46template._ViewMaterialPopupComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_popup$46template._ViewMaterialPopupComponent1, L0);
  dart.setFieldSignature(material_popup$46template._ViewMaterialPopupComponent1, () => ({
    __proto__: dart.getFields(material_popup$46template._ViewMaterialPopupComponent1.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _appEl_0 = dart.privateName(material_popup$46template, "_appEl_0");
  var __PopupHierarchy_0_11 = dart.privateName(material_popup$46template, "__PopupHierarchy_0_11");
  var __PopupRef_0_12 = dart.privateName(material_popup$46template, "__PopupRef_0_12");
  var _PopupHierarchy_0_11 = dart.privateName(material_popup$46template, "_PopupHierarchy_0_11");
  var _PopupRef_0_12 = dart.privateName(material_popup$46template, "_PopupRef_0_12");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C2;
  var C3;
  var C4;
  material_popup$46template._ViewMaterialPopupComponentHost0 = class _ViewMaterialPopupComponentHost0 extends host_view.HostView$(dart.legacy(material_popup.MaterialPopupComponent)) {
    get [_PopupHierarchy_0_11]() {
      if (this[__PopupHierarchy_0_11] == null) {
        this[__PopupHierarchy_0_11] = material_popup.getHierarchy(this.component);
      }
      return this[__PopupHierarchy_0_11];
    }
    get [_PopupRef_0_12]() {
      if (this[__PopupRef_0_12] == null) {
        this[__PopupRef_0_12] = material_popup.getResolvedPopupRef(this.component);
      }
      return this[__PopupRef_0_12];
    }
    build() {
      this.componentView = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.injectorGet(C2 || CT.C2, this.parentIndex)), boolL().as(this.injectorGet(C3 || CT.C3, this.parentIndex)), BoxL().as(this.injectorGet(C4 || CT.C4, this.parentIndex)), PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this.componentView, this[_appEl_0], new element_ref.ElementRef.new(_el_0)), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentIndex)), MaterialPopupComponentL().as(this.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentIndex)), null, NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), OverlayServiceL().as(this.injectorGet(dart.wrapType(OverlayServiceL()), this.parentIndex)), DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), ZIndexerL().as(this.injectorGet(dart.wrapType(ZIndexerL()), this.parentIndex)), ListLOfRelativePositionL().as(this.injectorGet(C2 || CT.C2, this.parentIndex)), boolL().as(this.injectorGet(C3 || CT.C3, this.parentIndex)), BoxL().as(this.injectorGet(C4 || CT.C4, this.parentIndex)), PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentIndex)), this.componentView, this[_appEl_0], new element_ref.ElementRef.new(_el_0));
      this.initRootNode(this[_appEl_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this.component;
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_0_11];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_0_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this.component.ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this.component.ngOnDestroy();
    }
  };
  (material_popup$46template._ViewMaterialPopupComponentHost0.new = function() {
    this[_appEl_0] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    material_popup$46template._ViewMaterialPopupComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_popup$46template._ViewMaterialPopupComponentHost0.prototype;
  dart.addTypeTests(material_popup$46template._ViewMaterialPopupComponentHost0);
  dart.addTypeCaches(material_popup$46template._ViewMaterialPopupComponentHost0);
  dart.setMethodSignature(material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getMethods(material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getGetters(material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    [_PopupHierarchy_0_11]: dart.dynamic,
    [_PopupRef_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_popup$46template._ViewMaterialPopupComponentHost0, L0);
  dart.setFieldSignature(material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getFields(material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic)
  }));
  var C5;
  var C6;
  var C9;
  var C8;
  var C7;
  var C10;
  material_popup$46template.createMaterialPopupComponentFactory = function createMaterialPopupComponentFactory() {
    return new (ComponentFactoryOfMaterialPopupComponentL()).new("material-popup", C5 || CT.C5);
  };
  material_popup$46template.viewFactory_MaterialPopupComponent1 = function viewFactory_MaterialPopupComponent1(parentView, parentIndex) {
    return new material_popup$46template._ViewMaterialPopupComponent1.new(parentView, parentIndex);
  };
  material_popup$46template.viewFactory_MaterialPopupComponentHost0 = function viewFactory_MaterialPopupComponentHost0() {
    return new material_popup$46template._ViewMaterialPopupComponentHost0.new();
  };
  material_popup$46template.initReflector = function initReflector() {
    if (dart.test(material_popup$46template._visited)) {
      return;
    }
    material_popup$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialPopupComponentL()), material_popup$46template.createMaterialPopupComponentFactory());
    reflector.registerDependencies(C6 || CT.C6, C7 || CT.C7);
    reflector.registerDependencies(C10 || CT.C10, C7 || CT.C7);
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    focus_interface$46template.initReflector();
    alignment$46template.initReflector();
    visibility$46template.initReflector();
    module$46template.initReflector();
    overlay$46template.initReflector();
    zindexer$46template.initReflector();
    module$46template$.initReflector();
    popup$46template.initReflector();
    popup$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    box$46template.initReflector();
    toggle$46template.initReflector();
    async$46template.initReflector();
    angular_2$46template.initReflector();
    disposer$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_popup$46template, {
    get MaterialPopupComponentNgFactory() {
      return material_popup$46template._MaterialPopupComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C11;
  var C12;
  dart.defineLazy(material_popup$46template, {
    /*material_popup$46template.styles$MaterialPopupComponent*/get styles$MaterialPopupComponent() {
      return [material_popup$46scss$46css$46shim.styles];
    },
    /*material_popup$46template._MaterialPopupComponentNgFactory*/get _MaterialPopupComponentNgFactory() {
      return C11 || CT.C11;
    },
    /*material_popup$46template.styles$MaterialPopupComponentHost*/get styles$MaterialPopupComponentHost() {
      return C12 || CT.C12;
    },
    /*material_popup$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_popup/material_popup.template", {
    "package:angular_components/material_popup/material_popup.template.dart": material_popup$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_popup.template.dart"],"names":[],"mappings":"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","file":"material_popup.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_popup__material_popup$46template: material_popup$46template
  };
}));

//# sourceMappingURL=material_popup.template.unsound.ddc.js.map
