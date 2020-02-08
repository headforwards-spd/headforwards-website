import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import StoriesLayout from '../../../page-layout/stories-layout.component';
import ImageCopyColumns from './image-copy-columns.component';
import { getInteractiveProps, getProps } from './story-props';

export default {
    decorators: [withKnobs],
    title: 'Page Components/Image, Copy Columns',
};

export const ImageOnLeft = () => {
    const props = getProps();

    return <Story {...props} />;
};
export const ImageOnRight = () => {
    const props = {
        ...getProps(),
        isRightImage: true,
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
            <ImageCopyColumns {...props} />
        </StoriesLayout>
    );
}
