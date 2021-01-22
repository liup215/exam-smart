// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_select_item.dart';
export 'material_select_item.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref2;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref3;
import 'package:angular_components/glyph/glyph.template.dart' as _ref4;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref5;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as _ref6;
import 'package:angular_components/material_select/activation_handler.template.dart' as _ref7;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref8;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref9;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref10;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref11;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref12;
import 'package:angular_components/material_select/material_select_item.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_select_item.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import13;
import 'package:angular/src/core/linker/views/render_view.dart' as import14;
import '../material_checkbox/material_checkbox.template.dart' as import15;
import '../material_checkbox/material_checkbox.dart' as import16;
import '../interfaces/has_disabled.dart' as import17;
import '../glyph/glyph.template.dart' as import18;
import '../glyph/glyph.dart' as import19;
import 'package:angular/src/runtime/text_binding.dart' as import20;
import 'package:angular/src/runtime/interpolate.dart' as import21;
import '../dynamic_component/dynamic_component.template.dart' as import22;
import '../dynamic_component/dynamic_component.dart' as import23;
import 'package:angular/src/di/errors.dart' as import24;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import25;
import 'package:angular/src/core/linker/views/host_view.dart' as import26;
import '../mixins/material_dropdown_base.dart' as import27;
import 'activation_handler.dart' as import28;
import '../model/selection/selection_container.dart' as import29;
import '../model/ui/has_renderer.dart' as import30;

final List<dynamic> styles$MaterialSelectItemComponent = [import0.styles];

