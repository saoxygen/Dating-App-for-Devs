import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {

    private profiles = [
        {
            id: randomUUID(),
            name: "Kopano Sekonyela",
            description: "Handsome Developer"
        },
        {
            id: randomUUID(),
            name: "Seithat Sekonyela",
            description: "Sister"
        },
        {
            id: randomUUID(),
            name: "Kairo Sekonyela",
            description: "Brother"
        }
    ];

    findAll() {
        return this.profiles;
    }

    findOne(id: string) {
        return this.profiles.find((profile) => profile.id === id);
    }

    create(createProfileDto: CreateProfileDto) {
        const newProfile = {
            id: randomUUID(),
            ...createProfileDto
        }
        this.profiles.push(newProfile);
        return newProfile;
    }

    update(id: string, updateProfileDto: UpdateProfileDto) {
        const profileMatch = this.profiles.find((profile) => profile.id === id)

        if (!profileMatch) {
            return {};
        }

        profileMatch.name = updateProfileDto.name;
        profileMatch.description = updateProfileDto.description;
        return this.profiles.find((profile) => profile.id === id);
    }

    delete(id: string) :void {
        const profileIndex = this.profiles.findIndex((profile) => profile.id === id)

        if (profileIndex !== -1) {
            this.profiles.splice(profileIndex, 1); // remove the object in this array position
        }

    }
}
