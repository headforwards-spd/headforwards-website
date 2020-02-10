import { text } from '@storybook/addon-knobs';

const faker = require('faker');

const companyInfoGroup = 'Company Info';

const companyInfoStoryProps = {
    twitterURL: text('Twitter URL', faker.internet.url(), companyInfoGroup),
    facebookURL: text('Facebook URL', faker.internet.url(), companyInfoGroup),
    instagramURL: text('Instagram URL', faker.internet.url(), companyInfoGroup),
    linkedInURL: text('LinkedIn URL', faker.internet.url(), companyInfoGroup),
    youtubeURL: text('YouTube URL', faker.internet.url(), companyInfoGroup),
};

export default companyInfoStoryProps;
