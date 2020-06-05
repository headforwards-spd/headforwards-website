import callToAction from '../widgets/call-to-action';
import footerLinks from '../widgets/footer-links';
import header from '../widgets/header';
import pageComponents from '../widgets/page-components';
import seo from '../widgets/seo';
import summary from '../widgets/summary';
import uuid from '../widgets/uuid';

const blogIndexPages = {
    label: 'Blog Index Pages',
    label_singular: 'Blog Index Page',
    name: 'blog-index-pages',
    description: 'Index pages',
    folder: 'src/pages/info-pages',
    create: false,
    delete: false,
    slug: '{{slug}}',
    preview_path: '{{slug}}',
    identifier_field: 'title',
    filter: {
        field: 'type',
        value: 'blog-index',
    },
    fields: [
        ...header,
        summary,
        pageComponents,
        footerLinks,
        callToAction,
        seo,
        uuid,
        {
            label: 'Type',
            name: 'type',
            widget: 'hidden',
            default: 'blog-index',
        },
    ],
};
export default blogIndexPages;
