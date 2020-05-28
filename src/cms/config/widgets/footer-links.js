import linkFields from './link-fields';

const footerLinks = {
    label: 'Footer Links',
    name: 'footerLinks',
    widget: 'optional-object',
    required: false,
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: false,
            default: null,
        },
        {
            label: 'Show Images?',
            name: 'showImages',
            widget: 'boolean',
            required: false,
            default: null,
        },
        {
            label: 'Link',
            name: 'link1',
            required: true,
            ...linkFields,
        },
        {
            label: 'Link',
            name: 'link2',
            required: true,
            ...linkFields,
        },
        {
            label: 'Link',
            name: 'link3',
            required: true,
            ...linkFields,
        },
    ],
};

export default footerLinks;
