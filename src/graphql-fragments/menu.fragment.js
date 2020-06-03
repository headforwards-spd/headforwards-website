import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const MenuFragment = graphql`
    fragment MenuFragment on DataYaml {
        menu {
            linkText
            page {
                fields {
                    link
                }
                frontmatter {
                    uuid
                }
            }
            children {
                linkText
                page {
                    fields {
                        link
                    }
                    frontmatter {
                        uuid
                    }
                }
                children {
                    linkText
                    page {
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
