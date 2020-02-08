import { any, arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import ContentComponent from '../content.component';
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
                        <ContentComponent key={id} {...item} />
                    ))}
                </section>
            )}
        </section>
    );
}
