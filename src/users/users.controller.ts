import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: String) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Put(':id')
  update(@Param('id') id: String, @Body() user: {}) {
    return { id, user };
  }

  @Delete(':id')
  delete(@Param('id') id: String) {
    return { id };
  }
}
