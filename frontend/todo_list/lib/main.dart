import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo_list/core/notifiers/todo.notifier.dart';
import 'package:todo_list/meta/views/home.view.dart';

void main() {
  runApp(Core());
}

class Core extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(child: Lava(),
      create: (_)=>TodoNotifier());
  }
}

class Lava extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomeView(),
    );
  }
}