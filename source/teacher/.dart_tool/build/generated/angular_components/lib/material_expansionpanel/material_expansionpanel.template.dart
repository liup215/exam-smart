// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_expansionpanel.dart';
export 'material_expansionpanel.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref2;
import 'package:angular_components/content/deferred_content.template.dart' as _ref3;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref4;
import 'package:angular_components/focus/focus.template.dart' as _ref5;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref6;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref7;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref8;
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart' as _ref9;
import 'package:angular_components/model/action/async_action.template.dart' as _ref10;
import 'package:angular_components/model/observable/observable.template.dart' as _ref11;
import 'package:angular_components/utils/angular/id/id.template.dart' as _ref12;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref13;
import 'package:angular_components/utils/disposer/disposable_callback.template.dart' as _ref14;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref15;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_expansionpanel.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../material_yes_no_buttons/material_yes_no_buttons.dart' as import4;
import '../button_decorator/button_decorator.template.dart' as import5;
import '../focus/keyboard_only_focus_indicator.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../utils/angular/id/id.template.dart' as import9;
import '../content/deferred_content.dart' as import10;
import 'dart:html' as import11;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import12;
import 'package:angular/src/core/linker/views/view.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/src/runtime/dom_helpers.dart' as import16;
import '../button_decorator/button_decorator.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import '../utils/browser/dom_service/dom_service.dart' as import19;
import 'package:angular/src/core/linker/template_ref.dart';
import '../utils/angular/id/id.dart' as import21;
import '../utils/id_generator/id_generator.dart' as import22;
import '../content/deferred_content_aware.dart' as import23;
import 'package:angular/src/runtime/queries.dart' as import24;
import 'package:angular/src/runtime/interpolate.dart' as import25;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import27;
import '../material_icon/material_icon.template.dart' as import28;
import '../material_icon/material_icon.dart' as import29;
import 'package:angular/src/core/linker/views/render_view.dart' as import30;
import '../material_yes_no_buttons/material_yes_no_buttons.template.dart' as import31;
import '../interfaces/has_disabled.dart' as import32;
import 'package:angular/src/core/linker/views/host_view.dart' as import33;
import 'package:angular/src/core/zone/ng_zone.dart' as import34;
import '../focus/focus.dart' as import35;
import '../focus/focus_interface.dart' as import36;

final List<dynamic> styles$MaterialExpansionPanel = [import0.styles];

