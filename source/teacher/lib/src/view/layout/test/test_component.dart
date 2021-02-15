import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_router/src/lifecycle.dart';
import 'package:teacher/src/router/router.dart';

@Component(
  selector: 'test',
  templateUrl: 'test_component.html',
  styleUrls: ['test_component.css']
)
class TestComponent implements CanActivate{
  Router router;

  TestComponent(this.router);

  @override
  Future<bool> canActivate(RouterState _, RouterState __) async {
       // Maybe this page isn't ready yet for production, so always reject.
       window.alert('用户未登录');
       await _goToLogin();
       window.alert('haha');
       return false;
  }

  Future<NavigationResult> _goToLogin() => router.navigateByUrl(login.toUrl());

}