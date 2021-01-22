// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_calendar_picker.dart';
export 'material_calendar_picker.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../src/material_datepicker/calendar_listener.template.dart' as _ref0;
import '../src/material_datepicker/enum_parsing.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref3;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref4;
import 'package:angular_components/model/date/date.template.dart' as _ref5;
import 'package:angular_components/model/observable/observable.template.dart' as _ref6;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref7;
import 'package:angular_components/material_datepicker/material_calendar_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_calendar_picker.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import13;
import 'package:angular/src/runtime/text_binding.dart' as import14;
import 'package:angular/src/core/linker/views/render_view.dart' as import15;
import 'dart:core';
import 'package:angular/src/runtime/interpolate.dart' as import17;
import 'package:angular/src/core/linker/views/host_view.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import20;
import 'package:quiver/src/time/clock.dart' as import21;

final List<dynamic> styles$MaterialCalendarPickerComponent = [import0.styles];

class ViewMaterialCalendarPickerComponent0 extends import1.ComponentView<import2.MaterialCalendarPickerComponent> {
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_0;
  var _expr_1;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialCalendarPickerComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-calendar-picker');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_datepicker/material_calendar_picker.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import8.document;
    final _el_0 = import10.appendElement(doc, parentRenderNode, 'header');
    this.updateChildClass(_el_0, 'header');
    this.addShimE(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialCalendarPickerComponent1);
    this._NgFor_1_9 = import4.NgFor(this._appEl_1, _TemplateRef_1_8);
    final _el_2 = import10.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_2, 'scroll-container');
    this.addShimC(_el_2);
    final _el_3 = import10.appendDiv(doc, _el_2);
    this.updateChildClass(_el_3, 'calendar-container');
    this.addShimC(_el_3);
    _ctx.container = _el_3;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.dayNames;
    if (import9.checkBinding(this._expr_0, currVal_0, 'dayNames', 'package:angular_components/material_datepicker/material_calendar_picker.html')) {
      this._NgFor_1_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import9.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_1 = _ctx.compact;
    if (import9.checkBinding(this._expr_1, currVal_1, null, null)) {
      import10.updateClassBindingNonHtml(this.rootElement, 'compact', currVal_1);
      this._expr_1 = currVal_1;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialCalendarPickerComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialCalendarPickerComponentNgFactory = ComponentFactory<import2.MaterialCalendarPickerComponent>('material-calendar-picker', viewFactory_MaterialCalendarPickerComponentHost0);
ComponentFactory<import2.MaterialCalendarPickerComponent> get MaterialCalendarPickerComponentNgFactory {
  return _MaterialCalendarPickerComponentNgFactory;
}

ComponentFactory<import2.MaterialCalendarPickerComponent> createMaterialCalendarPickerComponentFactory() {
  return ComponentFactory('material-calendar-picker', viewFactory_MaterialCalendarPickerComponentHost0);
}

class _ViewMaterialCalendarPickerComponent1 extends import13.EmbeddedView<import2.MaterialCalendarPickerComponent> {
  final import14.TextBinding _textBinding_1 = import14.TextBinding();
  _ViewMaterialCalendarPickerComponent1(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'header-day');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_name = import9.unsafeCast<String>(this.locals['\$implicit']);
    this._textBinding_1.updateText(import17.interpolateString0(local_name));
  }
}

import13.EmbeddedView<void> viewFactory_MaterialCalendarPickerComponent1(import15.RenderView parentView, int parentIndex) {
  return _ViewMaterialCalendarPickerComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialCalendarPickerComponentHost = const [];

class _ViewMaterialCalendarPickerComponentHost0 extends import18.HostView<import2.MaterialCalendarPickerComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialCalendarPickerComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import9.isDevMode
        ? import19.debugInjectorWrap(import2.MaterialCalendarPickerComponent, () {
            return import2.MaterialCalendarPickerComponent(this.injectorGetOptional(const import20.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), this.injectorGet(import21.Clock, this.parentIndex), null);
          })
        : import2.MaterialCalendarPickerComponent(this.injectorGetOptional(const import20.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), this.injectorGet(import21.Clock, this.parentIndex), null));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
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

import18.HostView<import2.MaterialCalendarPickerComponent> viewFactory_MaterialCalendarPickerComponentHost0() {
  return _ViewMaterialCalendarPickerComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialCalendarPickerComponent, createMaterialCalendarPickerComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
