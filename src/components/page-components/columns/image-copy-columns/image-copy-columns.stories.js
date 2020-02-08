import { boolean, files, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import StoriesLayout from '../../../page-layout/stories-layout.component';
import ImageCopyColumns from './image-copy-columns.component';
import {
    accept,
    groupId,
    imageLabel,
    imageValue,
    isRightImageLabel,
    isRightImageValue,
    linkLabel,
    linkTextLabel,
    linkTextValue,
    linkValue,
    textLabel,
    textValue,
    titleLabel,
    titleValue,
} from './story-props';

const type = 'markdown-component';

export default {
    decorators: [withKnobs],
    title: 'Page Components/Image, Copy Columns',
};

export const ImageOnLeft = () => {
    const props = {
        title: titleValue(),
        content: [{ type, text: textValue() }],
        isRightImage: false,
        image: imageValue(),
        link: {
            linkText: linkTextValue(),
            link: linkValue(),
        },
    };

    return (
        <StoriesLayout>
            <ImageCopyColumns {...props} />
        </StoriesLayout>
    );
};
export const ImageOnRight = () => {
    const props = {
        title: titleValue(),
        content: [{ type, text: textValue() }],
        isRightImage: true,
        image: imageValue(),
        link: {
            linkText: linkTextValue(),
            link: linkValue(),
        },
    };

    return (
        <StoriesLayout>
            <ImageCopyColumns {...props} />
        </StoriesLayout>
    );
};

export const Interactive = () => {
    const props = {
        title: text(titleLabel, titleValue(), groupId),
        content: [
            {
                type,
                text: text(textLabel, textValue(), groupId),
            },
        ],
        isRightImage: boolean(isRightImageLabel, isRightImageValue(), groupId),
        image: files(imageLabel, accept, imageValue(), groupId),
        link: {
            linkText: text(linkTextLabel, linkTextValue(), groupId),
            link: text(linkLabel, linkValue(), groupId),
        },
    };

    return (
        <StoriesLayout>
            <ImageCopyColumns {...props} />
        </StoriesLayout>
    );
};
