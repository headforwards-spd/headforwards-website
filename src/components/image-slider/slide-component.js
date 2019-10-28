import React from 'react'
import {Link} from 'gatsby'
import Image from '../image/image-component'
import styles from './image-slider-component.module.scss'

export default function Slide({title, text, image}) {

    return (
        <section className={styles.slide}>
            <section>
                <h1>{title}</h1>
                <p>{text}</p>
                <Link to={'/'}>Read the case study</Link>
            </section>
            <Image className={styles.slideImage} image={image}/>
        </section>
    );
}
