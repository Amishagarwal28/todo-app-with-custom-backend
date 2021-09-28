// To parse this JSON data, do
//
//     final todo = todoFromJson(jsonString);

import 'dart:convert';

Todo todoFromJson(String str) => Todo.fromJson(json.decode(str));

String todoToJson(Todo data) => json.encode(data.toJson());

class Todo {
  int code;
    bool received;
    List<TodoData> todos;
    Todo(
        this.code,
        this.received,
        this.todos,
    );

    factory Todo.fromJson(Map<String, dynamic> json) => Todo(
        json["code"],
        json["received"],
        List<TodoData>.from(json["todos"].map((x) => TodoData.fromJson(x))),
    );

    Map<String, dynamic> toJson() => {
        "code": code,
        "received": received,
        "todos": List<dynamic>.from(todos.map((x) => x.toJson())),
    };
}

class TodoData {
    int? todoId;//? means todo_id is optional and brackets too
    String todoTitle;
    String todoDescription;

    TodoData(
        this.todoTitle,
        this.todoDescription,
        [this.todoId]
    );

    factory TodoData.fromJson(Map<String, dynamic> json) => TodoData(
        json["todo_title"],
        json["todo_description"],
        json["todo_id"],
    );

    Map<String, dynamic> toJson() => {
        "todo_title": todoTitle,
        "todo_description": todoDescription,
    };
}
