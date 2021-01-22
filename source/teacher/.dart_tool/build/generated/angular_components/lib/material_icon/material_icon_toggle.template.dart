// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_icon_toggle.dart';
export 'material_icon_toggle.dart';
import 'material_icon.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/meta.template.dart' as _ref2;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'material_icon_toggle.dart' as import1;
import 'package:angular/src/core/linker/views/render_view.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/runtime.dart' as import4;
import 'package:angular/src/runtime/dom_helpers.dart' as import5;

class MaterialIconToggleDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.MaterialIconToggleDirective instance;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  MaterialIconToggleDirectiveNgCd(this.instance);
  void detectHostChanges(import2.RenderView view, import3.Element el) {
    final currVal_0 = this.instance.showBasic;
    if (import4.checkBinding(this._expr_0, currVal_0, null, null)) {
      import5.updateClassBindingNonHtml(el, 'basic-icon', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = this.instance.showToggled;
    if (import4.checkBinding(this._expr_1, currVal_1, null, null)) {
      import5.updateClassBindingNonHtml(el, 'toggled-icon', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = this.instance.hideIcon;
    if (import4.checkBinding(this._expr_2, currVal_2, null, null)) {
      import5.updateClassBindingNonHtml(el, 'hide-icon', currVal_2);
      this._expr_2 = currVal_2;
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
}
