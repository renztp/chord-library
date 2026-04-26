import { Controller } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
