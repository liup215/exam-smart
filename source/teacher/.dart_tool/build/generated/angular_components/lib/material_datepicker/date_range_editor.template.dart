// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'date_range_editor.dart';
export 'date_range_editor.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/focus/focus_item.template.dart' as _ref3;
import 'package:angular_components/focus/focus_list.template.dart' as _ref4;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref5;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref6;
import 'package:angular_components/material_button/material_button.template.dart' as _ref7;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref8;
import 'package:angular_components/material_datepicker/date_range_editor_host.template.dart' as _ref9;
import 'package:angular_components/material_datepicker/date_range_input.template.dart' as _ref10;
import 'package:angular_components/material_datepicker/material_calendar_picker.template.dart' as _ref11;
import 'package:angular_components/material_datepicker/material_month_picker.template.dart' as _ref12;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref13;
import 'package:angular_components/material_datepicker/next_prev_buttons.template.dart' as _ref14;
import 'package:angular_components/material_datepicker/preset.template.dart' as _ref15;
import 'package:angular_components/material_datepicker/range.template.dart' as _ref16;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref17;
import 'package:angular_components/material_input/material_input.template.dart' as _ref18;
import 'package:angular_components/material_menu/common/menu_root.template.dart' as _ref19;
import 'package:angular_components/material_menu/menu_item_groups.template.dart' as _ref20;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref21;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref22;
import 'package:angular_components/material_select/material_select.template.dart' as _ref23;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref24;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref25;
import 'package:angular_components/model/date/date.template.dart' as _ref26;
import 'package:angular_components/model/date/date_formatter.template.dart' as _ref27;
import 'package:angular_components/model/menu/menu.template.dart' as _ref28;
import 'package:angular_components/model/menu/selectable_menu.template.dart' as _ref29;
import 'package:angular_components/model/observable/observable.template.dart' as _ref30;
import 'package:angular_components/model/selection/select.template.dart' as _ref31;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref32;
import 'package:angular_components/src/material_datepicker/comparison_range_editor.template.dart' as _ref33;
import 'package:angular_components/src/material_datepicker/date_range_editor_model.template.dart' as _ref34;
import 'package:angular_components/src/material_datepicker/date_range_editor_model.template.dart' as _ref35;
import 'package:angular_components/utils/angular/scroll_host/angular_2.template.dart' as _ref36;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref37;
import 'package:angular_components/utils/showhide/showhide.template.dart' as _ref38;
import 'package:angular_components/material_datepicker/date_range_editor.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'date_range_editor.dart' as import2;
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
import '../material_select/material_select.template.dart' as import15;
import '../focus/focus_list.template.dart' as import16;
import '../material_select/material_select.dart' as import17;
import 'package:quiver/src/time/clock.dart' as import18;
import '../src/utils/angular/scroll_host/gestures.dart' as import19;
import '../utils/angular/scroll_host/angular_2.dart' as import20;
import 'package:angular/src/core/linker/views/render_view.dart' as import21;
import 'package:angular/src/di/errors.dart' as import22;
import '../focus/focus_list.dart' as import23;
import 'package:angular/src/core/zone/ng_zone.dart' as import24;
import '../utils/browser/dom_service/dom_service.dart' as import25;
import '../interfaces/has_disabled.dart' as import26;
import '../model/ui/has_renderer.dart' as import27;
import '../model/selection/selection_container.dart' as import28;
import '../src/utils/angular/scroll_host/scroll_host_interface.dart' as import29;
import '../material_select/material_select_item.template.dart' as import30;
import '../focus/focus_item.template.dart' as import31;
import '../material_select/material_select_item.dart' as import32;
import '../focus/focus_item.dart' as import33;
import '../mixins/material_dropdown_base.dart' as import34;
import '../material_select/activation_handler.dart' as import35;
import 'package:angular/src/runtime/interpolate.dart' as import36;
import '../focus/focus.dart' as import37;
import 'package:angular/src/runtime/text_binding.dart' as import38;
import '../material_icon/material_icon.template.dart' as import39;
import '../button_decorator/button_decorator.template.dart' as import40;
import '../material_icon/material_icon.dart' as import41;
import '../button_decorator/button_decorator.dart' as import42;
import 'package:angular/src/common/directives/ng_for.dart' as import43;
import '../src/material_tooltip/tooltip.dart' as import44;
import '../src/material_tooltip/tooltip_controller.dart' as import45;
import '../material_tooltip/module.dart' as import46;
import '../utils/disposer/disposer.dart' as import47;
import '../src/laminate/popup/dom_popup_source.dart' as import48;
import 'preset.dart' as import49;
import '../material_button/material_button.template.dart' as import50;
import '../material_button/material_button.dart' as import51;
import '../src/laminate/popup/popup_source_directive.dart' as import52;
import '../material_popup/material_popup.template.dart' as import53;
import '../material_popup/material_popup.dart' as import54;
import '../theme/dark_theme.dart' as import55;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import56;
import '../utils/angular/reference/reference.dart' as import57;
import '../focus/focus_interface.dart' as import58;
import '../src/laminate/popup/popup_hierarchy.dart' as import59;
import '../src/laminate/overlay/overlay_service.dart' as import60;
import '../laminate/overlay/zindexer.dart' as import61;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import63;
import '../src/laminate/popup/popup_size_provider.dart' as import64;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import66;
import '../src/laminate/popup/popup_ref.dart' as import67;
import '../material_menu/menu_item_groups.template.dart' as import68;
import '../material_menu/common/menu_root.dart' as import69;
import '../material_menu/menu_item_groups.dart' as import70;
import '../utils/id_generator/id_generator.dart' as import71;
import '../material_input/material_input.template.dart' as import72;
import '../material_input/deferred_validator.dart' as import73;
import 'package:angular_forms/src/directives/ng_model.dart' as import74;
import '../material_input/material_input.dart' as import75;
import '../material_input/material_input_default_value_accessor.dart' as import76;
import 'package:angular_forms/src/directives/ng_control.dart' as import77;
import '../material_input/base_material_input.dart' as import78;
import '../src/material_datepicker/comparison_range_editor.template.dart' as import79;
import '../src/material_datepicker/comparison_range_editor.dart' as import80;
import 'date_range_input.template.dart' as import81;
import 'date_range_input.dart' as import82;
import '../focus/keyboard_only_focus_indicator.dart' as import83;
import 'next_prev_buttons.template.dart' as import84;
import 'next_prev_buttons.dart' as import85;
import 'material_calendar_picker.template.dart' as import86;
import 'material_calendar_picker.dart' as import87;
import '../utils/showhide/showhide.dart' as import88;
import 'material_month_picker.template.dart' as import89;
import 'material_month_picker.dart' as import90;
import 'package:angular/src/core/linker/views/host_view.dart' as import91;
import 'date_range_editor_host.dart' as import92;

final List<dynamic> styles$DateRangeEditorComponent = [import0.styles];

