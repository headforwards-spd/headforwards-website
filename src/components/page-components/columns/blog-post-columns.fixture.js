import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import generateImage from '../../../lib/generate-image';
import FixtureLayout from '../../page-layout/FixtureLayout';
import BlogPostColumns from './blog-post-columns/blog-post-columns.component';

export default {
    'Blog Posts Component': Component,
};

const defaultValue = {
    title: faker.lorem.words(),
    articles: [generateArticle(), generateArticle()],
};

function Component() {
    const [props] = useValue('Props', { defaultValue });

    return (
        <FixtureLayout>
            <BlogPostColumns {...props} />
        </FixtureLayout>
    );
}

function generateArticle() {
    return {
        id: faker.random.uuid(),
        image: generateImage(),
        title: faker.lorem.words(),
        link: `/${faker.lorem.slug()}`,
        linkText: faker.lorem.words(),
    };
}
