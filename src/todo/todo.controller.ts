import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('/:userId')
  create(
    @Body() createTodoDto: CreateTodoDto,
    @Param('userId') userId: number,
  ) {
    return this.todoService.create(createTodoDto, Number(userId));
  }

  @Get('/findAllInCompleted/:userId')
  findAllTodoByUserNotCompleted(@Param('userId') userId: number) {
    return this.todoService.findAllTodoByUserNotCompleted(Number(userId));
  }

  @Get('/findAllCompleted/:userId')
  findAllTodoByUserCompleted(@Param('userId') userId: number) {
    return this.todoService.findAllTodoByUserCompleted(Number(userId));
  }

  @Patch(':todoId')
  update(@Param('todoId') todoId: number) {
    return this.todoService.update(todoId);
  }

  @Delete(':todoId')
  remove(@Param('todoId') todoId: number) {
    return this.todoService.remove(todoId);
  }
}
