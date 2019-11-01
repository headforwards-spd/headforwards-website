import { files } from '@storybook/addon-knobs';
import React from 'react';
import generateImage from '../../../../lib/generate-image';
import TwoImages from './two-images.component';

export default function TwoImagesStory() {
    const leftImageLabel = 'Left Image';
    const leftImageValue = generateImage();
    const rightImageLabel = 'Right Image';
    const rightImageValue = generateImage();
    const accept = '.png, .jpg, .jpeg';
    const groupId = 'img-group';

    const leftImage = files(leftImageLabel, accept, leftImageValue, groupId);
    const rightImage = files(rightImageLabel, accept, rightImageValue, groupId);

    const twoImgProps = {
        leftImage,
        rightImage,
    };

    return <TwoImages {...twoImgProps} />;
}
