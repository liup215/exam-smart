define(['dart_sdk', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_input__material_input_multiline(dart_sdk, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__utils__angular__properties__properties, packages__angular_components__material_input__base_material_input, packages__angular_components__utils__angular__reference__reference, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular__src__bootstrap__modules, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var material_input_multiline = Object.create(dart.library);
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var DomServiceLToNull = () => (DomServiceLToNull = dart.constFn(dart.fnType(core.Null, [DomServiceL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_input/material_input_multiline.dart";
  var _subscription = dart.privateName(material_input_multiline, "_subscription");
  var _rows = dart.privateName(material_input_multiline, "_rows");
  var _maxRows = dart.privateName(material_input_multiline, "_maxRows");
  var _inputLineHeight = dart.privateName(material_input_multiline, "_inputLineHeight");
  var _domService$ = dart.privateName(material_input_multiline, "_domService");
  var _changeDetector = dart.privateName(material_input_multiline, "_changeDetector");
  var textareaEl = dart.privateName(material_input_multiline, "MaterialMultilineInputComponent.textareaEl");
  var popupSourceEl = dart.privateName(material_input_multiline, "MaterialMultilineInputComponent.popupSourceEl");
  var inputAriaDescribedBy = dart.privateName(material_input_multiline, "MaterialMultilineInputComponent.inputAriaDescribedBy");
  material_input_multiline.MaterialMultilineInputComponent = class MaterialMultilineInputComponent extends base_material_input.BaseMaterialInput {
    get textareaEl() {
      return this[textareaEl];
    }
    set textareaEl(value) {
      this[textareaEl] = value;
    }
    get popupSourceEl() {
      return this[popupSourceEl];
    }
    set popupSourceEl(value) {
      this[popupSourceEl] = value;
    }
    get inputAriaDescribedBy() {
      return this[inputAriaDescribedBy];
    }
    set inputAriaDescribedBy(value) {
      this[inputAriaDescribedBy] = value;
    }
    get inputRef() {
      return this.textareaEl;
    }
    focus() {
      return super.focus();
    }
    get elementRef() {
      return this.popupSourceEl;
    }
    get mirrorText() {
      let t0;
      return dart.notNull((t0 = this.inputText, t0 == null ? "" : t0)) + "\n";
    }
    set lineHeightMeasure(value) {
      this[_domService$].scheduleRead(dart.fn(() => {
        let t0, t0$;
        let isDestroyed = this.textareaEl == null;
        if (isDestroyed) return;
        let height = ElementL().as(value.nativeElement).clientHeight;
        if (height !== 0) {
          this[_inputLineHeight] = height;
          t0 = this[_subscription];
          t0 == null ? null : t0.cancel();
          this[_subscription] = null;
          t0$ = this[_changeDetector];
          (() => {
            t0$.markForCheck();
            t0$.detectChanges();
            return t0$;
          })();
        } else if (this[_subscription] == null) {
          this[_subscription] = this[_domService$].onLayoutChanged.listen(dart.fn(_ => {
            this.lineHeightMeasure = value;
          }, DomServiceLToNull()));
        }
      }, VoidToNull()));
    }
    get minInputHeight() {
      return dart.notNull(this.rows) * dart.notNull(this[_inputLineHeight]);
    }
    get maxInputHeight() {
      return dart.notNull(this[_maxRows]) > 0 ? dart.notNull(this[_maxRows]) * dart.notNull(this[_inputLineHeight]) : null;
    }
    get textAreaHeight() {
      return this.rows == this.maxRows ? this.maxInputHeight : null;
    }
    get rows() {
      return this[_rows];
    }
    set rows(value) {
      this[_rows] = properties.getInt(value);
      this[_changeDetector].markForCheck();
    }
    get maxRows() {
      return this[_maxRows];
    }
    set maxRows(value) {
      this[_maxRows] = properties.getInt(value);
      this[_changeDetector].markForCheck();
    }
    get inputTabIndex() {
      return dart.test(this.disabled) ? -1 : 0;
    }
    handleChange(event, element) {
      this.inputChange(element.value, element.validity.valid, element.validationMessage);
      event.stopPropagation();
    }
    ngOnDestroy() {
      let t0;
      super.ngOnDestroy();
      t0 = this[_subscription];
      t0 == null ? null : t0.cancel();
      this[_subscription] = null;
      this.textareaEl = null;
      this.popupSourceEl = null;
    }
  };
  (material_input_multiline.MaterialMultilineInputComponent.new = function(cd, changeDetector, validator, _domService) {
    this[_subscription] = null;
    this[textareaEl] = null;
    this[_rows] = 1;
    this[_maxRows] = 0;
    this[_inputLineHeight] = 16;
    this[popupSourceEl] = null;
    this[inputAriaDescribedBy] = null;
    this[_domService$] = _domService;
    this[_changeDetector] = changeDetector;
    material_input_multiline.MaterialMultilineInputComponent.__proto__.new.call(this, cd, changeDetector, validator);
    ;
  }).prototype = material_input_multiline.MaterialMultilineInputComponent.prototype;
  dart.addTypeTests(material_input_multiline.MaterialMultilineInputComponent);
  dart.addTypeCaches(material_input_multiline.MaterialMultilineInputComponent);
  material_input_multiline.MaterialMultilineInputComponent[dart.implements] = () => [reference.ReferenceDirective, lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_input_multiline.MaterialMultilineInputComponent, () => ({
    __proto__: dart.getMethods(material_input_multiline.MaterialMultilineInputComponent.__proto__),
    handleChange: dart.fnType(dart.void, [dart.legacy(html.Event), dart.legacy(html.TextAreaElement)])
  }));
  dart.setGetterSignature(material_input_multiline.MaterialMultilineInputComponent, () => ({
    __proto__: dart.getGetters(material_input_multiline.MaterialMultilineInputComponent.__proto__),
    elementRef: dart.legacy(element_ref.ElementRef),
    mirrorText: dart.legacy(core.String),
    minInputHeight: dart.legacy(core.int),
    maxInputHeight: dart.legacy(core.int),
    textAreaHeight: dart.legacy(core.int),
    rows: dart.legacy(core.int),
    maxRows: dart.legacy(core.int),
    inputTabIndex: dart.legacy(core.int)
  }));
  dart.setSetterSignature(material_input_multiline.MaterialMultilineInputComponent, () => ({
    __proto__: dart.getSetters(material_input_multiline.MaterialMultilineInputComponent.__proto__),
    lineHeightMeasure: dart.legacy(element_ref.ElementRef),
    rows: dart.dynamic,
    maxRows: dart.dynamic
  }));
  dart.setLibraryUri(material_input_multiline.MaterialMultilineInputComponent, L0);
  dart.setFieldSignature(material_input_multiline.MaterialMultilineInputComponent, () => ({
    __proto__: dart.getFields(material_input_multiline.MaterialMultilineInputComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
    [_subscription]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    textareaEl: dart.fieldType(dart.legacy(element_ref.ElementRef)),
    [_rows]: dart.fieldType(dart.legacy(core.int)),
    [_maxRows]: dart.fieldType(dart.legacy(core.int)),
    [_inputLineHeight]: dart.fieldType(dart.legacy(core.int)),
    popupSourceEl: dart.fieldType(dart.legacy(element_ref.ElementRef)),
    inputAriaDescribedBy: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(material_input_multiline.MaterialMultilineInputComponent, {
    /*material_input_multiline.MaterialMultilineInputComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*material_input_multiline.MaterialMultilineInputComponent.hostTabIndex*/get hostTabIndex() {
      return -1;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/material_input_multiline", {
    "package:angular_components/material_input/material_input_multiline.dart": material_input_multiline
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_input_multiline.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8Da;;;;;;IAoCA;;;;;;IAmEJ;;;;;;;AA9FoB;IAAU;;AAwBrB,YAAM;IAAO;;AAOA;IAAa;;;AAGjB,YAAkB,eAAP,2BAAV,OAAa,YAAM;IAAI;0BAGhB;AAsB7B,MAnBF,AAAY,gCAAa;;AACnB,0BAAc,AAAW,mBAAG;AAChC,YAAI,WAAW,EAAE;AAEb,qBAA8B,AAAY,cAAhC,AAAM,KAAD;AACnB,YAAI,MAAM,KAAI;AACa,UAAzB,yBAAmB,MAAM;AACF,eAAvB;8BAAe;AACK,UAApB,sBAAgB;AAIG,gBAHnB;;AACI;AAEA;;;cACC,KAAI,AAAc,uBAAG;AAIxB,UAFF,sBAAgB,AAAY,AAAgB,0CAAO,QAAC;AACzB,YAAzB,yBAAoB,KAAK;;;;IAIjC;;AAE0B,YAAK,cAAL,0BAAO;IAAgB;;AACvB,YAAS,cAAT,kBAAW,IAAa,aAAT,+BAAW,0BAAmB;IAAI;;AAIjD,YAAA,AAAK,cAAG,eAAU,sBAAiB;IAAI;;AAEjD;IAAK;aAMJ;AACM,MAArB,cAAQ,kBAAO,KAAK;AACU,MAA9B,AAAgB;IAClB;;AAEmB;IAAQ;gBAMP;AACM,MAAxB,iBAAW,kBAAO,KAAK;AACO,MAA9B,AAAgB;IAClB;;AAUyB,wCAAW,CAAC,IAAI;IAAC;iBAGlB,OAAuB;AAK5C,MAJD,iBACE,AAAQ,OAAD,QACP,AAAQ,AAAS,OAAV,iBACP,AAAQ,OAAD;AAEc,MAAvB,AAAM,KAAD;IACP;;;AAIqB,MAAb;AACiB,WAAvB;0BAAe;AACK,MAApB,sBAAgB;AACC,MAAjB,kBAAa;AACO,MAApB,qBAAgB;IAClB;;2EAxGkC,IACZ,gBACA,WACb;IA7BU;IAGR;IAaP,cAAQ;IAIR,iBAAW;IAGX,yBAAmB;IAgBZ;IAmEJ;IA7EE;IACa,wBAAE,cAAc;AAChC,sFAAM,EAAE,EAAE,cAAc,EAAE,SAAS;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAvC7B,kEAAS;;;MAGT,qEAAY","file":"material_input_multiline.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__material_input_multiline: material_input_multiline
  };
}));

//# sourceMappingURL=material_input_multiline.unsound.ddc.js.map
