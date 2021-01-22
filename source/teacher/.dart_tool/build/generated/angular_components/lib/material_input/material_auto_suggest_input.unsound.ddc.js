define(['dart_sdk', 'packages/angular_components/model/ui/template_support', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/selection/select', 'packages/angular_components/material_select/material_select_base', 'packages/angular_components/mixins/selection_input_adapter', 'packages/angular_components/material_input/input_wrapper', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/mixins/highlight_assistant_mixin', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_forms/src/directives', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/has_factory', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/material_input/material_input', 'packages/angular/src/core/application_tokens', 'packages/angular_components/src/utils/async/async_update_scheduler'], (function load__packages__angular_components__material_input__material_auto_suggest_input(dart_sdk, packages__angular_components__model__ui__template_support, packages__angular_components__model__a11y__active_item, packages__angular_components__model__selection__selection_model, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__model__selection__selection_options, packages__angular_components__utils__angular__properties__properties, packages__angular_components__src__model__selection__interfaces__selectable, packages__angular_components__model__selection__select, packages__angular_components__material_select__material_select_base, packages__angular_components__mixins__selection_input_adapter, packages__angular_components__material_input__input_wrapper, packages__angular_components__model__a11y__keyboard_handler_mixin, packages__angular_components__mixins__highlight_assistant_mixin, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_forms__src__directives, packages__angular_components__focus__focus_interface, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__ui__has_factory, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular__src__bootstrap__modules, packages__angular_components__laminate__enums__alignment, packages__angular_components__material_input__material_input, packages__angular__src__core__application_tokens, packages__angular_components__src__utils__async__async_update_scheduler) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const template_support = packages__angular_components__model__ui__template_support.model__ui__template_support;
  const active_item = packages__angular_components__model__a11y__active_item.model__a11y__active_item;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  const selectable = packages__angular_components__src__model__selection__interfaces__selectable.src__model__selection__interfaces__selectable;
  const select = packages__angular_components__model__selection__select.model__selection__select;
  const material_select_base = packages__angular_components__material_select__material_select_base.material_select__material_select_base;
  const selection_input_adapter = packages__angular_components__mixins__selection_input_adapter.mixins__selection_input_adapter;
  const input_wrapper = packages__angular_components__material_input__input_wrapper.material_input__input_wrapper;
  const keyboard_handler_mixin = packages__angular_components__model__a11y__keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const highlight_assistant_mixin = packages__angular_components__mixins__highlight_assistant_mixin.mixins__highlight_assistant_mixin;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const control_value_accessor = packages__angular_forms__src__directives.src__directives__control_value_accessor;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const has_factory = packages__angular_components__model__ui__has_factory.model__ui__has_factory;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const disposable_future = packages__angular_components__src__utils__async__async_update_scheduler.src__utils__async__disposable_future;
  var material_auto_suggest_input = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $values = dartx.values;
  var $firstWhere = dartx.firstWhere;
  var $first = dartx.first;
  var $isEmpty = dartx.isEmpty;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StreamControllerOfStringL = () => (StreamControllerOfStringL = dart.constFn(async.StreamController$(StringL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var StreamControllerOfFocusEventL = () => (StreamControllerOfFocusEventL = dart.constFn(async.StreamController$(FocusEventL())))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var FilterableL = () => (FilterableL = dart.constFn(dart.legacy(select.Filterable)))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(StringL(), [StringL()])))();
  var StringLToLStringL = () => (StringLToLStringL = dart.constFn(dart.legacy(StringLToStringL())))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_input/material_auto_suggest_input.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: alignment.AfterCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "After",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [AfterCustomAlignment_requiresContentSizeToPosition]: false
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-start",
        [Alignment__displayName]: "Start"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top left",
        [RelativePosition_originY]: C2 || CT.C2,
        [RelativePosition_originX]: C3 || CT.C3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-end",
        [Alignment__displayName]: "End"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top right",
        [RelativePosition_originY]: C2 || CT.C2,
        [RelativePosition_originX]: C5 || CT.C5
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: alignment.BeforeCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "Before",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [BeforeCustomAlignment_requiresContentSizeToPosition]: true
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom left",
        [RelativePosition_originY]: C7 || CT.C7,
        [RelativePosition_originX]: C3 || CT.C3
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom right",
        [RelativePosition_originY]: C7 || CT.C7,
        [RelativePosition_originX]: C5 || CT.C5
      });
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C4 || CT.C4, C6 || CT.C6, C8 || CT.C8], RelativePositionL());
    }
  }, false);
  var _isInitialized = dart.privateName(material_auto_suggest_input, "_isInitialized");
  var _showPopup = dart.privateName(material_auto_suggest_input, "_showPopup");
  var _focusPending = dart.privateName(material_auto_suggest_input, "_focusPending");
  var _input = dart.privateName(material_auto_suggest_input, "_input");
  var _callback = dart.privateName(material_auto_suggest_input, "_callback");
  var _inputText = dart.privateName(material_auto_suggest_input, "_inputText");
  var _inputChange = dart.privateName(material_auto_suggest_input, "_inputChange");
  var _lastSelectedItem = dart.privateName(material_auto_suggest_input, "_lastSelectedItem");
  var _lastFilterFuture = dart.privateName(material_auto_suggest_input, "_lastFilterFuture");
  var _filterScheduled = dart.privateName(material_auto_suggest_input, "_filterScheduled");
  var _isDisposed = dart.privateName(material_auto_suggest_input, "_isDisposed");
  var _accessibleItemActivation = dart.privateName(material_auto_suggest_input, "_accessibleItemActivation");
  var _limit = dart.privateName(material_auto_suggest_input, "_limit");
  var _popupPositions = dart.privateName(material_auto_suggest_input, "_popupPositions");
  var _selectionListener = dart.privateName(material_auto_suggest_input, "_selectionListener");
  var _optionsListener = dart.privateName(material_auto_suggest_input, "_optionsListener");
  var _showPopupController = dart.privateName(material_auto_suggest_input, "_showPopupController");
  var _onClear = dart.privateName(material_auto_suggest_input, "_onClear");
  var _isFocused = dart.privateName(material_auto_suggest_input, "_isFocused");
  var _onFocus = dart.privateName(material_auto_suggest_input, "_onFocus");
  var _onBlur = dart.privateName(material_auto_suggest_input, "_onBlur");
  var _onInputBlur = dart.privateName(material_auto_suggest_input, "_onInputBlur");
  var _cd$ = dart.privateName(material_auto_suggest_input, "_cd");
  var _changeDetector$ = dart.privateName(material_auto_suggest_input, "_changeDetector");
  var _popupSizeDelegate$ = dart.privateName(material_auto_suggest_input, "_popupSizeDelegate");
  var _updateItemActivation = dart.privateName(material_auto_suggest_input, "_updateItemActivation");
  var _filterSuggestions = dart.privateName(material_auto_suggest_input, "_filterSuggestions");
  var _setInputText = dart.privateName(material_auto_suggest_input, "_setInputText");
  const _is_MaterialAutoSuggestInputComponent_default = Symbol('_is_MaterialAutoSuggestInputComponent_default');
  var popupId = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.popupId");
  var inputId = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.inputId");
  var activeModel = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.activeModel");
  var shouldClearInputOnSelection = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.shouldClearInputOnSelection");
  var shouldClearSelectionOnInput = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.shouldClearSelectionOnInput");
  var closeOnActivate = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.closeOnActivate");
  var hideCheckbox = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.hideCheckbox");
  var enforceSpaceConstraints = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.enforceSpaceConstraints");
  var constrainToViewport = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.constrainToViewport");
  var inputAutocomplete = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.inputAutocomplete");
  var filterSuggestions = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.filterSuggestions");
  var closeOnEnter = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.closeOnEnter");
  var popupShadowCssClass = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.popupShadowCssClass");
  var popupMatchInputWidth = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.popupMatchInputWidth");
  var slide = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.slide");
  var showClearIcon = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.showClearIcon");
  var clearIconTooltip = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.clearIconTooltip");
  var emptyPlaceholder = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.emptyPlaceholder");
  var trackByIndexFn = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.trackByIndexFn");
  var labelRenderer = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.labelRenderer");
  var labelFactory = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.labelFactory");
  var highlightOptions = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.highlightOptions");
  var loading = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.loading");
  var autoDismiss = dart.privateName(material_auto_suggest_input, "MaterialAutoSuggestInputComponent.autoDismiss");
  var RelativePosition_animationOrigin = dart.privateName(alignment, "RelativePosition.animationOrigin");
  var Alignment__cssPropertyValue = dart.privateName(alignment, "Alignment._cssPropertyValue");
  var Alignment__displayName = dart.privateName(alignment, "Alignment._displayName");
  var _CustomAlignment_cssClassY = dart.privateName(alignment, "_CustomAlignment.cssClassY");
  var _CustomAlignment_cssClassX = dart.privateName(alignment, "_CustomAlignment.cssClassX");
  var AfterCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "AfterCustomAlignment.requiresContentSizeToPosition");
  var C2;
  var RelativePosition_originY = dart.privateName(alignment, "RelativePosition.originY");
  var C3;
  var RelativePosition_originX = dart.privateName(alignment, "RelativePosition.originX");
  var C1;
  var C5;
  var C4;
  var BeforeCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "BeforeCustomAlignment.requiresContentSizeToPosition");
  var C7;
  var C6;
  var C8;
  var C0;
  material_auto_suggest_input.MaterialAutoSuggestInputComponent$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ActiveItemModelOfTL = () => (ActiveItemModelOfTL = dart.constFn(active_item.ActiveItemModel$(TL())))();
    var SingleSelectionModelOfTL = () => (SingleSelectionModelOfTL = dart.constFn(selection_model.SingleSelectionModel$(TL())))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    var SelectionChangeRecordOfTL = () => (SelectionChangeRecordOfTL = dart.constFn(selection_model.SelectionChangeRecord$(TL())))();
    var SelectionChangeRecordLOfTL = () => (SelectionChangeRecordLOfTL = dart.constFn(dart.legacy(SelectionChangeRecordOfTL())))();
    var ListOfSelectionChangeRecordLOfTL = () => (ListOfSelectionChangeRecordLOfTL = dart.constFn(core.List$(SelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTL = () => (ListLOfSelectionChangeRecordLOfTL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTLToNull = () => (ListLOfSelectionChangeRecordLOfTLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfSelectionChangeRecordLOfTL()])))();
    var SelectionOptionsOfTL = () => (SelectionOptionsOfTL = dart.constFn(selection_options.SelectionOptions$(TL())))();
    var SelectionOptionsLOfTL = () => (SelectionOptionsLOfTL = dart.constFn(dart.legacy(SelectionOptionsOfTL())))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    var ListOfOptionGroupLOfTL = () => (ListOfOptionGroupLOfTL = dart.constFn(core.List$(OptionGroupLOfTL())))();
    var ListLOfOptionGroupLOfTL = () => (ListLOfOptionGroupLOfTL = dart.constFn(dart.legacy(ListOfOptionGroupLOfTL())))();
    var ListLOfOptionGroupLOfTLToNull = () => (ListLOfOptionGroupLOfTLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfOptionGroupLOfTL()])))();
    var TLToboolL = () => (TLToboolL = dart.constFn(dart.fnType(boolL(), [TL()])))();
    const MaterialSelectBase_SelectionInputAdapter$36 = class MaterialSelectBase_SelectionInputAdapter extends material_select_base.MaterialSelectBase$(dart.legacy(T)) {};
    (MaterialSelectBase_SelectionInputAdapter$36.new = function() {
      selection_input_adapter.SelectionInputAdapter$(dart.legacy(T)).new.call(this);
      MaterialSelectBase_SelectionInputAdapter$36.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_SelectionInputAdapter$36.prototype;
    dart.applyMixin(MaterialSelectBase_SelectionInputAdapter$36, selection_input_adapter.SelectionInputAdapter$(dart.legacy(T)));
    const MaterialSelectBase_MaterialInputWrapper$36 = class MaterialSelectBase_MaterialInputWrapper extends MaterialSelectBase_SelectionInputAdapter$36 {};
    (MaterialSelectBase_MaterialInputWrapper$36.new = function() {
      input_wrapper.MaterialInputWrapper.new.call(this);
      MaterialSelectBase_MaterialInputWrapper$36.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_MaterialInputWrapper$36.prototype;
    dart.applyMixin(MaterialSelectBase_MaterialInputWrapper$36, input_wrapper.MaterialInputWrapper);
    const MaterialSelectBase_KeyboardHandlerMixin$36 = class MaterialSelectBase_KeyboardHandlerMixin extends MaterialSelectBase_MaterialInputWrapper$36 {};
    (MaterialSelectBase_KeyboardHandlerMixin$36.new = function() {
      keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
      MaterialSelectBase_KeyboardHandlerMixin$36.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_KeyboardHandlerMixin$36.prototype;
    dart.applyMixin(MaterialSelectBase_KeyboardHandlerMixin$36, keyboard_handler_mixin.KeyboardHandlerMixin);
    const MaterialSelectBase_HighlightAssistantMixin$36 = class MaterialSelectBase_HighlightAssistantMixin extends MaterialSelectBase_KeyboardHandlerMixin$36 {};
    (MaterialSelectBase_HighlightAssistantMixin$36.new = function() {
      highlight_assistant_mixin.HighlightAssistantMixin$(dart.legacy(T)).new.call(this);
      MaterialSelectBase_HighlightAssistantMixin$36.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_HighlightAssistantMixin$36.prototype;
    dart.applyMixin(MaterialSelectBase_HighlightAssistantMixin$36, highlight_assistant_mixin.HighlightAssistantMixin$(dart.legacy(T)));
    class MaterialAutoSuggestInputComponent extends MaterialSelectBase_HighlightAssistantMixin$36 {
      get popupId() {
        return this[popupId];
      }
      set popupId(value) {
        super.popupId = value;
      }
      get inputId() {
        return this[inputId];
      }
      set inputId(value) {
        super.inputId = value;
      }
      get activeModel() {
        return this[activeModel];
      }
      set activeModel(value) {
        super.activeModel = value;
      }
      get shouldClearInputOnSelection() {
        return this[shouldClearInputOnSelection];
      }
      set shouldClearInputOnSelection(value) {
        this[shouldClearInputOnSelection] = value;
      }
      get shouldClearSelectionOnInput() {
        return this[shouldClearSelectionOnInput];
      }
      set shouldClearSelectionOnInput(value) {
        this[shouldClearSelectionOnInput] = value;
      }
      get closeOnActivate() {
        return this[closeOnActivate];
      }
      set closeOnActivate(value) {
        this[closeOnActivate] = value;
      }
      get hideCheckbox() {
        return this[hideCheckbox];
      }
      set hideCheckbox(value) {
        this[hideCheckbox] = value;
      }
      get enforceSpaceConstraints() {
        return this[enforceSpaceConstraints];
      }
      set enforceSpaceConstraints(value) {
        this[enforceSpaceConstraints] = value;
      }
      get constrainToViewport() {
        return this[constrainToViewport];
      }
      set constrainToViewport(value) {
        this[constrainToViewport] = value;
      }
      get inputAutocomplete() {
        return this[inputAutocomplete];
      }
      set inputAutocomplete(value) {
        this[inputAutocomplete] = value;
      }
      get filterSuggestions() {
        return this[filterSuggestions];
      }
      set filterSuggestions(value) {
        this[filterSuggestions] = value;
      }
      get closeOnEnter() {
        return this[closeOnEnter];
      }
      set closeOnEnter(value) {
        this[closeOnEnter] = value;
      }
      get popupShadowCssClass() {
        return this[popupShadowCssClass];
      }
      set popupShadowCssClass(value) {
        this[popupShadowCssClass] = value;
      }
      get popupMatchInputWidth() {
        return this[popupMatchInputWidth];
      }
      set popupMatchInputWidth(value) {
        this[popupMatchInputWidth] = value;
      }
      get slide() {
        return this[slide];
      }
      set slide(value) {
        this[slide] = value;
      }
      get showClearIcon() {
        return this[showClearIcon];
      }
      set showClearIcon(value) {
        this[showClearIcon] = value;
      }
      get clearIconTooltip() {
        return this[clearIconTooltip];
      }
      set clearIconTooltip(value) {
        this[clearIconTooltip] = value;
      }
      get emptyPlaceholder() {
        return this[emptyPlaceholder];
      }
      set emptyPlaceholder(value) {
        this[emptyPlaceholder] = value;
      }
      get trackByIndexFn() {
        return this[trackByIndexFn];
      }
      set trackByIndexFn(value) {
        super.trackByIndexFn = value;
      }
      get labelRenderer() {
        return this[labelRenderer];
      }
      set labelRenderer(value) {
        this[labelRenderer] = value;
      }
      get labelFactory() {
        return this[labelFactory];
      }
      set labelFactory(value) {
        this[labelFactory] = value;
      }
      get highlightOptions() {
        return this[highlightOptions];
      }
      set highlightOptions(value) {
        this[highlightOptions] = value;
      }
      get loading() {
        return this[loading];
      }
      set loading(value) {
        this[loading] = value;
      }
      get autoDismiss() {
        return this[autoDismiss];
      }
      set autoDismiss(value) {
        this[autoDismiss] = value;
      }
      set accessibleItemActivation(value) {
        if (value == null) return;
        this[_accessibleItemActivation] = value;
        this.activeModel.activateFirstItemByDefault = dart.test(this.isSingleSelect) && dart.test(value) || dart.test(this.isMultiSelect) && !dart.test(value);
      }
      get accessibleItemActivation() {
        return this[_accessibleItemActivation];
      }
      get hasClearIconTooltip() {
        let t0, t0$;
        t0$ = (t0 = this.clearIconTooltip, t0 == null ? null : t0[$isNotEmpty]);
        return t0$ == null ? false : t0$;
      }
      set itemRenderer(value) {
        return super.itemRenderer = value;
      }
      get itemRenderer() {
        return super.itemRenderer;
      }
      set componentRenderer(value) {
        return super.componentRenderer = value;
      }
      set factoryRenderer(value) {
        return super.factoryRenderer = value;
      }
      static new(cd, idGenerator, changeDetector, popupSizeDelegate) {
        let t0;
        return new (material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T))).protected(cd, (t0 = idGenerator, t0 == null ? new id_generator.SequentialIdGenerator.fromUUID() : t0), changeDetector, popupSizeDelegate);
      }
      get textChanged() {
        return this[_inputChange].stream;
      }
      get errorText() {
        let t0, t0$;
        if (this.error != null) return this.error;
        if ((t0$ = (t0 = this[_cd$], t0 == null ? null : t0.control), t0$ == null ? null : t0$.errors) != null) {
          let errorMap = this[_cd$].control.errors;
          let stringValue = errorMap[$values][$firstWhere](dart.fn(v => StringL().is(v) && v[$isNotEmpty], dynamicToboolL()), {orElse: dart.fn(() => null, VoidToNull())});
          if (stringValue != null) return StringL().as(stringValue);
        }
        return null;
      }
      set selection(selection) {
        let t0, t0$;
        SelectionModelLOfTL().as(selection);
        super.selection = selection;
        this.activeModel.activateFirstItemByDefault = dart.test(this.isSingleSelect) && dart.test(this.accessibleItemActivation) || dart.test(this.isMultiSelect) && !dart.test(this.accessibleItemActivation);
        if (dart.test(this.isSingleSelect) && dart.test(selection.selectedValues[$isNotEmpty])) {
          this[_lastSelectedItem] = selection.selectedValues[$first];
          if (dart.test(this[_isInitialized])) {
            this.inputText = (t0 = this[_lastSelectedItem], this.itemRenderer(TL().as(t0)));
          }
        }
        t0$ = this[_selectionListener];
        t0$ == null ? null : t0$.cancel();
        this[_selectionListener] = selection.selectionChanges.listen(dart.fn(_ => {
          let t0;
          if (dart.test(this.shouldClearInputOnSelection)) {
            this.inputText = "";
          } else if (dart.test(this.isSingleSelect)) {
            let selectedItem = dart.test(selection.selectedValues[$isNotEmpty]) ? selection.selectedValues[$first] : null;
            if (!dart.equals(this[_lastSelectedItem], selectedItem)) {
              this[_lastSelectedItem] = selectedItem;
              this.inputText = this[_lastSelectedItem] != null ? (t0 = this[_lastSelectedItem], this.itemRenderer(TL().as(t0))) : "";
            }
          }
          this.emitSelectionChange();
        }, ListLOfSelectionChangeRecordLOfTLToNull()));
      }
      get selection() {
        return super.selection;
      }
      set optionsInput(value) {
        this[_filterScheduled] = true;
        super.optionsInput = value;
      }
      set options(options) {
        let t0;
        SelectionOptionsLOfTL().as(options);
        if (options == null) return;
        super.options = options;
        this.activeModel.items = options.optionsList;
        t0 = this[_optionsListener];
        t0 == null ? null : t0.cancel();
        this[_optionsListener] = options.stream.listen(dart.fn(_ => {
          let t0;
          this.activeModel.items = options.optionsList;
          this[_updateItemActivation]();
          t0 = this[_changeDetector$];
          t0 == null ? null : t0.markForCheck();
        }, ListLOfOptionGroupLOfTLToNull()));
        if (!dart.test(this[_filterScheduled])) {
          this[_filterSuggestions]();
        }
      }
      get options() {
        return super.options;
      }
      set limit(value) {
        let newLimit = properties.getInt(value);
        if (this[_limit] != newLimit) {
          this[_limit] = newLimit;
          this[_filterScheduled] = true;
        }
      }
      get visibleSuggestionGroups() {
        return this.options.optionGroups;
      }
      get hasOptions() {
        return this.options.optionsList[$isNotEmpty];
      }
      get showLoadingSpinner() {
        return dart.test(this.loading) && dart.test(this.options.optionsList[$isEmpty]);
      }
      get hasCustomLabelRenderer() {
        return this.labelRenderer != null || this.labelFactory != null;
      }
      isOptionDisabled(item) {
        TL().as(item);
        return !dart.test(selectable.Selectable.isSelectableIn(TL(), this.options, item, true));
      }
      isOptionHidden(item) {
        TL().as(item);
        return selectable.Selectable.isHiddenIn(TL(), this.options, item, false);
      }
      get componentRenderer() {
        return dart.test(this.highlightOptions) && super.componentRenderer == null && super.factoryRenderer == null ? this.highlightComponentRenderer : super.componentRenderer;
      }
      get factoryRenderer() {
        return dart.test(this.highlightOptions) && super.factoryRenderer == null && super.componentRenderer == null ? this.highlightFactoryRenderer : super.factoryRenderer;
      }
      get showPopupChange() {
        return this[_showPopupController].stream;
      }
      get showPopup() {
        return dart.test(this[_showPopup]) && !dart.test(this.disabled);
      }
      set showPopup(value) {
        if (!dart.equals(value, this[_showPopup])) {
          this[_showPopup] = value;
          this[_showPopupController].add(this[_showPopup]);
          this[_updateItemActivation]({popupOpening: true});
        }
        if (!dart.test(this[_showPopup]) && !dart.test(this[_isFocused])) {
          this[_onBlur].add(null);
        }
      }
      get showEmptyPlaceholder() {
        return this.emptyPlaceholder[$isNotEmpty] && dart.test(this.options.optionsList[$isEmpty]) && !dart.test(this.showLoadingSpinner);
      }
      get popupPositions() {
        return this[_popupPositions];
      }
      set popupPositions(positions) {
        let t0;
        if (dart.equals((t0 = positions, t0 == null ? null : t0[$isNotEmpty]), true)) {
          this[_popupPositions] = positions;
        } else {
          this[_popupPositions] = material_auto_suggest_input.MaterialAutoSuggestInputComponent._defaultPopupPositions;
        }
      }
      get inputText() {
        return this[_inputText];
      }
      set inputText(inputText) {
        let t0;
        if (dart.test(this[_setInputText](inputText)) && this[_callback] != null) {
          t0 = this[_inputText];
          this[_callback](t0);
        }
      }
      [_setInputText](inputText) {
        let t0;
        inputText == null ? inputText = "" : null;
        if (inputText == this[_inputText]) {
          return false;
        }
        if (dart.test(this.shouldClearSelectionOnInput) && !dart.test(this.shouldClearInputOnSelection) && this[_lastSelectedItem] != null) {
          if (inputText != (t0 = this[_lastSelectedItem], this.itemRenderer(TL().as(t0)))) {
            this.selection.deselect(TL().as(this[_lastSelectedItem]));
            this[_lastSelectedItem] = null;
          }
        }
        this[_inputText] = inputText;
        this[_inputChange].add(inputText);
        this[_updateItemActivation]({textChanging: true});
        this[_filterSuggestions]();
        return true;
      }
      handleChange(newValue) {
        this.inputText = newValue;
        this.showPopup = true;
      }
      handleClick(event) {
        this.showPopup = true;
        event.stopPropagation();
      }
      get onClear() {
        return this[_onClear].stream;
      }
      onClearIcon() {
        this[_onClear].add(null);
        this.showPopup = false;
        this.inputText = "";
      }
      get onFocus() {
        return this[_onFocus].stream;
      }
      handleFocus(event) {
        if (dart.test(this[_isFocused])) return;
        this.showPopup = true;
        this[_onFocus].add(event);
        this[_isFocused] = true;
      }
      get onBlur() {
        return this[_onBlur].stream;
      }
      get onInputBlur() {
        return this[_onInputBlur].stream;
      }
      handleBlur(event) {
        this[_onInputBlur].add(null);
        this[_isFocused] = false;
        if ((!dart.test(this.showPopup) || !dart.test(this.hasOptions)) && this[_onBlur] != null) {
          this[_onBlur].add(null);
        }
      }
      ngAfterChanges() {
        if (dart.test(this[_filterScheduled])) {
          this[_filterScheduled] = false;
          this[_filterSuggestions]();
        }
      }
      [_filterSuggestions]() {
        let t0;
        if (dart.test(this[_isDisposed]) || !dart.test(this.filterSuggestions) || !FilterableL().is(this.options)) {
          return;
        }
        t0 = this[_lastFilterFuture];
        t0 == null ? null : t0.dispose();
        this[_lastFilterFuture] = FilterableL().as(this.options).filter(this[_inputText], {limit: this[_limit]});
      }
      [_updateItemActivation](opts) {
        let textChanging = opts && 'textChanging' in opts ? opts.textChanging : false;
        let popupOpening = opts && 'popupOpening' in opts ? opts.popupOpening : false;
        if (!dart.test(this.showPopup)) return;
        if (this.selection == null) {
          this.activeModel.activate(null);
        } else if (dart.test(this.accessibleItemActivation)) {
          if (dart.test(popupOpening)) {
            let firstSelection = dart.test(this.selection.selectedValues[$isEmpty]) ? null : this.options.optionsList[$firstWhere](dart.fn(opt => this.selection.isSelected(opt), TLToboolL()), {orElse: dart.fn(() => null, VoidToNull())});
            if (firstSelection == null) {
              this.activeModel.activateFirst();
            } else {
              this.activeModel.activate(firstSelection);
            }
          } else if (dart.test(this.shouldClearInputOnSelection) && this.inputText[$isEmpty]) {
            this.activeModel.activateFirst();
          } else if (dart.test(textChanging) && dart.test(this.isMultiSelect)) {
            this.activeModel.activate(null);
          }
        } else if (dart.test(popupOpening)) {
          if (dart.test(this.isSingleSelect)) {
            this.activeModel.activate(null);
          } else {
            this.activeModel.activateFirst();
          }
        }
      }
      handleEnterKey(event) {
        if (!dart.test(this.showPopup)) {
          this.showPopup = true;
        } else {
          let item = this.activeModel.activeItem;
          if (item != null) {
            if (!dart.test(this.isOptionDisabled(item))) {
              this.onListItemSelected(item);
              if (dart.test(this.isMultiSelect)) {
                this.showPopup = false;
              }
            }
          } else if (dart.test(this.closeOnEnter)) {
            this.showPopup = false;
          }
        }
      }
      handleSpaceKey(event) {
        if (!dart.test(this.showPopup) || !dart.test(this.isMultiSelect)) return;
        let item = this.activeModel.activeItem;
        if (item == null || dart.test(this.isOptionDisabled(item))) return;
        this.onListItemSelected(item);
        event.preventDefault();
      }
      handleBackspaceKey(event) {
        if (this.activeModel.activeItem != null) {
          this.activeModel.activate(null);
        }
      }
      get deselectOnActivate() {
        return this.isMultiSelect;
      }
      onListItemSelected(item) {
        if (dart.test(this.isSingleSelect)) {
          this.showPopup = false;
        }
        if (!dart.test(this.selection.isSelected(TL().as(item)))) {
          if (!dart.test(this.isOptionDisabled(TL().as(item)))) {
            this.selection.select(TL().as(item));
          }
        } else if (dart.test(this.deselectOnActivate)) {
          this.selection.deselect(TL().as(item));
        }
      }
      handleUpKey(event) {
        if (dart.test(this.showPopup)) {
          event.preventDefault();
          event.stopPropagation();
          if (!dart.test(this[_isFocused])) this.focus();
          this.activeModel.activatePrevious();
        }
      }
      handleDownKey(event) {
        if (dart.test(this.showPopup)) {
          event.preventDefault();
          event.stopPropagation();
          if (!dart.test(this[_isFocused])) this.focus();
          this.activeModel.activateNext();
        }
      }
      handlePageUp(event) {
        if (dart.test(this.showPopup)) {
          event.preventDefault();
          event.stopPropagation();
          if (!dart.test(this[_isFocused])) this.focus();
          this.activeModel.activateFirst();
        }
      }
      handlePageDown(event) {
        if (dart.test(this.showPopup)) {
          event.preventDefault();
          event.stopPropagation();
          if (!dart.test(this[_isFocused])) this.focus();
          this.activeModel.activateLast();
        }
      }
      call(_) {
        return null;
      }
      writeValue(newValue) {
        this[_setInputText](StringL().as(newValue));
      }
      registerOnChange(callback) {
        this[_callback] = StringLToLStringL().as(callback);
      }
      registerOnTouched(_) {
      }
      set input(input) {
        this[_input] = input;
        if (dart.test(this[_focusPending])) {
          this[_focusPending] = false;
          this[_input].focus();
        }
      }
      focus() {
        if (this[_input] == null) {
          this[_focusPending] = true;
        } else {
          this[_input].focus();
        }
      }
      ngOnInit() {
        this[_isInitialized] = true;
        async.scheduleMicrotask(dart.fn(() => {
          let t0;
          if (this.inputText[$isEmpty] && this[_lastSelectedItem] != null) {
            this[_setInputText]((t0 = this[_lastSelectedItem], this.itemRenderer(TL().as(t0))));
          }
        }, VoidToNull()));
      }
      ngOnDestroy() {
        let t0, t0$, t0$0;
        this[_isDisposed] = true;
        t0 = this[_selectionListener];
        t0 == null ? null : t0.cancel();
        t0$ = this[_optionsListener];
        t0$ == null ? null : t0$.cancel();
        t0$0 = this[_lastFilterFuture];
        t0$0 == null ? null : t0$0.dispose();
      }
      close() {
        this.showPopup = false;
      }
      open() {
        this.showPopup = true;
      }
      toggle() {
        this.showPopup = !dart.test(this.showPopup);
      }
      getMinHeight(positionY, viewportHeight) {
        let t0;
        t0 = this[_popupSizeDelegate$];
        return t0 == null ? null : t0.getMinHeight(positionY, viewportHeight);
      }
      getMinWidth(positionX, viewportWidth) {
        let t0;
        t0 = this[_popupSizeDelegate$];
        return t0 == null ? null : t0.getMinWidth(positionX, viewportWidth);
      }
      getMaxHeight(positionY, viewportHeight) {
        if (this[_popupSizeDelegate$] != null) {
          return this[_popupSizeDelegate$].getMaxHeight(positionY, viewportHeight);
        } else {
          return 400;
        }
      }
      getMaxWidth(positionX, viewportWidth) {
        if (this[_popupSizeDelegate$] != null) {
          return this[_popupSizeDelegate$].getMaxWidth(positionX, viewportWidth);
        } else {
          return 448;
        }
      }
      onDisabledChanged(isDisabled) {
        this.disabled = isDisabled;
      }
    }
    (MaterialAutoSuggestInputComponent.protected = function(_cd, idGenerator, _changeDetector, _popupSizeDelegate = null) {
      this[_isInitialized] = false;
      this[shouldClearInputOnSelection] = false;
      this[shouldClearSelectionOnInput] = true;
      this[closeOnActivate] = true;
      this[hideCheckbox] = false;
      this[enforceSpaceConstraints] = true;
      this[constrainToViewport] = false;
      this[_showPopup] = false;
      this[_focusPending] = false;
      this[_input] = null;
      this[_callback] = null;
      this[_inputText] = "";
      this[_inputChange] = StreamControllerOfStringL().broadcast({sync: true});
      this[_lastSelectedItem] = null;
      this[_lastFilterFuture] = null;
      this[_filterScheduled] = false;
      this[_isDisposed] = false;
      this[_accessibleItemActivation] = true;
      this[inputAutocomplete] = null;
      this[_limit] = 10;
      this[filterSuggestions] = true;
      this[closeOnEnter] = false;
      this[popupShadowCssClass] = "";
      this[popupMatchInputWidth] = false;
      this[_popupPositions] = material_auto_suggest_input.MaterialAutoSuggestInputComponent._defaultPopupPositions;
      this[_selectionListener] = null;
      this[_optionsListener] = null;
      this[slide] = null;
      this[showClearIcon] = false;
      this[clearIconTooltip] = null;
      this[emptyPlaceholder] = "";
      this[trackByIndexFn] = template_support.indexIdentityFn;
      this[labelRenderer] = null;
      this[labelFactory] = null;
      this[highlightOptions] = true;
      this[_showPopupController] = StreamControllerOfboolL().broadcast({sync: true});
      this[loading] = false;
      this[_onClear] = StreamControllerOfvoid().broadcast({sync: true});
      this[_isFocused] = false;
      this[_onFocus] = StreamControllerOfFocusEventL().broadcast({sync: true});
      this[_onBlur] = StreamControllerOfvoid().broadcast({sync: true});
      this[_onInputBlur] = StreamControllerOfvoid().broadcast({sync: true});
      this[autoDismiss] = true;
      this[_cd$] = _cd;
      this[_changeDetector$] = _changeDetector;
      this[_popupSizeDelegate$] = _popupSizeDelegate;
      this[activeModel] = new (ActiveItemModelOfTL()).new(idGenerator, {loop: true});
      this[popupId] = idGenerator.nextId();
      this[inputId] = idGenerator.nextId();
      MaterialAutoSuggestInputComponent.__proto__.new.call(this);
      if (this[_cd$] != null) {
        this[_cd$].valueAccessor = this;
      }
      this.selection = SingleSelectionModelOfTL().new();
    }).prototype = MaterialAutoSuggestInputComponent.prototype;
    dart.addTypeTests(MaterialAutoSuggestInputComponent);
    MaterialAutoSuggestInputComponent.prototype[_is_MaterialAutoSuggestInputComponent_default] = true;
    dart.addTypeCaches(MaterialAutoSuggestInputComponent);
    MaterialAutoSuggestInputComponent[dart.implements] = () => [lifecycle_hooks.AfterChanges, control_value_accessor.ControlValueAccessor$(dart.legacy(core.Object)), focus_interface.Focusable, lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy, has_renderer.HasRenderer$(dart.legacy(T)), has_renderer.HasComponentRenderer$(dart.legacy(has_renderer.RendersValue), dart.legacy(core.Object)), has_factory.HasFactoryRenderer$(dart.legacy(has_renderer.RendersValue), dart.legacy(T)), material_dropdown_base.DropdownHandle, popup_size_provider.PopupSizeProvider];
    dart.setMethodSignature(MaterialAutoSuggestInputComponent, () => ({
      __proto__: dart.getMethods(MaterialAutoSuggestInputComponent.__proto__),
      isOptionDisabled: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      isOptionHidden: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [_setInputText]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
      handleChange: dart.fnType(dart.void, [dart.legacy(core.String)]),
      handleClick: dart.fnType(dart.void, [dart.legacy(html.Event)]),
      onClearIcon: dart.fnType(dart.void, []),
      handleFocus: dart.fnType(dart.void, [dart.legacy(html.FocusEvent)]),
      handleBlur: dart.fnType(dart.void, [dart.legacy(html.FocusEvent)]),
      ngAfterChanges: dart.fnType(dart.void, []),
      [_filterSuggestions]: dart.fnType(dart.void, []),
      [_updateItemActivation]: dart.fnType(dart.void, [], {popupOpening: dart.legacy(core.bool), textChanging: dart.legacy(core.bool)}, {}),
      onListItemSelected: dart.fnType(dart.void, [dart.dynamic]),
      call: dart.fnType(dart.dynamic, [dart.dynamic]),
      writeValue: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      registerOnChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.Object)], {rawValue: dart.legacy(core.String)}, {}))]),
      registerOnTouched: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, []))]),
      focus: dart.fnType(dart.void, []),
      ngOnInit: dart.fnType(dart.void, []),
      ngOnDestroy: dart.fnType(dart.void, []),
      close: dart.fnType(dart.void, []),
      open: dart.fnType(dart.void, []),
      toggle: dart.fnType(dart.void, []),
      getMinHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
      getMinWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
      getMaxHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
      getMaxWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
      onDisabledChanged: dart.fnType(dart.void, [dart.legacy(core.bool)])
    }));
    dart.setGetterSignature(MaterialAutoSuggestInputComponent, () => ({
      __proto__: dart.getGetters(MaterialAutoSuggestInputComponent.__proto__),
      accessibleItemActivation: dart.legacy(core.bool),
      hasClearIconTooltip: dart.legacy(core.bool),
      textChanged: dart.legacy(async.Stream$(dart.legacy(core.String))),
      errorText: dart.legacy(core.String),
      visibleSuggestionGroups: dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup))),
      hasOptions: dart.legacy(core.bool),
      showLoadingSpinner: dart.legacy(core.bool),
      hasCustomLabelRenderer: dart.legacy(core.bool),
      componentRenderer: dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic])),
      factoryRenderer: dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(T)])),
      showPopupChange: dart.legacy(async.Stream$(dart.legacy(core.bool))),
      showPopup: dart.legacy(core.bool),
      showEmptyPlaceholder: dart.legacy(core.bool),
      popupPositions: dart.legacy(core.List$(dart.legacy(alignment.RelativePosition))),
      onClear: dart.legacy(async.Stream$(dart.void)),
      onFocus: dart.legacy(async.Stream$(dart.legacy(html.FocusEvent))),
      onBlur: dart.legacy(async.Stream$(dart.void)),
      onInputBlur: dart.legacy(async.Stream$(dart.void)),
      deselectOnActivate: dart.legacy(core.bool)
    }));
    dart.setSetterSignature(MaterialAutoSuggestInputComponent, () => ({
      __proto__: dart.getSetters(MaterialAutoSuggestInputComponent.__proto__),
      accessibleItemActivation: dart.legacy(core.bool),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      componentRenderer: dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic])),
      factoryRenderer: dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(T)])),
      selection: dart.legacy(core.Object),
      options: dart.legacy(core.Object),
      limit: dart.dynamic,
      showPopup: dart.legacy(core.bool),
      popupPositions: dart.legacy(core.List$(dart.legacy(alignment.RelativePosition))),
      input: dart.legacy(material_input.MaterialInputComponent)
    }));
    dart.setLibraryUri(MaterialAutoSuggestInputComponent, L0);
    dart.setFieldSignature(MaterialAutoSuggestInputComponent, () => ({
      __proto__: dart.getFields(MaterialAutoSuggestInputComponent.__proto__),
      popupId: dart.finalFieldType(dart.legacy(core.String)),
      inputId: dart.finalFieldType(dart.legacy(core.String)),
      [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
      activeModel: dart.finalFieldType(dart.legacy(active_item.ActiveItemModel$(dart.legacy(T)))),
      [_isInitialized]: dart.fieldType(dart.legacy(core.bool)),
      shouldClearInputOnSelection: dart.fieldType(dart.legacy(core.bool)),
      shouldClearSelectionOnInput: dart.fieldType(dart.legacy(core.bool)),
      closeOnActivate: dart.fieldType(dart.legacy(core.bool)),
      hideCheckbox: dart.fieldType(dart.legacy(core.bool)),
      enforceSpaceConstraints: dart.fieldType(dart.legacy(core.bool)),
      constrainToViewport: dart.fieldType(dart.legacy(core.bool)),
      [_showPopup]: dart.fieldType(dart.legacy(core.bool)),
      [_focusPending]: dart.fieldType(dart.legacy(core.bool)),
      [_input]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
      [_callback]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]))),
      [_inputText]: dart.fieldType(dart.legacy(core.String)),
      [_inputChange]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.String)))),
      [_lastSelectedItem]: dart.fieldType(dart.legacy(core.Object)),
      [_lastFilterFuture]: dart.fieldType(dart.legacy(disposable_future.DisposableFuture)),
      [_filterScheduled]: dart.fieldType(dart.legacy(core.bool)),
      [_isDisposed]: dart.fieldType(dart.legacy(core.bool)),
      [_accessibleItemActivation]: dart.fieldType(dart.legacy(core.bool)),
      inputAutocomplete: dart.fieldType(dart.legacy(core.String)),
      [_limit]: dart.fieldType(dart.legacy(core.int)),
      filterSuggestions: dart.fieldType(dart.legacy(core.bool)),
      closeOnEnter: dart.fieldType(dart.legacy(core.bool)),
      popupShadowCssClass: dart.fieldType(dart.legacy(core.String)),
      popupMatchInputWidth: dart.fieldType(dart.legacy(core.bool)),
      [_popupPositions]: dart.fieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition)))),
      [_selectionListener]: dart.fieldType(dart.legacy(async.StreamSubscription)),
      [_optionsListener]: dart.fieldType(dart.legacy(async.StreamSubscription)),
      slide: dart.fieldType(dart.legacy(core.String)),
      showClearIcon: dart.fieldType(dart.legacy(core.bool)),
      clearIconTooltip: dart.fieldType(dart.legacy(core.String)),
      emptyPlaceholder: dart.fieldType(dart.legacy(core.String)),
      trackByIndexFn: dart.finalFieldType(dart.legacy(core.Function)),
      [_popupSizeDelegate$]: dart.finalFieldType(dart.legacy(popup_size_provider.PopupSizeProvider)),
      [_cd$]: dart.fieldType(dart.legacy(ng_control.NgControl)),
      labelRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic]))),
      labelFactory: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.dynamic]))),
      highlightOptions: dart.fieldType(dart.legacy(core.bool)),
      [_showPopupController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
      loading: dart.fieldType(dart.legacy(core.bool)),
      [_onClear]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
      [_isFocused]: dart.fieldType(dart.legacy(core.bool)),
      [_onFocus]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.FocusEvent)))),
      [_onBlur]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
      [_onInputBlur]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
      autoDismiss: dart.fieldType(dart.legacy(core.bool))
    }));
    return MaterialAutoSuggestInputComponent;
  });
  material_auto_suggest_input.MaterialAutoSuggestInputComponent = material_auto_suggest_input.MaterialAutoSuggestInputComponent$();
  dart.defineLazy(material_auto_suggest_input.MaterialAutoSuggestInputComponent, {
    /*material_auto_suggest_input.MaterialAutoSuggestInputComponent._defaultPopupPositions*/get _defaultPopupPositions() {
      return C0 || CT.C0;
    }
  }, true);
  dart.addTypeTests(material_auto_suggest_input.MaterialAutoSuggestInputComponent, _is_MaterialAutoSuggestInputComponent_default);
  dart.trackLibraries("packages/angular_components/material_input/material_auto_suggest_input", {
    "package:angular_components/material_input/material_auto_suggest_input.dart": material_auto_suggest_input
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_auto_suggest_input.dart"],"names":[],"mappings":"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","file":"material_auto_suggest_input.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__material_auto_suggest_input: material_auto_suggest_input
  };
}));

//# sourceMappingURL=material_auto_suggest_input.unsound.ddc.js.map
