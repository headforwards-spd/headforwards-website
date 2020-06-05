import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import FixtureLayout from '../../page-layout/FixtureLayout';
import BlogPageHeader from './blog-page-header.component';

export default {
    'Blog Page Header': Component,
};

const defaultValue = {
    title: faker.company.catchPhrase(),
};

function Component() {
    const [props] = useValue('Props', { defaultValue });

    return (
        <FixtureLayout>
            <BlogPageHeader {...props} />
        </FixtureLayout>
    );
}
