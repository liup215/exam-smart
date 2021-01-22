// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'ink_tooltip.dart';
export 'ink_tooltip.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content.template.dart' as _ref1;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref2;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref3;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref4;
import 'package:angular_components/material_tooltip/module.template.dart' as _ref5;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref6;
import 'tooltip_controller.template.dart' as _ref7;
import 'tooltip_target.template.dart' as _ref8;
import 'package:angular_components/src/material_tooltip/ink_tooltip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'ink_tooltip.dart' as import2;
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
import '../../material_popup/material_popup.template.dart' as import14;
import '../../material_popup/material_popup.dart' as import15;
import '../../content/deferred_content.dart' as import16;
import 'package:angular/src/core/linker/views/render_view.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import '../laminate/popup/popup_hierarchy.dart' as import19;
import 'package:angular/src/core/zone/ng_zone.dart' as import20;
import '../laminate/overlay/overlay_service.dart' as import21;
import '../../utils/browser/dom_service/dom_service.dart' as import22;
import '../../laminate/overlay/zindexer.dart' as import23;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import24;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import26;
import '../laminate/popup/popup_size_provider.dart' as import27;
import 'package:angular/src/core/linker/element_ref.dart';
import '../../content/deferred_content_aware.dart' as import29;
import '../../mixins/material_dropdown_base.dart' as import30;
import '../laminate/popup/popup_ref.dart' as import31;
import 'package:angular/src/runtime/interpolate.dart' as import32;
import 'package:angular/src/runtime/text_binding.dart' as import33;
import 'package:angular/src/core/linker/views/host_view.dart' as import34;
import 'tooltip_controller.dart' as import35;
import '../../material_tooltip/module.dart' as import36;
import '../../utils/disposer/disposer.dart' as import37;

final List<dynamic> styles$MaterialInkTooltipComponent = [import0.styles];

class ViewMaterialInkTooltipComponent0 extends import1.ComponentView<import2.MaterialInkTooltipComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialInkTooltipComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-tooltip-text');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/src/material_tooltip/ink_tooltip.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _text_0 = import10.appendText(parentRenderNode, '        ');
    final _anchor_1 = import10.appendAnchor(parentRenderNode);
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_MaterialInkTooltipComponent1);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_1_9.ngIf = (_ctx.popupSource != null);
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialInkTooltipComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialInkTooltipComponentNgFactory = ComponentFactory<import2.MaterialInkTooltipComponent>('material-tooltip-text', viewFactory_MaterialInkTooltipComponentHost0);
ComponentFactory<import2.MaterialInkTooltipComponent> get MaterialInkTooltipComponentNgFactory {
  return _MaterialInkTooltipComponentNgFactory;
}

ComponentFactory<import2.MaterialInkTooltipComponent> createMaterialInkTooltipComponentFactory() {
  return ComponentFactory('material-tooltip-text', viewFactory_MaterialInkTooltipComponentHost0);
}

