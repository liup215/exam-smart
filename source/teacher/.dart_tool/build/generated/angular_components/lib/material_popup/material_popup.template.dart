// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_popup.dart';
export 'material_popup.dart';
import 'package:angular_components/material_popup/material_popup.dart' as _i1;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref1;
import 'package:angular_components/focus/focus_interface.template.dart' as _ref2;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref3;
import 'package:angular_components/laminate/enums/visibility.template.dart' as _ref4;
import 'package:angular_components/laminate/overlay/module.template.dart' as _ref5;
import 'package:angular_components/laminate/overlay/overlay.template.dart' as _ref6;
import 'package:angular_components/laminate/overlay/zindexer.template.dart' as _ref7;
import 'package:angular_components/laminate/popup/module.template.dart' as _ref8;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref9;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref10;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref11;
import 'package:angular_components/model/math/box.template.dart' as _ref12;
import 'package:angular_components/model/ui/toggle.template.dart' as _ref13;
import 'package:angular_components/utils/async/async.template.dart' as _ref14;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref15;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref16;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref17;
import 'package:angular_components/material_popup/material_popup.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_popup.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import12;
import 'package:angular/src/core/linker/views/render_view.dart' as import13;
import 'package:angular/src/runtime/interpolate.dart' as import14;
import 'package:angular/src/core/linker/views/host_view.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../src/laminate/popup/popup_hierarchy.dart' as import17;
import 'package:angular/src/core/zone/ng_zone.dart' as import18;
import '../src/laminate/overlay/overlay_service.dart' as import19;
import '../utils/browser/dom_service/dom_service.dart' as import20;
import '../laminate/overlay/zindexer.dart' as import21;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import22;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import24;
import '../src/laminate/popup/popup_size_provider.dart' as import25;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import27;
import '../mixins/material_dropdown_base.dart' as import28;
import '../src/laminate/popup/popup_ref.dart' as import29;

final List<dynamic> styles$MaterialPopupComponent = [import0.styles];

