import React from 'react';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import generateImage from '../../../../lib/generate-image';
import BlogPostColumns from './blog-post-columns.component';

const faker = require('faker');

export default {
    decorators: [withKnobs],
    title: 'Page Components/Blog Post Columns',
};

export function Component() {
    const groupId = 'blog-group';

    const headerLabel = 'Header';
    const defaultHeader = faker.lorem.words();

    const title = text(headerLabel, defaultHeader, groupId);
    const articles = [
        object('Left Article', generateArticle(), groupId),
        object('Right Article', generateArticle(), groupId),
    ];

    const blogProps = {
        title,
        articles,
    };

    return <BlogPostColumns {...blogProps} />;
}

function generateArticle() {
    return {
        image: generateImage(),
        title: faker.lorem.words(),
        link: `/${faker.lorem.slug()}`,
        linkText: faker.lorem.words(),
    };
}
