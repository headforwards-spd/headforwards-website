import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import Footer from './footer.component';

const faker = require('faker');

export default {
    title: 'Page Layout/Footer',
    decorators: [withKnobs],
};

const addressValue = () => {
    return [
        faker.address.streetAddress(),
        faker.address.city(),
        faker.address.county(),
        faker.address.countryCode(),
    ].join(', ');
};

export const Interactive = () => {
    const callToAction = text('Call to action', faker.company.catchPhrase());

    const companyInfo = {
        companyName: text('Company Name', faker.company.companyName()),
        email: text('Email Address', faker.internet.email()),
        phone: text('Phone Number', `+44 ${faker.phone.phoneNumberFormat(1)}`),
        address: text('Address', addressValue()),
        twitterURL: text('Twitter URL', faker.internet.url()),
        facebookURL: text('Facebook URL', faker.internet.url()),
        instagramURL: text('Instagram URL', faker.internet.url()),
        linkedInURL: text('LinkedIn URL', faker.internet.url()),
        youtubeURL: text('YouTube URL', faker.internet.url()),
    };

    return (
        <Footer
            {...{
                companyInfo,
                callToAction,
            }}
        />
    );
};
