import React from 'react';
import { arrayOf } from 'prop-types';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';

export default DesignPageTemplate;

DesignPageTemplate.propTypes = {
    components: arrayOf(PageComponentPropType),
};

DesignPageTemplate.defaultProps = {
    components: null,
};

function DesignPageTemplate({ components = [] }) {
    return <>{!!components && components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}</>;
}
