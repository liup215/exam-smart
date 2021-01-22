define(['dart_sdk', 'packages/quiver/strings', 'packages/angular_components/utils/angular/properties/properties'], (function load__packages__angular_components__mixins__has_tab_index(dart_sdk, packages__quiver__strings, packages__angular_components__utils__angular__properties__properties) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const strings = packages__quiver__strings.strings;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  var has_tab_index = Object.create(dart.library);
  const CT = Object.create(null);
  var L1 = "package:angular_components/mixins/has_tab_index.dart";
  var L0 = "org-dartlang-app:///packages/angular_components/mixins/has_tab_index.dart";
  var _tabIndex = dart.privateName(has_tab_index, "_tabIndex");
  var _computeTabIndex = dart.privateName(has_tab_index, "_computeTabIndex");
  has_tab_index.HasTabIndex = class HasTabIndex extends core.Object {
    get hostTabIndex() {
      return "0";
    }
    updateTabIndex() {
      this[_tabIndex] = this[_computeTabIndex]();
    }
    get tabIndex() {
      let t0;
      t0 = this[_tabIndex];
      return t0 == null ? this[_computeTabIndex]() : t0;
    }
    [_computeTabIndex]() {
      if (dart.test(this.disabled)) {
        return "-1";
      } else if (this.hostTabIndex == null) {
        return null;
      } else if (!dart.test(strings.isBlank(this.hostTabIndex))) {
        if (!(properties.getInt(this.hostTabIndex) != null)) dart.assertFailed(null, L0, 35, 14, "getInt(hostTabIndex) != null");
        return this.hostTabIndex;
      }
      dart.throw("Host tabIndex should either be null or a value");
    }
  };
  (has_tab_index.HasTabIndex.new = function() {
    this[_tabIndex] = null;
    ;
  }).prototype = has_tab_index.HasTabIndex.prototype;
  dart.addTypeTests(has_tab_index.HasTabIndex);
  dart.addTypeCaches(has_tab_index.HasTabIndex);
  dart.setMethodSignature(has_tab_index.HasTabIndex, () => ({
    __proto__: dart.getMethods(has_tab_index.HasTabIndex.__proto__),
    updateTabIndex: dart.fnType(dart.void, []),
    [_computeTabIndex]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(has_tab_index.HasTabIndex, () => ({
    __proto__: dart.getGetters(has_tab_index.HasTabIndex.__proto__),
    hostTabIndex: dart.legacy(core.String),
    tabIndex: dart.legacy(core.String)
  }));
  dart.setLibraryUri(has_tab_index.HasTabIndex, L1);
  dart.setFieldSignature(has_tab_index.HasTabIndex, () => ({
    __proto__: dart.getFields(has_tab_index.HasTabIndex.__proto__),
    [_tabIndex]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/angular_components/mixins/has_tab_index", {
    "package:angular_components/mixins/has_tab_index.dart": has_tab_index
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["has_tab_index.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAe6B;IAAG;;AAOE,MAA9B,kBAAY;IACd;;;AAGuB;0BAAa;IAAkB;;AAGpD,oBAAI;AACF,cAAO;YACF,KAAI,AAAa,qBAAG;AACzB,cAAO;YACF,gBAAK,gBAAQ;AAClB,cAAO,AAAqB,kBAAd,sBAAiB;AAC/B,cAAO;;AAE6C,MAAtD,WAAM;IACR;;;IApBO;;EAqBT","file":"has_tab_index.unsound.ddc.js"}');
  // Exports:
  return {
    mixins__has_tab_index: has_tab_index
  };
}));

//# sourceMappingURL=has_tab_index.unsound.ddc.js.map
