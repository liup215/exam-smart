define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/quiver/src/time/clock', 'packages/angular_components/src/material_datepicker/calendar_listener.template', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/material_datepicker/material_month_picker.scss.css.shim'], (function load__packages__angular_components__material_datepicker__material_month_picker_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_datepicker__material_month_picker, packages__angular_compiler__v1__src__metadata__di_tokens, packages__quiver__src__time__clock, packages__angular_components__src__material_datepicker__calendar_listener$46template, packages__angular__angular$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__material_datepicker__material_month_picker$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_month_picker = packages__angular_components__material_datepicker__material_month_picker.material_datepicker__material_month_picker;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const calendar_listener$46template = packages__angular_components__src__material_datepicker__calendar_listener$46template.src__material_datepicker__calendar_listener$46template;
  const enum_parsing$46template = packages__angular_components__src__material_datepicker__calendar_listener$46template.src__material_datepicker__enum_parsing$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const material_month_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_month_picker$46scss$46css$46shim.material_datepicker__material_month_picker$46scss$46css$46shim;
  var material_month_picker$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var MaterialMonthPickerComponentL = () => (MaterialMonthPickerComponentL = dart.constFn(dart.legacy(material_month_picker.MaterialMonthPickerComponent)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var VoidToMaterialMonthPickerComponentL = () => (VoidToMaterialMonthPickerComponentL = dart.constFn(dart.fnType(MaterialMonthPickerComponentL(), [])))();
  var ComponentFactoryOfMaterialMonthPickerComponentL = () => (ComponentFactoryOfMaterialMonthPickerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialMonthPickerComponentL())))();
  var HostViewOfMaterialMonthPickerComponentL = () => (HostViewOfMaterialMonthPickerComponentL = dart.constFn(host_view.HostView$(MaterialMonthPickerComponentL())))();
  var HostViewLOfMaterialMonthPickerComponentL = () => (HostViewLOfMaterialMonthPickerComponentL = dart.constFn(dart.legacy(HostViewOfMaterialMonthPickerComponentL())))();
  var VoidToHostViewLOfMaterialMonthPickerComponentL = () => (VoidToHostViewLOfMaterialMonthPickerComponentL = dart.constFn(dart.fnType(HostViewLOfMaterialMonthPickerComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_month_picker.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_month_picker$46template.ViewMaterialMonthPickerComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C2() {
      return C2 = dart.fn(material_month_picker$46template.viewFactory_MaterialMonthPickerComponentHost0, VoidToHostViewLOfMaterialMonthPickerComponentL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfMaterialMonthPickerComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-month-picker"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var C0;
  material_month_picker$46template.ViewMaterialMonthPickerComponent0 = class ViewMaterialMonthPickerComponent0 extends component_view.ComponentView$(dart.legacy(material_month_picker.MaterialMonthPickerComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_month_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "scroll-container");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "calendar-container");
      this.addShimC(_el_1);
      _ctx.container = _el_1;
    }
    static _debugClearComponentStyles() {
      material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles;
      if (styles == null) {
        material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(material_month_picker$46template.styles$MaterialMonthPickerComponent, material_month_picker$46template.ViewMaterialMonthPickerComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (material_month_picker$46template.ViewMaterialMonthPickerComponent0.new = function(parentView, parentIndex) {
    material_month_picker$46template.ViewMaterialMonthPickerComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("material-month-picker"));
  }).prototype = material_month_picker$46template.ViewMaterialMonthPickerComponent0.prototype;
  dart.addTypeTests(material_month_picker$46template.ViewMaterialMonthPickerComponent0);
  dart.addTypeCaches(material_month_picker$46template.ViewMaterialMonthPickerComponent0);
  dart.setMethodSignature(material_month_picker$46template.ViewMaterialMonthPickerComponent0, () => ({
    __proto__: dart.getMethods(material_month_picker$46template.ViewMaterialMonthPickerComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_month_picker$46template.ViewMaterialMonthPickerComponent0, L0);
  dart.defineLazy(material_month_picker$46template.ViewMaterialMonthPickerComponent0, {
    /*material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C1;
  material_month_picker$46template._ViewMaterialMonthPickerComponentHost0 = class _ViewMaterialMonthPickerComponentHost0 extends host_view.HostView$(dart.legacy(material_month_picker.MaterialMonthPickerComponent)) {
    build() {
      this.componentView = new material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialMonthPickerComponentL(), dart.wrapType(MaterialMonthPickerComponentL()), dart.fn(() => new material_month_picker.MaterialMonthPickerComponent.new(ClockL().as(this.injectorGetOptional(C1 || CT.C1, this.parentIndex)), null), VoidToMaterialMonthPickerComponentL())) : new material_month_picker.MaterialMonthPickerComponent.new(ClockL().as(this.injectorGetOptional(C1 || CT.C1, this.parentIndex)), null);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.firstCheck;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        if (dart.test(firstCheck)) {
          this.component.ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.new = function() {
    material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.prototype;
  dart.addTypeTests(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0);
  dart.addTypeCaches(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0);
  dart.setMethodSignature(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0, L0);
  var C2;
  material_month_picker$46template.createMaterialMonthPickerComponentFactory = function createMaterialMonthPickerComponentFactory() {
    return new (ComponentFactoryOfMaterialMonthPickerComponentL()).new("material-month-picker", C2 || CT.C2);
  };
  material_month_picker$46template.viewFactory_MaterialMonthPickerComponentHost0 = function viewFactory_MaterialMonthPickerComponentHost0() {
    return new material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.new();
  };
  material_month_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_month_picker$46template._visited)) {
      return;
    }
    material_month_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialMonthPickerComponentL()), material_month_picker$46template.createMaterialMonthPickerComponentFactory());
    calendar_listener$46template.initReflector();
    enum_parsing$46template.initReflector();
    angular$46template.initReflector();
    calendar$46template.initReflector();
    module$46template.initReflector();
    date$46template.initReflector();
    observable$46template.initReflector();
  };
  dart.copyProperties(material_month_picker$46template, {
    get MaterialMonthPickerComponentNgFactory() {
      return material_month_picker$46template._MaterialMonthPickerComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  var C4;
  dart.defineLazy(material_month_picker$46template, {
    /*material_month_picker$46template.styles$MaterialMonthPickerComponent*/get styles$MaterialMonthPickerComponent() {
      return [material_month_picker$46scss$46css$46shim.styles];
    },
    /*material_month_picker$46template._MaterialMonthPickerComponentNgFactory*/get _MaterialMonthPickerComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*material_month_picker$46template.styles$MaterialMonthPickerComponentHost*/get styles$MaterialMonthPickerComponentHost() {
      return C4 || CT.C4;
    },
    /*material_month_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_month_picker.template", {
    "package:angular_components/material_datepicker/material_month_picker.template.dart": material_month_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_month_picker.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqCI,uBAAgB,2BAAY,gFAAgF;IAC9G;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACL,MAAhD,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACQ,MAAlD,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,IAAD,aAAa,KAAK;IACxB;;AAGyB,MAAvB,sFAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACiG,QAArH,sFAAoB,SAAiC,2CAAO,sEAAqC;AACjG,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;qFAnC+C,YAAgB;AAAe,gGAAM,UAAU,EAAE,WAAW;AAC/E,IAA1B,AAAK;AACqE,uBAArE,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;MAJ+B,mFAAgB;;;;;;;;;AAqDkB,MAA1D,qBAAgB,2EAAkC,MAAM;AACvD,kBAAa,AAAc;AAKiK,MAJ7L,2BAAqB,2BACpB,0DAAmC,gDAA8B,cAChD,uEAA6B,AAAK,sCAA8H,oBAAc,iDAEvL,uEAA6B,AAAK,sCAA8H,oBAAc;AACpK,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,oBAAU;AACV,uBAAkB;AACvB,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAErB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAEiB,MAA7B,AAAc;AACnB,qBAAc;AACZ,sBAAI,UAAU;AACoB,UAA3B,AAAU;;;IAGrB;;AAI8B,MAAvB,AAAU;IACjB;;;;;EACF;;;;;;;;;;AAxCE,UAAO,6DAAiB;EAC1B;;AA0CE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,4CAAW;AAEwF,IAAnG,4BAAyB,gDAA8B;AAClC,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAjEE,YAAO;IACT;;;;;;;MA7CoB,oEAAmC;YAAG,EAAS;;MA0C7D,uEAAsC;;;MASxB,wEAAuC;;;MA2CvD,yCAAQ;YAAG","file":"material_month_picker.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_month_picker$46template: material_month_picker$46template
  };
}));

//# sourceMappingURL=material_month_picker.template.unsound.ddc.js.map
