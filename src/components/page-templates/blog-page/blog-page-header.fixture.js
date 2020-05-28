import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import FixtureLayout from '../../page-layout/FixtureLayout';
import BlogPageHeader from './blog-page-header.component';

function BlogPageHeaderFixture() {
    return (
        <FixtureLayout>
            <BlogPageHeader />
        </FixtureLayout>
    );
}
