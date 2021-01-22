// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'menu_popup.dart';
export 'menu_popup.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref3;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref4;
import 'package:angular_components/material_list/material_list.template.dart' as _ref5;
import 'package:angular_components/material_menu/menu_item_groups.template.dart' as _ref6;
import 'package:angular_components/material_menu/menu_popup_wrapper.template.dart' as _ref7;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref8;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref9;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref10;
import 'package:angular_components/model/menu/menu.template.dart' as _ref11;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref12;
import 'package:angular_components/material_menu/menu_popup.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'menu_popup.dart' as import2;
import '../material_popup/material_popup.template.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import '../material_popup/material_popup.dart' as import5;
import '../focus/focus_trap.template.dart' as import6;
import '../focus/focus_trap.dart' as import7;
import '../content/deferred_content.dart' as import8;
import 'dart:html' as import9;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import10;
import 'package:angular/src/core/linker/views/view.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import13;
import 'package:angular/src/runtime/dom_helpers.dart' as import14;
import 'package:angular/src/di/errors.dart' as import15;
import '../src/laminate/popup/popup_hierarchy.dart' as import16;
import 'package:angular/src/core/zone/ng_zone.dart' as import17;
import '../src/laminate/overlay/overlay_service.dart' as import18;
import '../utils/browser/dom_service/dom_service.dart' as import19;
import '../laminate/overlay/zindexer.dart' as import20;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import21;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import23;
import '../src/laminate/popup/popup_size_provider.dart' as import24;
import 'package:angular/src/core/linker/element_ref.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../content/deferred_content_aware.dart' as import27;
import '../mixins/material_dropdown_base.dart' as import28;
import '../src/laminate/popup/popup_ref.dart' as import29;
import 'package:angular/src/runtime/queries.dart' as import30;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import32;
import '../material_list/material_list.template.dart' as import33;
import '../material_list/material_list.dart' as import34;
import 'menu_item_groups.template.dart' as import35;
import '../focus/focus.dart' as import36;
import 'common/menu_root.dart' as import37;
import 'menu_item_groups.dart' as import38;
import 'package:angular/src/core/linker/views/render_view.dart' as import39;
import '../laminate/components/modal/modal.dart' as import40;
import '../utils/id_generator/id_generator.dart' as import41;
import 'package:angular/src/core/linker/views/host_view.dart' as import42;

final List<dynamic> styles$MenuPopupComponent = [import0.styles];

