define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/material_spinner/material_spinner.template', 'packages/angular_components/material_spinner/material_spinner', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/focus/focus', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/theme/dark_theme', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/src/runtime/interpolate', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.scss.css.shim'], (function load__packages__angular_components__material_yes_no_buttons__material_yes_no_buttons_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__queries, packages__angular_components__material_button__material_button, packages__angular_components__material_yes_no_buttons__material_yes_no_buttons, packages__angular_components__material_spinner__material_spinner$46template, packages__angular_components__material_spinner__material_spinner, packages__angular__src__runtime__text_binding, packages__angular_components__material_button__material_button$46template, packages__angular_components__focus__focus, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__components__modal__modal, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__theme__dark_theme, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__button_decorator__button_decorator, packages__angular_components__interfaces__has_disabled, packages__angular__src__runtime__interpolate, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
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
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const view = packages__angular__src__bootstrap__modules.src__core__linker__views__view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const material_yes_no_buttons = packages__angular_components__material_yes_no_buttons__material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons;
  const material_spinner$46template = packages__angular_components__material_spinner__material_spinner$46template.material_spinner__material_spinner$46template;
  const material_spinner = packages__angular_components__material_spinner__material_spinner.material_spinner__material_spinner;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const material_yes_no_buttons$46scss$46css$46shim = packages__angular_components__material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim.material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim;
  var material_yes_no_buttons$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var _ViewMaterialYesNoButtonsComponent2L = () => (_ViewMaterialYesNoButtonsComponent2L = dart.constFn(dart.legacy(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2)))();
  var _ViewMaterialYesNoButtonsComponent2LToMaterialButtonComponentL = () => (_ViewMaterialYesNoButtonsComponent2LToMaterialButtonComponentL = dart.constFn(dart.fnType(MaterialButtonComponentL(), [_ViewMaterialYesNoButtonsComponent2L()])))();
  var _ViewMaterialYesNoButtonsComponent3L = () => (_ViewMaterialYesNoButtonsComponent3L = dart.constFn(dart.legacy(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3)))();
  var _ViewMaterialYesNoButtonsComponent3LToMaterialButtonComponentL = () => (_ViewMaterialYesNoButtonsComponent3LToMaterialButtonComponentL = dart.constFn(dart.fnType(MaterialButtonComponentL(), [_ViewMaterialYesNoButtonsComponent3L()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var AutoFocusDirectiveL = () => (AutoFocusDirectiveL = dart.constFn(dart.legacy(focus.AutoFocusDirective)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var VoidToAutoFocusDirectiveL = () => (VoidToAutoFocusDirectiveL = dart.constFn(dart.fnType(AutoFocusDirectiveL(), [])))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ViewMaterialYesNoButtonsComponent0L = () => (ViewMaterialYesNoButtonsComponent0L = dart.constFn(dart.legacy(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0)))();
  var MaterialYesNoButtonsComponentL = () => (MaterialYesNoButtonsComponentL = dart.constFn(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)))();
  var ComponentFactoryOfMaterialYesNoButtonsComponentL = () => (ComponentFactoryOfMaterialYesNoButtonsComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialYesNoButtonsComponentL())))();
  var HostViewOfMaterialYesNoButtonsComponentL = () => (HostViewOfMaterialYesNoButtonsComponentL = dart.constFn(host_view.HostView$(MaterialYesNoButtonsComponentL())))();
  var HostViewLOfMaterialYesNoButtonsComponentL = () => (HostViewLOfMaterialYesNoButtonsComponentL = dart.constFn(dart.legacy(HostViewOfMaterialYesNoButtonsComponentL())))();
  var VoidToHostViewLOfMaterialYesNoButtonsComponentL = () => (VoidToHostViewLOfMaterialYesNoButtonsComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialYesNoButtonsComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C5() {
      return C5 = dart.fn(material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponentHost0, VoidToHostViewLOfMaterialYesNoButtonsComponentL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ComponentFactoryOfMaterialYesNoButtonsComponentL().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "material-yes-no-buttons"
      });
    },
    get C7() {
      return C7 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _viewQuery_yesButton_0_isDirty = dart.privateName(material_yes_no_buttons$46template, "_viewQuery_yesButton_0_isDirty");
  var _viewQuery_noButton_1_isDirty = dart.privateName(material_yes_no_buttons$46template, "_viewQuery_noButton_1_isDirty");
  var _appEl_0 = dart.privateName(material_yes_no_buttons$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_yes_no_buttons$46template, "_NgIf_0_9");
  var _appEl_1 = dart.privateName(material_yes_no_buttons$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_yes_no_buttons$46template, "_NgIf_1_9");
  var _appEl_2 = dart.privateName(material_yes_no_buttons$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_yes_no_buttons$46template, "_NgIf_2_9");
  var C0;
  var C1;
  var C2;
  var _MaterialButtonComponent_0_7 = dart.privateName(material_yes_no_buttons$46template, "_MaterialButtonComponent_0_7");
  var _compView_0 = dart.privateName(material_yes_no_buttons$46template, "_compView_0");
  var C3;
  material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0 = class ViewMaterialYesNoButtonsComponent0 extends component_view.ComponentView$(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_yes_no_buttons/material_yes_no_buttons.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C1 || CT.C1);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C2 || CT.C2);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.pending;
      this[_NgIf_1_9].ngIf = !dart.test(_ctx.pending) && dart.test(_ctx.yesDisplayed);
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.pending) && dart.test(_ctx.noDisplayed);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(this[_viewQuery_yesButton_0_isDirty])) {
          _ctx.yesButton = queries.firstOrNull(MaterialButtonComponentL(), this[_appEl_1].mapNestedViewsWithSingleResult(MaterialButtonComponentL(), _ViewMaterialYesNoButtonsComponent2L(), dart.fn(nestedView => {
            view.View.queryChangeDetectorRefs._set(nestedView[_MaterialButtonComponent_0_7], nestedView[_compView_0]);
            return nestedView[_MaterialButtonComponent_0_7];
          }, _ViewMaterialYesNoButtonsComponent2LToMaterialButtonComponentL())));
          this[_viewQuery_yesButton_0_isDirty] = false;
        }
        if (dart.test(this[_viewQuery_noButton_1_isDirty])) {
          _ctx.noButton = queries.firstOrNull(MaterialButtonComponentL(), this[_appEl_2].mapNestedViewsWithSingleResult(MaterialButtonComponentL(), _ViewMaterialYesNoButtonsComponent3L(), dart.fn(nestedView => {
            view.View.queryChangeDetectorRefs._set(nestedView[_MaterialButtonComponent_0_7], nestedView[_compView_0]);
            return nestedView[_MaterialButtonComponent_0_7];
          }, _ViewMaterialYesNoButtonsComponent3LToMaterialButtonComponentL())));
          this[_viewQuery_noButton_1_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles;
      if (styles == null) {
        material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponent, material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C3 || CT.C3);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new = function(parentView, parentIndex) {
    this[_viewQuery_yesButton_0_isDirty] = true;
    this[_viewQuery_noButton_1_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-yes-no-buttons"));
  }).prototype = material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.prototype;
  dart.addTypeTests(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0);
  dart.addTypeCaches(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0);
  dart.setMethodSignature(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, L0);
  dart.setFieldSignature(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, () => ({
    __proto__: dart.getFields(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.__proto__),
    [_viewQuery_yesButton_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_viewQuery_noButton_1_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  dart.defineLazy(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, {
    /*material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_1 = dart.privateName(material_yes_no_buttons$46template, "_compView_1");
  var _MaterialSpinnerComponent_1_5 = dart.privateName(material_yes_no_buttons$46template, "_MaterialSpinnerComponent_1_5");
  material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1 = class _ViewMaterialYesNoButtonsComponent1 extends embedded_view.EmbeddedView$(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "btn spinner");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new material_spinner$46template.ViewMaterialSpinnerComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_MaterialSpinnerComponent_1_5] = new material_spinner.MaterialSpinnerComponent.new();
      this[_compView_1].create(this[_MaterialSpinnerComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
  };
  (material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialSpinnerComponent_1_5] = null;
    material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.prototype;
  dart.addTypeTests(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1);
  dart.addTypeCaches(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1);
  dart.setMethodSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1, L0);
  dart.setFieldSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1, () => ({
    __proto__: dart.getFields(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_spinner$46template.ViewMaterialSpinnerComponent0)),
    [_MaterialSpinnerComponent_1_5]: dart.fieldType(dart.legacy(material_spinner.MaterialSpinnerComponent))
  }));
  var _textBinding_1 = dart.privateName(material_yes_no_buttons$46template, "_textBinding_1");
  var _AutoFocusDirective_0_5 = dart.privateName(material_yes_no_buttons$46template, "_AutoFocusDirective_0_5");
  var _AcxDarkTheme_0_6 = dart.privateName(material_yes_no_buttons$46template, "_AcxDarkTheme_0_6");
  var _expr_0 = dart.privateName(material_yes_no_buttons$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_yes_no_buttons$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_yes_no_buttons$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_yes_no_buttons$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_yes_no_buttons$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_yes_no_buttons$46template, "_expr_5");
  var _el_0 = dart.privateName(material_yes_no_buttons$46template, "_el_0");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C4;
  material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2 = class _ViewMaterialYesNoButtonsComponent2 extends embedded_view.EmbeddedView$(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "btn btn-yes");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_AutoFocusDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentIndex)), PopupRefL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentIndex))), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentIndex)), PopupRefL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentIndex)));
      this[_AcxDarkTheme_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C4 || CT.C4, this.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C4 || CT.C4, this.parentIndex)));
      this[_MaterialButtonComponent_0_7] = new material_button.MaterialButtonComponent.new(HtmlElementL().as(this[_el_0]), AcxDarkThemeL().as(this[_AcxDarkTheme_0_6]), this[_compView_0], null);
      this[_compView_0].createAndProject(this[_MaterialButtonComponent_0_7], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialButtonComponent_0_7].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'onYes')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_6];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_7];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let currVal_3 = _ctx.yesAutoFocus;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "yesAutoFocus", "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html"))) {
        this[_AutoFocusDirective_0_5].autoFocus = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_AutoFocusDirective_0_5].ngOnInit();
      }
      changed = false;
      let currVal_4 = dart.test(_ctx.yesDisabled) || dart.test(_ctx.disabled);
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "yesDisabled || disabled", "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html"))) {
        this[_MaterialButtonComponent_0_7].disabled = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = dart.test(_ctx.yesRaised) || dart.test(_ctx.raised);
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "yesRaised || raised", "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html"))) {
        this[_MaterialButtonComponent_0_7].raised = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.yesHighlighted;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "yesHighlighted", "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html"))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "highlighted", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.yesAriaLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "yesAriaLabel", "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.yesAriaDescribedBy;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "yesAriaDescribedBy", "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-describedby", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.yesText));
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialYesNoButtonsComponent0L(), this.parentView)[_viewQuery_yesButton_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_AutoFocusDirective_0_5].ngOnDestroy();
    }
  };
  (material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_AutoFocusDirective_0_5] = null;
    this[_AcxDarkTheme_0_6] = null;
    this[_MaterialButtonComponent_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_el_0] = null;
    material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.prototype;
  dart.addTypeTests(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2);
  dart.addTypeCaches(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2);
  dart.setMethodSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, L0);
  dart.setFieldSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, () => ({
    __proto__: dart.getFields(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AutoFocusDirective_0_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_AcxDarkTheme_0_6]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_7]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3 = class _ViewMaterialYesNoButtonsComponent3 extends embedded_view.EmbeddedView$(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(this[_el_0], "btn btn-no");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_AutoFocusDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentIndex)), PopupRefL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentIndex))), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentIndex)), PopupRefL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentIndex)));
      this[_AcxDarkTheme_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C4 || CT.C4, this.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C4 || CT.C4, this.parentIndex)));
      this[_MaterialButtonComponent_0_7] = new material_button.MaterialButtonComponent.new(HtmlElementL().as(this[_el_0]), AcxDarkThemeL().as(this[_AcxDarkTheme_0_6]), this[_compView_0], null);
      this[_compView_0].createAndProject(this[_MaterialButtonComponent_0_7], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialButtonComponent_0_7].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'onNo')));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_6];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_7];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      let currVal_2 = _ctx.noAutoFocus;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "noAutoFocus", "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html"))) {
        this[_AutoFocusDirective_0_5].autoFocus = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_AutoFocusDirective_0_5].ngOnInit();
      }
      changed = false;
      let currVal_3 = dart.test(_ctx.noDisabled) || dart.test(_ctx.disabled);
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "noDisabled || disabled", "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html"))) {
        this[_MaterialButtonComponent_0_7].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.raised;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "raised", "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html"))) {
        this[_MaterialButtonComponent_0_7].raised = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.noAriaLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "noAriaLabel", "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.noAriaDescribedBy;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "noAriaDescribedBy", "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html"))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-describedby", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.noText));
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialYesNoButtonsComponent0L(), this.parentView)[_viewQuery_noButton_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_AutoFocusDirective_0_5].ngOnDestroy();
    }
  };
  (material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_AutoFocusDirective_0_5] = null;
    this[_AcxDarkTheme_0_6] = null;
    this[_MaterialButtonComponent_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.prototype;
  dart.addTypeTests(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3);
  dart.addTypeCaches(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3);
  dart.setMethodSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, L0);
  dart.setFieldSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, () => ({
    __proto__: dart.getFields(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AutoFocusDirective_0_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_AcxDarkTheme_0_6]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_7]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0 = class _ViewMaterialYesNoButtonsComponentHost0 extends host_view.HostView$(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)) {
    build() {
      this.componentView = new material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
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
  };
  (material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.new = function() {
    material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.prototype;
  dart.addTypeTests(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0);
  dart.addTypeCaches(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0);
  dart.setMethodSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0, L0);
  var C5;
  material_yes_no_buttons$46template.createMaterialYesNoButtonsComponentFactory = function createMaterialYesNoButtonsComponentFactory() {
    return new (ComponentFactoryOfMaterialYesNoButtonsComponentL()).new("material-yes-no-buttons", C5 || CT.C5);
  };
  material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent1 = function viewFactory_MaterialYesNoButtonsComponent1(parentView, parentIndex) {
    return new material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.new(parentView, parentIndex);
  };
  material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent2 = function viewFactory_MaterialYesNoButtonsComponent2(parentView, parentIndex) {
    return new material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.new(parentView, parentIndex);
  };
  material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent3 = function viewFactory_MaterialYesNoButtonsComponent3(parentView, parentIndex) {
    return new material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.new(parentView, parentIndex);
  };
  material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponentHost0 = function viewFactory_MaterialYesNoButtonsComponentHost0() {
    return new material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.new();
  };
  material_yes_no_buttons$46template.initReflector = function initReflector() {
    if (dart.test(material_yes_no_buttons$46template._visited)) {
      return;
    }
    material_yes_no_buttons$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialYesNoButtonsComponentL()), material_yes_no_buttons$46template.createMaterialYesNoButtonsComponentFactory());
    angular$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    material_button$46template.initReflector();
    material_spinner$46template.initReflector();
  };
  dart.copyProperties(material_yes_no_buttons$46template, {
    get MaterialYesNoButtonsComponentNgFactory() {
      return material_yes_no_buttons$46template._MaterialYesNoButtonsComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C6;
  var C7;
  dart.defineLazy(material_yes_no_buttons$46template, {
    /*material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponent*/get styles$MaterialYesNoButtonsComponent() {
      return [material_yes_no_buttons$46scss$46css$46shim.styles];
    },
    /*material_yes_no_buttons$46template._MaterialYesNoButtonsComponentNgFactory*/get _MaterialYesNoButtonsComponentNgFactory() {
      return C6 || CT.C6;
    },
    /*material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponentHost*/get styles$MaterialYesNoButtonsComponentHost() {
      return C7 || CT.C7;
    },
    /*material_yes_no_buttons$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template", {
    "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart": material_yes_no_buttons$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_yes_no_buttons.template.dart"],"names":[],"mappings":"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","file":"material_yes_no_buttons.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_yes_no_buttons__material_yes_no_buttons$46template: material_yes_no_buttons$46template
  };
}));

//# sourceMappingURL=material_yes_no_buttons.template.unsound.ddc.js.map
