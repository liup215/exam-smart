// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_yes_no_buttons.dart';
export 'material_yes_no_buttons.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref2;
import 'package:angular_components/material_button/material_button.template.dart' as _ref3;
import 'package:angular_components/material_spinner/material_spinner.template.dart' as _ref4;
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_yes_no_buttons.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/queries.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import14;
import '../material_spinner/material_spinner.template.dart' as import15;
import '../material_spinner/material_spinner.dart' as import16;
import 'package:angular/src/core/linker/views/render_view.dart' as import17;
import 'package:angular/src/runtime/text_binding.dart' as import18;
import '../material_button/material_button.template.dart' as import19;
import '../focus/focus.dart' as import20;
import '../material_button/material_button.dart' as import21;
import 'package:angular/src/di/errors.dart' as import22;
import '../utils/browser/dom_service/dom_service.dart' as import23;
import '../laminate/components/modal/modal.dart' as import24;
import '../src/laminate/popup/popup_ref.dart' as import25;
import '../theme/dark_theme.dart' as import26;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import27;
import '../button_decorator/button_decorator.dart' as import28;
import '../interfaces/has_disabled.dart' as import29;
import 'package:angular/src/runtime/interpolate.dart' as import30;
import 'package:angular/src/core/linker/views/host_view.dart' as import31;

final List<dynamic> styles$MaterialYesNoButtonsComponent = [import0.styles];

