define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/focus/focus_item', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template'], (function load__packages__angular_components__focus__focus_item_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_components__focus__focus_item, packages__angular__angular$46template, packages__angular_components__focus__focus$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const focus_item = packages__angular_components__focus__focus_item.focus__focus_item;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  var focus_item$46template = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/focus/focus_item.template.dart";
  var _expr_1 = dart.privateName(focus_item$46template, "_expr_1");
  var instance$ = dart.privateName(focus_item$46template, "FocusItemDirectiveNgCd.instance");
  focus_item$46template.FocusItemDirectiveNgCd = class FocusItemDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let firstCheck = view.firstCheck;
      if (dart.test(firstCheck)) {
        if (this.instance.role != null) {
          dom_helpers.updateAttribute(el, "role", this.instance.role);
        }
      }
      let currVal_1 = this.instance.tabIndex;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateAttribute(el, "tabindex", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (focus_item$46template.FocusItemDirectiveNgCd.new = function(instance) {
    this[_expr_1] = null;
    this[instance$] = instance;
    ;
  }).prototype = focus_item$46template.FocusItemDirectiveNgCd.prototype;
  dart.addTypeTests(focus_item$46template.FocusItemDirectiveNgCd);
  dart.addTypeCaches(focus_item$46template.FocusItemDirectiveNgCd);
  dart.setMethodSignature(focus_item$46template.FocusItemDirectiveNgCd, () => ({
    __proto__: dart.getMethods(focus_item$46template.FocusItemDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(render_view.RenderView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(focus_item$46template.FocusItemDirectiveNgCd, L0);
  dart.setFieldSignature(focus_item$46template.FocusItemDirectiveNgCd, () => ({
    __proto__: dart.getFields(focus_item$46template.FocusItemDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(focus_item.FocusItemDirective)),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  focus_item$46template.initReflector = function initReflector() {
    if (dart.test(focus_item$46template._visited)) {
      return;
    }
    focus_item$46template._visited = true;
    angular$46template.initReflector();
    focus$46template.initReflector();
  };
  dart.defineLazy(focus_item$46template, {
    /*focus_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/focus/focus_item.template", {
    "package:angular_components/focus/focus_item.template.dart": focus_item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_item.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAgBmC;;;;;;sBAGS,MAAsB;AACzD,uBAAa,AAAK,IAAD;AACtB,oBAAI,UAAU;AACZ,YAAoB,AAAS,sBAAM;AACsB,UAAvD,4BAAwB,EAAE,EAAE,QAAa,AAAS;;;AAGhD,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACJ,QAAlD,4BAAwB,EAAE,EAAE,YAAY,SAAS;AACzB,QAAnB,gBAAU,SAAS;;IAE5B;;+DAb4B;IADxB;IACwB;;EAAS;;;;;;;;;;;;;;AAkBrC,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,8BAAQ;YAAG","file":"focus_item.template.unsound.ddc.js"}');
  // Exports:
  return {
    focus__focus_item$46template: focus_item$46template
  };
}));

//# sourceMappingURL=focus_item.template.unsound.ddc.js.map
