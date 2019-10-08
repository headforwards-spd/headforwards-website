
import React         from 'react';
import {ImageHeader} from './image-header-text-link-component';
import img                                from '../../img/curlyhair.png';
import {withKnobs, text, boolean, files}   from '@storybook/addon-knobs';

const faker = require('faker');

const headerLabel = 'Header';
const defaultHeader = faker.lorem.sentence();

const paraLabel = 'Paragraph';
const defaultSentence = faker.lorem.paragraph();

const groupId = "header-group";

const booleanLabel = 'Float image to the right';
const defaultValue = false;

const imageLabel = "Image";
const accept = '.png, .jpg, .jpeg';
const defaultImageValue = [img];

export default {
    decorators: [withKnobs],
    title: 'Container with Image, Header, Text and a Link',
};

export const textBlock = () => {

    const header = text(headerLabel, defaultHeader, groupId);
    const sentence = text(paraLabel, defaultSentence, groupId);
    const position = boolean(booleanLabel, defaultValue, groupId);
    const image = files(imageLabel, accept, defaultImageValue, groupId);

    const props = {
        header: header,
        sentence: sentence,
        position: position,
        image: image
    };
    return <ImageHeader {...props} />
};
