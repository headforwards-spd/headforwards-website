import parentOptions from '../parentOptions';
import callToAction from '../widgets/call-to-action';
import careers from '../widgets/careers';
import footerLinks from '../widgets/footer-links';
import header from '../widgets/header';
import pageComponents from '../widgets/page-components';
import seo from '../widgets/seo';
import summary from '../widgets/summary';
import uuid from '../widgets/uuid';

const infoPages = parentOptions.map(({ label: title, value: slug }) =>
    getCollection({
        title,
        slug,
    })
);

export default infoPages;

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
            header,
            summary,
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
            {
                label: 'Type',
                name: 'type',
                widget: 'hidden',
                default: 'info-page',
            },
        ],
    };
    slug === 'careers' && collection.fields.push(careers);

    return collection;
}
