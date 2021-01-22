// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_menu.dart';
export 'material_menu.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref2;
import 'package:angular_components/material_button/material_button.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:angular_components/material_menu/menu_popup.template.dart' as _ref5;
import 'package:angular_components/material_menu/menu_popup_wrapper.template.dart' as _ref6;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref7;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref8;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref9;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref10;
import 'package:angular_components/model/menu/menu.template.dart' as _ref11;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref12;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref13;
import 'package:angular/src/core/linker/views/component_view.dart' as import0;
import 'material_menu.dart' as import1;
import '../material_button/material_button.template.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import '../material_button/material_button.dart' as import4;
import '../src/material_tooltip/tooltip.dart' as import5;
import '../src/laminate/popup/popup_source_directive.dart' as import6;
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/views/view.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/src/di/errors.dart' as import13;
import '../src/material_tooltip/tooltip_controller.dart' as import14;
import '../material_tooltip/module.dart' as import15;
import '../utils/disposer/disposer.dart' as import16;
import 'package:angular/src/runtime/dom_helpers.dart' as import17;
import '../theme/dark_theme.dart' as import18;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import19;
import '../src/laminate/popup/dom_popup_source.dart' as import20;
import '../utils/angular/reference/reference.dart' as import21;
import '../focus/focus_interface.dart' as import22;
import 'package:angular/src/core/linker/template_ref.dart';
import '../button_decorator/button_decorator.dart' as import24;
import '../interfaces/has_disabled.dart' as import25;
import 'package:angular/src/runtime/queries.dart' as import26;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import28;
import '../material_icon/material_icon.template.dart' as import29;
import '../material_icon/material_icon.dart' as import30;
import 'package:angular/src/core/linker/views/render_view.dart' as import31;
import 'package:angular/src/runtime/text_binding.dart' as import32;
import 'package:angular/src/runtime/interpolate.dart' as import33;
import 'menu_popup.template.dart' as import34;
import 'menu_popup.dart' as import35;
import 'package:angular/src/core/linker/views/host_view.dart' as import36;

final List<dynamic> styles$MaterialMenuComponent = const [];

