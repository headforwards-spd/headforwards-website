import { shape, string } from 'prop-types';

export const companyInfoPropTypes = {
    companyName: string,
    callToAction: string,
    email: string,
    address: string,
    phone: string,
    twitterURL: string,
    facebookURL: string,
    instagramURL: string,
    linkedInURL: string,
    registeredAddress: string,
};
export const CompanyInfoPropType = shape(companyInfoPropTypes);
