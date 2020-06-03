import imageCopyComponent from '../components/image-copy-component';
import { subTitle, title } from '../widgets/header';
import introduction from '../widgets/introduction';
import summary from '../widgets/summary';

const sections = {
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
};

const homePage = {
    file: 'src/pages/info-pages/homepage.md',
    label: 'Home Page',
    name: 'home-page',
    create: false,
    delete: false,
    fields: [
        {
            label: 'Banner Image',
            name: 'bannerImage',
            widget: 'image',
            required: true,
        },
        title,
        subTitle,
        { ...introduction, required: true },
        summary,
        sections,
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
};

export default homePage;
