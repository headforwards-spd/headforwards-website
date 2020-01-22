import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const JobFragment = graphql`
    fragment JobFragment on RecruiteeOffer {
        title
        subtitle
        salary
        description
        requirements
        careers_apply_url
        tags
        position
        education_code
        experience_code
        employment_type_code
        category_code
        department
        created(fromNow: true)
    }
`;
