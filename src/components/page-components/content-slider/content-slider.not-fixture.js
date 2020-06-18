import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import generateImage from '../../../lib/generate-image';
import ContentSlider from './content-slider.component';

export default {
    'Content Slider Component': Component,
};

const titleValue = faker.lorem.words;
const textValue = faker.lorem.paragraph;
const linkTextValue = faker.lorem.sentence;
const linkValue = () => `/${faker.lorem.slug()}`;

const defaultValue = {
    title: titleValue(),
    articles: generateSlides(),
};

function Component() {
    const [props] = useValue('Props', { defaultValue });

    return <ContentSlider {...props} />;
}

function generateSlides() {
    const count = faker.random.number({
        min: 2,
        max: 10,
    });
    const articles = [];

    for (let i = 0; i < count; i += 1) {
        articles.push(generateSlide());
    }

    return articles;
}

function generateSlide() {
    return {
        id: faker.random.uuid(),
        title: titleValue(),
        image: generateImage(),
        text: textValue(),
        linkText: linkTextValue(),
        link: linkValue(),
    };
}
