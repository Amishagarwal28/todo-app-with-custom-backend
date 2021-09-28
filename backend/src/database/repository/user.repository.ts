import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../entity/user.entity";
import { Request,Response } from "express";

@EntityRepository(UserEntity)//name of the entity
export class UserRepository extends Repository<UserEntity>{
    async addUsers(req:Request,res:Response){
        //when we are taking data back from user column name should be same
        let{user_email,user_password,}=req.body;
        //once we got data then we should save them
        //createQueryBuilder->we can write any query under postgres
       try
      {
        let addedUser=await this.createQueryBuilder("users").insert().values({
            user_email,
            user_password,
        }).execute();
        if(addedUser!==undefined)
        {
            res.send({
                code:201,//created
                isCreated:true,
                message:"User is saved",
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
}