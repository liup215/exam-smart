// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'paper_tooltip.dart';
export 'paper_tooltip.dart';
import 'package:angular_components/src/material_tooltip/paper_tooltip.dart' as _i1;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref4;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref5;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref6;
import 'package:angular_components/material_tooltip/module.template.dart' as _ref7;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref8;
import 'tooltip_controller.template.dart' as _ref9;
import 'tooltip_target.template.dart' as _ref10;
import 'package:angular_components/src/material_tooltip/paper_tooltip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'paper_tooltip.dart' as import2;
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
import '../../material_popup/material_popup.template.dart' as import15;
import '../../material_popup/material_popup.dart' as import16;
import '../../focus/focus.dart' as import17;
import 'package:angular/src/core/linker/views/render_view.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import '../laminate/popup/popup_hierarchy.dart' as import20;
import 'package:angular/src/core/zone/ng_zone.dart' as import21;
import '../laminate/overlay/overlay_service.dart' as import22;
import '../../utils/browser/dom_service/dom_service.dart' as import23;
import '../../laminate/overlay/zindexer.dart' as import24;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import25;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import27;
import '../laminate/popup/popup_size_provider.dart' as import28;
import 'package:angular/src/core/linker/element_ref.dart';
import '../../laminate/components/modal/modal.dart' as import30;
import '../../content/deferred_content_aware.dart' as import31;
import '../../mixins/material_dropdown_base.dart' as import32;
import '../laminate/popup/popup_ref.dart' as import33;
import 'package:angular/src/core/linker/views/host_view.dart' as import34;
import 'tooltip_controller.dart' as import35;
import '../../material_tooltip/module.dart' as import36;
import '../../utils/disposer/disposer.dart' as import37;

final List<dynamic> styles$MaterialPaperTooltipComponent = [import0.styles];

