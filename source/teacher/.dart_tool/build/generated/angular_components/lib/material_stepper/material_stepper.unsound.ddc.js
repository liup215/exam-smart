define(['dart_sdk', 'packages/angular_components/material_stepper/material_step', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/material_stepper/common', 'packages/angular_components/utils/browser/events/events', 'packages/intl/intl'], (function load__packages__angular_components__material_stepper__material_stepper(dart_sdk, packages__angular_components__material_stepper__material_step, packages__angular_components__src__model__action__async_action, packages__angular_components__material_stepper__common, packages__angular_components__utils__browser__events__events, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_step = packages__angular_components__material_stepper__material_step.material_stepper__material_step;
  const async_action_controller = packages__angular_components__src__model__action__async_action.src__model__action__async_action_controller;
  const common = packages__angular_components__material_stepper__common.material_stepper__common;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const intl = packages__intl__intl.intl;
  var material_stepper = Object.create(dart.library);
  var $clear = dartx.clear;
  var $_get = dartx._get;
  var $contains = dartx.contains;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $_set = dartx._set;
  var StepDirectiveL = () => (StepDirectiveL = dart.constFn(dart.legacy(material_step.StepDirective)))();
  var JSArrayOfStepDirectiveL = () => (JSArrayOfStepDirectiveL = dart.constFn(_interceptors.JSArray$(StepDirectiveL())))();
  var StreamControllerOfStepDirectiveL = () => (StreamControllerOfStepDirectiveL = dart.constFn(async.StreamController$(StepDirectiveL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var LinkedMapOfStepDirectiveL$StringL = () => (LinkedMapOfStepDirectiveL$StringL = dart.constFn(_js_helper.LinkedMap$(StepDirectiveL(), StringL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var FutureOfboolL = () => (FutureOfboolL = dart.constFn(async.Future$(boolL())))();
  var AsyncActionControllerOfboolL = () => (AsyncActionControllerOfboolL = dart.constFn(async_action_controller.AsyncActionController$(boolL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var VoidToObjectL = () => (VoidToObjectL = dart.constFn(dart.fnType(ObjectL(), [])))();
  var FutureLOfboolL = () => (FutureLOfboolL = dart.constFn(dart.legacy(FutureOfboolL())))();
  var VoidToFutureLOfboolL = () => (VoidToFutureLOfboolL = dart.constFn(dart.fnType(FutureLOfboolL(), [])))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  var StepDirectiveLToStepDirectiveL = () => (StepDirectiveLToStepDirectiveL = dart.constFn(dart.fnType(StepDirectiveL(), [StepDirectiveL()])))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/angular_components/material_stepper/material_stepper.dart";
  var L1 = "package:angular_components/material_stepper/material_stepper.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(StringL(), ObjectL(), ["currentStepNumber", 1, "totalSteps", 4, "stepLabel", "Select campaign settings"]);
    }
  }, false);
  var _activeStepIndex = dart.privateName(material_stepper, "_activeStepIndex");
  var _orientation = dart.privateName(material_stepper, "_orientation");
  var _size = dart.privateName(material_stepper, "_size");
  var _legalJumps = dart.privateName(material_stepper, "_legalJumps");
  var _stepDirectiveList = dart.privateName(material_stepper, "_stepDirectiveList");
  var _activeStepController = dart.privateName(material_stepper, "_activeStepController");
  var _stepAriaLabel = dart.privateName(material_stepper, "_stepAriaLabel");
  var _recalculatePropertiesOfSteps = dart.privateName(material_stepper, "_recalculatePropertiesOfSteps");
  var _onStepsChange = dart.privateName(material_stepper, "_onStepsChange");
  var _stepTo = dart.privateName(material_stepper, "_stepTo");
  var C0;
  var steps = dart.privateName(material_stepper, "MaterialStepperComponent.steps");
  var stepperDone = dart.privateName(material_stepper, "MaterialStepperComponent.stepperDone");
  var announceCurrentStep = dart.privateName(material_stepper, "MaterialStepperComponent.announceCurrentStep");
  var stickyHeader = dart.privateName(material_stepper, "MaterialStepperComponent.stickyHeader");
  var keepInactiveStepsInDom = dart.privateName(material_stepper, "MaterialStepperComponent.keepInactiveStepsInDom");
  var noText = dart.privateName(material_stepper, "MaterialStepperComponent.noText");
  var yesText = dart.privateName(material_stepper, "MaterialStepperComponent.yesText");
  var stepperNativeElement = dart.privateName(material_stepper, "MaterialStepperComponent.stepperNativeElement");
  material_stepper.MaterialStepperComponent = class MaterialStepperComponent extends core.Object {
    get steps() {
      return this[steps];
    }
    set steps(value) {
      this[steps] = value;
    }
    get stepperDone() {
      return this[stepperDone];
    }
    set stepperDone(value) {
      this[stepperDone] = value;
    }
    get announceCurrentStep() {
      return this[announceCurrentStep];
    }
    set announceCurrentStep(value) {
      this[announceCurrentStep] = value;
    }
    get stickyHeader() {
      return this[stickyHeader];
    }
    set stickyHeader(value) {
      this[stickyHeader] = value;
    }
    get keepInactiveStepsInDom() {
      return this[keepInactiveStepsInDom];
    }
    set keepInactiveStepsInDom(value) {
      this[keepInactiveStepsInDom] = value;
    }
    get noText() {
      return this[noText];
    }
    set noText(value) {
      this[noText] = value;
    }
    get yesText() {
      return this[yesText];
    }
    set yesText(value) {
      this[yesText] = value;
    }
    get stepperNativeElement() {
      return this[stepperNativeElement];
    }
    set stepperNativeElement(value) {
      this[stepperNativeElement] = value;
    }
    get activeStepIndex() {
      return this[_activeStepIndex];
    }
    set activeStepIndex(value) {
      this[_activeStepIndex] = value;
      this[_recalculatePropertiesOfSteps]();
    }
    set stepsQuery(value) {
      if (dart.equals(this[_stepDirectiveList], value)) return;
      this[_stepAriaLabel][$clear]();
      this[_stepDirectiveList] = value;
      this.activeStepIndex == null ? this.activeStepIndex = 0 : null;
      async.scheduleMicrotask(dart.fn(() => {
        this[_onStepsChange](this[_stepDirectiveList]);
      }, VoidToNull()));
    }
    jumpStep(index) {
      if (dart.test(this.steps[$_get](index).isNotSelectable)) return FutureOfboolL().value(false);
      this.stepperDone = false;
      return this[_stepTo](index);
    }
    stepForward(event, step) {
      event.preventDefault();
      event.stopPropagation();
      let ctrl = new (AsyncActionControllerOfboolL()).new();
      step.requestStepContinue(ctrl.action);
      ctrl.execute(dart.fn(() => {
        this.activeStep.complete = true;
        if (dart.test(this.activeStep.isLast)) {
          this.stepperDone = true;
          return true;
        }
        return this[_stepTo](dart.notNull(this.activeStepIndex) + 1);
      }, VoidToObjectL()));
    }
    stepBackward(event, step) {
      event.preventDefault();
      event.stopPropagation();
      let ctrl = new (AsyncActionControllerOfboolL()).new();
      step.requestStepCancel(ctrl.action);
      ctrl.execute(dart.fn(() => {
        this.activeStep.complete = false;
        return this[_stepTo](dart.notNull(this.activeStepIndex) - 1);
      }, VoidToFutureLOfboolL()));
    }
    set orientation(s) {
      if (!dart.test(common.orientations[$contains](s))) dart.assertFailed(null, L0, 162, 12, "orientations.contains(s)");
      this[_orientation] = s;
    }
    set size(s) {
      if (!dart.test(common.sizes[$contains](s))) dart.assertFailed(null, L0, 172, 12, "sizes.contains(s)");
      this[_size] = s;
    }
    get shouldInlineContent() {
      return this.orientation === "vertical" && this.size === "default";
    }
    get orientation() {
      return this[_orientation];
    }
    get size() {
      return this[_size];
    }
    get activeStep() {
      return dart.test(this.steps[$isNotEmpty]) ? this.steps[$_get](this.activeStepIndex) : null;
    }
    set legalJumps(s) {
      if (!dart.test(common.jumps[$contains](s))) dart.assertFailed(null, L0, 201, 12, "jumps.contains(s)");
      this[_legalJumps] = s;
      this[_recalculatePropertiesOfSteps]();
    }
    stopPropagationOfEnterAndSpace(keyboardEvent) {
      let keyCode = keyboardEvent.keyCode;
      if (keyCode === 13 || dart.test(events.isSpaceKey(keyboardEvent))) {
        keyboardEvent.stopPropagation();
      }
    }
    [_stepTo](index) {
      if (index == this.activeStepIndex) return FutureOfboolL().value(true);
      let actionController = new (AsyncActionControllerOfboolL()).new();
      this.steps[$_get](index).requestStepJump(actionController.action);
      actionController.execute(dart.fn(() => {
        this.activeStepIndex = index;
        this[_activeStepController].add(this.activeStep);
        return true;
      }, VoidToboolL()), {valueOnCancel: false});
      return actionController.action.onDone;
    }
    [_onStepsChange](stepsQuery) {
      let i = 0;
      let len = stepsQuery[$length];
      this.steps = stepsQuery[$map](StepDirectiveL(), dart.fn(s => {
        s.index = i;
        s.isLast = i === dart.notNull(len) - 1;
        i = i + 1;
        return s;
      }, StepDirectiveLToStepDirectiveL()))[$toList]();
      this[_recalculatePropertiesOfSteps]();
    }
    [_recalculatePropertiesOfSteps]() {
      let i = 0;
      for (let s of this.steps) {
        s.active = i === this.activeStepIndex;
        if (dart.test(s.active)) {
          s.complete = false;
        }
        switch (this[_legalJumps]) {
          case "all":
          {
            s.isSelectable = !dart.test(s.active);
            break;
          }
          case "none":
          {
            s.isSelectable = false;
            break;
          }
          case "backwards":
          {
            s.isSelectable = i < dart.notNull(this.activeStepIndex);
          }
        }
        i = i + 1;
      }
    }
    stepAriaLabel(step) {
      let t3, t2, t1, t0;
      t0 = this[_stepAriaLabel];
      t1 = step;
      t2 = t0[$_get](t1);
      return t2 == null ? (t3 = material_stepper.MaterialStepperComponent._stepAriaAnnounce(dart.notNull(step.index) + 1, this.steps[$length], step.name), t0[$_set](t1, t3), t3) : t2;
    }
    get stepAriaAnnounce() {
      return this.activeStep == null ? "" : this.stepAriaLabel(this.activeStep);
    }
    get activeStepChanged() {
      return this[_activeStepController].stream;
    }
    static _stepAriaAnnounce(currentStepNumber, totalSteps, stepLabel) {
      return intl.Intl.message("Step " + dart.str(currentStepNumber) + " of " + dart.str(totalSteps) + ", " + dart.str(stepLabel), {name: "_stepAriaAnnounce", args: JSArrayOfObjectL().of([currentStepNumber, totalSteps, stepLabel]), desc: "Message announced to visually impaired users about " + "which step of a multi step process a user is on. " + "[REL_NOTE: xilli/03-31-19]", examples: C0 || CT.C0});
    }
  };
  (material_stepper.MaterialStepperComponent.new = function() {
    this[steps] = JSArrayOfStepDirectiveL().of([]);
    this[_activeStepIndex] = null;
    this[stepperDone] = false;
    this[_orientation] = "horizontal";
    this[_size] = "default";
    this[_legalJumps] = null;
    this[_stepDirectiveList] = null;
    this[_activeStepController] = StreamControllerOfStepDirectiveL().broadcast({sync: true});
    this[_stepAriaLabel] = new (LinkedMapOfStepDirectiveL$StringL()).new();
    this[announceCurrentStep] = false;
    this[stickyHeader] = false;
    this[keepInactiveStepsInDom] = false;
    this[noText] = material_stepper.MaterialStepperComponent._cancelMsg;
    this[yesText] = material_stepper.MaterialStepperComponent.continueMsg;
    this[stepperNativeElement] = null;
    ;
  }).prototype = material_stepper.MaterialStepperComponent.prototype;
  dart.addTypeTests(material_stepper.MaterialStepperComponent);
  dart.addTypeCaches(material_stepper.MaterialStepperComponent);
  dart.setMethodSignature(material_stepper.MaterialStepperComponent, () => ({
    __proto__: dart.getMethods(material_stepper.MaterialStepperComponent.__proto__),
    jumpStep: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.int)]),
    stepForward: dart.fnType(dart.void, [dart.legacy(html.Event), dart.legacy(material_step.StepDirective)]),
    stepBackward: dart.fnType(dart.void, [dart.legacy(html.Event), dart.legacy(material_step.StepDirective)]),
    stopPropagationOfEnterAndSpace: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)]),
    [_stepTo]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.int)]),
    [_onStepsChange]: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(material_step.StepDirective)))]),
    [_recalculatePropertiesOfSteps]: dart.fnType(dart.void, []),
    stepAriaLabel: dart.fnType(dart.legacy(core.String), [dart.legacy(material_step.StepDirective)])
  }));
  dart.setGetterSignature(material_stepper.MaterialStepperComponent, () => ({
    __proto__: dart.getGetters(material_stepper.MaterialStepperComponent.__proto__),
    activeStepIndex: dart.legacy(core.int),
    shouldInlineContent: dart.legacy(core.bool),
    orientation: dart.legacy(core.String),
    size: dart.legacy(core.String),
    activeStep: dart.legacy(material_step.StepDirective),
    stepAriaAnnounce: dart.legacy(core.String),
    activeStepChanged: dart.legacy(async.Stream$(dart.legacy(material_step.StepDirective)))
  }));
  dart.setSetterSignature(material_stepper.MaterialStepperComponent, () => ({
    __proto__: dart.getSetters(material_stepper.MaterialStepperComponent.__proto__),
    activeStepIndex: dart.legacy(core.int),
    stepsQuery: dart.legacy(core.List$(dart.legacy(material_step.StepDirective))),
    orientation: dart.legacy(core.String),
    size: dart.legacy(core.String),
    legalJumps: dart.legacy(core.String)
  }));
  dart.setLibraryUri(material_stepper.MaterialStepperComponent, L1);
  dart.setFieldSignature(material_stepper.MaterialStepperComponent, () => ({
    __proto__: dart.getFields(material_stepper.MaterialStepperComponent.__proto__),
    steps: dart.fieldType(dart.legacy(core.List$(dart.legacy(material_step.StepDirective)))),
    [_activeStepIndex]: dart.fieldType(dart.legacy(core.int)),
    stepperDone: dart.fieldType(dart.legacy(core.bool)),
    [_orientation]: dart.fieldType(dart.legacy(core.String)),
    [_size]: dart.fieldType(dart.legacy(core.String)),
    [_legalJumps]: dart.fieldType(dart.legacy(core.String)),
    [_stepDirectiveList]: dart.fieldType(dart.legacy(core.List$(dart.legacy(material_step.StepDirective)))),
    [_activeStepController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(material_step.StepDirective)))),
    [_stepAriaLabel]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(material_step.StepDirective), dart.legacy(core.String)))),
    announceCurrentStep: dart.fieldType(dart.legacy(core.bool)),
    stickyHeader: dart.fieldType(dart.legacy(core.bool)),
    keepInactiveStepsInDom: dart.fieldType(dart.legacy(core.bool)),
    noText: dart.fieldType(dart.legacy(core.String)),
    yesText: dart.fieldType(dart.legacy(core.String)),
    stepperNativeElement: dart.fieldType(dart.legacy(html.HtmlElement))
  }));
  dart.defineLazy(material_stepper.MaterialStepperComponent, {
    /*material_stepper.MaterialStepperComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*material_stepper.MaterialStepperComponent.defaultOrientation*/get defaultOrientation() {
      return "horizontal";
    },
    /*material_stepper.MaterialStepperComponent.defaultSize*/get defaultSize() {
      return "default";
    },
    /*material_stepper.MaterialStepperComponent.optionalMsg*/get optionalMsg() {
      return intl.Intl.message("Optional", {name: "optionalMsg", desc: "Label denoting that a step in a task flow is optional."});
    },
    /*material_stepper.MaterialStepperComponent.continueMsg*/get continueMsg() {
      return intl.Intl.message("Continue", {name: "continueMsg", desc: "Button for continuing to the next step in a task flow."});
    },
    /*material_stepper.MaterialStepperComponent._cancelMsg*/get _cancelMsg() {
      return intl.Intl.message("Cancel", {name: "_cancelMsg", desc: "Button for cancelling the current step in a task flow."});
    }
  }, true);
  material_stepper.MaterialStepperBackButtonTextDirective = class MaterialStepperBackButtonTextDirective extends core.Object {};
  (material_stepper.MaterialStepperBackButtonTextDirective.new = function(stepper) {
    stepper.noText = material_stepper.MaterialStepperBackButtonTextDirective._msgBack;
  }).prototype = material_stepper.MaterialStepperBackButtonTextDirective.prototype;
  dart.addTypeTests(material_stepper.MaterialStepperBackButtonTextDirective);
  dart.addTypeCaches(material_stepper.MaterialStepperBackButtonTextDirective);
  dart.setLibraryUri(material_stepper.MaterialStepperBackButtonTextDirective, L1);
  dart.defineLazy(material_stepper.MaterialStepperBackButtonTextDirective, {
    /*material_stepper.MaterialStepperBackButtonTextDirective._msgBack*/get _msgBack() {
      return intl.Intl.message("Back", {name: "_msgBack", desc: "Text on stepper back button between steps"});
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_stepper/material_stepper", {
    "package:angular_components/material_stepper/material_stepper.dart": material_stepper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_stepper.dart"],"names":[],"mappings":"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","file":"material_stepper.unsound.ddc.js"}');
  // Exports:
  return {
    material_stepper__material_stepper: material_stepper
  };
}));

//# sourceMappingURL=material_stepper.unsound.ddc.js.map
