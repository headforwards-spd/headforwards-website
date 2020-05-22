import allPages from './collections/all-pages';
import authorPages from './collections/author-pages';
import blogPages from './collections/blog-pages';
import indexPages from './collections/index-pages';
import infoPages from './collections/info-pages';
import legalPages from './collections/legal-pages';
import settings from './collections/settings';

const branch = process.env.GATSBY_CMS_BRANCH || 'master';

let siteUrl;

switch (branch) {
    case 'master':
        siteUrl = 'https://www.headforwards.com';
        break;
    case 'sandbox':
        siteUrl = 'https://sandbox.headforwards.com';
        break;
    default:
        siteUrl = '..';
}

export default {
    site_url: siteUrl,
    display_url: 'https://www.headforwards.com',
    logo_url: 'https://www.headforwards.com/images/headforwards.black.png',
    media_folder: 'static/uploads',
    public_folder: '/uploads',
    collections: [blogPages, authorPages, ...infoPages, indexPages, legalPages, settings, allPages],
};
