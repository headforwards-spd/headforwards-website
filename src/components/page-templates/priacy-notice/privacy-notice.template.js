import React, {Fragment} from 'react';

export default PrivacyNoticeTemplate;

function PrivacyNoticeTemplate({privacyData}) {
    const {personalDataTitle,
              personalData,
              howDoWeCollectTitle,
              howDoWeCollect,
              howLongTitle,
              howLong,
              regFormsTitle,
              regForms,
              potentialCustomerDataTitle,
              potentialCustomerData,
              marketingDataTitle,
              marketingData} = privacyData;
    return (
        <Fragment>
            <h1>{personalDataTitle}</h1>
            <p>{personalData}</p>
            <h1>{howDoWeCollectTitle}</h1>
            <p>{howDoWeCollect}</p>
            <h1>{howLongTitle}</h1>
            <p>{howLong}</p>
            <h1>{regFormsTitle}</h1>
            <p>{regForms}</p>
            <h1>{potentialCustomerDataTitle}</h1>
            <p>{potentialCustomerData}</p>
            <h1>{marketingDataTitle}</h1>
            <p>{marketingData}</p>
        </Fragment>
    );
}