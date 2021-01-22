// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_dropdown.dart';
export 'material_tree_dropdown.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_tree_impl.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref4;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref5;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref6;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref7;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref8;
import 'package:angular_components/model/selection/select.template.dart' as _ref9;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref10;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref11;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref12;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref13;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref14;
import 'package:angular_components/src/material_tree/material_tree_filter.template.dart' as _ref15;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref16;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref17;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref18;
import 'package:angular_components/src/material_tree/material_tree_dropdown.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_tree_dropdown.dart' as import2;
import '../../focus/keyboard_only_focus_indicator.dart' as import3;
import '../laminate/popup/popup_source_directive.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../../material_popup/material_popup.template.dart' as import7;
import '../../material_popup/material_popup.dart' as import8;
import '../../content/deferred_content.dart' as import9;
import 'dart:html' as import10;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import11;
import 'package:angular/src/core/linker/views/view.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/src/runtime/dom_helpers.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../../utils/browser/dom_service/dom_service.dart' as import17;
import '../laminate/popup/dom_popup_source.dart' as import18;
import '../../utils/angular/reference/reference.dart' as import19;
import '../../focus/focus_interface.dart' as import20;
import 'package:angular/src/core/linker/template_ref.dart';
import '../laminate/popup/popup_hierarchy.dart' as import22;
import 'package:angular/src/core/zone/ng_zone.dart' as import23;
import '../laminate/overlay/overlay_service.dart' as import24;
import '../../laminate/overlay/zindexer.dart' as import25;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import26;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import28;
import '../laminate/popup/popup_size_provider.dart' as import29;
import 'package:angular/src/core/linker/element_ref.dart';
import '../../content/deferred_content_aware.dart' as import31;
import '../../mixins/material_dropdown_base.dart' as import32;
import '../laminate/popup/popup_ref.dart' as import33;
import 'package:angular/src/runtime/queries.dart' as import34;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import36;
import 'package:angular/src/runtime/text_binding.dart' as import37;
import 'package:angular/src/core/linker/views/render_view.dart' as import38;
import 'package:angular/src/runtime/interpolate.dart' as import39;
import '../../material_icon/material_icon.template.dart' as import40;
import '../../material_icon/material_icon.dart' as import41;
import 'material_tree_filter.template.dart' as import42;
import 'material_tree_filter.dart' as import43;
import 'material_tree_root.dart' as import44;
import 'material_tree_impl.template.dart' as import45;
import 'material_tree_impl.dart' as import46;
import 'package:angular/src/core/linker/views/host_view.dart' as import47;

final List<dynamic> styles$MaterialTreeDropdownComponent = [import0.styles];

class ViewMaterialTreeDropdownComponent0<T> extends import1.ComponentView<import2.MaterialTreeDropdownComponent<T>> {
  bool _viewQuery_MaterialTreeFilterComponent_0_isDirty = true;
  import3.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_5;
  import4.PopupSourceDirective _PopupSourceDirective_0_6;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  import7.ViewMaterialPopupComponent0 _compView_4;
  ViewContainer _appEl_4;
  import8.MaterialPopupComponent _MaterialPopupComponent_4_8;
  dynamic __PopupHierarchy_4_11;
  dynamic __PopupRef_4_12;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  import9.DeferredContentDirective _DeferredContentDirective_7_9;
  var _expr_0;
  var _expr_3;
  var _expr_4;
  var _expr_6;
  import10.DivElement _el_0;
  import10.Element _el_4;
  static import11.ComponentStyles _componentStyles;
  ViewMaterialTreeDropdownComponent0(import12.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import10.document.createElement('material-tree-dropdown');
  }
  dynamic get _PopupHierarchy_4_11 {
    if ((this.__PopupHierarchy_4_11 == null)) {
      (this.__PopupHierarchy_4_11 = import8.getHierarchy(this._MaterialPopupComponent_4_8));
    }
    return this.__PopupHierarchy_4_11;
  }

  dynamic get _PopupRef_4_12 {
    if ((this.__PopupRef_4_12 == null)) {
      (this.__PopupRef_4_12 = import8.getResolvedPopupRef(this._MaterialPopupComponent_4_8));
    }
    return this.__PopupRef_4_12;
  }

