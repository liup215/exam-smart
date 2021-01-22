define(['dart_sdk'], (function load__packages__angular_components__utils__angular__properties__properties(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var properties = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/utils/angular/properties/properties.dart";
  properties._parseBool = function _parseBool(strValue) {
    switch (strValue) {
      case "":
      {
        return true;
      }
      case "true":
      {
        return true;
      }
      case "false":
      {
        return false;
      }
      default:
      {
        dart.throw(new core.ArgumentError.value(strValue, "strValue", "Only \"\", \"true\", and \"false\" are acceptable values for parseBool. " + "Found: "));
      }
    }
  };
  properties.getBool = function getBool(inputValue) {
    if (inputValue == null) dart.throw(new core.ArgumentError.notNull("inputValue"));
    if (StringL().is(inputValue)) return properties._parseBool(inputValue);
    if (boolL().is(inputValue)) return inputValue;
    dart.throw(new core.ArgumentError.value(inputValue, "inputValue", "Expected a String, or bool type"));
  };
  properties.attributeToBool = function attributeToBool(inputValue, opts) {
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : false;
    if (inputValue == null) return defaultValue;
    return properties._parseBool(inputValue);
  };
  properties.getInt = function getInt(inputValue, opts) {
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : 0;
    if (inputValue == null) {
      return defaultValue;
    } else if (StringL().is(inputValue)) {
      return core.int.parse(inputValue);
    } else {
      if (!intL().is(inputValue)) dart.assertFailed(null, L0, 84, 12, "inputValue is int");
      return intL().as(inputValue);
    }
  };
  dart.trackLibraries("packages/angular_components/utils/angular/properties/properties", {
    "package:angular_components/utils/angular/properties/properties.dart": properties
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["properties.dart"],"names":[],"mappings":";;;;;;;;;;;8CAgBuB;AACrB,YAAQ,QAAQ;;;AAEZ,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAMW,QAJlB,WAAoB,6BAChB,QAAQ,EACR,YAAU,AACV,6EACI;;;EAEd;wCAYa;AACX,QAAI,AAAW,UAAD,IAAI,MAAM,AAAyC,WAArB,+BAAQ;AAEpD,QAAe,aAAX,UAAU,GAAY,MAAO,uBAAW,UAAU;AACtD,QAAe,WAAX,UAAU,GAAU,MAAO,WAAU;AAGuB,IADhE,WAAoB,6BAChB,UAAU,EAAE,cAAc;EAChC;wDAiB4B;QAAkB;AAC5C,QAAI,AAAW,UAAD,IAAI,MAAM,MAAO,aAAY;AAC3C,UAAO,uBAAW,UAAU;EAC9B;sCAMW;QAAiB;AAC1B,QAAI,AAAW,UAAD,IAAI;AAChB,YAAO,aAAY;UACd,KAAe,aAAX,UAAU;AACnB,YAAW,gBAAM,UAAU;;AAE3B,WAAkB,UAAX,UAAU;AACjB,uBAAO,UAAU;;EAErB","file":"properties.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__properties__properties: properties
  };
}));

//# sourceMappingURL=properties.unsound.ddc.js.map
