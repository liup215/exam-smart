define(['dart_sdk', 'packages/angular_components/model/ui/template_support', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/material_select/material_select_base', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/mixins/selection_input_adapter', 'packages/angular_components/mixins/button_wrapper', 'packages/angular_components/mixins/track_layout_changes', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/material_select/shift_click_selection', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/application_tokens', 'packages/angular_components/material_select/dropdown_button'], (function load__packages__angular_components__material_select__material_dropdown_select(dart_sdk, packages__angular_components__model__ui__template_support, packages__angular_components__model__a11y__active_item, packages__angular_components__utils__angular__css__css, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__selection__selection_options, packages__angular_components__model__selection__selection_model, packages__angular_components__src__model__selection__interfaces__selectable, packages__angular_components__material_select__material_select_base, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__mixins__selection_input_adapter, packages__angular_components__mixins__button_wrapper, packages__angular_components__mixins__track_layout_changes, packages__angular_components__model__a11y__keyboard_handler_mixin, packages__angular_components__material_select__shift_click_selection, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__bootstrap__modules, packages__angular__src__core__application_tokens, packages__angular_components__material_select__dropdown_button) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const template_support = packages__angular_components__model__ui__template_support.model__ui__template_support;
  const active_item = packages__angular_components__model__a11y__active_item.model__a11y__active_item;
  const css = packages__angular_components__utils__angular__css__css.utils__angular__css__css;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const selectable = packages__angular_components__src__model__selection__interfaces__selectable.src__model__selection__interfaces__selectable;
  const material_select_base = packages__angular_components__material_select__material_select_base.material_select__material_select_base;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const selection_input_adapter = packages__angular_components__mixins__selection_input_adapter.mixins__selection_input_adapter;
  const button_wrapper = packages__angular_components__mixins__button_wrapper.mixins__button_wrapper;
  const track_layout_changes = packages__angular_components__mixins__track_layout_changes.mixins__track_layout_changes;
  const keyboard_handler_mixin = packages__angular_components__model__a11y__keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const shift_click_selection = packages__angular_components__material_select__shift_click_selection.material_select__shift_click_selection;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  var material_dropdown_select = Object.create(dart.library);
  var $classes = dartx.classes;
  var $isNotEmpty = dartx.isNotEmpty;
  var $last = dartx.last;
  var $first = dartx.first;
  var $insert = dartx.insert;
  var $isEmpty = dartx.isEmpty;
  var $single = dartx.single;
  var $_get = dartx._get;
  var $toLowerCase = dartx.toLowerCase;
  var $_set = dartx._set;
  var $startsWith = dartx.startsWith;
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var StreamControllerOfFocusEventL = () => (StreamControllerOfFocusEventL = dart.constFn(async.StreamController$(FocusEventL())))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var LinkedMapOfdynamic$StringL = () => (LinkedMapOfdynamic$StringL = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, StringL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var dynamicAndStringLToboolL = () => (dynamicAndStringLToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic, StringL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var IdentityMapOfintL$StringL = () => (IdentityMapOfintL$StringL = dart.constFn(_js_helper.IdentityMap$(intL(), StringL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_dropdown_select.dart";
  var _optionsListener = dart.privateName(material_dropdown_select, "_optionsListener");
  var _selectionListener = dart.privateName(material_dropdown_select, "_selectionListener");
  var _deselectOnActivate = dart.privateName(material_dropdown_select, "_deselectOnActivate");
  var _ariaActiveDescendant = dart.privateName(material_dropdown_select, "_ariaActiveDescendant");
  var _disabledChanged = dart.privateName(material_dropdown_select, "_disabledChanged");
  var _focus = dart.privateName(material_dropdown_select, "_focus");
  var _blur = dart.privateName(material_dropdown_select, "_blur");
  var _popupSizeDelegate$ = dart.privateName(material_dropdown_select, "_popupSizeDelegate");
  var _changeDetector$ = dart.privateName(material_dropdown_select, "_changeDetector");
  var _setInitialActiveItem = dart.privateName(material_dropdown_select, "_setInitialActiveItem");
  var _updateActiveModel = dart.privateName(material_dropdown_select, "_updateActiveModel");
  var _handleNavigationKey = dart.privateName(material_dropdown_select, "_handleNavigationKey");
  var _handleKeyboardTrigger = dart.privateName(material_dropdown_select, "_handleKeyboardTrigger");
  var _enteredKeys = dart.privateName(material_dropdown_select, "_enteredKeys");
  var _charCodeToString = dart.privateName(material_dropdown_select, "_charCodeToString");
  const _is_ActivateItemOnKeyPressMixin_default = Symbol('_is_ActivateItemOnKeyPressMixin_default');
  material_dropdown_select.ActivateItemOnKeyPressMixin$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ActivateItemOnKeyPressMixin extends core.Object {
      activateOnKeyPress(activeModel, charCode, options, itemRenderer, selection) {
        if (itemRenderer == null || options == null) return;
        let key = this[_charCodeToString](charCode);
        let optionsList = options.optionsList;
        let searchMap = new (LinkedMapOfdynamic$StringL()).new();
        let startsWith = dart.fn((option, keys) => {
          if (option == null) return false;
          let searchString = searchMap[$_get](option);
          if (searchString == null) {
            searchString = itemRenderer(TL().as(option))[$toLowerCase]();
            searchMap[$_set](option, searchString);
          }
          return searchString[$startsWith](keys);
        }, dynamicAndStringLToboolL());
        let maybeSelectOption = dart.fn((option, keys) => {
          let t0;
          if (dart.test(selectable.Selectable.isSelectableIn(dart.dynamic, options, option)) && dart.test(startsWith(option, keys))) {
            activeModel.activate(option);
            t0 = selection;
            t0 == null ? null : t0.select(option);
            this[_enteredKeys] = keys;
            return true;
          }
          return false;
        }, dynamicAndStringLToboolL());
        if (this[_enteredKeys][$isNotEmpty]) {
          let keys = dart.notNull(this[_enteredKeys]) + dart.notNull(key);
          for (let option of optionsList) {
            if (dart.test(maybeSelectOption(option, keys))) return;
          }
        }
        if (dart.test(startsWith(activeModel.activeItem, key))) {
          if (dart.test(maybeSelectOption(activeModel.peekNext, key))) return;
        }
        for (let option of optionsList) {
          if (dart.test(maybeSelectOption(option, key))) return;
        }
        this.resetEnteredKeys();
      }
      resetEnteredKeys() {
        this[_enteredKeys] = "";
      }
      [_charCodeToString](charCode) {
        let key = material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap[$_get](charCode);
        if (key == null) {
          key = core.String.fromCharCode(charCode)[$toLowerCase]();
          material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap[$_set](charCode, key);
        }
        return key;
      }
    }
    (ActivateItemOnKeyPressMixin.new = function() {
      this[_enteredKeys] = "";
      ;
    }).prototype = ActivateItemOnKeyPressMixin.prototype;
    dart.addTypeTests(ActivateItemOnKeyPressMixin);
    ActivateItemOnKeyPressMixin.prototype[_is_ActivateItemOnKeyPressMixin_default] = true;
    dart.addTypeCaches(ActivateItemOnKeyPressMixin);
    dart.setMethodSignature(ActivateItemOnKeyPressMixin, () => ({
      __proto__: dart.getMethods(ActivateItemOnKeyPressMixin.__proto__),
      activateOnKeyPress: dart.fnType(dart.void, [dart.legacy(active_item.ActiveItemModel), dart.legacy(core.int), dart.legacy(selection_options.SelectionOptions), dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])), dart.legacy(selection_model.SelectionModel)]),
      resetEnteredKeys: dart.fnType(dart.void, []),
      [_charCodeToString]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)])
    }));
    dart.setLibraryUri(ActivateItemOnKeyPressMixin, L0);
    dart.setFieldSignature(ActivateItemOnKeyPressMixin, () => ({
      __proto__: dart.getFields(ActivateItemOnKeyPressMixin.__proto__),
      [_enteredKeys]: dart.fieldType(dart.legacy(core.String))
    }));
    return ActivateItemOnKeyPressMixin;
  });
  material_dropdown_select.ActivateItemOnKeyPressMixin = material_dropdown_select.ActivateItemOnKeyPressMixin$();
  dart.defineLazy(material_dropdown_select.ActivateItemOnKeyPressMixin, {
    /*material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap*/get _charCodeMap() {
      return new (IdentityMapOfintL$StringL()).new();
    }
  }, true);
  dart.addTypeTests(material_dropdown_select.ActivateItemOnKeyPressMixin, _is_ActivateItemOnKeyPressMixin_default);
  const _is_MaterialDropdownSelectComponent_default = Symbol('_is_MaterialDropdownSelectComponent_default');
  var trackByIndexFn = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.trackByIndexFn");
  var activeModel = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.activeModel");
  var listId = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.listId");
  var buttonAriaRole$ = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.buttonAriaRole");
  var buttonAriaLabelledBy = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.buttonAriaLabelledBy");
  var buttonAriaDescribedBy = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.buttonAriaDescribedBy");
  var deselectLabel = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.deselectLabel");
  var error = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.error");
  var showButtonBorder = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.showButtonBorder");
  var labelFactory = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.labelFactory");
  var activateFirstOption = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.activateFirstOption");
  var popupClassName = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.popupClassName");
  var dropdownButton = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.dropdownButton");
  var listAutoFocus = dart.privateName(material_dropdown_select, "MaterialDropdownSelectComponent.listAutoFocus");
  material_dropdown_select.MaterialDropdownSelectComponent$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SelectionOptionsOfTL = () => (SelectionOptionsOfTL = dart.constFn(selection_options.SelectionOptions$(TL())))();
    var SelectionOptionsLOfTL = () => (SelectionOptionsLOfTL = dart.constFn(dart.legacy(SelectionOptionsOfTL())))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    var ListOfOptionGroupLOfTL = () => (ListOfOptionGroupLOfTL = dart.constFn(core.List$(OptionGroupLOfTL())))();
    var ListLOfOptionGroupLOfTL = () => (ListLOfOptionGroupLOfTL = dart.constFn(dart.legacy(ListOfOptionGroupLOfTL())))();
    var ListLOfOptionGroupLOfTLToNull = () => (ListLOfOptionGroupLOfTLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfOptionGroupLOfTL()])))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    var SelectionChangeRecordOfTL = () => (SelectionChangeRecordOfTL = dart.constFn(selection_model.SelectionChangeRecord$(TL())))();
    var SelectionChangeRecordLOfTL = () => (SelectionChangeRecordLOfTL = dart.constFn(dart.legacy(SelectionChangeRecordOfTL())))();
    var ListOfSelectionChangeRecordLOfTL = () => (ListOfSelectionChangeRecordLOfTL = dart.constFn(core.List$(SelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTL = () => (ListLOfSelectionChangeRecordLOfTL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTLToNull = () => (ListLOfSelectionChangeRecordLOfTLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfSelectionChangeRecordLOfTL()])))();
    const MaterialSelectBase_MaterialDropdownBase$36 = class MaterialSelectBase_MaterialDropdownBase extends material_select_base.MaterialSelectBase$(dart.legacy(T)) {};
    (MaterialSelectBase_MaterialDropdownBase$36.new = function() {
      material_dropdown_base.MaterialDropdownBase.new.call(this);
      MaterialSelectBase_MaterialDropdownBase$36.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_MaterialDropdownBase$36.prototype;
    dart.applyMixin(MaterialSelectBase_MaterialDropdownBase$36, material_dropdown_base.MaterialDropdownBase);
    const MaterialSelectBase_SelectionInputAdapter$36 = class MaterialSelectBase_SelectionInputAdapter extends MaterialSelectBase_MaterialDropdownBase$36 {};
    (MaterialSelectBase_SelectionInputAdapter$36.new = function() {
      selection_input_adapter.SelectionInputAdapter$(dart.legacy(T)).new.call(this);
      MaterialSelectBase_SelectionInputAdapter$36.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_SelectionInputAdapter$36.prototype;
    dart.applyMixin(MaterialSelectBase_SelectionInputAdapter$36, selection_input_adapter.SelectionInputAdapter$(dart.legacy(T)));
    const MaterialSelectBase_MaterialButtonWrapper$36 = class MaterialSelectBase_MaterialButtonWrapper extends MaterialSelectBase_SelectionInputAdapter$36 {};
    (MaterialSelectBase_MaterialButtonWrapper$36.new = function() {
      button_wrapper.MaterialButtonWrapper.new.call(this);
      MaterialSelectBase_MaterialButtonWrapper$36.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_MaterialButtonWrapper$36.prototype;
    dart.applyMixin(MaterialSelectBase_MaterialButtonWrapper$36, button_wrapper.MaterialButtonWrapper);
    const MaterialSelectBase_TrackLayoutChangesMixin$36 = class MaterialSelectBase_TrackLayoutChangesMixin extends MaterialSelectBase_MaterialButtonWrapper$36 {};
    (MaterialSelectBase_TrackLayoutChangesMixin$36.new = function() {
      track_layout_changes.TrackLayoutChangesMixin.new.call(this);
      MaterialSelectBase_TrackLayoutChangesMixin$36.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_TrackLayoutChangesMixin$36.prototype;
    dart.applyMixin(MaterialSelectBase_TrackLayoutChangesMixin$36, track_layout_changes.TrackLayoutChangesMixin);
    const MaterialSelectBase_KeyboardHandlerMixin$36 = class MaterialSelectBase_KeyboardHandlerMixin extends MaterialSelectBase_TrackLayoutChangesMixin$36 {};
    (MaterialSelectBase_KeyboardHandlerMixin$36.new = function() {
      keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
      MaterialSelectBase_KeyboardHandlerMixin$36.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_KeyboardHandlerMixin$36.prototype;
    dart.applyMixin(MaterialSelectBase_KeyboardHandlerMixin$36, keyboard_handler_mixin.KeyboardHandlerMixin);
    const MaterialSelectBase_ActivateItemOnKeyPressMixin$36 = class MaterialSelectBase_ActivateItemOnKeyPressMixin extends MaterialSelectBase_KeyboardHandlerMixin$36 {};
    (MaterialSelectBase_ActivateItemOnKeyPressMixin$36.new = function() {
      material_dropdown_select.ActivateItemOnKeyPressMixin$(dart.legacy(T)).new.call(this);
      MaterialSelectBase_ActivateItemOnKeyPressMixin$36.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_ActivateItemOnKeyPressMixin$36.prototype;
    dart.applyMixin(MaterialSelectBase_ActivateItemOnKeyPressMixin$36, material_dropdown_select.ActivateItemOnKeyPressMixin$(dart.legacy(T)));
    const MaterialSelectBase_ShiftClickSelectionMixin$36 = class MaterialSelectBase_ShiftClickSelectionMixin extends MaterialSelectBase_ActivateItemOnKeyPressMixin$36 {};
    (MaterialSelectBase_ShiftClickSelectionMixin$36.new = function() {
      shift_click_selection.ShiftClickSelectionMixin$(dart.legacy(T)).new.call(this);
      MaterialSelectBase_ShiftClickSelectionMixin$36.__proto__.new.call(this);
    }).prototype = MaterialSelectBase_ShiftClickSelectionMixin$36.prototype;
    dart.applyMixin(MaterialSelectBase_ShiftClickSelectionMixin$36, shift_click_selection.ShiftClickSelectionMixin$(dart.legacy(T)));
    class MaterialDropdownSelectComponent extends MaterialSelectBase_ShiftClickSelectionMixin$36 {
      get trackByIndexFn() {
        return this[trackByIndexFn];
      }
      set trackByIndexFn(value) {
        super.trackByIndexFn = value;
      }
      get activeModel() {
        return this[activeModel];
      }
      set activeModel(value) {
        super.activeModel = value;
      }
      get listId() {
        return this[listId];
      }
      set listId(value) {
        super.listId = value;
      }
      get buttonAriaRole() {
        return this[buttonAriaRole$];
      }
      set buttonAriaRole(value) {
        super.buttonAriaRole = value;
      }
      get buttonAriaLabelledBy() {
        return this[buttonAriaLabelledBy];
      }
      set buttonAriaLabelledBy(value) {
        this[buttonAriaLabelledBy] = value;
      }
      get buttonAriaDescribedBy() {
        return this[buttonAriaDescribedBy];
      }
      set buttonAriaDescribedBy(value) {
        this[buttonAriaDescribedBy] = value;
      }
      get deselectLabel() {
        return this[deselectLabel];
      }
      set deselectLabel(value) {
        this[deselectLabel] = value;
      }
      get error() {
        return this[error];
      }
      set error(value) {
        this[error] = value;
      }
      get showButtonBorder() {
        return this[showButtonBorder];
      }
      set showButtonBorder(value) {
        this[showButtonBorder] = value;
      }
      get labelFactory() {
        return this[labelFactory];
      }
      set labelFactory(value) {
        this[labelFactory] = value;
      }
      get activateFirstOption() {
        return this[activateFirstOption];
      }
      set activateFirstOption(value) {
        this[activateFirstOption] = value;
      }
      get popupClassName() {
        return this[popupClassName];
      }
      set popupClassName(value) {
        super.popupClassName = value;
      }
      get dropdownButton() {
        return this[dropdownButton];
      }
      set dropdownButton(value) {
        this[dropdownButton] = value;
      }
      get listAutoFocus() {
        return this[listAutoFocus];
      }
      set listAutoFocus(value) {
        this[listAutoFocus] = value;
      }
      set deselectOnActivate(value) {
        this[_deselectOnActivate] = value;
      }
      get deselectOnActivate() {
        return dart.test(this.isMultiSelect) || dart.test(this[_deselectOnActivate]);
      }
      get hasCustomLabelRenderer() {
        return this.labelFactory != null;
      }
      set disabled(value) {
        super.disabled = value;
        this[_disabledChanged] = true;
      }
      get disabled() {
        return super.disabled;
      }
      get ariaActiveDescendant() {
        if (!dart.test(this.visible)) return "";
        if (this[_ariaActiveDescendant] != null) return this[_ariaActiveDescendant];
        if (this.options != null) {
          return this.activeModel.activeId;
        }
        return "";
      }
      set ariaActiveDescendant(id) {
        this[_ariaActiveDescendant] = id;
      }
      set componentRenderer(value) {
        super.componentRenderer = value;
      }
      get componentRenderer() {
        return super.componentRenderer;
      }
      set factoryRenderer(value) {
        super.factoryRenderer = value;
      }
      get factoryRenderer() {
        return super.factoryRenderer;
      }
      set itemRenderer(value) {
        super.itemRenderer = value;
      }
      get itemRenderer() {
        return super.itemRenderer;
      }
      set width(value) {
        super.width = value;
      }
      get width() {
        return super.width;
      }
      set visible(value) {
        this[_changeDetector$].markForCheck();
        super.visible = value;
        this.resetEnteredKeys();
        if (dart.test(value)) {
          this[_setInitialActiveItem]({allowDeactivate: false});
        }
      }
      get visible() {
        return super.visible;
      }
      set optionsInput(value) {
        super.optionsInput = value;
      }
      set options(newOptions) {
        let t0, t0$, t0$0;
        SelectionOptionsLOfTL().as(newOptions);
        this[_changeDetector$].markForCheck();
        super.options = newOptions;
        this[_updateActiveModel]();
        this[_setInitialActiveItem]();
        t0 = this[_optionsListener];
        t0 == null ? null : t0.cancel();
        this[_optionsListener] = (t0$0 = (t0$ = this.options, t0$ == null ? null : t0$.stream), t0$0 == null ? null : t0$0.listen(dart.fn(_ => {
          this[_changeDetector$].markForCheck();
          this[_updateActiveModel]();
          this[_setInitialActiveItem]();
        }, ListLOfOptionGroupLOfTLToNull())));
      }
      get options() {
        return super.options;
      }
      get focus() {
        return this[_focus].stream;
      }
      get blur() {
        return this[_blur].stream;
      }
      onFocus(event) {
        this[_focus].add(event);
      }
      onBlur(event) {
        this[_blur].add(event);
      }
      set selection(newSelection) {
        let t0, t0$, t0$0;
        SelectionModelLOfTL().as(newSelection);
        this[_changeDetector$].markForCheck();
        super.selection = newSelection;
        this[_setInitialActiveItem]();
        t0 = this[_selectionListener];
        t0 == null ? null : t0.cancel();
        this[_selectionListener] = (t0$0 = (t0$ = this.selection, t0$ == null ? null : t0$.selectionChanges), t0$0 == null ? null : t0$0.listen(dart.fn(changes => {
          this[_changeDetector$].markForCheck();
          let added = dart.test(changes[$last].added[$isNotEmpty]) ? changes[$last].added[$first] : null;
          if (added != null && !dart.test(this.activeModel.isActive(added))) {
            this.activeModel.activate(added);
          }
          this.emitSelectionChange();
        }, ListLOfSelectionChangeRecordLOfTLToNull())));
      }
      get selection() {
        return super.selection;
      }
      [_updateActiveModel]() {
        let t0, t0$;
        let items = core.List.from((t0$ = (t0 = this.options, t0 == null ? null : t0.optionsList), t0$ == null ? [] : t0$));
        if (dart.test(this.showDeselectItem)) {
          items[$insert](0, this.deselectLabel);
        }
        this.activeModel.items = items;
      }
      [_setInitialActiveItem](opts) {
        let allowDeactivate = opts && 'allowDeactivate' in opts ? opts.allowDeactivate : true;
        if (this.selection == null || dart.test(this.selection.selectedValues[$isEmpty])) {
          if (dart.test(allowDeactivate)) this.activeModel.activate(null);
        } else if (this.activeModel.activeItem == null || dart.test(this.showDeselectItem) && dart.equals(this.activeModel.activeItem, this.deselectLabel) || !dart.test(this.selection.isSelected(TL().as(this.activeModel.activeItem)))) {
          this.activeModel.activate(this.selection.selectedValues[$first]);
        }
        if (dart.test(this.activateFirstOption) && this.activeModel.activeItem == null) {
          this.activeModel.activateFirst();
        }
      }
      [_handleNavigationKey](event, activateFunction) {
        if (dart.test(this.disabled)) return;
        event.preventDefault();
        dart.dcall(activateFunction, []);
        if (!dart.test(this.visible) && this.selection != null && dart.test(this.isSingleSelect)) {
          let item = this.activeModel.activeItem;
          if (dart.equals(item, this.deselectLabel)) {
            this.deselectCurrentSelection();
          } else if (item != null && !dart.test(this.isOptionDisabled(TL().as(item)))) {
            this.selection.select(TL().as(item));
          }
        }
        if (!dart.test(this.visible)) {
          this.open();
        }
      }
      handleUpKey(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activatePrevious'));
      }
      handleDownKey(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateNext'));
      }
      handleLeftKey(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activatePrevious'));
      }
      handleRightKey(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateNext'));
      }
      handlePageUp(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateFirst'));
      }
      handlePageDown(event) {
        this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateLast'));
      }
      [_handleKeyboardTrigger]() {
        if (dart.test(this.disabled)) return;
        if (!dart.test(this.visible)) {
          this.open();
        } else {
          let item = this.activeModel.activeItem;
          if (item != null && this.selection != null) {
            if (dart.equals(item, this.deselectLabel)) {
              this.deselectCurrentSelection();
            } else if (!dart.test(this.selection.isSelected(TL().as(item)))) {
              if (!dart.test(this.isOptionDisabled(TL().as(item)))) {
                this.selection.select(TL().as(item));
              }
            } else if (dart.test(this.deselectOnActivate)) {
              this.selection.deselect(TL().as(item));
            }
          }
          if (dart.test(this.isSingleSelect)) {
            this.close();
            this.dropdownButton.focus();
          }
        }
      }
      handleEnterKey(event) {
        this[_handleKeyboardTrigger]();
      }
      handleSpaceKey(event) {
        let t0;
        t0 = event;
        t0 == null ? null : t0.preventDefault();
        this[_handleKeyboardTrigger]();
      }
      handleClick(event) {
        if (!MouseEventL().is(event)) return;
        if (!dart.test(this.disabled)) this.toggle();
      }
      handleCharCodeKey(event) {
        if (this.itemRenderer != null && this.options != null && !dart.test(this.disabled)) {
          this.activateOnKeyPress(this.activeModel, event.charCode, this.options, this.itemRenderer, !dart.test(this.visible) && dart.test(this.isSingleSelect) ? this.selection : null);
        }
      }
      ngAfterChanges() {
        if (dart.test(this[_disabledChanged]) && dart.test(this.disabled)) {
          this.close();
        }
        this[_disabledChanged] = false;
      }
      ngOnDestroy() {
        let t0, t0$;
        t0 = this[_optionsListener];
        t0 == null ? null : t0.cancel();
        t0$ = this[_selectionListener];
        t0$ == null ? null : t0$.cancel();
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
      isOptionDisabled(item) {
        TL().as(item);
        return !dart.test(selectable.Selectable.isSelectableIn(TL(), this.options, item));
      }
      isOptionHidden(item) {
        TL().as(item);
        return selectable.Selectable.isHiddenIn(TL(), this.options, item, false);
      }
      get showDeselectItem() {
        let t0;
        return !dart.test(this.isMultiSelect) && dart.equals((t0 = this.deselectLabel, t0 == null ? null : t0[$isNotEmpty]), true);
      }
      get isDeselectItemSelected() {
        return this.selection.isEmpty;
      }
      deselectCurrentSelection() {
        if (dart.test(this.selection.isNotEmpty)) {
          this.selection.deselect(this.selection.selectedValues[$single]);
        }
      }
    }
    (MaterialDropdownSelectComponent.new = function(idGenerator, _popupSizeDelegate, rtl, popupClass, buttonAriaRole, _changeDetector, element) {
      let t0;
      this[trackByIndexFn] = template_support.indexIdentityFn;
      this[buttonAriaLabelledBy] = null;
      this[buttonAriaDescribedBy] = null;
      this[_optionsListener] = null;
      this[_selectionListener] = null;
      this[deselectLabel] = null;
      this[error] = null;
      this[showButtonBorder] = null;
      this[_deselectOnActivate] = true;
      this[labelFactory] = null;
      this[activateFirstOption] = false;
      this[_ariaActiveDescendant] = null;
      this[_disabledChanged] = false;
      this[dropdownButton] = null;
      this[listAutoFocus] = true;
      this[_focus] = StreamControllerOfFocusEventL().broadcast({sync: true});
      this[_blur] = StreamControllerOfFocusEventL().broadcast({sync: true});
      this[_popupSizeDelegate$] = _popupSizeDelegate;
      this[buttonAriaRole$] = buttonAriaRole;
      this[_changeDetector$] = _changeDetector;
      this[activeModel] = new active_item.ActiveItemModel.new(idGenerator);
      this[popupClassName] = css.constructEncapsulatedCss(popupClass, element[$classes]);
      this[listId] = (t0 = idGenerator, t0 == null ? new id_generator.SequentialIdGenerator.fromUUID() : t0).nextId();
      MaterialDropdownSelectComponent.__proto__.new.call(this);
      this.isRtl = rtl;
      this.preferredPositions = alignment.RelativePosition.overlapAlignments;
      this.iconName = "arrow_drop_down";
    }).prototype = MaterialDropdownSelectComponent.prototype;
    dart.addTypeTests(MaterialDropdownSelectComponent);
    MaterialDropdownSelectComponent.prototype[_is_MaterialDropdownSelectComponent_default] = true;
    dart.addTypeCaches(MaterialDropdownSelectComponent);
    MaterialDropdownSelectComponent[dart.implements] = () => [popup_size_provider.PopupSizeProvider, lifecycle_hooks.AfterChanges, lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(MaterialDropdownSelectComponent, () => ({
      __proto__: dart.getMethods(MaterialDropdownSelectComponent.__proto__),
      onFocus: dart.fnType(dart.void, [dart.legacy(html.FocusEvent)]),
      onBlur: dart.fnType(dart.void, [dart.legacy(html.FocusEvent)]),
      [_updateActiveModel]: dart.fnType(dart.void, []),
      [_setInitialActiveItem]: dart.fnType(dart.void, [], {allowDeactivate: dart.legacy(core.bool)}, {}),
      [_handleNavigationKey]: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent), dart.legacy(core.Function)]),
      [_handleKeyboardTrigger]: dart.fnType(dart.void, []),
      handleClick: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
      ngAfterChanges: dart.fnType(dart.void, []),
      ngOnDestroy: dart.fnType(dart.void, []),
      getMinHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
      getMinWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
      getMaxHeight: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
      getMaxWidth: dart.fnType(dart.legacy(core.num), [dart.legacy(core.num), dart.legacy(core.num)]),
      isOptionDisabled: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      isOptionHidden: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      deselectCurrentSelection: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialDropdownSelectComponent, () => ({
      __proto__: dart.getGetters(MaterialDropdownSelectComponent.__proto__),
      deselectOnActivate: dart.legacy(core.bool),
      hasCustomLabelRenderer: dart.legacy(core.bool),
      ariaActiveDescendant: dart.legacy(core.String),
      focus: dart.legacy(async.Stream$(dart.legacy(html.FocusEvent))),
      blur: dart.legacy(async.Stream$(dart.legacy(html.FocusEvent))),
      showDeselectItem: dart.legacy(core.bool),
      isDeselectItemSelected: dart.legacy(core.bool)
    }));
    dart.setSetterSignature(MaterialDropdownSelectComponent, () => ({
      __proto__: dart.getSetters(MaterialDropdownSelectComponent.__proto__),
      deselectOnActivate: dart.legacy(core.bool),
      disabled: dart.legacy(core.bool),
      ariaActiveDescendant: dart.legacy(core.String),
      componentRenderer: dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic])),
      factoryRenderer: dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(T)])),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      options: dart.legacy(core.Object),
      selection: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(MaterialDropdownSelectComponent, L0);
    dart.setFieldSignature(MaterialDropdownSelectComponent, () => ({
      __proto__: dart.getFields(MaterialDropdownSelectComponent.__proto__),
      trackByIndexFn: dart.finalFieldType(dart.legacy(core.Function)),
      activeModel: dart.finalFieldType(dart.legacy(active_item.ActiveItemModel)),
      listId: dart.finalFieldType(dart.legacy(core.String)),
      buttonAriaRole: dart.finalFieldType(dart.legacy(core.String)),
      buttonAriaLabelledBy: dart.fieldType(dart.legacy(core.String)),
      buttonAriaDescribedBy: dart.fieldType(dart.legacy(core.String)),
      [_optionsListener]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T)))))))),
      [_selectionListener]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(core.List$(dart.legacy(selection_model.SelectionChangeRecord$(dart.legacy(T)))))))),
      [_popupSizeDelegate$]: dart.finalFieldType(dart.legacy(popup_size_provider.PopupSizeProvider)),
      deselectLabel: dart.fieldType(dart.legacy(core.String)),
      error: dart.fieldType(dart.legacy(core.String)),
      showButtonBorder: dart.fieldType(dart.legacy(core.bool)),
      [_deselectOnActivate]: dart.fieldType(dart.legacy(core.bool)),
      labelFactory: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.dynamic]))),
      activateFirstOption: dart.fieldType(dart.legacy(core.bool)),
      popupClassName: dart.finalFieldType(dart.legacy(core.String)),
      [_ariaActiveDescendant]: dart.fieldType(dart.legacy(core.String)),
      [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
      [_disabledChanged]: dart.fieldType(dart.legacy(core.bool)),
      dropdownButton: dart.fieldType(dart.legacy(dropdown_button.DropdownButtonComponent)),
      listAutoFocus: dart.fieldType(dart.legacy(core.bool)),
      [_focus]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.FocusEvent)))),
      [_blur]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.FocusEvent))))
    }));
    return MaterialDropdownSelectComponent;
  });
  material_dropdown_select.MaterialDropdownSelectComponent = material_dropdown_select.MaterialDropdownSelectComponent$();
  dart.addTypeTests(material_dropdown_select.MaterialDropdownSelectComponent, _is_MaterialDropdownSelectComponent_default);
  material_dropdown_select.fromDropdown = function fromDropdown(dropdown) {
    return dropdown.activeModel;
  };
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select", {
    "package:angular_components/material_select/material_dropdown_select.dart": material_dropdown_select
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select.dart"],"names":[],"mappings":"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","file":"material_dropdown_select.unsound.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select: material_dropdown_select
  };
}));

//# sourceMappingURL=material_dropdown_select.unsound.ddc.js.map
