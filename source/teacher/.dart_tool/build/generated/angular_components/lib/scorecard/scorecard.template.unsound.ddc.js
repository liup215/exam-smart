define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/scorecard/scorecard', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/angular.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/color/color.template', 'packages/angular_components/utils/color/material_chart_colors.template', 'packages/angular_components/scorecard/scorecard.scss.css.shim'], (function load__packages__angular_components__scorecard__scorecard_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate, packages__angular_components__scorecard__scorecard, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_ripple__material_ripple, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular__angular$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__utils__color__color$46template, packages__angular_components__utils__color__material_chart_colors$46template, packages__angular_components__scorecard__scorecard$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
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
  const scorecard = packages__angular_components__scorecard__scorecard.scorecard__scorecard;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const color$46template = packages__angular_components__utils__color__color$46template.utils__color__color$46template;
  const material_chart_colors$46template = packages__angular_components__utils__color__material_chart_colors$46template.utils__color__material_chart_colors$46template;
  const scorecard$46scss$46css$46shim = packages__angular_components__scorecard__scorecard$46scss$46css$46shim.scorecard__scorecard$46scss$46css$46shim;
  var scorecard$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $setProperty = dartx.setProperty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ScorecardComponentL = () => (ScorecardComponentL = dart.constFn(dart.legacy(scorecard.ScorecardComponent)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var VoidToScorecardComponentL = () => (VoidToScorecardComponentL = dart.constFn(dart.fnType(ScorecardComponentL(), [])))();
  var ComponentFactoryOfScorecardComponentL = () => (ComponentFactoryOfScorecardComponentL = dart.constFn(component_factory.ComponentFactory$(ScorecardComponentL())))();
  var HostViewOfScorecardComponentL = () => (HostViewOfScorecardComponentL = dart.constFn(host_view.HostView$(ScorecardComponentL())))();
  var HostViewLOfScorecardComponentL = () => (HostViewLOfScorecardComponentL = dart.constFn(dart.legacy(HostViewOfScorecardComponentL())))();
  var VoidToHostViewLOfScorecardComponentL = () => (VoidToHostViewLOfScorecardComponentL = dart.constFn(dart.fnType(HostViewLOfScorecardComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/scorecard/scorecard.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(scorecard$46template.viewFactory_ScorecardComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(scorecard$46template.viewFactory_ScorecardComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(scorecard$46template.viewFactory_ScorecardComponent3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(scorecard$46template.viewFactory_ScorecardComponent5, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C4() {
      return C4 = dart.fn(scorecard$46template.ViewScorecardComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C5() {
      return C5 = dart.fn(scorecard$46template.viewFactory_ScorecardComponent4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C6() {
      return C6 = dart.fn(scorecard$46template.viewFactory_ScorecardComponentHost0, VoidToHostViewLOfScorecardComponentL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ComponentFactoryOfScorecardComponentL().prototype,
        [ComponentFactory__viewFactory]: C6 || CT.C6,
        [ComponentFactory_selector]: "acx-scorecard"
      });
    },
    get C8() {
      return C8 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_2 = dart.privateName(scorecard$46template, "_textBinding_2");
  var _textBinding_4 = dart.privateName(scorecard$46template, "_textBinding_4");
  var _appEl_0 = dart.privateName(scorecard$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(scorecard$46template, "_NgIf_0_9");
  var _appEl_5 = dart.privateName(scorecard$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(scorecard$46template, "_NgIf_5_9");
  var _appEl_7 = dart.privateName(scorecard$46template, "_appEl_7");
  var _NgIf_7_9 = dart.privateName(scorecard$46template, "_NgIf_7_9");
  var _appEl_9 = dart.privateName(scorecard$46template, "_appEl_9");
  var _NgIf_9_9 = dart.privateName(scorecard$46template, "_NgIf_9_9");
  var _expr_0 = dart.privateName(scorecard$46template, "_expr_0");
  var _expr_1 = dart.privateName(scorecard$46template, "_expr_1");
  var _expr_2 = dart.privateName(scorecard$46template, "_expr_2");
  var _expr_3 = dart.privateName(scorecard$46template, "_expr_3");
  var _expr_4 = dart.privateName(scorecard$46template, "_expr_4");
  var _expr_5 = dart.privateName(scorecard$46template, "_expr_5");
  var _expr_6 = dart.privateName(scorecard$46template, "_expr_6");
  var _expr_7 = dart.privateName(scorecard$46template, "_expr_7");
  var _expr_8 = dart.privateName(scorecard$46template, "_expr_8");
  var _el_3 = dart.privateName(scorecard$46template, "_el_3");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  scorecard$46template.ViewScorecardComponent0 = class ViewScorecardComponent0 extends component_view.ComponentView$(dart.legacy(scorecard.ScorecardComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/scorecard/scorecard.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let doc = html.document;
      let _el_1 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_1, "label-name");
      this.addShimC(_el_1);
      _el_1[$append](this[_textBinding_2].element);
      this.project(_el_1, 0);
      this[_el_3] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_3], "label-value");
      this.addShimC(this[_el_3]);
      this[_el_3][$append](this[_textBinding_4].element);
      this.project(this[_el_3], 1);
      let _anchor_5 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_5] = new view_container.ViewContainer.new(5, null, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C1 || CT.C1);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _text_6 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_7 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_7] = new view_container.ViewContainer.new(7, null, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C2 || CT.C2);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_9 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_9] = new view_container.ViewContainer.new(9, null, this, _anchor_9);
      let _TemplateRef_9_8 = new template_ref.TemplateRef.new(this[_appEl_9], C3 || CT.C3);
      this[_NgIf_9_9] = new ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _text_10 = dom_helpers.appendText(parentRenderNode, "\n");
      this.project(parentRenderNode, 3);
      parentRenderNode[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'keydown')));
      parentRenderNode[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(_ctx, 'resetOutline')));
      parentRenderNode[$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(_ctx, 'onMouseInteraction')));
      parentRenderNode[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'handleClick')));
      parentRenderNode[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onFocus')));
      parentRenderNode[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeypress')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.selectable;
      this[_NgIf_5_9].ngIf = _ctx.suggestionBefore != null;
      this[_NgIf_7_9].ngIf = _ctx.description != null;
      this[_NgIf_9_9].ngIf = _ctx.suggestionAfter != null;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_textBinding_2].updateText(interpolate.interpolateString0(_ctx.label));
      let currVal_0 = _ctx.tooltip;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "tooltip", "package:angular_components/scorecard/scorecard.html"))) {
        dom_helpers.setProperty(this[_el_3], "title", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_textBinding_4].updateText(interpolate.interpolateString0(_ctx.value));
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_9].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let t0;
      let _ctx = this.ctx;
      let currVal_1 = _ctx.isChangePositive;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "is-change-positive", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.isChangeNegative;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "is-change-negative", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.selectable;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "selectable", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.hostTabIndex;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "tabindex", (t0 = currVal_4, t0 == null ? null : dart.toString(t0)));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.hostRole;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, null, null))) {
        dom_helpers.updateAttribute(this.rootElement, "role", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.backgroundStyle;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, null, null))) {
        this.rootElement.style[$setProperty]("background", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.extraBig;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "extra-big", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.selected;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, null, null))) {
        dom_helpers.updateClassBindingNonHtml(this.rootElement, "selected", currVal_8);
        this[_expr_8] = currVal_8;
      }
    }
    static _debugClearComponentStyles() {
      scorecard$46template.ViewScorecardComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = scorecard$46template.ViewScorecardComponent0._componentStyles;
      if (styles == null) {
        scorecard$46template.ViewScorecardComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(scorecard$46template.styles$ScorecardComponent, scorecard$46template.ViewScorecardComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C4 || CT.C4);
        }
      }
      this.componentStyles = styles;
    }
  };
  (scorecard$46template.ViewScorecardComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    this[_textBinding_4] = new text_binding.TextBinding.new();
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_3] = null;
    scorecard$46template.ViewScorecardComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("acx-scorecard"));
    this.updateChildClassNonHtml(this.rootElement, "themeable");
  }).prototype = scorecard$46template.ViewScorecardComponent0.prototype;
  dart.addTypeTests(scorecard$46template.ViewScorecardComponent0);
  dart.addTypeCaches(scorecard$46template.ViewScorecardComponent0);
  dart.setMethodSignature(scorecard$46template.ViewScorecardComponent0, () => ({
    __proto__: dart.getMethods(scorecard$46template.ViewScorecardComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scorecard$46template.ViewScorecardComponent0, L0);
  dart.setFieldSignature(scorecard$46template.ViewScorecardComponent0, () => ({
    __proto__: dart.getFields(scorecard$46template.ViewScorecardComponent0.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_9]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_9_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(scorecard$46template.ViewScorecardComponent0, {
    /*scorecard$46template.ViewScorecardComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(scorecard$46template, "_compView_0");
  var _MaterialRippleComponent_0_5 = dart.privateName(scorecard$46template, "_MaterialRippleComponent_0_5");
  scorecard$46template._ViewScorecardComponent1 = class _ViewScorecardComponent1 extends embedded_view.EmbeddedView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      this[_compView_0] = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.addShimC(_el_0);
      this[_MaterialRippleComponent_0_5] = new material_ripple.MaterialRippleComponent.new(_el_0);
      this[_compView_0].create(this[_MaterialRippleComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (scorecard$46template._ViewScorecardComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    scorecard$46template._ViewScorecardComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = scorecard$46template._ViewScorecardComponent1.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponent1);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponent1);
  dart.setMethodSignature(scorecard$46template._ViewScorecardComponent1, () => ({
    __proto__: dart.getMethods(scorecard$46template._ViewScorecardComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponent1, L0);
  dart.setFieldSignature(scorecard$46template._ViewScorecardComponent1, () => ({
    __proto__: dart.getFields(scorecard$46template._ViewScorecardComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_ripple$46template.ViewMaterialRippleComponent0)),
    [_MaterialRippleComponent_0_5]: dart.fieldType(dart.legacy(material_ripple.MaterialRippleComponent))
  }));
  var _textBinding_1 = dart.privateName(scorecard$46template, "_textBinding_1");
  scorecard$46template._ViewScorecardComponent2 = class _ViewScorecardComponent2 extends embedded_view.EmbeddedView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "suggestion before");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.suggestionBefore));
    }
  };
  (scorecard$46template._ViewScorecardComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    scorecard$46template._ViewScorecardComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = scorecard$46template._ViewScorecardComponent2.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponent2);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponent2);
  dart.setMethodSignature(scorecard$46template._ViewScorecardComponent2, () => ({
    __proto__: dart.getMethods(scorecard$46template._ViewScorecardComponent2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponent2, L0);
  dart.setFieldSignature(scorecard$46template._ViewScorecardComponent2, () => ({
    __proto__: dart.getFields(scorecard$46template._ViewScorecardComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _textBinding_3 = dart.privateName(scorecard$46template, "_textBinding_3");
  var _appEl_1 = dart.privateName(scorecard$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(scorecard$46template, "_NgIf_1_9");
  var C5;
  scorecard$46template._ViewScorecardComponent3 = class _ViewScorecardComponent3 extends embedded_view.EmbeddedView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "description");
      this.addShimE(_el_0);
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C5 || CT.C5);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = dom_helpers.appendText(_el_0, " ");
      _el_0[$append](this[_textBinding_3].element);
      let _text_4 = dom_helpers.appendText(_el_0, "  ");
      this.project(_el_0, 2);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = dart.test(_ctx.changeGlyph) && _ctx.description !== "" && !dart.test(_ctx.isChangeNeutral);
      this[_appEl_1].detectChangesInNestedViews();
      this[_textBinding_3].updateText(interpolate.interpolateString0(_ctx.description));
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (scorecard$46template._ViewScorecardComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new text_binding.TextBinding.new();
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    scorecard$46template._ViewScorecardComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = scorecard$46template._ViewScorecardComponent3.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponent3);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponent3);
  dart.setMethodSignature(scorecard$46template._ViewScorecardComponent3, () => ({
    __proto__: dart.getMethods(scorecard$46template._ViewScorecardComponent3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponent3, L0);
  dart.setFieldSignature(scorecard$46template._ViewScorecardComponent3, () => ({
    __proto__: dart.getFields(scorecard$46template._ViewScorecardComponent3.__proto__),
    [_textBinding_3]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  var _MaterialIconComponent_0_5 = dart.privateName(scorecard$46template, "_MaterialIconComponent_0_5");
  scorecard$46template._ViewScorecardComponent4 = class _ViewScorecardComponent4 extends embedded_view.EmbeddedView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "change-glyph");
      dom_helpers.setAttribute(_el_0, "size", "small");
      this.addShimC(_el_0);
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0].create(this[_MaterialIconComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.changeGlyphIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "changeGlyphIcon", "package:angular_components/scorecard/scorecard.html"))) {
        this[_MaterialIconComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (scorecard$46template._ViewScorecardComponent4.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    scorecard$46template._ViewScorecardComponent4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = scorecard$46template._ViewScorecardComponent4.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponent4);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponent4);
  dart.setMethodSignature(scorecard$46template._ViewScorecardComponent4, () => ({
    __proto__: dart.getMethods(scorecard$46template._ViewScorecardComponent4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponent4, L0);
  dart.setFieldSignature(scorecard$46template._ViewScorecardComponent4, () => ({
    __proto__: dart.getFields(scorecard$46template._ViewScorecardComponent4.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  scorecard$46template._ViewScorecardComponent5 = class _ViewScorecardComponent5 extends embedded_view.EmbeddedView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "suggestion after");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.suggestionAfter));
    }
  };
  (scorecard$46template._ViewScorecardComponent5.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    scorecard$46template._ViewScorecardComponent5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = scorecard$46template._ViewScorecardComponent5.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponent5);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponent5);
  dart.setMethodSignature(scorecard$46template._ViewScorecardComponent5, () => ({
    __proto__: dart.getMethods(scorecard$46template._ViewScorecardComponent5.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponent5, L0);
  dart.setFieldSignature(scorecard$46template._ViewScorecardComponent5, () => ({
    __proto__: dart.getFields(scorecard$46template._ViewScorecardComponent5.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  scorecard$46template._ViewScorecardComponentHost0 = class _ViewScorecardComponentHost0 extends host_view.HostView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      this.componentView = new scorecard$46template.ViewScorecardComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ScorecardComponentL(), dart.wrapType(ScorecardComponentL()), dart.fn(() => new scorecard.ScorecardComponent.new(this.componentView, _el_0, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex))), VoidToScorecardComponentL())) : new scorecard.ScorecardComponent.new(this.componentView, _el_0, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectHostChanges(firstCheck);
      this.componentView.detectChanges();
    }
  };
  (scorecard$46template._ViewScorecardComponentHost0.new = function() {
    scorecard$46template._ViewScorecardComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = scorecard$46template._ViewScorecardComponentHost0.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponentHost0);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponentHost0);
  dart.setMethodSignature(scorecard$46template._ViewScorecardComponentHost0, () => ({
    __proto__: dart.getMethods(scorecard$46template._ViewScorecardComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponentHost0, L0);
  var C6;
  scorecard$46template.createScorecardComponentFactory = function createScorecardComponentFactory() {
    return new (ComponentFactoryOfScorecardComponentL()).new("acx-scorecard", C6 || CT.C6);
  };
  scorecard$46template.viewFactory_ScorecardComponent1 = function viewFactory_ScorecardComponent1(parentView, parentIndex) {
    return new scorecard$46template._ViewScorecardComponent1.new(parentView, parentIndex);
  };
  scorecard$46template.viewFactory_ScorecardComponent2 = function viewFactory_ScorecardComponent2(parentView, parentIndex) {
    return new scorecard$46template._ViewScorecardComponent2.new(parentView, parentIndex);
  };
  scorecard$46template.viewFactory_ScorecardComponent3 = function viewFactory_ScorecardComponent3(parentView, parentIndex) {
    return new scorecard$46template._ViewScorecardComponent3.new(parentView, parentIndex);
  };
  scorecard$46template.viewFactory_ScorecardComponent4 = function viewFactory_ScorecardComponent4(parentView, parentIndex) {
    return new scorecard$46template._ViewScorecardComponent4.new(parentView, parentIndex);
  };
  scorecard$46template.viewFactory_ScorecardComponent5 = function viewFactory_ScorecardComponent5(parentView, parentIndex) {
    return new scorecard$46template._ViewScorecardComponent5.new(parentView, parentIndex);
  };
  scorecard$46template.viewFactory_ScorecardComponentHost0 = function viewFactory_ScorecardComponentHost0() {
    return new scorecard$46template._ViewScorecardComponentHost0.new();
  };
  scorecard$46template.initReflector = function initReflector() {
    if (dart.test(scorecard$46template._visited)) {
      return;
    }
    scorecard$46template._visited = true;
    reflector.registerComponent(dart.wrapType(ScorecardComponentL()), scorecard$46template.createScorecardComponentFactory());
    angular$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    material_icon$46template.initReflector();
    material_ripple$46template.initReflector();
    dom_service$46template.initReflector();
    events$46template.initReflector();
    color$46template.initReflector();
    material_chart_colors$46template.initReflector();
  };
  dart.copyProperties(scorecard$46template, {
    get ScorecardComponentNgFactory() {
      return scorecard$46template._ScorecardComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C7;
  var C8;
  dart.defineLazy(scorecard$46template, {
    /*scorecard$46template.styles$ScorecardComponent*/get styles$ScorecardComponent() {
      return [scorecard$46scss$46css$46shim.styles];
    },
    /*scorecard$46template._ScorecardComponentNgFactory*/get _ScorecardComponentNgFactory() {
      return C7 || CT.C7;
    },
    /*scorecard$46template.styles$ScorecardComponentHost*/get styles$ScorecardComponentHost() {
      return C8 || CT.C8;
    },
    /*scorecard$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/scorecard/scorecard.template", {
    "package:angular_components/scorecard/scorecard.template.dart": scorecard$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scorecard.template.dart"],"names":[],"mappings":"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","file":"scorecard.template.unsound.ddc.js"}');
  // Exports:
  return {
    scorecard__scorecard$46template: scorecard$46template
  };
}));

//# sourceMappingURL=scorecard.template.unsound.ddc.js.map
