define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/angular/id/id.template', 'packages/angular_components/utils/angular/id/id', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/src/runtime/queries', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_expansionpanel/material_expansionpanel', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_interface', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposable_callback.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_expansionpanel/material_expansionpanel.scss.css.shim'], (function load__packages__angular_components__material_expansionpanel__material_expansionpanel_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_yes_no_buttons__material_yes_no_buttons, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__utils__angular__id__id$46template, packages__angular_components__utils__angular__id__id, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__content__deferred_content, packages__angular_components__content__deferred_content_aware, packages__angular__src__runtime__queries, packages__angular__src__runtime__interpolate, packages__angular_components__material_expansionpanel__material_expansionpanel, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__material_yes_no_buttons__material_yes_no_buttons$46template, packages__angular_components__interfaces__has_disabled, packages__angular_components__focus__focus, packages__angular_components__focus__focus_interface, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__action__async_action$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposable_callback$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_expansionpanel__material_expansionpanel$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
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
  const material_yes_no_buttons = packages__angular_components__material_yes_no_buttons__material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const id$46template = packages__angular_components__utils__angular__id__id$46template.utils__angular__id__id$46template;
  const id = packages__angular_components__utils__angular__id__id.utils__angular__id__id;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_expansionpanel = packages__angular_components__material_expansionpanel__material_expansionpanel.material_expansionpanel__material_expansionpanel;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const material_yes_no_buttons$46template = packages__angular_components__material_yes_no_buttons__material_yes_no_buttons$46template.material_yes_no_buttons__material_yes_no_buttons$46template;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const async_action$46template = packages__angular_components__model__action__async_action$46template.model__action__async_action$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposable_callback$46template = packages__angular_components__utils__disposer__disposable_callback$46template.utils__disposer__disposable_callback$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_expansionpanel$46scss$46css$46shim = packages__angular_components__material_expansionpanel__material_expansionpanel$46scss$46css$46shim.material_expansionpanel__material_expansionpanel$46scss$46css$46shim;
  var material_expansionpanel$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var VoidToKeyboardOnlyFocusIndicatorDirectiveL = () => (VoidToKeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.fnType(KeyboardOnlyFocusIndicatorDirectiveL(), [])))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var AutoIdDirectiveL = () => (AutoIdDirectiveL = dart.constFn(dart.legacy(id.AutoIdDirective)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToAutoIdDirectiveL = () => (VoidToAutoIdDirectiveL = dart.constFn(dart.fnType(AutoIdDirectiveL(), [])))();
  var DeferredContentDirectiveL = () => (DeferredContentDirectiveL = dart.constFn(dart.legacy(deferred_content.DeferredContentDirective)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var VoidToDeferredContentDirectiveL = () => (VoidToDeferredContentDirectiveL = dart.constFn(dart.fnType(DeferredContentDirectiveL(), [])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var KeyUpBoundaryDirectiveL = () => (KeyUpBoundaryDirectiveL = dart.constFn(dart.legacy(material_yes_no_buttons.KeyUpBoundaryDirective)))();
  var _ViewMaterialExpansionPanel5L = () => (_ViewMaterialExpansionPanel5L = dart.constFn(dart.legacy(material_expansionpanel$46template._ViewMaterialExpansionPanel5)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var _ViewMaterialExpansionPanel5LToDivElementL = () => (_ViewMaterialExpansionPanel5LToDivElementL = dart.constFn(dart.fnType(DivElementL(), [_ViewMaterialExpansionPanel5L()])))();
  var _ViewMaterialExpansionPanel4L = () => (_ViewMaterialExpansionPanel4L = dart.constFn(dart.legacy(material_expansionpanel$46template._ViewMaterialExpansionPanel4)))();
  var _ViewMaterialExpansionPanel4LToDivElementL = () => (_ViewMaterialExpansionPanel4LToDivElementL = dart.constFn(dart.fnType(DivElementL(), [_ViewMaterialExpansionPanel4L()])))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ViewMaterialExpansionPanel0L = () => (ViewMaterialExpansionPanel0L = dart.constFn(dart.legacy(material_expansionpanel$46template.ViewMaterialExpansionPanel0)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var EnterAcceptsDirectiveL = () => (EnterAcceptsDirectiveL = dart.constFn(dart.legacy(material_yes_no_buttons.EnterAcceptsDirective)))();
  var MaterialExpansionPanelL = () => (MaterialExpansionPanelL = dart.constFn(dart.legacy(material_expansionpanel.MaterialExpansionPanel)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToMaterialExpansionPanelL = () => (VoidToMaterialExpansionPanelL = dart.constFn(dart.fnType(MaterialExpansionPanelL(), [])))();
  var FocusableItemL = () => (FocusableItemL = dart.constFn(dart.legacy(focus.FocusableItem)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var ComponentFactoryOfMaterialExpansionPanelL = () => (ComponentFactoryOfMaterialExpansionPanelL = dart.constFn(component_factory.ComponentFactory$(MaterialExpansionPanelL())))();
  var HostViewOfMaterialExpansionPanelL = () => (HostViewOfMaterialExpansionPanelL = dart.constFn(host_view.HostView$(MaterialExpansionPanelL())))();
  var HostViewLOfMaterialExpansionPanelL = () => (HostViewLOfMaterialExpansionPanelL = dart.constFn(dart.legacy(HostViewOfMaterialExpansionPanelL())))();
  var VoidToHostViewLOfMaterialExpansionPanelL = () => (VoidToHostViewLOfMaterialExpansionPanelL = dart.constFn(dart.fnType(HostViewLOfMaterialExpansionPanelL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C4() {
      return C4 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel5, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C5() {
      return C5 = dart.fn(material_expansionpanel$46template.ViewMaterialExpansionPanel0._debugClearComponentStyles, VoidTovoid());
    },
    get C6() {
      return C6 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel6, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C7() {
      return C7 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel7, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C8() {
      return C8 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel8, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C9() {
      return C9 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel9, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C10() {
      return C10 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanelHost0, VoidToHostViewLOfMaterialExpansionPanelL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ComponentFactoryOfMaterialExpansionPanelL().prototype,
        [ComponentFactory__viewFactory]: C10 || CT.C10,
        [ComponentFactory_selector]: "material-expansionpanel"
      });
    },
    get C12() {
      return C12 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _viewQuery_action_4_isDirty = dart.privateName(material_expansionpanel$46template, "_viewQuery_action_4_isDirty");
  var _viewQuery_mainContent_2_isDirty = dart.privateName(material_expansionpanel$46template, "_viewQuery_mainContent_2_isDirty");
  var _viewQuery_contentWrapper_5_isDirty = dart.privateName(material_expansionpanel$46template, "_viewQuery_contentWrapper_5_isDirty");
  var _textBinding_6 = dart.privateName(material_expansionpanel$46template, "_textBinding_6");
  var _KeyUpBoundaryDirective_0_5 = dart.privateName(material_expansionpanel$46template, "_KeyUpBoundaryDirective_0_5");
  var _ButtonDirective_2_5 = dart.privateName(material_expansionpanel$46template, "_ButtonDirective_2_5");
  var _KeyboardOnlyFocusIndicatorDirective_2_6 = dart.privateName(material_expansionpanel$46template, "_KeyboardOnlyFocusIndicatorDirective_2_6");
  var _appEl_3 = dart.privateName(material_expansionpanel$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_3_9");
  var _appEl_7 = dart.privateName(material_expansionpanel$46template, "_appEl_7");
  var _NgIf_7_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_7_9");
  var _AutoIdDirective_8_5 = dart.privateName(material_expansionpanel$46template, "_AutoIdDirective_8_5");
  var _appEl_9 = dart.privateName(material_expansionpanel$46template, "_appEl_9");
  var _NgIf_9_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_9_9");
  var _appEl_10 = dart.privateName(material_expansionpanel$46template, "_appEl_10");
  var _NgIf_10_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_10_9");
  var _AutoIdDirective_11_5 = dart.privateName(material_expansionpanel$46template, "_AutoIdDirective_11_5");
  var _appEl_12 = dart.privateName(material_expansionpanel$46template, "_appEl_12");
  var _DeferredContentDirective_12_9 = dart.privateName(material_expansionpanel$46template, "_DeferredContentDirective_12_9");
  var _expr_0 = dart.privateName(material_expansionpanel$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_expansionpanel$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_expansionpanel$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_expansionpanel$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_expansionpanel$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_expansionpanel$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_expansionpanel$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_expansionpanel$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_expansionpanel$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_expansionpanel$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_expansionpanel$46template, "_expr_10");
  var _expr_11 = dart.privateName(material_expansionpanel$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_expansionpanel$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_expansionpanel$46template, "_expr_13");
  var _el_0 = dart.privateName(material_expansionpanel$46template, "_el_0");
  var _el_1 = dart.privateName(material_expansionpanel$46template, "_el_1");
  var _el_2 = dart.privateName(material_expansionpanel$46template, "_el_2");
  var _el_8 = dart.privateName(material_expansionpanel$46template, "_el_8");
  var _el_11 = dart.privateName(material_expansionpanel$46template, "_el_11");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var _handleEvent_0 = dart.privateName(material_expansionpanel$46template, "_handleEvent_0");
  var C5;
  material_expansionpanel$46template.ViewMaterialExpansionPanel0 = class ViewMaterialExpansionPanel0 extends component_view.ComponentView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_expansionpanel/material_expansionpanel.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "panel themeable");
      dom_helpers.setAttribute(this[_el_0], "keyupBoundary", "");
      this.addShimC(this[_el_0]);
      this[_KeyUpBoundaryDirective_0_5] = new material_yes_no_buttons.KeyUpBoundaryDirective.new(this[_el_0]);
      this[_el_1] = dom_helpers.appendElement(doc, this[_el_0], "header");
      this.addShimE(this[_el_1]);
      this[_el_2] = dom_helpers.appendDiv(doc, this[_el_1]);
      dom_helpers.setAttribute(this[_el_2], "buttonDecorator", "");
      this.updateChildClass(this[_el_2], "header");
      dom_helpers.setAttribute(this[_el_2], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_2]);
      this[_ButtonDirective_2_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_2], null));
      this[_KeyboardOnlyFocusIndicatorDirective_2_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_2], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_2], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)));
      let _anchor_3 = dom_helpers.appendAnchor(this[_el_2]);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C0 || CT.C0);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _el_4 = dom_helpers.appendDiv(doc, this[_el_2]);
      dom_helpers.setAttribute(_el_4, "aria-hidden", "true");
      this.updateChildClass(_el_4, "panel-name");
      this.addShimC(_el_4);
      this.project(_el_4, 0);
      let _el_5 = dom_helpers.appendElement(doc, _el_4, "p");
      this.updateChildClass(HtmlElementL().as(_el_5), "primary-text");
      this.addShimE(_el_5);
      _el_5[$append](this[_textBinding_6].element);
      let _anchor_7 = dom_helpers.appendAnchor(_el_4);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 4, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C1 || CT.C1);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this[_el_8] = dom_helpers.appendDiv(doc, this[_el_2]);
      dom_helpers.setAttribute(this[_el_8], "aria-hidden", "true");
      dom_helpers.setAttribute(this[_el_8], "autoId", "");
      this.updateChildClass(this[_el_8], "panel-description");
      this.addShimC(this[_el_8]);
      this[_AutoIdDirective_8_5] = new id$46template.AutoIdDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoIdDirectiveL(), dart.wrapType(AutoIdDirectiveL()), dart.fn(() => new id.AutoIdDirective.new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)), null), VoidToAutoIdDirectiveL())) : new id.AutoIdDirective.new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)), null));
      this.project(this[_el_8], 1);
      let _anchor_9 = dom_helpers.appendAnchor(this[_el_2]);
      this[_appEl_9] = new view_container.ViewContainer.new(9, 2, this, _anchor_9);
      let _TemplateRef_9_8 = new template_ref.TemplateRef.new(this[_appEl_9], C2 || CT.C2);
      this[_NgIf_9_9] = new ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _anchor_10 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_10] = new view_container.ViewContainer.new(10, 1, this, _anchor_10);
      let _TemplateRef_10_8 = new template_ref.TemplateRef.new(this[_appEl_10], C3 || CT.C3);
      this[_NgIf_10_9] = new ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      this[_el_11] = dom_helpers.appendElement(doc, this[_el_0], "main");
      dom_helpers.setAttribute(this[_el_11], "autoId", "");
      dom_helpers.setAttribute(this[_el_11], "role", "region");
      this.addShimE(this[_el_11]);
      this[_AutoIdDirective_11_5] = new id$46template.AutoIdDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoIdDirectiveL(), dart.wrapType(AutoIdDirectiveL()), dart.fn(() => new id.AutoIdDirective.new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)), null), VoidToAutoIdDirectiveL())) : new id.AutoIdDirective.new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentIndex)), null));
      let _anchor_12 = dom_helpers.appendAnchor(this[_el_11]);
      this[_appEl_12] = new view_container.ViewContainer.new(12, 11, this, _anchor_12);
      let _TemplateRef_12_8 = new template_ref.TemplateRef.new(this[_appEl_12], C4 || CT.C4);
      this[_DeferredContentDirective_12_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DeferredContentDirectiveL(), dart.wrapType(DeferredContentDirectiveL()), dart.fn(() => new deferred_content.DeferredContentDirective.new(this[_appEl_12], _TemplateRef_12_8, DeferredContentAwareL().as(this.parentView.injectorGet(dart.wrapType(DeferredContentAwareL()), this.parentIndex)), this), VoidToDeferredContentDirectiveL())) : new deferred_content.DeferredContentDirective.new(this[_appEl_12], _TemplateRef_12_8, DeferredContentAwareL().as(this.parentView.injectorGet(dart.wrapType(DeferredContentAwareL()), this.parentIndex)), this);
      this[_el_2][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      this[_el_2][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_2_5].instance, 'handleKeyPress')));
      this[_el_2][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'keydown')));
      this[_el_2][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'resetOutline')));
      this[_el_2][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'onMouseInteraction')));
      this[_el_2][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_2_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'handleHeaderClick')));
      _ctx.mainPanel = HtmlElementL().as(this[_el_11]);
      _ctx.headerPanel = HtmlElementL().as(this[_el_1]);
      _ctx.headerContent = this[_el_2];
      _ctx.expandCollapse = this[_ButtonDirective_2_5].instance;
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      parentRenderNode[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'keydown')));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 12) {
        if (token === dart.wrapType(ButtonDirectiveL()) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
          return this[_ButtonDirective_2_5].instance;
        }
        if (token === dart.wrapType(KeyUpBoundaryDirectiveL())) {
          return this[_KeyUpBoundaryDirective_0_5];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0, t0$, t0$0, t0$1, t0$2;
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let local_panelDescription = this[_AutoIdDirective_8_5].instance;
      let local_mainId = this[_AutoIdDirective_11_5].instance;
      let currVal_11 = dart.test(_ctx.disabled) || dart.test(_ctx.headerHidden);
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "disabled || headerHidden", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        this[_ButtonDirective_2_5].instance.disabled = currVal_11;
        this[_expr_11] = currVal_11;
      }
      this[_NgIf_3_9].ngIf = dart.test(_ctx.shouldShowExpandIcon) && dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_7_9].ngIf = _ctx.secondaryText != null;
      this[_NgIf_9_9].ngIf = dart.test(_ctx.shouldShowExpandIcon) && !dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_10_9].ngIf = !dart.test(_ctx.shouldShowExpandIcon) && !dart.test(_ctx.headerHidden);
      if (dart.test(firstCheck)) {
        this[_DeferredContentDirective_12_9].preserveDimensions = true;
        if (_ctx.forceContentWhenClosed != null) {
          this[_DeferredContentDirective_12_9].deferredContentForceContent = _ctx.forceContentWhenClosed;
        }
      }
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_12].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_viewQuery_mainContent_2_isDirty])) {
          _ctx.mainContent = queries.firstOrNull(HtmlElementL(), this[_appEl_12].mapNestedViewsWithSingleResult(HtmlElementL(), _ViewMaterialExpansionPanel5L(), dart.fn(nestedView => nestedView[_el_0], _ViewMaterialExpansionPanel5LToDivElementL())));
          this[_viewQuery_mainContent_2_isDirty] = false;
        }
        if (dart.test(this[_viewQuery_action_4_isDirty])) {
          _ctx.actionContent = queries.firstOrNull(HtmlElementL(), this[_appEl_10].mapNestedViewsWithSingleResult(HtmlElementL(), _ViewMaterialExpansionPanel4L(), dart.fn(nestedView => nestedView[_el_0], _ViewMaterialExpansionPanel4LToDivElementL())));
          this[_viewQuery_action_4_isDirty] = false;
        }
        if (dart.test(this[_viewQuery_contentWrapper_5_isDirty])) {
          _ctx.contentWrapper = queries.firstOrNull(HtmlElementL(), this[_appEl_12].mapNestedViewsWithSingleResult(HtmlElementL(), _ViewMaterialExpansionPanel5L(), dart.fn(nestedView => nestedView[_el_1], _ViewMaterialExpansionPanel5LToDivElementL())));
          this[_viewQuery_contentWrapper_5_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isExpanded", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "open", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.anotherExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "anotherExpanded", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "background", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.headerHidden;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "headerHidden", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_1]), "hidden", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.headerRole;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "headerRole", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "role", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.headerAriaLevel;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "headerAriaLevel", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-level", (t0 = currVal_4, t0 == null ? null : dart.toString(t0)));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = !dart.test(_ctx.isExpanded);
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "!isExpanded", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateClassBinding(this[_el_2], "closed", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.isExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "isExpanded", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-expanded", (t0$ = currVal_6, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.disableHeaderExpansion;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "disableHeaderExpansion", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateClassBinding(this[_el_2], "disable-header-expansion", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.headerMsg;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "headerMsg", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-label", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = local_panelDescription.id;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "panelDescription.id", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-describedby", (t0$0 = currVal_9, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = local_mainId.id;
      if (dart.test(check_binding.checkBinding(this[_expr_10], currVal_10, "mainId.id", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-controls", (t0$1 = currVal_10, t0$1 == null ? null : dart.toString(t0$1)));
        this[_expr_10] = currVal_10;
      }
      this[_ButtonDirective_2_5].detectHostChanges(this, this[_el_2]);
      this[_textBinding_6].updateText(interpolate.interpolateString0(_ctx.name));
      this[_AutoIdDirective_8_5].detectHostChanges(this, this[_el_8]);
      let currVal_12 = !dart.test(_ctx.isExpanded);
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "!isExpanded", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_11]), "hidden", currVal_12);
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = !dart.test(_ctx.isExpanded);
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "!isExpanded", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-hidden", (t0$2 = currVal_13, t0$2 === null ? null : t0$2[$toString]()));
        this[_expr_13] = currVal_13;
      }
      this[_AutoIdDirective_11_5].detectHostChanges(this, this[_el_11]);
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_9].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
      this[_appEl_12].destroyNestedViews();
      this[_DeferredContentDirective_12_9].ngOnDestroy();
    }
    [_handleEvent_0]($36event) {
      this[_ButtonDirective_2_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_2_6].onMouseInteraction();
    }
    static _debugClearComponentStyles() {
      material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles;
      if (styles == null) {
        material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_expansionpanel$46template.styles$MaterialExpansionPanel, material_expansionpanel$46template.ViewMaterialExpansionPanel0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C5 || CT.C5);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_expansionpanel$46template.ViewMaterialExpansionPanel0.new = function(parentView, parentIndex) {
    this[_viewQuery_action_4_isDirty] = true;
    this[_viewQuery_mainContent_2_isDirty] = true;
    this[_viewQuery_contentWrapper_5_isDirty] = true;
    this[_textBinding_6] = new text_binding.TextBinding.new();
    this[_KeyUpBoundaryDirective_0_5] = null;
    this[_ButtonDirective_2_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_2_6] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_AutoIdDirective_8_5] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_AutoIdDirective_11_5] = null;
    this[_appEl_12] = null;
    this[_DeferredContentDirective_12_9] = null;
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
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_8] = null;
    this[_el_11] = null;
    material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-expansionpanel"));
  }).prototype = material_expansionpanel$46template.ViewMaterialExpansionPanel0.prototype;
  dart.addTypeTests(material_expansionpanel$46template.ViewMaterialExpansionPanel0);
  dart.addTypeCaches(material_expansionpanel$46template.ViewMaterialExpansionPanel0);
  dart.setMethodSignature(material_expansionpanel$46template.ViewMaterialExpansionPanel0, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_expansionpanel$46template.ViewMaterialExpansionPanel0, L0);
  dart.setFieldSignature(material_expansionpanel$46template.ViewMaterialExpansionPanel0, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__),
    [_viewQuery_action_4_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_viewQuery_mainContent_2_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_viewQuery_contentWrapper_5_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_textBinding_6]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_KeyUpBoundaryDirective_0_5]: dart.fieldType(dart.legacy(material_yes_no_buttons.KeyUpBoundaryDirective)),
    [_ButtonDirective_2_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_KeyboardOnlyFocusIndicatorDirective_2_6]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_AutoIdDirective_8_5]: dart.fieldType(dart.legacy(id$46template.AutoIdDirectiveNgCd)),
    [_appEl_9]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_9_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_10]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_10_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_AutoIdDirective_11_5]: dart.fieldType(dart.legacy(id$46template.AutoIdDirectiveNgCd)),
    [_appEl_12]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_DeferredContentDirective_12_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
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
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element)),
    [_el_2]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_8]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_11]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(material_expansionpanel$46template.ViewMaterialExpansionPanel0, {
    /*material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_expansionpanel$46template, "_compView_0");
  var _MaterialIconComponent_0_5 = dart.privateName(material_expansionpanel$46template, "_MaterialIconComponent_0_5");
  material_expansionpanel$46template._ViewMaterialExpansionPanel1 = class _ViewMaterialExpansionPanel1 extends embedded_view.EmbeddedView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "expand-button expand-on-left");
      dom_helpers.setAttribute(this[_el_0], "role", "none");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'handleExpandIconClick')));
      this.initRootNode(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_1 = _ctx.expandIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "expandIcon", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        this[_MaterialIconComponent_0_5].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.shouldFlipExpandIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "shouldFlipExpandIcon", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "expand-more", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel1.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel1);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel1);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel1, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel1, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel1, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _textBinding_1 = dart.privateName(material_expansionpanel$46template, "_textBinding_1");
  material_expansionpanel$46template._ViewMaterialExpansionPanel2 = class _ViewMaterialExpansionPanel2 extends embedded_view.EmbeddedView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(HtmlElementL().as(_el_0), "secondary-text");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.secondaryText));
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel2.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel2);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel2);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel2, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel2, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel2, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  material_expansionpanel$46template._ViewMaterialExpansionPanel3 = class _ViewMaterialExpansionPanel3 extends embedded_view.EmbeddedView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "expand-button");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0]));
      this[_compView_0].create(this[_MaterialIconComponent_0_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'handleExpandIconClick')));
      this.initRootNode(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_1 = _ctx.expandIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "expandIcon", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        this[_MaterialIconComponent_0_5].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.shouldFlipExpandIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "shouldFlipExpandIcon", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "expand-more", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel3.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel3.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel3);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel3);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel3, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel3, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel3, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_expansionpanel$46template._ViewMaterialExpansionPanel4 = class _ViewMaterialExpansionPanel4 extends embedded_view.EmbeddedView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "action");
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 2);
      this.initRootNode(this[_el_0]);
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView)[_viewQuery_action_4_isDirty] = true;
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel4.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel4);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel4);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel4, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel4, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel4, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _appEl_2 = dart.privateName(material_expansionpanel$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_2_9");
  var _appEl_4 = dart.privateName(material_expansionpanel$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_4_9");
  var _appEl_5 = dart.privateName(material_expansionpanel$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_5_9");
  var _appEl_6 = dart.privateName(material_expansionpanel$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_6_9");
  var C6;
  var C7;
  var C8;
  var C9;
  material_expansionpanel$46template._ViewMaterialExpansionPanel5 = class _ViewMaterialExpansionPanel5 extends embedded_view.EmbeddedView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.addShimC(this[_el_0]);
      this[_el_1] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "content-wrapper");
      this.addShimC(this[_el_1]);
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C6 || CT.C6);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = dom_helpers.appendDiv(doc, this[_el_1]);
      this.updateChildClass(_el_3, "content");
      this.addShimC(_el_3);
      this.project(_el_3, 3);
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 1, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C7 || CT.C7);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C8 || CT.C8);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C9 || CT.C9);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this.initRootNode(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9].ngIf = dart.test(_ctx.shouldShowHiddenHeaderExpandIcon) && dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_4_9].ngIf = dart.test(_ctx.shouldShowHiddenHeaderExpandIcon) && !dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_5_9].ngIf = !dart.test(_ctx.showSaveCancel);
      this[_NgIf_6_9].ngIf = _ctx.showSaveCancel;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.hideExpandedHeader;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "hideExpandedHeader", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateClassBinding(this[_el_1], "hidden-header", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView)[_viewQuery_mainContent_2_isDirty] = true;
      optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView)[_viewQuery_contentWrapper_5_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel5.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel5.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel5);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel5);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel5, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel5, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel5, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _ButtonDirective_0_5 = dart.privateName(material_expansionpanel$46template, "_ButtonDirective_0_5");
  var _MaterialIconComponent_0_6 = dart.privateName(material_expansionpanel$46template, "_MaterialIconComponent_0_6");
  var _KeyboardOnlyFocusIndicatorDirective_0_7 = dart.privateName(material_expansionpanel$46template, "_KeyboardOnlyFocusIndicatorDirective_0_7");
  material_expansionpanel$46template._ViewMaterialExpansionPanel6 = class _ViewMaterialExpansionPanel6 extends embedded_view.EmbeddedView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClassNonHtml(this[_el_0], "expand-button expand-on-left");
      dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentIndex)));
      this[_compView_0].create(this[_MaterialIconComponent_0_6]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'keydown')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onMouseInteraction')));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'collapse')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0, t0$;
      let _ctx = this.ctx;
      let changed = false;
      let local_mainId = optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView.parentView)[_AutoIdDirective_11_5].instance;
      changed = false;
      let currVal_3 = _ctx.expandIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "expandIcon", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        this[_MaterialIconComponent_0_6].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isExpanded", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-expanded", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = local_mainId.id;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "mainId.id", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-controls", (t0$ = currVal_1, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.closePanelMsg;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "closePanelMsg", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handleEvent_0]($36event) {
      this[_ButtonDirective_0_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7].onMouseInteraction();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel6.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_0] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel6.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel6);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel6);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel6, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel6, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel6, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_MaterialIconComponent_0_6]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_KeyboardOnlyFocusIndicatorDirective_0_7]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_expansionpanel$46template._ViewMaterialExpansionPanel7 = class _ViewMaterialExpansionPanel7 extends embedded_view.EmbeddedView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClassNonHtml(this[_el_0], "expand-button");
      dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentIndex)));
      this[_compView_0].create(this[_MaterialIconComponent_0_6]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'keydown')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onMouseInteraction')));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'collapse')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0;
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_2 = _ctx.expandIcon;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "expandIcon", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        this[_MaterialIconComponent_0_6].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isExpanded", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-expanded", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.closePanelMsg;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "closePanelMsg", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handleEvent_0]($36event) {
      this[_ButtonDirective_0_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7].onMouseInteraction();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel7.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel7.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel7);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel7);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel7, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel7, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel7, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_MaterialIconComponent_0_6]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_KeyboardOnlyFocusIndicatorDirective_0_7]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_expansionpanel$46template._ViewMaterialExpansionPanel8 = class _ViewMaterialExpansionPanel8 extends embedded_view.EmbeddedView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "toolbelt");
      this.addShimC(HtmlElementL().as(_el_0));
      this.project(_el_0, 4);
      this.initRootNode(_el_0);
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel8.new = function(parentView, parentIndex) {
    material_expansionpanel$46template._ViewMaterialExpansionPanel8.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel8.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel8);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel8);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel8, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel8.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel8, L0);
  var _MaterialYesNoButtonsComponent_0_5 = dart.privateName(material_expansionpanel$46template, "_MaterialYesNoButtonsComponent_0_5");
  var _EnterAcceptsDirective_0_6 = dart.privateName(material_expansionpanel$46template, "_EnterAcceptsDirective_0_6");
  material_expansionpanel$46template._ViewMaterialExpansionPanel9 = class _ViewMaterialExpansionPanel9 extends embedded_view.EmbeddedView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "action-buttons");
      dom_helpers.setAttribute(_el_0, "reverse", "");
      this.addShimC(_el_0);
      this[_MaterialYesNoButtonsComponent_0_5] = new material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_EnterAcceptsDirective_0_6] = new material_yes_no_buttons.EnterAcceptsDirective.new(this[_MaterialYesNoButtonsComponent_0_5], _el_0, optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView.parentView)[_KeyUpBoundaryDirective_0_5]);
      this[_compView_0].create(this[_MaterialYesNoButtonsComponent_0_5]);
      let subscription_0 = this[_MaterialYesNoButtonsComponent_0_5].yes.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'doSave')));
      let subscription_1 = this[_MaterialYesNoButtonsComponent_0_5].no.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'doCancel')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialYesNoButtonsComponent_0_5];
        }
        if (token === dart.wrapType(EnterAcceptsDirectiveL())) {
          return this[_EnterAcceptsDirective_0_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.saveText;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "saveText", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        this[_MaterialYesNoButtonsComponent_0_5].yesText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.cancelText;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "cancelText", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        this[_MaterialYesNoButtonsComponent_0_5].noText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.saveDisabled;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "saveDisabled", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        this[_MaterialYesNoButtonsComponent_0_5].yesDisabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.cancelDisplayed;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "cancelDisplayed", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        this[_MaterialYesNoButtonsComponent_0_5].noDisplayed = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeSaveCancelAction;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "activeSaveCancelAction", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        this[_MaterialYesNoButtonsComponent_0_5].pending = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_5 = _ctx.enterAccepts;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "enterAccepts", "package:angular_components/material_expansionpanel/material_expansionpanel.html"))) {
        this[_EnterAcceptsDirective_0_6].enterAccepts = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_EnterAcceptsDirective_0_6].ngOnDestroy();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel9.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialYesNoButtonsComponent_0_5] = null;
    this[_EnterAcceptsDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel9.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel9);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel9);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel9, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel9, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel9, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0)),
    [_MaterialYesNoButtonsComponent_0_5]: dart.fieldType(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)),
    [_EnterAcceptsDirective_0_6]: dart.fieldType(dart.legacy(material_yes_no_buttons.EnterAcceptsDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic)
  }));
  material_expansionpanel$46template._ViewMaterialExpansionPanelHost0 = class _ViewMaterialExpansionPanelHost0 extends host_view.HostView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      this.componentView = new material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialExpansionPanelL(), dart.wrapType(MaterialExpansionPanelL()), dart.fn(() => new material_expansionpanel.MaterialExpansionPanel.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), this.componentView, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), null, null), VoidToMaterialExpansionPanelL())) : new material_expansionpanel.MaterialExpansionPanel.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.parentIndex)), this.componentView, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), null, null);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(MaterialExpansionPanelL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(FocusableItemL()) || token === dart.wrapType(FocusableL())) && 0 === nodeIndex) {
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
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.new = function() {
    material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__.new.call(this);
    ;
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, L0);
  var C10;
  material_expansionpanel$46template.createMaterialExpansionPanelFactory = function createMaterialExpansionPanelFactory() {
    return new (ComponentFactoryOfMaterialExpansionPanelL()).new("material-expansionpanel", C10 || CT.C10);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel1 = function viewFactory_MaterialExpansionPanel1(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel1.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel2 = function viewFactory_MaterialExpansionPanel2(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel2.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel3 = function viewFactory_MaterialExpansionPanel3(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel3.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel4 = function viewFactory_MaterialExpansionPanel4(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel4.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel5 = function viewFactory_MaterialExpansionPanel5(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel5.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel6 = function viewFactory_MaterialExpansionPanel6(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel6.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel7 = function viewFactory_MaterialExpansionPanel7(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel7.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel8 = function viewFactory_MaterialExpansionPanel8(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel8.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel9 = function viewFactory_MaterialExpansionPanel9(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel9.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanelHost0 = function viewFactory_MaterialExpansionPanelHost0() {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.new();
  };
  material_expansionpanel$46template.initReflector = function initReflector() {
    if (dart.test(material_expansionpanel$46template._visited)) {
      return;
    }
    material_expansionpanel$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialExpansionPanelL()), material_expansionpanel$46template.createMaterialExpansionPanelFactory());
    angular$46template.initReflector();
    meta$46template.initReflector();
    button_decorator$46template.initReflector();
    deferred_content$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    focus$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    has_disabled$46template.initReflector();
    material_icon$46template.initReflector();
    material_yes_no_buttons$46template.initReflector();
    async_action$46template.initReflector();
    observable$46template.initReflector();
    id$46template.initReflector();
    dom_service$46template.initReflector();
    disposable_callback$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_expansionpanel$46template, {
    get MaterialExpansionPanelNgFactory() {
      return material_expansionpanel$46template._MaterialExpansionPanelNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C11;
  var C12;
  dart.defineLazy(material_expansionpanel$46template, {
    /*material_expansionpanel$46template.styles$MaterialExpansionPanel*/get styles$MaterialExpansionPanel() {
      return [material_expansionpanel$46scss$46css$46shim.styles];
    },
    /*material_expansionpanel$46template._MaterialExpansionPanelNgFactory*/get _MaterialExpansionPanelNgFactory() {
      return C11 || CT.C11;
    },
    /*material_expansionpanel$46template.styles$MaterialExpansionPanelHost*/get styles$MaterialExpansionPanelHost() {
      return C12 || CT.C12;
    },
    /*material_expansionpanel$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel.template", {
    "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart": material_expansionpanel$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel.template.dart"],"names":[],"mappings":"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","file":"material_expansionpanel.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel$46template: material_expansionpanel$46template
  };
}));

//# sourceMappingURL=material_expansionpanel.template.unsound.ddc.js.map