class ViewMaterialYesNoButtonsComponent0 extends import1.ComponentView<import2.MaterialYesNoButtonsComponent> {
  bool _viewQuery_yesButton_0_isDirty = true;
  bool _viewQuery_noButton_1_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialYesNoButtonsComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-yes-no-buttons');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_yes_no_buttons/material_yes_no_buttons.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_MaterialYesNoButtonsComponent1);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import10.appendAnchor(parentRenderNode);
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialYesNoButtonsComponent2);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.appendAnchor(parentRenderNode);
    this._appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialYesNoButtonsComponent3);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = _ctx.pending;
    this._NgIf_1_9.ngIf = ((!_ctx.pending) && _ctx.yesDisplayed);
    this._NgIf_2_9.ngIf = ((!_ctx.pending) && _ctx.noDisplayed);
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    if ((!import9.debugThrowIfChanged)) {
      if (this._viewQuery_yesButton_0_isDirty) {
        _ctx.yesButton = import12.firstOrNull(this._appEl_1.mapNestedViewsWithSingleResult((_ViewMaterialYesNoButtonsComponent2 nestedView) {
          import6.View.queryChangeDetectorRefs[nestedView._MaterialButtonComponent_0_7] = nestedView._compView_0;
          return nestedView._MaterialButtonComponent_0_7;
        }));
        this._viewQuery_yesButton_0_isDirty = false;
      }
      if (this._viewQuery_noButton_1_isDirty) {
        _ctx.noButton = import12.firstOrNull(this._appEl_2.mapNestedViewsWithSingleResult((_ViewMaterialYesNoButtonsComponent3 nestedView) {
          import6.View.queryChangeDetectorRefs[nestedView._MaterialButtonComponent_0_7] = nestedView._compView_0;
          return nestedView._MaterialButtonComponent_0_7;
        }));
        this._viewQuery_noButton_1_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialYesNoButtonsComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialYesNoButtonsComponentNgFactory = ComponentFactory<import2.MaterialYesNoButtonsComponent>('material-yes-no-buttons', viewFactory_MaterialYesNoButtonsComponentHost0);
ComponentFactory<import2.MaterialYesNoButtonsComponent> get MaterialYesNoButtonsComponentNgFactory {
  return _MaterialYesNoButtonsComponentNgFactory;
}

ComponentFactory<import2.MaterialYesNoButtonsComponent> createMaterialYesNoButtonsComponentFactory() {
  return ComponentFactory('material-yes-no-buttons', viewFactory_MaterialYesNoButtonsComponentHost0);
}

class _ViewMaterialYesNoButtonsComponent1 extends import14.EmbeddedView<import2.MaterialYesNoButtonsComponent> {
  import15.ViewMaterialSpinnerComponent0 _compView_1;
  import16.MaterialSpinnerComponent _MaterialSpinnerComponent_1_5;
  _ViewMaterialYesNoButtonsComponent1(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'btn spinner');
    this.addShimC(_el_0);
    this._compView_1 = import15.ViewMaterialSpinnerComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._MaterialSpinnerComponent_1_5 = import16.MaterialSpinnerComponent();
    this._compView_1.create(this._MaterialSpinnerComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import14.EmbeddedView<void> viewFactory_MaterialYesNoButtonsComponent1(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialYesNoButtonsComponent1(parentView, parentIndex);
}

class _ViewMaterialYesNoButtonsComponent2 extends import14.EmbeddedView<import2.MaterialYesNoButtonsComponent> {
  final import18.TextBinding _textBinding_1 = import18.TextBinding();
  import19.ViewMaterialButtonComponent0 _compView_0;
  import20.AutoFocusDirective _AutoFocusDirective_0_5;
  dynamic _AcxDarkTheme_0_6;
  import21.MaterialButtonComponent _MaterialButtonComponent_0_7;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  import8.Element _el_0;
  _ViewMaterialYesNoButtonsComponent2(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import19.ViewMaterialButtonComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'btn btn-yes');
    this.addShimC(this._el_0);
    this._AutoFocusDirective_0_5 = (import9.isDevMode
        ? import22.debugInjectorWrap(import20.AutoFocusDirective, () {
            return import20.AutoFocusDirective(this._el_0, this.parentView.injectorGet(import23.DomService, this.parentIndex), null, this.parentView.injectorGetOptional(import24.ModalComponent, this.parentIndex), this.parentView.injectorGetOptional(import25.PopupRef, this.parentIndex));
          })
        : import20.AutoFocusDirective(this._el_0, this.parentView.injectorGet(import23.DomService, this.parentIndex), null, this.parentView.injectorGetOptional(import24.ModalComponent, this.parentIndex), this.parentView.injectorGetOptional(import25.PopupRef, this.parentIndex)));
    this._AcxDarkTheme_0_6 = (import9.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(this.parentView.injectorGetOptional(const import27.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex));
          })
        : import26.AcxDarkTheme(this.parentView.injectorGetOptional(const import27.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex)));
    this._MaterialButtonComponent_0_7 = import21.MaterialButtonComponent(this._el_0, this._AcxDarkTheme_0_6, this._compView_0, null);
    this._compView_0.createAndProject(this._MaterialButtonComponent_0_7, [
      [this._textBinding_1.element]
    ]);
    final subscription_0 = this._MaterialButtonComponent_0_7.trigger.listen(this.eventHandler1(_ctx.onYes));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import26.AcxDarkTheme)) {
        return this._AcxDarkTheme_0_6;
      }
      if (((identical(token, import21.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled))) {
        return this._MaterialButtonComponent_0_7;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final currVal_3 = _ctx.yesAutoFocus;
    if (import9.checkBinding(this._expr_3, currVal_3, 'yesAutoFocus', 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html')) {
      this._AutoFocusDirective_0_5.autoFocus = currVal_3;
      this._expr_3 = currVal_3;
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._AutoFocusDirective_0_5.ngOnInit();
    }
    changed = false;
    final currVal_4 = (_ctx.yesDisabled || _ctx.disabled);
    if (import9.checkBinding(this._expr_4, currVal_4, 'yesDisabled || disabled', 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html')) {
      this._MaterialButtonComponent_0_7.disabled = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = (_ctx.yesRaised || _ctx.raised);
    if (import9.checkBinding(this._expr_5, currVal_5, 'yesRaised || raised', 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html')) {
      this._MaterialButtonComponent_0_7.raised = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.yesHighlighted;
    if (import9.checkBinding(this._expr_0, currVal_0, 'yesHighlighted', 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html')) {
      import10.updateClassBindingNonHtml(this._el_0, 'highlighted', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.yesAriaLabel;
    if (import9.checkBinding(this._expr_1, currVal_1, 'yesAriaLabel', 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html')) {
      import10.updateAttribute(this._el_0, 'aria-label', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.yesAriaDescribedBy;
    if (import9.checkBinding(this._expr_2, currVal_2, 'yesAriaDescribedBy', 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html')) {
      import10.updateAttribute(this._el_0, 'aria-describedby', currVal_2);
      this._expr_2 = currVal_2;
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._textBinding_1.updateText(import30.interpolateString0(_ctx.yesText));
    this._compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewMaterialYesNoButtonsComponent0>(this.parentView)._viewQuery_yesButton_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._AutoFocusDirective_0_5.ngOnDestroy();
  }
}

import14.EmbeddedView<void> viewFactory_MaterialYesNoButtonsComponent2(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialYesNoButtonsComponent2(parentView, parentIndex);
}

class _ViewMaterialYesNoButtonsComponent3 extends import14.EmbeddedView<import2.MaterialYesNoButtonsComponent> {
  final import18.TextBinding _textBinding_1 = import18.TextBinding();
  import19.ViewMaterialButtonComponent0 _compView_0;
  import20.AutoFocusDirective _AutoFocusDirective_0_5;
  dynamic _AcxDarkTheme_0_6;
  import21.MaterialButtonComponent _MaterialButtonComponent_0_7;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  import8.Element _el_0;
  _ViewMaterialYesNoButtonsComponent3(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import19.ViewMaterialButtonComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'btn btn-no');
    this.addShimC(this._el_0);
    this._AutoFocusDirective_0_5 = (import9.isDevMode
        ? import22.debugInjectorWrap(import20.AutoFocusDirective, () {
            return import20.AutoFocusDirective(this._el_0, this.parentView.injectorGet(import23.DomService, this.parentIndex), null, this.parentView.injectorGetOptional(import24.ModalComponent, this.parentIndex), this.parentView.injectorGetOptional(import25.PopupRef, this.parentIndex));
          })
        : import20.AutoFocusDirective(this._el_0, this.parentView.injectorGet(import23.DomService, this.parentIndex), null, this.parentView.injectorGetOptional(import24.ModalComponent, this.parentIndex), this.parentView.injectorGetOptional(import25.PopupRef, this.parentIndex)));
    this._AcxDarkTheme_0_6 = (import9.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(this.parentView.injectorGetOptional(const import27.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex));
          })
        : import26.AcxDarkTheme(this.parentView.injectorGetOptional(const import27.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex)));
    this._MaterialButtonComponent_0_7 = import21.MaterialButtonComponent(this._el_0, this._AcxDarkTheme_0_6, this._compView_0, null);
    this._compView_0.createAndProject(this._MaterialButtonComponent_0_7, [
      [this._textBinding_1.element]
    ]);
    final subscription_0 = this._MaterialButtonComponent_0_7.trigger.listen(this.eventHandler1(_ctx.onNo));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import26.AcxDarkTheme)) {
        return this._AcxDarkTheme_0_6;
      }
      if (((identical(token, import21.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled))) {
        return this._MaterialButtonComponent_0_7;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final currVal_2 = _ctx.noAutoFocus;
    if (import9.checkBinding(this._expr_2, currVal_2, 'noAutoFocus', 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html')) {
      this._AutoFocusDirective_0_5.autoFocus = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._AutoFocusDirective_0_5.ngOnInit();
    }
    changed = false;
    final currVal_3 = (_ctx.noDisabled || _ctx.disabled);
    if (import9.checkBinding(this._expr_3, currVal_3, 'noDisabled || disabled', 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html')) {
      this._MaterialButtonComponent_0_7.disabled = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.raised;
    if (import9.checkBinding(this._expr_4, currVal_4, 'raised', 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html')) {
      this._MaterialButtonComponent_0_7.raised = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.noAriaLabel;
    if (import9.checkBinding(this._expr_0, currVal_0, 'noAriaLabel', 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html')) {
      import10.updateAttribute(this._el_0, 'aria-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.noAriaDescribedBy;
    if (import9.checkBinding(this._expr_1, currVal_1, 'noAriaDescribedBy', 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.html')) {
      import10.updateAttribute(this._el_0, 'aria-describedby', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._textBinding_1.updateText(import30.interpolateString0(_ctx.noText));
    this._compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewMaterialYesNoButtonsComponent0>(this.parentView)._viewQuery_noButton_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._AutoFocusDirective_0_5.ngOnDestroy();
  }
}

import14.EmbeddedView<void> viewFactory_MaterialYesNoButtonsComponent3(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialYesNoButtonsComponent3(parentView, parentIndex);
}

final List<dynamic> styles$MaterialYesNoButtonsComponentHost = const [];

class _ViewMaterialYesNoButtonsComponentHost0 extends import31.HostView<import2.MaterialYesNoButtonsComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialYesNoButtonsComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MaterialYesNoButtonsComponent();
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import29.HasDisabled) && (0 == nodeIndex))) {
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

import31.HostView<import2.MaterialYesNoButtonsComponent> viewFactory_MaterialYesNoButtonsComponentHost0() {
  return _ViewMaterialYesNoButtonsComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialYesNoButtonsComponent, createMaterialYesNoButtonsComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
