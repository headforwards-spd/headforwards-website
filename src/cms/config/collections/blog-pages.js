import author from '../widgets/author';
import callToAction from '../widgets/call-to-action';
import footerLinks from '../widgets/footer-links';
import header from '../widgets/header';
import pageComponents from '../widgets/page-components';
import publishDate from '../widgets/publish-date';
import seo from '../widgets/seo';
import summary from '../widgets/summary';
import uuid from '../widgets/uuid';

const blogPages = {
    label: 'Blog Pages',
    label_singular: 'Blog Page',
    name: 'blog-pages',
    description: 'Blog Pages',
    folder: 'src/pages/info-pages',
    create: true,
    slug: '{{slug}}',
    preview_path: 'insights/{{slug}}',
    identifier_field: 'title',
    filter: {
        field: 'type',
        value: 'blog-page',
    },
    fields: [
        ...header,
        summary,
        author,
        publishDate,
        pageComponents,
        footerLinks,
        callToAction,
        seo,
        uuid,
        {
            label: 'Type',
            name: 'type',
            widget: 'hidden',
            default: 'blog-page',
        },
        {
            label: 'Parent',
            name: 'parent',
            widget: 'hidden',
            default: 'insights',
        },
    ],
};

export default blogPages;
