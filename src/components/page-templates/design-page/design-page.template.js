import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';

export default DesignPageTemplate;

DesignPageTemplate.propTypes = {
    components: PropTypes.arrayOf(PageComponentPropType).isRequired,
};

function DesignPageTemplate({ components = [] }) {
    return (
        <Fragment>
            {!!components && components.map((component, key) => <PageComponent key={key} {...component} />)}
        </Fragment>
    );
}
