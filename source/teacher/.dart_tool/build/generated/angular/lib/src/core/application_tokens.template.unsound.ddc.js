define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform.template'], (function load__packages__angular__src__core__application_tokens_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const runtime$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__runtime$46template;
  const pipe_transform$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__core__change_detection__pipe_transform$46template;
  var application_tokens$46template = Object.create(dart.library);
  var lang$46template = Object.create(dart.library);
  var default_iterable_differ$46template = Object.create(dart.library);
  var change_detector_ref$46template = Object.create(dart.library);
  var default_keyvalue_differ$46template = Object.create(dart.library);
  var change_detection$46template = Object.create(dart.library);
  var change_detection_util$46template = Object.create(dart.library);
  var component_state$46template = Object.create(dart.library);
  var change_detection$46template$ = Object.create(dart.library);
  const CT = Object.create(null);
  application_tokens$46template.initReflector = function initReflector() {
  };
  lang$46template.initReflector = function initReflector$() {
  };
  default_iterable_differ$46template.initReflector = function initReflector$0() {
    if (dart.test(default_iterable_differ$46template._visited)) {
      return;
    }
    default_iterable_differ$46template._visited = true;
    runtime$46template.initReflector();
  };
  dart.defineLazy(default_iterable_differ$46template, {
    /*default_iterable_differ$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  change_detector_ref$46template.initReflector = function initReflector$1() {
  };
  default_keyvalue_differ$46template.initReflector = function initReflector$2() {
  };
  change_detection$46template.initReflector = function initReflector$3() {
    if (dart.test(change_detection$46template._visited)) {
      return;
    }
    change_detection$46template._visited = true;
    change_detection_util$46template.initReflector();
    change_detector_ref$46template.initReflector();
    default_iterable_differ$46template.initReflector();
    default_keyvalue_differ$46template.initReflector();
    pipe_transform$46template.initReflector();
  };
  dart.defineLazy(change_detection$46template, {
    /*change_detection$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  change_detection_util$46template.initReflector = function initReflector$4() {
    if (dart.test(change_detection_util$46template._visited)) {
      return;
    }
    change_detection_util$46template._visited = true;
    lang$46template.initReflector();
  };
  dart.defineLazy(change_detection_util$46template, {
    /*change_detection_util$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  component_state$46template.initReflector = function initReflector$5() {
  };
  change_detection$46template$.initReflector = function initReflector$6() {
    if (dart.test(change_detection$46template$._visited)) {
      return;
    }
    change_detection$46template$._visited = true;
    change_detection$46template.initReflector();
    component_state$46template.initReflector();
    default_iterable_differ$46template.initReflector();
  };
  dart.defineLazy(change_detection$46template$, {
    /*change_detection$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular/src/core/application_tokens.template", {
    "package:angular/src/core/application_tokens.template.dart": application_tokens$46template,
    "package:angular/src/facade/lang.template.dart": lang$46template,
    "package:angular/src/core/change_detection/differs/default_iterable_differ.template.dart": default_iterable_differ$46template,
    "package:angular/src/core/change_detection/change_detector_ref.template.dart": change_detector_ref$46template,
    "package:angular/src/core/change_detection/differs/default_keyvalue_differ.template.dart": default_keyvalue_differ$46template,
    "package:angular/src/core/change_detection/change_detection.template.dart": change_detection$46template,
    "package:angular/src/core/change_detection/change_detection_util.template.dart": change_detection_util$46template,
    "package:angular/src/core/change_detection/component_state.template.dart": component_state$46template,
    "package:angular/src/core/change_detection.template.dart": change_detection$46template$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["application_tokens.template.dart","../facade/lang.template.dart","change_detection/differs/default_iterable_differ.template.dart","change_detection/change_detector_ref.template.dart","change_detection/differs/default_keyvalue_differ.template.dart","change_detection/change_detection.template.dart","change_detection/change_detection_util.template.dart","change_detection/component_state.template.dart","change_detection.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;EAQsB;;ECAA;;ACEpB,kBAAI;AACF;;AAEa,IAAf,8CAAW;AAEU,IAArB;EACF;;MARI,2CAAQ;YAAG;;;;;ECAO;;ECAA;;ACMpB,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,oCAAQ;YAAG;;;;;ACFb,kBAAI;AACF;;AAEa,IAAf,4CAAW;AAEU,IAArB;EACF;;MARI,yCAAQ;YAAG;;;;;ECAO;;ACIpB,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,qCAAQ;YAAG","file":"application_tokens.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__core__application_tokens$46template: application_tokens$46template,
    src__facade__lang$46template: lang$46template,
    src__core__change_detection__differs__default_iterable_differ$46template: default_iterable_differ$46template,
    src__core__change_detection__change_detector_ref$46template: change_detector_ref$46template,
    src__core__change_detection__differs__default_keyvalue_differ$46template: default_keyvalue_differ$46template,
    src__core__change_detection__change_detection$46template: change_detection$46template,
    src__core__change_detection__change_detection_util$46template: change_detection_util$46template,
    src__core__change_detection__component_state$46template: component_state$46template,
    src__core__change_detection$46template: change_detection$46template$
  };
}));

//# sourceMappingURL=application_tokens.template.unsound.ddc.js.map
