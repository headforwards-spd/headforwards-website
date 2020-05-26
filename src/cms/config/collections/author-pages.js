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
            label: 'ID',
            name: 'uuid',
            widget: 'uuid',
            required: false,
            default: null,
        },
    ],
};

export default authorPages;
