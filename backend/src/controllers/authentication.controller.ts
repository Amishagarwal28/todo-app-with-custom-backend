import { Request,Response } from "express";
import  jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";
import  dotenv  from "dotenv";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../database/repository/user.repository";

dotenv.config();
export class AuthenticationController{
static validateEmail(user_email:string) : boolean
{
    let isValidated:boolean=EmailValidator.validate(user_email);
    return isValidated;
}
static decodeJwt(req:Request,res:Response){
    let token=req.headers.authorization as string;
    let jwt_key=process.env.JWT_SECRET_KEY as string;
    //1 token required,2 jwt_key,3 callback
    jwt.verify(
       token,jwt_key,async(error:any,data:any)=>{
        if(error)
        {
            console.log(error);
         return res.send({
             code:404,
             message:error,
        });
    }
    else{
        return res.send({
            code:200,
            message:data,});
    }
    });
}
    static async createJwt(req:Request,res:Response)
    {
        let {user_email,user_password}=req.body;
        let jwt_key=process.env.JWT_SECRET_KEY as string;
        if(!AuthenticationController.validateEmail(user_email))
           {
               return res.send({
                   code:404,
                   message:"Invalid Email",
               })
           }
           else{
               //payload is a small data for authentication like email which is unique to fetch or load data everywhere
               //without secret key we cannot able to decode our jwt
               jwt.sign({user_email:user_email},//payload
                jwt_key,//secret key
                {
                    expiresIn:"2h",//! Optional=>time after which jwt expires
                },
                //callback
                async(error:any,jwtData:any)=>{
                   if(error)
                   {
                       console.log(error);
                    return res.send({
                        code:404,
                        message:"something went wrong",
                   });
                }
                else{
            let userRepository=getCustomRepository(UserRepository);//saving users in database
            await userRepository.addUsers(req,res);
                    return res.send({
                        code:200,
                        message:jwtData,
                   });
                }
           }
      );
    }
}
}