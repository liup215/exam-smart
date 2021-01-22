// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'glyph.dart';
export 'glyph.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/icon.template.dart' as _ref1;
import 'package:angular_components/glyph/glyph.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'glyph.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'dart:html' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/runtime/interpolate.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import12;

final List<dynamic> styles$GlyphComponent = [import0.styles];

class ViewGlyphComponent0 extends import1.ComponentView<import2.GlyphComponent> {
  final import3.TextBinding _textBinding_2 = import3.TextBinding();
  var _expr_0;
  import4.Element _el_1;
  static import5.ComponentStyles _componentStyles;
  ViewGlyphComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import4.document.createElement('glyph');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/glyph/glyph.dart' : null);
  }

  @override
  void build() {
    final import4.HtmlElement parentRenderNode = this.initViewRoot();
    final _text_0 = import9.appendText(parentRenderNode, '\n');
    final doc = import4.document;
    this._el_1 = import9.appendElement(doc, parentRenderNode, 'i');
    import9.setAttribute(this._el_1, 'aria-hidden', 'true');
    this.updateChildClass(this._el_1, 'glyph-i');
    this.addShimE(this._el_1);
    this._el_1.append(this._textBinding_2.element);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.useMaterialIconsExtended;
    if (import8.checkBinding(this._expr_0, currVal_0, 'useMaterialIconsExtended', 'package:angular_components/glyph/glyph.html')) {
      import9.updateClassBinding(this._el_1, 'material-icons', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._textBinding_2.updateText(import10.interpolateString0(_ctx.iconName));
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$GlyphComponent, _debugComponentUrl));
      if (import8.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _GlyphComponentNgFactory = ComponentFactory<import2.GlyphComponent>('glyph', viewFactory_GlyphComponentHost0);
ComponentFactory<import2.GlyphComponent> get GlyphComponentNgFactory {
  return _GlyphComponentNgFactory;
}

ComponentFactory<import2.GlyphComponent> createGlyphComponentFactory() {
  return ComponentFactory('glyph', viewFactory_GlyphComponentHost0);
}

final List<dynamic> styles$GlyphComponentHost = const [];

class _ViewGlyphComponentHost0 extends import12.HostView<import2.GlyphComponent> {
  @override
  void build() {
    this.componentView = ViewGlyphComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.GlyphComponent(_el_0);
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
}

import12.HostView<import2.GlyphComponent> viewFactory_GlyphComponentHost0() {
  return _ViewGlyphComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(GlyphComponent, createGlyphComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
}
