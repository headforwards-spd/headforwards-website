import imageCopyComponent from './components/image-copy-component';
import linkAuthor from './components/link-author';
import getCollection, * as page from './getCollection';
import parentOptions from './parentOptions';

export default [
    ...parentOptions.map(({ label: title, value: slug }) =>
        getCollection({
            title,
            slug,
        })
    ),
    {
        label: 'Index Pages',
        label_singular: 'Index Page',
        name: 'index-pages',
        description: 'Index pages',
        folder: 'src/pages/info-pages',
        create: false,
        delete: false,
        slug: '{{slug}}',
        preview_path: '{{slug}}',
        identifier_field: 'title',
        filter: {
            field: 'type',
            value: 'index-page',
        },
        fields: [
            page.title,
            page.subTitle,
            page.bannerImage,
            {
                label: 'Page Introduction (menu text)',
                name: 'introduction',
                widget: 'object',
                fields: [
                    {
                        label: 'Show Introduction?',
                        name: 'show',
                        widget: 'boolean',
                        required: false,
                        default: false,
                    },
                    {
                        label: 'Text',
                        name: 'text',
                        widget: 'markdown',
                        required: true,
                    },
                ],
            },
            page.pageComponents,
            page.footerLinks,
            page.callToAction,
            page.seo,
            page.uuid,
            page.type,
        ],
    },
    {
        label: 'Authors',
        label_singular: 'Author',
        name: 'author-pages',
        folder: 'src/pages/author-pages',
        create: true,
        delete: true,
        identifier_field: 'name',
        fields: [
            {
                label: 'ID',
                name: 'uuid',
                widget: 'uuid',
                required: false,
                default: null,
            },
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
        ],
    },
    {
        label: 'Blog Pages',
        label_singular: 'Blog Page',
        name: 'blog-pages',
        description: 'Blog Pages',
        folder: 'src/pages/info-pages',
        create: true,
        slug: '{{slug}}',
        preview_path: '{{slug}}',
        identifier_field: 'title',
        filter: {
            field: 'type',
            value: 'blog-page',
        },
        fields: [
            page.title,
            page.subTitle,
            {
                label: 'Author Name',
                name: 'author',
                ...linkAuthor,
            },
            // {
            //     label: 'Publish Date',
            //     name: 'publishedDate',
            //     widget: 'datetime',
            //     timeFormat: false,
            //     dateFormat: 'DD.MM.YYYY',
            //     required: false,
            //     // hidden: true
            // },
            {
                label: 'Page Introduction (menu text)',
                name: 'introduction',
                widget: 'object',
                fields: [
                    {
                        label: 'Show Introduction?',
                        name: 'show',
                        widget: 'boolean',
                        required: false,
                        default: false,
                    },
                    {
                        label: 'Text',
                        name: 'text',
                        widget: 'markdown',
                        required: true,
                    },
                ],
            },
            page.pageComponents,
            page.footerLinks,
            page.callToAction,
            page.seo,
            page.uuid,
            page.type,
        ],
    },
    {
        label: 'Legal Pages',
        label_singular: 'Legal Page',
        name: 'pages',
        description: 'Site legal pages',
        folder: 'src/pages/info-pages',
        create: false,
        slug: '{{slug}}',
        preview_path: '{{slug}}',
        identifier_field: 'title',
        filter: {
            field: 'type',
            value: 'legal-page',
        },
        fields: [
            page.title,
            page.subTitle,
            page.introduction,
            {
                label: 'Show Introduction?',
                name: 'show',
                widget: 'boolean',
                required: false,
                default: false,
            },
            {
                label: 'Sections',
                name: 'sections',
                widget: 'list',
                required: true,
                fields: [
                    {
                        label: 'Title',
                        name: 'title',
                        widget: 'string',
                        required: false,
                        default: null,
                    },
                    {
                        label: 'Copy',
                        name: 'text',
                        widget: 'markdown',
                    },
                ],
            },
            page.footerLinks,
            page.callToAction,
            page.seo,
            page.type,
        ],
    },
    {
        name: 'settings',
        label: 'Site Settings',
        description: 'Website settings & meta data',
        files: [
            {
                file: 'src/pages/info-pages/homepage.md',
                label: 'Home Page',
                name: 'home-page',
                create: false,
                delete: false,
                fields: [
                    page.title,
                    page.subTitle,
                    {
                        label: 'Page Image (banner/menu image)',
                        name: 'image',
                        widget: 'object',
                        fields: [
                            {
                                label: 'Show Banner Image?',
                                name: 'show',
                                widget: 'hidden',
                                required: true,
                                default: true,
                            },
                            {
                                label: 'Image',
                                name: 'image',
                                widget: 'image',
                                required: true,
                            },
                        ],
                    },
                    {
                        label: 'Page Introduction (menu text)',
                        name: 'introduction',
                        widget: 'object',
                        fields: [
                            {
                                label: 'Show Introduction?',
                                name: 'show',
                                widget: 'hidden',
                                required: true,
                                default: true,
                            },
                            {
                                label: 'Text',
                                name: 'text',
                                widget: 'markdown',
                                required: true,
                            },
                        ],
                    },
                    {
                        label: 'Sections',
                        name: 'sections',
                        widget: 'list',
                        fields: [
                            {
                                label: 'Title',
                                name: 'title',
                                widget: 'string',
                                required: false,
                                default: null,
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
                                label: 'Image',
                                name: 'image',
                                widget: 'image',
                                required: false,
                                default: null,
                            },
                            {
                                label: 'Components',
                                name: 'components',
                                widget: 'list',
                                types: [imageCopyComponent],
                            },
                        ],
                    },
                    {
                        name: 'seo',
                        widget: 'hidden',
                        default: {
                            slug: '/',
                        },
                    },
                    {
                        label: 'ID',
                        name: 'uuid',
                        widget: 'hidden',
                        required: true,
                    },
                    {
                        label: 'Type',
                        name: 'type',
                        widget: 'hidden',
                        default: 'home-page',
                    },
                ],
            },
            {
                file: 'src/data/main-menu.yml',
                label: 'Main Menu',
                name: 'main-menu',
                create: false,
                delete: false,
                fields: [
                    {
                        label: 'Title',
                        name: 'title',
                        widget: 'hidden',
                        default: 'main-menu',
                    },
                    {
                        label: 'Items',
                        name: 'menu',
                        widget: 'list',
                        fields: [
                            {
                                label: 'Label',
                                name: 'linkText',
                                widget: 'string',
                                default: 'Read more',
                            },
                            {
                                label: 'Link',
                                name: 'link',
                                widget: 'relation',
                                collection: 'info-pages',
                                searchFields: ['title'],
                                valueField: 'uuid',
                                displayFields: ['title'],
                            },
                            {
                                label: 'Children',
                                name: 'children',
                                widget: 'list',
                                fields: [
                                    {
                                        label: 'Label',
                                        name: 'linkText',
                                        widget: 'string',
                                        default: 'Read more',
                                    },
                                    {
                                        label: 'Link',
                                        name: 'link',
                                        widget: 'relation',
                                        collection: 'info-pages',
                                        searchFields: ['title'],
                                        valueField: 'uuid',
                                        displayFields: ['title'],
                                    },
                                    {
                                        label: 'Children',
                                        name: 'children',
                                        widget: 'list',
                                        fields: [
                                            {
                                                label: 'Label',
                                                name: 'linkText',
                                                widget: 'string',
                                                default: 'Read more',
                                            },
                                            {
                                                label: 'Link',
                                                name: 'link',
                                                widget: 'relation',
                                                collection: 'info-pages',
                                                searchFields: ['title'],
                                                valueField: 'uuid',
                                                displayFields: ['title'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
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
            },
        ],
    },
    {
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
    },
];
