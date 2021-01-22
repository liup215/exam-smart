define(['dart_sdk', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/laminate/portal/portal'], (function load__packages__angular_components__material_stepper__material_step(dart_sdk, packages__angular_components__src__model__action__async_action, packages__angular_components__laminate__portal__portal) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const async_action = packages__angular_components__src__model__action__async_action.src__model__action__async_action;
  const portal = packages__angular_components__laminate__portal__portal.laminate__portal__portal;
  var material_step = Object.create(dart.library);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var AsyncActionOfboolL = () => (AsyncActionOfboolL = dart.constFn(async_action.AsyncAction$(boolL())))();
  var AsyncActionLOfboolL = () => (AsyncActionLOfboolL = dart.constFn(dart.legacy(AsyncActionOfboolL())))();
  var StreamControllerOfAsyncActionLOfboolL = () => (StreamControllerOfAsyncActionLOfboolL = dart.constFn(async.StreamController$(AsyncActionLOfboolL())))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/material_stepper/material_step.dart";
  var L1 = "package:angular_components/material_stepper/material_step.dart";
  var _continueController = dart.privateName(material_step, "_continueController");
  var _cancelController = dart.privateName(material_step, "_cancelController");
  var _jumpController = dart.privateName(material_step, "_jumpController");
  var _partiallyComplete = dart.privateName(material_step, "_partiallyComplete");
  var _requestStepAction = dart.privateName(material_step, "_requestStepAction");
  var name = dart.privateName(material_step, "StepDirective.name");
  var optional = dart.privateName(material_step, "StepDirective.optional");
  var completeSummary = dart.privateName(material_step, "StepDirective.completeSummary");
  var hideButtons = dart.privateName(material_step, "StepDirective.hideButtons");
  var cancelHidden = dart.privateName(material_step, "StepDirective.cancelHidden");
  var complete = dart.privateName(material_step, "StepDirective.complete");
  var canContinue = dart.privateName(material_step, "StepDirective.canContinue");
  var busy = dart.privateName(material_step, "StepDirective.busy");
  var isLast = dart.privateName(material_step, "StepDirective.isLast");
  var isSelectable = dart.privateName(material_step, "StepDirective.isSelectable");
  var index = dart.privateName(material_step, "StepDirective.index");
  var summaryDirective = dart.privateName(material_step, "StepDirective.summaryDirective");
  var active = dart.privateName(material_step, "StepDirective.active");
  material_step.StepDirective = class StepDirective extends portal.TemplatePortal {
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get optional() {
      return this[optional];
    }
    set optional(value) {
      this[optional] = value;
    }
    get completeSummary() {
      return this[completeSummary];
    }
    set completeSummary(value) {
      this[completeSummary] = value;
    }
    get hideButtons() {
      return this[hideButtons];
    }
    set hideButtons(value) {
      this[hideButtons] = value;
    }
    get cancelHidden() {
      return this[cancelHidden];
    }
    set cancelHidden(value) {
      this[cancelHidden] = value;
    }
    get complete() {
      return this[complete];
    }
    set complete(value) {
      this[complete] = value;
    }
    get canContinue() {
      return this[canContinue];
    }
    set canContinue(value) {
      this[canContinue] = value;
    }
    get busy() {
      return this[busy];
    }
    set busy(value) {
      this[busy] = value;
    }
    get isLast() {
      return this[isLast];
    }
    set isLast(value) {
      this[isLast] = value;
    }
    get isSelectable() {
      return this[isSelectable];
    }
    set isSelectable(value) {
      this[isSelectable] = value;
    }
    get index() {
      return this[index];
    }
    set index(value) {
      this[index] = value;
    }
    get summaryDirective() {
      return this[summaryDirective];
    }
    set summaryDirective(value) {
      this[summaryDirective] = value;
    }
    get active() {
      return this[active];
    }
    set active(value) {
      this[active] = value;
    }
    set partiallyComplete(b) {
      if (!(!dart.test(b) || dart.equals(this.complete, false))) dart.assertFailed(null, L0, 65, 12, "!b || complete == false");
      this[_partiallyComplete] = b;
    }
    get partiallyComplete() {
      return this[_partiallyComplete];
    }
    get isOptional() {
      return this.optional;
    }
    get isFirst() {
      return this.index === 0;
    }
    get isNotSelectable() {
      return !dart.test(this.isSelectable);
    }
    get continueStream() {
      return this[_continueController].stream;
    }
    get cancelStream() {
      return this[_cancelController].stream;
    }
    get jumpStream() {
      return this[_jumpController].stream;
    }
    requestStepContinue(action) {
      this[_requestStepAction](action, this[_continueController]);
    }
    requestStepCancel(action) {
      this[_requestStepAction](action, this[_cancelController]);
    }
    requestStepJump(action) {
      this[_requestStepAction](action, this[_jumpController]);
    }
    get shouldShowSummary() {
      return !dart.test(this.active) && this.completeSummary != null && dart.test(this.complete);
    }
    [_requestStepAction](action, controller) {
      this.busy = true;
      controller.add(action);
      action.onDone.then(core.Null, dart.fn(_ => {
        this.busy = false;
      }, boolLToNull()));
    }
  };
  (material_step.StepDirective.new = function(ref, viewContainerRef) {
    this[_continueController] = StreamControllerOfAsyncActionLOfboolL().broadcast({sync: true});
    this[_cancelController] = StreamControllerOfAsyncActionLOfboolL().broadcast({sync: true});
    this[_jumpController] = StreamControllerOfAsyncActionLOfboolL().broadcast({sync: true});
    this[name] = null;
    this[optional] = false;
    this[completeSummary] = null;
    this[hideButtons] = false;
    this[cancelHidden] = false;
    this[complete] = false;
    this[_partiallyComplete] = false;
    this[canContinue] = true;
    this[busy] = false;
    this[isLast] = false;
    this[isSelectable] = false;
    this[index] = null;
    this[summaryDirective] = null;
    this[active] = false;
    material_step.StepDirective.__proto__.new.call(this, ref, viewContainerRef);
    ;
  }).prototype = material_step.StepDirective.prototype;
  dart.addTypeTests(material_step.StepDirective);
  dart.addTypeCaches(material_step.StepDirective);
  dart.setMethodSignature(material_step.StepDirective, () => ({
    __proto__: dart.getMethods(material_step.StepDirective.__proto__),
    requestStepContinue: dart.fnType(dart.void, [dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))]),
    requestStepCancel: dart.fnType(dart.void, [dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))]),
    requestStepJump: dart.fnType(dart.void, [dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))]),
    [_requestStepAction]: dart.fnType(dart.void, [dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool))), dart.legacy(async.StreamController$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))))])
  }));
  dart.setGetterSignature(material_step.StepDirective, () => ({
    __proto__: dart.getGetters(material_step.StepDirective.__proto__),
    partiallyComplete: dart.legacy(core.bool),
    isOptional: dart.legacy(core.bool),
    isFirst: dart.legacy(core.bool),
    isNotSelectable: dart.legacy(core.bool),
    continueStream: dart.legacy(async.Stream$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool))))),
    cancelStream: dart.legacy(async.Stream$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool))))),
    jumpStream: dart.legacy(async.Stream$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool))))),
    shouldShowSummary: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(material_step.StepDirective, () => ({
    __proto__: dart.getSetters(material_step.StepDirective.__proto__),
    partiallyComplete: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_step.StepDirective, L1);
  dart.setFieldSignature(material_step.StepDirective, () => ({
    __proto__: dart.getFields(material_step.StepDirective.__proto__),
    [_continueController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))))),
    [_cancelController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))))),
    [_jumpController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(async_action.AsyncAction$(dart.legacy(core.bool)))))),
    name: dart.fieldType(dart.legacy(core.String)),
    optional: dart.fieldType(dart.legacy(core.bool)),
    completeSummary: dart.fieldType(dart.legacy(core.String)),
    hideButtons: dart.fieldType(dart.legacy(core.bool)),
    cancelHidden: dart.fieldType(dart.legacy(core.bool)),
    complete: dart.fieldType(dart.legacy(core.bool)),
    [_partiallyComplete]: dart.fieldType(dart.legacy(core.bool)),
    canContinue: dart.fieldType(dart.legacy(core.bool)),
    busy: dart.fieldType(dart.legacy(core.bool)),
    isLast: dart.fieldType(dart.legacy(core.bool)),
    isSelectable: dart.fieldType(dart.legacy(core.bool)),
    index: dart.fieldType(dart.legacy(core.int)),
    summaryDirective: dart.fieldType(dart.legacy(material_step.SummaryDirective)),
    active: dart.fieldType(dart.legacy(core.bool))
  }));
  material_step.SummaryDirective = class SummaryDirective extends portal.TemplatePortal {
    set summary(step) {
      if (!(step != null)) dart.assertFailed("Should pass in a valid step for a summary.", L0, 164, 12, "step != null");
      step.summaryDirective = this;
    }
  };
  (material_step.SummaryDirective.new = function(ref, viewContainerRef) {
    material_step.SummaryDirective.__proto__.new.call(this, ref, viewContainerRef);
    ;
  }).prototype = material_step.SummaryDirective.prototype;
  dart.addTypeTests(material_step.SummaryDirective);
  dart.addTypeCaches(material_step.SummaryDirective);
  dart.setSetterSignature(material_step.SummaryDirective, () => ({
    __proto__: dart.getSetters(material_step.SummaryDirective.__proto__),
    summary: dart.legacy(material_step.StepDirective)
  }));
  dart.setLibraryUri(material_step.SummaryDirective, L1);
  dart.trackLibraries("packages/angular_components/material_stepper/material_step", {
    "package:angular_components/material_stepper/material_step.dart": material_step
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_step.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgCS;;;;;;IAKF;;;;;;IAKE;;;;;;IAIF;;;;;;IAIA;;;;;;IAMA;;;;;;IAmBA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IACD;;;;;;IAGa;;;;;;IAMZ;;;;;;0BA1BsB;AACzB,YAAU,WAAF,CAAC,KAAa,YAAT,eAAY;AACH,MAAtB,2BAAqB,CAAC;IACxB;;AAE8B;IAAkB;;AAuBzB;IAAQ;;AAEX,YAAA,AAAM,gBAAG;IAAC;;AAEF,wBAAC;IAAY;;AAMO,YAAA,AAAoB;IAAM;;AAM5B,YAAA,AAAkB;IAAM;;AAM1B,YAAA,AAAgB;IAAM;wBAEvB;AACM,MAA/C,yBAAmB,MAAM,EAAE;IAC7B;sBAEyC;AACM,MAA7C,yBAAmB,MAAM,EAAE;IAC7B;oBAEuC;AACM,MAA3C,yBAAmB,MAAM,EAAE;IAC7B;;AAE8B,YAAmC,YAAlC,gBAAU,wBAAmB,kBAAQ;IAAQ;yBAElC,QACF;AAC3B,MAAX,YAAO;AACe,MAAtB,AAAW,UAAD,KAAK,MAAM;AAGnB,MAFF,AAAO,AAAO,MAAR,wBAAa,QAAC;AACN,QAAZ,YAAO;;IAEX;;8CAnD0B,KAAsB;IAhE1C,4BACF,yDAAoD;IAElD,0BACF,yDAAoD;IAElD,wBACF,yDAAoD;IAIjD;IAKF,iBAAW;IAKT;IAIF,oBAAc;IAId,qBAAe;IAMf,iBAAW;IAKX,2BAAqB;IAcrB,oBAAc;IAEd,aAAO;IACP,eAAS;IACT,qBAAe;IAChB;IAGa;IAMZ,eAAS;AAHR,yDAAM,GAAG,EAAE,gBAAgB;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gBA4ER;AACxB,YAAO,AAAK,IAAD,IAAI,yBAAM;AACO,MAA5B,AAAK,IAAD,oBAAoB;IAC1B;;iDAE6B,KAAsB;AAC7C,4DAAM,GAAG,EAAE,gBAAgB;;EAAC","file":"material_step.unsound.ddc.js"}');
  // Exports:
  return {
    material_stepper__material_step: material_step
  };
}));

//# sourceMappingURL=material_step.unsound.ddc.js.map
