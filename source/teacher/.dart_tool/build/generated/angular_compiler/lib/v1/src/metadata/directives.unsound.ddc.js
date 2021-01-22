define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/visibility', 'packages/angular_compiler/v1/src/metadata/typed', 'packages/angular_compiler/v1/src/metadata/view'], (function load__packages__angular_compiler__v1__src__metadata__directives(dart_sdk, packages__angular_compiler__v1__src__metadata__visibility, packages__angular_compiler__v1__src__metadata__typed, packages__angular_compiler__v1__src__metadata__view) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const visibility = packages__angular_compiler__v1__src__metadata__visibility.v1__src__metadata__visibility;
  const typed = packages__angular_compiler__v1__src__metadata__typed.v1__src__metadata__typed;
  const view = packages__angular_compiler__v1__src__metadata__view.v1__src__metadata__view;
  var directives$ = Object.create(dart.library);
  const CT = Object.create(null);
  var L1 = "org-dartlang-app:///packages/angular_compiler/v1/src/metadata/directives.dart";
  var L0 = "package:angular_compiler/v1/src/metadata/directives.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: visibility.Visibility.prototype,
        [_name]: "Visibility.local",
        index: 0
      });
    }
  }, false);
  var _name = dart.privateName(visibility, "_name");
  var C0;
  var selector$ = dart.privateName(directives$, "Directive.selector");
  var providers$ = dart.privateName(directives$, "Directive.providers");
  var exportAs$ = dart.privateName(directives$, "Directive.exportAs");
  var visibility$ = dart.privateName(directives$, "Directive.visibility");
  directives$.Directive = class Directive extends core.Object {
    get selector() {
      return this[selector$];
    }
    set selector(value) {
      super.selector = value;
    }
    get providers() {
      return this[providers$];
    }
    set providers(value) {
      super.providers = value;
    }
    get exportAs() {
      return this[exportAs$];
    }
    set exportAs(value) {
      super.exportAs = value;
    }
    get visibility() {
      return this[visibility$];
    }
    set visibility(value) {
      super.visibility = value;
    }
  };
  (directives$.Directive.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let exportAs = opts && 'exportAs' in opts ? opts.exportAs : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : C0 || CT.C0;
    this[selector$] = selector;
    this[providers$] = providers;
    this[exportAs$] = exportAs;
    this[visibility$] = visibility;
    ;
  }).prototype = directives$.Directive.prototype;
  dart.addTypeTests(directives$.Directive);
  dart.addTypeCaches(directives$.Directive);
  dart.setLibraryUri(directives$.Directive, L0);
  dart.setFieldSignature(directives$.Directive, () => ({
    __proto__: dart.getFields(directives$.Directive.__proto__),
    selector: dart.finalFieldType(dart.legacy(core.String)),
    providers: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
    exportAs: dart.finalFieldType(dart.legacy(core.String)),
    visibility: dart.finalFieldType(dart.legacy(visibility.Visibility))
  }));
  var changeDetection$ = dart.privateName(directives$, "Component.changeDetection");
  var viewProviders$ = dart.privateName(directives$, "Component.viewProviders");
  var exports$ = dart.privateName(directives$, "Component.exports");
  var templateUrl$ = dart.privateName(directives$, "Component.templateUrl");
  var template$ = dart.privateName(directives$, "Component.template");
  var preserveWhitespace$ = dart.privateName(directives$, "Component.preserveWhitespace");
  var styleUrls$ = dart.privateName(directives$, "Component.styleUrls");
  var styles$ = dart.privateName(directives$, "Component.styles");
  var directives$0 = dart.privateName(directives$, "Component.directives");
  var directiveTypes$ = dart.privateName(directives$, "Component.directiveTypes");
  var pipes$ = dart.privateName(directives$, "Component.pipes");
  var encapsulation$ = dart.privateName(directives$, "Component.encapsulation");
  directives$.Component = class Component extends directives$.Directive {
    get changeDetection() {
      return this[changeDetection$];
    }
    set changeDetection(value) {
      super.changeDetection = value;
    }
    get viewProviders() {
      return this[viewProviders$];
    }
    set viewProviders(value) {
      super.viewProviders = value;
    }
    get exports() {
      return this[exports$];
    }
    set exports(value) {
      super.exports = value;
    }
    get templateUrl() {
      return this[templateUrl$];
    }
    set templateUrl(value) {
      super.templateUrl = value;
    }
    get template() {
      return this[template$];
    }
    set template(value) {
      super.template = value;
    }
    get preserveWhitespace() {
      return this[preserveWhitespace$];
    }
    set preserveWhitespace(value) {
      super.preserveWhitespace = value;
    }
    get styleUrls() {
      return this[styleUrls$];
    }
    set styleUrls(value) {
      super.styleUrls = value;
    }
    get styles() {
      return this[styles$];
    }
    set styles(value) {
      super.styles = value;
    }
    get directives() {
      return this[directives$0];
    }
    set directives(value) {
      super.directives = value;
    }
    get directiveTypes() {
      return this[directiveTypes$];
    }
    set directiveTypes(value) {
      super.directiveTypes = value;
    }
    get pipes() {
      return this[pipes$];
    }
    set pipes(value) {
      super.pipes = value;
    }
    get encapsulation() {
      return this[encapsulation$];
    }
    set encapsulation(value) {
      super.encapsulation = value;
    }
  };
  (directives$.Component.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : null;
    let exportAs = opts && 'exportAs' in opts ? opts.exportAs : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : C0 || CT.C0;
    let viewProviders = opts && 'viewProviders' in opts ? opts.viewProviders : null;
    let exports = opts && 'exports' in opts ? opts.exports : null;
    let changeDetection = opts && 'changeDetection' in opts ? opts.changeDetection : 0;
    let templateUrl = opts && 'templateUrl' in opts ? opts.templateUrl : null;
    let template = opts && 'template' in opts ? opts.template : null;
    let preserveWhitespace = opts && 'preserveWhitespace' in opts ? opts.preserveWhitespace : false;
    let styleUrls = opts && 'styleUrls' in opts ? opts.styleUrls : null;
    let styles = opts && 'styles' in opts ? opts.styles : null;
    let directives = opts && 'directives' in opts ? opts.directives : null;
    let directiveTypes = opts && 'directiveTypes' in opts ? opts.directiveTypes : null;
    let pipes = opts && 'pipes' in opts ? opts.pipes : null;
    let encapsulation = opts && 'encapsulation' in opts ? opts.encapsulation : null;
    this[viewProviders$] = viewProviders;
    this[exports$] = exports;
    this[changeDetection$] = changeDetection;
    this[templateUrl$] = templateUrl;
    this[template$] = template;
    this[preserveWhitespace$] = preserveWhitespace;
    this[styleUrls$] = styleUrls;
    this[styles$] = styles;
    this[directives$0] = directives;
    this[directiveTypes$] = directiveTypes;
    this[pipes$] = pipes;
    this[encapsulation$] = encapsulation;
    if (!(changeDetection != null)) dart.assertFailed(null, L1, 249, 16, "changeDetection != null");
    directives$.Component.__proto__.new.call(this, {selector: selector, exportAs: exportAs, providers: providers, visibility: visibility});
    ;
  }).prototype = directives$.Component.prototype;
  dart.addTypeTests(directives$.Component);
  dart.addTypeCaches(directives$.Component);
  dart.setLibraryUri(directives$.Component, L0);
  dart.setFieldSignature(directives$.Component, () => ({
    __proto__: dart.getFields(directives$.Component.__proto__),
    changeDetection: dart.finalFieldType(dart.legacy(core.int)),
    viewProviders: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
    exports: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
    templateUrl: dart.finalFieldType(dart.legacy(core.String)),
    template: dart.finalFieldType(dart.legacy(core.String)),
    preserveWhitespace: dart.finalFieldType(dart.legacy(core.bool)),
    styleUrls: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    styles: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    directives: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
    directiveTypes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(typed.Typed$(dart.legacy(core.Object)))))),
    pipes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
    encapsulation: dart.finalFieldType(dart.legacy(view.ViewEncapsulation))
  }));
  var name$ = dart.privateName(directives$, "Pipe.name");
  var pure$ = dart.privateName(directives$, "Pipe.pure");
  directives$.Pipe = class Pipe extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get pure() {
      return this[pure$];
    }
    set pure(value) {
      super.pure = value;
    }
  };
  (directives$.Pipe.new = function(name, opts) {
    let pure = opts && 'pure' in opts ? opts.pure : true;
    this[name$] = name;
    this[pure$] = pure;
    ;
  }).prototype = directives$.Pipe.prototype;
  dart.addTypeTests(directives$.Pipe);
  dart.addTypeCaches(directives$.Pipe);
  dart.setLibraryUri(directives$.Pipe, L0);
  dart.setFieldSignature(directives$.Pipe, () => ({
    __proto__: dart.getFields(directives$.Pipe.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    pure: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var attributeName$ = dart.privateName(directives$, "Attribute.attributeName");
  directives$.Attribute = class Attribute extends core.Object {
    get attributeName() {
      return this[attributeName$];
    }
    set attributeName(value) {
      super.attributeName = value;
    }
  };
  (directives$.Attribute.new = function(attributeName) {
    this[attributeName$] = attributeName;
    ;
  }).prototype = directives$.Attribute.prototype;
  dart.addTypeTests(directives$.Attribute);
  dart.addTypeCaches(directives$.Attribute);
  dart.setLibraryUri(directives$.Attribute, L0);
  dart.setFieldSignature(directives$.Attribute, () => ({
    __proto__: dart.getFields(directives$.Attribute.__proto__),
    attributeName: dart.finalFieldType(dart.legacy(core.String))
  }));
  var selector$0 = dart.privateName(directives$, "_Query.selector");
  var descendants$ = dart.privateName(directives$, "_Query.descendants");
  var first$ = dart.privateName(directives$, "_Query.first");
  var read$ = dart.privateName(directives$, "_Query.read");
  directives$._Query = class _Query extends core.Object {
    get selector() {
      return this[selector$0];
    }
    set selector(value) {
      super.selector = value;
    }
    get descendants() {
      return this[descendants$];
    }
    set descendants(value) {
      super.descendants = value;
    }
    get first() {
      return this[first$];
    }
    set first(value) {
      super.first = value;
    }
    get read() {
      return this[read$];
    }
    set read(value) {
      super.read = value;
    }
  };
  (directives$._Query.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : false;
    let first = opts && 'first' in opts ? opts.first : false;
    let read = opts && 'read' in opts ? opts.read : null;
    this[selector$0] = selector;
    this[descendants$] = descendants;
    this[first$] = first;
    this[read$] = read;
    ;
  }).prototype = directives$._Query.prototype;
  dart.addTypeTests(directives$._Query);
  dart.addTypeCaches(directives$._Query);
  dart.setLibraryUri(directives$._Query, L0);
  dart.setFieldSignature(directives$._Query, () => ({
    __proto__: dart.getFields(directives$._Query.__proto__),
    selector: dart.finalFieldType(dart.legacy(core.Object)),
    descendants: dart.finalFieldType(dart.legacy(core.bool)),
    first: dart.finalFieldType(dart.legacy(core.bool)),
    read: dart.finalFieldType(dart.legacy(core.Object))
  }));
  directives$.ContentChildren = class ContentChildren extends directives$._Query {};
  (directives$.ContentChildren.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : true;
    let read = opts && 'read' in opts ? opts.read : null;
    directives$.ContentChildren.__proto__.new.call(this, selector, {descendants: descendants, read: read});
    ;
  }).prototype = directives$.ContentChildren.prototype;
  dart.addTypeTests(directives$.ContentChildren);
  dart.addTypeCaches(directives$.ContentChildren);
  dart.setLibraryUri(directives$.ContentChildren, L0);
  directives$.ContentChild = class ContentChild extends directives$._Query {};
  (directives$.ContentChild.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    directives$.ContentChild.__proto__.new.call(this, selector, {descendants: true, first: true, read: read});
    ;
  }).prototype = directives$.ContentChild.prototype;
  dart.addTypeTests(directives$.ContentChild);
  dart.addTypeCaches(directives$.ContentChild);
  dart.setLibraryUri(directives$.ContentChild, L0);
  directives$._ViewQuery = class _ViewQuery extends directives$._Query {};
  (directives$._ViewQuery.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : false;
    let first = opts && 'first' in opts ? opts.first : false;
    let read = opts && 'read' in opts ? opts.read : null;
    directives$._ViewQuery.__proto__.new.call(this, selector, {descendants: descendants, first: first, read: read});
    ;
  }).prototype = directives$._ViewQuery.prototype;
  dart.addTypeTests(directives$._ViewQuery);
  dart.addTypeCaches(directives$._ViewQuery);
  dart.setLibraryUri(directives$._ViewQuery, L0);
  directives$.ViewChildren = class ViewChildren extends directives$._ViewQuery {};
  (directives$.ViewChildren.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    directives$.ViewChildren.__proto__.new.call(this, selector, {descendants: true, read: read});
    ;
  }).prototype = directives$.ViewChildren.prototype;
  dart.addTypeTests(directives$.ViewChildren);
  dart.addTypeCaches(directives$.ViewChildren);
  dart.setLibraryUri(directives$.ViewChildren, L0);
  directives$.ViewChild = class ViewChild extends directives$._ViewQuery {};
  (directives$.ViewChild.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    directives$.ViewChild.__proto__.new.call(this, selector, {descendants: true, first: true, read: read});
    ;
  }).prototype = directives$.ViewChild.prototype;
  dart.addTypeTests(directives$.ViewChild);
  dart.addTypeCaches(directives$.ViewChild);
  dart.setLibraryUri(directives$.ViewChild, L0);
  var bindingPropertyName$ = dart.privateName(directives$, "Input.bindingPropertyName");
  directives$.Input = class Input extends core.Object {
    get bindingPropertyName() {
      return this[bindingPropertyName$];
    }
    set bindingPropertyName(value) {
      super.bindingPropertyName = value;
    }
  };
  (directives$.Input.new = function(bindingPropertyName = null) {
    this[bindingPropertyName$] = bindingPropertyName;
    ;
  }).prototype = directives$.Input.prototype;
  dart.addTypeTests(directives$.Input);
  dart.addTypeCaches(directives$.Input);
  dart.setLibraryUri(directives$.Input, L0);
  dart.setFieldSignature(directives$.Input, () => ({
    __proto__: dart.getFields(directives$.Input.__proto__),
    bindingPropertyName: dart.finalFieldType(dart.legacy(core.String))
  }));
  var bindingPropertyName$0 = dart.privateName(directives$, "Output.bindingPropertyName");
  directives$.Output = class Output extends core.Object {
    get bindingPropertyName() {
      return this[bindingPropertyName$0];
    }
    set bindingPropertyName(value) {
      super.bindingPropertyName = value;
    }
  };
  (directives$.Output.new = function(bindingPropertyName = null) {
    this[bindingPropertyName$0] = bindingPropertyName;
    ;
  }).prototype = directives$.Output.prototype;
  dart.addTypeTests(directives$.Output);
  dart.addTypeCaches(directives$.Output);
  dart.setLibraryUri(directives$.Output, L0);
  dart.setFieldSignature(directives$.Output, () => ({
    __proto__: dart.getFields(directives$.Output.__proto__),
    bindingPropertyName: dart.finalFieldType(dart.legacy(core.String))
  }));
  var hostPropertyName$ = dart.privateName(directives$, "HostBinding.hostPropertyName");
  directives$.HostBinding = class HostBinding extends core.Object {
    get hostPropertyName() {
      return this[hostPropertyName$];
    }
    set hostPropertyName(value) {
      super.hostPropertyName = value;
    }
  };
  (directives$.HostBinding.new = function(hostPropertyName = null) {
    this[hostPropertyName$] = hostPropertyName;
    ;
  }).prototype = directives$.HostBinding.prototype;
  dart.addTypeTests(directives$.HostBinding);
  dart.addTypeCaches(directives$.HostBinding);
  dart.setLibraryUri(directives$.HostBinding, L0);
  dart.setFieldSignature(directives$.HostBinding, () => ({
    __proto__: dart.getFields(directives$.HostBinding.__proto__),
    hostPropertyName: dart.finalFieldType(dart.legacy(core.String))
  }));
  var eventName$ = dart.privateName(directives$, "HostListener.eventName");
  var args$ = dart.privateName(directives$, "HostListener.args");
  directives$.HostListener = class HostListener extends core.Object {
    get eventName() {
      return this[eventName$];
    }
    set eventName(value) {
      super.eventName = value;
    }
    get args() {
      return this[args$];
    }
    set args(value) {
      super.args = value;
    }
  };
  (directives$.HostListener.new = function(eventName, args = null) {
    this[eventName$] = eventName;
    this[args$] = args;
    ;
  }).prototype = directives$.HostListener.prototype;
  dart.addTypeTests(directives$.HostListener);
  dart.addTypeCaches(directives$.HostListener);
  dart.setLibraryUri(directives$.HostListener, L0);
  dart.setFieldSignature(directives$.HostListener, () => ({
    __proto__: dart.getFields(directives$.HostListener.__proto__),
    eventName: dart.finalFieldType(dart.legacy(core.String)),
    args: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  dart.trackLibraries("packages/angular_compiler/v1/src/metadata/directives", {
    "package:angular_compiler/v1/src/metadata/directives.dart": directives$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["directives.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoEe;;;;;;IAsBM;;;;;;IAmBN;;;;;;IAOI;;;;;;;;QAGA;QACV;QACA;QACA;IAHU;IACV;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;;IAiCQ;;;;;;IAiCS;;;;;;IAiBA;;;;;;IAEN;;;;;;IACA;;;;;;IAQF;;;;;;IACQ;;;;;;IACA;;;;;;IACA;;;;;;IAMO;;;;;;IAEP;;;;;;IACK;;;;;;;;QAGf;QACA;QACM;QACF;QACN;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAXA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACM,AAAgB,eAAD,IAAI;AAC1B,8DACY,QAAQ,YACR,QAAQ,aACP,SAAS,cACR,UAAU;;EACvB;;;;;;;;;;;;;;;;;;;;;;IASM;;;;;;IACF;;;;;;;mCAEK;QAAY;IAAZ;IAAY;;EAAa;;;;;;;;;;;IA2B5B;;;;;;;;IAEQ;;EAAc;;;;;;;;;;;;;IAKtB;;;;;;IAGF;;;;;;IAGA;;;;;;IAGE;;;;;;;qCAGN;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;8CAiDO;QACF;QACE;AACJ,yDACG,QAAQ,gBACK,WAAW,QAClB,IAAI;;EACX;;;;;2CAYE;QACA;AACJ,sDACG,QAAQ,gBACK,aACN,YACD,IAAI;;EACX;;;;;yCAKE;QACF;QACA;QACE;AACJ,oDACG,QAAQ,gBACK,WAAW,SACjB,KAAK,QACN,IAAI;;EACX;;;;;2CA6KE;QACA;AACJ,sDACG,QAAQ,gBACK,YACP,IAAI;;EACX;;;;;wCA8BE;QACA;AACJ,mDACG,QAAQ,gBACK,aACN,YACD,IAAI;;EACX;;;;;;IA2CM;;;;;;;;IACK;;EAAqB;;;;;;;;;;IAmD1B;;;;;;;;IACM;;EAAqB;;;;;;;;;;IAuC3B;;;;;;;;IACW;;EAAkB;;;;;;;;;;;IAmC7B;;;;;;IACM;;;;;;;2CACK,WAAiB;IAAjB;IAAiB;;EAAM","file":"directives.unsound.ddc.js"}');
  // Exports:
  return {
    v1__src__metadata__directives: directives$
  };
}));

//# sourceMappingURL=directives.unsound.ddc.js.map
