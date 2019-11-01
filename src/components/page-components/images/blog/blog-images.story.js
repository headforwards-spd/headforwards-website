import React from 'react';
import { object, text } from '@storybook/addon-knobs';
import generateImage from '../../../../lib/generate-image';
import BlogImages from './blog-images.component';

const faker = require('faker');

export default function BlogImagesStory() {
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

    return <BlogImages {...blogProps} />;
}

function generateArticle() {
    return {
        title: faker.lorem.words(),
        image: generateImage(),
        link: `/${faker.lorem.slug()}`,
    };
}
