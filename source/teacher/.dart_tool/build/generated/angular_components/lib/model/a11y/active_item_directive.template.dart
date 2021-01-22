// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'active_item_directive.dart';
export 'active_item_directive.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref1;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref2;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref3;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'active_item_directive.dart' as import1;
import 'package:angular/src/core/linker/views/render_view.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/runtime.dart' as import4;
import 'package:angular/src/runtime/dom_helpers.dart' as import5;

class ActiveItemDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.ActiveItemDirective instance;
  var _expr_0;
  ActiveItemDirectiveNgCd(this.instance);
  void detectHostChanges(import2.RenderView view, import3.Element el) {
    final currVal_0 = this.instance.active;
    if (import4.checkBinding(this._expr_0, currVal_0, null, null)) {
      import5.updateClassBindingNonHtml(el, 'active', currVal_0);
      this._expr_0 = currVal_0;
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
}
