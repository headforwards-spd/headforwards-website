import { shape, string } from 'prop-types';

export const companyInfoPropTypes = {
    email: string,
    address: string,
    phone: string,
    twitterURL: string,
    facebookURL: string,
    instagramURL: string,
    linkedInURL: string,
};
export const CompanyInfoPropType = shape(companyInfoPropTypes);
