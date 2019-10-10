
import React                                   from 'react';
import {FullWidthImage, TwoImages, BlogImages} from './images-component';
import {withKnobs, files}                             from '@storybook/addon-knobs';

export default {
    decorators: [withKnobs],
    title: 'Images',
};

export const fullWidthImage = () => {
    const fullWidthImageLabel = "Full Width Image";
    const accept = ".png, .jpg, .jpeg";
    const defaultImgValue = [];
    const groupId = "img-group";

    const fullWidthImg = files(fullWidthImageLabel, accept, defaultImgValue, groupId);

    const imgProps = {
        fullWidthImg: fullWidthImg
    };

    return <FullWidthImage {...imgProps}/>
};

export const twoImages = () => {
    const leftImageLabel = "Left Image";
    const rightImageLabel = "Right Image";
    const accept = ".png, .jpg, .jpeg";
    const defaultImgValue = [];
    const groupId = "img-group";

    const leftImage = files(leftImageLabel, accept, defaultImgValue, groupId);
    const rightImage = files(rightImageLabel, accept, defaultImgValue, groupId);

    const twoImgProps = {
        leftImage: leftImage,
        rightImage: rightImage
    };

    return <TwoImages {...twoImgProps}/>
};

export const blogImages = () => {
    return <BlogImages />
}