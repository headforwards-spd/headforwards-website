import { object, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import generateImage from '../../../../lib/generate-image';
import ArticleColumns from './article-columns.component';

const faker = require('faker');

export default {
    decorators: [withKnobs],
    title: 'Page Components/Article Columns',
};

const groupId = 'article-group';

const titleLabel = 'Header';
const titleValue = faker.lorem.words;

const textValue = faker.lorem.paragraph;

const linkValue = () => `/${faker.lorem.slug()}`;

export const TwoColumns = () => {
    const props = {
        title: titleValue(),
        articles: [generateArticle(), generateArticle()],
    };

    return <ArticleColumns {...props} />;
};

export const ThreeColumns = () => {
    const props = {
        title: titleValue(),
        articles: [generateArticle(), generateArticle(), generateArticle()],
    };

    return <ArticleColumns {...props} />;
};

export const Interactive = () => {
    const articleProps = {
        title: text(titleLabel, titleValue(), groupId),
        articles: [
            object('First Article', generateArticle(), groupId),
            object('Second Article', generateArticle(), groupId),
        ],
    };

    return <ArticleColumns {...articleProps} />;
};

function generateArticle() {
    return {
        title: titleValue(),
        text: textValue(),
        image: generateImage(),
        linkText: titleValue(),
        link: linkValue(),
    };
}