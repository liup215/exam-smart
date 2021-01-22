define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/mixins/has_tab_index.template', 'packages/angular_components/utils/browser/events/events.template'], (function load__packages__angular_components__button_decorator__button_decorator_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_components__button_decorator__button_decorator, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__mixins__has_tab_index$46template, packages__angular_components__utils__browser__events__events$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const has_tab_index$46template = packages__angular_components__mixins__has_tab_index$46template.mixins__has_tab_index$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  var button_decorator$46template = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/button_decorator/button_decorator.template.dart";
  var _expr_0 = dart.privateName(button_decorator$46template, "_expr_0");
  var _expr_1 = dart.privateName(button_decorator$46template, "_expr_1");
  var _expr_2 = dart.privateName(button_decorator$46template, "_expr_2");
  var _expr_3 = dart.privateName(button_decorator$46template, "_expr_3");
  var instance$ = dart.privateName(button_decorator$46template, "ButtonDirectiveNgCd.instance");
  button_decorator$46template.ButtonDirectiveNgCd = class ButtonDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.tabIndex;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateAttribute(el, "tabindex", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.instance.ariaRole;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateAttribute(el, "role", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.instance.disabledStr;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, null, null))) {
        dom_helpers.updateAttribute(el, "aria-disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.instance.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, null, null))) {
        dom_helpers.updateClassBindingNonHtml(el, "is-disabled", currVal_3);
        this[_expr_3] = currVal_3;
      }
    }
  };
  (button_decorator$46template.ButtonDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[instance$] = instance;
    ;
  }).prototype = button_decorator$46template.ButtonDirectiveNgCd.prototype;
  dart.addTypeTests(button_decorator$46template.ButtonDirectiveNgCd);
  dart.addTypeCaches(button_decorator$46template.ButtonDirectiveNgCd);
  dart.setMethodSignature(button_decorator$46template.ButtonDirectiveNgCd, () => ({
    __proto__: dart.getMethods(button_decorator$46template.ButtonDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(render_view.RenderView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(button_decorator$46template.ButtonDirectiveNgCd, L0);
  dart.setFieldSignature(button_decorator$46template.ButtonDirectiveNgCd, () => ({
    __proto__: dart.getFields(button_decorator$46template.ButtonDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(button_decorator.ButtonDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  button_decorator$46template.initReflector = function initReflector() {
    if (dart.test(button_decorator$46template._visited)) {
      return;
    }
    button_decorator$46template._visited = true;
    angular$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    has_tab_index$46template.initReflector();
    events$46template.initReflector();
  };
  dart.defineLazy(button_decorator$46template, {
    /*button_decorator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/button_decorator/button_decorator.template", {
    "package:angular_components/button_decorator/button_decorator.template.dart": button_decorator$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button_decorator.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAmBgC;;;;;;sBAMY,MAAsB;AACxD,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACJ,QAAlD,4BAAwB,EAAE,EAAE,YAAY,SAAS;AACzB,QAAnB,gBAAU,SAAS;;AAEpB,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACR,QAA9C,4BAAwB,EAAE,EAAE,QAAQ,SAAS;AACrB,QAAnB,gBAAU,SAAS;;AAEpB,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACC,QAAvD,4BAAwB,EAAE,EAAE,iBAAiB,SAAS;AAC9B,QAAnB,gBAAU,SAAS;;AAEpB,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACS,QAA/D,sCAAkC,EAAE,EAAE,eAAe,SAAS;AACtC,QAAnB,gBAAU,SAAS;;IAE5B;;kEAtByB;IAJrB;IACA;IACA;IACA;IACqB;;EAAS;;;;;;;;;;;;;;;;;AA2BlC,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,oCAAQ;YAAG","file":"button_decorator.template.unsound.ddc.js"}');
  // Exports:
  return {
    button_decorator__button_decorator$46template: button_decorator$46template
  };
}));

//# sourceMappingURL=button_decorator.template.unsound.ddc.js.map
