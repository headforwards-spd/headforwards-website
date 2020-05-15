import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import FixtureLayout from '../../page-layout/FixtureLayout';
import PostitCopyColumns from './image-copy-columns/postit-copy-columns.component';
import getProps from './image-copy-columns/story-props';

export default {
    'Postit on the Left': PostitOnLeft,
    'Postit on the Right': PostitOnRight,
};

const image = '/uploads/icon.black.png';

const defaultValue = {
    ...getProps(),
    image,
};

function PostitOnLeft() {
    const [props] = useValue('Props', { defaultValue });

    return <Story {...props} />;
}
function PostitOnRight() {
    const [props] = useValue('Props', { defaultValue });

    return <Story {...{ ...props, isRightImage: true }} />;
}

function Story(props) {
    return (
        <FixtureLayout>
            <PostitCopyColumns {...props} />
        </FixtureLayout>
    );
}
