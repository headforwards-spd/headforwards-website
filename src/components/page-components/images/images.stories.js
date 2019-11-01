import { withKnobs } from '@storybook/addon-knobs';

export default {
    decorators: [withKnobs],
    title: 'Page Components/Images',
};

export { default as FullWidthImage } from './full-width/full-width-image.story';
export { default as TwoImages } from './two/two-images.story';
export { default as BlogImages } from './blog/blog-images.story';