class ViewMaterialPaperTooltipComponent0 extends import1.ComponentView<import2.MaterialPaperTooltipComponent> {
  bool _viewQuery_MaterialPopupComponent_0_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialPaperTooltipComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-tooltip-card');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_MaterialPaperTooltipComponent1);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = (_ctx.popupSource != null);
    this._appEl_0.detectChangesInNestedViews();
    if ((!import9.debugThrowIfChanged)) {
      if (this._viewQuery_MaterialPopupComponent_0_isDirty) {
        _ctx.popupChild = import12.firstOrNull(this._appEl_0.mapNestedViewsWithSingleResult((_ViewMaterialPaperTooltipComponent1 nestedView) {
          import6.View.queryChangeDetectorRefs[nestedView._MaterialPopupComponent_0_8] = nestedView._compView_0;
          return nestedView._MaterialPopupComponent_0_8;
        }));
        this._viewQuery_MaterialPopupComponent_0_isDirty = false;
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
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialPaperTooltipComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialPaperTooltipComponentNgFactory = ComponentFactory<import2.MaterialPaperTooltipComponent>('material-tooltip-card', viewFactory_MaterialPaperTooltipComponentHost0);
ComponentFactory<import2.MaterialPaperTooltipComponent> get MaterialPaperTooltipComponentNgFactory {
  return _MaterialPaperTooltipComponentNgFactory;
}

ComponentFactory<import2.MaterialPaperTooltipComponent> createMaterialPaperTooltipComponentFactory() {
  return ComponentFactory('material-tooltip-card', viewFactory_MaterialPaperTooltipComponentHost0);
}

class _ViewMaterialPaperTooltipComponent1 extends import14.EmbeddedView<import2.MaterialPaperTooltipComponent> {
  import15.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import16.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic _PopupRef_0_9;
  dynamic __PopupHierarchy_0_12;
  import17.AutoFocusDirective _AutoFocusDirective_2_5;
  var _expr_1;
  var _expr_2;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_9;
  var _expr_10;
  import8.Element _el_0;
  _ViewMaterialPaperTooltipComponent1(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  dynamic get _PopupHierarchy_0_12 {
    if ((this.__PopupHierarchy_0_12 == null)) {
      (this.__PopupHierarchy_0_12 = import16.getHierarchy(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupHierarchy_0_12;
  }

  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import15.ViewMaterialPopupComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import10.setAttribute(this._el_0, 'enforceSpaceConstraints', '');
    import10.setAttribute(this._el_0, 'trackLayoutChanges', '');
    this.addShimC(this._el_0);
    this._appEl_0 = ViewContainer(0, null, this, this._el_0);
    this._MaterialPopupComponent_0_8 = (import9.isDevMode
        ? import19.debugInjectorWrap(import16.MaterialPopupComponent, () {
            return import16.MaterialPopupComponent(this.parentView.injectorGetOptional(import20.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import16.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import21.NgZone, this.parentIndex), this.parentView.injectorGet(import22.OverlayService, this.parentIndex), this.parentView.injectorGet(import23.DomService, this.parentIndex), this.parentView.injectorGet(import24.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import25.OpaqueToken<List<import27.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import25.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import25.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import28.PopupSizeProvider, this.parentIndex), this._compView_0, this._appEl_0, ElementRef(this._el_0));
          })
        : import16.MaterialPopupComponent(this.parentView.injectorGetOptional(import20.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import16.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import21.NgZone, this.parentIndex), this.parentView.injectorGet(import22.OverlayService, this.parentIndex), this.parentView.injectorGet(import23.DomService, this.parentIndex), this.parentView.injectorGet(import24.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import25.OpaqueToken<List<import27.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import25.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import25.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import28.PopupSizeProvider, this.parentIndex), this._compView_0, this._appEl_0, ElementRef(this._el_0)));
    this._PopupRef_0_9 = import16.getResolvedPopupRef(this._MaterialPopupComponent_0_8);
    final _text_1 = import10.createText('\n  ');
    final doc = import8.document;
    final _el_2 = doc.createElement('div');
    this.updateChildClass(_el_2, 'paper-container');
    this.addShimC(_el_2);
    this._AutoFocusDirective_2_5 = (import9.isDevMode
        ? import19.debugInjectorWrap(import17.AutoFocusDirective, () {
            return import17.AutoFocusDirective(_el_2, this.parentView.injectorGet(import23.DomService, this.parentIndex), null, this.parentView.injectorGetOptional(import30.ModalComponent, this.parentIndex), this._PopupRef_0_9);
          })
        : import17.AutoFocusDirective(_el_2, this.parentView.injectorGet(import23.DomService, this.parentIndex), null, this.parentView.injectorGetOptional(import30.ModalComponent, this.parentIndex), this._PopupRef_0_9));
    final _text_3 = import10.appendText(_el_2, '\n    ');
    final _el_4 = import10.appendDiv(doc, _el_2);
    this.updateChildClass(_el_4, 'header');
    this.addShimC(_el_4);
    this.project(_el_4, 0);
    final _text_5 = import10.appendText(_el_2, '\n    ');
    final _el_6 = import10.appendDiv(doc, _el_2);
    this.updateChildClass(_el_6, 'body');
    this.addShimC(_el_6);
    this.project(_el_6, 1);
    final _text_7 = import10.appendText(_el_2, '\n    ');
    final _el_8 = import10.appendDiv(doc, _el_2);
    this.updateChildClass(_el_8, 'footer');
    this.addShimC(_el_8);
    this.project(_el_8, 2);
    final _text_9 = import10.appendText(_el_2, '\n  ');
    final _text_10 = import10.createText('\n');
    this._compView_0.createAndProject(this._MaterialPopupComponent_0_8, [
      const [],
      [_text_1, _el_2, _text_10],
      const []
    ]);
    _el_2.addEventListener('mouseover', this.eventHandler0(_ctx.onMouseOver));
    _el_2.addEventListener('mouseleave', this.eventHandler0(_ctx.onMouseLeave));
    this.initRootNode(this._appEl_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 10)) {
      if (((identical(token, import16.MaterialPopupComponent) || identical(token, import31.DeferredContentAware)) || identical(token, import32.DropdownHandle))) {
        return this._MaterialPopupComponent_0_8;
      }
      if (identical(token, import33.PopupRef)) {
        return this._PopupRef_0_9;
      }
      if (identical(token, import20.PopupHierarchy)) {
        return this._PopupHierarchy_0_12;
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
      this._MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      changed = true;
      this._MaterialPopupComponent_0_8.trackLayoutChanges = true;
      changed = true;
    }
    final currVal_2 = _ctx.focusContents;
    if (import9.checkBinding(this._expr_2, currVal_2, 'focusContents', 'asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart')) {
      this._MaterialPopupComponent_0_8.autoDismiss = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_4 = _ctx.offsetX;
    if (import9.checkBinding(this._expr_4, currVal_4, 'offsetX', 'asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart')) {
      this._MaterialPopupComponent_0_8.offsetX = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.offsetY;
    if (import9.checkBinding(this._expr_5, currVal_5, 'offsetY', 'asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart')) {
      this._MaterialPopupComponent_0_8.offsetY = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.preferredPositions;
    if (import9.checkBinding(this._expr_6, currVal_6, 'preferredPositions', 'asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart')) {
      this._MaterialPopupComponent_0_8.preferredPositions = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.popupSource;
    if (import9.checkBinding(this._expr_7, currVal_7, 'popupSource', 'asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart')) {
      this._MaterialPopupComponent_0_8.source = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    final currVal_9 = _ctx.showPopup;
    if (import9.checkBinding(this._expr_9, currVal_9, 'showPopup', 'asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart')) {
      this._MaterialPopupComponent_0_8.visible = currVal_9;
      changed = true;
      this._expr_9 = currVal_9;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_10 = _ctx.focusContents;
    if (import9.checkBinding(this._expr_10, currVal_10, 'focusContents', 'asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart')) {
      this._AutoFocusDirective_2_5.autoFocus = currVal_10;
      this._expr_10 = currVal_10;
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._AutoFocusDirective_2_5.ngOnInit();
    }
    this._appEl_0.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.popupClassName, null)) {
        this._compView_0.updateChildClassNonHtml(this._el_0, _ctx.popupClassName);
      }
    }
    final currVal_1 = (_ctx.focusContents ? 'dialog' : 'tooltip');
    if (import9.checkBinding(this._expr_1, currVal_1, 'focusContents ? \'dialog\' : \'tooltip\'', 'asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart')) {
      import10.updateAttribute(this._el_0, 'role', currVal_1?.toString());
      this._expr_1 = currVal_1;
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
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewMaterialPaperTooltipComponent0>(this.parentView)._viewQuery_MaterialPopupComponent_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._AutoFocusDirective_2_5.ngOnDestroy();
    this._MaterialPopupComponent_0_8.ngOnDestroy();
  }
}

import14.EmbeddedView<void> viewFactory_MaterialPaperTooltipComponent1(import18.RenderView parentView, int parentIndex) {
  return _ViewMaterialPaperTooltipComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialPaperTooltipComponentHost = const [];

class _ViewMaterialPaperTooltipComponentHost0 extends import34.HostView<import2.MaterialPaperTooltipComponent> {
  dynamic _TooltipController_0_5;
  dynamic __Tooltip_0_7;
  dynamic get _Tooltip_0_7 {
    if ((this.__Tooltip_0_7 == null)) {
      (this.__Tooltip_0_7 = import2.getTooltipHandle(this.component));
    }
    return this.__Tooltip_0_7;
  }

  @override
  void build() {
    this.componentView = ViewMaterialPaperTooltipComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._TooltipController_0_5 = (import9.isDevMode
        ? import19.debugInjectorWrap(import35.TooltipController, () {
            return import36.createTooltipController(this.injectorGetOptional(import35.TooltipController, this.parentIndex), this.injectorGetOptional(import37.Disposer, this.parentIndex));
          })
        : import36.createTooltipController(this.injectorGetOptional(import35.TooltipController, this.parentIndex), this.injectorGetOptional(import37.Disposer, this.parentIndex)));
    this.component = import2.MaterialPaperTooltipComponent(this._TooltipController_0_5, this.componentView, _el_0, null);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import35.TooltipController)) {
        return this._TooltipController_0_5;
      }
      if ((identical(token, import2.MaterialPaperTooltipComponent) || identical(token, import31.DeferredContentAware))) {
        return this.component;
      }
      if (identical(token, import35.Tooltip)) {
        return this._Tooltip_0_7;
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

import34.HostView<import2.MaterialPaperTooltipComponent> viewFactory_MaterialPaperTooltipComponentHost0() {
  return _ViewMaterialPaperTooltipComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialPaperTooltipComponent, createMaterialPaperTooltipComponentFactory());
  _ngRef.registerDependencies(getTooltipHandle, const [
    [_i1.MaterialPaperTooltipComponent]
  ]);
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
}
