import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersService {
  getHelloWorld(): string {
    return 'Hello World!!!';
  }
}
