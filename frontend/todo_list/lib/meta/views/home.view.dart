import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo_list/core/models/todo.model.dart';
import 'package:todo_list/core/notifiers/todo.notifier.dart';
class HomeView extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(title: Text("ToDo_List"),),
      body: Container(
        child: Consumer<TodoNotifier>(
          builder:(context,notifier,_){
            return FutureBuilder(
              future: notifier.readTodo(),
              //snapshot =the entire data
              builder: (context,snapshot){
                 if(snapshot.connectionState==ConnectionState.waiting)
                 {
                    return Center(child: CircularProgressIndicator(),);
                 }else{
                   var _snapshot=snapshot.data as List<dynamic>;
                   return ListView.builder(itemCount: _snapshot.length,
                     itemBuilder: (context,index){
                       TodoData todoData=_snapshot[index];
                       return ListTile(
                         title: Text(todoData.todoTitle),
                         subtitle: Text(todoData.todoDescription),
                       );
                     });
                 }
              });
          }
        ),
      ),
    );
  }
}