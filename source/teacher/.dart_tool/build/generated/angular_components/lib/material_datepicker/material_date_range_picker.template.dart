// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_date_range_picker.dart';
export 'material_date_range_picker.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref2;
import 'package:angular_components/content/deferred_content.template.dart' as _ref3;
import 'package:angular_components/focus/focus.template.dart' as _ref4;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref5;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref6;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref7;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref8;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref9;
import 'package:angular_components/material_button/material_button.template.dart' as _ref10;
import 'package:angular_components/material_datepicker/comparison.template.dart' as _ref11;
import 'package:angular_components/material_datepicker/comparison_option.template.dart' as _ref12;
import 'package:angular_components/material_datepicker/config.template.dart' as _ref13;
import 'package:angular_components/material_datepicker/date_range_editor.template.dart' as _ref14;
import 'package:angular_components/material_datepicker/date_range_editor_host.template.dart' as _ref15;
import 'package:angular_components/material_datepicker/model.template.dart' as _ref16;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref17;
import 'package:angular_components/material_datepicker/next_prev_buttons.template.dart' as _ref18;
import 'package:angular_components/material_datepicker/preset.template.dart' as _ref19;
import 'package:angular_components/material_datepicker/range.template.dart' as _ref20;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref21;
import 'package:angular_components/material_select/dropdown_button.template.dart' as _ref22;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref23;
import 'package:angular_components/model/date/date.template.dart' as _ref24;
import 'package:angular_components/model/date/date_formatter.template.dart' as _ref25;
import 'package:angular_components/model/observable/observable.template.dart' as _ref26;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref27;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref28;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref29;
import 'package:angular_components/material_datepicker/material_date_range_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_date_range_picker.dart' as import2;
import '../button_decorator/button_decorator.template.dart' as import3;
import '../focus/keyboard_only_focus_indicator.dart' as import4;
import '../src/laminate/popup/popup_source_directive.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../material_select/dropdown_button.template.dart' as import8;
import '../material_select/dropdown_button.dart' as import9;
import '../material_popup/material_popup.template.dart' as import10;
import '../material_popup/material_popup.dart' as import11;
import 'dart:html' as import12;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import13;
import 'package:angular/src/core/linker/views/view.dart' as import14;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import16;
import 'package:angular/src/runtime/dom_helpers.dart' as import17;
import '../button_decorator/button_decorator.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import '../utils/browser/dom_service/dom_service.dart' as import20;
import '../src/laminate/popup/dom_popup_source.dart' as import21;
import '../utils/angular/reference/reference.dart' as import22;
import '../focus/focus_interface.dart' as import23;
import 'package:angular/src/core/linker/template_ref.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import25;
import 'package:angular/src/core/zone/ng_zone.dart' as import26;
import '../src/laminate/overlay/overlay_service.dart' as import27;
import '../laminate/overlay/zindexer.dart' as import28;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import29;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import31;
import '../src/laminate/popup/popup_size_provider.dart' as import32;
import 'package:angular/src/core/linker/element_ref.dart';
import '../interfaces/has_disabled.dart' as import34;
import '../content/deferred_content_aware.dart' as import35;
import '../mixins/material_dropdown_base.dart' as import36;
import '../src/laminate/popup/popup_ref.dart' as import37;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import39;
import 'package:angular/src/runtime/text_binding.dart' as import40;
import 'package:angular/src/core/linker/views/render_view.dart' as import41;
import 'package:angular/src/runtime/interpolate.dart' as import42;
import 'next_prev_buttons.template.dart' as import43;
import 'next_prev_buttons.dart' as import44;
import '../focus/focus_trap.template.dart' as import45;
import '../focus/focus_trap.dart' as import46;
import 'date_range_editor.template.dart' as import47;
import 'date_range_editor.dart' as import48;
import '../material_button/material_button.template.dart' as import49;
import '../material_button/material_button.dart' as import50;
import 'date_range_editor_host.dart' as import51;
import 'package:quiver/src/time/clock.dart' as import52;
import '../theme/dark_theme.dart' as import53;
import 'package:angular/src/core/linker/views/host_view.dart' as import54;
import 'config.dart' as import55;

final List<dynamic> styles$MaterialDateRangePickerComponent = [import0.styles];

