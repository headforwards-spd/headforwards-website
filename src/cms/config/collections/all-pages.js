const allPages = {
    label: 'All Pages',
    label_singular: 'Page',
    name: 'info-pages',
    description: 'Nothing to see here - allows linking to pages DO NOT EDIT PAGES!',
    folder: 'src/pages/info-pages',
    create: false,
    delete: false,
    identifier_field: 'title',
    fields: [
        {
            label: 'ID',
            name: 'uuid',
            widget: 'uuid',
            required: false,
            default: null,
        },
        {
            label: 'Page Title',
            name: 'title',
            widget: 'string',
        },
    ],
};

export default allPages;