class ViewMenuPopupComponent0 extends import1.ComponentView<import2.MenuPopupComponent> {
  bool _query_AutoFocusDirective_1_0_isDirty = true;
  bool _viewQuery_MenuItemGroupsComponent_0_isDirty = true;
  import3.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import5.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupRef_0_10;
  dynamic __PopupHierarchy_0_12;
  import6.ViewFocusTrapComponent0 _compView_1;
  import7.FocusTrapComponent _FocusTrapComponent_1_5;
  ViewContainer _appEl_2;
  import8.DeferredContentDirective _DeferredContentDirective_2_9;
  var _expr_0;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  import9.Element _el_0;
  static import10.ComponentStyles _componentStyles;
  ViewMenuPopupComponent0(import11.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import9.document.createElement('menu-popup');
  }
  dynamic get _PopupRef_0_10 {
    if ((this.__PopupRef_0_10 == null)) {
      (this.__PopupRef_0_10 = import5.getResolvedPopupRef(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupRef_0_10;
  }

  dynamic get _PopupHierarchy_0_12 {
    if ((this.__PopupHierarchy_0_12 == null)) {
      (this.__PopupHierarchy_0_12 = import5.getHierarchy(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupHierarchy_0_12;
  }

  static String get _debugComponentUrl {
    return (import13.isDevMode ? 'asset:angular_components/lib/material_menu/menu_popup.dart' : null);
  }

  @override
  void build() {
    final import9.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import3.ViewMaterialPopupComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    parentRenderNode.append(this._el_0);
    import14.setAttribute(this._el_0, 'enforceSpaceConstraints', '');
    this.addShimC(this._el_0);
    this._appEl_0 = ViewContainer(0, null, this, this._el_0);
    this._MaterialPopupComponent_0_8 = (import13.isDevMode
        ? import15.debugInjectorWrap(import5.MaterialPopupComponent, () {
            return import5.MaterialPopupComponent(this.parentView.injectorGetOptional(import16.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import5.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import17.NgZone, this.parentIndex), this.parentView.injectorGet(import18.OverlayService, this.parentIndex), this.parentView.injectorGet(import19.DomService, this.parentIndex), this.parentView.injectorGet(import20.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import21.OpaqueToken<List<import23.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import21.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import21.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import24.PopupSizeProvider, this.parentIndex), this._compView_0, this._appEl_0, ElementRef(this._el_0));
          })
        : import5.MaterialPopupComponent(this.parentView.injectorGetOptional(import16.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import5.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import17.NgZone, this.parentIndex), this.parentView.injectorGet(import18.OverlayService, this.parentIndex), this.parentView.injectorGet(import19.DomService, this.parentIndex), this.parentView.injectorGet(import20.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import21.OpaqueToken<List<import23.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import21.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import21.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import24.PopupSizeProvider, this.parentIndex), this._compView_0, this._appEl_0, ElementRef(this._el_0)));
    this._compView_1 = import6.ViewFocusTrapComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    this.addShimC(_el_1);
    this._FocusTrapComponent_1_5 = import7.FocusTrapComponent();
    final _anchor_2 = import14.createAnchor();
    this._appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_MenuPopupComponent1);
    this._DeferredContentDirective_2_9 = import8.DeferredContentDirective(this._appEl_2, _TemplateRef_2_8, this._MaterialPopupComponent_0_8, this);
    this._compView_1.createAndProject(this._FocusTrapComponent_1_5, [
      <dynamic>[this.projectedNodes[0]]..addAll([this._appEl_2])
    ]);
    this._compView_0.createAndProject(this._MaterialPopupComponent_0_8, [
      const [],
      [_el_1],
      const []
    ]);
    final subscription_0 = this._MaterialPopupComponent_0_8.onVisible.listen(this.eventHandler1(this._handleEvent_0));
    this.initSubscriptions([subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 2)) {
      if (((identical(token, import5.MaterialPopupComponent) || identical(token, import27.DeferredContentAware)) || identical(token, import28.DropdownHandle))) {
        return this._MaterialPopupComponent_0_8;
      }
      if (identical(token, import29.PopupRef)) {
        return this._PopupRef_0_10;
      }
      if (identical(token, import16.PopupHierarchy)) {
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
    }
    final currVal_2 = _ctx.preferredPositions;
    if (import13.checkBinding(this._expr_2, currVal_2, 'preferredPositions', 'package:angular_components/material_menu/menu_popup.html')) {
      this._MaterialPopupComponent_0_8.preferredPositions = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.popupSource;
    if (import13.checkBinding(this._expr_3, currVal_3, 'popupSource', 'package:angular_components/material_menu/menu_popup.html')) {
      this._MaterialPopupComponent_0_8.source = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.isExpanded;
    if (import13.checkBinding(this._expr_4, currVal_4, 'isExpanded', 'package:angular_components/material_menu/menu_popup.html')) {
      this._MaterialPopupComponent_0_8.visible = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._DeferredContentDirective_2_9.preserveDimensions = true);
    }
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    if ((!import13.debugThrowIfChanged)) {
      if (this._query_AutoFocusDirective_1_0_isDirty) {
        this._FocusTrapComponent_1_5.autoFocus = import30.firstOrNull(this._appEl_2.mapNestedViewsWithSingleResult((_ViewMenuPopupComponent1 nestedView) {
          return nestedView._AutoFocusDirective_1_5;
        }));
        this._query_AutoFocusDirective_1_0_isDirty = false;
      }
      if (this._viewQuery_MenuItemGroupsComponent_0_isDirty) {
        _ctx.menuItemGroups = import30.firstOrNull(this._appEl_2.mapNestedViewsWithSingleResult((_ViewMenuPopupComponent1 nestedView) {
          import11.View.queryChangeDetectorRefs[nestedView._MenuItemGroupsComponent_1_8] = nestedView._compView_1;
          return nestedView._MenuItemGroupsComponent_1_8;
        }));
        this._viewQuery_MenuItemGroupsComponent_0_isDirty = false;
      }
    }
    final currVal_0 = _ctx.popupClass;
    if (import13.checkBinding(this._expr_0, currVal_0, 'popupClass', 'package:angular_components/material_menu/menu_popup.html')) {
      this._compView_0.updateChildClassNonHtml(this._el_0, currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    this._compView_1.detectChanges();
    if ((!import13.debugThrowIfChanged)) {
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
    this._compView_1.destroyInternalState();
    this._DeferredContentDirective_2_9.ngOnDestroy();
    this._FocusTrapComponent_1_5.ngOnDestroy();
    this._MaterialPopupComponent_0_8.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.isExpanded = $event;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import10.ComponentStyles.scoped(styles$MenuPopupComponent, _debugComponentUrl));
      if (import13.isDevMode) {
        import10.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MenuPopupComponentNgFactory = ComponentFactory<import2.MenuPopupComponent>('menu-popup', viewFactory_MenuPopupComponentHost0);
ComponentFactory<import2.MenuPopupComponent> get MenuPopupComponentNgFactory {
  return _MenuPopupComponentNgFactory;
}

ComponentFactory<import2.MenuPopupComponent> createMenuPopupComponentFactory() {
  return ComponentFactory('menu-popup', viewFactory_MenuPopupComponentHost0);
}

class _ViewMenuPopupComponent1 extends import32.EmbeddedView<import2.MenuPopupComponent> {
  import33.ViewMaterialListComponent0 _compView_0;
  import34.MaterialListComponent _MaterialListComponent_0_5;
  import35.ViewMenuItemGroupsComponent0 _compView_1;
  import36.AutoFocusDirective _AutoFocusDirective_1_5;
  import37.MenuRootDirective _MenuRootDirective_1_6;
  import38.MenuItemGroupsComponent _MenuItemGroupsComponent_1_8;
  var _expr_1;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  _ViewMenuPopupComponent1(import39.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import33.ViewMaterialListComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'item-group-list');
    import14.setAttribute(_el_0, 'role', 'none');
    this.addShimC(_el_0);
    this._MaterialListComponent_0_5 = import34.MaterialListComponent();
    this._compView_1 = import35.ViewMenuItemGroupsComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    import14.setAttribute(_el_1, 'autoFocus', '');
    import14.setAttribute(_el_1, 'menu-root', '');
    import14.setAttribute(_el_1, 'preventCloseOnPressLeft', '');
    this.addShimC(_el_1);
    this._AutoFocusDirective_1_5 = (import13.isDevMode
        ? import15.debugInjectorWrap(import36.AutoFocusDirective, () {
            return import36.AutoFocusDirective(_el_1, this.parentView.parentView.injectorGet(import19.DomService, this.parentView.parentIndex), null, this.parentView.parentView.injectorGetOptional(import40.ModalComponent, this.parentView.parentIndex), import13.unsafeCast<ViewMenuPopupComponent0>(this.parentView)._PopupRef_0_10);
          })
        : import36.AutoFocusDirective(_el_1, this.parentView.parentView.injectorGet(import19.DomService, this.parentView.parentIndex), null, this.parentView.parentView.injectorGetOptional(import40.ModalComponent, this.parentView.parentIndex), import13.unsafeCast<ViewMenuPopupComponent0>(this.parentView)._PopupRef_0_10));
    this._MenuRootDirective_1_6 = import37.MenuRootDirective(import13.unsafeCast<ViewMenuPopupComponent0>(this.parentView)._MaterialPopupComponent_0_8);
    this._MenuItemGroupsComponent_1_8 = (import13.isDevMode
        ? import15.debugInjectorWrap(import38.MenuItemGroupsComponent, () {
            return import38.MenuItemGroupsComponent(this._MenuRootDirective_1_6, this._compView_1, import13.unsafeCast<ViewMenuPopupComponent0>(this.parentView)._MaterialPopupComponent_0_8, this.parentView.parentView.injectorGetOptional(import41.IdGenerator, this.parentView.parentIndex));
          })
        : import38.MenuItemGroupsComponent(this._MenuRootDirective_1_6, this._compView_1, import13.unsafeCast<ViewMenuPopupComponent0>(this.parentView)._MaterialPopupComponent_0_8, this.parentView.parentView.injectorGetOptional(import41.IdGenerator, this.parentView.parentIndex)));
    this._compView_1.create(this._MenuItemGroupsComponent_1_8);
    this._compView_0.createAndProject(this._MaterialListComponent_0_5, [
      [_el_1]
    ]);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import37.MenuRoot) && (1 == nodeIndex))) {
      return this._MenuRootDirective_1_6;
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
      this._MaterialListComponent_0_5.role = 'none';
      changed = true;
    }
    final currVal_1 = _ctx.width;
    if (import13.checkBinding(this._expr_1, currVal_1, 'width', 'package:angular_components/material_menu/menu_popup.html')) {
      this._MaterialListComponent_0_5.width = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._AutoFocusDirective_1_5.autoFocus = true);
    }
    if (((!import13.debugThrowIfChanged) && firstCheck)) {
      this._AutoFocusDirective_1_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MenuItemGroupsComponent_1_8.preventCloseOnPressLeft = true;
      changed = true;
    }
    final currVal_3 = _ctx.activateFirstItemOnExpand;
    if (import13.checkBinding(this._expr_3, currVal_3, 'activateFirstItemOnExpand', 'package:angular_components/material_menu/menu_popup.html')) {
      this._MenuItemGroupsComponent_1_8.activateFirstItemOnInit = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.activateLastItemOnExpand;
    if (import13.checkBinding(this._expr_4, currVal_4, 'activateLastItemOnExpand', 'package:angular_components/material_menu/menu_popup.html')) {
      this._MenuItemGroupsComponent_1_8.activateLastItemOnInit = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.popupClass;
    if (import13.checkBinding(this._expr_5, currVal_5, 'popupClass', 'package:angular_components/material_menu/menu_popup.html')) {
      this._MenuItemGroupsComponent_1_8.popupClass = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.menu;
    if (import13.checkBinding(this._expr_6, currVal_6, 'menu', 'package:angular_components/material_menu/menu_popup.html')) {
      this._MenuItemGroupsComponent_1_8.menu = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    if (((!import13.debugThrowIfChanged) && firstCheck)) {
      this._MenuItemGroupsComponent_1_8.ngOnInit();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_1.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    this._compView_1.detectChanges();
    if ((!import13.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MenuItemGroupsComponent_1_8.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import13.unsafeCast<ViewMenuPopupComponent0>(this.parentView)._query_AutoFocusDirective_1_0_isDirty = true;
    import13.unsafeCast<ViewMenuPopupComponent0>(this.parentView)._viewQuery_MenuItemGroupsComponent_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_1.destroyInternalState();
    this._AutoFocusDirective_1_5.ngOnDestroy();
    this._MenuItemGroupsComponent_1_8.ngOnDestroy();
  }
}

import32.EmbeddedView<void> viewFactory_MenuPopupComponent1(import39.RenderView parentView, int parentIndex) {
  return _ViewMenuPopupComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MenuPopupComponentHost = const [];

class _ViewMenuPopupComponentHost0 extends import42.HostView<import2.MenuPopupComponent> {
  @override
  void build() {
    this.componentView = ViewMenuPopupComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.MenuPopupComponent(_el_0);
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

import42.HostView<import2.MenuPopupComponent> viewFactory_MenuPopupComponentHost0() {
  return _ViewMenuPopupComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MenuPopupComponent, createMenuPopupComponentFactory());
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
}
