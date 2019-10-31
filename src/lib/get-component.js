import React             from 'react';
import Articles          from '../components/page-components/articles/articles.component'
import PostitCopyColumns from '../components/page-components/columns/postit-copy-columns/postit-copy-columns.component'
import Hero              from '../components/page-components/hero/hero.component';
import ImageCopyColumns  from '../components/page-components/columns/image-copy-columns/image-copy-columns.component';
import ImageSlider       from '../components/page-components/image-slider/image-slider.component';
import BlogImages        from '../components/page-components/images/blog/blog-images.component'
import FullWidthImage    from '../components/page-components/images/full-width/full-width-image.component'
import TwoImages         from '../components/page-components/images/two/two-images.component'
import Quote             from '../components/page-components/quoteblock/quote.component';

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
