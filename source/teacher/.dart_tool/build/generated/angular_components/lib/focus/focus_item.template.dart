// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'focus_item.dart';
export 'focus_item.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'focus_item.dart' as import1;
import 'package:angular/src/core/linker/views/render_view.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/runtime/dom_helpers.dart' as import4;
import 'package:angular/src/runtime.dart' as import5;

class FocusItemDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.FocusItemDirective instance;
  var _expr_1;
  FocusItemDirectiveNgCd(this.instance);
  void detectHostChanges(import2.RenderView view, import3.Element el) {
    bool firstCheck = view.firstCheck;
    if (firstCheck) {
      if (!identical(this.instance.role, null)) {
        import4.updateAttribute(el, 'role', this.instance.role);
      }
    }
    final currVal_1 = this.instance.tabIndex;
    if (import5.checkBinding(this._expr_1, currVal_1, null, null)) {
      import4.updateAttribute(el, 'tabindex', currVal_1);
      this._expr_1 = currVal_1;
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
}
