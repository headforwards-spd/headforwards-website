import React  from 'react';
import Navbar from '../navbar/navbar-component';

export default function Header({title, subtitle, img, menu}) {
    return (
        <header>
            <Navbar {...{menu}} />
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </header>
    );
}
