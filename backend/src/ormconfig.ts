import {join} from "path";
import {ConnectionOptions} from "typeorm";
import dotenv from "dotenv";
import { ToDoEntity } from "./database/entity/todo.entity";
import { UserEntity } from "./database/entity/user.entity";
import { UserInfoEntity } from "./database/entity/user_info.entity";

dotenv.config();
const ConnectionOptions : ConnectionOptions={
type:"postgres",//database type
host:"localhost",
port:5432,
username:"postgres",
password:"Amish931@",
database:"postgres",
synchronize:!process.env.DB_NO_LOGS,//synchronizing our database with the entity
logging:!process.env.DB_NO_LOGS,
entities:[ToDoEntity,UserEntity,UserInfoEntity],//import also
dropSchema:false,//drop all the tables while you were
migrationsRun:true,
logger:"debug",
migrations:[join(__dirname,"src/migration/**/*.ts")],
};

export =ConnectionOptions;