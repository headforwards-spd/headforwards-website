import React         from 'react';
import img           from '../../img/craig.jpg';
import Quoteblock  from './quoteblock-component';
import {withKnobs, text, files} from '@storybook/addon-knobs';


const faker = require('faker');
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

export default {
    decorators: [withKnobs],
    title: 'Quoteblock'
};

export const quoteBlock = () => {

    const name     = text(nameLabel, defaultFakeName, groupId);
    const jobTitle = text(jobTitleLabel, defaultJobTitle, groupId);
    const quote    = text(quoteLabel, defaultQuote, groupId);
    const profilePic = files(imageLabel, accept, defaultImgValue, groupId);

    const props = {
        name,
        jobTitle,
        quote,
        profilePic
    };

    return <Quoteblock {...props} />;
};

