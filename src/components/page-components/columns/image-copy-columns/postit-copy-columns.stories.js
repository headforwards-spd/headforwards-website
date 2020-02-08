import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import StoriesLayout from '../../../page-layout/stories-layout.component';
import PostitCopyColumns from './postit-copy-columns.component';
import { getInteractiveProps, getProps } from './story-props';

const imageValue = () => '/uploads/icon.black.png';

export default {
    decorators: [withKnobs],
    title: 'Page Components/Postit, Copy Columns',
};

export const PostitOnLeft = () => {
    const props = {
        ...getProps(),
        image: imageValue(),
    };

    return <Story {...props} />;
};
export const PostitOnRight = () => {
    const props = {
        ...getProps(),
        isRightImage: true,
        image: imageValue(),
    };

    return <Story {...props} />;
};

export const Interactive = () => {
    const props = getInteractiveProps();

    return <Story {...props} />;
};

function Story(props) {
    return (
        <StoriesLayout>
            <PostitCopyColumns {...props} />
        </StoriesLayout>
    );
}
