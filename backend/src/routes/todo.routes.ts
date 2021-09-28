import { Router } from "express";
import { ToDoController } from "../controllers/todo.controller";

const todoRouter=Router();

//! @get
todoRouter.get("/",ToDoController.fetchToDos);

//! @get
todoRouter.get("/detail/:todo_id",ToDoController.fetchToDosByIds);

//! @Post
todoRouter.post("/add",ToDoController.createToDo);

//@delete
todoRouter.delete("/delete/:todo_id",ToDoController.deleteToDo);

//@put
todoRouter.put("/update/:todo_id",ToDoController.updateToDo);

export{todoRouter};