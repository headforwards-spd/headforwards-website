import collections from './collections';

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
    collections,
};
