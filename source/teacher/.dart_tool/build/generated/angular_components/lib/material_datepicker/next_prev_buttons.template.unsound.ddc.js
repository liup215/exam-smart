define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular/angular.template', 'packages/angular_components/src/material_datepicker/sequential.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_datepicker/next_prev_buttons.scss.css.shim'], (function load__packages__angular_components__material_datepicker__next_prev_buttons_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular__src__runtime__interpolate, packages__angular_components__material_datepicker__next_prev_buttons, packages__angular__angular$46template, packages__angular_components__src__material_datepicker__sequential$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_datepicker__next_prev_buttons$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const reflector = packages__angular__src__core__change_detection__pipe_transform.src__di__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const next_prev_buttons = packages__angular_components__material_datepicker__next_prev_buttons.material_datepicker__next_prev_buttons;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const sequential$46template = packages__angular_components__src__material_datepicker__sequential$46template.src__material_datepicker__sequential$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const next_prev_buttons$46scss$46css$46shim = packages__angular_components__material_datepicker__next_prev_buttons$46scss$46css$46shim.material_datepicker__next_prev_buttons$46scss$46css$46shim;
  var next_prev_buttons$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var ButtonElementL = () => (ButtonElementL = dart.constFn(dart.legacy(html.ButtonElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var NextPrevComponentL = () => (NextPrevComponentL = dart.constFn(dart.legacy(next_prev_buttons.NextPrevComponent)))();
  var ComponentFactoryOfNextPrevComponentL = () => (ComponentFactoryOfNextPrevComponentL = dart.constFn(component_factory.ComponentFactory$(NextPrevComponentL())))();
  var HostViewOfNextPrevComponentL = () => (HostViewOfNextPrevComponentL = dart.constFn(host_view.HostView$(NextPrevComponentL())))();
  var HostViewLOfNextPrevComponentL = () => (HostViewLOfNextPrevComponentL = dart.constFn(dart.legacy(HostViewOfNextPrevComponentL())))();
  var VoidToHostViewLOfNextPrevComponentL = () => (VoidToHostViewLOfNextPrevComponentL = dart.constFn(dart.fnType(HostViewLOfNextPrevComponentL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/next_prev_buttons.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(next_prev_buttons$46template.ViewNextPrevComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(next_prev_buttons$46template.viewFactory_NextPrevComponentHost0, VoidToHostViewLOfNextPrevComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfNextPrevComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "next-prev-buttons"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _compView_1 = dart.privateName(next_prev_buttons$46template, "_compView_1");
  var _MaterialIconComponent_1_5 = dart.privateName(next_prev_buttons$46template, "_MaterialIconComponent_1_5");
  var _compView_4 = dart.privateName(next_prev_buttons$46template, "_compView_4");
  var _MaterialIconComponent_4_5 = dart.privateName(next_prev_buttons$46template, "_MaterialIconComponent_4_5");
  var _expr_0 = dart.privateName(next_prev_buttons$46template, "_expr_0");
  var _expr_1 = dart.privateName(next_prev_buttons$46template, "_expr_1");
  var _expr_2 = dart.privateName(next_prev_buttons$46template, "_expr_2");
  var _expr_3 = dart.privateName(next_prev_buttons$46template, "_expr_3");
  var _expr_5 = dart.privateName(next_prev_buttons$46template, "_expr_5");
  var _expr_6 = dart.privateName(next_prev_buttons$46template, "_expr_6");
  var _expr_7 = dart.privateName(next_prev_buttons$46template, "_expr_7");
  var _expr_8 = dart.privateName(next_prev_buttons$46template, "_expr_8");
  var _el_0 = dart.privateName(next_prev_buttons$46template, "_el_0");
  var _el_1 = dart.privateName(next_prev_buttons$46template, "_el_1");
  var _el_3 = dart.privateName(next_prev_buttons$46template, "_el_3");
  var _el_4 = dart.privateName(next_prev_buttons$46template, "_el_4");
  var C0;
  next_prev_buttons$46template.ViewNextPrevComponent0 = class ViewNextPrevComponent0 extends component_view.ComponentView$(dart.legacy(next_prev_buttons.NextPrevComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = ButtonElementL().as(dom_helpers.appendElement(doc, parentRenderNode, "button"));
      this.updateChildClass(this[_el_0], "prev");
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootElement;
      this[_el_0][$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "icon", "navigate_before");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5]);
      let _text_2 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_el_3] = ButtonElementL().as(dom_helpers.appendElement(doc, parentRenderNode, "button"));
      this.updateChildClass(this[_el_3], "next");
      this.addShimC(this[_el_3]);
      this[_compView_4] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootElement;
      this[_el_3][$append](this[_el_4]);
      dom_helpers.setAttribute(this[_el_4], "icon", "navigate_next");
      this.addShimC(HtmlElementL().as(this[_el_4]));
      this[_MaterialIconComponent_4_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_4]));
      this[_compView_4].create(this[_MaterialIconComponent_4_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'prev')));
      this[_el_3][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'next')));
      parentRenderNode[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'stopPropagation')));
      parentRenderNode[$addEventListener]("keypress", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'stopPropagation')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_1_5].icon = "navigate_before";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_MaterialIconComponent_4_5].icon = "navigate_next";
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isPrevDisabled;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "isPrevDisabled", "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart"))) {
        dom_helpers.updateClassBinding(this[_el_0], "disabled", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isPrevDisabled;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "{{isPrevDisabled}}", "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart"))) {
        dom_helpers.setAttribute(this[_el_0], "aria-disabled", StringL().as(interpolate.interpolate0(currVal_1)));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = interpolate.interpolate0(dart.test(_ctx.isPrevDisabled) ? 0 - 1 : 0);
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "{{isPrevDisabled ? -1 : 0}}", "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart"))) {
        dom_helpers.setAttribute(this[_el_0], "tabindex", StringL().as(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.prevLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "prevLabel", "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart"))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_5 = _ctx.isNextDisabled;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "isNextDisabled", "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart"))) {
        dom_helpers.updateClassBinding(this[_el_3], "disabled", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.isNextDisabled;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "{{isNextDisabled}}", "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart"))) {
        dom_helpers.setAttribute(this[_el_3], "aria-disabled", StringL().as(interpolate.interpolate0(currVal_6)));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = interpolate.interpolate0(dart.test(_ctx.isNextDisabled) ? 0 - 1 : 0);
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "{{isNextDisabled ? -1 : 0}}", "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart"))) {
        dom_helpers.setAttribute(this[_el_3], "tabindex", StringL().as(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.nextLabel;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "nextLabel", "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart"))) {
        dom_helpers.updateAttribute(this[_el_4], "aria-label", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_compView_1].detectChanges();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_4].destroyInternalState();
    }
    static _debugClearComponentStyles() {
      next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles;
      if (styles == null) {
        next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(next_prev_buttons$46template.styles$NextPrevComponent, next_prev_buttons$46template.ViewNextPrevComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (next_prev_buttons$46template.ViewNextPrevComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_compView_4] = null;
    this[_MaterialIconComponent_4_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    next_prev_buttons$46template.ViewNextPrevComponent0.__proto__.new.call(this, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("next-prev-buttons"));
  }).prototype = next_prev_buttons$46template.ViewNextPrevComponent0.prototype;
  dart.addTypeTests(next_prev_buttons$46template.ViewNextPrevComponent0);
  dart.addTypeCaches(next_prev_buttons$46template.ViewNextPrevComponent0);
  dart.setMethodSignature(next_prev_buttons$46template.ViewNextPrevComponent0, () => ({
    __proto__: dart.getMethods(next_prev_buttons$46template.ViewNextPrevComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(next_prev_buttons$46template.ViewNextPrevComponent0, L0);
  dart.setFieldSignature(next_prev_buttons$46template.ViewNextPrevComponent0, () => ({
    __proto__: dart.getFields(next_prev_buttons$46template.ViewNextPrevComponent0.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_compView_4]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_4_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.ButtonElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element)),
    [_el_3]: dart.fieldType(dart.legacy(html.ButtonElement)),
    [_el_4]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(next_prev_buttons$46template.ViewNextPrevComponent0, {
    /*next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  next_prev_buttons$46template._ViewNextPrevComponentHost0 = class _ViewNextPrevComponentHost0 extends host_view.HostView$(dart.legacy(next_prev_buttons.NextPrevComponent)) {
    build() {
      this.componentView = new next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new next_prev_buttons.NextPrevComponent.new(this.componentView);
      this.initRootNode(_el_0);
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
  (next_prev_buttons$46template._ViewNextPrevComponentHost0.new = function() {
    next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = next_prev_buttons$46template._ViewNextPrevComponentHost0.prototype;
  dart.addTypeTests(next_prev_buttons$46template._ViewNextPrevComponentHost0);
  dart.addTypeCaches(next_prev_buttons$46template._ViewNextPrevComponentHost0);
  dart.setMethodSignature(next_prev_buttons$46template._ViewNextPrevComponentHost0, () => ({
    __proto__: dart.getMethods(next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(next_prev_buttons$46template._ViewNextPrevComponentHost0, L0);
  var C1;
  next_prev_buttons$46template.createNextPrevComponentFactory = function createNextPrevComponentFactory() {
    return new (ComponentFactoryOfNextPrevComponentL()).new("next-prev-buttons", C1 || CT.C1);
  };
  next_prev_buttons$46template.viewFactory_NextPrevComponentHost0 = function viewFactory_NextPrevComponentHost0() {
    return new next_prev_buttons$46template._ViewNextPrevComponentHost0.new();
  };
  next_prev_buttons$46template.initReflector = function initReflector() {
    if (dart.test(next_prev_buttons$46template._visited)) {
      return;
    }
    next_prev_buttons$46template._visited = true;
    reflector.registerComponent(dart.wrapType(NextPrevComponentL()), next_prev_buttons$46template.createNextPrevComponentFactory());
    angular$46template.initReflector();
    material_icon$46template.initReflector();
    sequential$46template.initReflector();
    sequential$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(next_prev_buttons$46template, {
    get NextPrevComponentNgFactory() {
      return next_prev_buttons$46template._NextPrevComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(next_prev_buttons$46template, {
    /*next_prev_buttons$46template.styles$NextPrevComponent*/get styles$NextPrevComponent() {
      return [next_prev_buttons$46scss$46css$46shim.styles];
    },
    /*next_prev_buttons$46template._NextPrevComponentNgFactory*/get _NextPrevComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*next_prev_buttons$46template.styles$NextPrevComponentHost*/get styles$NextPrevComponentHost() {
      return C3 || CT.C3;
    },
    /*next_prev_buttons$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/next_prev_buttons.template", {
    "package:angular_components/material_datepicker/next_prev_buttons.template.dart": next_prev_buttons$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["next_prev_buttons.template.dart"],"names":[],"mappings":"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","file":"next_prev_buttons.template.unsound.ddc.js"}');
  // Exports:
  return {
    material_datepicker__next_prev_buttons$46template: next_prev_buttons$46template
  };
}));

//# sourceMappingURL=next_prev_buttons.template.unsound.ddc.js.map
