define(['dart_sdk', 'packages/async/async', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/utils/browser/dom_service/dom_service'], (function load__packages__angular_components__utils__showhide__showhide(dart_sdk, packages__async__async, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__utils__browser__dom_service__dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const stream_queue = packages__async__async.src__stream_queue;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  var showhide = Object.create(dart.library);
  var $onTransitionEnd = dartx.onTransitionEnd;
  var $classes = dartx.classes;
  var $transitionDuration = dartx.transitionDuration;
  var $getComputedStyle = dartx.getComputedStyle;
  var $isEmpty = dartx.isEmpty;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $floor = dartx.floor;
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var StreamControllerOfElementL = () => (StreamControllerOfElementL = dart.constFn(async.StreamController$(ElementL())))();
  var TransitionEventL = () => (TransitionEventL = dart.constFn(dart.legacy(html.TransitionEvent)))();
  var StreamQueueOfTransitionEventL = () => (StreamQueueOfTransitionEventL = dart.constFn(stream_queue.StreamQueue$(TransitionEventL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var numLToNull = () => (numLToNull = dart.constFn(dart.fnType(core.Null, [numL()])))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [], [dart.dynamic])))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/showhide/showhide.dart";
  var _transitionEndQueue = dart.privateName(showhide, "_transitionEndQueue");
  var _initialized = dart.privateName(showhide, "_initialized");
  var _initialWritePending = dart.privateName(showhide, "_initialWritePending");
  var _hiding = dart.privateName(showhide, "_hiding");
  var _onHide = dart.privateName(showhide, "_onHide");
  var _onShow = dart.privateName(showhide, "_onShow");
  var _onShowEnd = dart.privateName(showhide, "_onShowEnd");
  var _onHideEnd = dart.privateName(showhide, "_onHideEnd");
  var _element$ = dart.privateName(showhide, "_element");
  var _domService$ = dart.privateName(showhide, "_domService");
  var _stopHiding = dart.privateName(showhide, "_stopHiding");
  var _show = dart.privateName(showhide, "_show");
  var _hide = dart.privateName(showhide, "_hide");
  var _removeNgHide = dart.privateName(showhide, "_removeNgHide");
  var _onTransitionEnd = dart.privateName(showhide, "_onTransitionEnd");
  var _hideIfHiding = dart.privateName(showhide, "_hideIfHiding");
  showhide.ShowHideDirective = class ShowHideDirective extends core.Object {
    ngOnInit() {
      this[_initialized] = true;
    }
    ngOnDestroy() {
      this[_stopHiding]();
    }
    get onHide() {
      return this[_onHide].stream;
    }
    get onShow() {
      return this[_onShow].stream;
    }
    get onShowEnd() {
      return this[_onShowEnd].stream;
    }
    get onHideEnd() {
      return this[_onHideEnd].stream;
    }
    set visible(value) {
      if (dart.test(this[_initialized])) {
        dart.test(value) ? this[_show]() : this[_hide]();
      } else {
        this[_initialWritePending] = true;
        this[_domService$].scheduleWrite(dart.fn(() => {
          this[_element$][$classes].toggle("acx-showhide-hide", !dart.test(value));
          this[_element$][$classes].toggle("acx-showhide-hidden", !dart.test(value));
          this[_initialWritePending] = false;
        }, VoidToNull()));
      }
    }
    [_show]() {
      this[_stopHiding]();
      this[_domService$].scheduleRead(dart.fn(() => {
        if (dart.test(this[_initialWritePending]) || dart.test(this[_element$][$classes].contains("acx-showhide-hidden"))) {
          this[_domService$].scheduleWrite(dart.fn(() => {
            this[_element$][$classes].remove("acx-showhide-hidden");
          }, VoidToNull()));
          this[_domService$].nextFrame.then(core.Null, dart.fn(_ => {
            this[_removeNgHide]();
          }, numLToNull()));
        } else {
          this[_removeNgHide]();
        }
      }, VoidToNull()));
    }
    [_removeNgHide]() {
      if (dart.test(this[_hiding])) return;
      this[_domService$].scheduleWrite(dart.fn(() => {
        this[_element$][$classes].remove("acx-showhide-hide");
        this[_onShow].add(this[_element$]);
      }, VoidToNull()));
      this[_onTransitionEnd](dart.fn(() => {
        this[_onShowEnd].add(this[_element$]);
      }, VoidToNull()));
    }
    [_onTransitionEnd](callback) {
      this[_domService$].scheduleRead(dart.fn(() => {
        let finished = false;
        function complete(_ = null) {
          if (!finished) {
            finished = true;
            callback();
          }
        }
        dart.fn(complete, dynamicTovoid());
        let duration = showhide.ShowHideDirective._transitionDurationMs(this[_element$]);
        if (dart.notNull(duration) > 0) {
          this[_transitionEndQueue].next.then(dart.void, complete);
        }
        let timeout = new core.Duration.new({milliseconds: dart.notNull(duration) + dart.notNull(showhide.ShowHideDirective._transitionTimeoutMs)});
        FutureOfvoid().delayed(timeout, complete);
      }, VoidToNull()));
    }
    [_hide]() {
      this[_hiding] = true;
      this[_domService$].scheduleWrite(dart.fn(() => {
        this[_element$][$classes].add("acx-showhide-hide");
        this[_onHide].add(this[_element$]);
      }, VoidToNull()));
      this[_onTransitionEnd](dart.bind(this, _hideIfHiding));
    }
    [_hideIfHiding]() {
      if (dart.test(this[_hiding])) {
        this[_domService$].scheduleWrite(dart.fn(() => {
          this[_element$][$classes].add("acx-showhide-hidden");
        }, VoidToNull()));
        this[_onHideEnd].add(this[_element$]);
        this[_hiding] = false;
      }
      this[_stopHiding]();
    }
    [_stopHiding]() {
      this[_hiding] = false;
    }
    static _transitionDurationMs(element) {
      let duration = element[$getComputedStyle]()[$transitionDuration];
      if (duration == null || duration[$isEmpty]) return 0;
      let matches = core.RegExp.new("([0-9.]+)([ms]+)")[$matchAsPrefix](duration);
      if (matches == null || dart.notNull(matches.groupCount) < 2) return 0;
      let value = core.double.parse(matches._get(1));
      let unit = matches._get(2);
      if (unit === "s") return (dart.notNull(value) * 1000)[$floor]();
      if (unit === "ms") return value[$floor]();
      return 0;
    }
  };
  (showhide.ShowHideDirective.new = function(_element, _domService) {
    this[_transitionEndQueue] = null;
    this[_initialized] = false;
    this[_initialWritePending] = false;
    this[_hiding] = true;
    this[_onHide] = StreamControllerOfElementL().broadcast({sync: true});
    this[_onShow] = StreamControllerOfElementL().broadcast({sync: true});
    this[_onShowEnd] = StreamControllerOfElementL().broadcast({sync: true});
    this[_onHideEnd] = StreamControllerOfElementL().broadcast({sync: true});
    this[_element$] = _element;
    this[_domService$] = _domService;
    this[_transitionEndQueue] = StreamQueueOfTransitionEventL().new(this[_element$][$onTransitionEnd]);
  }).prototype = showhide.ShowHideDirective.prototype;
  dart.addTypeTests(showhide.ShowHideDirective);
  dart.addTypeCaches(showhide.ShowHideDirective);
  showhide.ShowHideDirective[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(showhide.ShowHideDirective, () => ({
    __proto__: dart.getMethods(showhide.ShowHideDirective.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_show]: dart.fnType(dart.void, []),
    [_removeNgHide]: dart.fnType(dart.void, []),
    [_onTransitionEnd]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
    [_hide]: dart.fnType(dart.void, []),
    [_hideIfHiding]: dart.fnType(dart.void, []),
    [_stopHiding]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(showhide.ShowHideDirective, () => ({
    __proto__: dart.getGetters(showhide.ShowHideDirective.__proto__),
    onHide: dart.legacy(async.Stream$(dart.legacy(html.Element))),
    onShow: dart.legacy(async.Stream$(dart.legacy(html.Element))),
    onShowEnd: dart.legacy(async.Stream$(dart.legacy(html.Element))),
    onHideEnd: dart.legacy(async.Stream$(dart.legacy(html.Element)))
  }));
  dart.setSetterSignature(showhide.ShowHideDirective, () => ({
    __proto__: dart.getSetters(showhide.ShowHideDirective.__proto__),
    visible: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(showhide.ShowHideDirective, L0);
  dart.setFieldSignature(showhide.ShowHideDirective, () => ({
    __proto__: dart.getFields(showhide.ShowHideDirective.__proto__),
    [_element$]: dart.finalFieldType(dart.legacy(html.Element)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_transitionEndQueue]: dart.fieldType(dart.legacy(stream_queue.StreamQueue$(dart.legacy(html.TransitionEvent)))),
    [_initialized]: dart.fieldType(dart.legacy(core.bool)),
    [_initialWritePending]: dart.fieldType(dart.legacy(core.bool)),
    [_hiding]: dart.fieldType(dart.legacy(core.bool)),
    [_onHide]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.Element)))),
    [_onShow]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.Element)))),
    [_onShowEnd]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.Element)))),
    [_onHideEnd]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.Element))))
  }));
  dart.defineLazy(showhide.ShowHideDirective, {
    /*showhide.ShowHideDirective._hideClass*/get _hideClass() {
      return "acx-showhide-hide";
    },
    /*showhide.ShowHideDirective._hiddenClass*/get _hiddenClass() {
      return "acx-showhide-hidden";
    },
    /*showhide.ShowHideDirective._transitionTimeoutMs*/get _transitionTimeoutMs() {
      return 16;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/utils/showhide/showhide", {
    "package:angular_components/utils/showhide/showhide.dart": showhide
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["showhide.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwCuB,MAAnB,qBAAe;IACjB;;AAIe,MAAb;IACF;;AAI8B,YAAA,AAAQ;IAAM;;AAKd,YAAA,AAAQ;IAAM;;AAKX,YAAA,AAAW;IAAM;;AAKjB,YAAA,AAAW;IAAM;gBAIjC;AACf,oBAAI;AACuB,kBAAzB,KAAK,IAAG,gBAAU;;AAES,QAA3B,6BAAuB;AAKrB,QAJF,AAAY,iCAAc;AACmB,UAA3C,AAAS,AAAQ,sDAAmB,WAAC,KAAK;AACG,UAA7C,AAAS,AAAQ,wDAAqB,WAAC,KAAK;AAChB,UAA5B,6BAAuB;;;IAG7B;;AAGe,MAAb;AAeE,MAdF,AAAY,gCAAa;AACvB,sBAAI,yCAAwB,AAAS,AAAQ;AAGzC,UAFF,AAAY,iCAAc;AACa,YAArC,AAAS,AAAQ;;AAOjB,UAFF,AAAY,AAAU,6CAAK,QAAC;AACX,YAAf;;;AAGa,UAAf;;;IAGN;;AAGE,oBAAI,gBAAS;AAIX,MAHF,AAAY,iCAAc;AACW,QAAnC,AAAS,AAAQ;AACI,QAArB,AAAQ,kBAAI;;AAIZ,MAFF,uBAAiB;AACS,QAAxB,AAAW,qBAAI;;IAEnB;uBAE2B;AAmBvB,MAlBF,AAAY,gCAAa;AAClB,uBAAW;AAChB,iBAAK,SAAU;AACb,eAAK,QAAQ;AACI,YAAf,WAAW;AACD,YAAV,AAAQ,QAAA;;;;AAIR,uBAAW,iDAAsB;AACrC,YAAa,aAAT,QAAQ,IAAG;AAC0B,UAAvC,AAAoB,AAAK,+CAAK,QAAQ;;AAI/B,sBACL,qCAAgC,aAAT,QAAQ,iBAAG;AACL,QAA1B,uBAAQ,OAAO,EAAE,QAAQ;;IAEpC;;AAGgB,MAAd,gBAAU;AAIR,MAHF,AAAY,iCAAc;AACQ,QAAhC,AAAS,AAAQ;AACI,QAArB,AAAQ,kBAAI;;AAEiB,MAA/B,iCAAiB;IACnB;;AAKE,oBAAI;AAGA,QAFF,AAAY,iCAAc;AACU,UAAlC,AAAS,AAAQ;;AAEK,QAAxB,AAAW,qBAAI;AACA,QAAf,gBAAU;;AAEC,MAAb;IACF;;AAGiB,MAAf,gBAAU;IACZ;iCAEyC;AAChC,qBAAW,AAAQ,AAAmB,OAApB;AACzB,UAAI,AAAS,QAAD,IAAI,QAAQ,AAAS,QAAD,YAAU,MAAO;AAI3C,oBAAU,AAA4B,gBAArB,oCAAmC,QAAQ;AAClE,UAAI,AAAQ,OAAD,IAAI,QAA2B,aAAnB,AAAQ,OAAD,eAAc,GAAG,MAAO;AAE/C,kBAAe,kBAAM,AAAO,OAAA,MAAC;AAC7B,iBAAO,AAAO,OAAA,MAAC;AACtB,UAAI,AAAK,IAAD,KAAI,KAAK,MAAsB,EAAR,aAAN,KAAK,IAAG;AACjC,UAAI,AAAK,IAAD,KAAI,MAAM,MAAO,AAAM,MAAD;AAC9B,YAAO;IACT;;6CA5IuB,UAAe;IANT;IAExB,qBAAe;IACf,6BAAuB;IACvB,gBAAU;IAmBT,gBAAU,8CAA0C;IAKpD,gBAAU,8CAA0C;IAKpD,mBAAa,8CAA0C;IAKvD,mBAAa,8CAA0C;IAhCtC;IAAe;AACuB,IAA3D,4BAAsB,oCAAY,AAAS;EAC7C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAhBa,qCAAU;;;MACV,uCAAY;;;MAGR,+CAAoB;YAAG","file":"showhide.unsound.ddc.js"}');
  // Exports:
  return {
    utils__showhide__showhide: showhide
  };
}));

//# sourceMappingURL=showhide.unsound.ddc.js.map
