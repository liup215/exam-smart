// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'simple_html.dart';
export 'simple_html.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref1;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref2;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref3;
import 'package:angular_components/simple_html/simple_html.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'simple_html.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;
import 'package:angular/src/di/errors.dart' as import11;
import '../utils/browser/dom_service/dom_service.dart' as import12;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import13;
import 'dart:core';

final List<dynamic> styles$SimpleHtmlComponent = [import0.styles];

class ViewSimpleHtmlComponent0 extends import1.ComponentView<import2.SimpleHtmlComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewSimpleHtmlComponent0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('simple-html');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/simple_html/simple_html.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    final _el_0 = import8.appendSpan(doc, parentRenderNode);
    this.addShimE(_el_0);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$SimpleHtmlComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _SimpleHtmlComponentNgFactory = ComponentFactory<import2.SimpleHtmlComponent>('simple-html', viewFactory_SimpleHtmlComponentHost0);
ComponentFactory<import2.SimpleHtmlComponent> get SimpleHtmlComponentNgFactory {
  return _SimpleHtmlComponentNgFactory;
}

ComponentFactory<import2.SimpleHtmlComponent> createSimpleHtmlComponentFactory() {
  return ComponentFactory('simple-html', viewFactory_SimpleHtmlComponentHost0);
}

final List<dynamic> styles$SimpleHtmlComponentHost = const [];

class _ViewSimpleHtmlComponentHost0 extends import10.HostView<import2.SimpleHtmlComponent> {
  @override
  void build() {
    this.componentView = ViewSimpleHtmlComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import7.isDevMode
        ? import11.debugInjectorWrap(import2.SimpleHtmlComponent, () {
            return import2.SimpleHtmlComponent(this.injectorGet(import12.DomService, this.parentIndex), _el_0, this.injectorGetOptional(const import13.OpaqueToken<List<Uri>>('simpleHtmlUriWhitelist'), this.parentIndex), null);
          })
        : import2.SimpleHtmlComponent(this.injectorGet(import12.DomService, this.parentIndex), _el_0, this.injectorGetOptional(const import13.OpaqueToken<List<Uri>>('simpleHtmlUriWhitelist'), this.parentIndex), null));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import10.HostView<import2.SimpleHtmlComponent> viewFactory_SimpleHtmlComponentHost0() {
  return _ViewSimpleHtmlComponentHost0();
}

final List<dynamic> styles$SimpleHtmlBlockComponent = [import0.styles];

class ViewSimpleHtmlBlockComponent0 extends import1.ComponentView<import2.SimpleHtmlBlockComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewSimpleHtmlBlockComponent0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('simple-html-block');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/simple_html/simple_html.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    final _el_0 = import8.appendDiv(doc, parentRenderNode);
    this.addShimC(_el_0);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$SimpleHtmlBlockComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _SimpleHtmlBlockComponentNgFactory = ComponentFactory<import2.SimpleHtmlBlockComponent>('simple-html-block', viewFactory_SimpleHtmlBlockComponentHost0);
ComponentFactory<import2.SimpleHtmlBlockComponent> get SimpleHtmlBlockComponentNgFactory {
  return _SimpleHtmlBlockComponentNgFactory;
}

ComponentFactory<import2.SimpleHtmlBlockComponent> createSimpleHtmlBlockComponentFactory() {
  return ComponentFactory('simple-html-block', viewFactory_SimpleHtmlBlockComponentHost0);
}

final List<dynamic> styles$SimpleHtmlBlockComponentHost = const [];

class _ViewSimpleHtmlBlockComponentHost0 extends import10.HostView<import2.SimpleHtmlBlockComponent> {
  @override
  void build() {
    this.componentView = ViewSimpleHtmlBlockComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import7.isDevMode
        ? import11.debugInjectorWrap(import2.SimpleHtmlBlockComponent, () {
            return import2.SimpleHtmlBlockComponent(this.injectorGet(import12.DomService, this.parentIndex), _el_0, this.injectorGetOptional(const import13.OpaqueToken<List<Uri>>('simpleHtmlUriWhitelist'), this.parentIndex), null);
          })
        : import2.SimpleHtmlBlockComponent(this.injectorGet(import12.DomService, this.parentIndex), _el_0, this.injectorGetOptional(const import13.OpaqueToken<List<Uri>>('simpleHtmlUriWhitelist'), this.parentIndex), null));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      this.componentView.markAsCheckOnce();
    }
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import10.HostView<import2.SimpleHtmlBlockComponent> viewFactory_SimpleHtmlBlockComponentHost0() {
  return _ViewSimpleHtmlBlockComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SimpleHtmlComponent, createSimpleHtmlComponentFactory());
  _ngRef.registerComponent(SimpleHtmlBlockComponent, createSimpleHtmlBlockComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
