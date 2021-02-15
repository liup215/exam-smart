// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:teacher/src/router/router.dart';

@Component(
  selector: 'my-app',
  directives: [
    routerDirectives,
  ],
  templateUrl: 'app_component.html',
  styleUrls: [
    'app_component.css',
    'package:angular_components/app_layout/layout.scss.css',
  ],
)
class AppComponent {
  bool customWidth = false;
  bool end = false;
  List<RouteDefinition> routes = routers;
}

