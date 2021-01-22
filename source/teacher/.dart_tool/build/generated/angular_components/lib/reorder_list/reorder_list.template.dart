// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'reorder_list.dart';
export 'reorder_list.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/reorder_list/reorder_events.template.dart' as _ref1;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref2;
import 'package:angular_components/utils/keyboard/keyboard.template.dart' as _ref3;
import 'reorder_events.template.dart' as _ref4;
import 'package:angular_components/reorder_list/reorder_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'reorder_list.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;
import 'package:angular/src/di/errors.dart' as import11;
import 'package:angular/src/core/zone/ng_zone.dart' as import12;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import13;
import 'package:angular/src/core/linker/views/render_view.dart' as import14;

final List<dynamic> styles$ReorderListComponent = [import0.styles];

class ViewReorderListComponent0 extends import1.ComponentView<import2.ReorderListComponent> {
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import3.DivElement _el_1;
  static import4.ComponentStyles _componentStyles;
  ViewReorderListComponent0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import3.document.createElement('reorder-list');
    this.updateChildClassNonHtml(this.rootElement, import2.ReorderListComponent.hostClass);
    import7.updateAttribute(this.rootElement, 'role', import2.ReorderListComponent.hostRole);
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/reorder_list/reorder_list.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import3.HtmlElement parentRenderNode = this.initViewRoot();
    final _text_0 = import7.appendText(parentRenderNode, '\n');
    this.project(parentRenderNode, 0);
    final doc = import3.document;
    this._el_1 = import7.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_1, 'placeholder');
    this.addShimC(this._el_1);
    this.project(this._el_1, 1);
    _ctx.placeholder = this._el_1;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final bool currVal_0 = (!_ctx.showPlaceholder);
    if (import8.checkBinding(this._expr_0, currVal_0, '!showPlaceholder', 'package:angular_components/reorder_list/reorder_list.html')) {
      import7.updateClassBinding(this._el_1, 'hidden', currVal_0);
      this._expr_0 = currVal_0;
    }
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_1 = _ctx.verticalItems;
    if (import8.checkBinding(this._expr_1, currVal_1, null, null)) {
      import7.updateClassBindingNonHtml(this.rootElement, 'vertical', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.multiSelect;
    if (import8.checkBinding(this._expr_2, currVal_2, null, null)) {
      import7.updateClassBindingNonHtml(this.rootElement, 'multiselect', currVal_2);
      this._expr_2 = currVal_2;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import4.ComponentStyles.scoped(styles$ReorderListComponent, _debugComponentUrl));
      if (import8.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _ReorderListComponentNgFactory = ComponentFactory<import2.ReorderListComponent>('reorder-list', viewFactory_ReorderListComponentHost0);
ComponentFactory<import2.ReorderListComponent> get ReorderListComponentNgFactory {
  return _ReorderListComponentNgFactory;
}

ComponentFactory<import2.ReorderListComponent> createReorderListComponentFactory() {
  return ComponentFactory('reorder-list', viewFactory_ReorderListComponentHost0);
}

final List<dynamic> styles$ReorderListComponentHost = const [];

class _ViewReorderListComponentHost0 extends import10.HostView<import2.ReorderListComponent> {
  @override
  void build() {
    this.componentView = ViewReorderListComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import8.isDevMode
        ? import11.debugInjectorWrap(import2.ReorderListComponent, () {
            return import2.ReorderListComponent(this.injectorGet(import12.NgZone, this.parentIndex));
          })
        : import2.ReorderListComponent(this.injectorGet(import12.NgZone, this.parentIndex)));
    this.component.items = [];
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.ReorderListComponent) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import10.HostView<import2.ReorderListComponent> viewFactory_ReorderListComponentHost0() {
  return _ViewReorderListComponentHost0();
}

class ReorderItemDirectiveNgCd extends import13.DirectiveChangeDetector {
  final import2.ReorderItemDirective instance;
  var _expr_0;
  ReorderItemDirectiveNgCd(this.instance);
  void detectHostChanges(import14.RenderView view, import3.Element el) {
    final currVal_0 = this.instance.hostDraggable;
    if (import8.checkBinding(this._expr_0, currVal_0, null, null)) {
      import7.updateAttribute(el, 'draggable', currVal_0);
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

  _ngRef.registerComponent(ReorderListComponent, createReorderListComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
