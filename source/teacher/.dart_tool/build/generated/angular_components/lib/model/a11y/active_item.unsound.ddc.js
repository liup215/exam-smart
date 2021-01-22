define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator', 'packages/collection/src/comparators'], (function load__packages__angular_components__model__a11y__active_item(dart_sdk, packages__angular_components__utils__id_generator__id_generator, packages__collection__src__comparators) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const equality = packages__collection__src__comparators.src__equality;
  var active_item = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $clear = dartx.clear;
  var $indexOf = dartx.indexOf;
  var $isEmpty = dartx.isEmpty;
  var $_get = dartx._get;
  var $length = dartx.length;
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var DefaultEqualityOfNull = () => (DefaultEqualityOfNull = dart.constFn(equality.DefaultEquality$(core.Null)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/a11y/active_item.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.Null);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: DefaultEqualityOfNull().prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: equality.ListEquality.prototype,
        [ListEquality__elementEquality]: C2 || CT.C2
      });
    }
  }, false);
  var C0;
  var _modelChanged = dart.privateName(active_item, "_modelChanged");
  var _ids = dart.privateName(active_item, "_ids");
  var _items = dart.privateName(active_item, "_items");
  var _loop = dart.privateName(active_item, "_loop");
  var _activeIndex = dart.privateName(active_item, "_activeIndex");
  var _idGenerator = dart.privateName(active_item, "_idGenerator");
  var C2;
  var ListEquality__elementEquality = dart.privateName(equality, "ListEquality._elementEquality");
  var C1;
  const _is_ActiveItemModel_default = Symbol('_is_ActiveItemModel_default');
  var activateFirstItemByDefault$ = dart.privateName(active_item, "ActiveItemModel.activateFirstItemByDefault");
  active_item.ActiveItemModel$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var LinkedMapOfTL$StringL = () => (LinkedMapOfTL$StringL = dart.constFn(_js_helper.LinkedMap$(TL(), StringL())))();
    var ListOfTL = () => (ListOfTL = dart.constFn(core.List$(TL())))();
    var ListLOfTL = () => (ListLOfTL = dart.constFn(dart.legacy(ListOfTL())))();
    class ActiveItemModel extends core.Object {
      get activateFirstItemByDefault() {
        return this[activateFirstItemByDefault$];
      }
      set activateFirstItemByDefault(value) {
        this[activateFirstItemByDefault$] = value;
      }
      get modelChanged() {
        return this[_modelChanged].stream;
      }
      get activeId() {
        return this.id(this.activeItem);
      }
      isActive(item) {
        TL().as(item);
        return dart.equals(this.activeItem, item);
      }
      set items(itemList) {
        ListLOfTL().as(itemList);
        if (dart.test((C1 || CT.C1).equals(itemList, this[_items]))) return;
        this[_ids][$clear]();
        let _lastActive = this.activeItem;
        this[_items] = ListOfTL().unmodifiable(itemList);
        if (_lastActive != null) {
          let last = this[_items][$indexOf](_lastActive);
          if (last !== -1) {
            this[_activeIndex] = last;
            return;
          }
        }
        this[_activeIndex] = dart.test(this.activateFirstItemByDefault) ? 0 : -1;
        this[_modelChanged].add(null);
      }
      get activeItem() {
        return dart.test(this[_items][$isEmpty]) || this[_activeIndex] === -1 ? null : this[_items][$_get](this[_activeIndex]);
      }
      activateNext() {
        if (dart.test(this[_items][$isEmpty])) {
          this[_activeIndex] = -1;
        } else if (dart.notNull(this[_activeIndex]) < dart.notNull(this[_items][$length]) - 1) {
          this[_activeIndex] = dart.notNull(this[_activeIndex]) + 1;
        } else if (dart.test(this[_loop])) {
          this[_activeIndex] = 0;
        }
        this[_modelChanged].add(null);
      }
      get peekNext() {
        if (dart.test(this[_items][$isNotEmpty]) && dart.notNull(this[_activeIndex]) < dart.notNull(this[_items][$length]) - 1) {
          return this[_items][$_get](dart.notNull(this[_activeIndex]) + 1);
        } else if (dart.test(this[_items][$isNotEmpty]) && dart.test(this[_loop])) {
          return this[_items][$_get](0);
        } else {
          return null;
        }
      }
      activatePrevious() {
        if (dart.test(this[_items][$isEmpty])) {
          this[_activeIndex] = -1;
        } else if (dart.notNull(this[_activeIndex]) > 0) {
          this[_activeIndex] = dart.notNull(this[_activeIndex]) - 1;
        } else if (dart.test(this[_loop])) {
          this[_activeIndex] = dart.notNull(this[_items][$length]) - 1;
        }
        this[_modelChanged].add(null);
      }
      activateFirst() {
        this[_activeIndex] = dart.test(this[_items][$isEmpty]) ? -1 : 0;
        this[_modelChanged].add(null);
      }
      activateLast() {
        this[_activeIndex] = dart.test(this[_items][$isEmpty]) ? -1 : dart.notNull(this[_items][$length]) - 1;
        this[_modelChanged].add(null);
      }
      activate(value) {
        TL().as(value);
        this[_activeIndex] = this[_items][$indexOf](value);
        this[_modelChanged].add(null);
      }
      id(item) {
        TL().as(item);
        if (item == null) return null;
        if (!dart.test(this[_ids][$containsKey](item))) {
          this[_ids][$_set](item, this[_idGenerator].nextId());
        }
        return this[_ids][$_get](item);
      }
    }
    (ActiveItemModel.new = function(idGenerator, opts) {
      let t0;
      let loop = opts && 'loop' in opts ? opts.loop : false;
      let activateFirstItemByDefault = opts && 'activateFirstItemByDefault' in opts ? opts.activateFirstItemByDefault : true;
      let items = opts && 'items' in opts ? opts.items : C0 || CT.C0;
      this[_modelChanged] = async.StreamController.broadcast({sync: true});
      this[activateFirstItemByDefault$] = true;
      this[_ids] = new (LinkedMapOfTL$StringL()).new();
      this[_items] = null;
      this[_loop] = null;
      this[_activeIndex] = -1;
      this[activateFirstItemByDefault$] = activateFirstItemByDefault;
      this[_idGenerator] = (t0 = idGenerator, t0 == null ? new id_generator.SequentialIdGenerator.fromUUID() : t0);
      this[_loop] = loop;
      this[_items] = items;
      if (dart.test(this[_items][$isNotEmpty])) this[_activeIndex] = dart.test(this.activateFirstItemByDefault) ? 0 : -1;
    }).prototype = ActiveItemModel.prototype;
    dart.addTypeTests(ActiveItemModel);
    ActiveItemModel.prototype[_is_ActiveItemModel_default] = true;
    dart.addTypeCaches(ActiveItemModel);
    dart.setMethodSignature(ActiveItemModel, () => ({
      __proto__: dart.getMethods(ActiveItemModel.__proto__),
      isActive: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      activateNext: dart.fnType(dart.void, []),
      activatePrevious: dart.fnType(dart.void, []),
      activateFirst: dart.fnType(dart.void, []),
      activateLast: dart.fnType(dart.void, []),
      activate: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      id: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(ActiveItemModel, () => ({
      __proto__: dart.getGetters(ActiveItemModel.__proto__),
      modelChanged: dart.legacy(async.Stream),
      activeId: dart.legacy(core.String),
      activeItem: dart.legacy(T),
      peekNext: dart.legacy(T)
    }));
    dart.setSetterSignature(ActiveItemModel, () => ({
      __proto__: dart.getSetters(ActiveItemModel.__proto__),
      items: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(ActiveItemModel, L0);
    dart.setFieldSignature(ActiveItemModel, () => ({
      __proto__: dart.getFields(ActiveItemModel.__proto__),
      [_modelChanged]: dart.finalFieldType(dart.legacy(async.StreamController)),
      activateFirstItemByDefault: dart.fieldType(dart.legacy(core.bool)),
      [_ids]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(T), dart.legacy(core.String)))),
      [_idGenerator]: dart.finalFieldType(dart.legacy(id_generator.IdGenerator)),
      [_items]: dart.fieldType(dart.legacy(core.List$(dart.legacy(T)))),
      [_loop]: dart.fieldType(dart.legacy(core.bool)),
      [_activeIndex]: dart.fieldType(dart.legacy(core.int))
    }));
    return ActiveItemModel;
  });
  active_item.ActiveItemModel = active_item.ActiveItemModel$();
  dart.addTypeTests(active_item.ActiveItemModel, _is_ActiveItemModel_default);
  dart.trackLibraries("packages/angular_components/model/a11y/active_item", {
    "package:angular_components/model/a11y/active_item.dart": active_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["active_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAuKO;;;;;;;AAhHsB,cAAA,AAAc;MAAM;;AAIxB,uBAAG;MAAW;;gBAGrB;AAAS,cAAW,aAAX,iBAAc,IAAI;;;uBAOzB;AAChB,sBAAyB,qBAAO,QAAQ,EAAE,gBAAS;AAEvC,QAAZ,AAAK;AACD,0BAAc;AAEkB,QAApC,eAAc,wBAAa,QAAQ;AACnC,YAAI,WAAW,IAAI;AACb,qBAAO,AAAO,uBAAQ,WAAW;AACrC,cAAI,IAAI,KAAI,CAAC;AACQ,YAAnB,qBAAe,IAAI;AACnB;;;AAG8C,QAAlD,+BAAe,mCAA6B,IAAI,CAAC;AAC1B,QAAvB,AAAc,wBAAI;MACpB;;AAII,cAAe,WAAf,AAAO,2BAAW,AAAa,uBAAG,CAAC,IAAI,OAAO,AAAM,oBAAC;MAAa;;AAKpE,sBAAI,AAAO;AACQ,UAAjB,qBAAe,CAAC;cACX,KAAiB,aAAb,sBAA6B,aAAd,AAAO,yBAAS;AAC1B,UAAd,qBAAY,aAAZ,sBAAY;cACP,eAAI;AACO,UAAhB,qBAAe;;AAEM,QAAvB,AAAc,wBAAI;MACpB;;AAIE,sBAAI,AAAO,8BAA2B,aAAb,sBAA6B,aAAd,AAAO,yBAAS;AACtD,gBAAO,AAAM,qBAAc,aAAb,sBAAe;cACxB,eAAI,AAAO,wCAAc;AAC9B,gBAAO,AAAM,qBAAC;;AAEd,gBAAO;;MAEX;;AAKE,sBAAI,AAAO;AACQ,UAAjB,qBAAe,CAAC;cACX,KAAiB,aAAb,sBAAe;AACV,UAAd,qBAAY,aAAZ,sBAAY;cACP,eAAI;AACuB,UAAhC,qBAA6B,aAAd,AAAO,yBAAS;;AAEV,QAAvB,AAAc,wBAAI;MACpB;;AAIwC,QAAtC,+BAAe,AAAO,0BAAU,CAAC,IAAI;AACd,QAAvB,AAAc,wBAAI;MACpB;;AAIwD,QAAtD,+BAAe,AAAO,0BAAU,CAAC,IAAkB,aAAd,AAAO,yBAAS;AAC9B,QAAvB,AAAc,wBAAI;MACpB;;gBAIgB;AACsB,QAApC,qBAAe,AAAO,uBAAQ,KAAK;AACZ,QAAvB,AAAc,wBAAI;MACpB;;gBAGY;AACV,YAAI,AAAK,IAAD,IAAI,MAAM,MAAO;AACzB,uBAAK,AAAK,yBAAY,IAAI;AACU,UAAlC,AAAI,kBAAC,IAAI,EAAI,AAAa;;AAE5B,cAAO,AAAI,mBAAC,IAAI;MAClB;;oCA9G4B;;UAClB;UACD;UACG;MASN,sBAAiC,wCAAgB;MA+GlD,oCAA6B;MAEb,aAAO;MAEpB;MACH;MACD,qBAAe,CAAC;MA/HX;MAEU,sBAAc,KAAZ,WAAW,QAAX,OAAqC;AAC5C,MAAZ,cAAQ,IAAI;AACE,MAAd,eAAS,KAAK;AACd,oBAAI,AAAO,4BAAY,AAAkD,+BAAnC,mCAA6B,IAAI,CAAC;IAC1E","file":"active_item.unsound.ddc.js"}');
  // Exports:
  return {
    model__a11y__active_item: active_item
  };
}));

//# sourceMappingURL=active_item.unsound.ddc.js.map
