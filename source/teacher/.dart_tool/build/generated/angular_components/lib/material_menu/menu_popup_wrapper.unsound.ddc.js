define(['dart_sdk', 'packages/angular_components/model/observable/observable', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/ui/accepts_width', 'packages/angular_components/model/menu/menu'], (function load__packages__angular_components__material_menu__menu_popup_wrapper(dart_sdk, packages__angular_components__model__observable__observable, packages__angular_components__utils__angular__properties__properties, packages__angular_components__model__ui__accepts_width, packages__angular_components__model__menu__menu) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  const accepts_width = packages__angular_components__model__ui__accepts_width.model__ui__accepts_width;
  const menu = packages__angular_components__model__menu__menu.model__menu__menu;
  var menu_popup_wrapper = Object.create(dart.library);
  var ExpandActionL = () => (ExpandActionL = dart.constFn(dart.legacy(menu_popup_wrapper.ExpandAction)))();
  var ObservableReferenceOfExpandActionL = () => (ObservableReferenceOfExpandActionL = dart.constFn(observable.ObservableReference$(ExpandActionL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ExpandActionLToboolL = () => (ExpandActionLToboolL = dart.constFn(dart.fnType(boolL(), [ExpandActionL()])))();
  var StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  const CT = Object.create(null);
  var L1 = "org-dartlang-app:///packages/angular_components/material_menu/menu_popup_wrapper.dart";
  var L0 = "package:angular_components/material_menu/menu_popup_wrapper.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: menu_popup_wrapper.ExpandAction.prototype,
        [_focusIndexOnExpand$]: null
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: menu_popup_wrapper.ExpandAction.prototype,
        [_focusIndexOnExpand$]: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: menu_popup_wrapper.ExpandAction.prototype,
        [_focusIndexOnExpand$]: -1
      });
    }
  }, false);
  var _focusIndexOnExpand = dart.privateName(menu_popup_wrapper, "_focusIndexOnExpand");
  var _focusIndexOnExpand$ = dart.privateName(menu_popup_wrapper, "ExpandAction._focusIndexOnExpand");
  menu_popup_wrapper.ExpandAction = class ExpandAction extends core.Object {
    get [_focusIndexOnExpand]() {
      return this[_focusIndexOnExpand$];
    }
    set [_focusIndexOnExpand](value) {
      super[_focusIndexOnExpand] = value;
    }
    get activateFirstItemOnExpand() {
      return this[_focusIndexOnExpand] === 0;
    }
    get activateLastItemOnExpand() {
      return this[_focusIndexOnExpand] === -1;
    }
  };
  (menu_popup_wrapper.ExpandAction.withFirstItemFocused = function() {
    this[_focusIndexOnExpand$] = 0;
    ;
  }).prototype = menu_popup_wrapper.ExpandAction.prototype;
  (menu_popup_wrapper.ExpandAction.withLastItemFocused = function() {
    this[_focusIndexOnExpand$] = -1;
    ;
  }).prototype = menu_popup_wrapper.ExpandAction.prototype;
  (menu_popup_wrapper.ExpandAction.withNoFocus = function() {
    this[_focusIndexOnExpand$] = null;
    ;
  }).prototype = menu_popup_wrapper.ExpandAction.prototype;
  dart.addTypeTests(menu_popup_wrapper.ExpandAction);
  dart.addTypeCaches(menu_popup_wrapper.ExpandAction);
  dart.setGetterSignature(menu_popup_wrapper.ExpandAction, () => ({
    __proto__: dart.getGetters(menu_popup_wrapper.ExpandAction.__proto__),
    activateFirstItemOnExpand: dart.legacy(core.bool),
    activateLastItemOnExpand: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(menu_popup_wrapper.ExpandAction, L0);
  dart.setFieldSignature(menu_popup_wrapper.ExpandAction, () => ({
    __proto__: dart.getFields(menu_popup_wrapper.ExpandAction.__proto__),
    [_focusIndexOnExpand]: dart.finalFieldType(dart.legacy(core.int))
  }));
  var _expandAction = dart.privateName(menu_popup_wrapper, "_expandAction");
  var _width = dart.privateName(menu_popup_wrapper, "_width");
  var C0;
  var menu$ = dart.privateName(menu_popup_wrapper, "MenuPopupWrapper.menu");
  var preferredPositions = dart.privateName(menu_popup_wrapper, "MenuPopupWrapper.preferredPositions");
  menu_popup_wrapper.MenuPopupWrapper = class MenuPopupWrapper extends core.Object {
    get menu() {
      return this[menu$];
    }
    set menu(value) {
      this[menu$] = value;
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    set isExpanded(value) {
      if (dart.equals(this.isExpanded, value)) return;
      if (dart.test(value)) {
        this.expandAction == null ? this.expandAction = C0 || CT.C0 : null;
      } else {
        this.expandAction = null;
      }
    }
    set expandAction(value) {
      if (dart.equals(this[_expandAction].value, value)) return;
      this[_expandAction].value = value;
    }
    get isExpanded() {
      return this.expandAction != null;
    }
    get expandAction() {
      return this[_expandAction].value;
    }
    get activateFirstItemOnExpand() {
      let t0, t0$;
      t0$ = (t0 = this.expandAction, t0 == null ? null : t0.activateFirstItemOnExpand);
      return t0$ == null ? false : t0$;
    }
    get activateLastItemOnExpand() {
      let t0, t0$;
      t0$ = (t0 = this.expandAction, t0 == null ? null : t0.activateLastItemOnExpand);
      return t0$ == null ? false : t0$;
    }
    get isExpandedChange() {
      return this[_expandAction].stream.map(boolL(), dart.fn(_ => this.isExpanded, ExpandActionLToboolL()));
    }
    get expandActionChange() {
      return this[_expandAction].stream;
    }
    get width() {
      let t0, t0$;
      t0$ = (t0 = this.menu, t0 == null ? null : t0.width);
      return t0$ == null ? this[_width] : t0$;
    }
    set width(val) {
      this[_width] = properties.getInt(val, {defaultValue: 0});
      if (!(dart.notNull(this[_width]) >= 0 && dart.notNull(this[_width]) <= 5)) dart.assertFailed(null, L1, 104, 12, "_width >= 0 && _width <= 5");
    }
  };
  (menu_popup_wrapper.MenuPopupWrapper.new = function() {
    this[_expandAction] = new (ObservableReferenceOfExpandActionL()).new(null);
    this[menu$] = null;
    this[_width] = 0;
    this[preferredPositions] = null;
    ;
  }).prototype = menu_popup_wrapper.MenuPopupWrapper.prototype;
  dart.addTypeTests(menu_popup_wrapper.MenuPopupWrapper);
  dart.addTypeCaches(menu_popup_wrapper.MenuPopupWrapper);
  menu_popup_wrapper.MenuPopupWrapper[dart.implements] = () => [accepts_width.AcceptsWidth];
  dart.setGetterSignature(menu_popup_wrapper.MenuPopupWrapper, () => ({
    __proto__: dart.getGetters(menu_popup_wrapper.MenuPopupWrapper.__proto__),
    isExpanded: dart.legacy(core.bool),
    expandAction: dart.legacy(menu_popup_wrapper.ExpandAction),
    activateFirstItemOnExpand: dart.legacy(core.bool),
    activateLastItemOnExpand: dart.legacy(core.bool),
    isExpandedChange: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    expandActionChange: dart.legacy(async.Stream$(dart.legacy(menu_popup_wrapper.ExpandAction))),
    width: dart.legacy(core.int)
  }));
  dart.setSetterSignature(menu_popup_wrapper.MenuPopupWrapper, () => ({
    __proto__: dart.getSetters(menu_popup_wrapper.MenuPopupWrapper.__proto__),
    isExpanded: dart.legacy(core.bool),
    expandAction: dart.legacy(menu_popup_wrapper.ExpandAction),
    width: dart.dynamic
  }));
  dart.setLibraryUri(menu_popup_wrapper.MenuPopupWrapper, L0);
  dart.setFieldSignature(menu_popup_wrapper.MenuPopupWrapper, () => ({
    __proto__: dart.getFields(menu_popup_wrapper.MenuPopupWrapper.__proto__),
    [_expandAction]: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(menu_popup_wrapper.ExpandAction)))),
    menu: dart.fieldType(dart.legacy(menu.MenuModel)),
    [_width]: dart.fieldType(dart.legacy(core.int)),
    preferredPositions: dart.fieldType(dart.legacy(core.Iterable))
  }));
  var _onTriggerAction = dart.privateName(menu_popup_wrapper, "_onTriggerAction");
  var C1;
  var _trigger = dart.privateName(menu_popup_wrapper, "_trigger");
  var C2;
  var closeMenuOnClick = dart.privateName(menu_popup_wrapper, "MenuPopupTrigger.closeMenuOnClick");
  menu_popup_wrapper.MenuPopupTrigger = class MenuPopupTrigger extends core.Object {
    get closeMenuOnClick() {
      return this[closeMenuOnClick];
    }
    set closeMenuOnClick(value) {
      this[closeMenuOnClick] = value;
    }
    get onTrigger() {
      return this[_onTriggerAction].stream;
    }
    handlePopupTriggerAction(event) {
      if (KeyboardEventL().is(event)) {
        this[_trigger](C1 || CT.C1);
      } else {
        this[_trigger](C0 || CT.C0);
      }
    }
    handleUpKey(event) {
      this[_trigger](C2 || CT.C2);
      event.preventDefault();
    }
    handleDownKey(event) {
      this[_trigger](C1 || CT.C1);
      event.preventDefault();
    }
    [_trigger](action) {
      if (dart.test(this.closeMenuOnClick) && dart.test(this.isExpanded)) {
        this.expandAction = null;
      } else {
        this.expandAction = action;
      }
      this[_onTriggerAction].add(null);
    }
  };
  (menu_popup_wrapper.MenuPopupTrigger.new = function() {
    this[_onTriggerAction] = StreamControllerOfvoid().new();
    this[closeMenuOnClick] = false;
    ;
  }).prototype = menu_popup_wrapper.MenuPopupTrigger.prototype;
  dart.addTypeTests(menu_popup_wrapper.MenuPopupTrigger);
  dart.addTypeCaches(menu_popup_wrapper.MenuPopupTrigger);
  dart.setMethodSignature(menu_popup_wrapper.MenuPopupTrigger, () => ({
    __proto__: dart.getMethods(menu_popup_wrapper.MenuPopupTrigger.__proto__),
    handlePopupTriggerAction: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    handleUpKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    handleDownKey: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    [_trigger]: dart.fnType(dart.void, [dart.legacy(menu_popup_wrapper.ExpandAction)])
  }));
  dart.setGetterSignature(menu_popup_wrapper.MenuPopupTrigger, () => ({
    __proto__: dart.getGetters(menu_popup_wrapper.MenuPopupTrigger.__proto__),
    onTrigger: dart.legacy(async.Stream$(dart.void))
  }));
  dart.setLibraryUri(menu_popup_wrapper.MenuPopupTrigger, L0);
  dart.setFieldSignature(menu_popup_wrapper.MenuPopupTrigger, () => ({
    __proto__: dart.getFields(menu_popup_wrapper.MenuPopupTrigger.__proto__),
    [_onTriggerAction]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
    closeMenuOnClick: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/material_menu/menu_popup_wrapper", {
    "package:angular_components/material_menu/menu_popup_wrapper.dart": menu_popup_wrapper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_popup_wrapper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBY;;;;;;;AAQ4B,YAAA,AAAoB,+BAAG;IAAC;;AACzB,YAAA,AAAoB,+BAAG,CAAC;IAAC;;;IAPE,6BAAE;;EAAC;;IAEJ,6BAAE,CAAC;;EAAC;;IAEZ,6BAAE;;EAAI;;;;;;;;;;;;;;;;;;;IAYnD;;;;;;IA4ED;;;;;;mBApEW;AAClB,UAAe,YAAX,iBAAc,KAAK,GAAE;AAEzB,oBAAI,KAAK;AAC0C,QAAjD,AAAa,qBAAA,OAAb,kCAAa;;AAEM,QAAnB,oBAAe;;IAEnB;qBAQ8B;AAC5B,UAAwB,YAApB,AAAc,2BAAS,KAAK,GAAE;AAEP,MAA3B,AAAc,4BAAQ,KAAK;IAC7B;;AAGuB,YAAA,AAAa,sBAAG;IAAI;;AAEV,YAAA,AAAc;IAAK;;;AAKhD,yDAAc;oBAAd,OAA2C;IAAK;;;AAKhD,yDAAc;oBAAd,OAA0C;IAAK;;AAK/C,YAAA,AAAc,AAAO,yCAAI,QAAC,KAAM;IAAW;;AAMA,YAAA,AAAc;IAAM;;;AAMlD,iDAAM;oBAAN,OAAe;IAAM;cAK5B;AAC6B,MAArC,eAAS,kBAAO,GAAG,iBAAgB;AACnC,YAAc,AAAK,aAAZ,iBAAU,KAAY,aAAP,iBAAU;IAClC;;;IAxEM,sBAAgB,+CAAkC;IAI9C;IAsEN,eAAS;IAMJ;;EACX;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBO;;;;;;;AAIyB,YAAA,AAAiB;IAAM;6BASf;AACpC,UAAU,oBAAN,KAAK;AAC4C,QAAnD;;AAE0C,QAA1C;;IAEJ;gBAI+B;AACqB,MAAlD;AAEsB,MAAtB,AAAM,KAAD;IACP;kBAIiC;AACoB,MAAnD;AAEsB,MAAtB,AAAM,KAAD;IACP;eAE2B;AACzB,oBAAI,oCAAoB;AACH,QAAnB,oBAAe;;AAEM,QAArB,oBAAe,MAAM;;AAEG,MAA1B,AAAiB,2BAAI;IACvB;;;IApDM,yBAAmB;IAQpB,yBAAmB;;EA6C1B","file":"menu_popup_wrapper.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_popup_wrapper: menu_popup_wrapper
  };
}));

//# sourceMappingURL=menu_popup_wrapper.unsound.ddc.js.map
