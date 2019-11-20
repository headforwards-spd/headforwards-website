import {string}          from 'prop-types';
import React, {Fragment} from 'react';
import ReactMarkdown     from 'react-markdown';

const privacyNoticePropTypes = {
    introduction: string,
    personalDataTitle:          string,
    personalData:               string,
    howDoWeCollectTitle:        string,
    howDoWeCollect:             string,
    howLongTitle:               string,
    howLong:                    string,
    regFormsTitle:              string,
    regForms:                   string,
    potentialCustomerDataTitle: string,
    potentialCustomerData:      string,
    marketingDataTitle:         string,
    marketingData:              string,
    privacyData:                {}

};

export default PrivacyNoticeTemplate;

PrivacyNoticeTemplate.propTypes = privacyNoticePropTypes;

PrivacyNoticeTemplate.defaultProps = {
    introduction: '',
    personalDataTitle:          '',
    personalData:               '',
    howDoWeCollectTitle:        '',
    howDoWeCollect:             '',
    howLongTitle:               '',
    howLong:                    '',
    regFormsTitle:              '',
    regForms:                   '',
    potentialCustomerDataTitle: '',
    potentialCustomerData:      '',
    marketingDataTitle:         '',
    marketingData:              ''
};

function PrivacyNoticeTemplate({privacyData}) {
    const {
              introduction, personalDataTitle, personalData, howDoWeCollectTitle, howDoWeCollect, howLongTitle, howLong, regFormsTitle, regForms, potentialCustomerDataTitle, potentialCustomerData, marketingDataTitle, marketingData
          } = privacyData;
    return (
        <Fragment>
            <section>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}}>
                        <ReactMarkdown source={introduction} />
                        <h1>{personalDataTitle}</h1>
                        <ReactMarkdown source={personalData} />
                        <h1>{howDoWeCollectTitle}</h1>
                        <ReactMarkdown source={howDoWeCollect} />
                        <h1>{howLongTitle}</h1>
                        <ReactMarkdown source={howLong} />
                        <h1>{regFormsTitle}</h1>
                        <ReactMarkdown source={regForms} />
                    </div>
                    <div style={{flex: 1}}>
                        <h1>{potentialCustomerDataTitle}</h1>
                        <ReactMarkdown source={potentialCustomerData} />
                        <h1>{marketingDataTitle}</h1>
                        <ReactMarkdown source={marketingData} />
                    </div>
                </div>
            </section>
        </Fragment>
    );
}