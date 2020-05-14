import CMS, { init } from 'netlify-cms-app';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import styles from '!css-loader!sass-loader!../scss/main.scss';

import cmsConfig from './config';
import CareersPagePreview from './preview-templates/careers-page-preview';
import IndexPagePreview from './preview-templates/index-page-preview';
import InfoPagePreview from './preview-templates/info-page-preview';
import OptionalObjectControl from './widgets/optional-object-control';
import UuidControl from './widgets/uuid-control';

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

CMS.registerPreviewTemplate('index-pages', IndexPagePreview);

CMS.registerPreviewTemplate('who-we-are', InfoPagePreview);
CMS.registerPreviewTemplate('what-we-do', InfoPagePreview);
CMS.registerPreviewTemplate('how-we-work', InfoPagePreview);
CMS.registerPreviewTemplate('careers', CareersPagePreview);

init({
    config: {
        ...config,
        ...cmsConfig,
    },
});
