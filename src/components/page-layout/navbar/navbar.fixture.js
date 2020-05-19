import React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Provider } from 'unstated';

import generateImage from '../../../lib/generate-image';
import generateMenu from '../../../lib/generate-menu';
import companyInfoStoryProps from '../company-info-story-props';
import Navbar from './navbar.component';

export default {
    'Navbar Component': Component,
};

const headerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'no-repeat center center',
    backgroundSize: 'cover',
};

const defaultValue = {
    menu: generateMenu(),
    companyInfo: companyInfoStoryProps,
};
const defaultBackgroundImage = generateImage().publicURL;

function Component() {
    const [backgroundImage] = useValue('Background Image', { defaultValue: defaultBackgroundImage });
    const [props] = useValue('Props', { defaultValue });

    const hasBackground = !!backgroundImage;
    const style = hasBackground ? { ...headerStyle, backgroundImage: `url(${backgroundImage})` } : headerStyle;

    return (
        <Provider>
            <section style={style}>
                <Navbar {...{ ...props, hasBackground }} />
            </section>
        </Provider>
    );
}
