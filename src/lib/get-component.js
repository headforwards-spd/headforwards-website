import React          from 'react';
import ArticleBlock   from '../components/article-block/article-block-component';
import {HeaderText}   from '../components/header-text/header-text-component';
import ImageHeader    from '../components/image-header-text-link/image-header-text-link-component';
import ImageSlider    from '../components/image-slider/image-slider-component';
import BlogImages     from '../components/images/blog/blog-images.component'
import FullWidthImage from '../components/images/full-width/full-width-image.component'
import TwoImages      from '../components/images/two/two-images.component'
import Quote     from '../components/quoteblock/quote.component';

export default ({type, ...component}) => {
    switch (type) {
        case 'heading':
            return <HeaderText {...component} />;
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
        case 'imageWithTextComponent':
            return <ImageHeader {...component} />;
        case 'articleBlockComponent':
            return <ArticleBlock {...component} />;
        default:
            return <p>{component.text}</p>;
    }
}
