import callToAction from '../widgets/call-to-action';
import footerLinks from '../widgets/footer-links';
import { introduction, subTitle, title } from '../widgets/header';
import seo from '../widgets/seo';
import summary from '../widgets/summary';
import uuid from '../widgets/uuid';

const sections = {
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
};

const legalPages = {
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
        title,
        subTitle,
        introduction,
        summary,
        sections,
        footerLinks,
        callToAction,
        seo,
        uuid,
        {
            label: 'Type',
            name: 'type',
            widget: 'hidden',
            default: 'legal-page',
        },
    ],
};

export default legalPages;