  static String get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:angular_components/lib/src/material_tree/material_tree_dropdown.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import10.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import10.document;
    this._el_0 = import15.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'button');
    import15.setAttribute(this._el_0, 'keyboardOnlyFocusIndicator', '');
    import15.setAttribute(this._el_0, 'popupSource', '');
    this.addShimC(this._el_0);
    this._KeyboardOnlyFocusIndicatorDirective_0_5 = (import14.isDevMode
        ? import16.debugInjectorWrap(import3.KeyboardOnlyFocusIndicatorDirective, () {
            return import3.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.injectorGet(import17.DomService, this.parentIndex));
          })
        : import3.KeyboardOnlyFocusIndicatorDirective(this._el_0, this.parentView.injectorGet(import17.DomService, this.parentIndex)));
    this._PopupSourceDirective_0_6 = (import14.isDevMode
        ? import16.debugInjectorWrap(import4.PopupSourceDirective, () {
            return import4.PopupSourceDirective(this.parentView.injectorGet(import18.DomPopupSourceFactory, this.parentIndex), this._el_0, this.parentView.injectorGetOptional(import19.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import20.Focusable, this.parentIndex), null);
          })
        : import4.PopupSourceDirective(this.parentView.injectorGet(import18.DomPopupSourceFactory, this.parentIndex), this._el_0, this.parentView.injectorGetOptional(import19.ReferenceDirective, this.parentIndex), this.parentView.injectorGetOptional(import20.Focusable, this.parentIndex), null));
    final _anchor_1 = import15.appendAnchor(this._el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeDropdownComponent1<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import15.appendAnchor(this._el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeDropdownComponent2<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import15.appendAnchor(this._el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, (parentView, parentIndex) {
      return viewFactory_MaterialTreeDropdownComponent3<T>(parentView, parentIndex);
    });
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    this._compView_4 = import7.ViewMaterialPopupComponent0(this, 4);
    this._el_4 = this._compView_4.rootElement;
    parentRenderNode.append(this._el_4);
    import15.setAttribute(this._el_4, 'enforceSpaceConstraints', '');
    import15.setAttribute(this._el_4, 'trackLayoutChanges', '');
    this.addShimC(this._el_4);
    this._appEl_4 = ViewContainer(4, null, this, this._el_4);
    this._MaterialPopupComponent_4_8 = (import14.isDevMode
        ? import16.debugInjectorWrap(import8.MaterialPopupComponent, () {
            return import8.MaterialPopupComponent(this.parentView.injectorGetOptional(import22.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import8.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import23.NgZone, this.parentIndex), this.parentView.injectorGet(import24.OverlayService, this.parentIndex), this.parentView.injectorGet(import17.DomService, this.parentIndex), this.parentView.injectorGet(import25.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import26.OpaqueToken<List<import28.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import26.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import26.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import29.PopupSizeProvider, this.parentIndex), this._compView_4, this._appEl_4, ElementRef(this._el_4));
          })
        : import8.MaterialPopupComponent(this.parentView.injectorGetOptional(import22.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import8.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import23.NgZone, this.parentIndex), this.parentView.injectorGet(import24.OverlayService, this.parentIndex), this.parentView.injectorGet(import17.DomService, this.parentIndex), this.parentView.injectorGet(import25.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import26.OpaqueToken<List<import28.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import26.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import26.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import29.PopupSizeProvider, this.parentIndex), this._compView_4, this._appEl_4, ElementRef(this._el_4)));
    final _el_5 = doc.createElement('div');
    import15.setAttribute(_el_5, 'header', '');
    this.addShimC(_el_5);
    this.project(_el_5, 0);
    final _anchor_6 = import15.appendAnchor(_el_5);
    this._appEl_6 = ViewContainer(6, 5, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, (parentView, parentIndex) {
      return viewFactory_MaterialTreeDropdownComponent4<T>(parentView, parentIndex);
    });
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _anchor_7 = import15.createAnchor();
    this._appEl_7 = ViewContainer(7, 4, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, (parentView, parentIndex) {
      return viewFactory_MaterialTreeDropdownComponent5<T>(parentView, parentIndex);
    });
    this._DeferredContentDirective_7_9 = import9.DeferredContentDirective(this._appEl_7, _TemplateRef_7_8, this._MaterialPopupComponent_4_8, this);
    this._compView_4.createAndProject(this._MaterialPopupComponent_4_8, [
      [_el_5],
      <dynamic>[this.projectedNodes[1]]..addAll([this._appEl_7]),
      const []
    ]);
    this._el_0.addEventListener('focus', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('click', this.eventHandler1(this._handleEvent_1));
    this._el_0.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_0_5.keydown));
    this._el_0.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_5.resetOutline));
    this._el_0.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction));
    final subscription_0 = this._MaterialPopupComponent_4_8.onOpened.listen(this.eventHandler0(_ctx.focus));
    final subscription_1 = this._MaterialPopupComponent_4_8.onVisible.listen(this.eventHandler1(this._handleEvent_2));
    this.initSubscriptions([subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((4 <= nodeIndex) && (nodeIndex <= 7))) {
      if (((identical(token, import8.MaterialPopupComponent) || identical(token, import31.DeferredContentAware)) || identical(token, import32.DropdownHandle))) {
        return this._MaterialPopupComponent_4_8;
      }
      if (identical(token, import22.PopupHierarchy)) {
        return this._PopupHierarchy_4_11;
      }
      if (identical(token, import33.PopupRef)) {
        return this._PopupRef_4_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final import4.PopupSourceDirective local_button = this._PopupSourceDirective_0_6;
    this._NgIf_1_9.ngIf = (!_ctx.showFilterInsideButton);
    this._NgIf_2_9.ngIf = (!_ctx.showFilterInsideButton);
    this._NgIf_3_9.ngIf = _ctx.showFilterInsideButton;
    changed = false;
    if (firstCheck) {
      this._MaterialPopupComponent_4_8.enforceSpaceConstraints = true;
      changed = true;
      this._MaterialPopupComponent_4_8.trackLayoutChanges = true;
      changed = true;
    }
    final currVal_3 = _ctx.popupPositions;
    if (import14.checkBinding(this._expr_3, currVal_3, 'popupPositions', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialPopupComponent_4_8.preferredPositions = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = local_button;
    if (import14.checkBinding(this._expr_4, currVal_4, 'button', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialPopupComponent_4_8.source = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_6 = _ctx.visible;
    if (import14.checkBinding(this._expr_6, currVal_6, 'visible', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialPopupComponent_4_8.visible = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    if (changed) {
      this._compView_4.markAsCheckOnce();
    }
    this._NgIf_6_9.ngIf = (_ctx.supportsFiltering && _ctx.showFilterInsidePopup);
    if (firstCheck) {
      (this._DeferredContentDirective_7_9.preserveDimensions = true);
    }
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    if ((!import14.debugThrowIfChanged)) {
      if (this._viewQuery_MaterialTreeFilterComponent_0_isDirty) {
        _ctx.materialTreeFilterComponent = import34.firstOrNull(import34.flattenNodes([
          this._appEl_3.mapNestedViewsWithSingleResult((_ViewMaterialTreeDropdownComponent3 nestedView) {
            import12.View.queryChangeDetectorRefs[nestedView._MaterialTreeFilterComponent_0_5] = nestedView._compView_0;
            return nestedView._MaterialTreeFilterComponent_0_5;
          }),
          this._appEl_6.mapNestedViewsWithSingleResult((_ViewMaterialTreeDropdownComponent4 nestedView) {
            import12.View.queryChangeDetectorRefs[nestedView._MaterialTreeFilterComponent_0_5] = nestedView._compView_0;
            return nestedView._MaterialTreeFilterComponent_0_5;
          })
        ]));
        this._viewQuery_MaterialTreeFilterComponent_0_isDirty = false;
      }
    }
    final bool currVal_0 = (!_ctx.showFilterInsideButton);
    if (import14.checkBinding(this._expr_0, currVal_0, '!showFilterInsideButton', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      import15.updateClassBinding(this._el_0, 'border', currVal_0);
      this._expr_0 = currVal_0;
    }
    if (firstCheck) {
      if (!identical(_ctx.popupClassName, null)) {
        this._compView_4.updateChildClassNonHtml(this._el_4, _ctx.popupClassName);
      }
    }
    this._compView_4.detectHostChanges(firstCheck);
    this._compView_4.detectChanges();
    if ((!import14.debugThrowIfChanged)) {
      if (firstCheck) {
        this._PopupSourceDirective_0_6.ngAfterViewInit();
        this._MaterialPopupComponent_4_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._compView_4.destroyInternalState();
    this._PopupSourceDirective_0_6.ngOnDestroy();
    this._DeferredContentDirective_7_9.ngOnDestroy();
    this._MaterialPopupComponent_4_8.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.visible = true;
    this._KeyboardOnlyFocusIndicatorDirective_0_5.onFocus($event);
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.visible = (!_ctx.visible);
    this._KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction();
  }

  void _handleEvent_2($event) {
    final _ctx = this.ctx;
    _ctx.visible = $event;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import11.ComponentStyles.scoped(styles$MaterialTreeDropdownComponent, _debugComponentUrl));
      if (import14.isDevMode) {
        import11.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialTreeDropdownComponentNgFactory = ComponentFactory<import2.MaterialTreeDropdownComponent>('material-tree-dropdown', viewFactory_MaterialTreeDropdownComponentHost0);
ComponentFactory<import2.MaterialTreeDropdownComponent> get MaterialTreeDropdownComponentNgFactory {
  return _MaterialTreeDropdownComponentNgFactory;
}

ComponentFactory<import2.MaterialTreeDropdownComponent<T>> createMaterialTreeDropdownComponentFactory<T>() {
  return ComponentFactory('material-tree-dropdown', viewFactory_MaterialTreeDropdownComponentHost0);
}

class _ViewMaterialTreeDropdownComponent1<T> extends import36.EmbeddedView<import2.MaterialTreeDropdownComponent<T>> {
  final import37.TextBinding _textBinding_1 = import37.TextBinding();
  _ViewMaterialTreeDropdownComponent1(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'button-text');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import39.interpolateString0(_ctx.placeholder));
  }
}

import36.EmbeddedView<void> viewFactory_MaterialTreeDropdownComponent1<T>(import38.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeDropdownComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent2<T> extends import36.EmbeddedView<import2.MaterialTreeDropdownComponent<T>> {
  import40.ViewMaterialIconComponent0 _compView_0;
  import41.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewMaterialTreeDropdownComponent2(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import40.ViewMaterialIconComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'icon');
    import15.setAttribute(_el_0, 'icon', 'arrow_drop_down');
    this.addShimC(_el_0);
    this._MaterialIconComponent_0_5 = import41.MaterialIconComponent(_el_0);
    this._compView_0.create(this._MaterialIconComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_0_5.icon = 'arrow_drop_down';
      changed = true;
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

import36.EmbeddedView<void> viewFactory_MaterialTreeDropdownComponent2<T>(import38.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeDropdownComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent3<T> extends import36.EmbeddedView<import2.MaterialTreeDropdownComponent<T>> {
  import42.ViewMaterialTreeFilterComponent0 _compView_0;
  import43.MaterialTreeFilterComponent _MaterialTreeFilterComponent_0_5;
  var _expr_0;
  var _expr_1;
  _ViewMaterialTreeDropdownComponent3(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import42.ViewMaterialTreeFilterComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._MaterialTreeFilterComponent_0_5 = (import14.isDevMode
        ? import16.debugInjectorWrap(import43.MaterialTreeFilterComponent, () {
            return import43.MaterialTreeFilterComponent(this.parentView.parentView.injectorGetOptional(import44.MaterialTreeRoot, this.parentView.parentIndex));
          })
        : import43.MaterialTreeFilterComponent(this.parentView.parentView.injectorGetOptional(import44.MaterialTreeRoot, this.parentView.parentIndex)));
    this._compView_0.create(this._MaterialTreeFilterComponent_0_5);
    final subscription_0 = this._MaterialTreeFilterComponent_0_5.onFiltered.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.placeholder;
    if (import14.checkBinding(this._expr_0, currVal_0, 'placeholder', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeFilterComponent_0_5.placeholder = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.filterableOptions;
    if (import14.checkBinding(this._expr_1, currVal_1, 'filterableOptions', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeFilterComponent_0_5.filterable = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import14.unsafeCast<ViewMaterialTreeDropdownComponent0>(this.parentView)._viewQuery_MaterialTreeFilterComponent_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.visible = true;
  }
}

import36.EmbeddedView<void> viewFactory_MaterialTreeDropdownComponent3<T>(import38.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeDropdownComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent4<T> extends import36.EmbeddedView<import2.MaterialTreeDropdownComponent<T>> {
  import42.ViewMaterialTreeFilterComponent0 _compView_0;
  import43.MaterialTreeFilterComponent _MaterialTreeFilterComponent_0_5;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeDropdownComponent4(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import42.ViewMaterialTreeFilterComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'search-box');
    import15.setAttribute(_el_0, 'leadingGlyph', 'search');
    this.addShimC(_el_0);
    this._MaterialTreeFilterComponent_0_5 = (import14.isDevMode
        ? import16.debugInjectorWrap(import43.MaterialTreeFilterComponent, () {
            return import43.MaterialTreeFilterComponent(this.parentView.parentView.injectorGetOptional(import44.MaterialTreeRoot, this.parentView.parentIndex));
          })
        : import43.MaterialTreeFilterComponent(this.parentView.parentView.injectorGetOptional(import44.MaterialTreeRoot, this.parentView.parentIndex)));
    this._compView_0.create(this._MaterialTreeFilterComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialTreeFilterComponent_0_5.leadingGlyph = 'search';
      changed = true;
    }
    final currVal_1 = _ctx.placeholder;
    if (import14.checkBinding(this._expr_1, currVal_1, 'placeholder', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeFilterComponent_0_5.placeholder = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.filterableOptions;
    if (import14.checkBinding(this._expr_2, currVal_2, 'filterableOptions', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeFilterComponent_0_5.filterable = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import14.unsafeCast<ViewMaterialTreeDropdownComponent0>(this.parentView)._viewQuery_MaterialTreeFilterComponent_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import36.EmbeddedView<void> viewFactory_MaterialTreeDropdownComponent4<T>(import38.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeDropdownComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent5<T> extends import36.EmbeddedView<import2.MaterialTreeDropdownComponent<T>> {
  import45.ViewMaterialTreeComponent0<T> _compView_0;
  import46.MaterialTreeComponent<T> _MaterialTreeComponent_0_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  _ViewMaterialTreeDropdownComponent5(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import45.ViewMaterialTreeComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._MaterialTreeComponent_0_5 = (import14.isDevMode
        ? import16.debugInjectorWrap(import46.MaterialTreeComponent, () {
            return import46.MaterialTreeComponent(this.parentView.parentView.injectorGetOptional(import44.MaterialTreeRoot, this.parentView.parentIndex), null);
          })
        : import46.MaterialTreeComponent(this.parentView.parentView.injectorGetOptional(import44.MaterialTreeRoot, this.parentView.parentIndex), null));
    this._compView_0.create(this._MaterialTreeComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import44.MaterialTreeRoot) && (0 == nodeIndex))) {
      return this._MaterialTreeComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    final currVal_0 = _ctx.expandAll;
    if (import14.checkBinding(this._expr_0, currVal_0, 'expandAll', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeComponent_0_5.expandAll = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.allowParentSingleSelection;
    if (import14.checkBinding(this._expr_1, currVal_1, 'allowParentSingleSelection', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeComponent_0_5.allowParentSingleSelection = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.allowParentMultiSelection;
    if (import14.checkBinding(this._expr_2, currVal_2, 'allowParentMultiSelection', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeComponent_0_5.allowParentMultiSelection = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.allowDeselectInHierarchy;
    if (import14.checkBinding(this._expr_3, currVal_3, 'allowDeselectInHierarchy', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeComponent_0_5.allowDeselectInHierarchy = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.componentRenderer;
    if (import14.checkBinding(this._expr_4, currVal_4, 'componentRenderer', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeComponent_0_5.componentRenderer = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.itemRenderer;
    if (import14.checkBinding(this._expr_5, currVal_5, 'itemRenderer', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeComponent_0_5.itemRenderer = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.options;
    if (import14.checkBinding(this._expr_6, currVal_6, 'options', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeComponent_0_5.options = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.selection;
    if (import14.checkBinding(this._expr_7, currVal_7, 'selection', 'package:angular_components/src/material_tree/material_tree_dropdown.html')) {
      this._MaterialTreeComponent_0_5.selection = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import36.EmbeddedView<void> viewFactory_MaterialTreeDropdownComponent5<T>(import38.RenderView parentView, int parentIndex) {
  return _ViewMaterialTreeDropdownComponent5<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeDropdownComponentHost = const [];

class _ViewMaterialTreeDropdownComponentHost0<T> extends import47.HostView<import2.MaterialTreeDropdownComponent<T>> {
  @override
  void build() {
    this.componentView = ViewMaterialTreeDropdownComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import14.isDevMode
        ? import16.debugInjectorWrap(import2.MaterialTreeDropdownComponent, () {
            return import2.MaterialTreeDropdownComponent(this.injectorGet(import17.DomService, this.parentIndex), null, _el_0);
          })
        : import2.MaterialTreeDropdownComponent(this.injectorGet(import17.DomService, this.parentIndex), null, _el_0));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import2.MaterialTreeDropdownComponent) || identical(token, import20.Focusable)) || identical(token, import44.MaterialTreeRoot)) && (0 == nodeIndex))) {
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
    if (((!import14.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import47.HostView<import2.MaterialTreeDropdownComponent<T>> viewFactory_MaterialTreeDropdownComponentHost0<T>() {
  return _ViewMaterialTreeDropdownComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeDropdownComponent, createMaterialTreeDropdownComponentFactory());
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
  _ref18.initReflector();
}
