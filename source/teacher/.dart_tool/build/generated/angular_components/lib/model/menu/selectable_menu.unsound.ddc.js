define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/menu/menu', 'packages/angular_components/model/ui/has_renderer', 'packages/observable/observable', 'packages/angular_components/model/menu/menu_item_affix', 'packages/quiver/core', 'packages/built_collection/built_collection', 'packages/quiver/strings', 'packages/angular_components/model/ui/icon'], (function load__packages__angular_components__model__menu__selectable_menu(dart_sdk, packages__angular_components__model__selection__selection_model, packages__angular_components__src__model__selection__interfaces__selectable, packages__angular_components__model__menu__menu, packages__angular_components__model__ui__has_renderer, packages__observable__observable, packages__angular_components__model__menu__menu_item_affix, packages__quiver__core, packages__built_collection__built_collection, packages__quiver__strings, packages__angular_components__model__ui__icon) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const selectable = packages__angular_components__src__model__selection__interfaces__selectable.src__model__selection__interfaces__selectable;
  const menu = packages__angular_components__model__menu__menu.model__menu__menu;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const observable_list = packages__observable__observable.src__observable_list;
  const change_notifier = packages__observable__observable.src__change_notifier;
  const menu_item_affix = packages__angular_components__model__menu__menu_item_affix.model__menu__menu_item_affix;
  const optional = packages__quiver__core.src__core__optional;
  const list = packages__built_collection__built_collection.src__list;
  const strings = packages__quiver__strings.strings;
  const icon = packages__angular_components__model__ui__icon.model__ui__icon;
  var selectable_menu = Object.create(dart.library);
  var MultiSelectionModelL = () => (MultiSelectionModelL = dart.constFn(dart.legacy(selection_model.MultiSelectionModel)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  var MenuItemAffixL = () => (MenuItemAffixL = dart.constFn(dart.legacy(menu_item_affix.MenuItemAffix)))();
  var ObservableListOfMenuItemAffixL = () => (ObservableListOfMenuItemAffixL = dart.constFn(observable_list.ObservableList$(MenuItemAffixL())))();
  var BuiltListOfStringL = () => (BuiltListOfStringL = dart.constFn(list.BuiltList$(StringL())))();
  var IterableL = () => (IterableL = dart.constFn(dart.legacy(core.Iterable)))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToLvoid = () => (VoidToLvoid = dart.constFn(dart.legacy(VoidTovoid())))();
  var dynamicToLvoid = () => (dynamicToLvoid = dart.constFn(dart.legacy(dynamicTovoid())))();
  var SelectableOptionL = () => (SelectableOptionL = dart.constFn(dart.legacy(selectable.SelectableOption)))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/model/menu/selectable_menu.dart";
  var L0 = "org-dartlang-app:///packages/angular_components/model/menu/selectable_menu.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(has_renderer.defaultItemRenderer, dynamicToStringL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: selectable.SelectableOption.prototype,
        [_name]: "SelectableOption.Selectable",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.fn(selectable_menu._noOp, VoidTovoid());
    },
    get C4() {
      return C4 = dart.fn(selectable_menu._noOp2, dynamicTovoid());
    },
    get C5() {
      return C5 = dart.const(new _internal.Symbol.new('action'));
    },
    get C6() {
      return C6 = dart.const(new _internal.Symbol.new('actionWithContext'));
    },
    get C7() {
      return C7 = dart.const(new _internal.Symbol.new('selectableState'));
    },
    get C8() {
      return C8 = dart.const(new _js_helper.PrivateSymbol.new('_action', _action));
    },
    get C9() {
      return C9 = dart.const(new _js_helper.PrivateSymbol.new('_actionWithContext', _actionWithContext));
    },
    get C10() {
      return C10 = dart.const(new _js_helper.PrivateSymbol.new('_action=', _action_));
    },
    get C11() {
      return C11 = dart.const(new _js_helper.PrivateSymbol.new('_actionWithContext=', _actionWithContext_));
    }
  }, false);
  var C0;
  var _name = dart.privateName(selectable, "_name");
  var C1;
  var _selectableState = dart.privateName(selectable_menu, "_selectableState");
  var C2;
  var _action = dart.privateName(selectable_menu, "_action");
  var _actionWithContext = dart.privateName(selectable_menu, "_actionWithContext");
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var _action$ = dart.privateName(menu, "_action");
  var C9;
  var _actionWithContext$ = dart.privateName(menu, "_actionWithContext");
  var _action_ = dart.privateName(selectable_menu, "_action=");
  var C10;
  var _actionWithContext_ = dart.privateName(selectable_menu, "_actionWithContext=");
  var C11;
  const _is_SelectableMenuItem_default = Symbol('_is_SelectableMenuItem_default');
  var _action$0 = dart.privateName(selectable_menu, "SelectableMenuItem._action");
  var _actionWithContext$0 = dart.privateName(selectable_menu, "SelectableMenuItem._actionWithContext");
  var ariaChecked = dart.privateName(selectable_menu, "SelectableMenuItem.ariaChecked");
  var itemRenderer$ = dart.privateName(selectable_menu, "SelectableMenuItem.itemRenderer");
  var value$ = dart.privateName(selectable_menu, "SelectableMenuItem.value");
  var shouldSelectOnItemClick$ = dart.privateName(selectable_menu, "SelectableMenuItem.shouldSelectOnItemClick");
  var icon$ = dart.privateName(selectable_menu, "SelectableMenuItem.icon");
  var subMenu$ = dart.privateName(selectable_menu, "SelectableMenuItem.subMenu");
  var tooltip$ = dart.privateName(selectable_menu, "SelectableMenuItem.tooltip");
  var labelAnnotation$ = dart.privateName(selectable_menu, "SelectableMenuItem.labelAnnotation");
  var itemSuffixes$ = dart.privateName(selectable_menu, "SelectableMenuItem.itemSuffixes");
  var cssClasses$ = dart.privateName(selectable_menu, "SelectableMenuItem.cssClasses");
  var secondaryLabel$ = dart.privateName(selectable_menu, "SelectableMenuItem.secondaryLabel");
  selectable_menu.SelectableMenuItem$ = dart.generic(ItemType => {
    class SelectableMenuItem extends change_notifier.PropertyChangeNotifier {
      get [_action]() {
        return this[_action$0];
      }
      set [_action](value) {
        this[_action$0] = value;
      }
      get [_actionWithContext]() {
        return this[_actionWithContext$0];
      }
      set [_actionWithContext](value) {
        this[_actionWithContext$0] = value;
      }
      get ariaChecked() {
        return this[ariaChecked];
      }
      set ariaChecked(value) {
        this[ariaChecked] = value;
      }
      get itemRenderer() {
        return this[itemRenderer$];
      }
      set itemRenderer(value) {
        super.itemRenderer = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get shouldSelectOnItemClick() {
        return this[shouldSelectOnItemClick$];
      }
      set shouldSelectOnItemClick(value) {
        super.shouldSelectOnItemClick = value;
      }
      get icon() {
        return this[icon$];
      }
      set icon(value) {
        super.icon = value;
      }
      get subMenu() {
        return this[subMenu$];
      }
      set subMenu(value) {
        super.subMenu = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get labelAnnotation() {
        return this[labelAnnotation$];
      }
      set labelAnnotation(value) {
        super.labelAnnotation = value;
      }
      get itemSuffixes() {
        return this[itemSuffixes$];
      }
      set itemSuffixes(value) {
        super.itemSuffixes = value;
      }
      get cssClasses() {
        return this[cssClasses$];
      }
      set cssClasses(value) {
        super.cssClasses = value;
      }
      get secondaryLabel() {
        return this[secondaryLabel$];
      }
      set secondaryLabel(value) {
        super.secondaryLabel = value;
      }
      get label() {
        let t0;
        t0 = this.value;
        return this.itemRenderer(t0);
      }
      get ariaLabel() {
        return this.label;
      }
      get hasIcon() {
        return this.icon != null;
      }
      get hasSubMenu() {
        return this.subMenu != null;
      }
      get showTooltip() {
        return strings.isNotEmpty(this.tooltip);
      }
      get uiIcon() {
        return this.icon;
      }
      get uiDisplayName() {
        return this.label;
      }
      get enabled() {
        return this.selectableState == selectable.SelectableOption.Selectable;
      }
      set enabled(value) {
        this.selectableState = dart.test(value) ? selectable.SelectableOption.Selectable : selectable.SelectableOption.Disabled;
      }
      get action() {
        return this[_action];
      }
      set action(value) {
        if (dart.equals(value, this[_action])) return;
        this[_action] = value;
        this[_actionWithContext] = dart.fn(_ => value(), dynamicTovoid());
        this.notifyPropertyChange(VoidToLvoid(), C5 || CT.C5, this[_action], value);
      }
      get actionWithContext() {
        return this[_actionWithContext];
      }
      set actionWithContext(value) {
        if (dart.equals(value, this[_actionWithContext])) return;
        this[_actionWithContext] = value;
        this[_action] = dart.fn(() => value(null), VoidTovoid());
        this.notifyPropertyChange(dynamicToLvoid(), C6 || CT.C6, this[_actionWithContext], value);
      }
      get hasSecondaryLabel() {
        return this.secondaryLabel != null;
      }
      get selectableState() {
        return this[_selectableState];
      }
      set selectableState(value) {
        if (value == this[_selectableState]) return;
        this[_selectableState] = value;
        this.notifyPropertyChange(SelectableOptionL(), C7 || CT.C7, this[_selectableState], value);
      }
      get [_action$]() {
        return VoidToLvoid().as(this.noSuchMethod(new core._Invocation.getter(C8 || CT.C8)));
      }
      get [_actionWithContext$]() {
        return dynamicToLvoid().as(this.noSuchMethod(new core._Invocation.getter(C9 || CT.C9)));
      }
      set [_action$](value) {
        return this.noSuchMethod(new core._Invocation.setter(C10 || CT.C10, value));
      }
      set [_actionWithContext$](value) {
        return this.noSuchMethod(new core._Invocation.setter(C11 || CT.C11, value));
      }
    }
    (SelectableMenuItem.new = function(opts) {
      let t0, t0$, t0$0;
      let value = opts && 'value' in opts ? opts.value : null;
      let itemRenderer = opts && 'itemRenderer' in opts ? opts.itemRenderer : C0 || CT.C0;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let subMenu = opts && 'subMenu' in opts ? opts.subMenu : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let secondaryLabel = opts && 'secondaryLabel' in opts ? opts.secondaryLabel : null;
      let labelAnnotation = opts && 'labelAnnotation' in opts ? opts.labelAnnotation : null;
      let cssClasses = opts && 'cssClasses' in opts ? opts.cssClasses : null;
      let action = opts && 'action' in opts ? opts.action : null;
      let actionWithContext = opts && 'actionWithContext' in opts ? opts.actionWithContext : null;
      let selectableState = opts && 'selectableState' in opts ? opts.selectableState : C1 || CT.C1;
      let shouldSelectOnItemClick = opts && 'shouldSelectOnItemClick' in opts ? opts.shouldSelectOnItemClick : null;
      let itemSuffix = opts && 'itemSuffix' in opts ? opts.itemSuffix : null;
      let itemSuffixes = opts && 'itemSuffixes' in opts ? opts.itemSuffixes : null;
      this[_action$0] = null;
      this[_actionWithContext$0] = null;
      this[ariaChecked] = null;
      this[value$] = value;
      this[itemRenderer$] = itemRenderer;
      this[icon$] = icon;
      this[subMenu$] = subMenu;
      this[tooltip$] = tooltip;
      this[secondaryLabel$] = secondaryLabel;
      this[labelAnnotation$] = labelAnnotation;
      this[_selectableState] = selectableState;
      this[shouldSelectOnItemClick$] = (t0 = shouldSelectOnItemClick, t0 == null ? subMenu == null : t0);
      this[itemSuffixes$] = (t0$ = itemSuffixes, t0$ == null ? new (ObservableListOfMenuItemAffixL()).from(new optional.Optional.fromNullable(itemSuffix)) : t0$);
      this[cssClasses$] = BuiltListOfStringL().new(IterableL().as((t0$0 = cssClasses, t0$0 == null ? C2 || CT.C2 : t0$0)));
      SelectableMenuItem.__proto__.new.call(this);
      if (!(itemSuffix == null || itemSuffixes == null)) dart.assertFailed("Only one of itemSuffix or itemSuffixes should be provided", L0, 148, 12, "itemSuffix == null || itemSuffixes == null");
      if (!(action == null || actionWithContext == null)) dart.assertFailed("Only one of action or actionWithContext should be provided", L0, 150, 12, "action == null || actionWithContext == null");
      if (action != null) {
        this[_action] = action;
        this[_actionWithContext] = dart.fn(_ => action(), dynamicTovoid());
      } else if (actionWithContext != null) {
        this[_action] = dart.fn(() => actionWithContext(null), VoidTovoid());
        this[_actionWithContext] = actionWithContext;
      } else {
        this[_action] = C3 || CT.C3;
        this[_actionWithContext] = C4 || CT.C4;
      }
    }).prototype = SelectableMenuItem.prototype;
    dart.addTypeTests(SelectableMenuItem);
    SelectableMenuItem.prototype[_is_SelectableMenuItem_default] = true;
    dart.addTypeCaches(SelectableMenuItem);
    SelectableMenuItem[dart.implements] = () => [menu.MenuItem];
    dart.setGetterSignature(SelectableMenuItem, () => ({
      __proto__: dart.getGetters(SelectableMenuItem.__proto__),
      label: dart.legacy(core.String),
      ariaLabel: dart.legacy(core.String),
      hasIcon: dart.legacy(core.bool),
      hasSubMenu: dart.legacy(core.bool),
      showTooltip: dart.legacy(core.bool),
      uiIcon: dart.legacy(icon.Icon),
      uiDisplayName: dart.legacy(core.String),
      enabled: dart.legacy(core.bool),
      action: dart.legacy(dart.fnType(dart.void, [])),
      actionWithContext: dart.legacy(dart.fnType(dart.void, [dart.dynamic])),
      hasSecondaryLabel: dart.legacy(core.bool),
      selectableState: dart.legacy(selectable.SelectableOption),
      [_action$]: dart.legacy(dart.fnType(dart.void, [])),
      [_actionWithContext$]: dart.legacy(dart.fnType(dart.void, [dart.dynamic]))
    }));
    dart.setSetterSignature(SelectableMenuItem, () => ({
      __proto__: dart.getSetters(SelectableMenuItem.__proto__),
      enabled: dart.legacy(core.bool),
      action: dart.legacy(dart.fnType(dart.void, [])),
      actionWithContext: dart.legacy(dart.fnType(dart.void, [dart.dynamic])),
      selectableState: dart.legacy(selectable.SelectableOption),
      [_action$]: dart.legacy(dart.fnType(dart.void, [])),
      [_actionWithContext$]: dart.legacy(dart.fnType(dart.void, [dart.dynamic]))
    }));
    dart.setLibraryUri(SelectableMenuItem, L1);
    dart.setFieldSignature(SelectableMenuItem, () => ({
      __proto__: dart.getFields(SelectableMenuItem.__proto__),
      [_action]: dart.fieldType(dart.legacy(dart.fnType(dart.void, []))),
      [_actionWithContext]: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.dynamic]))),
      [_selectableState]: dart.fieldType(dart.legacy(selectable.SelectableOption)),
      ariaChecked: dart.fieldType(dart.legacy(core.String)),
      itemRenderer: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(ItemType)]))),
      value: dart.finalFieldType(dart.legacy(ItemType)),
      shouldSelectOnItemClick: dart.finalFieldType(dart.legacy(core.bool)),
      icon: dart.finalFieldType(dart.legacy(icon.Icon)),
      subMenu: dart.finalFieldType(dart.legacy(menu.MenuModel)),
      tooltip: dart.finalFieldType(dart.legacy(core.String)),
      labelAnnotation: dart.finalFieldType(dart.legacy(core.String)),
      itemSuffixes: dart.finalFieldType(dart.legacy(observable_list.ObservableList$(dart.legacy(menu_item_affix.MenuItemAffix)))),
      cssClasses: dart.finalFieldType(dart.legacy(list.BuiltList$(dart.legacy(core.String)))),
      secondaryLabel: dart.finalFieldType(dart.legacy(core.String))
    }));
    return SelectableMenuItem;
  });
  selectable_menu.SelectableMenuItem = selectable_menu.SelectableMenuItem$();
  dart.addTypeTests(selectable_menu.SelectableMenuItem, _is_SelectableMenuItem_default);
  const _is_MenuItemGroupWithSelection_default = Symbol('_is_MenuItemGroupWithSelection_default');
  var selectionModel$ = dart.privateName(selectable_menu, "MenuItemGroupWithSelection.selectionModel");
  var itemsRole = dart.privateName(selectable_menu, "MenuItemGroupWithSelection.itemsRole");
  var shouldCloseMenuOnSelection$ = dart.privateName(selectable_menu, "MenuItemGroupWithSelection.shouldCloseMenuOnSelection");
  selectable_menu.MenuItemGroupWithSelection$ = dart.generic(SelectionItemType => {
    var SelectionItemTypeL = () => (SelectionItemTypeL = dart.constFn(dart.legacy(SelectionItemType)))();
    class MenuItemGroupWithSelection extends menu.MenuItemGroup$(dart.legacy(selectable_menu.SelectableMenuItem$(dart.legacy(SelectionItemType)))) {
      get selectionModel() {
        return this[selectionModel$];
      }
      set selectionModel(value) {
        super.selectionModel = value;
      }
      get itemsRole() {
        return this[itemsRole];
      }
      set itemsRole(value) {
        super.itemsRole = value;
      }
      get shouldCloseMenuOnSelection() {
        return this[shouldCloseMenuOnSelection$];
      }
      set shouldCloseMenuOnSelection(value) {
        super.shouldCloseMenuOnSelection = value;
      }
      get isMultiSelect() {
        return MultiSelectionModelL().is(this.selectionModel);
      }
      getSelectable(item) {
        SelectionItemTypeL().as(item);
        for (let menuItem of this) {
          if (dart.equals(menuItem.value, item)) return menuItem.selectableState;
        }
        return selectable.SelectableOption.Selectable;
      }
    }
    (MenuItemGroupWithSelection.new = function(opts) {
      let t0, t0$, t0$0;
      let items = opts && 'items' in opts ? opts.items : null;
      let selectionModel = opts && 'selectionModel' in opts ? opts.selectionModel : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let shouldCloseMenuOnSelection = opts && 'shouldCloseMenuOnSelection' in opts ? opts.shouldCloseMenuOnSelection : null;
      this[selectionModel$] = selectionModel;
      this[shouldCloseMenuOnSelection$] = (t0 = shouldCloseMenuOnSelection, t0 == null ? !MultiSelectionModelL().is(selectionModel) : t0);
      this[itemsRole] = dart.test((t0$0 = (t0$ = selectionModel, t0$ == null ? null : t0$.isSingleSelect), t0$0 == null ? true : t0$0)) ? "menuitemradio" : "menuitemcheckbox";
      MenuItemGroupWithSelection.__proto__.new.call(this, items, label);
      ;
    }).prototype = MenuItemGroupWithSelection.prototype;
    dart.addTypeTests(MenuItemGroupWithSelection);
    MenuItemGroupWithSelection.prototype[_is_MenuItemGroupWithSelection_default] = true;
    dart.addTypeCaches(MenuItemGroupWithSelection);
    MenuItemGroupWithSelection[dart.implements] = () => [selectable.Selectable$(dart.legacy(SelectionItemType))];
    dart.setMethodSignature(MenuItemGroupWithSelection, () => ({
      __proto__: dart.getMethods(MenuItemGroupWithSelection.__proto__),
      getSelectable: dart.fnType(dart.legacy(selectable.SelectableOption), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(MenuItemGroupWithSelection, () => ({
      __proto__: dart.getGetters(MenuItemGroupWithSelection.__proto__),
      isMultiSelect: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(MenuItemGroupWithSelection, L1);
    dart.setFieldSignature(MenuItemGroupWithSelection, () => ({
      __proto__: dart.getFields(MenuItemGroupWithSelection.__proto__),
      selectionModel: dart.finalFieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(SelectionItemType)))),
      itemsRole: dart.finalFieldType(dart.legacy(core.String)),
      shouldCloseMenuOnSelection: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return MenuItemGroupWithSelection;
  });
  selectable_menu.MenuItemGroupWithSelection = selectable_menu.MenuItemGroupWithSelection$();
  dart.addTypeTests(selectable_menu.MenuItemGroupWithSelection, _is_MenuItemGroupWithSelection_default);
  selectable_menu._noOp = function _noOp() {
  };
  selectable_menu._noOp2 = function _noOp2(_) {
  };
  dart.trackLibraries("packages/angular_components/model/menu/selectable_menu", {
    "package:angular_components/model/menu/selectable_menu.dart": selectable_menu
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selectable_menu.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAsEa;;;;;;MACO;;;;;;MAEX;;;;;;MAKsB;;;;;;MAMd;;;;;;MAOJ;;;;;;MAGA;;;;;;MAGK;;;;;;MAGH;;;;;;MAGA;;;;;;MAGuB;;;;;;MAGZ;;;;;;MAGX;;;;;;;;AAoDO,aAAa;cAAb,AAAY;MAAO;;AAGf;MAAK;;AAGT,cAAA,AAAK,cAAG;MAAI;;AAGT,cAAA,AAAQ,iBAAG;MAAI;;AAGd,kCAAW;MAAQ;;AAGxB;MAAI;;AAGK;MAAK;;AAGb,cAAA,AAAgB,yBAAoB;MAAU;kBAGjD;AAEoD,QADnE,iCACI,KAAK,IAAoB,yCAA8B;MAC7D;;AAGyB;MAAO;iBAGV;AACpB,YAAU,YAAN,KAAK,EAAI,gBAAS;AAEP,QAAf,gBAAU,KAAK;AACoB,QAAnC,2BAAqB,QAAC,KAAM,AAAK,KAAA;AACY,QAA7C,sDAA8B,eAAS,KAAK;MAC9C;;AAG2C;MAAkB;4BAGrB;AACtC,YAAU,YAAN,KAAK,EAAI,2BAAoB;AAEP,QAA1B,2BAAqB,KAAK;AACC,QAA3B,gBAAU,cAAM,AAAK,KAAA,CAAC;AAC6C,QAAnE,yDAAyC,0BAAoB,KAAK;MACpE;;AAG8B,cAAA,AAAe,wBAAG;MAAI;;AAGZ;MAAgB;0BAEnB;AACnC,YAAI,AAAM,KAAD,IAAI,wBAAkB;AAEP,QAAxB,yBAAmB,KAAK;AACuC,QAA/D,4DAAuC,wBAAkB,KAAK;MAChE;;;;;;;;;;;;;;;;UArGoB;UACX;UACA;UACA;UACA;UACA;UACA;UACY;UACN;UACO;UACD;UACZ;UACS;UACgB;MAtEvB;MACO;MAEX;MAsDa;MACX;MACA;MACA;MACA;MACA;MACA;MAQc,yBAAE,eAAe;MACV,kCAA0B,KAAxB,uBAAuB,QAAvB,OAA2B,AAAQ,OAAD,IAAI;MACnD,uBAAe,MAAb,YAAY,SAAZ,OACX,4CACa,mCAAa,UAAU;MAC7B,oBAAE,yCAA6B,OAAX,UAAU,UAAV;AApBrC;AAqBE,YAAO,AAAW,AAAQ,UAAT,IAAI,QAAQ,AAAa,YAAD,IAAI,yBACzC;AACJ,YAAO,AAAO,AAAQ,MAAT,IAAI,QAAQ,AAAkB,iBAAD,IAAI,yBAC1C;AACJ,UAAI,MAAM,IAAI;AACI,QAAhB,gBAAU,MAAM;AACoB,QAApC,2BAAqB,QAAC,KAAM,AAAM,MAAA;YAC7B,KAAI,iBAAiB,IAAI;AACS,QAAvC,gBAAU,cAAM,AAAiB,iBAAA,CAAC;AACI,QAAtC,2BAAqB,iBAAiB;;AAEvB,QAAf;AAC2B,QAA3B;;IAEJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA1IwC;;;;;;MAU3B;;;;;;MAGF;;;;;;;AAmBe,cAAe,2BAAf;MAAqC;;gCAGd;AAC/C,iBAAW,WAAY;AACrB,cAAmB,YAAf,AAAS,QAAD,QAAU,IAAI,GAAE,MAAO,AAAS,SAAD;;AAG7C,cAAwB;MAC1B;;;;UAzB2D;UACxC;UACR;UACF;MAFU;MAGc,qCAA6B,KAA3B,0BAA0B,QAA1B,OACR,CAAF,0BAAf,cAAc;MACR,6BAAkC,cAA/B,cAAc,gBAAd,OAAgB,6BAAhB,OAAkC,gBACzC,kBACA;AACN,0DAAM,KAAK,EAAE,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;EAuLb;2CACF;EAAI","file":"selectable_menu.unsound.ddc.js"}');
  // Exports:
  return {
    model__menu__selectable_menu: selectable_menu
  };
}));

//# sourceMappingURL=selectable_menu.unsound.ddc.js.map
