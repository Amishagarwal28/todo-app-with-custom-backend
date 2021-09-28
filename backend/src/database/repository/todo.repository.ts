import { EntityRepository, Repository } from "typeorm";
import { ToDoEntity } from "../entity/todo.entity";
import { Request,Response } from "express";

@EntityRepository(ToDoEntity)//name of the entity
export class TodoRepository extends Repository<ToDoEntity>{
    async createToDo(req:Request,res:Response){
        //when we are taking data back from user column name should be same
        let{todo_title,todo_description}=req.body;
        //once we got data then we should save them
        //createQueryBuilder->we can write any query under postgres
       try
      {
        let addedToDo=await this.createQueryBuilder("todos").insert().values({
            todo_title,
            todo_description,
        }).execute();
        if(addedToDo!==undefined)
        {
            res.send({
                code:201,//created
                isCreated:true,
                message:"ToDo is Created",
         });
        }
      }
        catch(e){
            console.log(e);
            res.send({
                code:401,
                isCreated:false,
                message:"something went wrong",
        })
    }
}
async fetchToDos(req:Request,res:Response){
    //go under my table todos and get all data
try {
    let todos=await this.createQueryBuilder("todos").getMany();
if(todos!==undefined)
{
    res.send({
        code:200,
        received:true,
        todos
    })
}
} catch (error) {
    res.send({
        code:404,
        received:false,
        message:"Something went wrong"
    })
}
}
async fetchToDosByIds(req:Request,res:Response){
    let { todo_id }=req.params;
try {
    //we are taking data from the table on basis of id.:is refering to dynamic value that we have written in the {} brackets
    let todo= await this.createQueryBuilder("todos").select().where("todos.todo_id = :todo_id",{ todo_id }).getOne();
if(todo!==undefined)
{
    res.send({
        code:200,
        received:true,
        todo
    })
}
} catch (error) {
    console.log(error)
    res.send({
        code:404,
        received:false,
        message:"Something went wrong"
    })
}
}
async deleteToDo(req:Request,res:Response){
   let {todo_id} =req.params;
   
   await this.createQueryBuilder("todos").delete()
   .from(ToDoEntity).where("todos.todo_id=:todo_id",{todo_id}
   ).execute().then((data:any)=>{
       if(data!==undefined){
           if(data.affected>0){
           return res.send({
               code:200,
               isDeleted:true,
           });}else{
            return res.send({
                code:401,
                isDeleted:false,
            });
           }
       }
   }).catch((error:any)=>{
       console.log(error);
    return res.send({
        code:200,
        isDeleted:true,
    });
   });
}

async updateToDo(req:Request,res:Response)
{
let {todo_id}=req.params;
let{todo_title,todo_description}=req.body;
await this.createQueryBuilder("todos").update("ToDoEntity").set({
    todo_title,
    todo_description,
}).where("todos.todo_id=:todo_id",{todo_id}).execute().then((data:any)=>{
    if(data!==undefined){
        if(data.affected>0){
        return res.send({
            code:200,
            updated:true,
        });}else{
         return res.send({
             code:401,
             updated:false,
         });
        }
    }
}).catch((error:any)=>{
    console.log(error);
 return res.send({
     code:200,
     updated:true,
 });
});
}
}