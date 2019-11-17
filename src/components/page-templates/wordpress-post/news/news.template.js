import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import NewsSummary from './news-summary';
import styles from './news.module.scss';

export default NewsPageTemplate;

NewsPageTemplate.propTypes = {
    items: shape({
        nodes: arrayOf(
            shape({
                title: string,
                headerImages: arrayOf(
                    shape({
                        image: string,
                        text: string,
                    })
                ),
                excerpt: string,
                path: string,
                date: string,
                dateString: string,
            })
        ),
    }).isRequired,
};
function NewsPageTemplate({ items }) {
    const { nodes: news } = items;

    return (
        <section className={styles.newsSummary}>
            {news.map(({ id: key, frontmatter }) => (
                <NewsSummary key={key} {...frontmatter} />
            ))}
        </section>
    );
}
