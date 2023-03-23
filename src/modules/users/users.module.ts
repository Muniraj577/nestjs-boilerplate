import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "../../entity/users.entity";
import { UsersController } from "../../controllers/users/users.controller";
import { UsersService } from "../../services/users/users.service";

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
