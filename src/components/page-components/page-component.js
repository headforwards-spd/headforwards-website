import { bool, oneOfType, string } from 'prop-types';
import React from 'react';

import { ImageSrcPropType } from '../page-layout/image/image.component';
import Markdown from '../page-layout/markdown';
import Author, { AuthorPropType } from './author/author.component';
import ArticleColumns, { ArticleColumnsPropType } from './columns/article-columns/article-columns.component';
import BlogPostColumns, { BlogPostColumnsPropType } from './columns/blog-post-columns/blog-post-columns.component';
import ImageCopyColumns, { ImageCopyColumnsPropType } from './columns/image-copy-columns/image-copy-columns.component';
import PostitCopyColumns, {
    PostitCopyColumnsPropType,
} from './columns/image-copy-columns/postit-copy-columns.component';
import ContentSlider, { ContentSliderPropType } from './content-slider/content-slider.component';
import styles from './content.module.scss';
import Hero, { HeroPropType } from './hero/hero.component';
import FullWidthImage, { FullWidthImageSrcPropType } from './images/full-width/full-width-image.component';
import TwoImages, { TwoImagesPropType } from './images/two/two-images.component';
import Quote, { QuotePropType } from './quote/quote.component';

const pageComponentPropTypes = {
    type: string.isRequired,
};

export default PageComponent;
export const PageComponentPropType = oneOfType([
    ArticleColumnsPropType,
    ImageCopyColumnsPropType,
    PostitCopyColumnsPropType,
    HeroPropType,
    ContentSliderPropType,
    BlogPostColumnsPropType,
    FullWidthImageSrcPropType,
    TwoImagesPropType,
    QuotePropType,
    AuthorPropType,
]);

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
        case 'bio-component':
            return <Author {...component} />;
        default:
            return <Markdown className={styles.markdown} source={component.text} />;
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
        <FullWidthImage
            {...{
                ...props,
                image: imageOne,
            }}
        />
    ) : (
        <TwoImages
            {...{
                ...props,
                leftImage: imageOne,
                rightImage: imageTwo,
            }}
        />
    );
}

const imageCopyComponentPropTypes = {
    image: ImageSrcPropType,
    imageSquare: ImageSrcPropType,
    imagePostit: ImageSrcPropType,
    isPostit: bool,
};
ImageCopyComponent.propTypes = imageCopyComponentPropTypes;
ImageCopyComponent.defaultProps = {
    image: null,
    imageSquare: null,
    imagePostit: null,
    isPostit: false,
};

function ImageCopyComponent({ image, imageSquare, imagePostit, isPostit, ...props }) {
    switch (true) {
        case !image:
            return <Hero {...props} />;
        case isPostit:
            return <PostitCopyColumns {...{ image: imagePostit || image, ...props }} />;
        default:
            return <ImageCopyColumns {...{ image: imageSquare || image, ...props }} />;
    }
}
