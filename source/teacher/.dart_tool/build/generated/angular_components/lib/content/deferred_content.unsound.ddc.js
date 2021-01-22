define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/bootstrap/modules'], (function load__packages__angular_components__content__deferred_content(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const view_container_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_container_ref;
  const view_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_ref;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  var deferred_content = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $remove = dartx.remove;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $width = dartx.width;
  var $height = dartx.height;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var NodeL = () => (NodeL = dart.constFn(dart.legacy(html.Node)))();
  var JSArrayOfNodeL = () => (JSArrayOfNodeL = dart.constFn(_interceptors.JSArray$(NodeL())))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/content/deferred_content.dart";
  var _disposer = dart.privateName(deferred_content, "_disposer");
  var _placeholder = dart.privateName(deferred_content, "_placeholder");
  var _viewRef = dart.privateName(deferred_content, "_viewRef");
  var _shown = dart.privateName(deferred_content, "_shown");
  var _visible = dart.privateName(deferred_content, "_visible");
  var _forceContent = dart.privateName(deferred_content, "_forceContent");
  var _viewContainer$ = dart.privateName(deferred_content, "_viewContainer");
  var _template$ = dart.privateName(deferred_content, "_template");
  var _setVisible = dart.privateName(deferred_content, "_setVisible");
  var preserveDimensions = dart.privateName(deferred_content, "DeferredContentDirective.preserveDimensions");
  deferred_content.DeferredContentDirective = class DeferredContentDirective extends core.Object {
    get preserveDimensions() {
      return this[preserveDimensions];
    }
    set preserveDimensions(value) {
      this[preserveDimensions] = value;
    }
    set deferredContentForceContent(value) {
      this[_forceContent] = value;
      this[_setVisible]();
    }
    [_setVisible]() {
      let t0, t0$, t0$0, t0$1, t0$2;
      let value = dart.test(this[_visible]) || dart.test(this[_forceContent]);
      if (value[$_equals](this[_shown])) return;
      if (value) {
        if (dart.test(this.preserveDimensions)) {
          this[_placeholder][$remove]();
        }
        this[_viewRef] = this[_viewContainer$].createEmbeddedView(this[_template$]);
      } else {
        if (dart.test(this.preserveDimensions)) {
          let rootNodes = (t0$ = (t0 = this[_viewRef], t0 == null ? null : t0.rootNodes), t0$ == null ? JSArrayOfNodeL().of([]) : t0$);
          let content = dart.test(rootNodes[$isNotEmpty]) ? rootNodes[$first] : null;
          if (HtmlElementL().is(content)) {
            let dimensions = content.getBoundingClientRect();
            t0$0 = this[_placeholder].style;
            (() => {
              t0$0[$width] = dart.str(dimensions[$width]) + "px";
              t0$0[$height] = dart.str(dimensions[$height]) + "px";
              return t0$0;
            })();
          }
        }
        this[_viewContainer$].clear();
        if (dart.test(this.preserveDimensions)) {
          let container = (t0$1 = this[_viewContainer$].element, t0$1 == null ? null : t0$1.nativeElement);
          if ((t0$2 = container, t0$2 == null ? null : dart.dload(t0$2, 'parentNode')) != null) {
            dart.dsend(dart.dload(container, 'parentNode'), 'insertBefore', [this[_placeholder], container]);
          }
        }
      }
      this[_shown] = value;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
      this[_viewContainer$] = null;
      this[_template$] = null;
    }
  };
  (deferred_content.DeferredContentDirective.new = function(_viewContainer, _template, parent, changeDetector) {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_placeholder] = html.DivElement.new();
    this[_viewRef] = null;
    this[preserveDimensions] = false;
    this[_shown] = false;
    this[_visible] = false;
    this[_forceContent] = false;
    this[_viewContainer$] = _viewContainer;
    this[_template$] = _template;
    this[_disposer].addStreamSubscription(boolL(), parent.contentVisible.listen(dart.fn(value => {
      this[_visible] = value;
      this[_setVisible]();
      changeDetector.markForCheck();
    }, boolLToNull())));
  }).prototype = deferred_content.DeferredContentDirective.prototype;
  dart.addTypeTests(deferred_content.DeferredContentDirective);
  dart.addTypeCaches(deferred_content.DeferredContentDirective);
  deferred_content.DeferredContentDirective[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(deferred_content.DeferredContentDirective, () => ({
    __proto__: dart.getMethods(deferred_content.DeferredContentDirective.__proto__),
    [_setVisible]: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(deferred_content.DeferredContentDirective, () => ({
    __proto__: dart.getSetters(deferred_content.DeferredContentDirective.__proto__),
    deferredContentForceContent: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(deferred_content.DeferredContentDirective, L0);
  dart.setFieldSignature(deferred_content.DeferredContentDirective, () => ({
    __proto__: dart.getFields(deferred_content.DeferredContentDirective.__proto__),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_placeholder]: dart.finalFieldType(dart.legacy(html.DivElement)),
    [_viewContainer$]: dart.fieldType(dart.legacy(view_container_ref.ViewContainerRef)),
    [_viewRef]: dart.fieldType(dart.legacy(view_ref.EmbeddedViewRef)),
    [_template$]: dart.fieldType(dart.legacy(template_ref.TemplateRef)),
    preserveDimensions: dart.fieldType(dart.legacy(core.bool)),
    [_shown]: dart.fieldType(dart.legacy(core.bool)),
    [_visible]: dart.fieldType(dart.legacy(core.bool)),
    [_forceContent]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _view = dart.privateName(deferred_content, "_view");
  deferred_content.CachingDeferredContentDirective = class CachingDeferredContentDirective extends core.Object {
    [_setVisible](value) {
      if (dart.equals(value, this[_visible])) return;
      if (dart.test(value) && this[_view] == null) {
        this[_view] = this[_viewContainer$].createEmbeddedView(this[_template$]);
      }
      this[_visible] = value;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
      this[_viewContainer$] = null;
      this[_template$] = null;
    }
  };
  (deferred_content.CachingDeferredContentDirective.new = function(_viewContainer, _template, parent, changeDetector) {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_view] = null;
    this[_visible] = false;
    this[_viewContainer$] = _viewContainer;
    this[_template$] = _template;
    this[_disposer].addStreamSubscription(boolL(), parent.contentVisible.listen(dart.fn(value => {
      this[_setVisible](value);
      changeDetector.markForCheck();
    }, boolLToNull())));
  }).prototype = deferred_content.CachingDeferredContentDirective.prototype;
  dart.addTypeTests(deferred_content.CachingDeferredContentDirective);
  dart.addTypeCaches(deferred_content.CachingDeferredContentDirective);
  deferred_content.CachingDeferredContentDirective[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(deferred_content.CachingDeferredContentDirective, () => ({
    __proto__: dart.getMethods(deferred_content.CachingDeferredContentDirective.__proto__),
    [_setVisible]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(deferred_content.CachingDeferredContentDirective, L0);
  dart.setFieldSignature(deferred_content.CachingDeferredContentDirective, () => ({
    __proto__: dart.getFields(deferred_content.CachingDeferredContentDirective.__proto__),
    [_viewContainer$]: dart.fieldType(dart.legacy(view_container_ref.ViewContainerRef)),
    [_template$]: dart.fieldType(dart.legacy(template_ref.TemplateRef)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_view]: dart.fieldType(dart.legacy(view_ref.ViewRef)),
    [_visible]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/content/deferred_content", {
    "package:angular_components/content/deferred_content.dart": deferred_content
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["deferred_content.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoCO;;;;;;oCAOgC;AACd,MAArB,sBAAgB,KAAK;AACR,MAAb;IACF;;;AAQO,kBAAiB,UAAT,6BAAY;AACzB,UAAI,AAAM,KAAD,WAAI,eAAQ;AACrB,UAAI,KAAK;AACP,sBAAI;AAEmB,UAArB,AAAa;;AAEwC,QAAvD,iBAAW,AAAe,yCAAmB;;AAE7C,sBAAI;AAEE,2BAAgC,yCAApB,OAAU,sBAAV,OAAuB;AACnC,kCAAU,AAAU,SAAD,iBAAc,AAAU,SAAD,WAAS;AACvD,cAAY,kBAAR,OAAO;AAGL,6BAAa,AAAQ,OAAD;AAGa,mBAFrC,AAAa;YAAA;AACT,6BACF,SADa,AAAW,UAAD,YAAO;AAC5B,8BAAiC,SAArB,AAAW,UAAD,aAAQ;;;;;AAKhB,QAAtB,AAAe;AAEf,sBAAI;AAEE,kCAAY,AAAe,8CAAA,OAAS;AACxC,sBAAI,SAAS,iBAAT,OAAW,mCAAc;AAC+B,YAArC,WAAX,WAAV,SAAS,kCAAyB,oBAAc,SAAS;;;;AAIjD,MAAd,eAAS,KAAK;IAChB;;AAiBqB,MAAnB,AAAU;AACW,MAArB,wBAAiB;AACD,MAAhB,mBAAY;IACd;;4DAjBO,gBACA,WACgB,QACH;IAzEd,kBAAqB;IACrB,qBAAe;IAGL;IAUX,2BAAqB;IAarB,eAAS;IACT,iBAAW;IACX,sBAAgB;IAyCd;IACA;AAQF,IAJH,AAAU,+CAAsB,AAAO,AAAe,MAAhB,uBAAuB,QAAC;AAC5C,MAAhB,iBAAW,KAAK;AACH,MAAb;AAC6B,MAA7B,AAAe,cAAD;;EAElB;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBA4BsB;AACpB,UAAU,YAAN,KAAK,EAAI,iBAAU;AACvB,oBAAI,KAAK,KAAI,AAAM,eAAG;AACgC,QAApD,cAAQ,AAAe,yCAAmB;;AAE5B,MAAhB,iBAAW,KAAK;IAClB;;AAgBqB,MAAnB,AAAU;AACW,MAArB,wBAAiB;AACD,MAAhB,mBAAY;IACd;;mEAhBO,gBACA,WACgB,QACH;IAlBd,kBAAqB;IACnB;IAGH,iBAAW;IAWT;IACA;AAOF,IAHH,AAAU,+CAAsB,AAAO,AAAe,MAAhB,uBAAuB,QAAC;AAC1C,MAAlB,kBAAY,KAAK;AACY,MAA7B,AAAe,cAAD;;EAElB","file":"deferred_content.unsound.ddc.js"}');
  // Exports:
  return {
    content__deferred_content: deferred_content
  };
}));

//# sourceMappingURL=deferred_content.unsound.ddc.js.map