class ViewMaterialMenuComponent0 extends import0.ComponentView<import1.MaterialMenuComponent> {
  bool _viewQuery_MenuPopupComponent_1_isDirty = true;
  import2.ViewMaterialButtonComponent0 _compView_0;
  ViewContainer _appEl_0;
  dynamic _AcxDarkTheme_0_8;
  import4.MaterialButtonComponent _MaterialButtonComponent_0_9;
  import5.MaterialTooltipDirective _MaterialTooltipDirective_0_10;
  import6.PopupSourceDirective _PopupSourceDirective_0_11;
  dynamic __TooltipController_0_14;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  import8.Element _el_0;
  static import9.ComponentStyles _componentStyles;
  ViewMaterialMenuComponent0(import10.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-menu');
  }
  dynamic get _TooltipController_0_14 {
    if ((this.__TooltipController_0_14 == null)) {
      (this.__TooltipController_0_14 = (import12.isDevMode
          ? import13.debugInjectorWrap(import14.TooltipController, () {
              return import15.createTooltipController(this.parentView.injectorGetOptional(import14.TooltipController, this.parentIndex), this.parentView.injectorGetOptional(import16.Disposer, this.parentIndex));
            })
          : import15.createTooltipController(this.parentView.injectorGetOptional(import14.TooltipController, this.parentIndex), this.parentView.injectorGetOptional(import16.Disposer, this.parentIndex))));
    }
    return this.__TooltipController_0_14;
  }

  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:angular_components/lib/material_menu/material_menu.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import2.ViewMaterialButtonComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    parentRenderNode.append(this._el_0);
    this.updateChildClassNonHtml(this._el_0, 'trigger-button');
    import17.setAttribute(this._el_0, 'popupSource', '');
    this._appEl_0 = ViewContainer(0, null, this, this._el_0);
    this._AcxDarkTheme_0_8 = (import12.isDevMode
        ? import13.debugInjectorWrap(import18.AcxDarkTheme, () {
            return import18.AcxDarkTheme(this.parentView.injectorGetOptional(const import19.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex));
          })
        : import18.AcxDarkTheme(this.parentView.injectorGetOptional(const import19.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex)));
    this._MaterialButtonComponent_0_9 = import4.MaterialButtonComponent(this._el_0, this._AcxDarkTheme_0_8, this._compView_0, null);
    this._MaterialTooltipDirective_0_10 = (import12.isDevMode
        ? import13.debugInjectorWrap(import5.MaterialTooltipDirective, () {
            return import5.MaterialTooltipDirective(this.parentView.injectorGet(import20.DomPopupSourceFactory, this.parentIndex), this._appEl_0, this._el_0, this._appEl_0, this._compView_0, this.parentView.injectorGet(import8.Window, this.parentIndex), null, null);
          })
        : import5.MaterialTooltipDirective(this.parentView.injectorGet(import20.DomPopupSourceFactory, this.parentIndex), this._appEl_0, this._el_0, this._appEl_0, this._compView_0, this.parentView.injectorGet(import8.Window, this.parentIndex), null, null));
    this._PopupSourceDirective_0_11 = (import12.isDevMode
        ? import13.debugInjectorWrap(import6.PopupSourceDirective, () {
            return import6.PopupSourceDirective(this.parentView.injectorGet(import20.DomPopupSourceFactory, this.parentIndex), this._el_0, this.parentView.injectorGetOptional(import21.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import22.Focusable, this.parentIndex), null);
          })
        : import6.PopupSourceDirective(this.parentView.injectorGet(import20.DomPopupSourceFactory, this.parentIndex), this._el_0, this.parentView.injectorGetOptional(import21.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import22.Focusable, this.parentIndex), null));
    final _anchor_1 = import17.createAnchor();
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialMenuComponent1);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import17.createAnchor();
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialMenuComponent2);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _text_3 = import17.createText(' ');
    this._compView_0.createAndProject(this._MaterialButtonComponent_0_9, [
      <dynamic>[this._appEl_1, this._appEl_2, _text_3]..addAll(this.projectedNodes[0])
    ]);
    final _anchor_4 = import17.appendAnchor(parentRenderNode);
    this._appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_MaterialMenuComponent3);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    this._el_0.addEventListener('keydown', this.eventHandler1(_ctx.onKeyDown));
    final subscription_0 = this._MaterialButtonComponent_0_9.trigger.listen(this.eventHandler1(_ctx.handlePopupTriggerAction));
    import10.View.queryChangeDetectorRefs[this._MaterialButtonComponent_0_9] = this._compView_0;
    _ctx.button = this._MaterialButtonComponent_0_9;
    this.initSubscriptions([subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 3)) {
      if (identical(token, import18.AcxDarkTheme)) {
        return this._AcxDarkTheme_0_8;
      }
      if (((identical(token, import4.MaterialButtonComponent) || identical(token, import24.ButtonDirective)) || identical(token, import25.HasDisabled))) {
        return this._MaterialButtonComponent_0_9;
      }
      if (identical(token, import14.TooltipController)) {
        return this._TooltipController_0_14;
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
    final currVal_2 = _ctx.disabled;
    if (import12.checkBinding(this._expr_2, currVal_2, 'disabled', 'package:angular_components/material_menu/material_menu.html')) {
      this._MaterialButtonComponent_0_9.disabled = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.tabbable;
    if (import12.checkBinding(this._expr_3, currVal_3, 'tabbable', 'package:angular_components/material_menu/material_menu.html')) {
      this._MaterialButtonComponent_0_9.tabbable = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_4 = _ctx.tooltipText;
    if (import12.checkBinding(this._expr_4, currVal_4, 'tooltipText', 'package:angular_components/material_menu/material_menu.html')) {
      this._MaterialTooltipDirective_0_10.text = currVal_4;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.hasTooltip;
    if (import12.checkBinding(this._expr_5, currVal_5, 'hasTooltip', 'package:angular_components/material_menu/material_menu.html')) {
      this._MaterialTooltipDirective_0_10.canShow = currVal_5;
      this._expr_5 = currVal_5;
    }
    if (((!import12.debugThrowIfChanged) && firstCheck)) {
      this._MaterialTooltipDirective_0_10.ngOnInit();
    }
    this._NgIf_1_9.ngIf = _ctx.hasIcon;
    this._NgIf_2_9.ngIf = (_ctx.buttonText != null);
    this._NgIf_4_9.ngIf = _ctx.hasSubmenu;
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    if ((!import12.debugThrowIfChanged)) {
      if (this._viewQuery_MenuPopupComponent_1_isDirty) {
        _ctx.menuPopup = import26.firstOrNull(this._appEl_4.mapNestedViewsWithSingleResult((_ViewMaterialMenuComponent3 nestedView) {
          import10.View.queryChangeDetectorRefs[nestedView._MenuPopupComponent_0_5] = nestedView._compView_0;
          return nestedView._MenuPopupComponent_0_5;
        }));
        this._viewQuery_MenuPopupComponent_1_isDirty = false;
      }
    }
    final currVal_0 = _ctx.ariaLabel;
    if (import12.checkBinding(this._expr_0, currVal_0, 'ariaLabel', 'package:angular_components/material_menu/material_menu.html')) {
      import17.updateAttribute(this._el_0, 'aria-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.hasIcon;
    if (import12.checkBinding(this._expr_1, currVal_1, 'hasIcon', 'package:angular_components/material_menu/material_menu.html')) {
      import17.updateAttribute(this._el_0, 'icon', (currVal_1 ? '' : null));
      this._expr_1 = currVal_1;
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    if ((!import12.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialTooltipDirective_0_10.ngAfterViewInit();
        this._PopupSourceDirective_0_11.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._MaterialTooltipDirective_0_10.ngOnDestroy();
    this._PopupSourceDirective_0_11.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import9.ComponentStyles.unscoped(styles$MaterialMenuComponent, _debugComponentUrl));
      if (import12.isDevMode) {
        import9.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialMenuComponentNgFactory = ComponentFactory<import1.MaterialMenuComponent>('material-menu', viewFactory_MaterialMenuComponentHost0);
ComponentFactory<import1.MaterialMenuComponent> get MaterialMenuComponentNgFactory {
  return _MaterialMenuComponentNgFactory;
}

ComponentFactory<import1.MaterialMenuComponent> createMaterialMenuComponentFactory() {
  return ComponentFactory('material-menu', viewFactory_MaterialMenuComponentHost0);
}

class _ViewMaterialMenuComponent1 extends import28.EmbeddedView<import1.MaterialMenuComponent> {
  import29.ViewMaterialIconComponent0 _compView_0;
  import30.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  _ViewMaterialMenuComponent1(import31.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import29.ViewMaterialIconComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this._MaterialIconComponent_0_5 = import30.MaterialIconComponent(_el_0);
    this._compView_0.create(this._MaterialIconComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.menu.uiIcon;
    if (import12.checkBinding(this._expr_0, currVal_0, 'menu.uiIcon', 'package:angular_components/material_menu/material_menu.html')) {
      this._MaterialIconComponent_0_5.icon = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
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

import28.EmbeddedView<void> viewFactory_MaterialMenuComponent1(import31.RenderView parentView, int parentIndex) {
  return _ViewMaterialMenuComponent1(parentView, parentIndex);
}

class _ViewMaterialMenuComponent2 extends import28.EmbeddedView<import1.MaterialMenuComponent> {
  final import32.TextBinding _textBinding_1 = import32.TextBinding();
  _ViewMaterialMenuComponent2(import31.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import33.interpolateString0(_ctx.buttonText));
  }
}

import28.EmbeddedView<void> viewFactory_MaterialMenuComponent2(import31.RenderView parentView, int parentIndex) {
  return _ViewMaterialMenuComponent2(parentView, parentIndex);
}

class _ViewMaterialMenuComponent3 extends import28.EmbeddedView<import1.MaterialMenuComponent> {
  import34.ViewMenuPopupComponent0 _compView_0;
  import35.MenuPopupComponent _MenuPopupComponent_0_5;
  import6.PopupSourceDirective _PopupSourceDirective_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  _ViewMaterialMenuComponent3(import31.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import34.ViewMenuPopupComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this._MenuPopupComponent_0_5 = import35.MenuPopupComponent(_el_0);
    this._PopupSourceDirective_0_6 = (import12.isDevMode
        ? import13.debugInjectorWrap(import6.PopupSourceDirective, () {
            return import6.PopupSourceDirective(this.parentView.injectorGet(import20.DomPopupSourceFactory, this.parentIndex), _el_0, this.parentView.injectorGetOptional(import21.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import22.Focusable, this.parentIndex), null);
          })
        : import6.PopupSourceDirective(this.parentView.injectorGet(import20.DomPopupSourceFactory, this.parentIndex), _el_0, this.parentView.injectorGetOptional(import21.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import22.Focusable, this.parentIndex), null));
    this._compView_0.createAndProject(this._MenuPopupComponent_0_5, [this.projectedNodes[1]]);
    final subscription_0 = this._MenuPopupComponent_0_5.expandActionChange.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_toggle = import12.unsafeCast<ViewMaterialMenuComponent0>(this.parentView)._PopupSourceDirective_0_11;
    changed = false;
    final currVal_0 = _ctx.menu;
    if (import12.checkBinding(this._expr_0, currVal_0, 'menu', 'package:angular_components/material_menu/material_menu.html')) {
      this._MenuPopupComponent_0_5.menu = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.preferredPositions;
    if (import12.checkBinding(this._expr_1, currVal_1, 'preferredPositions', 'package:angular_components/material_menu/material_menu.html')) {
      this._MenuPopupComponent_0_5.preferredPositions = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.expandAction;
    if (import12.checkBinding(this._expr_2, currVal_2, 'expandAction', 'package:angular_components/material_menu/material_menu.html')) {
      this._MenuPopupComponent_0_5.expandAction = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.width;
    if (import12.checkBinding(this._expr_3, currVal_3, 'width', 'package:angular_components/material_menu/material_menu.html')) {
      this._MenuPopupComponent_0_5.width = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = local_toggle;
    if (import12.checkBinding(this._expr_4, currVal_4, 'toggle', 'package:angular_components/material_menu/material_menu.html')) {
      this._MenuPopupComponent_0_5.popupSource = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.popupClass;
    if (import12.checkBinding(this._expr_5, currVal_5, 'popupClass', 'package:angular_components/material_menu/material_menu.html')) {
      this._MenuPopupComponent_0_5.popupClass = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
    if ((!import12.debugThrowIfChanged)) {
      if (firstCheck) {
        this._PopupSourceDirective_0_6.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import12.unsafeCast<ViewMaterialMenuComponent0>(this.parentView)._viewQuery_MenuPopupComponent_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._PopupSourceDirective_0_6.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.expandAction = $event;
  }
}

import28.EmbeddedView<void> viewFactory_MaterialMenuComponent3(import31.RenderView parentView, int parentIndex) {
  return _ViewMaterialMenuComponent3(parentView, parentIndex);
}

final List<dynamic> styles$MaterialMenuComponentHost = const [];

class _ViewMaterialMenuComponentHost0 extends import36.HostView<import1.MaterialMenuComponent> {
  @override
  void build() {
    this.componentView = ViewMaterialMenuComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import1.MaterialMenuComponent(_el_0);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import25.HasDisabled) && (0 == nodeIndex))) {
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
    this.componentView.detectChanges();
    if ((!import12.debugThrowIfChanged)) {
      if (firstCheck) {
        this.component.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import36.HostView<import1.MaterialMenuComponent> viewFactory_MaterialMenuComponentHost0() {
  return _ViewMaterialMenuComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialMenuComponent, createMaterialMenuComponentFactory());
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
}
