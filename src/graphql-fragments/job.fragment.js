import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const JobFragment = graphql`
    fragment JobFragment on RecruiteeOffer {
        position
        title
        subtitle
        salary
        tags
        description
        requirements
        department
    }
`;
