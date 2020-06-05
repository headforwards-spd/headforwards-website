import CMS, { init } from 'netlify-cms-app';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import styles from '!css-loader!sass-loader!../scss/main.scss';

import cmsConfig from './config';
import OptionalObjectControl from './custom-widgets/optional-object-control';
import UuidControl from './custom-widgets/uuid-control';
import BlogPagePreview from './preview-templates/blog-page-preview';
import CareersPagePreview from './preview-templates/careers-page-preview';
import IndexPagePreview from './preview-templates/index-page-preview';
import InfoPagePreview from './preview-templates/info-page-preview';

// eslint-disable-next-line no-underscore-dangle
window.___loader = { enqueue: () => {}, hovering: () => {} };

const branch = process.env.GATSBY_CMS_BRANCH || 'master';

const config = {
    backend: {
        name: 'github',
        repo: 'andyweirheadforwards/headforwards-website',
        branch,
        // use_graphql: true,
    },
};

if (branch === 'master') {
    config.publish_mode = 'editorial_workflow';
    config.show_preview_links = true;
}

if (branch === 'HW-71') {
    config.local_backend = true;
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

CMS.registerPreviewTemplate('index-pages', IndexPagePreview);
CMS.registerPreviewTemplate('who-we-are', InfoPagePreview);
CMS.registerPreviewTemplate('what-we-do', InfoPagePreview);
CMS.registerPreviewTemplate('how-we-work', InfoPagePreview);
CMS.registerPreviewTemplate('blog-pages', BlogPagePreview);
CMS.registerPreviewTemplate('careers', CareersPagePreview);

init({
    config: {
        ...config,
        ...cmsConfig,
    },
});
