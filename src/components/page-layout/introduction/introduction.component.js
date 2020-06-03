import { arrayOf, shape, string } from 'prop-types';
import React, { useMemo } from 'react';

import hashArray from '../../../lib/hash-array';
import ContentComponent, { ContentComponentProps } from '../../page-components/content.component';
import styles from './introduction.module.scss';

export default Introduction;
export const IntroductionProps = {
    introduction: shape({
        title: string,
        content: arrayOf(ContentComponentProps),
    }),
    className: string,
};

Introduction.propTypes = IntroductionProps;
Introduction.defaultProps = {
    introduction: null,
    className: '',
};

function Introduction({ introduction, className }) {
    const { title, content } = introduction || {};

    if (!title && !(content || []).length) {
        return null;
    }

    const hashedContent = useMemo(() => (content ? hashArray(content) : content), [content]);

    return (
        <section className={`${styles.introduction} ${className}`}>
            {title && <h2>{title}</h2>}
            {hashedContent &&
                hashedContent.map(({ id, type, ...item }) => <ContentComponent key={id} type={type} {...item} />)}
        </section>
    );
}
