// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'focus_trap.dart';
export 'focus_trap.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/utils/browser/dom_iterator/dom_iterator.template.dart' as _ref2;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref3;
import 'package:angular_components/focus/focus_trap.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'focus_trap.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;

final List<dynamic> styles$FocusTrapComponent = [import0.styles];

class ViewFocusTrapComponent0 extends import1.ComponentView<import2.FocusTrapComponent> {
  import2.FocusContentWrapper _FocusContentWrapper_1_5;
  static import3.ComponentStyles _componentStyles;
  ViewFocusTrapComponent0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('focus-trap');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/focus/focus_trap.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    final _el_0 = import8.appendDiv(doc, parentRenderNode);
    _el_0.tabIndex = 0;
    this.addShimC(_el_0);
    final _el_1 = import8.appendDiv(doc, parentRenderNode);
    import8.setAttribute(_el_1, 'focusContentWrapper', '');
    import8.setAttribute(_el_1, 'style', 'outline: none');
    _el_1.tabIndex = -1;
    this.addShimC(_el_1);
    this._FocusContentWrapper_1_5 = import2.FocusContentWrapper(_el_1);
    this.project(_el_1, 0);
    final _el_2 = import8.appendDiv(doc, parentRenderNode);
    _el_2.tabIndex = 0;
    this.addShimC(_el_2);
    _el_0.addEventListener('focus', this.eventHandler0(_ctx.focusLast));
    _el_2.addEventListener('focus', this.eventHandler0(_ctx.focusFirst));
    _ctx.content = this._FocusContentWrapper_1_5;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$FocusTrapComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FocusTrapComponentNgFactory = ComponentFactory<import2.FocusTrapComponent>('focus-trap', viewFactory_FocusTrapComponentHost0);
ComponentFactory<import2.FocusTrapComponent> get FocusTrapComponentNgFactory {
  return _FocusTrapComponentNgFactory;
}

ComponentFactory<import2.FocusTrapComponent> createFocusTrapComponentFactory() {
  return ComponentFactory('focus-trap', viewFactory_FocusTrapComponentHost0);
}

final List<dynamic> styles$FocusTrapComponentHost = const [];

class _ViewFocusTrapComponentHost0 extends import10.HostView<import2.FocusTrapComponent> {
  @override
  void build() {
    this.componentView = ViewFocusTrapComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FocusTrapComponent();
    this.initRootNode(_el_0);
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import10.HostView<import2.FocusTrapComponent> viewFactory_FocusTrapComponentHost0() {
  return _ViewFocusTrapComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(FocusTrapComponent, createFocusTrapComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
