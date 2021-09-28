import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,OneToOne,JoinColumn } from "typeorm";
import { UserInfoEntity } from "./user_info.entity";

@Entity("users")
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    user_id!:string;
    @Column(
        {
            nullable:false,
        }
    )user_email!:string;
    
    @Column({nullable:false
    })user_password!:string;

   @OneToOne(()=>UserInfoEntity,(user_info)=>user_info.user)//connecting foreign key
   @JoinColumn()
   user_info!:UserInfoEntity;//foreign key

}