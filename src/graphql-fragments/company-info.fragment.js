import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const CompanyInfoFragment = graphql`
    fragment CompanyInfoFragment on DataYaml {
        companyName
        email
        phone
        address
        facebookURL
        instagramURL
        linkedInURL
        youtubeURL
        twitterURL
        registeredAddress
        callToAction
    }
`;
