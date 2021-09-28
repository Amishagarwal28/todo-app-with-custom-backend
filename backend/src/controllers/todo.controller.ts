//controllers are used to connect repository and routes
import {Request,Response} from "express";
import { getCustomRepository } from "typeorm";
import { TodoRepository } from "../database/repository/todo.repository";

export class ToDoController{
    static async createToDo(req:Request,res:Response){
        //i need to get instance of ToDo Respository with getcustom
        let todoRepository=getCustomRepository(TodoRepository);
        await todoRepository.createToDo(req,res);
    }

    static async fetchToDos(req:Request,res:Response){
        //i need to get instance of ToDo Respository with getcustom
        let todoRepository=getCustomRepository(TodoRepository);
        await todoRepository.fetchToDos(req,res);
    }

    static async fetchToDosByIds(req:Request,res:Response){
        //i need to get instance of ToDo Respository with getcustom
        let todoRepository=getCustomRepository(TodoRepository);
        await todoRepository.fetchToDosByIds(req,res);
    }

    static async deleteToDo(req:Request,res:Response){
        let todoRepository=getCustomRepository(TodoRepository);
        await todoRepository.deleteToDo(req,res);

    }
    static async updateToDo(req:Request,res:Response){
        let todoRepository=getCustomRepository(TodoRepository);
        await todoRepository.updateToDo(req,res);}
}