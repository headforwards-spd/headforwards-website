import contentField from './content-field';

const introduction = {
    label: 'Page Introduction',
    name: 'introduction',
    required: false,
    widget: 'object',
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: false,
            default: null,
        },
        { ...contentField },
    ],
};

export default introduction;
