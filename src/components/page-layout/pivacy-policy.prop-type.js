import { shape, string } from 'prop-types';

export const privacyPolicyPropTypes = {
    personalData: string,
};

export const PrivacyPolicyPropType = shape(privacyPolicyPropTypes);
