import React        from 'react';
import {HeaderText} from './header-text-component';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';

const faker = require('faker');

const headerLabel = 'Header';
const defaultHeader = faker.lorem.sentence();

const paraLabel = 'Paragraph';
const defaultSentence = faker.lorem.paragraph()
;
const groupId = "header-group";

const booleanLabel = 'Split into two columns';
const defaultValue = false;


export default {
    decorators: [withKnobs],
    title: 'Header with Text'
};


export const headerWithText = () => {

    const header = text(headerLabel, defaultHeader, groupId);
    const sentence = text(paraLabel, defaultSentence, groupId);
    const bool = boolean(booleanLabel, defaultValue, groupId);

    const props = {
        title: header,
        text: sentence,
        bool: bool,
    };

    return <HeaderText {...props} />;
};
