import React            from 'react';
import Articles         from '../components/articles/articles.component'
import PostitCopyColumns from '../components/columns/postit-copy-columns/postit-copy-columns.component'
import Hero             from '../components/hero/hero.component';
import ImageCopyColumns from '../components/columns/image-copy-columns/image-copy-columns.component';
import ImageSlider      from '../components/image-slider/image-slider-component';
import BlogImages       from '../components/images/blog/blog-images.component'
import FullWidthImage   from '../components/images/full-width/full-width-image.component'
import TwoImages         from '../components/images/two/two-images.component'
import Quote             from '../components/quoteblock/quote.component';

export default ({type, ...component}) => {
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
            const {imageSquare:image} = component || {};
            return <ImageCopyColumns {...{...component, image}} />;
        case 'postitCopyColumnsComponent':
            return <PostitCopyColumns {...component} />;
        case 'articleBlockComponent':
            return <Articles {...component} />;
        default:
            return <p>{component.text}</p>;
    }
}
