import React from 'react';

const termsConditionsPropTypes = {
    tcData: {},
};

export default TermsConditionsTemplate;

TermsConditionsTemplate.propTypes = termsConditionsPropTypes;

TermsConditionsTemplate.defaultProps = {
    tcData: {},
};

function TermsConditionsTemplate({ tcData }) {
    return <div>test</div>;
}
