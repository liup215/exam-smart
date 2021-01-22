// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'highlighted_text.dart';
export 'highlighted_text.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/highlighted_text_model.template.dart' as _ref1;
import 'package:angular_components/highlighted_text/highlighted_text.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'highlighted_text.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import13;
import 'package:angular/src/runtime/text_binding.dart' as import14;
import 'package:angular/src/core/linker/views/render_view.dart' as import15;
import '../model/ui/highlighted_text_model.dart' as import16;
import 'package:angular/src/runtime/interpolate.dart' as import17;
import 'package:angular/src/core/linker/views/host_view.dart' as import18;

final List<dynamic> styles$HighlightedTextComponent = [import0.styles];

class ViewHighlightedTextComponent0 extends import1.ComponentView<import2.HighlightedTextComponent> {
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewHighlightedTextComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('highlighted-text');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/highlighted_text/highlighted_text.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _text_0 = import10.appendText(parentRenderNode, '\n');
    final _anchor_1 = import10.appendAnchor(parentRenderNode);
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_HighlightedTextComponent1);
    this._NgFor_1_9 = import4.NgFor(this._appEl_1, _TemplateRef_1_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.segments;
    if (import9.checkBinding(this._expr_0, currVal_0, 'segments', 'package:angular_components/highlighted_text/highlighted_text.html')) {
      this._NgFor_1_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import9.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$HighlightedTextComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _HighlightedTextComponentNgFactory = ComponentFactory<import2.HighlightedTextComponent>('highlighted-text', viewFactory_HighlightedTextComponentHost0);
ComponentFactory<import2.HighlightedTextComponent> get HighlightedTextComponentNgFactory {
  return _HighlightedTextComponentNgFactory;
}

ComponentFactory<import2.HighlightedTextComponent> createHighlightedTextComponentFactory() {
  return ComponentFactory('highlighted-text', viewFactory_HighlightedTextComponentHost0);
}

class _ViewHighlightedTextComponent1 extends import13.EmbeddedView<import2.HighlightedTextComponent> {
  final import14.TextBinding _textBinding_1 = import14.TextBinding();
  var _expr_0;
  import8.Element _el_0;
  _ViewHighlightedTextComponent1(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    this._el_0 = doc.createElement('span');
    this.updateChildClass(this._el_0, 'text-segment');
    this.addShimE(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final local_segment = import9.unsafeCast<import16.HighlightedTextSegment>(this.locals['\$implicit']);
    final currVal_0 = local_segment.isHighlighted;
    if (import9.checkBinding(this._expr_0, currVal_0, 'segment.isHighlighted', 'package:angular_components/highlighted_text/highlighted_text.html')) {
      import10.updateClassBinding(this._el_0, 'segment-highlight', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._textBinding_1.updateText(import17.interpolateString0(local_segment.text));
  }
}

import13.EmbeddedView<void> viewFactory_HighlightedTextComponent1(import15.RenderView parentView, int parentIndex) {
  return _ViewHighlightedTextComponent1(parentView, parentIndex);
}

final List<dynamic> styles$HighlightedTextComponentHost = const [];

class _ViewHighlightedTextComponentHost0 extends import18.HostView<import2.HighlightedTextComponent> {
  @override
  void build() {
    this.componentView = ViewHighlightedTextComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.HighlightedTextComponent();
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

import18.HostView<import2.HighlightedTextComponent> viewFactory_HighlightedTextComponentHost0() {
  return _ViewHighlightedTextComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HighlightedTextComponent, createHighlightedTextComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
}
