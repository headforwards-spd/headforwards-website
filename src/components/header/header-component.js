import React                                               from 'react';
import Image                                               from '../image/image-component';
import Navbar                                              from '../navbar/navbar-component';
import { navBackground, smallTitle, largeTitle, subTitle } from './header-component.module.scss';

export default function Header({title, paragraph, image, menu}) {

    const titleFontSize = !!paragraph ? smallTitle : largeTitle;
    const {publicURL} = image || {};
    const backgroundImg = publicURL ? navBackground : '';
    const hasBackgroundImg = !!publicURL;
    return (
        <header className={backgroundImg}>
            <Navbar {...{menu, hasBackgroundImg}} />
            {!!image && <Image image={image} />}
            <div>
                <h2 className={subTitle}>{paragraph}</h2>
                <h1 className={titleFontSize}>{title}</h1>
            </div>
        </header>
    );
}
