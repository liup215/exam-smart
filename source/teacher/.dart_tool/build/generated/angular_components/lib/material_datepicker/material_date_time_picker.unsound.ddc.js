define(['dart_sdk', 'packages/intl/intl', 'packages/angular_components/model/date/date', 'packages/angular_components/interfaces/has_disabled', 'packages/quiver/src/time/clock'], (function load__packages__angular_components__material_datepicker__material_date_time_picker(dart_sdk, packages__intl__intl, packages__angular_components__model__date__date, packages__angular_components__interfaces__has_disabled, packages__quiver__src__time__clock) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl = packages__intl__intl.intl;
  const date = packages__angular_components__model__date__date.model__date__date;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  var material_date_time_picker = Object.create(dart.library);
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var StreamControllerOfDateTimeL = () => (StreamControllerOfDateTimeL = dart.constFn(async.StreamController$(DateTimeL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_date_time_picker.dart";
  var _utc = dart.privateName(material_date_time_picker, "_utc");
  var _dateTimeController = dart.privateName(material_date_time_picker, "_dateTimeController");
  var _dateTime = dart.privateName(material_date_time_picker, "_dateTime");
  var _date = dart.privateName(material_date_time_picker, "_date");
  var _time = dart.privateName(material_date_time_picker, "_time");
  var _clock$ = dart.privateName(material_date_time_picker, "_clock");
  var _updateDateTimeAndNotify = dart.privateName(material_date_time_picker, "_updateDateTimeAndNotify");
  var outputDateFormat = dart.privateName(material_date_time_picker, "MaterialDateTimePickerComponent.outputDateFormat");
  var outputTimeFormat = dart.privateName(material_date_time_picker, "MaterialDateTimePickerComponent.outputTimeFormat");
  var maxDateTime = dart.privateName(material_date_time_picker, "MaterialDateTimePickerComponent.maxDateTime");
  var minDateTime = dart.privateName(material_date_time_picker, "MaterialDateTimePickerComponent.minDateTime");
  var increment = dart.privateName(material_date_time_picker, "MaterialDateTimePickerComponent.increment");
  var disabled = dart.privateName(material_date_time_picker, "MaterialDateTimePickerComponent.disabled");
  var required = dart.privateName(material_date_time_picker, "MaterialDateTimePickerComponent.required");
  material_date_time_picker.MaterialDateTimePickerComponent = class MaterialDateTimePickerComponent extends core.Object {
    get outputDateFormat() {
      return this[outputDateFormat];
    }
    set outputDateFormat(value) {
      this[outputDateFormat] = value;
    }
    get outputTimeFormat() {
      return this[outputTimeFormat];
    }
    set outputTimeFormat(value) {
      this[outputTimeFormat] = value;
    }
    get maxDateTime() {
      return this[maxDateTime];
    }
    set maxDateTime(value) {
      this[maxDateTime] = value;
    }
    get minDateTime() {
      return this[minDateTime];
    }
    set minDateTime(value) {
      this[minDateTime] = value;
    }
    get increment() {
      return this[increment];
    }
    set increment(value) {
      this[increment] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get required() {
      return this[required];
    }
    set required(value) {
      this[required] = value;
    }
    get maxDate() {
      return new date.Date.new(this.maxDateTime.year, this.maxDateTime.month, this.maxDateTime.day);
    }
    get maxTime() {
      if (dart.test(material_date_time_picker.MaterialDateTimePickerComponent._sameDate(this[_date], this.maxDateTime))) {
        return material_date_time_picker.MaterialDateTimePickerComponent.cloneDateTime(this.maxDateTime);
      }
      return null;
    }
    get minDate() {
      return new date.Date.new(this.minDateTime.year, this.minDateTime.month, this.minDateTime.day);
    }
    get minTime() {
      if (dart.test(material_date_time_picker.MaterialDateTimePickerComponent._sameDate(this[_date], this.minDateTime))) {
        return material_date_time_picker.MaterialDateTimePickerComponent.cloneDateTime(this.minDateTime);
      }
      return null;
    }
    get utc() {
      return this[_utc];
    }
    set utc(value) {
      let t0, t0$;
      this[_utc] = value;
      this.dateTime = dart.test(this[_utc]) ? (t0 = this[_dateTime], t0 == null ? null : t0.toUtc()) : (t0$ = this[_dateTime], t0$ == null ? null : t0$.toLocal());
    }
    get dateTimeChange() {
      return this[_dateTimeController].stream;
    }
    get dateTime() {
      return this[_dateTime];
    }
    set dateTime(value) {
      if (!dart.equals(value, this[_dateTime])) {
        this[_dateTime] = value;
        this[_date] = this[_dateTime] == null ? null : date.Date.fromTime(this[_dateTime]);
        this[_time] = material_date_time_picker.MaterialDateTimePickerComponent.cloneDateTime(this[_dateTime]);
      }
    }
    get date() {
      return this[_date];
    }
    set date(value) {
      if (!dart.equals(value, this[_date])) {
        this[_date] = value;
        if (this[_date] != null && this[_time] == null) {
          if (dart.test(material_date_time_picker.MaterialDateTimePickerComponent._sameDate(this[_date], this.minDateTime))) {
            this[_time] = material_date_time_picker.MaterialDateTimePickerComponent.cloneDateTime(this.minDateTime);
          } else {
            this[_time] = dart.test(this[_utc]) ? new core.DateTime.utc(this[_date].year) : new core.DateTime.new(this[_date].year);
          }
        }
        this[_updateDateTimeAndNotify]();
      }
    }
    get time() {
      return this[_time];
    }
    set time(value) {
      if (!dart.equals(value, this[_time])) {
        this[_time] = value;
        this[_updateDateTimeAndNotify]();
      }
    }
    setTimeToNowIfUnset() {
      if (!dart.test(this.disabled) && this[_time] == null) {
        let now = this[_clock$].now();
        this[_time] = now;
        this[_date] = new date.Date.new(now.year, now.month, now.day);
        this[_updateDateTimeAndNotify]();
      }
    }
    [_updateDateTimeAndNotify]() {
      this[_dateTime] = this[_date] != null && this[_time] != null ? dart.test(this.utc) ? new core.DateTime.utc(this[_date].year, this[_date].month, this[_date].day, this[_time].hour, this[_time].minute) : new core.DateTime.new(this[_date].year, this[_date].month, this[_date].day, this[_time].hour, this[_time].minute) : null;
      if (this[_dateTime] != null || !dart.test(this.required)) {
        this[_dateTimeController].add(this[_dateTime]);
      }
    }
    static _sameDate(date, toCompare) {
      if (date == null || toCompare == null) {
        return false;
      }
      return date.year == toCompare.year && date.month == toCompare.month && date.day == toCompare.day;
    }
    static cloneDateTime(dateTime) {
      return dateTime != null ? new core.DateTime.fromMillisecondsSinceEpoch(dateTime.millisecondsSinceEpoch, {isUtc: dateTime.isUtc}) : null;
    }
  };
  (material_date_time_picker.MaterialDateTimePickerComponent.new = function(_clock) {
    this[outputDateFormat] = new intl.DateFormat.yMMMd();
    this[outputTimeFormat] = new intl.DateFormat.jm();
    this[maxDateTime] = null;
    this[minDateTime] = null;
    this[increment] = null;
    this[disabled] = false;
    this[required] = false;
    this[_utc] = false;
    this[_dateTimeController] = StreamControllerOfDateTimeL().broadcast();
    this[_dateTime] = null;
    this[_date] = null;
    this[_time] = null;
    this[_clock$] = _clock;
    let year = this[_clock$].now().toUtc().year;
    this.minDateTime = new core.DateTime.new(dart.notNull(year) - 10, 1, 1, 0, 0);
    this.maxDateTime = new core.DateTime.new(dart.notNull(year) + 10, 12, 31, 23, 59);
  }).prototype = material_date_time_picker.MaterialDateTimePickerComponent.prototype;
  dart.addTypeTests(material_date_time_picker.MaterialDateTimePickerComponent);
  dart.addTypeCaches(material_date_time_picker.MaterialDateTimePickerComponent);
  material_date_time_picker.MaterialDateTimePickerComponent[dart.implements] = () => [has_disabled.HasDisabled];
  dart.setMethodSignature(material_date_time_picker.MaterialDateTimePickerComponent, () => ({
    __proto__: dart.getMethods(material_date_time_picker.MaterialDateTimePickerComponent.__proto__),
    setTimeToNowIfUnset: dart.fnType(dart.void, []),
    [_updateDateTimeAndNotify]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_date_time_picker.MaterialDateTimePickerComponent, () => ({
    __proto__: dart.getGetters(material_date_time_picker.MaterialDateTimePickerComponent.__proto__),
    maxDate: dart.legacy(date.Date),
    maxTime: dart.legacy(core.DateTime),
    minDate: dart.legacy(date.Date),
    minTime: dart.legacy(core.DateTime),
    utc: dart.legacy(core.bool),
    dateTimeChange: dart.legacy(async.Stream$(dart.legacy(core.DateTime))),
    dateTime: dart.legacy(core.DateTime),
    date: dart.legacy(date.Date),
    time: dart.legacy(core.DateTime)
  }));
  dart.setSetterSignature(material_date_time_picker.MaterialDateTimePickerComponent, () => ({
    __proto__: dart.getSetters(material_date_time_picker.MaterialDateTimePickerComponent.__proto__),
    utc: dart.legacy(core.bool),
    dateTime: dart.legacy(core.DateTime),
    date: dart.legacy(date.Date),
    time: dart.legacy(core.DateTime)
  }));
  dart.setLibraryUri(material_date_time_picker.MaterialDateTimePickerComponent, L0);
  dart.setFieldSignature(material_date_time_picker.MaterialDateTimePickerComponent, () => ({
    __proto__: dart.getFields(material_date_time_picker.MaterialDateTimePickerComponent.__proto__),
    [_clock$]: dart.finalFieldType(dart.legacy(clock.Clock)),
    outputDateFormat: dart.fieldType(dart.legacy(intl.DateFormat)),
    outputTimeFormat: dart.fieldType(dart.legacy(intl.DateFormat)),
    maxDateTime: dart.fieldType(dart.legacy(core.DateTime)),
    minDateTime: dart.fieldType(dart.legacy(core.DateTime)),
    increment: dart.fieldType(dart.legacy(core.int)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    required: dart.fieldType(dart.legacy(core.bool)),
    [_utc]: dart.fieldType(dart.legacy(core.bool)),
    [_dateTimeController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.DateTime)))),
    [_dateTime]: dart.fieldType(dart.legacy(core.DateTime)),
    [_date]: dart.fieldType(dart.legacy(date.Date)),
    [_time]: dart.fieldType(dart.legacy(core.DateTime))
  }));
  dart.defineLazy(material_date_time_picker.MaterialDateTimePickerComponent, {
    /*material_date_time_picker.MaterialDateTimePickerComponent.tabIndex*/get tabIndex() {
      return -1;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_time_picker", {
    "package:angular_components/material_datepicker/material_date_time_picker.dart": material_date_time_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_date_time_picker.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkDa;;;;;;IAMA;;;;;;IAQF;;;;;;IAkBA;;;;;;IAcL;;;;;;IAIC;;;;;;IAOA;;;;;;;AAzCD,+BAAK,AAAY,uBAAM,AAAY,wBAAO,AAAY;IAAI;;AAI5D,oBAAI,oEAAU,aAAO;AACnB,cAAO,yEAAc;;AAEvB,YAAO;IACT;;AAUI,+BAAK,AAAY,uBAAM,AAAY,wBAAO,AAAY;IAAI;;AAI5D,oBAAI,oEAAU,aAAO;AACnB,cAAO,yEAAc;;AAEvB,YAAO;IACT;;AAiBgB;IAAI;YAOP;;AACC,MAAZ,aAAO,KAAK;AAC+C,MAA3D,0BAAW,kDAAO,OAAW,oDAAU,OAAW;IACpD;;AAMuC,YAAA,AAAoB;IAAM;;AAoBxC;IAAS;iBAIZ;AACpB,uBAAI,KAAK,EAAI;AACM,QAAjB,kBAAY,KAAK;AAC4C,QAA7D,cAAS,AAAU,mBAAG,OAAO,OAAY,mBAAS;AAClB,QAAhC,cAAQ,wEAAc;;IAE1B;;AAYiB;IAAK;aACR;AACZ,uBAAI,KAAK,EAAI;AACE,QAAb,cAAQ,KAAK;AACb,YAAI,eAAS,QAAQ,AAAM,eAAG;AAE5B,wBAAI,oEAAU,aAAO;AACe,YAAlC,cAAQ,wEAAc;;AAEwC,YAA9D,wBAAQ,cAAgB,sBAAI,AAAM,oBAAQ,sBAAS,AAAM;;;AAGnC,QAA1B;;IAEJ;;AAKqB;IAAK;aACR;AAChB,uBAAI,KAAK,EAAI;AACE,QAAb,cAAQ,KAAK;AACa,QAA1B;;IAEJ;;AAIE,qBAAK,kBAAY,AAAM,eAAG;AACf,kBAAM,AAAO;AACX,QAAX,cAAQ,GAAG;AAC+B,QAA1C,cAAQ,kBAAK,AAAI,GAAD,OAAO,AAAI,GAAD,QAAQ,AAAI,GAAD;AACX,QAA1B;;IAEJ;;AAWY,MANV,kBAAY,AAAc,eAAL,QAAQ,eAAS,iBAC/B,YACY,sBACP,AAAM,kBAAM,AAAM,mBAAO,AAAM,iBAAK,AAAM,kBAAM,AAAM,sBACxD,sBACE,AAAM,kBAAM,AAAM,mBAAO,AAAM,iBAAK,AAAM,kBAAM,AAAM,sBAC5D;AAEN,UAAI,mBAAa,mBAAS;AACU,QAAlC,AAAoB,8BAAI;;IAE5B;qBAG2B,MAAe;AACxC,UAAI,AAAK,IAAD,IAAI,QAAQ,AAAU,SAAD,IAAI;AAC/B,cAAO;;AAET,YAAQ,AAAK,AAAK,AACgB,KADtB,SAAS,AAAU,SAAD,SAC1B,AAAK,AAAM,IAAP,UAAU,AAAU,SAAD,UACvB,AAAK,AAAI,IAAL,QAAQ,AAAU,SAAD;IAC3B;yBAEuC;AACrC,YAAO,AAAS,SAAD,IAAI,OACJ,6CAA2B,AAAS,QAAD,iCACnC,AAAS,QAAD,WACjB;IACR;;4EA9E8D;IA3GnD,yBAA8B;IAM9B,yBAA8B;IAQhC;IAkBA;IAcL;IAIC,iBAAW;IAOX,iBAAW;IAGX,aAAO;IAWN,4BAAsB;IAsBnB;IAqBJ;IAmBI;IA1BqD;AAExD,eAAO,AAAO,AAAM,AAAQ;AAC4B,IAA5D,mBAAc,sBAAc,aAAL,IAAI,IAAG,OAAsB,GAAG,GAAG;AACM,IAAhE,mBAAc,sBAAc,aAAL,IAAI,IAAG,QAAuB,IAAI,IAAI;EAC/D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAtHa,kEAAQ","file":"material_date_time_picker.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_time_picker: material_date_time_picker
  };
}));

//# sourceMappingURL=material_date_time_picker.unsound.ddc.js.map
