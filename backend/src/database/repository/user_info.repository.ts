import { EntityRepository, Repository,getCustomRepository } from "typeorm";
import { UserInfoEntity } from "../entity/user_info.entity";
import { Request,Response } from "express";
import { UserRepository } from "./user.repository";

@EntityRepository(UserInfoEntity)//name of the entity
export class UserInfoRepository extends Repository<UserInfoEntity>{
    async addUserInfo(req:Request,res:Response){
        //when we are taking data back from user column name should be same
        let{user_email,user_phonenumber,user_address}=req.body;
        //we need to save this thing on the basis of particular user
        let userRepository=getCustomRepository(UserRepository);
        //i will find the entire entity from the user email
        let user=await userRepository.findOne({user_email:user_email});

        if(user!==undefined){

            let userInfoEntity=new UserInfoEntity();
            userInfoEntity.user=user;
            userInfoEntity.user_phonenumber=user_phonenumber;
            userInfoEntity.user_address=user_address;

            await userInfoEntity.save().then((data:any)=>{
                if(data!==undefined)
                {
                  return res.send({
                      code:200,
                      message:data
                  });
                }
            }).catch((error:any)=>{
                return res.send({
                    code:404,
                    message:error
                })
            })
        }
    }
}