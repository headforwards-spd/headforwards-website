import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import Author from './author.component';

const defaultProfilePic = `https://loremflickr.com/300/300/headshot`;
const defaultName = `${faker.name.firstName()} ${faker.name.lastName()}`;
const defaultJobTitle = faker.name.jobTitle();
const defaultBio = faker.lorem.paragraph();

export default () => {
    const [profilePic] = useValue('Profile Pic', { defaultValue: defaultProfilePic });
    const [name] = useValue('Name', { defaultValue: defaultName });
    const [jobTitle] = useValue('Job Title', { defaultValue: defaultJobTitle });
    const [bio] = useValue('Bio', { defaultValue: defaultBio });

    const props = {
        bio,
        name,
        profilePic,
        jobTitle,
    };

    return <Author {...props} />;
};
