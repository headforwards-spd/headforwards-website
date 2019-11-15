import { shape, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ArticleColumns from './columns/article-columns/article-columns.component';
import PostitCopyColumns from './columns/image-copy-columns/postit-copy-columns.component';
import Hero from './hero/hero.component';
import ImageCopyColumns from './columns/image-copy-columns/image-copy-columns.component';
import ContentSlider from './content-slider/content-slider.component';
import BlogPostColumns from './columns/blog-post-columns/blog-post-columns.component';
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
    const { image } = component;
    const { imageSquare = image } = component || {};

    switch (type) {
        case 'heroComponent':
            return <Hero {...component} />;
        case 'contentSliderComponent':
            return <ContentSlider {...component} />;
        case 'fullWidthImageComponent':
            return <FullWidthImage {...component} />;
        case 'twoImageComponent':
            return <TwoImages {...component} />;
        case 'blogPostColumnsComponent':
            return <BlogPostColumns {...component} />;
        case 'quoteComponent':
            return <Quote {...component} />;
        case 'imageCopyColumnsComponent':
            return <ImageCopyColumns {...{ ...component, image: imageSquare }} />;
        case 'postitCopyColumnsComponent':
            return <PostitCopyColumns {...component} />;
        case 'articleColumnsComponent':
            return <ArticleColumns {...component} />;
        default:
            return <ReactMarkdown source={component.text} />;
    }
}
