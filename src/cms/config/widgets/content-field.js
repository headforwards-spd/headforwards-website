import { quoteFields } from '../components/quote-component';

const contentField = {
    label: 'Content',
    name: 'content',
    widget: 'list',
    types: [
        {
            label: 'Copy',
            name: 'markdown-component',
            widget: 'object',
            fields: [
                {
                    label: 'Copy',
                    name: 'text',
                    widget: 'markdown',
                },
            ],
        },
        {
            label: 'Quote',
            name: 'quote-component',
            widget: 'object',
            fields: quoteFields,
        },
    ],
};

export default contentField;
