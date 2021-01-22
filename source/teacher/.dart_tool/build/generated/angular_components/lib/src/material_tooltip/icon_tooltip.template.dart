// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'icon_tooltip.dart';
export 'icon_tooltip.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref1;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref2;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:angular_components/theme/dark_theme.template.dart' as _ref5;
import 'paper_tooltip.template.dart' as _ref6;
import 'tooltip_target.template.dart' as _ref7;
import 'package:angular_components/src/material_tooltip/icon_tooltip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'icon_tooltip.dart' as import2;
import '../../material_icon/material_icon.template.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'tooltip_target.dart' as import5;
import '../../material_icon/material_icon.dart' as import6;
import '../../focus/keyboard_only_focus_indicator.dart' as import7;
import 'paper_tooltip.template.dart' as import8;
import 'paper_tooltip.dart' as import9;
import 'dart:html' as import10;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import11;
import 'package:angular/src/core/linker/views/view.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/src/runtime/dom_helpers.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../laminate/popup/dom_popup_source.dart' as import17;
import '../../utils/browser/dom_service/dom_service.dart' as import18;
import 'tooltip_controller.dart' as import19;
import '../../material_tooltip/module.dart' as import20;
import '../../utils/disposer/disposer.dart' as import21;
import '../../content/deferred_content_aware.dart' as import22;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import24;
import '../../theme/dark_theme.dart' as import25;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import26;

final List<dynamic> styles$MaterialIconTooltipComponent = [import0.styles];

class ViewMaterialIconTooltipComponent0 extends import1.ComponentView<import2.MaterialIconTooltipComponent> {
  import3.ViewMaterialIconComponent0 _compView_1;
  ViewContainer _appEl_1;
  import5.ClickableTooltipTargetDirective _ClickableTooltipTargetDirective_1_8;
  import6.MaterialIconComponent _MaterialIconComponent_1_9;
  import7.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_1_10;
  import8.ViewMaterialPaperTooltipComponent0 _compView_4;
  dynamic _TooltipController_4_5;
  import9.MaterialPaperTooltipComponent _MaterialPaperTooltipComponent_4_6;
  dynamic __Tooltip_4_7;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  import10.Element _el_1;
  static import11.ComponentStyles _componentStyles;
  ViewMaterialIconTooltipComponent0(import12.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import10.document.createElement('material-icon-tooltip');
  }
  dynamic get _Tooltip_4_7 {
    if ((this.__Tooltip_4_7 == null)) {
      (this.__Tooltip_4_7 = import9.getTooltipHandle(this._MaterialPaperTooltipComponent_4_6));
    }
    return this.__Tooltip_4_7;
  }

