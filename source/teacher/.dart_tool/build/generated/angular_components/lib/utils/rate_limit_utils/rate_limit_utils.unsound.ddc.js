define(['dart_sdk'], (function load__packages__angular_components__utils__rate_limit_utils__rate_limit_utils(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var rate_limit_utils = Object.create(dart.library);
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var FutureL = () => (FutureL = dart.constFn(dart.legacy(async.Future)))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var VoidToFutureL = () => (VoidToFutureL = dart.constFn(dart.fnType(FutureL(), [])))();
  const CT = Object.create(null);
  rate_limit_utils.debounce = function debounce(T, delegate, delay) {
    let timer = null;
    let completer = null;
    return dart.fn(argument => {
      let t0;
      t0 = timer;
      t0 == null ? null : t0.cancel();
      completer == null ? completer = async.Completer.new() : null;
      timer = async.Timer.new(delay, dart.fn(() => {
        completer.complete(delegate(argument));
        completer = null;
        timer = null;
      }, VoidToNull()));
      return completer.future;
    }, dart.fnType(FutureL(), [dart.legacy(T)]));
  };
  rate_limit_utils.debounceNullary = function debounceNullary(callback, delay) {
    let $function = rate_limit_utils.debounce(dart.dynamic, dart.fn(_ => callback(), dynamicTovoid()), delay);
    return dart.fn(() => $function(null), VoidToFutureL());
  };
  rate_limit_utils.throttle = function throttle(T, delegate, interval) {
    return rate_limit_utils._throttle(dart.legacy(T), delegate, interval, {guaranteeLast: false});
  };
  rate_limit_utils.throttleGuaranteeLast = function throttleGuaranteeLast(T, delegate, interval) {
    return rate_limit_utils._throttle(dart.legacy(T), delegate, interval, {guaranteeLast: true});
  };
  rate_limit_utils._throttle = function _throttle(T, delegate, interval, opts) {
    let guaranteeLast = opts && 'guaranteeLast' in opts ? opts.guaranteeLast : null;
    let onCooldown = false;
    let hasLastArg = false;
    let lastArg = null;
    let self = null;
    self = dart.fn(argument => {
      if (!onCooldown) {
        onCooldown = true;
        async.Timer.new(interval, dart.fn(() => {
          onCooldown = false;
          if (hasLastArg) {
            self(lastArg);
            hasLastArg = false;
          }
        }, VoidToNull()));
        delegate(argument);
      } else if (dart.test(guaranteeLast)) {
        lastArg = argument;
        hasLastArg = true;
      }
    }, dart.fnType(core.Null, [dart.legacy(T)]));
    return self;
  };
  dart.trackLibraries("packages/angular_components/utils/rate_limit_utils/rate_limit_utils", {
    "package:angular_components/utils/rate_limit_utils/rate_limit_utils.dart": rate_limit_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rate_limit_utils.dart"],"names":[],"mappings":";;;;;;;;;;;;mDAyBkD,UAAmB;AAC7D;AACI;AAEV,UAAO,SAAC;;AACS,WAAf,KAAK;mBAAL,OAAO;AACkB,MAAzB,AAAU,SAAD,IAAC,OAAV,YAAc,wBAAJ;AAKR,MAJF,QAAQ,gBAAM,KAAK,EAAE;AACmB,QAAtC,AAAU,SAAD,UAAU,AAAQ,QAAA,CAAC,QAAQ;AACpB,QAAhB,YAAY;AACA,QAAZ,QAAQ;;AAEV,YAAO,AAAU,UAAD;;EAEpB;8DAG8C,UAAqB;AAC7D,oBAAW,wCAAS,QAAC,KAAM,AAAQ,QAAA,sBAAI,KAAK;AAChD,UAAO,eAAM,AAAQ,UAAC;EACxB;mDAK8C,UAAmB;AAC7D,sDAAU,QAAQ,EAAE,QAAQ,kBAAiB;EAAM;6EAM9B,UAAmB;AACxC,sDAAU,QAAQ,EAAE,QAAQ,kBAAiB;EAAK;qDAEP,UAAmB;QAC9C;AACb,qBAAa;AACb,qBAAa;AAChB;AACe;AAgBhB,IAfD,OAAO,QAAG;AACR,WAAK,UAAU;AACI,QAAjB,aAAa;AAOX,QANF,gBAAM,QAAQ,EAAE;AACI,UAAlB,aAAa;AACb,cAAI,UAAU;AACC,YAAb,AAAI,IAAA,CAAC,OAAO;AACM,YAAlB,aAAa;;;AAGC,QAAlB,AAAQ,QAAA,CAAC,QAAQ;YACZ,eAAI,aAAa;AACJ,QAAlB,UAAU,QAAQ;AACD,QAAjB,aAAa;;;AAGjB,UAAO,KAAI;EACb","file":"rate_limit_utils.unsound.ddc.js"}');
  // Exports:
  return {
    utils__rate_limit_utils__rate_limit_utils: rate_limit_utils
  };
}));

//# sourceMappingURL=rate_limit_utils.unsound.ddc.js.map
