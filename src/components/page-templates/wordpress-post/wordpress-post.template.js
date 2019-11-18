import parseHtml                  from 'html-react-parser';
import { arrayOf, shape, string } from 'prop-types';
import React                      from 'react';
import styles                     from './wordpress-post.module.scss';
import Link                       from '../../page-layout/link/link.component';
import WordpressContent           from '../../page-layout/wordpress-content/wordpress-content.component';

const wordpressPostTemplateProps = {
    prev: shape({
        frontmatter: shape({
            path: string,
            title: string,
            excerpt: string,
            date: string,
        }),
    }),
    next: shape({
        frontmatter: shape({
            path: string,
            title: string,
            excerpt: string,
            date: string,
        }),
    }),
    html: string.isRequired,
    author: shape({ name: string }).isRequired,
    categories: arrayOf(string),
    tags: arrayOf(string),
    date: string.isRequired,
};

export default WordpressPostTemplate;

WordpressPostTemplate.propTypes = wordpressPostTemplateProps;
WordpressPostTemplate.defaultProps = {
    prev: null,
    next: null,
    categories: [],
    tags: [],
};

function WordpressPostTemplate({ prev, next, html, author, categories, tags, date }) {
    return (
        <>
            <dl className={styles.dataTable}>
                <dt>Author</dt>
                <dd>{author.name}</dd>
                <dt>Categories</dt>
                <dd>{categories.join(', ')}</dd>
                <dt>Tags</dt>
                <dd>{tags.join(', ')}</dd>
                <dt>Date</dt>
                <dd>{date}</dd>
            </dl>
            <WordpressContent content={html} />
            <nav className={styles.prevNext}>
                {prev && (
                    <Link to={`${prev.frontmatter.path}`} className={styles.prev}>
                        <section>
                            <h1>{parseHtml(prev.frontmatter.title)}</h1>
                            <p>{prev.frontmatter.excerpt}</p>
                            <p>{prev.frontmatter.date}</p>
                        </section>
                    </Link>
                )}
                {next && (
                    <Link to={`${next.frontmatter.path}`} className={styles.next}>
                        <section>
                            <h1>{parseHtml(next.frontmatter.title)}</h1>
                            <p>{next.frontmatter.excerpt}</p>
                            <p>{next.frontmatter.date}</p>
                        </section>
                    </Link>
                )}
            </nav>
        </>
    );
}
