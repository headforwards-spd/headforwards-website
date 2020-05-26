const seo = {
    label: 'SEO',
    name: 'seo',
    widget: 'object',
    fields: [
        {
            label: 'SEO Slug',
            name: 'slug',
            widget: 'string',
            required: false,
            default: null,
        },
        {
            label: 'SEO Title',
            name: 'title',
            widget: 'string',
            required: false,
            default: null,
        },
        {
            label: 'SEO Description',
            name: 'description',
            widget: 'string',
            required: false,
            default: null,
        },
    ],
};

export default seo;
