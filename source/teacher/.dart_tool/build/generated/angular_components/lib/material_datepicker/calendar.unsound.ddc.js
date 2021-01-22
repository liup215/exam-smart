define(['dart_sdk', 'packages/angular_components/model/date/date', 'packages/collection/src/comparators', 'packages/intl/intl'], (function load__packages__angular_components__material_datepicker__calendar(dart_sdk, packages__angular_components__model__date__date, packages__collection__src__comparators, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date$ = packages__angular_components__model__date__date.model__date__date;
  const equality = packages__collection__src__comparators.src__equality;
  const intl = packages__intl__intl.intl;
  var calendar = Object.create(dart.library);
  var $toList = dartx.toList;
  var $where = dartx.where;
  var $expand = dartx.expand;
  var $addAll = dartx.addAll;
  var $map = dartx.map;
  var $toString = dartx.toString;
  var $forEach = dartx.forEach;
  var $isNotEmpty = dartx.isNotEmpty;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $first = dartx.first;
  var $any = dartx.any;
  var $singleWhere = dartx.singleWhere;
  var $_get = dartx._get;
  var $floor = dartx.floor;
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var $round = dartx.round;
  var $compareTo = dartx.compareTo;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var CalendarSelectionL = () => (CalendarSelectionL = dart.constFn(dart.legacy(calendar.CalendarSelection)))();
  var CalendarSelectionLToboolL = () => (CalendarSelectionLToboolL = dart.constFn(dart.fnType(boolL(), [CalendarSelectionL()])))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var CalendarSelectionLToListLOfStringL = () => (CalendarSelectionLToListLOfStringL = dart.constFn(dart.fnType(ListLOfStringL(), [CalendarSelectionL()])))();
  var CalendarSelectionLToStringL = () => (CalendarSelectionLToStringL = dart.constFn(dart.fnType(StringL(), [CalendarSelectionL()])))();
  var HighlightL = () => (HighlightL = dart.constFn(dart.legacy(calendar.Highlight)))();
  var HighlightLToboolL = () => (HighlightLToboolL = dart.constFn(dart.fnType(boolL(), [HighlightL()])))();
  var HighlightLToListLOfStringL = () => (HighlightLToListLOfStringL = dart.constFn(dart.fnType(ListLOfStringL(), [HighlightL()])))();
  var JSArrayOfCalendarSelectionL = () => (JSArrayOfCalendarSelectionL = dart.constFn(_interceptors.JSArray$(CalendarSelectionL())))();
  var SyncIterableOfHighlightL = () => (SyncIterableOfHighlightL = dart.constFn(_js_helper.SyncIterable$(HighlightL())))();
  var CalendarResolutionL = () => (CalendarResolutionL = dart.constFn(dart.legacy(calendar.CalendarResolution)))();
  var CalendarSelectionModeL = () => (CalendarSelectionModeL = dart.constFn(dart.legacy(calendar.CalendarSelectionMode)))();
  var CausedByL = () => (CausedByL = dart.constFn(dart.legacy(calendar.CausedBy)))();
  var CalendarSelectionLToCalendarSelectionL = () => (CalendarSelectionLToCalendarSelectionL = dart.constFn(dart.fnType(CalendarSelectionL(), [CalendarSelectionL()])))();
  var CalendarStateL = () => (CalendarStateL = dart.constFn(dart.legacy(calendar.CalendarState)))();
  var CalendarWeekL = () => (CalendarWeekL = dart.constFn(dart.legacy(calendar.CalendarWeek)))();
  var JSArrayOfCalendarWeekL = () => (JSArrayOfCalendarWeekL = dart.constFn(_interceptors.JSArray$(CalendarWeekL())))();
  var CalendarWeekLTovoid = () => (CalendarWeekLTovoid = dart.constFn(dart.fnType(dart.void, [CalendarWeekL()])))();
  var SyncIterableOfCalendarWeekL = () => (SyncIterableOfCalendarWeekL = dart.constFn(_js_helper.SyncIterable$(CalendarWeekL())))();
  var CalendarMonthL = () => (CalendarMonthL = dart.constFn(dart.legacy(calendar.CalendarMonth)))();
  var ListOfCalendarMonthL = () => (ListOfCalendarMonthL = dart.constFn(core.List$(CalendarMonthL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLToCalendarMonthL = () => (intLToCalendarMonthL = dart.constFn(dart.fnType(CalendarMonthL(), [intL()])))();
  var CalendarDayL = () => (CalendarDayL = dart.constFn(dart.legacy(calendar.CalendarDay)))();
  var JSArrayOfCalendarDayL = () => (JSArrayOfCalendarDayL = dart.constFn(_interceptors.JSArray$(CalendarDayL())))();
  var CalendarDayLTovoid = () => (CalendarDayLTovoid = dart.constFn(dart.fnType(dart.void, [CalendarDayL()])))();
  var DateL = () => (DateL = dart.constFn(dart.legacy(date$.Date)))();
  var DateLToCalendarDayL = () => (DateLToCalendarDayL = dart.constFn(dart.fnType(CalendarDayL(), [DateL()])))();
  var SyncIterableOfDateL = () => (SyncIterableOfDateL = dart.constFn(_js_helper.SyncIterable$(DateL())))();
  var JSArrayOfCalendarMonthL = () => (JSArrayOfCalendarMonthL = dart.constFn(_interceptors.JSArray$(CalendarMonthL())))();
  var CalendarMonthLTovoid = () => (CalendarMonthLTovoid = dart.constFn(dart.fnType(dart.void, [CalendarMonthL()])))();
  var IterableOfDateL = () => (IterableOfDateL = dart.constFn(core.Iterable$(DateL())))();
  var intLToDateL = () => (intLToDateL = dart.constFn(dart.fnType(DateL(), [intL()])))();
  var CalendarMonthLToboolL = () => (CalendarMonthLToboolL = dart.constFn(dart.fnType(boolL(), [CalendarMonthL()])))();
  var SyncIterableOfCalendarMonthL = () => (SyncIterableOfCalendarMonthL = dart.constFn(_js_helper.SyncIterable$(CalendarMonthL())))();
  var CalendarYearL = () => (CalendarYearL = dart.constFn(dart.legacy(calendar.CalendarYear)))();
  var ListOfCalendarYearL = () => (ListOfCalendarYearL = dart.constFn(core.List$(CalendarYearL())))();
  var intLToCalendarYearL = () => (intLToCalendarYearL = dart.constFn(dart.fnType(CalendarYearL(), [intL()])))();
  const CT = Object.create(null);
  var L1 = "org-dartlang-app:///packages/angular_components/src/material_datepicker/calendar/model.dart";
  var L0 = "package:angular_components/material_datepicker/calendar.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: calendar.CalendarResolution.prototype,
        [_name$]: "CalendarResolution.days",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: calendar.CalendarResolution.prototype,
        [_name$]: "CalendarResolution.weeks",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: calendar.CalendarResolution.prototype,
        [_name$]: "CalendarResolution.months",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: calendar.CalendarResolution.prototype,
        [_name$]: "CalendarResolution.years",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], CalendarResolutionL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: calendar.CalendarSelectionMode.prototype,
        [_name$]: "CalendarSelectionMode.NONE",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: calendar.CalendarSelectionMode.prototype,
        [_name$]: "CalendarSelectionMode.SINGLE_DATE",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: calendar.CalendarSelectionMode.prototype,
        [_name$]: "CalendarSelectionMode.DATE_RANGE",
        index: 2
      });
    },
    get C8() {
      return C8 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], CalendarSelectionModeL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: calendar.CausedBy.prototype,
        [_name$]: "CausedBy.external",
        index: 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: calendar.CausedBy.prototype,
        [_name$]: "CausedBy.preview",
        index: 1
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: calendar.CausedBy.prototype,
        [_name$]: "CausedBy.drag",
        index: 2
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: calendar.CausedBy.prototype,
        [_name$]: "CausedBy.endpointConfirm",
        index: 3
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: calendar.CausedBy.prototype,
        [_name$]: "CausedBy.rangeConfirm",
        index: 4
      });
    },
    get C14() {
      return C14 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], CausedByL());
    }
  }, false);
  var _classes = dart.privateName(calendar, "_classes");
  var _boundaryClasses = dart.privateName(calendar, "_boundaryClasses");
  var date$0 = dart.privateName(calendar, "CalendarDay.date");
  calendar.CalendarDay = class CalendarDay extends core.Object {
    get date() {
      return this[date$0];
    }
    set date(value) {
      super.date = value;
    }
    updateClasses(state) {
      this[_classes] = state != null ? this[_boundaryClasses](state)[$toList]() : JSArrayOfStringL().of([]);
    }
    get day() {
      return this.date.day;
    }
    get classes() {
      return this[_classes];
    }
    [_boundaryClasses](state) {
      return state.selections[$where](dart.fn(r => dart.equals(r.start, this.date) || dart.equals(r.end, this.date), CalendarSelectionLToboolL()))[$expand](StringL(), dart.fn(r => JSArrayOfStringL().of(["boundary", "boundary-" + dart.str(r.id)]), CalendarSelectionLToListLOfStringL()));
    }
  };
  (calendar.CalendarDay.new = function(date, state) {
    this[_classes] = null;
    this[date$0] = date;
    this.updateClasses(state);
  }).prototype = calendar.CalendarDay.prototype;
  dart.addTypeTests(calendar.CalendarDay);
  dart.addTypeCaches(calendar.CalendarDay);
  dart.setMethodSignature(calendar.CalendarDay, () => ({
    __proto__: dart.getMethods(calendar.CalendarDay.__proto__),
    updateClasses: dart.fnType(dart.void, [dart.legacy(calendar.CalendarState)]),
    [_boundaryClasses]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(core.String))), [dart.legacy(calendar.CalendarState)])
  }));
  dart.setGetterSignature(calendar.CalendarDay, () => ({
    __proto__: dart.getGetters(calendar.CalendarDay.__proto__),
    day: dart.legacy(core.int),
    classes: dart.legacy(core.List$(dart.legacy(core.String)))
  }));
  dart.setLibraryUri(calendar.CalendarDay, L0);
  dart.setFieldSignature(calendar.CalendarDay, () => ({
    __proto__: dart.getFields(calendar.CalendarDay.__proto__),
    date: dart.finalFieldType(dart.legacy(date$.Date)),
    [_classes]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  var _initClasses = dart.privateName(calendar, "_initClasses");
  var _positionClasses = dart.privateName(calendar, "_positionClasses");
  var _colorClasses = dart.privateName(calendar, "_colorClasses");
  var start$ = dart.privateName(calendar, "Highlight.start");
  var end$ = dart.privateName(calendar, "Highlight.end");
  var containedRanges$ = dart.privateName(calendar, "Highlight.containedRanges");
  var classIndexOffset$ = dart.privateName(calendar, "Highlight.classIndexOffset");
  var group$ = dart.privateName(calendar, "Highlight.group");
  calendar.Highlight = class Highlight extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get containedRanges() {
      return this[containedRanges$];
    }
    set containedRanges(value) {
      super.containedRanges = value;
    }
    get classIndexOffset() {
      return this[classIndexOffset$];
    }
    set classIndexOffset(value) {
      super.classIndexOffset = value;
    }
    get group() {
      return this[group$];
    }
    set group(value) {
      super.group = value;
    }
    get classes() {
      let t0;
      t0 = this[_classes];
      return t0 == null ? this[_initClasses]() : t0;
    }
    [_initClasses]() {
      let t0;
      this[_classes] = (t0 = JSArrayOfStringL().of(["highlight"]), (() => {
        t0[$addAll](this[_positionClasses]());
        t0[$addAll](this[_colorClasses]());
        return t0;
      })());
      return this[_classes];
    }
    [_positionClasses]() {
      return JSArrayOfStringL().of(["start-" + dart.str(dart.notNull(this.start) + dart.notNull(this.classIndexOffset)), "end-" + dart.str(dart.notNull(this.end) + dart.notNull(this.classIndexOffset))]);
    }
    [_colorClasses]() {
      return this.containedRanges[$map](StringL(), dart.fn(r => "highlight-" + dart.str(r.id), CalendarSelectionLToStringL()));
    }
    toString() {
      return "Highlight on " + dart.str(this.containedRanges) + " (" + dart.str(this.start) + " - " + dart.str(this.end) + ")";
    }
  };
  (calendar.Highlight.new = function(start, end, containedRanges, opts) {
    let classIndexOffset = opts && 'classIndexOffset' in opts ? opts.classIndexOffset : 0;
    let group = opts && 'group' in opts ? opts.group : 0;
    this[_classes] = null;
    this[start$] = start;
    this[end$] = end;
    this[containedRanges$] = containedRanges;
    this[classIndexOffset$] = classIndexOffset;
    this[group$] = group;
    ;
  }).prototype = calendar.Highlight.prototype;
  dart.addTypeTests(calendar.Highlight);
  dart.addTypeCaches(calendar.Highlight);
  dart.setMethodSignature(calendar.Highlight, () => ({
    __proto__: dart.getMethods(calendar.Highlight.__proto__),
    [_initClasses]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.String))), []),
    [_positionClasses]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.String))), []),
    [_colorClasses]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(core.String))), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(calendar.Highlight, () => ({
    __proto__: dart.getGetters(calendar.Highlight.__proto__),
    classes: dart.legacy(core.List$(dart.legacy(core.String)))
  }));
  dart.setLibraryUri(calendar.Highlight, L0);
  dart.setFieldSignature(calendar.Highlight, () => ({
    __proto__: dart.getFields(calendar.Highlight.__proto__),
    start: dart.finalFieldType(dart.legacy(core.int)),
    end: dart.finalFieldType(dart.legacy(core.int)),
    containedRanges: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(calendar.CalendarSelection)))),
    classIndexOffset: dart.finalFieldType(dart.legacy(core.int)),
    group: dart.finalFieldType(dart.legacy(core.int)),
    [_classes]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  dart.defineExtensionMethods(calendar.Highlight, ['toString']);
  var _highlights = dart.privateName(calendar, "_highlights");
  var _state$ = dart.privateName(calendar, "_state");
  var _mergedHighlights = dart.privateName(calendar, "_mergedHighlights");
  var _updateHighlights = dart.privateName(calendar, "_updateHighlights");
  var _matching = dart.privateName(calendar, "_matching");
  var _generateHighlights = dart.privateName(calendar, "_generateHighlights");
  calendar._HasHighlights = class _HasHighlights extends core.Object {
    static _matchingRangesEq(a, b) {
      return boolL().as(dart.dcall(calendar._HasHighlights._setEq, [a.containedRanges[$map](StringL(), dart.fn(r => r.id, CalendarSelectionLToStringL())), b.containedRanges[$map](StringL(), dart.fn(r => r.id, CalendarSelectionLToStringL()))]));
    }
    get highlights() {
      return this[_highlights];
    }
    highlightsInGroup(group) {
      return this.highlights[$where](dart.fn(h => h.group == group, HighlightLToboolL()));
    }
    [_updateHighlights]() {
      this[_highlights] = this[_mergedHighlights]()[$toList]();
      this[_highlights][$forEach](dart.fn(h => h.classes, HighlightLToListLOfStringL()));
    }
    [_matching](a, b) {
      let t0, t0$;
      let selections = (t0$ = (t0 = this[_state$], t0 == null ? null : t0.selections), t0$ == null ? JSArrayOfCalendarSelectionL().of([]) : t0$);
      return selections[$where](dart.fn(r => dart.test(this[_state$].highlighted(r.id, a)) && dart.test(this[_state$].highlighted(r.id, b)), CalendarSelectionLToboolL()))[$toList]();
    }
    [_mergedHighlights]() {
      return new (SyncIterableOfHighlightL()).new((function* _mergedHighlights() {
        let current = new calendar.Highlight.new(0, 0, JSArrayOfCalendarSelectionL().of([]));
        for (let h of this[_generateHighlights]()) {
          if (dart.test(calendar._HasHighlights._matchingRangesEq(h, current))) {
            current = new calendar.Highlight.new(current.start, h.end, h.containedRanges);
          } else {
            if (dart.test(current.containedRanges[$isNotEmpty])) {
              yield current;
            }
            current = h;
          }
        }
        if (dart.test(current.containedRanges[$isNotEmpty])) {
          yield current;
        }
      }).bind(this));
    }
  };
  (calendar._HasHighlights.new = function(_state) {
    this[_highlights] = null;
    this[_state$] = _state;
    ;
  }).prototype = calendar._HasHighlights.prototype;
  dart.addTypeTests(calendar._HasHighlights);
  dart.addTypeCaches(calendar._HasHighlights);
  dart.setMethodSignature(calendar._HasHighlights, () => ({
    __proto__: dart.getMethods(calendar._HasHighlights.__proto__),
    highlightsInGroup: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(calendar.Highlight))), [dart.legacy(core.int)]),
    [_updateHighlights]: dart.fnType(dart.void, []),
    [_matching]: dart.fnType(dart.legacy(core.List$(dart.legacy(calendar.CalendarSelection))), [dart.legacy(date$.Date), dart.legacy(date$.Date)]),
    [_mergedHighlights]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(calendar.Highlight))), [])
  }));
  dart.setGetterSignature(calendar._HasHighlights, () => ({
    __proto__: dart.getGetters(calendar._HasHighlights.__proto__),
    highlights: dart.legacy(core.List$(dart.legacy(calendar.Highlight)))
  }));
  dart.setLibraryUri(calendar._HasHighlights, L0);
  dart.setFieldSignature(calendar._HasHighlights, () => ({
    __proto__: dart.getFields(calendar._HasHighlights.__proto__),
    [_state$]: dart.fieldType(dart.legacy(calendar.CalendarState)),
    [_highlights]: dart.fieldType(dart.legacy(core.List$(dart.legacy(calendar.Highlight))))
  }));
  dart.defineLazy(calendar._HasHighlights, {
    /*calendar._HasHighlights._setEq*/get _setEq() {
      return dart.bind(new equality.UnorderedIterableEquality.new(), 'equals');
    }
  }, true);
  var _name$ = dart.privateName(calendar, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  calendar.CalendarResolution = class CalendarResolution extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (calendar.CalendarResolution.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = calendar.CalendarResolution.prototype;
  dart.addTypeTests(calendar.CalendarResolution);
  dart.addTypeCaches(calendar.CalendarResolution);
  dart.setMethodSignature(calendar.CalendarResolution, () => ({
    __proto__: dart.getMethods(calendar.CalendarResolution.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(calendar.CalendarResolution, L0);
  dart.setFieldSignature(calendar.CalendarResolution, () => ({
    __proto__: dart.getFields(calendar.CalendarResolution.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(calendar.CalendarResolution, ['toString']);
  calendar.CalendarResolution.days = C0 || CT.C0;
  calendar.CalendarResolution.weeks = C1 || CT.C1;
  calendar.CalendarResolution.months = C2 || CT.C2;
  calendar.CalendarResolution.years = C3 || CT.C3;
  calendar.CalendarResolution.values = C4 || CT.C4;
  var C5;
  var C6;
  var C7;
  var C8;
  calendar.CalendarSelectionMode = class CalendarSelectionMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (calendar.CalendarSelectionMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = calendar.CalendarSelectionMode.prototype;
  dart.addTypeTests(calendar.CalendarSelectionMode);
  dart.addTypeCaches(calendar.CalendarSelectionMode);
  dart.setMethodSignature(calendar.CalendarSelectionMode, () => ({
    __proto__: dart.getMethods(calendar.CalendarSelectionMode.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(calendar.CalendarSelectionMode, L0);
  dart.setFieldSignature(calendar.CalendarSelectionMode, () => ({
    __proto__: dart.getFields(calendar.CalendarSelectionMode.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(calendar.CalendarSelectionMode, ['toString']);
  calendar.CalendarSelectionMode.NONE = C5 || CT.C5;
  calendar.CalendarSelectionMode.SINGLE_DATE = C6 || CT.C6;
  calendar.CalendarSelectionMode.DATE_RANGE = C7 || CT.C7;
  calendar.CalendarSelectionMode.values = C8 || CT.C8;
  var id$ = dart.privateName(calendar, "CalendarSelection.id");
  var start$0 = dart.privateName(calendar, "CalendarSelection.start");
  var end$0 = dart.privateName(calendar, "CalendarSelection.end");
  calendar.CalendarSelection = class CalendarSelection extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get start() {
      return this[start$0];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$0];
    }
    set end(value) {
      super.end = value;
    }
    contains(date) {
      return date != null && (this.start == null || !dart.test(date.isBefore(this.start))) && (this.end == null || !dart.test(date.isAfter(this.end)));
    }
    clamp(opts) {
      let t0, t0$, t0$0, t0$1;
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      min = (t0 = min, t0 == null ? this.start : t0);
      max = (t0$ = max, t0$ == null ? this.end : t0$);
      if (min != null) {
        min = date$.laterOf(min, (t0$0 = this.start, t0$0 == null ? min : t0$0));
      }
      if (max != null) {
        max = date$.earlierOf(max, (t0$1 = this.end, t0$1 == null ? max : t0$1));
      }
      return new calendar.CalendarSelection.new(this.id, min, max);
    }
    toString() {
      return dart.str(this.id) + " (" + dart.str(this.start) + " - " + dart.str(this.end) + ")";
    }
    get hashCode() {
      return (dart.hashCode(this.id) ^ dart.notNull(dart.hashCode(this.start)) ^ dart.notNull(dart.hashCode(this.end))) >>> 0;
    }
    _equals(o) {
      if (o == null) return false;
      return CalendarSelectionL().is(o) && o.id == this.id && dart.equals(o.start, this.start) && dart.equals(o.end, this.end);
    }
  };
  (calendar.CalendarSelection.new = function(id, start, end) {
    this[id$] = id;
    this[start$0] = start;
    this[end$0] = end;
    ;
  }).prototype = calendar.CalendarSelection.prototype;
  (calendar.CalendarSelection.guessOrder = function(id, a, b) {
    calendar.CalendarSelection.new.call(this, id, date$.earlierOf(a, b), date$.laterOf(a, b));
  }).prototype = calendar.CalendarSelection.prototype;
  dart.addTypeTests(calendar.CalendarSelection);
  dart.addTypeCaches(calendar.CalendarSelection);
  dart.setMethodSignature(calendar.CalendarSelection, () => ({
    __proto__: dart.getMethods(calendar.CalendarSelection.__proto__),
    contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(date$.Date)]),
    clamp: dart.fnType(dart.legacy(calendar.CalendarSelection), [], {max: dart.legacy(date$.Date), min: dart.legacy(date$.Date)}, {}),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
  }));
  dart.setGetterSignature(calendar.CalendarSelection, () => ({
    __proto__: dart.getGetters(calendar.CalendarSelection.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(calendar.CalendarSelection, L0);
  dart.setFieldSignature(calendar.CalendarSelection, () => ({
    __proto__: dart.getFields(calendar.CalendarSelection.__proto__),
    id: dart.finalFieldType(dart.legacy(core.String)),
    start: dart.finalFieldType(dart.legacy(date$.Date)),
    end: dart.finalFieldType(dart.legacy(date$.Date))
  }));
  dart.defineExtensionMethods(calendar.CalendarSelection, ['toString', '_equals']);
  dart.defineExtensionAccessors(calendar.CalendarSelection, ['hashCode']);
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  calendar.CausedBy = class CausedBy extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (calendar.CausedBy.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = calendar.CausedBy.prototype;
  dart.addTypeTests(calendar.CausedBy);
  dart.addTypeCaches(calendar.CausedBy);
  dart.setMethodSignature(calendar.CausedBy, () => ({
    __proto__: dart.getMethods(calendar.CausedBy.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(calendar.CausedBy, L0);
  dart.setFieldSignature(calendar.CausedBy, () => ({
    __proto__: dart.getFields(calendar.CausedBy.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(calendar.CausedBy, ['toString']);
  calendar.CausedBy.external = C9 || CT.C9;
  calendar.CausedBy.preview = C10 || CT.C10;
  calendar.CausedBy.drag = C11 || CT.C11;
  calendar.CausedBy.endpointConfirm = C12 || CT.C12;
  calendar.CausedBy.rangeConfirm = C13 || CT.C13;
  calendar.CausedBy.values = C14 || CT.C14;
  var _resolutionAtLeast = dart.privateName(calendar, "_resolutionAtLeast");
  var resolution$ = dart.privateName(calendar, "CalendarState.resolution");
  var selections$ = dart.privateName(calendar, "CalendarState.selections");
  var currentSelection$ = dart.privateName(calendar, "CalendarState.currentSelection");
  var cause$ = dart.privateName(calendar, "CalendarState.cause");
  var preview$ = dart.privateName(calendar, "CalendarState.preview");
  var previewAnchoredAtStart$ = dart.privateName(calendar, "CalendarState.previewAnchoredAtStart");
  calendar.CalendarState = class CalendarState extends core.Object {
    get resolution() {
      return this[resolution$];
    }
    set resolution(value) {
      super.resolution = value;
    }
    get selections() {
      return this[selections$];
    }
    set selections(value) {
      super.selections = value;
    }
    get currentSelection() {
      return this[currentSelection$];
    }
    set currentSelection(value) {
      super.currentSelection = value;
    }
    get cause() {
      return this[cause$];
    }
    set cause(value) {
      super.cause = value;
    }
    get preview() {
      return this[preview$];
    }
    set preview(value) {
      super.preview = value;
    }
    get previewAnchoredAtStart() {
      return this[previewAnchoredAtStart$];
    }
    set previewAnchoredAtStart(value) {
      super.previewAnchoredAtStart = value;
    }
    has(id) {
      return this.selections[$any](dart.fn(s => s.id == id, CalendarSelectionLToboolL()));
    }
    selection(id) {
      return this.selections[$singleWhere](dart.fn(s => s.id == id, CalendarSelectionLToboolL()));
    }
    highlighted(id, date) {
      if (!(date != null)) dart.assertFailed(null, L1, 153, 12, "date != null");
      if (this.preview != null && this.currentSelection == id) {
        let current = this.selection(this.currentSelection);
        let anchor = dart.test(this.previewAnchoredAtStart) ? current.start : current.end;
        let previewStart = date$.earlierOf(this.preview, anchor);
        let previewEnd = date$.laterOf(this.preview, anchor);
        return !dart.test(date.isBefore(previewStart)) && !dart.test(date.isAfter(previewEnd));
      } else {
        return this.selection(id).contains(date);
      }
    }
    static _adaptSelections(selections, resolution) {
      if (dart.notNull(resolution.index) < dart.notNull(calendar.CalendarResolution.months.index)) {
        return selections;
      }
      return selections[$map](CalendarSelectionL(), dart.fn(selection => new calendar.CalendarSelection.new(selection.id, calendar.firstDayOfMonth(selection.start), calendar.lastDayOfMonth(selection.end)), CalendarSelectionLToCalendarSelectionL()))[$toList]();
    }
    select(id, opts) {
      let previewAnchoredAtStart = opts && 'previewAnchoredAtStart' in opts ? opts.previewAnchoredAtStart : false;
      return new calendar.CalendarState.new({selections: this.selections, currentSelection: id, cause: calendar.CausedBy.external, previewAnchoredAtStart: previewAnchoredAtStart, resolution: this.resolution});
    }
    setSelection(val, opts) {
      let t0;
      let cause = opts && 'cause' in opts ? opts.cause : C9 || CT.C9;
      let previewAnchoredAtStart = opts && 'previewAnchoredAtStart' in opts ? opts.previewAnchoredAtStart : false;
      let newSelections = (t0 = JSArrayOfCalendarSelectionL().of([val]), (() => {
        t0[$addAll](this.selections[$where](dart.fn(s => s.id != val.id, CalendarSelectionLToboolL())));
        return t0;
      })());
      return new calendar.CalendarState.new({selections: newSelections, currentSelection: this.currentSelection, cause: cause, previewAnchoredAtStart: previewAnchoredAtStart, resolution: this.resolution});
    }
    updateDrag(a, b) {
      return this.setSelection(new calendar.CalendarSelection.guessOrder(this.currentSelection, a, b), {cause: calendar.CausedBy.drag});
    }
    updateCurrentPreview(newPreviewTarget) {
      if (!(newPreviewTarget != null)) dart.assertFailed(null, L1, 237, 12, "newPreviewTarget != null");
      return new calendar.CalendarState.new({selections: this.selections, currentSelection: this.currentSelection, cause: calendar.CausedBy.preview, preview: newPreviewTarget, previewAnchoredAtStart: this.previewAnchoredAtStart, resolution: this.resolution});
    }
    cancelCurrentPreview() {
      return this.preview == null ? this : new calendar.CalendarState.new({selections: this.selections, currentSelection: this.currentSelection, cause: calendar.CausedBy.preview, preview: null, previewAnchoredAtStart: this.previewAnchoredAtStart, resolution: this.resolution});
    }
    setCurrentSelection(a, b, opts) {
      let cause = opts && 'cause' in opts ? opts.cause : C13 || CT.C13;
      let previewAnchoredAtStart = opts && 'previewAnchoredAtStart' in opts ? opts.previewAnchoredAtStart : false;
      return this.setSelection(new calendar.CalendarSelection.guessOrder(this.currentSelection, a, b), {cause: cause, previewAnchoredAtStart: previewAnchoredAtStart});
    }
    clearCurrentSelection() {
      return this.clearSelection(this.currentSelection);
    }
    confirmPreview(opts) {
      let confirmRange = opts && 'confirmRange' in opts ? opts.confirmRange : false;
      let movingStartMaintainsLength = opts && 'movingStartMaintainsLength' in opts ? opts.movingStartMaintainsLength : null;
      let current = this.selection(this.currentSelection);
      let anchor = dart.test(this.previewAnchoredAtStart) ? current.start : current.end;
      if (!(this.preview != null && anchor != null)) dart.assertFailed(null, L1, 279, 12, "preview != null && anchor != null");
      let cause = dart.test(confirmRange) ? calendar.CausedBy.rangeConfirm : calendar.CausedBy.endpointConfirm;
      if (dart.test(this.previewAnchoredAtStart)) {
        if (dart.test(this.preview['<='](anchor))) {
          return this.setSelection(new calendar.CalendarSelection.new(this.currentSelection, this.preview, this.preview), {cause: cause, previewAnchoredAtStart: true});
        } else {
          return this.setSelection(new calendar.CalendarSelection.new(this.currentSelection, anchor, this.preview), {cause: cause, previewAnchoredAtStart: false});
        }
      } else {
        if (dart.test(movingStartMaintainsLength)) {
          let rangeLengthInDays = date$.daysSpanned(current.start, current.end, {inclusive: false});
          return this.setSelection(new calendar.CalendarSelection.new(this.currentSelection, this.preview, this.preview.add({days: rangeLengthInDays})), {cause: cause, previewAnchoredAtStart: true});
        } else if (dart.test(this.preview['>='](anchor))) {
          return this.setSelection(new calendar.CalendarSelection.new(this.currentSelection, this.preview, this.preview), {cause: cause, previewAnchoredAtStart: true});
        } else {
          return this.setSelection(new calendar.CalendarSelection.new(this.currentSelection, this.preview, anchor), {cause: cause, previewAnchoredAtStart: true});
        }
      }
    }
    clearSelection(id) {
      return dart.test(this.has(id)) ? new calendar.CalendarState.new({selections: this.selections[$where](dart.fn(s => s.id != id, CalendarSelectionLToboolL()))[$toList](), currentSelection: this.currentSelection, cause: calendar.CausedBy.external, resolution: this.resolution}) : this;
    }
    [_resolutionAtLeast](minimumResolution) {
      return dart.notNull(this.resolution.index) >= dart.notNull(minimumResolution.index);
    }
    toString() {
      return "ranges: " + dart.str(this.selections) + " / current: " + dart.str(this.currentSelection) + " / cause: " + dart.str(this.cause) + " / " + "resolution: " + dart.str(this.resolution) + " / " + "preview " + (dart.test(this.previewAnchoredAtStart) ? "start" : "end") + " - " + dart.str(this.preview);
    }
    _equals(o) {
      if (o == null) return false;
      return CalendarStateL().is(o) && this.currentSelection == o.currentSelection && this.cause == o.cause && dart.equals(this.preview, o.preview) && dart.equals(this.previewAnchoredAtStart, o.previewAnchoredAtStart) && this.resolution == o.resolution && dart.dtest(dart.dcall(calendar.CalendarState._setEq, [this.selections, o.selections]));
    }
  };
  (calendar.CalendarState.new = function(opts) {
    let t0;
    let selections = opts && 'selections' in opts ? opts.selections : null;
    let currentSelection = opts && 'currentSelection' in opts ? opts.currentSelection : null;
    let cause = opts && 'cause' in opts ? opts.cause : null;
    let preview = opts && 'preview' in opts ? opts.preview : null;
    let previewAnchoredAtStart = opts && 'previewAnchoredAtStart' in opts ? opts.previewAnchoredAtStart : false;
    let resolution = opts && 'resolution' in opts ? opts.resolution : C0 || CT.C0;
    this[currentSelection$] = currentSelection;
    this[cause$] = cause;
    this[preview$] = preview;
    this[previewAnchoredAtStart$] = previewAnchoredAtStart;
    this[selections$] = calendar.CalendarState._adaptSelections((t0 = selections, t0 == null ? JSArrayOfCalendarSelectionL().of([]) : t0), CalendarResolutionL().as(resolution));
    this[resolution$] = CalendarResolutionL().as(resolution);
    ;
  }).prototype = calendar.CalendarState.prototype;
  (calendar.CalendarState.empty = function(opts) {
    let currentSelection = opts && 'currentSelection' in opts ? opts.currentSelection : "default";
    let resolution = opts && 'resolution' in opts ? opts.resolution : C0 || CT.C0;
    calendar.CalendarState.new.call(this, {selections: JSArrayOfCalendarSelectionL().of([]), currentSelection: currentSelection, cause: calendar.CausedBy.external, resolution: resolution});
  }).prototype = calendar.CalendarState.prototype;
  (calendar.CalendarState.selected = function(selections, opts) {
    let resolution = opts && 'resolution' in opts ? opts.resolution : C0 || CT.C0;
    let cause = opts && 'cause' in opts ? opts.cause : C9 || CT.C9;
    calendar.CalendarState.new.call(this, {cause: CausedByL().as(cause), selections: selections, currentSelection: selections[$first].id, resolution: resolution});
  }).prototype = calendar.CalendarState.prototype;
  dart.addTypeTests(calendar.CalendarState);
  dart.addTypeCaches(calendar.CalendarState);
  dart.setMethodSignature(calendar.CalendarState, () => ({
    __proto__: dart.getMethods(calendar.CalendarState.__proto__),
    has: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    selection: dart.fnType(dart.legacy(calendar.CalendarSelection), [dart.legacy(core.String)]),
    highlighted: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String), dart.legacy(date$.Date)]),
    select: dart.fnType(dart.legacy(calendar.CalendarState), [dart.legacy(core.String)], {previewAnchoredAtStart: dart.legacy(core.bool)}, {}),
    setSelection: dart.fnType(dart.legacy(calendar.CalendarState), [dart.legacy(calendar.CalendarSelection)], {cause: dart.legacy(calendar.CausedBy), previewAnchoredAtStart: dart.legacy(core.bool)}, {}),
    updateDrag: dart.fnType(dart.legacy(calendar.CalendarState), [dart.legacy(date$.Date), dart.legacy(date$.Date)]),
    updateCurrentPreview: dart.fnType(dart.legacy(calendar.CalendarState), [dart.legacy(date$.Date)]),
    cancelCurrentPreview: dart.fnType(dart.legacy(calendar.CalendarState), []),
    setCurrentSelection: dart.fnType(dart.legacy(calendar.CalendarState), [dart.legacy(date$.Date), dart.legacy(date$.Date)], {cause: dart.legacy(calendar.CausedBy), previewAnchoredAtStart: dart.legacy(core.bool)}, {}),
    clearCurrentSelection: dart.fnType(dart.legacy(calendar.CalendarState), []),
    confirmPreview: dart.fnType(dart.legacy(calendar.CalendarState), [], {confirmRange: dart.legacy(core.bool), movingStartMaintainsLength: dart.legacy(core.bool)}, {}),
    clearSelection: dart.fnType(dart.legacy(calendar.CalendarState), [dart.legacy(core.String)]),
    [_resolutionAtLeast]: dart.fnType(dart.legacy(core.bool), [dart.legacy(calendar.CalendarResolution)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
  }));
  dart.setLibraryUri(calendar.CalendarState, L0);
  dart.setFieldSignature(calendar.CalendarState, () => ({
    __proto__: dart.getFields(calendar.CalendarState.__proto__),
    resolution: dart.finalFieldType(dart.legacy(calendar.CalendarResolution)),
    selections: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(calendar.CalendarSelection)))),
    currentSelection: dart.finalFieldType(dart.legacy(core.String)),
    cause: dart.finalFieldType(dart.legacy(calendar.CausedBy)),
    preview: dart.finalFieldType(dart.legacy(date$.Date)),
    previewAnchoredAtStart: dart.finalFieldType(dart.legacy(core.bool))
  }));
  dart.defineExtensionMethods(calendar.CalendarState, ['toString', '_equals']);
  dart.defineLazy(calendar.CalendarState, {
    /*calendar.CalendarState._setEq*/get _setEq() {
      return dart.bind(new equality.UnorderedIterableEquality.new(), 'equals');
    }
  }, true);
  var _title = dart.privateName(calendar, "_title");
  var _weeks = dart.privateName(calendar, "_weeks");
  var _start$ = dart.privateName(calendar, "_start");
  var _generateWeeks = dart.privateName(calendar, "_generateWeeks");
  var startingWeekday$ = dart.privateName(calendar, "CalendarMonth.startingWeekday");
  var calendarState = dart.privateName(calendar, "CalendarMonth.calendarState");
  calendar.CalendarMonth = class CalendarMonth extends core.Object {
    get startingWeekday() {
      return this[startingWeekday$];
    }
    set startingWeekday(value) {
      super.startingWeekday = value;
    }
    get calendarState() {
      return this[calendarState];
    }
    set calendarState(value) {
      this[calendarState] = value;
    }
    get start() {
      return this[_start$];
    }
    get year() {
      return this[_start$].year;
    }
    get month() {
      return this[_start$].month;
    }
    get title() {
      return this[_title];
    }
    get weeks() {
      return this[_weeks];
    }
    get classes() {
      return this[_classes];
    }
    update(state) {
      this.calendarState = state;
      if (this.weeks != null) {
        this.weeks[$forEach](dart.fn(w => w.update(state), CalendarWeekLTovoid()));
      }
      if (state == null || state.resolution != calendar.CalendarResolution.months) {
        this[_classes] = JSArrayOfStringL().of([]);
      } else {
        this[_classes] = state.selections[$where](dart.fn(selection => dart.test(this.containsDate(selection.start)) || dart.test(this.containsDate(selection.end)), CalendarSelectionLToboolL()))[$expand](StringL(), dart.fn(selection => JSArrayOfStringL().of(["boundary", "boundary-" + dart.str(selection.id)]), CalendarSelectionLToListLOfStringL()))[$toList]();
      }
    }
    get displayTitleInline() {
      return dart.notNull(this[_weeks][$_get](0).numBlankDays) >= 3;
    }
    addMonths(months) {
      let newYear = dart.notNull(this.year) + (dart.notNull(months) / 12)[$floor]();
      let newMonth = dart.notNull(this.month) + months[$modulo](12);
      if (newMonth > 12) {
        newYear = newYear + 1;
        newMonth = newMonth - 12;
      }
      return new calendar.CalendarMonth.new(newYear, newMonth, {state: this.calendarState, startingWeekday: this.startingWeekday});
    }
    deltaMonths(other) {
      return (dart.notNull(other.year) - dart.notNull(this.year)) * 12 + dart.notNull(other.month) - dart.notNull(this.month);
    }
    getRowIndex(day) {
      let position = dart.notNull(day) - 1 + dart.notNull(this.weeks[$first].numBlankDays);
      let row = (position / 7)[$truncate]();
      return dart.test(this.displayTitleInline) ? row : row + 1;
    }
    containsDate(date) {
      return date.year == this.year && date.month == this.month;
    }
    [_generateWeeks]() {
      return new (SyncIterableOfCalendarWeekL()).new((function* _generateWeeks() {
        let week = new calendar.CalendarWeek.new(this[_start$], this.calendarState, this.startingWeekday);
        while (week != null) {
          yield week;
          week = week.next;
        }
      }).bind(this));
    }
    get next() {
      if (dart.notNull(this.month) < 12) {
        return this.addMonths(1);
      }
      return null;
    }
    _equals(o) {
      if (o == null) return false;
      return CalendarMonthL().is(o) && dart.equals(o[_start$], this[_start$]);
    }
    get hashCode() {
      return dart.hashCode(this[_start$]);
    }
    toString() {
      return dart.str(this.title) + " (" + dart.str(dart.toString(this[_start$])) + ")";
    }
  };
  (calendar.CalendarMonth.new = function(year, month, opts) {
    let t0, t0$;
    let state = opts && 'state' in opts ? opts.state : null;
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : 1;
    this[_title] = null;
    this[_weeks] = null;
    this[_classes] = JSArrayOfStringL().of([]);
    this[startingWeekday$] = startingWeekday;
    this[_start$] = new date$.Date.new(year, month);
    this[calendarState] = state;
    this[_title] = this[_start$].format(new intl.DateFormat.yMMM());
    if (dart.test((t0$ = (t0 = state, t0 == null ? null : t0[_resolutionAtLeast](calendar.CalendarResolution.months)), t0$ == null ? false : t0$))) {
      this[_weeks] = JSArrayOfCalendarWeekL().of([]);
    } else {
      this[_weeks] = this[_generateWeeks]()[$toList]();
    }
    this.update(state);
  }).prototype = calendar.CalendarMonth.prototype;
  (calendar.CalendarMonth.fromDate = function(date, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : 1;
    calendar.CalendarMonth.new.call(this, date.year, date.month, {state: state, startingWeekday: startingWeekday});
  }).prototype = calendar.CalendarMonth.prototype;
  (calendar.CalendarMonth.fromTime = function(time, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : 1;
    calendar.CalendarMonth.new.call(this, time.year, time.month, {state: state, startingWeekday: startingWeekday});
  }).prototype = calendar.CalendarMonth.prototype;
  dart.addTypeTests(calendar.CalendarMonth);
  dart.addTypeCaches(calendar.CalendarMonth);
  dart.setMethodSignature(calendar.CalendarMonth, () => ({
    __proto__: dart.getMethods(calendar.CalendarMonth.__proto__),
    update: dart.fnType(dart.void, [dart.legacy(calendar.CalendarState)]),
    addMonths: dart.fnType(dart.legacy(calendar.CalendarMonth), [dart.legacy(core.int)]),
    deltaMonths: dart.fnType(dart.legacy(core.int), [dart.legacy(calendar.CalendarMonth)]),
    getRowIndex: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)]),
    containsDate: dart.fnType(dart.legacy(core.bool), [dart.legacy(date$.Date)]),
    [_generateWeeks]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(calendar.CalendarWeek))), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(calendar.CalendarMonth, () => ({
    __proto__: dart.getGetters(calendar.CalendarMonth.__proto__),
    start: dart.legacy(date$.Date),
    year: dart.legacy(core.int),
    month: dart.legacy(core.int),
    title: dart.legacy(core.String),
    weeks: dart.legacy(core.List$(dart.legacy(calendar.CalendarWeek))),
    classes: dart.legacy(core.List$(dart.legacy(core.String))),
    displayTitleInline: dart.legacy(core.bool),
    next: dart.legacy(calendar.CalendarMonth),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(calendar.CalendarMonth, L0);
  dart.setFieldSignature(calendar.CalendarMonth, () => ({
    __proto__: dart.getFields(calendar.CalendarMonth.__proto__),
    [_start$]: dart.finalFieldType(dart.legacy(date$.Date)),
    startingWeekday: dart.finalFieldType(dart.legacy(core.int)),
    [_title]: dart.fieldType(dart.legacy(core.String)),
    calendarState: dart.fieldType(dart.legacy(calendar.CalendarState)),
    [_weeks]: dart.fieldType(dart.legacy(core.List$(dart.legacy(calendar.CalendarWeek)))),
    [_classes]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  dart.defineExtensionMethods(calendar.CalendarMonth, ['_equals', 'toString']);
  dart.defineExtensionAccessors(calendar.CalendarMonth, ['hashCode']);
  var start$1 = dart.privateName(calendar, "MonthRange.start");
  var length$ = dart.privateName(calendar, "MonthRange.length");
  calendar.MonthRange = class MonthRange extends core.Object {
    get start() {
      return this[start$1];
    }
    set start(value) {
      super.start = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    static within(min, max, length, opts) {
      let t0, t0$;
      let tryToStartAt = opts && 'tryToStartAt' in opts ? opts.tryToStartAt : null;
      if (dart.notNull(length) < 1) {
        dart.throw(new core.ArgumentError.value(length, "length", "must be at least 1"));
      }
      if (min == null) {
        dart.throw(new core.ArgumentError.notNull("min"));
      }
      if (max == null) {
        dart.throw(new core.ArgumentError.notNull("max"));
      }
      let months = dart.notNull(min.deltaMonths(max)) + 1;
      if (months < 1) {
        dart.throw(new core.ArgumentError.new("max must not be before min"));
      }
      let start = (t0$ = (t0 = tryToStartAt, t0 == null ? null : t0.start), t0$ == null ? min.start : t0$);
      if (dart.notNull(length) > months) length = months;
      if (dart.test(start['<'](min.start))) {
        start = min.start;
      }
      let end = start.add({months: dart.notNull(length) - 1});
      if (dart.test(end['>'](max.start))) {
        start = max.start.add({months: -(dart.notNull(length) - 1)});
      }
      return new calendar.MonthRange.new(start, length);
    }
    toList(state, startingWeekday) {
      let startMonth = new calendar.CalendarMonth.new(this.start.year, this.start.month, {state: state, startingWeekday: startingWeekday});
      return ListOfCalendarMonthL().generate(this.length, dart.fn(i => startMonth.addMonths(i), intLToCalendarMonthL()));
    }
  };
  (calendar.MonthRange.new = function(start, length) {
    this[start$1] = start;
    this[length$] = length;
    ;
  }).prototype = calendar.MonthRange.prototype;
  dart.addTypeTests(calendar.MonthRange);
  dart.addTypeCaches(calendar.MonthRange);
  dart.setMethodSignature(calendar.MonthRange, () => ({
    __proto__: dart.getMethods(calendar.MonthRange.__proto__),
    toList: dart.fnType(dart.legacy(core.List$(dart.legacy(calendar.CalendarMonth))), [dart.legacy(calendar.CalendarState), dart.legacy(core.int)])
  }));
  dart.setLibraryUri(calendar.MonthRange, L0);
  dart.setFieldSignature(calendar.MonthRange, () => ({
    __proto__: dart.getFields(calendar.MonthRange.__proto__),
    start: dart.finalFieldType(dart.legacy(date$.Date)),
    length: dart.finalFieldType(dart.legacy(core.int))
  }));
  var _days = dart.privateName(calendar, "_days");
  var _spacers = dart.privateName(calendar, "_spacers");
  var _end = dart.privateName(calendar, "_end");
  var _startingWeekday$ = dart.privateName(calendar, "_startingWeekday");
  var _endOfMonth = dart.privateName(calendar, "_endOfMonth");
  var _generateDays = dart.privateName(calendar, "_generateDays");
  var _iterateDays = dart.privateName(calendar, "_iterateDays");
  calendar.CalendarWeek = class CalendarWeek extends calendar._HasHighlights {
    get days() {
      return this[_days];
    }
    get numDays() {
      return 7 - (dart.notNull(this[_start$].weekday) - 1 - (dart.notNull(this[_startingWeekday$]) - 1))[$modulo](7);
    }
    get numBlankDays() {
      return 7 - dart.notNull(this.numDays);
    }
    get spacers() {
      return this[_spacers];
    }
    get highlights() {
      return this[_highlights];
    }
    update(state) {
      this[_state$] = state;
      this.days[$forEach](dart.fn(d => d.updateClasses(state), CalendarDayLTovoid()));
      this[_updateHighlights]();
    }
    get next() {
      if (dart.test(this[_end].isBefore(this[_endOfMonth]))) {
        return new calendar.CalendarWeek.new(this[_end].add({days: 1}), this[_state$], this[_startingWeekday$]);
      }
      return null;
    }
    [_generateDays]() {
      return this[_iterateDays]()[$map](CalendarDayL(), dart.fn(d => new calendar.CalendarDay.new(d, this[_state$]), DateLToCalendarDayL()));
    }
    [_generateHighlights]() {
      return new (SyncIterableOfHighlightL()).new((function* _generateHighlights() {
        let last = this[_start$].add({days: -1});
        let lastPos = 0;
        let pos = dart.notNull(this.numBlankDays) + 1;
        for (let day of this[_iterateDays]()) {
          yield new calendar.Highlight.new(lastPos, pos, this[_matching](last, day));
          last = day;
          lastPos = pos;
          pos = pos + 1;
        }
        let day = this[_end].add({days: 1});
        yield new calendar.Highlight.new(lastPos, 8, this[_matching](last, day));
      }).bind(this));
    }
    [_iterateDays]() {
      return new (SyncIterableOfDateL()).new((function* _iterateDays() {
        let day = this[_start$];
        while (!dart.test(day.isAfter(this[_end]))) {
          yield day;
          day = day.add({days: 1});
        }
      }).bind(this));
    }
    get [_endOfMonth]() {
      return new date$.Date.new(this[_start$].year, dart.notNull(this[_start$].month) + 1, 0);
    }
  };
  (calendar.CalendarWeek.new = function(_start, state, _startingWeekday = 1) {
    let t0, t0$;
    this[_days] = null;
    this[_spacers] = null;
    this[_end] = null;
    this[_start$] = _start;
    this[_startingWeekday$] = _startingWeekday;
    calendar.CalendarWeek.__proto__.new.call(this, state);
    this[_end] = this[_start$].add({days: dart.notNull(this.numDays) - 1});
    if (dart.test(this[_end].isAfter(this[_endOfMonth]))) {
      this[_end] = this[_endOfMonth];
    }
    if (dart.test((t0$ = (t0 = state, t0 == null ? null : t0[_resolutionAtLeast](calendar.CalendarResolution.weeks)), t0$ == null ? false : t0$))) {
      this[_days] = JSArrayOfCalendarDayL().of([]);
    } else {
      this[_days] = this[_generateDays]()[$toList]();
    }
    this[_spacers] = core.List.new(this.numBlankDays);
    this[_updateHighlights]();
  }).prototype = calendar.CalendarWeek.prototype;
  dart.addTypeTests(calendar.CalendarWeek);
  dart.addTypeCaches(calendar.CalendarWeek);
  dart.setMethodSignature(calendar.CalendarWeek, () => ({
    __proto__: dart.getMethods(calendar.CalendarWeek.__proto__),
    update: dart.fnType(dart.void, [dart.legacy(calendar.CalendarState)]),
    [_generateDays]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(calendar.CalendarDay))), []),
    [_generateHighlights]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(calendar.Highlight))), []),
    [_iterateDays]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(date$.Date))), [])
  }));
  dart.setGetterSignature(calendar.CalendarWeek, () => ({
    __proto__: dart.getGetters(calendar.CalendarWeek.__proto__),
    days: dart.legacy(core.List$(dart.legacy(calendar.CalendarDay))),
    numDays: dart.legacy(core.int),
    numBlankDays: dart.legacy(core.int),
    spacers: dart.legacy(core.List),
    next: dart.legacy(calendar.CalendarWeek),
    [_endOfMonth]: dart.legacy(date$.Date)
  }));
  dart.setLibraryUri(calendar.CalendarWeek, L0);
  dart.setFieldSignature(calendar.CalendarWeek, () => ({
    __proto__: dart.getFields(calendar.CalendarWeek.__proto__),
    [_start$]: dart.finalFieldType(dart.legacy(date$.Date)),
    [_startingWeekday$]: dart.finalFieldType(dart.legacy(core.int)),
    [_days]: dart.fieldType(dart.legacy(core.List$(dart.legacy(calendar.CalendarDay)))),
    [_spacers]: dart.fieldType(dart.legacy(core.List)),
    [_end]: dart.fieldType(dart.legacy(date$.Date))
  }));
  var _months = dart.privateName(calendar, "_months");
  var _generateMonths = dart.privateName(calendar, "_generateMonths");
  var _monthDates = dart.privateName(calendar, "_monthDates");
  var startingWeekday$0 = dart.privateName(calendar, "CalendarYear.startingWeekday");
  const _mergedHighlights$ = Symbol("_mergedHighlights");
  calendar.CalendarYear = class CalendarYear extends calendar._HasHighlights {
    get startingWeekday() {
      return this[startingWeekday$0];
    }
    set startingWeekday(value) {
      super.startingWeekday = value;
    }
    get start() {
      return this[_start$];
    }
    get year() {
      return this[_start$].year;
    }
    get title() {
      return this[_title];
    }
    get months() {
      return this[_months];
    }
    get highlights() {
      return this[_highlights];
    }
    update(state) {
      this[_state$] = state;
      if (this.months != null) {
        this.months[$forEach](dart.fn(m => m.update(state), CalendarMonthLTovoid()));
      }
      this[_updateHighlights]();
    }
    static _isMonthInRow(month, row) {
      if (row === 0) {
        return dart.notNull(month) <= 6;
      }
      if (row === 1) {
        return dart.notNull(month) > 6;
      }
      return false;
    }
    [_mergedHighlights]() {
      return new (SyncIterableOfHighlightL()).new((function* _mergedHighlights() {
        for (let highlight of this[_mergedHighlights$]()) {
          if (dart.test(calendar.CalendarYear._isMonthInRow(highlight.start, 0)) && dart.test(calendar.CalendarYear._isMonthInRow(highlight.end, 1))) {
            yield new calendar.Highlight.new(highlight.start, 7, highlight.containedRanges, {group: 0});
            yield new calendar.Highlight.new(6, highlight.end, highlight.containedRanges, {classIndexOffset: -6, group: 1});
          } else if (dart.test(calendar.CalendarYear._isMonthInRow(highlight.start, 1))) {
            yield new calendar.Highlight.new(highlight.start, highlight.end, highlight.containedRanges, {classIndexOffset: -6, group: 1});
          } else {
            yield new calendar.Highlight.new(highlight.start, highlight.end, highlight.containedRanges, {group: 0});
          }
        }
      }).bind(this));
    }
    [_generateHighlights]() {
      return new (SyncIterableOfHighlightL()).new((function* _generateHighlights() {
        let last = this[_start$].add({months: -1});
        let lastPos = 0;
        let pos = 1;
        for (let month of this[_monthDates]()) {
          yield new calendar.Highlight.new(lastPos, pos, this[_matching](last, month));
          last = month;
          lastPos = pos;
          pos = pos + 1;
        }
        yield new calendar.Highlight.new(lastPos, 13, this[_matching](last, this[_start$].add({months: 12})));
      }).bind(this));
    }
    [_monthDates]() {
      return IterableOfDateL().generate(12, dart.fn(offset => this[_start$].add({months: offset}), intLToDateL()));
    }
    monthsInRow(row) {
      return this.months[$where](dart.fn(m => calendar.CalendarYear._isMonthInRow(m.month, row), CalendarMonthLToboolL()));
    }
    addYears(years) {
      return new calendar.CalendarYear.new(dart.notNull(this.year) + dart.notNull(years), this[_state$], {startingWeekday: this.startingWeekday});
    }
    getRowIndex(month, opts) {
      let monthsPerRow = opts && 'monthsPerRow' in opts ? opts.monthsPerRow : 4;
      return ((dart.notNull(month) - 1) / dart.notNull(monthsPerRow))[$round]();
    }
    get next() {
      return this.addYears(1);
    }
    deltaYears(other) {
      return dart.notNull(other.year) - dart.notNull(this.year);
    }
    [_generateMonths]() {
      return new (SyncIterableOfCalendarMonthL()).new((function* _generateMonths() {
        let month = new calendar.CalendarMonth.new(this.year, 1, {state: this[_state$], startingWeekday: this.startingWeekday});
        while (month != null) {
          yield month;
          month = month.next;
        }
      }).bind(this));
    }
    _equals(o) {
      if (o == null) return false;
      return CalendarYearL().is(o) && dart.equals(o[_start$], this[_start$]);
    }
    get hashCode() {
      return dart.hashCode(this[_start$]);
    }
    toString() {
      return this.title;
    }
    [_mergedHighlights$]() {
      return super[_mergedHighlights]();
    }
  };
  (calendar.CalendarYear.new = function(year, state, opts) {
    let t0, t0$;
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : 1;
    this[_title] = null;
    this[_months] = null;
    this[startingWeekday$0] = startingWeekday;
    this[_start$] = new date$.Date.new(year);
    calendar.CalendarYear.__proto__.new.call(this, state);
    this[_title] = this[_start$].format(new intl.DateFormat.y());
    if (dart.test((t0$ = (t0 = state, t0 == null ? null : t0[_resolutionAtLeast](calendar.CalendarResolution.years)), t0$ == null ? false : t0$))) {
      this[_months] = JSArrayOfCalendarMonthL().of([]);
    } else {
      this[_months] = this[_generateMonths]()[$toList]();
    }
    this[_updateHighlights]();
  }).prototype = calendar.CalendarYear.prototype;
  (calendar.CalendarYear.fromDate = function(date, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : 1;
    calendar.CalendarYear.new.call(this, date.year, state, {startingWeekday: startingWeekday});
  }).prototype = calendar.CalendarYear.prototype;
  (calendar.CalendarYear.fromTime = function(time, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    let startingWeekday = opts && 'startingWeekday' in opts ? opts.startingWeekday : 1;
    calendar.CalendarYear.new.call(this, time.year, state, {startingWeekday: startingWeekday});
  }).prototype = calendar.CalendarYear.prototype;
  dart.addTypeTests(calendar.CalendarYear);
  dart.addTypeCaches(calendar.CalendarYear);
  dart.setMethodSignature(calendar.CalendarYear, () => ({
    __proto__: dart.getMethods(calendar.CalendarYear.__proto__),
    update: dart.fnType(dart.void, [dart.legacy(calendar.CalendarState)]),
    [_generateHighlights]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(calendar.Highlight))), []),
    [_monthDates]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(date$.Date))), []),
    monthsInRow: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(calendar.CalendarMonth))), [dart.legacy(core.int)]),
    addYears: dart.fnType(dart.legacy(calendar.CalendarYear), [dart.legacy(core.int)]),
    getRowIndex: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)], {monthsPerRow: dart.legacy(core.int)}, {}),
    deltaYears: dart.fnType(dart.legacy(core.int), [dart.legacy(calendar.CalendarYear)]),
    [_generateMonths]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(calendar.CalendarMonth))), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(calendar.CalendarYear, () => ({
    __proto__: dart.getGetters(calendar.CalendarYear.__proto__),
    start: dart.legacy(date$.Date),
    year: dart.legacy(core.int),
    title: dart.legacy(core.String),
    months: dart.legacy(core.List$(dart.legacy(calendar.CalendarMonth))),
    next: dart.legacy(calendar.CalendarYear),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(calendar.CalendarYear, L0);
  dart.setFieldSignature(calendar.CalendarYear, () => ({
    __proto__: dart.getFields(calendar.CalendarYear.__proto__),
    [_start$]: dart.finalFieldType(dart.legacy(date$.Date)),
    startingWeekday: dart.finalFieldType(dart.legacy(core.int)),
    [_title]: dart.fieldType(dart.legacy(core.String)),
    [_months]: dart.fieldType(dart.legacy(core.List$(dart.legacy(calendar.CalendarMonth))))
  }));
  dart.defineExtensionMethods(calendar.CalendarYear, ['_equals', 'toString']);
  dart.defineExtensionAccessors(calendar.CalendarYear, ['hashCode']);
  dart.defineLazy(calendar.CalendarYear, {
    /*calendar.CalendarYear._monthsPerRow*/get _monthsPerRow() {
      return 6;
    },
    /*calendar.CalendarYear._afterFirstRow*/get _afterFirstRow() {
      return 7;
    },
    /*calendar.CalendarYear._beforeSecondRow*/get _beforeSecondRow() {
      return 6;
    }
  }, true);
  var start$2 = dart.privateName(calendar, "YearRange.start");
  var length$0 = dart.privateName(calendar, "YearRange.length");
  calendar.YearRange = class YearRange extends core.Object {
    get start() {
      return this[start$2];
    }
    set start(value) {
      super.start = value;
    }
    get length() {
      return this[length$0];
    }
    set length(value) {
      super.length = value;
    }
    static within(min, max, length, opts) {
      let t0, t0$;
      let tryToStartAt = opts && 'tryToStartAt' in opts ? opts.tryToStartAt : null;
      if (dart.notNull(length) < 1) {
        dart.throw(new core.ArgumentError.value(length, "length", "must be at least 1"));
      }
      if (min == null) {
        dart.throw(new core.ArgumentError.notNull("min"));
      }
      if (max == null) {
        dart.throw(new core.ArgumentError.notNull("max"));
      }
      let years = dart.notNull(min.deltaYears(max)) + 1;
      if (years < 1) {
        dart.throw(new core.ArgumentError.new("max must not be before min"));
      }
      let start = (t0$ = (t0 = tryToStartAt, t0 == null ? null : t0.start), t0$ == null ? min.start : t0$);
      if (dart.notNull(length) > years) length = years;
      if (dart.test(start['<'](min.start))) {
        start = min.start;
      }
      let end = start.add({years: dart.notNull(length) - 1});
      if (dart.test(end['>'](max.start))) {
        start = max.start.add({years: -(dart.notNull(length) - 1)});
      }
      return new calendar.YearRange.new(start, length);
    }
    toList(state, startingWeekday) {
      let startYear = new calendar.CalendarYear.new(this.start.year, state, {startingWeekday: startingWeekday});
      return ListOfCalendarYearL().generate(this.length, dart.fn(i => startYear.addYears(i), intLToCalendarYearL()));
    }
  };
  (calendar.YearRange.new = function(start, length) {
    this[start$2] = start;
    this[length$0] = length;
    ;
  }).prototype = calendar.YearRange.prototype;
  dart.addTypeTests(calendar.YearRange);
  dart.addTypeCaches(calendar.YearRange);
  dart.setMethodSignature(calendar.YearRange, () => ({
    __proto__: dart.getMethods(calendar.YearRange.__proto__),
    toList: dart.fnType(dart.legacy(core.List$(dart.legacy(calendar.CalendarYear))), [dart.legacy(calendar.CalendarState), dart.legacy(core.int)])
  }));
  dart.setLibraryUri(calendar.YearRange, L0);
  dart.setFieldSignature(calendar.YearRange, () => ({
    __proto__: dart.getFields(calendar.YearRange.__proto__),
    start: dart.finalFieldType(dart.legacy(date$.Date)),
    length: dart.finalFieldType(dart.legacy(core.int))
  }));
  calendar.datesEqualAtResolution = function datesEqualAtResolution(a, b, resolution) {
    switch (resolution) {
      case C3 || CT.C3:
      {
        return a.year == b.year;
      }
      case C2 || CT.C2:
      {
        return a.year == b.year && a.month == b.month;
      }
      case C0 || CT.C0:
      {
        return dart.equals(a, b);
      }
      case C1 || CT.C1:
      default:
      {
        dart.throw(new core.ArgumentError.new("Equality not supported at resolution: " + dart.str(resolution)));
      }
    }
  };
  calendar.compareDatesAtResolution = function compareDatesAtResolution(a, b, resolution) {
    switch (resolution) {
      case C3 || CT.C3:
      {
        return a.year[$compareTo](b.year);
      }
      case C2 || CT.C2:
      {
        if (a.year == b.year) return a.month[$compareTo](b.month);
        return a.year[$compareTo](b.year);
      }
      case C0 || CT.C0:
      {
        return a.compareTo(b);
      }
      case C1 || CT.C1:
      default:
      {
        dart.throw(new core.ArgumentError.new("Comparison not supported at resolution: " + dart.str(resolution)));
      }
    }
  };
  calendar.firstDayOfMonth = function firstDayOfMonth(date) {
    return date == null ? null : new date$.Date.new(date.year, date.month, 1);
  };
  calendar.lastDayOfMonth = function lastDayOfMonth(date) {
    return date == null ? null : new date$.Date.new(date.year, dart.notNull(date.month) + 1, 1).add({days: -1});
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/calendar", {
    "package:angular_components/material_datepicker/calendar.dart": calendar
  }, {
    "package:angular_components/material_datepicker/calendar.dart": ["../src/material_datepicker/calendar/day.dart", "../src/material_datepicker/calendar/highlight.dart", "../src/material_datepicker/calendar/model.dart", "../src/material_datepicker/calendar/month.dart", "../src/material_datepicker/calendar/week.dart", "../src/material_datepicker/calendar/year.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["../src/material_datepicker/calendar/day.dart","../src/material_datepicker/calendar/highlight.dart","../src/material_datepicker/calendar/model.dart","../src/material_datepicker/calendar/month.dart","../src/material_datepicker/calendar/week.dart","../src/material_datepicker/calendar/year.dart"],"names":[],"mappings":"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","file":"calendar.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__calendar: calendar
  };
}));

//# sourceMappingURL=calendar.unsound.ddc.js.map