  static String get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import10.HtmlElement parentRenderNode = this.initViewRoot();
    final _text_0 = import15.appendText(parentRenderNode, '    ');
    this._compView_1 = import3.ViewMaterialIconComponent0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    parentRenderNode.append(this._el_1);
    import15.setAttribute(this._el_1, 'clickableTooltipTarget', '');
    import15.setAttribute(this._el_1, 'keyboardOnlyFocusIndicator', '');
    this._el_1.tabIndex = 0;
    this.addShimC(this._el_1);
    this._appEl_1 = ViewContainer(1, null, this, this._el_1);
    this._ClickableTooltipTargetDirective_1_8 = (import14.isDevMode
        ? import16.debugInjectorWrap(import5.ClickableTooltipTargetDirective, () {
            return import5.ClickableTooltipTargetDirective(this.parentView.injectorGet(import17.DomPopupSourceFactory, this.parentIndex), this._appEl_1, this._el_1, this._compView_1, null);
          })
        : import5.ClickableTooltipTargetDirective(this.parentView.injectorGet(import17.DomPopupSourceFactory, this.parentIndex), this._appEl_1, this._el_1, this._compView_1, null));
    this._MaterialIconComponent_1_9 = import6.MaterialIconComponent(this._el_1);
    this._KeyboardOnlyFocusIndicatorDirective_1_10 = (import14.isDevMode
        ? import16.debugInjectorWrap(import7.KeyboardOnlyFocusIndicatorDirective, () {
            return import7.KeyboardOnlyFocusIndicatorDirective(this._el_1, this.parentView.injectorGet(import18.DomService, this.parentIndex));
          })
        : import7.KeyboardOnlyFocusIndicatorDirective(this._el_1, this.parentView.injectorGet(import18.DomService, this.parentIndex)));
    this._compView_1.create(this._MaterialIconComponent_1_9);
    final _text_3 = import15.appendText(parentRenderNode, '\n    ');
    this._compView_4 = import8.ViewMaterialPaperTooltipComponent0(this, 4);
    final _el_4 = this._compView_4.rootElement;
    parentRenderNode.append(_el_4);
    this.addShimC(_el_4);
    this._TooltipController_4_5 = (import14.isDevMode
        ? import16.debugInjectorWrap(import19.TooltipController, () {
            return import20.createTooltipController(this.parentView.injectorGetOptional(import19.TooltipController, this.parentIndex), this.parentView.injectorGetOptional(import21.Disposer, this.parentIndex));
          })
        : import20.createTooltipController(this.parentView.injectorGetOptional(import19.TooltipController, this.parentIndex), this.parentView.injectorGetOptional(import21.Disposer, this.parentIndex)));
    this._MaterialPaperTooltipComponent_4_6 = import9.MaterialPaperTooltipComponent(this._TooltipController_4_5, this._compView_4, _el_4, null);
    final _text_5 = import15.createText('\n      ');
    final _text_6 = import15.createText('\n    ');
    this._compView_4.createAndProject(this._MaterialPaperTooltipComponent_4_6, [
      const [],
      <dynamic>[_text_5]..addAll(this.projectedNodes[0])..addAll([_text_6]),
      const []
    ]);
    this._el_1.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this._el_1.addEventListener('mouseover', this.eventHandler0(this._ClickableTooltipTargetDirective_1_8.onMouseOver));
    this._el_1.addEventListener('mouseleave', this.eventHandler0(this._ClickableTooltipTargetDirective_1_8.onMouseLeave));
    this._el_1.addEventListener('blur', this.eventHandler1(this._handleEvent_1));
    this._el_1.addEventListener('keypress', this.eventHandler1(this._ClickableTooltipTargetDirective_1_8.kbTrigger));
    this._el_1.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_1_10.keydown));
    this._el_1.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_1_10.onMouseInteraction));
    this._el_1.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_1_10.onFocus));
    import12.View.queryChangeDetectorRefs[this._MaterialPaperTooltipComponent_4_6] = this._compView_4;
    _ctx.deferredContentAware = this._MaterialPaperTooltipComponent_4_6;
    _ctx.tooltipBehavior = this._ClickableTooltipTargetDirective_1_8;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((4 <= nodeIndex) && (nodeIndex <= 6))) {
      if (identical(token, import19.TooltipController)) {
        return this._TooltipController_4_5;
      }
      if ((identical(token, import9.MaterialPaperTooltipComponent) || identical(token, import22.DeferredContentAware))) {
        return this._MaterialPaperTooltipComponent_4_6;
      }
      if (identical(token, import19.Tooltip)) {
        return this._Tooltip_4_7;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final import5.ClickableTooltipTargetDirective local_tooltipRef = this._ClickableTooltipTargetDirective_1_8;
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.icon, null)) {
        this._MaterialIconComponent_1_9.icon = _ctx.icon;
        changed = true;
      }
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    changed = false;
    final currVal_3 = _ctx.preferredPositions;
    if (import14.checkBinding(this._expr_3, currVal_3, 'preferredPositions', 'asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart')) {
      this._MaterialPaperTooltipComponent_4_6.preferredPositions = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.offsetX;
    if (import14.checkBinding(this._expr_4, currVal_4, 'offsetX', 'asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart')) {
      this._MaterialPaperTooltipComponent_4_6.offsetX = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.offsetY;
    if (import14.checkBinding(this._expr_5, currVal_5, 'offsetY', 'asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart')) {
      this._MaterialPaperTooltipComponent_4_6.offsetY = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = local_tooltipRef;
    if (import14.checkBinding(this._expr_6, currVal_6, 'tooltipRef', 'asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart')) {
      this._MaterialPaperTooltipComponent_4_6.tooltipRef = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    if (changed) {
      this._compView_4.markAsCheckOnce();
    }
    this._appEl_1.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(import2.MaterialIconTooltipComponent.helpTooltipLabel, null)) {
        import15.updateAttribute(this._el_1, 'aria-label', import2.MaterialIconTooltipComponent.helpTooltipLabel);
      }
      if (!identical(_ctx.iconSize, null)) {
        import15.updateAttribute(this._el_1, 'size', _ctx.iconSize);
      }
    }
    this._compView_1.detectChanges();
    this._compView_4.detectChanges();
    if ((!import14.debugThrowIfChanged)) {
      if (firstCheck) {
        this._ClickableTooltipTargetDirective_1_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._compView_1.destroyInternalState();
    this._compView_4.destroyInternalState();
    this._ClickableTooltipTargetDirective_1_8.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    this._ClickableTooltipTargetDirective_1_8.onClick();
    this._KeyboardOnlyFocusIndicatorDirective_1_10.onMouseInteraction();
  }

  void _handleEvent_1($event) {
    this._ClickableTooltipTargetDirective_1_8.onBlur($event);
    this._KeyboardOnlyFocusIndicatorDirective_1_10.resetOutline();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import11.ComponentStyles.scoped(styles$MaterialIconTooltipComponent, _debugComponentUrl));
      if (import14.isDevMode) {
        import11.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialIconTooltipComponentNgFactory = ComponentFactory<import2.MaterialIconTooltipComponent>('material-icon-tooltip', viewFactory_MaterialIconTooltipComponentHost0);
ComponentFactory<import2.MaterialIconTooltipComponent> get MaterialIconTooltipComponentNgFactory {
  return _MaterialIconTooltipComponentNgFactory;
}

ComponentFactory<import2.MaterialIconTooltipComponent> createMaterialIconTooltipComponentFactory() {
  return ComponentFactory('material-icon-tooltip', viewFactory_MaterialIconTooltipComponentHost0);
}

final List<dynamic> styles$MaterialIconTooltipComponentHost = const [];

class _ViewMaterialIconTooltipComponentHost0 extends import24.HostView<import2.MaterialIconTooltipComponent> {
  dynamic _AcxDarkTheme_0_5;
  @override
  void build() {
    this.componentView = ViewMaterialIconTooltipComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._AcxDarkTheme_0_5 = (import14.isDevMode
        ? import16.debugInjectorWrap(import25.AcxDarkTheme, () {
            return import25.AcxDarkTheme(this.injectorGetOptional(const import26.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex));
          })
        : import25.AcxDarkTheme(this.injectorGetOptional(const import26.OpaqueToken<dynamic>('acxDarkTheme'), this.parentIndex)));
    this.component = import2.MaterialIconTooltipComponent(this._AcxDarkTheme_0_5, _el_0, null, null, null);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import25.AcxDarkTheme)) {
        return this._AcxDarkTheme_0_5;
      }
      if (identical(token, import22.DeferredContentAware)) {
        return this.component;
      }
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

import24.HostView<import2.MaterialIconTooltipComponent> viewFactory_MaterialIconTooltipComponentHost0() {
  return _ViewMaterialIconTooltipComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialIconTooltipComponent, createMaterialIconTooltipComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