class ViewMaterialExpansionPanel0 extends import1.ComponentView<import2.MaterialExpansionPanel> {
  bool _viewQuery_action_4_isDirty = true;
  bool _viewQuery_mainContent_2_isDirty = true;
  bool _viewQuery_contentWrapper_5_isDirty = true;
  final import3.TextBinding _textBinding_6 = import3.TextBinding();
  import4.KeyUpBoundaryDirective _KeyUpBoundaryDirective_0_5;
  import5.ButtonDirectiveNgCd _ButtonDirective_2_5;
  import6.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_2_6;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  import9.AutoIdDirectiveNgCd _AutoIdDirective_8_5;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  import9.AutoIdDirectiveNgCd _AutoIdDirective_11_5;
  ViewContainer _appEl_12;
  import10.DeferredContentDirective _DeferredContentDirective_12_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  import11.DivElement _el_0;
  import11.Element _el_1;
  import11.DivElement _el_2;
  import11.DivElement _el_8;
  import11.Element _el_11;
  static import12.ComponentStyles _componentStyles;
  ViewMaterialExpansionPanel0(import13.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import11.document.createElement('material-expansionpanel');
  }
  static String get _debugComponentUrl {
    return (import15.isDevMode ? 'asset:angular_components/lib/material_expansionpanel/material_expansionpanel.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import11.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import11.document;
    this._el_0 = import16.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'panel themeable');
    import16.setAttribute(this._el_0, 'keyupBoundary', '');
    this.addShimC(this._el_0);
    this._KeyUpBoundaryDirective_0_5 = import4.KeyUpBoundaryDirective(this._el_0);
    this._el_1 = import16.appendElement(doc, this._el_0, 'header');
    this.addShimE(this._el_1);
    this._el_2 = import16.appendDiv(doc, this._el_1);
    import16.setAttribute(this._el_2, 'buttonDecorator', '');
    this.updateChildClass(this._el_2, 'header');
    import16.setAttribute(this._el_2, 'keyboardOnlyFocusIndicator', '');
    this.addShimC(this._el_2);
    this._ButtonDirective_2_5 = import5.ButtonDirectiveNgCd(import17.ButtonDirective(this._el_2, null));
    this._KeyboardOnlyFocusIndicatorDirective_2_6 = (import15.isDevMode
        ? import18.debugInjectorWrap(import6.KeyboardOnlyFocusIndicatorDirective, () {
            return import6.KeyboardOnlyFocusIndicatorDirective(this._el_2, this.parentView.injectorGet(import19.DomService, this.parentIndex));
          })
        : import6.KeyboardOnlyFocusIndicatorDirective(this._el_2, this.parentView.injectorGet(import19.DomService, this.parentIndex)));
    final _anchor_3 = import16.appendAnchor(this._el_2);
    this._appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_MaterialExpansionPanel1);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _el_4 = import16.appendDiv(doc, this._el_2);
    import16.setAttribute(_el_4, 'aria-hidden', 'true');
    this.updateChildClass(_el_4, 'panel-name');
    this.addShimC(_el_4);
    this.project(_el_4, 0);
    final _el_5 = import16.appendElement(doc, _el_4, 'p');
    this.updateChildClass(_el_5, 'primary-text');
    this.addShimE(_el_5);
    _el_5.append(this._textBinding_6.element);
    final _anchor_7 = import16.appendAnchor(_el_4);
    this._appEl_7 = ViewContainer(7, 4, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_MaterialExpansionPanel2);
    this._NgIf_7_9 = NgIf(this._appEl_7, _TemplateRef_7_8);
    this._el_8 = import16.appendDiv(doc, this._el_2);
    import16.setAttribute(this._el_8, 'aria-hidden', 'true');
    import16.setAttribute(this._el_8, 'autoId', '');
    this.updateChildClass(this._el_8, 'panel-description');
    this.addShimC(this._el_8);
    this._AutoIdDirective_8_5 = import9.AutoIdDirectiveNgCd((import15.isDevMode
        ? import18.debugInjectorWrap(import21.AutoIdDirective, () {
            return import21.AutoIdDirective(this.parentView.injectorGetOptional(import22.IdGenerator, this.parentIndex), null);
          })
        : import21.AutoIdDirective(this.parentView.injectorGetOptional(import22.IdGenerator, this.parentIndex), null)));
    this.project(this._el_8, 1);
    final _anchor_9 = import16.appendAnchor(this._el_2);
    this._appEl_9 = ViewContainer(9, 2, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(this._appEl_9, viewFactory_MaterialExpansionPanel3);
    this._NgIf_9_9 = NgIf(this._appEl_9, _TemplateRef_9_8);
    final _anchor_10 = import16.appendAnchor(this._el_1);
    this._appEl_10 = ViewContainer(10, 1, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(this._appEl_10, viewFactory_MaterialExpansionPanel4);
    this._NgIf_10_9 = NgIf(this._appEl_10, _TemplateRef_10_8);
    this._el_11 = import16.appendElement(doc, this._el_0, 'main');
    import16.setAttribute(this._el_11, 'autoId', '');
    import16.setAttribute(this._el_11, 'role', 'region');
    this.addShimE(this._el_11);
    this._AutoIdDirective_11_5 = import9.AutoIdDirectiveNgCd((import15.isDevMode
        ? import18.debugInjectorWrap(import21.AutoIdDirective, () {
            return import21.AutoIdDirective(this.parentView.injectorGetOptional(import22.IdGenerator, this.parentIndex), null);
          })
        : import21.AutoIdDirective(this.parentView.injectorGetOptional(import22.IdGenerator, this.parentIndex), null)));
    final _anchor_12 = import16.appendAnchor(this._el_11);
    this._appEl_12 = ViewContainer(12, 11, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(this._appEl_12, viewFactory_MaterialExpansionPanel5);
    this._DeferredContentDirective_12_9 = (import15.isDevMode
        ? import18.debugInjectorWrap(import10.DeferredContentDirective, () {
            return import10.DeferredContentDirective(this._appEl_12, _TemplateRef_12_8, this.parentView.injectorGet(import23.DeferredContentAware, this.parentIndex), this);
          })
        : import10.DeferredContentDirective(this._appEl_12, _TemplateRef_12_8, this.parentView.injectorGet(import23.DeferredContentAware, this.parentIndex), this));
    this._el_2.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this._el_2.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_2_5.instance.handleKeyPress));
    this._el_2.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_2_6.keydown));
    this._el_2.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_2_6.resetOutline));
    this._el_2.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_2_6.onMouseInteraction));
    this._el_2.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_2_6.onFocus));
    final subscription_0 = this._ButtonDirective_2_5.instance.trigger.listen(this.eventHandler0(_ctx.handleHeaderClick));
    _ctx.mainPanel = this._el_11;
    _ctx.headerPanel = this._el_1;
    _ctx.headerContent = this._el_2;
    _ctx.expandCollapse = this._ButtonDirective_2_5.instance;
    this.initSubscriptions([subscription_0]);
    parentRenderNode.addEventListener('keydown', this.eventHandler1(_ctx.keydown));
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 12)) {
      if ((identical(token, import17.ButtonDirective) && ((2 <= nodeIndex) && (nodeIndex <= 9)))) {
        return this._ButtonDirective_2_5.instance;
      }
      if (identical(token, import4.KeyUpBoundaryDirective)) {
        return this._KeyUpBoundaryDirective_0_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final import21.AutoIdDirective local_panelDescription = this._AutoIdDirective_8_5.instance;
    final import21.AutoIdDirective local_mainId = this._AutoIdDirective_11_5.instance;
    final currVal_11 = (_ctx.disabled || _ctx.headerHidden);
    if (import15.checkBinding(this._expr_11, currVal_11, 'disabled || headerHidden', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      this._ButtonDirective_2_5.instance.disabled = currVal_11;
      this._expr_11 = currVal_11;
    }
    this._NgIf_3_9.ngIf = (_ctx.shouldShowExpandIcon && _ctx.shouldExpandOnLeft);
    this._NgIf_7_9.ngIf = (_ctx.secondaryText != null);
    this._NgIf_9_9.ngIf = (_ctx.shouldShowExpandIcon && (!_ctx.shouldExpandOnLeft));
    this._NgIf_10_9.ngIf = ((!_ctx.shouldShowExpandIcon) && (!_ctx.headerHidden));
    if (firstCheck) {
      this._DeferredContentDirective_12_9.preserveDimensions = true;
      if (!identical(_ctx.forceContentWhenClosed, null)) {
        (this._DeferredContentDirective_12_9.deferredContentForceContent = _ctx.forceContentWhenClosed);
      }
    }
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_9.detectChangesInNestedViews();
    this._appEl_10.detectChangesInNestedViews();
    this._appEl_12.detectChangesInNestedViews();
    if ((!import15.debugThrowIfChanged)) {
      if (this._viewQuery_mainContent_2_isDirty) {
        _ctx.mainContent = import24.firstOrNull(this._appEl_12.mapNestedViewsWithSingleResult((_ViewMaterialExpansionPanel5 nestedView) {
          return nestedView._el_0;
        }));
        this._viewQuery_mainContent_2_isDirty = false;
      }
      if (this._viewQuery_action_4_isDirty) {
        _ctx.actionContent = import24.firstOrNull(this._appEl_10.mapNestedViewsWithSingleResult((_ViewMaterialExpansionPanel4 nestedView) {
          return nestedView._el_0;
        }));
        this._viewQuery_action_4_isDirty = false;
      }
      if (this._viewQuery_contentWrapper_5_isDirty) {
        _ctx.contentWrapper = import24.firstOrNull(this._appEl_12.mapNestedViewsWithSingleResult((_ViewMaterialExpansionPanel5 nestedView) {
          return nestedView._el_1;
        }));
        this._viewQuery_contentWrapper_5_isDirty = false;
      }
    }
    final currVal_0 = _ctx.isExpanded;
    if (import15.checkBinding(this._expr_0, currVal_0, 'isExpanded', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateClassBinding(this._el_0, 'open', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.anotherExpanded;
    if (import15.checkBinding(this._expr_1, currVal_1, 'anotherExpanded', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateClassBinding(this._el_0, 'background', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.headerHidden;
    if (import15.checkBinding(this._expr_2, currVal_2, 'headerHidden', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateClassBinding(this._el_1, 'hidden', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.headerRole;
    if (import15.checkBinding(this._expr_3, currVal_3, 'headerRole', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_1, 'role', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.headerAriaLevel;
    if (import15.checkBinding(this._expr_4, currVal_4, 'headerAriaLevel', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_1, 'aria-level', currVal_4?.toString());
      this._expr_4 = currVal_4;
    }
    final bool currVal_5 = (!_ctx.isExpanded);
    if (import15.checkBinding(this._expr_5, currVal_5, '!isExpanded', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateClassBinding(this._el_2, 'closed', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.isExpanded;
    if (import15.checkBinding(this._expr_6, currVal_6, 'isExpanded', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_2, 'aria-expanded', currVal_6?.toString());
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.disableHeaderExpansion;
    if (import15.checkBinding(this._expr_7, currVal_7, 'disableHeaderExpansion', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateClassBinding(this._el_2, 'disable-header-expansion', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.headerMsg;
    if (import15.checkBinding(this._expr_8, currVal_8, 'headerMsg', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_2, 'aria-label', currVal_8);
      this._expr_8 = currVal_8;
    }
    final currVal_9 = local_panelDescription.id;
    if (import15.checkBinding(this._expr_9, currVal_9, 'panelDescription.id', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_2, 'aria-describedby', currVal_9?.toString());
      this._expr_9 = currVal_9;
    }
    final currVal_10 = local_mainId.id;
    if (import15.checkBinding(this._expr_10, currVal_10, 'mainId.id', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_2, 'aria-controls', currVal_10?.toString());
      this._expr_10 = currVal_10;
    }
    this._ButtonDirective_2_5.detectHostChanges(this, this._el_2);
    this._textBinding_6.updateText(import25.interpolateString0(_ctx.name));
    this._AutoIdDirective_8_5.detectHostChanges(this, this._el_8);
    final bool currVal_12 = (!_ctx.isExpanded);
    if (import15.checkBinding(this._expr_12, currVal_12, '!isExpanded', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateClassBinding(this._el_11, 'hidden', currVal_12);
      this._expr_12 = currVal_12;
    }
    final bool currVal_13 = (!_ctx.isExpanded);
    if (import15.checkBinding(this._expr_13, currVal_13, '!isExpanded', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_11, 'aria-hidden', currVal_13?.toString());
      this._expr_13 = currVal_13;
    }
    this._AutoIdDirective_11_5.detectHostChanges(this, this._el_11);
  }

  @override
  void destroyInternal() {
    this._appEl_3.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._appEl_9.destroyNestedViews();
    this._appEl_10.destroyNestedViews();
    this._appEl_12.destroyNestedViews();
    this._DeferredContentDirective_12_9.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    this._ButtonDirective_2_5.instance.handleClick($event);
    this._KeyboardOnlyFocusIndicatorDirective_2_6.onMouseInteraction();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import12.ComponentStyles.scoped(styles$MaterialExpansionPanel, _debugComponentUrl));
      if (import15.isDevMode) {
        import12.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialExpansionPanelNgFactory = ComponentFactory<import2.MaterialExpansionPanel>('material-expansionpanel', viewFactory_MaterialExpansionPanelHost0);
ComponentFactory<import2.MaterialExpansionPanel> get MaterialExpansionPanelNgFactory {
  return _MaterialExpansionPanelNgFactory;
}

ComponentFactory<import2.MaterialExpansionPanel> createMaterialExpansionPanelFactory() {
  return ComponentFactory('material-expansionpanel', viewFactory_MaterialExpansionPanelHost0);
}

class _ViewMaterialExpansionPanel1 extends import27.EmbeddedView<import2.MaterialExpansionPanel> {
  import28.ViewMaterialIconComponent0 _compView_0;
  import29.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  var _expr_1;
  import11.Element _el_0;
  _ViewMaterialExpansionPanel1(import30.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import28.ViewMaterialIconComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'expand-button expand-on-left');
    import16.setAttribute(this._el_0, 'role', 'none');
    this.addShimC(this._el_0);
    this._MaterialIconComponent_0_5 = import29.MaterialIconComponent(this._el_0);
    this._compView_0.create(this._MaterialIconComponent_0_5);
    this._el_0.addEventListener('click', this.eventHandler0(_ctx.handleExpandIconClick));
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_1 = _ctx.expandIcon;
    if (import15.checkBinding(this._expr_1, currVal_1, 'expandIcon', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      this._MaterialIconComponent_0_5.icon = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.shouldFlipExpandIcon;
    if (import15.checkBinding(this._expr_0, currVal_0, 'shouldFlipExpandIcon', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateClassBindingNonHtml(this._el_0, 'expand-more', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import27.EmbeddedView<void> viewFactory_MaterialExpansionPanel1(import30.RenderView parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel1(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel2 extends import27.EmbeddedView<import2.MaterialExpansionPanel> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewMaterialExpansionPanel2(import30.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import11.document;
    final _el_0 = doc.createElement('p');
    this.updateChildClass(_el_0, 'secondary-text');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import25.interpolateString0(_ctx.secondaryText));
  }
}

import27.EmbeddedView<void> viewFactory_MaterialExpansionPanel2(import30.RenderView parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel2(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel3 extends import27.EmbeddedView<import2.MaterialExpansionPanel> {
  import28.ViewMaterialIconComponent0 _compView_0;
  import29.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  var _expr_1;
  import11.Element _el_0;
  _ViewMaterialExpansionPanel3(import30.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import28.ViewMaterialIconComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'expand-button');
    this.addShimC(this._el_0);
    this._MaterialIconComponent_0_5 = import29.MaterialIconComponent(this._el_0);
    this._compView_0.create(this._MaterialIconComponent_0_5);
    this._el_0.addEventListener('click', this.eventHandler0(_ctx.handleExpandIconClick));
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_1 = _ctx.expandIcon;
    if (import15.checkBinding(this._expr_1, currVal_1, 'expandIcon', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      this._MaterialIconComponent_0_5.icon = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.shouldFlipExpandIcon;
    if (import15.checkBinding(this._expr_0, currVal_0, 'shouldFlipExpandIcon', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateClassBindingNonHtml(this._el_0, 'expand-more', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import27.EmbeddedView<void> viewFactory_MaterialExpansionPanel3(import30.RenderView parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel3(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel4 extends import27.EmbeddedView<import2.MaterialExpansionPanel> {
  import11.DivElement _el_0;
  _ViewMaterialExpansionPanel4(import30.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import11.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'action');
    this.addShimC(this._el_0);
    this.project(this._el_0, 2);
    this.initRootNode(this._el_0);
  }

  @override
  void dirtyParentQueriesInternal() {
    import15.unsafeCast<ViewMaterialExpansionPanel0>(this.parentView)._viewQuery_action_4_isDirty = true;
  }
}

import27.EmbeddedView<void> viewFactory_MaterialExpansionPanel4(import30.RenderView parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel4(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel5 extends import27.EmbeddedView<import2.MaterialExpansionPanel> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  var _expr_0;
  import11.DivElement _el_0;
  import11.DivElement _el_1;
  _ViewMaterialExpansionPanel5(import30.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import11.document;
    this._el_0 = doc.createElement('div');
    this.addShimC(this._el_0);
    this._el_1 = import16.appendDiv(doc, this._el_0);
    this.updateChildClass(this._el_1, 'content-wrapper');
    this.addShimC(this._el_1);
    final _anchor_2 = import16.appendAnchor(this._el_1);
    this._appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialExpansionPanel6);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _el_3 = import16.appendDiv(doc, this._el_1);
    this.updateChildClass(_el_3, 'content');
    this.addShimC(_el_3);
    this.project(_el_3, 3);
    final _anchor_4 = import16.appendAnchor(this._el_1);
    this._appEl_4 = ViewContainer(4, 1, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_MaterialExpansionPanel7);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import16.appendAnchor(this._el_0);
    this._appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_MaterialExpansionPanel8);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import16.appendAnchor(this._el_0);
    this._appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_MaterialExpansionPanel9);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_2_9.ngIf = (_ctx.shouldShowHiddenHeaderExpandIcon && _ctx.shouldExpandOnLeft);
    this._NgIf_4_9.ngIf = (_ctx.shouldShowHiddenHeaderExpandIcon && (!_ctx.shouldExpandOnLeft));
    this._NgIf_5_9.ngIf = (!_ctx.showSaveCancel);
    this._NgIf_6_9.ngIf = _ctx.showSaveCancel;
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    final currVal_0 = _ctx.hideExpandedHeader;
    if (import15.checkBinding(this._expr_0, currVal_0, 'hideExpandedHeader', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateClassBinding(this._el_1, 'hidden-header', currVal_0);
      this._expr_0 = currVal_0;
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import15.unsafeCast<ViewMaterialExpansionPanel0>(this.parentView)._viewQuery_mainContent_2_isDirty = true;
    import15.unsafeCast<ViewMaterialExpansionPanel0>(this.parentView)._viewQuery_contentWrapper_5_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
  }
}

import27.EmbeddedView<void> viewFactory_MaterialExpansionPanel5(import30.RenderView parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel5(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel6 extends import27.EmbeddedView<import2.MaterialExpansionPanel> {
  import28.ViewMaterialIconComponent0 _compView_0;
  import5.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import29.MaterialIconComponent _MaterialIconComponent_0_6;
  import6.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_7;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  import11.Element _el_0;
  _ViewMaterialExpansionPanel6(import30.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import28.ViewMaterialIconComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import16.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClassNonHtml(this._el_0, 'expand-button expand-on-left');
    import16.setAttribute(this._el_0, 'keyboardOnlyFocusIndicator', '');
    this.addShimC(this._el_0);
    this._ButtonDirective_0_5 = import5.ButtonDirectiveNgCd(import17.ButtonDirective(this._el_0, null));
    this._MaterialIconComponent_0_6 = import29.MaterialIconComponent(this._el_0);
    this._KeyboardOnlyFocusIndicatorDirective_0_7 = (import15.isDevMode
        ? import18.debugInjectorWrap(import6.KeyboardOnlyFocusIndicatorDirective, () {
            return import6.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.parentView.injectorGet(import19.DomService, this.parentView.parentView.parentIndex));
          })
        : import6.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.parentView.injectorGet(import19.DomService, this.parentView.parentView.parentIndex)));
    this._compView_0.create(this._MaterialIconComponent_0_6);
    this._el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    this._el_0.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_7.keydown));
    this._el_0.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_7.resetOutline));
    this._el_0.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_7.onMouseInteraction));
    this._el_0.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_7.onFocus));
    final subscription_0 = this._ButtonDirective_0_5.instance.trigger.listen(this.eventHandler0(_ctx.collapse));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.ButtonDirective) && (0 == nodeIndex))) {
      return this._ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    final import21.AutoIdDirective local_mainId = import15.unsafeCast<ViewMaterialExpansionPanel0>(this.parentView.parentView)._AutoIdDirective_11_5.instance;
    changed = false;
    final currVal_3 = _ctx.expandIcon;
    if (import15.checkBinding(this._expr_3, currVal_3, 'expandIcon', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      this._MaterialIconComponent_0_6.icon = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.isExpanded;
    if (import15.checkBinding(this._expr_0, currVal_0, 'isExpanded', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_0, 'aria-expanded', currVal_0?.toString());
      this._expr_0 = currVal_0;
    }
    final currVal_1 = local_mainId.id;
    if (import15.checkBinding(this._expr_1, currVal_1, 'mainId.id', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_0, 'aria-controls', currVal_1?.toString());
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.closePanelMsg;
    if (import15.checkBinding(this._expr_2, currVal_2, 'closePanelMsg', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_0, 'aria-label', currVal_2);
      this._expr_2 = currVal_2;
    }
    this._ButtonDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    this._ButtonDirective_0_5.instance.handleClick($event);
    this._KeyboardOnlyFocusIndicatorDirective_0_7.onMouseInteraction();
  }
}

import27.EmbeddedView<void> viewFactory_MaterialExpansionPanel6(import30.RenderView parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel6(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel7 extends import27.EmbeddedView<import2.MaterialExpansionPanel> {
  import28.ViewMaterialIconComponent0 _compView_0;
  import5.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import29.MaterialIconComponent _MaterialIconComponent_0_6;
  import6.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_7;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import11.Element _el_0;
  _ViewMaterialExpansionPanel7(import30.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import28.ViewMaterialIconComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import16.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClassNonHtml(this._el_0, 'expand-button');
    import16.setAttribute(this._el_0, 'keyboardOnlyFocusIndicator', '');
    this.addShimC(this._el_0);
    this._ButtonDirective_0_5 = import5.ButtonDirectiveNgCd(import17.ButtonDirective(this._el_0, null));
    this._MaterialIconComponent_0_6 = import29.MaterialIconComponent(this._el_0);
    this._KeyboardOnlyFocusIndicatorDirective_0_7 = (import15.isDevMode
        ? import18.debugInjectorWrap(import6.KeyboardOnlyFocusIndicatorDirective, () {
            return import6.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.parentView.injectorGet(import19.DomService, this.parentView.parentView.parentIndex));
          })
        : import6.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.parentView.parentView.injectorGet(import19.DomService, this.parentView.parentView.parentIndex)));
    this._compView_0.create(this._MaterialIconComponent_0_6);
    this._el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    this._el_0.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_7.keydown));
    this._el_0.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_7.resetOutline));
    this._el_0.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_7.onMouseInteraction));
    this._el_0.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_7.onFocus));
    final subscription_0 = this._ButtonDirective_0_5.instance.trigger.listen(this.eventHandler0(_ctx.collapse));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.ButtonDirective) && (0 == nodeIndex))) {
      return this._ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_2 = _ctx.expandIcon;
    if (import15.checkBinding(this._expr_2, currVal_2, 'expandIcon', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      this._MaterialIconComponent_0_6.icon = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.isExpanded;
    if (import15.checkBinding(this._expr_0, currVal_0, 'isExpanded', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_0, 'aria-expanded', currVal_0?.toString());
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.closePanelMsg;
    if (import15.checkBinding(this._expr_1, currVal_1, 'closePanelMsg', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      import16.updateAttribute(this._el_0, 'aria-label', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._ButtonDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    this._ButtonDirective_0_5.instance.handleClick($event);
    this._KeyboardOnlyFocusIndicatorDirective_0_7.onMouseInteraction();
  }
}

import27.EmbeddedView<void> viewFactory_MaterialExpansionPanel7(import30.RenderView parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel7(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel8 extends import27.EmbeddedView<import2.MaterialExpansionPanel> {
  _ViewMaterialExpansionPanel8(import30.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import11.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'toolbelt');
    this.addShimC(_el_0);
    this.project(_el_0, 4);
    this.initRootNode(_el_0);
  }
}

import27.EmbeddedView<void> viewFactory_MaterialExpansionPanel8(import30.RenderView parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel8(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel9 extends import27.EmbeddedView<import2.MaterialExpansionPanel> {
  import31.ViewMaterialYesNoButtonsComponent0 _compView_0;
  import4.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_0_5;
  import4.EnterAcceptsDirective _EnterAcceptsDirective_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  _ViewMaterialExpansionPanel9(import30.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import31.ViewMaterialYesNoButtonsComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'action-buttons');
    import16.setAttribute(_el_0, 'reverse', '');
    this.addShimC(_el_0);
    this._MaterialYesNoButtonsComponent_0_5 = import4.MaterialYesNoButtonsComponent();
    this._EnterAcceptsDirective_0_6 = import4.EnterAcceptsDirective(this._MaterialYesNoButtonsComponent_0_5, _el_0, import15.unsafeCast<ViewMaterialExpansionPanel0>(this.parentView.parentView)._KeyUpBoundaryDirective_0_5);
    this._compView_0.create(this._MaterialYesNoButtonsComponent_0_5);
    final subscription_0 = this._MaterialYesNoButtonsComponent_0_5.yes.listen(this.eventHandler0(_ctx.doSave));
    final subscription_1 = this._MaterialYesNoButtonsComponent_0_5.no.listen(this.eventHandler0(_ctx.doCancel));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import32.HasDisabled)) {
        return this._MaterialYesNoButtonsComponent_0_5;
      }
      if (identical(token, import4.EnterAcceptsDirective)) {
        return this._EnterAcceptsDirective_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.saveText;
    if (import15.checkBinding(this._expr_0, currVal_0, 'saveText', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      this._MaterialYesNoButtonsComponent_0_5.yesText = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.cancelText;
    if (import15.checkBinding(this._expr_1, currVal_1, 'cancelText', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      this._MaterialYesNoButtonsComponent_0_5.noText = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.saveDisabled;
    if (import15.checkBinding(this._expr_2, currVal_2, 'saveDisabled', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      this._MaterialYesNoButtonsComponent_0_5.yesDisabled = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.cancelDisplayed;
    if (import15.checkBinding(this._expr_3, currVal_3, 'cancelDisplayed', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      this._MaterialYesNoButtonsComponent_0_5.noDisplayed = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.activeSaveCancelAction;
    if (import15.checkBinding(this._expr_4, currVal_4, 'activeSaveCancelAction', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      this._MaterialYesNoButtonsComponent_0_5.pending = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_5 = _ctx.enterAccepts;
    if (import15.checkBinding(this._expr_5, currVal_5, 'enterAccepts', 'package:angular_components/material_expansionpanel/material_expansionpanel.html')) {
      this._EnterAcceptsDirective_0_6.enterAccepts = currVal_5;
      this._expr_5 = currVal_5;
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._EnterAcceptsDirective_0_6.ngOnDestroy();
  }
}

import27.EmbeddedView<void> viewFactory_MaterialExpansionPanel9(import30.RenderView parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel9(parentView, parentIndex);
}

final List<dynamic> styles$MaterialExpansionPanelHost = const [];

class _ViewMaterialExpansionPanelHost0 extends import33.HostView<import2.MaterialExpansionPanel> {
  @override
  void build() {
    this.componentView = ViewMaterialExpansionPanel0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import15.isDevMode
        ? import18.debugInjectorWrap(import2.MaterialExpansionPanel, () {
            return import2.MaterialExpansionPanel(this.injectorGet(import34.NgZone, this.parentIndex), this.componentView, this.injectorGet(import19.DomService, this.parentIndex), null, null);
          })
        : import2.MaterialExpansionPanel(this.injectorGet(import34.NgZone, this.parentIndex), this.componentView, this.injectorGet(import19.DomService, this.parentIndex), null, null));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((((identical(token, import2.MaterialExpansionPanel) || identical(token, import23.DeferredContentAware)) || identical(token, import32.HasDisabled)) || identical(token, import35.FocusableItem)) || identical(token, import36.Focusable)) && (0 == nodeIndex))) {
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
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import33.HostView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanelHost0() {
  return _ViewMaterialExpansionPanelHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialExpansionPanel, createMaterialExpansionPanelFactory());
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
  _ref13.initReflector();
  _ref14.initReflector();
  _ref15.initReflector();
}
