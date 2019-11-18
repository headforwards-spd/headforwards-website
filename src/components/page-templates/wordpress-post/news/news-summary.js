import { arrayOf, shape, string } from 'prop-types';
import React                      from 'react';
import Image                      from '../../../page-layout/image/image.component';
import Link                       from '../../../page-layout/link/link.component';
import styles                     from './news.module.scss';

export default NewsSummary;

NewsSummary.propTypes = {
    title: string.isRequired,
    headerImages: arrayOf(
        shape({
            image: string,
            text: string,
        })
    ).isRequired,
    excerpt: string.isRequired,
    path: string.isRequired,
    date: string.isRequired,
    dateString: string.isRequired,
};
function NewsSummary({ title, headerImages, excerpt, path, date, dateString }) {
    const [firstHeaderImage = {}] = headerImages;
    const { image = null } = firstHeaderImage;

    return (
        <Link to={path} className={styles.newsItem}>
            <article>
                <header>
                    <h1>{title}</h1>
                    {!!image && <Image image={image} alt={title} className={styles.image} />}
                    <time dateTime={date}>posted {dateString}</time>
                </header>
                <p>{excerpt}</p>
                <Link to={path} className={styles.readMore}>
                    Read more
                </Link>
            </article>
        </Link>
    );
}
