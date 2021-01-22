define(['dart_sdk', 'packages/angular_components/model/observable/observable', 'packages/angular_components/model/collection/labeled_list', 'packages/quiver/strings', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/ui/icon', 'packages/angular_components/model/ui/accepts_width', 'packages/observable/observable', 'packages/angular_components/model/menu/menu_item_affix', 'packages/quiver/core', 'packages/built_collection/built_collection', 'packages/angular_components/model/ui/display_name', 'packages/angular_components/model/collection/combined_list', 'packages/angular_components/model/a11y/active_item'], (function load__packages__angular_components__model__menu__menu(dart_sdk, packages__angular_components__model__observable__observable, packages__angular_components__model__collection__labeled_list, packages__quiver__strings, packages__angular_components__utils__angular__properties__properties, packages__angular_components__model__ui__icon, packages__angular_components__model__ui__accepts_width, packages__observable__observable, packages__angular_components__model__menu__menu_item_affix, packages__quiver__core, packages__built_collection__built_collection, packages__angular_components__model__ui__display_name, packages__angular_components__model__collection__combined_list, packages__angular_components__model__a11y__active_item) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const labeled_list = packages__angular_components__model__collection__labeled_list.model__collection__labeled_list;
  const strings = packages__quiver__strings.strings;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  const icon = packages__angular_components__model__ui__icon.model__ui__icon;
  const accepts_width = packages__angular_components__model__ui__accepts_width.model__ui__accepts_width;
  const observable_list = packages__observable__observable.src__observable_list;
  const menu_item_affix = packages__angular_components__model__menu__menu_item_affix.model__menu__menu_item_affix;
  const optional = packages__quiver__core.src__core__optional;
  const list = packages__built_collection__built_collection.src__list;
  const display_name = packages__angular_components__model__ui__display_name.model__ui__display_name;
  const combined_list = packages__angular_components__model__collection__combined_list.model__collection__combined_list;
  const active_item = packages__angular_components__model__a11y__active_item.model__a11y__active_item;
  var menu$ = Object.create(dart.library);
  var $join = dartx.join;
  var $toString = dartx.toString;
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $map = dartx.map;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ObservableReferenceOfboolL = () => (ObservableReferenceOfboolL = dart.constFn(observable.ObservableReference$(boolL())))();
  var MenuItemAffixL = () => (MenuItemAffixL = dart.constFn(dart.legacy(menu_item_affix.MenuItemAffix)))();
  var ObservableListOfMenuItemAffixL = () => (ObservableListOfMenuItemAffixL = dart.constFn(observable_list.ObservableList$(MenuItemAffixL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var BuiltListOfStringL = () => (BuiltListOfStringL = dart.constFn(list.BuiltList$(StringL())))();
  var IterableL = () => (IterableL = dart.constFn(dart.legacy(core.Iterable)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var MenuItemAffixLToStringL = () => (MenuItemAffixLToStringL = dart.constFn(dart.fnType(StringL(), [MenuItemAffixL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var MenuItemL = () => (MenuItemL = dart.constFn(dart.legacy(menu$.MenuItem)))();
  const CT = Object.create(null);
  var L1 = "org-dartlang-app:///packages/angular_components/model/menu/menu.dart";
  var L0 = "package:angular_components/model/menu/menu.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _hasSeparator = dart.privateName(menu$, "_hasSeparator");
  var _isCollapsible = dart.privateName(menu$, "_isCollapsible");
  var _isExpanded = dart.privateName(menu$, "_isExpanded");
  const _is_MenuItemGroup_default = Symbol('_is_MenuItemGroup_default');
  var itemsRole = dart.privateName(menu$, "MenuItemGroup.itemsRole");
  menu$.MenuItemGroup$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ListOfTL = () => (ListOfTL = dart.constFn(core.List$(TL())))();
    class MenuItemGroup extends labeled_list.LabeledList$(dart.legacy(T)) {
      get itemsRole() {
        return this[itemsRole];
      }
      set itemsRole(value) {
        super.itemsRole = value;
      }
      get hasSeparator() {
        return this[_hasSeparator].value;
      }
      set hasSeparator(value) {
        this[_hasSeparator].value = value;
      }
      get isCollapsible() {
        return this[_isCollapsible].value;
      }
      set isCollapsible(value) {
        this[_isCollapsible].value = value;
      }
      get onCollapsibleChange() {
        return this[_isCollapsible].stream;
      }
      get isExpanded() {
        return this[_isExpanded].value;
      }
      set isExpanded(value) {
        this[_isExpanded].value = value;
      }
      get onExpandedChange() {
        return this[_isExpanded].stream;
      }
    }
    (MenuItemGroup.new = function(items, label = null, hasSeparator = true, isCollapsible = false, isExpanded = true) {
      this[itemsRole] = "menuitem";
      this[_hasSeparator] = new (ObservableReferenceOfboolL()).new(hasSeparator);
      this[_isCollapsible] = new (ObservableReferenceOfboolL()).new(isCollapsible);
      this[_isExpanded] = new (ObservableReferenceOfboolL()).new(isExpanded);
      MenuItemGroup.__proto__.withLabel.call(this, ListOfTL().unmodifiable(items), label);
      ;
    }).prototype = MenuItemGroup.prototype;
    dart.addTypeTests(MenuItemGroup);
    MenuItemGroup.prototype[_is_MenuItemGroup_default] = true;
    dart.addTypeCaches(MenuItemGroup);
    dart.setGetterSignature(MenuItemGroup, () => ({
      __proto__: dart.getGetters(MenuItemGroup.__proto__),
      hasSeparator: dart.legacy(core.bool),
      isCollapsible: dart.legacy(core.bool),
      onCollapsibleChange: dart.legacy(async.Stream$(dart.legacy(core.bool))),
      isExpanded: dart.legacy(core.bool),
      onExpandedChange: dart.legacy(async.Stream$(dart.legacy(core.bool)))
    }));
    dart.setSetterSignature(MenuItemGroup, () => ({
      __proto__: dart.getSetters(MenuItemGroup.__proto__),
      hasSeparator: dart.legacy(core.bool),
      isCollapsible: dart.legacy(core.bool),
      isExpanded: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(MenuItemGroup, L0);
    dart.setFieldSignature(MenuItemGroup, () => ({
      __proto__: dart.getFields(MenuItemGroup.__proto__),
      [_isCollapsible]: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(core.bool)))),
      [_isExpanded]: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(core.bool)))),
      [_hasSeparator]: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(core.bool)))),
      itemsRole: dart.finalFieldType(dart.legacy(core.String))
    }));
    return MenuItemGroup;
  });
  menu$.MenuItemGroup = menu$.MenuItemGroup$();
  dart.addTypeTests(menu$.MenuItemGroup, _is_MenuItemGroup_default);
  var _width = dart.privateName(menu$, "_width");
  const _is_MenuModel_default = Symbol('_is_MenuModel_default');
  var itemGroups$ = dart.privateName(menu$, "MenuModel.itemGroups");
  var icon$ = dart.privateName(menu$, "MenuModel.icon");
  var tooltipText$ = dart.privateName(menu$, "MenuModel.tooltipText");
  menu$.MenuModel$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MenuItemGroupOfTL = () => (MenuItemGroupOfTL = dart.constFn(menu$.MenuItemGroup$(TL())))();
    var MenuItemGroupLOfTL = () => (MenuItemGroupLOfTL = dart.constFn(dart.legacy(MenuItemGroupOfTL())))();
    var ListOfMenuItemGroupLOfTL = () => (ListOfMenuItemGroupLOfTL = dart.constFn(core.List$(MenuItemGroupLOfTL())))();
    var JSArrayOfMenuItemGroupLOfTL = () => (JSArrayOfMenuItemGroupLOfTL = dart.constFn(_interceptors.JSArray$(MenuItemGroupLOfTL())))();
    class MenuModel extends core.Object {
      get itemGroups() {
        return this[itemGroups$];
      }
      set itemGroups(value) {
        super.itemGroups = value;
      }
      get icon() {
        return this[icon$];
      }
      set icon(value) {
        super.icon = value;
      }
      get tooltipText() {
        return this[tooltipText$];
      }
      set tooltipText(value) {
        super.tooltipText = value;
      }
      get uiIcon() {
        return this.icon;
      }
      get hasIcon() {
        return this.icon != null;
      }
      get hasTooltip() {
        return strings.isNotEmpty(this.tooltipText);
      }
      get width() {
        return this[_width];
      }
      set width(val) {
        if (val == null) {
          this[_width] = null;
        } else {
          this[_width] = properties.getInt(val);
          if (!(dart.notNull(this[_width]) >= 0 && dart.notNull(this[_width]) <= 5)) dart.assertFailed(null, L1, 125, 14, "_width >= 0 && _width <= 5");
        }
      }
    }
    (MenuModel.new = function(itemGroups, opts) {
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let tooltipText = opts && 'tooltipText' in opts ? opts.tooltipText : null;
      this[_width] = null;
      this[icon$] = icon;
      this[tooltipText$] = tooltipText;
      this[itemGroups$] = ListOfMenuItemGroupLOfTL().unmodifiable(itemGroups);
      this.width = width;
    }).prototype = MenuModel.prototype;
    (MenuModel.flat = function(items, opts) {
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let tooltipText = opts && 'tooltipText' in opts ? opts.tooltipText : null;
      this[_width] = null;
      this[icon$] = icon;
      this[tooltipText$] = tooltipText;
      this[itemGroups$] = JSArrayOfMenuItemGroupLOfTL().of([new (MenuItemGroupOfTL()).new(items)]);
      this.width = width;
    }).prototype = MenuModel.prototype;
    dart.addTypeTests(MenuModel);
    MenuModel.prototype[_is_MenuModel_default] = true;
    dart.addTypeCaches(MenuModel);
    MenuModel[dart.implements] = () => [icon.HasIcon, accepts_width.AcceptsWidth];
    dart.setGetterSignature(MenuModel, () => ({
      __proto__: dart.getGetters(MenuModel.__proto__),
      uiIcon: dart.legacy(icon.Icon),
      hasIcon: dart.legacy(core.bool),
      hasTooltip: dart.legacy(core.bool),
      width: dart.legacy(core.int)
    }));
    dart.setSetterSignature(MenuModel, () => ({
      __proto__: dart.getSetters(MenuModel.__proto__),
      width: dart.dynamic
    }));
    dart.setLibraryUri(MenuModel, L0);
    dart.setFieldSignature(MenuModel, () => ({
      __proto__: dart.getFields(MenuModel.__proto__),
      itemGroups: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(menu$.MenuItemGroup$(dart.legacy(T)))))),
      icon: dart.finalFieldType(dart.legacy(icon.Icon)),
      tooltipText: dart.finalFieldType(dart.legacy(core.String)),
      [_width]: dart.fieldType(dart.legacy(core.int))
    }));
    return MenuModel;
  });
  menu$.MenuModel = menu$.MenuModel$();
  dart.addTypeTests(menu$.MenuModel, _is_MenuModel_default);
  var _actionWithContext = dart.privateName(menu$, "_actionWithContext");
  var _action = dart.privateName(menu$, "_action");
  var C0;
  menu$.MenuItemMixin = class MenuItemMixin extends core.Object {
    get hasIcon() {
      return this.icon != null;
    }
    get uiDisplayName() {
      return this.label;
    }
    get uiIcon() {
      return this.icon;
    }
    get hasSubMenu() {
      return this.subMenu != null;
    }
    get hasSecondaryLabel() {
      return this.secondaryLabel != null;
    }
    get showTooltip() {
      return strings.isNotEmpty(this.tooltip);
    }
  };
  (menu$.MenuItemMixin.new = function() {
    ;
  }).prototype = menu$.MenuItemMixin.prototype;
  dart.addTypeTests(menu$.MenuItemMixin);
  dart.addTypeCaches(menu$.MenuItemMixin);
  menu$.MenuItemMixin[dart.implements] = () => [menu$._MenuItemBase];
  dart.setGetterSignature(menu$.MenuItemMixin, () => ({
    __proto__: dart.getGetters(menu$.MenuItemMixin.__proto__),
    hasIcon: dart.legacy(core.bool),
    uiDisplayName: dart.legacy(core.String),
    uiIcon: dart.legacy(icon.Icon),
    hasSubMenu: dart.legacy(core.bool),
    hasSecondaryLabel: dart.legacy(core.bool),
    showTooltip: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(menu$.MenuItemMixin, L0);
  const _is_MenuItem_default = Symbol('_is_MenuItem_default');
  var label$ = dart.privateName(menu$, "MenuItem.label");
  var secondaryLabel$ = dart.privateName(menu$, "MenuItem.secondaryLabel");
  var tooltip$ = dart.privateName(menu$, "MenuItem.tooltip");
  var ariaLabel$ = dart.privateName(menu$, "MenuItem.ariaLabel");
  var labelAnnotation$ = dart.privateName(menu$, "MenuItem.labelAnnotation");
  var subMenu$ = dart.privateName(menu$, "MenuItem.subMenu");
  var icon$0 = dart.privateName(menu$, "MenuItem.icon");
  var itemSuffixes$ = dart.privateName(menu$, "MenuItem.itemSuffixes");
  var cssClasses$ = dart.privateName(menu$, "MenuItem.cssClasses");
  var enabled$ = dart.privateName(menu$, "MenuItem.enabled");
  menu$.MenuItem$ = dart.generic(T => {
    const Object_MenuItemMixin$36 = class Object_MenuItemMixin extends core.Object {};
    (Object_MenuItemMixin$36.new = function() {
    }).prototype = Object_MenuItemMixin$36.prototype;
    dart.applyMixin(Object_MenuItemMixin$36, menu$.MenuItemMixin);
    class MenuItem extends Object_MenuItemMixin$36 {
      get label() {
        return this[label$];
      }
      set label(value) {
        super.label = value;
      }
      get secondaryLabel() {
        return this[secondaryLabel$];
      }
      set secondaryLabel(value) {
        super.secondaryLabel = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get ariaLabel() {
        return this[ariaLabel$];
      }
      set ariaLabel(value) {
        super.ariaLabel = value;
      }
      get labelAnnotation() {
        return this[labelAnnotation$];
      }
      set labelAnnotation(value) {
        super.labelAnnotation = value;
      }
      get subMenu() {
        return this[subMenu$];
      }
      set subMenu(value) {
        super.subMenu = value;
      }
      get icon() {
        return this[icon$0];
      }
      set icon(value) {
        super.icon = value;
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
      get enabled() {
        return this[enabled$];
      }
      set enabled(value) {
        this[enabled$] = value;
      }
      get actionWithContext() {
        return this[_actionWithContext];
      }
      set actionWithContext(value) {
        this[_actionWithContext] = value;
        this[_action] = dart.fn(() => value(null), VoidTovoid());
      }
      get action() {
        return this[_action];
      }
      set action(value) {
        this[_action] = value;
        this[_actionWithContext] = dart.fn(_ => value(), dynamicTovoid());
      }
      toString() {
        return new (IdentityMapOfStringL$ObjectL()).from(["label", this.label, "secondaryLabel", this.secondaryLabel, "labelAnnotation", this.labelAnnotation, "enabled", this.enabled, "icon", this.icon, "suffixes", this.itemSuffixes.map(StringL(), dart.fn(affix => dart.str(affix), MenuItemAffixLToStringL()))[$join](",")])[$toString]();
      }
    }
    (MenuItem.new = function(label, opts) {
      let t0, t0$, t0$0;
      let enabled = opts && 'enabled' in opts ? opts.enabled : true;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let action = opts && 'action' in opts ? opts.action : null;
      let actionWithContext = opts && 'actionWithContext' in opts ? opts.actionWithContext : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let labelAnnotation = opts && 'labelAnnotation' in opts ? opts.labelAnnotation : null;
      let cssClasses = opts && 'cssClasses' in opts ? opts.cssClasses : null;
      let itemSuffix = opts && 'itemSuffix' in opts ? opts.itemSuffix : null;
      let itemSuffixes = opts && 'itemSuffixes' in opts ? opts.itemSuffixes : null;
      let subMenu = opts && 'subMenu' in opts ? opts.subMenu : null;
      let secondaryLabel = opts && 'secondaryLabel' in opts ? opts.secondaryLabel : null;
      let ariaLabel = opts && 'ariaLabel' in opts ? opts.ariaLabel : null;
      this[_actionWithContext] = null;
      this[_action] = null;
      this[label$] = label;
      this[enabled$] = enabled;
      this[tooltip$] = tooltip;
      this[icon$0] = icon;
      this[labelAnnotation$] = labelAnnotation;
      this[subMenu$] = subMenu;
      this[secondaryLabel$] = secondaryLabel;
      this[itemSuffixes$] = (t0 = itemSuffixes, t0 == null ? new (ObservableListOfMenuItemAffixL()).from(new optional.Optional.fromNullable(itemSuffix)) : t0);
      this[cssClasses$] = BuiltListOfStringL().new(IterableL().as((t0$ = cssClasses, t0$ == null ? C0 || CT.C0 : t0$)));
      this[ariaLabel$] = (t0$0 = ariaLabel, t0$0 == null ? label : t0$0);
      if (!(itemSuffix == null || itemSuffixes == null)) dart.assertFailed("Only one of itemSuffix or itemSuffixes should be provided", L1, 222, 12, "itemSuffix == null || itemSuffixes == null");
      if (!(action == null || actionWithContext == null)) dart.assertFailed("Only one of action or actionWithContext should be provided", L1, 224, 12, "action == null || actionWithContext == null");
      if (action != null) {
        this.action = action;
      } else if (actionWithContext != null) {
        this.actionWithContext = actionWithContext;
      }
    }).prototype = MenuItem.prototype;
    dart.addTypeTests(MenuItem);
    MenuItem.prototype[_is_MenuItem_default] = true;
    dart.addTypeCaches(MenuItem);
    MenuItem[dart.implements] = () => [display_name.HasUIDisplayName, icon.HasIcon];
    dart.setMethodSignature(MenuItem, () => ({
      __proto__: dart.getMethods(MenuItem.__proto__),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(MenuItem, () => ({
      __proto__: dart.getGetters(MenuItem.__proto__),
      actionWithContext: dart.legacy(dart.fnType(dart.void, [dart.dynamic])),
      action: dart.legacy(dart.fnType(dart.void, []))
    }));
    dart.setSetterSignature(MenuItem, () => ({
      __proto__: dart.getSetters(MenuItem.__proto__),
      actionWithContext: dart.legacy(dart.fnType(dart.void, [dart.dynamic])),
      action: dart.legacy(dart.fnType(dart.void, []))
    }));
    dart.setLibraryUri(MenuItem, L0);
    dart.setFieldSignature(MenuItem, () => ({
      __proto__: dart.getFields(MenuItem.__proto__),
      label: dart.finalFieldType(dart.legacy(core.String)),
      secondaryLabel: dart.finalFieldType(dart.legacy(core.String)),
      tooltip: dart.finalFieldType(dart.legacy(core.String)),
      ariaLabel: dart.finalFieldType(dart.legacy(core.String)),
      labelAnnotation: dart.finalFieldType(dart.legacy(core.String)),
      subMenu: dart.finalFieldType(dart.legacy(menu$.MenuModel$(dart.legacy(T)))),
      [_actionWithContext]: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.dynamic]))),
      [_action]: dart.fieldType(dart.legacy(dart.fnType(dart.void, []))),
      icon: dart.finalFieldType(dart.legacy(icon.Icon)),
      itemSuffixes: dart.finalFieldType(dart.legacy(observable_list.ObservableList$(dart.legacy(menu_item_affix.MenuItemAffix)))),
      cssClasses: dart.finalFieldType(dart.legacy(list.BuiltList$(dart.legacy(core.String)))),
      enabled: dart.fieldType(dart.legacy(core.bool))
    }));
    dart.defineExtensionMethods(MenuItem, ['toString']);
    return MenuItem;
  });
  menu$.MenuItem = menu$.MenuItem$();
  dart.addTypeTests(menu$.MenuItem, _is_MenuItem_default);
  menu$._MenuItemBase = class _MenuItemBase extends core.Object {};
  (menu$._MenuItemBase.new = function() {
    ;
  }).prototype = menu$._MenuItemBase.prototype;
  dart.addTypeTests(menu$._MenuItemBase);
  dart.addTypeCaches(menu$._MenuItemBase);
  dart.setLibraryUri(menu$._MenuItemBase, L0);
  menu$.NullMenuItem = class NullMenuItem extends menu$.MenuItem {
    static new() {
      dart.throw(new core.UnsupportedError.new("Should be never instantiatied"));
    }
  };
  dart.addTypeTests(menu$.NullMenuItem);
  dart.addTypeCaches(menu$.NullMenuItem);
  dart.setLibraryUri(menu$.NullMenuItem, L0);
  var _filterOutUnselectableItems = dart.privateName(menu$, "_filterOutUnselectableItems");
  const _is_ActiveMenuItemModel_default = Symbol('_is_ActiveMenuItemModel_default');
  menu$.ActiveMenuItemModel$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MenuModelOfTL = () => (MenuModelOfTL = dart.constFn(menu$.MenuModel$(TL())))();
    var MenuModelLOfTL = () => (MenuModelLOfTL = dart.constFn(dart.legacy(MenuModelOfTL())))();
    var ListOfTL = () => (ListOfTL = dart.constFn(core.List$(TL())))();
    var ListLOfTL = () => (ListLOfTL = dart.constFn(dart.legacy(ListOfTL())))();
    class ActiveMenuItemModel extends active_item.ActiveItemModel$(dart.legacy(T)) {
      set menu(menu) {
        let t0;
        MenuModelLOfTL().as(menu);
        super.items = menu$.ActiveMenuItemModel._createEnabledItemGroupList(TL(), (t0 = menu, t0 == null ? null : t0.itemGroups), this[_filterOutUnselectableItems]);
      }
      set items(_) {
        ListLOfTL().as(_);
        dart.throw(new core.UnsupportedError.new("ActiveMenuItemModel items can only be updated" + "by setting #menu"));
      }
      static _createEnabledItemGroupList(T, menuGroups, filterOutUnselectableItems) {
        if (menuGroups == null) return new (combined_list.CombinedList$(dart.legacy(T))).new(_interceptors.JSArray$(dart.legacy(core.List$(dart.legacy(T)))).of([]));
        if (!dart.test(filterOutUnselectableItems)) return new (combined_list.CombinedList$(dart.legacy(T))).new(menuGroups);
        return new (combined_list.CombinedList$(dart.legacy(T))).new(menuGroups[$map](dart.legacy(core.List$(dart.legacy(T))), dart.fn(group => group[$where](dart.fn(item => MenuItemL().is(item) ? item.enabled : true, dart.fnType(boolL(), [dart.legacy(T)])))[$toList](), dart.fnType(dart.legacy(core.List$(dart.legacy(T))), [dart.legacy(core.List$(dart.legacy(T)))])))[$toList]());
      }
    }
    (ActiveMenuItemModel.new = function(idGenerator, opts) {
      let t0;
      let menu = opts && 'menu' in opts ? opts.menu : null;
      let filterOutUnselectableItems = opts && 'filterOutUnselectableItems' in opts ? opts.filterOutUnselectableItems : false;
      this[_filterOutUnselectableItems] = filterOutUnselectableItems;
      ActiveMenuItemModel.__proto__.new.call(this, idGenerator, {items: menu$.ActiveMenuItemModel._createEnabledItemGroupList(TL(), (t0 = menu, t0 == null ? null : t0.itemGroups), filterOutUnselectableItems), loop: true});
      ;
    }).prototype = ActiveMenuItemModel.prototype;
    dart.addTypeTests(ActiveMenuItemModel);
    ActiveMenuItemModel.prototype[_is_ActiveMenuItemModel_default] = true;
    dart.addTypeCaches(ActiveMenuItemModel);
    dart.setSetterSignature(ActiveMenuItemModel, () => ({
      __proto__: dart.getSetters(ActiveMenuItemModel.__proto__),
      menu: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(ActiveMenuItemModel, L0);
    dart.setFieldSignature(ActiveMenuItemModel, () => ({
      __proto__: dart.getFields(ActiveMenuItemModel.__proto__),
      [_filterOutUnselectableItems]: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return ActiveMenuItemModel;
  });
  menu$.ActiveMenuItemModel = menu$.ActiveMenuItemModel$();
  dart.addTypeTests(menu$.ActiveMenuItemModel, _is_ActiveMenuItemModel_default);
  dart.setBaseClass(menu$.NullMenuItem, menu$.MenuItem$(menu$.NullMenuItem));
  dart.trackLibraries("packages/angular_components/model/menu/menu", {
    "package:angular_components/model/menu/menu.dart": menu$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAmCQ;;;;;;;AAamB,cAAA,AAAc;MAAK;uBAEtB;AACO,QAA3B,AAAc,4BAAQ,KAAK;MAC7B;;AAG0B,cAAA,AAAe;MAAK;wBAEvB;AACO,QAA5B,AAAe,6BAAQ,KAAK;MAC9B;;AAGwC,cAAA,AAAe;MAAM;;AAGtC,cAAA,AAAY;MAAK;qBAEpB;AACO,QAAzB,AAAY,0BAAQ,KAAK;MAC3B;;AAGqC,cAAA,AAAY;MAAM;;kCAnCjC,OACV,cACH,qBACA,uBACA;MANH,kBAAY;MAOE,sBAAE,uCAAoB,YAAY;MACjC,uBAAE,uCAAoB,aAAa;MACtC,oBAAE,uCAAoB,UAAU;AACtC,mDAAU,wBAAqB,KAAK,GAAG,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAqC5B;;;;;;MAGlB;;;;;;MAME;;;;;;;AAJM;MAAI;;AACH,cAAA,AAAK,cAAG;MAAI;;AAMT,kCAAW;MAAY;;AAsB7B;MAAM;gBAGb;AACR,YAAI,AAAI,GAAD,IAAI;AACI,UAAb,eAAS;;AAEW,UAApB,eAAS,kBAAO,GAAG;AACnB,gBAAc,AAAK,aAAZ,iBAAU,KAAY,aAAP,iBAAU;;MAEpC;;8BAzBiC;UACvB;UAAU;UAAY;MAN5B;MAMM;MAAsB;MACf,oBAAE,wCAAoC,UAAU;AAC7C,MAAb,aAAQ,KAAK;IACpB;+BAGuB;UAAa;UAAM;UAAY;MAZlD;MAYgC;MAAkB;MACrC,oBAAE,kCAAC,8BAAiB,KAAK;AACtB,MAAb,aAAQ,KAAK;IACpB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwJoB,YAAA,AAAK,cAAG;IAAI;;AAEJ;IAAK;;AAEd;IAAI;;AAEA,YAAA,AAAQ,iBAAG;IAAI;;AAER,YAAA,AAAe,wBAAG;IAAI;;AAE5B,gCAAW;IAAQ;;;;EAC7C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MApIe;;;;;;MACA;;;;;;MACA;;;;;;MACA;;;;;;MAOA;;;;;;MACM;;;;;;MAuBR;;;;;;MAGyB;;;;;;MAGZ;;;;;;MAEnB;;;;;;;AAxBsC;MAAkB;4BAErB;AACZ,QAA1B,2BAAqB,KAAK;AACC,QAA3B,gBAAU,cAAM,AAAK,KAAA,CAAC;MACxB;;AAKyB;MAAO;iBACV;AACL,QAAf,gBAAU,KAAK;AACoB,QAAnC,2BAAqB,QAAC,KAAM,AAAK,KAAA;MACnC;;AA2DqB,cAAA,AAOf,4CANA,SAAS,YACT,kBAAkB,qBAClB,mBAAmB,sBACnB,WAAW,cACX,QAAQ,WACR,YAAY,AAAa,AAAyB,iCAArB,QAAC,SAAkB,SAAN,KAAK,sCAAQ;MAC7C;;6BArCF;;UACJ;UACD;UAC2C;UAC9B;UACb;UACA;UACY;UACH;UACgB;UACzB;UACA;UACE;MA1DO;MAUP;MAoCG;MACJ;MACD;MAGA;MACA;MAIA;MACA;MAEU,uBAAe,KAAb,YAAY,QAAZ,OACX,4CACa,mCAAa,UAAU;MAC7B,oBAAE,yCAA6B,MAAX,UAAU,SAAV;MACrB,oBAAY,OAAV,SAAS,UAAT,OAAa,KAAK;AAClC,YAAO,AAAW,AAAQ,UAAT,IAAI,QAAQ,AAAa,YAAD,IAAI,yBACzC;AACJ,YAAO,AAAO,AAAQ,MAAT,IAAI,QAAQ,AAAkB,iBAAD,IAAI,yBAC1C;AACJ,UAAI,MAAM,IAAI;AACQ,QAAf,cAAS,MAAM;YACf,KAAI,iBAAiB,IAAI;AACY,QAArC,yBAAoB,iBAAiB;;IAE9C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAqBF;;;;;;AA6B2D,MAAvD,WAAM,8BAAiB;IACzB;;;;;;;;;;;;;;eAoBsB;;;AAE8B,QAD5C,cAAQ,kEACV,IAAI,eAAJ,OAAM,gBAAY;MACxB;;uBAGU;AAEe,QADvB,WAAM,8BAAgB,AAAC,kDACnB;MACN;4CAGkB,YAAiB;AACjC,YAAI,AAAW,UAAD,IAAI,MAAM,MAAO,uDAAgB;AAE/C,uBAAK,0BAA0B,GAAE,MAAO,uDAAgB,UAAU;AAElE,cAAO,uDAAgB,AAClB,AAGA,UAJ4B,gDACxB,QAAC,SAAU,AACX,AACA,KAFgB,SACV,QAAC,QAAc,eAAL,IAAI,IAAe,AAAK,IAAD,WAAW;MAG7D;;wCA9BgC;;UACd;UAAW;MACK,oCAAE,0BAA0B;AACxD,mDAAM,WAAW,UACN,kEACH,IAAI,eAAJ,OAAM,gBAAY,0BAA0B,SAC1C;;IAAK","file":"menu.unsound.ddc.js"}');
  // Exports:
  return {
    model__menu__menu: menu$
  };
}));

//# sourceMappingURL=menu.unsound.ddc.js.map
