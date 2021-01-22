// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'fixed_material_tab_strip.dart';
export 'fixed_material_tab_strip.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/annotations/rtl_annotation.template.dart' as _ref2;
import 'package:angular_components/focus/focus_item.template.dart' as _ref3;
import 'package:angular_components/focus/focus_list.template.dart' as _ref4;
import 'package:angular_components/material_tab/tab_button.template.dart' as _ref5;
import 'package:angular_components/material_tab/tab_change_event.template.dart' as _ref6;
import 'package:angular_components/material_tab/fixed_material_tab_strip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'fixed_material_tab_strip.dart' as import2;
import '../focus/focus_list.template.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/views/view.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/di/errors.dart' as import12;
import '../focus/focus_list.dart' as import13;
import 'package:angular/src/core/zone/ng_zone.dart' as import14;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import18;
import 'tab_button.template.dart' as import19;
import '../focus/focus_item.template.dart' as import20;
import 'tab_button.dart' as import21;
import 'package:angular/src/core/linker/views/render_view.dart' as import22;
import '../focus/focus_item.dart' as import23;
import '../focus/focus.dart' as import24;
import 'dart:core';
import 'package:angular/src/core/linker/views/host_view.dart' as import26;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import27;

final List<dynamic> styles$FixedMaterialTabStripComponent = [import0.styles];

