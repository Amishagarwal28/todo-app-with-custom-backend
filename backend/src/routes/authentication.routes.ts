import { Router } from "express";
import { ToDoController  } from "../controllers/todo.controller";
import { AuthenticationController  } from "../controllers/authentication.controller";

const authRouter=Router();

//@Post
authRouter.post("/create",AuthenticationController.createJwt); 

//@Get
authRouter.get("/decode",AuthenticationController.decodeJwt); 

export{authRouter};