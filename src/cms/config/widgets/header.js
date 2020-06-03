import introduction from './introduction';

export const bannerImage = {
    label: 'Banner Image',
    name: 'bannerImage',
    widget: 'image',
    required: false,
};

export const title = {
    label: 'Page Title',
    name: 'title',
    widget: 'string',
};

export const subTitle = {
    label: 'Page Sub Title',
    name: 'subtitle',
    widget: 'string',
    required: false,
    default: null,
};

const header = [bannerImage, title, subTitle, introduction];

export default header;
