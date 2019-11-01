import { shape, string } from 'prop-types';
import React from 'react';
import Articles from './articles/articles.component';
import PostitCopyColumns from './columns/postit-copy-columns/postit-copy-columns.component';
import Hero from './hero/hero.component';
import ImageCopyColumns from './columns/image-copy-columns/image-copy-columns.component';
import ImageSlider from './image-slider/image-slider.component';
import BlogImages from './images/blog/blog-images.component';
import FullWidthImage from './images/full-width/full-width-image.component';
import TwoImages from './images/two/two-images.component';
import Quote from './quote/quote.component';

const pageComponentPropTypes = {
    type: string.isRequired,
};

export default PageComponent;
export const PageComponentPropType = shape(pageComponentPropTypes);

PageComponent.propTypes = pageComponentPropTypes;
function PageComponent({ type, ...component }) {
    const { imageSquare: image } = component || {};

    switch (type) {
        case 'heroComponent':
            return <Hero {...component} />;
        case 'imageSliderComponent':
            return <ImageSlider {...component} />;
        case 'fullWidthImageComponent':
            return <FullWidthImage {...component} />;
        case 'twoImageComponent':
            return <TwoImages {...component} />;
        case 'blogComponent':
            return <BlogImages {...component} />;
        case 'blockQuoteComponent':
            return <Quote {...component} />;
        case 'imageCopyColumnsComponent':
            return <ImageCopyColumns {...{ ...component, image }} />;
        case 'postitCopyColumnsComponent':
            return <PostitCopyColumns {...component} />;
        case 'articleBlockComponent':
            return <Articles {...component} />;
        default:
            return <p>{component.text}</p>;
    }
}
