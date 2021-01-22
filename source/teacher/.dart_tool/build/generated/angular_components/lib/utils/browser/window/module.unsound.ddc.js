define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/di_providers', 'packages/angular_compiler/v1/src/metadata'], (function load__packages__angular_components__utils__browser__window__module(dart_sdk, packages__angular_compiler__v1__src__metadata__di_providers, packages__angular_compiler__v1__src__metadata) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const di_providers = packages__angular_compiler__v1__src__metadata__di_providers.v1__src__metadata__di_providers;
  const di_modules = packages__angular_compiler__v1__src__metadata.v1__src__metadata__di_modules;
  var module = Object.create(dart.library);
  var $location = dartx.location;
  var HtmlDocumentL = () => (HtmlDocumentL = dart.constFn(dart.legacy(html.HtmlDocument)))();
  var VoidToHtmlDocumentL = () => (VoidToHtmlDocumentL = dart.constFn(dart.fnType(HtmlDocumentL(), [])))();
  var DocumentL = () => (DocumentL = dart.constFn(dart.legacy(html.Document)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var VoidToWindowL = () => (VoidToWindowL = dart.constFn(dart.fnType(WindowL(), [])))();
  var FactoryProviderL = () => (FactoryProviderL = dart.constFn(dart.legacy(di_providers.FactoryProvider)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var FactoryProviderOfObjectL = () => (FactoryProviderOfObjectL = dart.constFn(di_providers.FactoryProvider$(ObjectL())))();
  var ProviderOfObjectL = () => (ProviderOfObjectL = dart.constFn(di_providers.Provider$(ObjectL())))();
  var ProviderLOfObjectL = () => (ProviderLOfObjectL = dart.constFn(dart.legacy(ProviderOfObjectL())))();
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(di_modules.Module)))();
  var LocationL = () => (LocationL = dart.constFn(dart.legacy(html.Location)))();
  var WindowLToLocationL = () => (WindowLToLocationL = dart.constFn(dart.fnType(LocationL(), [WindowL()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.fn(module.getDocument, VoidToHtmlDocumentL());
    },
    get C3() {
      return C3 = dart.wrapType(DocumentL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C2 || CT.C2,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C3 || CT.C3
      });
    },
    get C5() {
      return C5 = dart.wrapType(HtmlDocumentL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C2 || CT.C2,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C5 || CT.C5
      });
    },
    get C7() {
      return C7 = dart.fn(module.getWindow, VoidToWindowL());
    },
    get C8() {
      return C8 = dart.wrapType(WindowL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C7 || CT.C7,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C8 || CT.C8
      });
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C4 || CT.C4, C6 || CT.C6], FactoryProviderL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: FactoryProviderOfObjectL().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C2 || CT.C2,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C3 || CT.C3
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: FactoryProviderOfObjectL().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C2 || CT.C2,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C5 || CT.C5
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: FactoryProviderOfObjectL().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C7 || CT.C7,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C8 || CT.C8
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], ProviderLOfObjectL());
    },
    get C14() {
      return C14 = dart.constList([], ModuleL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: di_modules.Module.prototype,
        [Module_provide]: C10 || CT.C10,
        [Module_include]: C14 || CT.C14
      });
    },
    get C17() {
      return C17 = dart.fn(module.getLocation, WindowLToLocationL());
    },
    get C18() {
      return C18 = dart.wrapType(LocationL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: di_providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: C17 || CT.C17,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C18 || CT.C18
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], FactoryProviderL());
    }
  }, false);
  module.getDocument = function getDocument() {
    return html.document;
  };
  module.getWindow = function getWindow() {
    return html.window;
  };
  module.getLocation = function getLocation(window) {
    return window[$location];
  };
  var Provider_multi = dart.privateName(di_providers, "Provider.multi");
  var Provider_deps = dart.privateName(di_providers, "Provider.deps");
  var C2;
  var Provider_useFactory = dart.privateName(di_providers, "Provider.useFactory");
  var Provider_useExisting = dart.privateName(di_providers, "Provider.useExisting");
  var Provider_useValue = dart.privateName(di_providers, "Provider.useValue");
  var Provider_useClass = dart.privateName(di_providers, "Provider.useClass");
  var C3;
  var Provider_token = dart.privateName(di_providers, "Provider.token");
  var C1;
  var C5;
  var C4;
  var C7;
  var C8;
  var C6;
  var C0;
  var C11;
  var C12;
  var C13;
  var C10;
  var Module_provide = dart.privateName(di_modules, "Module.provide");
  var C14;
  var Module_include = dart.privateName(di_modules, "Module.include");
  var C9;
  var C17;
  var C18;
  var C16;
  var C15;
  dart.defineLazy(module, {
    /*module.windowBindings*/get windowBindings() {
      return C0 || CT.C0;
    },
    /*module.windowModule*/get windowModule() {
      return C9 || CT.C9;
    },
    /*module.locationBindings*/get locationBindings() {
      return C15 || CT.C15;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/utils/browser/window/module", {
    "package:angular_components/utils/browser/window/module.dart": module
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAc8B;EAAQ;;AAMhB;EAAM;4CA8BA;AAAW,UAAA,AAAO,OAAD;EAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAtBhD,qBAAc;;;MAQd,mBAAY;;;MAiBZ,uBAAgB","file":"module.unsound.ddc.js"}');
  // Exports:
  return {
    utils__browser__window__module: module
  };
}));

//# sourceMappingURL=module.unsound.ddc.js.map
