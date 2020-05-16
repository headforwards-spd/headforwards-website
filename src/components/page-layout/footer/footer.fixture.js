import React from 'react';
import FixtureLayout from '../FixtureLayout';

import Footer from './footer.component';

import faker from 'faker/locale/en_GB';
import { useValue } from 'react-cosmos/fixture';

export default {
    'Footer Component': Component,
};

const addressValue = () => {
    return [
        faker.address.streetAddress(),
        faker.address.city(),
        faker.address.county(),
        faker.address.countryCode(),
    ].join(', ');
};

const defaultValue = {
    companyInfo: {
        companyName: faker.company.companyName(),
        email: faker.internet.email(),
        phone: `+44 ${faker.phone.phoneNumberFormat(1)}`,
        address: addressValue(),
        twitterURL: faker.internet.url(),
        facebookURL: faker.internet.url(),
        instagramURL: faker.internet.url(),
        linkedInURL: faker.internet.url(),
        youtubeURL: faker.internet.url(),
    },
    callToAction: faker.company.catchPhrase(),
};

function Component() {
    const [props] = useValue('Props', { defaultValue });

    return (
        <FixtureLayout wrap={false}>
            <Footer {...props} />
        </FixtureLayout>
    );
}
