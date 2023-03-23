import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UsersEntity{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({length: 100})
  name: string;
}