import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const MenuFragment = graphql`
    fragment MenuFragment on DataYaml {
        menu {
            linkText
            link {
                fields {
                    link
                }
                frontmatter {
                    uuid
                }
            }
            children {
                linkText
                link {
                    fields {
                        link
                    }
                    frontmatter {
                        uuid
                    }
                }
                children {
                    linkText
                    link {
                        fields {
                            link
                        }
                        frontmatter {
                            uuid
                        }
                    }
                }
            }
        }
    }
`;
