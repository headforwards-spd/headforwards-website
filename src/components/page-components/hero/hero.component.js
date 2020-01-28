import { any, arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Quote from '../quote/quote.component';
import styles from './hero.module.scss';

const heroPropTypes = {
    title: string.isRequired,
    content: arrayOf(any),
    isTwoColumns: bool,
    className: string,
};

export default Hero;
export const HeroPropType = shape(heroPropTypes);

Hero.propTypes = heroPropTypes;
Hero.defaultProps = {
    content: [],
    isTwoColumns: false,
    className: '',
};
function Hero({ title, content, isTwoColumns, className }) {
    const columnsClass = isTwoColumns ? styles.isTwoColumns : '';
    const hasTitleClass = title ? styles.hasTitle : '';
    return (
        <section className={`${styles.hero} ${columnsClass} ${hasTitleClass} ${className}`}>
            {title && <h2>{title}</h2>}
            {content && (
                <section>
                    {content.map(({ type, ...item }) => (
                        <>
                            {type === 'markdown-component' && <ReactMarkdown source={item.text} />}
                            {type === 'quote-component' && <Quote {...item} fullWidth />}
                        </>
                    ))}
                </section>
            )}
        </section>
    );
}
