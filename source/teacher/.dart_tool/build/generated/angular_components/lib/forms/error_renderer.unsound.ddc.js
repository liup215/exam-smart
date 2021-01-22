define(['dart_sdk'], (function load__packages__angular_components__forms__error_renderer(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var error_renderer = Object.create(dart.library);
  var $keys = dartx.keys;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var MapLOfStringL$dynamicToMapLOfStringL$dynamic = () => (MapLOfStringL$dynamicToMapLOfStringL$dynamic = dart.constFn(dart.fnType(MapLOfStringL$dynamic(), [MapLOfStringL$dynamic()])))();
  var LinkedHashMapOfStringL$dynamic = () => (LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(StringL(), dart.dynamic)))();
  const CT = Object.create(null);
  error_renderer.replaceErrors = function replaceErrors(overrides) {
    return dart.fn(errors => error_renderer._replaceErrorsImpl(overrides, errors), MapLOfStringL$dynamicToMapLOfStringL$dynamic());
  };
  error_renderer._replaceErrorsImpl = function _replaceErrorsImpl(overrides, errors) {
    let result = LinkedHashMapOfStringL$dynamic().from(errors);
    for (let error of errors[$keys]) {
      if (dart.test(overrides[$containsKey](error))) result[$_set](error, overrides[$_get](error));
    }
    return result;
  };
  dart.trackLibraries("packages/angular_components/forms/error_renderer", {
    "package:angular_components/forms/error_renderer.dart": error_renderer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["error_renderer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;wDAU0C;AACtC,mBAAC,UAAW,kCAAmB,SAAS,EAAE,MAAM;EAAC;kEAG7B,WAAgC;AAChD,iBAAS,sCAA0B,MAAM;AAC/C,aAAS,QAAS,AAAO,OAAD;AACtB,oBAAI,AAAU,SAAD,eAAa,KAAK,IAAG,AAAM,AAA0B,MAA1B,QAAC,KAAK,EAAI,AAAS,SAAA,QAAC,KAAK;;AAEnE,UAAO,OAAM;EACf","file":"error_renderer.unsound.ddc.js"}');
  // Exports:
  return {
    forms__error_renderer: error_renderer
  };
}));

//# sourceMappingURL=error_renderer.unsound.ddc.js.map
