define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/focus/focus', 'packages/angular_forms/src/directives', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/utils/browser/events/events', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/icon', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_radio__material_radio(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__model__selection__selection_model, packages__angular_components__focus__focus, packages__angular_forms__src__directives, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__utils__browser__events__events, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__ui__icon, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const control_value_accessor = packages__angular_forms__src__directives.src__directives__control_value_accessor;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const icon = packages__angular_components__model__ui__icon.model__ui__icon;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var material_radio_group = Object.create(dart.library);
  var material_radio = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $last = dartx.last;
  var $firstWhere = dartx.firstWhere;
  var $isEmpty = dartx.isEmpty;
  var $single = dartx.single;
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $indexOf = dartx.indexOf;
  var $modulo = dartx['%'];
  var $length = dartx.length;
  var $_get = dartx._get;
  var $target = dartx.target;
  var MaterialRadioComponentL = () => (MaterialRadioComponentL = dart.constFn(dart.legacy(material_radio.MaterialRadioComponent)))();
  var JSArrayOfMaterialRadioComponentL = () => (JSArrayOfMaterialRadioComponentL = dart.constFn(_interceptors.JSArray$(MaterialRadioComponentL())))();
  var SingleSelectionModelOfMaterialRadioComponentL = () => (SingleSelectionModelOfMaterialRadioComponentL = dart.constFn(selection_model.SingleSelectionModel$(MaterialRadioComponentL())))();
  var SelectionChangeRecordOfMaterialRadioComponentL = () => (SelectionChangeRecordOfMaterialRadioComponentL = dart.constFn(selection_model.SelectionChangeRecord$(MaterialRadioComponentL())))();
  var SelectionChangeRecordLOfMaterialRadioComponentL = () => (SelectionChangeRecordLOfMaterialRadioComponentL = dart.constFn(dart.legacy(SelectionChangeRecordOfMaterialRadioComponentL())))();
  var ListOfSelectionChangeRecordLOfMaterialRadioComponentL = () => (ListOfSelectionChangeRecordLOfMaterialRadioComponentL = dart.constFn(core.List$(SelectionChangeRecordLOfMaterialRadioComponentL())))();
  var ListLOfSelectionChangeRecordLOfMaterialRadioComponentL = () => (ListLOfSelectionChangeRecordLOfMaterialRadioComponentL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfMaterialRadioComponentL())))();
  var ListLOfSelectionChangeRecordLOfMaterialRadioComponentLToNull = () => (ListLOfSelectionChangeRecordLOfMaterialRadioComponentLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfSelectionChangeRecordLOfMaterialRadioComponentL()])))();
  var FocusMoveEventL = () => (FocusMoveEventL = dart.constFn(dart.legacy(focus.FocusMoveEvent)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  var SelectionChangeRecordL = () => (SelectionChangeRecordL = dart.constFn(dart.legacy(selection_model.SelectionChangeRecord)))();
  var ListOfSelectionChangeRecordL = () => (ListOfSelectionChangeRecordL = dart.constFn(core.List$(SelectionChangeRecordL())))();
  var ListLOfSelectionChangeRecordL = () => (ListLOfSelectionChangeRecordL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordL())))();
  var ListLOfSelectionChangeRecordLToNull = () => (ListLOfSelectionChangeRecordLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfSelectionChangeRecordL()])))();
  var MaterialRadioComponentLToboolL = () => (MaterialRadioComponentLToboolL = dart.constFn(dart.fnType(boolL(), [MaterialRadioComponentL()])))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var StreamControllerOfFocusMoveEventL = () => (StreamControllerOfFocusMoveEventL = dart.constFn(async.StreamController$(FocusMoveEventL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_radio/material_radio_group.dart";
  var L1 = "package:angular_components/material_radio/material_radio.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: icon.Icon.prototype,
        [Icon_name]: "radio_button_unchecked"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: icon.Icon.prototype,
        [Icon_name]: "radio_button_checked"
      });
    }
  }, false);
  var _disposer = dart.privateName(material_radio_group, "_disposer");
  var _radioComponents = dart.privateName(material_radio_group, "_radioComponents");
  var _onChange = dart.privateName(material_radio_group, "_onChange");
  var _valueSelection = dart.privateName(material_radio_group, "_valueSelection");
  var _selectionSubscription = dart.privateName(material_radio_group, "_selectionSubscription");
  var _preselectedValue = dart.privateName(material_radio_group, "_preselectedValue");
  var _isContentInit = dart.privateName(material_radio_group, "_isContentInit");
  var _selected = dart.privateName(material_radio_group, "_selected");
  var _ngZone$ = dart.privateName(material_radio_group, "_ngZone");
  var _resetTabIndex = dart.privateName(material_radio_group, "_resetTabIndex");
  var _selectedRadioComponent = dart.privateName(material_radio_group, "_selectedRadioComponent");
  var _moveFocus = dart.privateName(material_radio_group, "_moveFocus");
  var _moveSelection = dart.privateName(material_radio_group, "_moveSelection");
  var _getFocusableChildren = dart.privateName(material_radio_group, "_getFocusableChildren");
  var _move = dart.privateName(material_radio_group, "_move");
  var componentSelection = dart.privateName(material_radio_group, "MaterialRadioGroupComponent.componentSelection");
  var focusSelection = dart.privateName(material_radio_group, "MaterialRadioGroupComponent.focusSelection");
  material_radio_group.MaterialRadioGroupComponent = class MaterialRadioGroupComponent extends core.Object {
    get componentSelection() {
      return this[componentSelection];
    }
    set componentSelection(value) {
      super.componentSelection = value;
    }
    get focusSelection() {
      return this[focusSelection];
    }
    set focusSelection(value) {
      super.focusSelection = value;
    }
    set radioComponents(radioComponents) {
      let t0;
      this[_radioComponents] = radioComponents;
      for (let radioComponent of this[_radioComponents]) {
        t0 = this[_disposer];
        (() => {
          t0.addStreamSubscription(FocusMoveEventL(), radioComponent.focusmove.listen(dart.bind(this, _moveFocus)));
          t0.addStreamSubscription(FocusMoveEventL(), radioComponent.selectionmove.listen(dart.bind(this, _moveSelection)));
          return t0;
        })();
      }
    }
    writeValue(selectedValue) {
      if (selectedValue != null) this.selected = selectedValue;
    }
    registerOnChange(callback) {
      this[_disposer].addStreamSubscription(dart.dynamic, this.onChange.listen(callback));
    }
    registerOnTouched(_) {
    }
    onDisabledChanged(isDisabled) {
    }
    [_resetTabIndex]() {
      this[_ngZone$].runAfterChangesObserved(dart.fn(() => {
        let t0;
        if (this[_radioComponents] == null) return;
        for (let radioComponent of this[_radioComponents]) {
          radioComponent.tabbable = false;
        }
        let selectedRadioComponent = this[_selectedRadioComponent];
        if (selectedRadioComponent != null) {
          selectedRadioComponent.tabbable = true;
        } else if (dart.test(this.focusSelection.isEmpty)) {
          let focusables = this[_getFocusableChildren]();
          if (dart.test(focusables[$isNotEmpty])) {
            t0 = focusables;
            (() => {
              t0[$first].tabbable = true;
              t0[$last].tabbable = true;
              return t0;
            })();
          }
        }
      }, VoidToNull()));
    }
    get onChange() {
      return this[_onChange].stream;
    }
    set valueSelection(value) {
      let t0, t0$, t0$0;
      if (dart.equals(this[_valueSelection], value)) return;
      t0 = this[_selectionSubscription];
      t0 == null ? null : t0.cancel();
      this[_valueSelection] = value;
      this[_selectionSubscription] = (t0$0 = (t0$ = this[_valueSelection], t0$ == null ? null : t0$.selectionChanges), t0$0 == null ? null : t0$0.listen(dart.fn(_ => {
        this.selected = this[_valueSelection].selectedValues[$firstWhere](dart.fn(_ => true, dynamicToboolL()), {orElse: dart.fn(() => null, VoidToNull())});
      }, ListLOfSelectionChangeRecordLToNull())));
    }
    get [_selectedRadioComponent]() {
      if (dart.test(this.componentSelection.selectedValues[$isEmpty])) return null;
      return this.componentSelection.selectedValues[$single];
    }
    set selected(selectedValue) {
      if (this[_radioComponents] != null && dart.test(this[_isContentInit])) {
        for (let radioComponent of this[_radioComponents]) {
          radioComponent.checked = dart.equals(radioComponent.value, selectedValue);
        }
        this[_preselectedValue] = null;
      } else {
        this[_preselectedValue] = selectedValue;
      }
    }
    get selected() {
      return this[_selected];
    }
    [_moveFocus](event) {
      return this[_move](event);
    }
    [_moveSelection](event) {
      return this[_move](event, true);
    }
    [_getFocusableChildren](source = null) {
      return this[_radioComponents][$where](dart.fn(radioComponent => !dart.test(radioComponent.disabled) || dart.equals(radioComponent, source), MaterialRadioComponentLToboolL()))[$toList]();
    }
    [_move](event, moveSelection = false) {
      let source = MaterialRadioComponentL().as(event.focusItem);
      let focusableChildren = this[_getFocusableChildren](source);
      let index = focusableChildren[$indexOf](source);
      let newIndex = (dart.notNull(index) + dart.notNull(event.offset))[$modulo](focusableChildren[$length]);
      if (dart.test(moveSelection)) focusableChildren[$_get](newIndex).checked = true;
      focusableChildren[$_get](newIndex).focus();
    }
    ngAfterContentInit() {
      this[_isContentInit] = true;
      if (this[_preselectedValue] != null) {
        this[_ngZone$].runAfterChangesObserved(dart.fn(() => {
          if (this[_preselectedValue] == null) return;
          this.selected = this[_preselectedValue];
          this[_preselectedValue] = null;
        }, VoidToNull()));
      } else {
        this[_resetTabIndex]();
      }
    }
    ngOnDestroy() {
      let t0;
      this[_disposer].dispose();
      t0 = this[_selectionSubscription];
      t0 == null ? null : t0.cancel();
    }
  };
  (material_radio_group.MaterialRadioGroupComponent.new = function(_ngZone, cd) {
    let t0;
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_radioComponents] = JSArrayOfMaterialRadioComponentL().of([]);
    this[_onChange] = async.StreamController.broadcast();
    this[_valueSelection] = null;
    this[_selectionSubscription] = null;
    this[componentSelection] = SingleSelectionModelOfMaterialRadioComponentL().new();
    this[focusSelection] = SingleSelectionModelOfMaterialRadioComponentL().new();
    this[_preselectedValue] = null;
    this[_isContentInit] = false;
    this[_selected] = null;
    this[_ngZone$] = _ngZone;
    t0 = cd;
    t0 == null ? null : t0.valueAccessor = this;
    this[_disposer].addStreamSubscription(ListLOfSelectionChangeRecordLOfMaterialRadioComponentL(), this.componentSelection.selectionChanges.listen(dart.fn(checkedChanges => {
      let t0;
      for (let checkedChange of checkedChanges) {
        for (let radioComponent of checkedChange.removed) {
          radioComponent.checked = false;
        }
      }
      this[_resetTabIndex]();
      this[_selected] = (t0 = this[_selectedRadioComponent], t0 == null ? null : t0.value);
      if (this[_valueSelection] != null && this[_selected] != null) {
        this[_valueSelection].select(this[_selected]);
      }
      this[_onChange].add(this[_selected]);
    }, ListLOfSelectionChangeRecordLOfMaterialRadioComponentLToNull())));
    this[_disposer].addStreamSubscription(ListLOfSelectionChangeRecordLOfMaterialRadioComponentL(), this.focusSelection.selectionChanges.listen(dart.fn(_ => {
      this[_resetTabIndex]();
    }, ListLOfSelectionChangeRecordLOfMaterialRadioComponentLToNull())));
  }).prototype = material_radio_group.MaterialRadioGroupComponent.prototype;
  dart.addTypeTests(material_radio_group.MaterialRadioGroupComponent);
  dart.addTypeCaches(material_radio_group.MaterialRadioGroupComponent);
  material_radio_group.MaterialRadioGroupComponent[dart.implements] = () => [control_value_accessor.ControlValueAccessor, lifecycle_hooks.OnDestroy, lifecycle_hooks.AfterContentInit];
  dart.setMethodSignature(material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getMethods(material_radio_group.MaterialRadioGroupComponent.__proto__),
    writeValue: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    registerOnChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: dart.legacy(core.String)}, {}))]),
    registerOnTouched: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, []))]),
    onDisabledChanged: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    [_resetTabIndex]: dart.fnType(dart.void, []),
    [_moveFocus]: dart.fnType(dart.void, [dart.legacy(focus.FocusMoveEvent)]),
    [_moveSelection]: dart.fnType(dart.void, [dart.legacy(focus.FocusMoveEvent)]),
    [_getFocusableChildren]: dart.fnType(dart.legacy(core.List$(dart.legacy(material_radio.MaterialRadioComponent))), [], [dart.legacy(material_radio.MaterialRadioComponent)]),
    [_move]: dart.fnType(dart.void, [dart.legacy(focus.FocusMoveEvent)], [dart.legacy(core.bool)]),
    ngAfterContentInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getGetters(material_radio_group.MaterialRadioGroupComponent.__proto__),
    onChange: dart.legacy(async.Stream),
    [_selectedRadioComponent]: dart.legacy(material_radio.MaterialRadioComponent),
    selected: dart.dynamic
  }));
  dart.setSetterSignature(material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getSetters(material_radio_group.MaterialRadioGroupComponent.__proto__),
    radioComponents: dart.legacy(core.List$(dart.legacy(material_radio.MaterialRadioComponent))),
    valueSelection: dart.legacy(selection_model.SelectionModel),
    selected: dart.dynamic
  }));
  dart.setLibraryUri(material_radio_group.MaterialRadioGroupComponent, L0);
  dart.setFieldSignature(material_radio_group.MaterialRadioGroupComponent, () => ({
    __proto__: dart.getFields(material_radio_group.MaterialRadioGroupComponent.__proto__),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_radioComponents]: dart.fieldType(dart.legacy(core.List$(dart.legacy(material_radio.MaterialRadioComponent)))),
    [_onChange]: dart.finalFieldType(dart.legacy(async.StreamController)),
    [_valueSelection]: dart.fieldType(dart.legacy(selection_model.SelectionModel)),
    [_selectionSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(core.List$(dart.legacy(selection_model.SelectionChangeRecord)))))),
    componentSelection: dart.finalFieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(material_radio.MaterialRadioComponent)))),
    focusSelection: dart.finalFieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(material_radio.MaterialRadioComponent)))),
    [_preselectedValue]: dart.fieldType(dart.dynamic),
    [_isContentInit]: dart.fieldType(dart.legacy(core.bool)),
    [_selected]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_radio_group.MaterialRadioGroupComponent, {
    /*material_radio_group.MaterialRadioGroupComponent.role*/get role() {
      return "radiogroup";
    },
    /*material_radio_group.MaterialRadioGroupComponent.tabIndex*/get tabIndex() {
      return -1;
    }
  }, true);
  var _disposer$ = dart.privateName(material_radio, "_disposer");
  var _onChecked = dart.privateName(material_radio, "_onChecked");
  var _checked = dart.privateName(material_radio, "_checked");
  var _enabledTabIndex = dart.privateName(material_radio, "_enabledTabIndex");
  var _focusMoveCtrl = dart.privateName(material_radio, "_focusMoveCtrl");
  var _selectionMoveCtrl = dart.privateName(material_radio, "_selectionMoveCtrl");
  var _isFocused = dart.privateName(material_radio, "_isFocused");
  var _isKeyboardEvent = dart.privateName(material_radio, "_isKeyboardEvent");
  var _root$ = dart.privateName(material_radio, "_root");
  var _changeDetector$ = dart.privateName(material_radio, "_changeDetector");
  var _group$ = dart.privateName(material_radio, "_group");
  var role$ = dart.privateName(material_radio, "MaterialRadioComponent.role");
  var value$ = dart.privateName(material_radio, "MaterialRadioComponent.value");
  var disabled = dart.privateName(material_radio, "MaterialRadioComponent.disabled");
  var radioGroupName = dart.privateName(material_radio, "MaterialRadioComponent.radioGroupName");
  material_radio.MaterialRadioComponent = class MaterialRadioComponent extends focus.RootFocusable {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get radioGroupName() {
      return this[radioGroupName];
    }
    set radioGroupName(value) {
      this[radioGroupName] = value;
    }
    writeValue(isChecked) {
      boolL().as(isChecked);
      this.checked = isChecked;
    }
    registerOnChange(callback) {
      this[_disposer$].addStreamSubscription(boolL(), this.onChecked.listen(callback));
    }
    registerOnTouched(_) {
    }
    onDisabledChanged(isDisabled) {
      this.disabled = isDisabled;
      this[_changeDetector$].markForCheck();
    }
    get onChecked() {
      return this[_onChecked].stream;
    }
    set checked(isChecked) {
      if (dart.equals(this[_checked], isChecked)) return;
      this[_checked] = isChecked;
      this[_changeDetector$].markForCheck();
      if (this[_group$] != null) {
        if (dart.test(isChecked)) {
          this[_group$].componentSelection.select(this);
        } else {
          this[_group$].componentSelection.deselect(this);
        }
      }
      this[_onChecked].add(this[_checked]);
    }
    get checked() {
      return this[_checked];
    }
    get icon() {
      return dart.test(this[_checked]) ? material_radio.checkedIcon : material_radio.uncheckedIcon;
    }
    get tabIndex() {
      return dart.test(this.disabled) ? -1 : this[_enabledTabIndex];
    }
    set tabbable(isTabbable) {
      this[_enabledTabIndex] = dart.test(isTabbable) ? 0 : -1;
      this[_changeDetector$].markForCheck();
    }
    get focusmove() {
      return this[_focusMoveCtrl].stream;
    }
    get selectionmove() {
      return this[_selectionMoveCtrl].stream;
    }
    handleKeyDown(event) {
      if (!dart.equals(event[$target], this[_root$])) return;
      let focusEvent = focus.FocusMoveEvent.fromKeyboardEvent(this, event);
      if (focusEvent == null) return;
      if (dart.test(event.ctrlKey)) {
        this[_focusMoveCtrl].add(focusEvent);
      } else {
        this[_selectionMoveCtrl].add(focusEvent);
      }
      event.preventDefault();
    }
    handleKeyUp(event) {
      if (!dart.equals(event[$target], this[_root$])) return;
      this[_isKeyboardEvent] = true;
    }
    get showFocus() {
      return dart.test(this[_isFocused]) && dart.test(this[_isKeyboardEvent]);
    }
    onFocus() {
      this[_isFocused] = true;
      if (this[_group$] != null) this[_group$].focusSelection.select(this);
    }
    onBlur() {
      this[_isFocused] = false;
      if (this[_group$] != null) this[_group$].focusSelection.deselect(this);
    }
    select() {
      if (!dart.test(this.disabled)) this.checked = true;
    }
    handleClick() {
      this[_isKeyboardEvent] = false;
      this.select();
    }
    handleKeyPress(event) {
      if (!dart.equals(event[$target], this[_root$]) || !dart.test(events.isSpaceKey(event))) return;
      event.preventDefault();
      this[_isKeyboardEvent] = true;
      this.select();
    }
    ngOnDestroy() {
      this[_disposer$].dispose();
    }
    get focusDelegate() {
      return async.async(dart.dynamic, function* focusDelegate() {
        return null;
      });
    }
  };
  (material_radio.MaterialRadioComponent.new = function(_root, _changeDetector, _group, cd, role) {
    let t0, t0$;
    this[_disposer$] = new disposer.Disposer.oneShot();
    this[value$] = null;
    this[disabled] = false;
    this[_onChecked] = StreamControllerOfboolL().broadcast();
    this[_checked] = false;
    this[_enabledTabIndex] = 0;
    this[_focusMoveCtrl] = StreamControllerOfFocusMoveEventL().broadcast({sync: true});
    this[_selectionMoveCtrl] = StreamControllerOfFocusMoveEventL().broadcast({sync: true});
    this[_isFocused] = false;
    this[_isKeyboardEvent] = false;
    this[radioGroupName] = null;
    this[_root$] = _root;
    this[_changeDetector$] = _changeDetector;
    this[_group$] = _group;
    this[role$] = (t0 = role, t0 == null ? "radio" : t0);
    material_radio.MaterialRadioComponent.__proto__.new.call(this, _root);
    t0$ = cd;
    t0$ == null ? null : t0$.valueAccessor = this;
  }).prototype = material_radio.MaterialRadioComponent.prototype;
  dart.addTypeTests(material_radio.MaterialRadioComponent);
  dart.addTypeCaches(material_radio.MaterialRadioComponent);
  material_radio.MaterialRadioComponent[dart.implements] = () => [control_value_accessor.ControlValueAccessor$(dart.legacy(core.bool)), has_disabled.HasDisabled, focus.FocusableItem, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getMethods(material_radio.MaterialRadioComponent.__proto__),
    writeValue: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    registerOnChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.bool)], {rawValue: dart.legacy(core.String)}, {}))]),
    registerOnTouched: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, []))]),
    onDisabledChanged: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    handleKeyDown: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleKeyUp: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    onFocus: dart.fnType(dart.void, []),
    onBlur: dart.fnType(dart.void, []),
    select: dart.fnType(dart.void, []),
    handleClick: dart.fnType(dart.void, []),
    handleKeyPress: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getGetters(material_radio.MaterialRadioComponent.__proto__),
    onChecked: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    checked: dart.legacy(core.bool),
    icon: dart.legacy(icon.Icon),
    tabIndex: dart.legacy(core.int),
    focusmove: dart.legacy(async.Stream$(dart.legacy(focus.FocusMoveEvent))),
    selectionmove: dart.legacy(async.Stream$(dart.legacy(focus.FocusMoveEvent))),
    showFocus: dart.legacy(core.bool),
    focusDelegate: dart.legacy(async.Future)
  }));
  dart.setSetterSignature(material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getSetters(material_radio.MaterialRadioComponent.__proto__),
    checked: dart.legacy(core.bool),
    tabbable: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_radio.MaterialRadioComponent, L1);
  dart.setFieldSignature(material_radio.MaterialRadioComponent, () => ({
    __proto__: dart.getFields(material_radio.MaterialRadioComponent.__proto__),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_group$]: dart.finalFieldType(dart.legacy(material_radio_group.MaterialRadioGroupComponent)),
    [_root$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_disposer$]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    role: dart.finalFieldType(dart.legacy(core.String)),
    value: dart.fieldType(dart.dynamic),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    [_onChecked]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_checked]: dart.fieldType(dart.legacy(core.bool)),
    [_enabledTabIndex]: dart.fieldType(dart.legacy(core.int)),
    [_focusMoveCtrl]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(focus.FocusMoveEvent)))),
    [_selectionMoveCtrl]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(focus.FocusMoveEvent)))),
    [_isFocused]: dart.fieldType(dart.legacy(core.bool)),
    [_isKeyboardEvent]: dart.fieldType(dart.legacy(core.bool)),
    radioGroupName: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(material_radio.MaterialRadioComponent, {
    /*material_radio.MaterialRadioComponent.hostClass*/get hostClass() {
      return "themeable";
    }
  }, true);
  var Icon_name = dart.privateName(icon, "Icon.name");
  var C0;
  var C1;
  dart.defineLazy(material_radio, {
    /*material_radio.uncheckedIcon*/get uncheckedIcon() {
      return C0 || CT.C0;
    },
    /*material_radio.checkedIcon*/get checkedIcon() {
      return C1 || CT.C1;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_radio/material_radio", {
    "package:angular_components/material_radio/material_radio_group.dart": material_radio_group,
    "package:angular_components/material_radio/material_radio.dart": material_radio
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_radio_group.dart","material_radio.dart"],"names":[],"mappings":"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","file":"material_radio.unsound.ddc.js"}');
  // Exports:
  return {
    material_radio__material_radio_group: material_radio_group,
    material_radio__material_radio: material_radio
  };
}));

//# sourceMappingURL=material_radio.unsound.ddc.js.map
