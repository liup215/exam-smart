define(['dart_sdk', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/selection/select', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/selection/selection_model', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/src/core/application_tokens', 'packages/angular_components/src/utils/async/async_update_scheduler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_factory', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/intl/intl', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/angular_components/material_input/material_input', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/utils/browser/dom_service/dom_service'], (function load__packages__angular_components__src__material_tree__group__material_tree_group(dart_sdk, packages__angular_components__model__selection__selection_options, packages__angular_components__utils__disposer__disposer, packages__angular_components__model__selection__select, packages__angular_components__src__model__selection__interfaces__selectable, packages__angular_components__model__selection__selection_model, packages__angular__src__bootstrap__modules, packages__angular_components__model__ui__has_renderer, packages__angular__src__core__application_tokens, packages__angular_components__src__utils__async__async_update_scheduler, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__has_factory, packages__angular_components__mixins__material_dropdown_base, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__intl__intl, packages__angular_compiler__v1__src__metadata__di_tokens, packages__angular_components__material_input__material_input, packages__angular_components__utils__angular__css__css, packages__angular_components__focus__focus_interface, packages__angular_components__laminate__enums__alignment, packages__angular_components__utils__browser__dom_service__dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const select = packages__angular_components__model__selection__select.model__selection__select;
  const selectable = packages__angular_components__src__model__selection__interfaces__selectable.src__model__selection__interfaces__selectable;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const change_detector_ref = packages__angular__src__core__application_tokens.src__core__change_detection__change_detector_ref;
  const disposable_future = packages__angular_components__src__utils__async__async_update_scheduler.src__utils__async__disposable_future;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_factory = packages__angular_components__model__ui__has_factory.model__ui__has_factory;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const intl = packages__intl__intl.intl;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const css = packages__angular_components__utils__angular__css__css.utils__angular__css__css;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  var material_tree_node = Object.create(dart.library);
  var material_tree_root = Object.create(dart.library);
  var material_tree_expand_state = Object.create(dart.library);
  var material_tree_group_flat = Object.create(dart.library);
  var material_tree_impl = Object.create(dart.library);
  var material_tree_rendering_options = Object.create(dart.library);
  var material_tree_group = Object.create(dart.library);
  var material_tree_filter = Object.create(dart.library);
  var material_tree_dropdown = Object.create(dart.library);
  var $clear = dartx.clear;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $remove = dartx.remove;
  var $toString = dartx.toString;
  var $isNotEmpty = dartx.isNotEmpty;
  var $classes = dartx.classes;
  var $first = dartx.first;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var MaterialTreeExpandStateL = () => (MaterialTreeExpandStateL = dart.constFn(dart.legacy(material_tree_expand_state.MaterialTreeExpandState)))();
  var boolLToNull = () => (boolLToNull = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var MultiSelectionModelL = () => (MultiSelectionModelL = dart.constFn(dart.legacy(selection_model.MultiSelectionModel)))();
  var ComponentFactoryL = () => (ComponentFactoryL = dart.constFn(dart.legacy(component_factory.ComponentFactory)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  var FilterableL = () => (FilterableL = dart.constFn(dart.legacy(select.Filterable)))();
  var ParentL = () => (ParentL = dart.constFn(dart.legacy(select.Parent)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var NullSelectionModelL = () => (NullSelectionModelL = dart.constFn(dart.legacy(selection_model.NullSelectionModel)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var OptionGroupL = () => (OptionGroupL = dart.constFn(dart.legacy(selection_options.OptionGroup)))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  const CT = Object.create(null);
  var L3 = "package:angular_components/src/material_tree/group/material_tree_group_flat.dart";
  var L2 = "package:angular_components/src/material_tree/material_tree_expand_state.dart";
  var L7 = "package:angular_components/src/material_tree/material_tree_filter.dart";
  var L8 = "package:angular_components/src/material_tree/material_tree_dropdown.dart";
  var L4 = "package:angular_components/src/material_tree/material_tree_impl.dart";
  var L1 = "package:angular_components/src/material_tree/material_tree_root.dart";
  var L0 = "package:angular_components/src/material_tree/material_tree_node.dart";
  var L6 = "package:angular_components/src/material_tree/group/material_tree_group.dart";
  var L5 = "package:angular_components/src/material_tree/material_tree_rendering_options.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.Null);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: selection_model._NoopSelectionModelImpl.prototype,
        [_NoopSelectionModelImpl_selectedValues]: C0 || CT.C0,
        [_NoopSelectionModelImpl_selectedValue]: null,
        [_NoopSelectionModelImpl_isNotEmpty]: false,
        [_NoopSelectionModelImpl_isEmpty]: true,
        [_NoopSelectionModelImpl_hasObservers]: false,
        [_NoopSelectionModelImpl_hasSelectionObservers]: false,
        [_NoopSelectionModelImpl_isSingleSelect]: null
      });
    },
    get C2() {
      return C2 = dart.fn(has_renderer.defaultItemRenderer, dynamicToStringL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: di_tokens.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "MaterialTreeGroupComponent_materialTreeLeftPaddingToken"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: alignment.AfterCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "After",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [AfterCustomAlignment_requiresContentSizeToPosition]: false
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-start",
        [Alignment__displayName]: "Start"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top left",
        [RelativePosition_originY]: C6 || CT.C6,
        [RelativePosition_originX]: C7 || CT.C7
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "center",
        [Alignment__displayName]: "Center"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top center",
        [RelativePosition_originY]: C6 || CT.C6,
        [RelativePosition_originX]: C10 || CT.C10
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment__cssPropertyValue]: "flex-end",
        [Alignment__displayName]: "End"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top right",
        [RelativePosition_originY]: C6 || CT.C6,
        [RelativePosition_originX]: C12 || CT.C12
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C5 || CT.C5, C11 || CT.C11], RelativePositionL());
    },
    get C14() {
      return C14 = dart.const({
        __proto__: alignment.BeforeCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "Before",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [BeforeCustomAlignment_requiresContentSizeToPosition]: true
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom left",
        [RelativePosition_originY]: C14 || CT.C14,
        [RelativePosition_originX]: C7 || CT.C7
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom center",
        [RelativePosition_originY]: C14 || CT.C14,
        [RelativePosition_originX]: C10 || CT.C10
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom right",
        [RelativePosition_originY]: C14 || CT.C14,
        [RelativePosition_originX]: C12 || CT.C12
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C13 || CT.C13, C17 || CT.C17], RelativePositionL());
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C8 || CT.C8, C13 || CT.C13, C15 || CT.C15], ObjectL());
    },
    get C19() {
      return C19 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top center",
        [RelativePosition_originY]: C7 || CT.C7,
        [RelativePosition_originX]: C7 || CT.C7
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top right",
        [RelativePosition_originY]: C7 || CT.C7,
        [RelativePosition_originX]: C12 || CT.C12
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top left",
        [RelativePosition_originY]: C7 || CT.C7,
        [RelativePosition_originX]: C7 || CT.C7
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom center",
        [RelativePosition_originY]: C12 || CT.C12,
        [RelativePosition_originX]: C7 || CT.C7
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom right",
        [RelativePosition_originY]: C12 || CT.C12,
        [RelativePosition_originX]: C12 || CT.C12
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom left",
        [RelativePosition_originY]: C12 || CT.C12,
        [RelativePosition_originX]: C7 || CT.C7
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], RelativePositionL());
    }
  }, false);
  var _EMPTY_OPTION_GROUP = dart.privateName(material_tree_node, "_EMPTY_OPTION_GROUP");
  var C0;
  var _expandedNodes = dart.privateName(material_tree_node, "_expandedNodes");
  var _disposer = dart.privateName(material_tree_node, "_disposer");
  var _expandAll = dart.privateName(material_tree_node, "_expandAll");
  var _group = dart.privateName(material_tree_node, "_group");
  var _parent = dart.privateName(material_tree_node, "_parent");
  var _isExpandable = dart.privateName(material_tree_node, "_isExpandable");
  var _selectable = dart.privateName(material_tree_node, "_selectable");
  var _root$ = dart.privateName(material_tree_node, "_root");
  var _changeDetector$ = dart.privateName(material_tree_node, "_changeDetector");
  var _NoopSelectionModelImpl_selectedValues = dart.privateName(selection_model, "_NoopSelectionModelImpl.selectedValues");
  var _NoopSelectionModelImpl_selectedValue = dart.privateName(selection_model, "_NoopSelectionModelImpl.selectedValue");
  var _NoopSelectionModelImpl_isNotEmpty = dart.privateName(selection_model, "_NoopSelectionModelImpl.isNotEmpty");
  var _NoopSelectionModelImpl_isEmpty = dart.privateName(selection_model, "_NoopSelectionModelImpl.isEmpty");
  var _NoopSelectionModelImpl_hasObservers = dart.privateName(selection_model, "_NoopSelectionModelImpl.hasObservers");
  var _NoopSelectionModelImpl_hasSelectionObservers = dart.privateName(selection_model, "_NoopSelectionModelImpl.hasSelectionObservers");
  var _NoopSelectionModelImpl_isSingleSelect = dart.privateName(selection_model, "_NoopSelectionModelImpl.isSingleSelect");
  var C1;
  var _allowParentSelection = dart.privateName(material_tree_node, "_allowParentSelection");
  var C2;
  const _is_MaterialTreeNode_default = Symbol('_is_MaterialTreeNode_default');
  var allowParentSingleSelection = dart.privateName(material_tree_node, "MaterialTreeNode.allowParentSingleSelection");
  var allowParentMultiSelection = dart.privateName(material_tree_node, "MaterialTreeNode.allowParentMultiSelection");
  material_tree_node.MaterialTreeNode$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    var IterableOfOptionGroupLOfTL = () => (IterableOfOptionGroupLOfTL = dart.constFn(core.Iterable$(OptionGroupLOfTL())))();
    var IterableLOfOptionGroupLOfTL = () => (IterableLOfOptionGroupLOfTL = dart.constFn(dart.legacy(IterableOfOptionGroupLOfTL())))();
    var IdentityMapOfTL$IterableLOfOptionGroupLOfTL = () => (IdentityMapOfTL$IterableLOfOptionGroupLOfTL = dart.constFn(_js_helper.IdentityMap$(TL(), IterableLOfOptionGroupLOfTL())))();
    var TLToboolL = () => (TLToboolL = dart.constFn(dart.fnType(boolL(), [TL()])))();
    var _NotAParentOfTL$IterableLOfOptionGroupLOfTL = () => (_NotAParentOfTL$IterableLOfOptionGroupLOfTL = dart.constFn(material_tree_node._NotAParent$(TL(), IterableLOfOptionGroupLOfTL())))();
    var ParentOfTL$IterableLOfOptionGroupLOfTL = () => (ParentOfTL$IterableLOfOptionGroupLOfTL = dart.constFn(select.Parent$(TL(), IterableLOfOptionGroupLOfTL())))();
    var ParentLOfTL$IterableLOfOptionGroupLOfTL = () => (ParentLOfTL$IterableLOfOptionGroupLOfTL = dart.constFn(dart.legacy(ParentOfTL$IterableLOfOptionGroupLOfTL())))();
    var SelectableOfTL = () => (SelectableOfTL = dart.constFn(selectable.Selectable$(TL())))();
    var SelectableLOfTL = () => (SelectableLOfTL = dart.constFn(dart.legacy(SelectableOfTL())))();
    var _AlwaysSelectableOfTL = () => (_AlwaysSelectableOfTL = dart.constFn(material_tree_node._AlwaysSelectable$(TL())))();
    var FutureOfIterableLOfOptionGroupLOfTL = () => (FutureOfIterableLOfOptionGroupLOfTL = dart.constFn(async.Future$(IterableLOfOptionGroupLOfTL())))();
    var TLToComponentFactoryL = () => (TLToComponentFactoryL = dart.constFn(dart.fnType(ComponentFactoryL(), [TL()])))();
    var TLToLComponentFactoryL = () => (TLToLComponentFactoryL = dart.constFn(dart.legacy(TLToComponentFactoryL())))();
    var TLToStringL = () => (TLToStringL = dart.constFn(dart.fnType(StringL(), [TL()])))();
    var TLToLStringL = () => (TLToLStringL = dart.constFn(dart.legacy(TLToStringL())))();
    class MaterialTreeNode extends core.Object {
      get allowParentSingleSelection() {
        return this[allowParentSingleSelection];
      }
      set allowParentSingleSelection(value) {
        this[allowParentSingleSelection] = value;
      }
      get allowParentMultiSelection() {
        return this[allowParentMultiSelection];
      }
      set allowParentMultiSelection(value) {
        this[allowParentMultiSelection] = value;
      }
      get expandAll() {
        return this[_expandAll];
      }
      set expandAll(expandAll) {
        if (expandAll == this[_expandAll]) return;
        this[_expandAll] = expandAll;
        dart.test(expandAll) ? this.expandAllOptions() : this.clearExpansions();
      }
      get group() {
        return this[_group];
      }
      set group(group) {
        OptionGroupLOfTL().as(group);
        this[_disposer].dispose();
        this[_group] = group;
        if (!dart.test(this.expandAll)) {
          this[_expandedNodes][$clear]();
        }
        for (let key of group) {
          let manualExpand = false;
          if (MaterialTreeExpandStateL().is(key)) {
            manualExpand = key.expanded;
            this[_disposer].addStreamSubscription(boolL(), key.expandEvents.listen(dart.fn(newVal => {
              if (dart.equals(newVal, this[_expandedNodes][$containsKey](key))) return;
              if (dart.test(newVal)) {
                this.expandOption(key);
              } else {
                this.closeOption(key);
              }
            }, boolLToNull())));
          }
          if (dart.test(this.expandAll) || dart.test(manualExpand)) {
            this.expandOption(key);
          }
        }
        this[_changeDetector$].markForCheck();
      }
      clearExpansions() {
        this[_expandedNodes][$clear]();
        for (let option of this.group) {
          this.setExpandedState(option, false);
        }
        this[_changeDetector$].markForCheck();
      }
      expandAllOptions() {
        for (let key of this.group) {
          this.expandOption(key);
        }
      }
      hasChildren(option) {
        TL().as(option);
        return this[_parent].hasChildren(option);
      }
      isExpandable(option) {
        let t0;
        TL().as(option);
        t0 = option;
        return this[_isExpandable](t0);
      }
      isExpanded(option) {
        TL().as(option);
        return this[_expandedNodes][$containsKey](option);
      }
      get isReadOnly() {
        return dart.equals(this[_root$].selection, C1 || CT.C1);
      }
      get isMultiSelect() {
        return MultiSelectionModelL().is(this[_root$].selection);
      }
      isSelectable(option) {
        TL().as(option);
        return dart.test(this[_allowParentSelection]) && this[_selectable].getSelectable(option) == selectable.SelectableOption.Selectable || !dart.test(this.isExpandable(option)) && this[_selectable].getSelectable(option) == selectable.SelectableOption.Selectable;
      }
      get [_allowParentSelection]() {
        return dart.test(this.isMultiSelect) && dart.test(this.allowParentMultiSelection) || !dart.test(this.isMultiSelect) && dart.test(this.allowParentSingleSelection);
      }
      showDisabledCheckbox(option) {
        return this[_selectable].getSelectable(TL().as(option)) == selectable.SelectableOption.Disabled && !dart.test(this.hasChildren(TL().as(option)));
      }
      isSelected(option) {
        TL().as(option);
        return this[_root$].selection.isSelected(option);
      }
      getChildGroups(option) {
        return this[_expandedNodes][$_get](option);
      }
      expandOption(option) {
        TL().as(option);
        return async.async(IterableLOfOptionGroupLOfTL(), (function* expandOption() {
          let t2, t1, t0;
          let childGroups = (yield this[_parent].childrenOf(option));
          this.setExpandedState(option, true);
          if (dart.test(this.expandAll) && childGroups != null) {
            for (let group of childGroups) {
              for (let option of group) {
                yield this.expandOption(option);
              }
            }
          }
          this[_changeDetector$].markForCheck();
          t0 = this[_expandedNodes];
          t1 = option;
          t2 = childGroups;
          t0[$_set](t1, t2);
          return t2;
        }).bind(this));
      }
      closeOption(option) {
        TL().as(option);
        let previousState = this[_expandedNodes][$remove](option);
        this.setExpandedState(option, false);
        this[_changeDetector$].markForCheck();
        return previousState != null;
      }
      setExpandedState(option, state) {
        TL().as(option);
        if (MaterialTreeExpandStateL().is(option)) {
          option.expanded = state;
        }
      }
      toggleExpansion(option) {
        TL().as(option);
        let didClose = this.closeOption(option);
        if (!dart.test(didClose)) {
          return this.expandOption(option);
        }
        return FutureOfIterableLOfOptionGroupLOfTL().value();
      }
      setSelectionState(option, state) {
        TL().as(option);
        if (dart.equals(this.isSelected(option), state)) return state;
        if (!dart.test(state)) {
          return !dart.test(this[_root$].selection.deselect(option));
        } else {
          return this[_root$].selection.select(option);
        }
      }
      toggleSelectionRangeInclusive(firstNode, lastNode, isSelection) {
        TL().as(firstNode);
        TL().as(lastNode);
        if (!dart.test(this.group.contains(firstNode)) || !dart.test(this.group.contains(lastNode))) return;
        let isCurrentlyToggling = false;
        for (let node of this.group) {
          if (!dart.equals(node, firstNode) && !dart.equals(node, lastNode) && !isCurrentlyToggling) {
            continue;
          }
          if (dart.test(isSelection)) {
            this[_root$].selection.select(node);
          } else {
            this[_root$].selection.deselect(node);
          }
          if (dart.equals(node, firstNode) || dart.equals(node, lastNode)) {
            if (!isCurrentlyToggling) {
              isCurrentlyToggling = true;
            } else {
              break;
            }
          }
        }
      }
      get useComponentRenderer() {
        return TLToLComponentFactoryL().as(this[_root$].factoryRenderer) != null || this[_root$].componentRenderer != null;
      }
      get useItemRenderer() {
        return !dart.test(this.useComponentRenderer);
      }
      get showSelectionState() {
        return dart.test(this.isMultiSelect) || !dart.test(this[_root$].optimizeForDropdown);
      }
      getComponentType(option) {
        let t1, t0;
        return this[_root$].componentRenderer != null ? (t0 = this[_root$], t1 = option, t0.componentRenderer(t1)) : null;
      }
      getComponentFactory(option) {
        let t1, t0;
        return TLToLComponentFactoryL().as(this[_root$].factoryRenderer) != null ? (t0 = this[_root$], t1 = option, TLToLComponentFactoryL().as(t0.factoryRenderer)(TL().as(t1))) : null;
      }
      getOptionAsText(option) {
        let t0;
        TL().as(option);
        let itemRenderer = (t0 = TLToLStringL().as(this[_root$].itemRenderer), t0 == null ? C2 || CT.C2 : t0);
        return itemRenderer(option);
      }
      onDestroy() {
        this[_disposer].dispose();
        this[_disposer] = null;
      }
    }
    (MaterialTreeNode.new = function(_root, _changeDetector, opts) {
      let t0;
      let isExpandable = opts && 'isExpandable' in opts ? opts.isExpandable : null;
      this[_EMPTY_OPTION_GROUP] = new (OptionGroupOfTL()).new(C0 || CT.C0);
      this[_expandedNodes] = new (IdentityMapOfTL$IterableLOfOptionGroupLOfTL()).new();
      this[_disposer] = new disposer.Disposer.multi();
      this[_expandAll] = false;
      this[_group] = null;
      this[_parent] = null;
      this[_isExpandable] = null;
      this[_selectable] = null;
      this[allowParentSingleSelection] = false;
      this[allowParentMultiSelection] = true;
      this[_root$] = _root;
      this[_changeDetector$] = _changeDetector;
      this[_group] = this[_EMPTY_OPTION_GROUP];
      if (!dart.test(this[_root$].supportsHierarchy)) {
        this[_isExpandable] = dart.fn(_ => false, TLToboolL());
        this[_parent] = new (_NotAParentOfTL$IterableLOfOptionGroupLOfTL()).new();
      } else {
        this[_isExpandable] = (t0 = isExpandable, t0 == null ? dart.bind(this, 'hasChildren') : t0);
        this[_parent] = ParentLOfTL$IterableLOfOptionGroupLOfTL().as(this[_root$].options);
      }
      let options = this[_root$].options;
      if (SelectableLOfTL().is(options)) {
        this[_selectable] = options;
      } else {
        this[_selectable] = new (_AlwaysSelectableOfTL()).new();
      }
    }).prototype = MaterialTreeNode.prototype;
    dart.addTypeTests(MaterialTreeNode);
    MaterialTreeNode.prototype[_is_MaterialTreeNode_default] = true;
    dart.addTypeCaches(MaterialTreeNode);
    dart.setMethodSignature(MaterialTreeNode, () => ({
      __proto__: dart.getMethods(MaterialTreeNode.__proto__),
      clearExpansions: dart.fnType(dart.void, []),
      expandAllOptions: dart.fnType(dart.void, []),
      hasChildren: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      isExpandable: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      isExpanded: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      isSelectable: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      showDisabledCheckbox: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      isSelected: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      getChildGroups: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(selection_options.OptionGroup))), [dart.dynamic]),
      expandOption: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Iterable$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T))))))), [dart.legacy(core.Object)]),
      closeOption: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      setExpandedState: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.bool)]),
      toggleExpansion: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Iterable$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T))))))), [dart.legacy(core.Object)]),
      setSelectionState: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object), dart.legacy(core.bool)]),
      toggleSelectionRangeInclusive: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object), dart.legacy(core.bool)]),
      getComponentType: dart.fnType(dart.legacy(core.Type), [dart.dynamic]),
      getComponentFactory: dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.dynamic]),
      getOptionAsText: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Object)]),
      onDestroy: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialTreeNode, () => ({
      __proto__: dart.getGetters(MaterialTreeNode.__proto__),
      expandAll: dart.legacy(core.bool),
      group: dart.legacy(selection_options.OptionGroup$(dart.legacy(T))),
      isReadOnly: dart.legacy(core.bool),
      isMultiSelect: dart.legacy(core.bool),
      [_allowParentSelection]: dart.legacy(core.bool),
      useComponentRenderer: dart.legacy(core.bool),
      useItemRenderer: dart.legacy(core.bool),
      showSelectionState: dart.legacy(core.bool)
    }));
    dart.setSetterSignature(MaterialTreeNode, () => ({
      __proto__: dart.getSetters(MaterialTreeNode.__proto__),
      expandAll: dart.legacy(core.bool),
      group: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(MaterialTreeNode, L0);
    dart.setFieldSignature(MaterialTreeNode, () => ({
      __proto__: dart.getFields(MaterialTreeNode.__proto__),
      [_EMPTY_OPTION_GROUP]: dart.finalFieldType(dart.legacy(selection_options.OptionGroup$(dart.legacy(T)))),
      [_expandedNodes]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(T), dart.legacy(core.Iterable$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T)))))))),
      [_disposer]: dart.fieldType(dart.legacy(disposer.Disposer)),
      [_root$]: dart.finalFieldType(dart.legacy(material_tree_root.MaterialTreeRoot$(dart.legacy(T)))),
      [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
      [_expandAll]: dart.fieldType(dart.legacy(core.bool)),
      [_group]: dart.fieldType(dart.legacy(selection_options.OptionGroup$(dart.legacy(T)))),
      [_parent]: dart.fieldType(dart.legacy(select.Parent$(dart.legacy(T), dart.legacy(core.Iterable$(dart.legacy(selection_options.OptionGroup$(dart.legacy(T)))))))),
      [_isExpandable]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]))),
      [_selectable]: dart.fieldType(dart.legacy(selectable.Selectable$(dart.legacy(T)))),
      allowParentSingleSelection: dart.fieldType(dart.legacy(core.bool)),
      allowParentMultiSelection: dart.fieldType(dart.legacy(core.bool))
    }));
    return MaterialTreeNode;
  });
  material_tree_node.MaterialTreeNode = material_tree_node.MaterialTreeNode$();
  dart.addTypeTests(material_tree_node.MaterialTreeNode, _is_MaterialTreeNode_default);
  const _is__AlwaysSelectable_default = Symbol('_is__AlwaysSelectable_default');
  material_tree_node._AlwaysSelectable$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _AlwaysSelectable extends core.Object {
      getSelectable(item) {
        TL().as(item);
        return selectable.SelectableOption.Selectable;
      }
    }
    (_AlwaysSelectable.new = function() {
      ;
    }).prototype = _AlwaysSelectable.prototype;
    dart.addTypeTests(_AlwaysSelectable);
    _AlwaysSelectable.prototype[_is__AlwaysSelectable_default] = true;
    dart.addTypeCaches(_AlwaysSelectable);
    _AlwaysSelectable[dart.implements] = () => [selectable.Selectable$(dart.legacy(T))];
    dart.setMethodSignature(_AlwaysSelectable, () => ({
      __proto__: dart.getMethods(_AlwaysSelectable.__proto__),
      getSelectable: dart.fnType(dart.legacy(selectable.SelectableOption), [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(_AlwaysSelectable, L0);
    return _AlwaysSelectable;
  });
  material_tree_node._AlwaysSelectable = material_tree_node._AlwaysSelectable$();
  dart.addTypeTests(material_tree_node._AlwaysSelectable, _is__AlwaysSelectable_default);
  const _is__NotAParent_default = Symbol('_is__NotAParent_default');
  material_tree_node._NotAParent$ = dart.generic((P, C) => {
    var PL = () => (PL = dart.constFn(dart.legacy(P)))();
    class _NotAParent extends core.Object {
      hasChildren(item) {
        PL().as(item);
        return false;
      }
      childrenOf(parent, filterQuery = null) {
        PL().as(parent);
        dart.throw(new core.UnsupportedError.new("Does not support hierarchy"));
      }
    }
    (_NotAParent.new = function() {
      ;
    }).prototype = _NotAParent.prototype;
    dart.addTypeTests(_NotAParent);
    _NotAParent.prototype[_is__NotAParent_default] = true;
    dart.addTypeCaches(_NotAParent);
    _NotAParent[dart.implements] = () => [select.Parent$(dart.legacy(P), dart.legacy(C))];
    dart.setMethodSignature(_NotAParent, () => ({
      __proto__: dart.getMethods(_NotAParent.__proto__),
      hasChildren: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      childrenOf: dart.fnType(dart.legacy(disposable_future.DisposableFuture$(dart.legacy(C))), [dart.legacy(core.Object)], [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(_NotAParent, L0);
    return _NotAParent;
  });
  material_tree_node._NotAParent = material_tree_node._NotAParent$();
  dart.addTypeTests(material_tree_node._NotAParent, _is__NotAParent_default);
  const _is_MaterialTreeRoot_default = Symbol('_is_MaterialTreeRoot_default');
  var isFiltered = dart.privateName(material_tree_root, "MaterialTreeRoot.isFiltered");
  var previouslyToggledNode = dart.privateName(material_tree_root, "MaterialTreeRoot.previouslyToggledNode");
  material_tree_root.MaterialTreeRoot$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class MaterialTreeRoot extends core.Object {
      get isFiltered() {
        return this[isFiltered];
      }
      set isFiltered(value) {
        this[isFiltered] = value;
      }
      get previouslyToggledNode() {
        return this[previouslyToggledNode];
      }
      set previouslyToggledNode(value) {
        this[previouslyToggledNode] = TL().as(value);
      }
      get optimizeForDropdown() {
        return false;
      }
      get supportsFiltering() {
        return FilterableL().is(this.options);
      }
      get supportsHierarchy() {
        return ParentL().is(this.options);
      }
      get allowParentSingleSelection() {
        return false;
      }
      get allowParentMultiSelection() {
        return true;
      }
    }
    (MaterialTreeRoot.new = function() {
      this[isFiltered] = false;
      this[previouslyToggledNode] = null;
      ;
    }).prototype = MaterialTreeRoot.prototype;
    dart.addTypeTests(MaterialTreeRoot);
    MaterialTreeRoot.prototype[_is_MaterialTreeRoot_default] = true;
    dart.addTypeCaches(MaterialTreeRoot);
    MaterialTreeRoot[dart.implements] = () => [selection_container.SelectionContainer$(dart.legacy(T)), has_renderer.HasComponentRenderer$(dart.legacy(has_renderer.RendersValue), dart.legacy(core.Object)), has_factory.HasFactoryRenderer$(dart.legacy(has_renderer.RendersValue), dart.legacy(T))];
    dart.setGetterSignature(MaterialTreeRoot, () => ({
      __proto__: dart.getGetters(MaterialTreeRoot.__proto__),
      optimizeForDropdown: dart.legacy(core.bool),
      supportsFiltering: dart.legacy(core.bool),
      supportsHierarchy: dart.legacy(core.bool),
      allowParentSingleSelection: dart.legacy(core.bool),
      allowParentMultiSelection: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(MaterialTreeRoot, L1);
    dart.setFieldSignature(MaterialTreeRoot, () => ({
      __proto__: dart.getFields(MaterialTreeRoot.__proto__),
      isFiltered: dart.fieldType(dart.legacy(core.bool)),
      previouslyToggledNode: dart.fieldType(dart.legacy(T))
    }));
    return MaterialTreeRoot;
  });
  material_tree_root.MaterialTreeRoot = material_tree_root.MaterialTreeRoot$();
  dart.addTypeTests(material_tree_root.MaterialTreeRoot, _is_MaterialTreeRoot_default);
  var _pending = dart.privateName(material_tree_expand_state, "_pending");
  var _expanded = dart.privateName(material_tree_expand_state, "_expanded");
  var _expandEvents = dart.privateName(material_tree_expand_state, "_expandEvents");
  material_tree_expand_state.MaterialTreeExpandState = class MaterialTreeExpandState extends core.Object {
    get expanded() {
      return this[_expanded];
    }
    set expanded(expanded) {
      if (dart.equals(this[_expanded], expanded)) return;
      this[_expanded] = expanded;
      if (!dart.test(this[_pending])) {
        this[_pending] = true;
        async.scheduleMicrotask(dart.fn(() => {
          this[_pending] = false;
          this[_expandEvents].add(this[_expanded]);
        }, VoidToNull()));
      }
    }
    get expandEvents() {
      return this[_expandEvents].stream.distinct();
    }
  };
  (material_tree_expand_state.MaterialTreeExpandState.new = function() {
    this[_pending] = false;
    this[_expanded] = false;
    this[_expandEvents] = StreamControllerOfboolL().broadcast({sync: true});
    ;
  }).prototype = material_tree_expand_state.MaterialTreeExpandState.prototype;
  dart.addTypeTests(material_tree_expand_state.MaterialTreeExpandState);
  dart.addTypeCaches(material_tree_expand_state.MaterialTreeExpandState);
  dart.setGetterSignature(material_tree_expand_state.MaterialTreeExpandState, () => ({
    __proto__: dart.getGetters(material_tree_expand_state.MaterialTreeExpandState.__proto__),
    expanded: dart.legacy(core.bool),
    expandEvents: dart.legacy(async.Stream$(dart.legacy(core.bool)))
  }));
  dart.setSetterSignature(material_tree_expand_state.MaterialTreeExpandState, () => ({
    __proto__: dart.getSetters(material_tree_expand_state.MaterialTreeExpandState.__proto__),
    expanded: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_tree_expand_state.MaterialTreeExpandState, L2);
  dart.setFieldSignature(material_tree_expand_state.MaterialTreeExpandState, () => ({
    __proto__: dart.getFields(material_tree_expand_state.MaterialTreeExpandState.__proto__),
    [_pending]: dart.fieldType(dart.legacy(core.bool)),
    [_expanded]: dart.fieldType(dart.legacy(core.bool)),
    [_expandEvents]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool))))
  }));
  const _is_MaterialTreeGroupFlatListComponent_default = Symbol('_is_MaterialTreeGroupFlatListComponent_default');
  var isMaterialTreeGroup = dart.privateName(material_tree_group_flat, "MaterialTreeGroupFlatListComponent.isMaterialTreeGroup");
  material_tree_group_flat.MaterialTreeGroupFlatListComponent$ = dart.generic(T => {
    class MaterialTreeGroupFlatListComponent extends material_tree_node.MaterialTreeNode$(dart.legacy(T)) {
      get isMaterialTreeGroup() {
        return this[isMaterialTreeGroup];
      }
      set isMaterialTreeGroup(value) {
        super.isMaterialTreeGroup = value;
      }
    }
    (MaterialTreeGroupFlatListComponent.new = function(root, changeDetector) {
      this[isMaterialTreeGroup] = true;
      MaterialTreeGroupFlatListComponent.__proto__.new.call(this, root, changeDetector);
      ;
    }).prototype = MaterialTreeGroupFlatListComponent.prototype;
    dart.addTypeTests(MaterialTreeGroupFlatListComponent);
    MaterialTreeGroupFlatListComponent.prototype[_is_MaterialTreeGroupFlatListComponent_default] = true;
    dart.addTypeCaches(MaterialTreeGroupFlatListComponent);
    dart.setLibraryUri(MaterialTreeGroupFlatListComponent, L3);
    dart.setFieldSignature(MaterialTreeGroupFlatListComponent, () => ({
      __proto__: dart.getFields(MaterialTreeGroupFlatListComponent.__proto__),
      isMaterialTreeGroup: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return MaterialTreeGroupFlatListComponent;
  });
  material_tree_group_flat.MaterialTreeGroupFlatListComponent = material_tree_group_flat.MaterialTreeGroupFlatListComponent$();
  dart.addTypeTests(material_tree_group_flat.MaterialTreeGroupFlatListComponent, _is_MaterialTreeGroupFlatListComponent_default);
  var _dropdownHandle$ = dart.privateName(material_tree_group_flat, "_dropdownHandle");
  const _is_MaterialTreeGroupFlatRadioComponent_default = Symbol('_is_MaterialTreeGroupFlatRadioComponent_default');
  var selectionModel = dart.privateName(material_tree_group_flat, "MaterialTreeGroupFlatRadioComponent.selectionModel");
  var isMaterialTreeGroup$ = dart.privateName(material_tree_group_flat, "MaterialTreeGroupFlatRadioComponent.isMaterialTreeGroup");
  material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class MaterialTreeGroupFlatRadioComponent extends material_tree_node.MaterialTreeNode$(dart.legacy(T)) {
      get selectionModel() {
        return this[selectionModel];
      }
      set selectionModel(value) {
        super.selectionModel = value;
      }
      get isMaterialTreeGroup() {
        return this[isMaterialTreeGroup$];
      }
      set isMaterialTreeGroup(value) {
        super.isMaterialTreeGroup = value;
      }
      setSelectionState(option, state) {
        let t0;
        TL().as(option);
        let retVal = super.setSelectionState(option, state);
        t0 = this[_dropdownHandle$];
        t0 == null ? null : t0.close();
        return retVal;
      }
    }
    (MaterialTreeGroupFlatRadioComponent.new = function(root, changeDetector, _dropdownHandle = null) {
      this[isMaterialTreeGroup$] = true;
      this[_dropdownHandle$] = _dropdownHandle;
      this[selectionModel] = root.selection;
      MaterialTreeGroupFlatRadioComponent.__proto__.new.call(this, root, changeDetector);
      ;
    }).prototype = MaterialTreeGroupFlatRadioComponent.prototype;
    dart.addTypeTests(MaterialTreeGroupFlatRadioComponent);
    MaterialTreeGroupFlatRadioComponent.prototype[_is_MaterialTreeGroupFlatRadioComponent_default] = true;
    dart.addTypeCaches(MaterialTreeGroupFlatRadioComponent);
    dart.setLibraryUri(MaterialTreeGroupFlatRadioComponent, L3);
    dart.setFieldSignature(MaterialTreeGroupFlatRadioComponent, () => ({
      __proto__: dart.getFields(MaterialTreeGroupFlatRadioComponent.__proto__),
      [_dropdownHandle$]: dart.finalFieldType(dart.legacy(material_dropdown_base.DropdownHandle)),
      selectionModel: dart.finalFieldType(dart.legacy(selection_model.SelectionModel)),
      isMaterialTreeGroup: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return MaterialTreeGroupFlatRadioComponent;
  });
  material_tree_group_flat.MaterialTreeGroupFlatRadioComponent = material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$();
  dart.addTypeTests(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent, _is_MaterialTreeGroupFlatRadioComponent_default);
  const _is_MaterialTreeGroupFlatCheckComponent_default = Symbol('_is_MaterialTreeGroupFlatCheckComponent_default');
  var isMaterialTreeGroup$0 = dart.privateName(material_tree_group_flat, "MaterialTreeGroupFlatCheckComponent.isMaterialTreeGroup");
  material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$ = dart.generic(T => {
    class MaterialTreeGroupFlatCheckComponent extends material_tree_node.MaterialTreeNode$(dart.legacy(T)) {
      get isMaterialTreeGroup() {
        return this[isMaterialTreeGroup$0];
      }
      set isMaterialTreeGroup(value) {
        super.isMaterialTreeGroup = value;
      }
    }
    (MaterialTreeGroupFlatCheckComponent.new = function(root, changeDetector, _dropdownHandle = null) {
      this[isMaterialTreeGroup$0] = true;
      this[_dropdownHandle$] = _dropdownHandle;
      MaterialTreeGroupFlatCheckComponent.__proto__.new.call(this, root, changeDetector);
      ;
    }).prototype = MaterialTreeGroupFlatCheckComponent.prototype;
    dart.addTypeTests(MaterialTreeGroupFlatCheckComponent);
    MaterialTreeGroupFlatCheckComponent.prototype[_is_MaterialTreeGroupFlatCheckComponent_default] = true;
    dart.addTypeCaches(MaterialTreeGroupFlatCheckComponent);
    dart.setLibraryUri(MaterialTreeGroupFlatCheckComponent, L3);
    dart.setFieldSignature(MaterialTreeGroupFlatCheckComponent, () => ({
      __proto__: dart.getFields(MaterialTreeGroupFlatCheckComponent.__proto__),
      [_dropdownHandle$]: dart.finalFieldType(dart.legacy(material_dropdown_base.DropdownHandle)),
      isMaterialTreeGroup: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return MaterialTreeGroupFlatCheckComponent;
  });
  material_tree_group_flat.MaterialTreeGroupFlatCheckComponent = material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$();
  dart.addTypeTests(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent, _is_MaterialTreeGroupFlatCheckComponent_default);
  const _is_MaterialTreeComponent_default = Symbol('_is_MaterialTreeComponent_default');
  var optimizeForDropdown = dart.privateName(material_tree_impl, "MaterialTreeComponent.optimizeForDropdown");
  var renderingOptions$ = dart.privateName(material_tree_impl, "MaterialTreeComponent.renderingOptions");
  var expandAll = dart.privateName(material_tree_impl, "MaterialTreeComponent.expandAll");
  var allowParentSingleSelection$ = dart.privateName(material_tree_impl, "MaterialTreeComponent.allowParentSingleSelection");
  var allowParentMultiSelection$ = dart.privateName(material_tree_impl, "MaterialTreeComponent.allowParentMultiSelection");
  var allowDeselectInHierarchy = dart.privateName(material_tree_impl, "MaterialTreeComponent.allowDeselectInHierarchy");
  var treeGroupNodes = dart.privateName(material_tree_impl, "MaterialTreeComponent.treeGroupNodes");
  material_tree_impl.MaterialTreeComponent$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _NoopSelectionModelImplOfTL = () => (_NoopSelectionModelImplOfTL = dart.constFn(selection_model._NoopSelectionModelImpl$(TL())))();
    var SelectionOptionsOfTL = () => (SelectionOptionsOfTL = dart.constFn(selection_options.SelectionOptions$(TL())))();
    var SelectionOptionsLOfTL = () => (SelectionOptionsLOfTL = dart.constFn(dart.legacy(SelectionOptionsOfTL())))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    const Object_MaterialTreeRoot$36 = class Object_MaterialTreeRoot extends core.Object {};
    (Object_MaterialTreeRoot$36.new = function() {
      material_tree_root.MaterialTreeRoot$(dart.legacy(T)).new.call(this);
    }).prototype = Object_MaterialTreeRoot$36.prototype;
    dart.applyMixin(Object_MaterialTreeRoot$36, material_tree_root.MaterialTreeRoot$(dart.legacy(T)));
    const Object_SelectionContainer$36 = class Object_SelectionContainer extends Object_MaterialTreeRoot$36 {};
    (Object_SelectionContainer$36.new = function() {
      selection_container.SelectionContainer$(dart.legacy(T)).new.call(this);
      Object_SelectionContainer$36.__proto__.new.call(this);
    }).prototype = Object_SelectionContainer$36.prototype;
    dart.applyMixin(Object_SelectionContainer$36, selection_container.SelectionContainer$(dart.legacy(T)));
    class MaterialTreeComponent extends Object_SelectionContainer$36 {
      get optimizeForDropdown() {
        return this[optimizeForDropdown];
      }
      set optimizeForDropdown(value) {
        this[optimizeForDropdown] = value;
      }
      get renderingOptions() {
        return this[renderingOptions$];
      }
      set renderingOptions(value) {
        super.renderingOptions = value;
      }
      get expandAll() {
        return this[expandAll];
      }
      set expandAll(value) {
        this[expandAll] = value;
      }
      get allowParentSingleSelection() {
        return this[allowParentSingleSelection$];
      }
      set allowParentSingleSelection(value) {
        this[allowParentSingleSelection$] = value;
      }
      get allowParentMultiSelection() {
        return this[allowParentMultiSelection$];
      }
      set allowParentMultiSelection(value) {
        this[allowParentMultiSelection$] = value;
      }
      get allowDeselectInHierarchy() {
        return this[allowDeselectInHierarchy];
      }
      set allowDeselectInHierarchy(value) {
        this[allowDeselectInHierarchy] = value;
      }
      get treeGroupNodes() {
        return this[treeGroupNodes];
      }
      set treeGroupNodes(value) {
        this[treeGroupNodes] = value;
      }
      set componentRenderer(value) {
        super.componentRenderer = value;
      }
      get componentRenderer() {
        return super.componentRenderer;
      }
      set factoryRenderer(value) {
        super.factoryRenderer = value;
      }
      get factoryRenderer() {
        return super.factoryRenderer;
      }
      set itemRenderer(value) {
        super.itemRenderer = value;
      }
      get itemRenderer() {
        return super.itemRenderer;
      }
      set options(value) {
        SelectionOptionsLOfTL().as(value);
        super.options = value;
      }
      get options() {
        return super.options;
      }
      set selection(value) {
        SelectionModelLOfTL().as(value);
        super.selection = value;
      }
      get selection() {
        return super.selection;
      }
      shouldExpand(group, index) {
        if (this.renderingOptions == null) return this.expandAll;
        return dart.test(this.expandAll) || dart.test(this.renderingOptions.shouldExpand(group, index));
      }
      maxInitialOptionsShown(group, index) {
        if (this.renderingOptions == null) return null;
        return this.renderingOptions.maxInitialOptionsShown(group, index);
      }
      collapseAllTreeGroups() {
        for (let tree of this.treeGroupNodes) {
          tree.clearExpansions();
        }
      }
      expandAllTreeGroups() {
        for (let tree of this.treeGroupNodes) {
          tree.expandAllOptions();
        }
      }
      get showFlatCheck() {
        return MultiSelectionModelL().is(this.selection);
      }
      get showFlatList() {
        return NullSelectionModelL().is(this.selection);
      }
      get showFlatRadio() {
        return !dart.test(this.showFlatList) && !dart.test(this.showFlatCheck);
      }
      get role() {
        if (dart.test(this.supportsHierarchy)) {
          return "tree";
        } else if (dart.test(this.showFlatCheck) || dart.test(this.showFlatRadio)) {
          return "listbox";
        } else {
          return "list";
        }
      }
      get hostMultiselectable() {
        return dart.str(this.showFlatCheck);
      }
      get hostReadonly() {
        return dart.str(this.showFlatList);
      }
    }
    (MaterialTreeComponent.new = function(parentTreeRoot, renderingOptions) {
      let t0;
      this[expandAll] = false;
      this[allowParentSingleSelection$] = false;
      this[allowParentMultiSelection$] = true;
      this[allowDeselectInHierarchy] = true;
      this[treeGroupNodes] = null;
      this[renderingOptions$] = renderingOptions;
      this[optimizeForDropdown] = dart.equals((t0 = parentTreeRoot, t0 == null ? null : t0.optimizeForDropdown), true);
      MaterialTreeComponent.__proto__.new.call(this);
      this.selection = new (_NoopSelectionModelImplOfTL()).new();
    }).prototype = MaterialTreeComponent.prototype;
    dart.addTypeTests(MaterialTreeComponent);
    MaterialTreeComponent.prototype[_is_MaterialTreeComponent_default] = true;
    dart.addTypeCaches(MaterialTreeComponent);
    dart.setMethodSignature(MaterialTreeComponent, () => ({
      __proto__: dart.getMethods(MaterialTreeComponent.__proto__),
      shouldExpand: dart.fnType(dart.legacy(core.bool), [dart.legacy(selection_options.OptionGroup), dart.legacy(core.int)]),
      maxInitialOptionsShown: dart.fnType(dart.legacy(core.int), [dart.legacy(selection_options.OptionGroup), dart.legacy(core.int)]),
      collapseAllTreeGroups: dart.fnType(dart.void, []),
      expandAllTreeGroups: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialTreeComponent, () => ({
      __proto__: dart.getGetters(MaterialTreeComponent.__proto__),
      showFlatCheck: dart.legacy(core.bool),
      showFlatList: dart.legacy(core.bool),
      showFlatRadio: dart.legacy(core.bool),
      role: dart.legacy(core.String),
      hostMultiselectable: dart.legacy(core.String),
      hostReadonly: dart.legacy(core.String)
    }));
    dart.setSetterSignature(MaterialTreeComponent, () => ({
      __proto__: dart.getSetters(MaterialTreeComponent.__proto__),
      componentRenderer: dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic])),
      factoryRenderer: dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(T)])),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      options: dart.legacy(core.Object),
      selection: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(MaterialTreeComponent, L4);
    dart.setFieldSignature(MaterialTreeComponent, () => ({
      __proto__: dart.getFields(MaterialTreeComponent.__proto__),
      optimizeForDropdown: dart.fieldType(dart.legacy(core.bool)),
      renderingOptions: dart.finalFieldType(dart.legacy(material_tree_rendering_options.MaterialTreeRenderingOptions)),
      expandAll: dart.fieldType(dart.legacy(core.bool)),
      allowParentSingleSelection: dart.fieldType(dart.legacy(core.bool)),
      allowParentMultiSelection: dart.fieldType(dart.legacy(core.bool)),
      allowDeselectInHierarchy: dart.fieldType(dart.legacy(core.bool)),
      treeGroupNodes: dart.fieldType(dart.legacy(core.List$(dart.legacy(material_tree_group.MaterialTreeGroupComponent))))
    }));
    return MaterialTreeComponent;
  });
  material_tree_impl.MaterialTreeComponent = material_tree_impl.MaterialTreeComponent$();
  dart.addTypeTests(material_tree_impl.MaterialTreeComponent, _is_MaterialTreeComponent_default);
  material_tree_rendering_options.MaterialTreeRenderingOptions = class MaterialTreeRenderingOptions extends core.Object {};
  (material_tree_rendering_options.MaterialTreeRenderingOptions.new = function() {
    ;
  }).prototype = material_tree_rendering_options.MaterialTreeRenderingOptions.prototype;
  dart.addTypeTests(material_tree_rendering_options.MaterialTreeRenderingOptions);
  dart.addTypeCaches(material_tree_rendering_options.MaterialTreeRenderingOptions);
  dart.setLibraryUri(material_tree_rendering_options.MaterialTreeRenderingOptions, L5);
  var _maxInitialOptionsShown = dart.privateName(material_tree_group, "_maxInitialOptionsShown");
  var _visibleGroup = dart.privateName(material_tree_group, "_visibleGroup");
  var _root$0 = dart.privateName(material_tree_group, "_root");
  var _dropdownHandle$0 = dart.privateName(material_tree_group, "_dropdownHandle");
  var _sliceOptionGroup = dart.privateName(material_tree_group, "_sliceOptionGroup");
  const _is_MaterialTreeGroupComponent_default = Symbol('_is_MaterialTreeGroupComponent_default');
  var level = dart.privateName(material_tree_group, "MaterialTreeGroupComponent.level");
  var parentHasCheckbox = dart.privateName(material_tree_group, "MaterialTreeGroupComponent.parentHasCheckbox");
  var allowParentSingleSelection$0 = dart.privateName(material_tree_group, "MaterialTreeGroupComponent.allowParentSingleSelection");
  var allowParentMultiSelection$0 = dart.privateName(material_tree_group, "MaterialTreeGroupComponent.allowParentMultiSelection");
  var deselectOnTrigger = dart.privateName(material_tree_group, "MaterialTreeGroupComponent.deselectOnTrigger");
  var fixedPadding = dart.privateName(material_tree_group, "MaterialTreeGroupComponent.fixedPadding");
  var isMaterialTreeGroup$1 = dart.privateName(material_tree_group, "MaterialTreeGroupComponent.isMaterialTreeGroup");
  material_tree_group.MaterialTreeGroupComponent$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialTreeRootOfTL = () => (MaterialTreeRootOfTL = dart.constFn(material_tree_root.MaterialTreeRoot$(TL())))();
    var MaterialTreeRootLOfTL = () => (MaterialTreeRootLOfTL = dart.constFn(dart.legacy(MaterialTreeRootOfTL())))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class MaterialTreeGroupComponent extends material_tree_node.MaterialTreeNode$(dart.legacy(T)) {
      get level() {
        return this[level];
      }
      set level(value) {
        this[level] = value;
      }
      get parentHasCheckbox() {
        return this[parentHasCheckbox];
      }
      set parentHasCheckbox(value) {
        this[parentHasCheckbox] = value;
      }
      get allowParentSingleSelection() {
        return this[allowParentSingleSelection$0];
      }
      set allowParentSingleSelection(value) {
        this[allowParentSingleSelection$0] = value;
      }
      get allowParentMultiSelection() {
        return this[allowParentMultiSelection$0];
      }
      set allowParentMultiSelection(value) {
        this[allowParentMultiSelection$0] = value;
      }
      get deselectOnTrigger() {
        return this[deselectOnTrigger];
      }
      set deselectOnTrigger(value) {
        this[deselectOnTrigger] = value;
      }
      get fixedPadding() {
        return this[fixedPadding];
      }
      set fixedPadding(value) {
        super.fixedPadding = value;
      }
      get isMaterialTreeGroup() {
        return this[isMaterialTreeGroup$1];
      }
      set isMaterialTreeGroup(value) {
        super.isMaterialTreeGroup = value;
      }
      get maxInitialOptionsShown() {
        return this[_maxInitialOptionsShown];
      }
      set maxInitialOptionsShown(value) {
        this[_maxInitialOptionsShown] = value;
        if (this[_maxInitialOptionsShown] != null) {
          this[_sliceOptionGroup](this[_maxInitialOptionsShown]);
        }
      }
      get visibleGroup() {
        return this[_visibleGroup];
      }
      showCheckbox(option) {
        return dart.test(this.showSelectionState) && (dart.test(this.isSelectable(TL().as(option))) || dart.test(this.showDisabledCheckbox(option)));
      }
      getIndent(option) {
        let padding = 0;
        if (dart.notNull(this.level) > 0) {
          padding = padding + (dart.notNull(this.level) - 1) * dart.notNull(material_tree_group.MaterialTreeGroupComponent.rowIndentationStep);
          if (!dart.test(this.showCheckbox(option)) || dart.test(this.parentHasCheckbox)) {
            padding = padding + dart.notNull(material_tree_group.MaterialTreeGroupComponent.checkboxWidth);
          }
        }
        return dart.str(padding) + "px";
      }
      handleExpansion(e, option) {
        this.toggleExpansion(TL().as(option));
        e.stopPropagation();
      }
      handleSelectionOrExpansion(e, option) {
        let t0;
        if (!dart.test(this.isExpandable(TL().as(option))) && dart.test(this.isSelectable(TL().as(option))) || dart.test(this.allowParentSingleSelection) && dart.test(this.isSelectable(TL().as(option))) || dart.test(this.allowParentMultiSelection) && dart.test(this.isSelectable(TL().as(option)))) {
          let previouslyToggledNode = this[_root$0].previouslyToggledNode;
          this[_root$0].previouslyToggledNode = option;
          if (!dart.test(this.isSelected(TL().as(option))) || dart.test(this.deselectOnTrigger)) {
            this.setSelectionState(TL().as(option), !dart.test(this.isSelected(TL().as(option))));
          }
          if (dart.test(this.isMultiSelect) && previouslyToggledNode != null && MouseEventL().is(e) && dart.test(e.shiftKey)) {
            this.toggleSelectionRangeInclusive(TL().as(previouslyToggledNode), TL().as(option), this.isSelected(TL().as(previouslyToggledNode)));
          }
          if (!dart.test(this.isMultiSelect) && !dart.test(this.allowParentSingleSelection)) {
            t0 = this[_dropdownHandle$0];
            t0 == null ? null : t0.close();
          }
        } else {
          this.toggleExpansion(TL().as(option));
        }
        e.stopPropagation();
      }
      [_sliceOptionGroup](end) {
        if (dart.notNull(end) < dart.notNull(this.group.length)) {
          this[_visibleGroup] = this.group.slicedOptionGroup(0, end);
        } else {
          this[_visibleGroup] = this.group;
        }
      }
      set group(_group) {
        OptionGroupL().as(_group);
        super.group = OptionGroupLOfTL().as(_group);
        if (this[_maxInitialOptionsShown] == null) {
          this[_visibleGroup] = this.group;
          return;
        }
        this[_sliceOptionGroup](this[_maxInitialOptionsShown]);
      }
      get group() {
        return super.group;
      }
      viewMoreOptions(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this[_visibleGroup] = this.group;
      }
      get viewMoreLinkVisible() {
        return this[_maxInitialOptionsShown] != null && this[_visibleGroup] != this.group;
      }
      ngOnDestroy() {
        this.onDestroy();
      }
    }
    (MaterialTreeGroupComponent.new = function(_root, changeDetector, _dropdownHandle = null, constantLeftPadding = null) {
      let t0;
      this[level] = 0;
      this[parentHasCheckbox] = false;
      this[allowParentSingleSelection$0] = false;
      this[allowParentMultiSelection$0] = true;
      this[deselectOnTrigger] = true;
      this[_maxInitialOptionsShown] = null;
      this[_visibleGroup] = null;
      this[isMaterialTreeGroup$1] = true;
      this[_root$0] = _root;
      this[_dropdownHandle$0] = _dropdownHandle;
      this[fixedPadding] = dart.str((t0 = constantLeftPadding, t0 == null ? material_tree_group.MaterialTreeGroupComponent.defaultConstantLeftPadding : t0)) + "px";
      MaterialTreeGroupComponent.__proto__.new.call(this, MaterialTreeRootLOfTL().as(_root), changeDetector);
      ;
    }).prototype = MaterialTreeGroupComponent.prototype;
    dart.addTypeTests(MaterialTreeGroupComponent);
    MaterialTreeGroupComponent.prototype[_is_MaterialTreeGroupComponent_default] = true;
    dart.addTypeCaches(MaterialTreeGroupComponent);
    MaterialTreeGroupComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(MaterialTreeGroupComponent, () => ({
      __proto__: dart.getMethods(MaterialTreeGroupComponent.__proto__),
      showCheckbox: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      getIndent: dart.fnType(dart.legacy(core.String), [dart.dynamic]),
      handleExpansion: dart.fnType(dart.void, [dart.legacy(html.Event), dart.legacy(core.Object)]),
      handleSelectionOrExpansion: dart.fnType(dart.void, [dart.legacy(html.Event), dart.legacy(core.Object)]),
      [_sliceOptionGroup]: dart.fnType(dart.void, [dart.legacy(core.int)]),
      viewMoreOptions: dart.fnType(dart.void, [dart.legacy(html.Event)]),
      ngOnDestroy: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialTreeGroupComponent, () => ({
      __proto__: dart.getGetters(MaterialTreeGroupComponent.__proto__),
      maxInitialOptionsShown: dart.legacy(core.int),
      visibleGroup: dart.legacy(selection_options.OptionGroup),
      viewMoreLinkVisible: dart.legacy(core.bool)
    }));
    dart.setSetterSignature(MaterialTreeGroupComponent, () => ({
      __proto__: dart.getSetters(MaterialTreeGroupComponent.__proto__),
      maxInitialOptionsShown: dart.legacy(core.int)
    }));
    dart.setLibraryUri(MaterialTreeGroupComponent, L6);
    dart.setFieldSignature(MaterialTreeGroupComponent, () => ({
      __proto__: dart.getFields(MaterialTreeGroupComponent.__proto__),
      [_dropdownHandle$0]: dart.finalFieldType(dart.legacy(material_dropdown_base.DropdownHandle)),
      level: dart.fieldType(dart.legacy(core.int)),
      parentHasCheckbox: dart.fieldType(dart.legacy(core.bool)),
      allowParentSingleSelection: dart.fieldType(dart.legacy(core.bool)),
      allowParentMultiSelection: dart.fieldType(dart.legacy(core.bool)),
      deselectOnTrigger: dart.fieldType(dart.legacy(core.bool)),
      [_root$0]: dart.finalFieldType(dart.legacy(material_tree_root.MaterialTreeRoot)),
      [_maxInitialOptionsShown]: dart.fieldType(dart.legacy(core.int)),
      [_visibleGroup]: dart.fieldType(dart.legacy(selection_options.OptionGroup)),
      fixedPadding: dart.finalFieldType(dart.legacy(core.String)),
      isMaterialTreeGroup: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return MaterialTreeGroupComponent;
  });
  material_tree_group.MaterialTreeGroupComponent = material_tree_group.MaterialTreeGroupComponent$();
  dart.defineLazy(material_tree_group.MaterialTreeGroupComponent, {
    /*material_tree_group.MaterialTreeGroupComponent.hostRole*/get hostRole() {
      return "group";
    },
    /*material_tree_group.MaterialTreeGroupComponent.defaultConstantLeftPadding*/get defaultConstantLeftPadding() {
      return 24;
    },
    /*material_tree_group.MaterialTreeGroupComponent.baseGridStep*/get baseGridStep() {
      return 8;
    },
    /*material_tree_group.MaterialTreeGroupComponent.rowIndentationStep*/get rowIndentationStep() {
      return dart.notNull(material_tree_group.MaterialTreeGroupComponent.baseGridStep) * 5;
    },
    /*material_tree_group.MaterialTreeGroupComponent.checkboxWidth*/get checkboxWidth() {
      return dart.notNull(material_tree_group.MaterialTreeGroupComponent.baseGridStep) * 5;
    },
    /*material_tree_group.MaterialTreeGroupComponent.viewMoreMsg*/get viewMoreMsg() {
      return intl.Intl.message("View more", {desc: "Label for a link that allows user to see the collapsed options."});
    }
  }, true);
  dart.addTypeTests(material_tree_group.MaterialTreeGroupComponent, _is_MaterialTreeGroupComponent_default);
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C3;
  dart.defineLazy(material_tree_group, {
    /*material_tree_group.materialTreeLeftPaddingToken*/get materialTreeLeftPaddingToken() {
      return C3 || CT.C3;
    }
  }, true);
  var _onFocusController = dart.privateName(material_tree_filter, "_onFocusController");
  var _onFilteredController = dart.privateName(material_tree_filter, "_onFilteredController");
  var _filterable = dart.privateName(material_tree_filter, "_filterable");
  var _inputText = dart.privateName(material_tree_filter, "_inputText");
  var _lastFilterFuture = dart.privateName(material_tree_filter, "_lastFilterFuture");
  var _treeRoot$ = dart.privateName(material_tree_filter, "_treeRoot");
  var _updateVisibleItems = dart.privateName(material_tree_filter, "_updateVisibleItems");
  var materialInput = dart.privateName(material_tree_filter, "MaterialTreeFilterComponent.materialInput");
  var leadingGlyph = dart.privateName(material_tree_filter, "MaterialTreeFilterComponent.leadingGlyph");
  var placeholder = dart.privateName(material_tree_filter, "MaterialTreeFilterComponent.placeholder");
  material_tree_filter.MaterialTreeFilterComponent = class MaterialTreeFilterComponent extends core.Object {
    get materialInput() {
      return this[materialInput];
    }
    set materialInput(value) {
      this[materialInput] = value;
    }
    get leadingGlyph() {
      return this[leadingGlyph];
    }
    set leadingGlyph(value) {
      this[leadingGlyph] = value;
    }
    get placeholder() {
      return this[placeholder];
    }
    set placeholder(value) {
      this[placeholder] = value;
    }
    get inputText() {
      return this[_inputText];
    }
    set inputText(inputText) {
      if (this[_inputText] != inputText) {
        this[_inputText] = inputText;
        this[_updateVisibleItems]();
      }
    }
    set filterable(filterable) {
      if (!dart.equals(this[_filterable], filterable)) {
        this[_filterable] = filterable;
        let query = filterable.currentQuery;
        if (query != null) {
          this[_inputText] = dart.toString(query);
        }
        this[_updateVisibleItems]();
      }
    }
    get hasFilterable() {
      return this[_filterable] != null;
    }
    handleFocus() {
      this[_onFocusController].add(null);
    }
    focus() {
      this.materialInput.focus();
    }
    clear() {
      this.inputText = "";
    }
    get onFocus() {
      return this[_onFocusController].stream;
    }
    get onFiltered() {
      return this[_onFilteredController].stream;
    }
    [_updateVisibleItems]() {
      let t0;
      t0 = this[_lastFilterFuture];
      t0 == null ? null : t0.dispose();
      this[_lastFilterFuture] = this[_filterable].filter(this[_inputText]);
      this[_treeRoot$].isFiltered = this[_inputText][$isNotEmpty];
      this[_onFilteredController].add(null);
    }
  };
  (material_tree_filter.MaterialTreeFilterComponent.new = function(_treeRoot) {
    let t0;
    this[_onFocusController] = async.StreamController.broadcast({sync: true});
    this[_onFilteredController] = async.StreamController.broadcast({sync: true});
    this[materialInput] = null;
    this[_filterable] = null;
    this[_inputText] = "";
    this[_lastFilterFuture] = null;
    this[leadingGlyph] = null;
    this[placeholder] = null;
    this[_treeRoot$] = _treeRoot;
    if (dart.equals((t0 = this[_treeRoot$], t0 == null ? null : t0.supportsFiltering), true)) {
      this.filterable = FilterableL().as(this[_treeRoot$].options);
    }
  }).prototype = material_tree_filter.MaterialTreeFilterComponent.prototype;
  dart.addTypeTests(material_tree_filter.MaterialTreeFilterComponent);
  dart.addTypeCaches(material_tree_filter.MaterialTreeFilterComponent);
  dart.setMethodSignature(material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getMethods(material_tree_filter.MaterialTreeFilterComponent.__proto__),
    handleFocus: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    clear: dart.fnType(dart.void, []),
    [_updateVisibleItems]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getGetters(material_tree_filter.MaterialTreeFilterComponent.__proto__),
    inputText: dart.legacy(core.String),
    hasFilterable: dart.legacy(core.bool),
    onFocus: dart.legacy(async.Stream),
    onFiltered: dart.legacy(async.Stream)
  }));
  dart.setSetterSignature(material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getSetters(material_tree_filter.MaterialTreeFilterComponent.__proto__),
    inputText: dart.legacy(core.String),
    filterable: dart.legacy(select.Filterable)
  }));
  dart.setLibraryUri(material_tree_filter.MaterialTreeFilterComponent, L7);
  dart.setFieldSignature(material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getFields(material_tree_filter.MaterialTreeFilterComponent.__proto__),
    [_onFocusController]: dart.finalFieldType(dart.legacy(async.StreamController)),
    [_onFilteredController]: dart.finalFieldType(dart.legacy(async.StreamController)),
    [_treeRoot$]: dart.finalFieldType(dart.legacy(material_tree_root.MaterialTreeRoot)),
    materialInput: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_filterable]: dart.fieldType(dart.legacy(select.Filterable)),
    [_inputText]: dart.fieldType(dart.legacy(core.String)),
    [_lastFilterFuture]: dart.fieldType(dart.legacy(disposable_future.DisposableFuture)),
    leadingGlyph: dart.fieldType(dart.legacy(core.String)),
    placeholder: dart.fieldType(dart.legacy(core.String))
  }));
  var _expandAll$ = dart.privateName(material_tree_dropdown, "_expandAll");
  var _placeholder = dart.privateName(material_tree_dropdown, "_placeholder");
  var _visible = dart.privateName(material_tree_dropdown, "_visible");
  var _customPopupPositions = dart.privateName(material_tree_dropdown, "_customPopupPositions");
  var _visibleStream = dart.privateName(material_tree_dropdown, "_visibleStream");
  var _domService$ = dart.privateName(material_tree_dropdown, "_domService");
  var _defaultPopupPositions = dart.privateName(material_tree_dropdown, "_defaultPopupPositions");
  var _maybeFocusFilterComponent = dart.privateName(material_tree_dropdown, "_maybeFocusFilterComponent");
  const _is_MaterialTreeDropdownComponent_default = Symbol('_is_MaterialTreeDropdownComponent_default');
  var materialTreeFilterComponent = dart.privateName(material_tree_dropdown, "MaterialTreeDropdownComponent.materialTreeFilterComponent");
  var popupClassName = dart.privateName(material_tree_dropdown, "MaterialTreeDropdownComponent.popupClassName");
  var showFilterInsidePopup = dart.privateName(material_tree_dropdown, "MaterialTreeDropdownComponent.showFilterInsidePopup");
  var shouldExpandAllWhenFiltered = dart.privateName(material_tree_dropdown, "MaterialTreeDropdownComponent.shouldExpandAllWhenFiltered");
  var allowParentSingleSelection$1 = dart.privateName(material_tree_dropdown, "MaterialTreeDropdownComponent.allowParentSingleSelection");
  var allowDeselectInHierarchy$ = dart.privateName(material_tree_dropdown, "MaterialTreeDropdownComponent.allowDeselectInHierarchy");
  var labelRenderer = dart.privateName(material_tree_dropdown, "MaterialTreeDropdownComponent.labelRenderer");
  var optimizeForDropdown$ = dart.privateName(material_tree_dropdown, "MaterialTreeDropdownComponent.optimizeForDropdown");
  var RelativePosition_animationOrigin = dart.privateName(alignment, "RelativePosition.animationOrigin");
  var Alignment__cssPropertyValue = dart.privateName(alignment, "Alignment._cssPropertyValue");
  var Alignment__displayName = dart.privateName(alignment, "Alignment._displayName");
  var _CustomAlignment_cssClassY = dart.privateName(alignment, "_CustomAlignment.cssClassY");
  var _CustomAlignment_cssClassX = dart.privateName(alignment, "_CustomAlignment.cssClassX");
  var AfterCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "AfterCustomAlignment.requiresContentSizeToPosition");
  var C6;
  var RelativePosition_originY = dart.privateName(alignment, "RelativePosition.originY");
  var C7;
  var RelativePosition_originX = dart.privateName(alignment, "RelativePosition.originX");
  var C5;
  var C10;
  var C9;
  var C12;
  var C11;
  var C8;
  var BeforeCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "BeforeCustomAlignment.requiresContentSizeToPosition");
  var C14;
  var C13;
  var C16;
  var C17;
  var C15;
  var C4;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C18;
  material_tree_dropdown.MaterialTreeDropdownComponent$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _NoopSelectionModelImplOfTL = () => (_NoopSelectionModelImplOfTL = dart.constFn(selection_model._NoopSelectionModelImpl$(TL())))();
    var SelectionOptionsOfTL = () => (SelectionOptionsOfTL = dart.constFn(selection_options.SelectionOptions$(TL())))();
    var SelectionOptionsLOfTL = () => (SelectionOptionsLOfTL = dart.constFn(dart.legacy(SelectionOptionsOfTL())))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    const Object_DropdownHandle$36 = class Object_DropdownHandle extends core.Object {};
    (Object_DropdownHandle$36.new = function() {
      material_dropdown_base.DropdownHandle.new.call(this);
    }).prototype = Object_DropdownHandle$36.prototype;
    dart.applyMixin(Object_DropdownHandle$36, material_dropdown_base.DropdownHandle);
    const Object_MaterialTreeRoot$36 = class Object_MaterialTreeRoot extends Object_DropdownHandle$36 {};
    (Object_MaterialTreeRoot$36.new = function() {
      material_tree_root.MaterialTreeRoot$(dart.legacy(T)).new.call(this);
      Object_MaterialTreeRoot$36.__proto__.new.call(this);
    }).prototype = Object_MaterialTreeRoot$36.prototype;
    dart.applyMixin(Object_MaterialTreeRoot$36, material_tree_root.MaterialTreeRoot$(dart.legacy(T)));
    const Object_SelectionContainer$36 = class Object_SelectionContainer extends Object_MaterialTreeRoot$36 {};
    (Object_SelectionContainer$36.new = function() {
      selection_container.SelectionContainer$(dart.legacy(T)).new.call(this);
      Object_SelectionContainer$36.__proto__.new.call(this);
    }).prototype = Object_SelectionContainer$36.prototype;
    dart.applyMixin(Object_SelectionContainer$36, selection_container.SelectionContainer$(dart.legacy(T)));
    class MaterialTreeDropdownComponent extends Object_SelectionContainer$36 {
      get materialTreeFilterComponent() {
        return this[materialTreeFilterComponent];
      }
      set materialTreeFilterComponent(value) {
        this[materialTreeFilterComponent] = value;
      }
      get popupClassName() {
        return this[popupClassName];
      }
      set popupClassName(value) {
        super.popupClassName = value;
      }
      get showFilterInsidePopup() {
        return this[showFilterInsidePopup];
      }
      set showFilterInsidePopup(value) {
        this[showFilterInsidePopup] = value;
      }
      get shouldExpandAllWhenFiltered() {
        return this[shouldExpandAllWhenFiltered];
      }
      set shouldExpandAllWhenFiltered(value) {
        this[shouldExpandAllWhenFiltered] = value;
      }
      get allowParentSingleSelection() {
        return this[allowParentSingleSelection$1];
      }
      set allowParentSingleSelection(value) {
        this[allowParentSingleSelection$1] = value;
      }
      get allowDeselectInHierarchy() {
        return this[allowDeselectInHierarchy$];
      }
      set allowDeselectInHierarchy(value) {
        this[allowDeselectInHierarchy$] = value;
      }
      get labelRenderer() {
        return this[labelRenderer];
      }
      set labelRenderer(value) {
        this[labelRenderer] = value;
      }
      get optimizeForDropdown() {
        return this[optimizeForDropdown$];
      }
      set optimizeForDropdown(value) {
        super.optimizeForDropdown = value;
      }
      get visibleChange() {
        return this[_visibleStream].stream;
      }
      set expandAll(value) {
        this[_expandAll$] = value;
      }
      get showFilterInsideButton() {
        return dart.test(this.supportsFiltering) && !dart.test(this.showFilterInsidePopup);
      }
      get filterableOptions() {
        return FilterableL().is(this.options) ? FilterableL().as(this.options) : dart.throw(new core.StateError.new("The SelectionOptions provided should implement Filterable"));
      }
      get expandAll() {
        return dart.test(this[_expandAll$]) || dart.test(this.isFiltered) && dart.test(this.shouldExpandAllWhenFiltered);
      }
      get placeholder() {
        let t1, t0;
        if (!MultiSelectionModelL().is(this.selection) && dart.test(this.selection.isNotEmpty)) {
          return (t0 = this.labelRenderer, t0 == null ? (t1 = this.itemRenderer, t1 == null ? C2 || CT.C2 : t1) : t0)(this.selection.selectedValues[$first]);
        }
        return this[_placeholder];
      }
      set componentRenderer(value) {
        super.componentRenderer = value;
      }
      get componentRenderer() {
        return super.componentRenderer;
      }
      set factoryRenderer(value) {
        super.factoryRenderer = value;
      }
      get factoryRenderer() {
        return super.factoryRenderer;
      }
      set itemRenderer(value) {
        super.itemRenderer = value;
      }
      get itemRenderer() {
        return super.itemRenderer;
      }
      set options(value) {
        SelectionOptionsLOfTL().as(value);
        super.options = value;
      }
      get options() {
        return super.options;
      }
      set selection(value) {
        SelectionModelLOfTL().as(value);
        super.selection = value;
      }
      get selection() {
        return super.selection;
      }
      set placeholder(placeholder) {
        let t0;
        this[_placeholder] = (t0 = placeholder, t0 == null ? "Select" : t0);
      }
      set popupPositions(positions) {
        this[_customPopupPositions] = positions;
      }
      get popupPositions() {
        let t0;
        t0 = this[_customPopupPositions];
        return t0 == null ? this[_defaultPopupPositions] : t0;
      }
      get [_defaultPopupPositions]() {
        return dart.test(this.showFilterInsideButton) ? material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsOffset : material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsInline;
      }
      get visible() {
        return this[_visible];
      }
      set visible(val) {
        let t0;
        if (!dart.equals(this[_visible], val)) {
          this[_visible] = val;
          this[_visibleStream].add(val);
          if (dart.test(this.showFilterInsidePopup) && !dart.test(this[_visible])) {
            t0 = this.materialTreeFilterComponent;
            t0 == null ? null : t0.clear();
          }
        }
      }
      open() {
        this.visible = true;
      }
      close() {
        this.visible = false;
      }
      toggle() {
        this.visible = !dart.test(this.visible);
      }
      ngOnInit() {
        this[_maybeFocusFilterComponent]();
      }
      focus() {
        this.open();
        this[_maybeFocusFilterComponent]();
      }
      [_maybeFocusFilterComponent]() {
        return async.async(dart.dynamic, (function* _maybeFocusFilterComponent() {
          let t0;
          if (dart.test(this.visible) && dart.test(this.supportsFiltering)) {
            yield this[_domService$].nextFrame;
            t0 = this.materialTreeFilterComponent;
            t0 == null ? null : t0.focus();
          }
        }).bind(this));
      }
    }
    (MaterialTreeDropdownComponent.new = function(_domService, popupClass, element) {
      this[_expandAll$] = false;
      this[_placeholder] = "Select";
      this[_visible] = false;
      this[_customPopupPositions] = null;
      this[materialTreeFilterComponent] = null;
      this[_visibleStream] = StreamControllerOfboolL().broadcast({sync: true});
      this[showFilterInsidePopup] = false;
      this[shouldExpandAllWhenFiltered] = true;
      this[allowParentSingleSelection$1] = false;
      this[allowDeselectInHierarchy$] = true;
      this[labelRenderer] = null;
      this[optimizeForDropdown$] = true;
      this[_domService$] = _domService;
      this[popupClassName] = css.constructEncapsulatedCss(popupClass, element[$classes]);
      MaterialTreeDropdownComponent.__proto__.new.call(this);
      this.selection = new (_NoopSelectionModelImplOfTL()).new();
    }).prototype = MaterialTreeDropdownComponent.prototype;
    dart.addTypeTests(MaterialTreeDropdownComponent);
    MaterialTreeDropdownComponent.prototype[_is_MaterialTreeDropdownComponent_default] = true;
    dart.addTypeCaches(MaterialTreeDropdownComponent);
    MaterialTreeDropdownComponent[dart.implements] = () => [lifecycle_hooks.OnInit, focus_interface.Focusable];
    dart.setMethodSignature(MaterialTreeDropdownComponent, () => ({
      __proto__: dart.getMethods(MaterialTreeDropdownComponent.__proto__),
      open: dart.fnType(dart.void, []),
      close: dart.fnType(dart.void, []),
      toggle: dart.fnType(dart.void, []),
      ngOnInit: dart.fnType(dart.void, []),
      focus: dart.fnType(dart.void, []),
      [_maybeFocusFilterComponent]: dart.fnType(dart.legacy(async.Future), [])
    }));
    dart.setGetterSignature(MaterialTreeDropdownComponent, () => ({
      __proto__: dart.getGetters(MaterialTreeDropdownComponent.__proto__),
      visibleChange: dart.legacy(async.Stream$(dart.legacy(core.bool))),
      showFilterInsideButton: dart.legacy(core.bool),
      filterableOptions: dart.legacy(select.Filterable),
      expandAll: dart.legacy(core.bool),
      placeholder: dart.legacy(core.String),
      popupPositions: dart.legacy(core.List),
      [_defaultPopupPositions]: dart.legacy(core.List),
      visible: dart.legacy(core.bool)
    }));
    dart.setSetterSignature(MaterialTreeDropdownComponent, () => ({
      __proto__: dart.getSetters(MaterialTreeDropdownComponent.__proto__),
      expandAll: dart.legacy(core.bool),
      componentRenderer: dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic])),
      factoryRenderer: dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(T)])),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      options: dart.legacy(core.Object),
      selection: dart.legacy(core.Object),
      placeholder: dart.legacy(core.String),
      popupPositions: dart.legacy(core.List$(dart.legacy(alignment.RelativePosition))),
      visible: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(MaterialTreeDropdownComponent, L8);
    dart.setFieldSignature(MaterialTreeDropdownComponent, () => ({
      __proto__: dart.getFields(MaterialTreeDropdownComponent.__proto__),
      [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService)),
      [_expandAll$]: dart.fieldType(dart.legacy(core.bool)),
      [_placeholder]: dart.fieldType(dart.legacy(core.String)),
      [_visible]: dart.fieldType(dart.legacy(core.bool)),
      [_customPopupPositions]: dart.fieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition)))),
      materialTreeFilterComponent: dart.fieldType(dart.legacy(material_tree_filter.MaterialTreeFilterComponent)),
      [_visibleStream]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
      popupClassName: dart.finalFieldType(dart.legacy(core.String)),
      showFilterInsidePopup: dart.fieldType(dart.legacy(core.bool)),
      shouldExpandAllWhenFiltered: dart.fieldType(dart.legacy(core.bool)),
      allowParentSingleSelection: dart.fieldType(dart.legacy(core.bool)),
      allowDeselectInHierarchy: dart.fieldType(dart.legacy(core.bool)),
      labelRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.dynamic]))),
      optimizeForDropdown: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return MaterialTreeDropdownComponent;
  });
  material_tree_dropdown.MaterialTreeDropdownComponent = material_tree_dropdown.MaterialTreeDropdownComponent$();
  dart.defineLazy(material_tree_dropdown.MaterialTreeDropdownComponent, {
    /*material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsOffset*/get _popupPositionsOffset() {
      return C4 || CT.C4;
    },
    /*material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsInline*/get _popupPositionsInline() {
      return C18 || CT.C18;
    },
    /*material_tree_dropdown.MaterialTreeDropdownComponent._DEFAULT_PLACEHOLDER*/get _DEFAULT_PLACEHOLDER() {
      return "Select";
    }
  }, true);
  dart.addTypeTests(material_tree_dropdown.MaterialTreeDropdownComponent, _is_MaterialTreeDropdownComponent_default);
  dart.trackLibraries("packages/angular_components/src/material_tree/group/material_tree_group", {
    "package:angular_components/src/material_tree/material_tree_node.dart": material_tree_node,
    "package:angular_components/src/material_tree/material_tree_root.dart": material_tree_root,
    "package:angular_components/src/material_tree/material_tree_expand_state.dart": material_tree_expand_state,
    "package:angular_components/src/material_tree/group/material_tree_group_flat.dart": material_tree_group_flat,
    "package:angular_components/src/material_tree/material_tree_impl.dart": material_tree_impl,
    "package:angular_components/src/material_tree/material_tree_rendering_options.dart": material_tree_rendering_options,
    "package:angular_components/src/material_tree/group/material_tree_group.dart": material_tree_group,
    "package:angular_components/src/material_tree/material_tree_filter.dart": material_tree_filter,
    "package:angular_components/src/material_tree/material_tree_dropdown.dart": material_tree_dropdown
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../material_tree_node.dart","../material_tree_root.dart","../material_tree_expand_state.dart","material_tree_group_flat.dart","../material_tree_impl.dart","../material_tree_rendering_options.dart","material_tree_group.dart","../material_tree_filter.dart","../material_tree_dropdown.dart"],"names":[],"mappings":"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","file":"material_tree_group.unsound.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_node: material_tree_node,
    src__material_tree__material_tree_root: material_tree_root,
    src__material_tree__material_tree_expand_state: material_tree_expand_state,
    src__material_tree__group__material_tree_group_flat: material_tree_group_flat,
    src__material_tree__material_tree_impl: material_tree_impl,
    src__material_tree__material_tree_rendering_options: material_tree_rendering_options,
    src__material_tree__group__material_tree_group: material_tree_group,
    src__material_tree__material_tree_filter: material_tree_filter,
    src__material_tree__material_tree_dropdown: material_tree_dropdown
  };
}));

//# sourceMappingURL=material_tree_group.unsound.ddc.js.map
