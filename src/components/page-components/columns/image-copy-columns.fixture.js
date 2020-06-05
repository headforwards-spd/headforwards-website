import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import FixtureLayout from '../../page-layout/FixtureLayout';
import ImageCopyColumns from './image-copy-columns/image-copy-columns.component';
import getProps from './image-copy-columns/story-props';

const defaultValue = getProps();

export default {
    'Image on the Left': ImageOnLeft,
    'Image on the Right': ImageOnRight,
};

function ImageOnLeft() {
    const [props] = useValue('Props', { defaultValue });

    return <Story {...props} />;
}
function ImageOnRight() {
    const [props] = useValue('Props', { defaultValue });

    return <Story {...{ ...props, isRightImage: true }} />;
}

function Story(props) {
    return (
        <FixtureLayout>
            <ImageCopyColumns {...props} />
        </FixtureLayout>
    );
}
