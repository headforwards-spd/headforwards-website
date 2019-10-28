import React                                                     from 'react';
import Image                                                     from '../image/image-component';
import {flexCol, fullWidthImage, imageRow} from './images-component.module.scss';
import styles from './images-component.module.scss';

export function FullWidthImage({image}) {
    return (
        <div className={fullWidthImage}><Image image={image}/></div>
    );
}

export function TwoImages({leftImage, rightImage}) {
    return (
        <section className={imageRow}>
            <Image image={leftImage}/>
            <Image image={rightImage}/>
        </section>
    );
}

export function BlogImages({title, articles}) {
    return (
        <div className={styles.blogSection}>
                <h1>{title}</h1>
            <div className={styles.flexRow}>
                {articles.map((post, key) => (
                    <div className={flexCol} key={key}>
                        <div>
                            <div className={styles.imageContainer}>
                                <Image image={post.image}/>
                                <span className={styles.colouredBlock}></span>
                            </div>
                            <h2>{post.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
