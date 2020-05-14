import CMS, { init } from 'netlify-cms-app';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import styles from '!css-loader!sass-loader!../scss/main.scss';

import cmsConfig             from './config';
import BlogPagePreview       from './preview-templates/blog-page-preview';
import InfoPagePreview       from './preview-templates/info-page-preview';
import OptionalObjectControl from './widgets/optional-object-control';
import UuidControl           from './widgets/uuid-control';

// eslint-disable-next-line no-underscore-dangle
window.___loader = { enqueue: () => {}, hovering: () => {} };

const branch = process.env.GATSBY_CMS_BRANCH || 'master';

const config = {
    backend: {
        name: 'github',
        repo: 'andyweirheadforwards/headforwards-website',
        branch,
    },
};

if (branch === 'master') {
    config.publish_mode = 'editorial_workflow';
    config.show_preview_links = true;
}

CMS.registerPreviewStyle(styles.toString(), { raw: true });

CMS.registerWidget({
    name: 'uuid',
    controlComponent: UuidControl,
});
CMS.registerWidget({
    name: 'optional-object',
    controlComponent: OptionalObjectControl,
});

CMS.registerPreviewTemplate('who-we-are', InfoPagePreview);
CMS.registerPreviewTemplate('what-we-do', InfoPagePreview);
CMS.registerPreviewTemplate('how-we-work', InfoPagePreview);
CMS.registerPreviewTemplate('careers', InfoPagePreview);
CMS.registerPreviewTemplate('index-pages', InfoPagePreview);
CMS.registerPreviewTemplate('blog-pages', BlogPagePreview);

init({
    config: {
        ...config,
        ...cmsConfig,
    },
});
