define(['dart_sdk'], (function load__packages__angular__src__core__change_detection__pipe_transform_template(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var runtime$46template = Object.create(dart.library);
  var optimizations$46template = Object.create(dart.library);
  var messages$46template = Object.create(dart.library);
  var check_binding$46template = Object.create(dart.library);
  var messages$46template$ = Object.create(dart.library);
  var di$46template = Object.create(dart.library);
  var runtime$46template$ = Object.create(dart.library);
  var injector$46template = Object.create(dart.library);
  var map$46template = Object.create(dart.library);
  var hierarchical$46template = Object.create(dart.library);
  var empty$46template = Object.create(dart.library);
  var errors$46template = Object.create(dart.library);
  var reflector$46template = Object.create(dart.library);
  var pipe_transform$46template = Object.create(dart.library);
  var exception_handler$46template = Object.create(dart.library);
  var ng_zone$46template = Object.create(dart.library);
  const CT = Object.create(null);
  runtime$46template.initReflector = function initReflector() {
    if (dart.test(runtime$46template._visited)) {
      return;
    }
    runtime$46template._visited = true;
    check_binding$46template.initReflector();
    messages$46template.initReflector();
    optimizations$46template.initReflector();
  };
  dart.defineLazy(runtime$46template, {
    /*runtime$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  optimizations$46template.initReflector = function initReflector$() {
  };
  messages$46template.initReflector = function initReflector$0() {
  };
  check_binding$46template.initReflector = function initReflector$1() {
    if (dart.test(check_binding$46template._visited)) {
      return;
    }
    check_binding$46template._visited = true;
    messages$46template$.initReflector();
    optimizations$46template.initReflector();
  };
  dart.defineLazy(check_binding$46template, {
    /*check_binding$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  messages$46template$.initReflector = function initReflector$2() {
    if (dart.test(messages$46template$._visited)) {
      return;
    }
    messages$46template$._visited = true;
    messages$46template.initReflector();
  };
  dart.defineLazy(messages$46template$, {
    /*messages$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  di$46template.initReflector = function initReflector$3() {
    if (dart.test(di$46template._visited)) {
      return;
    }
    di$46template._visited = true;
    errors$46template.initReflector();
    injector$46template.initReflector();
    runtime$46template$.initReflector();
  };
  dart.defineLazy(di$46template, {
    /*di$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  runtime$46template$.initReflector = function initReflector$4() {
    if (dart.test(runtime$46template$._visited)) {
      return;
    }
    runtime$46template$._visited = true;
    errors$46template.initReflector();
    reflector$46template.initReflector();
    empty$46template.initReflector();
    hierarchical$46template.initReflector();
    injector$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(runtime$46template$, {
    /*runtime$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  injector$46template.initReflector = function initReflector$5() {
    if (dart.test(injector$46template._visited)) {
      return;
    }
    injector$46template._visited = true;
    errors$46template.initReflector();
    empty$46template.initReflector();
    hierarchical$46template.initReflector();
    map$46template.initReflector();
  };
  dart.defineLazy(injector$46template, {
    /*injector$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  map$46template.initReflector = function initReflector$6() {
    if (dart.test(map$46template._visited)) {
      return;
    }
    map$46template._visited = true;
    empty$46template.initReflector();
    hierarchical$46template.initReflector();
    injector$46template.initReflector();
  };
  dart.defineLazy(map$46template, {
    /*map$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  hierarchical$46template.initReflector = function initReflector$7() {
    if (dart.test(hierarchical$46template._visited)) {
      return;
    }
    hierarchical$46template._visited = true;
    errors$46template.initReflector();
    empty$46template.initReflector();
    injector$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(hierarchical$46template, {
    /*hierarchical$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  empty$46template.initReflector = function initReflector$8() {
    if (dart.test(empty$46template._visited)) {
      return;
    }
    empty$46template._visited = true;
    hierarchical$46template.initReflector();
    injector$46template.initReflector();
  };
  dart.defineLazy(empty$46template, {
    /*empty$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  errors$46template.initReflector = function initReflector$9() {
    if (dart.test(errors$46template._visited)) {
      return;
    }
    errors$46template._visited = true;
    runtime$46template.initReflector();
  };
  dart.defineLazy(errors$46template, {
    /*errors$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  reflector$46template.initReflector = function initReflector$10() {
    if (dart.test(reflector$46template._visited)) {
      return;
    }
    reflector$46template._visited = true;
    runtime$46template.initReflector();
  };
  dart.defineLazy(reflector$46template, {
    /*reflector$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  pipe_transform$46template.initReflector = function initReflector$11() {
  };
  exception_handler$46template.initReflector = function initReflector$12() {
  };
  ng_zone$46template.initReflector = function initReflector$13() {
    if (dart.test(ng_zone$46template._visited)) {
      return;
    }
    ng_zone$46template._visited = true;
    exception_handler$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(ng_zone$46template, {
    /*ng_zone$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular/src/core/change_detection/pipe_transform.template", {
    "package:angular/src/runtime.template.dart": runtime$46template,
    "package:angular/src/runtime/optimizations.template.dart": optimizations$46template,
    "package:angular/src/runtime/messages/messages.template.dart": messages$46template,
    "package:angular/src/runtime/check_binding.template.dart": check_binding$46template,
    "package:angular/src/runtime/messages.template.dart": messages$46template$,
    "package:angular/src/core/di.template.dart": di$46template,
    "package:angular/src/di/injector/runtime.template.dart": runtime$46template$,
    "package:angular/src/di/injector/injector.template.dart": injector$46template,
    "package:angular/src/di/injector/map.template.dart": map$46template,
    "package:angular/src/di/injector/hierarchical.template.dart": hierarchical$46template,
    "package:angular/src/di/injector/empty.template.dart": empty$46template,
    "package:angular/src/di/errors.template.dart": errors$46template,
    "package:angular/src/di/reflector.template.dart": reflector$46template,
    "package:angular/src/core/change_detection/pipe_transform.template.dart": pipe_transform$46template,
    "package:angular/src/facade/exception_handler.template.dart": exception_handler$46template,
    "package:angular/src/core/zone/ng_zone.template.dart": ng_zone$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../../runtime.template.dart","../../runtime/optimizations.template.dart","../../runtime/messages/messages.template.dart","../../runtime/check_binding.template.dart","../../runtime/messages.template.dart","../di.template.dart","../../di/injector/runtime.template.dart","../../di/injector/injector.template.dart","../../di/injector/map.template.dart","../../di/injector/hierarchical.template.dart","../../di/injector/empty.template.dart","../../di/errors.template.dart","../../di/reflector.template.dart","pipe_transform.template.dart","../../facade/exception_handler.template.dart","../zone/ng_zone.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,8BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,2BAAQ;YAAG;;;;;ECFO;;ECAA;;ACGpB,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,iCAAQ;YAAG;;;;;ACCb,kBAAI;AACF;;AAEa,IAAf,gCAAW;AAEU,IAArB;EACF;;MARI,6BAAQ;YAAG;;;;;ACIb,kBAAI;AACF;;AAEa,IAAf,yBAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,sBAAQ;YAAG;;;;;ACKb,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAbI,4BAAQ;YAAG;;;;;ACAb,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,4BAAQ;YAAG;;;;;ACCb,kBAAI;AACF;;AAEa,IAAf,0BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,uBAAQ;YAAG;;;;;ACGb,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,gCAAQ;YAAG;;;;;ACAb,kBAAI;AACF;;AAEa,IAAf,4BAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,yBAAQ;YAAG;;;;;ACCb,kBAAI;AACF;;AAEa,IAAf,6BAAW;AAEU,IAArB;EACF;;MARI,0BAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,gCAAW;AAEU,IAArB;EACF;;MARI,6BAAQ;YAAG;;;;;ECAO;;ECAA;;ACGpB,kBAAI;AACF;;AAEa,IAAf,8BAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,2BAAQ;YAAG","file":"pipe_transform.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__runtime$46template: runtime$46template,
    src__runtime__optimizations$46template: optimizations$46template,
    src__runtime__messages__messages$46template: messages$46template,
    src__runtime__check_binding$46template: check_binding$46template,
    src__runtime__messages$46template: messages$46template$,
    src__core__di$46template: di$46template,
    src__di__injector__runtime$46template: runtime$46template$,
    src__di__injector__injector$46template: injector$46template,
    src__di__injector__map$46template: map$46template,
    src__di__injector__hierarchical$46template: hierarchical$46template,
    src__di__injector__empty$46template: empty$46template,
    src__di__errors$46template: errors$46template,
    src__di__reflector$46template: reflector$46template,
    src__core__change_detection__pipe_transform$46template: pipe_transform$46template,
    src__facade__exception_handler$46template: exception_handler$46template,
    src__core__zone__ng_zone$46template: ng_zone$46template
  };
}));

//# sourceMappingURL=pipe_transform.template.unsound.ddc.js.map
