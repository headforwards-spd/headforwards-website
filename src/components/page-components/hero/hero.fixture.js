import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import FixtureLayout from '../../page-layout/FixtureLayout';
import Hero from './hero.component';

export default {
    'One Column': OneColumn,
    'Two Columns': TwoColumns,
};

const type = 'markdown-component';
const titleValue = faker.lorem.sentence;

const textValue = faker.lorem.paragraph;

const defaultValue = {
    title: titleValue(),
    content: [
        {
            id: faker.random.uuid(),
            type,
            text: textValue(),
        },
    ],
};

function OneColumn() {
    const [props] = useValue('Props', { defaultValue });

    return (
        <FixtureLayout>
            <Hero {...props} />
        </FixtureLayout>
    );
}

function TwoColumns() {
    const [props] = useValue('Props', { defaultValue });

    return (
        <FixtureLayout>
            <Hero {...{ ...props, isTwoColumns: true }} />
        </FixtureLayout>
    );
}
