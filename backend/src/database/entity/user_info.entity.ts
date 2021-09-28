import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,OneToOne,JoinColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity("user_info")
export class UserInfoEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    info_id!:string;

    @Column({
        nullable:false,
    })user_phonenumber!:string;

    @Column({
        nullable:false,
    })user_address!:string;
@OneToOne(()=>UserEntity,(user)=>user.user_info)//connecting foreign key
user!:UserEntity;//foreign key
}