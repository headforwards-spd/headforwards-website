const companyInfo = {
    file: 'src/data/company-info.yml',
    label: 'Company Information',
    name: 'company-info',
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'hidden',
            default: 'company-info',
        },
        {
            label: 'Meta Title',
            name: 'metaTitle',
            widget: 'string',
        },
        {
            label: 'Meta Description',
            name: 'metaDescription',
            widget: 'string',
        },
        {
            label: 'Company Name',
            name: 'companyName',
            widget: 'string',
        },
        {
            label: 'Email Address',
            name: 'email',
            widget: 'string',
        },
        {
            label: 'Address',
            name: 'address',
            widget: 'text',
        },
        {
            label: 'Phone Number',
            name: 'phone',
            widget: 'string',
        },
        {
            label: 'Facebook URL',
            name: 'facebookURL',
            widget: 'string',
            required: false,
        },
        {
            label: 'Instagram URL',
            name: 'instagramURL',
            widget: 'string',
            required: false,
        },
        {
            label: 'Linkedin URL',
            name: 'linkedInURL',
            widget: 'string',
            required: false,
        },
        {
            label: 'Youtube URL',
            name: 'youtubeURL',
            widget: 'string',
            required: false,
        },
        {
            label: 'Twitter URL',
            name: 'twitterURL',
            widget: 'string',
            required: false,
        },
        {
            label: 'Registered Office Address',
            name: 'registeredAddress',
            widget: 'text',
        },
    ],
};

export default companyInfo;
