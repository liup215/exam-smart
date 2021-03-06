define(['dart_sdk', 'packages/angular_router/src/directives/router_outlet_directive.template', 'packages/angular/angular.template', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_router/src/constants', 'packages/angular/src/core/change_detection/pipe_transform.template'], (function load__packages__angular_router__angular_router_template(dart_sdk, packages__angular_router__src__directives__router_outlet_directive$46template, packages__angular__angular$46template, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_router__src__constants, packages__angular__src__core__change_detection__pipe_transform$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const router_outlet_directive$46template = packages__angular_router__src__directives__router_outlet_directive$46template.src__directives__router_outlet_directive$46template;
  const location$46template = packages__angular_router__src__directives__router_outlet_directive$46template.src__location$46template;
  const router$46template = packages__angular_router__src__directives__router_outlet_directive$46template.src__router__router$46template;
  const router_impl$46template = packages__angular_router__src__directives__router_outlet_directive$46template.src__router__router_impl$46template;
  const navigation_params$46template = packages__angular_router__src__directives__router_outlet_directive$46template.src__router__navigation_params$46template;
  const url$46template = packages__angular_router__src__directives__router_outlet_directive$46template.src__url$46template;
  const router_state$46template = packages__angular_router__src__directives__router_outlet_directive$46template.src__router__router_state$46template;
  const lifecycle$46template = packages__angular_router__src__directives__router_outlet_directive$46template.src__lifecycle$46template;
  const route_definition$46template = packages__angular_router__src__directives__router_outlet_directive$46template.src__route_definition$46template;
  const route_path$46template = packages__angular_router__src__directives__router_outlet_directive$46template.src__route_path$46template;
  const router_hook$46template = packages__angular_router__src__directives__router_outlet_directive$46template.src__router_hook$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const router_link_directive = packages__angular_router__src__constants.src__directives__router_link_directive;
  const runtime$46template = packages__angular__src__core__change_detection__pipe_transform$46template.src__runtime$46template;
  var constants$46template = Object.create(dart.library);
  var router_link_directive$46template = Object.create(dart.library);
  var router_link_active_directive$46template = Object.create(dart.library);
  var angular_router$46template = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_router/src/directives/router_link_directive.template.dart";
  constants$46template.initReflector = function initReflector() {
    if (dart.test(constants$46template._visited)) {
      return;
    }
    constants$46template._visited = true;
    router_link_active_directive$46template.initReflector();
    router_link_directive$46template.initReflector();
    router_outlet_directive$46template.initReflector();
    location$46template.initReflector();
    angular$46template.initReflector();
    router$46template.initReflector();
    router_impl$46template.initReflector();
  };
  dart.defineLazy(constants$46template, {
    /*constants$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _expr_0 = dart.privateName(router_link_directive$46template, "_expr_0");
  var instance$ = dart.privateName(router_link_directive$46template, "RouterLinkNgCd.instance");
  router_link_directive$46template.RouterLinkNgCd = class RouterLinkNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.visibleHref;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateAttribute(el, "href", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (router_link_directive$46template.RouterLinkNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    ;
  }).prototype = router_link_directive$46template.RouterLinkNgCd.prototype;
  dart.addTypeTests(router_link_directive$46template.RouterLinkNgCd);
  dart.addTypeCaches(router_link_directive$46template.RouterLinkNgCd);
  dart.setMethodSignature(router_link_directive$46template.RouterLinkNgCd, () => ({
    __proto__: dart.getMethods(router_link_directive$46template.RouterLinkNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(render_view.RenderView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(router_link_directive$46template.RouterLinkNgCd, L0);
  dart.setFieldSignature(router_link_directive$46template.RouterLinkNgCd, () => ({
    __proto__: dart.getFields(router_link_directive$46template.RouterLinkNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(router_link_directive.RouterLink)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  router_link_directive$46template.initReflector = function initReflector$() {
    if (dart.test(router_link_directive$46template._visited)) {
      return;
    }
    router_link_directive$46template._visited = true;
    location$46template.initReflector();
    navigation_params$46template.initReflector();
    router$46template.initReflector();
    url$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(router_link_directive$46template, {
    /*router_link_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  router_link_active_directive$46template.initReflector = function initReflector$0() {
    if (dart.test(router_link_active_directive$46template._visited)) {
      return;
    }
    router_link_active_directive$46template._visited = true;
    router$46template.initReflector();
    router_state$46template.initReflector();
    angular$46template.initReflector();
    runtime$46template.initReflector();
    router_link_directive$46template.initReflector();
  };
  dart.defineLazy(router_link_active_directive$46template, {
    /*router_link_active_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  angular_router$46template.initReflector = function initReflector$1() {
    if (dart.test(angular_router$46template._visited)) {
      return;
    }
    angular_router$46template._visited = true;
    constants$46template.initReflector();
    router_link_active_directive$46template.initReflector();
    router_link_directive$46template.initReflector();
    router_outlet_directive$46template.initReflector();
    lifecycle$46template.initReflector();
    location$46template.initReflector();
    route_definition$46template.initReflector();
    route_path$46template.initReflector();
    navigation_params$46template.initReflector();
    router$46template.initReflector();
    router_state$46template.initReflector();
    router_hook$46template.initReflector();
  };
  dart.defineLazy(angular_router$46template, {
    /*angular_router$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_router/angular_router.template", {
    "package:angular_router/src/constants.template.dart": constants$46template,
    "package:angular_router/src/directives/router_link_directive.template.dart": router_link_directive$46template,
    "package:angular_router/src/directives/router_link_active_directive.template.dart": router_link_active_directive$46template,
    "package:angular_router/angular_router.template.dart": angular_router$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/constants.template.dart","src/directives/router_link_directive.template.dart","src/directives/router_link_active_directive.template.dart","angular_router.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgBE,kBAAI;AACF;;AAEa,IAAf,gCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAdI,6BAAQ;YAAG;;;;;;;ICKY;;;;;;sBAGiB,MAAsB;AACxD,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACR,QAA9C,4BAAwB,EAAE,EAAE,QAAQ,SAAS;AACrB,QAAnB,gBAAU,SAAS;;IAE5B;;kEAPoB;IADhB;IACgB;;EAAS;;;;;;;;;;;;;;AAY7B,kBAAI;AACF;;AAEa,IAAf,4CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,yCAAQ;YAAG;;;;;ACjBb,kBAAI;AACF;;AAEa,IAAf,mDAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,gDAAQ;YAAG;;;;;ACSb,kBAAI;AACF;;AAEa,IAAf,qCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;AACsB,IAAtB;EACF;;MAnBI,kCAAQ;YAAG","file":"angular_router.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__constants$46template: constants$46template,
    src__directives__router_link_directive$46template: router_link_directive$46template,
    src__directives__router_link_active_directive$46template: router_link_active_directive$46template,
    angular_router$46template: angular_router$46template
  };
}));

//# sourceMappingURL=angular_router.template.unsound.ddc.js.map
