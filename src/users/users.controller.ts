import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query('role') role?: 'Dev' | 'Ops' | 'Admin') {
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

  @Patch(':id')
  update(@Param('id') id: String, @Body() user: {}) {
    return { id, ...user };
  }

  @Delete(':id')
  delete(@Param('id') id: String) {
    return { id };
  }
}
