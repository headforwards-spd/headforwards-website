import { boolean, object, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Provider } from 'unstated';

import generateImage from '../../../lib/generate-image';
import generateMenu from '../../../lib/generate-menu';
import companyInfoStoryProps from '../company-info-story-props';
import Navbar from './navbar.component';

export default {
    decorators: [withKnobs],
    title: 'Page Layout/Navbar',
};

const groupId = 'Navbar';

const hasBackgroundLabel = 'Has Background Image?';
const menuLabel = 'Menu';

const headerStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '1440px',
    background: 'no-repeat center center',
    backgroundSize: 'cover',
};

export const Interactive = () => {
    const hasBackground = boolean(hasBackgroundLabel, false, groupId);

    const style = hasBackground
        ? {
              ...headerStyle,
              backgroundImage: `url(${generateImage().publicURL})`,
          }
        : headerStyle;

    const props = {
        hasBackground,
        menu: object(menuLabel, generateMenu(), groupId),
        companyInfo: companyInfoStoryProps,
    };

    return (
        <Provider>
            <section style={style}>
                <Navbar {...props} />
            </section>
        </Provider>
    );
};