class ViewMaterialDateRangePickerComponent0 extends import1.ComponentView<import2.MaterialDateRangePickerComponent> {
  import3.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import4.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  import5.PopupSourceDirective _PopupSourceDirective_0_7;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import8.ViewDropdownButtonComponent0 _compView_4;
  import9.DropdownButtonComponent _DropdownButtonComponent_4_5;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  import10.ViewMaterialPopupComponent0 _compView_7;
  ViewContainer _appEl_7;
  import11.MaterialPopupComponent _MaterialPopupComponent_7_8;
  dynamic __PopupHierarchy_7_11;
  dynamic __PopupRef_7_12;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  import12.DivElement _el_0;
  import12.Element _el_7;
  static import13.ComponentStyles _componentStyles;
  ViewMaterialDateRangePickerComponent0(import14.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import12.document.createElement('material-date-range-picker');
  }
  dynamic get _PopupHierarchy_7_11 {
    if ((this.__PopupHierarchy_7_11 == null)) {
      (this.__PopupHierarchy_7_11 = import11.getHierarchy(this._MaterialPopupComponent_7_8));
    }
    return this.__PopupHierarchy_7_11;
  }

  dynamic get _PopupRef_7_12 {
    if ((this.__PopupRef_7_12 == null)) {
      (this.__PopupRef_7_12 = import11.getResolvedPopupRef(this._MaterialPopupComponent_7_8));
    }
    return this.__PopupRef_7_12;
  }

