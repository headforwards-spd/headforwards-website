import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Provider } from 'unstated';

import generateImage from '../../../lib/generate-image';
import generateMenu from '../../../lib/generate-menu';
import FixtureLayout from '../FixtureLayout';
import Header from './header.component';

export default {
    'Header Component': Title,
    'Header with Subtitle': TitleAndSubTitle,
    'Header with Image': ImageWithTitle,
    'Header with Image & Subtitle': ImageWithTitleAndSubTitle,
};

const titleValue = faker.lorem.words;
const textValue = faker.lorem.sentence;

const defaultValueTitle = {
    title: titleValue(),
    subtitle: null,
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
function Title() {
    const [props] = useValue('Props', { defaultValue: defaultValueTitle });

    return (
        <Provider>
            <FixtureLayout wrap={false}>
                <Header {...props} />
            </FixtureLayout>
        </Provider>
    );
}

const defaultValueTitleSubTitle = {
    title: titleValue(),
    subtitle: textValue(),
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
function TitleAndSubTitle() {
    const [props] = useValue('Props', { defaultValue: defaultValueTitleSubTitle });

    return (
        <Provider>
            <FixtureLayout wrap={false}>
                <Header {...props} />
            </FixtureLayout>
        </Provider>
    );
}

const defaultValueImageTitle = {
    title: titleValue(),
    subtitle: null,
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
function ImageWithTitle() {
    const [props] = useValue('Props', { defaultValue: defaultValueImageTitle });

    return (
        <Provider>
            <FixtureLayout wrap={false}>
                <Header {...props} />
            </FixtureLayout>
        </Provider>
    );
}

const defaultValueImageTitleSubTitle = {
    title: titleValue(),
    subtitle: textValue(),
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
function ImageWithTitleAndSubTitle() {
    const [props] = useValue('Props', { defaultValue: defaultValueImageTitleSubTitle });

    return (
        <Provider>
            <FixtureLayout wrap={false}>
                <Header {...props} />
            </FixtureLayout>
        </Provider>
    );
}
