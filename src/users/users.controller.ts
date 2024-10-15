import { Body, Controller, Delete, Get, Param, ParseIntPipe, ValidationPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersServive: UsersService) {

    }

    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersServive.findAll(role);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersServive.findOne(id);
    }

    @Post()
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersServive.create(createUserDto)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.usersServive.update(id, updateUserDto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersServive.delete(id)
    }
}
