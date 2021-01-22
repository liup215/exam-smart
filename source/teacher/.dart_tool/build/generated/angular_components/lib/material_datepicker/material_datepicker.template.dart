// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_datepicker.dart';
export 'material_datepicker.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref4;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref5;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref6;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref7;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref8;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref9;
import 'package:angular_components/material_datepicker/date_input.template.dart' as _ref10;
import 'package:angular_components/material_datepicker/material_calendar_picker.template.dart' as _ref11;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref12;
import 'package:angular_components/material_datepicker/range.template.dart' as _ref13;
import 'package:angular_components/material_input/material_input.template.dart' as _ref14;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref15;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref16;
import 'package:angular_components/material_select/dropdown_button.template.dart' as _ref17;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref18;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref19;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref20;
import 'package:angular_components/model/date/date.template.dart' as _ref21;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref22;
import 'package:angular_components/material_datepicker/material_datepicker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_datepicker.dart' as import2;
import '../src/laminate/popup/popup_source_directive.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../material_select/dropdown_button.template.dart' as import6;
import '../material_select/dropdown_button.dart' as import7;
import '../material_popup/material_popup.template.dart' as import8;
import '../material_popup/material_popup.dart' as import9;
import '../focus/focus_trap.template.dart' as import10;
import '../focus/focus_trap.dart' as import11;
import '../content/deferred_content.dart' as import12;
import 'dart:html' as import13;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import14;
import 'package:angular/src/core/linker/views/view.dart' as import15;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import17;
import 'package:angular/src/runtime/dom_helpers.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import '../src/laminate/popup/dom_popup_source.dart' as import20;
import '../utils/angular/reference/reference.dart' as import21;
import '../focus/focus_interface.dart' as import22;
import 'package:angular/src/core/linker/template_ref.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import24;
import 'package:angular/src/core/zone/ng_zone.dart' as import25;
import '../src/laminate/overlay/overlay_service.dart' as import26;
import '../utils/browser/dom_service/dom_service.dart' as import27;
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
import 'package:angular/src/runtime/queries.dart' as import38;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import40;
import 'package:angular/src/runtime/text_binding.dart' as import41;
import 'package:angular/src/core/linker/views/render_view.dart' as import42;
import 'package:angular/src/runtime/interpolate.dart' as import43;
import '../material_input/material_input.template.dart' as import44;
import '../material_input/deferred_validator.dart' as import45;
import '../material_input/material_input.dart' as import46;
import '../focus/focus.dart' as import47;
import 'date_input.dart' as import48;
import '../material_input/material_input_default_value_accessor.dart' as import49;
import 'material_calendar_picker.template.dart' as import50;
import 'material_calendar_picker.dart' as import51;
import 'package:angular/src/common/directives/ng_class.dart' as import52;
import '../laminate/components/modal/modal.dart' as import53;
import 'package:quiver/src/time/clock.dart' as import54;
import '../material_input/base_material_input.dart' as import55;
import 'package:angular/src/common/directives/ng_for.dart' as import56;
import '../material_select/material_select_item.template.dart' as import57;
import '../material_select/material_select_item.dart' as import58;
import '../material_select/activation_handler.dart' as import59;
import '../model/selection/selection_container.dart' as import60;
import '../model/ui/has_renderer.dart' as import61;
import 'range.dart' as import62;
import 'package:angular/src/core/linker/views/host_view.dart' as import63;

final List<dynamic> styles$MaterialDatepickerComponent = [import0.styles];

class ViewMaterialDatepickerComponent0 extends import1.ComponentView<import2.MaterialDatepickerComponent> {
  bool _viewQuery_MaterialInputComponent_1_isDirty = true;
  bool _query_AutoFocusDirective_4_0_isDirty = true;
  import3.PopupSourceDirective _PopupSourceDirective_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import6.ViewDropdownButtonComponent0 _compView_2;
  import7.DropdownButtonComponent _DropdownButtonComponent_2_5;
  import8.ViewMaterialPopupComponent0 _compView_3;
  ViewContainer _appEl_3;
  import9.MaterialPopupComponent _MaterialPopupComponent_3_8;
  dynamic __PopupRef_3_10;
  dynamic __PopupHierarchy_3_12;
  import10.ViewFocusTrapComponent0 _compView_4;
  import11.FocusTrapComponent _FocusTrapComponent_4_5;
  ViewContainer _appEl_5;
  import12.DeferredContentDirective _DeferredContentDirective_5_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_10;
  import13.Element _el_2;
  import13.Element _el_3;
  static import14.ComponentStyles _componentStyles;
  ViewMaterialDatepickerComponent0(import15.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import13.document.createElement('material-datepicker');
  }
  dynamic get _PopupRef_3_10 {
    if ((this.__PopupRef_3_10 == null)) {
      (this.__PopupRef_3_10 = import9.getResolvedPopupRef(this._MaterialPopupComponent_3_8));
    }
    return this.__PopupRef_3_10;
  }

