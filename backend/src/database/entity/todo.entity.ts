import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("todos")//entity name as well as table name
export class ToDoEntity extends BaseEntity{
   @PrimaryGeneratedColumn()
   //name for primary column
   todo_id ! :string;
   @Column({
       nullable!:false,
   })
   todo_title! :string;
   @Column({
    nullable!:false,
})
todo_description! :string;
}

