import React  from 'react';
import Navbar from '../navbar/navbar-component';
import { navBackground, smallTitle, largeTitle } from './header-component.module.scss';

export default function Header({title, paragraph, image, menu}) {

    const titleFontSize = !!paragraph ? smallTitle : largeTitle;
    const backgroundImg = image.publicURL ? navBackground : '';
    const hasBackgroundImg = !!image.publicURL;
    return (
        <header className={backgroundImg} style={{background: `linear-gradient(#00000080, #00000080), url(${image.publicURL}) center center/cover no-repeat`}}>
            <Navbar {...{menu, hasBackgroundImg}} />
            <div>
                <p>{paragraph}</p>
                <h1 className={titleFontSize}>{title}</h1>
            </div>
        </header>
    );
}
