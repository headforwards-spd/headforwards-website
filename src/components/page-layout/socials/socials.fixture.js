import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import FixtureLayout from '../FixtureLayout';
import Socials from './socials.component';

export default {
    'Social Media Icons': SocialMediaIcons,
};

const defaultValue = {
    twitterURL: faker.internet.url(),
    facebookURL: faker.internet.url(),
    instagramURL: faker.internet.url(),
    linkedInURL: faker.internet.url(),
    youtubeURL: faker.internet.url(),
    isFooter: faker.random.boolean(),
};

function SocialMediaIcons() {
    const [props] = useValue('Props', { defaultValue });

    return (
        <FixtureLayout>
            <Socials {...props} activeClass={'menu-open'} />
        </FixtureLayout>
    );
}