  dynamic get _PopupHierarchy_3_12 {
    if ((this.__PopupHierarchy_3_12 == null)) {
      (this.__PopupHierarchy_3_12 = import9.getHierarchy(this._MaterialPopupComponent_3_8));
    }
    return this.__PopupHierarchy_3_12;
  }

  static String get _debugComponentUrl {
    return (import17.isDevMode ? 'asset:angular_components/lib/material_datepicker/material_datepicker.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import13.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import13.document;
    final _el_0 = import18.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'main-content');
    import18.setAttribute(_el_0, 'popupSource', '');
    this.addShimC(_el_0);
    this._PopupSourceDirective_0_5 = (import17.isDevMode
        ? import19.debugInjectorWrap(import3.PopupSourceDirective, () {
            return import3.PopupSourceDirective(this.parentView.injectorGet(import20.DomPopupSourceFactory, this.parentIndex), _el_0, this.parentView.injectorGetOptional(import21.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import22.Focusable, this.parentIndex), null);
          })
        : import3.PopupSourceDirective(this.parentView.injectorGet(import20.DomPopupSourceFactory, this.parentIndex), _el_0, this.parentView.injectorGetOptional(import21.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import22.Focusable, this.parentIndex), null));
    final _anchor_1 = import18.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialDatepickerComponent1);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    this._compView_2 = import6.ViewDropdownButtonComponent0(this, 2);
    this._el_2 = this._compView_2.rootElement;
    _el_0.append(this._el_2);
    this.updateChildClassNonHtml(this._el_2, 'menu-lookalike primary-range');
    this.addShimC(this._el_2);
    this._DropdownButtonComponent_2_5 = import7.DropdownButtonComponent();
    this._compView_2.createAndProject(this._DropdownButtonComponent_2_5, [const []]);
    this._compView_3 = import8.ViewMaterialPopupComponent0(this, 3);
    this._el_3 = this._compView_3.rootElement;
    parentRenderNode.append(this._el_3);
    import18.setAttribute(this._el_3, 'enforceSpaceConstraints', '');
    this.addShimC(this._el_3);
    this._appEl_3 = ViewContainer(3, null, this, this._el_3);
    this._MaterialPopupComponent_3_8 = (import17.isDevMode
        ? import19.debugInjectorWrap(import9.MaterialPopupComponent, () {
            return import9.MaterialPopupComponent(this.parentView.injectorGetOptional(import24.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import9.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import25.NgZone, this.parentIndex), this.parentView.injectorGet(import26.OverlayService, this.parentIndex), this.parentView.injectorGet(import27.DomService, this.parentIndex), this.parentView.injectorGet(import28.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<List<import31.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import32.PopupSizeProvider, this.parentIndex), this._compView_3, this._appEl_3, ElementRef(this._el_3));
          })
        : import9.MaterialPopupComponent(this.parentView.injectorGetOptional(import24.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import9.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import25.NgZone, this.parentIndex), this.parentView.injectorGet(import26.OverlayService, this.parentIndex), this.parentView.injectorGet(import27.DomService, this.parentIndex), this.parentView.injectorGet(import28.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<List<import31.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import32.PopupSizeProvider, this.parentIndex), this._compView_3, this._appEl_3, ElementRef(this._el_3)));
    this._compView_4 = import10.ViewFocusTrapComponent0(this, 4);
    final _el_4 = this._compView_4.rootElement;
    this.addShimC(_el_4);
    this._FocusTrapComponent_4_5 = import11.FocusTrapComponent();
    final _anchor_5 = import18.createAnchor();
    this._appEl_5 = ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_MaterialDatepickerComponent2);
    this._DeferredContentDirective_5_9 = import12.DeferredContentDirective(this._appEl_5, _TemplateRef_5_8, this._MaterialPopupComponent_3_8, this);
    this._compView_4.createAndProject(this._FocusTrapComponent_4_5, [
      [this._appEl_5]
    ]);
    this._compView_3.createAndProject(this._MaterialPopupComponent_3_8, [
      const [],
      [_el_4],
      const []
    ]);
    final subscription_0 = this._DropdownButtonComponent_2_5.trigger.listen(this.eventHandler0(_ctx.onTrigger));
    final subscription_1 = this._MaterialPopupComponent_3_8.onVisible.listen(this.eventHandler1(this._handleEvent_0));
    import15.View.queryChangeDetectorRefs[this._DropdownButtonComponent_2_5] = this._compView_2;
    _ctx.dropdownButton = this._DropdownButtonComponent_2_5;
    this.initSubscriptions([subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import34.HasDisabled) || identical(token, import22.Focusable)) && (2 == nodeIndex))) {
      return this._DropdownButtonComponent_2_5;
    }
    if (((3 <= nodeIndex) && (nodeIndex <= 5))) {
      if (((identical(token, import9.MaterialPopupComponent) || identical(token, import35.DeferredContentAware)) || identical(token, import36.DropdownHandle))) {
        return this._MaterialPopupComponent_3_8;
      }
      if (identical(token, import37.PopupRef)) {
        return this._PopupRef_3_10;
      }
      if (identical(token, import24.PopupHierarchy)) {
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
    final import3.PopupSourceDirective local_container = this._PopupSourceDirective_0_5;
    this._NgIf_1_9.ngIf = _ctx.presetDates.isNotEmpty;
    changed = false;
    final currVal_1 = _ctx.formattedDate;
    if (import17.checkBinding(this._expr_1, currVal_1, 'formattedDate', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._DropdownButtonComponent_2_5.buttonText = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import17.checkBinding(this._expr_2, currVal_2, 'disabled', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._DropdownButtonComponent_2_5.disabled = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.error;
    if (import17.checkBinding(this._expr_3, currVal_3, 'error', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._DropdownButtonComponent_2_5.error = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
    if (((!import17.debugThrowIfChanged) && firstCheck)) {
      this._DropdownButtonComponent_2_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialPopupComponent_3_8.enforceSpaceConstraints = true;
      changed = true;
    }
    final currVal_6 = _ctx.preferredPositions;
    if (import17.checkBinding(this._expr_6, currVal_6, 'preferredPositions', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._MaterialPopupComponent_3_8.preferredPositions = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = local_container;
    if (import17.checkBinding(this._expr_7, currVal_7, 'container', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._MaterialPopupComponent_3_8.source = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.popupVisible;
    if (import17.checkBinding(this._expr_8, currVal_8, 'popupVisible', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._MaterialPopupComponent_3_8.visible = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    if (changed) {
      this._compView_3.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._DeferredContentDirective_5_9.preserveDimensions = true);
    }
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    if ((!import17.debugThrowIfChanged)) {
      if (this._query_AutoFocusDirective_4_0_isDirty) {
        this._FocusTrapComponent_4_5.autoFocus = import38.firstOrNull(this._appEl_5.mapNestedViewsWithSingleResult((_ViewMaterialDatepickerComponent2 nestedView) {
          return nestedView._AutoFocusDirective_4_8;
        }));
        this._query_AutoFocusDirective_4_0_isDirty = false;
      }
      if (this._viewQuery_MaterialInputComponent_1_isDirty) {
        _ctx.textInput = import38.firstOrNull(this._appEl_5.mapNestedViewsWithSingleResult((_ViewMaterialDatepickerComponent2 nestedView) {
          import15.View.queryChangeDetectorRefs[nestedView._MaterialInputComponent_4_6] = nestedView._compView_4;
          return nestedView._MaterialInputComponent_4_6;
        }));
        this._viewQuery_MaterialInputComponent_1_isDirty = false;
      }
    }
    final currVal_0 = _ctx.ariaLabelForDropdownButton;
    if (import17.checkBinding(this._expr_0, currVal_0, 'ariaLabelForDropdownButton', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      import18.updateAttribute(this._el_2, 'aria-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    if (firstCheck) {
      if (!identical(_ctx.popupClassName, null)) {
        this._compView_3.updateChildClassNonHtml(this._el_3, _ctx.popupClassName);
      }
    }
    this._compView_3.detectHostChanges(firstCheck);
    this._compView_2.detectChanges();
    this._compView_3.detectChanges();
    this._compView_4.detectChanges();
    if ((!import17.debugThrowIfChanged)) {
      if (firstCheck) {
        this._PopupSourceDirective_0_5.ngAfterViewInit();
        this._MaterialPopupComponent_3_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._compView_2.destroyInternalState();
    this._compView_3.destroyInternalState();
    this._compView_4.destroyInternalState();
    this._PopupSourceDirective_0_5.ngOnDestroy();
    this._DeferredContentDirective_5_9.ngOnDestroy();
    this._FocusTrapComponent_4_5.ngOnDestroy();
    this._MaterialPopupComponent_3_8.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.popupVisible = $event;
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_10 = _ctx.compact;
    if (import17.checkBinding(this._expr_10, currVal_10, null, null)) {
      import18.updateClassBindingNonHtml(this.rootElement, 'compact', currVal_10);
      this._expr_10 = currVal_10;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import14.ComponentStyles.scoped(styles$MaterialDatepickerComponent, _debugComponentUrl));
      if (import17.isDevMode) {
        import14.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialDatepickerComponentNgFactory = ComponentFactory<import2.MaterialDatepickerComponent>('material-datepicker', viewFactory_MaterialDatepickerComponentHost0);
ComponentFactory<import2.MaterialDatepickerComponent> get MaterialDatepickerComponentNgFactory {
  return _MaterialDatepickerComponentNgFactory;
}

ComponentFactory<import2.MaterialDatepickerComponent> createMaterialDatepickerComponentFactory() {
  return ComponentFactory('material-datepicker', viewFactory_MaterialDatepickerComponentHost0);
}

class _ViewMaterialDatepickerComponent1 extends import40.EmbeddedView<import2.MaterialDatepickerComponent> {
  final import41.TextBinding _textBinding_1 = import41.TextBinding();
  _ViewMaterialDatepickerComponent1(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import13.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'primary-label');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import43.interpolateString0(_ctx.labelMsg));
  }
}

import40.EmbeddedView<void> viewFactory_MaterialDatepickerComponent1(import42.RenderView parentView, int parentIndex) {
  return _ViewMaterialDatepickerComponent1(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent2 extends import40.EmbeddedView<import2.MaterialDatepickerComponent> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import44.ViewMaterialInputComponent0 _compView_4;
  import45.DeferredValidator _DeferredValidator_4_5;
  import46.MaterialInputComponent _MaterialInputComponent_4_6;
  import47.AutoFocusDirective _AutoFocusDirective_4_8;
  import48.DateInputDirective _DateInputDirective_4_9;
  import49.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_4_11;
  List<dynamic> __NgValidators_4_12;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  import50.ViewMaterialCalendarPickerComponent0 _compView_6;
  import51.MaterialCalendarPickerComponent _MaterialCalendarPickerComponent_6_5;
  import52.NgClass _NgClass_6_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  var _expr_11;
  var _expr_13;
  import13.DivElement _el_0;
  _ViewMaterialDatepickerComponent2(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  List<dynamic> get _NgValidators_4_12 {
    if ((this.__NgValidators_4_12 == null)) {
      (this.__NgValidators_4_12 = [this._DeferredValidator_4_5]);
    }
    return this.__NgValidators_4_12;
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import13.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'popup-content');
    this.addShimC(this._el_0);
    final _el_1 = import18.appendDiv(doc, this._el_0);
    this.updateChildClass(_el_1, 'inner-label-wrapper');
    this.addShimC(_el_1);
    final _anchor_2 = import18.appendAnchor(_el_1);
    this._appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialDatepickerComponent3);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _el_3 = import18.appendDiv(doc, this._el_0);
    this.updateChildClass(_el_3, 'date-input');
    this.addShimC(_el_3);
    this._compView_4 = import44.ViewMaterialInputComponent0(this, 4);
    final _el_4 = this._compView_4.rootElement;
    _el_3.append(_el_4);
    import18.setAttribute(_el_4, 'autoFocus', '');
    import18.setAttribute(_el_4, 'dateParsing', '');
    import18.setAttribute(_el_4, 'type', 'text');
    this.addShimC(_el_4);
    this._DeferredValidator_4_5 = import45.DeferredValidator();
    this._MaterialInputComponent_4_6 = import46.MaterialInputComponent('text', null, null, this._compView_4, this._DeferredValidator_4_5);
    this._AutoFocusDirective_4_8 = (import17.isDevMode
        ? import19.debugInjectorWrap(import47.AutoFocusDirective, () {
            return import47.AutoFocusDirective(_el_4, this.parentView.parentView.injectorGet(import27.DomService, this.parentView.parentIndex), this._MaterialInputComponent_4_6, this.parentView.parentView.injectorGetOptional(import53.ModalComponent, this.parentView.parentIndex), import17.unsafeCast<ViewMaterialDatepickerComponent0>(this.parentView)._PopupRef_3_10);
          })
        : import47.AutoFocusDirective(_el_4, this.parentView.parentView.injectorGet(import27.DomService, this.parentView.parentIndex), this._MaterialInputComponent_4_6, this.parentView.parentView.injectorGetOptional(import53.ModalComponent, this.parentView.parentIndex), import17.unsafeCast<ViewMaterialDatepickerComponent0>(this.parentView)._PopupRef_3_10));
    this._DateInputDirective_4_9 = (import17.isDevMode
        ? import19.debugInjectorWrap(import48.DateInputDirective, () {
            return import48.DateInputDirective(this.parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentView.parentIndex), this.parentView.parentView.injectorGet(import54.Clock, this.parentView.parentIndex), this._MaterialInputComponent_4_6);
          })
        : import48.DateInputDirective(this.parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentView.parentIndex), this.parentView.parentView.injectorGet(import54.Clock, this.parentView.parentIndex), this._MaterialInputComponent_4_6));
    this._MaterialInputDefaultValueAccessor_4_11 = import49.MaterialInputDefaultValueAccessor(this._MaterialInputComponent_4_6, null);
    this._compView_4.createAndProject(this._MaterialInputComponent_4_6, [const [], const []]);
    final _anchor_5 = import18.appendAnchor(this._el_0);
    this._appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_MaterialDatepickerComponent4);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    this._compView_6 = import50.ViewMaterialCalendarPickerComponent0(this, 6);
    final _el_6 = this._compView_6.rootElement;
    this._el_0.append(_el_6);
    import18.setAttribute(_el_6, 'aria-hidden', 'true');
    this.updateChildClassNonHtml(_el_6, 'calendar-picker');
    import18.setAttribute(_el_6, 'mode', 'single-date');
    this.addShimC(_el_6);
    this._MaterialCalendarPickerComponent_6_5 = (import17.isDevMode
        ? import19.debugInjectorWrap(import51.MaterialCalendarPickerComponent, () {
            return import51.MaterialCalendarPickerComponent(this.parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentView.parentIndex), this.parentView.parentView.injectorGet(import54.Clock, this.parentView.parentIndex), 'single-date');
          })
        : import51.MaterialCalendarPickerComponent(this.parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentView.parentIndex), this.parentView.parentView.injectorGet(import54.Clock, this.parentView.parentIndex), 'single-date'));
    this._NgClass_6_6 = import52.NgClass(_el_6);
    this._compView_6.create(this._MaterialCalendarPickerComponent_6_5);
    this._el_0.addEventListener('keyup', this.eventHandler1(_ctx.onKeyUp));
    final subscription_0 = this._DateInputDirective_4_9.dateChange.listen(this.eventHandler1(_ctx.setDateFromInput));
    final subscription_1 = this._MaterialCalendarPickerComponent_6_5.stateChange.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((4 == nodeIndex)) {
      if (identical(token, import45.DeferredValidator)) {
        return this._DeferredValidator_4_5;
      }
      if (((((identical(token, import46.MaterialInputComponent) || identical(token, import22.Focusable)) || identical(token, import55.BaseMaterialInput)) || identical(token, import21.ReferenceDirective)) || identical(token, import34.HasDisabled))) {
        return this._MaterialInputComponent_4_6;
      }
      if (identical(token, const import29.MultiToken<dynamic>('NgValidators'))) {
        return this._NgValidators_4_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    this._NgIf_2_9.ngIf = _ctx.presetDates.isNotEmpty;
    changed = false;
    final currVal_1 = _ctx.placeholderMsg;
    if (import17.checkBinding(this._expr_1, currVal_1, 'placeholderMsg', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._MaterialInputComponent_4_6.label = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.required;
    if (import17.checkBinding(this._expr_2, currVal_2, 'required', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._MaterialInputComponent_4_6.required = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_4.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._AutoFocusDirective_4_8.autoFocus = true);
    }
    if (((!import17.debugThrowIfChanged) && firstCheck)) {
      this._AutoFocusDirective_4_8.ngOnInit();
    }
    final currVal_4 = _ctx.outputFormat;
    if (import17.checkBinding(this._expr_4, currVal_4, 'outputFormat', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._DateInputDirective_4_9.dateFormat = currVal_4;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.maxDate;
    if (import17.checkBinding(this._expr_5, currVal_5, 'maxDate', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._DateInputDirective_4_9.maxDate = currVal_5;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.minDate;
    if (import17.checkBinding(this._expr_6, currVal_6, 'minDate', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._DateInputDirective_4_9.minDate = currVal_6;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.date;
    if (import17.checkBinding(this._expr_7, currVal_7, 'date', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._DateInputDirective_4_9.date = currVal_7;
      this._expr_7 = currVal_7;
    }
    this._NgIf_5_9.ngIf = _ctx.presetDates.isNotEmpty;
    changed = false;
    final currVal_8 = _ctx.calendar;
    if (import17.checkBinding(this._expr_8, currVal_8, 'calendar', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._MaterialCalendarPickerComponent_6_5.state = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.minDate;
    if (import17.checkBinding(this._expr_9, currVal_9, 'minDate', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._MaterialCalendarPickerComponent_6_5.minDate = currVal_9;
      changed = true;
      this._expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.maxDate;
    if (import17.checkBinding(this._expr_10, currVal_10, 'maxDate', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._MaterialCalendarPickerComponent_6_5.maxDate = currVal_10;
      changed = true;
      this._expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.compact;
    if (import17.checkBinding(this._expr_11, currVal_11, 'compact', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._MaterialCalendarPickerComponent_6_5.compact = currVal_11;
      changed = true;
      this._expr_11 = currVal_11;
    }
    if (changed) {
      this._compView_6.markAsCheckOnce();
    }
    if (changed) {
      this._MaterialCalendarPickerComponent_6_5.ngAfterChanges();
    }
    if (((!import17.debugThrowIfChanged) && firstCheck)) {
      this._MaterialCalendarPickerComponent_6_5.ngOnInit();
    }
    if (firstCheck) {
      (this._NgClass_6_6.initialClasses = 'calendar-picker');
    }
    final currVal_13 = _ctx.calendarWeekRowsStyle;
    if (import17.checkBinding(this._expr_13, currVal_13, 'calendarWeekRowsStyle', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._NgClass_6_6.rawClass = currVal_13;
      this._expr_13 = currVal_13;
    }
    if ((!import17.debugThrowIfChanged)) {
      this._NgClass_6_6.ngDoCheck();
    }
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    final currVal_0 = _ctx.compact;
    if (import17.checkBinding(this._expr_0, currVal_0, 'compact', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      import18.updateClassBinding(this._el_0, 'compact', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_6.detectHostChanges(firstCheck);
    this._compView_4.detectChanges();
    this._compView_6.detectChanges();
    if ((!import17.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialInputComponent_4_6.ngAfterViewInit();
        this._MaterialCalendarPickerComponent_6_5.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import17.unsafeCast<ViewMaterialDatepickerComponent0>(this.parentView)._viewQuery_MaterialInputComponent_1_isDirty = true;
    import17.unsafeCast<ViewMaterialDatepickerComponent0>(this.parentView)._query_AutoFocusDirective_4_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._compView_4.destroyInternalState();
    this._compView_6.destroyInternalState();
    this._MaterialInputComponent_4_6.ngOnDestroy();
    this._AutoFocusDirective_4_8.ngOnDestroy();
    this._DateInputDirective_4_9.ngOnDestroy();
    this._MaterialInputDefaultValueAccessor_4_11.ngOnDestroy();
    this._MaterialCalendarPickerComponent_6_5.ngOnDestroy();
    this._NgClass_6_6.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.calendar = $event;
  }
}

import40.EmbeddedView<void> viewFactory_MaterialDatepickerComponent2(import42.RenderView parentView, int parentIndex) {
  return _ViewMaterialDatepickerComponent2(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent3 extends import40.EmbeddedView<import2.MaterialDatepickerComponent> {
  final import41.TextBinding _textBinding_1 = import41.TextBinding();
  _ViewMaterialDatepickerComponent3(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import13.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'inner-label');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import43.interpolateString0(_ctx.labelMsg));
  }
}

import40.EmbeddedView<void> viewFactory_MaterialDatepickerComponent3(import42.RenderView parentView, int parentIndex) {
  return _ViewMaterialDatepickerComponent3(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent4 extends import40.EmbeddedView<import2.MaterialDatepickerComponent> {
  ViewContainer _appEl_1;
  import56.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMaterialDatepickerComponent4(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import13.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'preset-dates-wrapper');
    import18.setAttribute(_el_0, 'role', 'listbox');
    this.addShimC(_el_0);
    final _anchor_1 = import18.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialDatepickerComponent5);
    this._NgFor_1_9 = import56.NgFor(this._appEl_1, _TemplateRef_1_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.presetDates;
    if (import17.checkBinding(this._expr_0, currVal_0, 'presetDates', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._NgFor_1_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import17.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import40.EmbeddedView<void> viewFactory_MaterialDatepickerComponent4(import42.RenderView parentView, int parentIndex) {
  return _ViewMaterialDatepickerComponent4(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent5 extends import40.EmbeddedView<import2.MaterialDatepickerComponent> {
  final import41.TextBinding _textBinding_1 = import41.TextBinding();
  import57.ViewMaterialSelectItemComponent0 _compView_0;
  import58.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  var _expr_0;
  _ViewMaterialDatepickerComponent5(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import57.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._MaterialSelectItemComponent_0_5 = (import17.isDevMode
        ? import19.debugInjectorWrap(import58.MaterialSelectItemComponent, () {
            return import58.MaterialSelectItemComponent(_el_0, import17.unsafeCast<ViewMaterialDatepickerComponent0>(this.parentView.parentView.parentView)._MaterialPopupComponent_3_8, this.parentView.parentView.parentView.parentView.injectorGetOptional(import59.ActivationHandler, this.parentView.parentView.parentView.parentIndex), this._compView_0, null);
          })
        : import58.MaterialSelectItemComponent(_el_0, import17.unsafeCast<ViewMaterialDatepickerComponent0>(this.parentView.parentView.parentView)._MaterialPopupComponent_3_8, this.parentView.parentView.parentView.parentView.injectorGetOptional(import59.ActivationHandler, this.parentView.parentView.parentView.parentIndex), this._compView_0, null));
    this._compView_0.createAndProject(this._MaterialSelectItemComponent_0_5, [
      [this._textBinding_1.element]
    ]);
    final subscription_0 = this._MaterialSelectItemComponent_0_5.trigger.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import60.SelectionItem) || identical(token, import34.HasDisabled)) || identical(token, import61.HasRenderer)) && (nodeIndex <= 1))) {
      return this._MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_presetDate = import17.unsafeCast<import62.SingleDayRange>(this.locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      this._MaterialSelectItemComponent_0_5.closeOnActivate = false;
      changed = true;
    }
    final currVal_0 = _ctx.isPresetDateSelected(local_presetDate);
    if (import17.checkBinding(this._expr_0, currVal_0, 'isPresetDateSelected(presetDate)', 'package:angular_components/material_datepicker/material_datepicker.html')) {
      this._MaterialSelectItemComponent_0_5.selected = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._textBinding_1.updateText(import43.interpolateString0(local_presetDate.title));
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialSelectItemComponent_0_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final local_presetDate = import17.unsafeCast<import62.SingleDayRange>(this.locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.onPresetClicked(local_presetDate);
  }
}

import40.EmbeddedView<void> viewFactory_MaterialDatepickerComponent5(import42.RenderView parentView, int parentIndex) {
  return _ViewMaterialDatepickerComponent5(parentView, parentIndex);
}

final List<dynamic> styles$MaterialDatepickerComponentHost = const [];

class _ViewMaterialDatepickerComponentHost0 extends import63.HostView<import2.MaterialDatepickerComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialDatepickerComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import17.isDevMode
        ? import19.debugInjectorWrap(import2.MaterialDatepickerComponent, () {
            return import2.MaterialDatepickerComponent(_el_0, null, this.injectorGetOptional(const import29.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex));
          })
        : import2.MaterialDatepickerComponent(_el_0, null, this.injectorGetOptional(const import29.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import34.HasDisabled) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
    if ((!import17.debugThrowIfChanged)) {
      if (firstCheck) {
        this.component.ngAfterViewInit();
      }
    }
  }
}

import63.HostView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponentHost0() {
  return _ViewMaterialDatepickerComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDatepickerComponent, createMaterialDatepickerComponentFactory());
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
}
