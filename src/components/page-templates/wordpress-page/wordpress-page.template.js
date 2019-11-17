import { arrayOf, string } from 'prop-types';
import React from 'react';
import styles from './wordpress-page-page.module.scss';
import WordpressContent from '../../page-layout/wordpress-content/wordpress-content.component';

const wordpressPagePageTemplateProps = {
    html: string.isRequired,
    categories: arrayOf(string),
    tags: arrayOf(string),
};

export default WordpressPagePageTemplate;

WordpressPagePageTemplate.propTypes = wordpressPagePageTemplateProps;
WordpressPagePageTemplate.defaultProps = {
    categories: [],
    tags: [],
};

function WordpressPagePageTemplate({ html, categories, tags }) {

    console.log({html, categories, tags});

    return (
        <>
            <dl className={styles.dataTable}>
                <dt>Categories</dt>
                <dd>{categories.join(', ')}</dd>
                <dt>Tags</dt>
                <dd>{tags.join(', ')}</dd>
            </dl>
            <WordpressContent content={html} />
        </>
    );
}
