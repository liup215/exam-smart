// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'comparison_range_editor.dart';
export 'comparison_range_editor.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_datepicker/comparison_option.template.dart' as _ref1;
import 'package:angular_components/material_datepicker/date_range_input.template.dart' as _ref2;
import 'package:angular_components/material_datepicker/range.template.dart' as _ref3;
import 'package:angular_components/material_list/material_list.template.dart' as _ref4;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref5;
import 'package:angular_components/material_select/material_dropdown_select.template.dart' as _ref6;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref7;
import 'package:angular_components/material_toggle/material_toggle.template.dart' as _ref8;
import 'package:angular_components/model/date/date.template.dart' as _ref9;
import 'package:angular_components/src/material_datepicker/date_range_editor_model.template.dart' as _ref10;
import 'package:angular_components/utils/angular/scroll_host/angular_2.template.dart' as _ref11;
import 'package:angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'comparison_range_editor.dart' as import2;
import '../../material_toggle/material_toggle.template.dart' as import3;
import '../../material_toggle/material_toggle.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/views/view.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/runtime/interpolate.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import '../../interfaces/has_disabled.dart' as import15;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import17;
import 'package:angular/src/common/directives/ng_for.dart' as import18;
import 'package:angular/src/core/linker/views/render_view.dart' as import19;
import 'package:angular/src/runtime/text_binding.dart' as import20;
import '../../material_select/material_select_item.template.dart' as import21;
import '../../material_select/material_select_item.dart' as import22;
import 'package:angular/src/di/errors.dart' as import23;
import '../../mixins/material_dropdown_base.dart' as import24;
import '../../material_select/activation_handler.dart' as import25;
import '../../model/selection/selection_container.dart' as import26;
import '../../model/ui/has_renderer.dart' as import27;
import '../../material_datepicker/comparison_option.dart' as import28;
import 'package:angular/src/core/linker/views/host_view.dart' as import29;
import 'package:angular/src/core/zone/ng_zone.dart' as import30;
import '../utils/angular/scroll_host/scroll_host_interface.dart' as import31;

final List<dynamic> styles$ComparisonRangeEditorComponent = [import0.styles];

class ViewComparisonRangeEditorComponent0 extends import1.ComponentView<import2.ComparisonRangeEditorComponent> {
  import3.ViewMaterialToggleComponent0 _compView_1;
  import4.MaterialToggleComponent _MaterialToggleComponent_1_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_0;
  var _expr_2;
  static import7.ComponentStyles _componentStyles;
  ViewComparisonRangeEditorComponent0(import8.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import10.document.createElement('comparison-range-editor');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_components/lib/src/material_datepicker/comparison_range_editor.dart' : null);
  }

