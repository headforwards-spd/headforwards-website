import React from 'react';
import { useValue } from 'react-cosmos/fixture';
import faker from 'faker/locale/en_GB';

import FixtureLayout from '../page-layout/FixtureLayout';
import Carousel from './carousel.component';

export default {
    'Carousel Component': Component,
};

const defaultValue = {
    slides: [
        { id: faker.random.uuid(), title: 'Slide 1' },
        { id: faker.random.uuid(), title: 'Slide 2' },
        { id: faker.random.uuid(), title: 'Slide 3' },
        { id: faker.random.uuid(), title: 'Slide 4' },
        { id: faker.random.uuid(), title: 'Slide 5' },
    ],
};

function Component() {
    const [props] = useValue('Props', { defaultValue });

    return (
        <FixtureLayout>
            <Carousel {...props} />
        </FixtureLayout>
    );
}
