import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const MenuFragment = graphql`
    fragment MenuFragment on DataYaml {
        menu {
            id
            linkText
            link
            children {
                id
                linkText
                link
                children {
                    id
                    linkText
                    link
                }
            }
        }
    }
`;
