const authorPages = {
    label: 'Authors',
    label_singular: 'Author',
    name: 'author-pages',
    folder: 'src/pages/author-pages',
    create: true,
    delete: false,
    identifier_field: 'name',
    fields: [
        {
            label: 'Author Name',
            name: 'name',
            widget: 'string',
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
        {
            label: 'Bio',
            name: 'bio',
            widget: 'text',
        },
        {
            label: 'Social Media',
            name: 'social',
            widget: 'object',
            fields: [
                {
                    label: 'LinkedIn URL',
                    name: 'linkedIn',
                    widget: 'string',
                    required: false,
                },
                {
                    label: 'Twitter URL',
                    name: 'twitter',
                    widget: 'string',
                    required: false,
                },
                {
                    label: 'Facebook URL',
                    name: 'facebook',
                    widget: 'string',
                    required: false,
                },
            ],
        },
        {
            label: 'ID',
            name: 'uuid',
            widget: 'uuid',
            required: false,
            default: null,
        },
    ],
};

export default authorPages;
