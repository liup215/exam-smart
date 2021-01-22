// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_chip.dart';
export 'material_chip.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref4;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref5;
import 'package:angular_components/material_chips/material_chip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_chip.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/views/view.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/interpolate.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import15;
import 'package:angular/src/core/linker/views/render_view.dart' as import16;
import '../button_decorator/button_decorator.template.dart' as import17;
import '../button_decorator/button_decorator.dart' as import18;
import 'package:angular/src/core/linker/views/host_view.dart' as import19;
import '../model/ui/has_renderer.dart' as import20;

final List<dynamic> styles$MaterialChipComponent = [import0.styles];

class ViewMaterialChipComponent0<T> extends import1.ComponentView<import2.MaterialChipComponent<T>> {
  final import3.TextBinding _textBinding_2 = import3.TextBinding();
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  import6.DivElement _el_1;
  static import7.ComponentStyles _componentStyles;
  ViewMaterialChipComponent0(import8.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('material-chip');
    this.updateChildClassNonHtml(this.rootElement, import2.MaterialChipComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/material_chips/material_chip.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialChipComponent1<T>(parentView, parentIndex);
    });
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final doc = import6.document;
    this._el_1 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_1, 'content');
    this.addShimC(this._el_1);
    this._el_1.append(this._textBinding_2.element);
    final _text_3 = import11.appendText(this._el_1, ' ');
    this.project(this._el_1, 1);
    final _anchor_4 = import11.appendAnchor(parentRenderNode);
    this._appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, (parentView, parentIndex) {
      return viewFactory_MaterialChipComponent2<T>(parentView, parentIndex);
    });
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = _ctx.hasLeftIcon;
    this._NgIf_4_9.ngIf = _ctx.removable;
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    final currVal_0 = _ctx.uuid;
    if (import10.checkBinding(this._expr_0, currVal_0, 'uuid', 'package:angular_components/material_chips/material_chip.html')) {
      import11.setProperty(this._el_1, 'id', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._textBinding_2.updateText(import13.interpolateString0(_ctx.label));
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import7.ComponentStyles.scoped(styles$MaterialChipComponent, _debugComponentUrl));
      if (import10.isDevMode) {
        import7.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialChipComponentNgFactory = ComponentFactory<import2.MaterialChipComponent>('material-chip', viewFactory_MaterialChipComponentHost0);
ComponentFactory<import2.MaterialChipComponent> get MaterialChipComponentNgFactory {
  return _MaterialChipComponentNgFactory;
}

ComponentFactory<import2.MaterialChipComponent<T>> createMaterialChipComponentFactory<T>() {
  return ComponentFactory('material-chip', viewFactory_MaterialChipComponentHost0);
}

class _ViewMaterialChipComponent1<T> extends import15.EmbeddedView<import2.MaterialChipComponent<T>> {
  _ViewMaterialChipComponent1(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import6.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'left-icon');
    this.addShimC(_el_0);
    this.project(_el_0, 0);
    this.initRootNode(_el_0);
  }
}

import15.EmbeddedView<void> viewFactory_MaterialChipComponent1<T>(import16.RenderView parentView, int parentIndex) {
  return _ViewMaterialChipComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialChipComponent2<T> extends import15.EmbeddedView<import2.MaterialChipComponent<T>> {
  import17.ButtonDirectiveNgCd _ButtonDirective_0_5;
  var _expr_0;
  var _expr_1;
  import6.DivElement _el_0;
  _ViewMaterialChipComponent2(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import6.document;
    this._el_0 = doc.createElement('div');
    import11.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClass(this._el_0, 'delete-button');
    this.addShimC(this._el_0);
    this._ButtonDirective_0_5 = import17.ButtonDirectiveNgCd(import18.ButtonDirective(this._el_0, null));
    final _el_1 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this._el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, 'delete-icon');
    import11.setAttribute(_el_1, 'height', '24');
    import11.setAttribute(_el_1, 'viewBox', '0 0 24 24');
    import11.setAttribute(_el_1, 'width', '24');
    import11.setAttribute(_el_1, 'xmlns', 'http://www.w3.org/2000/svg');
    this.addShimE(_el_1);
    final _el_2 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_1.append(_el_2);
    import11.setAttribute(_el_2, 'd', 'M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5\n                 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59\n                 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z');
    this.addShimE(_el_2);
    this._el_0.addEventListener('click', this.eventHandler1(this._ButtonDirective_0_5.instance.handleClick));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = this._ButtonDirective_0_5.instance.trigger.listen(this.eventHandler1(_ctx.removeChip));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.ButtonDirective) && (nodeIndex <= 2))) {
      return this._ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.deleteButtonAriaMessage;
    if (import10.checkBinding(this._expr_0, currVal_0, 'deleteButtonAriaMessage', 'package:angular_components/material_chips/material_chip.html')) {
      import11.updateAttribute(this._el_0, 'aria-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.uuid;
    if (import10.checkBinding(this._expr_1, currVal_1, 'uuid', 'package:angular_components/material_chips/material_chip.html')) {
      import11.updateAttribute(this._el_0, 'aria-describedby', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._ButtonDirective_0_5.detectHostChanges(this, this._el_0);
  }
}

import15.EmbeddedView<void> viewFactory_MaterialChipComponent2<T>(import16.RenderView parentView, int parentIndex) {
  return _ViewMaterialChipComponent2<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialChipComponentHost = const [];

class _ViewMaterialChipComponentHost0<T> extends import19.HostView<import2.MaterialChipComponent<T>> {
  @override
  void build() {
    this.componentView = ViewMaterialChipComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialChipComponent(_el_0);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import20.HasRenderer) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
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

import19.HostView<import2.MaterialChipComponent<T>> viewFactory_MaterialChipComponentHost0<T>() {
  return _ViewMaterialChipComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialChipComponent, createMaterialChipComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
