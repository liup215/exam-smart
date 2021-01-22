// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'date_range_input.dart';
export 'date_range_input.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref1;
import 'package:angular_components/material_datepicker/date_input.template.dart' as _ref2;
import 'package:angular_components/material_input/material_input.template.dart' as _ref3;
import 'package:angular_components/model/date/date.template.dart' as _ref4;
import 'package:angular_components/model/observable/observable.template.dart' as _ref5;
import 'package:angular_components/material_datepicker/date_range_input.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'date_range_input.dart' as import2;
import '../material_input/material_input.template.dart' as import3;
import '../material_input/deferred_validator.dart' as import4;
import '../material_input/material_input.dart' as import5;
import 'date_input.dart' as import6;
import '../material_input/material_input_default_value_accessor.dart' as import7;
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/views/view.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/src/runtime/interpolate.dart' as import13;
import 'package:angular/src/runtime/dom_helpers.dart' as import14;
import 'package:angular/src/di/errors.dart' as import15;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import16;
import 'package:quiver/src/time/clock.dart' as import17;
import '../material_input/base_material_input.dart' as import18;
import '../utils/angular/reference/reference.dart' as import19;
import '../focus/focus_interface.dart' as import20;
import '../interfaces/has_disabled.dart' as import21;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import23;

final List<dynamic> styles$DateRangeInputComponent = [import0.styles];

class ViewDateRangeInputComponent0 extends import1.ComponentView<import2.DateRangeInputComponent> {
  import3.ViewMaterialInputComponent0 _compView_0;
  import4.DeferredValidator _DeferredValidator_0_5;
  import5.MaterialInputComponent _MaterialInputComponent_0_6;
  import6.DateInputDirective _DateInputDirective_0_7;
  import7.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_9;
  List<dynamic> __NgValidators_0_10;
  import3.ViewMaterialInputComponent0 _compView_3;
  import4.DeferredValidator _DeferredValidator_3_5;
  import5.MaterialInputComponent _MaterialInputComponent_3_6;
  import6.DateInputDirective _DateInputDirective_3_7;
  import7.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_3_9;
  List<dynamic> __NgValidators_3_10;
  var _expr_0;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  import8.Element _el_0;
  import8.Element _el_3;
  static import9.ComponentStyles _componentStyles;
  ViewDateRangeInputComponent0(import10.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('date-range-input');
  }
  List<dynamic> get _NgValidators_0_10 {
    if ((this.__NgValidators_0_10 == null)) {
      (this.__NgValidators_0_10 = [this._DeferredValidator_0_5]);
    }
    return this.__NgValidators_0_10;
  }

