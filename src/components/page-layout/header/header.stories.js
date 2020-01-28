import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Provider } from 'unstated';

import generateImage from '../../../lib/generate-image';
import generateMenu from '../../../lib/generate-menu';
import Header from './header.component';

const faker = require('faker');

export default {
    title: 'Page Layout/Header',
    decorators: [withKnobs],
};

const groupId = 'nav-group';

const titleLabel = 'Title';
const titleValue = faker.lorem.words;

const textLabel = 'Sub Title';
const textValue = faker.lorem.sentence;

const hasBackgroundLabel = 'Has Background Image?';

const menuLabel = 'Menu';

export const Title = () => {
    const props = {
        title: titleValue(),
        text: null,
        image: null,
        menu: generateMenu(),
        companyInfo: {
            twitterURL: faker.internet.url(),
            facebookURL: faker.internet.url(),
            instagramURL: faker.internet.url(),
            linkedInURL: faker.internet.url(),
            youtubeURL: faker.internet.url(),
        },
    };
    return (
        <Provider>
            <Header {...props} />
        </Provider>
    );
};

export const TitleAndSubTitle = () => {
    const props = {
        title: titleValue(),
        text: textValue(),
        image: null,
        menu: generateMenu(),
        companyInfo: {
            twitterURL: faker.internet.url(),
            facebookURL: faker.internet.url(),
            instagramURL: faker.internet.url(),
            linkedInURL: faker.internet.url(),
            youtubeURL: faker.internet.url(),
        },
    };
    return (
        <Provider>
            <Header {...props} />
        </Provider>
    );
};

export const ImageWithTitle = () => {
    const props = {
        title: titleValue(),
        text: null,
        image: generateImage(),
        menu: generateMenu(),
        companyInfo: {
            twitterURL: faker.internet.url(),
            facebookURL: faker.internet.url(),
            instagramURL: faker.internet.url(),
            linkedInURL: faker.internet.url(),
            youtubeURL: faker.internet.url(),
        },
    };
    return (
        <Provider>
            <Header {...props} />
        </Provider>
    );
};

export const ImageWithTitleAndSubTitle = () => {
    const props = {
        title: titleValue(),
        text: textValue(),
        image: generateImage(),
        menu: generateMenu(),
        companyInfo: {
            twitterURL: faker.internet.url(),
            facebookURL: faker.internet.url(),
            instagramURL: faker.internet.url(),
            linkedInURL: faker.internet.url(),
            youtubeURL: faker.internet.url(),
        },
    };
    return (
        <Provider>
            <Header {...props} />
        </Provider>
    );
};

export const interactive = () => {
    const hasBackground = boolean(hasBackgroundLabel, false, groupId);

    const props = {
        title: text(titleLabel, titleValue(), groupId),
        text: text(textLabel, textValue(), groupId),
        image: hasBackground ? generateImage() : null,
        menu: object(menuLabel, generateMenu(), groupId),
        companyInfo: {
            twitterURL: text('Twitter URL', faker.internet.url(), 'Company Info'),
            facebookURL: text('Facebook URL', faker.internet.url(), 'Company Info'),
            instagramURL: text('Instagram URL', faker.internet.url(), 'Company Info'),
            linkedInURL: text('LinkedIn URL', faker.internet.url(), 'Company Info'),
            youtubeURL: text('YouTube URL', faker.internet.url(), 'Company Info'),
        },
    };
    return (
        <Provider>
            <Header {...props} />
        </Provider>
    );
};
