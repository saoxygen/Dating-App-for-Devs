import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
// import DTOS
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
// import services
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {

    constructor(private profilesServices: ProfilesService) {}

    // GET /profiles

    @Get()
    findAll() {
        return this.profilesServices.findAll();
    }
    // GET /profiles/:id

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.profilesServices.findOne(id);
    }

    // POST /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {

        return {
            name: createProfileDto.name,
            description: createProfileDto.description
        };
    }
    // PUT /profiles/:id
    @Put(':id')
    update(@Body() updateProfileDto: UpdateProfileDto, 
    @Param('id') id: string) {
        return {
            id: id,
            name: updateProfileDto.name,
            description: updateProfileDto.description
        };
    }

    // DELETE /profiles/:id
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {

    }
}
