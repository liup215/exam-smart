define(['dart_sdk'], (function load__packages__intl__date_symbols(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var date_symbols = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toString = dartx.toString;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var StringLToListLOfStringL = () => (StringLToListLOfStringL = dart.constFn(dart.fnType(ListLOfStringL(), [StringL()])))();
  var LinkedHashMapOfStringL$StringL = () => (LinkedHashMapOfStringL$StringL = dart.constFn(collection.LinkedHashMap$(StringL(), StringL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  const CT = Object.create(null);
  var L0 = "package:intl/date_symbols.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["BC", "AD"], StringL());
    },
    get C1() {
      return C1 = dart.constList(["Before Christ", "Anno Domini"], StringL());
    },
    get C2() {
      return C2 = dart.constList(["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], StringL());
    },
    get C3() {
      return C3 = dart.constList(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], StringL());
    },
    get C4() {
      return C4 = dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], StringL());
    },
    get C5() {
      return C5 = dart.constList(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], StringL());
    },
    get C6() {
      return C6 = dart.constList(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], StringL());
    },
    get C7() {
      return C7 = dart.constList(["S", "M", "T", "W", "T", "F", "S"], StringL());
    },
    get C8() {
      return C8 = dart.constList(["Q1", "Q2", "Q3", "Q4"], StringL());
    },
    get C9() {
      return C9 = dart.constList(["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], StringL());
    },
    get C10() {
      return C10 = dart.constList(["AM", "PM"], StringL());
    },
    get C11() {
      return C11 = dart.constList(["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], StringL());
    },
    get C12() {
      return C12 = dart.constList(["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], StringL());
    },
    get C13() {
      return C13 = dart.constList([5, 6], intL());
    },
    get C14() {
      return C14 = dart.constList(["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C15() {
      return C15 = dart.constMap(StringL(), StringL(), ["d", "d", "E", "EEE", "EEEE", "EEEE", "LLL", "LLL", "LLLL", "LLLL", "M", "L", "Md", "M/d", "MEd", "EEE, M/d", "MMM", "LLL", "MMMd", "MMM d", "MMMEd", "EEE, MMM d", "MMMM", "LLLL", "MMMMd", "MMMM d", "MMMMEEEEd", "EEEE, MMMM d", "QQQ", "QQQ", "QQQQ", "QQQQ", "y", "y", "yM", "M/y", "yMd", "M/d/y", "yMEd", "EEE, M/d/y", "yMMM", "MMM y", "yMMMd", "MMM d, y", "yMMMEd", "EEE, MMM d, y", "yMMMM", "MMMM y", "yMMMMd", "MMMM d, y", "yMMMMEEEEd", "EEEE, MMMM d, y", "yQQQ", "QQQ y", "yQQQQ", "QQQQ y", "H", "HH", "Hm", "HH:mm", "Hms", "HH:mm:ss", "j", "h a", "jm", "h:mm a", "jms", "h:mm:ss a", "jmv", "h:mm a v", "jmz", "h:mm a z", "jz", "h a z", "m", "m", "ms", "mm:ss", "s", "s", "v", "v", "z", "z", "zzzz", "zzzz", "ZZZZ", "ZZZZ"]);
    }
  }, false);
  var _serializeToMap = dart.privateName(date_symbols, "_serializeToMap");
  var NAME$ = dart.privateName(date_symbols, "DateSymbols.NAME");
  var ERAS$ = dart.privateName(date_symbols, "DateSymbols.ERAS");
  var ERANAMES$ = dart.privateName(date_symbols, "DateSymbols.ERANAMES");
  var NARROWMONTHS$ = dart.privateName(date_symbols, "DateSymbols.NARROWMONTHS");
  var STANDALONENARROWMONTHS$ = dart.privateName(date_symbols, "DateSymbols.STANDALONENARROWMONTHS");
  var MONTHS$ = dart.privateName(date_symbols, "DateSymbols.MONTHS");
  var STANDALONEMONTHS$ = dart.privateName(date_symbols, "DateSymbols.STANDALONEMONTHS");
  var SHORTMONTHS$ = dart.privateName(date_symbols, "DateSymbols.SHORTMONTHS");
  var STANDALONESHORTMONTHS$ = dart.privateName(date_symbols, "DateSymbols.STANDALONESHORTMONTHS");
  var WEEKDAYS$ = dart.privateName(date_symbols, "DateSymbols.WEEKDAYS");
  var STANDALONEWEEKDAYS$ = dart.privateName(date_symbols, "DateSymbols.STANDALONEWEEKDAYS");
  var SHORTWEEKDAYS$ = dart.privateName(date_symbols, "DateSymbols.SHORTWEEKDAYS");
  var STANDALONESHORTWEEKDAYS$ = dart.privateName(date_symbols, "DateSymbols.STANDALONESHORTWEEKDAYS");
  var NARROWWEEKDAYS$ = dart.privateName(date_symbols, "DateSymbols.NARROWWEEKDAYS");
  var STANDALONENARROWWEEKDAYS$ = dart.privateName(date_symbols, "DateSymbols.STANDALONENARROWWEEKDAYS");
  var SHORTQUARTERS$ = dart.privateName(date_symbols, "DateSymbols.SHORTQUARTERS");
  var QUARTERS$ = dart.privateName(date_symbols, "DateSymbols.QUARTERS");
  var AMPMS$ = dart.privateName(date_symbols, "DateSymbols.AMPMS");
  var DATEFORMATS$ = dart.privateName(date_symbols, "DateSymbols.DATEFORMATS");
  var TIMEFORMATS$ = dart.privateName(date_symbols, "DateSymbols.TIMEFORMATS");
  var DATETIMEFORMATS$ = dart.privateName(date_symbols, "DateSymbols.DATETIMEFORMATS");
  var AVAILABLEFORMATS$ = dart.privateName(date_symbols, "DateSymbols.AVAILABLEFORMATS");
  var FIRSTDAYOFWEEK$ = dart.privateName(date_symbols, "DateSymbols.FIRSTDAYOFWEEK");
  var WEEKENDRANGE$ = dart.privateName(date_symbols, "DateSymbols.WEEKENDRANGE");
  var FIRSTWEEKCUTOFFDAY$ = dart.privateName(date_symbols, "DateSymbols.FIRSTWEEKCUTOFFDAY");
  var ZERODIGIT$ = dart.privateName(date_symbols, "DateSymbols.ZERODIGIT");
  date_symbols.DateSymbols = class DateSymbols extends core.Object {
    get NAME() {
      return this[NAME$];
    }
    set NAME(value) {
      this[NAME$] = value;
    }
    get ERAS() {
      return this[ERAS$];
    }
    set ERAS(value) {
      this[ERAS$] = value;
    }
    get ERANAMES() {
      return this[ERANAMES$];
    }
    set ERANAMES(value) {
      this[ERANAMES$] = value;
    }
    get NARROWMONTHS() {
      return this[NARROWMONTHS$];
    }
    set NARROWMONTHS(value) {
      this[NARROWMONTHS$] = value;
    }
    get STANDALONENARROWMONTHS() {
      return this[STANDALONENARROWMONTHS$];
    }
    set STANDALONENARROWMONTHS(value) {
      this[STANDALONENARROWMONTHS$] = value;
    }
    get MONTHS() {
      return this[MONTHS$];
    }
    set MONTHS(value) {
      this[MONTHS$] = value;
    }
    get STANDALONEMONTHS() {
      return this[STANDALONEMONTHS$];
    }
    set STANDALONEMONTHS(value) {
      this[STANDALONEMONTHS$] = value;
    }
    get SHORTMONTHS() {
      return this[SHORTMONTHS$];
    }
    set SHORTMONTHS(value) {
      this[SHORTMONTHS$] = value;
    }
    get STANDALONESHORTMONTHS() {
      return this[STANDALONESHORTMONTHS$];
    }
    set STANDALONESHORTMONTHS(value) {
      this[STANDALONESHORTMONTHS$] = value;
    }
    get WEEKDAYS() {
      return this[WEEKDAYS$];
    }
    set WEEKDAYS(value) {
      this[WEEKDAYS$] = value;
    }
    get STANDALONEWEEKDAYS() {
      return this[STANDALONEWEEKDAYS$];
    }
    set STANDALONEWEEKDAYS(value) {
      this[STANDALONEWEEKDAYS$] = value;
    }
    get SHORTWEEKDAYS() {
      return this[SHORTWEEKDAYS$];
    }
    set SHORTWEEKDAYS(value) {
      this[SHORTWEEKDAYS$] = value;
    }
    get STANDALONESHORTWEEKDAYS() {
      return this[STANDALONESHORTWEEKDAYS$];
    }
    set STANDALONESHORTWEEKDAYS(value) {
      this[STANDALONESHORTWEEKDAYS$] = value;
    }
    get NARROWWEEKDAYS() {
      return this[NARROWWEEKDAYS$];
    }
    set NARROWWEEKDAYS(value) {
      this[NARROWWEEKDAYS$] = value;
    }
    get STANDALONENARROWWEEKDAYS() {
      return this[STANDALONENARROWWEEKDAYS$];
    }
    set STANDALONENARROWWEEKDAYS(value) {
      this[STANDALONENARROWWEEKDAYS$] = value;
    }
    get SHORTQUARTERS() {
      return this[SHORTQUARTERS$];
    }
    set SHORTQUARTERS(value) {
      this[SHORTQUARTERS$] = value;
    }
    get QUARTERS() {
      return this[QUARTERS$];
    }
    set QUARTERS(value) {
      this[QUARTERS$] = value;
    }
    get AMPMS() {
      return this[AMPMS$];
    }
    set AMPMS(value) {
      this[AMPMS$] = value;
    }
    get DATEFORMATS() {
      return this[DATEFORMATS$];
    }
    set DATEFORMATS(value) {
      this[DATEFORMATS$] = value;
    }
    get TIMEFORMATS() {
      return this[TIMEFORMATS$];
    }
    set TIMEFORMATS(value) {
      this[TIMEFORMATS$] = value;
    }
    get DATETIMEFORMATS() {
      return this[DATETIMEFORMATS$];
    }
    set DATETIMEFORMATS(value) {
      this[DATETIMEFORMATS$] = value;
    }
    get AVAILABLEFORMATS() {
      return this[AVAILABLEFORMATS$];
    }
    set AVAILABLEFORMATS(value) {
      this[AVAILABLEFORMATS$] = value;
    }
    get FIRSTDAYOFWEEK() {
      return this[FIRSTDAYOFWEEK$];
    }
    set FIRSTDAYOFWEEK(value) {
      this[FIRSTDAYOFWEEK$] = value;
    }
    get WEEKENDRANGE() {
      return this[WEEKENDRANGE$];
    }
    set WEEKENDRANGE(value) {
      this[WEEKENDRANGE$] = value;
    }
    get FIRSTWEEKCUTOFFDAY() {
      return this[FIRSTWEEKCUTOFFDAY$];
    }
    set FIRSTWEEKCUTOFFDAY(value) {
      this[FIRSTWEEKCUTOFFDAY$] = value;
    }
    get ZERODIGIT() {
      return this[ZERODIGIT$];
    }
    set ZERODIGIT(value) {
      this[ZERODIGIT$] = value;
    }
    serializeToMap() {
      let basicMap = this[_serializeToMap]();
      if (this.ZERODIGIT != null && this.ZERODIGIT !== "") {
        basicMap[$_set]("ZERODIGIT", this.ZERODIGIT);
      }
      return basicMap;
    }
    [_serializeToMap]() {
      return new (IdentityMapOfStringL$dynamic()).from(["NAME", this.NAME, "ERAS", this.ERAS, "ERANAMES", this.ERANAMES, "NARROWMONTHS", this.NARROWMONTHS, "STANDALONENARROWMONTHS", this.STANDALONENARROWMONTHS, "MONTHS", this.MONTHS, "STANDALONEMONTHS", this.STANDALONEMONTHS, "SHORTMONTHS", this.SHORTMONTHS, "STANDALONESHORTMONTHS", this.STANDALONESHORTMONTHS, "WEEKDAYS", this.WEEKDAYS, "STANDALONEWEEKDAYS", this.STANDALONEWEEKDAYS, "SHORTWEEKDAYS", this.SHORTWEEKDAYS, "STANDALONESHORTWEEKDAYS", this.STANDALONESHORTWEEKDAYS, "NARROWWEEKDAYS", this.NARROWWEEKDAYS, "STANDALONENARROWWEEKDAYS", this.STANDALONENARROWWEEKDAYS, "SHORTQUARTERS", this.SHORTQUARTERS, "QUARTERS", this.QUARTERS, "AMPMS", this.AMPMS, "DATEFORMATS", this.DATEFORMATS, "TIMEFORMATS", this.TIMEFORMATS, "AVAILABLEFORMATS", this.AVAILABLEFORMATS, "FIRSTDAYOFWEEK", this.FIRSTDAYOFWEEK, "WEEKENDRANGE", this.WEEKENDRANGE, "FIRSTWEEKCUTOFFDAY", this.FIRSTWEEKCUTOFFDAY, "DATETIMEFORMATS", this.DATETIMEFORMATS]);
    }
    toString() {
      return this.NAME;
    }
  };
  (date_symbols.DateSymbols.new = function(opts) {
    let NAME = opts && 'NAME' in opts ? opts.NAME : null;
    let ERAS = opts && 'ERAS' in opts ? opts.ERAS : null;
    let ERANAMES = opts && 'ERANAMES' in opts ? opts.ERANAMES : null;
    let NARROWMONTHS = opts && 'NARROWMONTHS' in opts ? opts.NARROWMONTHS : null;
    let STANDALONENARROWMONTHS = opts && 'STANDALONENARROWMONTHS' in opts ? opts.STANDALONENARROWMONTHS : null;
    let MONTHS = opts && 'MONTHS' in opts ? opts.MONTHS : null;
    let STANDALONEMONTHS = opts && 'STANDALONEMONTHS' in opts ? opts.STANDALONEMONTHS : null;
    let SHORTMONTHS = opts && 'SHORTMONTHS' in opts ? opts.SHORTMONTHS : null;
    let STANDALONESHORTMONTHS = opts && 'STANDALONESHORTMONTHS' in opts ? opts.STANDALONESHORTMONTHS : null;
    let WEEKDAYS = opts && 'WEEKDAYS' in opts ? opts.WEEKDAYS : null;
    let STANDALONEWEEKDAYS = opts && 'STANDALONEWEEKDAYS' in opts ? opts.STANDALONEWEEKDAYS : null;
    let SHORTWEEKDAYS = opts && 'SHORTWEEKDAYS' in opts ? opts.SHORTWEEKDAYS : null;
    let STANDALONESHORTWEEKDAYS = opts && 'STANDALONESHORTWEEKDAYS' in opts ? opts.STANDALONESHORTWEEKDAYS : null;
    let NARROWWEEKDAYS = opts && 'NARROWWEEKDAYS' in opts ? opts.NARROWWEEKDAYS : null;
    let STANDALONENARROWWEEKDAYS = opts && 'STANDALONENARROWWEEKDAYS' in opts ? opts.STANDALONENARROWWEEKDAYS : null;
    let SHORTQUARTERS = opts && 'SHORTQUARTERS' in opts ? opts.SHORTQUARTERS : null;
    let QUARTERS = opts && 'QUARTERS' in opts ? opts.QUARTERS : null;
    let AMPMS = opts && 'AMPMS' in opts ? opts.AMPMS : null;
    let ZERODIGIT = opts && 'ZERODIGIT' in opts ? opts.ZERODIGIT : null;
    let DATEFORMATS = opts && 'DATEFORMATS' in opts ? opts.DATEFORMATS : null;
    let TIMEFORMATS = opts && 'TIMEFORMATS' in opts ? opts.TIMEFORMATS : null;
    let AVAILABLEFORMATS = opts && 'AVAILABLEFORMATS' in opts ? opts.AVAILABLEFORMATS : null;
    let FIRSTDAYOFWEEK = opts && 'FIRSTDAYOFWEEK' in opts ? opts.FIRSTDAYOFWEEK : null;
    let WEEKENDRANGE = opts && 'WEEKENDRANGE' in opts ? opts.WEEKENDRANGE : null;
    let FIRSTWEEKCUTOFFDAY = opts && 'FIRSTWEEKCUTOFFDAY' in opts ? opts.FIRSTWEEKCUTOFFDAY : null;
    let DATETIMEFORMATS = opts && 'DATETIMEFORMATS' in opts ? opts.DATETIMEFORMATS : null;
    this[NAME$] = NAME;
    this[ERAS$] = ERAS;
    this[ERANAMES$] = ERANAMES;
    this[NARROWMONTHS$] = NARROWMONTHS;
    this[STANDALONENARROWMONTHS$] = STANDALONENARROWMONTHS;
    this[MONTHS$] = MONTHS;
    this[STANDALONEMONTHS$] = STANDALONEMONTHS;
    this[SHORTMONTHS$] = SHORTMONTHS;
    this[STANDALONESHORTMONTHS$] = STANDALONESHORTMONTHS;
    this[WEEKDAYS$] = WEEKDAYS;
    this[STANDALONEWEEKDAYS$] = STANDALONEWEEKDAYS;
    this[SHORTWEEKDAYS$] = SHORTWEEKDAYS;
    this[STANDALONESHORTWEEKDAYS$] = STANDALONESHORTWEEKDAYS;
    this[NARROWWEEKDAYS$] = NARROWWEEKDAYS;
    this[STANDALONENARROWWEEKDAYS$] = STANDALONENARROWWEEKDAYS;
    this[SHORTQUARTERS$] = SHORTQUARTERS;
    this[QUARTERS$] = QUARTERS;
    this[AMPMS$] = AMPMS;
    this[ZERODIGIT$] = ZERODIGIT;
    this[DATEFORMATS$] = DATEFORMATS;
    this[TIMEFORMATS$] = TIMEFORMATS;
    this[AVAILABLEFORMATS$] = AVAILABLEFORMATS;
    this[FIRSTDAYOFWEEK$] = FIRSTDAYOFWEEK;
    this[WEEKENDRANGE$] = WEEKENDRANGE;
    this[FIRSTWEEKCUTOFFDAY$] = FIRSTWEEKCUTOFFDAY;
    this[DATETIMEFORMATS$] = DATETIMEFORMATS;
    ;
  }).prototype = date_symbols.DateSymbols.prototype;
  (date_symbols.DateSymbols.deserializeFromMap = function(map) {
    let t0;
    this[DATETIMEFORMATS$] = null;
    this[FIRSTWEEKCUTOFFDAY$] = null;
    this[WEEKENDRANGE$] = null;
    this[FIRSTDAYOFWEEK$] = null;
    this[AVAILABLEFORMATS$] = null;
    this[TIMEFORMATS$] = null;
    this[DATEFORMATS$] = null;
    this[ZERODIGIT$] = null;
    this[AMPMS$] = null;
    this[QUARTERS$] = null;
    this[SHORTQUARTERS$] = null;
    this[STANDALONENARROWWEEKDAYS$] = null;
    this[NARROWWEEKDAYS$] = null;
    this[STANDALONESHORTWEEKDAYS$] = null;
    this[SHORTWEEKDAYS$] = null;
    this[STANDALONEWEEKDAYS$] = null;
    this[WEEKDAYS$] = null;
    this[STANDALONESHORTMONTHS$] = null;
    this[SHORTMONTHS$] = null;
    this[STANDALONEMONTHS$] = null;
    this[MONTHS$] = null;
    this[STANDALONENARROWMONTHS$] = null;
    this[NARROWMONTHS$] = null;
    this[ERANAMES$] = null;
    this[ERAS$] = null;
    this[NAME$] = null;
    function _getStringList(name) {
      return ListOfStringL().from(core.Iterable.as(map[$_get](name)));
    }
    dart.fn(_getStringList, StringLToListLOfStringL());
    this.NAME = StringL().as(map[$_get]("NAME"));
    this.ERAS = _getStringList("ERAS");
    this.ERANAMES = _getStringList("ERANAMES");
    this.NARROWMONTHS = _getStringList("NARROWMONTHS");
    this.STANDALONENARROWMONTHS = _getStringList("STANDALONENARROWMONTHS");
    this.MONTHS = _getStringList("MONTHS");
    this.STANDALONEMONTHS = _getStringList("STANDALONEMONTHS");
    this.SHORTMONTHS = _getStringList("SHORTMONTHS");
    this.STANDALONESHORTMONTHS = _getStringList("STANDALONESHORTMONTHS");
    this.WEEKDAYS = _getStringList("WEEKDAYS");
    this.STANDALONEWEEKDAYS = _getStringList("STANDALONEWEEKDAYS");
    this.SHORTWEEKDAYS = _getStringList("SHORTWEEKDAYS");
    this.STANDALONESHORTWEEKDAYS = _getStringList("STANDALONESHORTWEEKDAYS");
    this.NARROWWEEKDAYS = _getStringList("NARROWWEEKDAYS");
    this.STANDALONENARROWWEEKDAYS = _getStringList("STANDALONENARROWWEEKDAYS");
    this.SHORTQUARTERS = _getStringList("SHORTQUARTERS");
    this.QUARTERS = _getStringList("QUARTERS");
    this.AMPMS = _getStringList("AMPMS");
    this.ZERODIGIT = StringL().as(map[$_get]("ZERODIGIT"));
    this.DATEFORMATS = _getStringList("DATEFORMATS");
    this.TIMEFORMATS = _getStringList("TIMEFORMATS");
    this.AVAILABLEFORMATS = LinkedHashMapOfStringL$StringL().from(core.Map.as((t0 = map[$_get]("AVAILABLEFORMATS"), t0 == null ? new _js_helper.LinkedMap.new() : t0)));
    this.FIRSTDAYOFWEEK = intL().as(map[$_get]("FIRSTDAYOFWEEK"));
    this.WEEKENDRANGE = ListOfintL().from(core.Iterable.as(map[$_get]("WEEKENDRANGE")));
    this.FIRSTWEEKCUTOFFDAY = intL().as(map[$_get]("FIRSTWEEKCUTOFFDAY"));
    this.DATETIMEFORMATS = _getStringList("DATETIMEFORMATS");
  }).prototype = date_symbols.DateSymbols.prototype;
  dart.addTypeTests(date_symbols.DateSymbols);
  dart.addTypeCaches(date_symbols.DateSymbols);
  dart.setMethodSignature(date_symbols.DateSymbols, () => ({
    __proto__: dart.getMethods(date_symbols.DateSymbols.__proto__),
    serializeToMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    [_serializeToMap]: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(date_symbols.DateSymbols, L0);
  dart.setFieldSignature(date_symbols.DateSymbols, () => ({
    __proto__: dart.getFields(date_symbols.DateSymbols.__proto__),
    NAME: dart.fieldType(dart.legacy(core.String)),
    ERAS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    ERANAMES: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    NARROWMONTHS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    STANDALONENARROWMONTHS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    MONTHS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    STANDALONEMONTHS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    SHORTMONTHS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    STANDALONESHORTMONTHS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    WEEKDAYS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    STANDALONEWEEKDAYS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    SHORTWEEKDAYS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    STANDALONESHORTWEEKDAYS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    NARROWWEEKDAYS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    STANDALONENARROWWEEKDAYS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    SHORTQUARTERS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    QUARTERS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    AMPMS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    DATEFORMATS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    TIMEFORMATS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    DATETIMEFORMATS: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    AVAILABLEFORMATS: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    FIRSTDAYOFWEEK: dart.fieldType(dart.legacy(core.int)),
    WEEKENDRANGE: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    FIRSTWEEKCUTOFFDAY: dart.fieldType(dart.legacy(core.int)),
    ZERODIGIT: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(date_symbols.DateSymbols, ['toString']);
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  dart.defineLazy(date_symbols, {
    /*date_symbols.en_USSymbols*/get en_USSymbols() {
      return new date_symbols.DateSymbols.new({NAME: "en_US", ERAS: C0 || CT.C0, ERANAMES: C1 || CT.C1, NARROWMONTHS: C2 || CT.C2, STANDALONENARROWMONTHS: C2 || CT.C2, MONTHS: C3 || CT.C3, STANDALONEMONTHS: C3 || CT.C3, SHORTMONTHS: C4 || CT.C4, STANDALONESHORTMONTHS: C4 || CT.C4, WEEKDAYS: C5 || CT.C5, STANDALONEWEEKDAYS: C5 || CT.C5, SHORTWEEKDAYS: C6 || CT.C6, STANDALONESHORTWEEKDAYS: C6 || CT.C6, NARROWWEEKDAYS: C7 || CT.C7, STANDALONENARROWWEEKDAYS: C7 || CT.C7, SHORTQUARTERS: C8 || CT.C8, QUARTERS: C9 || CT.C9, AMPMS: C10 || CT.C10, DATEFORMATS: C11 || CT.C11, TIMEFORMATS: C12 || CT.C12, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C13 || CT.C13, FIRSTWEEKCUTOFFDAY: 5, DATETIMEFORMATS: C14 || CT.C14});
    },
    set en_USSymbols(_) {},
    /*date_symbols.en_USPatterns*/get en_USPatterns() {
      return C15 || CT.C15;
    },
    set en_USPatterns(_) {}
  }, true);
  dart.trackLibraries("packages/intl/date_symbols", {
    "package:intl/date_symbols.dart": date_symbols
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_symbols.dart"],"names":[],"mappings":"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","file":"date_symbols.unsound.ddc.js"}');
  // Exports:
  return {
    date_symbols: date_symbols
  };
}));

//# sourceMappingURL=date_symbols.unsound.ddc.js.map
