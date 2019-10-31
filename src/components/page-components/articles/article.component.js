import React  from 'react'
import Image  from '../../image/image.component'
import Link   from '../../link/link.component'
import styles from './articles.module.scss'

export default function Article({title, text, image, link, linkText}) {

    const hasLink = !!link && !!linkText;

    return (
        <section className={styles.article}>
            <h1>{title}</h1>
            <Image image={image} className={styles.image}/>
            <p>{text}</p>
            {hasLink && <Link to={link}>{linkText}</Link>}
        </section>
    );
}
