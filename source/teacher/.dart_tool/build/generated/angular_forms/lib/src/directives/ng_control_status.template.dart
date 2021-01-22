// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'ng_control_status.dart';
export 'ng_control_status.dart';
import 'ng_control.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'ng_control_status.dart' as import1;
import 'package:angular/src/core/linker/views/render_view.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/runtime.dart' as import4;
import 'package:angular/src/runtime/dom_helpers.dart' as import5;

class NgControlStatusNgCd extends import0.DirectiveChangeDetector {
  final import1.NgControlStatus instance;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  NgControlStatusNgCd(this.instance);
  void detectHostChanges(import2.RenderView view, import3.Element el) {
    final currVal_0 = this.instance.ngClassUntouched;
    if (import4.checkBinding(this._expr_0, currVal_0, null, null)) {
      import5.updateClassBindingNonHtml(el, 'ng-untouched', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = this.instance.ngClassTouched;
    if (import4.checkBinding(this._expr_1, currVal_1, null, null)) {
      import5.updateClassBindingNonHtml(el, 'ng-touched', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = this.instance.ngClassPristine;
    if (import4.checkBinding(this._expr_2, currVal_2, null, null)) {
      import5.updateClassBindingNonHtml(el, 'ng-pristine', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = this.instance.ngClassDirty;
    if (import4.checkBinding(this._expr_3, currVal_3, null, null)) {
      import5.updateClassBindingNonHtml(el, 'ng-dirty', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = this.instance.ngClassValid;
    if (import4.checkBinding(this._expr_4, currVal_4, null, null)) {
      import5.updateClassBindingNonHtml(el, 'ng-valid', currVal_4);
      this._expr_4 = currVal_4;
    }
    final currVal_5 = this.instance.ngClassInvalid;
    if (import4.checkBinding(this._expr_5, currVal_5, null, null)) {
      import5.updateClassBindingNonHtml(el, 'ng-invalid', currVal_5);
      this._expr_5 = currVal_5;
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
