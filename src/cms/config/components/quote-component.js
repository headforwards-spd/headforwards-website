export const quoteFields = [
    {
        label: 'Quote',
        name: 'quote',
        widget: 'text',
    },
    {
        label: 'Name',
        name: 'name',
        widget: 'string',
        required: false,
        default: null,
    },
    {
        label: 'Job Title',
        name: 'jobTitle',
        widget: 'string',
        required: false,
        default: null,
    },
    {
        label: 'Profile Picture',
        name: 'profilePic',
        widget: 'image',
        required: false,
        default: null,
    },
];

const quoteComponent = {
    label: 'Quote',
    name: 'quote-component',
    widget: 'object',
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: false,
            default: null,
        },
        ...quoteFields,
    ],
};

export default quoteComponent;
