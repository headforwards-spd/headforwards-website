import React from 'react';

export function Article({mainHeader, secondHeader, image}) {
    return (<div>
        <h1>{mainHeader}</h1>
        <img src={image}/>
        <h2>{secondHeader}</h2>
        <p>Our business model is different to most other outsource software companies. We create dedicated teams for specific projects and never switch members to other projects, nor do we have team members waiting on the bench which ultimately drives costs up.</p>
        <a href="#">Discover more</a>
    </div>);
}