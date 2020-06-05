import linkFields from '../widgets/link-fields';

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

export default articleComponent;
