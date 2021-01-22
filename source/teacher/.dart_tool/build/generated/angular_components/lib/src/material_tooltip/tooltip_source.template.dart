// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'tooltip_source.dart';
export 'tooltip_source.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref1;
import 'package:angular_components/model/action/delayed_action.template.dart' as _ref2;
import 'package:angular_components/model/ui/toggle.template.dart' as _ref3;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'tooltip_source.dart' as import1;
import 'package:angular/src/core/linker/views/render_view.dart' as import2;
import 'dart:html' as import3;

class MaterialTooltipSourceDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.MaterialTooltipSourceDirective instance;
  MaterialTooltipSourceDirectiveNgCd(this.instance);
  void detectHostChanges(import2.RenderView view, import3.Element el) {
    bool firstCheck = view.firstCheck;
    if (firstCheck) {
      if (!identical(import1.MaterialTooltipSourceDirective.hostStyleCursor, null)) {
        el.style.setProperty('cursor', import1.MaterialTooltipSourceDirective.hostStyleCursor);
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
