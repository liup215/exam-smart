define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/scorecard/scorecard_bar', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/scorecard/scoreboard', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/scorecard/scorecard', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/color/material_chart_colors.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/scorecard/scorecard.template', 'packages/angular_components/scorecard/scorecard_bar.template', 'packages/angular_components/scorecard/scoreboard.scss.css.shim'], (function load__packages__angular_components__scorecard__scoreboard_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__scorecard__scorecard_bar, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__scorecard__scoreboard, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_components__material_button__material_button, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__button_decorator__button_decorator, packages__angular_components__interfaces__has_disabled, packages__angular_components__scorecard__scorecard, packages__angular__angular$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__utils__browser__dom_service__angular_2$46template, packages__angular_components__utils__color__material_chart_colors$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__scorecard__scorecard$46template, packages__angular_components__scorecard__scorecard_bar$46template, packages__angular_components__scorecard__scoreboard$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
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
  const scorecard_bar = packages__angular_components__scorecard__scorecard_bar.scorecard__scorecard_bar;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const scoreboard = packages__angular_components__scorecard__scoreboard.scorecard__scoreboard;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const scorecard = packages__angular_components__scorecard__scorecard.scorecard__scorecard;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const angular_2$46template = packages__angular_components__utils__browser__dom_service__angular_2$46template.utils__browser__dom_service__angular_2$46template;
  const material_chart_colors$46template = packages__angular_components__utils__color__material_chart_colors$46template.utils__color__material_chart_colors$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const scorecard$46template = packages__angular_components__scorecard__scorecard$46template.scorecard__scorecard$46template;
  const scorecard_bar$46template = packages__angular_components__scorecard__scorecard_bar$46template.scorecard__scorecard_bar$46template;
  const scoreboard$46scss$46css$46shim = packages__angular_components__scorecard__scoreboard$46scss$46css$46shim.scorecard__scoreboard$46scss$46css$46shim;
  var scoreboard$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var ScorecardBarDirectiveL = () => (ScorecardBarDirectiveL = dart.constFn(dart.legacy(scorecard_bar.ScorecardBarDirective)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToScorecardBarDirectiveL = () => (VoidToScorecardBarDirectiveL = dart.constFn(dart.fnType(ScorecardBarDirectiveL(), [])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ScoreboardComponentL = () => (ScoreboardComponentL = dart.constFn(dart.legacy(scoreboard.ScoreboardComponent)))();
  var VoidToScoreboardComponentL = () => (VoidToScoreboardComponentL = dart.constFn(dart.fnType(ScoreboardComponentL(), [])))();
  var ScorecardComponentL = () => (ScorecardComponentL = dart.constFn(dart.legacy(scorecard.ScorecardComponent)))();
  var JSArrayOfScorecardComponentL = () => (JSArrayOfScorecardComponentL = dart.constFn(_interceptors.JSArray$(ScorecardComponentL())))();
  var ComponentFactoryOfScoreboardComponentL = () => (ComponentFactoryOfScoreboardComponentL = dart.constFn(component_factory.ComponentFactory$(ScoreboardComponentL())))();
  var HostViewOfScoreboardComponentL = () => (HostViewOfScoreboardComponentL = dart.constFn(host_view.HostView$(ScoreboardComponentL())))();
  var HostViewLOfScoreboardComponentL = () => (HostViewLOfScoreboardComponentL = dart.constFn(dart.legacy(HostViewOfScoreboardComponentL())))();
  var VoidToHostViewLOfScoreboardComponentL = () => (VoidToHostViewLOfScoreboardComponentL = dart.constFn(dart.fnType(HostViewLOfScoreboardComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/scorecard/scoreboard.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(scoreboard$46template.viewFactory_ScoreboardComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C2() {
      return C2 = dart.fn(scoreboard$46template.viewFactory_ScoreboardComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(scoreboard$46template.ViewScoreboardComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C5() {
      return C5 = dart.fn(scoreboard$46template.viewFactory_ScoreboardComponentHost0, VoidToHostViewLOfScoreboardComponentL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ComponentFactoryOfScoreboardComponentL().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "acx-scoreboard"
      });
    },
    get C7() {
      return C7 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_1 = dart.privateName(scoreboard$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(scoreboard$46template, "_NgIf_1_9");
  var _ScorecardBarDirective_2_5 = dart.privateName(scoreboard$46template, "_ScorecardBarDirective_2_5");
  var _appEl_3 = dart.privateName(scoreboard$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(scoreboard$46template, "_NgIf_3_9");
  var _expr_0 = dart.privateName(scoreboard$46template, "_expr_0");
  var _expr_1 = dart.privateName(scoreboard$46template, "_expr_1");
  var _expr_2 = dart.privateName(scoreboard$46template, "_expr_2");
  var _el_0 = dart.privateName(scoreboard$46template, "_el_0");
  var C0;
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C1;
  var C2;
  var C3;
  scoreboard$46template.ViewScoreboardComponent0 = class ViewScoreboardComponent0 extends component_view.ComponentView$(dart.legacy(scoreboard.ScoreboardComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/scorecard/scoreboard.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "acx-scoreboard");
      this.addShimC(this[_el_0]);
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_2, "scorecard-bar");
      dom_helpers.setAttribute(_el_2, "scorecardBar", "");
      this.addShimC(_el_2);
      this[_ScorecardBarDirective_2_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ScorecardBarDirectiveL(), dart.wrapType(ScorecardBarDirectiveL()), dart.fn(() => new scorecard_bar.ScorecardBarDirective.new(DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), _el_2, boolL().as(this.parentView.injectorGetOptional(C1 || CT.C1, this.parentIndex))), VoidToScorecardBarDirectiveL())) : new scorecard_bar.ScorecardBarDirective.new(DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), _el_2, boolL().as(this.parentView.injectorGetOptional(C1 || CT.C1, this.parentIndex)));
      this.project(_el_2, 0);
      let _anchor_3 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C2 || CT.C2);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      _ctx.scorecardBar = this[_ScorecardBarDirective_2_5];
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      this[_NgIf_1_9].ngIf = _ctx.isScrollable;
      let currVal_2 = _ctx.isVertical;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "isVertical", "package:angular_components/scorecard/scoreboard.html"))) {
        this[_ScorecardBarDirective_2_5].isVertical = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_ScorecardBarDirective_2_5].ngOnInit();
      }
      this[_NgIf_3_9].ngIf = _ctx.isScrollable;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      let currVal_0 = !dart.test(_ctx.isVertical);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "!isVertical", "package:angular_components/scorecard/scoreboard.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "acx-scoreboard-horizontal", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isVertical;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "isVertical", "package:angular_components/scorecard/scoreboard.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "acx-scoreboard-vertical", currVal_1);
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_ScorecardBarDirective_2_5].ngAfterViewChecked();
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_ScorecardBarDirective_2_5].ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      scoreboard$46template.ViewScoreboardComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = scoreboard$46template.ViewScoreboardComponent0._componentStyles;
      if (styles == null) {
        scoreboard$46template.ViewScoreboardComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(scoreboard$46template.styles$ScoreboardComponent, scoreboard$46template.ViewScoreboardComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C3 || CT.C3);
        }
      }
      this.componentStyles = styles;
    }
  };
  (scoreboard$46template.ViewScoreboardComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_ScorecardBarDirective_2_5] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    scoreboard$46template.ViewScoreboardComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("acx-scoreboard"));
  }).prototype = scoreboard$46template.ViewScoreboardComponent0.prototype;
  dart.addTypeTests(scoreboard$46template.ViewScoreboardComponent0);
  dart.addTypeCaches(scoreboard$46template.ViewScoreboardComponent0);
  dart.setMethodSignature(scoreboard$46template.ViewScoreboardComponent0, () => ({
    __proto__: dart.getMethods(scoreboard$46template.ViewScoreboardComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scoreboard$46template.ViewScoreboardComponent0, L0);
  dart.setFieldSignature(scoreboard$46template.ViewScoreboardComponent0, () => ({
    __proto__: dart.getFields(scoreboard$46template.ViewScoreboardComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_ScorecardBarDirective_2_5]: dart.fieldType(dart.legacy(scorecard_bar.ScorecardBarDirective)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(scoreboard$46template.ViewScoreboardComponent0, {
    /*scoreboard$46template.ViewScoreboardComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(scoreboard$46template, "_compView_0");
  var _AcxDarkTheme_0_5 = dart.privateName(scoreboard$46template, "_AcxDarkTheme_0_5");
  var _MaterialButtonComponent_0_6 = dart.privateName(scoreboard$46template, "_MaterialButtonComponent_0_6");
  var _compView_1 = dart.privateName(scoreboard$46template, "_compView_1");
  var _MaterialIconComponent_1_5 = dart.privateName(scoreboard$46template, "_MaterialIconComponent_1_5");
  var _el_1 = dart.privateName(scoreboard$46template, "_el_1");
  var C4;
  scoreboard$46template._ViewScoreboardComponent1 = class _ViewScoreboardComponent1 extends embedded_view.EmbeddedView$(dart.legacy(scoreboard.ScoreboardComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "scroll-button scroll-back-button");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C4 || CT.C4, this.parentView.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C4 || CT.C4, this.parentView.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button.MaterialButtonComponent.new(HtmlElementL().as(this[_el_0]), AcxDarkThemeL().as(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5]);
      this[_compView_0].createAndProject(this[_MaterialButtonComponent_0_6], JSArrayOfObjectL().of([JSArrayOfElementL().of([this[_el_1]])]));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'scrollBack')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.backIconType;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "backIconType", "package:angular_components/scorecard/scoreboard.html"))) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarStart;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "atScorecardBarStart", "package:angular_components/scorecard/scoreboard.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "hide", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      if (dart.test(firstCheck)) {
        if (scoreboard.ScoreboardComponent.scrollScorecardBarBack != null) {
          dom_helpers.updateAttribute(this[_el_1], "aria-label", scoreboard.ScoreboardComponent.scrollScorecardBarBack);
        }
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
    }
  };
  (scoreboard$46template._ViewScoreboardComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    scoreboard$46template._ViewScoreboardComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = scoreboard$46template._ViewScoreboardComponent1.prototype;
  dart.addTypeTests(scoreboard$46template._ViewScoreboardComponent1);
  dart.addTypeCaches(scoreboard$46template._ViewScoreboardComponent1);
  dart.setMethodSignature(scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getMethods(scoreboard$46template._ViewScoreboardComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(scoreboard$46template._ViewScoreboardComponent1, L0);
  dart.setFieldSignature(scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getFields(scoreboard$46template._ViewScoreboardComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  scoreboard$46template._ViewScoreboardComponent2 = class _ViewScoreboardComponent2 extends embedded_view.EmbeddedView$(dart.legacy(scoreboard.ScoreboardComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "scroll-button scroll-forward-button");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C4 || CT.C4, this.parentView.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C4 || CT.C4, this.parentView.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button.MaterialButtonComponent.new(HtmlElementL().as(this[_el_0]), AcxDarkThemeL().as(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5]);
      this[_compView_0].createAndProject(this[_MaterialButtonComponent_0_6], JSArrayOfObjectL().of([JSArrayOfElementL().of([this[_el_1]])]));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'scrollForward')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.forwardIconType;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "forwardIconType", "package:angular_components/scorecard/scoreboard.html"))) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarEnd;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "atScorecardBarEnd", "package:angular_components/scorecard/scoreboard.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "hide", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      if (dart.test(firstCheck)) {
        if (scoreboard.ScoreboardComponent.scrollScorecardBarForward != null) {
          dom_helpers.updateAttribute(this[_el_1], "aria-label", scoreboard.ScoreboardComponent.scrollScorecardBarForward);
        }
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
    }
  };
  (scoreboard$46template._ViewScoreboardComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    scoreboard$46template._ViewScoreboardComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = scoreboard$46template._ViewScoreboardComponent2.prototype;
  dart.addTypeTests(scoreboard$46template._ViewScoreboardComponent2);
  dart.addTypeCaches(scoreboard$46template._ViewScoreboardComponent2);
  dart.setMethodSignature(scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getMethods(scoreboard$46template._ViewScoreboardComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(scoreboard$46template._ViewScoreboardComponent2, L0);
  dart.setFieldSignature(scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getFields(scoreboard$46template._ViewScoreboardComponent2.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  scoreboard$46template._ViewScoreboardComponentHost0 = class _ViewScoreboardComponentHost0 extends host_view.HostView$(dart.legacy(scoreboard.ScoreboardComponent)) {
    build() {
      this.componentView = new scoreboard$46template.ViewScoreboardComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ScoreboardComponentL(), dart.wrapType(ScoreboardComponentL()), dart.fn(() => new scoreboard.ScoreboardComponent.new(null, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), this.componentView), VoidToScoreboardComponentL())) : new scoreboard.ScoreboardComponent.new(null, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), this.componentView);
      this.component.scoreCards = JSArrayOfScorecardComponentL().of([]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (scoreboard$46template._ViewScoreboardComponentHost0.new = function() {
    scoreboard$46template._ViewScoreboardComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = scoreboard$46template._ViewScoreboardComponentHost0.prototype;
  dart.addTypeTests(scoreboard$46template._ViewScoreboardComponentHost0);
  dart.addTypeCaches(scoreboard$46template._ViewScoreboardComponentHost0);
  dart.setMethodSignature(scoreboard$46template._ViewScoreboardComponentHost0, () => ({
    __proto__: dart.getMethods(scoreboard$46template._ViewScoreboardComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scoreboard$46template._ViewScoreboardComponentHost0, L0);
  var C5;
  scoreboard$46template.createScoreboardComponentFactory = function createScoreboardComponentFactory() {
    return new (ComponentFactoryOfScoreboardComponentL()).new("acx-scoreboard", C5 || CT.C5);
  };
  scoreboard$46template.viewFactory_ScoreboardComponent1 = function viewFactory_ScoreboardComponent1(parentView, parentIndex) {
    return new scoreboard$46template._ViewScoreboardComponent1.new(parentView, parentIndex);
  };
  scoreboard$46template.viewFactory_ScoreboardComponent2 = function viewFactory_ScoreboardComponent2(parentView, parentIndex) {
    return new scoreboard$46template._ViewScoreboardComponent2.new(parentView, parentIndex);
  };
  scoreboard$46template.viewFactory_ScoreboardComponentHost0 = function viewFactory_ScoreboardComponentHost0() {
    return new scoreboard$46template._ViewScoreboardComponentHost0.new();
  };
  scoreboard$46template.initReflector = function initReflector() {
    if (dart.test(scoreboard$46template._visited)) {
      return;
    }
    scoreboard$46template._visited = true;
    reflector.registerComponent(dart.wrapType(ScoreboardComponentL()), scoreboard$46template.createScoreboardComponentFactory());
    angular$46template.initReflector();
    material_button$46template.initReflector();
    material_icon$46template.initReflector();
    selection_model$46template.initReflector();
    angular_2$46template.initReflector();
    material_chart_colors$46template.initReflector();
    disposer$46template.initReflector();
    scorecard$46template.initReflector();
    scorecard_bar$46template.initReflector();
  };
  dart.copyProperties(scoreboard$46template, {
    get ScoreboardComponentNgFactory() {
      return scoreboard$46template._ScoreboardComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C6;
  var C7;
  dart.defineLazy(scoreboard$46template, {
    /*scoreboard$46template.styles$ScoreboardComponent*/get styles$ScoreboardComponent() {
      return [scoreboard$46scss$46css$46shim.styles];
    },
    /*scoreboard$46template._ScoreboardComponentNgFactory*/get _ScoreboardComponentNgFactory() {
      return C6 || CT.C6;
    },
    /*scoreboard$46template.styles$ScoreboardComponentHost*/get styles$ScoreboardComponentHost() {
      return C7 || CT.C7;
    },
    /*scoreboard$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/scorecard/scoreboard.template", {
    "package:angular_components/scorecard/scoreboard.template.dart": scoreboard$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scoreboard.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8DI,uBAAiB,2BAAY,2DAA2D;IAC1F;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AACkC,MAAjD,cAAQ,sBAAmB,GAAG,EAAE,gBAAgB;AACF,MAAnD,AAAK,sBAAsB,aAAO;AACT,MAAzB,AAAK,cAAc;AACb,sBAAY,yBAA2B;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,kBAAQ,sBAAmB,GAAG,EAAO;AACE,MAA7C,AAAK,sBAAiB,KAAK,EAAE;AACmB,MAAhD,yBAAsB,KAAK,EAAE,gBAAgB;AACzB,MAApB,AAAK,cAAS,KAAK;AAKiM,MAJ/M,6CAAuC,2BACtC,mDAAmC,yCAAuB,cACzC,6DAA2B,AAAW,4BAAqB,8BAAiB,oBAAc,KAAK,aAAO,AAAW,iDAAuE,wDAEjM,6DAA2B,AAAW,4BAAqB,8BAAiB,oBAAc,KAAK,aAAO,AAAW,iDAAuE;AAChL,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACd,sBAAY,yBAA2B;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AACF,MAAnD,AAAK,IAAD,gBAAqB;IAC3B;;AAIQ,iBAAY;AACb,uBAAkB;AACgB,MAAlC,AAAU,uBAAO,AAAK,IAAD;AACpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,cAAc;AACT,QAAjD,AAA2B,8CAAa,SAAS;AAC9B,QAAnB,gBAAU,SAAS;;AAE1B,qBAAgB,gDAAwB,UAAU;AACN,QAArC,AAA2B;;AAEK,MAAlC,AAAU,uBAAO,AAAK,IAAD;AACgB,MAArC,AAAS;AAC4B,MAArC,AAAS;AACH,sBAAa,WAAC,AAAK,IAAD;AAC7B,oBAAI,2BAA2B,eAAS,SAAS,EAAE,eAAe;AACe,QAA/E,+BAAiC,aAAO,6BAA6B,SAAS;AACtD,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,cAAc;AACc,QAA7E,+BAAiC,aAAO,2BAA2B,SAAS;AACpD,QAAnB,gBAAU,SAAS;;AAE1B,qBAAe;AACuC,QAA/C,AAA2B;;IAEpC;;AAIoC,MAA7B,AAAS;AACoB,MAA7B,AAAS;AAC+B,MAAxC,AAA2B;IAClC;;AAGyB,MAAvB,kEAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACwF,QAA5G,kEAAoB,SAAiC,2CAAO,kDAA4B;AACxF,sBAAa;AACqD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;iEAxFsC,YAAgB;IAVxC;IACT;IACyB;IAChB;IACT;IACD;IACA;IACA;IACe;AAEkD,4EAAM,UAAU,EAAE,WAAW;AACtE,IAA1B,AAAK;AAC8D,uBAA9D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;;;;;;;MAJ+B,+DAAgB;;;;;;;;;;;;;;AAkHvC,iBAAY;AAC+C,MAA5D,oBAAuB,gEAA6B,MAAM;AACtB,MAApC,cAAa,AAAY;AAC8C,MAA5E,AAAK,6BAA6B,aAAO;AAChB,MAAzB,AAAK,gCAAc;AAK2I,MAJzJ,oCAA8B,2BAC7B,0CAAoC,gCAAc,cAChC,2CAAkB,AAAW,AAAW,4DAA8E,AAAW,0DAE1I,2CAAkB,AAAW,AAAW,4DAA8E,AAAW;AAChB,MAA3H,qCAAwC,kEAA6B,iCAAY,0BAAwB,mBAAa;AAC5D,MAA1D,oBAAuB,4DAA2B,MAAM;AACpB,MAApC,cAAa,AAAY;AACL,MAAzB,AAAK,gCAAc;AACyD,MAAvE,mCAAsC,8DAA2B;AACd,MAAnD,AAAY,yBAAY;AAG3B,MAFG,AAAY,mCAAsB,oCAA8B,uBACnE,wBAAM;AAEF,2BAAsB,AAA6B,AAAQ,kDAAO,AAAK,+BAAmB,UAAL,IAAI;AAC7B,MAAlE,AAAK,mCAA8B,uBAAM,eAAQ,yCAAC,cAAc;IAClE;wBAGoC,OAAW,WAAmB;AAChE,UAAe,aAAV,SAAS,KAAI;AAChB,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY;;AAEd,YAAM,AAAU,KAAK,KAAW,6CAA4B,AAAU,KAAK,KAAW,qCAAqB,AAAU,KAAK,KAAW;AACnI,gBAAY;;;AAGhB,YAAO,eAAc;IACvB;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACV,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEJ,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,gBAAgB;AACjB,QAA3C,AAA2B,wCAAO,SAAS;AAClC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEb,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,uBAAuB;AACP,QAAjE,sCAAwC,aAAO,QAAQ,SAAS;AACxC,QAAnB,gBAAU,SAAS;;AAEoB,MAAzC,AAAY,oCAAkB,UAAU;AAC7C,oBAAI,UAAU;AACZ,YAA2C,yDAAwB;AACqC,UAAtG,4BAA8B,aAAO,cAA0C;;;AAGnD,MAA3B,AAAY;AACe,MAA3B,AAAY;IACnB;;AAIyC,MAAlC,AAAY;AACsB,MAAlC,AAAY;IACnB;;kEA7E8C,YAAgB;IATxB;IAC9B;IACyB;IACG;IACL;IAC3B;IACA;IACY;IACA;AAC6D,6EAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;AAiGnG,iBAAY;AAC+C,MAA5D,oBAAuB,gEAA6B,MAAM;AACtB,MAApC,cAAa,AAAY;AACiD,MAA/E,AAAK,6BAA6B,aAAO;AAChB,MAAzB,AAAK,gCAAc;AAK2I,MAJzJ,oCAA8B,2BAC7B,0CAAoC,gCAAc,cAChC,2CAAkB,AAAW,AAAW,4DAA8E,AAAW,0DAE1I,2CAAkB,AAAW,AAAW,4DAA8E,AAAW;AAChB,MAA3H,qCAAwC,kEAA6B,iCAAY,0BAAwB,mBAAa;AAC5D,MAA1D,oBAAuB,4DAA2B,MAAM;AACpB,MAApC,cAAa,AAAY;AACL,MAAzB,AAAK,gCAAc;AACyD,MAAvE,mCAAsC,8DAA2B;AACd,MAAnD,AAAY,yBAAY;AAG3B,MAFG,AAAY,mCAAsB,oCAA8B,uBACnE,wBAAM;AAEF,2BAAsB,AAA6B,AAAQ,kDAAO,AAAK,+BAAmB,UAAL,IAAI;AAC7B,MAAlE,AAAK,mCAA8B,uBAAM,eAAQ,yCAAC,cAAc;IAClE;wBAGoC,OAAW,WAAmB;AAChE,UAAe,aAAV,SAAS,KAAI;AAChB,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAY;;AAEd,YAAM,AAAU,KAAK,KAAW,6CAA4B,AAAU,KAAK,KAAW,qCAAqB,AAAU,KAAK,KAAW;AACnI,gBAAY;;;AAGhB,YAAO,eAAc;IACvB;;AAIQ,iBAAY;AACb,oBAAU;AACV,uBAAkB;AACR,MAAf,UAAU;AACV,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEJ,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,mBAAmB;AACpB,QAA3C,AAA2B,wCAAO,SAAS;AAClC,QAAd,UAAU;AACc,QAAnB,gBAAU,SAAS;;AAE1B,UAAI,OAAO;AACyB,QAA7B,AAAY;;AAEb,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA2B,eAAS,SAAS,EAAE,qBAAqB;AACL,QAAjE,sCAAwC,aAAO,QAAQ,SAAS;AACxC,QAAnB,gBAAU,SAAS;;AAEoB,MAAzC,AAAY,oCAAkB,UAAU;AAC7C,oBAAI,UAAU;AACZ,YAA2C,4DAA2B;AACqC,UAAzG,4BAA8B,aAAO,cAA0C;;;AAGnD,MAA3B,AAAY;AACe,MAA3B,AAAY;IACnB;;AAIyC,MAAlC,AAAY;AACsB,MAAlC,AAAY;IACnB;;kEA7E8C,YAAgB;IATxB;IAC9B;IACyB;IACG;IACL;IAC3B;IACA;IACY;IACA;AAC6D,6EAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;;;;;;;AAyFnD,MAAjD,qBAAgB,uDAAyB,MAAM;AAC9C,kBAAa,AAAc;AAKoF,MAJhH,2BAAsB,2BACrB,iDAAmC,uCAAqB,cACvC,uCAAoB,uBAAM,AAAK,iBAAqB,8BAAiB,oBAAmB,sDAEjG,uCAAoB,uBAAM,AAAK,iBAAqB,8BAAiB,oBAAmB;AACxE,MAAzB,AAAU,4BAAa;AACJ,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,oBAAU;AACV,uBAAkB;AACvB,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAErB,qBAAgB,gDAAwB,UAAU;AACvB,QAApB,AAAU;;AAEiB,MAA7B,AAAc;IACrB;;AAI8B,MAAvB,AAAU;IACjB;;;;;EACF;;;;;;;;;;AAhOE,UAAO,oDAAiB;EAC1B;qGA4FiF,YAAgB;AAC/F,UAAO,yDAA0B,UAAU,EAAE,WAAW;EAC1D;qGA4FiF,YAAgB;AAC/F,UAAO,yDAA0B,UAAU,EAAE,WAAW;EAC1D;;AAsCE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEsE,IAAjF,4BAAyB,uCAAqB;AACzB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AA3PE,YAAO;IACT;;;;;;;MA3GoB,gDAA0B;YAAG,EAAS;;MAwGpD,mDAA6B;;;MAqMf,oDAA8B;;;MAuC9C,8BAAQ;YAAG","file":"scoreboard.template.unsound.ddc.js"}');
  // Exports:
  return {
    scorecard__scoreboard$46template: scoreboard$46template
  };
}));

//# sourceMappingURL=scoreboard.template.unsound.ddc.js.map
