define(['dart_sdk', 'packages/angular/src/bootstrap/modules'], (function load__packages__angular__src__common__directives__ng_for_identity(dart_sdk, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const view_container_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_container_ref;
  var ng_for_identity = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  const CT = Object.create(null);
  var L0 = "package:angular/src/common/directives/ng_for_identity.dart";
  var _template = dart.privateName(ng_for_identity, "_template");
  var _container = dart.privateName(ng_for_identity, "_container");
  const _is_NgForIdentity_default = Symbol('_is_NgForIdentity_default');
  var _template$ = dart.privateName(ng_for_identity, "NgForIdentity._template");
  var _container$ = dart.privateName(ng_for_identity, "NgForIdentity._container");
  ng_for_identity.NgForIdentity$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(TL())))();
    var IterableLOfTL = () => (IterableLOfTL = dart.constFn(dart.legacy(IterableOfTL())))();
    class NgForIdentity extends core.Object {
      get [_template]() {
        return this[_template$];
      }
      set [_template](value) {
        super[_template] = value;
      }
      get [_container]() {
        return this[_container$];
      }
      set [_container](value) {
        super[_container] = value;
      }
      set ngForIdentityOf(elements) {
        let t0;
        IterableLOfTL().as(elements);
        this[_container].clear();
        if (elements == null || dart.test(elements[$isEmpty])) {
          return;
        }
        let i = 0;
        for (let element of elements) {
          let view = this[_container].createEmbeddedView(this[_template]);
          view.setLocal("$implicit", element);
          view.setLocal("index", (t0 = i, i = t0 + 1, t0));
        }
      }
    }
    (NgForIdentity.new = function(_template, _container) {
      this[_template$] = _template;
      this[_container$] = _container;
      ;
    }).prototype = NgForIdentity.prototype;
    dart.addTypeTests(NgForIdentity);
    NgForIdentity.prototype[_is_NgForIdentity_default] = true;
    dart.addTypeCaches(NgForIdentity);
    dart.setSetterSignature(NgForIdentity, () => ({
      __proto__: dart.getSetters(NgForIdentity.__proto__),
      ngForIdentityOf: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(NgForIdentity, L0);
    dart.setFieldSignature(NgForIdentity, () => ({
      __proto__: dart.getFields(NgForIdentity.__proto__),
      [_template]: dart.finalFieldType(dart.legacy(template_ref.TemplateRef)),
      [_container]: dart.finalFieldType(dart.legacy(view_container_ref.ViewContainerRef))
    }));
    return NgForIdentity;
  });
  ng_for_identity.NgForIdentity = ng_for_identity.NgForIdentity$();
  dart.addTypeTests(ng_for_identity.NgForIdentity, _is_NgForIdentity_default);
  dart.trackLibraries("packages/angular/src/common/directives/ng_for_identity", {
    "package:angular/src/common/directives/ng_for_identity.dart": ng_for_identity
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ng_for_identity.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MAsBoB;;;;;;MACK;;;;;;0BAQS;;;AACZ,QAAlB,AAAW;AACX,YAAI,AAAS,QAAD,IAAI,kBAAQ,AAAS,QAAD;AAC9B;;AAEE,gBAAI;AACR,iBAAW,UAAW,SAAQ;AACtB,qBAAO,AAAW,oCAAmB;AACP,UAApC,AAAK,IAAD,UAAU,aAAc,OAAO;AACP,UAA5B,AAAK,IAAD,UAAU,UAAW,KAAD,CAAC;;MAG7B;;kCAjBO,WACA;MADA;MACA;;IACN","file":"ng_for_identity.unsound.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_for_identity: ng_for_identity
  };
}));

//# sourceMappingURL=ng_for_identity.unsound.ddc.js.map
