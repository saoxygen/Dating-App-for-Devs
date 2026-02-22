import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import type { CreateProfileDto } from './dto/create-profile.dto';

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

}
