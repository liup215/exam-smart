define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/model/action/async_action', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/material_expansionpanel/material_expansionpanel'], (function load__packages__angular_components__material_expansionpanel__material_expansionpanel_set(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__src__model__action__async_action, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__material_expansionpanel__material_expansionpanel) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const async_action = packages__angular_components__src__model__action__async_action.src__model__action__async_action;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const material_expansionpanel = packages__angular_components__material_expansionpanel__material_expansionpanel.material_expansionpanel__material_expansionpanel;
  var material_expansionpanel_set = Object.create(dart.library);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var AsyncActionOfboolL = () => (AsyncActionOfboolL = dart.constFn(async_action.AsyncAction$(boolL())))();
  var AsyncActionLOfboolL = () => (AsyncActionLOfboolL = dart.constFn(dart.legacy(AsyncActionOfboolL())))();
  var AsyncActionLOfboolLToNull = () => (AsyncActionLOfboolLToNull = dart.constFn(dart.fnType(core.Null, [AsyncActionLOfboolL()])))();
  var boolLToboolL = () => (boolLToboolL = dart.constFn(dart.fnType(boolL(), [boolL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_expansionpanel/material_expansionpanel_set.dart";
  var _panelDisposer = dart.privateName(material_expansionpanel_set, "_panelDisposer");
  var _openPanel = dart.privateName(material_expansionpanel_set, "_openPanel");
  var _panels = dart.privateName(material_expansionpanel_set, "_panels");
  var _onPanelsChange = dart.privateName(material_expansionpanel_set, "_onPanelsChange");
  var _setOpenPanel = dart.privateName(material_expansionpanel_set, "_setOpenPanel");
  var _onPanelOpen = dart.privateName(material_expansionpanel_set, "_onPanelOpen");
  var _onPanelClose = dart.privateName(material_expansionpanel_set, "_onPanelClose");
  material_expansionpanel_set.MaterialExpansionPanelSet = class MaterialExpansionPanelSet extends core.Object {
    set panels(panels) {
      this[_panels] = panels;
      this[_onPanelsChange]();
    }
    [_onPanelsChange]() {
      let t0;
      this[_panelDisposer].dispose();
      this[_openPanel] = null;
      for (let panel of this[_panels]) {
        if (dart.test(panel.isExpanded)) {
          if (this[_openPanel] != null) {
            dart.throw(new core.StateError.new("Should only have one panel open at a time"));
          }
          this[_openPanel] = panel;
        }
        t0 = this[_panelDisposer];
        (() => {
          t0.addStreamSubscription(boolL(), panel.isExpandedChange.listen(dart.fn(isExpanded => {
            if (dart.test(isExpanded)) this[_setOpenPanel](panel);
          }, boolLToNull())));
          t0.addStreamSubscription(AsyncActionLOfboolL(), panel.open.listen(dart.fn(action => {
            this[_onPanelOpen](panel, action);
          }, AsyncActionLOfboolLToNull())));
          t0.addStreamSubscription(AsyncActionLOfboolL(), panel.close.listen(dart.fn(action => {
            this[_onPanelClose](panel, action);
          }, AsyncActionLOfboolLToNull())));
          t0.addStreamSubscription(AsyncActionLOfboolL(), panel.cancel.listen(dart.fn(action => {
            this[_onPanelClose](panel, action);
          }, AsyncActionLOfboolLToNull())));
          return t0;
        })();
        if (dart.test(panel.closeOnSave)) {
          this[_panelDisposer].addStreamSubscription(AsyncActionLOfboolL(), panel.save.listen(dart.fn(action => {
            this[_onPanelClose](panel, action);
          }, AsyncActionLOfboolLToNull())));
        }
      }
    }
    [_onPanelOpen](panel, action) {
      return async.async(dart.void, (function* _onPanelOpen() {
        if (this[_openPanel] == null) this[_setOpenPanel](panel);
        if (dart.test(this[_openPanel].activeSaveCancelAction)) {
          action.cancel();
          return;
        }
        action.cancelIf(this[_openPanel].collapse({byUserAction: false}).then(boolL(), dart.fn(success => {
          if (dart.test(success)) this[_setOpenPanel](panel);
          return !dart.test(success);
        }, boolLToboolL())));
      }).bind(this));
    }
    [_onPanelClose](panel, action) {
      return async.async(dart.void, (function* _onPanelClose() {
        let wasCollapseSucessful = (yield action.onDone);
        if (dart.test(wasCollapseSucessful) && dart.equals(this[_openPanel], panel)) this[_setOpenPanel](null);
      }).bind(this));
    }
    [_setOpenPanel](panel) {
      if (dart.equals(this[_openPanel], panel)) return;
      this[_openPanel] = panel;
      for (let panel of this[_panels]) {
        if (!dart.equals(panel, this[_openPanel])) panel.anotherExpanded = this[_openPanel] != null;
      }
    }
    ngOnDestroy() {
      this[_panelDisposer].dispose();
    }
  };
  (material_expansionpanel_set.MaterialExpansionPanelSet.new = function() {
    this[_panelDisposer] = new disposer.Disposer.multi();
    this[_openPanel] = null;
    this[_panels] = null;
    ;
  }).prototype = material_expansionpanel_set.MaterialExpansionPanelSet.prototype;
  dart.addTypeTests(material_expansionpanel_set.MaterialExpansionPanelSet);
  dart.addTypeCaches(material_expansionpanel_set.MaterialExpansionPanelSet);
  material_expansionpanel_set.MaterialExpansionPanelSet[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_expansionpanel_set.MaterialExpansionPanelSet, () => ({
    __proto__: dart.getMethods(material_expansionpanel_set.MaterialExpansionPanelSet.__proto__),
    [_onPanelsChange]: dart.fnType(dart.void, []),
    [_onPanelOpen]: dart.fnType(dart.void, [dart.legacy(material_expansionpanel.MaterialExpansionPanel), dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))]),
    [_onPanelClose]: dart.fnType(dart.void, [dart.legacy(material_expansionpanel.MaterialExpansionPanel), dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))]),
    [_setOpenPanel]: dart.fnType(dart.void, [dart.legacy(material_expansionpanel.MaterialExpansionPanel)]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(material_expansionpanel_set.MaterialExpansionPanelSet, () => ({
    __proto__: dart.getSetters(material_expansionpanel_set.MaterialExpansionPanelSet.__proto__),
    panels: dart.legacy(core.List$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)))
  }));
  dart.setLibraryUri(material_expansionpanel_set.MaterialExpansionPanelSet, L0);
  dart.setFieldSignature(material_expansionpanel_set.MaterialExpansionPanelSet, () => ({
    __proto__: dart.getFields(material_expansionpanel_set.MaterialExpansionPanelSet.__proto__),
    [_panelDisposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_openPanel]: dart.fieldType(dart.legacy(material_expansionpanel.MaterialExpansionPanel)),
    [_panels]: dart.fieldType(dart.legacy(core.List$(dart.legacy(material_expansionpanel.MaterialExpansionPanel))))
  }));
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel_set", {
    "package:angular_components/material_expansionpanel/material_expansionpanel_set.dart": material_expansionpanel_set
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel_set.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;eAuC0C;AACtB,MAAhB,gBAAU,MAAM;AACC,MAAjB;IACF;;;AAG0B,MAAxB,AAAe;AACE,MAAjB,mBAAa;AAEb,eAAW,QAAS;AAClB,sBAAI,AAAM,KAAD;AACP,cAAI,oBAAc;AAC6C,YAA7D,WAAM,wBAAW;;AAED,UAAlB,mBAAa,KAAK;;AAef,aAZL;;AACI,4CAAuB,AAAM,AAAiB,KAAlB,yBAAyB,QAAC;AACtD,0BAAI,UAAU,GAAE,AAAoB,oBAAN,KAAK;;AAEnC,0DAAsB,AAAM,AAAK,KAAN,aAAa,QAAC;AACd,YAA3B,mBAAa,KAAK,EAAE,MAAM;;AAE1B,0DAAsB,AAAM,AAAM,KAAP,cAAc,QAAC;AACd,YAA5B,oBAAc,KAAK,EAAE,MAAM;;AAE3B,0DAAsB,AAAM,AAAO,KAAR,eAAe,QAAC;AACf,YAA5B,oBAAc,KAAK,EAAE,MAAM;;;;AAG/B,sBAAI,AAAM,KAAD;AAGJ,UAFH,AAAe,kEAAsB,AAAM,AAAK,KAAN,aAAa,QAAC;AAC1B,YAA5B,oBAAc,KAAK,EAAE,MAAM;;;;IAInC;mBAG2B,OAAyB;AADnC;AAEf,YAAI,AAAW,oBAAG,MAAM,AAAoB,oBAAN,KAAK;AAE3C,sBAAI,AAAW;AAGE,UAAf,AAAO,MAAD;AACN;;AAMC,QAHH,AAAO,MAAD,UAAU,AAAW,AAA8B,yCAAP,sBAAY,QAAC;AAC7D,wBAAI,OAAO,GAAE,AAAoB,oBAAN,KAAK;AAChC,gBAAO,YAAC,OAAO;;MAEnB;;oBAG2B,OAAyB;AADlC;AAEV,oCAAuB,MAAM,AAAO,MAAD;AACzC,sBAAI,oBAAoB,KAAe,YAAX,kBAAc,KAAK,GAAE,AAAmB,oBAAL;MACjE;;oBAE0C;AACxC,UAAe,YAAX,kBAAc,KAAK,GAAE;AACP,MAAlB,mBAAa,KAAK;AAClB,eAAW,QAAS;AAClB,yBAAI,KAAK,EAAI,mBAAY,AAAM,AAAoC,KAArC,mBAAmB,AAAW,oBAAG;;IAEnE;;AAI0B,MAAxB,AAAe;IACjB;;;IA9EM,uBAA0B;IACT;IACM;;EA6E/B","file":"material_expansionpanel_set.unsound.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel_set: material_expansionpanel_set
  };
}));

//# sourceMappingURL=material_expansionpanel_set.unsound.ddc.js.map
