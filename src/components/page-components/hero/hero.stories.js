import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import StoriesLayout from '../../page-layout/stories-layout.component';
import Hero from './hero.component';

const faker = require('faker');

const type = 'markdown-component';

export default {
    decorators: [withKnobs],
    title: 'Page Components/Hero',
};

const groupId = 'header-group';

const titleLabel = 'Header';
const titleValue = faker.lorem.sentence;

const textLabel = 'Paragraph';
const textValue = faker.lorem.paragraph;

const isTwoColumnsLabel = 'Split into two columns';
const isTwoColumnsValue = () => false;

export const oneColumn = () => {
    const props = {
        title: titleValue(),
        content: [
            {
                type,
                text: textValue(),
            },
        ],
    };

    return (
        <StoriesLayout>
            <Hero {...props} />
        </StoriesLayout>
    );
};

export const twoColumns = () => {
    const props = {
        title: titleValue(),
        content: [
            {
                type,
                text: textValue(),
            },
        ],
        isTwoColumns: true,
    };

    return (
        <StoriesLayout>
            <Hero {...props} />
        </StoriesLayout>
    );
};

export const interactive = () => {
    const props = {
        title: text(titleLabel, titleValue(), groupId),
        content: [
            {
                type,
                text: text(textLabel, textValue(), groupId),
            },
        ],
        isTwoColumns: boolean(isTwoColumnsLabel, isTwoColumnsValue(), groupId),
    };

    return (
        <StoriesLayout>
            <Hero {...props} />
        </StoriesLayout>
    );
};