class _ViewMaterialInkTooltipComponent1 extends import13.EmbeddedView<import2.MaterialInkTooltipComponent> {
  import14.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import15.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupHierarchy_0_11;
  dynamic __PopupRef_0_12;
  ViewContainer _appEl_2;
  import16.DeferredContentDirective _DeferredContentDirective_2_9;
  var _expr_0;
  var _expr_4;
  var _expr_5;
  var _expr_7;
  import8.Element _el_0;
  _ViewMaterialInkTooltipComponent1(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  dynamic get _PopupHierarchy_0_11 {
    if ((this.__PopupHierarchy_0_11 == null)) {
      (this.__PopupHierarchy_0_11 = import15.getHierarchy(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupHierarchy_0_11;
  }

  dynamic get _PopupRef_0_12 {
    if ((this.__PopupRef_0_12 == null)) {
      (this.__PopupRef_0_12 = import15.getResolvedPopupRef(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupRef_0_12;
  }

  @override
  void build() {
    this._compView_0 = import14.ViewMaterialPopupComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import10.setAttribute(this._el_0, 'enforceSpaceConstraints', '');
    import10.setAttribute(this._el_0, 'ink', '');
    import10.setAttribute(this._el_0, 'role', 'tooltip');
    import10.setAttribute(this._el_0, 'trackLayoutChanges', '');
    this.addShimC(this._el_0);
    this._appEl_0 = ViewContainer(0, null, this, this._el_0);
    this._MaterialPopupComponent_0_8 = (import9.isDevMode
        ? import18.debugInjectorWrap(import15.MaterialPopupComponent, () {
            return import15.MaterialPopupComponent(this.parentView.injectorGetOptional(import19.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import15.MaterialPopupComponent, this.parentIndex), 'tooltip', this.parentView.injectorGet(import20.NgZone, this.parentIndex), this.parentView.injectorGet(import21.OverlayService, this.parentIndex), this.parentView.injectorGet(import22.DomService, this.parentIndex), this.parentView.injectorGet(import23.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<List<import26.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import27.PopupSizeProvider, this.parentIndex), this._compView_0, this._appEl_0, ElementRef(this._el_0));
          })
        : import15.MaterialPopupComponent(this.parentView.injectorGetOptional(import19.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import15.MaterialPopupComponent, this.parentIndex), 'tooltip', this.parentView.injectorGet(import20.NgZone, this.parentIndex), this.parentView.injectorGet(import21.OverlayService, this.parentIndex), this.parentView.injectorGet(import22.DomService, this.parentIndex), this.parentView.injectorGet(import23.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<List<import26.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import27.PopupSizeProvider, this.parentIndex), this._compView_0, this._appEl_0, ElementRef(this._el_0)));
    final _text_1 = import10.createText('\n          ');
    final _anchor_2 = import10.createAnchor();
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MaterialInkTooltipComponent2);
    this._DeferredContentDirective_2_9 = import16.DeferredContentDirective(this._appEl_2, _TemplateRef_2_8, this._MaterialPopupComponent_0_8, this);
    final _text_3 = import10.createText('\n        ');
    this._compView_0.createAndProject(this._MaterialPopupComponent_0_8, [
      const [],
      [_text_1, this._appEl_2, _text_3],
      const []
    ]);
    this.initRootNode(this._appEl_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 3)) {
      if (((identical(token, import15.MaterialPopupComponent) || identical(token, import29.DeferredContentAware)) || identical(token, import30.DropdownHandle))) {
        return this._MaterialPopupComponent_0_8;
      }
      if (identical(token, import19.PopupHierarchy)) {
        return this._PopupHierarchy_0_11;
      }
      if (identical(token, import31.PopupRef)) {
        return this._PopupRef_0_12;
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
    if (firstCheck) {
      this._MaterialPopupComponent_0_8.autoDismiss = false;
      changed = true;
      this._MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      changed = true;
      this._MaterialPopupComponent_0_8.matchMinSourceWidth = false;
      changed = true;
      this._MaterialPopupComponent_0_8.trackLayoutChanges = true;
      changed = true;
      this._MaterialPopupComponent_0_8.inkBackground = true;
      changed = true;
    }
    final currVal_4 = _ctx.positions;
    if (import9.checkBinding(this._expr_4, currVal_4, 'positions', 'asset:angular_components/lib/src/material_tooltip/ink_tooltip.dart')) {
      this._MaterialPopupComponent_0_8.preferredPositions = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.popupSource;
    if (import9.checkBinding(this._expr_5, currVal_5, 'popupSource', 'asset:angular_components/lib/src/material_tooltip/ink_tooltip.dart')) {
      this._MaterialPopupComponent_0_8.source = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_7 = _ctx.showPopup;
    if (import9.checkBinding(this._expr_7, currVal_7, 'showPopup', 'asset:angular_components/lib/src/material_tooltip/ink_tooltip.dart')) {
      this._MaterialPopupComponent_0_8.visible = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._DeferredContentDirective_2_9.preserveDimensions = true);
    }
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    final currVal_0 = import32.interpolateString1('aacmtit-ink-tooltip-shadow ', _ctx.popupClassName, '');
    if (import9.checkBinding(this._expr_0, currVal_0, 'aacmtit-ink-tooltip-shadow {{popupClassName}}', 'asset:angular_components/lib/src/material_tooltip/ink_tooltip.dart')) {
      this._compView_0.updateChildClassNonHtml(this._el_0, currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialPopupComponent_0_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._DeferredContentDirective_2_9.ngOnDestroy();
    this._MaterialPopupComponent_0_8.ngOnDestroy();
  }
}

import13.EmbeddedView<void> viewFactory_MaterialInkTooltipComponent1(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialInkTooltipComponent1(parentView, parentIndex);
}

class _ViewMaterialInkTooltipComponent2 extends import13.EmbeddedView<import2.MaterialInkTooltipComponent> {
  final import33.TextBinding _textBinding_2 = import33.TextBinding();
  _ViewMaterialInkTooltipComponent2(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'ink-container');
    this.addShimC(_el_0);
    final _text_1 = import10.appendText(_el_0, '\n            ');
    _el_0.append(this._textBinding_2.element);
    this.project(_el_0, 0);
    final _text_3 = import10.appendText(_el_0, '\n          ');
    _el_0.addEventListener('mouseover', this.eventHandler0(_ctx.onMouseOver));
    _el_0.addEventListener('mouseleave', this.eventHandler0(_ctx.onMouseLeave));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_2.updateText(import32.interpolateString0(_ctx.text));
  }
}

import13.EmbeddedView<void> viewFactory_MaterialInkTooltipComponent2(import17.RenderView parentView, int parentIndex) {
  return _ViewMaterialInkTooltipComponent2(parentView, parentIndex);
}

final List<dynamic> styles$MaterialInkTooltipComponentHost = const [];

class _ViewMaterialInkTooltipComponentHost0 extends import34.HostView<import2.MaterialInkTooltipComponent> {
  dynamic _TooltipController_0_5;
  @override
  void build() {
    this.componentView = ViewMaterialInkTooltipComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._TooltipController_0_5 = (import9.isDevMode
        ? import18.debugInjectorWrap(import35.TooltipController, () {
            return import36.createTooltipController(this.injectorGetOptional(import35.TooltipController, this.parentIndex), this.injectorGetOptional(import37.Disposer, this.parentIndex));
          })
        : import36.createTooltipController(this.injectorGetOptional(import35.TooltipController, this.parentIndex), this.injectorGetOptional(import37.Disposer, this.parentIndex)));
    this.component = import2.MaterialInkTooltipComponent(this._TooltipController_0_5, this.componentView, _el_0, null);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import35.TooltipController) && (0 == nodeIndex))) {
      return this._TooltipController_0_5;
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

import34.HostView<import2.MaterialInkTooltipComponent> viewFactory_MaterialInkTooltipComponentHost0() {
  return _ViewMaterialInkTooltipComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialInkTooltipComponent, createMaterialInkTooltipComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
}
