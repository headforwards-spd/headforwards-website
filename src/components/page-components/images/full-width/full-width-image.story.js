import { files } from '@storybook/addon-knobs';
import React from 'react';
import generateImage from '../../../../lib/generate-image';
import FullWidthImage from './full-width-image.component';

export default function FullWidthImageStory() {
    const fullWidthImageLabel = 'Full Width Image';
    const accept = '.png, .jpg, .jpeg';
    const defaultImgValue = generateImage();
    const groupId = 'img-group';

    const fullWidthImg = files(fullWidthImageLabel, accept, defaultImgValue, groupId);

    const imgProps = {
        image: fullWidthImg,
    };

    return <FullWidthImage {...imgProps} />;
}
