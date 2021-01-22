define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_button/material_button', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/core', 'packages/angular_components/model/menu/menu', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular_components/model/action/delayed_action', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/menu/selectable_menu', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/menu/menu_item_affix', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/a11y/active_item', 'packages/angular/src/core/application_tokens', 'packages/angular_components/focus/focus_activable_item', 'packages/angular_components/material_menu/common/menu_root', 'packages/angular_components/mixins/material_dropdown_base'], (function load__packages__angular_components__material_menu__material_menu(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__utils__angular__css__css, packages__angular_components__mixins__focusable_mixin, packages__angular_components__model__a11y__keyboard_handler_mixin, packages__angular_components__material_menu__menu_popup_wrapper, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_button__material_button, packages__angular_components__focus__focus_interface, packages__angular_components__src__laminate__popup__dom_popup_source, packages__quiver__core, packages__angular_components__model__menu__menu, packages__angular_components__model__ui__highlighted_text_model, packages__angular_components__model__action__delayed_action, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__model__menu__selectable_menu, packages__angular_components__src__model__selection__interfaces__selectable, packages__angular_components__model__menu__menu_item_affix, packages__angular_components__model__selection__selection_model, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__a11y__active_item, packages__angular__src__core__application_tokens, packages__angular_components__focus__focus_activable_item, packages__angular_components__material_menu__common__menu_root, packages__angular_components__mixins__material_dropdown_base) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const css = packages__angular_components__utils__angular__css__css.utils__angular__css__css;
  const focusable_mixin = packages__angular_components__mixins__focusable_mixin.mixins__focusable_mixin;
  const keyboard_handler_mixin = packages__angular_components__model__a11y__keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const menu_popup_wrapper = packages__angular_components__material_menu__menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__popup_source;
  const optional = packages__quiver__core.src__core__optional;
  const menu = packages__angular_components__model__menu__menu.model__menu__menu;
  const highlighted_text_model = packages__angular_components__model__ui__highlighted_text_model.model__ui__highlighted_text_model;
  const delayed_action = packages__angular_components__model__action__delayed_action.model__action__delayed_action;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const selectable_menu = packages__angular_components__model__menu__selectable_menu.model__menu__selectable_menu;
  const selectable = packages__angular_components__src__model__selection__interfaces__selectable.src__model__selection__interfaces__selectable;
  const menu_item_affix = packages__angular_components__model__menu__menu_item_affix.model__menu__menu_item_affix;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const active_item = packages__angular_components__model__a11y__active_item.model__a11y__active_item;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const focus_activable_item = packages__angular_components__focus__focus_activable_item.focus__focus_activable_item;
  const menu_root = packages__angular_components__material_menu__common__menu_root.material_menu__common__menu_root;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  var material_menu = Object.create(dart.library);
  var menu_popup = Object.create(dart.library);
  var menu_item_groups = Object.create(dart.library);
  var $classes = dartx.classes;
  var $isNotEmpty = dartx.isNotEmpty;
  var $forEach = dartx.forEach;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $target = dartx.target;
  var $attributes = dartx.attributes;
  var $parent = dartx.parent;
  var $toList = dartx.toList;
  var $any = dartx.any;
  var $isEmpty = dartx.isEmpty;
  var $toString = dartx.toString;
  var $every = dartx.every;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var OptionalOfStringL = () => (OptionalOfStringL = dart.constFn(optional.Optional$(StringL())))();
  var MenuItemL = () => (MenuItemL = dart.constFn(dart.legacy(menu.MenuItem)))();
  var StreamControllerOfMenuItemL = () => (StreamControllerOfMenuItemL = dart.constFn(async.StreamController$(MenuItemL())))();
  var HighlightedTextSegmentL = () => (HighlightedTextSegmentL = dart.constFn(dart.legacy(highlighted_text_model.HighlightedTextSegment)))();
  var ListOfHighlightedTextSegmentL = () => (ListOfHighlightedTextSegmentL = dart.constFn(core.List$(HighlightedTextSegmentL())))();
  var ListLOfHighlightedTextSegmentL = () => (ListLOfHighlightedTextSegmentL = dart.constFn(dart.legacy(ListOfHighlightedTextSegmentL())))();
  var IdentityMapOfStringL$ListLOfHighlightedTextSegmentL = () => (IdentityMapOfStringL$ListLOfHighlightedTextSegmentL = dart.constFn(_js_helper.IdentityMap$(StringL(), ListLOfHighlightedTextSegmentL())))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var MenuItemGroupWithSelectionL = () => (MenuItemGroupWithSelectionL = dart.constFn(dart.legacy(selectable_menu.MenuItemGroupWithSelection)))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var SelectableMenuItemL = () => (SelectableMenuItemL = dart.constFn(dart.legacy(selectable_menu.SelectableMenuItem)))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  var MenuItemAffixL = () => (MenuItemAffixL = dart.constFn(dart.legacy(menu_item_affix.MenuItemAffix)))();
  var MenuItemAffixLToboolL = () => (MenuItemAffixLToboolL = dart.constFn(dart.fnType(boolL(), [MenuItemAffixL()])))();
  var SelectionChangeRecordL = () => (SelectionChangeRecordL = dart.constFn(dart.legacy(selection_model.SelectionChangeRecord)))();
  var ListOfSelectionChangeRecordL = () => (ListOfSelectionChangeRecordL = dart.constFn(core.List$(SelectionChangeRecordL())))();
  var ListLOfSelectionChangeRecordL = () => (ListLOfSelectionChangeRecordL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordL())))();
  var ListLOfSelectionChangeRecordLToNull = () => (ListLOfSelectionChangeRecordLToNull = dart.constFn(dart.fnType(core.Null, [ListLOfSelectionChangeRecordL()])))();
  var SelectableMenuItemLToboolL = () => (SelectableMenuItemLToboolL = dart.constFn(dart.fnType(boolL(), [SelectableMenuItemL()])))();
  var MenuItemGroupL = () => (MenuItemGroupL = dart.constFn(dart.legacy(menu.MenuItemGroup)))();
  var MenuItemGroupLToboolL = () => (MenuItemGroupLToboolL = dart.constFn(dart.fnType(boolL(), [MenuItemGroupL()])))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/material_menu/menu_popup.dart";
  var L2 = "package:angular_components/material_menu/menu_item_groups.dart";
  var L0 = "package:angular_components/material_menu/material_menu.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: OptionalOfStringL().prototype,
        [Optional__value]: null
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 400000
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-start",
        [Alignment__displayName]: "Start"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: alignment.AfterCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "After",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [AfterCustomAlignment_requiresContentSizeToPosition]: false
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top left",
        [RelativePosition_originY]: C4 || CT.C4,
        [RelativePosition_originX]: C5 || CT.C5
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "center",
        [Alignment__displayName]: "Center"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "center left",
        [RelativePosition_originY]: C7 || CT.C7,
        [RelativePosition_originX]: C5 || CT.C5
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-end",
        [Alignment__displayName]: "End"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom left",
        [RelativePosition_originY]: C9 || CT.C9,
        [RelativePosition_originX]: C5 || CT.C5
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: alignment.BeforeCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "Before",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [BeforeCustomAlignment_requiresContentSizeToPosition]: true
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top right",
        [RelativePosition_originY]: C4 || CT.C4,
        [RelativePosition_originX]: C11 || CT.C11
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "center right",
        [RelativePosition_originY]: C7 || CT.C7,
        [RelativePosition_originX]: C11 || CT.C11
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom right",
        [RelativePosition_originY]: C9 || CT.C9,
        [RelativePosition_originX]: C11 || CT.C11
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C6 || CT.C6, C8 || CT.C8, C10 || CT.C10, C12 || CT.C12, C13 || CT.C13], RelativePositionL());
    },
    get C14() {
      return C14 = dart.constList([C6 || CT.C6, C12 || CT.C12], RelativePositionL());
    }
  }, false);
  var _disposer = dart.privateName(material_menu, "_disposer");
  var _popupClass = dart.privateName(material_menu, "_popupClass");
  var _button = dart.privateName(material_menu, "_button");
  var _menuPopup = dart.privateName(material_menu, "_menuPopup");
  var _root$ = dart.privateName(material_menu, "_root");
  var _focusTarget = dart.privateName(material_menu, "_focusTarget");
  var buttonText = dart.privateName(material_menu, "MaterialMenuComponent.buttonText");
  var disabled = dart.privateName(material_menu, "MaterialMenuComponent.disabled");
  var tabbable = dart.privateName(material_menu, "MaterialMenuComponent.tabbable");
  var ariaLabel = dart.privateName(material_menu, "MaterialMenuComponent.ariaLabel");
  const Object_FocusableMixin$36 = class Object_FocusableMixin extends core.Object {};
  (Object_FocusableMixin$36.new = function() {
    focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$36.prototype;
  dart.applyMixin(Object_FocusableMixin$36, focusable_mixin.FocusableMixin);
  const Object_KeyboardHandlerMixin$36 = class Object_KeyboardHandlerMixin extends Object_FocusableMixin$36 {};
  (Object_KeyboardHandlerMixin$36.new = function() {
    keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
    Object_KeyboardHandlerMixin$36.__proto__.new.call(this);
  }).prototype = Object_KeyboardHandlerMixin$36.prototype;
  dart.applyMixin(Object_KeyboardHandlerMixin$36, keyboard_handler_mixin.KeyboardHandlerMixin);
  const Object_MenuPopupWrapper$36 = class Object_MenuPopupWrapper extends Object_KeyboardHandlerMixin$36 {};
  (Object_MenuPopupWrapper$36.new = function() {
    menu_popup_wrapper.MenuPopupWrapper.new.call(this);
    Object_MenuPopupWrapper$36.__proto__.new.call(this);
  }).prototype = Object_MenuPopupWrapper$36.prototype;
  dart.applyMixin(Object_MenuPopupWrapper$36, menu_popup_wrapper.MenuPopupWrapper);
  const Object_MenuPopupTrigger$36 = class Object_MenuPopupTrigger extends Object_MenuPopupWrapper$36 {};
  (Object_MenuPopupTrigger$36.new = function() {
    menu_popup_wrapper.MenuPopupTrigger.new.call(this);
    Object_MenuPopupTrigger$36.__proto__.new.call(this);
  }).prototype = Object_MenuPopupTrigger$36.prototype;
  dart.applyMixin(Object_MenuPopupTrigger$36, menu_popup_wrapper.MenuPopupTrigger);
  material_menu.MaterialMenuComponent = class MaterialMenuComponent extends Object_MenuPopupTrigger$36 {
    get buttonText() {
      return this[buttonText];
    }
    set buttonText(value) {
      this[buttonText] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get tabbable() {
      return this[tabbable];
    }
    set tabbable(value) {
      this[tabbable] = value;
    }
    get ariaLabel() {
      return this[ariaLabel];
    }
    set ariaLabel(value) {
      this[ariaLabel] = value;
    }
    get popupClass() {
      return this[_popupClass];
    }
    set popupClass(className) {
      this[_popupClass] = css.constructEncapsulatedCss(className, this[_root$][$classes]);
    }
    get tooltipText() {
      let t0;
      t0 = this.menu;
      return t0 == null ? null : t0.tooltipText;
    }
    get hasTooltip() {
      let t0, t0$;
      t0$ = (t0 = this.menu, t0 == null ? null : t0.hasTooltip);
      return t0$ == null ? false : t0$;
    }
    get hasSubmenu() {
      let t0, t0$, t0$0;
      t0$0 = (t0$ = (t0 = this.menu, t0 == null ? null : t0.itemGroups), t0$ == null ? null : t0$[$isNotEmpty]);
      return t0$0 == null ? false : t0$0;
    }
    get hasIcon() {
      let t0;
      return (t0 = this.menu, t0 == null ? null : t0.uiIcon) != null;
    }
    set button(b) {
      this[_button] = b;
    }
    set menuPopup(m) {
      this[_menuPopup] = m;
    }
    get [_focusTarget]() {
      return dart.test(this.disabled) ? null : dart.test(this.isExpanded) ? this[_menuPopup] : this[_button];
    }
    ngAfterViewInit() {
      this.focusable = this[_focusTarget];
      this[_disposer].addStreamSubscription(boolL(), this.isExpandedChange.listen(dart.fn(_ => {
        this.focusable = this[_focusTarget];
      }, boolLToNull())));
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_menu.MaterialMenuComponent.new = function(_root) {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[_popupClass] = null;
    this[buttonText] = null;
    this[disabled] = false;
    this[tabbable] = true;
    this[ariaLabel] = null;
    this[_button] = null;
    this[_menuPopup] = null;
    this[_root$] = _root;
    material_menu.MaterialMenuComponent.__proto__.new.call(this);
    ;
  }).prototype = material_menu.MaterialMenuComponent.prototype;
  dart.addTypeTests(material_menu.MaterialMenuComponent);
  dart.addTypeCaches(material_menu.MaterialMenuComponent);
  material_menu.MaterialMenuComponent[dart.implements] = () => [lifecycle_hooks.AfterViewInit, has_disabled.HasDisabled, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getMethods(material_menu.MaterialMenuComponent.__proto__),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getGetters(material_menu.MaterialMenuComponent.__proto__),
    popupClass: dart.legacy(core.String),
    tooltipText: dart.legacy(core.String),
    hasTooltip: dart.legacy(core.bool),
    hasSubmenu: dart.legacy(core.bool),
    hasIcon: dart.legacy(core.bool),
    [_focusTarget]: dart.legacy(focus_interface.Focusable)
  }));
  dart.setSetterSignature(material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getSetters(material_menu.MaterialMenuComponent.__proto__),
    popupClass: dart.legacy(core.String),
    button: dart.legacy(material_button.MaterialButtonComponent),
    menuPopup: dart.legacy(menu_popup.MenuPopupComponent)
  }));
  dart.setLibraryUri(material_menu.MaterialMenuComponent, L0);
  dart.setFieldSignature(material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getFields(material_menu.MaterialMenuComponent.__proto__),
    [_root$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_popupClass]: dart.fieldType(dart.legacy(core.String)),
    buttonText: dart.fieldType(dart.legacy(core.String)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    tabbable: dart.fieldType(dart.legacy(core.bool)),
    ariaLabel: dart.fieldType(dart.legacy(core.String)),
    [_button]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_menuPopup]: dart.fieldType(dart.legacy(menu_popup.MenuPopupComponent))
  }));
  var _popupClass$ = dart.privateName(menu_popup, "_popupClass");
  var element$ = dart.privateName(menu_popup, "MenuPopupComponent.element");
  var popupSource = dart.privateName(menu_popup, "MenuPopupComponent.popupSource");
  const Object_FocusableMixin$36$ = class Object_FocusableMixin extends core.Object {};
  (Object_FocusableMixin$36$.new = function() {
    focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$36$.prototype;
  dart.applyMixin(Object_FocusableMixin$36$, focusable_mixin.FocusableMixin);
  const Object_MenuPopupWrapper$36$ = class Object_MenuPopupWrapper extends Object_FocusableMixin$36$ {};
  (Object_MenuPopupWrapper$36$.new = function() {
    menu_popup_wrapper.MenuPopupWrapper.new.call(this);
    Object_MenuPopupWrapper$36$.__proto__.new.call(this);
  }).prototype = Object_MenuPopupWrapper$36$.prototype;
  dart.applyMixin(Object_MenuPopupWrapper$36$, menu_popup_wrapper.MenuPopupWrapper);
  menu_popup.MenuPopupComponent = class MenuPopupComponent extends Object_MenuPopupWrapper$36$ {
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    get popupSource() {
      return this[popupSource];
    }
    set popupSource(value) {
      this[popupSource] = value;
    }
    set popupClass(value) {
      this[_popupClass$] = css.constructEncapsulatedCss(value, this.element[$classes]);
    }
    get popupClass() {
      return this[_popupClass$];
    }
    set menuItemGroups(groups) {
      this.focusable = groups;
    }
  };
  (menu_popup.MenuPopupComponent.new = function(element) {
    this[popupSource] = null;
    this[_popupClass$] = null;
    this[element$] = element;
    menu_popup.MenuPopupComponent.__proto__.new.call(this);
    ;
  }).prototype = menu_popup.MenuPopupComponent.prototype;
  dart.addTypeTests(menu_popup.MenuPopupComponent);
  dart.addTypeCaches(menu_popup.MenuPopupComponent);
  dart.setGetterSignature(menu_popup.MenuPopupComponent, () => ({
    __proto__: dart.getGetters(menu_popup.MenuPopupComponent.__proto__),
    popupClass: dart.legacy(core.String)
  }));
  dart.setSetterSignature(menu_popup.MenuPopupComponent, () => ({
    __proto__: dart.getSetters(menu_popup.MenuPopupComponent.__proto__),
    popupClass: dart.legacy(core.String),
    menuItemGroups: dart.legacy(menu_item_groups.MenuItemGroupsComponent)
  }));
  dart.setLibraryUri(menu_popup.MenuPopupComponent, L1);
  dart.setFieldSignature(menu_popup.MenuPopupComponent, () => ({
    __proto__: dart.getFields(menu_popup.MenuPopupComponent.__proto__),
    element: dart.fieldType(dart.legacy(html.HtmlElement)),
    popupSource: dart.fieldType(dart.legacy(popup_source.PopupSource)),
    [_popupClass$]: dart.fieldType(dart.legacy(core.String))
  }));
  var _disposer$ = dart.privateName(menu_item_groups, "_disposer");
  var _menu = dart.privateName(menu_item_groups, "_menu");
  var _closeOnPressLeft = dart.privateName(menu_item_groups, "_closeOnPressLeft");
  var _isMouseDriven = dart.privateName(menu_item_groups, "_isMouseDriven");
  var _activeModel = dart.privateName(menu_item_groups, "_activeModel");
  var _activeModelChange = dart.privateName(menu_item_groups, "_activeModelChange");
  var _subMenuOpener = dart.privateName(menu_item_groups, "_subMenuOpener");
  var _hoveredItem = dart.privateName(menu_item_groups, "_hoveredItem");
  var _submenuParent = dart.privateName(menu_item_groups, "_submenuParent");
  var _autoFocusItemId = dart.privateName(menu_item_groups, "_autoFocusItemId");
  var Optional__value = dart.privateName(optional, "Optional._value");
  var C0;
  var _selected = dart.privateName(menu_item_groups, "_selected");
  var _highlight = dart.privateName(menu_item_groups, "_highlight");
  var _highlightCache = dart.privateName(menu_item_groups, "_highlightCache");
  var _dropdownHandle$ = dart.privateName(menu_item_groups, "_dropdownHandle");
  var _menuRoot$ = dart.privateName(menu_item_groups, "_menuRoot");
  var _changeDetector$ = dart.privateName(menu_item_groups, "_changeDetector");
  var _idGenerator$ = dart.privateName(menu_item_groups, "_idGenerator");
  var _openSubMenuOnHover = dart.privateName(menu_item_groups, "_openSubMenuOnHover");
  var _updateItemsAriaCheckedState = dart.privateName(menu_item_groups, "_updateItemsAriaCheckedState");
  var _listenForSelectionChanges = dart.privateName(menu_item_groups, "_listenForSelectionChanges");
  var _itemForTarget = dart.privateName(menu_item_groups, "_itemForTarget");
  var _activeHoveredItemIfNone = dart.privateName(menu_item_groups, "_activeHoveredItemIfNone");
  var _focusActiveItem = dart.privateName(menu_item_groups, "_focusActiveItem");
  var _openSubMenu = dart.privateName(menu_item_groups, "_openSubMenu");
  var _triggerAffixShortcutActions = dart.privateName(menu_item_groups, "_triggerAffixShortcutActions");
  var _createActiveMenuModelIfNone = dart.privateName(menu_item_groups, "_createActiveMenuModelIfNone");
  var _autoFocusActiveItem = dart.privateName(menu_item_groups, "_autoFocusActiveItem");
  var _isSelected = dart.privateName(menu_item_groups, "_isSelected");
  var _anyChildrenSelected = dart.privateName(menu_item_groups, "_anyChildrenSelected");
  var _everyChildrenSelected = dart.privateName(menu_item_groups, "_everyChildrenSelected");
  var focusableItems = dart.privateName(menu_item_groups, "MenuItemGroupsComponent.focusableItems");
  var activateFirstItemOnInit = dart.privateName(menu_item_groups, "MenuItemGroupsComponent.activateFirstItemOnInit");
  var activateLastItemOnInit = dart.privateName(menu_item_groups, "MenuItemGroupsComponent.activateLastItemOnInit");
  var isKeyboardOpenedSubmenu = dart.privateName(menu_item_groups, "MenuItemGroupsComponent.isKeyboardOpenedSubmenu");
  var highlighter = dart.privateName(menu_item_groups, "MenuItemGroupsComponent.highlighter");
  var popupClass = dart.privateName(menu_item_groups, "MenuItemGroupsComponent.popupClass");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C1;
  menu_item_groups.MenuItemGroupsComponent = class MenuItemGroupsComponent extends core.Object {
    get focusableItems() {
      return this[focusableItems];
    }
    set focusableItems(value) {
      this[focusableItems] = value;
    }
    get activateFirstItemOnInit() {
      return this[activateFirstItemOnInit];
    }
    set activateFirstItemOnInit(value) {
      this[activateFirstItemOnInit] = value;
    }
    get activateLastItemOnInit() {
      return this[activateLastItemOnInit];
    }
    set activateLastItemOnInit(value) {
      this[activateLastItemOnInit] = value;
    }
    get isKeyboardOpenedSubmenu() {
      return this[isKeyboardOpenedSubmenu];
    }
    set isKeyboardOpenedSubmenu(value) {
      this[isKeyboardOpenedSubmenu] = value;
    }
    get highlighter() {
      return this[highlighter];
    }
    set highlighter(value) {
      this[highlighter] = value;
    }
    get popupClass() {
      return this[popupClass];
    }
    set popupClass(value) {
      this[popupClass] = value;
    }
    set menu(menu) {
      let t0, t0$;
      this[_menu] = menu;
      this[_updateItemsAriaCheckedState](menu);
      t0$ = (t0 = menu, t0 == null ? null : t0.itemGroups);
      t0$ == null ? null : t0$[$forEach](dart.bind(this, _listenForSelectionChanges));
    }
    get menu() {
      return this[_menu];
    }
    get preferredSubMenuPositions() {
      return menu_item_groups._preferredSubMenuPositions;
    }
    get tooltipPositions() {
      return menu_item_groups._tooltipPositions;
    }
    get width() {
      let t0, t0$;
      t0$ = (t0 = this.menu, t0 == null ? null : t0.width);
      return t0$ == null ? 0 : t0$;
    }
    set preventCloseOnPressLeft(value) {
      this[_closeOnPressLeft] = !dart.test(value);
    }
    get isMouseDriven() {
      return this[_isMouseDriven];
    }
    get isKeyboardDriven() {
      return !dart.test(this.isMouseDriven);
    }
    set activeModel(v) {
      let t0;
      this[_activeModel] = v;
      t0 = this[_activeModelChange];
      t0 == null ? null : t0.cancel();
      this[_activeModelChange] = v.modelChanged.listen(dart.fn(_ => {
        this[_changeDetector$].markForCheck();
      }, dynamicToNull()));
    }
    get activeModel() {
      return this[_activeModel];
    }
    get selected() {
      return this[_selected].stream;
    }
    set highlight(value) {
      this[_highlight] = value;
      this[_highlightCache] = new (IdentityMapOfStringL$ListLOfHighlightedTextSegmentL()).new();
    }
    get hasHighlight() {
      let t0, t0$;
      t0$ = (t0 = this[_highlight], t0 == null ? null : t0[$isNotEmpty]);
      return t0$ == null ? false : t0$;
    }
    static new(menuRoot, changeDetector, dropdownHandle, idGenerator) {
      let t0;
      return new menu_item_groups.MenuItemGroupsComponent.__(dropdownHandle, menuRoot, changeDetector, (t0 = idGenerator, t0 == null ? new id_generator.SequentialIdGenerator.fromUUID() : t0));
    }
    highlighted(input) {
      let t2, t1, t0;
      if (dart.test(this[_highlightCache][$containsKey](input))) return this[_highlightCache][$_get](input);
      t0 = this[_highlightCache];
      t1 = input;
      t2 = this.highlighter.highlight(input, JSArrayOfStringL().of([this[_highlight]]));
      t0[$_set](t1, t2);
      return t2;
    }
    onMouseOver(event) {
      if (!dart.test(this[_isMouseDriven])) return;
      let item = this[_itemForTarget](event[$target]);
      if (item == null) return;
      this.activeModel.activate(null);
      this[_hoveredItem] = item;
      this[_subMenuOpener].start();
    }
    onMouseOut(event) {
      if (!dart.test(this[_isMouseDriven])) return;
      let item = this[_itemForTarget](event[$target]);
      if (item == null) return;
      if (dart.equals(item, this[_hoveredItem])) {
        this[_hoveredItem] = null;
      }
      this[_subMenuOpener].cancel();
    }
    onMouseMove(_) {
      this[_isMouseDriven] = true;
    }
    onSubMenuItemSelected(item) {
      this[_selected].add(item);
    }
    select(item, group) {
      let t0, t0$;
      t0 = item.action;
      t0 == null ? null : t0();
      this[_selected].add(item);
      if (!MenuItemGroupWithSelectionL().is(group) || dart.test(MenuItemGroupWithSelectionL().as(group).shouldCloseMenuOnSelection)) {
        t0$ = this[_menuRoot$];
        t0$ == null ? null : t0$.closeHierarchy();
      }
    }
    handleKeydown(event, opts) {
      let t0;
      let shouldPreventDefault = opts && 'shouldPreventDefault' in opts ? opts.shouldPreventDefault : true;
      this[_isMouseDriven] = false;
      if (event.keyCode === 9) return;
      let keyCode = event.keyCode;
      let activeMenuItem = MenuItemL().as(this.activeModel.activeItem);
      switch (keyCode) {
        case 38:
        {
          this[_activeHoveredItemIfNone]();
          this.activeModel.activatePrevious();
          this[_focusActiveItem]();
          break;
        }
        case 40:
        {
          this[_activeHoveredItemIfNone]();
          this.activeModel.activateNext();
          this[_focusActiveItem]();
          break;
        }
        case 39:
        {
          if (dart.equals((t0 = activeMenuItem, t0 == null ? null : t0.hasSubMenu), true)) {
            this[_openSubMenu](MenuItemL().as(this.activeModel.activeItem), {isOpenedByKeyboard: true});
          }
          break;
        }
        case 37:
        {
          if (dart.test(this[_closeOnPressLeft])) {
            this[_dropdownHandle$].close();
          }
          break;
        }
        default:
        {
          if (!dart.test(this[_triggerAffixShortcutActions](activeMenuItem, keyCode))) {
            shouldPreventDefault = false;
          }
          break;
        }
      }
      if (dart.test(shouldPreventDefault)) event.preventDefault();
    }
    [_openSubMenu](item, opts) {
      let isOpenedByKeyboard = opts && 'isOpenedByKeyboard' in opts ? opts.isOpenedByKeyboard : false;
      if (!dart.test(item.enabled)) return;
      if (!dart.test(this.activeModel.isActive(item))) {
        this.activeModel.activate(item);
      }
      this.isKeyboardOpenedSubmenu = isOpenedByKeyboard;
      this[_submenuParent] = dart.test(item.hasSubMenu) ? item : null;
    }
    [_itemForTarget](target) {
      if (!ElementL().is(target)) return null;
      let element = ElementL().as(target);
      while (element != null) {
        if (element[$attributes][$_get]("role") === "menuitem") {
          let group = this.menu.itemGroups[$_get](core.int.parse(element[$attributes][$_get]("data-group-index")));
          let item = MenuItemL().as(group._get(core.int.parse(element[$attributes][$_get]("data-item-index"))));
          return item;
        }
        element = element[$parent];
      }
      return null;
    }
    onFocus(event) {
      let t0;
      let item = this[_itemForTarget](event[$target]);
      if (item == null) return;
      t0 = this.activeModel;
      t0 == null ? null : t0.activate(item);
    }
    handleSelectItemTrigger(item, group, event) {
      if (item == null || !dart.test(item.enabled)) return;
      if (dart.test(item.hasSubMenu)) {
        this[_openSubMenu](item, {isOpenedByKeyboard: KeyboardEventL().is(event)});
      } else {
        this.select(item, group);
      }
    }
    onSubMenuVisibilityChanged(item, visible) {
      if (!dart.test(visible) && dart.equals(item, this[_submenuParent])) {
        this[_submenuParent] = null;
        if (dart.test(this[_isMouseDriven])) return;
        if (dart.test(this[_menuRoot$].visible)) {
          this[_focusActiveItem]();
        }
      }
    }
    toggleExpansionIfCollapsible(group) {
      if (dart.test(group.isCollapsible)) {
        group.isExpanded = !dart.test(group.isExpanded);
      }
    }
    ngOnInit() {
      this[_createActiveMenuModelIfNone]();
    }
    ngAfterViewInit() {
      if (dart.test(this.activateFirstItemOnInit) || dart.test(this.activateLastItemOnInit)) this[_focusActiveItem]();
    }
    ngOnDestroy() {
      let t0;
      t0 = this[_activeModelChange];
      t0 == null ? null : t0.cancel();
      this[_activeModelChange] = null;
      this[_disposer$].dispose();
    }
    getSelectionModel(group) {
      return MenuItemGroupWithSelectionL().is(group) ? group.selectionModel : null;
    }
    itemAriaChecked(item) {
      return SelectableMenuItemL().is(item) ? item.ariaChecked : null;
    }
    getItemValue(item) {
      return SelectableMenuItemL().is(item) ? item.value : null;
    }
    shouldSelectItemOnClick(item) {
      return SelectableMenuItemL().is(item) && dart.test(item.shouldSelectOnItemClick);
    }
    isItemVisible(item) {
      return SelectableMenuItemL().is(item) ? item.selectableState != selectable.SelectableOption.Hidden : true;
    }
    isItemActive(item) {
      let t0;
      return dart.equals((t0 = this.activeModel, t0 == null ? null : t0.activeItem), item);
    }
    hasAutoFocus(itemId) {
      return this[_autoFocusItemId].transform(boolL(), dart.fn(id => id == itemId, StringLToboolL())).or(false);
    }
    isSubMenuVisible(item) {
      return dart.equals(item, this[_submenuParent]);
    }
    [_activeHoveredItemIfNone]() {
      if (this.activeModel.activeItem == null && this[_hoveredItem] != null) {
        this.activeModel.activate(this[_hoveredItem]);
      }
    }
    [_triggerAffixShortcutActions](item, keyCode) {
      if (item == null || !dart.test(item.enabled)) return false;
      let matching = item.itemSuffixes.where(dart.fn(suffix => suffix.hasShortcutKeyCode(keyCode), MenuItemAffixLToboolL()))[$toList]();
      for (let suffix of matching) {
        suffix.triggerShortcutAction();
      }
      if (dart.test(matching[$any](dart.fn(suffix => suffix.shouldCloseMenuOnTrigger, MenuItemAffixLToboolL())))) {
        this[_menuRoot$].closeHierarchy();
      }
      return matching[$isNotEmpty];
    }
    [_createActiveMenuModelIfNone]() {
      if (this.menu != null && this.activeModel == null) {
        this.activeModel = new menu.ActiveMenuItemModel.new(this[_idGenerator$], {menu: this.menu, filterOutUnselectableItems: true});
        if (dart.test(this.activateLastItemOnInit)) {
          this.activeModel.activateLast();
          this[_autoFocusActiveItem]();
        } else if (dart.test(this.activateFirstItemOnInit)) {
          this[_autoFocusActiveItem]();
        } else {
          this.activeModel.activate(null);
        }
      }
    }
    [_autoFocusActiveItem]() {
      if (this.activeModel.activeItem != null) {
        this[_autoFocusItemId] = new (OptionalOfStringL()).of(this.activeModel.id(this.activeModel.activeItem));
      }
    }
    [_focusActiveItem]() {
      if (this.activeModel.activeItem == null) return;
      for (let item of this.focusableItems) {
        if (item.key == this.activeModel.activeId) {
          item.focus();
          break;
        }
      }
      for (let group of this.menu.itemGroups) {
        if (dart.test(group.contains(this.activeModel.activeItem)) && dart.test(group.isCollapsible)) {
          group.isExpanded = true;
          break;
        }
      }
    }
    [_isSelected](selectionModel, item) {
      let t0, t0$;
      let itemValue = this.getItemValue(item);
      return itemValue != null && dart.test((t0$ = (t0 = selectionModel, t0 == null ? null : t0.isSelected(itemValue)), t0$ == null ? false : t0$));
    }
    focus() {
      this[_focusActiveItem]();
    }
    [_openSubMenuOnHover]() {
      this[_openSubMenu](this[_hoveredItem]);
      this[_changeDetector$].markForCheck();
    }
    [_listenForSelectionChanges](group) {
      let t0, t0$;
      if (MenuItemGroupWithSelectionL().is(group)) {
        this[_disposer$].addStreamSubscription(ListLOfSelectionChangeRecordL(), (t0$ = (t0 = group.selectionModel, t0 == null ? null : t0.selectionChanges), t0$ == null ? null : t0$.listen(dart.fn(_ => {
          this[_updateItemsAriaCheckedState](this[_menu]);
        }, ListLOfSelectionChangeRecordLToNull()))));
      }
    }
    [_updateItemsAriaCheckedState](menu) {
      let t0, t0$, t0$0;
      if (dart.test((t0$0 = (t0$ = (t0 = menu, t0 == null ? null : t0.itemGroups), t0$ == null ? null : t0$[$isEmpty]), t0$0 == null ? true : t0$0))) return;
      for (let group of menu.itemGroups) {
        if (MenuItemGroupWithSelectionL().is(group)) {
          for (let item of group) {
            if (dart.test(item.hasSubMenu)) {
              this[_updateItemsAriaCheckedState](item.subMenu);
            }
            let isSelected = this[_isSelected](group.selectionModel, item);
            if (!dart.test(item.hasSubMenu)) {
              item.ariaChecked = dart.toString(isSelected);
            } else if (dart.test(group.selectionModel.isSingleSelect)) {
              item.ariaChecked = (dart.test(isSelected) || dart.test(this[_anyChildrenSelected](group, item)))[$toString]();
            } else {
              if (dart.test(this[_anyChildrenSelected](group, item))) {
                item.ariaChecked = dart.test(this[_everyChildrenSelected](group, item)) ? "true" : "mixed";
              } else {
                item.ariaChecked = dart.toString(isSelected);
              }
            }
          }
        }
      }
    }
    [_anyChildrenSelected](group, item) {
      return item.subMenu.itemGroups[$any](dart.fn(g => MenuItemGroupWithSelectionL().is(g) && dart.test(g.any(dart.fn(i => this[_isSelected](g.selectionModel, i), SelectableMenuItemLToboolL()))), MenuItemGroupLToboolL()));
    }
    [_everyChildrenSelected](group, item) {
      return item.subMenu.itemGroups[$every](dart.fn(g => MenuItemGroupWithSelectionL().is(g) && dart.test(g.every(dart.fn(i => this[_isSelected](g.selectionModel, i), SelectableMenuItemLToboolL()))), MenuItemGroupLToboolL()));
    }
  };
  (menu_item_groups.MenuItemGroupsComponent.__ = function(_dropdownHandle, _menuRoot, _changeDetector, _idGenerator) {
    this[_disposer$] = new disposer.Disposer.oneShot();
    this[_menu] = null;
    this[focusableItems] = null;
    this[_closeOnPressLeft] = true;
    this[_isMouseDriven] = false;
    this[_activeModel] = null;
    this[_activeModelChange] = null;
    this[activateFirstItemOnInit] = false;
    this[activateLastItemOnInit] = false;
    this[_subMenuOpener] = null;
    this[_hoveredItem] = null;
    this[_submenuParent] = null;
    this[_autoFocusItemId] = C0 || CT.C0;
    this[isKeyboardOpenedSubmenu] = false;
    this[_selected] = StreamControllerOfMenuItemL().broadcast();
    this[highlighter] = null;
    this[_highlight] = null;
    this[popupClass] = null;
    this[_highlightCache] = new (IdentityMapOfStringL$ListLOfHighlightedTextSegmentL()).new();
    this[_dropdownHandle$] = _dropdownHandle;
    this[_menuRoot$] = _menuRoot;
    this[_changeDetector$] = _changeDetector;
    this[_idGenerator$] = _idGenerator;
    this[_subMenuOpener] = new delayed_action.DelayedAction.new(menu_item_groups.MenuItemGroupsComponent._menuDelay, dart.bind(this, _openSubMenuOnHover));
  }).prototype = menu_item_groups.MenuItemGroupsComponent.prototype;
  dart.addTypeTests(menu_item_groups.MenuItemGroupsComponent);
  dart.addTypeCaches(menu_item_groups.MenuItemGroupsComponent);
  menu_item_groups.MenuItemGroupsComponent[dart.implements] = () => [lifecycle_hooks.AfterViewInit, focus_interface.Focusable, lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getMethods(menu_item_groups.MenuItemGroupsComponent.__proto__),
    highlighted: dart.fnType(dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment))), [dart.legacy(core.String)]),
    onMouseOver: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    onMouseOut: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    onMouseMove: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    onSubMenuItemSelected: dart.fnType(dart.void, [dart.legacy(menu.MenuItem)]),
    select: dart.fnType(dart.void, [dart.legacy(menu.MenuItem), dart.legacy(menu.MenuItemGroup)]),
    handleKeydown: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)], {shouldPreventDefault: dart.legacy(core.bool)}, {}),
    [_openSubMenu]: dart.fnType(dart.void, [dart.legacy(menu.MenuItem)], {isOpenedByKeyboard: dart.legacy(core.bool)}, {}),
    [_itemForTarget]: dart.fnType(dart.legacy(menu.MenuItem), [dart.legacy(html.EventTarget)]),
    onFocus: dart.fnType(dart.void, [dart.legacy(html.FocusEvent)]),
    handleSelectItemTrigger: dart.fnType(dart.void, [dart.legacy(menu.MenuItem), dart.legacy(menu.MenuItemGroup), dart.legacy(html.UIEvent)]),
    onSubMenuVisibilityChanged: dart.fnType(dart.void, [dart.legacy(menu.MenuItem), dart.legacy(core.bool)]),
    toggleExpansionIfCollapsible: dart.fnType(dart.void, [dart.legacy(menu.MenuItemGroup)]),
    ngOnInit: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    getSelectionModel: dart.fnType(dart.legacy(selection_model.SelectionModel), [dart.legacy(menu.MenuItemGroup)]),
    itemAriaChecked: dart.fnType(dart.legacy(core.String), [dart.legacy(menu.MenuItem)]),
    getItemValue: dart.fnType(dart.dynamic, [dart.legacy(menu.MenuItem)]),
    shouldSelectItemOnClick: dart.fnType(dart.legacy(core.bool), [dart.legacy(menu.MenuItem)]),
    isItemVisible: dart.fnType(dart.legacy(core.bool), [dart.legacy(menu.MenuItem)]),
    isItemActive: dart.fnType(dart.legacy(core.bool), [dart.legacy(menu.MenuItem)]),
    hasAutoFocus: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    isSubMenuVisible: dart.fnType(dart.legacy(core.bool), [dart.legacy(menu.MenuItem)]),
    [_activeHoveredItemIfNone]: dart.fnType(dart.void, []),
    [_triggerAffixShortcutActions]: dart.fnType(dart.legacy(core.bool), [dart.legacy(menu.MenuItem), dart.legacy(core.int)]),
    [_createActiveMenuModelIfNone]: dart.fnType(dart.void, []),
    [_autoFocusActiveItem]: dart.fnType(dart.void, []),
    [_focusActiveItem]: dart.fnType(dart.void, []),
    [_isSelected]: dart.fnType(dart.legacy(core.bool), [dart.legacy(selection_model.SelectionModel), dart.legacy(menu.MenuItem)]),
    focus: dart.fnType(dart.void, []),
    [_openSubMenuOnHover]: dart.fnType(dart.void, []),
    [_listenForSelectionChanges]: dart.fnType(dart.void, [dart.legacy(menu.MenuItemGroup)]),
    [_updateItemsAriaCheckedState]: dart.fnType(dart.void, [dart.legacy(menu.MenuModel)]),
    [_anyChildrenSelected]: dart.fnType(dart.legacy(core.bool), [dart.legacy(menu.MenuItemGroup), dart.legacy(menu.MenuItem)]),
    [_everyChildrenSelected]: dart.fnType(dart.legacy(core.bool), [dart.legacy(menu.MenuItemGroup), dart.legacy(menu.MenuItem)])
  }));
  dart.setGetterSignature(menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getGetters(menu_item_groups.MenuItemGroupsComponent.__proto__),
    menu: dart.legacy(menu.MenuModel),
    preferredSubMenuPositions: dart.legacy(core.List$(dart.legacy(alignment.RelativePosition))),
    tooltipPositions: dart.legacy(core.List$(dart.legacy(alignment.RelativePosition))),
    width: dart.legacy(core.int),
    isMouseDriven: dart.legacy(core.bool),
    isKeyboardDriven: dart.legacy(core.bool),
    activeModel: dart.legacy(active_item.ActiveItemModel),
    selected: dart.legacy(async.Stream$(dart.legacy(menu.MenuItem))),
    hasHighlight: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getSetters(menu_item_groups.MenuItemGroupsComponent.__proto__),
    menu: dart.legacy(menu.MenuModel),
    preventCloseOnPressLeft: dart.legacy(core.bool),
    activeModel: dart.legacy(active_item.ActiveItemModel),
    highlight: dart.legacy(core.String)
  }));
  dart.setLibraryUri(menu_item_groups.MenuItemGroupsComponent, L2);
  dart.setFieldSignature(menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getFields(menu_item_groups.MenuItemGroupsComponent.__proto__),
    [_idGenerator$]: dart.finalFieldType(dart.legacy(id_generator.IdGenerator)),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_disposer$]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_menu]: dart.fieldType(dart.legacy(menu.MenuModel)),
    focusableItems: dart.fieldType(dart.legacy(core.List$(dart.legacy(focus_activable_item.FocusableActivateItem)))),
    [_closeOnPressLeft]: dart.fieldType(dart.legacy(core.bool)),
    [_isMouseDriven]: dart.fieldType(dart.legacy(core.bool)),
    [_activeModel]: dart.fieldType(dart.legacy(active_item.ActiveItemModel)),
    [_activeModelChange]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    activateFirstItemOnInit: dart.fieldType(dart.legacy(core.bool)),
    activateLastItemOnInit: dart.fieldType(dart.legacy(core.bool)),
    [_menuRoot$]: dart.finalFieldType(dart.legacy(menu_root.MenuRoot)),
    [_dropdownHandle$]: dart.fieldType(dart.legacy(material_dropdown_base.DropdownHandle)),
    [_subMenuOpener]: dart.fieldType(dart.legacy(delayed_action.DelayedAction)),
    [_hoveredItem]: dart.fieldType(dart.legacy(menu.MenuItem)),
    [_submenuParent]: dart.fieldType(dart.legacy(menu.MenuItem)),
    [_autoFocusItemId]: dart.fieldType(dart.legacy(optional.Optional$(dart.legacy(core.String)))),
    isKeyboardOpenedSubmenu: dart.fieldType(dart.legacy(core.bool)),
    [_selected]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(menu.MenuItem)))),
    highlighter: dart.fieldType(dart.legacy(highlighted_text_model.TextHighlighter)),
    [_highlight]: dart.fieldType(dart.legacy(core.String)),
    popupClass: dart.fieldType(dart.legacy(core.String)),
    [_highlightCache]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(highlighted_text_model.HighlightedTextSegment))))))
  }));
  dart.defineLazy(menu_item_groups.MenuItemGroupsComponent, {
    /*menu_item_groups.MenuItemGroupsComponent._menuDelay*/get _menuDelay() {
      return C1 || CT.C1;
    }
  }, true);
  var RelativePosition_animationOrigin = dart.privateName(alignment, "RelativePosition.animationOrigin");
  var Alignment__cssPropertyValue = dart.privateName(alignment, "Alignment._cssPropertyValue");
  var Alignment__displayName = dart.privateName(alignment, "Alignment._displayName");
  var C4;
  var RelativePosition_originY = dart.privateName(alignment, "RelativePosition.originY");
  var _CustomAlignment_cssClassY = dart.privateName(alignment, "_CustomAlignment.cssClassY");
  var _CustomAlignment_cssClassX = dart.privateName(alignment, "_CustomAlignment.cssClassX");
  var AfterCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "AfterCustomAlignment.requiresContentSizeToPosition");
  var C5;
  var RelativePosition_originX = dart.privateName(alignment, "RelativePosition.originX");
  var C3;
  var C7;
  var C6;
  var C9;
  var C8;
  var BeforeCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "BeforeCustomAlignment.requiresContentSizeToPosition");
  var C11;
  var C10;
  var C12;
  var C13;
  var C2;
  var C14;
  dart.defineLazy(menu_item_groups, {
    /*menu_item_groups._preferredSubMenuPositions*/get _preferredSubMenuPositions() {
      return C2 || CT.C2;
    },
    /*menu_item_groups._tooltipPositions*/get _tooltipPositions() {
      return C14 || CT.C14;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/material_menu", {
    "package:angular_components/material_menu/material_menu.dart": material_menu,
    "package:angular_components/material_menu/menu_popup.dart": menu_popup,
    "package:angular_components/material_menu/menu_item_groups.dart": menu_item_groups
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_menu.dart","menu_popup.dart","menu_item_groups.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkES;;;;;;IAIF;;;;;;IAIA;;;;;;IAIE;;;;;;;AAzBkB;IAAW;mBAOd;AAC4C,MAAhE,oBAAc,6BAAyB,SAAS,EAAE,AAAM;IAC1D;;;AAkB0B;iCAAM;IAAW;;;AAEpB,iDAAM;oBAAN,OAAoB;IAAK;;;AAEzB,yDAAM,8BAAN,OAAkB;qBAAlB,OAAgC;IAAK;;;AAExC,YAAa,+BAAb,OAAM,cAAU;IAAI;eAKL;AACtB,MAAX,gBAAU,CAAC;IACb;kBAKiC;AACjB,MAAd,mBAAa,CAAC;IAChB;;AAGI,wCAAW,iBAAQ,mBAAa,mBAAa;IAAQ;;AAI/B,MAAxB,iBAAY;AAKT,MAFH,AAAU,+CAAsB,AAAiB,6BAAO,QAAC;AAC/B,QAAxB,iBAAY;;IAEhB;;AAIqB,MAAnB,AAAU;IACZ;;sDApE2B;IAFrB,kBAAqB;IAIpB;IAcA;IAIF,iBAAW;IAIX,iBAAW;IAIT;IAUiB;IAOL;IA7CQ;AAA3B;;EAAiC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICbrB;;;;;;IAGA;;;;;;mBAOU;AAC0C,MAA9D,qBAAc,6BAAyB,KAAK,EAAE,AAAQ;IACxD;;AAEyB;IAAW;uBAMO;AACvB,MAAlB,iBAAY,MAAM;IACpB;;gDALwB;IAdZ;IAYL;IAEiB;AAAxB;;EAAgC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICsCJ;;;;;;IAoDvB;;;;;;IAQA;;;;;;IA2BA;;;;;;IASW;;;;;;IAkBT;;;;;;aA5HY;;AACL,MAAZ,cAAQ,IAAI;AACsB,MAAlC,mCAA6B,IAAI;AACoB,kBAArD,IAAI,eAAJ,OAAM;oBAAN,OAAkB,wBAAQ;IAC5B;;AAEsB;IAAK;;AAOvB;IAA0B;;AAEiB;IAAiB;;;AAE/C,iDAAM;oBAAN,OAAe;IAAC;gCAMA;AACL,MAA1B,0BAAoB,WAAC,KAAK;IAC5B;;AAU0B;IAAc;;AAIX,wBAAC;IAAa;oBAOX;;AACd,MAAhB,qBAAe,CAAC;AACY,WAA5B;0BAAoB;AAGlB,MAFF,2BAAqB,AAAE,AAAa,CAAd,qBAAqB,QAAC;AACZ,QAA9B,AAAgB;;IAEpB;;AAEmC;IAAY;;AA+Cd,YAAA,AAAU;IAAM;kBAS5B;AACD,MAAlB,mBAAa,KAAK;AACE,MAApB,wBAAkB;IACpB;;;AAayB,wDAAY;oBAAZ,OAA0B;IAAK;eAKvC,UACS,gBACS,gBACH;;AAC5B,YAAwB,iDAAE,cAAc,EAAE,QAAQ,EAAE,cAAc,GAClD,KAAZ,WAAW,QAAX,OAAqC;IAAW;gBASR;;AAC9C,oBAAI,AAAgB,oCAAY,KAAK,IAAG,MAAO,AAAe,8BAAC,KAAK;AACpE,WAAO;WAAgB,KAAK;WAAI,AAAY,2BAAU,KAAK,EAAE,uBAAC;MAAxC;;IACxB;gBAG4B;AAG1B,qBAAK,uBAAgB;AAEjB,iBAAO,qBAAe,AAAM,KAAD;AAC/B,UAAI,AAAK,IAAD,IAAI,MAAM;AAGQ,MAA1B,AAAY,0BAAS;AAEF,MAAnB,qBAAe,IAAI;AACG,MAAtB,AAAe;IACjB;eAG2B;AAGzB,qBAAK,uBAAgB;AAEZ,iBAAO,qBAAe,AAAM,KAAD;AACpC,UAAI,AAAK,IAAD,IAAI,MAAM;AAElB,UAAS,YAAL,IAAI,EAAI;AACS,QAAnB,qBAAe;;AAEM,MAAvB,AAAe;IACjB;gBAG4B;AACL,MAArB,uBAAiB;IACnB;0BAEoC;AACf,MAAnB,AAAU,oBAAI,IAAI;IACpB;WAEqB,MAAoB;;AACpB,WAAnB,AAAK,IAAD;mBAAC,OAAQ;AAIM,MAAnB,AAAU,oBAAI,IAAI;AAIlB,WAAU,iCAAN,KAAK,eACE,AAA+B,iCAArC,KAAK;AACmB,cAA3B;6BAAW;;IAEf;kBAGiC;;UAAa;AACtB,MAAtB,uBAAiB;AAEjB,UAAI,AAAM,AAAQ,KAAT,gBAAyB;AAE9B,oBAAU,AAAM,KAAD;AACf,2BAAwC,eAAvB,AAAY;AAEjC,cAAQ,OAAO;;;AAEe,UAA1B;AAC8B,UAA9B,AAAY;AACM,UAAlB;AACA;;;;AAE0B,UAA1B;AAC0B,UAA1B,AAAY;AACM,UAAlB;AACA;;;;AAEA,cAA+B,kBAA3B,cAAc,eAAd,OAAgB,gBAAc;AAEH,YAD7B,mBAAoC,eAAvB,AAAY,mDACD;;AAE1B;;;;AAEA,wBAAI;AACqB,YAAvB,AAAgB;;AAElB;;;;AAIA,yBAAK,mCAA6B,cAAc,EAAE,OAAO;AAC3B,YAA5B,uBAAuB;;AAEzB;;;AAGJ,oBAAI,oBAAoB,GAAE,AAAM,AAAgB,KAAjB;IACjC;mBAO2B;UAAY;AAErC,qBAAK,AAAK,IAAD,WAAU;AAEnB,qBAAK,AAAY,0BAAS,IAAI;AACF,QAA1B,AAAY,0BAAS,IAAI;;AAEiB,MAA5C,+BAA0B,kBAAkB;AACE,MAA9C,iCAAiB,AAAK,IAAD,eAAc,IAAI,GAAG;IAC5C;qBAEoC;AAClC,WAAW,cAAP,MAAM,GAAc,MAAO;AACvB,oBAAiB,cAAP,MAAM;AACxB,aAAO,OAAO,IAAI;AAChB,YAAI,AAAQ,AAAU,AAAS,OAApB,qBAAY,YAAW;AAClB,sBACV,AAAK,AAAU,4BAAK,eAAM,AAAQ,AAAU,OAAX,qBAAY;AACxC,oCAAO,AAAK,KAAA,MAAK,eAAM,AAAQ,AAAU,OAAX,qBAAY;AACnD,gBAAO,KAAI;;AAEW,QAAxB,UAAU,AAAQ,OAAD;;AAEnB,YAAO;IACT;YAGwB;;AACb,iBAAO,qBAAe,AAAM,KAAD;AACpC,UAAI,AAAK,IAAD,IAAI,MAAM;AAES,WAA3B;0BAAa,YAAS,IAAI;IAC5B;4BAKa,MAAoB,OAAe;AAC9C,UAAI,AAAK,IAAD,IAAI,mBAAS,AAAK,IAAD,WAAU;AAEnC,oBAAI,AAAK,IAAD;AACwD,QAA9D,mBAAa,IAAI,uBAA4B,oBAAN,KAAK;;AAEzB,QAAnB,YAAO,IAAI,EAAE,KAAK;;IAEtB;+BAEyC,MAAW;AAClD,qBAAK,OAAO,KAAU,YAAL,IAAI,EAAI;AACF,QAArB,uBAAiB;AACjB,sBAAI,uBAAgB;AAIpB,sBAAI,AAAU;AACM,UAAlB;;;IAGN;iCAGgD;AAC9C,oBAAI,AAAM,KAAD;AAC6B,QAApC,AAAM,KAAD,cAAc,WAAC,AAAM,KAAD;;IAE7B;;AAIgC,MAA9B;IACF;;AAME,oBAAI,2CAA2B,8BAAwB,AAAkB;IAC3E;;;AAI8B,WAA5B;0BAAoB;AACK,MAAzB,2BAAqB;AACF,MAAnB,AAAU;IACZ;sBAE+C;AAC3C,YAAM,kCAAN,KAAK,IAAiC,AAAM,KAAD,kBAAkB;IAAI;oBAIrC;AAC5B,YAAM,0BAAL,IAAI,IAA0B,AAAK,IAAD,eAAe;IAAI;iBAE5B;AAC1B,YAAK,0BAAL,IAAI,IAAyB,AAAK,IAAD,SAAS;IAAI;4BAEZ;AAClC,YAAK,AAAsB,0BAA3B,IAAI,eAA0B,AAAK,IAAD;IAAwB;kBAElC;AAAS,YAAK,0BAAL,IAAI,IACnC,AAAK,AAAgB,IAAjB,oBAAqC,qCACzC;IAAI;iBAEiB;;AAAS,YAAwB,kDAAxB,OAAa,gBAAc,IAAI;;iBAI1C;AACrB,YAAA,AAAiB,AAAgC,2CAAtB,QAAC,MAAO,AAAG,EAAD,IAAI,MAAM,wBAAK;IAAM;qBAG/B;AAAS,YAAK,aAAL,IAAI,EAAI;IAAc;;AAI5D,UAAK,AAAY,AAAW,+BAAG,QAAU,sBAAgB;AACrB,QAAlC,AAAY,0BAAS;;IAEzB;mCAO2C,MAAU;AACnD,UAAI,AAAK,IAAD,IAAI,mBAAS,AAAK,IAAD,WAAU,MAAO;AAEpC,qBAAW,AAAK,AACjB,AACA,IAFgB,oBACV,QAAC,UAAW,AAAO,MAAD,oBAAoB,OAAO;AAGxD,eAAW,SAAU,SAAQ;AACG,QAA9B,AAAO,MAAD;;AAGR,oBAAI,AAAS,QAAD,OAAK,QAAC,UAAW,AAAO,MAAD;AACP,QAA1B,AAAU;;AAGZ,YAAO,AAAS,SAAD;IACjB;;AAGE,UAAK,aAAQ,QAAU,AAAY,oBAAG;AAEa,QADjD,mBAAc,iCAAoB,4BACxB,uCAAkC;AAC5C,sBAAI;AACwB,UAA1B,AAAY;AACU,UAAtB;cACK,eAAI;AACa,UAAtB;;AAG0B,UAA1B,AAAY,0BAAS;;;IAG3B;;AAKE,UAAI,AAAY,+BAAc;AAC6C,QAAzE,yBAA+B,6BAAG,AAAY,oBAAG,AAAY;;IAEjE;;AAOE,UAAI,AAAY,AAAW,+BAAG,MAAM;AAEpC,eAAS,OAAQ;AACf,YAAI,AAAK,AAAI,IAAL,QAAQ,AAAY;AACd,UAAZ,AAAK,IAAD;AACJ;;;AAKJ,eAAW,QAAS,AAAK;AACvB,sBAAI,AAAM,KAAD,UAAU,AAAY,2CAAe,AAAM,KAAD;AAC1B,UAAvB,AAAM,KAAD,cAAc;AACnB;;;IAGN;kBAEgC,gBAAyB;;AACjD,sBAAY,kBAAa,IAAI;AACnC,YAAO,AAAkB,UAAT,IAAI,mBACuB,YAAtC,cAAc,eAAd,OAAgB,cAAW,SAAS,WAApC,OAAyC;IAChD;;AAIoB,MAAlB;IACF;;AAG4B,MAA1B,mBAAa;AACiB,MAA9B,AAAgB;IAClB;iCAE8C;;AAC5C,UAAU,iCAAN,KAAK;AAIJ,QAHH,AAAU,qFACN,AAAM,KAAD,8BAAC,OAAgB,oCAAhB,OAAkC,WAAO,QAAC;AACf,UAAnC,mCAA6B;;;IAGnC;mCAY4C;;AAC1C,qBAA8B,oBAA1B,IAAI,eAAJ,OAAM,8BAAN,OAAkB,wBAAlB,OAA6B,eAAM;AAEvC,eAAW,QAAS,AAAK,KAAD;AACtB,YAAU,iCAAN,KAAK;AACP,mBAAW,OAAQ,MAAK;AAEtB,0BAAI,AAAK,IAAD;AACoC,cAA1C,mCAA6B,AAAK,IAAD;;AAG7B,6BAAa,kBAAY,AAAM,KAAD,iBAAiB,IAAI;AAEzD,2BAAK,AAAK,IAAD;AACiC,cAAxC,AAAK,IAAD,eAA0B,cAAX,UAAU;kBACxB,eAAI,AAAM,AAAe,KAAhB;AAEkD,cADhE,AAAK,IAAD,eACkD,CAAtC,UAAX,UAAU,eAAI,2BAAqB,KAAK,EAAE,IAAI;;AAEnD,4BAAI,2BAAqB,KAAK,EAAE,IAAI;AAEwB,gBAD1D,AAAK,IAAD,yBACA,6BAAuB,KAAK,EAAE,IAAI,KAAI,SAAS;;AAEX,gBAAxC,AAAK,IAAD,eAA0B,cAAX,UAAU;;;;;;IAMzC;2BAGwC,OAAgB;AACpD,YAAA,AAAK,AAAQ,AAAW,KAApB,0BAAwB,QAAC,KACvB,AAA8B,iCAAhC,CAAC,eACD,AAAE,CAAD,KAAK,QAAC,KAAM,kBAAY,AAAE,CAAD,iBAAiB,CAAC;IAAG;6BAGb,OAAgB;AACtD,YAAA,AAAK,AAAQ,AAAW,KAApB,4BAA0B,QAAC,KACzB,AAA8B,iCAAhC,CAAC,eACD,AAAE,CAAD,OAAO,QAAC,KAAM,kBAAY,AAAE,CAAD,iBAAiB,CAAC;IAAG;;0DA9X1B,iBAAsB,WAC5C,iBAAsB;IApJzB,mBAAqB;IAgBjB;IAGkB;IAiBvB,0BAAoB;IASpB,uBAAiB;IAMN;IACG;IAmBd,gCAA0B;IAQ1B,+BAAyB;IAWhB;IAGL;IAGA;IAQW;IAEf,gCAA0B;IAKzB,kBAAY;IAIF;IAST;IASA;IAIH,wBAAwD;IAU7B;IAAsB;IAC5C;IAAsB;AACuC,IAA/D,uBAAiB,qCAAc,+DAAY;EAClD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MApJa,mDAAU;;;;;;;;;;;;;;;;;;;;;;;;;;;MAkhBnB,2CAA0B;;;MAS1B,kCAAiB","file":"material_menu.unsound.ddc.js"}');
  // Exports:
  return {
    material_menu__material_menu: material_menu,
    material_menu__menu_popup: menu_popup,
    material_menu__menu_item_groups: menu_item_groups
  };
}));

//# sourceMappingURL=material_menu.unsound.ddc.js.map
