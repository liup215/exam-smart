// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'caption_affix.dart';
export 'caption_affix.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/material_menu/affix/base_affix.template.dart' as _ref2;
import 'package:angular_components/material_menu/affix/caption_affix_model.template.dart' as _ref3;
import 'package:angular_components/material_menu/affix/caption_affix.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'caption_affix.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/src/runtime/interpolate.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import11;

final List<dynamic> styles$CaptionAffixComponent = [import0.styles];

class ViewCaptionAffixComponent0 extends import1.ComponentView<import2.CaptionAffixComponent> {
  final import3.TextBinding _textBinding_0 = import3.TextBinding();
  static import4.ComponentStyles _componentStyles;
  ViewCaptionAffixComponent0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import7.document.createElement('caption-affix');
    this.updateChildClassNonHtml(this.rootElement, import2.CaptionAffixComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/material_menu/affix/caption_affix.dart' : null);
  }

  @override
  void build() {
    final import7.HtmlElement parentRenderNode = this.initViewRoot();
    parentRenderNode.append(this._textBinding_0.element);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_0.updateText(import9.interpolateString0(_ctx.text));
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import4.ComponentStyles.scoped(styles$CaptionAffixComponent, _debugComponentUrl));
      if (import8.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _CaptionAffixComponentNgFactory = ComponentFactory<import2.CaptionAffixComponent>('caption-affix', viewFactory_CaptionAffixComponentHost0);
ComponentFactory<import2.CaptionAffixComponent> get CaptionAffixComponentNgFactory {
  return _CaptionAffixComponentNgFactory;
}

ComponentFactory<import2.CaptionAffixComponent> createCaptionAffixComponentFactory() {
  return ComponentFactory('caption-affix', viewFactory_CaptionAffixComponentHost0);
}

final List<dynamic> styles$CaptionAffixComponentHost = const [];

class _ViewCaptionAffixComponentHost0 extends import11.HostView<import2.CaptionAffixComponent> {
  @override
  void build() {
    this.componentView = ViewCaptionAffixComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.CaptionAffixComponent(this.componentView);
    this.initRootNode(_el_0);
  }
}

import11.HostView<import2.CaptionAffixComponent> viewFactory_CaptionAffixComponentHost0() {
  return _ViewCaptionAffixComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(CaptionAffixComponent, createCaptionAffixComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
