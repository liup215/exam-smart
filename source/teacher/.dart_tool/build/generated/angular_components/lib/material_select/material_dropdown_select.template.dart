// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_dropdown_select.dart';
export 'material_dropdown_select.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/annotations/rtl_annotation.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref3;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref4;
import 'package:angular_components/focus/focus.template.dart' as _ref5;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref6;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref7;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref8;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref9;
import 'package:angular_components/material_list/material_list.template.dart' as _ref10;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref11;
import 'package:angular_components/material_select/activation_handler.template.dart' as _ref12;
import 'package:angular_components/material_select/dropdown_button.template.dart' as _ref13;
import 'package:angular_components/material_select/material_select_base.template.dart' as _ref14;
import 'package:angular_components/material_select/material_select_dropdown_item.template.dart' as _ref15;
import 'package:angular_components/material_select/shift_click_selection.template.dart' as _ref16;
import 'package:angular_components/mixins/button_wrapper.template.dart' as _ref17;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref18;
import 'package:angular_components/mixins/selection_input_adapter.template.dart' as _ref19;
import 'package:angular_components/mixins/track_layout_changes.template.dart' as _ref20;
import 'package:angular_components/model/a11y/active_item.template.dart' as _ref21;
import 'package:angular_components/model/a11y/active_item_directive.template.dart' as _ref22;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref23;
import 'package:angular_components/model/selection/select.template.dart' as _ref24;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref25;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref26;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref27;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref28;
import 'package:angular_components/model/ui/template_support.template.dart' as _ref29;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref30;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref31;
import 'package:angular_components/material_select/material_dropdown_select.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'material_dropdown_select.dart' as import2;
import 'dropdown_button.template.dart' as import3;
import 'dropdown_button.dart' as import4;
import '../src/laminate/popup/popup_source_directive.dart' as import5;
import '../material_popup/material_popup.template.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import '../material_popup/material_popup.dart' as import8;
import '../content/deferred_content.dart' as import9;
import 'dart:html' as import10;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import11;
import 'package:angular/src/core/linker/views/view.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/src/runtime/dom_helpers.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../src/laminate/popup/dom_popup_source.dart' as import17;
import '../utils/angular/reference/reference.dart' as import18;
import '../src/laminate/popup/popup_hierarchy.dart' as import19;
import 'package:angular/src/core/zone/ng_zone.dart' as import20;
import '../src/laminate/overlay/overlay_service.dart' as import21;
import '../utils/browser/dom_service/dom_service.dart' as import22;
import '../laminate/overlay/zindexer.dart' as import23;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import24;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import26;
import '../src/laminate/popup/popup_size_provider.dart' as import27;
import 'package:angular/src/core/linker/element_ref.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../focus/focus_interface.dart' as import30;
import '../interfaces/has_disabled.dart' as import31;
import '../content/deferred_content_aware.dart' as import32;
import '../mixins/material_dropdown_base.dart' as import33;
import '../src/laminate/popup/popup_ref.dart' as import34;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import36;
import '../material_list/material_list.template.dart' as import37;
import '../focus/focus.dart' as import38;
import '../material_list/material_list.dart' as import39;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/views/render_view.dart' as import41;
import '../laminate/components/modal/modal.dart' as import42;
import 'package:angular/src/common/directives/ng_for.dart' as import43;
import 'material_select_dropdown_item.template.dart' as import44;
import '../model/a11y/active_item_directive.template.dart' as import45;
import 'material_select_dropdown_item.dart' as import46;
import '../model/a11y/active_item_directive.dart' as import47;
import 'activation_handler.dart' as import48;
import '../utils/id_generator/id_generator.dart' as import49;
import '../model/selection/selection_container.dart' as import50;
import '../model/ui/has_renderer.dart' as import51;
import '../model/selection/selection_options.dart' as import52;
import 'package:angular/src/runtime/text_binding.dart' as import53;
import 'package:angular/src/runtime/interpolate.dart' as import54;
import '../dynamic_component/dynamic_component.template.dart' as import55;
import '../dynamic_component/dynamic_component.dart' as import56;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import57;
import 'package:angular/src/core/linker/views/host_view.dart' as import58;
import '../model/a11y/active_item.dart' as import59;

final List<dynamic> styles$MaterialDropdownSelectComponent = [import0.styles];

class ViewMaterialDropdownSelectComponent0<T> extends import1.ComponentView<import2.MaterialDropdownSelectComponent<T>> {
  import3.ViewDropdownButtonComponent0 _compView_0;
  import4.DropdownButtonComponent _DropdownButtonComponent_0_5;
  import5.PopupSourceDirective _PopupSourceDirective_0_7;
  import6.ViewMaterialPopupComponent0 _compView_2;
  ViewContainer _appEl_2;
  import8.MaterialPopupComponent _MaterialPopupComponent_2_8;
  dynamic __PopupRef_2_10;
  dynamic __PopupHierarchy_2_12;
  ViewContainer _appEl_4;
  import9.DeferredContentDirective _DeferredContentDirective_4_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  var _expr_12;
  var _expr_13;
  var _expr_15;
  var _expr_17;
  var _expr_18;
  var _expr_19;
  var _expr_20;
  var _expr_21;
  var _expr_22;
  import10.Element _el_2;
  static import11.ComponentStyles _componentStyles;
  ViewMaterialDropdownSelectComponent0(import12.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import10.document.createElement('material-dropdown-select');
  }
  dynamic get _PopupRef_2_10 {
    if ((this.__PopupRef_2_10 == null)) {
      (this.__PopupRef_2_10 = import8.getResolvedPopupRef(this._MaterialPopupComponent_2_8));
    }
    return this.__PopupRef_2_10;
  }

