define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/focus/focus_list.template', 'packages/angular_components/focus/focus_list', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_item', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/material_tab/tab_button.template', 'packages/angular_components/focus/focus_item.template', 'packages/angular_components/material_tab/tab_button', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/material_tab/tab_change_event.template', 'packages/angular_components/material_tab/fixed_material_tab_strip.scss.css.shim'], (function load__packages__angular_components__material_tab__fixed_material_tab_strip_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__focus__focus_list$46template, packages__angular_components__focus__focus_list, packages__angular_components__focus__focus, packages__angular_components__focus__focus_item, packages__angular_components__material_tab__fixed_material_tab_strip, packages__angular_components__material_tab__tab_button$46template, packages__angular_components__focus__focus_item$46template, packages__angular_components__material_tab__tab_button, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__annotations__rtl_annotation$46template, packages__angular_components__material_tab__tab_change_event$46template, packages__angular_components__material_tab__fixed_material_tab_strip$46scss$46css$46shim) {
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
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const focus_list$46template = packages__angular_components__focus__focus_list$46template.focus__focus_list$46template;
  const focus_list = packages__angular_components__focus__focus_list.focus__focus_list;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const focus_item = packages__angular_components__focus__focus_item.focus__focus_item;
  const fixed_material_tab_strip = packages__angular_components__material_tab__fixed_material_tab_strip.material_tab__fixed_material_tab_strip;
  const tab_button$46template = packages__angular_components__material_tab__tab_button$46template.material_tab__tab_button$46template;
  const focus_item$46template = packages__angular_components__focus__focus_item$46template.focus__focus_item$46template;
  const tab_button = packages__angular_components__material_tab__tab_button.material_tab__tab_button;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const rtl_annotation$46template = packages__angular_components__annotations__rtl_annotation$46template.annotations__rtl_annotation$46template;
  const tab_change_event$46template = packages__angular_components__material_tab__tab_change_event$46template.material_tab__tab_change_event$46template;
  const fixed_material_tab_strip$46scss$46css$46shim = packages__angular_components__material_tab__fixed_material_tab_strip$46scss$46css$46shim.material_tab__fixed_material_tab_strip$46scss$46css$46shim;
  var fixed_material_tab_strip$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $setProperty = dartx.setProperty;
  var $addEventListener = dartx.addEventListener;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var FocusListDirectiveL = () => (FocusListDirectiveL = dart.constFn(dart.legacy(focus_list.FocusListDirective)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToFocusListDirectiveL = () => (VoidToFocusListDirectiveL = dart.constFn(dart.fnType(FocusListDirectiveL(), [])))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var FocusableItemL = () => (FocusableItemL = dart.constFn(dart.legacy(focus.FocusableItem)))();
  var _ViewFixedMaterialTabStripComponent1L = () => (_ViewFixedMaterialTabStripComponent1L = dart.constFn(dart.legacy(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1)))();
  var FocusItemDirectiveL = () => (FocusItemDirectiveL = dart.constFn(dart.legacy(focus_item.FocusItemDirective)))();
  var _ViewFixedMaterialTabStripComponent1LToFocusItemDirectiveL = () => (_ViewFixedMaterialTabStripComponent1LToFocusItemDirectiveL = dart.constFn(dart.fnType(FocusItemDirectiveL(), [_ViewFixedMaterialTabStripComponent1L()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ViewFixedMaterialTabStripComponent0L = () => (ViewFixedMaterialTabStripComponent0L = dart.constFn(dart.legacy(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0)))();
  var FixedMaterialTabStripComponentL = () => (FixedMaterialTabStripComponentL = dart.constFn(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToFixedMaterialTabStripComponentL = () => (VoidToFixedMaterialTabStripComponentL = dart.constFn(dart.fnType(FixedMaterialTabStripComponentL(), [])))();
  var ComponentFactoryOfFixedMaterialTabStripComponentL = () => (ComponentFactoryOfFixedMaterialTabStripComponentL = dart.constFn(component_factory.ComponentFactory$(FixedMaterialTabStripComponentL())))();
  var HostViewOfFixedMaterialTabStripComponentL = () => (HostViewOfFixedMaterialTabStripComponentL = dart.constFn(host_view.HostView$(FixedMaterialTabStripComponentL())))();
  var HostViewLOfFixedMaterialTabStripComponentL = () => (HostViewLOfFixedMaterialTabStripComponentL = dart.constFn(dart.legacy(HostViewOfFixedMaterialTabStripComponentL())))();
  var VoidToHostViewLOfFixedMaterialTabStripComponentL = () => (VoidToHostViewLOfFixedMaterialTabStripComponentL = dart.constFn(dart.fnType(HostViewLOfFixedMaterialTabStripComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/fixed_material_tab_strip.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C3() {
      return C3 = dart.fn(fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponentHost0, VoidToHostViewLOfFixedMaterialTabStripComponentL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfFixedMaterialTabStripComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "material-tab-strip"
      });
    },
    get C5() {
      return C5 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _query_FocusableItem_0_0_isDirty = dart.privateName(fixed_material_tab_strip$46template, "_query_FocusableItem_0_0_isDirty");
  var _FocusListDirective_0_5 = dart.privateName(fixed_material_tab_strip$46template, "_FocusListDirective_0_5");
  var _appEl_2 = dart.privateName(fixed_material_tab_strip$46template, "_appEl_2");
  var _NgFor_2_9 = dart.privateName(fixed_material_tab_strip$46template, "_NgFor_2_9");
  var _expr_1 = dart.privateName(fixed_material_tab_strip$46template, "_expr_1");
  var _expr_2 = dart.privateName(fixed_material_tab_strip$46template, "_expr_2");
  var _el_0 = dart.privateName(fixed_material_tab_strip$46template, "_el_0");
  var _el_1 = dart.privateName(fixed_material_tab_strip$46template, "_el_1");
  var C0;
  var _FocusItemDirective_0_5 = dart.privateName(fixed_material_tab_strip$46template, "_FocusItemDirective_0_5");
  var C1;
  fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0 = class ViewFixedMaterialTabStripComponent0 extends component_view.ComponentView$(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/fixed_material_tab_strip.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "navi-bar");
      dom_helpers.setAttribute(this[_el_0], "focusList", "");
      dom_helpers.setAttribute(this[_el_0], "ignoreUpAndDown", "");
      dom_helpers.setAttribute(this[_el_0], "loop", "");
      dom_helpers.setAttribute(this[_el_0], "role", "tablist");
      this.addShimC(this[_el_0]);
      this[_FocusListDirective_0_5] = new focus_list$46template.FocusListDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(FocusListDirectiveL(), dart.wrapType(FocusListDirectiveL()), dart.fn(() => new focus_list.FocusListDirective.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), "tablist", ""), VoidToFocusListDirectiveL())) : new focus_list.FocusListDirective.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), "tablist", ""));
      this[_el_1] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "tab-indicator");
      this.addShimC(this[_el_1]);
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C0 || CT.C0);
      this[_NgFor_2_9] = new ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      _ctx.focusController = this[_FocusListDirective_0_5].instance;
      _ctx.naviBar = this[_el_0];
      app_view_utils.appViewUtils.eventManager.addEventListener(parentRenderNode, "focusout", this.eventHandler1(ObjectL(), FocusEventL(), dart.bind(_ctx, 'focusOutHandler')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FocusListDirective_0_5].instance.loop = true;
      }
      let currVal_2 = _ctx.tabLabels;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "tabLabels", "package:angular_components/material_tab/fixed_material_tab_strip.html"))) {
        this[_NgFor_2_9].ngForOf = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_2_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_query_FocusableItem_0_0_isDirty])) {
          this[_FocusListDirective_0_5].instance.listItems = this[_appEl_2].mapNestedViewsWithSingleResult(FocusableItemL(), _ViewFixedMaterialTabStripComponent1L(), dart.fn(nestedView => nestedView[_FocusItemDirective_0_5].instance, _ViewFixedMaterialTabStripComponent1LToFocusItemDirectiveL()));
          this[_query_FocusableItem_0_0_isDirty] = false;
        }
      }
      this[_FocusListDirective_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_1 = _ctx.tabIndicatorTransform;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "tabIndicatorTransform", "package:angular_components/material_tab/fixed_material_tab_strip.html"))) {
        this[_el_1].style[$setProperty]("transform", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_FocusListDirective_0_5].instance.ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles;
      if (styles == null) {
        fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponent, fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new = function(parentView, parentIndex) {
    this[_query_FocusableItem_0_0_isDirty] = true;
    this[_FocusListDirective_0_5] = null;
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-tab-strip"));
    this.updateChildClassNonHtml(this.rootElement, "themeable");
  }).prototype = fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.prototype;
  dart.addTypeTests(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0);
  dart.addTypeCaches(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0);
  dart.setMethodSignature(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, () => ({
    __proto__: dart.getMethods(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, L0);
  dart.setFieldSignature(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, () => ({
    __proto__: dart.getFields(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__),
    [_query_FocusableItem_0_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_FocusListDirective_0_5]: dart.fieldType(dart.legacy(focus_list$46template.FocusListDirectiveNgCd)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_2_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, {
    /*fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(fixed_material_tab_strip$46template, "_compView_0");
  var _TabButtonComponent_0_6 = dart.privateName(fixed_material_tab_strip$46template, "_TabButtonComponent_0_6");
  var _expr_0 = dart.privateName(fixed_material_tab_strip$46template, "_expr_0");
  var _expr_4 = dart.privateName(fixed_material_tab_strip$46template, "_expr_4");
  var _handleEvent_0 = dart.privateName(fixed_material_tab_strip$46template, "_handleEvent_0");
  fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1 = class _ViewFixedMaterialTabStripComponent1 extends embedded_view.EmbeddedView$(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)) {
    build() {
      this[_compView_0] = new tab_button$46template.ViewTabButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "tab-button");
      dom_helpers.setAttribute(this[_el_0], "focusItem", "");
      dom_helpers.setAttribute(this[_el_0], "role", "tab");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_FocusItemDirective_0_5] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(HtmlElementL().as(this[_el_0]), this[_compView_0], "tab"));
      this[_TabButtonComponent_0_6] = new tab_button.TabButtonComponent.new(this[_el_0]);
      this[_compView_0].create(this[_TabButtonComponent_0_6]);
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_FocusItemDirective_0_5].instance, 'keydown')));
      let subscription_0 = this[_TabButtonComponent_0_6].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handleEvent_0)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(FocusableItemL()) && 0 === nodeIndex) {
        return this[_FocusItemDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let local_idx = optimizations.unsafeCast(intL(), this.locals[$_get]("index"));
      let local_tabLabel = optimizations.unsafeCast(StringL(), this.locals[$_get]("$implicit"));
      changed = false;
      if (dart.test(firstCheck)) {
        this[_TabButtonComponent_0_6].role = "tab";
        changed = true;
      }
      let currVal_2 = local_tabLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "tabLabel", "package:angular_components/material_tab/fixed_material_tab_strip.html"))) {
        this[_TabButtonComponent_0_6].label = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_4 = _ctx.activeTabIndex == local_idx;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "activeTabIndex == idx", "package:angular_components/material_tab/fixed_material_tab_strip.html"))) {
        this[_TabButtonComponent_0_6].isActive = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.tabId(local_idx);
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "tabId(idx)", "package:angular_components/material_tab/fixed_material_tab_strip.html"))) {
        dom_helpers.setProperty(this[_el_0], "id", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeStr(local_idx);
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "activeStr(idx)", "package:angular_components/material_tab/fixed_material_tab_strip.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-selected", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_FocusItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewFixedMaterialTabStripComponent0L(), this.parentView)[_query_FocusableItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handleEvent_0]($36event) {
      let local_idx = optimizations.unsafeCast(intL(), this.locals[$_get]("index"));
      let _ctx = this.ctx;
      _ctx.switchTo(local_idx);
    }
  };
  (fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FocusItemDirective_0_5] = null;
    this[_TabButtonComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.prototype;
  dart.addTypeTests(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1);
  dart.addTypeCaches(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1);
  dart.setMethodSignature(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, () => ({
    __proto__: dart.getMethods(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, L0);
  dart.setFieldSignature(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, () => ({
    __proto__: dart.getFields(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(tab_button$46template.ViewTabButtonComponent0)),
    [_FocusItemDirective_0_5]: dart.fieldType(dart.legacy(focus_item$46template.FocusItemDirectiveNgCd)),
    [_TabButtonComponent_0_6]: dart.fieldType(dart.legacy(tab_button.TabButtonComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C2;
  fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0 = class _ViewFixedMaterialTabStripComponentHost0 extends host_view.HostView$(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)) {
    build() {
      this.componentView = new fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(FixedMaterialTabStripComponentL(), dart.wrapType(FixedMaterialTabStripComponentL()), dart.fn(() => new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this.componentView, boolL().as(this.injectorGetOptional(C2 || CT.C2, this.parentIndex)), NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex))), VoidToFixedMaterialTabStripComponentL())) : new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this.componentView, boolL().as(this.injectorGetOptional(C2 || CT.C2, this.parentIndex)), NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)));
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
  };
  (fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.new = function() {
    fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.prototype;
  dart.addTypeTests(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0);
  dart.addTypeCaches(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0);
  dart.setMethodSignature(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0, () => ({
    __proto__: dart.getMethods(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0, L0);
  var C3;
  fixed_material_tab_strip$46template.createFixedMaterialTabStripComponentFactory = function createFixedMaterialTabStripComponentFactory() {
    return new (ComponentFactoryOfFixedMaterialTabStripComponentL()).new("material-tab-strip", C3 || CT.C3);
  };
  fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent1 = function viewFactory_FixedMaterialTabStripComponent1(parentView, parentIndex) {
    return new fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.new(parentView, parentIndex);
  };
  fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponentHost0 = function viewFactory_FixedMaterialTabStripComponentHost0() {
    return new fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.new();
  };
  fixed_material_tab_strip$46template.initReflector = function initReflector() {
    if (dart.test(fixed_material_tab_strip$46template._visited)) {
      return;
    }
    fixed_material_tab_strip$46template._visited = true;
    reflector.registerComponent(dart.wrapType(FixedMaterialTabStripComponentL()), fixed_material_tab_strip$46template.createFixedMaterialTabStripComponentFactory());
    angular$46template.initReflector();
    meta$46template.initReflector();
    rtl_annotation$46template.initReflector();
    focus_item$46template.initReflector();
    focus_list$46template.initReflector();
    tab_button$46template.initReflector();
    tab_change_event$46template.initReflector();
  };
  dart.copyProperties(fixed_material_tab_strip$46template, {
    get FixedMaterialTabStripComponentNgFactory() {
      return fixed_material_tab_strip$46template._FixedMaterialTabStripComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C4;
  var C5;
  dart.defineLazy(fixed_material_tab_strip$46template, {
    /*fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponent*/get styles$FixedMaterialTabStripComponent() {
      return [fixed_material_tab_strip$46scss$46css$46shim.styles];
    },
    /*fixed_material_tab_strip$46template._FixedMaterialTabStripComponentNgFactory*/get _FixedMaterialTabStripComponentNgFactory() {
      return C4 || CT.C4;
    },
    /*fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponentHost*/get styles$FixedMaterialTabStripComponentHost() {
      return C5 || CT.C5;
    },
    /*fixed_material_tab_strip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_tab/fixed_material_tab_strip.template", {
    "package:angular_components/material_tab/fixed_material_tab_strip.template.dart": fixed_material_tab_strip$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fixed_material_tab_strip.template.dart"],"names":[],"mappings":"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","file":"fixed_material_tab_strip.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_tab__fixed_material_tab_strip$46template: fixed_material_tab_strip$46template
  };
}));

//# sourceMappingURL=fixed_material_tab_strip.template.unsound.ddc.js.map
