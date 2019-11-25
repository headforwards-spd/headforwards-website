import { bool, shape, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ImageSrcPropType } from '../page-layout/image/image.component';
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

    switch (type) {
        case 'images-component':
            return <ImagesComponent {...component} />;
        case 'quote-component':
            return <Quote {...component} />;
        case 'image-copy-component':
            return <ImageCopyComponent {...component} />;
        case 'article-component':
            return <ArticleColumns {...component} />;
        case 'blog-post-component':
            return <BlogPostColumns {...component} />;
        case 'content-slider-component':
            return <ContentSlider {...component} />;
        default:
            return <ReactMarkdown source={component.text} />;
    }
}

const imagesComponentPropTypes = {
    imageOne: ImageSrcPropType.isRequired,
    imageTwo: ImageSrcPropType,
};
ImagesComponent.propTypes = imagesComponentPropTypes;
ImagesComponent.defaultProps = {
    imageTwo: null,
};
function ImagesComponent({ imageOne, imageTwo, ...props }) {

    return !imageTwo ? (
        <FullWidthImage {...{ ...props, image: imageOne }} />
    ) : (
        <TwoImages {...{ ...props, leftImage: imageOne, rightImage: imageTwo }} />
    );
}

const imageCopyComponentPropTypes = {
    image: ImageSrcPropType,
    imageSquare: ImageSrcPropType,
    isPostit: bool,
};
ImageCopyComponent.propTypes = imageCopyComponentPropTypes;
ImageCopyComponent.defaultProps = {
    image: null,
    imageSquare: null,
    isPostit: false,
};
function ImageCopyComponent({ image, imageSquare, isPostit, ...props }) {
    switch (true) {
        case isPostit:
            return <PostitCopyColumns {...{ image: imageSquare, ...props }} />;
        case !image:
            return <Hero {...props} />;
        default:
            return <ImageCopyColumns {...{ image: imageSquare, ...props }} />;
    }
}
