define(['dart_sdk', 'packages/observable/observable', 'packages/angular_components/model/menu/menu_item_affix', 'packages/angular_components/material_menu/affix/base_affix', 'packages/angular/src/bootstrap/modules', 'packages/quiver/core', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_menu__menu_item_affix_list(dart_sdk, packages__observable__observable, packages__angular_components__model__menu__menu_item_affix, packages__angular_components__material_menu__affix__base_affix, packages__angular__src__bootstrap__modules, packages__quiver__core, packages__angular_components__interfaces__has_disabled, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const records = packages__observable__observable.src__records;
  const observable_list = packages__observable__observable.src__observable_list;
  const menu_item_affix = packages__angular_components__model__menu__menu_item_affix.model__menu__menu_item_affix;
  const base_affix = packages__angular_components__material_menu__affix__base_affix.material_menu__affix__base_affix;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const view_container_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_container_ref;
  const optional = packages__quiver__core.src__core__optional;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var menu_item_affix_list = Object.create(dart.library);
  var $expand = dartx.expand;
  var $clear = dartx.clear;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $sublist = dartx.sublist;
  var $removeRange = dartx.removeRange;
  var $reversed = dartx.reversed;
  var $whereType = dartx.whereType;
  var $toList = dartx.toList;
  var $insert = dartx.insert;
  var $map = dartx.map;
  var $addAll = dartx.addAll;
  var $classes = dartx.classes;
  var _AffixRefL = () => (_AffixRefL = dart.constFn(dart.legacy(menu_item_affix_list._AffixRef)))();
  var JSArrayOf_AffixRefL = () => (JSArrayOf_AffixRefL = dart.constFn(_interceptors.JSArray$(_AffixRefL())))();
  var MenuItemAffixL = () => (MenuItemAffixL = dart.constFn(dart.legacy(menu_item_affix.MenuItemAffix)))();
  var ListChangeRecordOfMenuItemAffixL = () => (ListChangeRecordOfMenuItemAffixL = dart.constFn(records.ListChangeRecord$(MenuItemAffixL())))();
  var ListChangeRecordLOfMenuItemAffixL = () => (ListChangeRecordLOfMenuItemAffixL = dart.constFn(dart.legacy(ListChangeRecordOfMenuItemAffixL())))();
  var ListOfListChangeRecordLOfMenuItemAffixL = () => (ListOfListChangeRecordLOfMenuItemAffixL = dart.constFn(core.List$(ListChangeRecordLOfMenuItemAffixL())))();
  var ListLOfListChangeRecordLOfMenuItemAffixL = () => (ListLOfListChangeRecordLOfMenuItemAffixL = dart.constFn(dart.legacy(ListOfListChangeRecordLOfMenuItemAffixL())))();
  var ListLOfListChangeRecordLOfMenuItemAffixLToNull = () => (ListLOfListChangeRecordLOfMenuItemAffixLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfListChangeRecordLOfMenuItemAffixL()])))();
  var BaseMenuItemAffixModelL = () => (BaseMenuItemAffixModelL = dart.constFn(dart.legacy(base_affix.BaseMenuItemAffixModel)))();
  var BaseAffixComponentOfMenuItemAffixL = () => (BaseAffixComponentOfMenuItemAffixL = dart.constFn(base_affix.BaseAffixComponent$(MenuItemAffixL())))();
  var BaseAffixComponentLOfMenuItemAffixL = () => (BaseAffixComponentLOfMenuItemAffixL = dart.constFn(dart.legacy(BaseAffixComponentOfMenuItemAffixL())))();
  var ComponentRefOfBaseAffixComponentLOfMenuItemAffixL = () => (ComponentRefOfBaseAffixComponentLOfMenuItemAffixL = dart.constFn(component_factory.ComponentRef$(BaseAffixComponentLOfMenuItemAffixL())))();
  var ComponentRefLOfBaseAffixComponentLOfMenuItemAffixL = () => (ComponentRefLOfBaseAffixComponentLOfMenuItemAffixL = dart.constFn(dart.legacy(ComponentRefOfBaseAffixComponentLOfMenuItemAffixL())))();
  var OptionalOfComponentRefLOfBaseAffixComponentLOfMenuItemAffixL = () => (OptionalOfComponentRefLOfBaseAffixComponentLOfMenuItemAffixL = dart.constFn(optional.Optional$(ComponentRefLOfBaseAffixComponentLOfMenuItemAffixL())))();
  var OptionalLOfComponentRefLOfBaseAffixComponentLOfMenuItemAffixL = () => (OptionalLOfComponentRefLOfBaseAffixComponentLOfMenuItemAffixL = dart.constFn(dart.legacy(OptionalOfComponentRefLOfBaseAffixComponentLOfMenuItemAffixL())))();
  var _AffixRefLToOptionalLOfComponentRefLOfBaseAffixComponentLOfMenuItemAffixL = () => (_AffixRefLToOptionalLOfComponentRefLOfBaseAffixComponentLOfMenuItemAffixL = dart.constFn(dart.fnType(OptionalLOfComponentRefLOfBaseAffixComponentLOfMenuItemAffixL(), [_AffixRefL()])))();
  var BaseMenuItemAffixModelLTo_AffixRefL = () => (BaseMenuItemAffixModelLTo_AffixRefL = dart.constFn(dart.fnType(_AffixRefL(), [BaseMenuItemAffixModelL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_menu/menu_item_affix_list.dart";
  var _itemChangeStreamSub = dart.privateName(menu_item_affix_list, "_itemChangeStreamSub");
  var _affixComponentRefs = dart.privateName(menu_item_affix_list, "_affixComponentRefs");
  var _items = dart.privateName(menu_item_affix_list, "_items");
  var _disabled = dart.privateName(menu_item_affix_list, "_disabled");
  var _cdRef$ = dart.privateName(menu_item_affix_list, "_cdRef");
  var _updateItemProperties = dart.privateName(menu_item_affix_list, "_updateItemProperties");
  var _updateVisibleItems = dart.privateName(menu_item_affix_list, "_updateVisibleItems");
  var _initializeItems = dart.privateName(menu_item_affix_list, "_initializeItems");
  var _clearChildren = dart.privateName(menu_item_affix_list, "_clearChildren");
  var _createComponentRef = dart.privateName(menu_item_affix_list, "_createComponentRef");
  var viewRef = dart.privateName(menu_item_affix_list, "MenuItemAffixListComponent.viewRef");
  menu_item_affix_list.MenuItemAffixListComponent = class MenuItemAffixListComponent extends core.Object {
    get viewRef() {
      return this[viewRef];
    }
    set viewRef(value) {
      this[viewRef] = value;
    }
    set disabled(disabled) {
      this[_disabled] = disabled;
      this[_updateItemProperties]();
    }
    get disabled() {
      return this[_disabled];
    }
    set items(items) {
      let t0, t0$, t0$0;
      t0 = this[_itemChangeStreamSub];
      t0 == null ? null : t0.cancel();
      this[_itemChangeStreamSub] = (t0$0 = (t0$ = items, t0$ == null ? null : t0$.listChanges), t0$0 == null ? null : t0$0.listen(dart.fn(change => {
        this[_updateVisibleItems](change);
        this[_cdRef$].markForCheck();
      }, ListLOfListChangeRecordLOfMenuItemAffixLToNull())));
      this[_initializeItems](items.whereType(BaseMenuItemAffixModelL()));
    }
    get hasAffixes() {
      let t0, t0$;
      t0$ = (t0 = this[_items], t0 == null ? null : t0.isNotEmpty);
      return t0$ == null ? false : t0$;
    }
    ngOnDestroy() {
      let t0;
      this[_clearChildren]();
      t0 = this[_itemChangeStreamSub];
      t0 == null ? null : t0.cancel();
    }
    [_clearChildren]() {
      this.viewRef.clear();
      let iter = this[_affixComponentRefs][$expand](ComponentRefLOfBaseAffixComponentLOfMenuItemAffixL(), dart.fn(ref => ref.componentRef, _AffixRefLToOptionalLOfComponentRefLOfBaseAffixComponentLOfMenuItemAffixL()));
      for (let ref of iter) {
        ref.destroy();
      }
      this[_affixComponentRefs][$clear]();
    }
    [_updateVisibleItems](changes) {
      for (let change of changes) {
        let start = change.index;
        if (dart.test(change.removed[$isNotEmpty])) {
          let end = dart.notNull(start) + dart.notNull(change.removed[$length]);
          let removed = this[_affixComponentRefs][$sublist](start, end);
          for (let toRemove of removed) {
            if (dart.test(toRemove.componentRef.isPresent)) {
              toRemove.componentRef.value.destroy();
            }
          }
          this[_affixComponentRefs][$removeRange](start, end);
        }
        if (dart.notNull(change.addedCount) > 0) {
          let allAdded = change.added[$whereType](BaseMenuItemAffixModelL())[$toList]()[$reversed];
          for (let toAdd of allAdded) {
            this[_affixComponentRefs][$insert](start, this[_createComponentRef](toAdd, {index: start}));
          }
        }
      }
    }
    [_initializeItems](items) {
      this[_clearChildren]();
      this[_affixComponentRefs][$addAll](items[$map](_AffixRefL(), dart.fn(affix => this[_createComponentRef](affix), BaseMenuItemAffixModelLTo_AffixRefL())));
    }
    [_updateItemProperties]() {
      for (let ref of this[_affixComponentRefs]) {
        if (dart.test(ref.componentRef.isPresent)) {
          ref.componentRef.value.instance.disabled = this.disabled;
        }
      }
    }
    [_createComponentRef](affix, opts) {
      let t0;
      let index = opts && 'index' in opts ? opts.index : -1;
      if (!dart.test(affix.isVisible)) return new menu_item_affix_list._AffixRef.hidden(affix);
      return new menu_item_affix_list._AffixRef.new(affix, (t0 = this.viewRef.createComponent(BaseAffixComponentLOfMenuItemAffixL(), affix.componentFactory, index), (() => {
        t0.location[$classes].add("affix");
        t0.instance.value = affix;
        t0.instance.disabled = this.disabled;
        return t0;
      })()));
    }
  };
  (menu_item_affix_list.MenuItemAffixListComponent.new = function(_cdRef) {
    this[_itemChangeStreamSub] = null;
    this[_affixComponentRefs] = JSArrayOf_AffixRefL().of([]);
    this[_items] = null;
    this[viewRef] = null;
    this[_disabled] = false;
    this[_cdRef$] = _cdRef;
    ;
  }).prototype = menu_item_affix_list.MenuItemAffixListComponent.prototype;
  dart.addTypeTests(menu_item_affix_list.MenuItemAffixListComponent);
  dart.addTypeCaches(menu_item_affix_list.MenuItemAffixListComponent);
  menu_item_affix_list.MenuItemAffixListComponent[dart.implements] = () => [has_disabled.HasDisabled, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getMethods(menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_clearChildren]: dart.fnType(dart.void, []),
    [_updateVisibleItems]: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(records.ListChangeRecord$(dart.legacy(menu_item_affix.MenuItemAffix)))))]),
    [_initializeItems]: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(base_affix.BaseMenuItemAffixModel)))]),
    [_updateItemProperties]: dart.fnType(dart.void, []),
    [_createComponentRef]: dart.fnType(dart.legacy(menu_item_affix_list._AffixRef), [dart.legacy(base_affix.BaseMenuItemAffixModel)], {index: dart.legacy(core.int)}, {})
  }));
  dart.setGetterSignature(menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getGetters(menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    disabled: dart.legacy(core.bool),
    hasAffixes: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getSetters(menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    disabled: dart.legacy(core.bool),
    items: dart.legacy(observable_list.ObservableList$(dart.legacy(menu_item_affix.MenuItemAffix)))
  }));
  dart.setLibraryUri(menu_item_affix_list.MenuItemAffixListComponent, L0);
  dart.setFieldSignature(menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getFields(menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    [_cdRef$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_itemChangeStreamSub]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    [_affixComponentRefs]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(menu_item_affix_list._AffixRef)))),
    [_items]: dart.fieldType(dart.legacy(observable_list.ObservableList$(dart.legacy(menu_item_affix.MenuItemAffix)))),
    viewRef: dart.fieldType(dart.legacy(view_container_ref.ViewContainerRef)),
    [_disabled]: dart.fieldType(dart.legacy(core.bool))
  }));
  menu_item_affix_list._AffixRef = class _AffixRef extends core.Object {};
  (menu_item_affix_list._AffixRef.new = function(affix, componentRef) {
    this.affix = affix;
    this.componentRef = new (OptionalOfComponentRefLOfBaseAffixComponentLOfMenuItemAffixL()).of(componentRef);
    ;
  }).prototype = menu_item_affix_list._AffixRef.prototype;
  (menu_item_affix_list._AffixRef.hidden = function(affix) {
    this.affix = affix;
    this.componentRef = new (OptionalOfComponentRefLOfBaseAffixComponentLOfMenuItemAffixL()).absent();
    ;
  }).prototype = menu_item_affix_list._AffixRef.prototype;
  dart.addTypeTests(menu_item_affix_list._AffixRef);
  dart.addTypeCaches(menu_item_affix_list._AffixRef);
  dart.setLibraryUri(menu_item_affix_list._AffixRef, L0);
  dart.setFieldSignature(menu_item_affix_list._AffixRef, () => ({
    __proto__: dart.getFields(menu_item_affix_list._AffixRef.__proto__),
    affix: dart.finalFieldType(dart.legacy(base_affix.BaseMenuItemAffixModel)),
    componentRef: dart.finalFieldType(dart.legacy(optional.Optional$(dart.legacy(component_factory.ComponentRef$(dart.legacy(base_affix.BaseAffixComponent$(dart.legacy(menu_item_affix.MenuItemAffix))))))))
  }));
  dart.trackLibraries("packages/angular_components/material_menu/menu_item_affix_list", {
    "package:angular_components/material_menu/menu_item_affix_list.dart": menu_item_affix_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4CmB;;;;;;iBAOC;AACI,MAApB,kBAAY,QAAQ;AAEG,MAAvB;IACF;;AAEqB;IAAS;cAIU;;AACR,WAA9B;0BAAsB;AAKpB,MAHF,4CAAuB,KAAK,gBAAL,OAAO,iCAAP,OAAoB,YAAO,QAAC;AACtB,QAA3B,0BAAoB,MAAM;AACL,QAArB,AAAO;;AAGkD,MAA3D,uBAAiB,AAAM,KAAD;IACxB;;;AAEuB,oDAAQ;oBAAR,OAAsB;IAAK;;;AAIhC,MAAhB;AAC8B,WAA9B;0BAAsB;IACxB;;AAGiB,MAAf,AAAQ;AACR,iBAAkB,AAAoB,yFAAO,QAAC,OAAQ,AAAI,GAAD;eAA9C;AACI,QAAb,AAAI,GAAD;;AAEsB,MAA3B,AAAoB;IACtB;0BAEmE;AAEjE,eAAW,SAAU,QAAO;AACpB,oBAAQ,AAAO,MAAD;AAEpB,sBAAI,AAAO,AAAQ,MAAT;AACF,oBAAY,aAAN,KAAK,iBAAG,AAAO,AAAQ,MAAT;AACpB,wBAAU,AAAoB,oCAAQ,KAAK,EAAE,GAAG;AAEtD,mBAAW,WAAY,QAAO;AAC5B,0BAAI,AAAS,AAAa,QAAd;AAC2B,cAArC,AAAS,AAAa,AAAM,QAApB;;;AAI+B,UAA3C,AAAoB,wCAAY,KAAK,EAAE,GAAG;;AAG5C,YAAsB,aAAlB,AAAO,MAAD,eAAc;AAChB,yBACF,AAAO,AAAM,AAAoC,AAAS,MAApD;AACV,mBAAW,QAAS,SAAQ;AAE0B,YADpD,AAAoB,mCAChB,KAAK,EAAE,0BAAoB,KAAK,UAAS,KAAK;;;;IAI1D;uBAEuD;AACrC,MAAhB;AAE6D,MAD7D,AACK,mCAAO,AAAM,KAAD,qBAAK,QAAC,SAAU,0BAAoB,KAAK;IAC5D;;AAGE,eAAW,MAAO;AAChB,sBAAI,AAAI,AAAa,GAAd;AAC8C,UAAnD,AAAI,AAAa,AAAM,AAAS,GAA7B,wCAAwC;;;IAGjD;0BAEqD;;UAC5C;AACP,qBAAK,AAAM,KAAD,aAAY,MAAiB,2CAAO,KAAK;AAEnD,YAAO,wCACH,KAAK,QACL,AAAQ,oEAAgB,AAAM,KAAD,mBAAmB,KAAK,GAA7C;AACa,QAAjB,AAAS,0BAAY;AACZ,QAAT,oBAAiB,KAAK;AACb,QAAT,uBAAoB;;;IAC9B;;kEA7FgC;IAZb;IAEb,4BAAiC;IAET;IAIb;IAEZ,kBAAY;IAEe;;EAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iDAoGxB,OAAwC;IAAxC;IACI,oBAAc,wEAAG,YAAY;;EAAC;;IAC3B;IAAsB,oBAAc;;EAAQ","file":"menu_item_affix_list.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_item_affix_list: menu_item_affix_list
  };
}));

//# sourceMappingURL=menu_item_affix_list.unsound.ddc.js.map
