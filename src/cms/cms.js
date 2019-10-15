import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import styles from '!css-loader!sass-loader!../components/styles.scss'

import UuidControl from './widgets/uuid-control'

import DesignPagePreview from './preview-templates/design-page'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewStyle(styles.toString(), { raw: true })

CMS.registerWidget('uuid', UuidControl)

CMS.registerPreviewTemplate('design-pages', DesignPagePreview)
