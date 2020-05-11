import articleComponent       from './components/article-component';
import authorComponent        from './components/author-component';
import blogPostComponent      from './components/blog-post-component';
import contentSliderComponent from './components/content-slider-component';
import imageCopyComponent     from './components/image-copy-component';
import imagesComponent        from './components/images-component';
import linkFields             from './components/link-fields';
import quoteComponent         from './components/quote-component';
import parentOptions          from './parentOptions';

export default getCollection;

export const title = {
    label: 'Page Title',
    name: 'title',
    widget: 'string',
};

export const subTitle = {
    label: 'Page Sub Title',
    name: 'subtitle',
    widget: 'string',
    required: false,
    default: null,
};

export const bannerImage = {
    label: 'Page Image (banner/menu image)',
    name: 'image',
    widget: 'object',
    fields: [
        {
            label: 'Show Banner Image?',
            name: 'show',
            widget: 'boolean',
            required: false,
            default: false,
        },
        {
            label: 'Image',
            name: 'image',
            widget: 'image',
            required: true,
        },
    ],
};

export const introduction = {
    label: 'Page Introduction (menu text)',
    name: 'introduction',
    widget: 'object',
    fields: [
        {
            label: 'Show Introduction?',
            name: 'show',
            widget: 'hidden',
            default: false,
        },
        {
            label: 'Text',
            name: 'text',
            widget: 'markdown',
            required: true,
        },
    ],
};

export const footerLinks = {
    label: 'Footer Links',
    name: 'footerLinks',
    widget: 'optional-object',
    required: false,
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: false,
            default: null,
        },
        {
            label: 'Show Images?',
            name: 'showImages',
            widget: 'boolean',
            required: false,
            default: null,
        },
        {
            label: 'Link',
            name: 'link1',
            ...linkFields,
        },
        {
            label: 'Link',
            name: 'link2',
            ...linkFields,
        },
        {
            label: 'Link',
            name: 'link3',
            ...linkFields,
        },
    ],
};

export const pageComponents = {
    label: 'Page Components',
    name: 'components',
    widget: 'list',
    types: [
        imagesComponent,
        quoteComponent,
        imageCopyComponent,
        articleComponent,
        blogPostComponent,
        authorComponent,
        contentSliderComponent,
    ],
};

export const callToAction = {
    label: 'Call to action',
    name: 'callToAction',
    widget: 'string',
    required: false,
    default: null,
};

export const seo = {
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

export const uuid = {
    label: 'ID',
    name: 'uuid',
    widget: 'uuid',
    required: false,
    default: null,
};

export const type = {
    label: 'Type',
    name: 'type',
    widget: 'hidden',
    default: 'info-page',
};

export const careers = {
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

function getCollection({ title: label, slug }) {
    const collection = {
        label,
        label_singular: 'Page',
        name: slug,
        description: `"${label}" category pages.`,
        folder: 'src/pages/info-pages',
        create: true,
        slug: '{{slug}}',
        preview_path: '{{parent}}/{{slug}}',
        identifier_field: 'title',
        filter: {
            field: 'parent',
            value: slug,
        },
        fields: [
            title,
            subTitle,
            bannerImage,
            introduction,
            {
                label: 'Parent',
                name: 'parent',
                widget: 'select',
                default: slug,
                options: parentOptions,
            },
            pageComponents,
            footerLinks,
            callToAction,
            seo,
            uuid,
            type,
        ],
    };
    slug === 'careers' && collection.fields.push(careers);

    return collection;
}
