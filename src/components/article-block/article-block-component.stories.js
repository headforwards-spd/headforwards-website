import {files, text, withKnobs} from '@storybook/addon-knobs';
import React                    from 'react';
import ArticleBlock             from './article-block-component';

const faker = require('faker');

const groupId = 'article-group';

const headerLabel       = 'Header';
const secondHeaderLabel = 'Sub Heading';
const defaultHeader     = faker.lorem.sentence();
const articleHeader     = faker.lorem.sentence();


const imgLabel      = 'Image';
const accept        = '.png, .jpg, .jpeg';
const defaultImgVal = [];

const articlePostLabel = 'Article Post';
const articlePostText = faker.lorem.paragraph();

export default {
    decorators: [withKnobs],
    title:      'Article Block'
};

export const articleBlock = () => {

    const mainHeader   = text(headerLabel, defaultHeader, groupId);
    const secondHeader = text(secondHeaderLabel, articleHeader, groupId);
    const articleImg   = files(imgLabel, accept, defaultImgVal, groupId);
    const articlePost  = text(articlePostLabel, articlePostText, groupId);

    const articleProps = {
        title:    mainHeader,
        articles: [{
            title: secondHeader,
            image: articleImg,
            post:  articlePost
        }]

    };

    return <ArticleBlock {...articleProps}/>;
};