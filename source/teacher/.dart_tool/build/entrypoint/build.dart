// Ensure that the build script itself is not opted in to null safety,
// instead of taking the language version from the current package.
//
// @dart=2.9
//
// ignore_for_file: directives_ordering

import 'package:build_runner_core/build_runner_core.dart' as _i1;
import 'package:angular_components/builder.dart' as _i2;
import 'package:sass_builder/sass_builder.dart' as _i3;
import 'package:build/build.dart' as _i4;
import 'package:angular/src/build.dart' as _i5;
import 'package:build_test/builder.dart' as _i6;
import 'package:build_config/build_config.dart' as _i7;
import 'package:source_gen/builder.dart' as _i8;
import 'package:build_modules/builders.dart' as _i9;
import 'package:build_web_compilers/builders.dart' as _i10;
import 'dart:isolate' as _i11;
import 'package:build_runner/build_runner.dart' as _i12;
import 'dart:io' as _i13;

final _builders = <_i1.BuilderApplication>[
  _i1.apply(r'angular_components:scss_builder', [_i2.scssBuilder],
      _i1.toNoneByDefault(),
      hideOutput: true,
      appliesBuilders: const [r'sass_builder:sass_source_cleanup']),
  _i1.apply(r'sass_builder:sass_builder', [_i3.sassBuilder],
      _i1.toDependentsOf(r'sass_builder'),
      hideOutput: true,
      defaultReleaseOptions: _i4.BuilderOptions({'outputStyle': 'compressed'}),
      appliesBuilders: const [r'sass_builder:sass_source_cleanup']),
  _i1.apply(
      r'angular:angular',
      [_i5.templatePlaceholder, _i5.templateCompiler, _i5.stylesheetCompiler],
      _i1.toDependentsOf(r'angular'),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: const [
        r'angular:placeholder_cleanup',
        r'angular:component_source_cleanup'
      ]),
  _i1.apply(
      r'build_test:test_bootstrap',
      [_i6.debugIndexBuilder, _i6.debugTestBuilder, _i6.testBootstrapBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i7.InputSet(include: [r'test/**'])),
  _i1.apply(r'source_gen:combining_builder', [_i8.combiningBuilder],
      _i1.toNoneByDefault(),
      hideOutput: false, appliesBuilders: const [r'source_gen:part_cleanup']),
  _i1.apply(r'build_modules:module_library', [_i9.moduleLibraryBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: const [r'build_modules:module_cleanup']),
  _i1.apply(
      r'build_web_compilers:dart2js_modules',
      [
        _i10.dart2jsMetaModuleBuilder,
        _i10.dart2jsMetaModuleCleanBuilder,
        _i10.dart2jsModuleBuilder
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: const [r'build_modules:module_cleanup']),
  _i1.apply(
      r'build_web_compilers:ddc_modules',
      [
        _i10.ddcMetaModuleBuilder,
        _i10.ddcMetaModuleCleanBuilder,
        _i10.ddcModuleBuilder
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: const [r'build_modules:module_cleanup']),
  _i1.apply(
      r'build_web_compilers:ddc',
      [
        _i10.ddcKernelBuilderUnsound,
        _i10.ddcBuilderUnsound,
        _i10.ddcKernelBuilderSound,
        _i10.ddcBuilderSound
      ],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: const [
        r'build_web_compilers:ddc_modules',
        r'build_web_compilers:dart2js_modules',
        r'build_web_compilers:dart_source_cleanup'
      ]),
  _i1.apply(
      r'build_web_compilers:sdk_js',
      [
        _i10.sdkJsCompileUnsound,
        _i10.sdkJsCompileSound,
        _i10.sdkJsCopyRequirejs
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true),
  _i1.apply(r'build_web_compilers:entrypoint', [_i10.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i7.InputSet(include: [
        r'web/**',
        r'test/**.dart.browser_test.dart',
        r'example/**',
        r'benchmark/**'
      ], exclude: [
        r'test/**.node_test.dart',
        r'test/**.vm_test.dart'
      ]),
      defaultOptions: _i4.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultDevOptions: _i4.BuilderOptions({
        'dart2js_args': ['--enable-asserts']
      }),
      defaultReleaseOptions: _i4.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: const [
        r'build_web_compilers:dart2js_archive_extractor'
      ]),
  _i1.applyPostProcess(r'source_gen:part_cleanup', _i8.partCleanup),
  _i1.applyPostProcess(r'angular:placeholder_cleanup', _i5.placeholderCleanup),
  _i1.applyPostProcess(
      r'angular:component_source_cleanup', _i5.componentSourceCleanup,
      defaultGenerateFor: const _i7.InputSet(include: [r'lib/**']),
      defaultReleaseOptions: _i4.BuilderOptions({'enabled': true})),
  _i1.applyPostProcess(
      r'sass_builder:sass_source_cleanup', _i3.sassSourceCleanup,
      defaultReleaseOptions: _i4.BuilderOptions({'enabled': true})),
  _i1.applyPostProcess(r'build_modules:module_cleanup', _i9.moduleCleanup),
  _i1.applyPostProcess(r'build_web_compilers:dart2js_archive_extractor',
      _i10.dart2jsArchiveExtractor,
      defaultReleaseOptions: _i4.BuilderOptions({'filter_outputs': true})),
  _i1.applyPostProcess(
      r'build_web_compilers:dart_source_cleanup', _i10.dartSourceCleanup,
      defaultReleaseOptions: _i4.BuilderOptions({'enabled': true}))
];
void main(List<String> args, [_i11.SendPort sendPort]) async {
  var result = await _i12.run(args, _builders);
  sendPort?.send(result);
  _i13.exitCode = result;
}
