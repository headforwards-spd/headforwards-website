import { string } from 'prop-types';
import React from 'react';
import Link from '../../link/link.component';
import styles from './news.module.scss'

export default NewsSummary;

NewsSummary.propTypes = {
    title: string.isRequired,
    excerpt: string.isRequired,
    path: string.isRequired,
    date: string.isRequired,
    dateString: string.isRequired,
};
function NewsSummary({ title, excerpt, path, date, dateString }) {
    return (
        <article className={styles.newsItem}>
            <h1>{title}</h1>
            <time dateTime={date}>posted {dateString}</time>
            <p>{excerpt}</p>
            <Link to={path} className={styles.readMore}>Read more</Link>
        </article>
    );
}
