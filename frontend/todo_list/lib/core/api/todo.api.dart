import 'dart:convert';

import 'package:http/http.dart'as http;
import 'package:todo_list/app/routes/api.routes.dart';
import 'package:todo_list/core/models/todo.model.dart';

class TodoApi{
  //creating instance of client
  final client =http.Client();
  final headers={
    'Content-type':'application/json',
    'Accept':'application/json',
    "Access-Control-Allow-Origin":"*",
  };
//once my model is ready we can add this into jsonEncode
  createTodo({required TodoData todoData})async{
    //url of rest api
    String subUrl="/todo/add";
    //Uri is a class for encoding and decoding the urls
    Uri url=Uri.parse(ApiRoutes.BaseUrl+subUrl);
    
    try{
      final response=await client.post(url,
    body: jsonEncode({todoData}),
    //common headers present under postman
    headers:headers,);
    
    final resStatusCode=response.statusCode;
    final resBody=response.body;
    if(resStatusCode==200){
      return resBody;
    }
    }catch(error){
      print(error);
    }
  }
  
  readTodo()async{
    //url of rest api
    String subUrl="/todo/";
    //Uri is a class for encoding and decoding the urls
    Uri url=Uri.parse(ApiRoutes.BaseUrl+subUrl);
    
    try{
      final response=await client.get(url,
    //common headers present under postman and we dont need body under get
    headers:headers,);
    
    final resStatusCode=response.statusCode;
    final resBody=response.body;
    if(resStatusCode==200){
      return resBody;
    }
    }catch(error){
      print(error);
    }
}
}


  