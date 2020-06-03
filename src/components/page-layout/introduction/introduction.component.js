import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

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

    return (
        <section className={`${styles.introduction} ${className}`}>
            {title && <h2>{title}</h2>}
            {content && content.map(({ id, type, ...item }) => <ContentComponent key={id} type={type} {...item} />)}
        </section>
    );
}
