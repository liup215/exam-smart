// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_month_picker.dart';
export 'material_month_picker.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../src/material_datepicker/calendar_listener.template.dart' as _ref0;
import '../src/material_datepicker/enum_parsing.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref3;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref4;
import 'package:angular_components/model/date/date.template.dart' as _ref5;
import 'package:angular_components/model/observable/observable.template.dart' as _ref6;
import 'package:angular_components/material_datepicker/material_month_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_month_picker.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;
import 'package:angular/src/di/errors.dart' as import11;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import12;

final List<dynamic> styles$MaterialMonthPickerComponent = [import0.styles];

class ViewMaterialMonthPickerComponent0 extends import1.ComponentView<import2.MaterialMonthPickerComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewMaterialMonthPickerComponent0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('material-month-picker');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/material_datepicker/material_month_picker.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    final _el_0 = import8.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'scroll-container');
    this.addShimC(_el_0);
    final _el_1 = import8.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'calendar-container');
    this.addShimC(_el_1);
    _ctx.container = _el_1;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$MaterialMonthPickerComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialMonthPickerComponentNgFactory = ComponentFactory<import2.MaterialMonthPickerComponent>('material-month-picker', viewFactory_MaterialMonthPickerComponentHost0);
ComponentFactory<import2.MaterialMonthPickerComponent> get MaterialMonthPickerComponentNgFactory {
  return _MaterialMonthPickerComponentNgFactory;
}

ComponentFactory<import2.MaterialMonthPickerComponent> createMaterialMonthPickerComponentFactory() {
  return ComponentFactory('material-month-picker', viewFactory_MaterialMonthPickerComponentHost0);
}

final List<dynamic> styles$MaterialMonthPickerComponentHost = const [];

class _ViewMaterialMonthPickerComponentHost0 extends import10.HostView<import2.MaterialMonthPickerComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialMonthPickerComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import7.isDevMode
        ? import11.debugInjectorWrap(import2.MaterialMonthPickerComponent, () {
            return import2.MaterialMonthPickerComponent(this.injectorGetOptional(const import12.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), null);
          })
        : import2.MaterialMonthPickerComponent(this.injectorGetOptional(const import12.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), null));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    if (((!import7.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
    if ((!import7.debugThrowIfChanged)) {
      if (firstCheck) {
        this.component.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import10.HostView<import2.MaterialMonthPickerComponent> viewFactory_MaterialMonthPickerComponentHost0() {
  return _ViewMaterialMonthPickerComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialMonthPickerComponent, createMaterialMonthPickerComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
