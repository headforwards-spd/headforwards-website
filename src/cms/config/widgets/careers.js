const careers = {
    label: 'Careers',
    name: 'careers',
    widget: 'object',
    fields: [
        {
            label: 'Jobs Title',
            name: 'title',
            widget: 'string',
            required: false,
            default: null,
        },
        {
            label: 'Recruitee Department',
            name: 'department',
            widget: 'string',
            required: false,
            default: null,
        },
        {
            label: 'Recruitee Tag',
            name: 'tag',
            widget: 'string',
            required: false,
            default: null,
        },
        {
            label: 'Application Form',
            name: 'applicationForm',
            widget: 'hidden',
            required: false,
            default: null,
        },
    ],
};

export default careers;
