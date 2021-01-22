// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_filter.dart';
export 'material_tree_filter.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_input/material_input.template.dart' as _ref1;
import 'package:angular_components/model/selection/select.template.dart' as _ref2;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref3;
import 'package:angular_components/utils/async/async.template.dart' as _ref4;
import 'package:angular/src/core/linker/views/component_view.dart' as import0;
import 'material_tree_filter.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/queries.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import13;
import '../../material_input/material_input.template.dart' as import14;
import '../../material_input/deferred_validator.dart' as import15;
import 'package:angular_forms/src/directives/ng_model.dart' as import16;
import '../../material_input/material_input.dart' as import17;
import '../../material_input/material_input_default_value_accessor.dart' as import18;
import 'package:angular/src/core/linker/views/render_view.dart' as import19;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import20;
import 'package:angular_forms/src/directives/ng_control.dart' as import21;
import '../../material_input/base_material_input.dart' as import22;
import '../../utils/angular/reference/reference.dart' as import23;
import '../../focus/focus_interface.dart' as import24;
import '../../interfaces/has_disabled.dart' as import25;
import 'package:angular/src/core/linker/views/host_view.dart' as import26;
import 'package:angular/src/di/errors.dart' as import27;
import 'material_tree_root.dart' as import28;

final List<dynamic> styles$MaterialTreeFilterComponent = const [];

class ViewMaterialTreeFilterComponent0 extends import0.ComponentView<import1.MaterialTreeFilterComponent> {
  bool _viewQuery_materialInput_0_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static import4.ComponentStyles _componentStyles;
  ViewMaterialTreeFilterComponent0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import7.document.createElement('material-tree-filter');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/src/material_tree/material_tree_filter.dart' : null);
  }

  @override
  void build() {
    final import7.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import9.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_MaterialTreeFilterComponent1);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = _ctx.hasFilterable;
    this._appEl_0.detectChangesInNestedViews();
    if ((!import8.debugThrowIfChanged)) {
      if (this._viewQuery_materialInput_0_isDirty) {
        _ctx.materialInput = import11.firstOrNull(this._appEl_0.mapNestedViewsWithSingleResult((_ViewMaterialTreeFilterComponent1 nestedView) {
          import5.View.queryChangeDetectorRefs[nestedView._MaterialInputComponent_0_9] = nestedView._compView_0;
          return nestedView._MaterialInputComponent_0_9;
        }));
        this._viewQuery_materialInput_0_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import4.ComponentStyles.unscoped(styles$MaterialTreeFilterComponent, _debugComponentUrl));
      if (import8.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialTreeFilterComponentNgFactory = ComponentFactory<import1.MaterialTreeFilterComponent>('material-tree-filter', viewFactory_MaterialTreeFilterComponentHost0);
ComponentFactory<import1.MaterialTreeFilterComponent> get MaterialTreeFilterComponentNgFactory {
  return _MaterialTreeFilterComponentNgFactory;
}

ComponentFactory<import1.MaterialTreeFilterComponent> createMaterialTreeFilterComponentFactory() {
  return ComponentFactory('material-tree-filter', viewFactory_MaterialTreeFilterComponentHost0);
}

class _ViewMaterialTreeFilterComponent1 extends import13.EmbeddedView<import1.MaterialTreeFilterComponent> {
  import14.ViewMaterialInputComponent0 _compView_0;
  import15.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> _NgValidators_0_6;
  import16.NgModel _NgModel_0_7;
  import17.MaterialInputComponent _MaterialInputComponent_0_9;
  import18.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_11;
  var _expr_0;
  var _expr_1;
  var _expr_3;
  _ViewMaterialTreeFilterComponent1(import19.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import14.ViewMaterialInputComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import9.setAttribute(_el_0, 'style', 'width: 100%;');
    this._DeferredValidator_0_5 = import15.DeferredValidator();
    this._NgValidators_0_6 = [this._DeferredValidator_0_5];
    this._NgModel_0_7 = import16.NgModel(this._NgValidators_0_6, null);
    this._MaterialInputComponent_0_9 = import17.MaterialInputComponent(null, null, this._NgModel_0_7, this._compView_0, this._DeferredValidator_0_5);
    this._MaterialInputDefaultValueAccessor_0_11 = import18.MaterialInputDefaultValueAccessor(this._MaterialInputComponent_0_9, this._NgModel_0_7);
    this._compView_0.createAndProject(this._MaterialInputComponent_0_9, [const [], const []]);
    final subscription_0 = this._MaterialInputComponent_0_9.onFocus.listen(this.eventHandler0(_ctx.handleFocus));
    final subscription_1 = this._MaterialInputComponent_0_9.onKeypress.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import15.DeferredValidator)) {
        return this._DeferredValidator_0_5;
      }
      if (identical(token, const import20.MultiToken<dynamic>('NgValidators'))) {
        return this._NgValidators_0_6;
      }
      if ((identical(token, import16.NgModel) || identical(token, import21.NgControl))) {
        return this._NgModel_0_7;
      }
      if (((((identical(token, import17.MaterialInputComponent) || identical(token, import22.BaseMaterialInput)) || identical(token, import23.ReferenceDirective)) || identical(token, import24.Focusable)) || identical(token, import25.HasDisabled))) {
        return this._MaterialInputComponent_0_9;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    final currVal_0 = _ctx.inputText;
    if (import8.checkBinding(this._expr_0, currVal_0, 'inputText', 'package:angular_components/src/material_tree/material_tree_filter.html')) {
      this._NgModel_0_7.model = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._NgModel_0_7.ngAfterChanges();
    }
    if (((!import8.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialInputComponent_0_9.displayBottomPanel = false;
      changed = true;
    }
    final currVal_1 = _ctx.placeholder;
    if (import8.checkBinding(this._expr_1, currVal_1, 'placeholder', 'package:angular_components/src/material_tree/material_tree_filter.html')) {
      this._MaterialInputComponent_0_9.label = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_3 = _ctx.leadingGlyph;
    if (import8.checkBinding(this._expr_3, currVal_3, 'leadingGlyph', 'package:angular_components/src/material_tree/material_tree_filter.html')) {
      this._MaterialInputComponent_0_9.leadingGlyph = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
    if ((!import8.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialInputComponent_0_9.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import8.unsafeCast<ViewMaterialTreeFilterComponent0>(this.parentView)._viewQuery_materialInput_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialInputComponent_0_9.ngOnDestroy();
    this._MaterialInputDefaultValueAccessor_0_11.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.inputText = $event;
  }
}

import13.EmbeddedView<void> viewFactory_MaterialTreeFilterComponent1(import19.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeFilterComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeFilterComponentHost = const [];

class _ViewMaterialTreeFilterComponentHost0 extends import26.HostView<import1.MaterialTreeFilterComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialTreeFilterComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import8.isDevMode
        ? import27.debugInjectorWrap(import1.MaterialTreeFilterComponent, () {
            return import1.MaterialTreeFilterComponent(this.injectorGetOptional(import28.MaterialTreeRoot, this.parentIndex));
          })
        : import1.MaterialTreeFilterComponent(this.injectorGetOptional(import28.MaterialTreeRoot, this.parentIndex)));
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

import26.HostView<import1.MaterialTreeFilterComponent> viewFactory_MaterialTreeFilterComponentHost0() {
  return _ViewMaterialTreeFilterComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeFilterComponent, createMaterialTreeFilterComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
