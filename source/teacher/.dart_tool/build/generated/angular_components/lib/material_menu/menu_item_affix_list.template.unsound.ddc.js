define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_menu/menu_item_affix_list', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_menu/affix/base_affix.template', 'packages/angular_components/model/menu/menu_item_affix.template', 'packages/angular_components/material_menu/menu_item_affix_list.scss.css.shim'], (function load__packages__angular_components__material_menu__menu_item_affix_list_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_menu__menu_item_affix_list, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__dynamic_component__dynamic_component$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_menu__affix__base_affix$46template, packages__angular_components__model__menu__menu_item_affix$46template, packages__angular_components__material_menu__menu_item_affix_list$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const menu_item_affix_list = packages__angular_components__material_menu__menu_item_affix_list.material_menu__menu_item_affix_list;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const dynamic_component$46template = packages__angular_components__dynamic_component__dynamic_component$46template.dynamic_component__dynamic_component$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const base_affix$46template = packages__angular_components__material_menu__affix__base_affix$46template.material_menu__affix__base_affix$46template;
  const menu_item_affix$46template = packages__angular_components__model__menu__menu_item_affix$46template.model__menu__menu_item_affix$46template;
  const menu_item_affix_list$46scss$46css$46shim = packages__angular_components__material_menu__menu_item_affix_list$46scss$46css$46shim.material_menu__menu_item_affix_list$46scss$46css$46shim;
  var menu_item_affix_list$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var MenuItemAffixListComponentL = () => (MenuItemAffixListComponentL = dart.constFn(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent)))();
  var ComponentFactoryOfMenuItemAffixListComponentL = () => (ComponentFactoryOfMenuItemAffixListComponentL = dart.constFn(component_factory.ComponentFactory$(MenuItemAffixListComponentL())))();
  var HostViewOfMenuItemAffixListComponentL = () => (HostViewOfMenuItemAffixListComponentL = dart.constFn(host_view.HostView$(MenuItemAffixListComponentL())))();
  var HostViewLOfMenuItemAffixListComponentL = () => (HostViewLOfMenuItemAffixListComponentL = dart.constFn(dart.legacy(HostViewOfMenuItemAffixListComponentL())))();
  var VoidToHostViewLOfMenuItemAffixListComponentL = () => (VoidToHostViewLOfMenuItemAffixListComponentL = dart.constFn(dart.fnType(HostViewLOfMenuItemAffixListComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_menu/menu_item_affix_list.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.constList([], ObjectL());
    },
    get C3() {
      return C3 = dart.fn(menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponentHost0, VoidToHostViewLOfMenuItemAffixListComponentL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfMenuItemAffixListComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "menu-item-affix-list"
      });
    },
    get C5() {
      return C5 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_0 = dart.privateName(menu_item_affix_list$46template, "_appEl_0");
  var _TemplateRef_0_8 = dart.privateName(menu_item_affix_list$46template, "_TemplateRef_0_8");
  var C0;
  var C1;
  menu_item_affix_list$46template.ViewMenuItemAffixListComponent0 = class ViewMenuItemAffixListComponent0 extends component_view.ComponentView$(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_item_affix_list.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      this[_TemplateRef_0_8] = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      _ctx.viewRef = this[_appEl_0];
    }
    detectChangesInternal() {
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles;
      if (styles == null) {
        menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(menu_item_affix_list$46template.styles$MenuItemAffixListComponent, menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_TemplateRef_0_8] = null;
    menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("menu-item-affix-list"));
  }).prototype = menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.prototype;
  dart.addTypeTests(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0);
  dart.addTypeCaches(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0);
  dart.setMethodSignature(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, () => ({
    __proto__: dart.getMethods(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, L0);
  dart.setFieldSignature(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, () => ({
    __proto__: dart.getFields(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_TemplateRef_0_8]: dart.fieldType(dart.legacy(template_ref.TemplateRef))
  }));
  dart.defineLazy(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, {
    /*menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var C2;
  menu_item_affix_list$46template._ViewMenuItemAffixListComponent1 = class _ViewMenuItemAffixListComponent1 extends embedded_view.EmbeddedView$(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent)) {
    build() {
      this.initRootNodesAndSubscriptions(C2 || CT.C2, null);
    }
  };
  (menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.new = function(parentView, parentIndex) {
    menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.prototype;
  dart.addTypeTests(menu_item_affix_list$46template._ViewMenuItemAffixListComponent1);
  dart.addTypeCaches(menu_item_affix_list$46template._ViewMenuItemAffixListComponent1);
  dart.setMethodSignature(menu_item_affix_list$46template._ViewMenuItemAffixListComponent1, () => ({
    __proto__: dart.getMethods(menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(menu_item_affix_list$46template._ViewMenuItemAffixListComponent1, L0);
  menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0 = class _ViewMenuItemAffixListComponentHost0 extends host_view.HostView$(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent)) {
    build() {
      this.componentView = new menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new menu_item_affix_list.MenuItemAffixListComponent.new(this.componentView);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this.component;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this.componentView.markAsCheckOnce();
      }
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.new = function() {
    menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.prototype;
  dart.addTypeTests(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0);
  dart.addTypeCaches(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0);
  dart.setMethodSignature(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0, () => ({
    __proto__: dart.getMethods(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0, L0);
  var C3;
  menu_item_affix_list$46template.createMenuItemAffixListComponentFactory = function createMenuItemAffixListComponentFactory() {
    return new (ComponentFactoryOfMenuItemAffixListComponentL()).new("menu-item-affix-list", C3 || CT.C3);
  };
  menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent1 = function viewFactory_MenuItemAffixListComponent1(parentView, parentIndex) {
    return new menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.new(parentView, parentIndex);
  };
  menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponentHost0 = function viewFactory_MenuItemAffixListComponentHost0() {
    return new menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.new();
  };
  menu_item_affix_list$46template.initReflector = function initReflector() {
    if (dart.test(menu_item_affix_list$46template._visited)) {
      return;
    }
    menu_item_affix_list$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MenuItemAffixListComponentL()), menu_item_affix_list$46template.createMenuItemAffixListComponentFactory());
    angular$46template.initReflector();
    meta$46template.initReflector();
    dynamic_component$46template.initReflector();
    has_disabled$46template.initReflector();
    base_affix$46template.initReflector();
    menu_item_affix$46template.initReflector();
  };
  dart.copyProperties(menu_item_affix_list$46template, {
    get MenuItemAffixListComponentNgFactory() {
      return menu_item_affix_list$46template._MenuItemAffixListComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C4;
  var C5;
  dart.defineLazy(menu_item_affix_list$46template, {
    /*menu_item_affix_list$46template.styles$MenuItemAffixListComponent*/get styles$MenuItemAffixListComponent() {
      return [menu_item_affix_list$46scss$46css$46shim.styles];
    },
    /*menu_item_affix_list$46template._MenuItemAffixListComponentNgFactory*/get _MenuItemAffixListComponentNgFactory() {
      return C4 || CT.C4;
    },
    /*menu_item_affix_list$46template.styles$MenuItemAffixListComponentHost*/get styles$MenuItemAffixListComponentHost() {
      return C5 || CT.C5;
    },
    /*menu_item_affix_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/menu_item_affix_list.template", {
    "package:angular_components/material_menu/menu_item_affix_list.template.dart": menu_item_affix_list$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix_list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyCI,uBAAgB,2BAAY,yEAAyE;IACvG;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,sBAAY,yBAAsB,gBAAgB;AACD,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACqC,MAAtF,yBAAmB,iCAAiB;AACb,MAA5B,AAAK,IAAD,WAAgB;IACtB;;AAI4C,MAArC,AAAS;IAChB;;AAIoC,MAA7B,AAAS;IAChB;;AAGyB,MAAvB,mFAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC+F,QAAnH,mFAAoB,SAAiC,2CAAO,mEAAmC;AAC/F,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;kFAzC6C,YAAgB;IAH/C;IACF;AAEgE,6FAAM,UAAU,EAAE,WAAW;AAC7E,IAA1B,AAAK;AACoE,uBAApE,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;MAJ+B,gFAAgB;;;;;;;;AA0DK,MAAlD,AAAK,gDAAwC;IAC/C;;mFAJqD,YAAgB;AAAe,8FAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;AAgBnD,MAAxD,qBAAgB,wEAAgC,MAAM;AACrD,kBAAa,AAAc;AACsC,MAAlE,iBAAoB,wDAAgC;AACjC,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,iCAAiB,AAAE,MAAG,SAAS;AAC5D,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACf,UAAI,OAAO;AAC2B,QAA/B,AAAc;;AAEa,MAA7B,AAAc;IACrB;;AAI8B,MAAvB,AAAU;IACjB;;;;;EACF;;;;;;;;;;;AA/CE,UAAO,2DAAiB;EAC1B;6HAUwF,YAAgB;AACtG,UAAO,0EAAiC,UAAU,EAAE,WAAW;EACjE;;AAqCE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,2CAAW;AAEoF,IAA/F,4BAAyB,8CAA4B;AAChC,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAvEE,YAAO;IACT;;;;;;;MArDoB,iEAAiC;YAAG,EAAS;;MAkD3D,oEAAoC;;;MAqBtB,qEAAqC;;;MAsCrD,wCAAQ;YAAG","file":"menu_item_affix_list.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_item_affix_list$46template: menu_item_affix_list$46template
  };
}));

//# sourceMappingURL=menu_item_affix_list.template.unsound.ddc.js.map
