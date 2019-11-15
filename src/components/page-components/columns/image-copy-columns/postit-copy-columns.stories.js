import { boolean, files, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import generateImage from '../../../../lib/generate-image';
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
const imageValue = () => generateImage(true);

export default {
    decorators: [withKnobs],
    title: 'Page Components/Postit, Copy Columns',
};

export const PostitOnLeft = () => {
    const props = {
        title: titleValue(),
        text: textValue(),
        isRightImage: false,
        image: imageValue(),
        linkText: linkTextValue(),
        link: linkValue(),
    };

    return <PostitCopyColumns {...props} />;
};
export const PostitOnRight = () => {
    const props = {
        title: titleValue(),
        text: textValue(),
        isRightImage: true,
        image: imageValue(),
        linkText: linkTextValue(),
        link: linkValue(),
    };

    return <PostitCopyColumns {...props} />;
};

export const Interactive = () => {
    const props = {
        title: text(titleLabel, titleValue(), groupId),
        text: text(textLabel, textValue(), groupId),
        isRightImage: boolean(isRightImageLabel, isRightImageValue(), groupId),
        image: files(imageLabel, accept, imageValue(), groupId),
        linkText: text(linkTextLabel, linkTextValue(), groupId),
        link: text(linkLabel, linkValue(), groupId),
    };

    return <PostitCopyColumns {...props} />;
};
