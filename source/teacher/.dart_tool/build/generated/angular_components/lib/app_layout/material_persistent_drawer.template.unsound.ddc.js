define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/app_layout/material_persistent_drawer', 'packages/angular_components/app_layout/material_drawer_base.template', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template'], (function load__packages__angular_components__app_layout__material_persistent_drawer_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_components__app_layout__material_persistent_drawer, packages__angular_components__app_layout__material_drawer_base$46template, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const material_persistent_drawer = packages__angular_components__app_layout__material_persistent_drawer.app_layout__material_persistent_drawer;
  const material_drawer_base$46template = packages__angular_components__app_layout__material_drawer_base$46template.app_layout__material_drawer_base$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  var material_persistent_drawer$46template = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/app_layout/material_persistent_drawer.template.dart";
  var _expr_0 = dart.privateName(material_persistent_drawer$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_persistent_drawer$46template, "_expr_1");
  var instance$ = dart.privateName(material_persistent_drawer$46template, "MaterialPersistentDrawerDirectiveNgCd.instance");
  material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd = class MaterialPersistentDrawerDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.hostMatDrawerCollapsed;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateClassBindingNonHtml(el, "mat-drawer-collapsed", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.instance.hostMatDrawerExpanded;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, null, null))) {
        dom_helpers.updateClassBindingNonHtml(el, "mat-drawer-expanded", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[instance$] = instance;
    ;
  }).prototype = material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.prototype;
  dart.addTypeTests(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd);
  dart.addTypeCaches(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd);
  dart.setMethodSignature(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd, () => ({
    __proto__: dart.getMethods(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(render_view.RenderView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd, L0);
  dart.setFieldSignature(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd, () => ({
    __proto__: dart.getFields(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(material_persistent_drawer.MaterialPersistentDrawerDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  material_persistent_drawer$46template.initReflector = function initReflector() {
    if (dart.test(material_persistent_drawer$46template._visited)) {
      return;
    }
    material_persistent_drawer$46template._visited = true;
    material_drawer_base$46template.initReflector();
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
  };
  dart.defineLazy(material_persistent_drawer$46template, {
    /*material_persistent_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/app_layout/material_persistent_drawer.template", {
    "package:angular_components/app_layout/material_persistent_drawer.template.dart": material_persistent_drawer$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_persistent_drawer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAiBkD;;;;;;sBAIN,MAAsB;AACxD,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACkB,QAAxE,sCAAkC,EAAE,EAAE,wBAAwB,SAAS;AAC/C,QAAnB,gBAAU,SAAS;;AAEpB,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACiB,QAAvE,sCAAkC,EAAE,EAAE,uBAAuB,SAAS;AAC9C,QAAnB,gBAAU,SAAS;;IAE5B;;8FAZ2C;IAFvC;IACA;IACuC;;EAAS;;;;;;;;;;;;;;;AAiBpD,kBAAI;AACF;;AAEa,IAAf,iDAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,8CAAQ;YAAG","file":"material_persistent_drawer.template.unsound.ddc.js"}');
  // Exports:
  return {
    app_layout__material_persistent_drawer$46template: material_persistent_drawer$46template
  };
}));

//# sourceMappingURL=material_persistent_drawer.template.unsound.ddc.js.map
