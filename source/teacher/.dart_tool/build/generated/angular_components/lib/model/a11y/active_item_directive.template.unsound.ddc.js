define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/model/a11y/active_item_directive', 'packages/angular/angular.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], (function load__packages__angular_components__model__a11y__active_item_directive_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_components__model__a11y__active_item_directive, packages__angular__angular$46template, packages__angular_components__laminate__components__modal__modal$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const active_item_directive = packages__angular_components__model__a11y__active_item_directive.model__a11y__active_item_directive;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const modal$46template = packages__angular_components__laminate__components__modal__modal$46template.laminate__components__modal__modal$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  var active_item_directive$46template = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/a11y/active_item_directive.template.dart";
  var _expr_0 = dart.privateName(active_item_directive$46template, "_expr_0");
  var instance$ = dart.privateName(active_item_directive$46template, "ActiveItemDirectiveNgCd.instance");
  active_item_directive$46template.ActiveItemDirectiveNgCd = class ActiveItemDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.active;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateClassBindingNonHtml(el, "active", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (active_item_directive$46template.ActiveItemDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    ;
  }).prototype = active_item_directive$46template.ActiveItemDirectiveNgCd.prototype;
  dart.addTypeTests(active_item_directive$46template.ActiveItemDirectiveNgCd);
  dart.addTypeCaches(active_item_directive$46template.ActiveItemDirectiveNgCd);
  dart.setMethodSignature(active_item_directive$46template.ActiveItemDirectiveNgCd, () => ({
    __proto__: dart.getMethods(active_item_directive$46template.ActiveItemDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(render_view.RenderView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(active_item_directive$46template.ActiveItemDirectiveNgCd, L0);
  dart.setFieldSignature(active_item_directive$46template.ActiveItemDirectiveNgCd, () => ({
    __proto__: dart.getFields(active_item_directive$46template.ActiveItemDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(active_item_directive.ActiveItemDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  active_item_directive$46template.initReflector = function initReflector() {
    if (dart.test(active_item_directive$46template._visited)) {
      return;
    }
    active_item_directive$46template._visited = true;
    angular$46template.initReflector();
    modal$46template.initReflector();
    popup$46template.initReflector();
    dom_service$46template.initReflector();
  };
  dart.defineLazy(active_item_directive$46template, {
    /*active_item_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/model/a11y/active_item_directive.template", {
    "package:angular_components/model/a11y/active_item_directive.template.dart": active_item_directive$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["active_item_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAkBoC;;;;;;sBAGQ,MAAsB;AACxD,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACI,QAA1D,sCAAkC,EAAE,EAAE,UAAU,SAAS;AACjC,QAAnB,gBAAU,SAAS;;IAE5B;;2EAP6B;IADzB;IACyB;;EAAS;;;;;;;;;;;;;;AAYtC,kBAAI;AACF;;AAEa,IAAf,4CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,yCAAQ;YAAG","file":"active_item_directive.template.unsound.ddc.js"}');
  // Exports:
  return {
    model__a11y__active_item_directive$46template: active_item_directive$46template
  };
}));

//# sourceMappingURL=active_item_directive.template.unsound.ddc.js.map
