import {files, text, withKnobs} from '@storybook/addon-knobs';
import React              from 'react';
import {Article}          from './article-block-component';


const faker = require('faker');

const groupId = "articale-group";

const headerLabel = "Header";
const secondHeaderLabel = "Sub Heading";
const defaultHeader = faker.lorem.sentence();

const imgLabel = "Image";
const accept = ".png, .jpg, .jpeg";
const defaultImgVal = [];

export default {
    decorators: [withKnobs],
    title: 'Article Block',
};

export const articleBlock = () => {

    const mainHeader = text(headerLabel, defaultHeader, groupId);
    const secondHeader = text(secondHeaderLabel, defaultHeader, groupId);
    const image = files(imgLabel, accept, defaultImgVal, groupId);

    const articleProps = {
        mainHeader: mainHeader,
        secondHeader: secondHeader,
        image: image
    };

    return <Article {...articleProps}/>;
};