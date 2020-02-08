import { boolean, files, text } from '@storybook/addon-knobs';

import generateImage from '../../../../lib/generate-image';

const faker = require('faker');

const type = 'markdown-component';

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

export function getProps() {
    return {
        title: titleValue(),
        content: [
            {
                type,
                text: textValue(),
            },
        ],
        image: imageValue(),
        link: {
            linkText: linkTextValue(),
            link: linkValue(),
        },
    };
}

export function getInteractiveProps() {
    return {
        title: text(titleLabel, titleValue(), groupId),
        content: [
            {
                type,
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
}
