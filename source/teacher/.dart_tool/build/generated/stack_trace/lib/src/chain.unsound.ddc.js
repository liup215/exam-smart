define(['dart_sdk', 'packages/path/path'], (function load__packages__stack_trace__src__chain(dart_sdk, packages__path__path) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const path = packages__path__path.path;
  var trace$ = Object.create(dart.library);
  var vm_trace = Object.create(dart.library);
  var frame$ = Object.create(dart.library);
  var unparsed_frame = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var lazy_trace = Object.create(dart.library);
  var chain$ = Object.create(dart.library);
  var stack_zone_specification = Object.create(dart.library);
  var lazy_chain = Object.create(dart.library);
  var stack_trace = Object.create(dart.library);
  var $split = dartx.split;
  var $skip = dartx.skip;
  var $startsWith = dartx.startsWith;
  var $skipWhile = dartx.skipWhile;
  var $map = dartx.map;
  var $where = dartx.where;
  var $trim = dartx.trim;
  var $isNotEmpty = dartx.isNotEmpty;
  var $isEmpty = dartx.isEmpty;
  var $contains = dartx.contains;
  var $replaceAll = dartx.replaceAll;
  var $length = dartx.length;
  var $take = dartx.take;
  var $toList = dartx.toList;
  var $last = dartx.last;
  var $endsWith = dartx.endsWith;
  var $add = dartx.add;
  var $reversed = dartx.reversed;
  var $first = dartx.first;
  var $removeAt = dartx.removeAt;
  var $fold = dartx.fold;
  var $padRight = dartx.padRight;
  var $join = dartx.join;
  var $toString = dartx.toString;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $_get = dartx._get;
  var $allMatches = dartx.allMatches;
  var $replaceFirst = dartx.replaceFirst;
  var $addAll = dartx.addAll;
  var $single = dartx.single;
  var $expand = dartx.expand;
  var $indexOf = dartx.indexOf;
  var $substring = dartx.substring;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  var FrameL = () => (FrameL = dart.constFn(dart.legacy(frame$.Frame)))();
  var StringLToFrameL = () => (StringLToFrameL = dart.constFn(dart.fnType(FrameL(), [StringL()])))();
  var JSArrayOfFrameL = () => (JSArrayOfFrameL = dart.constFn(_interceptors.JSArray$(FrameL())))();
  var ListOfFrameL = () => (ListOfFrameL = dart.constFn(core.List$(FrameL())))();
  var TraceL = () => (TraceL = dart.constFn(dart.legacy(trace$.Trace)))();
  var VoidToTraceL = () => (VoidToTraceL = dart.constFn(dart.fnType(TraceL(), [])))();
  var ChainL = () => (ChainL = dart.constFn(dart.legacy(chain$.Chain)))();
  var FormatExceptionL = () => (FormatExceptionL = dart.constFn(dart.legacy(core.FormatException)))();
  var FrameLToboolL = () => (FrameLToboolL = dart.constFn(dart.fnType(boolL(), [FrameL()])))();
  var UnparsedFrameL = () => (UnparsedFrameL = dart.constFn(dart.legacy(unparsed_frame.UnparsedFrame)))();
  var FrameLToFrameL = () => (FrameLToFrameL = dart.constFn(dart.fnType(FrameL(), [FrameL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var FrameLTointL = () => (FrameLTointL = dart.constFn(dart.fnType(intL(), [FrameL()])))();
  var TAndTToT = () => (TAndTToT = dart.constFn(dart.gFnType(T => [T, [T, T]], T => [core.num])))();
  var FrameLToStringL = () => (FrameLToStringL = dart.constFn(dart.fnType(StringL(), [FrameL()])))();
  var MatchL = () => (MatchL = dart.constFn(dart.legacy(core.Match)))();
  var MatchLToStringL = () => (MatchLToStringL = dart.constFn(dart.fnType(StringL(), [MatchL()])))();
  var VoidToFrameL = () => (VoidToFrameL = dart.constFn(dart.fnType(FrameL(), [])))();
  var StringLAndStringLToFrameL = () => (StringLAndStringLToFrameL = dart.constFn(dart.fnType(FrameL(), [StringL(), StringL()])))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListOfTraceL = () => (ListOfTraceL = dart.constFn(core.List$(TraceL())))();
  var StackZoneSpecificationL = () => (StackZoneSpecificationL = dart.constFn(dart.legacy(stack_zone_specification.StackZoneSpecification)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var StackTraceL = () => (StackTraceL = dart.constFn(dart.legacy(core.StackTrace)))();
  var ObjectLAndStackTraceLToNull = () => (ObjectLAndStackTraceLToNull = dart.constFn(dart.fnType(core.Null, [ObjectL(), StackTraceL()])))();
  var LinkedMapOfObjectL$ObjectL = () => (LinkedMapOfObjectL$ObjectL = dart.constFn(_js_helper.LinkedMap$(ObjectL(), ObjectL())))();
  var LinkedMapOfObjectL$boolL = () => (LinkedMapOfObjectL$boolL = dart.constFn(_js_helper.LinkedMap$(ObjectL(), boolL())))();
  var JSArrayOfTraceL = () => (JSArrayOfTraceL = dart.constFn(_interceptors.JSArray$(TraceL())))();
  var VoidToChainL = () => (VoidToChainL = dart.constFn(dart.fnType(ChainL(), [])))();
  var StringLToTraceL = () => (StringLToTraceL = dart.constFn(dart.fnType(TraceL(), [StringL()])))();
  var TraceLToTraceL = () => (TraceLToTraceL = dart.constFn(dart.fnType(TraceL(), [TraceL()])))();
  var TraceLToboolL = () => (TraceLToboolL = dart.constFn(dart.fnType(boolL(), [TraceL()])))();
  var ListLOfFrameL = () => (ListLOfFrameL = dart.constFn(dart.legacy(ListOfFrameL())))();
  var TraceLToListLOfFrameL = () => (TraceLToListLOfFrameL = dart.constFn(dart.fnType(ListLOfFrameL(), [TraceL()])))();
  var TraceLTointL = () => (TraceLTointL = dart.constFn(dart.fnType(intL(), [TraceL()])))();
  var TraceLToStringL = () => (TraceLToStringL = dart.constFn(dart.fnType(StringL(), [TraceL()])))();
  var _NodeL = () => (_NodeL = dart.constFn(dart.legacy(stack_zone_specification._Node)))();
  var ExpandoOf_NodeL = () => (ExpandoOf_NodeL = dart.constFn(core.Expando$(_NodeL())))();
  const CT = Object.create(null);
  var L4 = "package:stack_trace/src/lazy_trace.dart";
  var L0 = "package:stack_trace/src/trace.dart";
  var L1 = "package:stack_trace/src/vm_trace.dart";
  var L2 = "package:stack_trace/src/frame.dart";
  var L6 = "package:stack_trace/src/stack_zone_specification.dart";
  var L5 = "package:stack_trace/src/chain.dart";
  var L3 = "package:stack_trace/src/unparsed_frame.dart";
  var L7 = "package:stack_trace/src/lazy_chain.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(math.max, TAndTToT());
    }
  }, false);
  var C0;
  var frames$ = dart.privateName(trace$, "Trace.frames");
  var original$ = dart.privateName(trace$, "Trace.original");
  trace$.Trace = class Trace extends core.Object {
    get frames() {
      return this[frames$];
    }
    set frames(value) {
      super.frames = value;
    }
    get original() {
      return this[original$];
    }
    set original(value) {
      super.original = value;
    }
    static format(stackTrace, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : true;
      let trace = trace$.Trace.from(stackTrace);
      if (dart.test(terse)) trace = trace.terse;
      return dart.toString(trace);
    }
    static current(level = 0) {
      if (dart.notNull(level) < 0) {
        dart.throw(new core.ArgumentError.new("Argument [level] must be greater than or equal " + "to 0."));
      }
      let trace = trace$.Trace.from(core.StackTrace.current);
      return new lazy_trace.LazyTrace.new(dart.fn(() => new trace$.Trace.new(trace.frames[$skip](dart.notNull(level) + (dart.test(utils.inJS) ? 2 : 1)), {original: dart.toString(trace.original)}), VoidToTraceL()));
    }
    static from(trace) {
      if (trace == null) {
        dart.throw(new core.ArgumentError.new("Cannot create a Trace from null."));
      }
      if (TraceL().is(trace)) return trace;
      if (ChainL().is(trace)) return trace.toTrace();
      return new lazy_trace.LazyTrace.new(dart.fn(() => trace$.Trace.parse(dart.toString(trace)), VoidToTraceL()));
    }
    static parse(trace) {
      try {
        if (trace[$isEmpty]) return new trace$.Trace.new(JSArrayOfFrameL().of([]));
        if (trace[$contains](trace$._v8Trace)) return new trace$.Trace.parseV8(trace);
        if (trace[$contains]("\tat ")) return new trace$.Trace.parseJSCore(trace);
        if (trace[$contains](trace$._firefoxSafariTrace) || trace[$contains](trace$._firefoxEvalTrace)) {
          return new trace$.Trace.parseFirefox(trace);
        }
        if (trace[$contains](utils.chainGap)) return chain$.Chain.parse(trace).toTrace();
        if (trace[$contains](trace$._friendlyTrace)) {
          return new trace$.Trace.parseFriendly(trace);
        }
        return new trace$.Trace.parseVM(trace);
      } catch (e) {
        let error = dart.getThrown(e);
        if (FormatExceptionL().is(error)) {
          dart.throw(new core.FormatException.new(dart.str(error.message) + "\nStack trace:\n" + dart.str(trace)));
        } else
          throw e;
      }
    }
    static _parseVM(trace) {
      let lines = trace[$trim]()[$replaceAll](utils.vmChainGap, "")[$split]("\n")[$where](dart.fn(line => line[$isNotEmpty], StringLToboolL()));
      if (dart.test(lines[$isEmpty])) {
        return JSArrayOfFrameL().of([]);
      }
      let frames = lines[$take](dart.notNull(lines[$length]) - 1)[$map](FrameL(), dart.fn(line => frame$.Frame.parseVM(line), StringLToFrameL()))[$toList]();
      if (!lines[$last][$endsWith](".da")) {
        frames[$add](frame$.Frame.parseVM(lines[$last]));
      }
      return frames;
    }
    get vmTrace() {
      return new vm_trace.VMTrace.new(this.frames);
    }
    get terse() {
      return this.foldFrames(dart.fn(_ => false, FrameLToboolL()), {terse: true});
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      if (dart.test(terse)) {
        let oldPredicate = predicate;
        predicate = dart.fn(frame => {
          if (dart.test(oldPredicate(frame))) return true;
          if (dart.test(frame.isCore)) return true;
          if (frame.package === "stack_trace") return true;
          if (!frame.member[$contains]("<async>")) return false;
          return frame.line == null;
        }, FrameLToboolL());
      }
      let newFrames = JSArrayOfFrameL().of([]);
      for (let frame of this.frames[$reversed]) {
        if (UnparsedFrameL().is(frame) || !dart.test(predicate(frame))) {
          newFrames[$add](frame);
        } else if (dart.test(newFrames[$isEmpty]) || !dart.test(predicate(newFrames[$last]))) {
          newFrames[$add](new frame$.Frame.new(frame.uri, frame.line, frame.column, frame.member));
        }
      }
      if (dart.test(terse)) {
        newFrames = newFrames[$map](FrameL(), dart.fn(frame => {
          if (UnparsedFrameL().is(frame) || !dart.test(predicate(frame))) return frame;
          let library = frame.library[$replaceAll](trace$._terseRegExp, "");
          return new frame$.Frame.new(core.Uri.parse(library), null, null, frame.member);
        }, FrameLToFrameL()))[$toList]();
        if (dart.notNull(newFrames[$length]) > 1 && dart.test(predicate(newFrames[$first]))) {
          newFrames[$removeAt](0);
        }
      }
      return new trace$.Trace.new(newFrames[$reversed], {original: dart.toString(this.original)});
    }
    toString() {
      let longest = this.frames[$map](intL(), dart.fn(frame => frame.location.length, FrameLTointL()))[$fold](intL(), 0, dart.gbind(C0 || CT.C0, intL()));
      return this.frames[$map](StringL(), dart.fn(frame => {
        if (UnparsedFrameL().is(frame)) return dart.str(frame) + "\n";
        return frame.location[$padRight](longest) + "  " + dart.str(frame.member) + "\n";
      }, FrameLToStringL()))[$join]();
    }
  };
  (trace$.Trace.parseVM = function(trace) {
    trace$.Trace.new.call(this, trace$.Trace._parseVM(trace), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseV8 = function(trace) {
    trace$.Trace.new.call(this, trace[$split]("\n")[$skip](1)[$skipWhile](dart.fn(line => !line[$startsWith](trace$._v8TraceLine), StringLToboolL()))[$map](FrameL(), dart.fn(line => frame$.Frame.parseV8(line), StringLToFrameL())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseJSCore = function(trace) {
    trace$.Trace.new.call(this, trace[$split]("\n")[$where](dart.fn(line => line !== "\tat ", StringLToboolL()))[$map](FrameL(), dart.fn(line => frame$.Frame.parseV8(line), StringLToFrameL())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseIE = function(trace) {
    trace$.Trace.parseV8.call(this, trace);
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseFirefox = function(trace) {
    trace$.Trace.new.call(this, trace[$trim]()[$split]("\n")[$where](dart.fn(line => line[$isNotEmpty] && line !== "[native code]", StringLToboolL()))[$map](FrameL(), dart.fn(line => frame$.Frame.parseFirefox(line), StringLToFrameL())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseSafari = function(trace) {
    trace$.Trace.parseFirefox.call(this, trace);
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseSafari6_1 = function(trace) {
    trace$.Trace.parseSafari.call(this, trace);
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseSafari6_0 = function(trace) {
    trace$.Trace.new.call(this, trace[$trim]()[$split]("\n")[$where](dart.fn(line => line !== "[native code]", StringLToboolL()))[$map](FrameL(), dart.fn(line => frame$.Frame.parseFirefox(line), StringLToFrameL())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseFriendly = function(trace) {
    trace$.Trace.new.call(this, trace[$isEmpty] ? JSArrayOfFrameL().of([]) : trace[$trim]()[$split]("\n")[$where](dart.fn(line => !line[$startsWith]("====="), StringLToboolL()))[$map](FrameL(), dart.fn(line => frame$.Frame.parseFriendly(line), StringLToFrameL())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.new = function(frames, opts) {
    let original = opts && 'original' in opts ? opts.original : null;
    this[frames$] = ListOfFrameL().unmodifiable(frames);
    this[original$] = new core._StringStackTrace.new(original);
    ;
  }).prototype = trace$.Trace.prototype;
  dart.addTypeTests(trace$.Trace);
  dart.addTypeCaches(trace$.Trace);
  trace$.Trace[dart.implements] = () => [core.StackTrace];
  dart.setMethodSignature(trace$.Trace, () => ({
    __proto__: dart.getMethods(trace$.Trace.__proto__),
    foldFrames: dart.fnType(dart.legacy(trace$.Trace), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(frame$.Frame)]))], {terse: dart.legacy(core.bool)}, {}),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(trace$.Trace, () => ({
    __proto__: dart.getGetters(trace$.Trace.__proto__),
    vmTrace: dart.legacy(core.StackTrace),
    terse: dart.legacy(trace$.Trace)
  }));
  dart.setLibraryUri(trace$.Trace, L0);
  dart.setFieldSignature(trace$.Trace, () => ({
    __proto__: dart.getFields(trace$.Trace.__proto__),
    frames: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(frame$.Frame)))),
    original: dart.finalFieldType(dart.legacy(core.StackTrace))
  }));
  dart.defineExtensionMethods(trace$.Trace, ['toString']);
  dart.defineLazy(trace$, {
    /*trace$._terseRegExp*/get _terseRegExp() {
      return core.RegExp.new("(-patch)?([/\\\\].*)?$");
    },
    /*trace$._v8Trace*/get _v8Trace() {
      return core.RegExp.new("\\n    ?at ");
    },
    /*trace$._v8TraceLine*/get _v8TraceLine() {
      return core.RegExp.new("    ?at ");
    },
    /*trace$._firefoxEvalTrace*/get _firefoxEvalTrace() {
      return core.RegExp.new("@\\S+ line \\d+ >.* (Function|eval):\\d+:\\d+");
    },
    /*trace$._firefoxSafariTrace*/get _firefoxSafariTrace() {
      return core.RegExp.new("^" + "(" + "([.0-9A-Za-z_$/<]|\\(.*\\))*" + "@" + ")?" + "[^\\s]*" + ":\\d*" + "$", {multiLine: true});
    },
    /*trace$._friendlyTrace*/get _friendlyTrace() {
      return core.RegExp.new("^[^\\s<][^\\s]*( \\d+(:\\d+)?)?[ \\t]+[^\\s]+$", {multiLine: true});
    }
  }, true);
  var frames$0 = dart.privateName(vm_trace, "VMTrace.frames");
  vm_trace.VMTrace = class VMTrace extends core.Object {
    get frames() {
      return this[frames$0];
    }
    set frames(value) {
      super.frames = value;
    }
    toString() {
      let i = 1;
      return this.frames[$map](StringL(), dart.fn(frame => {
        let t1, t1$, t1$0;
        let number = ("#" + dart.str((t1 = i, i = t1 + 1, t1)))[$padRight](8);
        let member = frame.member[$replaceAllMapped](core.RegExp.new("[^.]+\\.<async>"), dart.fn(match => dart.str(match._get(1)) + ".<" + dart.str(match._get(1)) + "_async_body>", MatchLToStringL()))[$replaceAll]("<fn>", "<anonymous closure>");
        let line = (t1$ = frame.line, t1$ == null ? 0 : t1$);
        let column = (t1$0 = frame.column, t1$0 == null ? 0 : t1$0);
        return number + member + " (" + dart.str(frame.uri) + ":" + dart.str(line) + ":" + dart.str(column) + ")\n";
      }, FrameLToStringL()))[$join]();
    }
  };
  (vm_trace.VMTrace.new = function(frames) {
    this[frames$0] = frames;
    ;
  }).prototype = vm_trace.VMTrace.prototype;
  dart.addTypeTests(vm_trace.VMTrace);
  dart.addTypeCaches(vm_trace.VMTrace);
  vm_trace.VMTrace[dart.implements] = () => [core.StackTrace];
  dart.setMethodSignature(vm_trace.VMTrace, () => ({
    __proto__: dart.getMethods(vm_trace.VMTrace.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(vm_trace.VMTrace, L1);
  dart.setFieldSignature(vm_trace.VMTrace, () => ({
    __proto__: dart.getFields(vm_trace.VMTrace.__proto__),
    frames: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(frame$.Frame))))
  }));
  dart.defineExtensionMethods(vm_trace.VMTrace, ['toString']);
  var uri$ = dart.privateName(frame$, "Frame.uri");
  var line$ = dart.privateName(frame$, "Frame.line");
  var column$ = dart.privateName(frame$, "Frame.column");
  var member$ = dart.privateName(frame$, "Frame.member");
  frame$.Frame = class Frame extends core.Object {
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    get member() {
      return this[member$];
    }
    set member(value) {
      super.member = value;
    }
    get isCore() {
      return this.uri.scheme === "dart";
    }
    get library() {
      if (this.uri.scheme === "data") return "data:...";
      return path.prettyUri(this.uri);
    }
    get package() {
      if (this.uri.scheme !== "package") return null;
      return this.uri.path[$split]("/")[$first];
    }
    get location() {
      if (this.line == null) return this.library;
      if (this.column == null) return dart.str(this.library) + " " + dart.str(this.line);
      return dart.str(this.library) + " " + dart.str(this.line) + ":" + dart.str(this.column);
    }
    static caller(level = 1) {
      if (dart.notNull(level) < 0) {
        dart.throw(new core.ArgumentError.new("Argument [level] must be greater than or equal " + "to 0."));
      }
      return trace$.Trace.current(dart.notNull(level) + 1).frames[$first];
    }
    static parseVM(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        if (frame === "...") {
          return new frame$.Frame.new(core._Uri.new(), null, null, "...");
        }
        let match = frame$._vmFrame.firstMatch(frame);
        if (match == null) return new unparsed_frame.UnparsedFrame.new(frame);
        let member = match._get(1)[$replaceAll](frame$._asyncBody, "<async>")[$replaceAll]("<anonymous closure>", "<fn>");
        let uri = match._get(2)[$startsWith]("<data:") ? core.Uri.dataFromString("") : core.Uri.parse(match._get(2));
        let lineAndColumn = match._get(3)[$split](":");
        let line = dart.notNull(lineAndColumn[$length]) > 1 ? core.int.parse(lineAndColumn[$_get](1)) : null;
        let column = dart.notNull(lineAndColumn[$length]) > 2 ? core.int.parse(lineAndColumn[$_get](2)) : null;
        return new frame$.Frame.new(uri, line, column, member);
      }, VoidToFrameL()));
    }
    static parseV8(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        let match = frame$._v8Frame.firstMatch(frame);
        if (match == null) return new unparsed_frame.UnparsedFrame.new(frame);
        function parseLocation(location, member) {
          let evalMatch = frame$._v8EvalLocation.firstMatch(location);
          while (evalMatch != null) {
            location = evalMatch._get(1);
            evalMatch = frame$._v8EvalLocation.firstMatch(location);
          }
          if (location === "native") {
            return new frame$.Frame.new(core.Uri.parse("native"), null, null, member);
          }
          let urlMatch = frame$._v8UrlLocation.firstMatch(location);
          if (urlMatch == null) return new unparsed_frame.UnparsedFrame.new(frame);
          let uri = frame$.Frame._uriOrPathToUri(urlMatch._get(1));
          let line = core.int.parse(urlMatch._get(2));
          let column = urlMatch._get(3) != null ? core.int.parse(urlMatch._get(3)) : null;
          return new frame$.Frame.new(uri, line, column, member);
        }
        dart.fn(parseLocation, StringLAndStringLToFrameL());
        if (match._get(2) != null) {
          return parseLocation(match._get(2), match._get(1)[$replaceAll]("<anonymous>", "<fn>")[$replaceAll]("Anonymous function", "<fn>")[$replaceAll]("(anonymous function)", "<fn>"));
        } else {
          return parseLocation(match._get(3), "<fn>");
        }
      }, VoidToFrameL()));
    }
    static parseJSCore(frame) {
      return frame$.Frame.parseV8(frame);
    }
    static parseIE(frame) {
      return frame$.Frame.parseV8(frame);
    }
    static _parseFirefoxEval(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        let match = frame$._firefoxEvalLocation.firstMatch(frame);
        if (match == null) return new unparsed_frame.UnparsedFrame.new(frame);
        let member = match._get(1)[$replaceAll]("/<", "");
        let uri = frame$.Frame._uriOrPathToUri(match._get(2));
        let line = core.int.parse(match._get(3));
        if (member[$isEmpty] || member === "anonymous") {
          member = "<fn>";
        }
        return new frame$.Frame.new(uri, line, null, member);
      }, VoidToFrameL()));
    }
    static parseFirefox(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        let match = frame$._firefoxSafariFrame.firstMatch(frame);
        if (match == null) return new unparsed_frame.UnparsedFrame.new(frame);
        if (match._get(3)[$contains](" line ")) {
          return frame$.Frame._parseFirefoxEval(frame);
        }
        let uri = frame$.Frame._uriOrPathToUri(match._get(3));
        let member = null;
        if (match._get(1) != null) {
          member = match._get(1);
          member = dart.notNull(member) + dart.notNull(ListOfStringL().filled("/"[$allMatches](match._get(2))[$length], ".<fn>")[$join]());
          if (member === "") member = "<fn>";
          member = member[$replaceFirst](frame$._initialDot, "");
        } else {
          member = "<fn>";
        }
        let line = match._get(4) === "" ? null : core.int.parse(match._get(4));
        let column = match._get(5) == null || match._get(5) === "" ? null : core.int.parse(match._get(5));
        return new frame$.Frame.new(uri, line, column, member);
      }, VoidToFrameL()));
    }
    static parseSafari6_0(frame) {
      return frame$.Frame.parseFirefox(frame);
    }
    static parseSafari6_1(frame) {
      return frame$.Frame.parseFirefox(frame);
    }
    static parseSafari(frame) {
      return frame$.Frame.parseFirefox(frame);
    }
    static parseFriendly(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        let match = frame$._friendlyFrame.firstMatch(frame);
        if (match == null) {
          dart.throw(new core.FormatException.new("Couldn't parse package:stack_trace stack trace line '" + dart.str(frame) + "'."));
        }
        let uri = match._get(1) === "data:..." ? core.Uri.dataFromString("") : core.Uri.parse(match._get(1));
        if (uri.scheme === "") {
          uri = path.toUri(path.absolute(path.fromUri(uri)));
        }
        let line = match._get(2) == null ? null : core.int.parse(match._get(2));
        let column = match._get(3) == null ? null : core.int.parse(match._get(3));
        return new frame$.Frame.new(uri, line, column, match._get(4));
      }, VoidToFrameL()));
    }
    static _uriOrPathToUri(uriOrPath) {
      if (uriOrPath[$contains](frame$.Frame._uriRegExp)) {
        return core.Uri.parse(uriOrPath);
      } else if (uriOrPath[$contains](frame$.Frame._windowsRegExp)) {
        return core._Uri.file(uriOrPath, {windows: true});
      } else if (uriOrPath[$startsWith]("/")) {
        return core._Uri.file(uriOrPath, {windows: false});
      }
      if (uriOrPath[$contains]("\\")) return path.windows.toUri(uriOrPath);
      return core.Uri.parse(uriOrPath);
    }
    static _catchFormatException(text, body) {
      try {
        return body();
      } catch (e) {
        let _ = dart.getThrown(e);
        if (FormatExceptionL().is(_)) {
          return new unparsed_frame.UnparsedFrame.new(text);
        } else
          throw e;
      }
    }
    toString() {
      return dart.str(this.location) + " in " + dart.str(this.member);
    }
  };
  (frame$.Frame.new = function(uri, line, column, member) {
    this[uri$] = uri;
    this[line$] = line;
    this[column$] = column;
    this[member$] = member;
    ;
  }).prototype = frame$.Frame.prototype;
  dart.addTypeTests(frame$.Frame);
  dart.addTypeCaches(frame$.Frame);
  dart.setMethodSignature(frame$.Frame, () => ({
    __proto__: dart.getMethods(frame$.Frame.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(frame$.Frame, () => ({
    __proto__: dart.getGetters(frame$.Frame.__proto__),
    isCore: dart.legacy(core.bool),
    library: dart.legacy(core.String),
    package: dart.legacy(core.String),
    location: dart.legacy(core.String)
  }));
  dart.setLibraryUri(frame$.Frame, L2);
  dart.setFieldSignature(frame$.Frame, () => ({
    __proto__: dart.getFields(frame$.Frame.__proto__),
    uri: dart.finalFieldType(dart.legacy(core.Uri)),
    line: dart.finalFieldType(dart.legacy(core.int)),
    column: dart.finalFieldType(dart.legacy(core.int)),
    member: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(frame$.Frame, ['toString']);
  dart.defineLazy(frame$.Frame, {
    /*frame$.Frame._uriRegExp*/get _uriRegExp() {
      return core.RegExp.new("^[a-zA-Z][-+.a-zA-Z\\d]*://");
    },
    /*frame$.Frame._windowsRegExp*/get _windowsRegExp() {
      return core.RegExp.new("^([a-zA-Z]:[\\\\/]|\\\\\\\\)");
    }
  }, true);
  dart.defineLazy(frame$, {
    /*frame$._vmFrame*/get _vmFrame() {
      return core.RegExp.new("^#\\d+\\s+(\\S.*) \\((.+?)((?::\\d+){0,2})\\)$");
    },
    /*frame$._v8Frame*/get _v8Frame() {
      return core.RegExp.new("^\\s*at (?:(\\S.*?)(?: \\[as [^\\]]+\\])? \\((.*)\\)|(.*))$");
    },
    /*frame$._v8UrlLocation*/get _v8UrlLocation() {
      return core.RegExp.new("^(.*?):(\\d+)(?::(\\d+))?$|native$");
    },
    /*frame$._v8EvalLocation*/get _v8EvalLocation() {
      return core.RegExp.new("^eval at (?:\\S.*?) \\((.*)\\)(?:, .*?:\\d+:\\d+)?$");
    },
    /*frame$._firefoxEvalLocation*/get _firefoxEvalLocation() {
      return core.RegExp.new("(\\S+)@(\\S+) line (\\d+) >.* (Function|eval):\\d+:\\d+");
    },
    /*frame$._firefoxSafariFrame*/get _firefoxSafariFrame() {
      return core.RegExp.new("^" + "(?:" + "([^@(/]*)" + "(?:\\(.*\\))?" + "((?:/[^/]*)*)" + "(?:\\(.*\\))?" + "@" + ")?" + "(.*?)" + ":" + "(\\d*)" + "(?::(\\d*))?" + "$");
    },
    /*frame$._friendlyFrame*/get _friendlyFrame() {
      return core.RegExp.new("^(\\S+)(?: (\\d+)(?::(\\d+))?)?\\s+([^\\d].*)$");
    },
    /*frame$._asyncBody*/get _asyncBody() {
      return core.RegExp.new("<(<anonymous closure>|[^>]+)_async_body>");
    },
    /*frame$._initialDot*/get _initialDot() {
      return core.RegExp.new("^\\.");
    }
  }, true);
  var uri = dart.privateName(unparsed_frame, "UnparsedFrame.uri");
  var line = dart.privateName(unparsed_frame, "UnparsedFrame.line");
  var column = dart.privateName(unparsed_frame, "UnparsedFrame.column");
  var isCore = dart.privateName(unparsed_frame, "UnparsedFrame.isCore");
  var library = dart.privateName(unparsed_frame, "UnparsedFrame.library");
  var package$ = dart.privateName(unparsed_frame, "UnparsedFrame.package");
  var location = dart.privateName(unparsed_frame, "UnparsedFrame.location");
  var member$0 = dart.privateName(unparsed_frame, "UnparsedFrame.member");
  unparsed_frame.UnparsedFrame = class UnparsedFrame extends core.Object {
    get uri() {
      return this[uri];
    }
    set uri(value) {
      super.uri = value;
    }
    get line() {
      return this[line];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column];
    }
    set column(value) {
      super.column = value;
    }
    get isCore() {
      return this[isCore];
    }
    set isCore(value) {
      super.isCore = value;
    }
    get library() {
      return this[library];
    }
    set library(value) {
      super.library = value;
    }
    get package() {
      return this[package$];
    }
    set package(value) {
      super.package = value;
    }
    get location() {
      return this[location];
    }
    set location(value) {
      super.location = value;
    }
    get member() {
      return this[member$0];
    }
    set member(value) {
      super.member = value;
    }
    toString() {
      return this.member;
    }
  };
  (unparsed_frame.UnparsedFrame.new = function(member) {
    this[uri] = core._Uri.new({path: "unparsed"});
    this[line] = null;
    this[column] = null;
    this[isCore] = false;
    this[library] = "unparsed";
    this[package$] = null;
    this[location] = "unparsed";
    this[member$0] = member;
    ;
  }).prototype = unparsed_frame.UnparsedFrame.prototype;
  dart.addTypeTests(unparsed_frame.UnparsedFrame);
  dart.addTypeCaches(unparsed_frame.UnparsedFrame);
  unparsed_frame.UnparsedFrame[dart.implements] = () => [frame$.Frame];
  dart.setMethodSignature(unparsed_frame.UnparsedFrame, () => ({
    __proto__: dart.getMethods(unparsed_frame.UnparsedFrame.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(unparsed_frame.UnparsedFrame, L3);
  dart.setFieldSignature(unparsed_frame.UnparsedFrame, () => ({
    __proto__: dart.getFields(unparsed_frame.UnparsedFrame.__proto__),
    uri: dart.finalFieldType(dart.legacy(core.Uri)),
    line: dart.finalFieldType(dart.legacy(core.int)),
    column: dart.finalFieldType(dart.legacy(core.int)),
    isCore: dart.finalFieldType(dart.legacy(core.bool)),
    library: dart.finalFieldType(dart.legacy(core.String)),
    package: dart.finalFieldType(dart.legacy(core.String)),
    location: dart.finalFieldType(dart.legacy(core.String)),
    member: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(unparsed_frame.UnparsedFrame, ['toString']);
  dart.defineLazy(utils, {
    /*utils.chainGap*/get chainGap() {
      return "===== asynchronous gap ===========================\n";
    },
    /*utils.vmChainGap*/get vmChainGap() {
      return core.RegExp.new("^<asynchronous suspension>\\n?$", {multiLine: true});
    },
    /*utils.inJS*/get inJS() {
      return intL().is(0.0);
    }
  }, true);
  var _inner = dart.privateName(lazy_trace, "_inner");
  var _thunk$ = dart.privateName(lazy_trace, "_thunk");
  var _trace = dart.privateName(lazy_trace, "_trace");
  lazy_trace.LazyTrace = class LazyTrace extends core.Object {
    get [_trace]() {
      let t2;
      t2 = this[_inner];
      return t2 == null ? this[_inner] = this[_thunk$]() : t2;
    }
    get frames() {
      return this[_trace].frames;
    }
    get original() {
      return this[_trace].original;
    }
    get vmTrace() {
      return this[_trace].vmTrace;
    }
    get terse() {
      return new lazy_trace.LazyTrace.new(dart.fn(() => this[_trace].terse, VoidToTraceL()));
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      return new lazy_trace.LazyTrace.new(dart.fn(() => this[_trace].foldFrames(predicate, {terse: terse}), VoidToTraceL()));
    }
    toString() {
      return dart.toString(this[_trace]);
    }
  };
  (lazy_trace.LazyTrace.new = function(_thunk) {
    this[_inner] = null;
    this[_thunk$] = _thunk;
    ;
  }).prototype = lazy_trace.LazyTrace.prototype;
  dart.addTypeTests(lazy_trace.LazyTrace);
  dart.addTypeCaches(lazy_trace.LazyTrace);
  lazy_trace.LazyTrace[dart.implements] = () => [trace$.Trace];
  dart.setMethodSignature(lazy_trace.LazyTrace, () => ({
    __proto__: dart.getMethods(lazy_trace.LazyTrace.__proto__),
    foldFrames: dart.fnType(dart.legacy(trace$.Trace), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(frame$.Frame)]))], {terse: dart.legacy(core.bool)}, {}),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(lazy_trace.LazyTrace, () => ({
    __proto__: dart.getGetters(lazy_trace.LazyTrace.__proto__),
    [_trace]: dart.legacy(trace$.Trace),
    frames: dart.legacy(core.List$(dart.legacy(frame$.Frame))),
    original: dart.legacy(core.StackTrace),
    vmTrace: dart.legacy(core.StackTrace),
    terse: dart.legacy(trace$.Trace)
  }));
  dart.setLibraryUri(lazy_trace.LazyTrace, L4);
  dart.setFieldSignature(lazy_trace.LazyTrace, () => ({
    __proto__: dart.getFields(lazy_trace.LazyTrace.__proto__),
    [_thunk$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(trace$.Trace), []))),
    [_inner]: dart.fieldType(dart.legacy(trace$.Trace))
  }));
  dart.defineExtensionMethods(lazy_trace.LazyTrace, ['toString']);
  var traces$ = dart.privateName(chain$, "Chain.traces");
  chain$.Chain = class Chain extends core.Object {
    get traces() {
      return this[traces$];
    }
    set traces(value) {
      super.traces = value;
    }
    static get _currentSpec() {
      return StackZoneSpecificationL().as(async.Zone.current._get(chain$._specKey));
    }
    static capture(T, callback, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let when = opts && 'when' in opts ? opts.when : true;
      let errorZone = opts && 'errorZone' in opts ? opts.errorZone : true;
      if (!dart.test(errorZone) && onError != null) {
        dart.throw(new core.ArgumentError.value(onError, "onError", "must be null if errorZone is false"));
      }
      if (!dart.test(when)) {
        let newOnError = null;
        if (onError != null) {
          newOnError = dart.fn((error, stackTrace) => {
            onError(error, stackTrace == null ? chain$.Chain.current() : chain$.Chain.forTrace(stackTrace));
          }, ObjectLAndStackTraceLToNull());
        }
        return async.runZoned(dart.legacy(T), callback, {onError: newOnError});
      }
      let spec = new stack_zone_specification.StackZoneSpecification.new(onError, {errorZone: errorZone});
      return async.runZoned(dart.legacy(T), dart.fn(() => {
        try {
          return callback();
        } catch (e) {
          let error = dart.getThrown(e);
          let stackTrace = dart.stackTrace(e);
          async.Zone.current.handleUncaughtError(error, stackTrace);
          return null;
        }
      }, dart.fnType(dart.legacy(T), [])), {zoneSpecification: spec.toSpec(), zoneValues: new (LinkedMapOfObjectL$ObjectL()).from([chain$._specKey, spec, stack_zone_specification.StackZoneSpecification.disableKey, false])});
    }
    static disable(T, callback, opts) {
      let when = opts && 'when' in opts ? opts.when : true;
      let zoneValues = dart.test(when) ? new (LinkedMapOfObjectL$boolL()).from([chain$._specKey, null, stack_zone_specification.StackZoneSpecification.disableKey, true]) : null;
      return async.runZoned(dart.legacy(T), callback, {zoneValues: zoneValues});
    }
    static track(futureOrStream) {
      return futureOrStream;
    }
    static current(level = 0) {
      if (chain$.Chain._currentSpec != null) return chain$.Chain._currentSpec.currentChain(dart.notNull(level) + 1);
      let chain = chain$.Chain.forTrace(core.StackTrace.current);
      return new lazy_chain.LazyChain.new(dart.fn(() => {
        let t3;
        let first = new trace$.Trace.new(chain.traces[$first].frames[$skip](dart.notNull(level) + (dart.test(utils.inJS) ? 2 : 1)), {original: dart.toString(chain.traces[$first].original)});
        return new chain$.Chain.new((t3 = JSArrayOfTraceL().of([first]), (() => {
          t3[$addAll](chain.traces[$skip](1));
          return t3;
        })()));
      }, VoidToChainL()));
    }
    static forTrace(trace) {
      if (ChainL().is(trace)) return trace;
      if (chain$.Chain._currentSpec != null) return chain$.Chain._currentSpec.chainFor(trace);
      if (TraceL().is(trace)) return new chain$.Chain.new(JSArrayOfTraceL().of([trace]));
      return new lazy_chain.LazyChain.new(dart.fn(() => chain$.Chain.parse(dart.toString(trace)), VoidToChainL()));
    }
    static parse(chain) {
      if (chain[$isEmpty]) return new chain$.Chain.new(JSArrayOfTraceL().of([]));
      if (chain[$contains](utils.vmChainGap)) {
        return new chain$.Chain.new(chain[$split](utils.vmChainGap)[$where](dart.fn(line => line[$isNotEmpty], StringLToboolL()))[$map](TraceL(), dart.fn(trace => new trace$.Trace.parseVM(trace), StringLToTraceL())));
      }
      if (!chain[$contains](utils.chainGap)) return new chain$.Chain.new(JSArrayOfTraceL().of([trace$.Trace.parse(chain)]));
      return new chain$.Chain.new(chain[$split](utils.chainGap)[$map](TraceL(), dart.fn(trace => new trace$.Trace.parseFriendly(trace), StringLToTraceL())));
    }
    get terse() {
      return this.foldFrames(dart.fn(_ => false, FrameLToboolL()), {terse: true});
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      let foldedTraces = this.traces[$map](TraceL(), dart.fn(trace => trace.foldFrames(predicate, {terse: terse}), TraceLToTraceL()));
      let nonEmptyTraces = foldedTraces[$where](dart.fn(trace => {
        if (dart.notNull(trace.frames[$length]) > 1) return true;
        if (dart.test(trace.frames[$isEmpty])) return false;
        if (!dart.test(terse)) return false;
        return trace.frames[$single].line != null;
      }, TraceLToboolL()));
      if (dart.test(nonEmptyTraces[$isEmpty]) && dart.test(foldedTraces[$isNotEmpty])) {
        return new chain$.Chain.new(JSArrayOfTraceL().of([foldedTraces[$last]]));
      }
      return new chain$.Chain.new(nonEmptyTraces);
    }
    toTrace() {
      return new trace$.Trace.new(this.traces[$expand](FrameL(), dart.fn(trace => trace.frames, TraceLToListLOfFrameL())));
    }
    toString() {
      let longest = this.traces[$map](intL(), dart.fn(trace => trace.frames[$map](intL(), dart.fn(frame => frame.location.length, FrameLTointL()))[$fold](intL(), 0, dart.gbind(C0 || CT.C0, intL())), TraceLTointL()))[$fold](intL(), 0, dart.gbind(C0 || CT.C0, intL()));
      return this.traces[$map](StringL(), dart.fn(trace => trace.frames[$map](StringL(), dart.fn(frame => frame.location[$padRight](longest) + "  " + dart.str(frame.member) + "\n", FrameLToStringL()))[$join](), TraceLToStringL()))[$join](utils.chainGap);
    }
  };
  (chain$.Chain.new = function(traces) {
    this[traces$] = ListOfTraceL().unmodifiable(traces);
    ;
  }).prototype = chain$.Chain.prototype;
  dart.addTypeTests(chain$.Chain);
  dart.addTypeCaches(chain$.Chain);
  chain$.Chain[dart.implements] = () => [core.StackTrace];
  dart.setMethodSignature(chain$.Chain, () => ({
    __proto__: dart.getMethods(chain$.Chain.__proto__),
    foldFrames: dart.fnType(dart.legacy(chain$.Chain), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(frame$.Frame)]))], {terse: dart.legacy(core.bool)}, {}),
    toTrace: dart.fnType(dart.legacy(trace$.Trace), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(chain$.Chain, () => ({
    __proto__: dart.getGetters(chain$.Chain.__proto__),
    terse: dart.legacy(chain$.Chain)
  }));
  dart.setLibraryUri(chain$.Chain, L5);
  dart.setFieldSignature(chain$.Chain, () => ({
    __proto__: dart.getFields(chain$.Chain.__proto__),
    traces: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(trace$.Trace))))
  }));
  dart.defineExtensionMethods(chain$.Chain, ['toString']);
  dart.defineLazy(chain$, {
    /*chain$._specKey*/get _specKey() {
      return new core.Object.new();
    }
  }, true);
  var _chains = dart.privateName(stack_zone_specification, "_chains");
  var _currentNode = dart.privateName(stack_zone_specification, "_currentNode");
  var _onError$ = dart.privateName(stack_zone_specification, "_onError");
  var _errorZone = dart.privateName(stack_zone_specification, "_errorZone");
  var _disabled = dart.privateName(stack_zone_specification, "_disabled");
  var _handleUncaughtError = dart.privateName(stack_zone_specification, "_handleUncaughtError");
  var _registerCallback = dart.privateName(stack_zone_specification, "_registerCallback");
  var _registerUnaryCallback = dart.privateName(stack_zone_specification, "_registerUnaryCallback");
  var _registerBinaryCallback = dart.privateName(stack_zone_specification, "_registerBinaryCallback");
  var _errorCallback = dart.privateName(stack_zone_specification, "_errorCallback");
  var _createNode = dart.privateName(stack_zone_specification, "_createNode");
  var _trimVMChain = dart.privateName(stack_zone_specification, "_trimVMChain");
  var _run = dart.privateName(stack_zone_specification, "_run");
  var _currentTrace = dart.privateName(stack_zone_specification, "_currentTrace");
  stack_zone_specification.StackZoneSpecification = class StackZoneSpecification extends core.Object {
    get [_disabled]() {
      return dart.equals(async.Zone.current._get(stack_zone_specification.StackZoneSpecification.disableKey), true);
    }
    toSpec() {
      return new async._ZoneSpecification.new({handleUncaughtError: dart.test(this[_errorZone]) ? dart.bind(this, _handleUncaughtError) : null, registerCallback: dart.bind(this, _registerCallback), registerUnaryCallback: dart.bind(this, _registerUnaryCallback), registerBinaryCallback: dart.bind(this, _registerBinaryCallback), errorCallback: dart.bind(this, _errorCallback)});
    }
    currentChain(level = 0) {
      return this[_createNode](dart.notNull(level) + 1).toChain();
    }
    chainFor(trace) {
      let t3;
      if (ChainL().is(trace)) return trace;
      trace == null ? trace = core.StackTrace.current : null;
      let previous = (t3 = this[_chains]._get(trace), t3 == null ? this[_currentNode] : t3);
      if (previous == null) {
        if (TraceL().is(trace)) return new chain$.Chain.new(JSArrayOfTraceL().of([trace]));
        return new lazy_chain.LazyChain.new(dart.fn(() => chain$.Chain.parse(dart.toString(trace)), VoidToChainL()));
      } else {
        if (!TraceL().is(trace)) {
          let original = trace;
          trace = new lazy_trace.LazyTrace.new(dart.fn(() => trace$.Trace.parse(this[_trimVMChain](original)), VoidToTraceL()));
        }
        return new stack_zone_specification._Node.new(trace, previous).toChain();
      }
    }
    [_registerCallback](R, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerCallback(dart.legacy(R), zone, f);
      let node = this[_createNode](1);
      return parent.registerCallback(dart.legacy(R), zone, dart.fn(() => this[_run](dart.legacy(R), f, node), dart.fnType(dart.legacy(R), [])));
    }
    [_registerUnaryCallback](R, T, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerUnaryCallback(dart.legacy(R), dart.legacy(T), zone, f);
      let node = this[_createNode](1);
      return parent.registerUnaryCallback(dart.legacy(R), dart.legacy(T), zone, dart.fn(arg => this[_run](dart.legacy(R), dart.fn(() => f(arg), dart.fnType(dart.legacy(R), [])), node), dart.fnType(dart.legacy(R), [dart.legacy(T)])));
    }
    [_registerBinaryCallback](R, T1, T2, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerBinaryCallback(dart.legacy(R), dart.legacy(T1), dart.legacy(T2), zone, f);
      let node = this[_createNode](1);
      return parent.registerBinaryCallback(dart.legacy(R), dart.legacy(T1), dart.legacy(T2), zone, dart.fn((arg1, arg2) => this[_run](dart.legacy(R), dart.fn(() => f(arg1, arg2), dart.fnType(dart.legacy(R), [])), node), dart.fnType(dart.legacy(R), [dart.legacy(T1), dart.legacy(T2)])));
    }
    [_handleUncaughtError](self, parent, zone, error, stackTrace) {
      if (dart.test(this[_disabled])) {
        parent.handleUncaughtError(zone, error, stackTrace);
        return;
      }
      let stackChain = this.chainFor(stackTrace);
      if (this[_onError$] == null) {
        parent.handleUncaughtError(zone, error, stackChain);
        return;
      }
      try {
        self.parent.runBinary(dart.void, dart.dynamic, ChainL(), this[_onError$], error, stackChain);
      } catch (e) {
        let newError = dart.getThrown(e);
        let newStackTrace = dart.stackTrace(e);
        if (core.identical(newError, error)) {
          parent.handleUncaughtError(zone, error, stackChain);
        } else {
          parent.handleUncaughtError(zone, newError, newStackTrace);
        }
      }
    }
    [_errorCallback](self, parent, zone, error, stackTrace) {
      let t4;
      if (dart.test(this[_disabled])) return parent.errorCallback(zone, error, stackTrace);
      if (stackTrace == null) {
        stackTrace = this[_createNode](2).toChain();
      } else {
        if (this[_chains]._get(stackTrace) == null) this[_chains]._set(stackTrace, this[_createNode](2));
      }
      let asyncError = parent.errorCallback(zone, error, stackTrace);
      t4 = asyncError;
      return t4 == null ? new async.AsyncError.new(error, stackTrace) : t4;
    }
    [_createNode](level = 0) {
      return new stack_zone_specification._Node.new(this[_currentTrace](dart.notNull(level) + 1), this[_currentNode]);
    }
    [_run](T, f, node) {
      let t6, t5;
      let previousNode = this[_currentNode];
      this[_currentNode] = node;
      try {
        return f();
      } catch (e$) {
        let e = dart.getThrown(e$);
        let stackTrace = dart.stackTrace(e$);
        t5 = this[_chains];
        t6 = stackTrace;
        t5._get(t6) == null ? t5._set(t6, node) : null;
        dart.rethrow(e$);
      } finally {
        this[_currentNode] = previousNode;
      }
    }
    [_currentTrace](level = null) {
      level == null ? level = 0 : null;
      let stackTrace = core.StackTrace.current;
      return new lazy_trace.LazyTrace.new(dart.fn(() => {
        let text = this[_trimVMChain](stackTrace);
        let trace = trace$.Trace.parse(text);
        return new trace$.Trace.new(trace.frames[$skip](dart.notNull(level) + (dart.test(utils.inJS) ? 2 : 1)), {original: text});
      }, VoidToTraceL()));
    }
    [_trimVMChain](trace) {
      let text = dart.toString(trace);
      let index = text[$indexOf](utils.vmChainGap);
      return index === -1 ? text : text[$substring](0, index);
    }
  };
  (stack_zone_specification.StackZoneSpecification.new = function(_onError, opts) {
    let errorZone = opts && 'errorZone' in opts ? opts.errorZone : true;
    this[_chains] = new (ExpandoOf_NodeL()).new("stack chains");
    this[_currentNode] = null;
    this[_onError$] = _onError;
    this[_errorZone] = errorZone;
    ;
  }).prototype = stack_zone_specification.StackZoneSpecification.prototype;
  dart.addTypeTests(stack_zone_specification.StackZoneSpecification);
  dart.addTypeCaches(stack_zone_specification.StackZoneSpecification);
  dart.setMethodSignature(stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getMethods(stack_zone_specification.StackZoneSpecification.__proto__),
    toSpec: dart.fnType(dart.legacy(async.ZoneSpecification), []),
    currentChain: dart.fnType(dart.legacy(chain$.Chain), [], [dart.legacy(core.int)]),
    chainFor: dart.fnType(dart.legacy(chain$.Chain), [dart.legacy(core.StackTrace)]),
    [_registerCallback]: dart.gFnType(R => [dart.legacy(dart.fnType(dart.legacy(R), [])), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(dart.fnType(dart.legacy(R), []))]]),
    [_registerUnaryCallback]: dart.gFnType((R, T) => [dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(T)])), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(T)]))]]),
    [_registerBinaryCallback]: dart.gFnType((R, T1, T2) => [dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(T1), dart.legacy(T2)])), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(T1), dart.legacy(T2)]))]]),
    [_handleUncaughtError]: dart.fnType(dart.void, [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.dynamic, dart.legacy(core.StackTrace)]),
    [_errorCallback]: dart.fnType(dart.legacy(async.AsyncError), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(core.Object), dart.legacy(core.StackTrace)]),
    [_createNode]: dart.fnType(dart.legacy(stack_zone_specification._Node), [], [dart.legacy(core.int)]),
    [_run]: dart.gFnType(T => [dart.legacy(T), [dart.legacy(dart.fnType(dart.legacy(T), [])), dart.legacy(stack_zone_specification._Node)]]),
    [_currentTrace]: dart.fnType(dart.legacy(trace$.Trace), [], [dart.legacy(core.int)]),
    [_trimVMChain]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.StackTrace)])
  }));
  dart.setGetterSignature(stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getGetters(stack_zone_specification.StackZoneSpecification.__proto__),
    [_disabled]: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(stack_zone_specification.StackZoneSpecification, L6);
  dart.setFieldSignature(stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getFields(stack_zone_specification.StackZoneSpecification.__proto__),
    [_chains]: dart.finalFieldType(dart.legacy(core.Expando$(dart.legacy(stack_zone_specification._Node)))),
    [_onError$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(chain$.Chain)]))),
    [_currentNode]: dart.fieldType(dart.legacy(stack_zone_specification._Node)),
    [_errorZone]: dart.finalFieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(stack_zone_specification.StackZoneSpecification, {
    /*stack_zone_specification.StackZoneSpecification.disableKey*/get disableKey() {
      return new core.Object.new();
    }
  }, true);
  stack_zone_specification._Node = class _Node extends core.Object {
    toChain() {
      let nodes = JSArrayOfTraceL().of([]);
      let node = this;
      while (node != null) {
        nodes[$add](node.trace);
        node = node.previous;
      }
      return new chain$.Chain.new(nodes);
    }
  };
  (stack_zone_specification._Node.new = function(trace, previous = null) {
    this.previous = previous;
    this.trace = trace$.Trace.from(trace);
    ;
  }).prototype = stack_zone_specification._Node.prototype;
  dart.addTypeTests(stack_zone_specification._Node);
  dart.addTypeCaches(stack_zone_specification._Node);
  dart.setMethodSignature(stack_zone_specification._Node, () => ({
    __proto__: dart.getMethods(stack_zone_specification._Node.__proto__),
    toChain: dart.fnType(dart.legacy(chain$.Chain), [])
  }));
  dart.setLibraryUri(stack_zone_specification._Node, L6);
  dart.setFieldSignature(stack_zone_specification._Node, () => ({
    __proto__: dart.getFields(stack_zone_specification._Node.__proto__),
    trace: dart.finalFieldType(dart.legacy(trace$.Trace)),
    previous: dart.finalFieldType(dart.legacy(stack_zone_specification._Node))
  }));
  var _inner$ = dart.privateName(lazy_chain, "_inner");
  var _thunk$0 = dart.privateName(lazy_chain, "_thunk");
  var _chain = dart.privateName(lazy_chain, "_chain");
  lazy_chain.LazyChain = class LazyChain extends core.Object {
    get [_chain]() {
      let t5;
      t5 = this[_inner$];
      return t5 == null ? this[_inner$] = this[_thunk$0]() : t5;
    }
    get traces() {
      return this[_chain].traces;
    }
    get terse() {
      return this[_chain].terse;
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      return new lazy_chain.LazyChain.new(dart.fn(() => this[_chain].foldFrames(predicate, {terse: terse}), VoidToChainL()));
    }
    toTrace() {
      return new lazy_trace.LazyTrace.new(dart.fn(() => this[_chain].toTrace(), VoidToTraceL()));
    }
    toString() {
      return dart.toString(this[_chain]);
    }
  };
  (lazy_chain.LazyChain.new = function(_thunk) {
    this[_inner$] = null;
    this[_thunk$0] = _thunk;
    ;
  }).prototype = lazy_chain.LazyChain.prototype;
  dart.addTypeTests(lazy_chain.LazyChain);
  dart.addTypeCaches(lazy_chain.LazyChain);
  lazy_chain.LazyChain[dart.implements] = () => [chain$.Chain];
  dart.setMethodSignature(lazy_chain.LazyChain, () => ({
    __proto__: dart.getMethods(lazy_chain.LazyChain.__proto__),
    foldFrames: dart.fnType(dart.legacy(chain$.Chain), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(frame$.Frame)]))], {terse: dart.legacy(core.bool)}, {}),
    toTrace: dart.fnType(dart.legacy(trace$.Trace), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(lazy_chain.LazyChain, () => ({
    __proto__: dart.getGetters(lazy_chain.LazyChain.__proto__),
    [_chain]: dart.legacy(chain$.Chain),
    traces: dart.legacy(core.List$(dart.legacy(trace$.Trace))),
    terse: dart.legacy(chain$.Chain)
  }));
  dart.setLibraryUri(lazy_chain.LazyChain, L7);
  dart.setFieldSignature(lazy_chain.LazyChain, () => ({
    __proto__: dart.getFields(lazy_chain.LazyChain.__proto__),
    [_thunk$0]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(chain$.Chain), []))),
    [_inner$]: dart.fieldType(dart.legacy(chain$.Chain))
  }));
  dart.defineExtensionMethods(lazy_chain.LazyChain, ['toString']);
  dart.trackLibraries("packages/stack_trace/src/chain", {
    "package:stack_trace/src/trace.dart": trace$,
    "package:stack_trace/src/vm_trace.dart": vm_trace,
    "package:stack_trace/src/frame.dart": frame$,
    "package:stack_trace/src/unparsed_frame.dart": unparsed_frame,
    "package:stack_trace/src/utils.dart": utils,
    "package:stack_trace/src/lazy_trace.dart": lazy_trace,
    "package:stack_trace/src/chain.dart": chain$,
    "package:stack_trace/src/stack_zone_specification.dart": stack_zone_specification,
    "package:stack_trace/src/lazy_chain.dart": lazy_chain,
    "package:stack_trace/stack_trace.dart": stack_trace
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["trace.dart","vm_trace.dart","frame.dart","unparsed_frame.dart","utils.dart","lazy_trace.dart","chain.dart","stack_zone_specification.dart","lazy_chain.dart"],"names":[],"mappings":"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","file":"chain.unsound.ddc.js"}');
  // Exports:
  return {
    src__trace: trace$,
    src__vm_trace: vm_trace,
    src__frame: frame$,
    src__unparsed_frame: unparsed_frame,
    src__utils: utils,
    src__lazy_trace: lazy_trace,
    src__chain: chain$,
    src__stack_zone_specification: stack_zone_specification,
    src__lazy_chain: lazy_chain,
    stack_trace: stack_trace
  };
}));

//# sourceMappingURL=chain.unsound.ddc.js.map