  dynamic get _PopupHierarchy_2_12 {
    if ((this.__PopupHierarchy_2_12 == null)) {
      (this.__PopupHierarchy_2_12 = import8.getHierarchy(this._MaterialPopupComponent_2_8));
    }
    return this.__PopupHierarchy_2_12;
  }

  static String get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:angular_components/lib/material_select/material_dropdown_select.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import10.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import3.ViewDropdownButtonComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    import15.setAttribute(_el_0, 'initPopupAriaAttributes', 'false');
    import15.setAttribute(_el_0, 'popupSource', '');
    import15.setAttribute(_el_0, 'popupType', 'listbox');
    this.addShimC(_el_0);
    this._DropdownButtonComponent_0_5 = import4.DropdownButtonComponent();
    this._PopupSourceDirective_0_7 = (import14.isDevMode
        ? import16.debugInjectorWrap(import5.PopupSourceDirective, () {
            return import5.PopupSourceDirective(this.parentView.injectorGet(import17.DomPopupSourceFactory, this.parentIndex), _el_0, this.parentView.injectorGetOptional(import18.ReferenceDirective, this.parentIndex), this._DropdownButtonComponent_0_5, 'false');
          })
        : import5.PopupSourceDirective(this.parentView.injectorGet(import17.DomPopupSourceFactory, this.parentIndex), _el_0, this.parentView.injectorGetOptional(import18.ReferenceDirective, this.parentIndex), this._DropdownButtonComponent_0_5, 'false'));
    final _text_1 = import15.createText(' ');
    this._compView_0.createAndProject(this._DropdownButtonComponent_0_5, [
      <dynamic>[_text_1]..addAll(this.projectedNodes[0])
    ]);
    this._compView_2 = import6.ViewMaterialPopupComponent0(this, 2);
    this._el_2 = this._compView_2.rootElement;
    parentRenderNode.append(this._el_2);
    import15.setAttribute(this._el_2, 'enforceSpaceConstraints', '');
    this.addShimC(this._el_2);
    this._appEl_2 = ViewContainer(2, null, this, this._el_2);
    this._MaterialPopupComponent_2_8 = (import14.isDevMode
        ? import16.debugInjectorWrap(import8.MaterialPopupComponent, () {
            return import8.MaterialPopupComponent(this.parentView.injectorGetOptional(import19.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import8.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import20.NgZone, this.parentIndex), this.parentView.injectorGet(import21.OverlayService, this.parentIndex), this.parentView.injectorGet(import22.DomService, this.parentIndex), this.parentView.injectorGet(import23.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<List<import26.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import27.PopupSizeProvider, this.parentIndex), this._compView_2, this._appEl_2, ElementRef(this._el_2));
          })
        : import8.MaterialPopupComponent(this.parentView.injectorGetOptional(import19.PopupHierarchy, this.parentIndex), this.parentView.injectorGetOptional(import8.MaterialPopupComponent, this.parentIndex), null, this.parentView.injectorGet(import20.NgZone, this.parentIndex), this.parentView.injectorGet(import21.OverlayService, this.parentIndex), this.parentView.injectorGet(import22.DomService, this.parentIndex), this.parentView.injectorGet(import23.ZIndexer, this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<List<import26.RelativePosition>>('defaultPopupPositions'), this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentIndex), this.parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentIndex), this.parentView.injectorGetOptional(import27.PopupSizeProvider, this.parentIndex), this._compView_2, this._appEl_2, ElementRef(this._el_2)));
    final doc = import10.document;
    final _el_3 = doc.createElement('div');
    import15.setAttribute(_el_3, 'header', '');
    this.addShimC(_el_3);
    this.project(_el_3, 1);
    final _anchor_4 = import15.createAnchor();
    this._appEl_4 = ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent1<T>(parentView, parentIndex);
    });
    this._DeferredContentDirective_4_9 = import9.DeferredContentDirective(this._appEl_4, _TemplateRef_4_8, this._MaterialPopupComponent_2_8, this);
    final _el_5 = doc.createElement('div');
    import15.setAttribute(_el_5, 'footer', '');
    this.addShimC(_el_5);
    this.project(_el_5, 5);
    this._compView_2.createAndProject(this._MaterialPopupComponent_2_8, [
      [_el_3],
      [this._appEl_4],
      [_el_5]
    ]);
    _el_0.addEventListener('keydown', this.eventHandler1(_ctx.onKeyDown));
    _el_0.addEventListener('keypress', this.eventHandler1(_ctx.onKeyPress));
    final subscription_0 = this._DropdownButtonComponent_0_5.onFocus.listen(this.eventHandler1(_ctx.onFocus));
    final subscription_1 = this._DropdownButtonComponent_0_5.onBlur.listen(this.eventHandler1(_ctx.onBlur));
    final subscription_2 = this._DropdownButtonComponent_0_5.trigger.listen(this.eventHandler1(_ctx.handleClick));
    final subscription_3 = this._MaterialPopupComponent_2_8.onVisible.listen(this.eventHandler1(_ctx.onVisible));
    _el_3.addEventListener('keydown', this.eventHandler1(_ctx.onKeyDown));
    _el_3.addEventListener('keypress', this.eventHandler1(_ctx.onKeyPress));
    _el_3.addEventListener('keyup', this.eventHandler1(_ctx.onKeyUp));
    _el_5.addEventListener('keydown', this.eventHandler1(_ctx.onKeyDown));
    _el_5.addEventListener('keypress', this.eventHandler1(_ctx.onKeyPress));
    _el_5.addEventListener('keyup', this.eventHandler1(_ctx.onKeyUp));
    import12.View.queryChangeDetectorRefs[this._DropdownButtonComponent_0_5] = this._compView_0;
    _ctx.dropdownButton = this._DropdownButtonComponent_0_5;
    this.initSubscriptions([subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import30.Focusable) || identical(token, import31.HasDisabled)) && (nodeIndex <= 1))) {
      return this._DropdownButtonComponent_0_5;
    }
    if (((2 <= nodeIndex) && (nodeIndex <= 5))) {
      if (((identical(token, import8.MaterialPopupComponent) || identical(token, import32.DeferredContentAware)) || identical(token, import33.DropdownHandle))) {
        return this._MaterialPopupComponent_2_8;
      }
      if (identical(token, import34.PopupRef)) {
        return this._PopupRef_2_10;
      }
      if (identical(token, import19.PopupHierarchy)) {
        return this._PopupHierarchy_2_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final import5.PopupSourceDirective local_source = this._PopupSourceDirective_0_7;
    changed = false;
    if (firstCheck) {
      this._DropdownButtonComponent_0_5.popupType = 'listbox';
      changed = true;
      if (!identical(_ctx.buttonAriaRole, null)) {
        this._DropdownButtonComponent_0_5.role = _ctx.buttonAriaRole;
        changed = true;
      }
    }
    final currVal_0 = _ctx.buttonText;
    if (import14.checkBinding(this._expr_0, currVal_0, 'buttonText', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.buttonText = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.buttonAriaLabel;
    if (import14.checkBinding(this._expr_1, currVal_1, 'buttonAriaLabel', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.buttonAriaLabel = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import14.checkBinding(this._expr_2, currVal_2, 'disabled', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.disabled = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.icon;
    if (import14.checkBinding(this._expr_3, currVal_3, 'icon', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.icon = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.iconName;
    if (import14.checkBinding(this._expr_4, currVal_4, 'iconName', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.iconName = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.raised;
    if (import14.checkBinding(this._expr_5, currVal_5, 'raised', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.raised = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_7 = _ctx.error;
    if (import14.checkBinding(this._expr_7, currVal_7, 'error', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.error = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    final currVal_8 = (_ctx.visible ? _ctx.listId : null);
    if (import14.checkBinding(this._expr_8, currVal_8, 'visible ? listId : null', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.ariaOwns = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.visible;
    if (import14.checkBinding(this._expr_9, currVal_9, 'visible', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.ariaExpanded = currVal_9;
      changed = true;
      this._expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.buttonAriaDescribedBy;
    if (import14.checkBinding(this._expr_10, currVal_10, 'buttonAriaDescribedBy', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.ariaDescribedBy = currVal_10;
      changed = true;
      this._expr_10 = currVal_10;
    }
    final currVal_12 = _ctx.buttonAriaLabelledBy;
    if (import14.checkBinding(this._expr_12, currVal_12, 'buttonAriaLabelledBy', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.ariaLabelledBy = currVal_12;
      changed = true;
      this._expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.showButtonBorder;
    if (import14.checkBinding(this._expr_13, currVal_13, 'showButtonBorder', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DropdownButtonComponent_0_5.showButtonBorder = currVal_13;
      changed = true;
      this._expr_13 = currVal_13;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (((!import14.debugThrowIfChanged) && firstCheck)) {
      this._DropdownButtonComponent_0_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialPopupComponent_2_8.enforceSpaceConstraints = true;
      changed = true;
    }
    final currVal_15 = _ctx.autoDismiss;
    if (import14.checkBinding(this._expr_15, currVal_15, 'autoDismiss', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialPopupComponent_2_8.autoDismiss = currVal_15;
      changed = true;
      this._expr_15 = currVal_15;
    }
    final currVal_17 = _ctx.popupMatchInputWidth;
    if (import14.checkBinding(this._expr_17, currVal_17, 'popupMatchInputWidth', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialPopupComponent_2_8.matchMinSourceWidth = currVal_17;
      changed = true;
      this._expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.preferredPositions;
    if (import14.checkBinding(this._expr_18, currVal_18, 'preferredPositions', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialPopupComponent_2_8.preferredPositions = currVal_18;
      changed = true;
      this._expr_18 = currVal_18;
    }
    final currVal_19 = local_source;
    if (import14.checkBinding(this._expr_19, currVal_19, 'source', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialPopupComponent_2_8.source = currVal_19;
      changed = true;
      this._expr_19 = currVal_19;
    }
    final currVal_20 = _ctx.trackLayoutChanges;
    if (import14.checkBinding(this._expr_20, currVal_20, 'trackLayoutChanges', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialPopupComponent_2_8.trackLayoutChanges = currVal_20;
      changed = true;
      this._expr_20 = currVal_20;
    }
    final currVal_21 = _ctx.visible;
    if (import14.checkBinding(this._expr_21, currVal_21, 'visible', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialPopupComponent_2_8.visible = currVal_21;
      changed = true;
      this._expr_21 = currVal_21;
    }
    final currVal_22 = _ctx.slide;
    if (import14.checkBinding(this._expr_22, currVal_22, 'slide', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialPopupComponent_2_8.slide = currVal_22;
      changed = true;
      this._expr_22 = currVal_22;
    }
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
    if (firstCheck) {
      (this._DeferredContentDirective_4_9.preserveDimensions = true);
    }
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.popupClassName, null)) {
        this._compView_2.updateChildClassNonHtml(this._el_2, _ctx.popupClassName);
      }
    }
    this._compView_2.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    this._compView_2.detectChanges();
    if ((!import14.debugThrowIfChanged)) {
      if (firstCheck) {
        this._PopupSourceDirective_0_7.ngAfterViewInit();
        this._MaterialPopupComponent_2_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._compView_2.destroyInternalState();
    this._PopupSourceDirective_0_7.ngOnDestroy();
    this._DeferredContentDirective_4_9.ngOnDestroy();
    this._MaterialPopupComponent_2_8.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import11.ComponentStyles.scoped(styles$MaterialDropdownSelectComponent, _debugComponentUrl));
      if (import14.isDevMode) {
        import11.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _MaterialDropdownSelectComponentNgFactory = ComponentFactory<import2.MaterialDropdownSelectComponent>('material-dropdown-select', viewFactory_MaterialDropdownSelectComponentHost0);
ComponentFactory<import2.MaterialDropdownSelectComponent> get MaterialDropdownSelectComponentNgFactory {
  return _MaterialDropdownSelectComponentNgFactory;
}

ComponentFactory<import2.MaterialDropdownSelectComponent<T>> createMaterialDropdownSelectComponentFactory<T>() {
  return ComponentFactory('material-dropdown-select', viewFactory_MaterialDropdownSelectComponentHost0);
}

class _ViewMaterialDropdownSelectComponent1<T> extends import36.EmbeddedView<import2.MaterialDropdownSelectComponent<T>> {
  import37.ViewMaterialListComponent0 _compView_0;
  import38.AutoFocusDirective _AutoFocusDirective_0_5;
  import39.MaterialListComponent _MaterialListComponent_0_6;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_1;
  var _expr_2;
  var _expr_4;
  import10.Element _el_0;
  _ViewMaterialDropdownSelectComponent1(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import37.ViewMaterialListComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(this._el_0, 'options-list');
    import15.setAttribute(this._el_0, 'role', 'listbox');
    this._el_0.tabIndex = 0;
    this.addShimC(this._el_0);
    this._AutoFocusDirective_0_5 = (import14.isDevMode
        ? import16.debugInjectorWrap(import38.AutoFocusDirective, () {
            return import38.AutoFocusDirective(this._el_0, this.parentView.parentView.injectorGet(import22.DomService, this.parentView.parentIndex), null, this.parentView.parentView.injectorGetOptional(import42.ModalComponent, this.parentView.parentIndex), import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView)._PopupRef_2_10);
          })
        : import38.AutoFocusDirective(this._el_0, this.parentView.parentView.injectorGet(import22.DomService, this.parentView.parentIndex), null, this.parentView.parentView.injectorGetOptional(import42.ModalComponent, this.parentView.parentIndex), import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView)._PopupRef_2_10));
    this._MaterialListComponent_0_6 = import39.MaterialListComponent();
    final _text_1 = import15.createText(' ');
    final _anchor_2 = import15.createAnchor();
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent2<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    this._compView_0.createAndProject(this._MaterialListComponent_0_6, [
      <dynamic>[this.projectedNodes[2]]..addAll([_text_1])..addAll(this.projectedNodes[3])..addAll([this._appEl_2])..addAll(this.projectedNodes[4])
    ]);
    this._el_0.addEventListener('keydown', this.eventHandler1(_ctx.onKeyDown));
    this._el_0.addEventListener('keypress', this.eventHandler1(_ctx.onKeyPress));
    this._el_0.addEventListener('keyup', this.eventHandler1(_ctx.onKeyUp));
    this._el_0.addEventListener('mouseout', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final currVal_2 = _ctx.listAutoFocus;
    if (import14.checkBinding(this._expr_2, currVal_2, 'listAutoFocus', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._AutoFocusDirective_0_5.autoFocus = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (((!import14.debugThrowIfChanged) && firstCheck)) {
      this._AutoFocusDirective_0_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialListComponent_0_6.role = 'listbox';
      changed = true;
    }
    final currVal_4 = _ctx.width;
    if (import14.checkBinding(this._expr_4, currVal_4, 'width', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialListComponent_0_6.width = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._NgIf_2_9.ngIf = (_ctx.options != null);
    this._appEl_2.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.listId, null)) {
        import15.updateAttribute(this._el_0, 'id', _ctx.listId);
      }
    }
    final currVal_1 = _ctx.ariaActiveDescendant;
    if (import14.checkBinding(this._expr_1, currVal_1, 'ariaActiveDescendant', 'package:angular_components/material_select/material_dropdown_select.html')) {
      import15.updateAttribute(this._el_0, 'aria-activedescendant', currVal_1);
      this._expr_1 = currVal_1;
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._AutoFocusDirective_0_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.activeModel.activate(null);
  }
}

import36.EmbeddedView<void> viewFactory_MaterialDropdownSelectComponent1<T>(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent2<T> extends import36.EmbeddedView<import2.MaterialDropdownSelectComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  import43.NgFor _NgFor_2_9;
  var _expr_0;
  _ViewMaterialDropdownSelectComponent2(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'options-wrapper');
    this.addShimC(_el_0);
    final _anchor_1 = import15.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent3<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import15.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent4<T>(parentView, parentIndex);
    });
    this._NgFor_2_9 = import43.NgFor(this._appEl_2, _TemplateRef_2_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    this._NgIf_1_9.ngIf = _ctx.showDeselectItem;
    if (firstCheck) {
      if (!identical(_ctx.trackByIndexFn, null)) {
        (this._NgFor_2_9.ngForTrackBy = _ctx.trackByIndexFn);
      }
    }
    final currVal_0 = _ctx.options.optionGroups;
    if (import14.checkBinding(this._expr_0, currVal_0, 'options.optionGroups', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._NgFor_2_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import14.debugThrowIfChanged)) {
      this._NgFor_2_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
  }
}

import36.EmbeddedView<void> viewFactory_MaterialDropdownSelectComponent2<T>(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent3<T> extends import36.EmbeddedView<import2.MaterialDropdownSelectComponent<T>> {
  import44.ViewMaterialSelectDropdownItemComponent0<String> _compView_0;
  import45.ActiveItemDirectiveNgCd _ActiveItemDirective_0_5;
  import46.MaterialSelectDropdownItemComponent<String> _MaterialSelectDropdownItemComponent_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  import10.Element _el_0;
  _ViewMaterialDropdownSelectComponent3(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import44.ViewMaterialSelectDropdownItemComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.addShimC(this._el_0);
    this._ActiveItemDirective_0_5 = import45.ActiveItemDirectiveNgCd((import14.isDevMode
        ? import16.debugInjectorWrap(import47.ActiveItemDirective, () {
            return import47.ActiveItemDirective(this._el_0, this.parentView.parentView.parentView.parentView.injectorGet(import22.DomService, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import42.Modal, this.parentView.parentView.parentView.parentIndex), import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView)._PopupRef_2_10);
          })
        : import47.ActiveItemDirective(this._el_0, this.parentView.parentView.parentView.parentView.injectorGet(import22.DomService, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import42.Modal, this.parentView.parentView.parentView.parentIndex), import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView)._PopupRef_2_10)));
    this._MaterialSelectDropdownItemComponent_0_6 = (import14.isDevMode
        ? import16.debugInjectorWrap(import46.MaterialSelectDropdownItemComponent, () {
            return import46.MaterialSelectDropdownItemComponent(this._el_0, null, import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView)._MaterialPopupComponent_2_8, this.parentView.parentView.parentView.parentView.injectorGetOptional(import48.ActivationHandler, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import49.IdGenerator, this.parentView.parentView.parentView.parentIndex), this._compView_0);
          })
        : import46.MaterialSelectDropdownItemComponent(this._el_0, null, import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView)._MaterialPopupComponent_2_8, this.parentView.parentView.parentView.parentView.injectorGetOptional(import48.ActivationHandler, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import49.IdGenerator, this.parentView.parentView.parentView.parentIndex), this._compView_0));
    this._compView_0.createAndProject(this._MaterialSelectDropdownItemComponent_0_6, [const []]);
    this._el_0.addEventListener('mouseenter', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('mouseleave', this.eventHandler0(this._ActiveItemDirective_0_5.instance.onMouseLeave));
    final subscription_0 = this._MaterialSelectDropdownItemComponent_0_6.trigger.listen(this.eventHandler0(_ctx.deselectCurrentSelection));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import50.SelectionItem) || identical(token, import51.HasRenderer)) && (0 == nodeIndex))) {
      return this._MaterialSelectDropdownItemComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_popup = import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView)._MaterialPopupComponent_2_8;
    final currVal_1 = (local_popup.showPopup && _ctx.activeModel.isActive(_ctx.deselectLabel));
    if (import14.checkBinding(this._expr_1, currVal_1, 'popup.showPopup && activeModel.isActive(deselectLabel)', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._ActiveItemDirective_0_5.instance.itemActive = currVal_1;
      this._expr_1 = currVal_1;
    }
    changed = false;
    if (firstCheck) {
      this._MaterialSelectDropdownItemComponent_0_6.tabbable = false;
      changed = true;
    }
    final currVal_3 = _ctx.deselectLabel;
    if (import14.checkBinding(this._expr_3, currVal_3, 'deselectLabel', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.value = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.isDeselectItemSelected;
    if (import14.checkBinding(this._expr_4, currVal_4, 'isDeselectItemSelected', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.selected = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.activeModel.id(_ctx.deselectLabel);
    if (import14.checkBinding(this._expr_5, currVal_5, 'activeModel.id(deselectLabel)', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.id = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    final currVal_0 = (_ctx.options.optionGroups.length == 1);
    if (import14.checkBinding(this._expr_0, currVal_0, 'options.optionGroups.length == 1', 'package:angular_components/material_select/material_dropdown_select.html')) {
      import15.updateClassBindingNonHtml(this._el_0, 'empty', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._ActiveItemDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    if ((!import14.debugThrowIfChanged)) {
      if (firstCheck) {
        this._ActiveItemDirective_0_5.instance.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._ActiveItemDirective_0_5.instance.ngOnDestroy();
    this._MaterialSelectDropdownItemComponent_0_6.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.activeModel.activate(_ctx.deselectLabel);
    this._ActiveItemDirective_0_5.instance.onMouseEnter();
  }
}

import36.EmbeddedView<void> viewFactory_MaterialDropdownSelectComponent3<T>(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent4<T> extends import36.EmbeddedView<import2.MaterialDropdownSelectComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  var _expr_0;
  import10.DivElement _el_0;
  _ViewMaterialDropdownSelectComponent4(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    this._el_0 = doc.createElement('div');
    import15.setAttribute(this._el_0, 'group', '');
    this.addShimC(this._el_0);
    final _anchor_1 = import15.appendAnchor(this._el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent5<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import14.unsafeCast<import52.OptionGroup<T>>(this.locals['\$implicit']);
    this._NgIf_1_9.ngIf = (local_group.isNotEmpty || local_group.hasEmptyLabel);
    this._appEl_1.detectChangesInNestedViews();
    final currVal_0 = (local_group.isEmpty && (!local_group.hasEmptyLabel));
    if (import14.checkBinding(this._expr_0, currVal_0, 'group.isEmpty && !group.hasEmptyLabel', 'package:angular_components/material_select/material_dropdown_select.html')) {
      import15.updateClassBinding(this._el_0, 'empty', currVal_0);
      this._expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import36.EmbeddedView<void> viewFactory_MaterialDropdownSelectComponent4<T>(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent5<T> extends import36.EmbeddedView<import2.MaterialDropdownSelectComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  _ViewMaterialDropdownSelectComponent5(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import15.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent6<T>(parentView, parentIndex);
    });
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import15.createAnchor();
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent7<T>(parentView, parentIndex);
    });
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import15.createAnchor();
    this._appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent8<T>(parentView, parentIndex);
    });
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import15.createAnchor();
    this._appEl_3 = ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent10<T>(parentView, parentIndex);
    });
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    this.initRootNodesAndSubscriptions([this._appEl_0, this._appEl_1, this._appEl_2, this._appEl_3], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_group = import14.unsafeCast<import52.OptionGroup<T>>(import14.unsafeCast<_ViewMaterialDropdownSelectComponent4>(this.parentView).locals['\$implicit']);
    this._NgIf_0_9.ngIf = (local_group.hasLabel && (!_ctx.hasCustomLabelRenderer));
    this._NgIf_1_9.ngIf = _ctx.hasCustomLabelRenderer;
    this._NgIf_2_9.ngIf = local_group.isNotEmpty;
    this._NgIf_3_9.ngIf = (local_group.isEmpty && local_group.hasEmptyLabel);
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
  }
}

import36.EmbeddedView<void> viewFactory_MaterialDropdownSelectComponent5<T>(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent5<T>(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent6<T> extends import36.EmbeddedView<import2.MaterialDropdownSelectComponent<T>> {
  final import53.TextBinding _textBinding_1 = import53.TextBinding();
  _ViewMaterialDropdownSelectComponent6(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('span');
    import15.setAttribute(_el_0, 'label', '');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import14.unsafeCast<import52.OptionGroup<T>>(import14.unsafeCast<_ViewMaterialDropdownSelectComponent4>(this.parentView.parentView).locals['\$implicit']);
    this._textBinding_1.updateText(import54.interpolateString0(local_group.uiDisplayName));
  }
}

import36.EmbeddedView<void> viewFactory_MaterialDropdownSelectComponent6<T>(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent6<T>(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent7<T> extends import36.EmbeddedView<import2.MaterialDropdownSelectComponent<T>> {
  import55.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import56.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  _ViewMaterialDropdownSelectComponent7(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import55.ViewDynamicComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._appEl_0 = ViewContainer(0, null, this, _el_0);
    this._DynamicComponent_0_8 = (import14.isDevMode
        ? import16.debugInjectorWrap(import56.DynamicComponent, () {
            return import56.DynamicComponent(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import57.SlowComponentLoader, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._appEl_0);
          })
        : import56.DynamicComponent(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import57.SlowComponentLoader, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._appEl_0));
    this._compView_0.create(this._DynamicComponent_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    final local_group = import14.unsafeCast<import52.OptionGroup<T>>(import14.unsafeCast<_ViewMaterialDropdownSelectComponent4>(this.parentView.parentView).locals['\$implicit']);
    changed = false;
    final currVal_0 = _ctx.labelFactory(local_group);
    if (import14.checkBinding(this._expr_0, currVal_0, 'labelFactory(group)', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DynamicComponent_0_8.componentFactory = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = local_group;
    if (import14.checkBinding(this._expr_1, currVal_1, 'group', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._DynamicComponent_0_8.value = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (changed) {
      this._DynamicComponent_0_8.ngAfterChanges();
    }
    this._appEl_0.detectChangesInNestedViews();
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._DynamicComponent_0_8.ngOnDestroy();
  }
}

import36.EmbeddedView<void> viewFactory_MaterialDropdownSelectComponent7<T>(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent7<T>(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent8<T> extends import36.EmbeddedView<import2.MaterialDropdownSelectComponent<T>> {
  ViewContainer _appEl_0;
  import43.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialDropdownSelectComponent8(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import15.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent9<T>(parentView, parentIndex);
    });
    this._NgFor_0_9 = import43.NgFor(this._appEl_0, _TemplateRef_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import14.unsafeCast<import52.OptionGroup<T>>(import14.unsafeCast<_ViewMaterialDropdownSelectComponent4>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = local_group;
    if (import14.checkBinding(this._expr_0, currVal_0, 'group', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._NgFor_0_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import14.debugThrowIfChanged)) {
      this._NgFor_0_9.ngDoCheck();
    }
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }
}

import36.EmbeddedView<void> viewFactory_MaterialDropdownSelectComponent8<T>(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent8<T>(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent9<T> extends import36.EmbeddedView<import2.MaterialDropdownSelectComponent<T>> {
  import44.ViewMaterialSelectDropdownItemComponent0<T> _compView_0;
  import45.ActiveItemDirectiveNgCd _ActiveItemDirective_0_5;
  import46.MaterialSelectDropdownItemComponent<T> _MaterialSelectDropdownItemComponent_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  import10.Element _el_0;
  _ViewMaterialDropdownSelectComponent9(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import44.ViewMaterialSelectDropdownItemComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    this.addShimC(this._el_0);
    this._ActiveItemDirective_0_5 = import45.ActiveItemDirectiveNgCd((import14.isDevMode
        ? import16.debugInjectorWrap(import47.ActiveItemDirective, () {
            return import47.ActiveItemDirective(this._el_0, this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import22.DomService, this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import42.Modal, this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex), import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView.parentView.parentView.parentView)._PopupRef_2_10);
          })
        : import47.ActiveItemDirective(this._el_0, this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import22.DomService, this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import42.Modal, this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex), import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView.parentView.parentView.parentView)._PopupRef_2_10)));
    this._MaterialSelectDropdownItemComponent_0_6 = (import14.isDevMode
        ? import16.debugInjectorWrap(import46.MaterialSelectDropdownItemComponent, () {
            return import46.MaterialSelectDropdownItemComponent(this._el_0, null, import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_2_8, this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import48.ActivationHandler, this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import49.IdGenerator, this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex), this._compView_0);
          })
        : import46.MaterialSelectDropdownItemComponent(this._el_0, null, import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_2_8, this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import48.ActivationHandler, this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import49.IdGenerator, this.parentView.parentView.parentView.parentView.parentView.parentView.parentIndex), this._compView_0));
    this._compView_0.createAndProject(this._MaterialSelectDropdownItemComponent_0_6, [const []]);
    this._el_0.addEventListener('mouseenter', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('mouseleave', this.eventHandler0(this._ActiveItemDirective_0_5.instance.onMouseLeave));
    this.initRootNode(this._el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import50.SelectionItem) || identical(token, import51.HasRenderer)) && (0 == nodeIndex))) {
      return this._MaterialSelectDropdownItemComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_popup = import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_2_8;
    final local_item = import14.unsafeCast<T>(this.locals['\$implicit']);
    final currVal_0 = (local_popup.showPopup && _ctx.activeModel.isActive(local_item));
    if (import14.checkBinding(this._expr_0, currVal_0, 'popup.showPopup && activeModel.isActive(item)', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._ActiveItemDirective_0_5.instance.itemActive = currVal_0;
      this._expr_0 = currVal_0;
    }
    changed = false;
    if (firstCheck) {
      this._MaterialSelectDropdownItemComponent_0_6.tabbable = false;
      changed = true;
    }
    final currVal_1 = _ctx.isOptionDisabled(local_item);
    if (import14.checkBinding(this._expr_1, currVal_1, 'isOptionDisabled(item)', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.disabled = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_3 = _ctx.isOptionHidden(local_item);
    if (import14.checkBinding(this._expr_3, currVal_3, 'isOptionHidden(item)', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.isHidden = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = local_item;
    if (import14.checkBinding(this._expr_4, currVal_4, 'item', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.value = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.itemRenderer;
    if (import14.checkBinding(this._expr_5, currVal_5, 'itemRenderer', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.itemRenderer = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.componentRenderer;
    if (import14.checkBinding(this._expr_6, currVal_6, 'componentRenderer', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.componentRenderer = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.factoryRenderer;
    if (import14.checkBinding(this._expr_7, currVal_7, 'factoryRenderer', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.factoryRenderer = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.deselectOnActivate;
    if (import14.checkBinding(this._expr_8, currVal_8, 'deselectOnActivate', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.deselectOnActivate = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.selection;
    if (import14.checkBinding(this._expr_9, currVal_9, 'selection', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.selection = currVal_9;
      changed = true;
      this._expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.activeModel.id(local_item);
    if (import14.checkBinding(this._expr_10, currVal_10, 'activeModel.id(item)', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_6.id = currVal_10;
      changed = true;
      this._expr_10 = currVal_10;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._ActiveItemDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    if ((!import14.debugThrowIfChanged)) {
      if (firstCheck) {
        this._ActiveItemDirective_0_5.instance.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._ActiveItemDirective_0_5.instance.ngOnDestroy();
    this._MaterialSelectDropdownItemComponent_0_6.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final local_item = import14.unsafeCast<T>(this.locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.activeModel.activate(local_item);
    this._ActiveItemDirective_0_5.instance.onMouseEnter();
  }
}

import36.EmbeddedView<void> viewFactory_MaterialDropdownSelectComponent9<T>(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent9<T>(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent10<T> extends import36.EmbeddedView<import2.MaterialDropdownSelectComponent<T>> {
  import44.ViewMaterialSelectDropdownItemComponent0<String> _compView_0;
  import46.MaterialSelectDropdownItemComponent<String> _MaterialSelectDropdownItemComponent_0_5;
  var _expr_2;
  _ViewMaterialDropdownSelectComponent10(import41.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import44.ViewMaterialSelectDropdownItemComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._MaterialSelectDropdownItemComponent_0_5 = (import14.isDevMode
        ? import16.debugInjectorWrap(import46.MaterialSelectDropdownItemComponent, () {
            return import46.MaterialSelectDropdownItemComponent(_el_0, null, import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_2_8, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import48.ActivationHandler, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import49.IdGenerator, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._compView_0);
          })
        : import46.MaterialSelectDropdownItemComponent(_el_0, null, import14.unsafeCast<ViewMaterialDropdownSelectComponent0>(this.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_2_8, this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import48.ActivationHandler, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import49.IdGenerator, this.parentView.parentView.parentView.parentView.parentView.parentIndex), this._compView_0));
    this._compView_0.createAndProject(this._MaterialSelectDropdownItemComponent_0_5, [const []]);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import50.SelectionItem) || identical(token, import51.HasRenderer)) && (0 == nodeIndex))) {
      return this._MaterialSelectDropdownItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_group = import14.unsafeCast<import52.OptionGroup<T>>(import14.unsafeCast<_ViewMaterialDropdownSelectComponent4>(this.parentView.parentView).locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      this._MaterialSelectDropdownItemComponent_0_5.disabled = true;
      changed = true;
      this._MaterialSelectDropdownItemComponent_0_5.tabbable = false;
      changed = true;
    }
    final currVal_2 = local_group.emptyLabel;
    if (import14.checkBinding(this._expr_2, currVal_2, 'group.emptyLabel', 'package:angular_components/material_select/material_dropdown_select.html')) {
      this._MaterialSelectDropdownItemComponent_0_5.value = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
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
    this._MaterialSelectDropdownItemComponent_0_5.ngOnDestroy();
  }
}

import36.EmbeddedView<void> viewFactory_MaterialDropdownSelectComponent10<T>(import41.RenderView parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent10<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialDropdownSelectComponentHost = const [];

class _ViewMaterialDropdownSelectComponentHost0<T> extends import58.HostView<import2.MaterialDropdownSelectComponent<T>> {
  import59.ActiveItemModel<dynamic> __ActiveItemModel_0_13;
  import59.ActiveItemModel<dynamic> get _ActiveItemModel_0_13 {
    if ((this.__ActiveItemModel_0_13 == null)) {
      (this.__ActiveItemModel_0_13 = import2.fromDropdown(this.component));
    }
    return this.__ActiveItemModel_0_13;
  }

  @override
  void build() {
    this.componentView = ViewMaterialDropdownSelectComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import14.isDevMode
        ? import16.debugInjectorWrap(import2.MaterialDropdownSelectComponent, () {
            return import2.MaterialDropdownSelectComponent(this.injectorGetOptional(import49.IdGenerator, this.parentIndex), this.injectorGetOptional(import27.PopupSizeProvider, this.parentIndex), this.injectorGetOptional(const import24.OpaqueToken<dynamic>('isRtl'), this.parentIndex), null, null, this.componentView, _el_0);
          })
        : import2.MaterialDropdownSelectComponent(this.injectorGetOptional(import49.IdGenerator, this.parentIndex), this.injectorGetOptional(import27.PopupSizeProvider, this.parentIndex), this.injectorGetOptional(const import24.OpaqueToken<dynamic>('isRtl'), this.parentIndex), null, null, this.componentView, _el_0));
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if ((((((((identical(token, import2.MaterialDropdownSelectComponent) || identical(token, import33.DropdownHandle)) || identical(token, import31.HasDisabled)) || identical(token, import51.HasRenderer)) || identical(token, import32.DeferredContentAware)) || identical(token, import50.SelectionContainer)) || identical(token, import27.PopupSizeProvider)) || identical(token, import48.ActivationHandler))) {
        return this.component;
      }
      if (identical(token, import59.ActiveItemModel)) {
        return this._ActiveItemModel_0_13;
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

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import58.HostView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponentHost0<T>() {
  return _ViewMaterialDropdownSelectComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDropdownSelectComponent, createMaterialDropdownSelectComponentFactory());
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
  _ref19.initReflector();
  _ref20.initReflector();
  _ref21.initReflector();
  _ref22.initReflector();
  _ref23.initReflector();
  _ref24.initReflector();
  _ref25.initReflector();
  _ref26.initReflector();
  _ref27.initReflector();
  _ref28.initReflector();
  _ref29.initReflector();
  _ref30.initReflector();
  _ref31.initReflector();
}