class ViewMaterialPopupComponent0 extends import1.ComponentView<import2.MaterialPopupComponent> {
  ViewContainer _appEl_1;
  TemplateRef _TemplateRef_1_7;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialPopupComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('material-popup');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_popup/material_popup.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _text_0 = import10.appendText(parentRenderNode, '\n');
    final _anchor_1 = import10.appendAnchor(parentRenderNode);
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    this._TemplateRef_1_7 = TemplateRef(this._appEl_1, viewFactory_MaterialPopupComponent1);
    final _text_2 = import10.appendText(parentRenderNode, '\n');
    _ctx.templateRef = this._TemplateRef_1_7;
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.paneId;
    if (import9.checkBinding(this._expr_0, currVal_0, null, null)) {
      import10.updateAttribute(this.rootElement, 'pane-id', currVal_0);
      this._expr_0 = currVal_0;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$MaterialPopupComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialPopupComponentNgFactory = ComponentFactory<import2.MaterialPopupComponent>('material-popup', viewFactory_MaterialPopupComponentHost0);
ComponentFactory<import2.MaterialPopupComponent> get MaterialPopupComponentNgFactory {
  return _MaterialPopupComponentNgFactory;
}

ComponentFactory<import2.MaterialPopupComponent> createMaterialPopupComponentFactory() {
  return ComponentFactory('material-popup', viewFactory_MaterialPopupComponentHost0);
}

class _ViewMaterialPopupComponent1 extends import12.EmbeddedView<import2.MaterialPopupComponent> {
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
  var _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  import8.DivElement _el_1;
  import8.DivElement _el_3;
  _ViewMaterialPopupComponent1(import13.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _text_0 = import10.createText('\n  ');
    final doc = import8.document;
    this._el_1 = doc.createElement('div');
    this.updateChildClass(this._el_1, 'popup-wrapper mixin');
    this.addShimC(this._el_1);
    final _text_2 = import10.appendText(this._el_1, '\n      ');
    this._el_3 = import10.appendDiv(doc, this._el_1);
    this.updateChildClass(this._el_3, 'popup');
    this.addShimC(this._el_3);
    final _text_4 = import10.appendText(this._el_3, '\n          ');
    final _text_5 = import10.appendText(this._el_3, '\n          ');
    final _el_6 = import10.appendDiv(doc, this._el_3);
    this.updateChildClass(_el_6, 'focusable-placeholder');
    _el_6.tabIndex = 0;
    this.addShimC(_el_6);
    final _text_7 = import10.appendText(this._el_3, '\n          ');
    final _el_8 = import10.appendDiv(doc, this._el_3);
    this.updateChildClass(_el_8, 'material-popup-content content');
    this.addShimC(_el_8);
    final _text_9 = import10.appendText(_el_8, '\n              ');
    final _el_10 = import10.appendElement(doc, _el_8, 'header');
    this.addShimE(_el_10);
    final _text_11 = import10.appendText(_el_10, '\n                  ');
    this.project(_el_10, 0);
    final _text_12 = import10.appendText(_el_10, '\n              ');
    final _text_13 = import10.appendText(_el_8, '\n              ');
    final _el_14 = import10.appendDiv(doc, _el_8);
    this.updateChildClass(_el_14, 'main');
    this.addShimC(_el_14);
    final _text_15 = import10.appendText(_el_14, '\n                  ');
    this.project(_el_14, 1);
    final _text_16 = import10.appendText(_el_14, '\n              ');
    final _text_17 = import10.appendText(_el_8, '\n              ');
    final _el_18 = import10.appendElement(doc, _el_8, 'footer');
    this.addShimE(_el_18);
    final _text_19 = import10.appendText(_el_18, '\n                  ');
    this.project(_el_18, 2);
    final _text_20 = import10.appendText(_el_18, '\n              ');
    final _text_21 = import10.appendText(_el_8, '\n          ');
    final _text_22 = import10.appendText(this._el_3, '\n          ');
    final _text_23 = import10.appendText(this._el_3, '\n          ');
    final _el_24 = import10.appendDiv(doc, this._el_3);
    this.updateChildClass(_el_24, 'focusable-placeholder');
    _el_24.tabIndex = 0;
    this.addShimC(_el_24);
    final _text_25 = import10.appendText(this._el_3, '\n      ');
    final _text_26 = import10.appendText(this._el_1, '\n  ');
    final _text_27 = import10.createText('\n');
    _el_6.addEventListener('focus', this.eventHandler1(this._handleEvent_0));
    _el_24.addEventListener('focus', this.eventHandler1(this._handleEvent_1));
    this.initRootNodesAndSubscriptions([_text_0, this._el_1, _text_27], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      import10.setAttribute(this._el_1, 'role', import14.interpolateString0(_ctx.role));
    }
    final currVal_0 = _ctx.ariaLabel;
    if (import9.checkBinding(this._expr_0, currVal_0, 'ariaLabel', 'package:angular_components/material_popup/material_popup.html')) {
      import10.updateAttribute(this._el_1, 'aria-label', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.z;
    if (import9.checkBinding(this._expr_1, currVal_1, 'z', 'package:angular_components/material_popup/material_popup.html')) {
      import10.updateAttribute(this._el_1, 'elevation', currVal_1?.toString());
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hasBox;
    if (import9.checkBinding(this._expr_2, currVal_2, 'hasBox', 'package:angular_components/material_popup/material_popup.html')) {
      import10.updateClassBinding(this._el_1, 'shadow', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.matchMinSourceWidth;
    if (import9.checkBinding(this._expr_3, currVal_3, 'matchMinSourceWidth', 'package:angular_components/material_popup/material_popup.html')) {
      import10.updateClassBinding(this._el_1, 'full-width', currVal_3);
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.inkBackground;
    if (import9.checkBinding(this._expr_4, currVal_4, 'inkBackground', 'package:angular_components/material_popup/material_popup.html')) {
      import10.updateClassBinding(this._el_1, 'ink', currVal_4);
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.slide;
    if (import9.checkBinding(this._expr_5, currVal_5, 'slide', 'package:angular_components/material_popup/material_popup.html')) {
      import10.updateAttribute(this._el_1, 'slide', currVal_5);
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.zIndex;
    if (import9.checkBinding(this._expr_6, currVal_6, 'zIndex', 'package:angular_components/material_popup/material_popup.html')) {
      import10.updateAttribute(this._el_1, 'z-index', currVal_6?.toString());
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.transformOrigin;
    if (import9.checkBinding(this._expr_7, currVal_7, 'transformOrigin', 'package:angular_components/material_popup/material_popup.html')) {
      this._el_1.style.setProperty('transform-origin', currVal_7);
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.showPopup;
    if (import9.checkBinding(this._expr_8, currVal_8, 'showPopup', 'package:angular_components/material_popup/material_popup.html')) {
      import10.updateClassBinding(this._el_1, 'visible', currVal_8);
      this._expr_8 = currVal_8;
    }
    final currVal_9 = import14.interpolateString0(_ctx.uniqueId);
    if (import9.checkBinding(this._expr_9, currVal_9, '{{uniqueId}}', 'package:angular_components/material_popup/material_popup.html')) {
      import10.setProperty(this._el_1, 'id', currVal_9);
      this._expr_9 = currVal_9;
    }
    final currVal_11 = _ctx.minHeight;
    if (import9.checkBinding(this._expr_11, currVal_11, 'minHeight', 'package:angular_components/material_popup/material_popup.html')) {
      this._el_3.style.setProperty('min-height', ((currVal_11 == null) ? null : (currVal_11.toString() + 'px')));
      this._expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.minWidth;
    if (import9.checkBinding(this._expr_12, currVal_12, 'minWidth', 'package:angular_components/material_popup/material_popup.html')) {
      this._el_3.style.setProperty('min-width', ((currVal_12 == null) ? null : (currVal_12.toString() + 'px')));
      this._expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.maxHeight;
    if (import9.checkBinding(this._expr_13, currVal_13, 'maxHeight', 'package:angular_components/material_popup/material_popup.html')) {
      this._el_3.style.setProperty('max-height', ((currVal_13 == null) ? null : (currVal_13.toString() + 'px')));
      this._expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.maxWidth;
    if (import9.checkBinding(this._expr_14, currVal_14, 'maxWidth', 'package:angular_components/material_popup/material_popup.html')) {
      this._el_3.style.setProperty('max-width', ((currVal_14 == null) ? null : (currVal_14.toString() + 'px')));
      this._expr_14 = currVal_14;
    }
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.visible = false;
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.visible = false;
  }
}

import12.EmbeddedView<void> viewFactory_MaterialPopupComponent1(import13.RenderView parentView, int parentIndex) {
  return _ViewMaterialPopupComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialPopupComponentHost = const [];

class _ViewMaterialPopupComponentHost0 extends import15.HostView<import2.MaterialPopupComponent> {
  ViewContainer _appEl_0;
  dynamic __PopupHierarchy_0_11;
  dynamic __PopupRef_0_12;
  dynamic get _PopupHierarchy_0_11 {
    if ((this.__PopupHierarchy_0_11 == null)) {
      (this.__PopupHierarchy_0_11 = import2.getHierarchy(this.component));
    }
    return this.__PopupHierarchy_0_11;
  }

  dynamic get _PopupRef_0_12 {
    if ((this.__PopupRef_0_12 == null)) {
      (this.__PopupRef_0_12 = import2.getResolvedPopupRef(this.component));
    }
    return this.__PopupRef_0_12;
  }

  @override
  void build() {
    this.componentView = ViewMaterialPopupComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._appEl_0 = ViewContainer(0, null, this, _el_0);
    this.component = (import9.isDevMode
        ? import16.debugInjectorWrap(import2.MaterialPopupComponent, () {
            return import2.MaterialPopupComponent(this.injectorGetOptional(import17.PopupHierarchy, this.parentIndex), this.injectorGetOptional(import2.MaterialPopupComponent, this.parentIndex), null, this.injectorGet(import18.NgZone, this.parentIndex), this.injectorGet(import19.OverlayService, this.parentIndex), this.injectorGet(import20.DomService, this.parentIndex), this.injectorGet(import21.ZIndexer, this.parentIndex), this.injectorGet(const import22.OpaqueToken<List<import24.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.injectorGet(const import22.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.injectorGet(const import22.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.injectorGetOptional(import25.PopupSizeProvider, this.parentIndex), this.componentView, this._appEl_0, ElementRef(_el_0));
          })
        : import2.MaterialPopupComponent(this.injectorGetOptional(import17.PopupHierarchy, this.parentIndex), this.injectorGetOptional(import2.MaterialPopupComponent, this.parentIndex), null, this.injectorGet(import18.NgZone, this.parentIndex), this.injectorGet(import19.OverlayService, this.parentIndex), this.injectorGet(import20.DomService, this.parentIndex), this.injectorGet(import21.ZIndexer, this.parentIndex), this.injectorGet(const import22.OpaqueToken<List<import24.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.injectorGet(const import22.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.injectorGet(const import22.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.injectorGetOptional(import25.PopupSizeProvider, this.parentIndex), this.componentView, this._appEl_0, ElementRef(_el_0)));
    this.initRootNode(this._appEl_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (((identical(token, import2.MaterialPopupComponent) || identical(token, import27.DeferredContentAware)) || identical(token, import28.DropdownHandle))) {
        return this.component;
      }
      if (identical(token, import17.PopupHierarchy)) {
        return this._PopupHierarchy_0_11;
      }
      if (identical(token, import29.PopupRef)) {
        return this._PopupRef_0_12;
      }
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
    this._appEl_0.detectChangesInNestedViews();
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this.component.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this.component.ngOnDestroy();
  }
}

import15.HostView<import2.MaterialPopupComponent> viewFactory_MaterialPopupComponentHost0() {
  return _ViewMaterialPopupComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialPopupComponent, createMaterialPopupComponentFactory());
  _ngRef.registerDependencies(getHierarchy, const [
    [_i1.MaterialPopupComponent]
  ]);
  _ngRef.registerDependencies(getResolvedPopupRef, const [
    [_i1.MaterialPopupComponent]
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
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
  _ref14.initReflector();
  _ref15.initReflector();
  _ref16.initReflector();
  _ref17.initReflector();
}
