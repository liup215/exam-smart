define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/src/material_datepicker/sequential', 'packages/angular/src/core/application_tokens', 'packages/intl/intl'], (function load__packages__angular_components__material_datepicker__next_prev_buttons(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__src__material_datepicker__sequential, packages__angular__src__core__application_tokens, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const sequential = packages__angular_components__src__material_datepicker__sequential.src__material_datepicker__sequential;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const intl = packages__intl__intl.intl;
  var next_prev_buttons = Object.create(dart.library);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/next_prev_buttons.dart";
  var _modelListeners = dart.privateName(next_prev_buttons, "_modelListeners");
  var _model = dart.privateName(next_prev_buttons, "_model");
  var _hasNext = dart.privateName(next_prev_buttons, "_hasNext");
  var _hasPrev = dart.privateName(next_prev_buttons, "_hasPrev");
  var _changeDetector$ = dart.privateName(next_prev_buttons, "_changeDetector");
  var nextLabel = dart.privateName(next_prev_buttons, "NextPrevComponent.nextLabel");
  var prevLabel = dart.privateName(next_prev_buttons, "NextPrevComponent.prevLabel");
  var disabled = dart.privateName(next_prev_buttons, "NextPrevComponent.disabled");
  next_prev_buttons.NextPrevComponent = class NextPrevComponent extends core.Object {
    get nextLabel() {
      return this[nextLabel];
    }
    set nextLabel(value) {
      this[nextLabel] = value;
    }
    get prevLabel() {
      return this[prevLabel];
    }
    set prevLabel(value) {
      this[prevLabel] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    stopPropagation(e) {
      return e.stopPropagation();
    }
    set model(newModel) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      this[_modelListeners].dispose();
      this[_model] = newModel;
      this[_hasNext] = (t0$0 = (t0$ = (t0 = newModel, t0 == null ? null : t0.hasNext), t0$ == null ? null : t0$.value), t0$0 == null ? false : t0$0);
      this[_hasPrev] = (t0$3 = (t0$2 = (t0$1 = newModel, t0$1 == null ? null : t0$1.hasPrev), t0$2 == null ? null : t0$2.value), t0$3 == null ? false : t0$3);
      if (newModel != null) {
        t0$4 = this[_modelListeners];
        (() => {
          t0$4.addStreamSubscription(boolL(), newModel.hasNext.stream.listen(dart.fn(newValue => {
            this[_hasNext] = newValue;
            this[_changeDetector$].markForCheck();
          }, boolLToNull())));
          t0$4.addStreamSubscription(boolL(), newModel.hasPrev.stream.listen(dart.fn(newValue => {
            this[_hasPrev] = newValue;
            this[_changeDetector$].markForCheck();
          }, boolLToNull())));
          return t0$4;
        })();
      }
    }
    get hasNext() {
      return this[_hasNext];
    }
    get hasPrev() {
      return this[_hasPrev];
    }
    next() {
      if (!dart.test(this.isNextDisabled)) this[_model].next();
    }
    prev() {
      if (!dart.test(this.isPrevDisabled)) this[_model].prev();
    }
    get isPrevDisabled() {
      return dart.test(this.disabled) || !dart.test(this.hasPrev);
    }
    get isNextDisabled() {
      return dart.test(this.disabled) || !dart.test(this.hasNext);
    }
    ngOnDestroy() {
      this[_modelListeners].dispose();
    }
  };
  (next_prev_buttons.NextPrevComponent.new = function(_changeDetector) {
    this[_modelListeners] = new disposer.Disposer.multi();
    this[_model] = null;
    this[_hasNext] = false;
    this[_hasPrev] = false;
    this[nextLabel] = next_prev_buttons.NextPrevComponent._genericNextMsg;
    this[prevLabel] = next_prev_buttons.NextPrevComponent._genericPrevMsg;
    this[disabled] = false;
    this[_changeDetector$] = _changeDetector;
    ;
  }).prototype = next_prev_buttons.NextPrevComponent.prototype;
  dart.addTypeTests(next_prev_buttons.NextPrevComponent);
  dart.addTypeCaches(next_prev_buttons.NextPrevComponent);
  next_prev_buttons.NextPrevComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(next_prev_buttons.NextPrevComponent, () => ({
    __proto__: dart.getMethods(next_prev_buttons.NextPrevComponent.__proto__),
    stopPropagation: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    next: dart.fnType(dart.void, []),
    prev: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(next_prev_buttons.NextPrevComponent, () => ({
    __proto__: dart.getGetters(next_prev_buttons.NextPrevComponent.__proto__),
    hasNext: dart.legacy(core.bool),
    hasPrev: dart.legacy(core.bool),
    isPrevDisabled: dart.legacy(core.bool),
    isNextDisabled: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(next_prev_buttons.NextPrevComponent, () => ({
    __proto__: dart.getSetters(next_prev_buttons.NextPrevComponent.__proto__),
    model: dart.legacy(sequential.Sequential)
  }));
  dart.setLibraryUri(next_prev_buttons.NextPrevComponent, L0);
  dart.setFieldSignature(next_prev_buttons.NextPrevComponent, () => ({
    __proto__: dart.getFields(next_prev_buttons.NextPrevComponent.__proto__),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_modelListeners]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_model]: dart.fieldType(dart.legacy(sequential.Sequential)),
    [_hasNext]: dart.fieldType(dart.legacy(core.bool)),
    [_hasPrev]: dart.fieldType(dart.legacy(core.bool)),
    nextLabel: dart.fieldType(dart.legacy(core.String)),
    prevLabel: dart.fieldType(dart.legacy(core.String)),
    disabled: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(next_prev_buttons.NextPrevComponent, {
    /*next_prev_buttons.NextPrevComponent._genericNextMsg*/get _genericNextMsg() {
      return intl.Intl.message("Next", {name: "_genericNextMsg", meaning: "For a button which moves to the next item", desc: "Label for a button to move to the next item of some series."});
    },
    /*next_prev_buttons.NextPrevComponent._genericPrevMsg*/get _genericPrevMsg() {
      return intl.Intl.message("Previous", {name: "_genericPrevMsg", meaning: "For a button which moves to the previous item", desc: "Label for a button to move to the previous item of some series."});
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/next_prev_buttons", {
    "package:angular_components/material_datepicker/next_prev_buttons.dart": next_prev_buttons
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["next_prev_buttons.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAwFS;;;;;;IAKA;;;;;;IAeF;;;;;;oBA9CsB;AAAM,YAAA,AAAE,EAAD;IAAkB;cAI/B;;AACM,MAAzB,AAAgB;AACC,MAAjB,eAAS,QAAQ;AAC2B,MAA5C,kBAAoC,oBAAzB,QAAQ,eAAR,OAAU,2BAAV,OAAmB,oBAAnB,OAA4B;AACK,MAA5C,kBAAoC,uBAAzB,QAAQ,iBAAR,OAAU,8BAAV,OAAmB,qBAAnB,OAA4B;AAEvC,UAAI,QAAQ,IAAI;AAST,eARL;;AACI,8CAAsB,AAAS,AAAQ,AAAO,QAAhB,uBAAuB,QAAC;AACnC,YAAnB,iBAAW,QAAQ;AACW,YAA9B,AAAgB;;AAEhB,8CAAsB,AAAS,AAAQ,AAAO,QAAhB,uBAAuB,QAAC;AACnC,YAAnB,iBAAW,QAAQ;AACW,YAA9B,AAAgB;;;;;IAGxB;;AAYoB;IAAQ;;AACR;IAAQ;;AAG1B,qBAAK,sBAAgB,AAAO,AAAM;IACpC;;AAGE,qBAAK,sBAAgB,AAAO,AAAM;IACpC;;AAO2B,YAAS,WAAT,6BAAa;IAAO;;AAGpB,YAAS,WAAT,6BAAa;IAAO;;AAcpB,MAAzB,AAAgB;IAClB;;sDAvEuB;IALR,wBAA2B;IAC/B;IACN,iBAAW;IACX,iBAAW;IAgCT,kBAAY;IAKZ,kBAAY;IAed,iBAAW;IAlDO;;EAAgB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA0D1B,mDAAe;YAAQ,mBAAQ,eAClC,4BACG,mDACH;;MAEG,mDAAe;YAAQ,mBAAQ,mBAClC,4BACG,uDACH","file":"next_prev_buttons.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__next_prev_buttons: next_prev_buttons
  };
}));

//# sourceMappingURL=next_prev_buttons.unsound.ddc.js.map
