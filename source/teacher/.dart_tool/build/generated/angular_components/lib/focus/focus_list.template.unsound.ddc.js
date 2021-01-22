define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/focus/focus_list', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__focus__focus_list_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_components__focus__focus_list, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const focus_list = packages__angular_components__focus__focus_list.focus__focus_list;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var focus_list$46template = Object.create(dart.library);
  var $toString = dartx.toString;
  const CT = Object.create(null);
  var L0 = "package:angular_components/focus/focus_list.template.dart";
  var instance$ = dart.privateName(focus_list$46template, "FocusListDirectiveNgCd.instance");
  focus_list$46template.FocusListDirectiveNgCd = class FocusListDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let t0;
      let firstCheck = view.firstCheck;
      if (dart.test(firstCheck)) {
        if (this.instance.role != null) {
          dom_helpers.updateAttribute(el, "role", this.instance.role);
        }
        if (this.instance.ignoreUpAndDown != null) {
          dom_helpers.updateAttribute(el, "ignoreUpAndDown", (t0 = this.instance.ignoreUpAndDown, t0 == null ? null : dart.toString(t0)));
        }
      }
    }
  };
  (focus_list$46template.FocusListDirectiveNgCd.new = function(instance) {
    this[instance$] = instance;
    ;
  }).prototype = focus_list$46template.FocusListDirectiveNgCd.prototype;
  dart.addTypeTests(focus_list$46template.FocusListDirectiveNgCd);
  dart.addTypeCaches(focus_list$46template.FocusListDirectiveNgCd);
  dart.setMethodSignature(focus_list$46template.FocusListDirectiveNgCd, () => ({
    __proto__: dart.getMethods(focus_list$46template.FocusListDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(render_view.RenderView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(focus_list$46template.FocusListDirectiveNgCd, L0);
  dart.setFieldSignature(focus_list$46template.FocusListDirectiveNgCd, () => ({
    __proto__: dart.getFields(focus_list$46template.FocusListDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(focus_list.FocusListDirective))
  }));
  focus_list$46template.initReflector = function initReflector() {
    if (dart.test(focus_list$46template._visited)) {
      return;
    }
    focus_list$46template._visited = true;
    angular$46template.initReflector();
    focus$46template.initReflector();
    properties$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(focus_list$46template, {
    /*focus_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/focus/focus_list.template", {
    "package:angular_components/focus/focus_list.template.dart": focus_list$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAiBmC;;;;;;sBAES,MAAsB;;AACzD,uBAAa,AAAK,IAAD;AACtB,oBAAI,UAAU;AACZ,YAAoB,AAAS,sBAAM;AACsB,UAAvD,4BAAwB,EAAE,EAAE,QAAa,AAAS;;AAEpD,YAAoB,AAAS,iCAAiB;AAC6C,UAAzF,4BAAwB,EAAE,EAAE,yBAAwB,AAAS,4CAAA,OAAiB;;;IAGpF;;;IAX4B;;EAAS;;;;;;;;;;;;;AAgBrC,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,8BAAQ;YAAG","file":"focus_list.template.unsound.ddc.js"}');
  // Exports:
  return {
    focus__focus_list$46template: focus_list$46template
  };
}));

//# sourceMappingURL=focus_list.template.unsound.ddc.js.map
