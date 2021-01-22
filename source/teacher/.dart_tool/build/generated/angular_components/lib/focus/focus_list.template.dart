// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'focus_list.dart';
export 'focus_list.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref2;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref3;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'focus_list.dart' as import1;
import 'package:angular/src/core/linker/views/render_view.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/runtime/dom_helpers.dart' as import4;

class FocusListDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.FocusListDirective instance;
  FocusListDirectiveNgCd(this.instance);
  void detectHostChanges(import2.RenderView view, import3.Element el) {
    bool firstCheck = view.firstCheck;
    if (firstCheck) {
      if (!identical(this.instance.role, null)) {
        import4.updateAttribute(el, 'role', this.instance.role);
      }
      if (!identical(this.instance.ignoreUpAndDown, null)) {
        import4.updateAttribute(el, 'ignoreUpAndDown', this.instance.ignoreUpAndDown?.toString());
      }
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
