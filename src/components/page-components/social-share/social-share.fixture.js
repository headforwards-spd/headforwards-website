import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import FixtureLayout from '../../page-layout/FixtureLayout';
import SocialShare from './social-share.component';

export default {
    Share: ShareFixture,
    'Share with title': ShareWithTitleFixture,
};

const defaultTitle = faker.company.bs();
const defaultUrl = 'https://www.headforwards.com/can-agile-work-in-local-authorities/';

function ShareFixture() {
    const [props] = useValue('Props', {
        defaultValue: {
            url: defaultUrl,
        },
    });

    return (
        <FixtureLayout>
            <SocialShare {...props} />
        </FixtureLayout>
    );
}

function ShareWithTitleFixture() {
    const [props] = useValue('Props', {
        defaultValue: {
            title: defaultTitle,
            url: defaultUrl,
        },
    });

    return (
        <FixtureLayout>
            <SocialShare {...props} />
        </FixtureLayout>
    );
}
