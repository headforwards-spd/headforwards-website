import linkFields from './link-fields';

const contentSliderComponent = {
    label: 'Content Slider',
    name: 'content-slider-component',
    widget: 'object',
    fields: [
        {
            label: 'Component Title',
            name: 'title',
            widget: 'string',
        },
        {
            label: 'Slides',
            name: 'articles',
            widget: 'list',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    widget: 'string',
                },
                {
                    label: 'Image',
                    name: 'image',
                    widget: 'image',
                },
                {
                    label: 'Copy',
                    name: 'text',
                    widget: 'text',
                },
                {
                    label: 'Link Text',
                    name: 'linkText',
                    widget: 'string',
                    default: 'Read more',
                },
                {
                    label: 'Link',
                    name: 'linkFields',
                    ...linkFields,
                },
            ],
        },
    ],
};

export default contentSliderComponent;
