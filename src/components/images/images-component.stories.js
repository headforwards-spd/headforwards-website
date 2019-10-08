
import React                       from 'react';
import {FullWidthImage, TwoImages, BlogImages} from './images-component';

export default {
    title: 'Images',
};

export const fullWidthImage = () => {
    return <FullWidthImage/>
};

export const twoImages = () => {
    return <TwoImages/>
};

export const blogImages = () => {
    return <BlogImages />
}