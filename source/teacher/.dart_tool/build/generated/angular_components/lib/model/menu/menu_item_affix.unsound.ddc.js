define(['dart_sdk', 'packages/angular_components/model/ui/icon'], (function load__packages__angular_components__model__menu__menu_item_affix(dart_sdk, packages__angular_components__model__ui__icon) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon = packages__angular_components__model__ui__icon.model__ui__icon;
  var menu_item_affix = Object.create(dart.library);
  var $toString = dartx.toString;
  var IconVisibilityL = () => (IconVisibilityL = dart.constFn(dart.legacy(menu_item_affix.IconVisibility)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/menu/menu_item_affix.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: menu_item_affix.IconVisibility.prototype,
        [_name$]: "IconVisibility.hidden",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: menu_item_affix.IconVisibility.prototype,
        [_name$]: "IconVisibility.hover",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: menu_item_affix.IconVisibility.prototype,
        [_name$]: "IconVisibility.visible",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], IconVisibilityL());
    }
  }, false);
  const _is_MenuItemAffix_default = Symbol('_is_MenuItemAffix_default');
  menu_item_affix.MenuItemAffix$ = dart.generic(FactoryType => {
    class MenuItemAffix extends core.Object {
      get isVisibleOnHover() {
        return this.visibility == menu_item_affix.IconVisibility.hover;
      }
      get isVisible() {
        return this.visibility != menu_item_affix.IconVisibility.hidden;
      }
    }
    (MenuItemAffix.new = function() {
      ;
    }).prototype = MenuItemAffix.prototype;
    dart.addTypeTests(MenuItemAffix);
    MenuItemAffix.prototype[_is_MenuItemAffix_default] = true;
    dart.addTypeCaches(MenuItemAffix);
    dart.setGetterSignature(MenuItemAffix, () => ({
      __proto__: dart.getGetters(MenuItemAffix.__proto__),
      isVisibleOnHover: dart.legacy(core.bool),
      isVisible: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(MenuItemAffix, L0);
    return MenuItemAffix;
  });
  menu_item_affix.MenuItemAffix = menu_item_affix.MenuItemAffix$();
  dart.addTypeTests(menu_item_affix.MenuItemAffix, _is_MenuItemAffix_default);
  var action$ = dart.privateName(menu_item_affix, "IconWithAction.action");
  var ariaLabel$ = dart.privateName(menu_item_affix, "IconWithAction.ariaLabel");
  var keyCode$ = dart.privateName(menu_item_affix, "IconWithAction.keyCode");
  var shouldCloseMenuOnTrigger$ = dart.privateName(menu_item_affix, "IconWithAction.shouldCloseMenuOnTrigger");
  menu_item_affix.IconWithAction = class IconWithAction extends icon.Icon {
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
    get ariaLabel() {
      return this[ariaLabel$];
    }
    set ariaLabel(value) {
      super.ariaLabel = value;
    }
    get keyCode() {
      return this[keyCode$];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get shouldCloseMenuOnTrigger() {
      return this[shouldCloseMenuOnTrigger$];
    }
    set shouldCloseMenuOnTrigger(value) {
      super.shouldCloseMenuOnTrigger = value;
    }
  };
  (menu_item_affix.IconWithAction.new = function(name, action, ariaLabel, keyCode, opts) {
    let shouldCloseMenuOnTrigger = opts && 'shouldCloseMenuOnTrigger' in opts ? opts.shouldCloseMenuOnTrigger : false;
    this[action$] = action;
    this[ariaLabel$] = ariaLabel;
    this[keyCode$] = keyCode;
    this[shouldCloseMenuOnTrigger$] = shouldCloseMenuOnTrigger;
    menu_item_affix.IconWithAction.__proto__.new.call(this, name);
    ;
  }).prototype = menu_item_affix.IconWithAction.prototype;
  dart.addTypeTests(menu_item_affix.IconWithAction);
  dart.addTypeCaches(menu_item_affix.IconWithAction);
  dart.setLibraryUri(menu_item_affix.IconWithAction, L0);
  dart.setFieldSignature(menu_item_affix.IconWithAction, () => ({
    __proto__: dart.getFields(menu_item_affix.IconWithAction.__proto__),
    action: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, []))),
    ariaLabel: dart.finalFieldType(dart.legacy(core.String)),
    keyCode: dart.finalFieldType(dart.legacy(core.int)),
    shouldCloseMenuOnTrigger: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var _name$ = dart.privateName(menu_item_affix, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  menu_item_affix.IconVisibility = class IconVisibility extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (menu_item_affix.IconVisibility.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = menu_item_affix.IconVisibility.prototype;
  dart.addTypeTests(menu_item_affix.IconVisibility);
  dart.addTypeCaches(menu_item_affix.IconVisibility);
  dart.setMethodSignature(menu_item_affix.IconVisibility, () => ({
    __proto__: dart.getMethods(menu_item_affix.IconVisibility.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(menu_item_affix.IconVisibility, L0);
  dart.setFieldSignature(menu_item_affix.IconVisibility, () => ({
    __proto__: dart.getFields(menu_item_affix.IconVisibility.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(menu_item_affix.IconVisibility, ['toString']);
  menu_item_affix.IconVisibility.hidden = C0 || CT.C0;
  menu_item_affix.IconVisibility.hover = C1 || CT.C1;
  menu_item_affix.IconVisibility.visible = C2 || CT.C2;
  menu_item_affix.IconVisibility.values = C3 || CT.C3;
  dart.trackLibraries("packages/angular_components/model/menu/menu_item_affix", {
    "package:angular_components/model/menu/menu_item_affix.dart": menu_item_affix
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAe+B,cAAA,AAAW,oBAAkB;MAAK;;AACzC,cAAA,AAAW,oBAAkB;MAAM;;;;IALpC;;;;;;;;;;;;;;;;;;;IA0BJ;;;;;;IACJ;;;;;;IACH;;;;;;IAGC;;;;;;;iDAEW,MAAW,QAAa,WAAgB;QACpD;IADuB;IAAa;IAAgB;IACpD;AACJ,4DAAM,IAAI;;EAAC;;;;;;;;;;;;;;;;;;;IAQnB;;wDAJK;;;;EAIL","file":"menu_item_affix.unsound.ddc.js"}');
  // Exports:
  return {
    model__menu__menu_item_affix: menu_item_affix
  };
}));

//# sourceMappingURL=menu_item_affix.unsound.ddc.js.map
