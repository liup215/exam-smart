define(['dart_sdk', 'packages/angular_components/utils/rate_limit_utils/rate_limit_utils.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__src__utils__async__async_update_scheduler_template(dart_sdk, packages__angular_components__utils__rate_limit_utils__rate_limit_utils$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const rate_limit_utils$46template = packages__angular_components__utils__rate_limit_utils__rate_limit_utils$46template.utils__rate_limit_utils__rate_limit_utils$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var throttle_stream$46template = Object.create(dart.library);
  var rate_limit$46template = Object.create(dart.library);
  var async_where$46template = Object.create(dart.library);
  var async_update_scheduler$46template = Object.create(dart.library);
  var debounce_stream$46template = Object.create(dart.library);
  var zoned_async$46template = Object.create(dart.library);
  var priority_stream_iterator$46template = Object.create(dart.library);
  var lazy_stream_controller$46template = Object.create(dart.library);
  var disposable_future$46template = Object.create(dart.library);
  var simple_stream$46template = Object.create(dart.library);
  const CT = Object.create(null);
  throttle_stream$46template.initReflector = function initReflector() {
    if (dart.test(throttle_stream$46template._visited)) {
      return;
    }
    throttle_stream$46template._visited = true;
    rate_limit_utils$46template.initReflector();
    rate_limit$46template.initReflector();
  };
  dart.defineLazy(throttle_stream$46template, {
    /*throttle_stream$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  rate_limit$46template.initReflector = function initReflector$() {
    if (dart.test(rate_limit$46template._visited)) {
      return;
    }
    rate_limit$46template._visited = true;
    rate_limit_utils$46template.initReflector();
  };
  dart.defineLazy(rate_limit$46template, {
    /*rate_limit$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  async_where$46template.initReflector = function initReflector$0() {
  };
  async_update_scheduler$46template.initReflector = function initReflector$1() {
  };
  debounce_stream$46template.initReflector = function initReflector$2() {
    if (dart.test(debounce_stream$46template._visited)) {
      return;
    }
    debounce_stream$46template._visited = true;
    rate_limit_utils$46template.initReflector();
    rate_limit$46template.initReflector();
  };
  dart.defineLazy(debounce_stream$46template, {
    /*debounce_stream$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  zoned_async$46template.initReflector = function initReflector$3() {
  };
  priority_stream_iterator$46template.initReflector = function initReflector$4() {
  };
  lazy_stream_controller$46template.initReflector = function initReflector$5() {
  };
  disposable_future$46template.initReflector = function initReflector$6() {
    if (dart.test(disposable_future$46template._visited)) {
      return;
    }
    disposable_future$46template._visited = true;
    disposer$46template.initReflector();
  };
  dart.defineLazy(disposable_future$46template, {
    /*disposable_future$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  simple_stream$46template.initReflector = function initReflector$7() {
  };
  dart.trackLibraries("packages/angular_components/src/utils/async/async_update_scheduler.template", {
    "package:angular_components/src/utils/async/throttle_stream.template.dart": throttle_stream$46template,
    "package:angular_components/src/utils/async/rate_limit.template.dart": rate_limit$46template,
    "package:angular_components/src/utils/async/async_where.template.dart": async_where$46template,
    "package:angular_components/src/utils/async/async_update_scheduler.template.dart": async_update_scheduler$46template,
    "package:angular_components/src/utils/async/debounce_stream.template.dart": debounce_stream$46template,
    "package:angular_components/src/utils/async/zoned_async.template.dart": zoned_async$46template,
    "package:angular_components/src/utils/async/priority_stream_iterator.template.dart": priority_stream_iterator$46template,
    "package:angular_components/src/utils/async/lazy_stream_controller.template.dart": lazy_stream_controller$46template,
    "package:angular_components/src/utils/async/disposable_future.template.dart": disposable_future$46template,
    "package:angular_components/src/utils/async/simple_stream.template.dart": simple_stream$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["throttle_stream.template.dart","rate_limit.template.dart","async_where.template.dart","async_update_scheduler.template.dart","debounce_stream.template.dart","zoned_async.template.dart","priority_stream_iterator.template.dart","lazy_stream_controller.template.dart","disposable_future.template.dart","simple_stream.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,mCAAQ;YAAG;;;;;ACCb,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;EACF;;MARI,8BAAQ;YAAG;;;;;ECAO;;ECAA;;ACGpB,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,mCAAQ;YAAG;;;;;ECDO;;ECAA;;ECAA;;ACEpB,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAEU,IAArB;EACF;;MARI,qCAAQ;YAAG;;;;;ECAO","file":"async_update_scheduler.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__utils__async__throttle_stream$46template: throttle_stream$46template,
    src__utils__async__rate_limit$46template: rate_limit$46template,
    src__utils__async__async_where$46template: async_where$46template,
    src__utils__async__async_update_scheduler$46template: async_update_scheduler$46template,
    src__utils__async__debounce_stream$46template: debounce_stream$46template,
    src__utils__async__zoned_async$46template: zoned_async$46template,
    src__utils__async__priority_stream_iterator$46template: priority_stream_iterator$46template,
    src__utils__async__lazy_stream_controller$46template: lazy_stream_controller$46template,
    src__utils__async__disposable_future$46template: disposable_future$46template,
    src__utils__async__simple_stream$46template: simple_stream$46template
  };
}));

//# sourceMappingURL=async_update_scheduler.template.unsound.ddc.js.map
