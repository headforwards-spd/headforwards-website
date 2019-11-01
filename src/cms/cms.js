import CMS from 'netlify-cms-app';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import styles from '!css-loader!sass-loader!../scss/main.scss';

import UuidControl from './widgets/uuid-control';

import DesignPagePreview from './preview-templates/design-page';


CMS.registerPreviewStyle(styles.toString(), { raw: true });

CMS.registerWidget('uuid', UuidControl);

CMS.registerPreviewTemplate('design-pages', DesignPagePreview);
