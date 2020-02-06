import { any, arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import Markdown from '../markdown';
import Quote from '../quote/quote.component';
import styles from './hero.module.scss';

const heroPropTypes = {
    title: string,
    content: arrayOf(any),
    isTwoColumns: bool,
    className: string,
};

export default Hero;
export const HeroPropType = shape(heroPropTypes);

Hero.propTypes = heroPropTypes;
Hero.defaultProps = {
    title: null,
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
                    {content.map(({ id, ...item }) => (
                        <HeroContentComponent key={id} {...item} />
                    ))}
                </section>
            )}
        </section>
    );
}

HeroContentComponent.propTypes = {
    type: string.isRequired,
};
function HeroContentComponent({ type, ...item }) {

    const { text } = item || {};
    switch (type) {
        case 'markdown-component':
            return <Markdown source={text} />;
        case 'quote-component':
            return <Quote {...item} fullWidth />;
        default:
            return null;
    }
}
