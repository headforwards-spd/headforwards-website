import { boolean, files, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import StoriesLayout from '../../../page-layout/stories-layout.component';
import PostitCopyColumns from './postit-copy-columns.component';

const faker = require('faker');

const groupId = 'header-group';

const titleLabel = 'Header';
const titleValue = faker.lorem.sentence;

const textLabel = 'Paragraph';
const textValue = faker.lorem.paragraph;

const linkTextLabel = 'Link Text';
const linkTextValue = faker.lorem.words;

const linkLabel = 'Link Destination';
const linkValue = () => `/${faker.lorem.slug()}`;

const isRightImageLabel = 'Postit on the right';
const isRightImageValue = () => true;

const imageLabel = 'Postit';
const accept = '.png, .jpg, .jpeg';
const imageValue = () => '/uploads/icon.black.png'; // generateImage(true);

export default {
    decorators: [withKnobs],
    title: 'Page Components/Postit, Copy Columns',
};

export const PostitOnLeft = () => {
    const props = {
        title: titleValue(),
        content: [{ type: 'markdown-component', text: textValue() }],
        isRightImage: false,
        image: imageValue(),
        link: {
            linkText: linkTextValue(),
            link: linkValue(),
        },
    };

    return (
        <StoriesLayout>
            <PostitCopyColumns {...props} />
        </StoriesLayout>
    );
};
export const PostitOnRight = () => {
    const props = {
        title: titleValue(),
        content: [{ type: 'markdown-component', text: textValue() }],
        isRightImage: true,
        image: imageValue(),
        link: {
            linkText: linkTextValue(),
            link: linkValue(),
        },
    };

    return (
        <StoriesLayout>
            <PostitCopyColumns {...props} />
        </StoriesLayout>
    );
};

export const Interactive = () => {
    const props = {
        title: text(titleLabel, titleValue(), groupId),
        content: [{ type: 'markdown-component', text: text(textLabel, textValue(), groupId) }],
        isRightImage: boolean(isRightImageLabel, isRightImageValue(), groupId),
        image: files(imageLabel, accept, imageValue(), groupId),
        link: {
            linkText: text(linkTextLabel, linkTextValue(), groupId),
            link: text(linkLabel, linkValue(), groupId),
        },
    };

    return (
        <StoriesLayout>
            <PostitCopyColumns {...props} />
        </StoriesLayout>
    );
};
