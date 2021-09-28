import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:todo_list/core/api/todo.api.dart';
import 'package:todo_list/core/models/todo.model.dart';

class TodoNotifier extends ChangeNotifier{
  final TodoApi _todoApi=new TodoApi();

  readTodo()async{
    try{
     var todos= await _todoApi.readTodo();//reading todo and assiging all the data to todos
     var todoData =Todo.fromJson(jsonDecode(todos));//taking todos data and decoding it in the model Todo
     var todoCode=todoData.code;
     var istodosReceived=todoData.received;
     var todo=todoData.todos;

     if(istodosReceived)
     {
       switch(todoCode){
         case 200:
         {
           return todo;
         }
       }
     }
    }catch(error){
      print(error);
    }
}
}