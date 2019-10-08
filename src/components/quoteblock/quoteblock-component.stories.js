import {files, text} from '@storybook/addon-knobs';
import React         from 'react';
import img           from '../../img/craig.jpg';
import {Quoteblock}  from './quoteblock-component';

const faker = require('faker');
export default {
    title: 'Quoteblock'
};

const groupId = 'quote-group';

const nameLabel       = 'Name';
const defaultFakeName = faker.name.findName();

const jobTitleLabel   = 'Job Title';
const defaultJobTitle = faker.name.jobTitle();

const quoteLabel   = 'Quote';
const defaultQuote = faker.lorem.paragraph();

const imageLabel      = 'Profile Picture';
const accept          = '.png, .jpg, .jpeg';
const defaultImgValue = [img];

export const quoteBlock = () => {

    const name     = text(nameLabel, defaultFakeName, groupId);
    const jobTitle = text(jobTitleLabel, defaultJobTitle, groupId);
    const quote    = text(quoteLabel, defaultQuote, groupId);
    const image    = files(imageLabel, accept, defaultImgValue, groupId);

    const props = {
        name:     name,
        jobTitle: jobTitle,
        quote:    quote,
        image:    image
    };

    return <Quoteblock {...props} />;
};
