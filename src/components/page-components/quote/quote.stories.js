import { files, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import StoriesLayout from '../../page-layout/stories-layout.component';
import Quote from './quote.component';

const faker = require('faker');

const groupId = 'quote-group';

const quoteLabel = 'Quote';
const quoteValue = faker.lorem.paragraph;

const nameLabel = 'Name';
const nameValue = faker.name.findName;

const jobTitleLabel = 'Job Title';
const jobTitleValue = faker.name.jobTitle;

const profilePicLabel = 'Profile Picture';
const accept = '.png, .jpg, .jpeg';
const profilePicValue = faker.image.avatar;

export default {
    decorators: [withKnobs],
    title: 'Page Components/Quote',
};

export const SimpleQuote = () => {
    const props = {
        quote: quoteValue(),
    };

    return (
        <StoriesLayout>
            <Quote {...props} />
        </StoriesLayout>
    );
};

export const QuoteWithName = () => {
    const props = {
        quote: quoteValue(),
        name: nameValue(),
    };

    return (
        <StoriesLayout>
            <Quote {...props} />
        </StoriesLayout>
    );
};
export const QuoteWithNameAndJob = () => {
    const props = {
        quote: quoteValue(),
        name: nameValue(),
        jobTitle: jobTitleValue(),
    };

    return (
        <StoriesLayout>
            <Quote {...props} />
        </StoriesLayout>
    );
};
export const QuoteWithNameJobAndImage = () => {
    const props = {
        quote: quoteValue(),
        name: nameValue(),
        jobTitle: jobTitleValue(),
        profilePic: profilePicValue(),
    };

    return (
        <StoriesLayout>
            <Quote {...props} />
        </StoriesLayout>
    );
};

export const InteractiveQuote = () => {
    const name = text(nameLabel, nameValue(), groupId);
    const jobTitle = text(jobTitleLabel, jobTitleValue(), groupId);
    const quote = text(quoteLabel, quoteValue(), groupId);
    const profilePic = files(profilePicLabel, accept, profilePicValue(), groupId);

    const props = {
        name,
        jobTitle,
        quote,
        profilePic: {
            publicURL: profilePic,
        },
    };

    return (
        <StoriesLayout>
            <Quote {...props} />
        </StoriesLayout>
    );
};
