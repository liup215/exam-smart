// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_dialog.dart';
export 'material_dialog.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref1;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref2;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref3;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref4;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref5;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref6;
import 'package:angular_components/material_dialog/material_dialog.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_dialog.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../focus/focus_trap.template.dart' as import4;
import '../focus/focus_trap.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/views/view.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/runtime.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/interpolate.dart' as import15;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import17;
import 'package:angular/src/core/linker/views/render_view.dart' as import18;
import 'package:angular/src/core/linker/views/host_view.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import '../utils/browser/dom_service/dom_service.dart' as import21;
import 'package:angular/src/core/zone/ng_zone.dart' as import22;
import '../laminate/components/modal/modal.dart' as import23;

final List<dynamic> styles$MaterialDialogComponent = [import0.styles];

class ViewMaterialDialogComponent0 extends import1.ComponentView<import2.MaterialDialogComponent> {
  final import3.TextBinding _textBinding_4 = import3.TextBinding();
  import4.ViewFocusTrapComponent0 _compView_0;
  import5.FocusTrapComponent _FocusTrapComponent_0_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  import8.DivElement _el_3;
  import8.Element _el_5;
  static import9.ComponentStyles _componentStyles;
  ViewMaterialDialogComponent0(import10.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-dialog');
    import12.updateAttribute(this.rootElement, 'role', import2.MaterialDialogComponent.hostRole);
    import12.updateAttribute(this.rootElement, 'aria-modal', import2.MaterialDialogComponent.ariaModel);
  }
  static String get _debugComponentUrl {
    return (import13.isDevMode ? 'asset:angular_components/lib/material_dialog/material_dialog.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import4.ViewFocusTrapComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    this.addShimC(_el_0);
    this._FocusTrapComponent_0_5 = import5.FocusTrapComponent();
    final doc = import8.document;
    final _el_1 = doc.createElement('div');
    this.updateChildClass(_el_1, 'wrapper');
    this.addShimC(_el_1);
    final _anchor_2 = import12.appendAnchor(_el_1);
    this._appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialDialogComponent1);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    this._el_3 = import12.appendDiv(doc, _el_1);
    this.updateChildClass(this._el_3, 'error');
    this.addShimC(this._el_3);
    this._el_3.append(this._textBinding_4.element);
    this._el_5 = import12.appendElement(doc, _el_1, 'main');
    import12.setAttribute(this._el_5, 'role', 'presentation');
    this.addShimE(this._el_5);
    this.project(this._el_5, 1);
    final _anchor_6 = import12.appendAnchor(_el_1);
    this._appEl_6 = ViewContainer(6, 1, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_MaterialDialogComponent2);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    this._compView_0.createAndProject(this._FocusTrapComponent_0_5, [
      [_el_1]
    ]);
    _el_0.addEventListener('keyup', this.eventHandler1(_ctx.onKeyUp));
    _ctx.main = this._el_5;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_2_9.ngIf = _ctx.shouldShowHeader;
    this._NgIf_6_9.ngIf = _ctx.shouldShowFooter;
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    final currVal_0 = (_ctx.error != null);
    if (import13.checkBinding(this._expr_0, currVal_0, 'error != null', 'package:angular_components/material_dialog/material_dialog.html')) {
      import12.updateClassBinding(this._el_3, 'expanded', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._textBinding_4.updateText(import15.interpolateString0(_ctx.error));
    final currVal_1 = _ctx.shouldShowScrollStrokes;
    if (import13.checkBinding(this._expr_1, currVal_1, 'shouldShowScrollStrokes', 'package:angular_components/material_dialog/material_dialog.html')) {
      import12.updateClassBinding(this._el_5, 'with-scroll-strokes', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.shouldShowTopScrollStroke;
    if (import13.checkBinding(this._expr_2, currVal_2, 'shouldShowTopScrollStroke', 'package:angular_components/material_dialog/material_dialog.html')) {
      import12.updateClassBinding(this._el_5, 'top-scroll-stroke', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.shouldShowBottomScrollStroke;
    if (import13.checkBinding(this._expr_3, currVal_3, 'shouldShowBottomScrollStroke', 'package:angular_components/material_dialog/material_dialog.html')) {
      import12.updateClassBinding(this._el_5, 'bottom-scroll-stroke', currVal_3);
      this._expr_3 = currVal_3;
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._FocusTrapComponent_0_5.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_4 = _ctx.headerId;
    if (import13.checkBinding(this._expr_4, currVal_4, null, null)) {
      import12.updateAttribute(this.rootElement, 'aria-labelledby', currVal_4);
      this._expr_4 = currVal_4;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import9.ComponentStyles.scoped(styles$MaterialDialogComponent, _debugComponentUrl));
      if (import13.isDevMode) {
        import9.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialDialogComponentNgFactory = ComponentFactory<import2.MaterialDialogComponent>('material-dialog', viewFactory_MaterialDialogComponentHost0);
ComponentFactory<import2.MaterialDialogComponent> get MaterialDialogComponentNgFactory {
  return _MaterialDialogComponentNgFactory;
}

ComponentFactory<import2.MaterialDialogComponent> createMaterialDialogComponentFactory() {
  return ComponentFactory('material-dialog', viewFactory_MaterialDialogComponentHost0);
}

class _ViewMaterialDialogComponent1 extends import17.EmbeddedView<import2.MaterialDialogComponent> {
  var _expr_0;
  import8.Element _el_0;
  _ViewMaterialDialogComponent1(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    this._el_0 = doc.createElement('header');
    import12.setAttribute(this._el_0, 'role', 'presentation');
    this.addShimE(this._el_0);
    this.project(this._el_0, 0);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.headerId;
    if (import13.checkBinding(this._expr_0, currVal_0, 'headerId', 'package:angular_components/material_dialog/material_dialog.html')) {
      import12.updateAttribute(this._el_0, 'id', currVal_0);
      this._expr_0 = currVal_0;
    }
  }
}

import17.EmbeddedView<void> viewFactory_MaterialDialogComponent1(import18.RenderView parentView, int parentIndex) {
  return _ViewMaterialDialogComponent1(parentView, parentIndex);
}

class _ViewMaterialDialogComponent2 extends import17.EmbeddedView<import2.MaterialDialogComponent> {
  _ViewMaterialDialogComponent2(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('footer');
    import12.setAttribute(_el_0, 'role', 'presentation');
    this.addShimE(_el_0);
    this.project(_el_0, 2);
    this.initRootNode(_el_0);
  }
}

import17.EmbeddedView<void> viewFactory_MaterialDialogComponent2(import18.RenderView parentView, int parentIndex) {
  return _ViewMaterialDialogComponent2(parentView, parentIndex);
}

final List<dynamic> styles$MaterialDialogComponentHost = const [];

class _ViewMaterialDialogComponentHost0 extends import19.HostView<import2.MaterialDialogComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialDialogComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import13.isDevMode
        ? import20.debugInjectorWrap(import2.MaterialDialogComponent, () {
            return import2.MaterialDialogComponent(_el_0, this.injectorGet(import21.DomService, this.parentIndex), this.componentView, this.injectorGet(import22.NgZone, this.parentIndex), this.injectorGetOptional(import23.ModalComponent, this.parentIndex));
          })
        : import2.MaterialDialogComponent(_el_0, this.injectorGet(import21.DomService, this.parentIndex), this.componentView, this.injectorGet(import22.NgZone, this.parentIndex), this.injectorGetOptional(import23.ModalComponent, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    if ((!import13.debugThrowIfChanged)) {
      this.component.ngAfterContentChecked();
    }
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import19.HostView<import2.MaterialDialogComponent> viewFactory_MaterialDialogComponentHost0() {
  return _ViewMaterialDialogComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDialogComponent, createMaterialDialogComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
