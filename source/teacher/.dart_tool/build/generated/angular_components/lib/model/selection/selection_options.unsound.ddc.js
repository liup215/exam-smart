define(['dart_sdk', 'packages/angular_components/model/collection/labeled_list', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/observable/observable'], (function load__packages__angular_components__model__selection__selection_options(dart_sdk, packages__angular_components__model__collection__labeled_list, packages__angular_components__utils__disposer__disposer, packages__angular_components__model__observable__observable) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const labeled_list = packages__angular_components__model__collection__labeled_list.model__collection__labeled_list;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  var delegating_selection_options = Object.create(dart.library);
  var selection_options = Object.create(dart.library);
  var $expand = dartx.expand;
  var $toList = dartx.toList;
  var $any = dartx.any;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var VoidToStringL = () => (VoidToStringL = dart.constFn(dart.fnType(StringL(), [])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/model/selection/selection_options.dart";
  var L0 = "package:angular_components/src/model/selection/delegating_selection_options.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _js_helper.PrivateSymbol.new('_flattenedList', _flattenedList));
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_controller', _controller));
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_setOptions', _setOptions));
    },
    get C3() {
      return C3 = dart.const(new _js_helper.PrivateSymbol.new('_optionGroups', _optionGroups));
    },
    get C4() {
      return C4 = dart.const(new _js_helper.PrivateSymbol.new('_flattenedList=', _flattenedList_));
    },
    get C5() {
      return C5 = dart.const(new _js_helper.PrivateSymbol.new('_optionGroups=', _optionGroups_));
    }
  }, false);
  var _options$ = dart.privateName(delegating_selection_options, "_options");
  var _flattenedList = dart.privateName(delegating_selection_options, "_flattenedList");
  var C0;
  var _flattenedList$ = dart.privateName(selection_options, "_flattenedList");
  var _controller = dart.privateName(delegating_selection_options, "_controller");
  var C1;
  var _controller$ = dart.privateName(selection_options, "_controller");
  var _setOptions = dart.privateName(delegating_selection_options, "_setOptions");
  var C2;
  var _setOptions$ = dart.privateName(selection_options, "_setOptions");
  var _optionGroups = dart.privateName(delegating_selection_options, "_optionGroups");
  var C3;
  var _optionGroups$ = dart.privateName(selection_options, "_optionGroups");
  var _flattenedList_ = dart.privateName(delegating_selection_options, "_flattenedList=");
  var C4;
  var _optionGroups_ = dart.privateName(delegating_selection_options, "_optionGroups=");
  var C5;
  const _is_DelegatingSelectionOptions_default = Symbol('_is_DelegatingSelectionOptions_default');
  delegating_selection_options.DelegatingSelectionOptions$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    var ListOfOptionGroupLOfTL = () => (ListOfOptionGroupLOfTL = dart.constFn(core.List$(OptionGroupLOfTL())))();
    var ListLOfOptionGroupLOfTL = () => (ListLOfOptionGroupLOfTL = dart.constFn(dart.legacy(ListOfOptionGroupLOfTL())))();
    var ListOfTL = () => (ListOfTL = dart.constFn(core.List$(TL())))();
    var ListLOfTL = () => (ListLOfTL = dart.constFn(dart.legacy(ListOfTL())))();
    var StreamControllerOfListLOfOptionGroupLOfTL = () => (StreamControllerOfListLOfOptionGroupLOfTL = dart.constFn(async.StreamController$(ListLOfOptionGroupLOfTL())))();
    var StreamControllerLOfListLOfOptionGroupLOfTL = () => (StreamControllerLOfListLOfOptionGroupLOfTL = dart.constFn(dart.legacy(StreamControllerOfListLOfOptionGroupLOfTL())))();
    class DelegatingSelectionOptions extends core.Object {
      get optionGroups() {
        return this[_options$].optionGroups;
      }
      set optionGroups(groups) {
        ListLOfOptionGroupLOfTL().as(groups);
        this[_options$].optionGroups = groups;
      }
      dispose() {
        this[_options$].dispose();
      }
      get isNotEmpty() {
        return this[_options$].isNotEmpty;
      }
      get optionsList() {
        return this[_options$].optionsList;
      }
      get stream() {
        return this[_options$].stream;
      }
      get [_flattenedList$]() {
        return ListLOfTL().as(this.noSuchMethod(new core._Invocation.getter(C0 || CT.C0)));
      }
      get [_controller$]() {
        return StreamControllerLOfListLOfOptionGroupLOfTL().as(this.noSuchMethod(new core._Invocation.getter(C1 || CT.C1)));
      }
      [_setOptions$](newOptions) {
        ListLOfOptionGroupLOfTL().as(newOptions);
        return this.noSuchMethod(new core._Invocation.method(C2 || CT.C2, null, [newOptions]));
      }
      get [_optionGroups$]() {
        return ListLOfOptionGroupLOfTL().as(this.noSuchMethod(new core._Invocation.getter(C3 || CT.C3)));
      }
      set [_flattenedList$](value) {
        ListLOfTL().as(value);
        return this.noSuchMethod(new core._Invocation.setter(C4 || CT.C4, value));
      }
      set [_optionGroups$](value) {
        ListLOfOptionGroupLOfTL().as(value);
        return this.noSuchMethod(new core._Invocation.setter(C5 || CT.C5, value));
      }
    }
    (DelegatingSelectionOptions.new = function(_options) {
      this[_options$] = _options;
      ;
    }).prototype = DelegatingSelectionOptions.prototype;
    dart.addTypeTests(DelegatingSelectionOptions);
    DelegatingSelectionOptions.prototype[_is_DelegatingSelectionOptions_default] = true;
    dart.addTypeCaches(DelegatingSelectionOptions);
    DelegatingSelectionOptions[dart.implements] = () => [selection_options.SelectionOptions$(dart.legacy(T))];
    dart.setMethodSignature(DelegatingSelectionOptions, () => ({
      __proto__: dart.getMethods(DelegatingSelectionOptions.__proto__),
      dispose: dart.fnType(dart.void, []),
      [_setOptions$]: dart.fnType(dart.void, [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(DelegatingSelectionOptions, () => ({
      __proto__: dart.getGetters(DelegatingSelectionOptions.__proto__),
      optionGroups: dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T))))),
      isNotEmpty: dart.legacy(core.bool),
      optionsList: dart.legacy(core.List$(dart.legacy(T))),
      stream: dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T))))))),
      [_flattenedList$]: dart.legacy(core.List$(dart.legacy(T))),
      [_controller$]: dart.legacy(async.StreamController$(dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T))))))),
      [_optionGroups$]: dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T)))))
    }));
    dart.setSetterSignature(DelegatingSelectionOptions, () => ({
      __proto__: dart.getSetters(DelegatingSelectionOptions.__proto__),
      optionGroups: dart.legacy(core.Object),
      [_flattenedList$]: dart.legacy(core.Object),
      [_optionGroups$]: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(DelegatingSelectionOptions, L0);
    dart.setFieldSignature(DelegatingSelectionOptions, () => ({
      __proto__: dart.getFields(DelegatingSelectionOptions.__proto__),
      [_options$]: dart.finalFieldType(dart.legacy(selection_options.SelectionOptions$(dart.legacy(T))))
    }));
    return DelegatingSelectionOptions;
  });
  delegating_selection_options.DelegatingSelectionOptions = delegating_selection_options.DelegatingSelectionOptions$();
  dart.addTypeTests(delegating_selection_options.DelegatingSelectionOptions, _is_DelegatingSelectionOptions_default);
  var _emptyLabelFcn$ = dart.privateName(selection_options, "_emptyLabelFcn");
  const _is_OptionGroup_default = Symbol('_is_OptionGroup_default');
  selection_options.OptionGroup$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    class OptionGroup extends labeled_list.LabeledList$(dart.legacy(T)) {
      get emptyLabel() {
        return this[_emptyLabelFcn$] != null ? this[_emptyLabelFcn$]() : null;
      }
      get hasEmptyLabel() {
        return this[_emptyLabelFcn$] != null;
      }
      slicedOptionGroup(start, end) {
        let subListItems = this.sublist(start, end);
        return new (OptionGroupOfTL()).withLabelFunction(subListItems, dart.test(this.hasLabel) ? null : dart.fn(() => this.uiDisplayName, VoidToStringL()), this[_emptyLabelFcn$]);
      }
    }
    (OptionGroup.new = function(items, labelFcn = null) {
      this[_emptyLabelFcn$] = null;
      OptionGroup.__proto__.new.call(this, items, labelFcn);
      ;
    }).prototype = OptionGroup.prototype;
    (OptionGroup.withLabelFunction = function(items, labelFcn = null, _emptyLabelFcn = null) {
      this[_emptyLabelFcn$] = _emptyLabelFcn;
      OptionGroup.__proto__.withLabelFunction.call(this, items, labelFcn);
      ;
    }).prototype = OptionGroup.prototype;
    (OptionGroup.withLabel = function(items, label = null, emptyLabel = null) {
      this[_emptyLabelFcn$] = emptyLabel != null ? dart.fn(() => emptyLabel, VoidToStringL()) : null;
      OptionGroup.__proto__.withLabel.call(this, items, label);
      ;
    }).prototype = OptionGroup.prototype;
    dart.addTypeTests(OptionGroup);
    OptionGroup.prototype[_is_OptionGroup_default] = true;
    dart.addTypeCaches(OptionGroup);
    dart.setMethodSignature(OptionGroup, () => ({
      __proto__: dart.getMethods(OptionGroup.__proto__),
      slicedOptionGroup: dart.fnType(dart.legacy(selection_options.OptionGroup$(dart.legacy(T))), [dart.legacy(core.int), dart.legacy(core.int)])
    }));
    dart.setGetterSignature(OptionGroup, () => ({
      __proto__: dart.getGetters(OptionGroup.__proto__),
      emptyLabel: dart.legacy(core.String),
      hasEmptyLabel: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(OptionGroup, L1);
    dart.setFieldSignature(OptionGroup, () => ({
      __proto__: dart.getFields(OptionGroup.__proto__),
      [_emptyLabelFcn$]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [])))
    }));
    return OptionGroup;
  });
  selection_options.OptionGroup = selection_options.OptionGroup$();
  dart.addTypeTests(selection_options.OptionGroup, _is_OptionGroup_default);
  const _is_GroupedOptions_default = Symbol('_is_GroupedOptions_default');
  selection_options.GroupedOptions$ = dart.generic(T => {
    class GroupedOptions extends core.Object {
      dispose() {
      }
    }
    (GroupedOptions.new = function() {
      ;
    }).prototype = GroupedOptions.prototype;
    dart.addTypeTests(GroupedOptions);
    GroupedOptions.prototype[_is_GroupedOptions_default] = true;
    dart.addTypeCaches(GroupedOptions);
    GroupedOptions[dart.implements] = () => [disposer.Disposable];
    dart.setMethodSignature(GroupedOptions, () => ({
      __proto__: dart.getMethods(GroupedOptions.__proto__),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(GroupedOptions, L1);
    return GroupedOptions;
  });
  selection_options.GroupedOptions = selection_options.GroupedOptions$();
  dart.addTypeTests(selection_options.GroupedOptions, _is_GroupedOptions_default);
  const _is_SelectionOptions_default = Symbol('_is_SelectionOptions_default');
  selection_options.SelectionOptions$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    var ListOfOptionGroupLOfTL = () => (ListOfOptionGroupLOfTL = dart.constFn(core.List$(OptionGroupLOfTL())))();
    var ListLOfOptionGroupLOfTL = () => (ListLOfOptionGroupLOfTL = dart.constFn(dart.legacy(ListOfOptionGroupLOfTL())))();
    var StreamControllerOfListLOfOptionGroupLOfTL = () => (StreamControllerOfListLOfOptionGroupLOfTL = dart.constFn(async.StreamController$(ListLOfOptionGroupLOfTL())))();
    var JSArrayOfOptionGroupLOfTL = () => (JSArrayOfOptionGroupLOfTL = dart.constFn(_interceptors.JSArray$(OptionGroupLOfTL())))();
    var OptionGroupLOfTLToOptionGroupLOfTL = () => (OptionGroupLOfTLToOptionGroupLOfTL = dart.constFn(dart.fnType(OptionGroupLOfTL(), [OptionGroupLOfTL()])))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    var OptionGroupLOfTLToboolL = () => (OptionGroupLOfTLToboolL = dart.constFn(dart.fnType(boolL(), [OptionGroupLOfTL()])))();
    class SelectionOptions extends selection_options.GroupedOptions$(dart.legacy(T)) {
      static fromFuture(optionGroupListFuture) {
        return new (selection_options._FutureSelectionOptions$(dart.legacy(T))).new(optionGroupListFuture);
      }
      static fromStream(optionGroupListStream) {
        return new (selection_options._StreamSelectionOptions$(dart.legacy(T))).new(optionGroupListStream);
      }
      get stream() {
        return this[_controller$].stream;
      }
      get optionGroups() {
        return this[_optionGroups$];
      }
      set optionGroups(value) {
        ListLOfOptionGroupLOfTL().as(value);
        let oldValue = this[_optionGroups$];
        if (!dart.equals(oldValue, value)) {
          this[_optionGroups$] = value;
          this[_flattenedList$] = this[_optionGroups$] != null ? this[_optionGroups$][$expand](TL(), dart.fn(i => i, OptionGroupLOfTLToOptionGroupLOfTL()))[$toList]() : JSArrayOfTL().of([]);
          this[_controller$].add(this[_optionGroups$]);
        }
      }
      get optionsList() {
        return this[_flattenedList$];
      }
      get isNotEmpty() {
        return this.optionGroups[$any](dart.fn(group => group.isNotEmpty, OptionGroupLOfTLToboolL()));
      }
      [_setOptions$](newOptions) {
        ListLOfOptionGroupLOfTL().as(newOptions);
        this.optionGroups = newOptions;
      }
      dispose() {
        this[_controller$].close();
        super.dispose();
      }
    }
    (SelectionOptions.new = function(optionGroups) {
      this[_controller$] = StreamControllerOfListLOfOptionGroupLOfTL().broadcast({sync: true});
      this[_flattenedList$] = null;
      this[_optionGroups$] = null;
      this.optionGroups = optionGroups;
    }).prototype = SelectionOptions.prototype;
    (SelectionOptions.fromList = function(options, opts) {
      let label = opts && 'label' in opts ? opts.label : null;
      SelectionOptions.new.call(this, JSArrayOfOptionGroupLOfTL().of([new (OptionGroupOfTL()).withLabel(options, label)]));
    }).prototype = SelectionOptions.prototype;
    (SelectionOptions.withOptionGroups = function(optionGroups) {
      SelectionOptions.new.call(this, optionGroups);
    }).prototype = SelectionOptions.prototype;
    dart.addTypeTests(SelectionOptions);
    SelectionOptions.prototype[_is_SelectionOptions_default] = true;
    dart.addTypeCaches(SelectionOptions);
    SelectionOptions[dart.implements] = () => [observable.ObserveAware$(dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T))))))];
    dart.setMethodSignature(SelectionOptions, () => ({
      __proto__: dart.getMethods(SelectionOptions.__proto__),
      [_setOptions$]: dart.fnType(dart.void, [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(SelectionOptions, () => ({
      __proto__: dart.getGetters(SelectionOptions.__proto__),
      stream: dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T))))))),
      optionGroups: dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T))))),
      optionsList: dart.legacy(core.List$(dart.legacy(T))),
      isNotEmpty: dart.legacy(core.bool)
    }));
    dart.setSetterSignature(SelectionOptions, () => ({
      __proto__: dart.getSetters(SelectionOptions.__proto__),
      optionGroups: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(SelectionOptions, L1);
    dart.setFieldSignature(SelectionOptions, () => ({
      __proto__: dart.getFields(SelectionOptions.__proto__),
      [_controller$]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T)))))))),
      [_flattenedList$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(T)))),
      [_optionGroups$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T))))))
    }));
    return SelectionOptions;
  });
  selection_options.SelectionOptions = selection_options.SelectionOptions$();
  dart.addTypeTests(selection_options.SelectionOptions, _is_SelectionOptions_default);
  const _is__FutureSelectionOptions_default = Symbol('_is__FutureSelectionOptions_default');
  selection_options._FutureSelectionOptions$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    var JSArrayOfOptionGroupLOfTL = () => (JSArrayOfOptionGroupLOfTL = dart.constFn(_interceptors.JSArray$(OptionGroupLOfTL())))();
    class _FutureSelectionOptions extends selection_options.SelectionOptions$(dart.legacy(T)) {}
    (_FutureSelectionOptions.new = function(optionGroupListFuture) {
      _FutureSelectionOptions.__proto__.new.call(this, JSArrayOfOptionGroupLOfTL().of([]));
      optionGroupListFuture.then(dart.void, dart.bind(this, _setOptions$));
    }).prototype = _FutureSelectionOptions.prototype;
    dart.addTypeTests(_FutureSelectionOptions);
    _FutureSelectionOptions.prototype[_is__FutureSelectionOptions_default] = true;
    dart.addTypeCaches(_FutureSelectionOptions);
    dart.setLibraryUri(_FutureSelectionOptions, L1);
    return _FutureSelectionOptions;
  });
  selection_options._FutureSelectionOptions = selection_options._FutureSelectionOptions$();
  dart.addTypeTests(selection_options._FutureSelectionOptions, _is__FutureSelectionOptions_default);
  var _streamSub = dart.privateName(selection_options, "_streamSub");
  const _is__StreamSelectionOptions_default = Symbol('_is__StreamSelectionOptions_default');
  selection_options._StreamSelectionOptions$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    var JSArrayOfOptionGroupLOfTL = () => (JSArrayOfOptionGroupLOfTL = dart.constFn(_interceptors.JSArray$(OptionGroupLOfTL())))();
    class _StreamSelectionOptions extends selection_options.SelectionOptions$(dart.legacy(T)) {
      dispose() {
        let t0;
        t0 = this[_streamSub];
        t0 == null ? null : t0.cancel();
        super.dispose();
      }
    }
    (_StreamSelectionOptions.new = function(optionGroupListStream) {
      this[_streamSub] = null;
      _StreamSelectionOptions.__proto__.new.call(this, JSArrayOfOptionGroupLOfTL().of([]));
      this[_streamSub] = optionGroupListStream.listen(dart.bind(this, _setOptions$));
    }).prototype = _StreamSelectionOptions.prototype;
    dart.addTypeTests(_StreamSelectionOptions);
    _StreamSelectionOptions.prototype[_is__StreamSelectionOptions_default] = true;
    dart.addTypeCaches(_StreamSelectionOptions);
    dart.setLibraryUri(_StreamSelectionOptions, L1);
    dart.setFieldSignature(_StreamSelectionOptions, () => ({
      __proto__: dart.getFields(_StreamSelectionOptions.__proto__),
      [_streamSub]: dart.fieldType(dart.legacy(async.StreamSubscription))
    }));
    return _StreamSelectionOptions;
  });
  selection_options._StreamSelectionOptions = selection_options._StreamSelectionOptions$();
  dart.addTypeTests(selection_options._StreamSelectionOptions, _is__StreamSelectionOptions_default);
  dart.trackLibraries("packages/angular_components/model/selection/selection_options", {
    "package:angular_components/src/model/selection/delegating_selection_options.dart": delegating_selection_options,
    "package:angular_components/model/selection/selection_options.dart": selection_options
  }, {
    "package:angular_components/model/selection/selection_options.dart": ["package:angular_components/src/model/selection/future_selection_options_impl.dart", "package:angular_components/src/model/selection/stream_selection_options_impl.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["../../src/model/selection/delegating_selection_options.dart","selection_options.dart","../../src/model/selection/future_selection_options_impl.dart","../../src/model/selection/stream_selection_options_impl.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAe2C,cAAA,AAAS;MAAY;;qCAGxB;AACN,QAA9B,AAAS,+BAAe,MAAM;MAChC;;AAIoB,QAAlB,AAAS;MACX;;AAGuB,cAAA,AAAS;MAAU;;AAGf,cAAA,AAAS;MAAW;;AAGJ,cAAA,AAAS;MAAM;;;;;;;;;;;;;;;;;;;;;;;;MAtB1B;;IAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ACWhB,cAAA,AAAe,0BAAG,OAAO,AAAc,0BAAK;MAAI;;AAI/C,cAAA,AAAe,0BAAG;MAAI;wBAgBX,OAAW;AACtC,2BAAe,AAAK,aAAQ,KAAK,EAAE,GAAG;AAE9C,cAAmB,2CACf,YAAY,YAAE,iBAAW,OAAO,cAAM,sCAAe;MAC3D;;gCAnBoB,OAAsB;;AAAa,2CAAM,KAAK,EAAE,QAAQ;;IAAC;8CAEvC,OACnB;MAAe;AACtB,yDAAkB,KAAK,EAAE,QAAQ;;IAAC;sCAIhB,OAAe,cAAc;MACtC,wBAAE,AAAW,UAAD,IAAI,OAAQ,cAAM,UAAU,qBAAI;AACrD,iDAAU,KAAK,EAAE,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;MA8BnB;;;;IAClB;;;;;;;;;;;;;;;;;;;;;;;;;;;wBAmCuC;AACjC,oFAA2B,qBAAqB;MAAC;wBAQhB;AACjC,oFAA2B,qBAAqB;MAAC;;AAIV,cAAA,AAAY;MAAM;;AAGpB;MAAa;;qCAGhB;AAChC,uBAAW;AACf,yBAAI,QAAQ,EAAI,KAAK;AACE,UAArB,uBAAgB,KAAK;AAGV,UAFX,wBAAiB,AAAc,wBAAG,OAC5B,AAAc,AAAiB,oCAAV,QAAC,KAAM,CAAC,sDAC1B;AACqB,UAA9B,AAAY,uBAAI;;MAEpB;;AAI2B;MAAc;;AAGlB,cAAA,AAAa,yBAAI,QAAC,SAAU,AAAM,KAAD;MAAY;;qCAE9B;AACX,QAAzB,oBAAe,UAAU;MAC3B;;AAKqB,QAAnB,AAAY;AACG,QAAT;MACR;;qCA9DsC;MAPhC,qBACF,6DAAuD;MAEnD;MACa;AAIa,MAA3B,oBAAe,YAAY;IAClC;0CAIkC;UAAiB;sCACxB,gCAAC,kCAAyB,OAAO,EAAE,KAAK;IAAG;kDAGf;sCAC5C,YAAY;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4CC9F6B;AAC/C,uDAAM;AAC6B,MAAvC,AAAsB,qBAAD,2BAAM;IAC7B;;;;;;;;;;;;;;;;;;;ACKsB,aAApB;4BAAY;AACG,QAAT;MACR;;4CATqD;MADlC;AAEb,uDAAM;AAC4C,MAAtD,mBAAa,AAAsB,qBAAD,kBAAQ;IAC5C","file":"selection_options.unsound.ddc.js"}');
  // Exports:
  return {
    src__model__selection__delegating_selection_options: delegating_selection_options,
    model__selection__selection_options: selection_options
  };
}));

//# sourceMappingURL=selection_options.unsound.ddc.js.map
