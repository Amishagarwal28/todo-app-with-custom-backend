import express from "express";
import "reflect-metadata";
import { todoRouter } from "./routes/todo.routes";
import { authRouter } from "./routes/authentication.routes";
import { UserInfoRouter } from "./routes/user_info.routes";
import { createConnection,ConnectionOptions } from "typeorm";
import  config  from "./ormconfig";

createConnection(config as ConnectionOptions).then(async (connection)=>{
if(connection.isConnected)
console.log("postgres  is connnected....")
    const app =express()
const port=8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("port",port);
app.use("/todo",todoRouter);
app.use("/auth",authRouter);
app.use("/info",UserInfoRouter);

app.listen(app.get("port"),()=>
{
    console.log(`Server is listening to ${app.get("port")}`);
});
}).catch((error: any)=>{
    console.log(error);
    
});


