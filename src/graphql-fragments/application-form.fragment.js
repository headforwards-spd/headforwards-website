import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const ApplicationFormFragment = graphql`
    fragment ApplicationFormFragment on RecruiteeOffer {
        path
        open_questions {
            body
            id
            kind
            required
            open_question_options {
                body
                id
            }
        }
        options_cover_letter
        options_cv
        options_phone
        options_photo
        salary
        subtitle
        title
        tags
    }
`;
