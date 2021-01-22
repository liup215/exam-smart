define(['dart_sdk', 'packages/angular_components/material_tab/tab_change_event', 'packages/angular_components/material_tab/material_tab', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_tab__material_tab_panel(dart_sdk, packages__angular_components__material_tab__tab_change_event, packages__angular_components__material_tab__material_tab, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tab_change_event = packages__angular_components__material_tab__tab_change_event.material_tab__tab_change_event;
  const material_tab = packages__angular_components__material_tab__material_tab.material_tab__material_tab;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var material_tab_panel = Object.create(dart.library);
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $indexOf = dartx.indexOf;
  var $_get = dartx._get;
  var $length = dartx.length;
  var TabChangeEventL = () => (TabChangeEventL = dart.constFn(dart.legacy(tab_change_event.TabChangeEvent)))();
  var StreamControllerOfTabChangeEventL = () => (StreamControllerOfTabChangeEventL = dart.constFn(async.StreamController$(TabChangeEventL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var TabL = () => (TabL = dart.constFn(dart.legacy(material_tab.Tab)))();
  var TabLToStringL = () => (TabLToStringL = dart.constFn(dart.fnType(StringL(), [TabL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/material_tab/material_tab_panel.dart";
  var L0 = "org-dartlang-app:///packages/angular_components/material_tab/material_tab_panel.dart";
  var _initialized = dart.privateName(material_tab_panel, "_initialized");
  var _previousActiveTab = dart.privateName(material_tab_panel, "_previousActiveTab");
  var _beforeTabChange = dart.privateName(material_tab_panel, "_beforeTabChange");
  var _tabChange = dart.privateName(material_tab_panel, "_tabChange");
  var _activeTabIndex = dart.privateName(material_tab_panel, "_activeTabIndex");
  var _tabs = dart.privateName(material_tab_panel, "_tabs");
  var _tabLabels = dart.privateName(material_tab_panel, "_tabLabels");
  var _tabIds = dart.privateName(material_tab_panel, "_tabIds");
  var _changeDetector$ = dart.privateName(material_tab_panel, "_changeDetector");
  var _setActiveTab = dart.privateName(material_tab_panel, "_setActiveTab");
  var _initTabs = dart.privateName(material_tab_panel, "_initTabs");
  var _activeTab = dart.privateName(material_tab_panel, "_activeTab");
  var centerTabs = dart.privateName(material_tab_panel, "MaterialTabPanelComponent.centerTabs");
  material_tab_panel.MaterialTabPanelComponent = class MaterialTabPanelComponent extends core.Object {
    get centerTabs() {
      return this[centerTabs];
    }
    set centerTabs(value) {
      this[centerTabs] = value;
    }
    get beforeTabChange() {
      return this[_beforeTabChange].stream;
    }
    get tabChange() {
      return this[_tabChange].stream;
    }
    set activeTabIndex(index) {
      if (this[_tabs] != null) {
        this[_setActiveTab](intL().as(index), true);
      } else {
        this[_activeTabIndex] = intL().as(index);
      }
    }
    get activeTabIndex() {
      return this[_activeTabIndex];
    }
    ngAfterContentInit() {
      this[_initialized] = true;
      this[_initTabs]();
    }
    set tabs(tabs) {
      this[_previousActiveTab] = this[_tabs] != null ? this[_activeTab] : null;
      this[_tabs] = tabs;
      if (dart.test(this[_initialized])) this[_initTabs]();
    }
    [_initTabs]() {
      this[_tabLabels] = this[_tabs][$map](StringL(), dart.fn(t => t.label, TabLToStringL()))[$toList]();
      this[_tabIds] = this[_tabs][$map](StringL(), dart.fn(t => t.tabId, TabLToStringL()))[$toList]();
      async.scheduleMicrotask(dart.fn(() => {
        this[_changeDetector$].markForCheck();
        if (this[_previousActiveTab] != null) {
          this[_activeTabIndex] = this[_tabs][$indexOf](this[_previousActiveTab]);
          this[_previousActiveTab] = null;
          if (this[_activeTabIndex] === -1) {
            this[_activeTabIndex] = 0;
          } else {
            return;
          }
        }
        this[_activeTab].activate();
      }, VoidToNull()));
    }
    get [_activeTab]() {
      return this[_tabs][$_get](this[_activeTabIndex]);
    }
    get tabLabels() {
      return this[_tabLabels];
    }
    get tabIds() {
      return this[_tabIds];
    }
    [_setActiveTab](i, focusTab) {
      let t0;
      if (!(dart.notNull(i) >= 0 && dart.notNull(i) < dart.notNull(this[_tabs][$length]))) dart.assertFailed(null, L0, 119, 12, "i >= 0 && i < _tabs.length");
      t0 = this[_activeTab];
      t0 == null ? null : t0.deactivate();
      this[_activeTabIndex] = i;
      this[_activeTab].activate();
      this[_changeDetector$].markForCheck();
      if (!dart.test(focusTab)) return;
      this[_activeTab].focus();
    }
    onBeforeTabChange(e) {
      this[_beforeTabChange].add(e);
    }
    onTabChange(e) {
      this.activeTabIndex = e.newIndex;
      this[_tabChange].add(e);
    }
  };
  (material_tab_panel.MaterialTabPanelComponent.new = function(_changeDetector) {
    this[_initialized] = false;
    this[_previousActiveTab] = null;
    this[_beforeTabChange] = StreamControllerOfTabChangeEventL().broadcast({sync: true});
    this[_tabChange] = StreamControllerOfTabChangeEventL().broadcast({sync: true});
    this[centerTabs] = false;
    this[_activeTabIndex] = 0;
    this[_tabs] = null;
    this[_tabLabels] = null;
    this[_tabIds] = null;
    this[_changeDetector$] = _changeDetector;
    ;
  }).prototype = material_tab_panel.MaterialTabPanelComponent.prototype;
  dart.addTypeTests(material_tab_panel.MaterialTabPanelComponent);
  dart.addTypeCaches(material_tab_panel.MaterialTabPanelComponent);
  material_tab_panel.MaterialTabPanelComponent[dart.implements] = () => [lifecycle_hooks.AfterContentInit];
  dart.setMethodSignature(material_tab_panel.MaterialTabPanelComponent, () => ({
    __proto__: dart.getMethods(material_tab_panel.MaterialTabPanelComponent.__proto__),
    ngAfterContentInit: dart.fnType(dart.void, []),
    [_initTabs]: dart.fnType(dart.void, []),
    [_setActiveTab]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.bool)]),
    onBeforeTabChange: dart.fnType(dart.void, [dart.legacy(tab_change_event.TabChangeEvent)]),
    onTabChange: dart.fnType(dart.void, [dart.legacy(tab_change_event.TabChangeEvent)])
  }));
  dart.setGetterSignature(material_tab_panel.MaterialTabPanelComponent, () => ({
    __proto__: dart.getGetters(material_tab_panel.MaterialTabPanelComponent.__proto__),
    beforeTabChange: dart.legacy(async.Stream$(dart.legacy(tab_change_event.TabChangeEvent))),
    tabChange: dart.legacy(async.Stream$(dart.legacy(tab_change_event.TabChangeEvent))),
    activeTabIndex: dart.legacy(core.int),
    [_activeTab]: dart.legacy(material_tab.Tab),
    tabLabels: dart.legacy(core.List$(dart.legacy(core.String))),
    tabIds: dart.legacy(core.List$(dart.legacy(core.String)))
  }));
  dart.setSetterSignature(material_tab_panel.MaterialTabPanelComponent, () => ({
    __proto__: dart.getSetters(material_tab_panel.MaterialTabPanelComponent.__proto__),
    activeTabIndex: dart.dynamic,
    tabs: dart.legacy(core.List$(dart.legacy(material_tab.Tab)))
  }));
  dart.setLibraryUri(material_tab_panel.MaterialTabPanelComponent, L1);
  dart.setFieldSignature(material_tab_panel.MaterialTabPanelComponent, () => ({
    __proto__: dart.getFields(material_tab_panel.MaterialTabPanelComponent.__proto__),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_initialized]: dart.fieldType(dart.legacy(core.bool)),
    [_previousActiveTab]: dart.fieldType(dart.legacy(material_tab.Tab)),
    [_beforeTabChange]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(tab_change_event.TabChangeEvent)))),
    [_tabChange]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(tab_change_event.TabChangeEvent)))),
    centerTabs: dart.fieldType(dart.legacy(core.bool)),
    [_activeTabIndex]: dart.fieldType(dart.legacy(core.int)),
    [_tabs]: dart.fieldType(dart.legacy(core.List$(dart.legacy(material_tab.Tab)))),
    [_tabLabels]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    [_tabIds]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  dart.defineLazy(material_tab_panel.MaterialTabPanelComponent, {
    /*material_tab_panel.MaterialTabPanelComponent.hostClass*/get hostClass() {
      return "themeable";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_tab/material_tab_panel", {
    "package:angular_components/material_tab/material_tab_panel.dart": material_tab_panel
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_tab_panel.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgDO;;;;;;;AAbyC,YAAA,AAAiB;IAAM;;AAM7B,YAAA,AAAW;IAAM;uBAatC;AAEjB,UAAI,eAAS;AACe,QAA1B,8BAAc,KAAK,GAAE;;AAGE,gCAAvB,UAAkB,KAAK;;IAE3B;;AAG0B;IAAe;;AAMpB,MAAnB,qBAAe;AACJ,MAAX;IACF;aAGmB;AACuC,MAAxD,2BAAsB,AAAM,eAAG,OAAQ,mBAAa;AACxC,MAAZ,cAAQ,IAAI;AAGZ,oBAAI,qBAAc,AAAW;IAC/B;;AAGiD,MAA/C,mBAAa,AAAM,AAAoB,6BAAhB,QAAC,KAAM,AAAE,CAAD;AACa,MAA5C,gBAAU,AAAM,AAAoB,6BAAhB,QAAC,KAAM,AAAE,CAAD;AAmB1B,MAfF,wBAAkB;AACc,QAA9B,AAAgB;AAEhB,YAAI,4BAAsB;AAC2B,UAAnD,wBAAkB,AAAM,sBAAQ;AACP,UAAzB,2BAAqB;AACrB,cAAI,AAAgB,0BAAG,CAAC;AAEH,YAAnB,wBAAkB;;AAGlB;;;AAGiB,QAArB,AAAW;;IAEf;;AAGsB,YAAA,AAAK,oBAAC;IAAgB;;AAGd;IAAU;;AAGb;IAAO;oBAEX,GAAQ;;AAC7B,YAAS,AAAK,aAAP,CAAC,KAAI,KAAO,aAAF,CAAC,iBAAG,AAAM;AACH,WAAxB;0BAAY;AACO,MAAnB,wBAAkB,CAAC;AACE,MAArB,AAAW;AACmB,MAA9B,AAAgB;AAEhB,qBAAK,QAAQ,GAAE;AACG,MAAlB,AAAW;IACb;sBAGsC;AACb,MAAvB,AAAiB,2BAAI,CAAC;IACxB;gBAGgC;AACH,MAA3B,sBAAiB,AAAE,CAAD;AACD,MAAjB,AAAW,qBAAI,CAAC;IAClB;;+DAtE+B;IAzC1B,qBAAe;IAChB;IASE,yBACF,qDAAiD;IAK/C,mBAAa,qDAAiD;IAM/D,mBAAa;IAgBd,wBAAkB;IA4CZ;IAGG;IAGA;IA/CkB;;EAAgB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA5ClC,sDAAS","file":"material_tab_panel.unsound.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab_panel: material_tab_panel
  };
}));

//# sourceMappingURL=material_tab_panel.unsound.ddc.js.map