  List<dynamic> get _NgValidators_3_10 {
    if ((this.__NgValidators_3_10 == null)) {
      (this.__NgValidators_3_10 = [this._DeferredValidator_3_5]);
    }
    return this.__NgValidators_3_10;
  }

  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:angular_components/lib/material_datepicker/date_range_input.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import3.ViewMaterialInputComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    parentRenderNode.append(this._el_0);
    this.updateChildClassNonHtml(this._el_0, import13.interpolateString2('', 'start date-input', ' ', import5.MaterialInputComponent.hostClass, ''));
    import14.setAttribute(this._el_0, 'dateParsing', '');
    this.addShimC(this._el_0);
    this._DeferredValidator_0_5 = import4.DeferredValidator();
    this._MaterialInputComponent_0_6 = import5.MaterialInputComponent(null, null, null, this._compView_0, this._DeferredValidator_0_5);
    this._DateInputDirective_0_7 = (import12.isDevMode
        ? import15.debugInjectorWrap(import6.DateInputDirective, () {
            return import6.DateInputDirective(this.parentView.injectorGetOptional(const import16.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), this.parentView.injectorGet(import17.Clock, this.parentIndex), this._MaterialInputComponent_0_6);
          })
        : import6.DateInputDirective(this.parentView.injectorGetOptional(const import16.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), this.parentView.injectorGet(import17.Clock, this.parentIndex), this._MaterialInputComponent_0_6));
    this._MaterialInputDefaultValueAccessor_0_9 = import7.MaterialInputDefaultValueAccessor(this._MaterialInputComponent_0_6, null);
    this._compView_0.createAndProject(this._MaterialInputComponent_0_6, [const [], const []]);
    final doc = import8.document;
    final _el_1 = import14.appendSpan(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'separator');
    this.addShimE(_el_1);
    final _text_2 = import14.appendText(_el_1, '—');
    this._compView_3 = import3.ViewMaterialInputComponent0(this, 3);
    this._el_3 = this._compView_3.rootElement;
    parentRenderNode.append(this._el_3);
    this.updateChildClassNonHtml(this._el_3, import13.interpolateString2('', 'end date-input', ' ', import5.MaterialInputComponent.hostClass, ''));
    import14.setAttribute(this._el_3, 'dateParsing', '');
    this.addShimC(this._el_3);
    this._DeferredValidator_3_5 = import4.DeferredValidator();
    this._MaterialInputComponent_3_6 = import5.MaterialInputComponent(null, null, null, this._compView_3, this._DeferredValidator_3_5);
    this._DateInputDirective_3_7 = (import12.isDevMode
        ? import15.debugInjectorWrap(import6.DateInputDirective, () {
            return import6.DateInputDirective(this.parentView.injectorGetOptional(const import16.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), this.parentView.injectorGet(import17.Clock, this.parentIndex), this._MaterialInputComponent_3_6);
          })
        : import6.DateInputDirective(this.parentView.injectorGetOptional(const import16.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), this.parentView.injectorGet(import17.Clock, this.parentIndex), this._MaterialInputComponent_3_6));
    this._MaterialInputDefaultValueAccessor_3_9 = import7.MaterialInputDefaultValueAccessor(this._MaterialInputComponent_3_6, null);
    this._compView_3.createAndProject(this._MaterialInputComponent_3_6, [const [], const []]);
    final subscription_0 = this._MaterialInputComponent_0_6.onFocus.listen(this.eventHandler0(_ctx.onStartFocused));
    final subscription_1 = this._DateInputDirective_0_7.dateChange.listen(this.eventHandler1(this._handleEvent_0));
    final subscription_2 = this._MaterialInputComponent_3_6.onFocus.listen(this.eventHandler0(_ctx.onEndFocused));
    final subscription_3 = this._DateInputDirective_3_7.dateChange.listen(this.eventHandler1(this._handleEvent_1));
    this.initSubscriptions([subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import4.DeferredValidator)) {
        return this._DeferredValidator_0_5;
      }
      if (((((identical(token, import5.MaterialInputComponent) || identical(token, import18.BaseMaterialInput)) || identical(token, import19.ReferenceDirective)) || identical(token, import20.Focusable)) || identical(token, import21.HasDisabled))) {
        return this._MaterialInputComponent_0_6;
      }
      if (identical(token, const import16.MultiToken<dynamic>('NgValidators'))) {
        return this._NgValidators_0_10;
      }
    }
    if ((3 == nodeIndex)) {
      if (identical(token, import4.DeferredValidator)) {
        return this._DeferredValidator_3_5;
      }
      if (((((identical(token, import5.MaterialInputComponent) || identical(token, import18.BaseMaterialInput)) || identical(token, import19.ReferenceDirective)) || identical(token, import20.Focusable)) || identical(token, import21.HasDisabled))) {
        return this._MaterialInputComponent_3_6;
      }
      if (identical(token, const import16.MultiToken<dynamic>('NgValidators'))) {
        return this._NgValidators_3_10;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.startDateMsg, null)) {
        this._MaterialInputComponent_0_6.label = _ctx.startDateMsg;
        changed = true;
      }
    }
    final currVal_2 = _ctx.disabled;
    if (import12.checkBinding(this._expr_2, currVal_2, 'disabled', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._MaterialInputComponent_0_6.disabled = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isDateInputRequired;
    if (import12.checkBinding(this._expr_3, currVal_3, 'isDateInputRequired', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._MaterialInputComponent_0_6.required = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_4 = _ctx.startDateFormat;
    if (import12.checkBinding(this._expr_4, currVal_4, 'startDateFormat', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._DateInputDirective_0_7.dateFormat = currVal_4;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.startMaxDate;
    if (import12.checkBinding(this._expr_5, currVal_5, 'startMaxDate', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._DateInputDirective_0_7.maxDate = currVal_5;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.minDate;
    if (import12.checkBinding(this._expr_6, currVal_6, 'minDate', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._DateInputDirective_0_7.minDate = currVal_6;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.start;
    if (import12.checkBinding(this._expr_7, currVal_7, 'start', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._DateInputDirective_0_7.date = currVal_7;
      this._expr_7 = currVal_7;
    }
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.endDateMsg, null)) {
        this._MaterialInputComponent_3_6.label = _ctx.endDateMsg;
        changed = true;
      }
    }
    final currVal_10 = _ctx.disabled;
    if (import12.checkBinding(this._expr_10, currVal_10, 'disabled', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._MaterialInputComponent_3_6.disabled = currVal_10;
      changed = true;
      this._expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.isDateInputRequired;
    if (import12.checkBinding(this._expr_11, currVal_11, 'isDateInputRequired', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._MaterialInputComponent_3_6.required = currVal_11;
      changed = true;
      this._expr_11 = currVal_11;
    }
    if (changed) {
      this._compView_3.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._DateInputDirective_3_7.rangeEnd = true);
    }
    final currVal_12 = _ctx.endDateFormat;
    if (import12.checkBinding(this._expr_12, currVal_12, 'endDateFormat', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._DateInputDirective_3_7.dateFormat = currVal_12;
      this._expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.maxDate;
    if (import12.checkBinding(this._expr_13, currVal_13, 'maxDate', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._DateInputDirective_3_7.maxDate = currVal_13;
      this._expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.endMinDate;
    if (import12.checkBinding(this._expr_14, currVal_14, 'endMinDate', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._DateInputDirective_3_7.minDate = currVal_14;
      this._expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.end;
    if (import12.checkBinding(this._expr_15, currVal_15, 'end', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      this._DateInputDirective_3_7.date = currVal_15;
      this._expr_15 = currVal_15;
    }
    final currVal_0 = _ctx.isStartActive;
    if (import12.checkBinding(this._expr_0, currVal_0, 'isStartActive', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      import14.updateClassBindingNonHtml(this._el_0, 'active', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_8 = _ctx.isEndActive;
    if (import12.checkBinding(this._expr_8, currVal_8, 'isEndActive', 'asset:angular_components/lib/material_datepicker/date_range_input.dart')) {
      import14.updateClassBindingNonHtml(this._el_3, 'active', currVal_8);
      this._expr_8 = currVal_8;
    }
    this._compView_0.detectChanges();
    this._compView_3.detectChanges();
    if ((!import12.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialInputComponent_0_6.ngAfterViewInit();
        this._MaterialInputComponent_3_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_3.destroyInternalState();
    this._MaterialInputComponent_0_6.ngOnDestroy();
    this._DateInputDirective_0_7.ngOnDestroy();
    this._MaterialInputDefaultValueAccessor_0_9.ngOnDestroy();
    this._MaterialInputComponent_3_6.ngOnDestroy();
    this._DateInputDirective_3_7.ngOnDestroy();
    this._MaterialInputDefaultValueAccessor_3_9.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.start = $event;
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.end = $event;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import9.ComponentStyles.scoped(styles$DateRangeInputComponent, _debugComponentUrl));
      if (import12.isDevMode) {
        import9.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _DateRangeInputComponentNgFactory = ComponentFactory<import2.DateRangeInputComponent>('date-range-input', viewFactory_DateRangeInputComponentHost0);
ComponentFactory<import2.DateRangeInputComponent> get DateRangeInputComponentNgFactory {
  return _DateRangeInputComponentNgFactory;
}

ComponentFactory<import2.DateRangeInputComponent> createDateRangeInputComponentFactory() {
  return ComponentFactory('date-range-input', viewFactory_DateRangeInputComponentHost0);
}

final List<dynamic> styles$DateRangeInputComponentHost = const [];

class _ViewDateRangeInputComponentHost0 extends import23.HostView<import2.DateRangeInputComponent> {
  @override
  void build() {
    this.componentView = ViewDateRangeInputComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.DateRangeInputComponent(this.componentView);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    if (((!import12.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import23.HostView<import2.DateRangeInputComponent> viewFactory_DateRangeInputComponentHost0() {
  return _ViewDateRangeInputComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DateRangeInputComponent, createDateRangeInputComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
