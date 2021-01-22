// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'button_decorator.dart';
export 'button_decorator.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref2;
import 'package:angular_components/mixins/has_tab_index.template.dart' as _ref3;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref4;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'button_decorator.dart' as import1;
import 'package:angular/src/core/linker/views/render_view.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/runtime.dart' as import4;
import 'package:angular/src/runtime/dom_helpers.dart' as import5;

class ButtonDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.ButtonDirective instance;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  ButtonDirectiveNgCd(this.instance);
  void detectHostChanges(import2.RenderView view, import3.Element el) {
    final currVal_0 = this.instance.tabIndex;
    if (import4.checkBinding(this._expr_0, currVal_0, null, null)) {
      import5.updateAttribute(el, 'tabindex', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = this.instance.ariaRole;
    if (import4.checkBinding(this._expr_1, currVal_1, null, null)) {
      import5.updateAttribute(el, 'role', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = this.instance.disabledStr;
    if (import4.checkBinding(this._expr_2, currVal_2, null, null)) {
      import5.updateAttribute(el, 'aria-disabled', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = this.instance.disabled;
    if (import4.checkBinding(this._expr_3, currVal_3, null, null)) {
      import5.updateClassBindingNonHtml(el, 'is-disabled', currVal_3);
      this._expr_3 = currVal_3;
    }
  }
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
