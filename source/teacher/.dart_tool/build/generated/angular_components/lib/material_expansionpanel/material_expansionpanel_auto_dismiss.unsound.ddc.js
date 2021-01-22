define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/material_expansionpanel/material_expansionpanel'], (function load__packages__angular_components__material_expansionpanel__material_expansionpanel_auto_dismiss(dart_sdk, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__material_expansionpanel__material_expansionpanel) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const material_expansionpanel = packages__angular_components__material_expansionpanel__material_expansionpanel.material_expansionpanel__material_expansionpanel;
  var material_expansionpanel_auto_dismiss = Object.create(dart.library);
  var $onMouseUp = dartx.onMouseUp;
  var $target = dartx.target;
  var $toLowerCase = dartx.toLowerCase;
  var $parent = dartx.parent;
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var StreamControllerOfEventL = () => (StreamControllerOfEventL = dart.constFn(async.StreamController$(EventL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var FutureOfboolL = () => (FutureOfboolL = dart.constFn(async.Future$(boolL())))();
  var FutureLOfboolL = () => (FutureLOfboolL = dart.constFn(dart.legacy(FutureOfboolL())))();
  var EventLToFutureLOfboolL = () => (EventLToFutureLOfboolL = dart.constFn(dart.fnType(FutureLOfboolL(), [EventL()])))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.dart";
  var _clicksOutsideController = dart.privateName(material_expansionpanel_auto_dismiss, "_clicksOutsideController");
  var _clicksOutsideSubscription = dart.privateName(material_expansionpanel_auto_dismiss, "_clicksOutsideSubscription");
  var _mouseUpListener = dart.privateName(material_expansionpanel_auto_dismiss, "_mouseUpListener");
  var _expansionPanel$ = dart.privateName(material_expansionpanel_auto_dismiss, "_expansionPanel");
  var _overlayContainerToken$ = dart.privateName(material_expansionpanel_auto_dismiss, "_overlayContainerToken");
  var _element$ = dart.privateName(material_expansionpanel_auto_dismiss, "_element");
  var _onMouseUp = dart.privateName(material_expansionpanel_auto_dismiss, "_onMouseUp");
  material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss = class MaterialExpansionPanelAutoDismiss extends core.Object {
    onExpandedChanged(expand) {
      let t0;
      t0 = this[_clicksOutsideSubscription];
      t0 == null ? null : t0.cancel();
      if (dart.test(expand)) {
        this[_clicksOutsideSubscription] = this[_clicksOutsideController].stream.listen(dart.fn(e => this[_expansionPanel$].collapse({byUserAction: false}), EventLToFutureLOfboolL()));
      }
    }
    ngOnDestroy() {
      let t0;
      t0 = this[_clicksOutsideSubscription];
      t0 == null ? null : t0.cancel();
    }
    [_onMouseUp](e) {
      let node = ElementL().as(e[$target]);
      while (node != null) {
        let tagName = node.tagName[$toLowerCase]();
        if (dart.equals(node, this[_element$])) {
          return;
        } else if (dart.equals(node, this[_overlayContainerToken$])) {
          return;
        } else if (tagName === "body") {
          this[_clicksOutsideController].add(e);
          return;
        } else if (tagName === "material-button" || tagName === "dropdown-button" || tagName === "input" || tagName === "a") {
          return;
        }
        node = node[$parent];
      }
    }
  };
  (material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss.new = function(_expansionPanel, _overlayContainerToken, _element) {
    this[_clicksOutsideController] = null;
    this[_clicksOutsideSubscription] = null;
    this[_mouseUpListener] = null;
    this[_expansionPanel$] = _expansionPanel;
    this[_overlayContainerToken$] = _overlayContainerToken;
    this[_element$] = _element;
    this[_clicksOutsideController] = StreamControllerOfEventL().broadcast({sync: true, onListen: dart.fn(() => {
        this[_mouseUpListener] = html.document[$onMouseUp].listen(dart.bind(this, _onMouseUp));
      }, VoidToNull()), onCancel: dart.fn(() => {
        this[_mouseUpListener].cancel();
        this[_mouseUpListener] = null;
      }, VoidToNull())});
  }).prototype = material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss.prototype;
  dart.addTypeTests(material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss);
  dart.addTypeCaches(material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss);
  material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss, () => ({
    __proto__: dart.getMethods(material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss.__proto__),
    onExpandedChanged: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onMouseUp]: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)])
  }));
  dart.setLibraryUri(material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss, L0);
  dart.setFieldSignature(material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss, () => ({
    __proto__: dart.getFields(material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss.__proto__),
    [_expansionPanel$]: dart.finalFieldType(dart.legacy(material_expansionpanel.MaterialExpansionPanel)),
    [_overlayContainerToken$]: dart.finalFieldType(dart.legacy(html.Element)),
    [_element$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_clicksOutsideController]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(html.Event)))),
    [_clicksOutsideSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(html.Event)))),
    [_mouseUpListener]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(html.MouseEvent))))
  }));
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss", {
    "package:angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.dart": material_expansionpanel_auto_dismiss
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel_auto_dismiss.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBAuD8B;;AACU,WAApC;0BAA4B;AAC5B,oBAAI,MAAM;AAEyD,QADjE,mCAA6B,AAAyB,AACjD,6CAAO,QAAC,KAAM,AAAgB,+CAAuB;;IAE9D;;;AAIsC,WAApC;0BAA4B;IAC9B;iBAE2B;AACrB,iBAAgB,cAAT,AAAE,CAAD;AACZ,aAAO,IAAI,IAAI;AACT,sBAAU,AAAK,AAAQ,IAAT;AAClB,YAAS,YAAL,IAAI,EAAS;AAEf;cACK,KAAS,YAAL,IAAI,EAAI;AAEjB;cACK,KAAI,AAAQ,OAAD,KAAI;AAKW,UAA/B,AAAyB,mCAAI,CAAC;AAC9B;cACK,KAAI,AAAQ,OAAD,KAAI,qBAClB,AAAQ,OAAD,KAAI,qBACX,AAAQ,OAAD,KAAI,WACX,AAAQ,OAAD,KAAI;AAEb;;AAEgB,QAAlB,OAAO,AAAK,IAAD;;IAOf;;yFA5DS,iBAC2C,wBAC3C;IAPe;IACE;IACK;IAGtB;IAC2C;IAC3C;AASD,IARN,iCAA4C,4CAClC,gBACI;AACgD,QAAxD,yBAAmB,AAAS,AAAU,2CAAO;kCAErC;AACiB,QAAzB,AAAiB;AACM,QAAvB,yBAAmB;;EAE3B","file":"material_expansionpanel_auto_dismiss.unsound.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel_auto_dismiss: material_expansionpanel_auto_dismiss
  };
}));

//# sourceMappingURL=material_expansionpanel_auto_dismiss.unsound.ddc.js.map
