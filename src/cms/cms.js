import CMS, { init } from 'netlify-cms-app';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import styles from '!css-loader!sass-loader!../scss/main.scss';

import InfoPagePreview from './preview-templates/info-page-preview';
import OptionalObjectControl from './widgets/optional-object-control';
import UuidControl from './widgets/uuid-control';

const config = {
    backend: {
        name: 'github',
        repo: 'andyweirheadforwards/headforwards-website',
        publish_mode: 'editorial_workflow',
        branch: process.env.GATSBY_CMS_BRANCH,
    },
};

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

console.log({config});

init({ config });
