import { boolean, files, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import StoriesLayout from '../../../page-layout/stories-layout.component';
import PostitCopyColumns from './postit-copy-columns.component';
import {
    accept,
    groupId,
    imageLabel,
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

const imageValue = () => '/uploads/icon.black.png';

const type = 'markdown-component';

export default {
    decorators: [withKnobs],
    title: 'Page Components/Postit, Copy Columns',
};

export const PostitOnLeft = () => {
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
            <PostitCopyColumns {...props} />
        </StoriesLayout>
    );
};
export const PostitOnRight = () => {
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
            <PostitCopyColumns {...props} />
        </StoriesLayout>
    );
};

export const Interactive = () => {
    const props = {
        title: text(titleLabel, titleValue(), groupId),
        content: [{ type, text: text(textLabel, textValue(), groupId) }],
        isRightImage: boolean(isRightImageLabel, isRightImageValue(), groupId),
        image: files(imageLabel, accept, imageValue(), groupId),
        link: {
            linkText: text(linkTextLabel, linkTextValue(), groupId),
            link: text(linkLabel, linkValue(), groupId),
        },
    };

    return (
        <StoriesLayout>
            <PostitCopyColumns {...props} />
        </StoriesLayout>
    );
};
