import { boolean, files } from '@storybook/addon-knobs';
import React from 'react';
import generateImage from '../../../../lib/generate-image';
import StoriesLayout from '../../../page-layout/stories-layout.component';
import TwoImages from './two-images.component';

export default function TwoImagesStory() {
    const flipLabel = 'Flip Images';
    const leftImageLabel = 'Left Image';
    const leftImageValue = generateImage();
    const rightImageLabel = 'Right Image';
    const rightImageValue = generateImage();
    const accept = '.png, .jpg, .jpeg';
    const groupId = 'img-group';

    const flip = boolean(flipLabel, false, groupId);
    const leftImage = files(leftImageLabel, accept, leftImageValue, groupId);
    const rightImage = files(rightImageLabel, accept, rightImageValue, groupId);

    const twoImgProps = {
        flip,
        leftImage,
        rightImage,
    };

    return (
        <StoriesLayout>
            <TwoImages {...twoImgProps} />
        </StoriesLayout>
    );
}
