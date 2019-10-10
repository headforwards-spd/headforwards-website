import React from 'react';

export function Article({mainHeader, secondHeader, articleImg, articlePost}) {
    return (<div>
        <h1>{mainHeader}</h1>
        <img src={articleImg}/>
        <h2>{secondHeader}</h2>
        <p>{articlePost}</p>
        <a href="#">Discover more</a>
    </div>);
}