class ViewDateRangeEditorComponent0 extends import1.ComponentView<import2.DateRangeEditorComponent> {
  bool _viewQuery_MaterialCalendarPickerComponent_0_isDirty = true;
  bool _viewQuery_MaterialMonthPickerComponent_1_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewDateRangeEditorComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('date-range-editor');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_datepicker/date_range_editor.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_DateRangeEditorComponent1);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import10.appendAnchor(parentRenderNode);
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_DateRangeEditorComponent13);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = _ctx.shouldShowPredefinedList;
    this._NgIf_1_9.ngIf = (_ctx.supportsCustomRange && _ctx.shouldShowCustomDateRangeColumn);
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_1.detectChangesInNestedViews();
    if ((!import9.debugThrowIfChanged)) {
      if (this._viewQuery_MaterialCalendarPickerComponent_0_isDirty) {
        _ctx.calendarPicker = import12.firstOrNull(this._appEl_1.mapNestedViews((_ViewDateRangeEditorComponent13 nestedView) {
          return nestedView._appEl_10.mapNestedViewsWithSingleResult((_ViewDateRangeEditorComponent20 nestedView) {
            import6.View.queryChangeDetectorRefs[nestedView._MaterialCalendarPickerComponent_0_5] = nestedView._compView_0;
            return nestedView._MaterialCalendarPickerComponent_0_5;
          });
        }));
        this._viewQuery_MaterialCalendarPickerComponent_0_isDirty = false;
      }
      if (this._viewQuery_MaterialMonthPickerComponent_1_isDirty) {
        _ctx.monthSelector = import12.firstOrNull(this._appEl_1.mapNestedViews((_ViewDateRangeEditorComponent13 nestedView) {
          return nestedView._appEl_11.mapNestedViewsWithSingleResult((_ViewDateRangeEditorComponent21 nestedView) {
            import6.View.queryChangeDetectorRefs[nestedView._MaterialMonthPickerComponent_0_5] = nestedView._compView_0;
            return nestedView._MaterialMonthPickerComponent_0_5;
          });
        }));
        this._viewQuery_MaterialMonthPickerComponent_1_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_1.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.compact;
    if (import9.checkBinding(this._expr_0, currVal_0, null, null)) {
      import10.updateClassBindingNonHtml(this.rootElement, 'compact', currVal_0);
      this._expr_0 = currVal_0;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$DateRangeEditorComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _DateRangeEditorComponentNgFactory = ComponentFactory<import2.DateRangeEditorComponent>('date-range-editor', viewFactory_DateRangeEditorComponentHost0);
ComponentFactory<import2.DateRangeEditorComponent> get DateRangeEditorComponentNgFactory {
  return _DateRangeEditorComponentNgFactory;
}

ComponentFactory<import2.DateRangeEditorComponent> createDateRangeEditorComponentFactory() {
  return ComponentFactory('date-range-editor', viewFactory_DateRangeEditorComponentHost0);
}

class _ViewDateRangeEditorComponent1 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  bool _query_SelectionItem_0_1_isDirty = true;
  bool _query_FocusableItem_0_0_isDirty = true;
  import15.ViewMaterialSelectComponent0 _compView_0;
  import16.FocusListDirectiveNgCd _FocusListDirective_0_5;
  import17.MaterialSelectComponent _MaterialSelectComponent_0_6;
  import18.Clock _Clock_0_7;
  import19.GestureListenerFactory _GestureListenerFactory_0_8;
  import20.ElementScrollHost _ElementScrollHost_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  var _expr_0;
  import8.Element _el_0;
  _ViewDateRangeEditorComponent1(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import15.ViewMaterialSelectComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import10.setAttribute(this._el_0, 'acxScrollHost', '');
    this.updateChildClassNonHtml(this._el_0, 'preset-list');
    import10.setAttribute(this._el_0, 'focusList', '');
    import10.setAttribute(this._el_0, 'role', 'listbox');
    this.addShimC(this._el_0);
    this._FocusListDirective_0_5 = import16.FocusListDirectiveNgCd((import9.isDevMode
        ? import22.debugInjectorWrap(import23.FocusListDirective, () {
            return import23.FocusListDirective(this.parentView.injectorGet(import24.NgZone, this.parentIndex), 'listbox', null);
          })
        : import23.FocusListDirective(this.parentView.injectorGet(import24.NgZone, this.parentIndex), 'listbox', null)));
    this._MaterialSelectComponent_0_6 = import17.MaterialSelectComponent();
    this._Clock_0_7 = const import18.Clock();
    this._GestureListenerFactory_0_8 = import19.GestureListenerFactory(this._Clock_0_7);
    this._ElementScrollHost_0_9 = (import9.isDevMode
        ? import22.debugInjectorWrap(import20.ElementScrollHost, () {
            return import20.ElementScrollHost(this.parentView.injectorGet(import25.DomService, this.parentIndex), this.parentView.injectorGet(import24.NgZone, this.parentIndex), this._GestureListenerFactory_0_8, this._el_0);
          })
        : import20.ElementScrollHost(this.parentView.injectorGet(import25.DomService, this.parentIndex), this.parentView.injectorGet(import24.NgZone, this.parentIndex), this._GestureListenerFactory_0_8, this._el_0));
    final _anchor_1 = import10.createAnchor();
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_DateRangeEditorComponent2);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.createAnchor();
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_DateRangeEditorComponent3);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final doc = import8.document;
    final _el_3 = doc.createElement('div');
    this.updateChildClass(_el_3, 'group');
    import10.setAttribute(_el_3, 'role', 'listbox');
    this.addShimC(_el_3);
    final _anchor_4 = import10.appendAnchor(_el_3);
    this._appEl_4 = ViewContainer(4, 3, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_DateRangeEditorComponent6);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import10.appendAnchor(_el_3);
    this._appEl_5 = ViewContainer(5, 3, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_DateRangeEditorComponent10);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import10.createAnchor();
    this._appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_DateRangeEditorComponent11);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _anchor_7 = import10.createAnchor();
    this._appEl_7 = ViewContainer(7, 0, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_DateRangeEditorComponent12);
    this._NgIf_7_9 = NgIf(this._appEl_7, _TemplateRef_7_8);
    this._compView_0.createAndProject(this._MaterialSelectComponent_0_6, [
      [this._appEl_1, this._appEl_2, _el_3, this._appEl_6, this._appEl_7]
    ]);
    this.initRootNode(this._el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 7)) {
      if (((identical(token, import26.HasDisabled) || identical(token, import27.HasRenderer)) || identical(token, import28.SelectionContainer))) {
        return this._MaterialSelectComponent_0_6;
      }
      if (identical(token, import18.Clock)) {
        return this._Clock_0_7;
      }
      if (identical(token, import19.GestureListenerFactory)) {
        return this._GestureListenerFactory_0_8;
      }
      if ((identical(token, import20.ElementScrollHost) || identical(token, import29.ScrollHost))) {
        return this._ElementScrollHost_0_9;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      (this._MaterialSelectComponent_0_6.width = 0);
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._MaterialSelectComponent_0_6.ngOnInit();
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._ElementScrollHost_0_9.ngOnInit();
    }
    this._NgIf_1_9.ngIf = _ctx.supportsClearRange;
    this._NgIf_2_9.ngIf = _ctx.supportsCustomRange;
    this._NgIf_4_9.ngIf = (!_ctx.useMenuForPresets);
    this._NgIf_5_9.ngIf = _ctx.useMenuForPresets;
    this._NgIf_6_9.ngIf = _ctx.supportsDaysInputs;
    this._NgIf_7_9.ngIf = _ctx.supportsComparison;
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    if ((!import9.debugThrowIfChanged)) {
      if (this._query_FocusableItem_0_0_isDirty) {
        this._FocusListDirective_0_5.instance.listItems = import12.flattenNodes([
          this._appEl_1.mapNestedViewsWithSingleResult((_ViewDateRangeEditorComponent2 nestedView) {
            return nestedView._FocusItemDirective_1_5.instance;
          }),
          this._appEl_2.mapNestedViewsWithSingleResult((_ViewDateRangeEditorComponent3 nestedView) {
            return nestedView._FocusItemDirective_1_5.instance;
          }),
          this._appEl_4.mapNestedViews((_ViewDateRangeEditorComponent6 nestedView) {
            return nestedView._appEl_0.mapNestedViewsWithSingleResult((_ViewDateRangeEditorComponent7 nestedView) {
              return nestedView._FocusItemDirective_0_8.instance;
            });
          })
        ]);
        this._query_FocusableItem_0_0_isDirty = false;
      }
      if (this._query_SelectionItem_0_1_isDirty) {
        this._MaterialSelectComponent_0_6.selectItems = import12.flattenNodes([
          this._appEl_1.mapNestedViewsWithSingleResult((_ViewDateRangeEditorComponent2 nestedView) {
            import6.View.queryChangeDetectorRefs[nestedView._MaterialSelectItemComponent_1_6] = nestedView._compView_1;
            return nestedView._MaterialSelectItemComponent_1_6;
          }),
          this._appEl_2.mapNestedViewsWithSingleResult((_ViewDateRangeEditorComponent3 nestedView) {
            import6.View.queryChangeDetectorRefs[nestedView._MaterialSelectItemComponent_1_6] = nestedView._compView_1;
            return nestedView._MaterialSelectItemComponent_1_6;
          }),
          this._appEl_4.mapNestedViews((_ViewDateRangeEditorComponent6 nestedView) {
            return nestedView._appEl_0.mapNestedViews((_ViewDateRangeEditorComponent7 nestedView) {
              import6.View.queryChangeDetectorRefs[nestedView._MaterialSelectItemComponent_0_9] = nestedView._compView_0;
              return import12.flattenNodes([
                [nestedView._MaterialSelectItemComponent_0_9],
                nestedView._appEl_2.mapNestedViews((_ViewDateRangeEditorComponent8 nestedView) {
                  return nestedView._appEl_3.mapNestedViewsWithSingleResult((_ViewDateRangeEditorComponent9 nestedView) {
                    import6.View.queryChangeDetectorRefs[nestedView._MaterialSelectItemComponent_0_8] = nestedView._compView_0;
                    return nestedView._MaterialSelectItemComponent_0_8;
                  });
                })
              ]);
            });
          }),
          this._appEl_6.mapNestedViews((_ViewDateRangeEditorComponent11 nestedView) {
            import6.View.queryChangeDetectorRefs[nestedView._MaterialSelectItemComponent_1_5] = nestedView._compView_1;
            import6.View.queryChangeDetectorRefs[nestedView._MaterialSelectItemComponent_5_5] = nestedView._compView_5;
            return [nestedView._MaterialSelectItemComponent_1_5, nestedView._MaterialSelectItemComponent_5_5];
          })
        ]);
        this._query_SelectionItem_0_1_isDirty = false;
      }
    }
    final currVal_0 = _ctx.isBasic;
    if (import9.checkBinding(this._expr_0, currVal_0, 'isBasic', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      import10.updateClassBindingNonHtml(this._el_0, 'basic-preset-list', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._FocusListDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._FocusListDirective_0_5.instance.ngOnDestroy();
    this._ElementScrollHost_0_9.ngOnDestroy();
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent1(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent1(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent2 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  import30.ViewMaterialSelectItemComponent0 _compView_1;
  import31.FocusItemDirectiveNgCd _FocusItemDirective_1_5;
  import32.MaterialSelectItemComponent _MaterialSelectItemComponent_1_6;
  import8.Element _el_1;
  _ViewDateRangeEditorComponent2(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'group');
    this.addShimC(_el_0);
    this._compView_1 = import30.ViewMaterialSelectItemComponent0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    _el_0.append(this._el_1);
    import10.setAttribute(this._el_1, 'focusItem', '');
    this.addShimC(this._el_1);
    this._FocusItemDirective_1_5 = import31.FocusItemDirectiveNgCd(import33.FocusItemDirective(this._el_1, this._compView_1, null));
    this._MaterialSelectItemComponent_1_6 = (import9.isDevMode
        ? import22.debugInjectorWrap(import32.MaterialSelectItemComponent, () {
            return import32.MaterialSelectItemComponent(this._el_1, this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentIndex), this._compView_1, null);
          })
        : import32.MaterialSelectItemComponent(this._el_1, this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentIndex), this._compView_1, null));
    final _text_2 = import10.createText(import36.interpolateString0(import2.DateRangeEditorComponent.clearRangeMsg));
    this._compView_1.createAndProject(this._MaterialSelectItemComponent_1_6, [
      [_text_2]
    ]);
    this._el_1.addEventListener('keydown', this.eventHandler1(this._FocusItemDirective_1_5.instance.keydown));
    final subscription_0 = this._MaterialSelectItemComponent_1_6.trigger.listen(this.eventHandler1(_ctx.onClearRangeClicked));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((1 <= nodeIndex) && (nodeIndex <= 2))) {
      if (identical(token, import37.FocusableItem)) {
        return this._FocusItemDirective_1_5.instance;
      }
      if (((identical(token, import28.SelectionItem) || identical(token, import26.HasDisabled)) || identical(token, import27.HasRenderer))) {
        return this._MaterialSelectItemComponent_1_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    this._FocusItemDirective_1_5.detectHostChanges(this._compView_1, this._el_1);
    this._compView_1.detectHostChanges(firstCheck);
    this._compView_1.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(this.parentView)._query_SelectionItem_0_1_isDirty = true;
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(this.parentView)._query_FocusableItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
    this._MaterialSelectItemComponent_1_6.ngOnDestroy();
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent2(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent2(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent3 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  import30.ViewMaterialSelectItemComponent0 _compView_1;
  import31.FocusItemDirectiveNgCd _FocusItemDirective_1_5;
  import32.MaterialSelectItemComponent _MaterialSelectItemComponent_1_6;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  var _expr_0;
  var _expr_2;
  var _expr_3;
  import8.Element _el_1;
  import8.DivElement _el_2;
  _ViewDateRangeEditorComponent3(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'group');
    this.addShimC(_el_0);
    this._compView_1 = import30.ViewMaterialSelectItemComponent0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    _el_0.append(this._el_1);
    import10.setAttribute(this._el_1, 'focusItem', '');
    this.addShimC(this._el_1);
    this._FocusItemDirective_1_5 = import31.FocusItemDirectiveNgCd(import33.FocusItemDirective(this._el_1, this._compView_1, null));
    this._MaterialSelectItemComponent_1_6 = (import9.isDevMode
        ? import22.debugInjectorWrap(import32.MaterialSelectItemComponent, () {
            return import32.MaterialSelectItemComponent(this._el_1, this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentIndex), this._compView_1, null);
          })
        : import32.MaterialSelectItemComponent(this._el_1, this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentIndex), this._compView_1, null));
    this._el_2 = doc.createElement('div');
    this.addShimC(this._el_2);
    final _text_3 = import10.appendText(this._el_2, import36.interpolateString0(import2.DateRangeEditorComponent.customRangeMsg));
    final _anchor_4 = import10.appendAnchor(this._el_2);
    this._appEl_4 = ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_DateRangeEditorComponent4);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import10.createAnchor();
    this._appEl_5 = ViewContainer(5, 1, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_DateRangeEditorComponent5);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    this._compView_1.createAndProject(this._MaterialSelectItemComponent_1_6, [
      [this._el_2, this._appEl_5]
    ]);
    this._el_1.addEventListener('keydown', this.eventHandler1(this._FocusItemDirective_1_5.instance.keydown));
    final subscription_0 = this._MaterialSelectItemComponent_1_6.trigger.listen(this.eventHandler0(_ctx.onCustomClicked));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((1 <= nodeIndex) && (nodeIndex <= 5))) {
      if (identical(token, import37.FocusableItem)) {
        return this._FocusItemDirective_1_5.instance;
      }
      if (((identical(token, import28.SelectionItem) || identical(token, import26.HasDisabled)) || identical(token, import27.HasRenderer))) {
        return this._MaterialSelectItemComponent_1_6;
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
      this._MaterialSelectItemComponent_1_6.closeOnActivate = false;
      changed = true;
    }
    final currVal_0 = _ctx.isCustomRangeSelected;
    if (import9.checkBinding(this._expr_0, currVal_0, 'isCustomRangeSelected', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialSelectItemComponent_1_6.selected = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    this._NgIf_4_9.ngIf = (_ctx.isBasic && _ctx.isCustomRangeSelected);
    this._NgIf_5_9.ngIf = _ctx.isBasic;
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._FocusItemDirective_1_5.detectHostChanges(this._compView_1, this._el_1);
    this._compView_1.detectHostChanges(firstCheck);
    final currVal_2 = (_ctx.isBasic && (!_ctx.isCustomRangeSelected));
    if (import9.checkBinding(this._expr_2, currVal_2, 'isBasic && !isCustomRangeSelected', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      import10.updateClassBinding(this._el_2, 'custom-tab-left', currVal_2);
      this._expr_2 = currVal_2;
    }
    final currVal_3 = (_ctx.isBasic && _ctx.isCustomRangeSelected);
    if (import9.checkBinding(this._expr_3, currVal_3, 'isBasic && isCustomRangeSelected', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      import10.updateClassBinding(this._el_2, 'custom_tab-left-selected', currVal_3);
      this._expr_3 = currVal_3;
    }
    this._compView_1.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(this.parentView)._query_SelectionItem_0_1_isDirty = true;
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(this.parentView)._query_FocusableItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._appEl_4.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._compView_1.destroyInternalState();
    this._MaterialSelectItemComponent_1_6.ngOnDestroy();
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent3(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent3(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent4 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  final import38.TextBinding _textBinding_1 = import38.TextBinding();
  _ViewDateRangeEditorComponent4(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'custom_range_desc');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import36.interpolateString0(_ctx.customRangeDescription));
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent4(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent4(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent5 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  import39.ViewMaterialIconComponent0 _compView_0;
  import40.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import41.MaterialIconComponent _MaterialIconComponent_0_6;
  import8.Element _el_0;
  _ViewDateRangeEditorComponent5(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import39.ViewMaterialIconComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import10.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClassNonHtml(this._el_0, 'expend-more');
    import10.setAttribute(this._el_0, 'icon', 'expand_more');
    this.addShimC(this._el_0);
    this._ButtonDirective_0_5 = import40.ButtonDirectiveNgCd(import42.ButtonDirective(this._el_0, null));
    this._MaterialIconComponent_0_6 = import41.MaterialIconComponent(this._el_0);
    this._compView_0.create(this._MaterialIconComponent_0_6);
    this._el_0.addEventListener('click', this.eventHandler1(this._ButtonDirective_0_5.instance.handleClick));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    this.initRootNode(this._el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import42.ButtonDirective) && (0 == nodeIndex))) {
      return this._ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_0_6.icon = 'expand_more';
      changed = true;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    this._ButtonDirective_0_5.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent5(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent5(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent6 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  ViewContainer _appEl_0;
  import43.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewDateRangeEditorComponent6(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import10.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_DateRangeEditorComponent7);
    this._NgFor_0_9 = import43.NgFor(this._appEl_0, _TemplateRef_0_8);
    this.initRootNode(this._appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.presets;
    if (import9.checkBinding(this._expr_0, currVal_0, 'presets', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._NgFor_0_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import9.debugThrowIfChanged)) {
      this._NgFor_0_9.ngDoCheck();
    }
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent6(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent6(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent7 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  final import38.TextBinding _textBinding_1 = import38.TextBinding();
  import30.ViewMaterialSelectItemComponent0 _compView_0;
  ViewContainer _appEl_0;
  import31.FocusItemDirectiveNgCd _FocusItemDirective_0_8;
  import32.MaterialSelectItemComponent _MaterialSelectItemComponent_0_9;
  import44.MaterialTooltipDirective _MaterialTooltipDirective_0_10;
  dynamic __TooltipController_0_13;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_0;
  var _expr_1;
  var _expr_4;
  import8.Element _el_0;
  _ViewDateRangeEditorComponent7(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  dynamic get _TooltipController_0_13 {
    if ((this.__TooltipController_0_13 == null)) {
      (this.__TooltipController_0_13 = (import9.isDevMode
          ? import22.debugInjectorWrap(import45.TooltipController, () {
              return import46.createTooltipController(this.parentView.parentView.parentView.injectorGetOptional(import45.TooltipController, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGetOptional(import47.Disposer, this.parentView.parentView.parentIndex));
            })
          : import46.createTooltipController(this.parentView.parentView.parentView.injectorGetOptional(import45.TooltipController, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGetOptional(import47.Disposer, this.parentView.parentView.parentIndex))));
    }
    return this.__TooltipController_0_13;
  }

  @override
  void build() {
    this._compView_0 = import30.ViewMaterialSelectItemComponent0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import10.setAttribute(this._el_0, 'focusItem', '');
    this.addShimC(this._el_0);
    this._appEl_0 = ViewContainer(0, null, this, this._el_0);
    this._FocusItemDirective_0_8 = import31.FocusItemDirectiveNgCd(import33.FocusItemDirective(this._el_0, this._compView_0, null));
    this._MaterialSelectItemComponent_0_9 = (import9.isDevMode
        ? import22.debugInjectorWrap(import32.MaterialSelectItemComponent, () {
            return import32.MaterialSelectItemComponent(this._el_0, this.parentView.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentView.parentIndex), this._compView_0, null);
          })
        : import32.MaterialSelectItemComponent(this._el_0, this.parentView.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentView.parentIndex), this._compView_0, null));
    this._MaterialTooltipDirective_0_10 = (import9.isDevMode
        ? import22.debugInjectorWrap(import44.MaterialTooltipDirective, () {
            return import44.MaterialTooltipDirective(this.parentView.parentView.parentView.injectorGet(import48.DomPopupSourceFactory, this.parentView.parentView.parentIndex), this._appEl_0, this._el_0, this._appEl_0, this._compView_0, this.parentView.parentView.parentView.injectorGet(import8.Window, this.parentView.parentView.parentIndex), null, null);
          })
        : import44.MaterialTooltipDirective(this.parentView.parentView.parentView.injectorGet(import48.DomPopupSourceFactory, this.parentView.parentView.parentIndex), this._appEl_0, this._el_0, this._appEl_0, this._compView_0, this.parentView.parentView.parentView.injectorGet(import8.Window, this.parentView.parentView.parentIndex), null, null));
    final _anchor_2 = import10.createAnchor();
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_DateRangeEditorComponent8);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    this._compView_0.createAndProject(this._MaterialSelectItemComponent_0_9, [
      [this._textBinding_1.element, this._appEl_2]
    ]);
    this._el_0.addEventListener('keydown', this.eventHandler1(this._FocusItemDirective_0_8.instance.keydown));
    final subscription_0 = this._MaterialSelectItemComponent_0_9.trigger.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([this._appEl_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 2)) {
      if (identical(token, import37.FocusableItem)) {
        return this._FocusItemDirective_0_8.instance;
      }
      if (((identical(token, import28.SelectionItem) || identical(token, import26.HasDisabled)) || identical(token, import27.HasRenderer))) {
        return this._MaterialSelectItemComponent_0_9;
      }
      if (identical(token, import45.TooltipController)) {
        return this._TooltipController_0_13;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_preset = import9.unsafeCast<import49.DatepickerPreset>(this.locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      this._MaterialSelectItemComponent_0_9.closeOnActivate = false;
      changed = true;
    }
    final bool currVal_0 = (!_ctx.isValid(local_preset));
    if (import9.checkBinding(this._expr_0, currVal_0, '!isValid(preset)', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialSelectItemComponent_0_9.disabled = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelected(local_preset.range);
    if (import9.checkBinding(this._expr_1, currVal_1, 'isSelected(preset.range)', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialSelectItemComponent_0_9.selected = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(import2.DateRangeEditorComponent.rangeDisabledTooltip, null)) {
        (this._MaterialTooltipDirective_0_10.text = import2.DateRangeEditorComponent.rangeDisabledTooltip);
      }
    }
    final bool currVal_4 = (!_ctx.isValid(local_preset));
    if (import9.checkBinding(this._expr_4, currVal_4, '!isValid(preset)', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialTooltipDirective_0_10.canShow = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._MaterialTooltipDirective_0_10.ngOnInit();
    }
    this._NgIf_2_9.ngIf = ((local_preset.alternatives != null) && local_preset.alternatives.isNotEmpty);
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._FocusItemDirective_0_8.detectHostChanges(this._compView_0, this._el_0);
    this._compView_0.detectHostChanges(firstCheck);
    this._textBinding_1.updateText(import36.interpolateString0(local_preset.title));
    this._compView_0.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialTooltipDirective_0_10.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(this.parentView.parentView)._query_SelectionItem_0_1_isDirty = true;
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(this.parentView.parentView)._query_FocusableItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._MaterialSelectItemComponent_0_9.ngOnDestroy();
    this._MaterialTooltipDirective_0_10.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final local_preset = import9.unsafeCast<import49.DatepickerPreset>(this.locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.onRangeClicked($event, local_preset.range);
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent7(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent7(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent8 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  import50.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import51.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import52.PopupSourceDirective _PopupSourceDirective_0_7;
  import39.ViewMaterialIconComponent0 _compView_1;
  import41.MaterialIconComponent _MaterialIconComponent_1_5;
  import53.ViewMaterialPopupComponent0 _compView_2;
  ViewContainer _appEl_2;
  import54.MaterialPopupComponent _MaterialPopupComponent_2_8;
  dynamic __PopupHierarchy_2_11;
  dynamic __PopupRef_2_12;
  ViewContainer _appEl_3;
  import43.NgFor _NgFor_3_9;
  var _expr_5;
  var _expr_6;
  _ViewDateRangeEditorComponent8(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  dynamic get _PopupHierarchy_2_11 {
    if ((this.__PopupHierarchy_2_11 == null)) {
      (this.__PopupHierarchy_2_11 = import54.getHierarchy(this._MaterialPopupComponent_2_8));
    }
    return this.__PopupHierarchy_2_11;
  }

  dynamic get _PopupRef_2_12 {
    if ((this.__PopupRef_2_12 == null)) {
      (this.__PopupRef_2_12 = import54.getResolvedPopupRef(this._MaterialPopupComponent_2_8));
    }
    return this.__PopupRef_2_12;
  }

  @override
  void build() {
    this._compView_0 = import50.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import10.setAttribute(_el_0, 'alignPositionX', 'after');
    import10.setAttribute(_el_0, 'alignPositionY', 'start');
    this.updateChildClassNonHtml(_el_0, 'preset-dropdown-button');
    import10.setAttribute(_el_0, 'icon', '');
    import10.setAttribute(_el_0, 'popupSource', '');
    this.addShimC(_el_0);
    this._AcxDarkTheme_0_5 = (import9.isDevMode
        ? import22.debugInjectorWrap(import55.AcxDarkTheme, () {
            return import55.AcxDarkTheme(this.parentView.parentView.parentView.parentView.injectorGetOptional(const import56.OpaqueToken<dynamic>('acxDarkTheme'), this.parentView.parentView.parentView.parentIndex));
          })
        : import55.AcxDarkTheme(this.parentView.parentView.parentView.parentView.injectorGetOptional(const import56.OpaqueToken<dynamic>('acxDarkTheme'), this.parentView.parentView.parentView.parentIndex)));
    this._MaterialButtonComponent_0_6 = import51.MaterialButtonComponent(_el_0, this._AcxDarkTheme_0_5, this._compView_0, null);
    this._PopupSourceDirective_0_7 = (import9.isDevMode
        ? import22.debugInjectorWrap(import52.PopupSourceDirective, () {
            return import52.PopupSourceDirective(this.parentView.parentView.parentView.parentView.injectorGet(import48.DomPopupSourceFactory, this.parentView.parentView.parentView.parentIndex), _el_0, this.parentView.parentView.parentView.parentView.injectorGetOptional(import57.ReferenceDirective, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import58.Focusable, this.parentView.parentView.parentView.parentIndex), null);
          })
        : import52.PopupSourceDirective(this.parentView.parentView.parentView.parentView.injectorGet(import48.DomPopupSourceFactory, this.parentView.parentView.parentView.parentIndex), _el_0, this.parentView.parentView.parentView.parentView.injectorGetOptional(import57.ReferenceDirective, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import58.Focusable, this.parentView.parentView.parentView.parentIndex), null));
    this._compView_1 = import39.ViewMaterialIconComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    import10.setAttribute(_el_1, 'icon', 'arrow_drop_down');
    this.addShimC(_el_1);
    this._MaterialIconComponent_1_5 = import41.MaterialIconComponent(_el_1);
    this._compView_1.create(this._MaterialIconComponent_1_5);
    this._compView_0.createAndProject(this._MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    this._compView_2 = import53.ViewMaterialPopupComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    this.addShimC(_el_2);
    this._appEl_2 = ViewContainer(2, null, this, _el_2);
    this._MaterialPopupComponent_2_8 = (import9.isDevMode
        ? import22.debugInjectorWrap(import54.MaterialPopupComponent, () {
            return import54.MaterialPopupComponent(this.parentView.parentView.parentView.parentView.injectorGetOptional(import59.PopupHierarchy, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import54.MaterialPopupComponent, this.parentView.parentView.parentView.parentIndex), null, this.parentView.parentView.parentView.parentView.injectorGet(import24.NgZone, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(import60.OverlayService, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(import25.DomService, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(import61.ZIndexer, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(const import56.OpaqueToken<List<import63.RelativePosition>>('defaultPopupPositions'), this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(const import56.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(const import56.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import64.PopupSizeProvider, this.parentView.parentView.parentView.parentIndex), this._compView_2, this._appEl_2, ElementRef(_el_2));
          })
        : import54.MaterialPopupComponent(this.parentView.parentView.parentView.parentView.injectorGetOptional(import59.PopupHierarchy, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import54.MaterialPopupComponent, this.parentView.parentView.parentView.parentIndex), null, this.parentView.parentView.parentView.parentView.injectorGet(import24.NgZone, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(import60.OverlayService, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(import25.DomService, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(import61.ZIndexer, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(const import56.OpaqueToken<List<import63.RelativePosition>>('defaultPopupPositions'), this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(const import56.OpaqueToken<dynamic>('overlayRepositionLoop'), this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(const import56.OpaqueToken<dynamic>('overlayViewportBoundaries'), this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGetOptional(import64.PopupSizeProvider, this.parentView.parentView.parentView.parentIndex), this._compView_2, this._appEl_2, ElementRef(_el_2)));
    final _anchor_3 = import10.createAnchor();
    this._appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_DateRangeEditorComponent9);
    this._NgFor_3_9 = import43.NgFor(this._appEl_3, _TemplateRef_3_8);
    this._compView_2.createAndProject(this._MaterialPopupComponent_2_8, [
      const [],
      [this._appEl_3],
      const []
    ]);
    _el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    _el_0.addEventListener('keypress', this.eventHandler1(this._handleEvent_1));
    final subscription_0 = this._MaterialButtonComponent_0_6.trigger.listen(this.eventHandler1(this._handleEvent_2));
    this.initRootNodesAndSubscriptions([_el_0, this._appEl_2], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import55.AcxDarkTheme)) {
        return this._AcxDarkTheme_0_5;
      }
      if (((identical(token, import51.MaterialButtonComponent) || identical(token, import42.ButtonDirective)) || identical(token, import26.HasDisabled))) {
        return this._MaterialButtonComponent_0_6;
      }
    }
    if (((2 <= nodeIndex) && (nodeIndex <= 3))) {
      if (((identical(token, import54.MaterialPopupComponent) || identical(token, import34.DropdownHandle)) || identical(token, import66.DeferredContentAware))) {
        return this._MaterialPopupComponent_2_8;
      }
      if (identical(token, import59.PopupHierarchy)) {
        return this._PopupHierarchy_2_11;
      }
      if (identical(token, import67.PopupRef)) {
        return this._PopupRef_2_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final import52.PopupSourceDirective local_menuSource = this._PopupSourceDirective_0_7;
    final local_preset = import9.unsafeCast<import49.DatepickerPreset>(import9.unsafeCast<_ViewDateRangeEditorComponent7>(this.parentView).locals['\$implicit']);
    changed = false;
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      this._PopupSourceDirective_0_7.alignX = 'after';
      this._PopupSourceDirective_0_7.alignY = 'start';
    }
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_1_5.icon = 'arrow_drop_down';
      changed = true;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialPopupComponent_2_8.offsetX = 9;
      changed = true;
      if (!identical((0 - 4), null)) {
        this._MaterialPopupComponent_2_8.offsetY = (0 - 4);
        changed = true;
      }
    }
    final currVal_5 = local_menuSource;
    if (import9.checkBinding(this._expr_5, currVal_5, 'menuSource', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialPopupComponent_2_8.source = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
    final currVal_6 = local_preset.alternatives;
    if (import9.checkBinding(this._expr_6, currVal_6, 'preset.alternatives', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._NgFor_3_9.ngForOf = currVal_6;
      this._expr_6 = currVal_6;
    }
    if ((!import9.debugThrowIfChanged)) {
      this._NgFor_3_9.ngDoCheck();
    }
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_2.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    this._compView_1.detectChanges();
    this._compView_2.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._PopupSourceDirective_0_7.ngAfterViewInit();
        this._MaterialPopupComponent_2_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._compView_1.destroyInternalState();
    this._compView_2.destroyInternalState();
    this._PopupSourceDirective_0_7.ngOnDestroy();
    this._MaterialPopupComponent_2_8.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    $event.stopPropagation();
  }

  void _handleEvent_1($event) {
    $event.stopPropagation();
  }

  void _handleEvent_2($event) {
    final import54.MaterialPopupComponent local_popup = this._MaterialPopupComponent_2_8;
    local_popup.toggle();
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent8(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent8(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent9 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  final import38.TextBinding _textBinding_1 = import38.TextBinding();
  import30.ViewMaterialSelectItemComponent0 _compView_0;
  ViewContainer _appEl_0;
  import32.MaterialSelectItemComponent _MaterialSelectItemComponent_0_8;
  import44.MaterialTooltipDirective _MaterialTooltipDirective_0_9;
  dynamic __TooltipController_0_13;
  var _expr_0;
  var _expr_1;
  var _expr_4;
  _ViewDateRangeEditorComponent9(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  dynamic get _TooltipController_0_13 {
    if ((this.__TooltipController_0_13 == null)) {
      (this.__TooltipController_0_13 = (import9.isDevMode
          ? import22.debugInjectorWrap(import45.TooltipController, () {
              return import46.createTooltipController(import9.unsafeCast<_ViewDateRangeEditorComponent7>(this.parentView.parentView)._TooltipController_0_13, this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import47.Disposer, this.parentView.parentView.parentView.parentView.parentIndex));
            })
          : import46.createTooltipController(import9.unsafeCast<_ViewDateRangeEditorComponent7>(this.parentView.parentView)._TooltipController_0_13, this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import47.Disposer, this.parentView.parentView.parentView.parentView.parentIndex))));
    }
    return this.__TooltipController_0_13;
  }

  @override
  void build() {
    this._compView_0 = import30.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, import36.interpolateString2('', 'preset-dropdown-item', ' ', import32.MaterialSelectItemComponent.hostClass, ''));
    this.addShimC(_el_0);
    this._appEl_0 = ViewContainer(0, null, this, _el_0);
    this._MaterialSelectItemComponent_0_8 = (import9.isDevMode
        ? import22.debugInjectorWrap(import32.MaterialSelectItemComponent, () {
            return import32.MaterialSelectItemComponent(_el_0, import9.unsafeCast<_ViewDateRangeEditorComponent8>(this.parentView)._MaterialPopupComponent_2_8, this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentView.parentView.parentView.parentIndex), this._compView_0, null);
          })
        : import32.MaterialSelectItemComponent(_el_0, import9.unsafeCast<_ViewDateRangeEditorComponent8>(this.parentView)._MaterialPopupComponent_2_8, this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentView.parentView.parentView.parentIndex), this._compView_0, null));
    this._MaterialTooltipDirective_0_9 = (import9.isDevMode
        ? import22.debugInjectorWrap(import44.MaterialTooltipDirective, () {
            return import44.MaterialTooltipDirective(this.parentView.parentView.parentView.parentView.parentView.injectorGet(import48.DomPopupSourceFactory, this.parentView.parentView.parentView.parentView.parentIndex), this._appEl_0, _el_0, this._appEl_0, this._compView_0, this.parentView.parentView.parentView.parentView.parentView.injectorGet(import8.Window, this.parentView.parentView.parentView.parentView.parentIndex), null, null);
          })
        : import44.MaterialTooltipDirective(this.parentView.parentView.parentView.parentView.parentView.injectorGet(import48.DomPopupSourceFactory, this.parentView.parentView.parentView.parentView.parentIndex), this._appEl_0, _el_0, this._appEl_0, this._compView_0, this.parentView.parentView.parentView.parentView.parentView.injectorGet(import8.Window, this.parentView.parentView.parentView.parentView.parentIndex), null, null));
    this._compView_0.createAndProject(this._MaterialSelectItemComponent_0_8, [
      [this._textBinding_1.element]
    ]);
    final subscription_0 = this._MaterialSelectItemComponent_0_8.trigger.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([this._appEl_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (((identical(token, import28.SelectionItem) || identical(token, import26.HasDisabled)) || identical(token, import27.HasRenderer))) {
        return this._MaterialSelectItemComponent_0_8;
      }
      if (identical(token, import45.TooltipController)) {
        return this._TooltipController_0_13;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    final local_alternative = import9.unsafeCast<import49.DatepickerPreset>(this.locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      this._MaterialSelectItemComponent_0_8.closeOnActivate = false;
      changed = true;
    }
    final bool currVal_0 = (!_ctx.isValid(local_alternative));
    if (import9.checkBinding(this._expr_0, currVal_0, '!isValid(alternative)', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialSelectItemComponent_0_8.disabled = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isAlternativePresetSelected(local_alternative);
    if (import9.checkBinding(this._expr_1, currVal_1, 'isAlternativePresetSelected(alternative)', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialSelectItemComponent_0_8.selected = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(import2.DateRangeEditorComponent.rangeDisabledTooltip, null)) {
        (this._MaterialTooltipDirective_0_9.text = import2.DateRangeEditorComponent.rangeDisabledTooltip);
      }
    }
    final bool currVal_4 = (!_ctx.isValid(local_alternative));
    if (import9.checkBinding(this._expr_4, currVal_4, '!isValid(alternative)', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialTooltipDirective_0_9.canShow = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._MaterialTooltipDirective_0_9.ngOnInit();
    }
    this._appEl_0.detectChangesInNestedViews();
    this._compView_0.detectHostChanges(firstCheck);
    this._textBinding_1.updateText(import36.interpolateString0(local_alternative.shortTitle));
    this._compView_0.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialTooltipDirective_0_9.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(this.parentView.parentView.parentView.parentView)._query_SelectionItem_0_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._MaterialSelectItemComponent_0_8.ngOnDestroy();
    this._MaterialTooltipDirective_0_9.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final local_preset = import9.unsafeCast<import49.DatepickerPreset>(import9.unsafeCast<_ViewDateRangeEditorComponent7>(this.parentView.parentView).locals['\$implicit']);
    final local_alternative = import9.unsafeCast<import49.DatepickerPreset>(this.locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.onAlternativePresetClicked($event, local_preset, local_alternative);
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent9(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent9(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent10 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  import68.ViewMenuItemGroupsComponent0 _compView_0;
  import69.MenuRootDirective _MenuRootDirective_0_5;
  import70.MenuItemGroupsComponent _MenuItemGroupsComponent_0_7;
  var _expr_0;
  _ViewDateRangeEditorComponent10(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import68.ViewMenuItemGroupsComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import10.setAttribute(_el_0, 'menu-root', '');
    import10.setAttribute(_el_0, 'preventCloseOnPressLeft', '');
    this.addShimC(_el_0);
    this._MenuRootDirective_0_5 = (import9.isDevMode
        ? import22.debugInjectorWrap(import69.MenuRootDirective, () {
            return import69.MenuRootDirective(this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex));
          })
        : import69.MenuRootDirective(this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex)));
    this._MenuItemGroupsComponent_0_7 = (import9.isDevMode
        ? import22.debugInjectorWrap(import70.MenuItemGroupsComponent, () {
            return import70.MenuItemGroupsComponent(this._MenuRootDirective_0_5, this._compView_0, this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import71.IdGenerator, this.parentView.parentIndex));
          })
        : import70.MenuItemGroupsComponent(this._MenuRootDirective_0_5, this._compView_0, this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import71.IdGenerator, this.parentView.parentIndex)));
    this._compView_0.create(this._MenuItemGroupsComponent_0_7);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import69.MenuRoot) && (0 == nodeIndex))) {
      return this._MenuRootDirective_0_5;
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
      this._MenuItemGroupsComponent_0_7.preventCloseOnPressLeft = true;
      changed = true;
    }
    final currVal_0 = _ctx.presetsMenu;
    if (import9.checkBinding(this._expr_0, currVal_0, 'presetsMenu', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MenuItemGroupsComponent_0_7.menu = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._MenuItemGroupsComponent_0_7.ngOnInit();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MenuItemGroupsComponent_0_7.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MenuItemGroupsComponent_0_7.ngOnDestroy();
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent10(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent10(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent11 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  import30.ViewMaterialSelectItemComponent0 _compView_1;
  import32.MaterialSelectItemComponent _MaterialSelectItemComponent_1_5;
  import72.ViewMaterialInputComponent0 _compView_2;
  import73.DeferredValidator _DeferredValidator_2_5;
  List<dynamic> _NgValidators_2_6;
  import74.NgModel _NgModel_2_7;
  import75.MaterialInputComponent _MaterialInputComponent_2_9;
  import76.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_2_11;
  import30.ViewMaterialSelectItemComponent0 _compView_5;
  import32.MaterialSelectItemComponent _MaterialSelectItemComponent_5_5;
  import72.ViewMaterialInputComponent0 _compView_6;
  import73.DeferredValidator _DeferredValidator_6_5;
  List<dynamic> _NgValidators_6_6;
  import74.NgModel _NgModel_6_7;
  import75.MaterialInputComponent _MaterialInputComponent_6_9;
  import76.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_6_11;
  var _expr_0;
  var _expr_2;
  var _expr_3;
  var _expr_5;
  var _expr_7;
  var _expr_8;
  _ViewDateRangeEditorComponent11(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'days group');
    this.addShimC(_el_0);
    this._compView_1 = import30.ViewMaterialSelectItemComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, import36.interpolateString2('', 'days-input days-to-today', ' ', import32.MaterialSelectItemComponent.hostClass, ''));
    this.addShimC(_el_1);
    this._MaterialSelectItemComponent_1_5 = (import9.isDevMode
        ? import22.debugInjectorWrap(import32.MaterialSelectItemComponent, () {
            return import32.MaterialSelectItemComponent(_el_1, this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentIndex), this._compView_1, null);
          })
        : import32.MaterialSelectItemComponent(_el_1, this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentIndex), this._compView_1, null));
    this._compView_2 = import72.ViewMaterialInputComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    this.addShimC(_el_2);
    this._DeferredValidator_2_5 = import73.DeferredValidator();
    this._NgValidators_2_6 = [this._DeferredValidator_2_5];
    this._NgModel_2_7 = import74.NgModel(this._NgValidators_2_6, null);
    this._MaterialInputComponent_2_9 = import75.MaterialInputComponent(null, null, this._NgModel_2_7, this._compView_2, this._DeferredValidator_2_5);
    this._MaterialInputDefaultValueAccessor_2_11 = import76.MaterialInputDefaultValueAccessor(this._MaterialInputComponent_2_9, this._NgModel_2_7);
    this._compView_2.createAndProject(this._MaterialInputComponent_2_9, [const [], const []]);
    final _el_3 = doc.createElement('span');
    this.addShimE(_el_3);
    final _text_4 = import10.appendText(_el_3, import36.interpolateString0(import2.DateRangeEditorComponent.daysToTodayMsg));
    this._compView_1.createAndProject(this._MaterialSelectItemComponent_1_5, [
      [_el_2, _el_3]
    ]);
    this._compView_5 = import30.ViewMaterialSelectItemComponent0(this, 5);
    final _el_5 = this._compView_5.rootElement;
    _el_0.append(_el_5);
    this.updateChildClassNonHtml(_el_5, import36.interpolateString2('', 'days-input days-to-yesterday', ' ', import32.MaterialSelectItemComponent.hostClass, ''));
    this.addShimC(_el_5);
    this._MaterialSelectItemComponent_5_5 = (import9.isDevMode
        ? import22.debugInjectorWrap(import32.MaterialSelectItemComponent, () {
            return import32.MaterialSelectItemComponent(_el_5, this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentIndex), this._compView_5, null);
          })
        : import32.MaterialSelectItemComponent(_el_5, this.parentView.parentView.injectorGetOptional(import34.DropdownHandle, this.parentView.parentIndex), this.parentView.parentView.injectorGetOptional(import35.ActivationHandler, this.parentView.parentIndex), this._compView_5, null));
    this._compView_6 = import72.ViewMaterialInputComponent0(this, 6);
    final _el_6 = this._compView_6.rootElement;
    this.addShimC(_el_6);
    this._DeferredValidator_6_5 = import73.DeferredValidator();
    this._NgValidators_6_6 = [this._DeferredValidator_6_5];
    this._NgModel_6_7 = import74.NgModel(this._NgValidators_6_6, null);
    this._MaterialInputComponent_6_9 = import75.MaterialInputComponent(null, null, this._NgModel_6_7, this._compView_6, this._DeferredValidator_6_5);
    this._MaterialInputDefaultValueAccessor_6_11 = import76.MaterialInputDefaultValueAccessor(this._MaterialInputComponent_6_9, this._NgModel_6_7);
    this._compView_6.createAndProject(this._MaterialInputComponent_6_9, [const [], const []]);
    final _el_7 = doc.createElement('span');
    this.addShimE(_el_7);
    final _text_8 = import10.appendText(_el_7, import36.interpolateString0(import2.DateRangeEditorComponent.daysToYesterdayMsg));
    this._compView_5.createAndProject(this._MaterialSelectItemComponent_5_5, [
      [_el_6, _el_7]
    ]);
    final subscription_0 = this._MaterialSelectItemComponent_1_5.trigger.listen(this.eventHandler1(this._handleEvent_0));
    _el_2.addEventListener('click', this.eventHandler1(this._handleEvent_1));
    final subscription_1 = this._NgModel_2_7.update.listen(this.eventHandler1(this._handleEvent_2));
    final subscription_2 = this._MaterialSelectItemComponent_5_5.trigger.listen(this.eventHandler1(this._handleEvent_3));
    _el_6.addEventListener('click', this.eventHandler1(this._handleEvent_4));
    final subscription_3 = this._NgModel_6_7.update.listen(this.eventHandler1(this._handleEvent_5));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((1 <= nodeIndex) && (nodeIndex <= 4))) {
      if ((2 == nodeIndex)) {
        if (identical(token, import73.DeferredValidator)) {
          return this._DeferredValidator_2_5;
        }
        if (identical(token, const import56.MultiToken<dynamic>('NgValidators'))) {
          return this._NgValidators_2_6;
        }
        if ((identical(token, import74.NgModel) || identical(token, import77.NgControl))) {
          return this._NgModel_2_7;
        }
        if (((((identical(token, import75.MaterialInputComponent) || identical(token, import78.BaseMaterialInput)) || identical(token, import57.ReferenceDirective)) || identical(token, import58.Focusable)) || identical(token, import26.HasDisabled))) {
          return this._MaterialInputComponent_2_9;
        }
      }
      if (((identical(token, import28.SelectionItem) || identical(token, import26.HasDisabled)) || identical(token, import27.HasRenderer))) {
        return this._MaterialSelectItemComponent_1_5;
      }
    }
    if (((5 <= nodeIndex) && (nodeIndex <= 8))) {
      if ((6 == nodeIndex)) {
        if (identical(token, import73.DeferredValidator)) {
          return this._DeferredValidator_6_5;
        }
        if (identical(token, const import56.MultiToken<dynamic>('NgValidators'))) {
          return this._NgValidators_6_6;
        }
        if ((identical(token, import74.NgModel) || identical(token, import77.NgControl))) {
          return this._NgModel_6_7;
        }
        if (((((identical(token, import75.MaterialInputComponent) || identical(token, import78.BaseMaterialInput)) || identical(token, import57.ReferenceDirective)) || identical(token, import58.Focusable)) || identical(token, import26.HasDisabled))) {
          return this._MaterialInputComponent_6_9;
        }
      }
      if (((identical(token, import28.SelectionItem) || identical(token, import26.HasDisabled)) || identical(token, import27.HasRenderer))) {
        return this._MaterialSelectItemComponent_5_5;
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
      this._MaterialSelectItemComponent_1_5.closeOnActivate = false;
      changed = true;
    }
    final currVal_0 = _ctx.isSelected(_ctx.daysToTodayRange);
    if (import9.checkBinding(this._expr_0, currVal_0, 'isSelected(daysToTodayRange)', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialSelectItemComponent_1_5.selected = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    changed = false;
    final currVal_2 = _ctx.daysToToday;
    if (import9.checkBinding(this._expr_2, currVal_2, 'daysToToday', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._NgModel_2_7.model = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._NgModel_2_7.ngAfterChanges();
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_2_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialInputComponent_2_9.displayBottomPanel = false;
      changed = true;
    }
    final currVal_3 = _ctx.maxDaysInputLength;
    if (import9.checkBinding(this._expr_3, currVal_3, 'maxDaysInputLength', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialInputComponent_2_9.maxCount = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    if (changed) {
      this._compView_2.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialSelectItemComponent_5_5.closeOnActivate = false;
      changed = true;
    }
    final currVal_5 = _ctx.isSelected(_ctx.daysToYesterdayRange);
    if (import9.checkBinding(this._expr_5, currVal_5, 'isSelected(daysToYesterdayRange)', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialSelectItemComponent_5_5.selected = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_5.markAsCheckOnce();
    }
    changed = false;
    final currVal_7 = _ctx.daysToYesterday;
    if (import9.checkBinding(this._expr_7, currVal_7, 'daysToYesterday', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._NgModel_6_7.model = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    if (changed) {
      this._NgModel_6_7.ngAfterChanges();
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_6_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._MaterialInputComponent_6_9.displayBottomPanel = false;
      changed = true;
    }
    final currVal_8 = _ctx.maxDaysInputLength;
    if (import9.checkBinding(this._expr_8, currVal_8, 'maxDaysInputLength', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialInputComponent_6_9.maxCount = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    if (changed) {
      this._compView_6.markAsCheckOnce();
    }
    this._compView_1.detectHostChanges(firstCheck);
    this._compView_5.detectHostChanges(firstCheck);
    this._compView_1.detectChanges();
    this._compView_2.detectChanges();
    this._compView_5.detectChanges();
    this._compView_6.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialInputComponent_2_9.ngAfterViewInit();
        this._MaterialInputComponent_6_9.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(this.parentView)._query_SelectionItem_0_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
    this._compView_2.destroyInternalState();
    this._compView_5.destroyInternalState();
    this._compView_6.destroyInternalState();
    this._MaterialInputComponent_2_9.ngOnDestroy();
    this._MaterialInputDefaultValueAccessor_2_11.ngOnDestroy();
    this._MaterialSelectItemComponent_1_5.ngOnDestroy();
    this._MaterialInputComponent_6_9.ngOnDestroy();
    this._MaterialInputDefaultValueAccessor_6_11.ngOnDestroy();
    this._MaterialSelectItemComponent_5_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.onRangeClicked($event, _ctx.daysToTodayRange);
  }

  void _handleEvent_1($event) {
    $event.stopPropagation();
  }

  void _handleEvent_2($event) {
    final _ctx = this.ctx;
    _ctx.daysToToday = $event;
  }

  void _handleEvent_3($event) {
    final _ctx = this.ctx;
    _ctx.onRangeClicked($event, _ctx.daysToYesterdayRange);
  }

  void _handleEvent_4($event) {
    $event.stopPropagation();
  }

  void _handleEvent_5($event) {
    final _ctx = this.ctx;
    _ctx.daysToYesterday = $event;
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent11(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent11(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent12 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  import79.ViewComparisonRangeEditorComponent0 _compView_1;
  import80.ComparisonRangeEditorComponent _ComparisonRangeEditorComponent_1_5;
  var _expr_0;
  _ViewDateRangeEditorComponent12(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'comparison group');
    this.addShimC(_el_0);
    this._compView_1 = import79.ViewComparisonRangeEditorComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._ComparisonRangeEditorComponent_1_5 = (import9.isDevMode
        ? import22.debugInjectorWrap(import80.ComparisonRangeEditorComponent, () {
            return import80.ComparisonRangeEditorComponent(this.parentView.parentView.injectorGet(import24.NgZone, this.parentView.parentIndex), import9.unsafeCast<_ViewDateRangeEditorComponent1>(this.parentView)._ElementScrollHost_0_9);
          })
        : import80.ComparisonRangeEditorComponent(this.parentView.parentView.injectorGet(import24.NgZone, this.parentView.parentIndex), import9.unsafeCast<_ViewDateRangeEditorComponent1>(this.parentView)._ElementScrollHost_0_9));
    this._compView_1.create(this._ComparisonRangeEditorComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.model;
    if (import9.checkBinding(this._expr_0, currVal_0, 'model', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._ComparisonRangeEditorComponent_1_5.model = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent12(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent12(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent13 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import81.ViewDateRangeInputComponent0 _compView_4;
  import82.DateRangeInputComponent _DateRangeInputComponent_4_5;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  import8.DivElement _el_9;
  _ViewDateRangeEditorComponent13(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'right-column');
    this.addShimC(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_DateRangeEditorComponent14);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_DateRangeEditorComponent15);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _el_3 = import10.appendDiv(doc, _el_0);
    this.updateChildClass(_el_3, 'range-input');
    this.addShimC(_el_3);
    this._compView_4 = import81.ViewDateRangeInputComponent0(this, 4);
    final _el_4 = this._compView_4.rootElement;
    _el_3.append(_el_4);
    this.updateChildClassNonHtml(_el_4, 'range');
    this.addShimC(_el_4);
    this._DateRangeInputComponent_4_5 = import82.DateRangeInputComponent(this._compView_4);
    this._compView_4.create(this._DateRangeInputComponent_4_5);
    final _anchor_5 = import10.appendAnchor(_el_0);
    this._appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_DateRangeEditorComponent16);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import10.appendAnchor(_el_0);
    this._appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_DateRangeEditorComponent17);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _anchor_7 = import10.appendAnchor(_el_0);
    this._appEl_7 = ViewContainer(7, 0, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_DateRangeEditorComponent18);
    this._NgIf_7_9 = NgIf(this._appEl_7, _TemplateRef_7_8);
    final _anchor_8 = import10.appendAnchor(_el_0);
    this._appEl_8 = ViewContainer(8, 0, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(this._appEl_8, viewFactory_DateRangeEditorComponent19);
    this._NgIf_8_9 = NgIf(this._appEl_8, _TemplateRef_8_8);
    this._el_9 = import10.appendDiv(doc, _el_0);
    this.updateChildClass(this._el_9, 'picker-container');
    this.addShimC(this._el_9);
    final _anchor_10 = import10.appendAnchor(this._el_9);
    this._appEl_10 = ViewContainer(10, 9, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(this._appEl_10, viewFactory_DateRangeEditorComponent20);
    this._NgIf_10_9 = NgIf(this._appEl_10, _TemplateRef_10_8);
    final _anchor_11 = import10.appendAnchor(this._el_9);
    this._appEl_11 = ViewContainer(11, 9, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(this._appEl_11, viewFactory_DateRangeEditorComponent21);
    this._NgIf_11_9 = NgIf(this._appEl_11, _TemplateRef_11_8);
    final subscription_0 = this._DateRangeInputComponent_4_5.stateChange.listen(this.eventHandler1(this._handleEvent_0));
    final subscription_1 = this._DateRangeInputComponent_4_5.rangeChange.listen(this.eventHandler1(this._handleEvent_1));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0, subscription_1]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    this._NgIf_1_9.ngIf = _ctx.isBasic;
    this._NgIf_2_9.ngIf = _ctx.isBasic;
    changed = false;
    final currVal_0 = _ctx.model.rangeId;
    if (import9.checkBinding(this._expr_0, currVal_0, 'model.rangeId', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_4_5.rangeId = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.dateFormat;
    if (import9.checkBinding(this._expr_1, currVal_1, 'dateFormat', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_4_5.dateFormat = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.activeDateFormat;
    if (import9.checkBinding(this._expr_2, currVal_2, 'activeDateFormat', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_4_5.activeDateFormat = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.maxDate;
    if (import9.checkBinding(this._expr_3, currVal_3, 'maxDate', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_4_5.maxDate = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.minDate;
    if (import9.checkBinding(this._expr_4, currVal_4, 'minDate', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_4_5.minDate = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.model.range.value;
    if (import9.checkBinding(this._expr_5, currVal_5, 'model.range.value', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_4_5.range = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.isClearRangeSelected;
    if (import9.checkBinding(this._expr_6, currVal_6, 'isClearRangeSelected', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_4_5.isClearRangeSelected = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.model.calendar.value;
    if (import9.checkBinding(this._expr_7, currVal_7, 'model.calendar.value', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_4_5.state = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    if (changed) {
      this._compView_4.markAsCheckOnce();
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._DateRangeInputComponent_4_5.ngOnInit();
    }
    this._NgIf_5_9.ngIf = _ctx.model.comparisonEnabled;
    this._NgIf_6_9.ngIf = _ctx.model.comparisonEnabled;
    this._NgIf_7_9.ngIf = _ctx.supportsMonthSelector;
    this._NgIf_8_9.ngIf = (!_ctx.isCalendarCreated);
    this._NgIf_10_9.ngIf = _ctx.isCalendarCreated;
    this._NgIf_11_9.ngIf = _ctx.supportsMonthSelector;
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_8.detectChangesInNestedViews();
    this._appEl_10.detectChangesInNestedViews();
    this._appEl_11.detectChangesInNestedViews();
    final currVal_8 = _ctx.compact;
    if (import9.checkBinding(this._expr_8, currVal_8, 'compact', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      import10.updateClassBinding(this._el_9, 'compact', currVal_8);
      this._expr_8 = currVal_8;
    }
    this._compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._appEl_8.destroyNestedViews();
    this._appEl_10.destroyNestedViews();
    this._appEl_11.destroyNestedViews();
    this._compView_4.destroyInternalState();
    this._DateRangeInputComponent_4_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.model.calendar.value = $event;
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.model.range.value = $event;
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent13(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent13(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent14 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  import40.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import39.ViewMaterialIconComponent0 _compView_3;
  import41.MaterialIconComponent _MaterialIconComponent_3_5;
  import8.DivElement _el_0;
  _ViewDateRangeEditorComponent14(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import8.document;
    this._el_0 = doc.createElement('div');
    import10.setAttribute(this._el_0, 'buttonDecorator', '');
    this.updateChildClass(this._el_0, 'button-decorator');
    this.addShimC(this._el_0);
    this._ButtonDirective_0_5 = import40.ButtonDirectiveNgCd(import42.ButtonDirective(this._el_0, null));
    final _el_1 = import10.appendDiv(doc, this._el_0);
    this.updateChildClass(_el_1, 'custom-tab-right');
    this.addShimC(_el_1);
    final _text_2 = import10.appendText(_el_1, import36.interpolateString0(import2.DateRangeEditorComponent.customRangeMsg));
    this._compView_3 = import39.ViewMaterialIconComponent0(this, 3);
    final _el_3 = this._compView_3.rootElement;
    this._el_0.append(_el_3);
    this.updateChildClassNonHtml(_el_3, 'expand-less');
    import10.setAttribute(_el_3, 'icon', 'expand_less');
    this.addShimC(_el_3);
    this._MaterialIconComponent_3_5 = import41.MaterialIconComponent(_el_3);
    this._compView_3.create(this._MaterialIconComponent_3_5);
    this._el_0.addEventListener('click', this.eventHandler1(this._ButtonDirective_0_5.instance.handleClick));
    this._el_0.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = this._ButtonDirective_0_5.instance.trigger.listen(this.eventHandler0(_ctx.disableCustomMode));
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import42.ButtonDirective) && (nodeIndex <= 3))) {
      return this._ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._MaterialIconComponent_3_5.icon = 'expand_less';
      changed = true;
    }
    if (changed) {
      this._compView_3.markAsCheckOnce();
    }
    this._ButtonDirective_0_5.detectHostChanges(this, this._el_0);
    this._compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_3.destroyInternalState();
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent14(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent14(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent15 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  _ViewDateRangeEditorComponent15(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'content-separator');
    this.addShimC(_el_0);
    this.initRootNode(_el_0);
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent15(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent15(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent16 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  _ViewDateRangeEditorComponent16(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'range-title');
    this.addShimC(_el_0);
    final _text_1 = import10.appendText(_el_0, import36.interpolateString0(import2.DateRangeEditorComponent.comparisonHeaderMsg));
    this.initRootNode(_el_0);
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent16(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent16(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent17 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  import81.ViewDateRangeInputComponent0 _compView_1;
  import82.DateRangeInputComponent _DateRangeInputComponent_1_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  _ViewDateRangeEditorComponent17(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'range-input');
    this.addShimC(_el_0);
    this._compView_1 = import81.ViewDateRangeInputComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, 'comparison inputs');
    this.addShimC(_el_1);
    this._DateRangeInputComponent_1_5 = import82.DateRangeInputComponent(this._compView_1);
    this._compView_1.create(this._DateRangeInputComponent_1_5);
    final subscription_0 = this._DateRangeInputComponent_1_5.stateChange.listen(this.eventHandler1(this._handleEvent_0));
    final subscription_1 = this._DateRangeInputComponent_1_5.rangeChange.listen(this.eventHandler1(this._handleEvent_1));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0, subscription_1]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    final bool currVal_0 = (!_ctx.isCustomComparisonValid);
    if (import9.checkBinding(this._expr_0, currVal_0, '!isCustomComparisonValid', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_1_5.disabled = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.model.comparisonId;
    if (import9.checkBinding(this._expr_1, currVal_1, 'model.comparisonId', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_1_5.rangeId = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.dateFormat;
    if (import9.checkBinding(this._expr_2, currVal_2, 'dateFormat', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_1_5.dateFormat = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.activeDateFormat;
    if (import9.checkBinding(this._expr_3, currVal_3, 'activeDateFormat', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_1_5.activeDateFormat = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.model.maxDate;
    if (import9.checkBinding(this._expr_4, currVal_4, 'model.maxDate', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_1_5.maxDate = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.model.minDate;
    if (import9.checkBinding(this._expr_5, currVal_5, 'model.minDate', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_1_5.minDate = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.model.comparison.value;
    if (import9.checkBinding(this._expr_6, currVal_6, 'model.comparison.value', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_1_5.range = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.isClearRangeSelected;
    if (import9.checkBinding(this._expr_7, currVal_7, 'isClearRangeSelected', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_1_5.isClearRangeSelected = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.model.calendar.value;
    if (import9.checkBinding(this._expr_8, currVal_8, 'model.calendar.value', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._DateRangeInputComponent_1_5.state = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    if (changed) {
      this._compView_1.markAsCheckOnce();
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._DateRangeInputComponent_1_5.ngOnInit();
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
    this._DateRangeInputComponent_1_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.model.calendar.value = $event;
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.model.comparison.value = $event;
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent17(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent17(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent18 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  final import38.TextBinding _textBinding_3 = import38.TextBinding();
  import40.ButtonDirectiveNgCd _ButtonDirective_1_5;
  import83.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_1_6;
  import39.ViewMaterialIconComponent0 _compView_4;
  import41.MaterialIconComponent _MaterialIconComponent_4_5;
  import84.ViewNextPrevComponent0 _compView_5;
  import85.NextPrevComponent _NextPrevComponent_5_5;
  var _expr_0;
  var _expr_2;
  import8.DivElement _el_1;
  import8.Element _el_4;
  _ViewDateRangeEditorComponent18(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'month-selector-toolbar');
    this.addShimC(_el_0);
    this._el_1 = import10.appendDiv(doc, _el_0);
    import10.setAttribute(this._el_1, 'buttonDecorator', '');
    this.updateChildClass(this._el_1, 'month-selector-dropdown');
    import10.setAttribute(this._el_1, 'keyboardOnlyFocusIndicator', '');
    this.addShimC(this._el_1);
    this._ButtonDirective_1_5 = import40.ButtonDirectiveNgCd(import42.ButtonDirective(this._el_1, null));
    this._KeyboardOnlyFocusIndicatorDirective_1_6 = (import9.isDevMode
        ? import22.debugInjectorWrap(import83.KeyboardOnlyFocusIndicatorDirective, () {
            return import83.KeyboardOnlyFocusIndicatorDirective(this._el_1, this.parentView.parentView.injectorGet(import25.DomService, this.parentView.parentIndex));
          })
        : import83.KeyboardOnlyFocusIndicatorDirective(this._el_1, this.parentView.parentView.injectorGet(import25.DomService, this.parentView.parentIndex)));
    final _el_2 = import10.appendSpan(doc, this._el_1);
    this.updateChildClass(_el_2, 'visible-month');
    this.addShimE(_el_2);
    _el_2.append(this._textBinding_3.element);
    this._compView_4 = import39.ViewMaterialIconComponent0(this, 4);
    this._el_4 = this._compView_4.rootElement;
    this._el_1.append(this._el_4);
    this.updateChildClassNonHtml(this._el_4, 'month-selector-dropdown-icon');
    import10.setAttribute(this._el_4, 'icon', 'arrow_drop_down');
    this.addShimC(this._el_4);
    this._MaterialIconComponent_4_5 = import41.MaterialIconComponent(this._el_4);
    this._compView_4.create(this._MaterialIconComponent_4_5);
    this._compView_5 = import84.ViewNextPrevComponent0(this, 5);
    final _el_5 = this._compView_5.rootElement;
    _el_0.append(_el_5);
    this.updateChildClassNonHtml(_el_5, 'next-prev-range');
    this.addShimC(_el_5);
    this._NextPrevComponent_5_5 = import85.NextPrevComponent(this._compView_5);
    this._compView_5.create(this._NextPrevComponent_5_5);
    this._el_1.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this._el_1.addEventListener('keypress', this.eventHandler1(this._ButtonDirective_1_5.instance.handleKeyPress));
    this._el_1.addEventListener('keydown', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_1_6.keydown));
    this._el_1.addEventListener('blur', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_1_6.resetOutline));
    this._el_1.addEventListener('mousedown', this.eventHandler0(this._KeyboardOnlyFocusIndicatorDirective_1_6.onMouseInteraction));
    this._el_1.addEventListener('focus', this.eventHandler1(this._KeyboardOnlyFocusIndicatorDirective_1_6.onFocus));
    final subscription_0 = this._ButtonDirective_1_5.instance.trigger.listen(this.eventHandler0(_ctx.onMonthSelectorDropdownClicked));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import42.ButtonDirective) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return this._ButtonDirective_1_5.instance;
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
      this._MaterialIconComponent_4_5.icon = 'arrow_drop_down';
      changed = true;
    }
    if (changed) {
      this._compView_4.markAsCheckOnce();
    }
    changed = false;
    final currVal_2 = _ctx.nextPrevModel;
    if (import9.checkBinding(this._expr_2, currVal_2, 'nextPrevModel', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._NextPrevComponent_5_5.model = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_5.markAsCheckOnce();
    }
    this._ButtonDirective_1_5.detectHostChanges(this, this._el_1);
    this._textBinding_3.updateText(import36.interpolateString0(_ctx.visibleMonthName));
    final currVal_0 = _ctx.showMonthSelector;
    if (import9.checkBinding(this._expr_0, currVal_0, 'showMonthSelector', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      import10.updateClassBindingNonHtml(this._el_4, 'flipped', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_4.detectChanges();
    this._compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_4.destroyInternalState();
    this._compView_5.destroyInternalState();
    this._NextPrevComponent_5_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    this._ButtonDirective_1_5.instance.handleClick($event);
    this._KeyboardOnlyFocusIndicatorDirective_1_6.onMouseInteraction();
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent18(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent18(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent19 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  _ViewDateRangeEditorComponent19(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'calendar-placeholder');
    this.addShimC(_el_0);
    this.initRootNode(_el_0);
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent19(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent19(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent20 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  import86.ViewMaterialCalendarPickerComponent0 _compView_0;
  import87.MaterialCalendarPickerComponent _MaterialCalendarPickerComponent_0_5;
  import88.ShowHideDirective _ShowHideDirective_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  _ViewDateRangeEditorComponent20(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    this._compView_0 = import86.ViewMaterialCalendarPickerComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'picker calendar');
    import10.setAttribute(_el_0, 'mode', 'date-range');
    this.addShimC(_el_0);
    this._MaterialCalendarPickerComponent_0_5 = (import9.isDevMode
        ? import22.debugInjectorWrap(import87.MaterialCalendarPickerComponent, () {
            return import87.MaterialCalendarPickerComponent(this.parentView.parentView.injectorGetOptional(const import56.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentView.parentIndex), this.parentView.parentView.injectorGet(import18.Clock, this.parentView.parentIndex), 'date-range');
          })
        : import87.MaterialCalendarPickerComponent(this.parentView.parentView.injectorGetOptional(const import56.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentView.parentIndex), this.parentView.parentView.injectorGet(import18.Clock, this.parentView.parentIndex), 'date-range'));
    this._ShowHideDirective_0_6 = (import9.isDevMode
        ? import22.debugInjectorWrap(import88.ShowHideDirective, () {
            return import88.ShowHideDirective(_el_0, this.parentView.parentView.injectorGet(import25.DomService, this.parentView.parentIndex));
          })
        : import88.ShowHideDirective(_el_0, this.parentView.parentView.injectorGet(import25.DomService, this.parentView.parentIndex)));
    this._compView_0.create(this._MaterialCalendarPickerComponent_0_5);
    final subscription_0 = this._MaterialCalendarPickerComponent_0_5.visibleMonth.listen(this.eventHandler1(_ctx.onVisibleMonthChange));
    final subscription_1 = this._MaterialCalendarPickerComponent_0_5.stateChange.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0, subscription_1]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    final currVal_0 = _ctx.model.calendar.value;
    if (import9.checkBinding(this._expr_0, currVal_0, 'model.calendar.value', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialCalendarPickerComponent_0_5.state = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.allowHighlightUpdates;
    if (import9.checkBinding(this._expr_1, currVal_1, 'allowHighlightUpdates', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialCalendarPickerComponent_0_5.allowHighlightUpdates = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.minDate;
    if (import9.checkBinding(this._expr_2, currVal_2, 'minDate', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialCalendarPickerComponent_0_5.minDate = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.maxDate;
    if (import9.checkBinding(this._expr_3, currVal_3, 'maxDate', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialCalendarPickerComponent_0_5.maxDate = currVal_3;
      changed = true;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.compact;
    if (import9.checkBinding(this._expr_4, currVal_4, 'compact', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialCalendarPickerComponent_0_5.compact = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.movingStartMaintainsLength;
    if (import9.checkBinding(this._expr_5, currVal_5, 'movingStartMaintainsLength', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialCalendarPickerComponent_0_5.movingStartMaintainsLength = currVal_5;
      changed = true;
      this._expr_5 = currVal_5;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (changed) {
      this._MaterialCalendarPickerComponent_0_5.ngAfterChanges();
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._MaterialCalendarPickerComponent_0_5.ngOnInit();
    }
    final bool currVal_6 = (!_ctx.showMonthSelector);
    if (import9.checkBinding(this._expr_6, currVal_6, '!showMonthSelector', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._ShowHideDirective_0_6.visible = currVal_6;
      this._expr_6 = currVal_6;
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._ShowHideDirective_0_6.ngOnInit();
    }
    this._compView_0.detectHostChanges(firstCheck);
    this._compView_0.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialCalendarPickerComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewDateRangeEditorComponent0>(this.parentView.parentView)._viewQuery_MaterialCalendarPickerComponent_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialCalendarPickerComponent_0_5.ngOnDestroy();
    this._ShowHideDirective_0_6.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.model.calendar.value = $event;
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent20(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent20(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent21 extends import14.EmbeddedView<import2.DateRangeEditorComponent> {
  import89.ViewMaterialMonthPickerComponent0 _compView_0;
  import90.MaterialMonthPickerComponent _MaterialMonthPickerComponent_0_5;
  import88.ShowHideDirective _ShowHideDirective_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewDateRangeEditorComponent21(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import89.ViewMaterialMonthPickerComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'picker month-selector');
    import10.setAttribute(_el_0, 'mode', 'single-date');
    this.addShimC(_el_0);
    this._MaterialMonthPickerComponent_0_5 = (import9.isDevMode
        ? import22.debugInjectorWrap(import90.MaterialMonthPickerComponent, () {
            return import90.MaterialMonthPickerComponent(this.parentView.parentView.injectorGetOptional(const import56.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentView.parentIndex), 'single-date');
          })
        : import90.MaterialMonthPickerComponent(this.parentView.parentView.injectorGetOptional(const import56.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentView.parentIndex), 'single-date'));
    this._ShowHideDirective_0_6 = (import9.isDevMode
        ? import22.debugInjectorWrap(import88.ShowHideDirective, () {
            return import88.ShowHideDirective(_el_0, this.parentView.parentView.injectorGet(import25.DomService, this.parentView.parentIndex));
          })
        : import88.ShowHideDirective(_el_0, this.parentView.parentView.injectorGet(import25.DomService, this.parentView.parentIndex)));
    this._compView_0.create(this._MaterialMonthPickerComponent_0_5);
    final subscription_0 = this._MaterialMonthPickerComponent_0_5.stateChange.listen(this.eventHandler1(this._handleEvent_0));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    final currVal_0 = _ctx.monthSelectorState;
    if (import9.checkBinding(this._expr_0, currVal_0, 'monthSelectorState', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialMonthPickerComponent_0_5.state = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.minDate;
    if (import9.checkBinding(this._expr_1, currVal_1, 'minDate', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialMonthPickerComponent_0_5.minDate = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.maxDate;
    if (import9.checkBinding(this._expr_2, currVal_2, 'maxDate', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._MaterialMonthPickerComponent_0_5.maxDate = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._compView_0.markAsCheckOnce();
    }
    if (changed) {
      this._MaterialMonthPickerComponent_0_5.ngAfterChanges();
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._MaterialMonthPickerComponent_0_5.ngOnInit();
    }
    final currVal_3 = _ctx.showMonthSelector;
    if (import9.checkBinding(this._expr_3, currVal_3, 'showMonthSelector', 'package:angular_components/material_datepicker/date_range_editor.html')) {
      this._ShowHideDirective_0_6.visible = currVal_3;
      this._expr_3 = currVal_3;
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._ShowHideDirective_0_6.ngOnInit();
    }
    this._compView_0.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this._MaterialMonthPickerComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewDateRangeEditorComponent0>(this.parentView.parentView)._viewQuery_MaterialMonthPickerComponent_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._MaterialMonthPickerComponent_0_5.ngOnDestroy();
    this._ShowHideDirective_0_6.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.monthSelectorState = $event;
  }
}

import14.EmbeddedView<void> viewFactory_DateRangeEditorComponent21(import21.RenderView parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent21(parentView, parentIndex);
}

final List<dynamic> styles$DateRangeEditorComponentHost = const [];

class _ViewDateRangeEditorComponentHost0 extends import91.HostView<import2.DateRangeEditorComponent> {
  @override
  void build() {
    this.componentView = ViewDateRangeEditorComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import9.isDevMode
        ? import22.debugInjectorWrap(import2.DateRangeEditorComponent, () {
            return import2.DateRangeEditorComponent(_el_0, this.injectorGet(import25.DomService, this.parentIndex), this.injectorGet(import24.NgZone, this.parentIndex), this.injectorGetOptional(import92.DateRangeEditorHost, this.parentIndex), this.injectorGetOptional(const import56.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), this.injectorGet(import18.Clock, this.parentIndex));
          })
        : import2.DateRangeEditorComponent(_el_0, this.injectorGet(import25.DomService, this.parentIndex), this.injectorGet(import24.NgZone, this.parentIndex), this.injectorGetOptional(import92.DateRangeEditorHost, this.parentIndex), this.injectorGetOptional(const import56.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), this.parentIndex), this.injectorGet(import18.Clock, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectHostChanges(firstCheck);
    this.componentView.detectChanges();
    if ((!import9.debugThrowIfChanged)) {
      if (firstCheck) {
        this.component.ngAfterViewInit();
      }
    }
  }
}

import91.HostView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponentHost0() {
  return _ViewDateRangeEditorComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DateRangeEditorComponent, createDateRangeEditorComponentFactory());
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
  _ref32.initReflector();
  _ref33.initReflector();
  _ref34.initReflector();
  _ref35.initReflector();
  _ref36.initReflector();
  _ref37.initReflector();
  _ref38.initReflector();
}
