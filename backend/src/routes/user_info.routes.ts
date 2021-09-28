import { Router } from "express";
import { UserInfoController } from "../controllers/user_info.controller";

const UserInfoRouter=Router();

//@post
UserInfoRouter.post("/add",UserInfoController.addUserInfo);

export {UserInfoRouter};