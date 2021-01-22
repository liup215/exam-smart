// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_select_searchbox.dart';
export 'material_select_searchbox.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus_interface.template.dart' as _ref1;
import 'package:angular_components/material_input/material_input.template.dart' as _ref2;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref3;
import 'package:angular_components/model/selection/select.template.dart' as _ref4;
import 'package:angular_components/utils/async/async.template.dart' as _ref5;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref6;
import 'package:angular_forms/angular_forms.template.dart' as _ref7;
import 'package:angular_components/material_select/material_select_searchbox.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_select_searchbox.dart' as import2;
import '../material_input/material_input.template.dart' as import3;
import '../material_input/deferred_validator.dart' as import4;
import 'package:angular_forms/src/directives/ng_model.dart' as import5;
import '../material_input/material_input.dart' as import6;
import '../material_input/material_input_default_value_accessor.dart' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/views/view.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/src/runtime/interpolate.dart' as import13;
import 'package:angular/src/runtime/dom_helpers.dart' as import14;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import15;
import 'package:angular_forms/src/directives/ng_control.dart' as import16;
import '../material_input/base_material_input.dart' as import17;
import '../utils/angular/reference/reference.dart' as import18;
import '../focus/focus_interface.dart' as import19;
import '../interfaces/has_disabled.dart' as import20;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import22;

final List<dynamic> styles$MaterialSelectSearchboxComponent = [import0.styles];

class ViewMaterialSelectSearchboxComponent0 extends import1.ComponentView<import2.MaterialSelectSearchboxComponent> {
  import3.ViewMaterialInputComponent0 _compView_0;
  import4.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> _NgValidators_0_6;
  import5.NgModel _NgModel_0_7;
  import6.MaterialInputComponent _MaterialInputComponent_0_9;
  import7.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_11;
  var _expr_0;
  var _expr_1;
  static import8.ComponentStyles _componentStyles;
  ViewMaterialSelectSearchboxComponent0(import9.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import11.document.createElement('material-select-searchbox');
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:angular_components/lib/material_select/material_select_searchbox.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import11.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import3.ViewMaterialInputComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    this.updateChildClassNonHtml(_el_0, import13.interpolateString2('', 'searchbox-input', ' ', import6.MaterialInputComponent.hostClass, ''));
    import14.setAttribute(_el_0, 'leadingGlyph', 'search');
    this.addShimC(_el_0);
    this._DeferredValidator_0_5 = import4.DeferredValidator();
    this._NgValidators_0_6 = [this._DeferredValidator_0_5];
    this._NgModel_0_7 = import5.NgModel(this._NgValidators_0_6, null);
    this._MaterialInputComponent_0_9 = import6.MaterialInputComponent(null, null, this._NgModel_0_7, this._compView_0, this._DeferredValidator_0_5);
    this._MaterialInputDefaultValueAccessor_0_11 = import7.MaterialInputDefaultValueAccessor(this._MaterialInputComponent_0_9, this._NgModel_0_7);
    this._compView_0.createAndProject(this._MaterialInputComponent_0_9, [const [], const []]);
    _el_0.addEventListener('keypress', this.eventHandler1(_ctx.stopSpaceKeyPropagation));
    final subscription_0 = this._NgModel_0_7.update.listen(this.eventHandler1(this._handleEvent_0));
    final subscription_1 = this._MaterialInputComponent_0_9.onFocus.listen(this.eventHandler1(_ctx.handleFocus));
    import9.View.queryChangeDetectorRefs[this._MaterialInputComponent_0_9] = this._compView_0;
    _ctx.input = this._MaterialInputComponent_0_9;
    this.initSubscriptions([subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import4.DeferredValidator)) {
        return this._DeferredValidator_0_5;
      }
      if (identical(token, const import15.MultiToken<dynamic>('NgValidators'))) {
        return this._NgValidators_0_6;
      }
      if ((identical(token, import5.NgModel) || identical(token, import16.NgControl))) {
        return this._NgModel_0_7;
      }
      if (((((identical(token, import6.MaterialInputComponent) || identical(token, import17.BaseMaterialInput)) || identical(token, import18.ReferenceDirective)) || identical(token, import19.Focusable)) || identical(token, import20.HasDisabled))) {
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
    if (import12.checkBinding(this._expr_0, currVal_0, 'inputText', 'package:angular_components/material_select/material_select_searchbox.html')) {
      this._NgModel_0_7.model = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._NgModel_0_7.ngAfterChanges();
    }
    if (((!import12.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialInputComponent_0_9.displayBottomPanel = false;
      changed = true;
      this._MaterialInputComponent_0_9.leadingGlyph = 'search';
      changed = true;
    }
    final currVal_1 = _ctx.label;
    if (import12.checkBinding(this._expr_1, currVal_1, 'label', 'package:angular_components/material_select/material_select_searchbox.html')) {
      this._MaterialInputComponent_0_9.label = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
    if ((!import12.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialInputComponent_0_9.ngAfterViewInit();
      }
    }
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

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import8.ComponentStyles.scoped(styles$MaterialSelectSearchboxComponent, _debugComponentUrl));
      if (import12.isDevMode) {
        import8.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialSelectSearchboxComponentNgFactory = ComponentFactory<import2.MaterialSelectSearchboxComponent>('material-select-searchbox', viewFactory_MaterialSelectSearchboxComponentHost0);
ComponentFactory<import2.MaterialSelectSearchboxComponent> get MaterialSelectSearchboxComponentNgFactory {
  return _MaterialSelectSearchboxComponentNgFactory;
}

ComponentFactory<import2.MaterialSelectSearchboxComponent> createMaterialSelectSearchboxComponentFactory() {
  return ComponentFactory('material-select-searchbox', viewFactory_MaterialSelectSearchboxComponentHost0);
}

final List<dynamic> styles$MaterialSelectSearchboxComponentHost = const [];

class _ViewMaterialSelectSearchboxComponentHost0 extends import22.HostView<import2.MaterialSelectSearchboxComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialSelectSearchboxComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialSelectSearchboxComponent();
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.Focusable) && (0 == nodeIndex))) {
      return this.component;
    }
    return notFoundResult;
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import22.HostView<import2.MaterialSelectSearchboxComponent> viewFactory_MaterialSelectSearchboxComponentHost0() {
  return _ViewMaterialSelectSearchboxComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSelectSearchboxComponent, createMaterialSelectSearchboxComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
