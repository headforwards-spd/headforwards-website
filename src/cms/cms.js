import CMS from 'netlify-cms-app';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import styles from '!css-loader!sass-loader!../scss/main.scss';
import UuidControl from './widgets/uuid-control';

import InfoPagePreview from './preview-templates/info-page';

CMS.registerPreviewStyle(styles.toString(), { raw: true });

CMS.registerWidget({ name: 'uuid', controlComponent: UuidControl });

CMS.registerPreviewTemplate('who-we-are', InfoPagePreview);
CMS.registerPreviewTemplate('what-we-do', InfoPagePreview);
CMS.registerPreviewTemplate('how-we-work', InfoPagePreview);
CMS.registerPreviewTemplate('careers', InfoPagePreview);