class ViewFixedMaterialTabStripComponent0 extends import1.ComponentView<import2.FixedMaterialTabStripComponent> {
  bool _query_FocusableItem_0_0_isDirty = true;
  import3.FocusListDirectiveNgCd _FocusListDirective_0_5;
  ViewContainer _appEl_2;
  import5.NgFor _NgFor_2_9;
  var _expr_1;
  var _expr_2;
  import6.DivElement _el_0;
  import6.DivElement _el_1;
  static import7.ComponentStyles _componentStyles;
  ViewFixedMaterialTabStripComponent0(import8.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('material-tab-strip');
    this.updateChildClassNonHtml(this.rootElement, import2.FixedMaterialTabStripComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/material_tab/fixed_material_tab_strip.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    this._el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'navi-bar');
    import11.setAttribute(this._el_0, 'focusList', '');
    import11.setAttribute(this._el_0, 'ignoreUpAndDown', '');
    import11.setAttribute(this._el_0, 'loop', '');
    import11.setAttribute(this._el_0, 'role', 'tablist');
    this.addShimC(this._el_0);
    this._FocusListDirective_0_5 = import3.FocusListDirectiveNgCd((import10.isDevMode
        ? import12.debugInjectorWrap(import13.FocusListDirective, () {
            return import13.FocusListDirective(this.parentView.injectorGet(import14.NgZone, this.parentIndex), 'tablist', '');
          })
        : import13.FocusListDirective(this.parentView.injectorGet(import14.NgZone, this.parentIndex), 'tablist', '')));
    this._el_1 = import11.appendDiv(doc, this._el_0);
    this.updateChildClass(this._el_1, 'tab-indicator');
    this.addShimC(this._el_1);
    final _anchor_2 = import11.appendAnchor(this._el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_FixedMaterialTabStripComponent1);
    this._NgFor_2_9 = import5.NgFor(this._appEl_2, _TemplateRef_2_8);
    _ctx.focusController = this._FocusListDirective_0_5.instance;
    _ctx.naviBar = this._el_0;
    import16.appViewUtils.eventManager.addEventListener(parentRenderNode, 'focusout', this.eventHandler1(_ctx.focusOutHandler));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      (this._FocusListDirective_0_5.instance.loop = true);
    }
    final currVal_2 = _ctx.tabLabels;
    if (import10.checkBinding(this._expr_2, currVal_2, 'tabLabels', 'package:angular_components/material_tab/fixed_material_tab_strip.html')) {
      this._NgFor_2_9.ngForOf = currVal_2;
      this._expr_2 = currVal_2;
    }
    if ((!import10.debugThrowIfChanged)) {
      this._NgFor_2_9.ngDoCheck();
    }
    this._appEl_2.detectChangesInNestedViews();
    if ((!import10.debugThrowIfChanged)) {
      if (this._query_FocusableItem_0_0_isDirty) {
        this._FocusListDirective_0_5.instance.listItems = this._appEl_2.mapNestedViewsWithSingleResult((_ViewFixedMaterialTabStripComponent1 nestedView) {
          return nestedView._FocusItemDirective_0_5.instance;
        });
        this._query_FocusableItem_0_0_isDirty = false;
      }
    }
    this._FocusListDirective_0_5.detectHostChanges(this, this._el_0);
    final currVal_1 = _ctx.tabIndicatorTransform;
    if (import10.checkBinding(this._expr_1, currVal_1, 'tabIndicatorTransform', 'package:angular_components/material_tab/fixed_material_tab_strip.html')) {
      this._el_1.style.setProperty('transform', currVal_1);
      this._expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._FocusListDirective_0_5.instance.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import7.ComponentStyles.scoped(styles$FixedMaterialTabStripComponent, _debugComponentUrl));
      if (import10.isDevMode) {
        import7.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FixedMaterialTabStripComponentNgFactory = ComponentFactory<import2.FixedMaterialTabStripComponent>('material-tab-strip', viewFactory_FixedMaterialTabStripComponentHost0);
ComponentFactory<import2.FixedMaterialTabStripComponent> get FixedMaterialTabStripComponentNgFactory {
  return _FixedMaterialTabStripComponentNgFactory;
}

ComponentFactory<import2.FixedMaterialTabStripComponent> createFixedMaterialTabStripComponentFactory() {
  return ComponentFactory('material-tab-strip', viewFactory_FixedMaterialTabStripComponentHost0);
}

class _ViewFixedMaterialTabStripComponent1 extends import18.EmbeddedView<import2.FixedMaterialTabStripComponent> {
  import19.ViewTabButtonComponent0 _compView_0;
  import20.FocusItemDirectiveNgCd _FocusItemDirective_0_5;
  import21.TabButtonComponent _TabButtonComponent_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_4;
  import6.Element _el_0;
  _ViewFixedMaterialTabStripComponent1(import22.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import19.ViewTabButtonComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'tab-button');
    import11.setAttribute(this._el_0, 'focusItem', '');
    import11.setAttribute(this._el_0, 'role', 'tab');
    this.addShimC(this._el_0);
    this._FocusItemDirective_0_5 = import20.FocusItemDirectiveNgCd(import23.FocusItemDirective(this._el_0, this._compView_0, 'tab'));
    this._TabButtonComponent_0_6 = import21.TabButtonComponent(this._el_0);
    this._compView_0.create(this._TabButtonComponent_0_6);
    this._el_0.addEventListener('keydown', this.eventHandler1(this._FocusItemDirective_0_5.instance.keydown));
    final subscription_0 = this._TabButtonComponent_0_6.trigger.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import24.FocusableItem) && (0 == nodeIndex))) {
      return this._FocusItemDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_idx = import10.unsafeCast<int>(this.locals['index']);
    final local_tabLabel = import10.unsafeCast<String>(this.locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      this._TabButtonComponent_0_6.role = 'tab';
      changed = true;
    }
    final currVal_2 = local_tabLabel;
    if (import10.checkBinding(this._expr_2, currVal_2, 'tabLabel', 'package:angular_components/material_tab/fixed_material_tab_strip.html')) {
      this._TabButtonComponent_0_6.label = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_4 = (_ctx.activeTabIndex == local_idx);
    if (import10.checkBinding(this._expr_4, currVal_4, 'activeTabIndex == idx', 'package:angular_components/material_tab/fixed_material_tab_strip.html')) {
      this._TabButtonComponent_0_6.isActive = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.tabId(local_idx);
    if (import10.checkBinding(this._expr_0, currVal_0, 'tabId(idx)', 'package:angular_components/material_tab/fixed_material_tab_strip.html')) {
      import11.setProperty(this._el_0, 'id', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.activeStr(local_idx);
    if (import10.checkBinding(this._expr_1, currVal_1, 'activeStr(idx)', 'package:angular_components/material_tab/fixed_material_tab_strip.html')) {
      import11.updateAttribute(this._el_0, 'aria-selected', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._FocusItemDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import10.unsafeCast<ViewFixedMaterialTabStripComponent0>(this.parentView)._query_FocusableItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final local_idx = import10.unsafeCast<int>(this.locals['index']);
    final _ctx = this.ctx;
    _ctx.switchTo(local_idx);
  }
}

import18.EmbeddedView<void> viewFactory_FixedMaterialTabStripComponent1(import22.RenderView parentView, int parentIndex) {
  return _ViewFixedMaterialTabStripComponent1(parentView, parentIndex);
}

final List<dynamic> styles$FixedMaterialTabStripComponentHost = const [];

class _ViewFixedMaterialTabStripComponentHost0 extends import26.HostView<import2.FixedMaterialTabStripComponent> {
  @override
  void build() {
    this.componentView = ViewFixedMaterialTabStripComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import10.isDevMode
        ? import12.debugInjectorWrap(import2.FixedMaterialTabStripComponent, () {
            return import2.FixedMaterialTabStripComponent(this.componentView, this.injectorGetOptional(const import27.OpaqueToken<dynamic>('isRtl'), this.parentIndex), this.injectorGet(import14.NgZone, this.parentIndex));
          })
        : import2.FixedMaterialTabStripComponent(this.componentView, this.injectorGetOptional(const import27.OpaqueToken<dynamic>('isRtl'), this.parentIndex), this.injectorGet(import14.NgZone, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    this.componentView.detectChanges();
    if ((!import10.debugThrowIfChanged)) {
      if (firstCheck) {
        this.component.ngAfterViewInit();
      }
    }
  }
}

import26.HostView<import2.FixedMaterialTabStripComponent> viewFactory_FixedMaterialTabStripComponentHost0() {
  return _ViewFixedMaterialTabStripComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(FixedMaterialTabStripComponent, createFixedMaterialTabStripComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
