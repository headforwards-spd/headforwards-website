import React from 'react';
import { shape, string, bool } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styles from './hero.module.scss';

const heroPropTypes = {
    title: string.isRequired,
    text: string,
    isTwoColumns: bool,
    className: string,
};

export default Hero;
export const HeroPropType = shape(heroPropTypes);

Hero.propTypes = heroPropTypes;
Hero.defaultProps = {
    text: null,
    isTwoColumns: false,
    className: '',
};
function Hero({ title, text, isTwoColumns, className }) {
    const columnsClass = isTwoColumns ? styles.isTwoColumns : '';
    return (
        <section className={`${styles.hero} ${columnsClass} ${className}}`}>
            {title && <h2>{title}</h2>}
            <section>
                <ReactMarkdown source={text} />
            </section>
        </section>
    );
}
