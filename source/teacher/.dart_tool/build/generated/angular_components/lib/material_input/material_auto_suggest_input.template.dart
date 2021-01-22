// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_auto_suggest_input.dart';
export 'material_auto_suggest_input.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_input.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/meta.template.dart' as _ref2;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref3;
import 'package:angular_components/content/deferred_content.template.dart' as _ref4;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref5;
import 'package:angular_components/focus/focus.template.dart' as _ref6;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref7;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref8;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref9;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref10;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref11;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref12;
import 'package:angular_components/material_input/input_wrapper.template.dart' as _ref13;
import 'package:angular_components/material_list/material_list.template.dart' as _ref14;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref15;
import 'package:angular_components/material_select/material_select_base.template.dart' as _ref16;
import 'package:angular_components/material_select/material_select_dropdown_item.template.dart' as _ref17;
import 'package:angular_components/material_spinner/material_spinner.template.dart' as _ref18;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref19;
import 'package:angular_components/mixins/highlight_assistant_mixin.template.dart' as _ref20;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref21;
import 'package:angular_components/mixins/selection_input_adapter.template.dart' as _ref22;
import 'package:angular_components/model/a11y/active_item.template.dart' as _ref23;
import 'package:angular_components/model/a11y/active_item_directive.template.dart' as _ref24;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref25;
import 'package:angular_components/model/selection/select.template.dart' as _ref26;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref27;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref28;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref29;
import 'package:angular_components/model/selection/string_selection_options.template.dart' as _ref30;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref31;
import 'package:angular_components/model/ui/highlight_provider.template.dart' as _ref32;
import 'package:angular_components/model/ui/template_support.template.dart' as _ref33;
import 'package:angular_components/stop_propagation/stop_propagation.template.dart' as _ref34;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref35;
import 'package:angular_components/utils/async/async.template.dart' as _ref36;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref37;
import 'package:angular_forms/angular_forms.template.dart' as _ref38;
import 'package:angular_components/material_input/material_auto_suggest_input.scss.css.shim.dart' as import0;
import 'package:angular_components/material_input/material_input_wrapper.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/views/component_view.dart' as import2;
import 'material_auto_suggest_input.dart' as import3;
import 'material_input.template.dart' as import4;
import 'deferred_validator.dart' as import5;
import 'package:angular_forms/src/directives/ng_model.dart' as import6;
import 'material_input.dart' as import7;
import 'material_input_default_value_accessor.dart' as import8;
import '../src/laminate/popup/popup_source_directive.dart' as import9;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../material_popup/material_popup.template.dart' as import12;
import '../material_popup/material_popup.dart' as import13;
import '../focus/keyboard_only_focus_indicator.dart' as import14;
import '../content/deferred_content.dart' as import15;
import 'dart:html' as import16;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import17;
import 'package:angular/src/core/linker/views/view.dart' as import18;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import20;
import 'package:angular/src/runtime/dom_helpers.dart' as import21;
import 'package:angular/src/di/errors.dart' as import22;
import '../src/laminate/popup/dom_popup_source.dart' as import23;
import 'package:angular/src/core/linker/template_ref.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import25;
import 'package:angular/src/core/zone/ng_zone.dart' as import26;
import '../src/laminate/overlay/overlay_service.dart' as import27;
import '../utils/browser/dom_service/dom_service.dart' as import28;
import '../laminate/overlay/zindexer.dart' as import29;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import30;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import32;
import '../src/laminate/popup/popup_size_provider.dart' as import33;
import 'package:angular/src/core/linker/element_ref.dart';
import 'package:angular_forms/src/directives/ng_control.dart' as import35;
import 'base_material_input.dart' as import36;
import '../utils/angular/reference/reference.dart' as import37;
import '../focus/focus_interface.dart' as import38;
import '../interfaces/has_disabled.dart' as import39;
import '../content/deferred_content_aware.dart' as import40;
import '../mixins/material_dropdown_base.dart' as import41;
import '../src/laminate/popup/popup_ref.dart' as import42;
import 'package:angular/src/runtime/interpolate.dart' as import43;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import45;
import '../material_icon/material_icon.template.dart' as import46;
import '../button_decorator/button_decorator.template.dart' as import47;
import '../material_icon/material_icon.dart' as import48;
import '../src/material_tooltip/tooltip.dart' as import49;
import '../stop_propagation/stop_propagation.dart' as import50;
import 'package:angular/src/core/linker/views/render_view.dart' as import51;
import '../src/material_tooltip/tooltip_controller.dart' as import52;
import '../material_tooltip/module.dart' as import53;
import '../utils/disposer/disposer.dart' as import54;
import '../button_decorator/button_decorator.dart' as import55;
import '../focus/focus_trap.template.dart' as import56;
import '../focus/focus_trap.dart' as import57;
import '../material_spinner/material_spinner.template.dart' as import58;
import '../material_spinner/material_spinner.dart' as import59;
import 'package:angular/src/runtime/text_binding.dart' as import60;
import '../material_list/material_list.template.dart' as import61;
import '../material_list/material_list.dart' as import62;
import 'package:angular/src/common/directives/ng_for.dart' as import63;
import '../model/selection/selection_options.dart' as import64;
import '../dynamic_component/dynamic_component.template.dart' as import65;
import '../dynamic_component/dynamic_component.dart' as import66;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import67;
import '../material_select/material_select_dropdown_item.template.dart' as import68;
import '../material_select/material_select_dropdown_item.dart' as import69;
import '../material_select/activation_handler.dart' as import70;
import '../utils/id_generator/id_generator.dart' as import71;
import '../model/selection/selection_container.dart' as import72;
import '../model/ui/has_renderer.dart' as import73;
import '../model/a11y/active_item_directive.template.dart' as import74;
import '../model/a11y/active_item_directive.dart' as import75;
import '../laminate/components/modal/modal.dart' as import76;
import 'package:angular/src/core/linker/views/host_view.dart' as import77;
import '../model/ui/highlight_provider.dart' as import78;
import '../model/ui/has_factory.dart' as import79;

final List<dynamic> styles$MaterialAutoSuggestInputComponent = [import0.styles, import1.styles];

