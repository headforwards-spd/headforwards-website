import React from 'react';
import { arrayOf } from 'prop-types';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';

export default InfoPageTemplate;

InfoPageTemplate.propTypes = {
    components: arrayOf(PageComponentPropType),
};

InfoPageTemplate.defaultProps = {
    components: null,
};

function InfoPageTemplate({ components = [] }) {
    return <>{!!components && components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}</>;
}
