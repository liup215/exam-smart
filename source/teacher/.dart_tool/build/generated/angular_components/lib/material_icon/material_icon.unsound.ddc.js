define(['dart_sdk', 'packages/angular_components/model/ui/icon'], (function load__packages__angular_components__material_icon__material_icon(dart_sdk, packages__angular_components__model__ui__icon) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon = packages__angular_components__model__ui__icon.model__ui__icon;
  var material_icon = Object.create(dart.library);
  var $contains = dartx.contains;
  var $setAttribute = dartx.setAttribute;
  var IconL = () => (IconL = dart.constFn(dart.legacy(icon.Icon)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_icon/material_icon.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["", "x-small", "small", "medium", "large", "x-large"], StringL());
    },
    get C1() {
      return C1 = dart.constList(["arrow_back", "arrow_forward", "chevron_left", "chevron_right", "navigate_before", "navigate_next", "last_page", "first_page", "open_in_new", "star_half", "exit_to_app"], StringL());
    }
  }, false);
  var _icon = dart.privateName(material_icon, "_icon");
  var _element$ = dart.privateName(material_icon, "_element");
  material_icon.MaterialIconComponent = class MaterialIconComponent extends core.Object {
    set icon(value) {
      this[_icon] = value;
      if (dart.test(material_icon._flippedIcons[$contains](this.iconName))) {
        this[_element$][$setAttribute]("flip", "");
      }
    }
    get iconName() {
      return StringL().as(IconL().is(this[_icon]) ? dart.dload(this[_icon], 'name') : this[_icon]);
    }
  };
  (material_icon.MaterialIconComponent.new = function(_element) {
    this[_icon] = null;
    this[_element$] = _element;
    ;
  }).prototype = material_icon.MaterialIconComponent.prototype;
  dart.addTypeTests(material_icon.MaterialIconComponent);
  dart.addTypeCaches(material_icon.MaterialIconComponent);
  dart.setGetterSignature(material_icon.MaterialIconComponent, () => ({
    __proto__: dart.getGetters(material_icon.MaterialIconComponent.__proto__),
    iconName: dart.legacy(core.String)
  }));
  dart.setSetterSignature(material_icon.MaterialIconComponent, () => ({
    __proto__: dart.getSetters(material_icon.MaterialIconComponent.__proto__),
    icon: dart.dynamic
  }));
  dart.setLibraryUri(material_icon.MaterialIconComponent, L0);
  dart.setFieldSignature(material_icon.MaterialIconComponent, () => ({
    __proto__: dart.getFields(material_icon.MaterialIconComponent.__proto__),
    [_icon]: dart.fieldType(dart.dynamic),
    [_element$]: dart.finalFieldType(dart.legacy(html.HtmlElement))
  }));
  var C0;
  material_icon.IconSize = class IconSize extends core.Object {};
  (material_icon.IconSize.new = function() {
    ;
  }).prototype = material_icon.IconSize.prototype;
  dart.addTypeTests(material_icon.IconSize);
  dart.addTypeCaches(material_icon.IconSize);
  dart.setLibraryUri(material_icon.IconSize, L0);
  dart.defineLazy(material_icon.IconSize, {
    /*material_icon.IconSize.defaultSize*/get defaultSize() {
      return "";
    },
    /*material_icon.IconSize.xSmall*/get xSmall() {
      return "x-small";
    },
    /*material_icon.IconSize.small*/get small() {
      return "small";
    },
    /*material_icon.IconSize.medium*/get medium() {
      return "medium";
    },
    /*material_icon.IconSize.large*/get large() {
      return "large";
    },
    /*material_icon.IconSize.xLarge*/get xLarge() {
      return "x-large";
    },
    /*material_icon.IconSize.values*/get values() {
      return C0 || CT.C0;
    }
  }, true);
  var C1;
  dart.defineLazy(material_icon, {
    /*material_icon._flippedIcons*/get _flippedIcons() {
      return C1 || CT.C1;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_icon/material_icon", {
    "package:angular_components/material_icon/material_icon.dart": material_icon
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_icon.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;aAiEmB;AACF,MAAb,cAAQ,KAAK;AACb,oBAAI,AAAc,uCAAS;AACQ,QAAjC,AAAS,+BAAa,QAAQ;;IAElC;;AAKuB,0BAAM,WAAN,eAAsB,WAAN,uBAAa;IAAK;;sDAI9B;IAPnB;IAOmB;;EAAS;;;;;;;;;;;;;;;;;;;;;EAatC;;;;;MARe,kCAAW;;;MACX,6BAAM;;;MACN,4BAAK;;;MACL,6BAAM;;;MACN,4BAAK;;;MACL,6BAAM;;;MAEN,6BAAM;;;;;;MA/EF,2BAAa","file":"material_icon.unsound.ddc.js"}');
  // Exports:
  return {
    material_icon__material_icon: material_icon
  };
}));

//# sourceMappingURL=material_icon.unsound.ddc.js.map
