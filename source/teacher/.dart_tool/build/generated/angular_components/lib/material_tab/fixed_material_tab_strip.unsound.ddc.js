define(['dart_sdk', 'packages/angular_components/material_tab/tab_change_event', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/core/application_tokens', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_components/focus/focus_list'], (function load__packages__angular_components__material_tab__fixed_material_tab_strip(dart_sdk, packages__angular_components__material_tab__tab_change_event, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__core__application_tokens, packages__angular__src__core__change_detection__pipe_transform, packages__angular_components__focus__focus_list) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tab_change_event = packages__angular_components__material_tab__tab_change_event.material_tab__tab_change_event;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const ng_zone = packages__angular__src__core__change_detection__pipe_transform.src__core__zone__ng_zone;
  const focus_list = packages__angular_components__focus__focus_list.focus__focus_list;
  var fixed_material_tab_strip = Object.create(dart.library);
  var $elementAt = dartx.elementAt;
  var $length = dartx.length;
  var $relatedTarget = dartx.relatedTarget;
  var TabChangeEventL = () => (TabChangeEventL = dart.constFn(dart.legacy(tab_change_event.TabChangeEvent)))();
  var StreamControllerOfTabChangeEventL = () => (StreamControllerOfTabChangeEventL = dart.constFn(async.StreamController$(TabChangeEventL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var StreamControllerOfintL = () => (StreamControllerOfintL = dart.constFn(async.StreamController$(intL())))();
  var NodeN = () => (NodeN = dart.constFn(dart.nullable(html.Node)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/fixed_material_tab_strip.dart";
  var _activeTabIndex = dart.privateName(fixed_material_tab_strip, "_activeTabIndex");
  var _tabIndicatorTransform = dart.privateName(fixed_material_tab_strip, "_tabIndicatorTransform");
  var _tabLabels = dart.privateName(fixed_material_tab_strip, "_tabLabels");
  var _beforeTabChange = dart.privateName(fixed_material_tab_strip, "_beforeTabChange");
  var _tabChange = dart.privateName(fixed_material_tab_strip, "_tabChange");
  var _activeTabIndexChange = dart.privateName(fixed_material_tab_strip, "_activeTabIndexChange");
  var _changeDetector$ = dart.privateName(fixed_material_tab_strip, "_changeDetector");
  var _ngZone$ = dart.privateName(fixed_material_tab_strip, "_ngZone");
  var _transitionAmount = dart.privateName(fixed_material_tab_strip, "_transitionAmount");
  var _updateTabIndicatorTransform = dart.privateName(fixed_material_tab_strip, "_updateTabIndicatorTransform");
  var tabIds = dart.privateName(fixed_material_tab_strip, "FixedMaterialTabStripComponent.tabIds");
  var focusController = dart.privateName(fixed_material_tab_strip, "FixedMaterialTabStripComponent.focusController");
  var naviBar = dart.privateName(fixed_material_tab_strip, "FixedMaterialTabStripComponent.naviBar");
  fixed_material_tab_strip.FixedMaterialTabStripComponent = class FixedMaterialTabStripComponent extends core.Object {
    get tabIds() {
      return this[tabIds];
    }
    set tabIds(value) {
      this[tabIds] = value;
    }
    get focusController() {
      return this[focusController];
    }
    set focusController(value) {
      this[focusController] = value;
    }
    get naviBar() {
      return this[naviBar];
    }
    set naviBar(value) {
      this[naviBar] = value;
    }
    get beforeTabChange() {
      return this[_beforeTabChange].stream;
    }
    get tabChange() {
      return this[_tabChange].stream;
    }
    set activeTabIndex(value) {
      if (this[_activeTabIndex] != value) {
        this[_activeTabIndex] = value;
        this[_updateTabIndicatorTransform]();
        this[_changeDetector$].markForCheck();
      }
    }
    get activeTabIndex() {
      return this[_activeTabIndex];
    }
    get activeTabIndexChange() {
      return this[_activeTabIndexChange].stream;
    }
    set tabLabels(labels) {
      this[_tabLabels] = labels;
      this[_updateTabIndicatorTransform]();
    }
    get tabLabels() {
      return this[_tabLabels];
    }
    static _calculateTransitionAmount(isRtl) {
      return dart.test(isRtl) ? -100 : 100;
    }
    get tabIndicatorTransform() {
      return this[_tabIndicatorTransform];
    }
    switchTo(index) {
      if (index == this.activeTabIndex) return;
      let event = new tab_change_event.TabChangeEvent.new(this.activeTabIndex, index);
      this[_beforeTabChange].add(event);
      if (dart.test(event.defaultPrevented)) return;
      this.activeTabIndex = index;
      this[_tabChange].add(event);
      this[_activeTabIndexChange].add(this.activeTabIndex);
      this.focusController.setTabbable(this.activeTabIndex);
    }
    activeStr(index) {
      return dart.str(this.activeTabIndex == index);
    }
    tabId(index) {
      let t0;
      t0 = this.tabIds;
      return t0 == null ? null : t0[$elementAt](index);
    }
    [_updateTabIndicatorTransform]() {
      let width = this[_tabLabels] != null ? 1 / dart.notNull(this[_tabLabels][$length]) : 0;
      let location = dart.notNull(this[_activeTabIndex]) * width * dart.notNull(this[_transitionAmount]);
      this[_tabIndicatorTransform] = "translateX(" + dart.str(location) + "%) scaleX(" + dart.str(width) + ")";
    }
    focusOutHandler(e) {
      if (this.naviBar != null && !dart.test(this.naviBar.contains(NodeN().as(e[$relatedTarget])))) {
        this.focusController.setTabbable(this[_activeTabIndex]);
      }
    }
    ngAfterViewInit() {
      this[_ngZone$].runAfterChangesObserved(dart.fn(() => {
        this.focusController.setTabbable(this[_activeTabIndex]);
      }, VoidToNull()));
    }
  };
  (fixed_material_tab_strip.FixedMaterialTabStripComponent.new = function(_changeDetector, isRtl, _ngZone) {
    let t0;
    this[_activeTabIndex] = 0;
    this[_tabIndicatorTransform] = null;
    this[_tabLabels] = null;
    this[_beforeTabChange] = StreamControllerOfTabChangeEventL().broadcast({sync: true});
    this[_tabChange] = StreamControllerOfTabChangeEventL().broadcast({sync: true});
    this[_activeTabIndexChange] = StreamControllerOfintL().broadcast();
    this[tabIds] = null;
    this[focusController] = null;
    this[naviBar] = null;
    this[_changeDetector$] = _changeDetector;
    this[_ngZone$] = _ngZone;
    this[_transitionAmount] = fixed_material_tab_strip.FixedMaterialTabStripComponent._calculateTransitionAmount((t0 = isRtl, t0 == null ? false : t0));
    this[_updateTabIndicatorTransform]();
  }).prototype = fixed_material_tab_strip.FixedMaterialTabStripComponent.prototype;
  dart.addTypeTests(fixed_material_tab_strip.FixedMaterialTabStripComponent);
  dart.addTypeCaches(fixed_material_tab_strip.FixedMaterialTabStripComponent);
  fixed_material_tab_strip.FixedMaterialTabStripComponent[dart.implements] = () => [lifecycle_hooks.AfterViewInit];
  dart.setMethodSignature(fixed_material_tab_strip.FixedMaterialTabStripComponent, () => ({
    __proto__: dart.getMethods(fixed_material_tab_strip.FixedMaterialTabStripComponent.__proto__),
    switchTo: dart.fnType(dart.void, [dart.legacy(core.int)]),
    activeStr: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    tabId: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    [_updateTabIndicatorTransform]: dart.fnType(dart.void, []),
    focusOutHandler: dart.fnType(dart.void, [dart.legacy(html.FocusEvent)]),
    ngAfterViewInit: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(fixed_material_tab_strip.FixedMaterialTabStripComponent, () => ({
    __proto__: dart.getGetters(fixed_material_tab_strip.FixedMaterialTabStripComponent.__proto__),
    beforeTabChange: dart.legacy(async.Stream$(dart.legacy(tab_change_event.TabChangeEvent))),
    tabChange: dart.legacy(async.Stream$(dart.legacy(tab_change_event.TabChangeEvent))),
    activeTabIndex: dart.legacy(core.int),
    activeTabIndexChange: dart.legacy(async.Stream$(dart.legacy(core.int))),
    tabLabels: dart.legacy(core.List$(dart.legacy(core.String))),
    tabIndicatorTransform: dart.legacy(core.String)
  }));
  dart.setSetterSignature(fixed_material_tab_strip.FixedMaterialTabStripComponent, () => ({
    __proto__: dart.getSetters(fixed_material_tab_strip.FixedMaterialTabStripComponent.__proto__),
    activeTabIndex: dart.legacy(core.int),
    tabLabels: dart.legacy(core.List$(dart.legacy(core.String)))
  }));
  dart.setLibraryUri(fixed_material_tab_strip.FixedMaterialTabStripComponent, L0);
  dart.setFieldSignature(fixed_material_tab_strip.FixedMaterialTabStripComponent, () => ({
    __proto__: dart.getFields(fixed_material_tab_strip.FixedMaterialTabStripComponent.__proto__),
    [_transitionAmount]: dart.finalFieldType(dart.legacy(core.int)),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_activeTabIndex]: dart.fieldType(dart.legacy(core.int)),
    [_tabIndicatorTransform]: dart.fieldType(dart.legacy(core.String)),
    [_tabLabels]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    [_ngZone$]: dart.fieldType(dart.legacy(ng_zone.NgZone)),
    [_beforeTabChange]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(tab_change_event.TabChangeEvent)))),
    [_tabChange]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(tab_change_event.TabChangeEvent)))),
    [_activeTabIndexChange]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.int)))),
    tabIds: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    focusController: dart.fieldType(dart.legacy(focus_list.FocusListDirective)),
    naviBar: dart.fieldType(dart.legacy(html.HtmlElement))
  }));
  dart.defineLazy(fixed_material_tab_strip.FixedMaterialTabStripComponent, {
    /*fixed_material_tab_strip.FixedMaterialTabStripComponent.hostClass*/get hostClass() {
      return "themeable";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_tab/fixed_material_tab_strip", {
    "package:angular_components/material_tab/fixed_material_tab_strip.dart": fixed_material_tab_strip
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fixed_material_tab_strip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2Fe;;;;;;IAuCM;;;;;;IAIP;;;;;;;AAnFkC,YAAA,AAAiB;IAAM;;AAM7B,YAAA,AAAW;IAAM;uBAOlC;AACrB,UAAI,yBAAmB,KAAK;AACH,QAAvB,wBAAkB,KAAK;AACO,QAA9B;AAC8B,QAA9B,AAAgB;;IAEpB;;AAE0B;IAAe;;AAKD,YAAA,AAAsB;IAAM;kBAKzC;AACN,MAAnB,mBAAa,MAAM;AACW,MAA9B;IACF;;AAE8B;IAAU;sCAYG;AACzC,uBAAO,KAAK,IAAG,CAAC,MAAM;IACxB;;AAEoC;IAAsB;aAExC;AAChB,UAAI,AAAM,KAAD,IAAI,qBAAgB;AACzB,kBAAQ,wCAAe,qBAAgB,KAAK;AACrB,MAA3B,AAAiB,2BAAI,KAAK;AAC1B,oBAAI,AAAM,KAAD,oBAAmB;AACN,MAAtB,sBAAiB,KAAK;AACD,MAArB,AAAW,qBAAI,KAAK;AACqB,MAAzC,AAAsB,gCAAI;AACiB,MAA3C,AAAgB,iCAAY;IAC9B;cAEqB;AACnB,YAAmC,UAAzB,AAAe,uBAAG,KAAK;IACnC;UAEiB;;AAAU;iCAAQ,eAAU,KAAK;IAAC;;AAG7C,kBAAQ,AAAW,oBAAG,OAAO,AAAE,iBAAE,AAAW,6BAAS;AACrD,qBAA2B,AAAQ,aAAxB,yBAAkB,KAAK,gBAAG;AACuB,MAAhE,+BAAyB,AAAuC,yBAA1B,QAAQ,4BAAW,KAAK;IAChE;oBAWgC;AAC9B,UAAI,gBAAW,mBAAS,AAAQ,iCAAS,AAAE,CAAD;AACI,QAA5C,AAAgB,iCAAY;;IAEhC;;AAOI,MAFF,AAAQ,uCAAwB;AACc,QAA5C,AAAgB,iCAAY;;IAEhC;;0EAxDoC,iBACG,OAAY;;IAtD/C,wBAAkB;IACf;IACM;IAUP,yBACF,qDAAiD;IAK/C,mBAAa,qDAAiD;IAoB9D,8BAAwB;IAajB;IAuCM;IAIP;IAzCwB;IACe;IAC3B,0BAAE,oFAAiC,KAAN,KAAK,QAAL,OAAS;AAC9B,IAA9B;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA5Da,iEAAS","file":"fixed_material_tab_strip.unsound.ddc.js"}');
  // Exports:
  return {
    material_tab__fixed_material_tab_strip: fixed_material_tab_strip
  };
}));

//# sourceMappingURL=fixed_material_tab_strip.unsound.ddc.js.map
