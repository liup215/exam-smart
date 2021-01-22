define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_forms/src/directives', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/material_input/base_material_input'], (function load__packages__angular_components__material_input__material_input_default_value_accessor(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_forms__src__directives, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__material_input__base_material_input) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const control_value_accessor = packages__angular_forms__src__directives.src__directives__control_value_accessor;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  var material_input_default_value_accessor = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToNull = () => (StringLToNull = dart.constFn(dart.fnType(core.Null, [StringL()])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var FocusEventLToNull = () => (FocusEventLToNull = dart.constFn(dart.fnType(core.Null, [FocusEventL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_input/material_input_default_value_accessor.dart";
  var _cd$ = dart.privateName(material_input_default_value_accessor, "_cd");
  const _is_BaseMaterialInputValueAccessor_default = Symbol('_is_BaseMaterialInputValueAccessor_default');
  var disposer$ = dart.privateName(material_input_default_value_accessor, "BaseMaterialInputValueAccessor.disposer");
  var input$ = dart.privateName(material_input_default_value_accessor, "BaseMaterialInputValueAccessor.input");
  material_input_default_value_accessor.BaseMaterialInputValueAccessor$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class BaseMaterialInputValueAccessor extends core.Object {
      get disposer() {
        return this[disposer$];
      }
      set disposer(value) {
        super.disposer = value;
      }
      get input() {
        return this[input$];
      }
      set input(value) {
        super.input = value;
      }
      writeValue(newValue) {
        TL().as(newValue);
        this.input.inputText = this.formatValue(newValue);
      }
      formatValue(value) {
        let t0;
        TL().as(value);
        return dart.str((t0 = value, t0 == null ? "" : t0));
      }
      registerOnTouched(callback) {
        let sub = null;
        sub = this.input.onBlur.listen(dart.fn(_ => {
          sub.cancel();
          callback();
        }, FocusEventLToNull()));
        this.disposer.addStreamSubscription(dart.dynamic, sub);
      }
      ngOnDestroy() {
        this.disposer.dispose();
      }
      onDisabledChanged(isDisabled) {
        this.input.disabled = isDisabled;
      }
    }
    (BaseMaterialInputValueAccessor.new = function(input, _cd) {
      let t0;
      this[disposer$] = new disposer.Disposer.oneShot();
      this[input$] = input;
      this[_cd$] = _cd;
      t0 = this[_cd$];
      t0 == null ? null : t0.valueAccessor = this;
      this.disposer.addFunction(dart.fn(() => {
        let t0;
        t0 = this[_cd$];
        t0 == null ? null : t0.valueAccessor = null;
      }, VoidToNull()));
    }).prototype = BaseMaterialInputValueAccessor.prototype;
    dart.addTypeTests(BaseMaterialInputValueAccessor);
    BaseMaterialInputValueAccessor.prototype[_is_BaseMaterialInputValueAccessor_default] = true;
    dart.addTypeCaches(BaseMaterialInputValueAccessor);
    BaseMaterialInputValueAccessor[dart.implements] = () => [control_value_accessor.ControlValueAccessor$(dart.legacy(T)), lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(BaseMaterialInputValueAccessor, () => ({
      __proto__: dart.getMethods(BaseMaterialInputValueAccessor.__proto__),
      writeValue: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      formatValue: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Object)]),
      registerOnTouched: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, []))]),
      ngOnDestroy: dart.fnType(dart.void, []),
      onDisabledChanged: dart.fnType(dart.void, [dart.legacy(core.bool)])
    }));
    dart.setLibraryUri(BaseMaterialInputValueAccessor, L0);
    dart.setFieldSignature(BaseMaterialInputValueAccessor, () => ({
      __proto__: dart.getFields(BaseMaterialInputValueAccessor.__proto__),
      disposer: dart.finalFieldType(dart.legacy(disposer.Disposer)),
      input: dart.finalFieldType(dart.legacy(base_material_input.BaseMaterialInput)),
      [_cd$]: dart.finalFieldType(dart.legacy(ng_control.NgControl))
    }));
    return BaseMaterialInputValueAccessor;
  });
  material_input_default_value_accessor.BaseMaterialInputValueAccessor = material_input_default_value_accessor.BaseMaterialInputValueAccessor$();
  dart.addTypeTests(material_input_default_value_accessor.BaseMaterialInputValueAccessor, _is_BaseMaterialInputValueAccessor_default);
  material_input_default_value_accessor.MaterialInputDefaultValueAccessor = class MaterialInputDefaultValueAccessor extends material_input_default_value_accessor.BaseMaterialInputValueAccessor$(dart.legacy(core.String)) {
    registerOnChange(callback) {
      this.disposer.addStreamSubscription(StringL(), this.input.onKeypress.listen(dart.fn(value => {
        callback(value);
      }, StringLToNull())));
    }
  };
  (material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new = function(input, control) {
    material_input_default_value_accessor.MaterialInputDefaultValueAccessor.__proto__.new.call(this, input, control);
    ;
  }).prototype = material_input_default_value_accessor.MaterialInputDefaultValueAccessor.prototype;
  dart.addTypeTests(material_input_default_value_accessor.MaterialInputDefaultValueAccessor);
  dart.addTypeCaches(material_input_default_value_accessor.MaterialInputDefaultValueAccessor);
  dart.setMethodSignature(material_input_default_value_accessor.MaterialInputDefaultValueAccessor, () => ({
    __proto__: dart.getMethods(material_input_default_value_accessor.MaterialInputDefaultValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String)], {rawValue: dart.legacy(core.String)}, {}))])
  }));
  dart.setLibraryUri(material_input_default_value_accessor.MaterialInputDefaultValueAccessor, L0);
  material_input_default_value_accessor.MaterialInputBlurValueAccessor = class MaterialInputBlurValueAccessor extends material_input_default_value_accessor.BaseMaterialInputValueAccessor$(dart.legacy(core.String)) {
    registerOnChange(callback) {
      this.disposer.addStreamSubscription(FocusEventL(), this.input.onBlur.listen(dart.fn(_ => {
        if (this.input != null) callback(this.input.inputText);
      }, FocusEventLToNull())));
    }
  };
  (material_input_default_value_accessor.MaterialInputBlurValueAccessor.new = function(input, control) {
    material_input_default_value_accessor.MaterialInputBlurValueAccessor.__proto__.new.call(this, input, control);
    ;
  }).prototype = material_input_default_value_accessor.MaterialInputBlurValueAccessor.prototype;
  dart.addTypeTests(material_input_default_value_accessor.MaterialInputBlurValueAccessor);
  dart.addTypeCaches(material_input_default_value_accessor.MaterialInputBlurValueAccessor);
  dart.setMethodSignature(material_input_default_value_accessor.MaterialInputBlurValueAccessor, () => ({
    __proto__: dart.getMethods(material_input_default_value_accessor.MaterialInputBlurValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String)], {rawValue: dart.legacy(core.String)}, {}))])
  }));
  dart.setLibraryUri(material_input_default_value_accessor.MaterialInputBlurValueAccessor, L0);
  material_input_default_value_accessor.MaterialInputChangeValueAccessor = class MaterialInputChangeValueAccessor extends material_input_default_value_accessor.BaseMaterialInputValueAccessor$(dart.legacy(core.String)) {
    registerOnChange(callback) {
      this.disposer.addStreamSubscription(StringL(), this.input.onChange.listen(dart.fn(_ => {
        if (this.input != null) callback(this.input.inputText);
      }, StringLToNull())));
    }
  };
  (material_input_default_value_accessor.MaterialInputChangeValueAccessor.new = function(input, control) {
    material_input_default_value_accessor.MaterialInputChangeValueAccessor.__proto__.new.call(this, input, control);
    ;
  }).prototype = material_input_default_value_accessor.MaterialInputChangeValueAccessor.prototype;
  dart.addTypeTests(material_input_default_value_accessor.MaterialInputChangeValueAccessor);
  dart.addTypeCaches(material_input_default_value_accessor.MaterialInputChangeValueAccessor);
  dart.setMethodSignature(material_input_default_value_accessor.MaterialInputChangeValueAccessor, () => ({
    __proto__: dart.getMethods(material_input_default_value_accessor.MaterialInputChangeValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String)], {rawValue: dart.legacy(core.String)}, {}))])
  }));
  dart.setLibraryUri(material_input_default_value_accessor.MaterialInputChangeValueAccessor, L0);
  dart.trackLibraries("packages/angular_components/material_input/material_input_default_value_accessor", {
    "package:angular_components/material_input/material_input_default_value_accessor.dart": material_input_default_value_accessor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_input_default_value_accessor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;MAiFQ;;;;;;MAEkB;;;;;;;gBAeN;AACuB,QAAvC,AAAM,uBAAY,iBAAY,QAAQ;MACxC;kBAMqB;;;AAAU,cAAgB,WAAP,KAAN,KAAK,QAAL,OAAS;MAAI;wBAGxB;AACF;AAIjB,QAHF,MAAM,AAAM,AAAO,yBAAO,QAAC;AACb,UAAZ,AAAI,GAAD;AACO,UAAV,AAAQ,QAAA;;AAEyB,QAAnC,AAAS,kDAAsB,GAAG;MACpC;;AAIoB,QAAlB,AAAS;MACX;wBAG4B;AACC,QAA3B,AAAM,sBAAW,UAAU;MAC7B;;mDAxCoC,OAAgC;;MAL9D,kBAAoB;MAKU;MAAgC;AAGzC,WAAzB;0BAAK,mBAAgB;AAKnB,MAJF,AAAS,0BAAY;;AAGM,aAAzB;4BAAK,mBAAgB;;IAEzB;;;;;;;;;;;;;;;;;;;;;;;;;qBAhEsB;AAGjB,MAFH,AAAS,+CAAsB,AAAM,AAAW,6BAAO,QAAC;AACvC,QAAf,AAAQ,QAAA,CAAC,KAAK;;IAElB;;0FARsB,OAAqC;AACrD,qGAAM,KAAK,EAAE,OAAO;;EAAC;;;;;;;;;qBAsBL;AAGjB,MAFH,AAAS,mDAAsB,AAAM,AAAO,yBAAO,QAAC;AAClD,YAAI,cAAS,MAAM,AAAQ,AAAiB,QAAjB,CAAC,AAAM;;IAEtC;;uFARsB,OAAqC;AACrD,kGAAM,KAAK,EAAE,OAAO;;EAAC;;;;;;;;;qBAsBL;AAGjB,MAFH,AAAS,+CAAsB,AAAM,AAAS,2BAAO,QAAC;AACpD,YAAI,cAAS,MAAM,AAAQ,AAAiB,QAAjB,CAAC,AAAM;;IAEtC;;yFARsB,OAAqC;AACrD,oGAAM,KAAK,EAAE,OAAO;;EAAC","file":"material_input_default_value_accessor.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__material_input_default_value_accessor: material_input_default_value_accessor
  };
}));

//# sourceMappingURL=material_input_default_value_accessor.unsound.ddc.js.map