  @override
  void build() {
    final import10.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import10.document;
    final _el_0 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'comparison-toggle-section');
    this.addShimC(_el_0);
    this._compView_1 = import3.ViewMaterialToggleComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, import13.interpolateString2('', 'comparison-toggle', ' ', import4.MaterialToggleComponent.hostClass, ''));
    this.addShimC(_el_1);
    this._MaterialToggleComponent_1_5 = import4.MaterialToggleComponent(this._compView_1, null);
    this._compView_1.createAndProject(this._MaterialToggleComponent_1_5, [const []]);
    final _anchor_2 = import12.appendAnchor(parentRenderNode);
    this._appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_ComparisonRangeEditorComponent1);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final subscription_0 = this._MaterialToggleComponent_1_5.onChecked.listen(this.eventHandler1(this._handleEvent_0));
    this.initSubscriptions([subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.HasDisabled) && (1 == nodeIndex))) {
      return this._MaterialToggleComponent_1_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      if (!identical(import2.ComparisonRangeEditorComponent.comparisonHeaderMsg, null)) {
        this._MaterialToggleComponent_1_5.label = import2.ComparisonRangeEditorComponent.comparisonHeaderMsg;
        changed = true;
      }
    }
    final bool currVal_0 = (!_ctx.model.comparisonSupported);
    if (import11.checkBinding(this._expr_0, currVal_0, '!model.comparisonSupported', 'package:angular_components/src/material_datepicker/comparison_range_editor.html')) {
      this._MaterialToggleComponent_1_5.disabled = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_2 = _ctx.comparisonEnabled;
    if (import11.checkBinding(this._expr_2, currVal_2, 'comparisonEnabled', 'package:angular_components/src/material_datepicker/comparison_range_editor.html')) {
      this._MaterialToggleComponent_1_5.checked = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    this._NgIf_2_9.ngIf = _ctx.model.comparisonEnabled;
    this._appEl_2.detectChangesInNestedViews();
    this._compView_1.detectChanges();
    if ((!import11.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialToggleComponent_1_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._compView_1.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.comparisonEnabled = $event;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import7.ComponentStyles.scoped(styles$ComparisonRangeEditorComponent, _debugComponentUrl));
      if (import11.isDevMode) {
        import7.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _ComparisonRangeEditorComponentNgFactory = ComponentFactory<import2.ComparisonRangeEditorComponent>('comparison-range-editor', viewFactory_ComparisonRangeEditorComponentHost0);
ComponentFactory<import2.ComparisonRangeEditorComponent> get ComparisonRangeEditorComponentNgFactory {
  return _ComparisonRangeEditorComponentNgFactory;
}

ComponentFactory<import2.ComparisonRangeEditorComponent> createComparisonRangeEditorComponentFactory() {
  return ComponentFactory('comparison-range-editor', viewFactory_ComparisonRangeEditorComponentHost0);
}

class _ViewComparisonRangeEditorComponent1 extends import17.EmbeddedView<import2.ComparisonRangeEditorComponent> {
  ViewContainer _appEl_1;
  import18.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewComparisonRangeEditorComponent1(import19.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('div');
    this.addShimC(_el_0);
    final _anchor_1 = import12.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_ComparisonRangeEditorComponent2);
    this._NgFor_1_9 = import18.NgFor(this._appEl_1, _TemplateRef_1_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.model.validComparisonOptions;
    if (import11.checkBinding(this._expr_0, currVal_0, 'model.validComparisonOptions', 'package:angular_components/src/material_datepicker/comparison_range_editor.html')) {
      this._NgFor_1_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import11.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import17.EmbeddedView<void> viewFactory_ComparisonRangeEditorComponent1(import19.RenderView parentView, int parentIndex) {
  return _ViewComparisonRangeEditorComponent1(parentView, parentIndex);
}

class _ViewComparisonRangeEditorComponent2 extends import17.EmbeddedView<import2.ComparisonRangeEditorComponent> {
  final import20.TextBinding _textBinding_1 = import20.TextBinding();
  import21.ViewMaterialSelectItemComponent0 _compView_0;
  import22.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  var _expr_0;
  _ViewComparisonRangeEditorComponent2(import19.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import21.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._MaterialSelectItemComponent_0_5 = (import11.isDevMode
        ? import23.debugInjectorWrap(import22.MaterialSelectItemComponent, () {
            return import22.MaterialSelectItemComponent(_el_0, this.parentView.parentView.injectorGetOptional(import24.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import25.ActivationHandler, this.parentView.parentIndex), this._compView_0, null);
          })
        : import22.MaterialSelectItemComponent(_el_0, this.parentView.parentView.injectorGetOptional(import24.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import25.ActivationHandler, this.parentView.parentIndex), this._compView_0, null));
    this._compView_0.createAndProject(this._MaterialSelectItemComponent_0_5, [
      [this._textBinding_1.element]
    ]);
    final subscription_0 = this._MaterialSelectItemComponent_0_5.trigger.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import26.SelectionItem) || identical(token, import15.HasDisabled)) || identical(token, import27.HasRenderer)) && (nodeIndex <= 1))) {
      return this._MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_option = import11.unsafeCast<import28.ComparisonOption>(this.locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      this._MaterialSelectItemComponent_0_5.closeOnActivate = false;
      changed = true;
    }
    final currVal_0 = (_ctx.model.comparisonOption == local_option);
    if (import11.checkBinding(this._expr_0, currVal_0, 'model.comparisonOption == option', 'package:angular_components/src/material_datepicker/comparison_range_editor.html')) {
      this._MaterialSelectItemComponent_0_5.selected = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._textBinding_1.updateText(import13.interpolateString0(_ctx.comparisonOptionMsg(local_option)));
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialSelectItemComponent_0_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final local_option = import11.unsafeCast<import28.ComparisonOption>(this.locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.model.comparisonOption = local_option;
  }
}

import17.EmbeddedView<void> viewFactory_ComparisonRangeEditorComponent2(import19.RenderView parentView, int parentIndex) {
  return _ViewComparisonRangeEditorComponent2(parentView, parentIndex);
}

final List<dynamic> styles$ComparisonRangeEditorComponentHost = const [];

class _ViewComparisonRangeEditorComponentHost0 extends import29.HostView<import2.ComparisonRangeEditorComponent> {
  @override
  void build() {
    this.componentView = ViewComparisonRangeEditorComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import11.isDevMode
        ? import23.debugInjectorWrap(import2.ComparisonRangeEditorComponent, () {
            return import2.ComparisonRangeEditorComponent(this.injectorGet(import30.NgZone, this.parentIndex), this.injectorGetOptional(import31.ScrollHost, this.parentIndex));
          })
        : import2.ComparisonRangeEditorComponent(this.injectorGet(import30.NgZone, this.parentIndex), this.injectorGetOptional(import31.ScrollHost, this.parentIndex)));
    this.initRootNode(_el_0);
  }
}

import29.HostView<import2.ComparisonRangeEditorComponent> viewFactory_ComparisonRangeEditorComponentHost0() {
  return _ViewComparisonRangeEditorComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ComparisonRangeEditorComponent, createComparisonRangeEditorComponentFactory());
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
}
