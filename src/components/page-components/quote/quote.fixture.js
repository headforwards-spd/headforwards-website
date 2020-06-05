import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import FixtureLayout from '../../page-layout/FixtureLayout';
import Quote from './quote.component';

export default {
    'Simple Quote': SimpleQuote,
    'Quote with Name': QuoteWithName,
    'Quote with Name & Job': QuoteWithNameAndJob,
    'Quote with Name, Job & Image': QuoteWithNameJobAndImage,
    'Quote with All the Things': QuoteAllTheThings,
};

const quoteValue = faker.lorem.paragraph;
const nameValue = faker.name.findName;
const jobTitleValue = faker.name.jobTitle;

const profilePicValue = faker.image.avatar;

const defaultValueSimple = {
    quote: quoteValue(),
};

function SimpleQuote() {
    const [props] = useValue('Props', { defaultValue: defaultValueSimple });

    return (
        <FixtureLayout>
            <Quote {...props} />
        </FixtureLayout>
    );
}

const defaultValueName = {
    quote: quoteValue(),
    name: nameValue(),
};

function QuoteWithName() {
    const [props] = useValue('Props', { defaultValue: defaultValueName });

    return (
        <FixtureLayout>
            <Quote {...props} />
        </FixtureLayout>
    );
}

const defaultValueNameJob = {
    quote: quoteValue(),
    name: nameValue(),
    jobTitle: jobTitleValue(),
};

function QuoteWithNameAndJob() {
    const [props] = useValue('Props', { defaultValue: defaultValueNameJob });

    return (
        <FixtureLayout>
            <Quote {...props} />
        </FixtureLayout>
    );
}

const defaultValueNameJobImage = {
    quote: quoteValue(),
    name: nameValue(),
    jobTitle: jobTitleValue(),
    profilePic: profilePicValue(),
};

function QuoteWithNameJobAndImage() {
    const [props] = useValue('Props', { defaultValue: defaultValueNameJobImage });

    return (
        <FixtureLayout>
            <Quote {...props} />
        </FixtureLayout>
    );
}

const defaultValueAll = {
    title: faker.lorem.words(),
    quote: quoteValue(),
    name: nameValue(),
    jobTitle: jobTitleValue(),
    profilePic: profilePicValue(),
    fullWidth: true,
};

function QuoteAllTheThings() {
    const [props] = useValue('Props', { defaultValue: defaultValueAll });

    return (
        <FixtureLayout>
            <Quote {...props} />
        </FixtureLayout>
    );
}
