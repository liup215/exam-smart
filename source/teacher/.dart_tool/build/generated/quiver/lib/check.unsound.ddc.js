define(['dart_sdk'], (function load__packages__quiver__check(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var check = Object.create(dart.library);
  var $toString = dartx.toString;
  var FunctionL = () => (FunctionL = dart.constFn(dart.legacy(core.Function)))();
  const CT = Object.create(null);
  check.checkArgument = function checkArgument(expression, opts) {
    let message = opts && 'message' in opts ? opts.message : null;
    if (!dart.test(expression)) {
      dart.throw(new core.ArgumentError.new(check._resolveMessage(message, null)));
    }
  };
  check.checkListIndex = function checkListIndex(index, size, opts) {
    let message = opts && 'message' in opts ? opts.message : null;
    if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(size)) {
      dart.throw(new core.RangeError.new(check._resolveMessage(message, "index " + dart.str(index) + " not valid for list of size " + dart.str(size))));
    }
    return index;
  };
  check.checkNotNull = function checkNotNull(T, reference, opts) {
    let message = opts && 'message' in opts ? opts.message : null;
    if (reference == null) {
      dart.throw(new core.ArgumentError.new(check._resolveMessage(message, "null pointer")));
    }
    return reference;
  };
  check.checkState = function checkState(expression, opts) {
    let message = opts && 'message' in opts ? opts.message : null;
    if (!dart.test(expression)) {
      dart.throw(new core.StateError.new(check._resolveMessage(message, "failed precondition")));
    }
  };
  check._resolveMessage = function _resolveMessage(message, defaultMessage) {
    if (FunctionL().is(message)) message = dart.dcall(message, []);
    if (message == null) return defaultMessage;
    return dart.toString(message);
  };
  dart.trackLibraries("packages/quiver/check", {
    "package:quiver/check.dart": check
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["check.dart"],"names":[],"mappings":";;;;;;;;;+CA0CwB;QAAa;AACnC,mBAAK,UAAU;AACsC,MAAnD,WAAM,2BAAc,sBAAgB,OAAO,EAAE;;EAEjD;iDAIuB,OAAW;QAAO;AACvC,QAAU,aAAN,KAAK,IAAG,KAAW,aAAN,KAAK,kBAAI,IAAI;AAEkC,MAD9D,WAAM,wBAAW,sBACb,OAAO,EAAE,AAA+C,oBAAvC,KAAK,8CAA6B,IAAI;;AAE7D,UAAO,MAAK;EACd;gDAMoB;QAAY;AAC9B,QAAI,AAAU,SAAD,IAAI;AAC8C,MAA7D,WAAM,2BAAc,sBAAgB,OAAO,EAAE;;AAE/C,UAAO,UAAS;EAClB;yCAGqB;QAAa;AAChC,mBAAK,UAAU;AACoD,MAAjE,WAAM,wBAAW,sBAAgB,OAAO,EAAE;;EAE9C;mDAEuB,SAAgB;AACrC,QAAY,eAAR,OAAO,GAAc,AAAmB,UAAF,WAAP,OAAO;AAC1C,QAAI,AAAQ,OAAD,IAAI,MAAM,MAAO,eAAc;AAC1C,UAAe,eAAR,OAAO;EAChB","file":"check.unsound.ddc.js"}');
  // Exports:
  return {
    check: check
  };
}));

//# sourceMappingURL=check.unsound.ddc.js.map
