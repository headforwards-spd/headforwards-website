import linkFields from '../widgets/link-fields';

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
                    label: 'Link Text',
                    name: 'linkText',
                    widget: 'string',
                    default: 'Read more',
                },
                {
                    label: 'Link',
                    name: 'link',
                    ...linkFields,
                },
            ],
        },
    ],
};

export default contentSliderComponent;
