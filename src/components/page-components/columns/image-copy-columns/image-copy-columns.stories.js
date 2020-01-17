import { boolean, files, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import generateImage from '../../../../lib/generate-image';
import StoriesLayout from '../../../page-layout/stories-layout.component';
import ImageCopyColumns from './image-copy-columns.component';

const faker = require('faker');

const groupId = 'header-group';

const titleLabel = 'Title';
const titleValue = faker.lorem.sentence;

const textLabel = 'Copy';
const textValue = faker.lorem.paragraph;

const linkTextLabel = 'Link Text';
const linkTextValue = faker.lorem.words;

const linkLabel = 'Link Destination';
const linkValue = () => `/${faker.lorem.slug()}`;

const isRightImageLabel = 'Image on the right';
const isRightImageValue = () => true;

const imageLabel = 'Image';
const accept = '.png, .jpg, .jpeg';
const imageValue = () => generateImage(true);

export default {
    decorators: [withKnobs],
    title: 'Page Components/Image, Copy Columns',
};

export const ImageOnLeft = () => {
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
            <ImageCopyColumns {...props} />
        </StoriesLayout>
    );
};
export const ImageOnRight = () => {
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
            <ImageCopyColumns {...props} />
        </StoriesLayout>
    );
};

export const Interactive = () => {
    const props = {
        title: text(titleLabel, titleValue(), groupId),
        content: [
            {
                type: 'markdown-component',
                text: text(textLabel, textValue(), groupId),
            },
        ],
        isRightImage: boolean(isRightImageLabel, isRightImageValue(), groupId),
        image: files(imageLabel, accept, imageValue(), groupId),
        link: {
            linkText: text(linkTextLabel, linkTextValue(), groupId),
            link: text(linkLabel, linkValue(), groupId),
        },
    };

    return (
        <StoriesLayout>
            <ImageCopyColumns {...props} />
        </StoriesLayout>
    );
};
