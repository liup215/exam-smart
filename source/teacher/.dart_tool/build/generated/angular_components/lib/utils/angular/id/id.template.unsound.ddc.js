define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/utils/angular/id/id', 'packages/angular/angular.template', 'packages/angular_components/utils/id_generator/id_generator.template'], (function load__packages__angular_components__utils__angular__id__id_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_components__utils__angular__id__id, packages__angular__angular$46template, packages__angular_components__utils__id_generator__id_generator$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const id = packages__angular_components__utils__angular__id__id.utils__angular__id__id;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  var id$46template = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/angular/id/id.template.dart";
  var instance$ = dart.privateName(id$46template, "AutoIdDirectiveNgCd.instance");
  id$46template.AutoIdDirectiveNgCd = class AutoIdDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let firstCheck = view.firstCheck;
      if (dart.test(firstCheck)) {
        if (this.instance.id != null) {
          dom_helpers.updateAttribute(el, "id", this.instance.id);
        }
      }
    }
  };
  (id$46template.AutoIdDirectiveNgCd.new = function(instance) {
    this[instance$] = instance;
    ;
  }).prototype = id$46template.AutoIdDirectiveNgCd.prototype;
  dart.addTypeTests(id$46template.AutoIdDirectiveNgCd);
  dart.addTypeCaches(id$46template.AutoIdDirectiveNgCd);
  dart.setMethodSignature(id$46template.AutoIdDirectiveNgCd, () => ({
    __proto__: dart.getMethods(id$46template.AutoIdDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(render_view.RenderView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(id$46template.AutoIdDirectiveNgCd, L0);
  dart.setFieldSignature(id$46template.AutoIdDirectiveNgCd, () => ({
    __proto__: dart.getFields(id$46template.AutoIdDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(id.AutoIdDirective))
  }));
  id$46template.initReflector = function initReflector() {
    if (dart.test(id$46template._visited)) {
      return;
    }
    id$46template._visited = true;
    angular$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.defineLazy(id$46template, {
    /*id$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/angular/id/id.template", {
    "package:angular_components/utils/angular/id/id.template.dart": id$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["id.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAegC;;;;;;sBAEY,MAAsB;AACzD,uBAAa,AAAK,IAAD;AACtB,oBAAI,UAAU;AACZ,YAAoB,AAAS,oBAAI;AACoB,UAAnD,4BAAwB,EAAE,EAAE,MAAW,AAAS;;;IAGtD;;;IARyB;;EAAS;;;;;;;;;;;;;AAalC,kBAAI;AACF;;AAEa,IAAf,yBAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,sBAAQ;YAAG","file":"id.template.unsound.ddc.js"}');
  // Exports:
  return {
    utils__angular__id__id$46template: id$46template
  };
}));

//# sourceMappingURL=id.template.unsound.ddc.js.map