  static String get _debugComponentUrl {
    return (import16.isDevMode ? 'asset:angular_components/lib/material_datepicker/material_date_range_picker.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import12.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import12.document;
    this._el_0 = import17.appendDiv(doc, parentRenderNode);
    import17.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClass(this._el_0, 'main-content');
    import17.setAttribute(this._el_0, 'keyboardOnlyFocusIndicator', '');
    import17.setAttribute(this._el_0, 'popupSource', '');
    this.addShimC(this._el_0);
    this._ButtonDirective_0_5 = import3.ButtonDirectiveNgCd(import18.ButtonDirective(this._el_0, null));
    this._KeyboardOnlyFocusIndicatorDirective_0_6 = (import16.isDevMode
        ? import19.debugInjectorWrap(import4.KeyboardOnlyFocusIndicatorDirective, () {
            return import4.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.injectorGet(import20.DomService, this.parentIndex));
          })
        : import4.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.injectorGet(import20.DomService, this.parentIndex)));
    this._PopupSourceDirective_0_7 = (import16.isDevMode
        ? import19.debugInjectorWrap(import5.PopupSourceDirective, () {
            return import5.PopupSourceDirective(this.parentView.injectorGet(import21.DomPopupSourceFactory, this.parentIndex), this._el_0, this.parentView.injectorGetOptional(import22.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import23.Focusable, this.parentIndex), null);
          })
        : import5.PopupSourceDirective(this.parentView.injectorGet(import21.DomPopupSourceFactory, this.parentIndex), this._el_0, this.parentView.injectorGetOptional(import22.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import23.Focusable, this.parentIndex), null));
    final _anchor_1 = import17.appendAnchor(this._el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialDateRangePickerComponent1);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _el_2 = import17.appendDiv(doc, this._el_0);
    this.updateChildClass(_el_2, 'dropdown-and-comparison');
    this.addShimC(_el_2);
    final _el_3 = import17.appendSpan(doc, _el_2);
    this.updateChildClass(_el_3, 'main-line');
    this.addShimE(_el_3);
    this._compView_4 = import8.ViewDropdownButtonComponent0(this, 4);
    final _el_4 = this._compView_4.rootElement;
    _el_3.append(_el_4);
    this.updateChildClassNonHtml(_el_4, 'menu-lookalike primary-range');
    this.addShimC(_el_4);
    this._DropdownButtonComponent_4_5 = import9.DropdownButtonComponent();
    this._compView_4.createAndProject(this._DropdownButtonComponent_4_5, [const []]);
    final _anchor_5 = import17.appendAnchor(_el_3);
    this._appEl_5 = ViewContainer(5, 3, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_MaterialDateRangePickerComponent2);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import17.appendAnchor(_el_2);
    this._appEl_6 = ViewContainer(6, 2, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_MaterialDateRangePickerComponent3);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    this._compView_7 = import10.ViewMaterialPopupComponent0(this, 7);
    this._el_7 = this._compView_7.rootElement;
    parentRenderNode.append(this._el_7);
    import17.setAttribute(this._el_7, 'enforceSpaceConstraints', '');
    this.addShimC(this._el_7);
    this._appEl_7 = ViewContainer(7, null, this, this._el_7);
    this._MaterialPopupComponent_7_8 = (import16.isDevMode
        ? import19.debugInjectorWrap(import11.MaterialPopupComponent, () {
            return import11.MaterialPopupComponent(this.parentView.injectorGetOptional(import25.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import11.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import26.NgZone, this.parentIndex), this.parentView.injectorGet(import27.OverlayService, this.parentIndex), this.parentView.injectorGet(import20.DomService, this.parentIndex), this.parentView.injectorGet(import28.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<List<import31.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import32.PopupSizeProvider, this.parentIndex), this._compView_7, this._appEl_7, ElementRef(this._el_7));
          })
        : import11.MaterialPopupComponent(this.parentView.injectorGetOptional(import25.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import11.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import26.NgZone, this.parentIndex), this.parentView.injectorGet(import27.OverlayService, this.parentIndex), this.parentView.injectorGet(import20.DomService, this.parentIndex), this.parentView.injectorGet(import28.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<List<import31.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import32.PopupSizeProvider, this.parentIndex), this._compView_7, this._appEl_7, ElementRef(this._el_7)));
    final _anchor_8 = import17.createAnchor();
    this._appEl_8 = ViewContainer(8, 7, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(this._appEl_8, viewFactory_MaterialDateRangePickerComponent4);
    this._NgIf_8_9 = NgIf(this._appEl_8, _TemplateRef_8_8);
    this._compView_7.createAndProject(this._MaterialPopupComponent_7_8, [
      const [],
      [this._appEl_8],
      const []
    ]);
    this._el_0.addEventListener('focus', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('mouseenter', this.eventHandler0(_ctx.initEditor));
    this._el_0.addEventListener('click', this.eventHandler1(this._handleEvent_1));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    this._el_0.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_6.keydown));
    this._el_0.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    this._el_0.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    final subscription_0 = this._ButtonDirective_0_5.instance.trigger.listen(this.eventHandler0(_ctx.open));
    final subscription_1 = this._MaterialPopupComponent_7_8.onOpen.listen(this.eventHandler0(_ctx.open));
    final subscription_2 = this._MaterialPopupComponent_7_8.onClose.listen(this.eventHandler0(_ctx.close));
    _ctx.focusableElement = this._ButtonDirective_0_5.instance;
    _ctx.focusOnClose = this._KeyboardOnlyFocusIndicatorDirective_0_6;
    import14.View.queryChangeDetectorRefs[this._MaterialPopupComponent_7_8] = this._compView_7;
    _ctx.popup = this._MaterialPopupComponent_7_8;
    this.initSubscriptions([subscription_0, subscription_1, subscription_2]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 6)) {
      if (((identical(token, import34.HasDisabled) || identical(token, import23.Focusable)) && (4 == nodeIndex))) {
        return this._DropdownButtonComponent_4_5;
      }
      if (identical(token, import18.ButtonDirective)) {
        return this._ButtonDirective_0_5.instance;
      }
    }
    if (((7 <= nodeIndex) && (nodeIndex <= 8))) {
      if (((identical(token, import11.MaterialPopupComponent) || identical(token, import35.DeferredContentAware)) || identical(token, import36.DropdownHandle))) {
        return this._MaterialPopupComponent_7_8;
      }
      if (identical(token, import25.PopupHierarchy)) {
        return this._PopupHierarchy_7_11;
      }
      if (identical(token, import37.PopupRef)) {
        return this._PopupRef_7_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final import5.PopupSourceDirective local_button = this._PopupSourceDirective_0_7;
    this._NgIf_1_9.ngIf = (_ctx.hasTitle && _ctx.presets.isNotEmpty);
    changed = false;
    if (firstCheck) {
      this._DropdownButtonComponent_4_5.tabbable = false;
      changed = true;
    }
    final currVal_0 = _ctx.formattedRange;
    if (import16.checkBinding(this._expr_0, currVal_0, 'formattedRange', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DropdownButtonComponent_4_5.buttonText = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.dropdownButtonAriaLabel;
    if (import16.checkBinding(this._expr_1, currVal_1, 'dropdownButtonAriaLabel', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DropdownButtonComponent_4_5.buttonAriaLabel = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import16.checkBinding(this._expr_2, currVal_2, 'disabled', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DropdownButtonComponent_4_5.disabled = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.error;
    if (import16.checkBinding(this._expr_3, currVal_3, 'error', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DropdownButtonComponent_4_5.error = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_4.markAsCheckOnce();
    }
    if (((!import16.debugThrowIfChanged) && firstCheck)) {
      this._DropdownButtonComponent_4_5.ngOnInit();
    }
    this._NgIf_5_9.ngIf = _ctx.showNextPrevButtons;
    this._NgIf_6_9.ngIf = _ctx.hasComparison;
    changed = false;
    if (firstCheck) {
      this._MaterialPopupComponent_7_8.enforceSpaceConstraints = true;
      changed = true;
    }
    final currVal_7 = _ctx.preferredPositions;
    if (import16.checkBinding(this._expr_7, currVal_7, 'preferredPositions', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._MaterialPopupComponent_7_8.preferredPositions = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    final currVal_8 = local_button;
    if (import16.checkBinding(this._expr_8, currVal_8, 'button', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._MaterialPopupComponent_7_8.source = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    if (changed) {
      this._compView_7.markAsCheckOnce();
    }
    this._NgIf_8_9.ngIf = _ctx.isEditorCreated;
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_8.detectChangesInNestedViews();
    this._ButtonDirective_0_5.detectHostChanges(this, this._el_0);
    if (firstCheck) {
      if (!identical(_ctx.popupClassName, null)) {
        this._compView_7.updateChildClassNonHtml(this._el_7, _ctx.popupClassName);
      }
    }
    this._compView_7.detectHostChanges(firstCheck);
    this._compView_4.detectChanges();
    this._compView_7.detectChanges();
    if ((!import16.debugThrowIfChanged)) {
      if (firstCheck) {
        this._PopupSourceDirective_0_7.ngAfterViewInit();
        this._MaterialPopupComponent_7_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._appEl_8.destroyNestedViews();
    this._compView_4.destroyInternalState();
    this._compView_7.destroyInternalState();
    this._PopupSourceDirective_0_7.ngOnDestroy();
    this._MaterialPopupComponent_7_8.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.initEditor();
    this._KeyboardOnlyFocusIndicatorDirective_0_6.onFocus($event);
  }

  void _handleEvent_1($event) {
    this._ButtonDirective_0_5.instance.handleClick($event);
    this._KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_9 = _ctx.disabled;
    if (import16.checkBinding(this._expr_9, currVal_9, null, null)) {
      import17.updateClassBindingNonHtml(this.rootElement, 'disabled', currVal_9);
      this._expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.compact;
    if (import16.checkBinding(this._expr_10, currVal_10, null, null)) {
      import17.updateClassBindingNonHtml(this.rootElement, 'compact', currVal_10);
      this._expr_10 = currVal_10;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import13.ComponentStyles.scoped(styles$MaterialDateRangePickerComponent, _debugComponentUrl));
      if (import16.isDevMode) {
        import13.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialDateRangePickerComponentNgFactory = ComponentFactory<import2.MaterialDateRangePickerComponent>('material-date-range-picker', viewFactory_MaterialDateRangePickerComponentHost0);
ComponentFactory<import2.MaterialDateRangePickerComponent> get MaterialDateRangePickerComponentNgFactory {
  return _MaterialDateRangePickerComponentNgFactory;
}

ComponentFactory<import2.MaterialDateRangePickerComponent> createMaterialDateRangePickerComponentFactory() {
  return ComponentFactory('material-date-range-picker', viewFactory_MaterialDateRangePickerComponentHost0);
}

class _ViewMaterialDateRangePickerComponent1 extends import39.EmbeddedView<import2.MaterialDateRangePickerComponent> {
  final import40.TextBinding _textBinding_1 = import40.TextBinding();
  _ViewMaterialDateRangePickerComponent1(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import12.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'range-title');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import42.interpolateString0(_ctx.rangeTitle));
  }
}

import39.EmbeddedView<void> viewFactory_MaterialDateRangePickerComponent1(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDateRangePickerComponent1(parentView, parentIndex);
}

class _ViewMaterialDateRangePickerComponent2 extends import39.EmbeddedView<import2.MaterialDateRangePickerComponent> {
  import43.ViewNextPrevComponent0 _compView_0;
  import44.NextPrevComponent _NextPrevComponent_0_5;
  var _expr_0;
  _ViewMaterialDateRangePickerComponent2(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import43.ViewNextPrevComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'next-prev-buttons');
    this.addShimC(_el_0);
    this._NextPrevComponent_0_5 = import44.NextPrevComponent(this._compView_0);
    this._compView_0.create(this._NextPrevComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.model, null)) {
        this._NextPrevComponent_0_5.model = _ctx.model;
        changed = true;
      }
    }
    final currVal_0 = _ctx.disabled;
    if (import16.checkBinding(this._expr_0, currVal_0, 'disabled', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._NextPrevComponent_0_5.disabled = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._NextPrevComponent_0_5.ngOnDestroy();
  }
}

import39.EmbeddedView<void> viewFactory_MaterialDateRangePickerComponent2(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDateRangePickerComponent2(parentView, parentIndex);
}

class _ViewMaterialDateRangePickerComponent3 extends import39.EmbeddedView<import2.MaterialDateRangePickerComponent> {
  final import40.TextBinding _textBinding_1 = import40.TextBinding();
  _ViewMaterialDateRangePickerComponent3(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import12.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'comparison-title');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import42.interpolateString0(_ctx.formattedComparison));
  }
}

import39.EmbeddedView<void> viewFactory_MaterialDateRangePickerComponent3(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDateRangePickerComponent3(parentView, parentIndex);
}

class _ViewMaterialDateRangePickerComponent4 extends import39.EmbeddedView<import2.MaterialDateRangePickerComponent> {
  final import40.TextBinding _textBinding_9 = import40.TextBinding();
  import45.ViewFocusTrapComponent0 _compView_0;
  import46.FocusTrapComponent _FocusTrapComponent_0_5;
  import47.ViewDateRangeEditorComponent0 _compView_2;
  import48.DateRangeEditorComponent _DateRangeEditorComponent_2_5;
  import49.ViewMaterialButtonComponent0 _compView_6;
  dynamic _AcxDarkTheme_6_5;
  import50.MaterialButtonComponent _MaterialButtonComponent_6_6;
  import49.ViewMaterialButtonComponent0 _compView_8;
  dynamic _AcxDarkTheme_8_5;
  import50.MaterialButtonComponent _MaterialButtonComponent_8_6;
  var _expr_0;
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
  import12.Element _el_0;
  import12.DivElement _el_3;
  _ViewMaterialDateRangePickerComponent4(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import45.ViewFocusTrapComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'popup-contents');
    this.addShimC(this._el_0);
    this._FocusTrapComponent_0_5 = import46.FocusTrapComponent();
    final doc = import12.document;
    final _el_1 = doc.createElement('div');
    this.updateChildClass(_el_1, 'wrapper');
    this.addShimC(_el_1);
    this._compView_2 = import47.ViewDateRangeEditorComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    _el_1.append(_el_2);
    this.addShimC(_el_2);
    this._DateRangeEditorComponent_2_5 = (import16.isDevMode
        ? import19.debugInjectorWrap(import48.DateRangeEditorComponent, () {
            return import48.DateRangeEditorComponent(_el_2, this.parentView.parentView.injectorGet(import20.DomService, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import26.NgZone, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import51.DateRangeEditorHost, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentView.parentIndex), this.parentView.parentView.injectorGet(import52.Clock, this.parentView.parentIndex));
          })
        : import48.DateRangeEditorComponent(_el_2, this.parentView.parentView.injectorGet(import20.DomService, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import26.NgZone, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import51.DateRangeEditorHost, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentView.parentIndex), this.parentView.parentView.injectorGet(import52.Clock, this.parentView.parentIndex)));
    this._compView_2.create(this._DateRangeEditorComponent_2_5);
    this.project(_el_1, 0);
    this._el_3 = import17.appendDiv(doc, _el_1);
    this.updateChildClass(this._el_3, 'apply-bar');
    this.addShimC(this._el_3);
    final _el_4 = import17.appendDiv(doc, this._el_3);
    this.updateChildClass(_el_4, 'separator');
    this.addShimC(_el_4);
    final _text_5 = import17.appendText(_el_4, ' ');
    this._compView_6 = import49.ViewMaterialButtonComponent0(this, 6);
    final _el_6 = this._compView_6.rootElement;
    this._el_3.append(_el_6);
    this.updateChildClassNonHtml(_el_6, 'cancel');
    this.addShimC(_el_6);
    this._AcxDarkTheme_6_5 = (import16.isDevMode
        ? import19.debugInjectorWrap(import53.AcxDarkTheme, () {
            return import53.AcxDarkTheme(this.parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), this.parentView.parentIndex));
          })
        : import53.AcxDarkTheme(this.parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), this.parentView.parentIndex)));
    this._MaterialButtonComponent_6_6 = import50.MaterialButtonComponent(_el_6, this._AcxDarkTheme_6_5, this._compView_6, null);
    final _text_7 = import17.createText(import42.interpolateString0(import2.MaterialDateRangePickerComponent.cancelButtonMsg));
    this._compView_6.createAndProject(this._MaterialButtonComponent_6_6, [
      [_text_7]
    ]);
    this._compView_8 = import49.ViewMaterialButtonComponent0(this, 8);
    final _el_8 = this._compView_8.rootElement;
    this._el_3.append(_el_8);
    this.updateChildClassNonHtml(_el_8, 'apply');
    this.addShimC(_el_8);
    this._AcxDarkTheme_8_5 = (import16.isDevMode
        ? import19.debugInjectorWrap(import53.AcxDarkTheme, () {
            return import53.AcxDarkTheme(this.parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), this.parentView.parentIndex));
          })
        : import53.AcxDarkTheme(this.parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), this.parentView.parentIndex)));
    this._MaterialButtonComponent_8_6 = import50.MaterialButtonComponent(_el_8, this._AcxDarkTheme_8_5, this._compView_8, null);
    this._compView_8.createAndProject(this._MaterialButtonComponent_8_6, [
      [this._textBinding_9.element]
    ]);
    this._compView_0.createAndProject(this._FocusTrapComponent_0_5, [
      [_el_1]
    ]);
    final subscription_0 = this._DateRangeEditorComponent_2_5.presetRangeSelected.listen(this.eventHandler1(_ctx.onRangeClicked));
    final subscription_1 = this._MaterialButtonComponent_6_6.trigger.listen(this.eventHandler1(_ctx.cancelAndPreventDefault));
    final subscription_2 = this._MaterialButtonComponent_8_6.trigger.listen(this.eventHandler1(_ctx.applyAndPreventDefault));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0, subscription_1, subscription_2]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((6 <= nodeIndex) && (nodeIndex <= 7))) {
      if (identical(token, import53.AcxDarkTheme)) {
        return this._AcxDarkTheme_6_5;
      }
      if (((identical(token, import50.MaterialButtonComponent) || identical(token, import18.ButtonDirective)) || identical(token, import34.HasDisabled))) {
        return this._MaterialButtonComponent_6_6;
      }
    }
    if (((8 <= nodeIndex) && (nodeIndex <= 9))) {
      if (identical(token, import53.AcxDarkTheme)) {
        return this._AcxDarkTheme_8_5;
      }
      if (((identical(token, import50.MaterialButtonComponent) || identical(token, import18.ButtonDirective)) || identical(token, import34.HasDisabled))) {
        return this._MaterialButtonComponent_8_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      if (!identical(_ctx.model, null)) {
        (this._DateRangeEditorComponent_2_5.model = _ctx.model);
      }
    }
    final currVal_2 = _ctx.allowHighlightUpdates;
    if (import16.checkBinding(this._expr_2, currVal_2, 'allowHighlightUpdates', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.allowHighlightUpdates = currVal_2;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.supportsComparison;
    if (import16.checkBinding(this._expr_3, currVal_3, 'supportsComparison', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.supportsComparison = currVal_3;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.compact;
    if (import16.checkBinding(this._expr_4, currVal_4, 'compact', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.compact = currVal_4;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.movingStartMaintainsLength;
    if (import16.checkBinding(this._expr_5, currVal_5, 'movingStartMaintainsLength', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.movingStartMaintainsLength = currVal_5;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.supportsDaysInputs;
    if (import16.checkBinding(this._expr_6, currVal_6, 'supportsDaysInputs', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.supportsDaysInputs = currVal_6;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.dateFormat;
    if (import16.checkBinding(this._expr_7, currVal_7, 'dateFormat', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.dateFormat = currVal_7;
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.activeDateFormat;
    if (import16.checkBinding(this._expr_8, currVal_8, 'activeDateFormat', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.activeDateFormat = currVal_8;
      this._expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.supportsClearRange;
    if (import16.checkBinding(this._expr_9, currVal_9, 'supportsClearRange', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.supportsClearRange = currVal_9;
      this._expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.supportsCustomRange;
    if (import16.checkBinding(this._expr_10, currVal_10, 'supportsCustomRange', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.supportsCustomRange = currVal_10;
      this._expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.relativeDaysToToday;
    if (import16.checkBinding(this._expr_11, currVal_11, 'relativeDaysToToday', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.relativeDaysToToday = currVal_11;
      this._expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.useMenuForPresets;
    if (import16.checkBinding(this._expr_12, currVal_12, 'useMenuForPresets', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.useMenuForPresets = currVal_12;
      this._expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.presets;
    if (import16.checkBinding(this._expr_13, currVal_13, 'presets', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.presets = currVal_13;
      this._expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.minDate;
    if (import16.checkBinding(this._expr_14, currVal_14, 'minDate', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.minDate = currVal_14;
      this._expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.maxDate;
    if (import16.checkBinding(this._expr_15, currVal_15, 'maxDate', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.maxDate = currVal_15;
      this._expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.isCalendarCreated;
    if (import16.checkBinding(this._expr_16, currVal_16, 'isCalendarCreated', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      this._DateRangeEditorComponent_2_5.isCalendarCreated = currVal_16;
      this._expr_16 = currVal_16;
    }
    if (((!import16.debugThrowIfChanged) && firstCheck)) {
      this._DateRangeEditorComponent_2_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      this._compView_6.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      this._compView_8.markAsCheckOnce();
    }
    final currVal_0 = _ctx.compact;
    if (import16.checkBinding(this._expr_0, currVal_0, 'compact', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      import17.updateClassBindingNonHtml(this._el_0, 'compact', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_2.detectHostChanges(firstCheck);
    final currVal_17 = _ctx.applyBarVisible;
    if (import16.checkBinding(this._expr_17, currVal_17, 'applyBarVisible', 'package:angular_components/material_datepicker/material_date_range_picker.html')) {
      import17.updateClassBinding(this._el_3, 'visible', currVal_17);
      this._expr_17 = currVal_17;
    }
    this._compView_6.detectHostChanges(firstCheck);
    this._compView_8.detectHostChanges(firstCheck);
    this._textBinding_9.updateText(import42.interpolateString0(_ctx.applyButtonMsg));
    this._compView_0.detectChanges();
    this._compView_2.detectChanges();
    this._compView_6.detectChanges();
    this._compView_8.detectChanges();
    if ((!import16.debugThrowIfChanged)) {
      if (firstCheck) {
        this._DateRangeEditorComponent_2_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_2.destroyInternalState();
    this._compView_6.destroyInternalState();
    this._compView_8.destroyInternalState();
    this._FocusTrapComponent_0_5.ngOnDestroy();
  }
}

import39.EmbeddedView<void> viewFactory_MaterialDateRangePickerComponent4(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDateRangePickerComponent4(parentView, parentIndex);
}

final List<dynamic> styles$MaterialDateRangePickerComponentHost = const [];

class _ViewMaterialDateRangePickerComponentHost0 extends import54.HostView<import2.MaterialDateRangePickerComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialDateRangePickerComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import16.isDevMode
        ? import19.debugInjectorWrap(import2.MaterialDateRangePickerComponent, () {
            return import2.MaterialDateRangePickerComponent(this.injectorGetOptional(const import29.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), this.injectorGet(import52.Clock, this.parentIndex), this.injectorGetOptional(import55.DatepickerConfig, this.parentIndex), null, this.injectorGetOptional(import32.PopupSizeProvider, this.parentIndex), _el_0, this.injectorGet(import20.DomService, this.parentIndex), this.injectorGet(import26.NgZone, this.parentIndex));
          })
        : import2.MaterialDateRangePickerComponent(this.injectorGetOptional(const import29.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), this.injectorGet(import52.Clock, this.parentIndex), this.injectorGetOptional(import55.DatepickerConfig, this.parentIndex), null, this.injectorGetOptional(import32.PopupSizeProvider, this.parentIndex), _el_0, this.injectorGet(import20.DomService, this.parentIndex), this.injectorGet(import26.NgZone, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((((identical(token, import51.DateRangeEditorHost) || identical(token, import23.Focusable)) || identical(token, import34.HasDisabled)) || identical(token, import32.PopupSizeProvider)) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import16.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import54.HostView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponentHost0() {
  return _ViewMaterialDateRangePickerComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDateRangePickerComponent, createMaterialDateRangePickerComponentFactory());
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
}