class ViewMaterialAutoSuggestInputComponent0<T> extends import2.ComponentView<import3.MaterialAutoSuggestInputComponent<T>> {
  import4.ViewMaterialInputComponent0 _compView_0;
  import5.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> _NgValidators_0_6;
  import6.NgModel _NgModel_0_7;
  import7.MaterialInputComponent _MaterialInputComponent_0_9;
  import8.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_11;
  import9.PopupSourceDirective _PopupSourceDirective_0_14;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import12.ViewMaterialPopupComponent0 _compView_3;
  ViewContainer _appEl_3;
  import13.MaterialPopupComponent _MaterialPopupComponent_3_8;
  dynamic __PopupRef_3_11;
  dynamic __PopupHierarchy_3_12;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_4_5;
  ViewContainer _appEl_5;
  import15.CachingDeferredContentDirective _CachingDeferredContentDirective_5_9;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_6_5;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  var _expr_16;
  var _expr_17;
  var _expr_19;
  var _expr_20;
  var _expr_22;
  var _expr_24;
  var _expr_25;
  var _expr_26;
  var _expr_27;
  var _expr_29;
  var _expr_30;
  var _expr_31;
  var _expr_32;
  var _expr_33;
  var _expr_34;
  var _expr_36;
  var _expr_37;
  var _expr_38;
  import16.Element _el_0;
  import16.Element _el_3;
  static import17.ComponentStyles _componentStyles;
  ViewMaterialAutoSuggestInputComponent0(import18.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import16.document.createElement('material-auto-suggest-input');
  }
  dynamic get _PopupRef_3_11 {
    if ((this.__PopupRef_3_11 == null)) {
      (this.__PopupRef_3_11 = import13.getResolvedPopupRef(this._MaterialPopupComponent_3_8));
    }
    return this.__PopupRef_3_11;
  }

  dynamic get _PopupHierarchy_3_12 {
    if ((this.__PopupHierarchy_3_12 == null)) {
      (this.__PopupHierarchy_3_12 = import13.getHierarchy(this._MaterialPopupComponent_3_8));
    }
    return this.__PopupHierarchy_3_12;
  }

