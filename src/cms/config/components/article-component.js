import linkFields from './link-fields';

const articleComponent = {
    label: 'Articles',
    name: 'article-component',
    widget: 'object',
    fields: [
        {
            label: 'Component Title',
            name: 'title',
            widget: 'string',
            required: false,
            default: null,
        },
        {
            label: 'Articles',
            name: 'articles',
            widget: 'list',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    widget: 'string',
                },
                {
                    label: 'Copy',
                    name: 'text',
                    widget: 'markdown',
                },
                {
                    label: 'Image',
                    name: 'image',
                    widget: 'image',
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

export default articleComponent;
