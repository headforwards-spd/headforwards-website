import React, { Fragment } from 'react';
import { arrayOf } from 'prop-types';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';

export default DesignPageTemplate;

DesignPageTemplate.propTypes = {
    components: arrayOf(PageComponentPropType).isRequired,
};

function DesignPageTemplate({ components = [] }) {
    return (
        <Fragment>
            {!!components && components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
        </Fragment>
    );
}
