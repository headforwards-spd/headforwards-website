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
    console.log(tcData);
    return <div>test</div>;
}
