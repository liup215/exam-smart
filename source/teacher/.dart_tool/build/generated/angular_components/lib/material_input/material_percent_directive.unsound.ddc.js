define(['dart_sdk', 'packages/intl/intl'], (function load__packages__angular_components__material_input__material_percent_directive(dart_sdk, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl = packages__intl__intl.intl;
  var material_percent_directive = Object.create(dart.library);
  var $indexOf = dartx.indexOf;
  var $keys = dartx.keys;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var LinkedHashMapOfStringL$dynamic = () => (LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(StringL(), dart.dynamic)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_input/material_percent_directive.dart";
  var _replaceErrorMessage = dart.privateName(material_percent_directive, "_replaceErrorMessage");
  var percentErrorRenderer = dart.privateName(material_percent_directive, "MaterialPercentInputDirective.percentErrorRenderer");
  material_percent_directive.MaterialPercentInputDirective = class MaterialPercentInputDirective extends core.Object {
    get percentErrorRenderer() {
      return this[percentErrorRenderer];
    }
    set percentErrorRenderer(value) {
      this[percentErrorRenderer] = value;
    }
    [_replaceErrorMessage](errors) {
      let t0, t0$;
      let overrides = null;
      for (let key of material_percent_directive.MaterialPercentInputDirective._errorOverrides[$keys]) {
        if (dart.test(material_percent_directive.MaterialPercentInputDirective._errorOverrides[$containsKey](key))) {
          overrides == null ? overrides = LinkedHashMapOfStringL$dynamic().from(errors) : null;
          overrides[$_set](key, material_percent_directive.MaterialPercentInputDirective._errorOverrides[$_get](key));
        }
      }
      let result = (t0 = overrides, t0 == null ? errors : t0);
      return this.percentErrorRenderer != null ? (t0$ = result, this.percentErrorRenderer(t0$)) : result;
    }
  };
  (material_percent_directive.MaterialPercentInputDirective.new = function(input, element) {
    this[percentErrorRenderer] = null;
    input.type = "text";
    input.rightAlign = true;
    element.dir = "ltr";
    let percentPattern = new intl.NumberFormat.percentPattern();
    let percentLocation = percentPattern.symbols.PERCENT_PATTERN[$indexOf](percentPattern.symbols.PERCENT);
    if (percentLocation > percentPattern.symbols.PERCENT_PATTERN.length / 2) {
      input.trailingText = percentPattern.symbols.PERCENT;
    } else {
      input.leadingText = percentPattern.symbols.PERCENT;
    }
    input.errorRenderer = dart.bind(this, _replaceErrorMessage);
  }).prototype = material_percent_directive.MaterialPercentInputDirective.prototype;
  dart.addTypeTests(material_percent_directive.MaterialPercentInputDirective);
  dart.addTypeCaches(material_percent_directive.MaterialPercentInputDirective);
  dart.setMethodSignature(material_percent_directive.MaterialPercentInputDirective, () => ({
    __proto__: dart.getMethods(material_percent_directive.MaterialPercentInputDirective.__proto__),
    [_replaceErrorMessage]: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))])
  }));
  dart.setLibraryUri(material_percent_directive.MaterialPercentInputDirective, L0);
  dart.setFieldSignature(material_percent_directive.MaterialPercentInputDirective, () => ({
    __proto__: dart.getFields(material_percent_directive.MaterialPercentInputDirective.__proto__),
    percentErrorRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))])))
  }));
  dart.defineLazy(material_percent_directive.MaterialPercentInputDirective, {
    /*material_percent_directive.MaterialPercentInputDirective._errorOverrides*/get _errorOverrides() {
      return new (IdentityMapOfStringL$StringL()).from(["non-negative", material_percent_directive.MaterialPercentInputDirective._negativePercentageErrMsg, "lower-bound-number", material_percent_directive.MaterialPercentInputDirective._percentTooSmallErrMsg, "upper-bound-number", material_percent_directive.MaterialPercentInputDirective._percentTooLargeErrMsg]);
    },
    /*material_percent_directive.MaterialPercentInputDirective._negativePercentageErrMsg*/get _negativePercentageErrMsg() {
      return intl.Intl.message("Percentages must not be negative", {desc: "Validation error message when input precentage is negative, it " + "must be a positive number or zero." + "[BACKUP_MESSAGE_ID:4311805941549841920]"});
    },
    /*material_percent_directive.MaterialPercentInputDirective._percentTooSmallErrMsg*/get _percentTooSmallErrMsg() {
      return intl.Intl.message("Enter a larger number", {desc: "Validation error message for when the input percentage is too " + "small", meaning: "Validation error message for when the input percentage is " + "too small"});
    },
    /*material_percent_directive.MaterialPercentInputDirective._percentTooLargeErrMsg*/get _percentTooLargeErrMsg() {
      return intl.Intl.message("Enter a smaller number", {desc: "Validation error message for when the input percentage is too " + "large", meaning: "Validation error message for when the input percentage is " + "too large"});
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/material_percent_directive", {
    "package:angular_components/material_input/material_percent_directive.dart": material_percent_directive
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_percent_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IA8DsD;;;;;;2BApBW;;AACxC;AACrB,eAAS,MAAO,AAAgB;AAC9B,sBAAI,AAAgB,uFAAY,GAAG;AACc,UAA/C,AAAU,SAAD,IAAC,OAAV,YAAc,sCAA0B,MAAM,IAApC;AAC2B,UAArC,AAAS,SAAA,QAAC,GAAG,EAAI,AAAe,gFAAC,GAAG;;;AAGlC,oBAAmB,KAAV,SAAS,QAAT,OAAa,MAAM;AAClC,YAAQ,AAAqB,8BAAG,cACL,MAAM,EAA3B,AAAoB,kCACpB,MAAM;IACd;;2EAhC2B,OAAmB;IAwCM;AArC/B,IAAnB,AAAM,KAAD,QAAQ;AACU,IAAvB,AAAM,KAAD,cAAc;AACA,IAAnB,AAAQ,OAAD,OAAO;AACR,yBAA8B;AAC9B,0BAAkB,AAAe,AAAQ,AAC1C,cADiC,mCACzB,AAAe,AAAQ,cAAT;AAG3B,QAAI,AAAgB,eAAD,GAAG,AAAe,AAAQ,AAAgB,AAAO,cAAhC,kCAAkC;AACjB,MAAnD,AAAM,KAAD,gBAAgB,AAAe,AAAQ,cAAT;;AAEe,MAAlD,AAAM,KAAD,eAAe,AAAe,AAAQ,cAAT;;AAEM,IAA1C,AAAM,KAAD,2BAAiB;EACxB;;;;;;;;;;;;;MAyBa,wEAAe;YAAG,4DACO,0GACL,uGACA;;MAGpB,kFAAyB;YAAQ,mBAC1C,2CACI,AAAE,oEACF,uCACA;;MAEK,+EAAsB;YAAQ,mBAAQ,gCAC3C,AAAE,mEACF,kBACG,AAAE,+DACL;;MAEK,+EAAsB;YAAQ,mBAAQ,iCAC3C,AAAE,mEACF,kBACG,AAAE,+DACL","file":"material_percent_directive.unsound.ddc.js"}');
  // Exports:
  return {
    material_input__material_percent_directive: material_percent_directive
  };
}));

//# sourceMappingURL=material_percent_directive.unsound.ddc.js.map
