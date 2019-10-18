import React  from 'react';
import Navbar from '../navbar/navbar-component';

export default function Header({title, paragraph, image, menu}) {

    const backgroundImg = image.publicURL ? 'nav-background' : '';
    return (
        <header className={backgroundImg} style={{backgroundImage: `url(${image.publicURL})`}}>
            <Navbar {...{menu}} />
            <div>
                <h1>{title}</h1>
                <p>{paragraph}</p>
            </div>
        </header>
    );
}
