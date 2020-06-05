import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import generateImage from '../../../lib/generate-image';
import FixtureLayout from '../../page-layout/FixtureLayout';
import ArticleColumns from './article-columns/article-columns.component';

export default {
    'Two Columns': TwoColumns,
    'Three Columns': ThreeColumns,
};

const defaultTwoColumns = {
    title: faker.lorem.words(),
    articles: [generateArticle(), generateArticle()],
};
const defaultThreeColumns = {
    title: faker.lorem.words(),
    articles: [generateArticle(), generateArticle(), generateArticle()],
};

function TwoColumns() {
    const [props] = useValue('Props', { defaultValue: defaultTwoColumns });

    return (
        <FixtureLayout>
            <ArticleColumns {...props} />
        </FixtureLayout>
    );
}

function ThreeColumns() {
    const [props] = useValue('Props', { defaultValue: defaultThreeColumns });

    return (
        <FixtureLayout>
            <ArticleColumns {...props} />
        </FixtureLayout>
    );
}

function generateArticle() {
    return {
        id: faker.random.uuid(),
        title: faker.lorem.words(),
        text: faker.lorem.paragraph(),
        image: generateImage(),
        linkText: faker.lorem.words(),
        link: `/${faker.lorem.slug()}`,
    };
}
