define(['dart_sdk', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/src/utils/async/async_update_scheduler', 'packages/angular_components/model/selection/select', 'packages/angular_components/model/ui/has_renderer'], (function load__packages__angular_components__model__selection__string_selection_options(dart_sdk, packages__angular_components__model__selection__selection_options, packages__angular_components__src__utils__async__async_update_scheduler, packages__angular_components__model__selection__select, packages__angular_components__model__ui__has_renderer) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const disposable_future = packages__angular_components__src__utils__async__async_update_scheduler.src__utils__async__disposable_future;
  const select = packages__angular_components__model__selection__select.model__selection__select;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  var string_selection_options = Object.create(dart.library);
  var $add = dartx.add;
  var $isNotEmpty = dartx.isNotEmpty;
  var $take = dartx.take;
  var $toList = dartx.toList;
  var $contains = dartx.contains;
  var $forEach = dartx.forEach;
  var $compareTo = dartx.compareTo;
  var $replaceAll = dartx.replaceAll;
  var $toLowerCase = dartx.toLowerCase;
  var $toString = dartx.toString;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(StringL(), [StringL()])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var DisposableFutureOfboolL = () => (DisposableFutureOfboolL = dart.constFn(disposable_future.DisposableFuture$(boolL())))();
  var VoidToStringL = () => (VoidToStringL = dart.constFn(dart.fnType(StringL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/selection/string_selection_options.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(string_selection_options._stringFormatSuggestion, StringLToStringL());
    }
  }, false);
  var C0;
  var _currentQuery = dart.privateName(string_selection_options, "_currentQuery");
  var _currentLimit = dart.privateName(string_selection_options, "_currentLimit");
  var _optionGroups = dart.privateName(string_selection_options, "_optionGroups");
  var _suggestionFilter = dart.privateName(string_selection_options, "_suggestionFilter");
  var _toFilterableString = dart.privateName(string_selection_options, "_toFilterableString");
  var _shouldSort = dart.privateName(string_selection_options, "_shouldSort");
  var _shouldFilterEmpty = dart.privateName(string_selection_options, "_shouldFilterEmpty");
  var _sanitizeString = dart.privateName(string_selection_options, "_sanitizeString");
  var _sortFn = dart.privateName(string_selection_options, "_sortFn");
  const _is_StringSelectionOptions_default = Symbol('_is_StringSelectionOptions_default');
  string_selection_options.StringSelectionOptions$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    var JSArrayOfOptionGroupLOfTL = () => (JSArrayOfOptionGroupLOfTL = dart.constFn(_interceptors.JSArray$(OptionGroupLOfTL())))();
    var TLToboolL = () => (TLToboolL = dart.constFn(dart.fnType(boolL(), [TL()])))();
    var EmptyIterableOfTL = () => (EmptyIterableOfTL = dart.constFn(_internal.EmptyIterable$(TL())))();
    var ListOfOptionGroupLOfTL = () => (ListOfOptionGroupLOfTL = dart.constFn(core.List$(OptionGroupLOfTL())))();
    var ListLOfOptionGroupLOfTL = () => (ListLOfOptionGroupLOfTL = dart.constFn(dart.legacy(ListOfOptionGroupLOfTL())))();
    var OptionGroupLOfTLToNull = () => (OptionGroupLOfTLToNull = dart.constFn(dart.fnType(core.Null, [OptionGroupLOfTL()])))();
    class StringSelectionOptions extends selection_options.SelectionOptions$(dart.legacy(T)) {
      filter(query, opts) {
        let limit = opts && 'limit' in opts ? opts.limit : -1;
        this[_currentLimit] = dart.notNull(limit) < 1 ? 9007199254740992.0 : limit;
        this[_currentQuery] = StringL().as(query);
        this.refilter();
        return DisposableFutureOfboolL().fromValue(true);
      }
      get filterApplied() {
        return this.currentQuery != null;
      }
      refilter() {
        let t0;
        let filtered = JSArrayOfOptionGroupLOfTL().of([]);
        let count = 0;
        let filterQuery = this[_currentQuery] == null ? "" : (t0 = this[_currentQuery], this[_sanitizeString](t0));
        for (let group of this[_optionGroups]) {
          if (count >= dart.notNull(this.currentLimit)) break;
          let filteredGroup = this.filterOptionGroup(group, filterQuery, dart.notNull(this.currentLimit) - count);
          count = count + dart.notNull(filteredGroup.length);
          filtered[$add](filteredGroup);
        }
        super.optionGroups = filtered;
      }
      filterOptionGroup(group, filterQuery, limit) {
        OptionGroupLOfTL().as(group);
        let list = null;
        if (filterQuery[$isNotEmpty]) {
          list = group.where(dart.fn(suggestion => {
            let t1, t0;
            t0 = suggestion;
            t1 = filterQuery;
            return this[_suggestionFilter](t0, t1);
          }, TLToboolL()))[$take](limit);
        } else if (dart.test(this[_shouldFilterEmpty])) {
          list = group.take(limit);
        } else {
          list = new (EmptyIterableOfTL()).new();
        }
        let filteredGroup = new (OptionGroupOfTL()).withLabelFunction(list[$toList]({growable: false}), dart.fn(() => group.uiDisplayName, VoidToStringL()), group.emptyLabel != null ? dart.fn(() => group.emptyLabel, VoidToStringL()) : null);
        return filteredGroup;
      }
      filterOption(option, filterQuery) {
        let t0, t0$;
        TL().as(option);
        return (t0$ = (t0 = option, this[_toFilterableString](t0)), this[_sanitizeString](t0$))[$contains](filterQuery);
      }
      get currentQuery() {
        return this[_currentQuery];
      }
      get currentLimit() {
        return this[_currentLimit];
      }
      get unfilteredOptionGroups() {
        return this[_optionGroups];
      }
      set optionGroups(value) {
        ListLOfOptionGroupLOfTL().as(value);
        if (dart.test(this[_shouldSort])) {
          value[$forEach](dart.fn(optionGroup => {
            optionGroup.sort(dart.bind(this, _sortFn));
          }, OptionGroupLOfTLToNull()));
        }
        this[_optionGroups] = value;
        super.optionGroups = value;
        if (dart.test(this.filterApplied)) {
          this.refilter();
        }
      }
      get optionGroups() {
        return super.optionGroups;
      }
      [_sortFn](a, b) {
        let t0, t0$;
        TL().as(a);
        TL().as(b);
        return (t0 = a, this[_toFilterableString](t0))[$compareTo]((t0$ = b, this[_toFilterableString](t0$)));
      }
    }
    (StringSelectionOptions.new = function(options, opts) {
      let toFilterableString = opts && 'toFilterableString' in opts ? opts.toFilterableString : null;
      let suggestionFilter = opts && 'suggestionFilter' in opts ? opts.suggestionFilter : null;
      let sanitizeString = opts && 'sanitizeString' in opts ? opts.sanitizeString : C0 || CT.C0;
      let shouldSort = opts && 'shouldSort' in opts ? opts.shouldSort : false;
      let shouldFilterEmpty = opts && 'shouldFilterEmpty' in opts ? opts.shouldFilterEmpty : true;
      StringSelectionOptions.withOptionGroups.call(this, JSArrayOfOptionGroupLOfTL().of([new (OptionGroupOfTL()).new(options)]), {toFilterableString: toFilterableString, suggestionFilter: suggestionFilter, sanitizeString: sanitizeString, shouldSort: shouldSort, shouldFilterEmpty: shouldFilterEmpty});
    }).prototype = StringSelectionOptions.prototype;
    (StringSelectionOptions.withOptionGroups = function(optionGroups, opts) {
      let t0;
      let toFilterableString = opts && 'toFilterableString' in opts ? opts.toFilterableString : null;
      let suggestionFilter = opts && 'suggestionFilter' in opts ? opts.suggestionFilter : null;
      let sanitizeString = opts && 'sanitizeString' in opts ? opts.sanitizeString : C0 || CT.C0;
      let shouldSort = opts && 'shouldSort' in opts ? opts.shouldSort : false;
      let shouldFilterEmpty = opts && 'shouldFilterEmpty' in opts ? opts.shouldFilterEmpty : true;
      this[_currentQuery] = null;
      this[_currentLimit] = -1;
      this[_optionGroups] = null;
      this[_suggestionFilter] = null;
      this[_toFilterableString] = (t0 = toFilterableString, t0 == null ? string_selection_options._defaultRenderer(TL(), sanitizeString) : t0);
      this[_shouldSort] = shouldSort;
      this[_shouldFilterEmpty] = shouldFilterEmpty;
      this[_sanitizeString] = sanitizeString;
      StringSelectionOptions.__proto__.new.call(this, optionGroups);
      this[_suggestionFilter] = suggestionFilter != null ? suggestionFilter : dart.bind(this, 'filterOption');
    }).prototype = StringSelectionOptions.prototype;
    dart.addTypeTests(StringSelectionOptions);
    StringSelectionOptions.prototype[_is_StringSelectionOptions_default] = true;
    dart.addTypeCaches(StringSelectionOptions);
    StringSelectionOptions[dart.implements] = () => [select.Filterable];
    dart.setMethodSignature(StringSelectionOptions, () => ({
      __proto__: dart.getMethods(StringSelectionOptions.__proto__),
      filter: dart.fnType(dart.legacy(disposable_future.DisposableFuture$(dart.legacy(core.bool))), [dart.legacy(core.Object)], {limit: dart.legacy(core.int)}, {}),
      refilter: dart.fnType(dart.void, []),
      filterOptionGroup: dart.fnType(dart.legacy(selection_options.OptionGroup$(dart.legacy(T))), [dart.legacy(core.Object), dart.legacy(core.String), dart.legacy(core.int)]),
      filterOption: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object), dart.legacy(core.String)]),
      [_sortFn]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object), dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(StringSelectionOptions, () => ({
      __proto__: dart.getGetters(StringSelectionOptions.__proto__),
      filterApplied: dart.legacy(core.bool),
      currentQuery: dart.legacy(core.Object),
      currentLimit: dart.legacy(core.int),
      unfilteredOptionGroups: dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T)))))
    }));
    dart.setLibraryUri(StringSelectionOptions, L0);
    dart.setFieldSignature(StringSelectionOptions, () => ({
      __proto__: dart.getFields(StringSelectionOptions.__proto__),
      [_currentQuery]: dart.fieldType(dart.legacy(core.String)),
      [_currentLimit]: dart.fieldType(dart.legacy(core.int)),
      [_optionGroups]: dart.fieldType(dart.legacy(core.List$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T)))))),
      [_toFilterableString]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)]))),
      [_suggestionFilter]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T), dart.legacy(core.String)]))),
      [_sanitizeString]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]))),
      [_shouldSort]: dart.finalFieldType(dart.legacy(core.bool)),
      [_shouldFilterEmpty]: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return StringSelectionOptions;
  });
  string_selection_options.StringSelectionOptions = string_selection_options.StringSelectionOptions$();
  dart.defineLazy(string_selection_options.StringSelectionOptions, {
    /*string_selection_options.StringSelectionOptions.UNLIMITED*/get UNLIMITED() {
      return 9007199254740992.0;
    }
  }, true);
  dart.addTypeTests(string_selection_options.StringSelectionOptions, _is_StringSelectionOptions_default);
  string_selection_options._stringFormatSuggestion = function _stringFormatSuggestion(value) {
    return value[$replaceAll](" ", "")[$toLowerCase]();
  };
  string_selection_options._defaultRenderer = function _defaultRenderer(T, sanitizeString) {
    return has_renderer.newCachingItemRenderer(dart.legacy(T), dart.fn(value => sanitizeString(dart.toString(value)), dart.fnType(StringL(), [dart.legacy(T)])));
  };
  dart.trackLibraries("packages/angular_components/model/selection/string_selection_options", {
    "package:angular_components/model/selection/string_selection_options.dart": string_selection_options
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["string_selection_options.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;aAmHuC;YAAY;AACF,QAA7C,sBAAsB,aAAN,KAAK,IAAG,yBAAgB,KAAK;AACd,QAA/B,sBAAsB,aAAN,KAAK;AACX,QAAV;AACA,cAAwB,qCAAU;MACpC;;AAG0B,cAAA,AAAa,sBAAG;MAAI;;;AAIvB,uBAAW;AAC5B,oBAAQ;AACL,0BACH,AAAc,uBAAG,OAAO,WAAqB,qBAAhB,AAAe;AAChD,iBAAS,QAAS;AAChB,cAAI,AAAM,KAAD,iBAAI,oBAAc;AACvB,8BACA,uBAAkB,KAAK,EAAE,WAAW,EAAe,aAAb,qBAAe,KAAK;AACjC,UAA7B,QAAA,AAAM,KAAD,gBAAI,AAAc,aAAD;AACK,UAA3B,AAAS,QAAD,OAAK,aAAa;;AAEC,QAAvB,qBAAe,QAAQ;MAC/B;wBAImB,OAAc,aAAiB;8BAA/B;AACL;AACZ,YAAI,AAAY,WAAD;AAMG,UAFhB,OAAO,AACF,AACA,KAFO,OACD,QAAC;;AAAe,iBAAkB,UAAU;iBAAE,WAAW;kBAAzC,AAAiB;kCAClC,KAAK;cACV,eAAI;AACe,UAAxB,OAAO,AAAM,KAAD,MAAM,KAAK;;AAEG,UAA1B,OAAO;;AAEL,4BAAgB,0CAChB,AAAK,IAAD,qBAAkB,SACtB,cAAM,AAAM,KAAD,kCACX,AAAM,AAAW,KAAZ,eAAe,OAAO,cAAM,AAAM,KAAD,gCAAc;AAExD,cAAO,cAAa;MACtB;mBAGoB,QAAe;;gBAAf;AAGlB,cAAoD,cAAT,MAAM,EAA1B,AAAmB,gCAAnC,AAAe,uCAAuC,WAAW;MAC1E;;AAG2B;MAAa;;AAGhB;MAAa;;AAEc;MAAa;;qCAG1B;AAEpC,sBAAI;AAGA,UAFF,AAAM,KAAD,WAAS,QAAC;AACY,YAAzB,AAAY,WAAD,gBAAM;;;AAIA,QAArB,sBAAgB,KAAK;AACK,QAApB,qBAAe,KAAK;AAC1B,sBAAI;AACQ,UAAV;;MAEJ;;;;gBAEc,GAAK;;gBAAL;gBAAK;AACf,cAAuB,OAAH,CAAC,EAArB,AAAmB,kDAAkC,CAAC,EAArB,AAAmB;MAAI;;2CAvH7B;UACV;UACS;UACL;UAChB;UACA;yDACmB,gCAAC,4BAAY,OAAO,0BAClB,kBAAkB,oBACpB,gBAAgB,kBAClB,cAAc,cAClB,UAAU,qBACH,iBAAiB;IAAC;wDAEc;;UACxC;UACS;UACL;UAChB;UACA;MArDF;MAGH,sBAAgB,CAAC;MAEA;MAOK;MA0CA,6BACG,KAAnB,kBAAkB,QAAlB,OAAsB,gDAAiB,cAAc;MAC7C,oBAAE,UAAU;MACL,2BAAE,iBAAiB;MACtB,wBAAE,cAAc;AAChC,sDAAM,YAAY;AAEwC,MAD9D,0BACI,AAAiB,gBAAD,IAAI,OAAO,gBAAgB,aAAG;IACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAjEiB,yDAAS;;;;;sFA7BU;AAClC,UAAA,AAAM,AAAoB,MAArB,cAAY,KAAK;EAAiB;2EAEc;AACrD,+DAA0B,QAAG,SAAU,AAAc,cAAA,CAAO,cAAN,KAAK;EAAa","file":"string_selection_options.unsound.ddc.js"}');
  // Exports:
  return {
    model__selection__string_selection_options: string_selection_options
  };
}));

//# sourceMappingURL=string_selection_options.unsound.ddc.js.map
