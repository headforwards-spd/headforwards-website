import linkFields from '../widgets/link-fields';

const blogPostComponent = {
    label: 'Blog Posts',
    name: 'blog-post-component',
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
            label: 'Blog Posts',
            name: 'articles',
            widget: 'list',
            fields: [
                {
                    label: 'Link',
                    name: 'link',
                    ...linkFields,
                },
            ],
        },
    ],
};

export default blogPostComponent;
