import linkFields from '../widgets/link-fields';
import { quoteFields } from './quote-component';

const imageCopyComponent = {
    label: 'Image & Copy',
    name: 'image-copy-component',
    widget: 'object',
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: false,
            default: null,
        },
        {
            label: 'Image',
            name: 'image',
            widget: 'image',
            required: false,
            default: null,
        },
        {
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
        },
        {
            label: 'Link',
            name: 'linkFields',
            required: false,
            default: null,
            widget: 'optional-object',
            fields: [
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
        {
            label: 'Image on right?',
            name: 'isRightImage',
            widget: 'boolean',
            required: false,
            default: false,
        },
        {
            label: 'Postit?',
            name: 'isPostit',
            widget: 'boolean',
            required: false,
            default: false,
        },
        {
            label: 'Two columns (no image)?',
            name: 'isTwoColumns',
            widget: 'boolean',
            required: false,
            default: false,
        },
    ],
};

export default imageCopyComponent;
