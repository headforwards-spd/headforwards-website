import React                     from 'react'
import PropTypes   from 'prop-types'
import Image, { ImagePropsType } from '../image/image-component'
import styles                    from './images.module.scss'

export default Article;

Article.propTypes = {
    title: PropTypes.string.isRequired,
    image: ImagePropsType.isRequired,
};

function Article ({title, image, className}) {
    return (
        <section className={`${className} ${styles.article}`}>
            <h1>{title}</h1>
            <Image className={styles.image} image={image}/>
        </section>
    );
}
