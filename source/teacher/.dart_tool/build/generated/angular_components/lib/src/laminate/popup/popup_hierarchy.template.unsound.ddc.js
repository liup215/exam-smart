define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/src/laminate/popup/dom_popup_source.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/laminate/overlay/constants.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/angular/reference/reference.template'], (function load__packages__angular_components__src__laminate__popup__popup_hierarchy_template(dart_sdk, packages__angular__angular$46template, packages__angular_components__src__laminate__popup__dom_popup_source$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__laminate__overlay__constants$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__focus__focus_interface$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__utils__angular__reference__reference$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const popup_source$46template = packages__angular_components__src__laminate__popup__dom_popup_source$46template.src__laminate__popup__popup_source$46template;
  const dom_popup_source$46template = packages__angular_components__src__laminate__popup__dom_popup_source$46template.src__laminate__popup__dom_popup_source$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const constants$46template = packages__angular_components__laminate__overlay__constants$46template.laminate__overlay__constants$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const focus_interface$46template = packages__angular_components__focus__focus_interface$46template.focus__focus_interface$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const reference$46template = packages__angular_components__utils__angular__reference__reference$46template.utils__angular__reference__reference$46template;
  var popup_interface$46template = Object.create(dart.library);
  var popup_state$46template = Object.create(dart.library);
  var popup_size_provider_directive$46template = Object.create(dart.library);
  var popup_size_provider$46template = Object.create(dart.library);
  var popup_hierarchy$46template = Object.create(dart.library);
  var popup_ref$46template = Object.create(dart.library);
  var popup_source_directive$46template = Object.create(dart.library);
  var popup_position_mixin$46template = Object.create(dart.library);
  var PopupHierarchyL = () => (PopupHierarchyL = dart.constFn(dart.legacy(popup_hierarchy.PopupHierarchy)))();
  var VoidToPopupHierarchyL = () => (VoidToPopupHierarchyL = dart.constFn(dart.fnType(PopupHierarchyL(), [])))();
  const CT = Object.create(null);
  popup_interface$46template.initReflector = function initReflector() {
    if (dart.test(popup_interface$46template._visited)) {
      return;
    }
    popup_interface$46template._visited = true;
    angular$46template.initReflector();
    popup_source$46template.initReflector();
    popup_state$46template.initReflector();
  };
  dart.defineLazy(popup_interface$46template, {
    /*popup_interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  popup_state$46template.initReflector = function initReflector$() {
    if (dart.test(popup_state$46template._visited)) {
      return;
    }
    popup_state$46template._visited = true;
    alignment$46template.initReflector();
    popup_source$46template.initReflector();
  };
  dart.defineLazy(popup_state$46template, {
    /*popup_state$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  popup_size_provider_directive$46template.initReflector = function initReflector$0() {
    if (dart.test(popup_size_provider_directive$46template._visited)) {
      return;
    }
    popup_size_provider_directive$46template._visited = true;
    angular$46template.initReflector();
    popup_size_provider$46template.initReflector();
  };
  dart.defineLazy(popup_size_provider_directive$46template, {
    /*popup_size_provider_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  popup_size_provider$46template.initReflector = function initReflector$1() {
  };
  popup_hierarchy$46template.initReflector = function initReflector$2() {
    if (dart.test(popup_hierarchy$46template._visited)) {
      return;
    }
    popup_hierarchy$46template._visited = true;
    reflector.registerFactory(dart.wrapType(PopupHierarchyL()), dart.fn(() => new popup_hierarchy.PopupHierarchy.new(), VoidToPopupHierarchyL()));
    angular$46template.initReflector();
    constants$46template.initReflector();
    events$46template.initReflector();
  };
  dart.defineLazy(popup_hierarchy$46template, {
    /*popup_hierarchy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  popup_ref$46template.initReflector = function initReflector$3() {
  };
  popup_source_directive$46template.initReflector = function initReflector$4() {
    if (dart.test(popup_source_directive$46template._visited)) {
      return;
    }
    popup_source_directive$46template._visited = true;
    angular$46template.initReflector();
    focus_interface$46template.initReflector();
    alignment$46template.initReflector();
    dom_popup_source$46template.initReflector();
    popup_source$46template.initReflector();
    properties$46template.initReflector();
    reference$46template.initReflector();
  };
  dart.defineLazy(popup_source_directive$46template, {
    /*popup_source_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  popup_position_mixin$46template.initReflector = function initReflector$5() {
    if (dart.test(popup_position_mixin$46template._visited)) {
      return;
    }
    popup_position_mixin$46template._visited = true;
    angular$46template.initReflector();
    alignment$46template.initReflector();
    popup_size_provider$46template.initReflector();
  };
  dart.defineLazy(popup_position_mixin$46template, {
    /*popup_position_mixin$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_hierarchy.template", {
    "package:angular_components/src/laminate/popup/popup_interface.template.dart": popup_interface$46template,
    "package:angular_components/src/laminate/popup/popup_state.template.dart": popup_state$46template,
    "package:angular_components/src/laminate/popup/popup_size_provider_directive.template.dart": popup_size_provider_directive$46template,
    "package:angular_components/src/laminate/popup/popup_size_provider.template.dart": popup_size_provider$46template,
    "package:angular_components/src/laminate/popup/popup_hierarchy.template.dart": popup_hierarchy$46template,
    "package:angular_components/src/laminate/popup/popup_ref.template.dart": popup_ref$46template,
    "package:angular_components/src/laminate/popup/popup_source_directive.template.dart": popup_source_directive$46template,
    "package:angular_components/src/laminate/popup/popup_position_mixin.template.dart": popup_position_mixin$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["popup_interface.template.dart","popup_state.template.dart","popup_size_provider_directive.template.dart","popup_size_provider.template.dart","popup_hierarchy.template.dart","popup_ref.template.dart","popup_source_directive.template.dart","popup_position_mixin.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,mCAAQ;YAAG;;;;;ACCb,kBAAI;AACF;;AAEa,IAAf,kCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,+BAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,oDAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,iDAAQ;YAAG;;;;;ECDO;;ACKpB,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEmD,IAA9D,0BAAuB,kCAAgB,cAAM;AACxB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,mCAAQ;YAAG;;;;;ECHO;;ACQpB,kBAAI;AACF;;AAEa,IAAf,6CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAdI,0CAAQ;YAAG;;;;;ACFb,kBAAI;AACF;;AAEa,IAAf,2CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,wCAAQ;YAAG","file":"popup_hierarchy.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_interface$46template: popup_interface$46template,
    src__laminate__popup__popup_state$46template: popup_state$46template,
    src__laminate__popup__popup_size_provider_directive$46template: popup_size_provider_directive$46template,
    src__laminate__popup__popup_size_provider$46template: popup_size_provider$46template,
    src__laminate__popup__popup_hierarchy$46template: popup_hierarchy$46template,
    src__laminate__popup__popup_ref$46template: popup_ref$46template,
    src__laminate__popup__popup_source_directive$46template: popup_source_directive$46template,
    src__laminate__popup__popup_position_mixin$46template: popup_position_mixin$46template
  };
}));

//# sourceMappingURL=popup_hierarchy.template.unsound.ddc.js.map
