import { configure, addParameters } from '@storybook/react';
import '../src/scss/main.scss';
import viewports                    from './lib/viewports'

global.__PATH_PREFIX__ = ''
// window.___push was renamed to window.___navigate, has to do this renaming too or storybook would error on clicking links
window.___navigate = pathname => {
    action('NavigateTo:')(pathname)
}

addParameters({
                  viewport: {
                      viewports,
                  },
              });
// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
