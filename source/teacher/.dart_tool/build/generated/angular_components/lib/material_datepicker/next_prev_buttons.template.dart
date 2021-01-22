// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'next_prev_buttons.dart';
export 'next_prev_buttons.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref1;
import 'package:angular_components/src/material_datepicker/sequential.template.dart' as _ref2;
import 'package:angular_components/src/material_datepicker/sequential.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_components/material_datepicker/next_prev_buttons.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'next_prev_buttons.dart' as import2;
import '../material_icon/material_icon.template.dart' as import3;
import '../material_icon/material_icon.dart' as import4;
import 'dart:html' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/views/view.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/runtime/interpolate.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import13;

final List<dynamic> styles$NextPrevComponent = [import0.styles];

class ViewNextPrevComponent0 extends import1.ComponentView<import2.NextPrevComponent> {
  import3.ViewMaterialIconComponent0 _compView_1;
  import4.MaterialIconComponent _MaterialIconComponent_1_5;
  import3.ViewMaterialIconComponent0 _compView_4;
  import4.MaterialIconComponent _MaterialIconComponent_4_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  import5.ButtonElement _el_0;
  import5.Element _el_1;
  import5.ButtonElement _el_3;
  import5.Element _el_4;
  static import6.ComponentStyles _componentStyles;
  ViewNextPrevComponent0(import7.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import5.document.createElement('next-prev-buttons');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_datepicker/next_prev_buttons.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import5.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import5.document;
    this._el_0 = import10.appendElement(doc, parentRenderNode, 'button');
    this.updateChildClass(this._el_0, 'prev');
    this.addShimC(this._el_0);
    this._compView_1 = import3.ViewMaterialIconComponent0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    this._el_0.append(this._el_1);
    import10.setAttribute(this._el_1, 'icon', 'navigate_before');
    this.addShimC(this._el_1);
    this._MaterialIconComponent_1_5 = import4.MaterialIconComponent(this._el_1);
    this._compView_1.create(this._MaterialIconComponent_1_5);
    final _text_2 = import10.appendText(parentRenderNode, '\n');
    this._el_3 = import10.appendElement(doc, parentRenderNode, 'button');
    this.updateChildClass(this._el_3, 'next');
    this.addShimC(this._el_3);
    this._compView_4 = import3.ViewMaterialIconComponent0(this, 4);
    this._el_4 = this._compView_4.rootElement;
    this._el_3.append(this._el_4);
    import10.setAttribute(this._el_4, 'icon', 'navigate_next');
    this.addShimC(this._el_4);
    this._MaterialIconComponent_4_5 = import4.MaterialIconComponent(this._el_4);
    this._compView_4.create(this._MaterialIconComponent_4_5);
    this._el_0.addEventListener('click', this.eventHandler0(_ctx.prev));
    this._el_3.addEventListener('click', this.eventHandler0(_ctx.next));
    parentRenderNode.addEventListener('click', this.eventHandler1(_ctx.stopPropagation));
    parentRenderNode.addEventListener('keypress', this.eventHandler1(_ctx.stopPropagation));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_1_5.icon = 'navigate_before';
      changed = true;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_4_5.icon = 'navigate_next';
      changed = true;
    }
    if (changed) {
      this._compView_4.markAsCheckOnce();
    }
    final currVal_0 = _ctx.isPrevDisabled;
    if (import9.checkBinding(this._expr_0, currVal_0, 'isPrevDisabled', 'asset:angular_components/lib/material_datepicker/next_prev_buttons.dart')) {
      import10.updateClassBinding(this._el_0, 'disabled', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isPrevDisabled;
    if (import9.checkBinding(this._expr_1, currVal_1, '{{isPrevDisabled}}', 'asset:angular_components/lib/material_datepicker/next_prev_buttons.dart')) {
      import10.setAttribute(this._el_0, 'aria-disabled', import11.interpolate0(currVal_1));
      this._expr_1 = currVal_1;
    }
    final currVal_2 = import11.interpolate0((_ctx.isPrevDisabled ? (0 - 1) : 0));
    if (import9.checkBinding(this._expr_2, currVal_2, '{{isPrevDisabled ? -1 : 0}}', 'asset:angular_components/lib/material_datepicker/next_prev_buttons.dart')) {
      import10.setAttribute(this._el_0, 'tabindex', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.prevLabel;
    if (import9.checkBinding(this._expr_3, currVal_3, 'prevLabel', 'asset:angular_components/lib/material_datepicker/next_prev_buttons.dart')) {
      import10.updateAttribute(this._el_1, 'aria-label', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_5 = _ctx.isNextDisabled;
    if (import9.checkBinding(this._expr_5, currVal_5, 'isNextDisabled', 'asset:angular_components/lib/material_datepicker/next_prev_buttons.dart')) {
      import10.updateClassBinding(this._el_3, 'disabled', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.isNextDisabled;
    if (import9.checkBinding(this._expr_6, currVal_6, '{{isNextDisabled}}', 'asset:angular_components/lib/material_datepicker/next_prev_buttons.dart')) {
      import10.setAttribute(this._el_3, 'aria-disabled', import11.interpolate0(currVal_6));
      this._expr_6 = currVal_6;
    }
    final currVal_7 = import11.interpolate0((_ctx.isNextDisabled ? (0 - 1) : 0));
    if (import9.checkBinding(this._expr_7, currVal_7, '{{isNextDisabled ? -1 : 0}}', 'asset:angular_components/lib/material_datepicker/next_prev_buttons.dart')) {
      import10.setAttribute(this._el_3, 'tabindex', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.nextLabel;
    if (import9.checkBinding(this._expr_8, currVal_8, 'nextLabel', 'asset:angular_components/lib/material_datepicker/next_prev_buttons.dart')) {
      import10.updateAttribute(this._el_4, 'aria-label', currVal_8);
      this._expr_8 = currVal_8;
    }
    this._compView_1.detectChanges();
    this._compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
    this._compView_4.destroyInternalState();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import6.ComponentStyles.scoped(styles$NextPrevComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import6.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _NextPrevComponentNgFactory = ComponentFactory<import2.NextPrevComponent>('next-prev-buttons', viewFactory_NextPrevComponentHost0);
ComponentFactory<import2.NextPrevComponent> get NextPrevComponentNgFactory {
  return _NextPrevComponentNgFactory;
}

ComponentFactory<import2.NextPrevComponent> createNextPrevComponentFactory() {
  return ComponentFactory('next-prev-buttons', viewFactory_NextPrevComponentHost0);
}

final List<dynamic> styles$NextPrevComponentHost = const [];

class _ViewNextPrevComponentHost0 extends import13.HostView<import2.NextPrevComponent> {
  @override
  void build() {
    this.componentView = ViewNextPrevComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.NextPrevComponent(this.componentView);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import13.HostView<import2.NextPrevComponent> viewFactory_NextPrevComponentHost0() {
  return _ViewNextPrevComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(NextPrevComponent, createNextPrevComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