  static String get _debugComponentUrl {
    return (import20.isDevMode ? 'asset:angular_components/lib/material_input/material_auto_suggest_input.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import16.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import4.ViewMaterialInputComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    parentRenderNode.append(this._el_0);
    import21.setAttribute(this._el_0, 'alignPositionY', 'after');
    import21.setAttribute(this._el_0, 'initPopupAriaAttributes', 'false');
    import21.setAttribute(this._el_0, 'inputAriaAutocomplete', 'list');
    import21.setAttribute(this._el_0, 'inputAriaHasPopup', 'listbox');
    import21.setAttribute(this._el_0, 'popupSource', '');
    import21.setAttribute(this._el_0, 'role', 'combobox');
    this.addShimC(this._el_0);
    this._DeferredValidator_0_5 = import5.DeferredValidator();
    this._NgValidators_0_6 = [this._DeferredValidator_0_5];
    this._NgModel_0_7 = import6.NgModel(this._NgValidators_0_6, null);
    this._MaterialInputComponent_0_9 = import7.MaterialInputComponent(null, null, this._NgModel_0_7, this._compView_0, this._DeferredValidator_0_5);
    this._MaterialInputDefaultValueAccessor_0_11 = import8.MaterialInputDefaultValueAccessor(this._MaterialInputComponent_0_9, this._NgModel_0_7);
    this._PopupSourceDirective_0_14 = (import20.isDevMode
        ? import22.debugInjectorWrap(import9.PopupSourceDirective, () {
            return import9.PopupSourceDirective(this.parentView.injectorGet(import23.DomPopupSourceFactory, this.parentIndex), this._el_0, this._MaterialInputComponent_0_9, this._MaterialInputComponent_0_9, 'false');
          })
        : import9.PopupSourceDirective(this.parentView.injectorGet(import23.DomPopupSourceFactory, this.parentIndex), this._el_0, this._MaterialInputComponent_0_9, this._MaterialInputComponent_0_9, 'false'));
    final doc = import16.document;
    final _el_1 = doc.createElement('span');
    import21.setAttribute(_el_1, 'trailing', '');
    this.addShimE(_el_1);
    final _anchor_2 = import21.appendAnchor(_el_1);
    this._appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent1<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    this.project(_el_1, 0);
    this._compView_0.createAndProject(this._MaterialInputComponent_0_9, [
      [_el_1],
      const []
    ]);
    this._compView_3 = import12.ViewMaterialPopupComponent0(this, 3);
    this._el_3 = this._compView_3.rootElement;
    parentRenderNode.append(this._el_3);
    import21.setAttribute(this._el_3, 'trackLayoutChanges', '');
    this.addShimC(this._el_3);
    this._appEl_3 = ViewContainer(3, null, this, this._el_3);
    this._MaterialPopupComponent_3_8 = (import20.isDevMode
        ? import22.debugInjectorWrap(import13.MaterialPopupComponent, () {
            return import13.MaterialPopupComponent(this.parentView.injectorGetOptional(import25.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import13.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import26.NgZone, this.parentIndex), this.parentView.injectorGet(import27.OverlayService, this.parentIndex), this.parentView.injectorGet(import28.DomService, this.parentIndex), this.parentView.injectorGet(import29.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import30.OpaqueToken<List<import32.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import33.PopupSizeProvider, this.parentIndex), this._compView_3, this._appEl_3, ElementRef(this._el_3));
          })
        : import13.MaterialPopupComponent(this.parentView.injectorGetOptional(import25.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import13.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import26.NgZone, this.parentIndex), this.parentView.injectorGet(import27.OverlayService, this.parentIndex), this.parentView.injectorGet(import28.DomService, this.parentIndex), this.parentView.injectorGet(import29.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import30.OpaqueToken<List<import32.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import33.PopupSizeProvider, this.parentIndex), this._compView_3, this._appEl_3, ElementRef(this._el_3)));
    final _el_4 = doc.createElement('div');
    import21.setAttribute(_el_4, 'header', '');
    import21.setAttribute(_el_4, 'keyboardOnlyFocusIndicator', '');
    _el_4.tabIndex = -1;
    this.addShimC(_el_4);
    this._KeyboardOnlyFocusIndicatorDirective_4_5 = (import20.isDevMode
        ? import22.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(_el_4, this.parentView.injectorGet(import28.DomService, this.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(_el_4, this.parentView.injectorGet(import28.DomService, this.parentIndex)));
    this.project(_el_4, 1);
    final _anchor_5 = import21.createAnchor();
    this._appEl_5 = ViewContainer(5, 3, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent2<T>(parentView, parentIndex);
    });
    this._CachingDeferredContentDirective_5_9 = import15.CachingDeferredContentDirective(this._appEl_5, _TemplateRef_5_8, this._MaterialPopupComponent_3_8, this);
    final _el_6 = doc.createElement('div');
    import21.setAttribute(_el_6, 'footer', '');
    import21.setAttribute(_el_6, 'keyboardOnlyFocusIndicator', '');
    _el_6.tabIndex = -1;
    this.addShimC(_el_6);
    this._KeyboardOnlyFocusIndicatorDirective_6_5 = (import20.isDevMode
        ? import22.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(_el_6, this.parentView.injectorGet(import28.DomService, this.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(_el_6, this.parentView.injectorGet(import28.DomService, this.parentIndex)));
    this.project(_el_6, 2);
    this._compView_3.createAndProject(this._MaterialPopupComponent_3_8, [
      [_el_4],
      [this._appEl_5],
      [_el_6]
    ]);
    this._el_0.addEventListener('click', this.eventHandler1(_ctx.handleClick));
    this._el_0.addEventListener('keydown', this.eventHandler1(_ctx.onKeyDown));
    this._el_0.addEventListener('keypress', this.eventHandler1(_ctx.onKeyPress));
    final subscription_0 = this._NgModel_0_7.update.listen(this.eventHandler1(_ctx.handleChange));
    final subscription_1 = this._MaterialInputComponent_0_9.onFocus.listen(this.eventHandler1(_ctx.handleFocus));
    final subscription_2 = this._MaterialInputComponent_0_9.onBlur.listen(this.eventHandler1(_ctx.handleBlur));
    final subscription_3 = this._MaterialPopupComponent_3_8.onVisible.listen(this.eventHandler1(this._handleEvent_0));
    _el_4.addEventListener('keyup', this.eventHandler1(_ctx.onKeyUp));
    _el_4.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_4_5.keydown));
    _el_4.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_4_5.resetOutline));
    _el_4.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_4_5.onMouseInteraction));
    _el_4.addEventListener('click', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_4_5.onMouseInteraction));
    _el_4.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_4_5.onFocus));
    _el_6.addEventListener('keyup', this.eventHandler1(_ctx.onKeyUp));
    _el_6.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_6_5.keydown));
    _el_6.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_6_5.resetOutline));
    _el_6.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_6_5.onMouseInteraction));
    _el_6.addEventListener('click', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_6_5.onMouseInteraction));
    _el_6.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_6_5.onFocus));
    import18.View.queryChangeDetectorRefs[this._MaterialInputComponent_0_9] = this._compView_0;
    _ctx.input = this._MaterialInputComponent_0_9;
    this.initSubscriptions([subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 2)) {
      if (identical(token, import5.DeferredValidator)) {
        return this._DeferredValidator_0_5;
      }
      if (identical(token, const import30.MultiToken<dynamic>('NgValidators'))) {
        return this._NgValidators_0_6;
      }
      if ((identical(token, import6.NgModel) || identical(token, import35.NgControl))) {
        return this._NgModel_0_7;
      }
      if (((((identical(token, import7.MaterialInputComponent) || identical(token, import36.BaseMaterialInput)) || identical(token, import37.ReferenceDirective)) || identical(token, import38.Focusable)) || identical(token, import39.HasDisabled))) {
        return this._MaterialInputComponent_0_9;
      }
    }
    if (((3 <= nodeIndex) && (nodeIndex <= 6))) {
      if (((identical(token, import13.MaterialPopupComponent) || identical(token, import40.DeferredContentAware)) || identical(token, import41.DropdownHandle))) {
        return this._MaterialPopupComponent_3_8;
      }
      if (identical(token, import42.PopupRef)) {
        return this._PopupRef_3_11;
      }
      if (identical(token, import25.PopupHierarchy)) {
        return this._PopupHierarchy_3_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final import9.PopupSourceDirective local_input = this._PopupSourceDirective_0_14;
    changed = false;
    final currVal_1 = _ctx.inputText;
    if (import20.checkBinding(this._expr_1, currVal_1, 'inputText', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._NgModel_0_7.model = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._NgModel_0_7.ngAfterChanges();
    }
    if (((!import20.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialInputComponent_0_9.role = 'combobox';
      changed = true;
      this._MaterialInputComponent_0_9.inputAriaHasPopup = 'listbox';
      changed = true;
      this._MaterialInputComponent_0_9.inputAriaAutocomplete = 'list';
      changed = true;
    }
    final currVal_2 = _ctx.label;
    if (import20.checkBinding(this._expr_2, currVal_2, 'label', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.label = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.ariaLabel;
    if (import20.checkBinding(this._expr_3, currVal_3, 'ariaLabel', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.inputAriaLabel = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.inputAutocomplete;
    if (import20.checkBinding(this._expr_4, currVal_4, 'inputAutocomplete', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.inputAutocomplete = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.maxCount;
    if (import20.checkBinding(this._expr_5, currVal_5, 'maxCount', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.maxCount = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.displayBottomPanel;
    if (import20.checkBinding(this._expr_6, currVal_6, 'displayBottomPanel', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.displayBottomPanel = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.floatingLabel;
    if (import20.checkBinding(this._expr_7, currVal_7, 'floatingLabel', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.floatingLabel = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.errorText;
    if (import20.checkBinding(this._expr_8, currVal_8, 'errorText', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.error = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.hintText;
    if (import20.checkBinding(this._expr_9, currVal_9, 'hintText', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.hintText = currVal_9;
      changed = true;
      this._expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.requiredErrorMsg;
    if (import20.checkBinding(this._expr_10, currVal_10, 'requiredErrorMsg', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.requiredErrorMsg = currVal_10;
      changed = true;
      this._expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.checkValid;
    if (import20.checkBinding(this._expr_11, currVal_11, 'checkValid', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.checkValid = currVal_11;
      changed = true;
      this._expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.characterCounter;
    if (import20.checkBinding(this._expr_12, currVal_12, 'characterCounter', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.characterCounter = currVal_12;
      changed = true;
      this._expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.disabled;
    if (import20.checkBinding(this._expr_13, currVal_13, 'disabled', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.disabled = currVal_13;
      changed = true;
      this._expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.showHintOnlyOnFocus;
    if (import20.checkBinding(this._expr_14, currVal_14, 'showHintOnlyOnFocus', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.showHintOnlyOnFocus = currVal_14;
      changed = true;
      this._expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.required;
    if (import20.checkBinding(this._expr_15, currVal_15, 'required', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.required = currVal_15;
      changed = true;
      this._expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.leadingGlyph;
    if (import20.checkBinding(this._expr_16, currVal_16, 'leadingGlyph', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.leadingGlyph = currVal_16;
      changed = true;
      this._expr_16 = currVal_16;
    }
    final currVal_17 = _ctx.trailingGlyph;
    if (import20.checkBinding(this._expr_17, currVal_17, 'trailingGlyph', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.trailingGlyph = currVal_17;
      changed = true;
      this._expr_17 = currVal_17;
    }
    final currVal_19 = (_ctx.showPopup ? _ctx.popupId : null);
    if (import20.checkBinding(this._expr_19, currVal_19, 'showPopup ? popupId : null', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.inputAriaOwns = currVal_19;
      changed = true;
      this._expr_19 = currVal_19;
    }
    final currVal_20 = (_ctx.showPopup ? _ctx.activeModel.activeId : null);
    if (import20.checkBinding(this._expr_20, currVal_20, 'showPopup ? activeModel.activeId : null', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.inputAriaActivedescendent = currVal_20;
      changed = true;
      this._expr_20 = currVal_20;
    }
    final currVal_22 = _ctx.showPopup;
    if (import20.checkBinding(this._expr_22, currVal_22, 'showPopup', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.inputAriaExpanded = currVal_22;
      changed = true;
      this._expr_22 = currVal_22;
    }
    final currVal_24 = (_ctx.showPopup ? _ctx.popupId : null);
    if (import20.checkBinding(this._expr_24, currVal_24, 'showPopup ? popupId : null', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.inputAriaControls = currVal_24;
      changed = true;
      this._expr_24 = currVal_24;
    }
    final currVal_25 = _ctx.leadingText;
    if (import20.checkBinding(this._expr_25, currVal_25, 'leadingText', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.leadingText = currVal_25;
      changed = true;
      this._expr_25 = currVal_25;
    }
    final currVal_26 = _ctx.trailingText;
    if (import20.checkBinding(this._expr_26, currVal_26, 'trailingText', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.trailingText = currVal_26;
      changed = true;
      this._expr_26 = currVal_26;
    }
    final currVal_27 = _ctx.rightAlign;
    if (import20.checkBinding(this._expr_27, currVal_27, 'rightAlign', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialInputComponent_0_9.rightAlign = currVal_27;
      changed = true;
      this._expr_27 = currVal_27;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._PopupSourceDirective_0_14.alignY = 'after');
    }
    this._NgIf_2_9.ngIf = _ctx.showClearIcon;
    changed = false;
    if (firstCheck) {
      this._MaterialPopupComponent_3_8.trackLayoutChanges = true;
      changed = true;
    }
    final currVal_30 = _ctx.autoDismiss;
    if (import20.checkBinding(this._expr_30, currVal_30, 'autoDismiss', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialPopupComponent_3_8.autoDismiss = currVal_30;
      changed = true;
      this._expr_30 = currVal_30;
    }
    final currVal_31 = _ctx.enforceSpaceConstraints;
    if (import20.checkBinding(this._expr_31, currVal_31, 'enforceSpaceConstraints', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialPopupComponent_3_8.enforceSpaceConstraints = currVal_31;
      changed = true;
      this._expr_31 = currVal_31;
    }
    final currVal_32 = _ctx.popupMatchInputWidth;
    if (import20.checkBinding(this._expr_32, currVal_32, 'popupMatchInputWidth', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialPopupComponent_3_8.matchMinSourceWidth = currVal_32;
      changed = true;
      this._expr_32 = currVal_32;
    }
    final currVal_33 = _ctx.popupPositions;
    if (import20.checkBinding(this._expr_33, currVal_33, 'popupPositions', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialPopupComponent_3_8.preferredPositions = currVal_33;
      changed = true;
      this._expr_33 = currVal_33;
    }
    final currVal_34 = local_input;
    if (import20.checkBinding(this._expr_34, currVal_34, 'input', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialPopupComponent_3_8.source = currVal_34;
      changed = true;
      this._expr_34 = currVal_34;
    }
    final currVal_36 = _ctx.constrainToViewport;
    if (import20.checkBinding(this._expr_36, currVal_36, 'constrainToViewport', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialPopupComponent_3_8.constrainToViewport = currVal_36;
      changed = true;
      this._expr_36 = currVal_36;
    }
    final currVal_37 = _ctx.showPopup;
    if (import20.checkBinding(this._expr_37, currVal_37, 'showPopup', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialPopupComponent_3_8.visible = currVal_37;
      changed = true;
      this._expr_37 = currVal_37;
    }
    final currVal_38 = _ctx.slide;
    if (import20.checkBinding(this._expr_38, currVal_38, 'slide', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialPopupComponent_3_8.slide = currVal_38;
      changed = true;
      this._expr_38 = currVal_38;
    }
    if (changed) {
      this._compView_3.markAsCheckOnce();
    }
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.inputId, null)) {
        import21.setProperty(this._el_0, 'id', _ctx.inputId);
      }
    }
    final currVal_29 = import43.interpolateString1('selections ', _ctx.popupShadowCssClass, '');
    if (import20.checkBinding(this._expr_29, currVal_29, 'selections {{popupShadowCssClass}}', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._compView_3.updateChildClassNonHtml(this._el_3, currVal_29);
      this._expr_29 = currVal_29;
    }
    this._compView_3.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    this._compView_3.detectChanges();
    if ((!import20.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialInputComponent_0_9.ngAfterViewInit();
        this._PopupSourceDirective_0_14.ngAfterViewInit();
        this._MaterialPopupComponent_3_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._compView_3.destroyInternalState();
    this._MaterialInputComponent_0_9.ngOnDestroy();
    this._MaterialInputDefaultValueAccessor_0_11.ngOnDestroy();
    this._PopupSourceDirective_0_14.ngOnDestroy();
    this._CachingDeferredContentDirective_5_9.ngOnDestroy();
    this._MaterialPopupComponent_3_8.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.showPopup = $event;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import17.ComponentStyles.scoped(styles$MaterialAutoSuggestInputComponent, _debugComponentUrl));
      if (import20.isDevMode) {
        import17.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialAutoSuggestInputComponentNgFactory = ComponentFactory<import3.MaterialAutoSuggestInputComponent>('material-auto-suggest-input', viewFactory_MaterialAutoSuggestInputComponentHost0);
ComponentFactory<import3.MaterialAutoSuggestInputComponent> get MaterialAutoSuggestInputComponentNgFactory {
  return _MaterialAutoSuggestInputComponentNgFactory;
}

ComponentFactory<import3.MaterialAutoSuggestInputComponent<T>> createMaterialAutoSuggestInputComponentFactory<T>() {
  return ComponentFactory('material-auto-suggest-input', viewFactory_MaterialAutoSuggestInputComponentHost0);
}

class _ViewMaterialAutoSuggestInputComponent1<T> extends import45.EmbeddedView<import3.MaterialAutoSuggestInputComponent<T>> {
  import46.ViewMaterialIconComponent0 _compView_0;
  ViewContainer _appEl_0;
  import47.ButtonDirectiveNgCd _ButtonDirective_0_8;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_9;
  import48.MaterialIconComponent _MaterialIconComponent_0_10;
  import49.MaterialTooltipDirective _MaterialTooltipDirective_0_11;
  import50.StopPropagationDirective _StopPropagationDirective_0_12;
  dynamic __TooltipController_0_13;
  var _expr_0;
  var _expr_1;
  var _expr_3;
  var _expr_4;
  import16.Element _el_0;
  _ViewMaterialAutoSuggestInputComponent1(import51.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  dynamic get _TooltipController_0_13 {
    if ((this.__TooltipController_0_13 == null)) {
      (this.__TooltipController_0_13 = (import20.isDevMode
          ? import22.debugInjectorWrap(import52.TooltipController, () {
              return import53.createTooltipController(this.parentView.parentView.injectorGetOptional(import52.TooltipController, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import54.Disposer, this.parentView.parentIndex));
            })
          : import53.createTooltipController(this.parentView.parentView.injectorGetOptional(import52.TooltipController, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import54.Disposer, this.parentView.parentIndex))));
    }
    return this.__TooltipController_0_13;
  }

  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import46.ViewMaterialIconComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import21.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClassNonHtml(this._el_0, 'clear-icon');
    import21.setAttribute(this._el_0, 'icon', 'clear');
    import21.setAttribute(this._el_0, 'keyboardOnlyFocusIndicator', '');
    import21.setAttribute(this._el_0, 'stopPropagation', '');
    this.addShimC(this._el_0);
    this._appEl_0 = ViewContainer(0, null, this, this._el_0);
    this._ButtonDirective_0_8 = import47.ButtonDirectiveNgCd(import55.ButtonDirective(this._el_0, null));
    this._KeyboardOnlyFocusIndicatorDirective_0_9 = (import20.isDevMode
        ? import22.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.injectorGet(import28.DomService, this.parentView.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.injectorGet(import28.DomService, this.parentView.parentIndex)));
    this._MaterialIconComponent_0_10 = import48.MaterialIconComponent(this._el_0);
    this._MaterialTooltipDirective_0_11 = (import20.isDevMode
        ? import22.debugInjectorWrap(import49.MaterialTooltipDirective, () {
            return import49.MaterialTooltipDirective(this.parentView.parentView.injectorGet(import23.DomPopupSourceFactory, this.parentView.parentIndex), this._appEl_0, this._el_0, this._appEl_0, this._compView_0, this.parentView.parentView.injectorGet(import16.Window, this.parentView.parentIndex), null, null);
          })
        : import49.MaterialTooltipDirective(this.parentView.parentView.injectorGet(import23.DomPopupSourceFactory, this.parentView.parentIndex), this._appEl_0, this._el_0, this._appEl_0, this._compView_0, this.parentView.parentView.injectorGet(import16.Window, this.parentView.parentIndex), null, null));
    this._StopPropagationDirective_0_12 = import50.StopPropagationDirective(this._el_0);
    this._compView_0.create(this._MaterialIconComponent_0_10);
    this._el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_8.instance.handleKeyPress));
    this._el_0.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_9.keydown));
    this._el_0.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_9.resetOutline));
    this._el_0.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_9.onMouseInteraction));
    this._el_0.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_9.onFocus));
    final subscription_0 = this._ButtonDirective_0_8.instance.trigger.listen(this.eventHandler0(_ctx.onClearIcon));
    this.initRootNodesAndSubscriptions([this._appEl_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import55.ButtonDirective)) {
        return this._ButtonDirective_0_8.instance;
      }
      if (identical(token, import52.TooltipController)) {
        return this._TooltipController_0_13;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final currVal_1 = _ctx.disabled;
    if (import20.checkBinding(this._expr_1, currVal_1, 'disabled', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._ButtonDirective_0_8.instance.disabled = currVal_1;
      this._expr_1 = currVal_1;
    }
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_0_10.icon = 'clear';
      changed = true;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_3 = _ctx.clearIconTooltip;
    if (import20.checkBinding(this._expr_3, currVal_3, 'clearIconTooltip', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialTooltipDirective_0_11.text = currVal_3;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.hasClearIconTooltip;
    if (import20.checkBinding(this._expr_4, currVal_4, 'hasClearIconTooltip', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialTooltipDirective_0_11.canShow = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (((!import20.debugThrowIfChanged) && firstCheck)) {
      this._MaterialTooltipDirective_0_11.ngOnInit();
    }
    this._appEl_0.detectChangesInNestedViews();
    final currVal_0 = _ctx.clearIconTooltip;
    if (import20.checkBinding(this._expr_0, currVal_0, 'clearIconTooltip', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      import21.updateAttribute(this._el_0, 'aria-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._ButtonDirective_0_8.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectChanges();
    if ((!import20.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialTooltipDirective_0_11.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._MaterialTooltipDirective_0_11.ngOnDestroy();
    this._StopPropagationDirective_0_12.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    this._ButtonDirective_0_8.instance.handleClick($event);
    this._KeyboardOnlyFocusIndicatorDirective_0_9.onMouseInteraction();
  }
}

import45.EmbeddedView<void> viewFactory_MaterialAutoSuggestInputComponent1<T>(import51.RenderView parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent2<T> extends import45.EmbeddedView<import3.MaterialAutoSuggestInputComponent<T>> {
  import56.ViewFocusTrapComponent0 _compView_0;
  import57.FocusTrapComponent _FocusTrapComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  _ViewMaterialAutoSuggestInputComponent2(import51.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import56.ViewFocusTrapComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._FocusTrapComponent_0_5 = import57.FocusTrapComponent();
    final _anchor_1 = import21.createAnchor();
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent3<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import21.createAnchor();
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent4<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import21.createAnchor();
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent5<T>(parentView, parentIndex);
    });
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    this._compView_0.createAndProject(this._FocusTrapComponent_0_5, [
      [this._appEl_1, this._appEl_2, this._appEl_3]
    ]);
    _el_0.addEventListener('keydown', this.eventHandler1(_ctx.onKeyDown));
    _el_0.addEventListener('keypress', this.eventHandler1(_ctx.onKeyPress));
    _el_0.addEventListener('keyup', this.eventHandler1(_ctx.onKeyUp));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_1_9.ngIf = _ctx.showLoadingSpinner;
    this._NgIf_2_9.ngIf = _ctx.showEmptyPlaceholder;
    this._NgIf_3_9.ngIf = _ctx.hasOptions;
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._FocusTrapComponent_0_5.ngOnDestroy();
  }
}

import45.EmbeddedView<void> viewFactory_MaterialAutoSuggestInputComponent2<T>(import51.RenderView parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent3<T> extends import45.EmbeddedView<import3.MaterialAutoSuggestInputComponent<T>> {
  import58.ViewMaterialSpinnerComponent0 _compView_1;
  import59.MaterialSpinnerComponent _MaterialSpinnerComponent_1_5;
  _ViewMaterialAutoSuggestInputComponent3(import51.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import16.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'loading');
    this.addShimC(_el_0);
    this._compView_1 = import58.ViewMaterialSpinnerComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._MaterialSpinnerComponent_1_5 = import59.MaterialSpinnerComponent();
    this._compView_1.create(this._MaterialSpinnerComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import45.EmbeddedView<void> viewFactory_MaterialAutoSuggestInputComponent3<T>(import51.RenderView parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent4<T> extends import45.EmbeddedView<import3.MaterialAutoSuggestInputComponent<T>> {
  final import60.TextBinding _textBinding_1 = import60.TextBinding();
  _ViewMaterialAutoSuggestInputComponent4(import51.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import16.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'empty');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import43.interpolateString0(_ctx.emptyPlaceholder));
  }
}

import45.EmbeddedView<void> viewFactory_MaterialAutoSuggestInputComponent4<T>(import51.RenderView parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent5<T> extends import45.EmbeddedView<import3.MaterialAutoSuggestInputComponent<T>> {
  import61.ViewMaterialListComponent0 _compView_0;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_5;
  import62.MaterialListComponent _MaterialListComponent_0_6;
  ViewContainer _appEl_1;
  import63.NgFor _NgFor_1_9;
  var _expr_0;
  var _expr_4;
  var _expr_5;
  import16.Element _el_0;
  _ViewMaterialAutoSuggestInputComponent5(import51.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import61.ViewMaterialListComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'suggestion-list');
    import21.setAttribute(this._el_0, 'keyboardOnlyFocusIndicator', '');
    import21.setAttribute(this._el_0, 'role', 'listbox');
    this._el_0.tabIndex = -1;
    this.addShimC(this._el_0);
    this._KeyboardOnlyFocusIndicatorDirective_0_5 = (import20.isDevMode
        ? import22.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.parentView.injectorGet(import28.DomService, this.parentView.parentView.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.parentView.injectorGet(import28.DomService, this.parentView.parentView.parentIndex)));
    this._MaterialListComponent_0_6 = import62.MaterialListComponent();
    final _anchor_1 = import21.createAnchor();
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent6<T>(parentView, parentIndex);
    });
    this._NgFor_1_9 = import63.NgFor(this._appEl_1, _TemplateRef_1_8);
    this._compView_0.createAndProject(this._MaterialListComponent_0_6, [
      [this._appEl_1]
    ]);
    this._el_0.addEventListener('mouseleave', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_5.keydown));
    this._el_0.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_5.resetOutline));
    this._el_0.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction));
    this._el_0.addEventListener('click', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction));
    this._el_0.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_5.onFocus));
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialListComponent_0_6.role = 'listbox';
      changed = true;
    }
    final currVal_4 = _ctx.width;
    if (import20.checkBinding(this._expr_4, currVal_4, 'width', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialListComponent_0_6.width = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.trackByIndexFn, null)) {
        (this._NgFor_1_9.ngForTrackBy = _ctx.trackByIndexFn);
      }
    }
    final currVal_5 = _ctx.visibleSuggestionGroups;
    if (import20.checkBinding(this._expr_5, currVal_5, 'visibleSuggestionGroups', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._NgFor_1_9.ngForOf = currVal_5;
      this._expr_5 = currVal_5;
    }
    if ((!import20.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.inputId, null)) {
        import21.updateAttribute(this._el_0, 'aria-labelledby', _ctx.inputId);
      }
      if (!identical(_ctx.popupId, null)) {
        import21.setProperty(this._el_0, 'id', _ctx.popupId);
      }
    }
    final currVal_0 = _ctx.isMultiSelect;
    if (import20.checkBinding(this._expr_0, currVal_0, 'isMultiSelect', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      import21.updateAttribute(this._el_0, 'aria-multiselectable', currVal_0?.toString());
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.activeModel.activate(null);
  }
}

import45.EmbeddedView<void> viewFactory_MaterialAutoSuggestInputComponent5<T>(import51.RenderView parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent5<T>(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent6<T> extends import45.EmbeddedView<import3.MaterialAutoSuggestInputComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  _ViewMaterialAutoSuggestInputComponent6(import51.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import21.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent7<T>(parentView, parentIndex);
    });
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final local_suggestionGroup = import20.unsafeCast<import64.OptionGroup<dynamic>>(this.locals['\$implicit']);
    this._NgIf_0_9.ngIf = (local_suggestionGroup.isNotEmpty || local_suggestionGroup.hasEmptyLabel);
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }
}

import45.EmbeddedView<void> viewFactory_MaterialAutoSuggestInputComponent6<T>(import51.RenderView parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent6<T>(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent7<T> extends import45.EmbeddedView<import3.MaterialAutoSuggestInputComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  import63.NgFor _NgFor_4_9;
  var _expr_0;
  _ViewMaterialAutoSuggestInputComponent7(import51.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import16.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'list-group');
    import21.setAttribute(_el_0, 'group', '');
    this.addShimC(_el_0);
    final _anchor_1 = import21.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent8<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import21.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent9<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import21.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent10<T>(parentView, parentIndex);
    });
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import21.appendAnchor(_el_0);
    this._appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent11<T>(parentView, parentIndex);
    });
    this._NgFor_4_9 = import63.NgFor(this._appEl_4, _TemplateRef_4_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_suggestionGroup = import20.unsafeCast<import64.OptionGroup<dynamic>>(import20.unsafeCast<_ViewMaterialAutoSuggestInputComponent6>(this.parentView).locals['\$implicit']);
    this._NgIf_1_9.ngIf = (local_suggestionGroup.hasLabel && (!_ctx.hasCustomLabelRenderer));
    this._NgIf_2_9.ngIf = _ctx.hasCustomLabelRenderer;
    this._NgIf_3_9.ngIf = (local_suggestionGroup.isEmpty && local_suggestionGroup.hasEmptyLabel);
    final currVal_0 = local_suggestionGroup;
    if (import20.checkBinding(this._expr_0, currVal_0, 'suggestionGroup', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._NgFor_4_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import20.debugThrowIfChanged)) {
      this._NgFor_4_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
  }
}

import45.EmbeddedView<void> viewFactory_MaterialAutoSuggestInputComponent7<T>(import51.RenderView parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent7<T>(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent8<T> extends import45.EmbeddedView<import3.MaterialAutoSuggestInputComponent<T>> {
  final import60.TextBinding _textBinding_1 = import60.TextBinding();
  _ViewMaterialAutoSuggestInputComponent8(import51.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import16.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'list-group-label');
    import21.setAttribute(_el_0, 'label', '');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    _el_0.addEventListener('mouseenter', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_suggestionGroup = import20.unsafeCast<import64.OptionGroup<dynamic>>(import20.unsafeCast<_ViewMaterialAutoSuggestInputComponent6>(this.parentView.parentView).locals['\$implicit']);
    this._textBinding_1.updateText(import43.interpolateString0(local_suggestionGroup.uiDisplayName));
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.activeModel.activate(null);
  }
}

import45.EmbeddedView<void> viewFactory_MaterialAutoSuggestInputComponent8<T>(import51.RenderView parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent8<T>(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent9<T> extends import45.EmbeddedView<import3.MaterialAutoSuggestInputComponent<T>> {
  import65.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import66.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialAutoSuggestInputComponent9(import51.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import65.ViewDynamicComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._appEl_0 = ViewContainer(0, null, this, _el_0);
    this._DynamicComponent_0_8 = (import20.isDevMode
        ? import22.debugInjectorWrap(import66.DynamicComponent, () {
            return import66.DynamicComponent(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import67.SlowComponentLoader, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._appEl_0);
          })
        : import66.DynamicComponent(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import67.SlowComponentLoader, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._appEl_0));
    this._compView_0.create(this._DynamicComponent_0_8);
    _el_0.addEventListener('mouseenter', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    final local_suggestionGroup = import20.unsafeCast<import64.OptionGroup<dynamic>>(import20.unsafeCast<_ViewMaterialAutoSuggestInputComponent6>(this.parentView.parentView).locals['\$implicit']);
    changed = false;
    final currVal_0 = ((_ctx.labelRenderer != null) ? _ctx.labelRenderer(local_suggestionGroup) : null);
    if (import20.checkBinding(this._expr_0, currVal_0, 'labelRenderer != null ? labelRenderer(suggestionGroup) : null', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = ((_ctx.labelFactory != null) ? _ctx.labelFactory(local_suggestionGroup) : null);
    if (import20.checkBinding(this._expr_1, currVal_1, 'labelFactory != null ? labelFactory(suggestionGroup) : null', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = local_suggestionGroup;
    if (import20.checkBinding(this._expr_2, currVal_2, 'suggestionGroup', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._DynamicComponent_0_8.value = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (changed) {
      this._DynamicComponent_0_8.ngAfterChanges();
    }
    this._appEl_0.detectChangesInNestedViews();
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._DynamicComponent_0_8.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.activeModel.activate(null);
  }
}

import45.EmbeddedView<void> viewFactory_MaterialAutoSuggestInputComponent9<T>(import51.RenderView parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent9<T>(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent10<T> extends import45.EmbeddedView<import3.MaterialAutoSuggestInputComponent<T>> {
  import68.ViewMaterialSelectDropdownItemComponent0<String> _compView_0;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_5;
  import69.MaterialSelectDropdownItemComponent<String> _MaterialSelectDropdownItemComponent_0_6;
  var _expr_1;
  _ViewMaterialAutoSuggestInputComponent10(import51.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import68.ViewMaterialSelectDropdownItemComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import21.setAttribute(_el_0, 'keyboardOnlyFocusIndicator', '');
    this.addShimC(_el_0);
    this._KeyboardOnlyFocusIndicatorDirective_0_5 = (import20.isDevMode
        ? import22.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(_el_0, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import28.DomService, this.parentView.parentView.parentView.parentView.parentView.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(_el_0, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import28.DomService, this.parentView.parentView.parentView.parentView.parentView.parentIndex)));
    this._MaterialSelectDropdownItemComponent_0_6 = (import20.isDevMode
        ? import22.debugInjectorWrap(import69.MaterialSelectDropdownItemComponent, () {
            return import69.MaterialSelectDropdownItemComponent(_el_0, null, import20.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(this.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_3_8, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import70.ActivationHandler, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import71.IdGenerator, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._compView_0);
          })
        : import69.MaterialSelectDropdownItemComponent(_el_0, null, import20.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(this.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_3_8, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import70.ActivationHandler, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import71.IdGenerator, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._compView_0));
    this._compView_0.createAndProject(this._MaterialSelectDropdownItemComponent_0_6, [const []]);
    _el_0.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_5.keydown));
    _el_0.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_5.resetOutline));
    _el_0.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction));
    _el_0.addEventListener('click', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction));
    _el_0.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_5.onFocus));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import72.SelectionItem) || identical(token, import73.HasRenderer)) && (0 == nodeIndex))) {
      return this._MaterialSelectDropdownItemComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_suggestionGroup = import20.unsafeCast<import64.OptionGroup<dynamic>>(import20.unsafeCast<_ViewMaterialAutoSuggestInputComponent6>(this.parentView.parentView).locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      this._MaterialSelectDropdownItemComponent_0_6.disabled = true;
      changed = true;
    }
    final currVal_1 = local_suggestionGroup.emptyLabel;
    if (import20.checkBinding(this._expr_1, currVal_1, 'suggestionGroup.emptyLabel', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.value = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialSelectDropdownItemComponent_0_6.ngOnDestroy();
  }
}

import45.EmbeddedView<void> viewFactory_MaterialAutoSuggestInputComponent10<T>(import51.RenderView parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent10<T>(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent11<T> extends import45.EmbeddedView<import3.MaterialAutoSuggestInputComponent<T>> {
  import68.ViewMaterialSelectDropdownItemComponent0<T> _compView_0;
  import74.ActiveItemDirectiveNgCd _ActiveItemDirective_0_5;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  import69.MaterialSelectDropdownItemComponent<T> _MaterialSelectDropdownItemComponent_0_7;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  var _expr_11;
  import16.Element _el_0;
  _ViewMaterialAutoSuggestInputComponent11(import51.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import68.ViewMaterialSelectDropdownItemComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, import43.interpolateString2('', 'list-item', ' ', import69.MaterialSelectDropdownItemComponent.hostClass, ''));
    import21.setAttribute(this._el_0, 'keyboardOnlyFocusIndicator', '');
    this.addShimC(this._el_0);
    this._ActiveItemDirective_0_5 = import74.ActiveItemDirectiveNgCd((import20.isDevMode
        ? import22.debugInjectorWrap(import75.ActiveItemDirective, () {
            return import75.ActiveItemDirective(this._el_0, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import28.DomService, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import76.Modal, this.parentView.parentView.parentView.parentView.parentView.parentIndex), import20.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(this.parentView.parentView.parentView.parentView.parentView)._PopupRef_3_11);
          })
        : import75.ActiveItemDirective(this._el_0, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import28.DomService, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import76.Modal, this.parentView.parentView.parentView.parentView.parentView.parentIndex), import20.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(this.parentView.parentView.parentView.parentView.parentView)._PopupRef_3_11)));
    this._KeyboardOnlyFocusIndicatorDirective_0_6 = (import20.isDevMode
        ? import22.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import28.DomService, this.parentView.parentView.parentView.parentView.parentView.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import28.DomService, this.parentView.parentView.parentView.parentView.parentView.parentIndex)));
    this._MaterialSelectDropdownItemComponent_0_7 = (import20.isDevMode
        ? import22.debugInjectorWrap(import69.MaterialSelectDropdownItemComponent, () {
            return import69.MaterialSelectDropdownItemComponent(this._el_0, null, import20.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(this.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_3_8, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import70.ActivationHandler, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import71.IdGenerator, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._compView_0);
          })
        : import69.MaterialSelectDropdownItemComponent(this._el_0, null, import20.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(this.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_3_8, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import70.ActivationHandler, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import71.IdGenerator, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._compView_0));
    this._compView_0.createAndProject(this._MaterialSelectDropdownItemComponent_0_7, [const []]);
    this._el_0.addEventListener('mouseenter', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('mouseleave', this.eventHandler0(this._ActiveItemDirective_0_5.instance.onMouseLeave));
    this._el_0.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_6.keydown));
    this._el_0.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    this._el_0.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    this._el_0.addEventListener('click', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    this._el_0.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_6.onFocus));
    this.initRootNode(this._el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import72.SelectionItem) || identical(token, import73.HasRenderer)) && (0 == nodeIndex))) {
      return this._MaterialSelectDropdownItemComponent_0_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_popup = import20.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(this.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_3_8;
    final local_suggestion = this.locals['\$implicit'];
    final currVal_0 = (local_popup.showPopup && _ctx.activeModel.isActive(local_suggestion));
    if (import20.checkBinding(this._expr_0, currVal_0, 'popup.showPopup && activeModel.isActive(suggestion)', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._ActiveItemDirective_0_5.instance.itemActive = currVal_0;
      this._expr_0 = currVal_0;
    }
    changed = false;
    final currVal_1 = _ctx.isOptionDisabled(local_suggestion);
    if (import20.checkBinding(this._expr_1, currVal_1, 'isOptionDisabled(suggestion)', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_7.disabled = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.isOptionHidden(local_suggestion);
    if (import20.checkBinding(this._expr_2, currVal_2, 'isOptionHidden(suggestion)', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_7.isHidden = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = local_suggestion;
    if (import20.checkBinding(this._expr_3, currVal_3, 'suggestion', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_7.value = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.hideCheckbox;
    if (import20.checkBinding(this._expr_4, currVal_4, 'hideCheckbox', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_7.hideCheckbox = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.itemRenderer;
    if (import20.checkBinding(this._expr_5, currVal_5, 'itemRenderer', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_7.itemRenderer = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.componentRenderer;
    if (import20.checkBinding(this._expr_6, currVal_6, 'componentRenderer', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_7.componentRenderer = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.factoryRenderer;
    if (import20.checkBinding(this._expr_7, currVal_7, 'factoryRenderer', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_7.factoryRenderer = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.closeOnActivate;
    if (import20.checkBinding(this._expr_8, currVal_8, 'closeOnActivate', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_7.closeOnActivate = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.isMultiSelect;
    if (import20.checkBinding(this._expr_9, currVal_9, 'isMultiSelect', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_7.deselectOnActivate = currVal_9;
      changed = true;
      this._expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.selection;
    if (import20.checkBinding(this._expr_10, currVal_10, 'selection', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_7.selection = currVal_10;
      changed = true;
      this._expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.activeModel.id(local_suggestion);
    if (import20.checkBinding(this._expr_11, currVal_11, 'activeModel.id(suggestion)', 'package:angular_components/material_input/material_auto_suggest_input.html')) {
      this._MaterialSelectDropdownItemComponent_0_7.id = currVal_11;
      changed = true;
      this._expr_11 = currVal_11;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._ActiveItemDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    if ((!import20.debugThrowIfChanged)) {
      if (firstCheck) {
        this._ActiveItemDirective_0_5.instance.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._ActiveItemDirective_0_5.instance.ngOnDestroy();
    this._MaterialSelectDropdownItemComponent_0_7.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final local_suggestion = this.locals['\$implicit'];
    final _ctx = this.ctx;
    _ctx.activeModel.activate(local_suggestion);
    this._ActiveItemDirective_0_5.instance.onMouseEnter();
  }
}

import45.EmbeddedView<void> viewFactory_MaterialAutoSuggestInputComponent11<T>(import51.RenderView parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent11<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialAutoSuggestInputComponentHost = const [];

class _ViewMaterialAutoSuggestInputComponentHost0<T> extends import77.HostView<import3.MaterialAutoSuggestInputComponent<T>> {
  @override
  void build() {
    this.componentView = ViewMaterialAutoSuggestInputComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import20.isDevMode
        ? import22.debugInjectorWrap(import3.MaterialAutoSuggestInputComponent, () {
            return import3.MaterialAutoSuggestInputComponent(null, this.injectorGetOptional(import71.IdGenerator, this.parentIndex), this.componentView, this.injectorGetOptional(import33.PopupSizeProvider, this.parentIndex));
          })
        : import3.MaterialAutoSuggestInputComponent(null, this.injectorGetOptional(import71.IdGenerator, this.parentIndex), this.componentView, this.injectorGetOptional(import33.PopupSizeProvider, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((((((((((identical(token, import3.MaterialAutoSuggestInputComponent) || identical(token, import39.HasDisabled)) || identical(token, import73.HasRenderer)) || identical(token, import72.SelectionContainer)) || identical(token, import78.HighlightProvider)) || identical(token, import41.DropdownHandle)) || identical(token, import73.HasComponentRenderer)) || identical(token, import79.HasFactoryRenderer)) || identical(token, import38.Focusable)) || identical(token, import33.PopupSizeProvider)) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import20.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import77.HostView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponentHost0<T>() {
  return _ViewMaterialAutoSuggestInputComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialAutoSuggestInputComponent, createMaterialAutoSuggestInputComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
  _ref14.initReflector();
  _ref15.initReflector();
  _ref16.initReflector();
  _ref17.initReflector();
  _ref18.initReflector();
  _ref19.initReflector();
  _ref20.initReflector();
  _ref21.initReflector();
  _ref22.initReflector();
  _ref23.initReflector();
  _ref24.initReflector();
  _ref25.initReflector();
  _ref26.initReflector();
  _ref27.initReflector();
  _ref28.initReflector();
  _ref29.initReflector();
  _ref30.initReflector();
  _ref31.initReflector();
  _ref32.initReflector();
  _ref33.initReflector();
  _ref34.initReflector();
  _ref35.initReflector();
  _ref36.initReflector();
  _ref37.initReflector();
  _ref38.initReflector();
}