class ViewMaterialSelectItemComponent0<T> extends import1.ComponentView<import2.MaterialSelectItemComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialSelectItemComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-select-item');
    this.updateChildClassNonHtml(this.rootElement, import2.MaterialSelectItemComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_select/material_select_item.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent1<T>(parentView, parentIndex);
    });
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _text_1 = import10.appendText(parentRenderNode, ' ');
    final _anchor_2 = import10.appendAnchor(parentRenderNode);
    this._appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent2<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _text_3 = import10.appendText(parentRenderNode, '\n \n');
    final _anchor_4 = import10.appendAnchor(parentRenderNode);
    this._appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent6<T>(parentView, parentIndex);
    });
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _text_5 = import10.appendText(parentRenderNode, '\n ');
    final _anchor_6 = import10.appendAnchor(parentRenderNode);
    this._appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent7<T>(parentView, parentIndex);
    });
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    this.project(parentRenderNode, 0);
    parentRenderNode.addEventListener('click', this.eventHandler1(_ctx.handleClick));
    parentRenderNode.addEventListener('keypress', this.eventHandler1(_ctx.handleKeyPress));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = ((!_ctx.supportsMultiSelect) && _ctx.isSelected);
    this._NgIf_2_9.ngIf = (_ctx.supportsMultiSelect && (!_ctx.hideCheckbox));
    this._NgIf_4_9.ngIf = _ctx.valueHasLabel;
    this._NgIf_6_9.ngIf = ((_ctx.componentType != null) || (_ctx.componentFactory != null));
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.tabIndex;
    if (import9.checkBinding(this._expr_0, currVal_0, null, null)) {
      import10.updateAttribute(this.rootElement, 'tabindex', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaRole;
    if (import9.checkBinding(this._expr_1, currVal_1, null, null)) {
      import10.updateAttribute(this.rootElement, 'role', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabledStr;
    if (import9.checkBinding(this._expr_2, currVal_2, null, null)) {
      import10.updateAttribute(this.rootElement, 'aria-disabled', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.disabled;
    if (import9.checkBinding(this._expr_3, currVal_3, null, null)) {
      import10.updateClassBindingNonHtml(this.rootElement, 'is-disabled', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.disabled;
    if (import9.checkBinding(this._expr_4, currVal_4, null, null)) {
      import10.updateClassBindingNonHtml(this.rootElement, 'disabled', currVal_4);
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.supportsMultiSelect;
    if (import9.checkBinding(this._expr_5, currVal_5, null, null)) {
      import10.updateClassBindingNonHtml(this.rootElement, 'multiselect', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.isAriaChecked;
    if (import9.checkBinding(this._expr_6, currVal_6, null, null)) {
      import10.updateAttribute(this.rootElement, 'aria-checked', currVal_6?.toString());
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.isSelected;
    if (import9.checkBinding(this._expr_7, currVal_7, null, null)) {
      import10.updateClassBindingNonHtml(this.rootElement, 'selected', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.isHidden;
    if (import9.checkBinding(this._expr_8, currVal_8, null, null)) {
      import10.updateClassBindingNonHtml(this.rootElement, 'hidden', currVal_8);
      this._expr_8 = currVal_8;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialSelectItemComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialSelectItemComponentNgFactory = ComponentFactory<import2.MaterialSelectItemComponent>('material-select-item', viewFactory_MaterialSelectItemComponentHost0);
ComponentFactory<import2.MaterialSelectItemComponent> get MaterialSelectItemComponentNgFactory {
  return _MaterialSelectItemComponentNgFactory;
}

ComponentFactory<import2.MaterialSelectItemComponent<T>> createMaterialSelectItemComponentFactory<T>() {
  return ComponentFactory('material-select-item', viewFactory_MaterialSelectItemComponentHost0);
}

class _ViewMaterialSelectItemComponent1<T> extends import13.EmbeddedView<import2.MaterialSelectItemComponent<T>> {
  _ViewMaterialSelectItemComponent1(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'selected-accent mixin');
    this.addShimC(_el_0);
    this.initRootNode(_el_0);
  }
}

import13.EmbeddedView<void> viewFactory_MaterialSelectItemComponent1<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent2<T> extends import13.EmbeddedView<import2.MaterialSelectItemComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialSelectItemComponent2(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import10.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent3<T>(parentView, parentIndex);
    });
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _text_1 = import10.createText('  ');
    final _anchor_2 = import10.createAnchor();
    this._appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent4<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    this.initRootNodesAndSubscriptions([this._appEl_0, _text_1, this._appEl_2], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = (!_ctx.useCheckMarks);
    this._NgIf_2_9.ngIf = _ctx.useCheckMarks;
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialSelectItemComponent2<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent3<T> extends import13.EmbeddedView<import2.MaterialSelectItemComponent<T>> {
  import15.ViewMaterialCheckboxComponent0 _compView_0;
  import16.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  var _expr_0;
  var _expr_1;
  _ViewMaterialSelectItemComponent3(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import15.ViewMaterialCheckboxComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    _el_0.tabIndex = -1;
    this.addShimC(_el_0);
    this._MaterialCheckboxComponent_0_5 = import16.MaterialCheckboxComponent(_el_0, this._compView_0, null, '-1', null);
    this._compView_0.createAndProject(this._MaterialCheckboxComponent_0_5, [const []]);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.HasDisabled) && (0 == nodeIndex))) {
      return this._MaterialCheckboxComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    final currVal_0 = _ctx.disabled;
    if (import9.checkBinding(this._expr_0, currVal_0, 'disabled', 'package:angular_components/material_select/material_select_item.html')) {
      this._MaterialCheckboxComponent_0_5.disabled = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelected;
    if (import9.checkBinding(this._expr_1, currVal_1, 'isSelected', 'package:angular_components/material_select/material_select_item.html')) {
      this._MaterialCheckboxComponent_0_5.checked = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialCheckboxComponent_0_5.ngOnDestroy();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialSelectItemComponent3<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent4<T> extends import13.EmbeddedView<import2.MaterialSelectItemComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewMaterialSelectItemComponent4(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'check-container');
    this.addShimE(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent5<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_1_9.ngIf = _ctx.isSelected;
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialSelectItemComponent4<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent5<T> extends import13.EmbeddedView<import2.MaterialSelectItemComponent<T>> {
  import18.ViewGlyphComponent0 _compView_0;
  import19.GlyphComponent _GlyphComponent_0_5;
  _ViewMaterialSelectItemComponent5(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import18.ViewGlyphComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import10.setAttribute(_el_0, 'baseline', '');
    this.updateChildClassNonHtml(_el_0, 'check');
    import10.setAttribute(_el_0, 'icon', 'check');
    this.addShimC(_el_0);
    this._GlyphComponent_0_5 = import19.GlyphComponent(_el_0);
    this._compView_0.create(this._GlyphComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._GlyphComponent_0_5.icon = 'check';
      changed = true;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialSelectItemComponent5<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent5<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent6<T> extends import13.EmbeddedView<import2.MaterialSelectItemComponent<T>> {
  final import20.TextBinding _textBinding_1 = import20.TextBinding();
  _ViewMaterialSelectItemComponent6(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'label');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import21.interpolateString0(_ctx.valueLabel));
  }
}

import13.EmbeddedView<void> viewFactory_MaterialSelectItemComponent6<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent6<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent7<T> extends import13.EmbeddedView<import2.MaterialSelectItemComponent<T>> {
  import22.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import23.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialSelectItemComponent7(import14.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import22.ViewDynamicComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'dynamic-item');
    this.addShimC(_el_0);
    this._appEl_0 = ViewContainer(0, null, this, _el_0);
    this._DynamicComponent_0_8 = (import9.isDevMode
        ? import24.debugInjectorWrap(import23.DynamicComponent, () {
            return import23.DynamicComponent(this.parentView.injectorGet(import25.SlowComponentLoader, this.parentIndex), this._appEl_0);
          })
        : import23.DynamicComponent(this.parentView.injectorGet(import25.SlowComponentLoader, this.parentIndex), this._appEl_0));
    this._compView_0.create(this._DynamicComponent_0_8);
    final subscription_0 = this._DynamicComponent_0_8.onLoad.listen(this.eventHandler1(_ctx.onLoadCustomComponent));
    this.initRootNodesAndSubscriptions([this._appEl_0], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.componentType;
    if (import9.checkBinding(this._expr_0, currVal_0, 'componentType', 'package:angular_components/material_select/material_select_item.html')) {
      this._DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.componentFactory;
    if (import9.checkBinding(this._expr_1, currVal_1, 'componentFactory', 'package:angular_components/material_select/material_select_item.html')) {
      this._DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.value;
    if (import9.checkBinding(this._expr_2, currVal_2, 'value', 'package:angular_components/material_select/material_select_item.html')) {
      this._DynamicComponent_0_8.value = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (changed) {
      this._DynamicComponent_0_8.ngAfterChanges();
    }
    this._appEl_0.detectChangesInNestedViews();
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._DynamicComponent_0_8.ngOnDestroy();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialSelectItemComponent7<T>(import14.RenderView parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent7<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialSelectItemComponentHost = const [];

class _ViewMaterialSelectItemComponentHost0<T> extends import26.HostView<import2.MaterialSelectItemComponent<T>> {
  @override
  void build() {
    this.componentView = ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import9.isDevMode
        ? import24.debugInjectorWrap(import2.MaterialSelectItemComponent, () {
            return import2.MaterialSelectItemComponent(_el_0, this.injectorGetOptional(import27.DropdownHandle, this.parentIndex), this.injectorGetOptional(import28.ActivationHandler, this.parentIndex), this.componentView, null);
          })
        : import2.MaterialSelectItemComponent(_el_0, this.injectorGetOptional(import27.DropdownHandle, this.parentIndex), this.injectorGetOptional(import28.ActivationHandler, this.parentIndex), this.componentView, null));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import29.SelectionItem) || identical(token, import17.HasDisabled)) || identical(token, import30.HasRenderer)) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import26.HostView<import2.MaterialSelectItemComponent<T>> viewFactory_MaterialSelectItemComponentHost0<T>() {
  return _ViewMaterialSelectItemComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSelectItemComponent, createMaterialSelectItemComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
}
