define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/observable/observable', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/mixins/track_layout_changes', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/model/menu/menu', 'packages/angular/src/core/application_tokens'], (function load__packages__angular_components__material_menu__material_fab_menu(dart_sdk, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__observable__observable, packages__angular_components__material_popup__material_popup, packages__angular_components__model__a11y__keyboard_handler_mixin, packages__angular_components__mixins__track_layout_changes, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__model__menu__menu, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const observable = packages__angular_components__model__observable__observable.model__observable__observable;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const keyboard_handler_mixin = packages__angular_components__model__a11y__keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const track_layout_changes = packages__angular_components__mixins__track_layout_changes.mixins__track_layout_changes;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const menu = packages__angular_components__model__menu__menu.model__menu__menu;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  var material_fab_menu = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $client = dartx.client;
  var $any = dartx.any;
  var StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ChangeOfboolL = () => (ChangeOfboolL = dart.constFn(observable.Change$(boolL())))();
  var ChangeLOfboolL = () => (ChangeLOfboolL = dart.constFn(dart.legacy(ChangeOfboolL())))();
  var ChangeLOfboolLToNull = () => (ChangeLOfboolLToNull = dart.constFn(dart.fnType(core.Null, [ChangeLOfboolL()])))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var ObservableReferenceOfboolL = () => (ObservableReferenceOfboolL = dart.constFn(observable.ObservableReference$(boolL())))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  var MenuItemGroupL = () => (MenuItemGroupL = dart.constFn(dart.legacy(menu.MenuItemGroup)))();
  var MenuItemGroupLToboolL = () => (MenuItemGroupLToboolL = dart.constFn(dart.fnType(boolL(), [MenuItemGroupL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_menu/material_fab_menu.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "center",
        [Alignment__displayName]: "Center"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: alignment.AfterCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "After",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [AfterCustomAlignment_requiresContentSizeToPosition]: false
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "center left",
        [RelativePosition_originY]: C2 || CT.C2,
        [RelativePosition_originX]: C3 || CT.C3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: alignment.BeforeCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "Before",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [BeforeCustomAlignment_requiresContentSizeToPosition]: true
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "center right",
        [RelativePosition_originY]: C2 || CT.C2,
        [RelativePosition_originX]: C5 || CT.C5
      });
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C4 || CT.C4], RelativePositionL());
    }
  }, false);
  var _activateFirstItemOnInit = dart.privateName(material_fab_menu, "_activateFirstItemOnInit");
  var _activateLastItemOnInit = dart.privateName(material_fab_menu, "_activateLastItemOnInit");
  var _viewModelStreamSub = dart.privateName(material_fab_menu, "_viewModelStreamSub");
  var _viewModel = dart.privateName(material_fab_menu, "_viewModel");
  var _onShow = dart.privateName(material_fab_menu, "_onShow");
  var _menuVisible = dart.privateName(material_fab_menu, "_menuVisible");
  var RelativePosition_animationOrigin = dart.privateName(alignment, "RelativePosition.animationOrigin");
  var Alignment__cssPropertyValue = dart.privateName(alignment, "Alignment._cssPropertyValue");
  var Alignment__displayName = dart.privateName(alignment, "Alignment._displayName");
  var C2;
  var RelativePosition_originY = dart.privateName(alignment, "RelativePosition.originY");
  var _CustomAlignment_cssClassY = dart.privateName(alignment, "_CustomAlignment.cssClassY");
  var _CustomAlignment_cssClassX = dart.privateName(alignment, "_CustomAlignment.cssClassX");
  var AfterCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "AfterCustomAlignment.requiresContentSizeToPosition");
  var C3;
  var RelativePosition_originX = dart.privateName(alignment, "RelativePosition.originX");
  var C1;
  var BeforeCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "BeforeCustomAlignment.requiresContentSizeToPosition");
  var C5;
  var C4;
  var C0;
  var _changeDetector$ = dart.privateName(material_fab_menu, "_changeDetector");
  var _trigger = dart.privateName(material_fab_menu, "_trigger");
  var _hideMenuContent = dart.privateName(material_fab_menu, "_hideMenuContent");
  var _isLikelyScreenReader = dart.privateName(material_fab_menu, "_isLikelyScreenReader");
  var preferredPopupPositions = dart.privateName(material_fab_menu, "MaterialFabMenuComponent.preferredPopupPositions");
  var naviId = dart.privateName(material_fab_menu, "MaterialFabMenuComponent.naviId");
  var tooltipPositions = dart.privateName(material_fab_menu, "MaterialFabMenuComponent.tooltipPositions");
  const Object_KeyboardHandlerMixin$36 = class Object_KeyboardHandlerMixin extends core.Object {};
  (Object_KeyboardHandlerMixin$36.new = function() {
    keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
  }).prototype = Object_KeyboardHandlerMixin$36.prototype;
  dart.applyMixin(Object_KeyboardHandlerMixin$36, keyboard_handler_mixin.KeyboardHandlerMixin);
  const Object_TrackLayoutChangesMixin$36 = class Object_TrackLayoutChangesMixin extends Object_KeyboardHandlerMixin$36 {};
  (Object_TrackLayoutChangesMixin$36.new = function() {
    track_layout_changes.TrackLayoutChangesMixin.new.call(this);
    Object_TrackLayoutChangesMixin$36.__proto__.new.call(this);
  }).prototype = Object_TrackLayoutChangesMixin$36.prototype;
  dart.applyMixin(Object_TrackLayoutChangesMixin$36, track_layout_changes.TrackLayoutChangesMixin);
  material_fab_menu.MaterialFabMenuComponent = class MaterialFabMenuComponent extends Object_TrackLayoutChangesMixin$36 {
    get preferredPopupPositions() {
      return this[preferredPopupPositions];
    }
    set preferredPopupPositions(value) {
      this[preferredPopupPositions] = value;
    }
    get naviId() {
      return this[naviId];
    }
    set naviId(value) {
      this[naviId] = value;
    }
    get tooltipPositions() {
      return this[tooltipPositions];
    }
    set tooltipPositions(value) {
      super.tooltipPositions = value;
    }
    get onShow() {
      return this[_onShow].stream;
    }
    set menuItem(menuItem) {
      if (menuItem == null) return;
      this.viewModel = new material_fab_menu.MaterialFabMenuModel.new(menuItem, {showPopup: this.showPopup});
    }
    set viewModel(value) {
      let t0;
      if (value == null) return;
      this[_viewModel] = value;
      t0 = this[_viewModelStreamSub];
      t0 == null ? null : t0.cancel();
      this[_viewModelStreamSub] = this[_viewModel].onShowPopupChange.listen(dart.fn(_ => {
        this[_changeDetector$].markForCheck();
      }, ChangeLOfboolLToNull()));
    }
    get menuItem() {
      let t0;
      t0 = this[_viewModel];
      return t0 == null ? null : t0.menuItem;
    }
    get isFabEnabled() {
      let t0, t0$;
      t0$ = (t0 = this[_viewModel], t0 == null ? null : t0.isFabEnabled);
      return t0$ == null ? false : t0$;
    }
    get glyph() {
      let t0;
      t0 = this[_viewModel];
      return t0 == null ? null : t0.glyph;
    }
    get ariaLabel() {
      let t0;
      t0 = this[_viewModel];
      return t0 == null ? null : t0.ariaLabel;
    }
    get tooltip() {
      let t0;
      t0 = this[_viewModel];
      return t0 == null ? null : t0.tooltip;
    }
    get hasTooltip() {
      let t0, t0$;
      t0$ = (t0 = this.tooltip, t0 == null ? null : t0[$isNotEmpty]);
      return t0$ == null ? false : t0$;
    }
    get hasMenu() {
      let t0, t0$;
      t0$ = (t0 = this[_viewModel], t0 == null ? null : t0.hasMenu);
      return t0$ == null ? false : t0$;
    }
    get isFabHidden() {
      let t0, t0$;
      t0$ = (t0 = this[_viewModel], t0 == null ? null : t0.isFabHidden);
      return t0$ == null ? false : t0$;
    }
    get showPopup() {
      let t0, t0$;
      t0$ = (t0 = this[_viewModel], t0 == null ? null : t0.showPopup);
      return t0$ == null ? false : t0$;
    }
    get closing() {
      return dart.test(this.showPopup) && !dart.test(this.menuVisible);
    }
    get menuVisible() {
      return this[_menuVisible];
    }
    get hasIcons() {
      return this[_viewModel].hasIcons;
    }
    get activateFirstItemOnInit() {
      return this[_activateFirstItemOnInit];
    }
    get activateLastItemOnInit() {
      return this[_activateLastItemOnInit];
    }
    handleUpKey(event) {
      this[_trigger]({activateLastItem: true});
    }
    handleDownKey(event) {
      this[_trigger]({activateFirstItem: true});
    }
    ngOnDestroy() {
      let t0;
      t0 = this[_viewModelStreamSub];
      t0 == null ? null : t0.cancel();
      this[_viewModelStreamSub] = null;
      this[_onShow].close();
    }
    onPopupOpened() {
      if (dart.test(this[_menuVisible])) return;
      this[_menuVisible] = true;
      this[_onShow].add(null);
    }
    onPopupClosed() {
      this[_viewModel].closePopup();
      this[_hideMenuContent]();
    }
    trigger(event) {
      this[_trigger]({activateFirstItem: KeyboardEventL().is(event) || dart.test(this[_isLikelyScreenReader](event))});
    }
    hideMenu() {
      this[_hideMenuContent]();
      FutureOfNull().delayed(material_popup.MaterialPopupComponent.SLIDE_DELAY, dart.fn(() => {
        this[_viewModel].closePopup();
      }, VoidToNull()));
    }
    [_trigger](opts) {
      let activateFirstItem = opts && 'activateFirstItem' in opts ? opts.activateFirstItem : false;
      let activateLastItem = opts && 'activateLastItem' in opts ? opts.activateLastItem : false;
      this[_activateFirstItemOnInit] = activateFirstItem;
      this[_activateLastItemOnInit] = activateLastItem;
      this[_viewModel].trigger();
    }
    [_hideMenuContent]() {
      if (!dart.test(this[_menuVisible])) return;
      this[_menuVisible] = false;
    }
    [_isLikelyScreenReader](event) {
      return MouseEventL().is(event) && event[$client].x === 0 && event[$client].y === 0;
    }
  };
  (material_fab_menu.MaterialFabMenuComponent.new = function(_changeDetector) {
    this[_activateFirstItemOnInit] = false;
    this[_activateLastItemOnInit] = false;
    this[preferredPopupPositions] = null;
    this[_viewModelStreamSub] = null;
    this[_viewModel] = null;
    this[_onShow] = StreamControllerOfvoid().broadcast();
    this[naviId] = null;
    this[_menuVisible] = false;
    this[tooltipPositions] = C0 || CT.C0;
    this[_changeDetector$] = _changeDetector;
    material_fab_menu.MaterialFabMenuComponent.__proto__.new.call(this);
    ;
  }).prototype = material_fab_menu.MaterialFabMenuComponent.prototype;
  dart.addTypeTests(material_fab_menu.MaterialFabMenuComponent);
  dart.addTypeCaches(material_fab_menu.MaterialFabMenuComponent);
  material_fab_menu.MaterialFabMenuComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_fab_menu.MaterialFabMenuComponent, () => ({
    __proto__: dart.getMethods(material_fab_menu.MaterialFabMenuComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    onPopupOpened: dart.fnType(dart.void, []),
    onPopupClosed: dart.fnType(dart.void, []),
    trigger: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    hideMenu: dart.fnType(dart.void, []),
    [_trigger]: dart.fnType(dart.void, [], {activateFirstItem: dart.legacy(core.bool), activateLastItem: dart.legacy(core.bool)}, {}),
    [_hideMenuContent]: dart.fnType(dart.void, []),
    [_isLikelyScreenReader]: dart.fnType(dart.legacy(core.bool), [dart.legacy(html.Event)])
  }));
  dart.setGetterSignature(material_fab_menu.MaterialFabMenuComponent, () => ({
    __proto__: dart.getGetters(material_fab_menu.MaterialFabMenuComponent.__proto__),
    onShow: dart.legacy(async.Stream$(dart.void)),
    menuItem: dart.legacy(menu.MenuItem),
    isFabEnabled: dart.legacy(core.bool),
    glyph: dart.legacy(core.String),
    ariaLabel: dart.legacy(core.String),
    tooltip: dart.legacy(core.String),
    hasTooltip: dart.legacy(core.bool),
    hasMenu: dart.legacy(core.bool),
    isFabHidden: dart.legacy(core.bool),
    showPopup: dart.legacy(core.bool),
    closing: dart.legacy(core.bool),
    menuVisible: dart.legacy(core.bool),
    hasIcons: dart.legacy(core.bool),
    activateFirstItemOnInit: dart.legacy(core.bool),
    activateLastItemOnInit: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(material_fab_menu.MaterialFabMenuComponent, () => ({
    __proto__: dart.getSetters(material_fab_menu.MaterialFabMenuComponent.__proto__),
    menuItem: dart.legacy(menu.MenuItem),
    viewModel: dart.legacy(material_fab_menu.MaterialFabMenuModel)
  }));
  dart.setLibraryUri(material_fab_menu.MaterialFabMenuComponent, L0);
  dart.setFieldSignature(material_fab_menu.MaterialFabMenuComponent, () => ({
    __proto__: dart.getFields(material_fab_menu.MaterialFabMenuComponent.__proto__),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_activateFirstItemOnInit]: dart.fieldType(dart.legacy(core.bool)),
    [_activateLastItemOnInit]: dart.fieldType(dart.legacy(core.bool)),
    preferredPopupPositions: dart.fieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition)))),
    [_viewModelStreamSub]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    [_viewModel]: dart.fieldType(dart.legacy(material_fab_menu.MaterialFabMenuModel)),
    [_onShow]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
    naviId: dart.fieldType(dart.legacy(core.String)),
    [_menuVisible]: dart.fieldType(dart.legacy(core.bool)),
    tooltipPositions: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition))))
  }));
  var _showPopup = dart.privateName(material_fab_menu, "_showPopup");
  var menuItem$ = dart.privateName(material_fab_menu, "MaterialFabMenuModel.menuItem");
  material_fab_menu.MaterialFabMenuModel = class MaterialFabMenuModel extends core.Object {
    get menuItem() {
      return this[menuItem$];
    }
    set menuItem(value) {
      super.menuItem = value;
    }
    get onShowPopupChange() {
      return this[_showPopup].changes;
    }
    get hasMenu() {
      let t0, t0$, t0$0;
      t0$0 = (t0$ = (t0 = this.menuItem.subMenu, t0 == null ? null : t0.itemGroups), t0$ == null ? null : t0$[$isNotEmpty]);
      return t0$0 == null ? false : t0$0;
    }
    get hasIcons() {
      return dart.test(this.hasMenu) && dart.test(this.menuItem.subMenu.itemGroups[$any](dart.fn(itemGroup => itemGroup.any(dart.fn(item => boolL().as(dart.dload(item, 'hasIcon')), dynamicToboolL())), MenuItemGroupLToboolL())));
    }
    get showPopup() {
      return this[_showPopup].value;
    }
    get isFabEnabled() {
      let t0;
      t0 = this.menuItem.enabled;
      return t0 == null ? false : t0;
    }
    get glyph() {
      let t0;
      t0 = this.menuItem.icon;
      return t0 == null ? null : t0.name;
    }
    get ariaLabel() {
      return this.menuItem.label;
    }
    get tooltip() {
      let t0;
      t0 = this.menuItem.tooltip;
      return t0 == null ? this.menuItem.label : t0;
    }
    get isFabHidden() {
      return dart.test(this.hasMenu) ? this[_showPopup].value : false;
    }
    trigger() {
      if (dart.test(this.hasMenu)) {
        this[_showPopup].value = true;
      } else if (this.menuItem.action != null) {
        this.menuItem.action();
      }
    }
    closePopup() {
      this[_showPopup].value = false;
    }
  };
  (material_fab_menu.MaterialFabMenuModel.new = function(menuItem, opts) {
    let showPopup = opts && 'showPopup' in opts ? opts.showPopup : false;
    this[menuItem$] = menuItem;
    this[_showPopup] = new (ObservableReferenceOfboolL()).new(showPopup);
    ;
  }).prototype = material_fab_menu.MaterialFabMenuModel.prototype;
  dart.addTypeTests(material_fab_menu.MaterialFabMenuModel);
  dart.addTypeCaches(material_fab_menu.MaterialFabMenuModel);
  dart.setMethodSignature(material_fab_menu.MaterialFabMenuModel, () => ({
    __proto__: dart.getMethods(material_fab_menu.MaterialFabMenuModel.__proto__),
    trigger: dart.fnType(dart.void, []),
    closePopup: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_fab_menu.MaterialFabMenuModel, () => ({
    __proto__: dart.getGetters(material_fab_menu.MaterialFabMenuModel.__proto__),
    onShowPopupChange: dart.legacy(async.Stream$(dart.legacy(observable.Change$(dart.legacy(core.bool))))),
    hasMenu: dart.legacy(core.bool),
    hasIcons: dart.legacy(core.bool),
    showPopup: dart.legacy(core.bool),
    isFabEnabled: dart.legacy(core.bool),
    glyph: dart.legacy(core.String),
    ariaLabel: dart.legacy(core.String),
    tooltip: dart.legacy(core.String),
    isFabHidden: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_fab_menu.MaterialFabMenuModel, L0);
  dart.setFieldSignature(material_fab_menu.MaterialFabMenuModel, () => ({
    __proto__: dart.getFields(material_fab_menu.MaterialFabMenuModel.__proto__),
    menuItem: dart.finalFieldType(dart.legacy(menu.MenuItem)),
    [_showPopup]: dart.finalFieldType(dart.legacy(observable.ObservableReference$(dart.legacy(core.bool))))
  }));
  dart.trackLibraries("packages/angular_components/material_menu/material_fab_menu", {
    "package:angular_components/material_menu/material_fab_menu.dart": material_fab_menu
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_fab_menu.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4DyB;;;;;;IAwChB;;;;;;IAkGD;;;;;;;AAhIqB,YAAA,AAAQ;IAAM;iBAQnB;AACpB,UAAI,AAAS,QAAD,IAAI,MAAM;AAE0C,MAAhE,iBAAY,+CAAqB,QAAQ,cAAa;IACxD;kBAImC;;AACjC,UAAI,AAAM,KAAD,IAAI,MAAM;AAED,MAAlB,mBAAa,KAAK;AACW,WAA7B;0BAAqB;AAGnB,MAFF,4BAAsB,AAAW,AAAkB,0CAAO,QAAC;AAC3B,QAA9B,AAAgB;;IAEpB;;;AAQyB;iCAAY;IAAQ;;;AAEpB,wDAAY;oBAAZ,OAA4B;IAAK;;;AAEtC;iCAAY;IAAK;;;AAEb;iCAAY;IAAS;;;AAEvB;iCAAY;IAAO;;;AAElB,oDAAS;oBAAT,OAAuB;IAAK;;;AAE/B,wDAAY;oBAAZ,OAAuB;IAAK;;;AAExB,wDAAY;oBAAZ,OAA2B;IAAK;;;AAElC,wDAAY;oBAAZ,OAAyB;IAAK;;AAEhC,YAAU,WAAV,8BAAc;IAAW;;AAIrB;IAAY;;AAEf,YAAA,AAAW;IAAQ;;AAGJ;IAAwB;;AAGzB;IAAuB;gBAI3B;AACG,MAAhC,kCAA2B;IAC7B;kBAGiC;AACE,MAAjC,mCAA4B;IAC9B;;;AAI+B,WAA7B;0BAAqB;AACK,MAA1B,4BAAsB;AACP,MAAf,AAAQ;IACV;;AAGE,oBAAI,qBAAc;AACC,MAAnB,qBAAe;AACE,MAAjB,AAAQ,kBAAI;IACd;;AAGyB,MAAvB,AAAW;AACO,MAAlB;IACF;YAEmB;AAG8C,MAF/D,mCAEc,AAAiB,oBAAvB,KAAK,eAAqB,4BAAsB,KAAK;IAC/D;;AAGoB,MAAlB;AAGE,MAFK,uBAA+B,mDAAa;AAC1B,QAAvB,AAAW;;IAEf;;UAGU;UAAgC;AACI,MAA5C,iCAA2B,iBAAiB;AACF,MAA1C,gCAA0B,gBAAgB;AACtB,MAApB,AAAW;IACb;;AAGE,qBAAK,qBAAc;AACC,MAApB,qBAAe;IACjB;4BAQiC;AAC/B,YAAa,AAAqC,kBAA3C,KAAK,KAAkB,AAAM,AAAO,AAAE,KAAV,gBAAa,KAAK,AAAM,AAAO,AAAE,KAAV,gBAAa;IACzE;;6DAlI8B;IAXzB,iCAA2B;IAC3B,gCAA0B;IAIR;IAEJ;IAEE;IAOf,gBAAU;IA6BT;IAsBF,qBAAe;IA4Ed;IApIwB;AAA9B;;EAA8C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkJ/B;;;;;;;AAO+B,YAAA,AAAW;IAAO;;;AAG5C,0BAAA,AAAS,oCAAA,OAAS,8BAAT,OAAqB;qBAArB,OAAmC;IAAK;;AAIjE,YAAQ,WAAR,2BACA,AAAS,AAAQ,AACZ,uCAAI,QAAC,aAAc,AAAU,SAAD,KAAK,QAAC,QAAS,WAAK,WAAL,IAAI;IAAU;;AAG5C,YAAA,AAAW;IAAK;;;AAGb,WAAA,AAAS;mBAAA,OAAW;IAAK;;;AAG9B,WAAA,AAAS;0BAAA,OAAM;IAAI;;AAEf,YAAA,AAAS;IAAK;;;AAEhB,WAAA,AAAS;mBAAA,OAAW,AAAS;IAAK;;AAEhC,uCAAU,AAAW,yBAAQ;IAAK;;AAKxD,oBAAI;AACqB,QAAvB,AAAW,yBAAQ;YACd,KAAI,AAAS,wBAAU;AACX,QAAjB,AAAe;;IAEnB;;AAI0B,MAAxB,AAAW,yBAAQ;IACrB;;yDA1C0B;QAAgB;IAAhB;IACT,mBAAE,uCAA0B,SAAS;;EAAC","file":"material_fab_menu.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__material_fab_menu: material_fab_menu
  };
}));

//# sourceMappingURL=material_fab_menu.unsound.ddc.js.map
