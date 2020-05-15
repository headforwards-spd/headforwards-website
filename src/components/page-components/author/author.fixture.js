import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import FixtureLayout from '../../page-layout/FixtureLayout';
import Author from './author.component';

export default {
    'Author Component': Component,
};

const defaultValue = {
    bio: faker.lorem.paragraph(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    profilePic: faker.image.avatar(),
    jobTitle: faker.name.jobTitle(),
};

function Component() {
    const [props] = useValue('Props', { defaultValue });

    return (
        <FixtureLayout>
            <Author {...props} />
        </FixtureLayout>
    );
}
