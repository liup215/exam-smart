define(['dart_sdk', 'packages/angular_components/material_datepicker/range', 'packages/intl/intl'], (function load__packages__angular_components__material_datepicker__preset(dart_sdk, packages__angular_components__material_datepicker__range, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const range = packages__angular_components__material_datepicker__range.material_datepicker__range;
  const intl = packages__intl__intl.intl;
  var preset$ = Object.create(dart.library);
  var $add = dartx.add;
  var $remainder = dartx.remainder;
  var $contains = dartx.contains;
  var $insert = dartx.insert;
  var $_get = dartx._get;
  var DatepickerPresetL = () => (DatepickerPresetL = dart.constFn(dart.legacy(preset$.DatepickerPreset)))();
  var JSArrayOfDatepickerPresetL = () => (JSArrayOfDatepickerPresetL = dart.constFn(_interceptors.JSArray$(DatepickerPresetL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/preset.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(StringL(), ObjectL(), ["startDayName", "Mon"]);
    },
    get C1() {
      return C1 = dart.constMap(StringL(), ObjectL(), ["startDayName", "Sun", "endDayName", "Sat"]);
    },
    get C2() {
      return C2 = dart.constList([7, 1], intL());
    }
  }, false);
  var C0;
  var C1;
  var title$ = dart.privateName(preset$, "DatepickerPreset.title");
  var range$ = dart.privateName(preset$, "DatepickerPreset.range");
  var shortTitle$ = dart.privateName(preset$, "DatepickerPreset.shortTitle");
  var alternatives$ = dart.privateName(preset$, "DatepickerPreset.alternatives");
  var C2;
  preset$.DatepickerPreset = class DatepickerPreset extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get range() {
      return this[range$];
    }
    set range(value) {
      super.range = value;
    }
    get shortTitle() {
      return this[shortTitle$];
    }
    set shortTitle(value) {
      super.shortTitle = value;
    }
    get alternatives() {
      return this[alternatives$];
    }
    set alternatives(value) {
      super.alternatives = value;
    }
    static fromRange(range) {
      return new preset$.DatepickerPreset.new(range.title, range);
    }
    static thisWeek(clock, opts) {
      let startWeekday = opts && 'startWeekday' in opts ? opts.startWeekday : null;
      let validStartWeekdays = opts && 'validStartWeekdays' in opts ? opts.validStartWeekdays : null;
      startWeekday == null ? startWeekday = preset$.DatepickerPreset._defaultStartWeekday : null;
      validStartWeekdays = preset$.DatepickerPreset._initValidStartWeekdays(startWeekday, validStartWeekdays);
      let result = null;
      let alternatives = JSArrayOfDatepickerPresetL().of([]);
      for (let startDay of validStartWeekdays) {
        let startDayName = preset$.DatepickerPreset._weekdayName(startDay);
        let preset = new preset$.DatepickerPreset.new(preset$.DatepickerPreset._thisWeekTitle(startDayName), new range.WeekRange.weeksAgo(clock, 0, {startWeekday: startDay}), {shortTitle: preset$.DatepickerPreset._thisWeekShortTitle(startDayName), alternatives: alternatives});
        alternatives[$add](preset);
        if (startDay == startWeekday) result = preset;
      }
      return result;
    }
    static lastWeek(clock, opts) {
      let startWeekday = opts && 'startWeekday' in opts ? opts.startWeekday : null;
      let validStartWeekdays = opts && 'validStartWeekdays' in opts ? opts.validStartWeekdays : null;
      startWeekday == null ? startWeekday = preset$.DatepickerPreset._defaultStartWeekday : null;
      validStartWeekdays = preset$.DatepickerPreset._initValidStartWeekdays(startWeekday, validStartWeekdays);
      let result = null;
      let alternatives = JSArrayOfDatepickerPresetL().of([]);
      for (let startDay of validStartWeekdays) {
        let endDay = 1 + (dart.notNull(startDay) - 1 + 6)[$remainder](7);
        let startDayName = preset$.DatepickerPreset._weekdayName(startDay);
        let endDayName = preset$.DatepickerPreset._weekdayName(dart.asNullableInt(endDay));
        let preset = new preset$.DatepickerPreset.new(preset$.DatepickerPreset._lastWeekTitle(startDayName, endDayName), new range.WeekRange.weeksAgo(clock, 1, {startWeekday: startDay}), {shortTitle: preset$.DatepickerPreset._lastWeekShortTitle(startDayName, endDayName), alternatives: alternatives});
        alternatives[$add](preset);
        if (startDay == startWeekday) result = preset;
      }
      return result;
    }
    static get _defaultStartWeekday() {
      return 1 + dart.notNull(new intl.DateFormat.new().dateSymbols.FIRSTDAYOFWEEK);
    }
    static _initValidStartWeekdays(startWeekday, validStartWeekdays) {
      validStartWeekdays == null ? validStartWeekdays = ListOfintL().from(preset$.DatepickerPreset._defaultValidStartWeekdays) : null;
      if (!dart.test(validStartWeekdays[$contains](startWeekday))) {
        validStartWeekdays[$insert](0, startWeekday);
      }
      return validStartWeekdays;
    }
    static _weekdayName(weekday) {
      return preset$.DatepickerPreset._weekdayNames[$_get](dart.asInt(weekday[$remainder](7)));
    }
    static _thisWeekTitle(startDayName) {
      return intl.Intl.message("This week (" + dart.str(startDayName) + " – Today)", {name: "DatepickerPreset__thisWeekTitle", desc: "Label for a date range corresponding to \"this week\" starting " + "on a particular day of the week and ending today." + " [REL_NOTE: zjd/2017-12-31]", args: JSArrayOfObjectL().of([startDayName]), examples: C0 || CT.C0});
    }
    static _thisWeekShortTitle(startDayName) {
      return intl.Intl.message(dart.str(startDayName) + " – Today", {name: "DatepickerPreset__thisWeekShortTitle", desc: "Short label for a date range corresponding to \"this week\" " + "indicating which day of the week is the starting day of the " + "week." + " [REL_NOTE: zjd/2017-12-31]", args: JSArrayOfObjectL().of([startDayName]), examples: C0 || CT.C0});
    }
    static _lastWeekTitle(startDayName, endDayName) {
      return intl.Intl.message("Last week (" + dart.str(startDayName) + " – " + dart.str(endDayName) + ")", {name: "DatepickerPreset__lastWeekTitle", desc: "Label for a date range corresponding to \"last week\" starting " + "on a particular day of the week and ending on the last day of " + "the week." + " [REL_NOTE: zjd/2017-12-31]", args: JSArrayOfObjectL().of([startDayName, endDayName]), examples: C1 || CT.C1});
    }
    static _lastWeekShortTitle(startDayName, endDayName) {
      return intl.Intl.message(dart.str(startDayName) + " – " + dart.str(endDayName), {name: "DatepickerPreset__lastWeekShortTitle", desc: "Short label for a date range corresponding to \"last week\" " + "indicating which day of the week is the starting day of the " + "week and which is the last day of the week." + " [REL_NOTE: zjd/2017-12-31]", args: JSArrayOfObjectL().of([startDayName, endDayName]), examples: C1 || CT.C1});
    }
  };
  (preset$.DatepickerPreset.new = function(title, range, opts) {
    let shortTitle = opts && 'shortTitle' in opts ? opts.shortTitle : null;
    let alternatives = opts && 'alternatives' in opts ? opts.alternatives : null;
    this[title$] = title;
    this[range$] = range;
    this[shortTitle$] = shortTitle;
    this[alternatives$] = alternatives;
    ;
  }).prototype = preset$.DatepickerPreset.prototype;
  dart.addTypeTests(preset$.DatepickerPreset);
  dart.addTypeCaches(preset$.DatepickerPreset);
  dart.setLibraryUri(preset$.DatepickerPreset, L0);
  dart.setFieldSignature(preset$.DatepickerPreset, () => ({
    __proto__: dart.getFields(preset$.DatepickerPreset.__proto__),
    title: dart.finalFieldType(dart.legacy(core.String)),
    range: dart.finalFieldType(dart.legacy(range.DatepickerDateRange)),
    shortTitle: dart.finalFieldType(dart.legacy(core.String)),
    alternatives: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(preset$.DatepickerPreset))))
  }));
  dart.defineLazy(preset$.DatepickerPreset, {
    /*preset$.DatepickerPreset._weekdayNames*/get _weekdayNames() {
      return new intl.DateFormat.new().dateSymbols.STANDALONESHORTWEEKDAYS;
    },
    /*preset$.DatepickerPreset._defaultValidStartWeekdays*/get _defaultValidStartWeekdays() {
      return C2 || CT.C2;
    }
  }, true);
  preset$.defaultPresets = function defaultPresets(clock) {
    return JSArrayOfDatepickerPresetL().of([preset$.DatepickerPreset.fromRange(range.today(clock)), preset$.DatepickerPreset.fromRange(range.yesterday(clock)), preset$.DatepickerPreset.thisWeek(clock), preset$.DatepickerPreset.fromRange(range.last7Days(clock)), preset$.DatepickerPreset.lastWeek(clock), preset$.DatepickerPreset.fromRange(range.last14Days(clock)), preset$.DatepickerPreset.fromRange(range.thisMonth(clock)), preset$.DatepickerPreset.fromRange(range.last30Days(clock)), preset$.DatepickerPreset.fromRange(range.lastMonth(clock)), preset$.DatepickerPreset.fromRange(range.allTime)]);
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/preset", {
    "package:angular_components/material_datepicker/preset.dart": preset$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["preset.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAee;;;;;;IAGa;;;;;;IAGb;;;;;;IAGgB;;;;;;qBAG0B;AACnD,8CAAiB,AAAM,KAAD,QAAQ,KAAK;IAAC;oBAWA;UAC/B;UAAwB;AACM,MAArC,AAAa,YAAD,IAAC,OAAb,eAAiB,gDAAJ;AAEgD,MAD7D,qBACI,iDAAwB,YAAY,EAAE,kBAAkB;AAE3C;AACM,yBAAe;AACtC,eAAS,WAAY,mBAAkB;AACjC,2BAAe,sCAAa,QAAQ;AACpC,qBAAS,iCAAiB,wCAAe,YAAY,GAC3C,6BAAS,KAAK,EAAE,kBAAiB,QAAQ,iBACvC,6CAAoB,YAAY,iBAC9B,YAAY;AACN,QAAxB,AAAa,YAAD,OAAK,MAAM;AACvB,YAAI,AAAS,QAAD,IAAI,YAAY,EAAE,AAAe,SAAN,MAAM;;AAE/C,YAAO,OAAM;IACf;oBAWwC;UAC/B;UAAwB;AACM,MAArC,AAAa,YAAD,IAAC,OAAb,eAAiB,gDAAJ;AAEgD,MAD7D,qBACI,iDAAwB,YAAY,EAAE,kBAAkB;AAE3C;AACM,yBAAe;AACtC,eAAS,WAAY,mBAAkB;AACjC,qBAAS,AAAE,IAAuB,CAAV,AAAK,aAAd,QAAQ,IAAG,IAAK,eAAa;AAC5C,2BAAe,sCAAa,QAAQ;AACpC,yBAAa,yDAAa,MAAM;AAChC,qBAAS,iCAAiB,wCAAe,YAAY,EAAE,UAAU,GACvD,6BAAS,KAAK,EAAE,kBAAiB,QAAQ,iBACvC,6CAAoB,YAAY,EAAE,UAAU,iBAC1C,YAAY;AACN,QAAxB,AAAa,YAAD,OAAK,MAAM;AACvB,YAAI,AAAS,QAAD,IAAI,YAAY,EAAE,AAAe,SAAN,MAAM;;AAE/C,YAAO,OAAM;IACf;;AAUI,YAAA,AAAE,kBAAE,AAAa,AAAY;IAAc;mCAKvC,cAAwB;AACmC,MAAjE,AAAmB,kBAAD,IAAC,OAAnB,qBAAuB,kBAAe,uDAAnB;AACnB,qBAAK,AAAmB,kBAAD,YAAU,YAAY;AACD,QAA1C,AAAmB,kBAAD,UAAQ,GAAG,YAAY;;AAE3C,YAAO,mBAAkB;IAC3B;wBAG+B;AAC3B,YAAA,AAAa,0DAAC,AAAQ,OAAD,aAAW;IAAG;0BAEH;AAChC,YAAK,mBAAQ,AAAmC,yBAAtB,YAAY,wBAC5B,yCACF,AAAE,oEACF,sDACA,qCACE,uBAAC,YAAY;IACqB;+BAEP;AACrC,YAAK,mBAA+B,SAArB,YAAY,uBACjB,8CACF,AAAE,iEACF,iEACA,UACA,qCACE,uBAAC,YAAY;IACqB;0BAEZ,cAAqB;AACrD,YAAK,mBAAQ,AAAyC,yBAA5B,YAAY,qBAAI,UAAU,gBAC1C,yCACF,AAAE,oEACF,mEACA,cACA,qCACE,uBAAC,YAAY,EAAE,UAAU;IAC8B;+BAE5B,cAAqB;AAC1D,YAAK,mBAAqC,SAA3B,YAAY,qBAAI,UAAU,UAC/B,8CACF,AAAE,iEACF,iEACA,gDACA,qCACE,uBAAC,YAAY,EAAE,UAAU;IAC8B;;2CA7D/C,OAAY;QACxB;QAAiB;IADL;IAAY;IACxB;IAAiB;;EAAc;;;;;;;;;;;;MAE5B,sCAAa;YAAG,AAAa,AAAY;;MAMzC,mDAA0B;;;;mDAwDG;AAAU,4CAC/B,mCAAU,YAAM,KAAK,IACrB,mCAAU,gBAAU,KAAK,IACzB,kCAAS,KAAK,GACd,mCAAU,gBAAU,KAAK,IACzB,kCAAS,KAAK,GACd,mCAAU,iBAAW,KAAK,IAC1B,mCAAU,gBAAU,KAAK,IACzB,mCAAU,iBAAW,KAAK,IAC1B,mCAAU,gBAAU,KAAK,IACzB,mCAAU;EAC5B","file":"preset.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__preset: preset$
  };
}));

//# sourceMappingURL=preset.unsound.ddc.js.map
