import articleComponent from '../components/article-component';
import blogPostComponent from '../components/blog-post-component';
import contentSliderComponent from '../components/content-slider-component';
import imageCopyComponent from '../components/image-copy-component';
import imagesComponent from '../components/images-component';
import quoteComponent from '../components/quote-component';

const pageComponents = {
    label: 'Page Components',
    name: 'components',
    widget: 'list',
    types: [
        imagesComponent,
        quoteComponent,
        imageCopyComponent,
        articleComponent,
        blogPostComponent,
        contentSliderComponent,
    ],
};

export default pageComponents;
