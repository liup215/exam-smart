define(['dart_sdk', 'packages/intl/intl'], (function load__packages__angular_components__model__date__date_formatter(dart_sdk, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl = packages__intl__intl.intl;
  var date_formatter = Object.create(dart.library);
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/date/date_formatter.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(StringL(), ObjectL(), ["month1", "Jul", "day1", "25", "month2", "Aug", "day2", "3", "year", "2015"]);
    },
    get C1() {
      return C1 = dart.constMap(StringL(), ObjectL(), ["month", "Jul", "day1", "25", "day2", "29", "year", "2015"]);
    },
    get C2() {
      return C2 = dart.constMap(StringL(), ObjectL(), ["start", "Jul 27, 2015", "end", "Aug 3, 2015"]);
    }
  }, false);
  var C0;
  var C1;
  var C2;
  date_formatter._DateFormatterMessages = class _DateFormatterMessages extends core.Object {
    static _formatSameYearRange(month1, day1, month2, day2, year) {
      return intl.Intl.message(dart.str(month1) + " " + dart.str(day1) + " – " + dart.str(month2) + " " + dart.str(day2) + ", " + dart.str(year), {name: "_DateFormatterMessages__formatSameYearRange", desc: "Date range format when a range starts and ends in the same " + "year. Please reorder and adjust punctuation as appropriate for " + "the locale. Do not include time units such as 년 or 年.", args: JSArrayOfObjectL().of([month1, day1, month2, day2, year]), examples: C0 || CT.C0});
    }
    static _formatSameMonthRange(month, day1, day2, year) {
      return intl.Intl.message(dart.str(month) + " " + dart.str(day1) + " – " + dart.str(day2) + ", " + dart.str(year), {name: "_DateFormatterMessages__formatSameMonthRange", desc: "Date range format when a range starts and ends in the same " + "month. Please reorder and adjust punctuation as appropriate " + "for the locale. Do not include time units such as 년 or 年.", args: JSArrayOfObjectL().of([month, day1, day2, year]), examples: C1 || CT.C1});
    }
    static _formatArbitraryRange(start, end) {
      return intl.Intl.message(dart.str(start) + " – " + dart.str(end), {name: "_DateFormatterMessages__formatArbitraryRange", desc: "Date range containing two arbitrary dates which can fall in " + "different years. Please reorder and adjust punctuation as " + "appropriate for the locale, if necessary. Do not include " + "time units such as 년 or 年.", args: JSArrayOfObjectL().of([start, end]), examples: C2 || CT.C2});
    }
  };
  (date_formatter._DateFormatterMessages.new = function() {
    ;
  }).prototype = date_formatter._DateFormatterMessages.prototype;
  dart.addTypeTests(date_formatter._DateFormatterMessages);
  dart.addTypeCaches(date_formatter._DateFormatterMessages);
  dart.setLibraryUri(date_formatter._DateFormatterMessages, L0);
  dart.defineLazy(date_formatter._DateFormatterMessages, {
    /*date_formatter._DateFormatterMessages._allTimeMsg*/get _allTimeMsg() {
      return intl.Intl.message("All time", {name: "_allTimeMsg", desc: "Indicates that the selected date range has no start or end"});
    }
  }, true);
  date_formatter._rangeEndpointFormat = function _rangeEndpointFormat(locale) {
    return locale === "pt_BR" ? date_formatter._ptBrEndpointFormat : date_formatter._dateFormat;
  };
  date_formatter.formatDate = function formatDate(date, format = null) {
    let t1, t0, t0$;
    t0$ = (t0 = date, t0 == null ? null : t0.format((t1 = format, t1 == null ? date_formatter._dateFormat : t1)));
    return t0$ == null ? "" : t0$;
  };
  date_formatter.formatRange = function formatRange(range) {
    if (range == null) return "";
    if (range.start == null && range.end == null) {
      return date_formatter._DateFormatterMessages._allTimeMsg;
    }
    if (dart.equals(range.start, range.end)) return date_formatter.formatDate(range.start, date_formatter._dateFormat);
    if (range.start == null || range.end == null || range.start.year != range.end.year) {
      let format = date_formatter._rangeEndpointFormat(intl.Intl.defaultLocale);
      return date_formatter._DateFormatterMessages._formatArbitraryRange(date_formatter.formatDate(range.start, format), date_formatter.formatDate(range.end, format));
    }
    if (range.start.month != range.end.month) {
      return date_formatter._DateFormatterMessages._formatSameYearRange(range.start.format(date_formatter._monthFormat), range.start.format(date_formatter._dayFormat), range.end.format(date_formatter._monthFormat), range.end.format(date_formatter._dayFormat), range.start.format(date_formatter._yearFormat));
    }
    return date_formatter._DateFormatterMessages._formatSameMonthRange(range.start.format(date_formatter._monthFormat), range.start.format(date_formatter._dayFormat), range.end.format(date_formatter._dayFormat), range.start.format(date_formatter._yearFormat));
  };
  dart.defineLazy(date_formatter, {
    /*date_formatter._dayFormat*/get _dayFormat() {
      return new intl.DateFormat.d();
    },
    /*date_formatter._dateFormat*/get _dateFormat() {
      return new intl.DateFormat.yMMMd();
    },
    /*date_formatter._yearFormat*/get _yearFormat() {
      return new intl.DateFormat.y();
    },
    /*date_formatter._monthFormat*/get _monthFormat() {
      return new intl.DateFormat.MMM();
    },
    /*date_formatter._ptBrEndpointFormat*/get _ptBrEndpointFormat() {
      return new intl.DateFormat.new("d MMM y");
    }
  }, true);
  dart.trackLibraries("packages/angular_components/model/date/date_formatter", {
    "package:angular_components/model/date/date_formatter.dart": date_formatter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_formatter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;gCA0D4C,QAAe,MAAa,QACvD,MAAa;AACxB,YAAK,mBAA8C,SAApC,MAAM,mBAAE,IAAI,qBAAI,MAAM,mBAAE,IAAI,oBAAG,IAAI,UACxC,qDACF,AAAE,gEACF,oEACA,+DACE,uBACJ,MAAM,EACN,IAAI,EACJ,MAAM,EACN,IAAI,EACJ,IAAI;IAQJ;iCAGK,OAAc,MAAa,MAAa;AACnD,YAAK,mBAAqC,SAA3B,KAAK,mBAAE,IAAI,qBAAI,IAAI,oBAAG,IAAI,UAC/B,sDACF,AAAE,gEACF,iEACA,mEACE,uBACJ,KAAK,EACL,IAAI,EACJ,IAAI,EACJ,IAAI;IAOJ;iCAEiC,OAAc;AACrD,YAAK,mBAAuB,SAAb,KAAK,qBAAI,GAAG,UACjB,sDACF,AAAE,iEACF,+DACA,8DACA,oCACE,uBAAC,KAAK,EAAE,GAAG;IAC+C;;;;EAC1E;;;;;MA1De,iDAAW;YAAQ,mBAAQ,mBAC9B,qBACA;;;sEAtC2B;AACnC,UAAA,AAAO,OAAD,KAAI,UAAU,qCAAsB;EAAW;kDAGlC,MAAkB;;AACrC,oBAAI,eAAJ,OAAM,WAAc,KAAP,MAAM,QAAN,OAAU;kBAAvB,OAAuC;EAAE;oDAChB;AAC3B,QAAI,AAAM,KAAD,IAAI,MAAM,MAAO;AAC1B,QAAI,AAAM,AAAM,KAAP,UAAU,QAAQ,AAAM,AAAI,KAAL,QAAQ;AACtC,YAA8B;;AAEhC,QAAgB,YAAZ,AAAM,KAAD,QAAU,AAAM,KAAD,OAAM,MAAO,2BAAW,AAAM,KAAD,QAAQ;AAE7D,QAAI,AAAM,AAAM,KAAP,UAAU,QACf,AAAM,AAAI,KAAL,QAAQ,QACb,AAAM,AAAM,KAAP,eAAe,AAAM,AAAI,KAAL;AACrB,mBAAS,oCAA0B;AACzC,YAA8B,6DAC1B,0BAAW,AAAM,KAAD,QAAQ,MAAM,GAAG,0BAAW,AAAM,KAAD,MAAM,MAAM;;AAEnE,QAAI,AAAM,AAAM,KAAP,gBAAgB,AAAM,AAAI,KAAL;AAC5B,YAA8B,4DAC1B,AAAM,AAAM,KAAP,cAAc,8BACnB,AAAM,AAAM,KAAP,cAAc,4BACnB,AAAM,AAAI,KAAL,YAAY,8BACjB,AAAM,AAAI,KAAL,YAAY,4BACjB,AAAM,AAAM,KAAP,cAAc;;AAEzB,UAA8B,6DAC1B,AAAM,AAAM,KAAP,cAAc,8BACnB,AAAM,AAAM,KAAP,cAAc,4BACnB,AAAM,AAAI,KAAL,YAAY,4BACjB,AAAM,AAAM,KAAP,cAAc;EACzB;;MAzCM,yBAAU;YAAc;;MACxB,0BAAW;YAAc;;MACzB,0BAAW;YAAc;;MACzB,2BAAY;YAAc;;MAG1B,kCAAmB;YAAG,yBAAW","file":"date_formatter.unsound.ddc.js"}');
  // Exports:
  return {
    model__date__date_formatter: date_formatter
  };
}));

//# sourceMappingURL=date_formatter.unsound.ddc.js.map
