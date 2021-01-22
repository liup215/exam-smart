define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/utils/angular/scroll_host/interface.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface.template'], (function load__packages__angular_components__src__utils__angular__scroll_host__pan_controller_impl_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__utils__angular__scroll_host__interface$46template, packages__angular_components__utils__async__async$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__utils__browser__feature_detector__feature_detector$46template, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const interface$46template = packages__angular_components__utils__angular__scroll_host__interface$46template.utils__angular__scroll_host__interface$46template;
  const gestures$46template = packages__angular_components__utils__angular__scroll_host__interface$46template.src__utils__angular__scroll_host__gestures$46template;
  const scroll_host_event_impl$46template = packages__angular_components__utils__angular__scroll_host__interface$46template.src__utils__angular__scroll_host__scroll_host_event_impl$46template;
  const async$46template = packages__angular_components__utils__async__async$46template.utils__async__async$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const feature_detector$46template = packages__angular_components__utils__browser__feature_detector__feature_detector$46template.utils__browser__feature_detector__feature_detector$46template;
  const scroll_host_interface$46template = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface$46template.src__utils__angular__scroll_host__scroll_host_interface$46template;
  var pan_controller_impl$46template = Object.create(dart.library);
  var position_sticky_controller$46template = Object.create(dart.library);
  var scroll_host_base$46template = Object.create(dart.library);
  var sticky_controller_impl$46template = Object.create(dart.library);
  const CT = Object.create(null);
  pan_controller_impl$46template.initReflector = function initReflector() {
    if (dart.test(pan_controller_impl$46template._visited)) {
      return;
    }
    pan_controller_impl$46template._visited = true;
    angular$46template.initReflector();
    interface$46template.initReflector();
    async$46template.initReflector();
    dom_service$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(pan_controller_impl$46template, {
    /*pan_controller_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  position_sticky_controller$46template.initReflector = function initReflector$() {
    if (dart.test(position_sticky_controller$46template._visited)) {
      return;
    }
    position_sticky_controller$46template._visited = true;
    interface$46template.initReflector();
    events$46template.initReflector();
    feature_detector$46template.initReflector();
  };
  dart.defineLazy(position_sticky_controller$46template, {
    /*position_sticky_controller$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  scroll_host_base$46template.initReflector = function initReflector$0() {
    if (dart.test(scroll_host_base$46template._visited)) {
      return;
    }
    scroll_host_base$46template._visited = true;
    angular$46template.initReflector();
    gestures$46template.initReflector();
    pan_controller_impl$46template.initReflector();
    position_sticky_controller$46template.initReflector();
    scroll_host_event_impl$46template.initReflector();
    scroll_host_interface$46template.initReflector();
    sticky_controller_impl$46template.initReflector();
    async$46template.initReflector();
    dom_service$46template.initReflector();
    feature_detector$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(scroll_host_base$46template, {
    /*scroll_host_base$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  sticky_controller_impl$46template.initReflector = function initReflector$1() {
    if (dart.test(sticky_controller_impl$46template._visited)) {
      return;
    }
    sticky_controller_impl$46template._visited = true;
    interface$46template.initReflector();
    dom_service$46template.initReflector();
  };
  dart.defineLazy(sticky_controller_impl$46template, {
    /*sticky_controller_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl.template", {
    "package:angular_components/src/utils/angular/scroll_host/pan_controller_impl.template.dart": pan_controller_impl$46template,
    "package:angular_components/src/utils/angular/scroll_host/position_sticky_controller.template.dart": position_sticky_controller$46template,
    "package:angular_components/src/utils/angular/scroll_host/scroll_host_base.template.dart": scroll_host_base$46template,
    "package:angular_components/src/utils/angular/scroll_host/sticky_controller_impl.template.dart": sticky_controller_impl$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pan_controller_impl.template.dart","position_sticky_controller.template.dart","scroll_host_base.template.dart","sticky_controller_impl.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAcE,kBAAI;AACF;;AAEa,IAAf,0CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,uCAAQ;YAAG;;;;;ACAb,kBAAI;AACF;;AAEa,IAAf,iDAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,8CAAQ;YAAG;;;;;ACUb,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;EACF;;MAlBI,oCAAQ;YAAG;;;;;ACPb,kBAAI;AACF;;AAEa,IAAf,6CAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,0CAAQ;YAAG","file":"pan_controller_impl.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__utils__angular__scroll_host__pan_controller_impl$46template: pan_controller_impl$46template,
    src__utils__angular__scroll_host__position_sticky_controller$46template: position_sticky_controller$46template,
    src__utils__angular__scroll_host__scroll_host_base$46template: scroll_host_base$46template,
    src__utils__angular__scroll_host__sticky_controller_impl$46template: sticky_controller_impl$46template
  };
}));

//# sourceMappingURL=pan_controller_impl.template.unsound.ddc.js.map
