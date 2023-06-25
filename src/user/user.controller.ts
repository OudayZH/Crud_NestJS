import { Controller, Get, Post, Body,Delete,Param,Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
   }
   
}
