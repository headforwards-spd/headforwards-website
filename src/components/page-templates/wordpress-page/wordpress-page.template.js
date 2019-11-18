import { arrayOf, string } from 'prop-types';
import React from 'react';
import styles from './wordpress-page.module.scss';
import WordpressContent from '../../page-layout/wordpress-content/wordpress-content.component';

const wordpressPageTemplateProps = {
    html: string.isRequired,
    categories: arrayOf(string),
    tags: arrayOf(string),
};

export default WordpressPageTemplate;

WordpressPageTemplate.propTypes = wordpressPageTemplateProps;
WordpressPageTemplate.defaultProps = {
    categories: [],
    tags: [],
};

function WordpressPageTemplate({ html, categories, tags }) {
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
