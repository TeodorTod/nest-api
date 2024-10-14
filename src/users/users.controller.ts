import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersServive: UsersService) {

    }

    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersServive.findAll(role);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersServive.findOne(+id);
    }

    @Post()
    create(@Body() user: {
        name: string;
        email: string;
        role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    }) {
        return this.usersServive.create(user)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: {
        name?: string;
        email?: string;
        role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    }) {
        return this.usersServive.update(+id, userUpdate)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersServive.delete(+id)
    }
}
