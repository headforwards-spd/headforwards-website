import React                     from 'react'
import PropTypes                 from 'prop-types'
import {Link} from 'gatsby';
import Image, { ImagePropsType } from '../../image/image-component'
import { ReactComponent as Arrow } from '../../../img/arrow-right.svg';
import styles                    from './blog-images.module.scss'

export default Article;
export const ArticlePropType = {
    title: PropTypes.string.isRequired,
    image: ImagePropsType.isRequired,
    link:  PropTypes.string.isRequired,
};

Article.propTypes = ArticlePropType;

function Article ({title, image, link}) {
    return (
        <section className={styles.article}>
            <h1>{title}</h1>
            <Image className={styles.image} image={image}/>
            <Link to={link}><Arrow /></Link>
        </section>
    );
}
