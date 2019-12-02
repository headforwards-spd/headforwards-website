import React                      from 'react';
import { arrayOf, shape, string } from 'prop-types';
import ReactMarkdown              from 'react-markdown'
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import styles from './info-page.module.scss';

export default InfoPageTemplate;

InfoPageTemplate.propTypes = {
    introduction: shape({
        title: string,
        text: string.isRequired,
                        }),
    components: arrayOf(PageComponentPropType),
};

InfoPageTemplate.defaultProps = {
    introduction: null,
    components: null,
};

function InfoPageTemplate({ introduction, components = [] }) {
    const {title, text} = introduction || {};

    return <>
        {text && <section className={styles.introduction}>
            {title && <h1>{title}</h1>}
            <ReactMarkdown source={text} />
        </section>}
        {components && <section className={styles.components}>
            {!!components && components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
        </section>}
        </>;
}
